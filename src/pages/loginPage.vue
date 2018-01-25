<template>
	<f7-page style="background-color:#ffffff;">
     
		<!-- <f7-navbar navbar-through back-link="Back"></f7-navbar> -->
		<div style="width:300px;margin:40px auto;">
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
						
								<f7-button>Login</f7-button>
								<br>
								<f7-button href="/signup/">SignUp</f7-button>
							
				
						</div>
	</f7-page>
</template>
<script>
import { productsRef } from "../config/firebase";
export default {
  data() {
    return {};
  }
};
</script>
	<style scoped="">

</style>