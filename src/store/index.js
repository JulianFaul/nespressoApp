import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        loadedProducts:[
            {   
                imageUrl: "https://za.buynespresso.com/media/catalog/product/cache/image/250x250/beff4985b56e3afdbeabfc89641a4582/r/i/ristretto-hd.png",
                title:"RISTRETTO",
                id:"1",
                description:"A blend of South American and East African Arabicas, with a touch of Robusta, roasted separately to create the subtle fruity note of this full-bodied, intense espresso.",
                intensity:"10/13"
            },
            {   
                imageUrl: "https://www.buynespresso.com/media/catalog/product/cache/34/image/250x250/9df78eab33525d08d6e5fb8d27136e95/a/r/arpeggio-hd.png",
                title:"ARPEGGIO",
                id:"2",
                description:"A dark roast of pure South and Central American Arabicas, Arpeggio has a strong character and intense body, enhanced by cocoa notes.",
                intensity:"9/13"
            }
        ],
        user:null,
        loading:false,
        error: null,
        isAdmin:false
    },
    mutations:{
        setUser (state,payload){
            state.user = payload
        },
        setLoading(state,payload){
            state.loading = payload
        },
        setError(state,payload){
            state.error = payload
        },
        clearError(state){
            state.error = null
        },
        setAdmin(state,payload){
            state.isAdmin = payload
        }
    },
    actions:{
        signUserUp({commit},payload){
            commit('setLoading', true)
            commit('clearError')
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            
                .then(
                    user =>{
                        commit('setLoading', false)
                        const newUser ={
                            id: user.uid,
                            favoriteProducts:[]
                        }
                        commit("setUser",newUser)
                    }
                )
                .catch(
                    error => {
                        commit('setLoading', false)
                        commit('setError', error)
                        console.log(error)
                    }
                )
        },
        logUserIn({commit},payload){
            // this.$store.getters.user !== null && this.$store.getters.user !== undefined
            commit('setLoading', true)
            commit('clearError')
            firebase.auth().signInWithEmailAndPassword(payload.email,payload.password)
                .then(user =>{
                    commit('setLoading', false)
                    const newUser ={
                        id: user.uid,
                        favoriteProducts:[]
                    }
                    firebase.database().ref('admins').once('value')
                    .then((data)=>{
                        const obj = data.val()
                        for(let key in obj){
                            if (key === user.uid){
                                console.log(obj[key].isAdmin)
                                commit("setAdmin",true)
                            }else{
                                commit("setAdmin",false)
                            }
                            
                        }
                        commit("setUser",newUser)
                    })
                   
                }
            )
                .catch(
                    error => {
                        commit('setLoading', false)
                        commit('setError', error)
                        console.log(error)
                    }
                )
        }
    },
    getters:{
        loadedProducts(state){
            return state.loadedProducts
        },
        loadedProduct(state){
            return (productId) => {
                return state.loadedProducts.find((product)=>{
                    return product.id === productId
            })
            }
        },
        user(state){
           return state.user
        },
        loading(state){
            return state.loading
        },
        error(state){
            return state.error
        },
        isAdmin(state){
            return state.isAdmin
        }
    }
})