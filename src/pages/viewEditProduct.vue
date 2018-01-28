<template>

	<f7-page style="background-color:#ffffff;">
		<f7-navbar :title="product.name + ' Edit'" back-link="Back" sliding></f7-navbar>
		<f7-block style="">
			<div style="padding-top:20px; width: 250px;margin: 0 auto;"><img :src="product.imageUrl"></div>
            <small>Intensity: {{product.intensity}}</small>
			<h4>{{product.name}}</h4>
			<p>{{product.productDescription}}</p>
			<p>{{product.itemDescription}}</p>
			<p>R {{product.price}}</p>
			<div style="float:right;">
            <f7-button style="width:auto; float:left; margin-right:10px;" class="button button-fill color-red" tab-link="">Delete</f7-button>
            <f7-button :href="'/editProduct/' + product.id" style="width:auto; float:left; margin-right:10px;" class="button button-fill color-blue">Edit</f7-button>
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
