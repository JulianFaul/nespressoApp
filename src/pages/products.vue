<template>
<div>
	<f7-block v-if="!loading">
		


<f7-grid v-if="filterList == ''">
	<h1>No results</h1>
</f7-grid>
<f7-grid v-for="filterProduct in filterList" v-bind:key="filterProduct['.key']">
	<product :product="filterProduct" :productId="filterProduct.id"></product>
	<likePopup :product="filterProduct"></likePopup>
	<sharepopup :product="filterProduct"></sharepopup>
</f7-grid>
		<f7-grid v-for="product in products" v-bind:key="product['.key']">
		
		</f7-grid>
	</f7-block>


</div>
</template>


<script>
import product from "./product"


export default {
  data() {
    return {
		rangeSelect: 'all',
		intensity: 'all',
		cupSize: 'all',
		filteredList:[]
		};
	},
	methods:{
	beautifyCups(productCups){
			
			if(productCups == undefined || productCups == ""){
				
			}else{
				return productCups.toString().toLowerCase().indexOf(this.cupSize.toLowerCase()) > -1
				
			}
			
			
		}
		
	},
	computed:{
		
		filterList(){
		
		const rangeFilter = entry => 
           (this.rangeSelect == 'all') || 
		   (entry.range === this.rangeSelect);
		   
		const intensFilter = entry => 
           (this.intensity == 'all') || 
		   (entry.intensity === this.intensity);
		   
		const cupFilter = entry =>
			(this.cupSize == 'all') ||
			(this.beautifyCups(entry.cupSize) === true);
		
		const reducer = (accumulator, entry) => {
			if (rangeFilter(entry) && intensFilter(entry) && cupFilter(entry))
			accumulator.push(entry);
			return accumulator;
		}

  			return this.filteredList.reduce(reducer, []);
		
		
		},
		user(){
			return this.$store.state.user
		},
		products(){
			return this.filteredList = this.$store.getters.loadedProducts
		},
		loading(){
			return this.$store.getters.loading
		},
		startedFilter(){
			if(this.rangeSelect != "all" || this.cupSize != "all"){
				return true
			}
		},
		productRanges () {
  			return [...new Set(this.products.map(p => p.range))]
		},
		productIntensity () {
  			return [...new Set(this.filteredList.map(p => p.intensity))]
		}
	// 	filteredItems() {
    //   return this.$store.getters.loadedProducts.filter(item => {
	// 	  if(item.cups == undefined){
	// 		  return
	// 	  }
	// 	  console.log(item.cups.toString())
    //      return item.cups.toString().toLowerCase().indexOf(this.search.toLowerCase()) > -1
    //   })
    // }
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
	option{
		color:black;
	}
</style>
