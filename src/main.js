// Import Vue
import Vue from 'vue'
import * as firebase from 'firebase'
// Import F7
import Framework7 from 'framework7'

import {store} from './store'
// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue'

// Import F7 iOS Theme Styles
import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css'
import Framework7Icons from 'framework7-icons/css/framework7-icons.css'
/* OR for Material Theme:
 import Framework7Theme from 'framework7/dist/css/framework7.material.min.css'
 import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css'
 */

import StarRating from 'vue-star-rating'
Vue.component('star-rating', StarRating)

import likePopup from './pages/shared/likePopup.vue'
Vue.component('likePopup', likePopup)

import sharepopup from './pages/shared/sharepopup.vue'
Vue.component('sharepopup', sharepopup)
// Import App Custom Styles
import AppStyles from './assets/sass/main.scss'

// Import Routes
import Routes from './routes.js'

// Import App Component
import App from './main.vue'


// Import firebase.js and vuefire and add plugin
import './config/firebase'
import VueFire from 'vuefire'
Vue.use(VueFire)

// Init F7 Vue Plugin
Vue.use(Framework7Vue)

// Init App
new Vue({
  el: '#app',
  template: '<app/>',
  store,
  // Init Framework7 by passing parameters here
  framework7: {
    root: '#app',
    /* Uncomment to enable Material theme: */
    // material: true,
    routes: Routes

  },
  // Register App Component
  components: {
    app: App
  },
  created(){
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.$store.dispatch('autoSignIn',user)
        this.$store.dispatch('fetchUserData')
        this.$store.dispatch('fetchUserFavProducts')
      }
    })
    this.$store.dispatch('loadProducts')
  }
})
