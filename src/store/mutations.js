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

export default {
  [RECEIVE_TYPENAME](state,{type}){
    state.type = type
  },
  [RECEIVE_FOCUS_LIST](state,{focusList}){
    state.focusList = focusList
  },
  [RECEIVE_POLICY_DESCLIST](state,{policyDescList}){
    state.policyDescList = policyDescList
  },
  [RECEIVE_TAGLIST](state,{tagList}){
    state.tagList = tagList
  },
  [RECEIVE_NEWITEMLIST](state,{newItemList}){
    state.newItemList = newItemList
  },
  [RECEIVE_POPULARITEMLIST](state,{popularItemList}){
    state.popularItemList = popularItemList
  },
  [RECEIVE_TOPICLIST](state,{topicList}){
    state.topicList = topicList
  },
  [RECEIVE_CATELISTS](state,{cateLists}){
    state.cateLists = cateLists
  },
  [RECEIVE_BANNER](state,{banner}){
    state.banner = banner
  },
  [RECEIVE_RECOMMEND](state,{recommend}){
    state.recommend = recommend
  },
  [RECEIVE_COLUMN](state,{column}){
    state.column = column
  },
  [RECEIVE_TENFIFTEEN](state,{tenfifteen}){
    state.tenfifteen = tenfifteen
  },
  [RECEIVE_ZHENPIN](state,{zhenpin}){
    state.zhenpin = zhenpin
  },
  [RECEIVE_YXLOOK] (state, {yxLook}) {
    state.yxLook = yxLook
  },
  [RECEIVE_FINDMORES] (state, {findMores}) {
    state.findMores = findMores
  },
  [RECEIVE_CATEGORYS] (state, {categorys}) {
    state.categorys = categorys
  }

}
