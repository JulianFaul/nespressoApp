<template>

		<f7-list-item class="popup-link" >
			<f7-col>
				<f7-card>
					<f7-link :href="'/productdetails/' + product.id">
					<f7-card-content style="width: 150px;margin: 0 auto;"><img style="width: 100%;" :src="product.imageUrl"></f7-card-content>
					</f7-link>
						<f7-card-footer>
							<span>{{product.name}}</span>
						<div v-if="isUserSignedIn">
						    <button v-if="!userLiked" @click="likeProduct(product.id)" class="button"  type="submit">Like</button>
							<button v-else @click="unlikeProduct(product.id)" class="button"  type="submit">Unlike</button>
						</div>
						</f7-card-footer>
				</f7-card>
			</f7-col>
			</f7-list-item>
	

</template>


<script>

export default {
props:['productId','product'],
  data() {
    return {
		
		};
	},
    computed:{
    userLiked(){
			if(this.$store.getters.user){
				return this.$store.getters.user.favoriteProducts.findIndex(productId => {
				return productId === this.productId
			}) >= 0
			}
          
	},
	isUserSignedIn(){
		  return this.$store.getters.user !== null && this.$store.getters.user !== undefined
	  },
	},
	methods:{
		likeProduct(productId){
			this.$store.dispatch('favoriteProduct',productId)
			this.$store.dispatch('fetchUserFavProducts')
		},
		unlikeProduct(productId){
			this.$store.dispatch('unfavorateProduct',productId)
			this.$store.dispatch('fetchUserFavProducts')
		}
	}
};
</script>

<style scoped>
	.popup-link{
		width: 100%;
	}
	li{
		list-style-type: none;
	}
</style>
