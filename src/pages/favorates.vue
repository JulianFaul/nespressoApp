<template>
    <f7-page style="background-color:#ffffff;">
	<f7-block>
        <h1 style="margin-bottom:0px;"></h1>
				<f7-list media-list style="margin: 4px 0px;">
					<favorate v-for="favorateProduct in sortedFavorateProducts" v-bind:key="favorateProduct['.key']" :favorateProduct="favorateProduct" :favorateProductId="favorateProduct.id"></favorate>
				</f7-list>
	</f7-block>

    </f7-page>
</template>

<script>
import favorate from "./favorate"
export default {
  data() {
    return {
		favorateProducts: this.$store.getters.favProductDetails
		};
	},
	created(){
		return this.$store.getters.favProductDetails
	},
	computed:{
		user(){
			return this.$store.getters.user
		},
		// favorateProducts(){
		// 	return this.$store.getters.favProductDetails
		// },
    sortedFavorateProducts: function() {
      function compare(a, b) {
        if (a.rating > b.rating)
          return -1;
        if (a.rating < b.rating)
          return 1;
        return 0;
      }

      return this.favorateProducts.sort(compare);
    }
	},
	components:{
			"favorate": favorate
		}
};
</script>

<style scoped>

</style>
