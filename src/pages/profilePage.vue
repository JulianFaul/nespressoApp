<template>
    <f7-page style="background-color:#ffffff;">
				<!-- <f7-navbar layout="dark" back-link="Back" sliding style="color:#ffffff;">
					<f7-nav-center sliding><img style="width:150px;" src="../assets/images/logo.png"/></f7-nav-center>
					<f7-nav-right>
						<f7-link icon="icon-bars" open-panel="right"></f7-link>
					</f7-nav-right>
				</f7-navbar> -->

				<f7-block>
       
				<div>
					<div style="text-align:center; margin-top:60px;">
					<img style="width:117px;" src="https://www.sonypark360.net/wp-content/uploads/2017/08/profile-pictures.png">
					</div>
					<p><b>User name:</b> {{user.name}}</p>
					<p><b>Email:</b> {{user.email}}</p>
				</div>
				 <button  v-if="isUserSignedIn" @click="onLogout" class="button" style="margin: 29px auto;width: 200px;" link-close-panel type="submit">Logout</button>
	</f7-block>

    </f7-page>
</template>

<script>
import {productsRef} from '../config/firebase'
export default {
  data() {
    return {
		
		};
	},
	computed:{
		user(){
			return this.$store.getters.user
		},
		isUserSignedIn(){
		  return this.$store.getters.user !== null && this.$store.getters.user !== undefined
	  }
	},
	watch:{
		user(value){
			if(value !== null && value !== undefined){
				this.$f7.getCurrentView().router.loadPage({pageName:'home-page',animatePages: true})
			}
		}
	},
		methods:{
	  onLogout(){
		  this.$store.dispatch('logout')
			this.$f7.getCurrentView().router.loadPage({pageName:'home-page',animatePages: true})
		}
	}		
};
</script>

<style scoped>

</style>
