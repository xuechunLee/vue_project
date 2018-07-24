import {
  RECEIVE_TYPENAME,
  RECEIVE_FOCUS_LIST,
  RECEIVE_POLICY_DESCLIST,
  RECEIVE_TAGLIST,
  RECEIVE_NEWITEMLIST,
  RECEIVE_POPULARITEMLIST,
  RECEIVE_TOPICLIST,
  RECEIVE_CATELISTS,
  RECEIVE_BANNER,
  RECEIVE_RECOMMEND,
  RECEIVE_COLUMN,
  RECEIVE_TENFIFTEEN,
  RECEIVE_ZHENPIN,
  RECEIVE_YXLOOK,
  RECEIVE_FINDMORES,
  RECEIVE_CATEGORYS
} from './mutation-types'
import {
  reqTypeName,
  reqFocusList,
  reqPolicyDescList,
  reqTagList,
  reqNewItemList,
  reqPopularItemList,
  reqTopicList,
  reqCateLists,
  reqBanner,
  reqRecommend,
  reqColumn,
  reqTenfifteen,
  reqZhenpin,
  reqYxLook,
  reqFindMore,
  reqCategoryData
} from '../api'

export default {
  async getTypeNames({commit},cb){
    const result = await reqTypeName()
    // console.log(result.data)
    let type = result.data
    if(result.code === 0){
      commit(RECEIVE_TYPENAME,{type})
    }
    cb && cb()
  },
  async getFocusList({commit}){
    const result = await reqFocusList()
    console.log(result.data)
    let focusList = result.data
    if(result.code === 0){
      commit(RECEIVE_FOCUS_LIST,{focusList})
    }
  },
  async getPolicyDescList({commit}){
    const result = await reqPolicyDescList()
    console.log(result.data)
    let policyDescList = result.data
    if(result.code === 0){
      commit(RECEIVE_POLICY_DESCLIST,{policyDescList})
    }
  },
  async getTagList({commit}){
    const result = await reqTagList()
    console.log(result.data)
    let tagList = result.data
    if(result.code === 0){
      commit(RECEIVE_TAGLIST,{tagList})
    }
  },
  async getNewItemList({commit},cb){
    const result = await reqNewItemList()
    // debugger
    console.log(result.data)
    // debugger
    let newItemList = result.data
    if(result.code === 0){
      commit(RECEIVE_NEWITEMLIST,{newItemList})
    }
    cb && cb()
  },
  async getPopularItemList({commit},cb){
    const result = await reqPopularItemList()
    console.log(result.data)
    let popularItemList = result.data
    if(result.code === 0){
      commit(RECEIVE_POPULARITEMLIST,{popularItemList})
    }
    cb && cb()
  },
  async getTopicList({commit},cb){
    const result = await reqTopicList()
    console.log(result.data)
    let topicList = result.data
    if(result.code === 0){
      commit(RECEIVE_TOPICLIST,{topicList})
    }
    cb && cb()
  },
  async getCateLists({commit}){
    const result = await reqCateLists()
    let cateLists = result.data
    if(result.code === 0){
      commit(RECEIVE_CATELISTS,{cateLists})
    }
  },
  async getBanner({commit},cb){
    const result = await reqBanner()
    console.log(result.data)
    let banner = result.data
    if(result.code === 0){
      commit(RECEIVE_BANNER,{banner})
    }
    cb && cb()
  },
  async getRecommend({commit},cb){
    const result = await reqRecommend()
    console.log(result.data)
    let recommend = result.data
    if(result.code === 0){
      commit(RECEIVE_RECOMMEND,{recommend})
    }
    cb && cb()
  },
  async getColumn({commit},cb){
    const result = await reqColumn()
    console.log(result.data)
    let column = result.data
    if(result.code === 0){
      commit(RECEIVE_COLUMN,{column})
    }
    cb && cb()
  },
  async getTenfifteen({commit},cb){
    const result = await reqTenfifteen()
    console.log(result.data)
    let tenfifteen = result.data
    if(result.code === 0){
      commit(RECEIVE_TENFIFTEEN,{tenfifteen})
    }
    cb && cb()
  },
  async getZhenpin({commit},cb){
    const result = await reqZhenpin()
    console.log(result.data)
    let zhenpin = result.data
    if(result.code === 0){
      commit(RECEIVE_ZHENPIN,{zhenpin})
    }
    cb && cb()
  },
  async getYxLook({commit}, callBack) {
    const result = await reqYxLook()
    if (result.code === 0) {
      const yxLook = result.data
      commit(RECEIVE_YXLOOK, {yxLook})
    }
    callBack && callBack()
  },
  async getFindMores({commit}) {
    const result = await reqFindMore()
    if (result.code === 0) {
      const findMores = result.data
      commit(RECEIVE_FINDMORES, {findMores})
    }
  },
  async getCategorys({commit}, callBack) {
    const result = await reqCategoryData()
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys})
    }
    callBack && callBack()
  }
}

