<template>

	<f7-page style="background-color:#ffffff;">
     
		<f7-navbar :title="product.name" back-link="Back" sliding></f7-navbar>
		<f7-block  style="">
			<div style="padding-top:20px; width: 250px;margin: 0 auto;"><img :src="product.imageUrl"></div>
            <small>Intensity: {{product.intensity}}</small>
			<h4>{{product.name}}</h4>
			<p>{{product.productDescription}}</p>
			<p>{{product.itemDescription}}</p>
			<p>R {{product.price}}</p>

            <div class="card-footer">
							<div v-if="isUserSignedIn">
	
									<!-- <button @click="action" class="button"  type="submit">{{ userLiked ? 'Unregister' : 'Register' }}</button> -->
								<f7-link v-if="!userLiked" :open-popup="'#favpopup' + product.id">LIKE</f7-link>
                <!-- <button v-if="!userLiked" @click="likeProduct(product.id)" class="button"  type="submit">Like</button> -->
								<button v-else @click="unlikeProduct(product.id)" class="button"  type="submit">Unlike</button>
                <!-- <a href="#" class="link">Comment</a> -->
              
								</div>
								  	<f7-link v-if="isUserSignedIn" :open-popup="'#sharepopup' + product.id">Share</f7-link>
            </div>
		</f7-block>
	</f7-page>
	

</template>

<script>
import {productsRef} from '../config/firebase'
export default {
  data() {
    return {

		};
    },
	props:['productId'],

  computed:{
		product(){
			return this.$store.getters.loadedProduct(this.productId)
		},
		isUserSignedIn(){
		  return this.$store.getters.user !== null && this.$store.getters.user !== undefined
	  },
		userLiked(){
			if(this.$store.getters.user){
				return this.$store.getters.user.favoriteProducts.findIndex(productId => {
				return productId === this.productId
			}) >= 0
			}
		}
	},
	methods:{
		likeProduct(productId){
			this.$store.dispatch('favoriteProduct',productId)
			this.$store.dispatch('fetchUserFavProducts')
		},
		unlikeProduct(productId){
			this.$store.dispatch('unfavorateProduct',productId)
			this.$store.dispatch('clearUserFavProducts',productId)
		}
			
	}
};
</script>

<style scoped>
	.popup-link{
		width: 100%;
	}

</style>
