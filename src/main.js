import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import 'bootstrap' //import Bootstrap’s JavaScript
import 'bootstrap/dist/css/bootstrap.min.css' // import Bootstrap CSS Styles


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
