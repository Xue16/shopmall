import Vue from "vue";
import VueRouter from 'vue-router'
// 使用插件 
Vue.use(VueRouter)
import routes from './routes'

import store from '@/store'
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject){
        // call和apply的区别
        // 相同点： 都可以调用函数一次，都可以篡改函数的上下文一次
        // 不同点：call与apply传递参数，call传递参数用逗号隔开，apply方法执行，传递数组
        originPush.call(this,location,resolve,reject)
    }
    else{
        originPush.call(this,location,()=>{},()=>{})
    }
}
VueRouter.prototype.replace = function(location,resolve,reject){
    if(resolve && reject){
        originReplace.call(this,location,resolve,reject)
    }
    else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}

// 配置路由
const router =  new VueRouter({
    routes,
    scrollBehavior () {
        // return 期望滚动到哪个的位置
        return {x:0,y:0}
      }
})

export default router;

// router.beforeEach(async(to,from,next)=>{
//     let hasToken = store.state.user.token
//     let name = store.state.user.userInfo.name
//     if(hasToken){
//         // 登陆，但是不能去login
//         if(to.path=='/login'||to.path=='/register'){
//             next('/home')
//         }else{
//             // 用户登陆，还有用户信息，
//             if(name){
//                 next()
//             }else{
//                 try {
//                     await store.dispatch('getUserInfo');
//                     next();
//                 } catch (error) {
//                     await store.dispatch('logout');
//                     next('/login');
//                 }
//             }
//         }
//     }else{
//         let toPath = to.path;
//         if (toPath.indexOf('trade') != -1 || toPath.indexOf('pay') != -1 || toPath.indexOf('center') != -1) {
//             next('/login?redirect='+toPath);
//         } else {
//             next();
//         }
//     }
// })