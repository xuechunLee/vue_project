<template>
  <div class="topic_swiper-container">
    <div class="swiper-wrapper ">
      <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
        <div class="swiper-inner">
          <img :src="item.picUrl" alt="">
          <div class="text_wrap">
            <span class="text_suggests">——{{item.subTitle}}——</span>
            <h1 class="text_title">{{item.title}}</h1>
            <p class="text_content">{{item.desc}}</p>
          </div>
          <!--<img :src="focus.picUrl" alt="">-->
        </div>
      </div>
   <!--   <div class=" swiper-slide">
        <div class="swiper-inner">
          <div class="img"></div>
          <div class="text_wrap">
            <span class="text_suggests">-&#45;&#45;</span>
            <h1 class="text_title">222</h1>
            <p class="text_content">222222222222222222</p>
          </div>
          &lt;!&ndash;<img :src="focus.picUrl" alt="">&ndash;&gt;
        </div>

      </div>-->
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination my-pagination-current"></div>

  </div>
</template>

<script>
import {mapState} from 'vuex'
import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper'
  export default {
  mounted(){
    this.$store.dispatch('getBanner',()=>{
      this.$nextTick(()=>{
        new Swiper('.topic_swiper-container',{

        })
      })
    })
  },
    components: {},
    computed:{
      ...mapState(['banner'])
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .topic_swiper-container{
    height:433px;
    overflow: hidden;
    margin-top: 88px;
    display: flex;
    /*background-color: #02a774;*/
    .swiper-wrapper{

      .swiper-slide{
        padding: 24px 30px;
        box-sizing: border-box;
        position: relative;
        .swiper-inner{
          padding: 0 10px;

          img{
            width: 670px;
            height: 385px;
            /*background-color: lightsteelblue;*/
          }
          .text_wrap{
            width: 466px;
            height: 198px;
            background-color: rgba(255,255,255,0.4);
            position: absolute;
            top:0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            display: flex;
            flex-direction:column ;
            align-items: center;
            justify-content: center;

            .text_suggests{
              opacity: 1;
              margin-bottom: 20px;
              font-size: 20px;
            }
            .text_title{
              margin-bottom: 20px;
              font-size: 32px;
            }
            .text_content{
              font-size: 24px;
            }
          }
        }
      }
    }
  }
</style>
