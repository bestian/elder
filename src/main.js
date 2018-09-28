// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLocalStorage from 'vue-localstorage'

Vue.config.productionTip = false
Vue.use(VueLocalStorage)

/* eslint-disable no-new */
Vue.localStorage.set('someNumber', 123)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
