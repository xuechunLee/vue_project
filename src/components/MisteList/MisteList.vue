<template>
  <div class="list_wrapper" v-if="cateLists">
    <div class="list_Container" v-for="(cateList,index) in cateLists" :key="index">
      <div class="title">{{cateList.name}}</div>
      <ul class="item_wrap">
        <li class="item" v-for="(cate,index) in cateList.itemList" :key="index">
          <img :src="cate.listPicUrl" alt="">
          <div class="title_name ellipsis">{{cate.name}}</div>
          <span class="tag">满额减</span>
          <div class="info ellipsis">{{cate.simpleDesc}}</div>
          <span class="price">￥{{cate.couponPrice}}</span>
        </li>
        <li class="item more">
          <span>更多 居家好物</span>

          <img class="more_icon" src="./images/right.png" alt="">
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import {mapState} from 'vuex'
  export default {
    mounted(){
      this.$store.dispatch('getCateLists')
    },
    components: {},
    computed:{
      ...mapState(['cateLists'])
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .list_Container{
    background-color: #fff;
    .title{
      height:120px;
      width: 100%;
      display: inline-block;
      /*background-color: #02a774;*/
      text-align: center;
      line-height: 120px;
      font-size:28px;
      border-top: 10px solid #f4f4f4;
    }
    .item_wrap{
      padding:0 10px;
      box-sizing: border-box;

      /*background-color: lightsteelblue;*/
      /*height:2319px;*/
      .item{
        padding: 0 10px 10px;
        width:345px;
        font-size: 26px;
        float: left;

        &.more{
          background-color: #f4f4f4;
          height:440px;
          display: flex;
          flex-direction:column ;
          align-items: center;
          width: 335px;
          justify-content: center;
          margin-left: 10px;
          color: #333;
          font-size: 32px;
          .more_icon{
            /*flex: 1;*/
            padding-top: 50px;
            width: 67px;
            height: 67px;

          }
        }
        img{
          width: 345px;
          height: 345px;
          background-color: #f4f4f4;
          /*padding: 0 10px 10px;*/
        }
        .title_name{
          width: 100%;
          /*height:69px;*/
          font-size: 26px;
          background-color: #f1ece2;
          box-sizing: border-box;
          color: #9f8a60;
          /*overflow: hidden;*/
          /*display: inline-block;*/
          padding: 20px 10px;

        }
        .tag{
          /*padding: 0 10px 10px;*/
          display: inline-block;
          background-color: rgb(244, 143, 24);
          color: #fff;
          text-align: center;
          line-height: 30px;
          width:92px;
          height: 30px;
          margin-top: 20px;
          margin-left: 10px;
        }
        .info{
          font-size: 28px;
          display: inline-block;
          width:336px;
          height: 37px;
          margin-top: 10px;
          padding: 0 10px;
          /*font-size: 28px;*/
        }
        .price{
          font-size: 32px;
          color: rgb(180, 40, 45);
        }
      }
    }
  }
</style>
