import 'es6-promise/auto'
import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import App from './App';
import {routes} from './routes';
import {store} from './store';


Vue.use(VueRouter);
Vue.use(Buefy.default);

Vue.prototype.$http = axios;





const router = new VueRouter({
  mode: 'history',
  routes,
  // scrollBehavior (to, from, savedPosition) {
  //   원하는 위치로 돌아가기
  //   if (savedPosition) {
  //     return savedPosition
  //   } else {
  //     return { x: 0, y: 0 }
  //   }
  // }
});



new Vue({
  el: '#app',
  router,
  store,

  render: h => h(App)
});