import 'es6-promise/auto'
import Vue from 'vue';
import VueRouter from 'vue-router';
// import VueResource from 'vue-resource';
import axios from 'axios';
import App from './App';
import {routes} from './routes';
import {store} from './store';


Vue.use(VueRouter);
// Vue.use(VueResource);
Vue.use(Buefy.default);

Vue.prototype.$http = axios;





const router = new VueRouter({
  mode: 'history',
  routes,
});



new Vue({
  el: '#app',
  router,
  store,

  render: h => h(App)
});