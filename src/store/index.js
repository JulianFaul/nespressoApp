import Vue from 'vue'
import Vuex from 'vuex'


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
        user:{
            id: "aaaaaakkkdfkdkd",
            favoriteProducts:["2"]
        }
    },
    mutations:{

    },
    actions:{
       
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
        }
    }
})