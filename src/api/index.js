import ajax from './ajax'

export const reqTypeName = ()=> ajax('/typename')
export const reqFocusList = ()=> ajax('/focusList')
export const reqPolicyDescList = () => ajax('/policyDescList')
export const reqTagList = () => ajax('/tagList')
export const reqNewItemList = () => ajax('/newItemList')
export const reqPopularItemList = () => ajax('/popularItemList')
export const reqTopicList = () => ajax('/topicList')
export const reqCateLists = () => ajax('/cateList')
export const reqBanner = () => ajax('/banner')
export const reqRecommend = () => ajax('/recommend')
export const reqColumn = () => ajax('/column')
export const reqTenfifteen = () => ajax('/tenfifteen')
export const reqZhenpin = () => ajax('/zhenpin')
export const reqYxLook = () => ajax('/yxLook')
export const reqFindMore = () => ajax('/findMore')

export const reqCategoryData = () => ajax('/categoryData')
