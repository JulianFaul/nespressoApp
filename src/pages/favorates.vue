<template>
    <f7-page style="background-color:#ffffff;">
				<f7-navbar layout="dark" back-link="Back" sliding style="color:#ffffff;">
					<f7-nav-center sliding><img style="width:150px;" src="../assets/images/logo.png"/></f7-nav-center>
					<f7-nav-right>
						<f7-link icon="icon-bars" open-panel="right"></f7-link>
					</f7-nav-right>
				</f7-navbar>

				<f7-block>
        <h1>Favorate Products</h1>
				<f7-list>     
					<f7-list-item  v-for="favorateProduct in favorateProducts" v-bind:key="favorateProduct['.key']">
							<favorate :favorateProduct="favorateProduct" :favorateProductId="favorateProduct.id"></favorate>
					</f7-list-item>
				</f7-list>
	</f7-block>

    </f7-page>
</template>

<script>
import favorate from "./favorate"
export default {
  data() {
    return {
		
		};
	},
	created(){
		return this.$store.getters.favProductDetails
	},
	computed:{
		user(){
			return this.$store.getters.user
		},
		favorateProducts(){
			return this.$store.getters.favProductDetails
		}
	},
	components:{
			"favorate": favorate
		}
};
</script>

<style scoped>

</style>
