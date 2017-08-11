import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
// 엄격모드  : 개발모드에서 state에 바로 접근하는 것을 막아준다.
strict: process.env.NODE_ENV !== 'production',
// 저장소를 모듈화하면 필요. 일단은 그냥 모듈화하지 말고 하나로 만들어보자(나중에 혹시나 필요하면 바꾸면 됨)
modules:{

},
state:{
  // api
  // Domain: bond.ap-northeast-2.elasticbeanstalk.com
  api_signup: 'http://bond.ap-northeast-2.elasticbeanstalk.com/api/member/',
  api_login: 'http://bond.ap-northeast-2.elasticbeanstalk.com/api/member/login',
  api_write: 'https://bond-43bc3.firebaseio.com/write.json',
  api_grouplist: 'http://bond.ap-northeast-2.elasticbeanstalk.com/api/group/',
  
},
getters: {
  
},
mutations: {
  
},
actions: {
  
}




})