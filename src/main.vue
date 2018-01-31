<template>
	<!-- App -->
	<div id="app">
		
		<!-- Statusbar -->
		<f7-statusbar></f7-statusbar>
		
		<!-- Left Panel -->
		<!-- <f7-panel left reveal layout="dark">
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
		</f7-panel> -->
		
		<!-- Right Panel -->
		<f7-panel right cover layout="dark">
			<f7-view id="right-panel-view" navbar-through :dynamic-navbar="true">
				<f7-navbar title="Right Panel" sliding></f7-navbar>
				<f7-pages>
					<f7-page>
						<f7-block-title></f7-block-title>
						<f7-list>
							<f7-list-item v-if="!isUserSignedIn" link="/login/" title="login" link-view="#main-view" link-close-panel></f7-list-item>
							<f7-list-item v-if="!isUserSignedIn" link="/signup/" title="signup" link-view="#main-view" link-close-panel></f7-list-item>
							<f7-list-item v-if="isUserSignedIn" link="/profile/" title="profile" link-view="#main-view" link-close-panel></f7-list-item>
							<f7-list-item v-if="isAdmin && isUserSignedIn" link="/admin/" title="Admin" link-view="#main-view" link-close-panel></f7-list-item>
						
							 <button  v-if="isUserSignedIn" @click="onLogout" class="button" style="margin: 29px auto;width: 200px;" link-close-panel type="submit">Logout</button>
						</f7-list>
					</f7-page>
				</f7-pages>
			</f7-view>
		</f7-panel>
		
		<!-- Main Views -->
		<f7-views>
			
			<f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
				<!-- Navbar -->
				<f7-navbar layout="dark" style="color:#ffffff;">
					<!-- <f7-nav-left>
						<f7-link icon="icon-bars white" open-panel="left"></f7-link>
					</f7-nav-left> -->
					<f7-nav-center sliding><img style="width:150px;" src="./assets/images/logo.png"/></f7-nav-center>
					<f7-nav-right>
						<f7-link icon="icon-bars" open-panel="right"></f7-link>
					</f7-nav-right>
				</f7-navbar>
				<!-- Pages -->
				<f7-pages>
					<f7-page name="home-page">
						<div v-if="loading">
		<div style="background: rgba(202, 202, 202, 0.44);width: 100%;height: 100%;position: absolute;margin: 0 auto;top: 0px;left: 0px;">
      		<div class="preloader color-black" style="width: 50px;height: 50px;top: 50%;position: absolute;left: 0;right: 0;margin: 0 auto;"></div>
		</div>
	</div>
						<products-list></products-list>
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
	export default {
  data() {
    return {};
  },
  components:{
	  "products-list": products
  },
  computed:{
	  loading(){
			return this.$store.getters.loading
		},
	  isUserSignedIn(){
		  return this.$store.getters.user !== null && this.$store.getters.user !== undefined
	  },
	  isAdmin(){
		  return this.$store.getters.isAdmin
	  }
  },
  methods:{
	  onLogout(){
		  this.$store.dispatch('logout')
	  }
  }
};
</script>
<style>
.navbar-fixed .page-content, .navbar-through .page-content{
	padding-top: 10px;
}
</style>
