<template>
    <f7-popup :id="'popup' + product.id" style="overflow: hidden;">
    <f7-nav-right style="text-align:right;" >
								<f7-link :close-popup="true">X</f7-link>
							</f7-nav-right>
        <p style=" position: absolute; top: -7px;left: 0;font-size: 18px; width: 100%;z-index: -1; text-align: center;">{{product.name}}</p>
     <form class="rating" style="margin-top:15px;">
  <label>
    <input type="radio" name="stars" v-model="rating" value="1" />
    <span class="icon">★</span>
  </label>
  <label>
    <input type="radio" name="stars" v-model="rating" value="2" />
    <span class="icon">★</span>
    <span class="icon">★</span>
  </label>
  <label>
    <input type="radio" name="stars" v-model="rating" value="3" />
    <span class="icon">★</span>
    <span class="icon">★</span>
    <span class="icon">★</span>   
  </label>
  <label>
    <input type="radio" name="stars" v-model="rating" value="4" />
    <span class="icon">★</span>
    <span class="icon">★</span>
    <span class="icon">★</span>
    <span class="icon">★</span>
  </label>
  <label>
    <input type="radio" name="stars" v-model="rating" value="5" />
    <span class="icon">★</span>
    <span class="icon">★</span>
    <span class="icon">★</span>
    <span class="icon">★</span>
    <span class="icon">★</span>
  </label>
</form>

        <button @click="likeProduct(product.id)" class="button" style="position: absolute;bottom: 10px;right: 25px;"type="submit">Like</button>
    </f7-popup>
</template>

<script>
export default {
props:['product'],
  data() {
      
    return {
      rating:null
		};
	},
  	methods:{
		likeProduct(productId){

			this.$store.dispatch('favoriteProduct',{productId,rating:this.rating})
			this.$store.dispatch('fetchUserFavProducts')
		},
		unlikeProduct(productId){
			this.$store.dispatch('unfavorateProduct',productId)
			this.$store.dispatch('clearUserFavProducts',productId)
		}
	}
};
</script>
   

<style>
.popup {
    height: 150px !important;
    top: 29%;
    margin: 0 auto;
    width: 325px;
    left: 0;
    right: 0;
    padding: 10px;
    border-radius: 20px;
}
.rating {
display: block;
    position: relative;
    height: 50px;
    line-height: 50px;
    font-size: 50px;
    margin: 0 auto;
    width: 210px;
}

.rating label {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  cursor: pointer;
}

.rating label:last-child {
  position: static;
}

.rating label:nth-child(1) {
  z-index: 5;
}

.rating label:nth-child(2) {
  z-index: 4;
}

.rating label:nth-child(3) {
  z-index: 3;
}

.rating label:nth-child(4) {
  z-index: 2;
}

.rating label:nth-child(5) {
  z-index: 1;
}

.rating label input {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}

.rating label .icon {
  float: left;
  color: transparent;
}

.rating label:last-child .icon {
  color: #000;
}

.rating:not(:hover) label input:checked ~ .icon,
.rating:hover label:hover input ~ .icon {
  color: #ff9500;
}

.rating label input:focus:not(:checked) ~ .icon:last-child {
  color: #000;
  text-shadow: 0 0 5px #09f;
}
</style>