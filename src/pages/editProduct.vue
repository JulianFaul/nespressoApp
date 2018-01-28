<template>

	<f7-page style="background-color:#ffffff;">
        <div class="block">
            <f7-list style="list-style: none;">
                <form id="form" @submit.prevent="upadteProduct">
                    <img style="margin: 0 auto;display: block;width: 155px;margin-top: 60px;" :src="product.imageUrl">
                    <f7-list-item>
                        <f7-label>Name</f7-label>
                        <f7-input name="name" placeholder="Name" type="text" id="name" :value="product.name" v-model="product.name"></f7-input>
                    </f7-list-item>
                    <f7-list-item>
                        <f7-label>Product Description</f7-label>
                        <f7-input name="productDescription" placeholder="Description" type="text" id="productDescription" v-model="product.productDescription"></f7-input>
                    </f7-list-item>
                    <f7-list-item>
                        <f7-label>Item Description</f7-label>
                        <f7-input name="itemDescription" placeholder="Item Description" type="text" id="itemDescription" v-model="product.itemDescription"></f7-input>
                    </f7-list-item>
                    <f7-list-item>
                        <f7-label>Intensity</f7-label>
                        <f7-input name="intensity" placeholder="Intensity" type="text" id="intensity" v-model="product.intensity"></f7-input>
                    </f7-list-item>
                    
                    <f7-list-item>
                        <f7-label>Image Url</f7-label>
                        <f7-input name="imageUrl" placeholder="Image Url" type="text" id="imageUrl" v-model="product.imageUrl"></f7-input>
                    </f7-list-item>
                    <f7-list-item>
                        <f7-label>Price</f7-label>
                        <f7-input name="price" placeholder="Price" type="text" id="price" v-model="product.price"></f7-input>
                    </f7-list-item>
                    <button class="button" style="margin: 29px auto;width: 200px;" type="submit">Update Product</button>
                </form>
            </f7-list>
        </div>
	</f7-page>
	

</template>

<script>
import {productsRef} from '../config/firebase'
export default {
props:['productId'],
  data() {
    return {
        product:'',
		};
    },
    methods:{
        upadteProduct(){
            this.$store.dispatch('upadteProduct',{
            id:this.product.id,
            name: this.product.name,
            productDescription:this.product.productDescription,
            itemDescription: this.product.itemDescription,
            intensity: this.product.intensity,
            imageUrl: this.product.imageUrl,
            price: this.product.price
            })
        }
    },
	created(){
        this.product =  this.$store.getters.loadedProduct(this.productId)
  }
	
};
</script>

<style scoped>
	.popup-link{
		width: 100%;
	}

</style>
