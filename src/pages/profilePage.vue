<template>
    <f7-page style="background-color:#ffffff;">
				<f7-navbar layout="dark" back-link="Back" sliding style="color:#ffffff;">
					<!-- <f7-nav-left>
						<f7-link icon="icon-bars white" open-panel="left"></f7-link>
					</f7-nav-left> -->
					<f7-nav-center sliding><img style="width:150px;" src="../assets/images/logo.png"/></f7-nav-center>
					<f7-nav-right>
						<f7-link icon="icon-bars" open-panel="right"></f7-link>
					</f7-nav-right>
				</f7-navbar>
		<f7-block-title>{{user}}</f7-block-title>
		<!-- <f7-list form>
			<f7-list-item>
				<f7-label>Name</f7-label>
				<f7-input type="text" placeholder="Name"></f7-input>
			</f7-list-item>
			<f7-list-item>
				<f7-label>Password</f7-label>
				<f7-input type="password" placeholder="Password"></f7-input>
			</f7-list-item>
			<f7-list-item>
				<f7-label>E-mail</f7-label>
				<f7-input type="email" placeholder="E-mail"></f7-input>
			</f7-list-item>
			<f7-list-item>
				<f7-label>URL</f7-label>
				<f7-input type="url" placeholder="URL"></f7-input>
			</f7-list-item>
			<f7-list-item>
				<f7-label>Phone</f7-label>
				<f7-input type="tel" placeholder="Phone"></f7-input>
			</f7-list-item>
			<f7-list-item>
				<f7-label>Birth date</f7-label>
				<f7-input type="date" placeholder="Birth date" value="2014-04-30"></f7-input>
			</f7-list-item>
			<f7-list-item>
				<f7-label>Date time</f7-label>
				<f7-input type="datetime-local"></f7-input>
			</f7-list-item>
			<f7-list-item>
				<f7-label>Gender</f7-label>
				<f7-input type="select">
					<option value="1">Male</option>
					<option value="1">Female</option>
				</f7-input>
			</f7-list-item>
			<f7-list-item>
				<f7-label>Switch</f7-label>
				<f7-input type="switch"></f7-input>
			</f7-list-item>
			<f7-list-item>
				<f7-label>Range</f7-label>
				<f7-input type="range" min="0" max="100" step="1" value="90"></f7-input>
			</f7-list-item>
			<f7-list-item>
				<f7-label>Textarea</f7-label>
				<f7-input type="textarea" placeholder="Textarea"></f7-input>
			</f7-list-item>
		</f7-list> -->
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
		}
	}
};
</script>

<style scoped>

</style>
