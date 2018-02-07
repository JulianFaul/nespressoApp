<template>

	<f7-page style="background-color:#ffffff;">
     
		<!-- <f7-navbar title="favDetails" back-link="Back" sliding></f7-navbar> -->
			<f7-block  style="">
			<div style="padding-top:20px; width: 250px;margin: 0 auto;"><img :src="favorateProduct.imageUrl"></div>
            
            <star-rating :star-size="20" :rating="favorateProduct.rating" :show-rating="false" @rating-selected ="setRating"></star-rating>
            <small>Intensity: {{favorateProduct.intensity}}</small>
			<h4>{{favorateProduct.name}}</h4>
			<p>{{favorateProduct.productDescription}}</p>
			<p>{{favorateProduct.itemDescription}}</p>
			<p>R {{favorateProduct.price}}</p>
         
            <div class="card-footer">
							<div >
									<!-- <button @click="action" class="button"  type="submit">{{ userLiked ? 'Unregister' : 'Register' }}</button> -->
							
                <button v-if="!userLiked" @click="likeProduct(favorateProduct.id)" class="button"  type="submit">Like</button>
								<button v-else @click="unlikeProduct(favorateProduct.id)" class="button"  type="submit">Unlike</button>
                <!-- <a href="#" class="link">Comment</a> -->
               
								</div>
								 <a href="#" class="link">Share</a>
            </div>
		</f7-block>
	</f7-page>
	

</template>

<script>
export default {
  data() {
    return {
      checked: false,
      rating:null
		};
    },
	props:['favorateProductId'],

  computed:{
		favorateProduct(){
			return this.$store.getters.favorateProduct(this.favorateProductId)
		},
		userLiked(){
			if(this.$store.getters.user){
				return this.$store.getters.user.favoriteProducts.findIndex(favorateProductId => {
				return favorateProductId === this.favorateProductId
			}) >= 0
			}
		}
	},
	methods:{
        setRating: function(rating){
      		this.rating= rating;
        },
		likeProduct(productId){
			this.$store.dispatch('favoriteProduct',productId)
			this.$store.dispatch('fetchUserFavProducts')
		},
		unlikeProduct(productId){
			this.$store.dispatch('clearUserFavProducts',productId)
			this.$store.dispatch('unfavorateProduct',productId)
		}
			
	}
};
</script>

<style scoped>
	.popup-link{
		width: 100%;
	}
    .vue-star-rating{

    }

</style>
