<template>
  <div class="swiper3">
    <ul class="swiper2">
      <li class="swiper1" v-for="(item,index) in column" :key="index">
        <div class="img_wraper">
          <img :src="item.picUrl" alt="">
          <div class="right_top_text">{{item.articleCount}}</div>
        </div>
        <span class="bottom_text ellipsis">{{item.title}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
  export default {
  computed:{
    ...mapState(['column'])
  },
    mounted(){
      this.$store.dispatch('getColumn',()=>{

        this.$nextTick(()=>{
          new BScroll('.swiper3',{
            scrollX:true
          })
        })
      })
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .swiper3{
    padding: 0 30px;
    margin-bottom: 48px;
    margin-top: 20px;
    /*background-color: white;*/
    box-sizing: border-box;
    margin-left: 30px;
    display: flex;
    width: 100%;
    .swiper2{
      /*height: 690px;*/
      display: flex;
      .swiper1{
        width: 164px;
        height: 210px;
        margin-right: 24px;
        text-align: center;
         .img_wraper{
           width: 164px;
           height: 164px;
           position: relative;
           margin-bottom: 22px;
           img{
             width: 100%;
             height: 100%;
             background-color: white;
           }
           .right_top_text{
             position: absolute;
             top:0;
             background-image:url("/static/images/shadow.png");
             background-repeat:no-repeat;
             color: #fff;
             font-size: 26px;
             display: inline-block;
             text-align: right;
             width: 150px;
             right: 8px;
           }
         }
          .bottom_text{

          }
      }
    }

  }
</style>
