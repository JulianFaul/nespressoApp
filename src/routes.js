
import productDetails from "./pages/productDetails"
import loginPage from "./pages/loginPage"
import signupPage from "./pages/signupPage"
import profilePage from "./pages/profilePage"
import adminPage from "./pages/adminPage"
import viewEditProduct from "./pages/viewEditProduct"
import editProduct from "./pages/editProduct"
import newProduct from "./pages/newProduct"
import favorates from './pages/favorates'
import fovorateDetails from './pages/fovorateDetails'

export default [
  
  {
    path: '/favorates/',
    component: favorates
    
  },
  {
    path: '/fovorateDetails/:favorateProductId',
    component: fovorateDetails
    
  },
  
  {
    path: 'productdetails/:productId',
    component: productDetails
    
  },
  {
    path: 'viewEditProduct/:productId',
    component: viewEditProduct
  },
  {
    path: '/newProduct/',
    component: newProduct
  },
  {
    path: 'editProduct/:productId',
    component: editProduct,
    props: true
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
    path:'/admin/',
    component: adminPage
  },
  {
    path:'/profile/',
    component: profilePage
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
