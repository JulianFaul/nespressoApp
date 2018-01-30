<template>

		<f7-list-item class="popup-link" >
			<f7-col>
				<f7-card>
					<f7-link :href="'/productdetails/' + product.id">
					<f7-card-content style="width: 150px;margin: 0 auto;"><img style="width: 100%;" :src="product.imageUrl"></f7-card-content>
					</f7-link>
						<f7-card-footer>
							<span>{{product.name}}</span>
							<span>{{product.id}}</span>
                            {{userLiked}}
						</f7-card-footer>
				</f7-card>
			</f7-col>
			</f7-list-item>
	

</template>


<script>

export default {
props:['productId','product'],
  data() {
    return {
		
		};
	},
    computed:{
    userLiked(){

			if(this.$store.getters.user){
				return this.$store.getters.user.favoriteProducts.findIndex(productId => {
				return productId === this.productId
			}) >= 0
			}
          
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
