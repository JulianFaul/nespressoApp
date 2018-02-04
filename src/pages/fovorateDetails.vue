<template>

	<f7-page style="background-color:#ffffff;">
     
		<f7-navbar title="favDetails" back-link="Back" sliding></f7-navbar>
			<f7-block  style="">
			<div style="padding-top:20px; width: 250px;margin: 0 auto;"><img :src="favorateProduct.imageUrl"></div>
            <small>Intensity: {{favorateProduct.intensity}}</small>
			<h4>{{favorateProduct.name}}</h4>
			<p>{{favorateProduct.productDescription}}</p>
			<p>{{favorateProduct.itemDescription}}</p>
			<p>R {{favorateProduct.price}}</p>
            <p>Rating {{favorateProduct.rating}}</p>
    
        <p>NewRate : {{value}}</p>
            <form class="rating" style="margin-top:15px;">
                <label>
                <input type="radio" :checked="favorateProduct.rating == '1'" name="stars" value="1" />
                    <span class="icon">★</span>
                </label>
                <label>
                    <input type="radio"  :checked="favorateProduct.rating == '2'" name="stars" value="2"/>
                    <span class="icon">★</span>
                    <span class="icon">★</span>
                </label>
                <label>
                    <input type="radio"  :checked="favorateProduct.rating == '3'" name="stars" value="3" />
                    <span class="icon">★</span>
                    <span class="icon">★</span>
                    <span class="icon">★</span>  
                    
                </label>
                <label>
                    <input type="radio"  :checked="favorateProduct.rating == '4'" name="stars" value="4" />
                    <span class="icon">★</span>
                    <span class="icon">★</span>
                    <span class="icon">★</span>
                    <span class="icon">★</span>
                </label>
                <label>
                    <input type="radio"  :checked="favorateProduct.rating == '5'" name="stars"  value="5"/>
                    <span class="icon">★</span>
                    <span class="icon">★</span>
                    <span class="icon">★</span>
                    <span class="icon">★</span>
                    <span class="icon">★</span>
                </label>
        </form>
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
