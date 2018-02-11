<template>
	<!-- App -->
	<div id="app">
		
		<!-- Statusbar -->
		<!-- <f7-statusbar></f7-statusbar> -->
		
		<!-- Left Panel -->
		<!--<f7-panel left reveal layout="dark">
			<f7-view id="left-panel-view" navbar-through :dynamic-navbar="true">
				<f7-navbar title="Left Panel"></f7-navbar>
				<f7-pages>
					<f7-page>
						<f7-block inner>
							<p>Left panel content goes here</p>
						</f7-block>
						<f7-block-title>Load page in panel</f7-block-title>
						<f7-list>
							<f7-list-item link="/about/" title="About"></f7-list-item>
							<f7-list-item link="/form/" title="Form"></f7-list-item>
						</f7-list>
						<f7-block-title>Load page in main view</f7-block-title>
						<f7-list>
							<f7-list-item link="/about/" title="About" link-view="#main-view" link-close-panel></f7-list-item>
							<f7-list-item link="/form/" title="Form" link-view="#main-view" link-close-panel></f7-list-item>
						</f7-list>
					</f7-page>
				</f7-pages>
			</f7-view>
		</f7-panel>-->
		
		<!-- Right Panel -->
		<f7-panel right cover layout="dark">
			<f7-view id="right-panel-view" >
				<f7-navbar title="Filter by:" sliding></f7-navbar>
				<f7-pages>
					<f7-page>
						<f7-block-title></f7-block-title>
						<f7-list>
							<f7-list-item>
								<select v-model="rangeSelect">
									<option value="all">Range</option>
									<option v-for="range in productRanges">{{range}}</option>
								</select>
							</f7-list-item>
							<f7-list-item>
								<select type="text" v-model="intensity">
									<option value="all">Intensity</option>
									<option v-for="filterProduct in filterList">{{filterProduct.intensity}}</option>
								</select>
							</f7-list-item>
							<f7-list-item>
								<select type="text" v-model="cupSize">
								<option value="all"> Cup Size</option>
								<option value="Espresso">Espresso</option>
								<option value="Ristretto">Ristretto</option>
								</select>
							</f7-list-item>
							<f7-button @click="clearFilters" style="width:90%; margin:20px auto; background-color:#ffffff; color:black; border:none;" v-if="startedFilter" link-view="#main-view" link-close-panel>Clear Filters</f7-button>
						</f7-list>
					</f7-page>
				</f7-pages>
			</f7-view>
		</f7-panel>
		
		<!-- Main Views -->
		<f7-views>
			
			<f7-view id="main-view"  main>
				<!-- Navbar -->
		
				<f7-navbar layout="dark" style="color:#ffffff;">

					<f7-nav-center sliding><img style="width:150px;" src="./assets/images/logo.png"/></f7-nav-center>
					<f7-nav-right>
						<f7-link open-panel="right"><i class="f7-icons size-50">filter</i></f7-link>
					</f7-nav-right>
					
				</f7-navbar>
				 <div  class="toolbar layout-dark  toolbar-bottom-md">
					<div class="toolbar-inner">
						<a class="back link" v-on:click.stop.prevent="navigate"><i class="f7-icons size-50">home</i></a>
						<a v-if="isUserSignedIn" class="link" href="/favorates/"><i class="f7-icons size-50">heart</i></a>
						<a v-if="isUserSignedIn" class="link" href="/profile/"><i class="f7-icons size-50">person</i></a>
					    <a v-else class="link" href="/login/"><i class="f7-icons size-50">login</i></a>
					</div>
				</div>
				<!-- Pages -->
				<f7-pages>
					<f7-page name="home-page">
						<div v-if="loading">
		<div style="background: rgba(202, 202, 202, 0.44);width: 100%;height: 100%;position: absolute;margin: 0 auto;top: 0px;left: 0px;">
      		<div class="preloader color-black" style="width: 50px;height: 50px;top: 50%;position: absolute;left: 0;right: 0;margin: 0 auto;"></div>
		</div>
	</div>
						<div>
	<f7-block v-if="!loading">
		


<f7-grid v-if="filterList == ''">
</f7-grid>

<f7-grid v-for="filterProduct in filterList" v-bind:key="filterProduct['.key']">
	<product :product="filterProduct" :productId="filterProduct.id"></product>
	<likePopup :product="filterProduct"></likePopup>
	<sharepopup :product="filterProduct"></sharepopup>
</f7-grid>
	
	</f7-block>


</div>
					</f7-page>	
				</f7-pages>
			</f7-view>
		</f7-views>
		

		
		<!-- Login Screen -->
		<f7-login-screen id="login-screen">
			<f7-view>
				<f7-pages>
					<f7-page login-screen>
						<f7-login-screen-title>Login</f7-login-screen-title>
						<f7-list form>
							<f7-list-item>
								<f7-label>Username</f7-label>
								<f7-input name="username" placeholder="Username" type="text"></f7-input>
							</f7-list-item>
							<f7-list-item>
								<f7-label>Password</f7-label>
								<f7-input name="password" type="password" placeholder="Password"></f7-input>
							</f7-list-item>
						</f7-list>
						<f7-list>
							<f7-list-button title="Sign In" close-login-screen></f7-list-button>
							<f7-list-label>
								<p>Click Sign In to close Login Screen</p>
							</f7-list-label>
						</f7-list>
					</f7-page>
				</f7-pages>
			</f7-view>
		</f7-login-screen>
	
	</div>
</template>

<script>
import products from "./pages/products.vue"
import product from "./pages/product.vue"
	export default {
   data() {
    return {
		rangeSelect: 'all',
		intensity: 'all',
		cupSize: 'all',
		filteredList:[]
		};
	},
  components:{
	  "products-list": products,
			"product": product

  },
    methods:{
	  navigate(){
		  this.$f7.getCurrentView().router.loadPage({pageName:'home-page',animatePages: true})
	  },
	  clearFilters(){
		this.rangeSelect = 'all';
		this.intensity = 'all';
		this.cupSize = 'all';
	  },
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
		startedFilter(){
			if(this.rangeSelect != "all" || this.cupSize != "all" || this.intensity != "all"){
				return true
			}
		},
		productRanges () {
  			return [...new Set(this.products.map(p => p.range))]
		},
		productIntensity () {
  			return [...new Set(this.filteredList.map(p => p.intensity))]
		},
	  loading(){
			return this.$store.getters.loading
		},
	  isUserSignedIn(){
		  return this.$store.getters.user !== null && this.$store.getters.user !== undefined
	  },
	  isAdmin(){
		  return this.$store.getters.isAdmin
	  }
  }

};
</script>
<style>
.navbar-fixed .page-content, .navbar-through .page-content{
	padding-top: 10px;
}
.f7-icons{
	color: #ffffff;
}
.popup {
    height: 150px !important;
    top: 29%;
    margin: 0 auto;
    width: 325px;
    left: 0;
    right: 0;
    padding: 10px;
    border-radius: 20px;
}
	.vue-star-rating {
    margin: 7px auto;
}
[data-page|="home-page"] .navbar .navbar-inner .right {
   display:block !important;
}
.navbar .navbar-inner .right{
	display:none;
}
</style>
