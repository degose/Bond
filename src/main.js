import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import axios from 'axios';
import App from './App';
import {routes} from './routes';
import {store} from './store';



Vue.use(VueRouter);
Vue.use(VueResource);

//Global Settings
Vue.http.options.root = 'http://bond.ap-northeast-2.elasticbeanstalk.com/api/'

// Vue.prototype.$http = axios;
Vue.http = axios;
// Vue.prototype.$http.headers.common

// Vue.http.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:8080'
// Vue.http.headers.common['Access-Control-Request-Method'] = '*'

// Global Settings
// firebase 주소값(App.vue 에서 get,post 주소값은 생략 가능)
// Vue.http.options.root = 'https://bond-43bc3.firebaseio.com/write_text.json';
// Vue.http.options.root = 'https://bond-43bc3.firebaseio.com/signup.json';
// Vue.http.options.root = 'https://bond-43bc3.firebaseio.com/signup.json';

// 만약 토큰값이 있다면
// Vue.http.headers.common['Authorization'] = 'Token eeb72f8f9333c8ca69a1c9f66e3a3e3fa90b7b2f';

// "token": "eeb72f8f9333c8ca69a1c9f66e3a3e3fa90b7b2f"

// interceptors
// Vue.http.interceptors.push((request, next) => {
//   // request를 가로채서 서버에 통신 요청할 때 변경 사항을 반영
//   console.log(request);
//   if ( request.method === 'POST' ){
//     request.method = 'PUT';
//   }
//   next(response => {
//     // 응답받은 데이터 보여지게 하기
//     response.json = ()=>{ return {data: response.body}};
//   });
// });



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
  store,

  render: h => h(App)
});