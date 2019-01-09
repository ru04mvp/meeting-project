// 引入元件
import Vue from 'vue'
import Router from 'vue-router'

// 引入頁面
import ClientMain from './../vues/client/Main'

// 引入外掛
import './../../node_modules/bootstrap/dist/js/bootstrap.js'

// 引入樣式
import './../../node_modules/bootstrap/dist/css/bootstrap.css'
import './../assets/css/default.css'

// 使用元件
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // 首頁
    { path: '/', name: 'page-index-main', component: ClientMain }
  ]
})
