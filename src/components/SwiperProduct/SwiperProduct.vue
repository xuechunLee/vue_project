<template>
  <section class="swiper_products">
    <div class="new_products">
      <div class="inner_content">
        <span class="text_top">新品首发</span>
        <p class="text_bottom">查看全部 <img src="./images/right1.png" alt=""></p>
      </div>
    </div>


    <div class="wrapper">
      <ul class="content">
        <li class="item" v-for="(item,index) in newItemList" :key="index">
          <img :src="item.listPicUrl">
          <div class="text">
            <span class="ellipsis name">{{item.name}}</span>
            <span class="info ellipsis">{{item.simpleDesc}}</span>
            <span class="price">￥{{item.retailPrice}}</span>
          </div>

        </li>
        <li class="last">查看全部</li>
        <!--   -->
      <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
        </ul>
    </div>
  </section>
</template>

<script>
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
  export default {
    mounted(){
      this.$store.dispatch('getNewItemList',()=>{
        this.$nextTick(()=>{
          new BScroll('.wrapper',{
            scrollX:true
          })
        })
      })
    },
    computed:{
      ...mapState(['newItemList'])
    }
  }
</script>

<style lang="less" rel="stylesheet/less">

  .swiper_products{
    /*background-color: cornflowerblue;*/
    background-color: white;
    .new_products{
      border-top: 20px solid rgb(244,244,244);
      height: 260px;
      /*margin-bottom: 8px;*/
      background-image: url("/static/images/bg.png");
      background-repeat: no-repeat;
      background-size: 750px 260px;
      display: flex;
      align-items: center;
      justify-content: center;
      .inner_content{
        display: block;
        text-align: center;
        color: rgb(139, 160, 182);
        .text_top{
          font-size: 36px;

        }
        .text_bottom{
          background-color: #D8E5F1;
          width: 240px;
          height: 56px;
          line-height: 56px;
          margin:16px 0;
          img{
            width: 10px;
            height:22px;
          }
        }
      }

    }
    .wrapper{
      width: 100%;
      /*display: flex;*/
      height:480px;
      /*background-color: white;*/

      .content{
        display: flex;
        width: 2850px;
        margin-top: 30px;
        height: 480px;
        overflow: hidden;
        &>li{
           width: 280px;
           height: 415px;
           margin-left: 32px;
          /*overflow: hidden;*/
          img{
            width: 280px;
            height:280px;
            background-color: #ededed;
          }
          .text{
            margin-top: 5px;
            span{
              margin-bottom: 10px;
              display: inline-block;
              width: 280px;
              &.info{
                color:rgb(127, 127, 127);
              }
              &.price{
                color: rgb(180, 40, 45);
              }
            }
          }

          &.last{
            width: 280px;
            height:280px;
            background-color: white;
            border:8px solid #ededed;
            line-height: 280px;
            text-align: center;
            color: #666;
          }
        }
      }
    }

  }
</style>
