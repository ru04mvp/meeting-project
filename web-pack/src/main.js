// 引入元件
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

// 引入自訂元件
import VueResource from 'vue-resource'
import VueCookie from 'vue-cookie'
import VueLocalStorage from 'vue-localstorage'
import VueSweetalert2 from 'vue-sweetalert2'
import VueAnalytics from 'vue-analytics'

// Vuex 要求
import 'es6-promise/auto'

Vue.config.productionTip = false

// 設置 引用套件
Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(VueCookie)
Vue.use(VueLocalStorage)
Vue.use(VueSweetalert2)

/* 載入 GA 分析 */
if (process.env.NODE_ENV === 'production') {
  Vue.use(VueAnalytics, {
    id: '',
    router,
    autoTracking: {
      pageviewOnLoad: true
    }
  })
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data: {},
  created: function () { },
  destroyed: function () { },
  methods: {}
})
