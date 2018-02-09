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
                                        <f7-label>Range</f7-label>
                                        <f7-input name="range" placeholder="Range Name" type="text" id="range" v-model="range"></f7-input>
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
                                        <f7-label>Cup Size</f7-label>
                                        <div style="width: 100%;">
                                
        <input type="checkbox" id="ristretto" value="Ristretto" v-model="checkedCups">
        <label for="Ristretto">Ristretto</label>
        <input type="checkbox" id="espresso" value="Espresso" v-model="checkedCups">
        <label for="Espresso">Espresso</label>
        <input type="checkbox" id="lungo" value="Lungo" v-model="checkedCups">
        <label for="Lungo">Lungo</label>
        <input type="checkbox" id="milk" value="Milk" v-model="checkedCups">
        <label for="Milk">Milk</label>
                                        </div>
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
    range:"",
    checkedCups:[]
    };
  },
  computed:{
		user(){
			return this.$store.getters.user
        }
	},
  methods:{
      createProduct(){
           this.$store.dispatch('createProduct',{name:this.name,productDescription:this.productDescription,itemDescription:this.itemDescription,intensity:this.intensity,imageUrl:this.imageUrl,price:this.price,range:this.range,cups:this.checkedCups})
      }
  }
};
</script>
	<style scoped="">


</style>
