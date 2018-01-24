<template>

	<f7-page style="background-color:#ffffff;">
     
		<f7-navbar :title="product.title" back-link="Back" sliding></f7-navbar>
		<f7-block inner style="">
			<div style="padding-top:20px; width: 250px;margin: 0 auto;"><img :src="product.imageUrl"></div>
            <small>Intensity: {{product.intensity}}</small>
			<h4>{{product.title}}</h4>
			<p>{{product.description}}</p>
            <div class="card-footer">
                <a href="#" class="link">Like</a>
                <a href="#" class="link">Comment</a>
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
		}
	}
};
</script>

<style scoped>
	.popup-link{
		width: 100%;
	}

</style>
