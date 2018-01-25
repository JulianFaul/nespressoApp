
import productDetails from "./pages/productDetails"
import loginPage from "./pages/loginPage"
import signupPage from "./pages/signupPage"


export default [
  {
    path: 'productdetails/:productId',
    component: productDetails
  },
  {
    path: '/login/',
    component: loginPage
  },
  {
    path:'/signup/',
    component: signupPage
  },
  {
    path: '/about/',
    component: require('./assets/vue/pages/about.vue')
  },
  {
    path: '/form/',
    component: require('./assets/vue/pages/form.vue')
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: require('./assets/vue/pages/dynamic-route.vue')
  }
]
