<template>

	<f7-block v-if="!loading">
		<f7-grid v-for="product in products" v-bind:key="product['.key']">
			<product :product="product" :productId="product.id"></product>
		<!-- <f7-list-item class="popup-link" >
			<f7-col>
				<f7-card>
					<f7-link :href="'/productdetails/' + product.id">
					<f7-card-content style="width: 150px;margin: 0 auto;"><img style="width: 100%;" :src="product.imageUrl"></f7-card-content>
					</f7-link>
						<f7-card-footer>
							<span>{{product.name}}</span>
							<span>{{product.id}}</span>
						</f7-card-footer>
				</f7-card>
			</f7-col>
			</f7-list-item> -->
		</f7-grid>
	</f7-block>

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
	methods:{
		likeProduct(productId){
			this.$store.dispatch('favoriteProduct',productId)
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
