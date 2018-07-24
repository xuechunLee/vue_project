<template>
  <div class="cart_wrapper clearFloat">
    <div class="cart_top">购物车</div>
    <ul class="cart_ul">
      <li class="cart_li"><img src="./images/circle.png" alt=""> 30天无忧退货</li>
      <li class="cart_li"><img src="./images/circle.png" alt="">48小时快速退款</li>
      <li class="cart_li"><img src="./images/circle.png" alt="">满88元免邮费</li>
    </ul>
    <div class="height_wrapper">

      <div class="cart_middle">
        <img src="./images/shopcart.png" alt="">
        <div class="text_wrapper">
          <div class="text">去添加点什么吧~</div>
          <div class="login_button" @click="$router.push('/login')">登录</div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

  export default {
    components: {}
  }
</script>

<style lang="less" rel="stylesheet/less">
  .cart_wrapper{
    color: rgb(127, 127, 127);

    text-align: center;
    line-height: 100%;
    .cart_top{
      height: 88px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 36px;
      color: rgb(51, 51, 51);
      background-color: #fff;
    }
    .cart_ul{
      display: flex;
      height: 60px;
      /*padding: 0 20px;*/
      box-sizing: border-box;
      font-size: 24px;
      /*justify-content: space-between;*/
      align-items: center;
      .cart_li{
        display: flex;
        font-size: 20px;
        justify-content: center;
        align-items: center;
        flex: 1;
        img{
          width: 8px;
          height: 8px;
          margin-right: 5px;
        }
      }
    }
    .height_wrapper{
      height: 1246px;
      position: fixed;
      top:0;
      bottom: 0;
      left: 0;
      width: 100%;

      .cart_middle{
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom: 0;
        margin: auto;
        height: 300px;
        img{
          display: inline-block;
          width:212px ;
          height: 212px;

        }
        .text_wrapper{
          .text{
            margin-bottom: 50px;
            font-size: 28px;
          }
          .login_button{
            background-color: #b4282d;
            margin:0 auto;
            color: #fff;
            display: inline-block;
            width: 409px;
            line-height:78px ;
            font-size: 25px;
            border-radius: 5px;

          }
        }

      }
    }

  }

</style>
