// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLocalStorage from 'vue-localstorage'
import Ads from 'vue-google-adsense'
import SuiVue from 'semantic-ui-vue'
// import VueNativeNotification from 'vue-native-notification'

require('semantic-ui-css/semantic.css')

Vue.use(SuiVue)
Vue.use(require('vue-script2'))
// Vue.use(VueNativeNotification, {
//  requestOnNotify: true
// })

Vue.use(Ads.Adsense)
Vue.use(Ads.InArticleAdsense)
Vue.use(Ads.InFeedAdsense)

Vue.config.productionTip = false
Vue.use(VueLocalStorage)

/* eslint-disable no-new */

// Vue.notification.requestPermission()
//  .then(console.log)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
