<template>
  <div class="recommend_wrapper" v-if="recommend.recommendBanner">
    <div class="recommend_title">为你推荐</div>
    <div class="top_wrapper">
      <!--<div class="img">pic</div>-->
      <img  :src="recommend.recommendBanner.picUrl" alt="">
      <div class="b">
        <div class="title_price">
          <span class="title_price_left">{{recommend.recommendBanner.title}}</span>
          <span class="title_price_right">{{recommend.recommendBanner.priceInfo}}元起</span>
        </div>
        <div class="content">{{recommend.recommendBanner.subtitle}}</div>
      </div>

    </div>
    <div class="bottom_wrapper" v-for="(rec, index) in recommend.recommends" :key="index">
      <div class="left">
        <div class="user_icon">
          <img :src="rec.avatar" alt="">
          <div class="name ellipsis">{{rec.nickname}}</div>
        </div>
        <h2 class="product_title">{{rec.title}}</h2>
        <p class="product_info">{{rec.subtitle}}</p>
      </div>
      <div class="right">
        <img :src="rec.picUrl" alt="">
        <div class="left_top">{{rec.typeName}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
  export default {
  computed:{
    ...mapState(['recommend'])
  },
    mounted(){
    this.$store.dispatch('getRecommend')
    },
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>

.recommend_wrapper{
  border-top: 20px solid #fafafa;
  padding: 0 30px 40px;
  box-sizing: border-box;
  margin-bottom: 20px;
  .recommend_title{
    height:120px;
    font-size: 32px;
    line-height: 120px;
    text-align: center;

  }
  .top_wrapper{
    border: 2px solid #e3eceb;
    margin-bottom: 30px;
    img{
      width: 688px;
      height: 386px;
      background-color: cornflowerblue;
    }
    .b{
      padding: 24px 20px 67px 20px;
      box-sizing: border-box;
      .title_price{
        margin-top:20px;
        font-size: 36px;
        overflow: hidden;
        .title_price_left{
          float: left;
        }
        .title_price_right{
          float: right;
        }
      }
      .content{
        margin-top:20px;
        font-size: 28px;
        color: #7f7f7f;
      }
    }
  }
  .bottom_wrapper{
    border: 1px solid #d9d9d9;
    display: flex;
    margin-bottom:30px;
    color: #333;
    .left{
      flex:1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      /*align-items: center;*/
      box-sizing: border-box;
      padding: 0 30px 0 20px;
      .user_icon{
        height: 48px;
        /*width: 140px;*/
        overflow: hidden;
        margin-bottom: 25px;
        img{
          width: 46px;
          height: 46px;
          background-color: lightsteelblue;
          border-radius: 100%;
          float: left;
          overflow: hidden;
          vertical-align: bottom;
        }
        .name{
          float: left;
          vertical-align: bottom;
          margin-top: 13px;
          margin-left: 10px;
        }
      }
      .product_title{
        margin-bottom: 14px;

      }
      .product_info{
        color: #7f7f7f;
      }

    }
    .right{
      position: relative;
      /*flex:1;*/
      width:280px;
      height: 272px;
      img{
        width: 100%;
        height: 100%;
        background-color: lightsteelblue;
      }
      .left_top{
        position: absolute;
        height: 34px;
        padding:0 16px;
        box-sizing: border-box;
        border: 1px solid #d9d9d9;
        display: inline-block;
        background-color: rgba(255,255,255,0.9);
        border-radius: 15px;
        line-height: 34px;
        top:10px;
        left:10px;
      }
    }
  }

}
</style>
