import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
import { error } from 'util';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        loadedProducts: [],
        favProductDetails:[],
        user: null,
        loading: false,
        error: null,
        isAdmin: false
    },
// -----------------------------------MUTATIONS-----------------------------------------
    mutations: {
        favoriteProductnow(state, payload) {
            const id = payload.id
            console.log(id)
            if (state.user.favoriteProducts.findIndex(product => product.id === id) >= 0) {
                return
            }
            state.user.favoriteProducts.push(id)
            state.user.fbKeys[id] = payload.fbKey
          
        },
// ----------------------------------------------------------------------------
        unfavorateProduct(state, payload) {
            const favoriteProducts = state.user.favoriteProducts
            for (var i = 0; i < favoriteProducts.length; i++)
          
            if (favoriteProducts[i] === payload) {
             favoriteProducts.splice(i, 1)
                break;
            }
            Reflect.deleteProperty(state.user.fbKeys, payload)
        },
// ----------------------------------------------------------------------------
        setUser(state, payload) {
            state.user = payload
        },
// ----------------------------------------------------------------------------
        setLoading(state, payload) {
            state.loading = payload
        },
// ----------------------------------------------------------------------------
        setError(state, payload) {
            state.error = payload
        },
// ----------------------------------------------------------------------------
        clearError(state) {
            state.error = null
        },
// ----------------------------------------------------------------------------
        setAdmin(state, payload) {
            state.isAdmin = payload
        },
// ----------------------------------------------------------------------------
        createProduct(state, payload) {
            state.loadedProducts.push(payload)
        },
// ----------------------------------------------------------------------------
        setLoadedProducts(state, payload) {
            state.loadedProducts = payload
        },

        setFavProductDetails(state,payload){
            state.favProductDetails = payload
        },
        
        updateProduct(state, payload) {
            const product = state.loadedProducts.find(product => {
                return product.id === payload.id
            })
            product.name = payload.name
            product.productDescription = payload.productDescription
            product.itemDescription = payload.itemDescription
            product.intensity = payload.intensity
            product.imageUrl = payload.imageUrl
            product.price = payload.price
        }
    },

// -----------------------------------ACTIONS-----------------------------------------
    actions: {
        favoriteProduct({ commit, getters }, payload) {
            const user = getters.user
         
            firebase.database().ref('/users/' + user.id).child('/favorateProducts/')
                .push({
                    id :payload.productId,
                    rating: payload.rating
                })
                .then(data => {
                    commit('favoriteProductnow', { id: payload.productId, fbKey: data.key})
                })
                .catch(error => {
                    console.log(error)
                })
        },
// ----------------------------------------------------------------------------
        unfavorateProduct({ commit, getters }, payload) {
            const user = getters.user
            if (!user.fbKeys) {
                return
            }
            const fbKey = user.fbKeys[payload]
            firebase.database().ref('/users/' + user.id + '/favorateProducts/').child(fbKey)
                .remove()
                .then(() => {
                    commit('unfavorateProduct', payload)
                })
                .catch(error => {
                    console.log(error)
                })
        },
// ----------------------------------------------------------------------------
        logout({ commit }) {
            firebase.auth().signOut()
            commit('setUser', null)
        },
// ----------------------------------------------------------------------------
        autoSignIn({ commit, getters }, payload) {
            firebase.database().ref('users').once('value').then(
                (data) => {
                    const obj = data.val()
                    for (let key in obj) {
                        if(key === getters.user.id){
                            if (obj[key].isAdmin === true) {
                                commit("setAdmin", true)
                            } else {
                                commit("setAdmin", false)
                            }
                        }
                    }
                })
            commit('setUser', {
                id: payload.uid,
                fbKeys: {},
                favoriteProducts: []
            })
        },
// ----------------------------------------------------------------------------
        upadteProduct({ commit }, payload) {
            const updateObj = {}
            updateObj.name = payload.name
            updateObj.productDescription = payload.productDescription
            updateObj.itemDescription = payload.itemDescription
            updateObj.intensity = payload.intensity
            updateObj.imageUrl = payload.imageUrl
            updateObj.price = payload.price
            updateObj.range = payload.range

            firebase.database().ref('products').child(payload.id).update(updateObj)
                .then(
                () => {
                    commit('updateProduct', payload)
                }
                )
                .catch(error => {
                    console.log(error)
                })
        },
// ----------------------------------------------------------------------------
        loadProducts({ commit }) {
            commit('setLoading', true)
            firebase.database().ref('products').once('value')
                .then(
                (data) => {
                    const products = []
                    const cups = []
                    const obj = data.val()
                    for (let key in obj) {
                        products.push({
                            id: key,
                            name: obj[key].name,
                            productDescription: obj[key].productDescription,
                            itemDescription: obj[key].itemDescription,
                            intensity: obj[key].intensity,
                            imageUrl: obj[key].imageUrl,
                            price: obj[key].price,
                            range: obj[key].range,
                            cupSize: obj[key].cupSize
                        })
                    }
                   console.log(products)
                    commit('setLoadedProducts', products)
                    commit('setLoading', false)
                })
                .catch(
                (error) => {
                    console.log(data)
                    commit('setLoading', true)
                })
        },
// ----------------------------------------------------------------------------
        createProduct({ commit }, payload) {
            const product = {
                name: payload.name,
                productDescription: payload.productDescription,
                itemDescription: payload.itemDescription,
                intensity: payload.intensity,
                imageUrl: payload.imageUrl,
                price: payload.price,
                range: payload.range,
                cupSize: payload.cups
            }
            firebase.database().ref('products').push(product).then(
                (data) => {
                    console.log(data)
                    commit('createProduct', product)
                })
                .catch(
                    error => {
                        console.log(error)
                })
        },
// ----------------------------------------------------------------------------
        signUserUp({ commit }, payload) {
            commit('setLoading', true)
            commit('clearError')

            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then(
                user => {
                    commit('setLoading', false)
                    const newUser = {
                        id: user.uid,
                        name: payload.name,
                        email: payload.email,
                        fbKeys: {},
                        favoriteProducts: []
                    }

                    firebase.database().ref('/users/' + user.uid).set({
                        name: newUser.name,
                        email: newUser.email
                    }).then(

                    ).catch(
                        error => {
                            console.log(error)
                        })
                    commit("setUser", newUser)
                }
            )
            .catch(
                error => {
                    commit('setLoading', false)
                    commit('setError', error)
                    console.log(error)
                })
        },

// ----------------------------------------------------------------------------
clearUserFavProducts({commit,getters}, payload){
    let favProductDetails = getters.favProductDetails
    favProductDetails.splice(favProductDetails.findIndex(favproduct => favproduct.id === payload), 1)
    commit('setFavProductDetails', favProductDetails)
},
    fetchUserFavProducts({commit, getters}){
            const userId = getters.user.id
            let favProductDetails = []
            let favProductIds = []
            let rating = null
            firebase.database().ref('/users/' + userId + '/favorateProducts/').once('value')
            .then(data=>{
                const values = data.val()
                
                for(let key in values){
                    favProductIds.push({
                        id:values[key].id,
                        rating : values[key].rating
                    })
                }
                for(let favProductId in favProductIds){
                    firebase.database().ref('/products/' + favProductIds[favProductId].id).once('value')
                    .then(data=>{
                        favProductDetails.push({
                            rating:favProductIds[favProductId].rating,
                            id:favProductIds[favProductId].id,
                            name: data.val().name,
                            productDescription: data.val().productDescription,
                            itemDescription: data.val().itemDescription,
                            intensity: data.val().intensity,
                            imageUrl: data.val().imageUrl,
                            price: data.val().price,
                            range: data.val().range
                        })
                    })
                }
                commit('setFavProductDetails', favProductDetails)
            })
        },


             // firebase.database().ref('/products/' + favProductId).once('value')
                    // .then(data=>{
                    //     const obj = data.val()
                    //     for (let key in obj) {
                    //         favProductDetails.push({
                    //             // id: key,
                    //             name: obj.name,
                    //             productDescription: obj.productDescription,
                    //             itemDescription: obj.itemDescription,
                    //             intensity: obj.intensity,
                    //             imageUrl: obj.imageUrl,
                    //             price: obj.price
                    //         })
                    //     }
                       
                    // })
// ----------------------------------------------------------------------------
        fetchUserData({commit, getters}, payload){
            commit('setLoading', true)
            const userId = getters.user.id
            firebase.database().ref('/users/' + userId).once('value')
            .then(data=>{
                    const values = data.val()
                    let favoriteProducts = []
                    let swappedPairs = {}
                    for(let key in values.favorateProducts){
                        favoriteProducts.push(values.favorateProducts[key].id)
                        swappedPairs[values.favorateProducts[key].id] = key
                    }
                    const updatedUser = {
                        id : getters.user.id,
                        favoriteProducts: favoriteProducts,
                        fbKeys: swappedPairs,
                        name: values.name,
                        email: values.email
                    }
                    console.log(updatedUser)
                    commit('setLoading', false)
                    commit('setUser', updatedUser)
            })
            .catch(error =>{
                console.log(error)
                commit('setLoading', false)
            })
            
        },
// ----------------------------------------------------------------------------
        logUserIn({ commit }, payload) {
            // this.$store.getters.user !== null && this.$store.getters.user !== undefined
            commit('setLoading', true)
            commit('clearError')
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then(user => {
                    commit('setLoading', false)
                    const newUser = {
                        id: user.uid,
                        fbKeys: {},
                        favoriteProducts: []
                    }
                    firebase.database().ref('/users/').once('value').then(
                        (data) => {
                            const obj = data.val()
                            for (let key in obj) {
                                if(key === user.uid){
                                if (obj[key].isAdmin === true) {
                                    commit("setAdmin", true)
                                } else {
                                    commit("setAdmin", false)
                                }
                            }
                            }
                        })
                        commit("setUser", newUser)
            }
        )
                .catch(
                error => {
                    commit('setLoading', false)
                    commit('setError', error)
                    console.log(error)
                }
                )}
    },


// -----------------------------------GETTERS-----------------------------------------

    getters: {
        loadedProducts(state) {
            return state.loadedProducts
        },
        favProductDetails(state) {
            return state.favProductDetails
        },
        favorateProduct(state) {
            return (productId) => {
                return state.favProductDetails.find((product) => {
                    return product.id === productId
                })
            }
        },
        loadedProduct(state) {
            return (productId) => {
                return state.loadedProducts.find((product) => {
                    return product.id === productId
                })
            }
        },
        user(state) {
            return state.user
        },
        loading(state) {
            return state.loading
        },
        error(state) {
            return state.error
        },
        isAdmin(state) {
            return state.isAdmin
        }
    }
})