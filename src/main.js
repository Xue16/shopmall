import Vue from 'vue'
import App from './App.vue'
// 全局组件
import { Button,MessageBox,Message } from 'element-ui';
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'

//第一个参数： 全局组件名 第二个参数 哪一个组件
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
Vue.component("Pagination",Pagination)
Vue.component(Button.name,Button)

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$message = Message;

import router from '@/router';
import store from '@/store';
Vue.config.productionTip = false

// 引入MockServer.js mock数据
import '@/mock/mockServer'
import 'swiper/css/swiper.css'
import * as API from '@/api'
import VueLazyload from 'vue-lazyload'
import glzp from '@/assets/1.gif'
Vue.use(VueLazyload, {
  loading: glzp,
})
// 引入表单校验插件

import "@/plugins/validate";
new Vue({
  beforeCreate(){ 
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API
  },
  render: h => h(App),
  router,
  // 注册仓库：组件实例的身上会多一个属性$store属性
  store
}).$mount('#app')
 