<template>
  <div class="ten_wrapper">
    <div class="title">十点一刻</div>
    <div class="scroll_wrapper_ten">
      <ul class="scroll_ul" v-if="tenfifteen">
        <li class="scroll_li" v-for="(item,index) in tenfifteen" :key="index">
          <span class="title_a">——今日话题——</span>
          <div class="middle">
            <h1 class="subtitle">{{item.title}}</h1>
            <div class="info">{{item.desc}}</div>
          </div>
          <div class="bottom_a clearFloat">
            <div class="img_a">
              <img v-show="partic" v-for="(partic, index) in item.participantAvatar" :key="index" :src="partic ? partic : ''">
              <div class="dot">. . . </div>
            </div>
            <div class="img_right">{{item.participantNum}}人参与话题</div>
          </div>
        </li>
        <li class="scroll_li">
          <div class="more">
            <div class="l">查看全部话题 <img src="./right.png" alt=""></div>
          </div>

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
import BScroll from 'better-scroll'
  export default {
    mounted(){
      this.$store.dispatch('getTenfifteen',()=>{
        this.$nextTick(()=>{
          new BScroll('.scroll_wrapper_ten',{
            scrollX : true
          })
        })
      })
    },
    components: {},
    computed:{
      ...mapState(['tenfifteen'])
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .ten_wrapper{
    border-top: 20px solid #fafafa;
    padding:0 30px 40px;
    box-sizing: border-box;
    .title{
      height: 120px;
      text-align: center;
      line-height: 120px;
    }
    .scroll_wrapper_ten{
      display: flex;
      .scroll_ul{
        display: flex;
        /*flex-shrink: 0;*/
        /*width: 100%;*/
        height: 100%;
        color: #333;
        .scroll_li{
          display: flex;
          flex-direction: column;
          /*align-items: center;*/
          width: 580px;
          flex-shrink:0;
          height: 411px;
          padding:38px 40px 79px 40px;
          box-sizing: border-box;
          background-size: contain;
          margin-right:30px;
          background-image: url("/static/images/border.png");
          .more{
            text-align: center;
            line-height: 350px;
            font-size: 30px;
            img{
              width: 35px;
              height: 35px;
              vertical-align: middle;
            }
          }
          .title_a{
            color: #7f7f7f;
            margin-bottom: 40px;
            text-align: center;
          }
          .middle{
            margin-bottom: 100px;
            .subtitle{
              text-align: center;

              font-size: 36px;
              font-weight: 700;
              margin-bottom: 20px;
            }
            .info{
              font-size: 28px;
              font-weight: 400;
              text-align: center;
            }
          }
          .bottom_a{
            display: block;
            height: 70px;
            text-align: center;
            position: relative;

            .img_a{
              /*display: inline-block;*/
              position: absolute;
              right:330px;
              bottom:10px;
              img{
                width: 48px;
                height: 48px;
                border-radius: 100%;
                overflow: hidden;
                display: inline-block;
                vertical-align: middle;
                /*background-color: #02a774;*/
              }
              .dot{
                font-weight: 700;
                color: white;
                background-color: #d9d9d9;
                line-height: 48px;
                text-align: center;
                display: inline-block;
                border-radius: 100%;
                width: 48px;
                height: 48px;
              }
            }
            .img_right{
              color: #7f7f7f;
            }
          }
        }
      }
    }
  }
</style>
