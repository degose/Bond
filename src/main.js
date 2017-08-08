import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import {routes} from './routes';
// import axios from 'axios';

Vue.use(VueRouter);

// Vue.prototype.$http = axios;
// Vue.http = axios;

// methods: {
//   temp: () => {
//     this.$http.get('api').then(res=>{
//       console.log(res); // res.data
//     });

//     let data = window.JSON.stringify({});

//     this.$http.post('api', data).then(res=>{
//       console.log(res); // res.data
//     });
//   }
// }

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});