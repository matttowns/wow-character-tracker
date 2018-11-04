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
  routes,
  scrollBehavior(){
    return { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  if(to.name == 'search'){
    document.title = "WoW Character Tracker";
  }
  else{
    let character = to.params.character;
    let routeName = to.name;
    if(to.meta.title){
      routeName = to.meta.title;
    }
    character = character.charAt(0).toUpperCase() + character.slice(1);
    routeName = routeName.charAt(0).toUpperCase() + routeName.slice(1);
    document.title = character + " - " + routeName;
  }

  next();
});

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})

