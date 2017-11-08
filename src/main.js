// es6 - promise 지원안하는 브라우저를 위한 폴리필
import 'es6-promise/auto'
import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import App from './App';
import {routes} from './routes';


Vue.use(VueRouter);
// 데이터 로딩 스피너를 위한 라이브러리 세팅
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