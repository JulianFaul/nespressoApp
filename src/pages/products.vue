<template>
<div>
	<f7-block v-if="!loading">
	
<div class="list no-hairlines-md">
  <ul>
    <li>
      <div class="item-content item-input">
        <div class="item-inner">
          <div class="item-input-wrap">
            <input type="text" placeholder="Your iOS device" readonly="readonly" id="demo-picker-device"/>
          </div>
        </div>
      </div>
    </li>
  </ul>
</div>
 
		<f7-grid v-for="product in products" v-bind:key="product['.key']">
		<product :product="product" :productId="product.id"></product>
		<likePopup :product="product"></likePopup>
		<sharepopup :product="product"></sharepopup>
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
