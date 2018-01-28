<template>

	<f7-block v-if="!loading">
		<f7-grid v-for="product in products" v-bind:key="product['.key']">
		<f7-list-item :product="product" class="popup-link" >
		
			<f7-col>
				<f7-card>
					<f7-link :href="'/productdetails/' + product.id">
					<f7-card-content style="width: 150px;margin: 0 auto;"><img style="width: 100%;" :src="product.imageUrl"></f7-card-content>
					</f7-link>
						<f7-card-footer>
							<span>{{product.name}}</span>
							
						</f7-card-footer>
				</f7-card>
			</f7-col>
			</f7-list-item>
		</f7-grid>
	</f7-block>

</template>

<script>
import {productsRef} from '../config/firebase'
export default {
  data() {
    return {
		
		};
	},
	computed:{
		products(){
			return this.$store.getters.loadedProducts
		},
		loading(){
			return this.$store.getters.loading
		}
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
