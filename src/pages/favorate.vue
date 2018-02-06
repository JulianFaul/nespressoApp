<template>
<!-- <f7-link :href="'/fovorateDetails/' + favorateProduct.id" > -->
	<!-- <span> -->
	<li>
      <a :href="'/fovorateDetails/' + favorateProduct.id" class="item-link item-content">
        <div class="item-media"><img :src="favorateProduct.imageUrl" width="50"/></div>
        <div class="item-inner">
          <div class="item-title-row">
            <div class="item-title">{{favorateProduct.name}}</div>
          
          </div>
          <div class="item-subtitle"><star-rating id="small-stars" :read-only="true" :star-size="10" :rating="favorateProduct.rating" :show-rating="false"></star-rating></div>
          <div class="item-text">{{favorateProduct.productDescription}}</div>
        </div></a></li>
	
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
	#small-stars{
		display: inherit;
    margin-top: -10px;
    margin-bottom: -10px;
	}


</style>
