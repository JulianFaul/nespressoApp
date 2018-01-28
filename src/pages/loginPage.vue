<template>
	<f7-page  style="background-color:#ffffff;">

		<div  style="margin: 40px auto;padding: 10px;max-width: 500px;">
			<f7-login-screen-title>Login</f7-login-screen-title>
		<f7-list style="list-style: none;">
			<form id="form" @submit.prevent="onSignIn">
							<f7-list-item>
								<f7-label>Email</f7-label>
									<f7-input required name="email" placeholder="Email" type="email" id="email" v-model="email"></f7-input>
							</f7-list-item>
							<f7-list-item>
								<f7-label>Password</f7-label>
									<f7-input required name="password" placeholder="Password" type="password" id="password" v-model="password"></f7-input>
							</f7-list-item>
           	<button class="button" style="margin: 29px auto;width: 200px;" type="submit">Login</button>
				</form>
						</f7-list>
			</div>
	</f7-page>
</template>
<script>
import { productsRef } from "../config/firebase";
export default {
  data() {
    return {
      email:'',
      password:''
    };
  },
  computed:{
		user(){
			return this.$store.getters.user
		},
		loading(){
			return this.$store.getters.loading
		}
	},
	watch:{
		user(value){
			if(value !== null && value !== undefined){
				this.$f7.getCurrentView().router.loadPage({pageName:'home-page',animatePages: false})
			}
		}
	},
  methods:{
    onSignIn(){
			this.$store.dispatch('logUserIn', {email: this.email, password: this.password})
    }
  }
};
</script>
	<style scoped="">

</style>