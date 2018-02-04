<template>
<f7-link :href="'/fovorateDetails/' + favorateProduct.id" >
	<span><img style="width:50px; vertical-align:middle;" :src="favorateProduct.imageUrl"> {{favorateProduct.name}}{{favorateProduct.rating}}</span>
</f7-link>	
	
</template>


<script>

// <button v-if="!userLiked" @click="likeProduct(product.id)" class="button"  type="submit">Like</button>
// <button  @click="unlikeProduct(product.id)" class="button"  type="submit">Unlike</button>

export default {

props:['favorateProduct','favorateProductId'],
  data() {
    return {
		
		};
	},
    computed:{
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
