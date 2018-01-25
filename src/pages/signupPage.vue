<template>
	<f7-page style="background-color:#ffffff;">
     
		<!-- <f7-navbar navbar-through back-link="Back"></f7-navbar> -->
		<div style="margin: 40px auto;padding: 10px;max-width: 500px;">
			<f7-login-screen-title>SignUp</f7-login-screen-title>
		<f7-list style="list-style: none;">
			<form id="form" @submit.prevent="onSignUp">
							<f7-list-item>

								<f7-label>Email1 </f7-label>
									<f7-input required name="email" placeholder="Email" type="email" id="email" v-model="email"></f7-input>
							</f7-list-item>
							<f7-list-item>
								<f7-label>Password</f7-label>
									<f7-input required name="password" placeholder="Password" type="password" id="password" v-model="password"></f7-input>
							</f7-list-item>
              <f7-list-item>
								<f7-label>Confirm Password</f7-label>
									<f7-input   required name="confirmPassword" placeholder="Confirm Password" type="password" id="confirmPassword" v-model="confirmPassword"></f7-input>
              </f7-list-item>
           	<button class="button" style="margin: 29px auto;width: 200px;" type="submit">SignUp</button>
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
      password:'',
      confirmPassword:''
      
    };
  },
  computed:{
    comparePasswords(){

      // return this.password !== this.confirmPassword ? 'Passwords does not match' : ''
		},
		user(){
			return this.$store.getters.user
		}
	},
	watch:{
		user(value){
			if(value !== null && value !== undefined){
				this.$f7.getCurrentView().router.back({pageName:'home-page',animatePages: false})
			}
		}
	},
  methods:{
    onSignUp(){
			this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
    }
  }
};
</script>
	<style scoped="">

</style>