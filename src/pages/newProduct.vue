<template>
	<f7-page style="background-color:#ffffff;">
        <f7-navbar title="New Product" back-link="Back" sliding>
        </f7-navbar>

	<f7-block style="margin-top:50px;">
        <h1>Add a new Product</h1>
	<div class="tab" id="addProduct">
                    <div class="block">
                            <f7-list style="list-style: none;">
                                <form id="form" @submit.prevent="createProduct">
                                    <f7-list-item>
                                        <f7-label>Name</f7-label>
                                        <f7-input name="name" placeholder="Name" type="text" id="name" v-model="name"></f7-input>
                                    </f7-list-item>
                                    <f7-list-item>
                                        <f7-label>Product Description</f7-label>
                                        <f7-input name="productDescription" placeholder="Description" type="text" id="productDescription" v-model="productDescription"></f7-input>
                                    </f7-list-item>
                                    <f7-list-item>
                                        <f7-label>Item Description</f7-label>
                                        <f7-input name="itemDescription" placeholder="Item Description" type="text" id="itemDescription" v-model="itemDescription"></f7-input>
                                    </f7-list-item>
                                    <f7-list-item>
                                        <f7-label>Intensity</f7-label>
                                        <f7-input name="intensity" placeholder="Intensity" type="text" id="intensity" v-model="intensity"></f7-input>
                                    </f7-list-item>
                                    
                                    <f7-list-item>
                                        <f7-label>Image Url</f7-label>
                                        <f7-input name="imageUrl" placeholder="Image Url" type="text" id="imageUrl" v-model="imageUrl"></f7-input>
                                    </f7-list-item>
                                    <f7-list-item>
                                        <f7-label>Price</f7-label>
                                        <f7-input name="price" placeholder="Price" type="text" id="price" v-model="price"></f7-input>
                                    </f7-list-item>
                                <button class="button" style="margin: 29px auto;width: 200px;" type="submit">Add Product</button>
                                </form>
                            </f7-list>
                    </div>
				</div>
	</f7-block>

<!-- <div class="page page-current page-with-subnavbar">
		<div class="page-content subnav-page-content">
			<div class="tabs">
				<div class="tab tab-active active" id="tab1">
					<div class="block">
                        <f7-list>
                            <f7-list-item v-for="product in products" v-bind:key="product['.key']" :link="'/productdetails/' + product.id" :title="product.name">
                                 <div>
                                <f7-button style="width:auto; float:left; margin-right:10px;" class="button button-fill color-red" tab-link="">Delete</f7-button>
                                <f7-button style="width:auto; float:left; margin-right:10px;" class="button button-fill color-blue" tab-link="#view">View</f7-button>
                                 </div>
                            </f7-list-item>
                        </f7-list>
                    </div>
				</div> -->
				<!-- <div class="tab" id="addProduct">
                    <div class="block">
                            <f7-list style="list-style: none;">
                                <form id="form" @submit.prevent="createProduct">
                                    <f7-list-item>
                                        <f7-label>Name</f7-label>
                                        <f7-input name="name" placeholder="Name" type="text" id="name" v-model="name"></f7-input>
                                    </f7-list-item>
                                    <f7-list-item>
                                        <f7-label>Product Description</f7-label>
                                        <f7-input name="productDescription" placeholder="Description" type="text" id="productDescription" v-model="productDescription"></f7-input>
                                    </f7-list-item>
                                    <f7-list-item>
                                        <f7-label>Item Description</f7-label>
                                        <f7-input name="itemDescription" placeholder="Item Description" type="text" id="itemDescription" v-model="itemDescription"></f7-input>
                                    </f7-list-item>
                                    <f7-list-item>
                                        <f7-label>Intensity</f7-label>
                                        <f7-input name="intensity" placeholder="Intensity" type="text" id="intensity" v-model="intensity"></f7-input>
                                    </f7-list-item>
                                    
                                    <f7-list-item>
                                        <f7-label>Image Url</f7-label>
                                        <f7-input name="imageUrl" placeholder="Image Url" type="text" id="imageUrl" v-model="imageUrl"></f7-input>
                                    </f7-list-item>
                                    <f7-list-item>
                                        <f7-label>Price</f7-label>
                                        <f7-input name="price" placeholder="Price" type="text" id="price" v-model="price"></f7-input>
                                    </f7-list-item>
                                <button class="button" style="margin: 29px auto;width: 200px;" type="submit">Add Product</button>
                                </form>
                            </f7-list>
                    </div>
				</div> -->
				<!-- <div class="tab" :id="#edit">
					<div class="block">
					<f7-list style="list-style: none;">
                                <form id="editform"  @submit.prevent="createProduct">
                                    <f7-list-item>
                                        <f7-label>Name</f7-label>
                                        <f7-input name="name" type="text" id="editname" v-model="editname"></f7-input>
                                    </f7-list-item>
                                    <f7-list-item>
                                        <f7-label>Product Description</f7-label>
                                        <f7-input name="productDescription" placeholder="Description" type="text" id="editproductDescription" v-bind="productDescription" :value="productDescription" ></f7-input>
                                    </f7-list-item>
                                    <f7-list-item>
                                        <f7-label>Item Description</f7-label>
                                        <f7-input name="itemDescription" placeholder="Item Description" type="text" id="edititemDescription" v-bind="itemDescription"></f7-input>
                                    </f7-list-item>
                                    <f7-list-item>
                                        <f7-label>Intensity</f7-label>
                                        <f7-input name="intensity" placeholder="Intensity" type="text" id="editintensity" v-bind="intensity"></f7-input>
                                    </f7-list-item>
                                    <f7-list-item>
                                        <f7-label>Image Url</f7-label>
                                        <f7-input name="imageUrl" placeholder="Image Url" type="text" id="editimageUrl" v-bind="imageUrl"></f7-input>
                                    </f7-list-item>
                                    <f7-list-item>
                                        <f7-label>Price</f7-label>
                                        <f7-input name="price" placeholder="Price" type="text" id="editprice" v-bind="price"></f7-input>
                                    </f7-list-item>
                                <button class="button" style="margin: 29px auto;width: 200px;" type="submit">Add Product</button>
                                </form>
                            </f7-list>
					</div>
				</div> -->
			<!-- </div>
		</div>
	</div>		 -->
        
        

</f7-page>
</template>
<script>
export default {
  data() {
    return {
    name:"",
    productDescription:"",
    itemDescription:"",
    intensity:"",
    imageUrl:"",
    price:"",
    };
  },
  computed:{
		user(){
			return this.$store.getters.user
        }
	},
  methods:{
      createProduct(){
           this.$store.dispatch('createProduct',{name:this.name,productDescription:this.productDescription,itemDescription:this.itemDescription,intensity:this.intensity,imageUrl:this.imageUrl,price:this.price})
      }
  }
};
</script>
	<style scoped="">


</style>
