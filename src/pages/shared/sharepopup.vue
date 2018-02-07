<template>
    <f7-popup :id="'sharepopup' + product.id" style="overflow: hidden;">
    <f7-nav-right style="text-align:right;" >
								<f7-link :close-popup="true">X</f7-link>
							</f7-nav-right>
        <p style=" position: absolute; top: -7px;left: 0;font-size: 18px; width: 100%;z-index: -1; text-align: center;">{{product.name}}</p>
     <h1>SHARE</h1>
        <f7-link :close-popup="true"  @click="likeProduct(product.id)" class="button" style="position: absolute;bottom: 10px;right: 25px;"type="submit">Like</f7-link>
    </f7-popup>
</template>

<script>
export default {
props:['product'],
  data() {
      
    return {
      rating:null
		};
	},
  	methods:{
      setRating: function(rating){
      this.rating= rating;
    },
		likeProduct(productId){
			this.$store.dispatch('favoriteProduct',{productId,rating:this.rating})
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


</style>