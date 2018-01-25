<template>

	<!-- <f7-block-title>Navigation</f7-block-title> -->
	<f7-block>
		<!-- <div>
			<input type="text" v-model="product" />
			<button @click="addProduct()">Add</button>
		</div> -->
		
		<f7-grid v-for="product in products" v-bind:key="product['.key']">
		<f7-list-item :product="product" class="popup-link" :link="'/productdetails/' + product.id">
		
			<f7-col>
				<f7-card>
					<f7-card-content style="width: 150px;margin: 0 auto;"><img style="width: 100%;" :src="product.imageUrl"></f7-card-content>
						<f7-card-footer>
							<span>{{product.title}}</span>
						</f7-card-footer>
				</f7-card>
			</f7-col>
			</f7-list-item>
		</f7-grid>
	</f7-block>


	<!-- Popup -->
		<!-- <f7-link class="popup-link" :open-popup="'#productpopup-' + product.id">
			</f7-link> -->
		<!-- <f7-popup v-for="product in products" v-bind:key="product['.key']" :id="'productpopup-' + product.id">
			<f7-view navbar-fixed>
				<f7-pages>
					<f7-page>
						<f7-navbar :title="product.title">
							<f7-nav-right>
								<f7-link :close-popup="true">Close</f7-link>
							</f7-nav-right>
						</f7-navbar>
						<f7-block>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.</f7-block>
					</f7-page>
				</f7-pages>
			</f7-view>
		</f7-popup> -->

	<!-- <f7-block-title>Side Panels</f7-block-title>
		<f7-block>
		    <f7-grid>
				<f7-col width="50">
					<f7-button open-panel="left">Left Panel</f7-button>
				</f7-col>
				<f7-col width="50">
					<f7-button open-panel="right">Right Panel</f7-button>
				</f7-col>
			</f7-grid>
		</f7-block>
	<f7-block-title>Modals</f7-block-title>
		<f7-block>
		    <f7-grid>
				<f7-col width="50">
					<f7-button open-popup="#popup">Popup</f7-button>
				</f7-col>
			    <f7-col width="50">
					<f7-button open-login-screen="#login-screen">Login Screen</f7-button>
				</f7-col>
			</f7-grid>
		</f7-block> -->

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
