import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'iview'
import VueRouter from 'vue-router'
import 'iview/dist/styles/iview.css'
import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.use(VueAxios, axios)
Vue.prototype.$axios = axios
Vue.prototype.HOST = '/api'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(iView)

Vue.prototype 

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
