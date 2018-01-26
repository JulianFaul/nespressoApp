<template>
    <f7-page style="background-color:#ffffff;">
        <div style="margin: 40px auto;padding: 10px;max-width: 500px;">
            <f7-login-screen-title>Profile</f7-login-screen-title>
            <f7-list style="list-style: none;">
                <f7-list-item>
                    <f7-label>{{user}}</f7-label>
                </f7-list-item>
            </f7-list>
		</div>
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
	.popup-link{
		width: 100%;
	}
	li{
		list-style-type: none;
	}
</style>
