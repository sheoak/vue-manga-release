import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({ routes })

// on peut inclurer un CSS au format SASS
require('./assets/sass/main.scss')

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
