<template>
  <div class="item_wrapper clearFloat" v-if="categorys">
    <div class="item_search_bar">
        <div class="inner_search">
          <img src="./images/search.png" alt="">
          <span class="plh">搜索商品，共10877款好物</span>
        </div>
      </div>

    <div class="item_bottom_wrapper">

      <div class="item_left">
        <ul class="item_scroll_wrapper" >
          <li class="scroll_item ellipsis" v-for="(category,index) in categorys" @click="setIndex(index)"
              :key="index" :class="{on:showIndex(index)}" >
            {{category.name}}
          </li>
        </ul>
      </div>

      <div class="item_right" v-if="categorys[index]">
        <!--<div class="item_img"></div>-->
        <img class="item_img" :src="categorys[index].bannerUrl" alt="">
        <div class="item_text">
          <span class="span1">——</span>
          {{categorys[index].name}}分类
          <span class="span2">——</span>
        </div>
        <ul class="icon_text_wrapper" v-if="categorys[index]">
          <li class="icon_text_item" v-for="(item,i) in categorys[index].subCateList"  :key="i">
            <!--<div class="icon_img"></div>-->
            <img class="icon_img" :src="item.wapBannerUrl" alt="">
            <span class="_text">{{item.name}}</span>
          </li>

        </ul>
      </div>

    </div>

  </div>
</template>

<script>
  import BScroll from 'better-scroll'
import {mapState} from 'vuex'
  export default {
  data(){
    return{
      index:3
    }
  },
    components: {},
    mounted(){
      this.$store.dispatch('getCategorys',()=>{
        this.$nextTick(()=>{
          new BScroll('.item_left',{
            scrollY:true,
            probeType: 2,  // 因为惯性滑动不会触发
            click: true,
          })
        })
      })
    },
    computed:{
      ...mapState(['categorys'])
    },
    methods:{
      setIndex(index){
        this.index = index
      },
      showIndex(index){
        return this.index === index
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .item_wrapper{
    background-color: white;
    color: #333;
    /*height:;*/
    .item_search_bar{
        height:88px;
        padding:0 30px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #e5e5e5;
        .inner_search{
          background-color: #ededed;
          width: 100%;
          display: flex;
          border-radius: 5px;
          font-size: 28px;
          height: 56px;
          align-items: center;
          justify-content: center;
          img{
            width: 28px;
            height: 28px;
            margin-right: 10px;
          }
          .plh{
            color: #666;
          }
        }
      }

    .item_bottom_wrapper{
      /*position: relative;*/
      /*bottom:0;*/
      .item_left{
        width: 162px;
        position: fixed;
        left: 0;
        bottom: 0;
        top:88px;
        overflow: hidden;
        .item_scroll_wrapper{
          color: #333;
          font-size: 28px;
          padding: 40px 0 100px 0;

          .scroll_item{
            line-height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            height:50px;
            margin-bottom: 50px;
            &.on{
              border-left: 6px solid #ab2b2b;
              color:#ab2b2b;
              font-size: 36px;
            }
          }
        }
      }
      .item_right{
        margin-left: 162px;
        padding:30px 30px 21px;
        .item_img{
          height: 192px;
          /*background-color: #02a774;*/
        }
        .item_text{
          height: 108px;
          display: flex;
          justify-content: center;
          align-items: center;
          .span1{
            margin-right:10px;
            display: block;
            color: #d9d9d9;
          }
          .span2{
            margin-left:10px;
            display: block;
            color: #d9d9d9;

          }
        }
        .icon_text_wrapper{
          display: flex;
          flex-wrap: wrap;
          .icon_text_item{
            width: 144px;
            margin-right: 30px;
            .icon_img{
              width: 144px;
              height: 144px;
              /*background-color: #02a774;*/
            }
            ._text{
              font-size: 24px;
              display: block;
              text-align: center;
              height: 72px;
              line-height: 34px;
            }
          }
        }
      }
    }

  }
</style>
