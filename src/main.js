// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'element-ui/lib/theme-default/index.css'
import ElementUI from 'element-ui'
import { sync } from 'vuex-router-sync'
import store from './store'
// import { getInitialData } from './store/actions'

Vue.config.productionTip = false
// Vue.config.devtools = true

Vue.use(ElementUI)

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

// getInitialData(store)
