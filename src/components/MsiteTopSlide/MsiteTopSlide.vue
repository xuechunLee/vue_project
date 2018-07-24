<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(focus,index) in focusList " :key="index">
        <img :src="focus.picUrl" alt="">
      </div>
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
      this.$store.dispatch('getFocusList')
    },
    computed:{
      ...mapState(['focusList'])
    },
    watch:{
      focusList(){
        this.$nextTick(function () {
          new Swiper('.swiper-container', {
            pagination: { // 圆点指示器的容器div
              el: '.swiper-pagination',
              currentClass : 'my-pagination-current',
            },
            loop: true, // 可以循环轮播
          })
        })
      }
    },


    components: {}
  }
</script>

<style lang="less" rel="stylesheet/less">

  .swiper-container{
    margin-top: 148px;
    height: 400px;
    overflow: hidden;
    .swiper-wrapper{
      height: 400px;
        .swiper-slide{
        height: 400px;
        float: left;
        img{
          width: 750px;
          height:400px;
        }
      }

    }
    .my-pagination-current{
      .swiper-pagination-bullet{
        background-color:black;
        opacity: 0.1;
        width: 40px;
        height: 4px;
      }
      .swiper-pagination-bullet-active{
        background-color: #fff;
        opacity: 1;
      }

    }
  }
</style>
