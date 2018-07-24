<template>
  <section class="msite">
    <header class="header_a">
      <div class="header_top">
        <img src="./images/logo.png">
        <div class="search_bar">
          <img src="./images/search.png">
          <span class="placeholder">搜索商品, 共10733款好物</span>
        </div>
      </div>
      <MsiteTextScroll/>
    </header>
    <MsiteTopSlide/>
    <div class="supports">
      <div class="a" v-for="(policy,index) in policyDescList" :key="index">
        <p><img :src="policy.icon">{{policy.desc}}</p>
      </div>
    </div>

    <header class="hd">
      <div class="brand_support">
        <span>品牌制造商直供<img src="./images/right.png"></span>
        </div>
    </header>
    <div class="hd_products">
      <ul>
        <li v-if="tagList" v-for="(tagList, index) in tagListsFliter" :key="index">
          <div class="text">
            <span>{{tagList.name}}</span>
            <p>{{tagList.floorPrice}}元起</p>
          </div>
         <img :src="tagList.picUrl" alt="">
        </li>
      </ul>
    </div>

    <SwiperProduct></SwiperProduct>
    <MsiteNiceGoods></MsiteNiceGoods>
    <!--限时购-->
    <LimitBuy></LimitBuy>
    <div class="img_link">


    <img src="http://yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg" alt="">
    </div>
    <!--专题精选-->
    <BestTopic></BestTopic>
    <NiceGoods></NiceGoods>
    <MisteList></MisteList>
    <!--<footer></footer>-->
  </section>
</template>

<script>
import NiceGoods from '../../components/NiceGoods/NiceGoods.vue'
import SwiperProduct from '../../components/SwiperProduct/SwiperProduct.vue'
import MsiteTextScroll from '../../components/MsiteTextScroll/MsiteTextScroll.vue'
import MsiteTopSlide from '../../components/MsiteTopSlide/MsiteTopSlide.vue'
import MsiteNiceGoods from '../../components/MsiteNiceGoods/MsiteNiceGoods.vue'
import LimitBuy from '../../components/LimitBuy/LimitBuy.vue'
import BestTopic from '../../components/BestTopic/BestTopic.vue'
import MisteList from '../../components/MisteList/MisteList.vue'
import BScroll from 'better-scroll'
import {mapState} from 'vuex'
  export default {
  computed:{
    ...mapState(['policyDescList','tagList']),
    tagListsFliter () {
      let arr = []
      for(var i = 0; i < 4; i++){
        arr.push(this.tagList[i])
      }
      return arr
    }
  },
    mounted(){
      this.$store.dispatch('getPolicyDescList')
      this.$store.dispatch('getTagList')
    },

    components: {
      NiceGoods,
      SwiperProduct,
      MsiteTextScroll,
      MsiteTopSlide,
      MsiteNiceGoods,
      LimitBuy,
      BestTopic,
      MisteList
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .msite{
    position: relative;
    width: 100%;
    overflow: hidden;
    background-color: #ededed;
    .header_a{
      height: 148px;
      width: 100%;
      background-color: #fff;
      position: fixed;
      z-index: 2;
      top:0;
      left:0;
      .header_top{
        height: 88px;
        box-sizing: border-box;
        padding:18px;
        img{
          padding-top: 5px;
          width: 138px;
          height: 40px;
        }
        .search_bar{
          margin-right: 15px;
          width: 532px;
          height:56px;
          background-color: #ededed;
          border-radius:10px;
          float:right;
          img{
            width: 28px;
            height: 28px;
            padding-left: 70px;
            margin-top: 10px;
          }
          .placeholder{
            color: #666;
            vertical-align: bottom;
            font-size: 28px;
          }
        }
      }
      .header_bottom{
        height: 60px;
      }
    }

    .supports{
      height: 72px;
      display: flex;
      justify-content: center;
      text-align: center;
      background-color: #fff;
        div{
          flex:1;
          img{
            width: 32px;
            height:32px;
            vertical-align: middle;
          }
          p{
            padding-top: 20px;

          }
        }
      /*}*/
    }
    .hd{
      height:110px;
      background-color: #fff;
      line-height: 48px;
      align-items: center;
      font-size: 32px;
      .brand_support{
        margin-top: 15px;
        height:110px;
        text-align: center;
        line-height: 110px;

        /*background-color: aliceblue;*/
        img{
          width: 30px;
          height:30px;
          padding-left: 10px;
          /*vertical-align: middle;*/

        }
      }
    }
    .hd_products{
      box-sizing: border-box;
      font-size: 28px;
      padding-bottom: 8px;
      background-color: #fff;
      ul{
        list-style: none;
        color: rgb(51,51,51);
        height:468px;
        overflow: hidden;
        margin-left:  18px;
        /*padding: 0 2px;*/
        li{
          /*text-align: center;*/
          margin-right: 5px;
          /*margin-bottom:8px;*/
          height:236px;
          display: inline-block;
          width: 355px;
          position: relative;

          background-color: #f4f4f4;
          /*margin-left: 5px;*/
          .text{
            position: absolute;
            top:15px;
            left:15px;
          }
          img{
            width: 100%;
            height: 100%;
            display: block;
          }
        }
      }
    }
    .img_link{
      margin:20px 0;
      width: 750px;
      height: 300px;
      img{
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    .hot_recommend{
      height: 260px;
      background-color: antiquewhite;
    }
    footer{
      width: 750px;
      height: 130px;
      background-color: #7e8c8d;
    }
  }
</style>
