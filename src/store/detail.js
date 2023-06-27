import {reqGoodsInfo,reqAddOrUpdateShopCart} from '@/api'
import {getUUID} from "@/utils/uuid_token"
const state = {
    goodInfo:{} ,
    uuid_token: getUUID()
}
const mutations={
    GETGOODINFO(state,goodInfo){
        state.goodInfo =goodInfo
    }
}
const actions ={
    async getGoodsInfo({commit},skuId){
        let result = await reqGoodsInfo(skuId)
        if(result.code===200){
            commit('GETGOODINFO',result.data)
        }
    },
    async addOrUpdateShopCart({commit},{skuId,skuNum}){
        let result = await reqAddOrUpdateShopCart(skuId,skuNum)
        if(result.code===200){
            return "ok"
        }else{
            return Promise.reject(new Error("faile"))
        }
    }
}
const getters ={
    categoryView(){
        return state.goodInfo.categoryView||{}
    },
    skuInfo(){
        return state.goodInfo.skuInfo||{}
    },
    spuSaleAttrList(){
        return state.goodInfo.spuSaleAttrList||[]
    }
}

// 对外暴露Store类的一个实例
export default{
    state,
    mutations,
    actions,
    getters
}
