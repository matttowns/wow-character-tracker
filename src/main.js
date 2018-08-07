import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import VueRouter from 'vue-router'
import { routes } from './routes'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShield } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Dropdown from 'vue-simple-search-dropdown';

 
library.add(faShield);
 
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueRouter);
Vue.use(Dropdown);

Vue.filter('capitalize', (value) => {
  return value.toUpperCase();
});

Vue.filter('percentage', (value) => {
return Math.round(value * 100) / 100;
});

const router = new VueRouter({
  mode:'history',
  routes
});

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})

