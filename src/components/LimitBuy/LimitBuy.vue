<template>
  <div class="limits">
    <div class="limit_left">
      <div class="text_top">严选限时购</div>
      <div class="countdown">
        <span class="h tm">11</span>
        <span class="colon">:</span>
        <span class="m tm">10</span>
        <span class="colon">:</span>
        <span class="s tm">04</span>
      </div>
      <span class="next_one">下一场 18:00 开始</span>
    </div>
    <div class="limit_right">
      <div class="img_wrap">
        <img src="./images/[m.you.163.com]_19d3_144f5df3007961cafe75367882dc905c.png" alt="">
      </div>
      <div class="price_orange">
        <div class="now">￥1268</div>
        <div class="past">￥1498</div>
      </div>
    </div>

    <!--<div class="img_link">-->
      <!--<img src="http://yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg" alt="">-->
    <!--</div>-->
  </div>
</template>

<script>

  export default {
    components: {}
  }
</script>

<style lang="less" rel="stylesheet/less">
  .limits{
    margin-top: 20px;
    height:380px;
    width: 100%;
    box-sizing: border-box;
    padding:30px 40px 30px 56px;
    /*line-height: 380px;*/
    /*vertical-align: middle;*/
    background-color: #fff;
    display: flex;
    &>div{
      width: 334px;
      background-color: white;
      color: #333;
      &.limit_left{
        padding-top:80px ;
        .text_top{
          font-size: 36px;
          letter-spacing: 12px;
          line-height: 36px;
          margin-bottom: 24px;
        }
        .countdown{
          display: inline-block;

          .tm{
            display: inline-block;
            width: 62px;
            height:56px;
            font-size: 32px;
            background: #444;
            border-radius:4px;
            color: #fff;
            line-height: 56px;
            text-align: center;
          }
          .colon{
            font-weight: 700;
            display: inline-block;
          }
        }
        .next_one{
          display: inline-block;
          margin-top: 20px;
        }
      }
      &.limit_right{
        position: relative;

        .img_wrap{
          img{
            width: 320px;
            height:320px;
          }
        }
        .price_orange{
          width:96px;
          height:96px;
          background-color: rgb(244,143,24);
          color: #fff;
          position: absolute;
          right:30px;
          bottom:36px;
          border-radius: 100%;
          text-align: center;
          /*display: flex;*/

          .now{
            font-size: 25px;
            line-height: 28px;
            height:28px;
            display: block;
            margin-top: 20px;
          }
          .past{
            font-size: 25px;
            line-height: 28px;
            height:28px;
            display: block;
            text-decoration: line-through;
          }
        }

      }
      /*.img_link{*/
        /*width: 750px;*/
        /*display: block;*/
      /*}*/
     /* &.img_link{
        width: 750px;
        height: 300px;
        img{
          width: 100%;
          height: 100%;
          display: block;
        }
      }*/
    }

  }
</style>
