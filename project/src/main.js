import 'style/border.css'
import 'style/iconfont.css'
import 'style/reset.css'
import 'swiper/dist/css/swiper.css'
import App from './App'
import fastClick from 'fastclick'
import router from './router'
import store from './store'
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
