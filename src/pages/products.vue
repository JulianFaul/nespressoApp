<template>
<div>
	<f7-block v-if="!loading">
		<f7-grid v-for="product in products" v-bind:key="product['.key']">
			<product :product="product" :productId="product.id"></product>
		<likePopup :product="product"></likePopup>
		</f7-grid>
	</f7-block>

</div>
</template>


<script>
import product from "./product"
export default {
  data() {
    return {
		
		};
	},
	computed:{
		user(){
			return this.$store.state.user
		},
		products(){
			return this.$store.getters.loadedProducts
		},
		loading(){
			return this.$store.getters.loading
		}
	},
		components:{
			"product": product
		}
	// firebase:{
	// 	products : productsRef
	// },
	// methods:{
	// 	addProduct(){
	// 		productsRef.push({name: this.product})
	// 		this.product = ""
	// 	}
	// }
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
