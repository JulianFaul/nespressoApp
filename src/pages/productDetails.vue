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
                <button v-if="!userLiked" @click="likeProduct" class="button"  type="submit">Like</button>
								<button v-else @click="unlikeProduct" class="button"  type="submit">Unlike</button>
                <!-- <a href="#" class="link">Comment</a> -->
               
								</div>
								 <a href="#" class="link">Share</a>
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
		likeProduct(){
			console.log(this.productId)
			this.$store.dispatch('favoriteProduct',this.productId)
		},
		unlikeProduct(){
			console.log(this.productId)
			this.$store.dispatch('unfavorateProduct',this.productId)
		}
			
	}
};
</script>

<style scoped>
	.popup-link{
		width: 100%;
	}

</style>
