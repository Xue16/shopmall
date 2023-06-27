// 当前这个模块：API进行统一管理
import requests from "./request";
import mockRequsts from "./mockAjax"
// /api/product/getBaseCategoryList get 无参数
export const reqCategoryList = ()=> requests({url:'/product/getBaseCategoryList',method:'get'})

export const reqGetBannerList = ()=>mockRequsts.get('/banner')
export const reqGetFloorList = ()=>mockRequsts.get('/floor')


// export const reqGetSearchInfo =(params)=> requests ({url:"/list",method:"post",data:params})
export const reqGetSearchInfo = (params) =>requests ({url:"/list",method:"post",data:params})


export const reqGoodsInfo = (skuId)=>requests({url:`/item/${skuId }`,method:"get"})
// 添加更新购物车产品个数
export const reqAddOrUpdateShopCart = (skuId,skuNum )=>requests({url:`/cart/addToCart/${skuId }/${skuNum}`,method:"post"})

// 获取购物车接口  /api/cart/cartList get
export const reqCartList = ()=>requests({url:"/cart/cartList",method:"get"})
// 删除购物车列表接口数据  /api/cart/deleteCart/{skuId}  DELETE
export const reqDeleteCartById =(skuId )=>requests({url:`/cart/deleteCart/${skuId}`,method:"delete"})
// 修改商品的选中状态 /cart/checkCart/{skuID}/{isChecked} get
export const reqUpdateCheckedByid = (skuId,isChecked)=>requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'})
// 获取验证码  /api/user/passport/sendCode/{phone} get
export const  reqGetCode = (phone)=>requests({url:`/user/passport/sendCode/${phone}`,method:'get'})
// 用户注册 /api/user/passport/register  POST phone password code
export const reqUserRegister =(data)=> requests({url:"/user/passport/register ",data,method:"post"})
// 用户登陆  /api/user/passport/login POST
export const reqUserLogin =(data)=>requests({url:"/user/passport/login",data,method:"post"})
//  校验用户信息 /api/user/passport/auth/getUserInfo get
export const reqUserInfo =()=>requests({url:"/user/passport/auth/getUserInfo",method:'get'})
// 退出登陆  /api/user/passport/logout get
export const reqLogout =()=>requests({url:'/user/passport/logout',method:'get'})
//获取用户地址信息
export const reqAddressInfo = ()=>requests({url:`/user/userAddress/auth/findUserAddressList`,method:'get'});
//获取商品清单数据
export const reqShopInfo = ()=>requests({url:`/order/auth/trade`,method:'get'});
//提交订单接口
export const reqSubmitOrder = (tradeNo,data)=>requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,method:'post',data});
//获取支付信息接口
export const reqPayInfo = (orderId)=>requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'});
//查询支付结果
export const reqPayResult = (orderId)=>requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'});
//获取我的订单
export const reqMyOrderList = (page,limit)=>requests({url:`/order/auth/${page}/${limit}`,method:'get'});