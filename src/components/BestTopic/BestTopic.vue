<template>
  <div class="topic_wrapper">
    <header class="hd">
      <a class="more" href="">
        专题精选
        <img src="./images/right.png" alt="">
      </a>
    </header>
    <div class="topic_swipe">
      <div class="swiper_container">
        <ul class="swiper_wrapper">
          <li class="item" v-for="(item,index) in topicList" :key="index">
            <img :src="item.itemPicUrl" alt="">
            <div class="top">
              <span class="tittle">{{item.title}}</span>
              <span class="price">{{item.priceInfo}}元起</span>
            </div>
            <p class="content">{{item.subtitle}}</p>
          </li>
         <!-- <li class="item">
            <img src="" alt="">
            <div class="img"></div>
            <span class="tittle">22</span>
            <p class="content">ddsf</p>
          </li>-->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    mounted(){
      this.$store.dispatch('getTopicList',()=>{

        this.$nextTick(()=>{
          new BScroll('.swiper_container',{
            scrollX:true
          })
        })
      })

    },
    computed:{
      ...mapState(['topicList'])
    },
    components: {}
  }
</script>

<style lang="less" rel="stylesheet/less">
  .topic_wrapper{
    background-color: #fff;
    .hd{
      display: flex;
      /*align-items: center;*/
      justify-content: center;
      .more{
        color: #333;
        img{
          width:30px ;
          height: 30px;
          vertical-align: middle;
        }
      }
    }
    .topic_swipe{
      padding: 0 30px 36px;
      /*background-color: #02a774;*/
      overflow: hidden;
      .swiper_container{
        /*height: auto;*/
        display: flex;
        /*margin-left:auto;*/
        /*margin-right: auto;*/
        .swiper_wrapper{
          /*width: 1150px;*/
          height: 417px;
          display: flex;
          .item{
            flex-shrink: 0;
            margin-right: 21px;
            width: 575px;
            height: 417px;
            background-color: #fff;
            img{
              width: 575px;
              height: 322px;
              background-color: lightsteelblue;
              display: block;
              /*margin-bottom:16px;*/
              margin-top: -24px;
            }
            .top{
              width: 575px;
              height:41px;
              font-size: 32px;
              .title{

              }
              .price{
                float: right;
                color: #b4282d;
              }
            }
            .content{
              width: 575px;
              height: 24px;
              font-size: 27px;
              color: #7f7f7f;
            }
            /*position:relative;*/
          }
        }
      }
    }
  }
</style>
