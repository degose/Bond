import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
// 엄격모드  : 개발모드에서 state에 바로 접근하는 것을 막아준다.
  strict: process.env.NODE_ENV !== 'production',
// 저장소를 모듈화하면 필요. 일단은 그냥 모듈화하지 말고 하나로 만들어보자(나중에 혹시나 필요하면 바꾸면 됨)
  modules: {

  },
  state: {
  // api
  // Domain: bond.ap-northeast-2.elasticbeanstalk.com
  // 백엔드 api 나온 것들
    api_signup: 'https://api.thekym.com/member/',
    api_signin: 'https://api.thekym.com/member/login/',
    api_grouplist: 'https://api.thekym.com/group/',
    api_write: 'https://api.thekym.com/post/',
    // api_write: 'http://bond.ap-northeast-2.elasticbeanstalk.com/api/post/',
    // console.log('%c——————————————————————————————————————————————————','color: #00737d');

  // 이 아래는 자기가 테스트해볼 파이어 베이스 주소
  // 세민
  // api_write: 'https://bond-43bc3.firebaseio.com/write.json',
  // 태훈
    // api_write: 'https://vue-planlist-f14d2.firebaseio.com/test.json/'
  // console.log('%c——————————————————————————————————————————————————', 배경화면 동영상 상태);
  // bg_clip: 1

  },
   getters: {
    },
  
  mutations: {
  },
  actions: {

  }

});
