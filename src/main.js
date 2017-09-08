import 'es6-promise/auto'
import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import App from './App';
import {routes} from './routes';


Vue.use(VueRouter);
Vue.use(Buefy.default);

Vue.prototype.$http = axios;





const router = new VueRouter({
  mode: 'history',
  routes,
});



new Vue({
  el: '#app',
  router,
  render: h => h(App)
});