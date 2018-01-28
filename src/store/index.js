import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
import { error } from 'util';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        loadedProducts:[],
        user:null,
        loading:false,
        error: null,
        isAdmin:false
    },
    mutations:{
        favoriteProductnow(state,payload){
            const id = payload.id.id
            if (state.user.favoriteProducts.findIndex(product => product.id === id) >= 0){
                return 
            }
            state.user.favoriteProducts.push(id)
            state.user.fbKeys[id] = payload.fbKey
        },
        unfavorateProduct(state,payload){
            const favoriteProducts = state.user.favoriteProducts
            console.log('favoriteProducts = '+ favoriteProducts)
            console.log('state.user.fbKeys = '+ state.user.fbKeys)
            favoriteProducts.splice(favoriteProducts.findIndex(product => product.id === payload),1)
            Reflect.deleteProperty(state.user.fbKeys, payload)
        },
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
        },
        createProduct(state,payload){
            state.loadedProducts.push(payload)
        },
        setLoadedProducts(state,payload){
            state.loadedProducts = payload
        },
        updateProduct(state,payload){
            const product = state.loadedProducts.find(product =>{
                return product.id === payload.id
            })
            product.name =  payload.name
           product.productDescription  = payload.productDescription
           product.itemDescription  = payload.itemDescription
           product.intensity  = payload.intensity
           product.imageUrl  = payload.imageUrl
           product.price  = payload.price
        }
    },
    actions:{
        favoriteProduct({commit, getters}, payload){
            const user = getters.user
          console.log(payload)
            firebase.database().ref('/users/'+ user.id).child('/favorateProduct/')
            .push(payload)
            .then(data =>{
                commit('favoriteProductnow', {id: payload, fbKey:data.key})
            })
            .catch(error=>{
                console.log(error)
            })
        },
        unfavorateProduct({commit, getters}, payload){
           
            const user = getters.user
            console.log( user.fbKeys[payload.id])
            if (!user.fbKeys){
                return
            }
            const fbKey = user.fbKeys[payload.id]
          
            firebase.database().ref('/users/' + user.id + '/favorateProduct/').child(fbKey)
            .remove()
            .then(()=>{
                commit('unfavorateProduct', payload)
            })
            .catch(error=>{
                console.log(error)
            })
        },
        logout({commit}){
            firebase.auth().signOut()
            commit('setUser', null)
        },
        autoSignIn({commit}, payload){
            firebase.database().ref('users').once('value').then(
                (data)=>{
                    const obj = data.val()
                    for(let key in obj){
                        if (obj[key].id === payload.uid){
                            if(obj[key].isAdmin === true){
                                commit("setAdmin",true) 
                            }else{
                                commit("setAdmin",false)
                            }
                        
                         
                        }
                }
            }
        
)

            commit('setUser',{
                id:payload.uid,
                fbKeys: {},
                favoriteProducts:[]
            })
        },
        upadteProduct({commit},payload){
            const updateObj ={}
            updateObj.name = payload.name
            updateObj.productDescription = payload.productDescription
            updateObj.itemDescription = payload.itemDescription
            updateObj.intensity = payload.intensity
            updateObj.imageUrl = payload.imageUrl
            updateObj.price = payload.price
            
            firebase.database().ref('products').child(payload.id).update(updateObj)
            .then(
                () => {
                    commit('updateProduct',payload)
                }
            )
            .catch( error=>{
                console.log(error)
            })
        },
        loadProducts({commit}){
            commit('setLoading', true)
            firebase.database().ref('products').once('value')
            .then(
                (data) => {
                    const products = []
                    const obj = data.val()
                    for (let key in obj){
                    products.push({
                        id: key,
                        name: obj[key].name,
                        productDescription: obj[key].productDescription,
                        itemDescription: obj[key].itemDescription,
                        intensity: obj[key].intensity,
                        imageUrl: obj[key].imageUrl,
                        price: obj[key].price
                    })
                    }
                    commit('setLoadedProducts', products)
                    commit('setLoading', false)
                }
            )
            .catch(
                (error) =>{
                    console.log(data)
                    commit('setLoading', true)
                }
            )
        },
        createProduct({commit},payload){
            const product = {
                name: payload.name,
                productDescription: payload.productDescription,
                itemDescription: payload.itemDescription,
                intensity: payload.intensity,
                imageUrl: payload.imageUrl,
                price: payload.price
            }
            firebase.database().ref('products').push(product).then(
                (data)=>{
                    console.log(data)
                    commit('createProduct',product)
                }
            ).catch(
                error =>{
                    console.log(error)
                }
            )
            
        },

        signUserUp({commit},payload){
            commit('setLoading', true)
            commit('clearError')

            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then(
                    user =>{
                        commit('setLoading', false)
                        const newUser ={
                            id: user.uid,
                            name: payload.name,
                            email: payload.email,
                            fbKeys: {},
                            favoriteProducts:[]
                        }
                        
                        // firebase.database().ref('/users/'+ user.uid).push(newUser).then(
                            
                        // ).catch(
                        //     error =>{
                        //         console.log(error)
                        //     }
                        // )
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
                        fbKeys: {},
                        favoriteProducts:[]
                    }
                
                        firebase.database().ref('users').once('value').then(
                            (data)=>{
                                const obj = data.val()
                                for(let key in obj){
                                    if (obj[key].id === user.uid){
                                        if(obj[key].isAdmin === true){
                                            commit("setAdmin",true) 
                                        }else{
                                            commit("setAdmin",false)
                                        }
                                    const newUser ={
                                            id: obj[key].id,
                                            name: obj[key].name,
                                            email: obj[key].email
                                        }
                                        commit("setUser",newUser)
                                    }
                            }
                        }
                    
            )
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