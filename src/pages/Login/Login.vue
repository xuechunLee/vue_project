<template>
  <div class="login_wrapper">
    <div class="login_header">
      <div class="home_icon"></div>
      <div class="home_title"></div>

      <!--<img class="home_title" src="./images/logo.png" alt="">-->
      <div class="search_cart">
        <div class="search_icon"></div>
        <div class="cart_icon"></div>
      </div>
    </div>
    <div class="login_main" v-show="isShow">
      <div class="login_middle_wrapper">
        <div class="login_logo">
          <img src="./images/logo.png" alt="">
        </div>
        <div class="login_phone_mail">
          <div class="phone" @click="phoneLogin">
            <div class="phone_icon _icon"></div>
            <span class="login_type">手机号码登录</span>
          </div>
          <div class="mail" @click="mailLogin">
            <div class="mail_icon _icon"></div>
            <span class="login_type" @click="loginWay">邮箱账号登录</span>
          </div>
        </div>
        <div class="text" >手机号快捷注册 ></div>
      </div>
      <div class="login_bottom_wrapper" >
        <div class="left">
          <img src="./images/wechat.png" alt="">
          <span class="lt">微信</span>
        </div>
        <div class="middle">
          <img src="./images/qq.png" alt="">
          <span class="mt">QQ</span>
        </div>
        <div class="right">
          <img src="./images/weibo.png" alt="">
          <span class="rt">微博</span>
        </div>
      </div>
    </div>
    <!--手机号登录-->

    <div class="showWay_wrapper" v-show="!loginWay">
      <div class="way_logo_wrapper">
        <img class="login_min" src="./images/logo.png" alt="">
      </div>
      <div class="user_input_info">
        <input class="phone_input" maxlength="11" placeholder="请输入手机号" type="text" v-model="phone">
        <div class="msg_wrapper">
          <input class="msg" maxlength="6" placeholder="请输入短信验证码" type="text" v-model="code">
          <div class="btn_msg" :class="{right_num:isRightPhone}" @click="getCode" ref="codeTxt">{{computeTime>0?`已发送${computeTime}s`:'获取验证码'}}</div>

        </div>
      </div>
      <div class="bottom_wrapper">
        <div class="login_btn_wrapper">
          <div class="_login"></div>
          <span class="login_txt" >登录</span>
        </div>
        <div class="way_btn_wrapper">
          <div class="_way"></div>
          <span class="way_txt"@click="toggleShow">其他方式登录</span>
        </div>
        <div class="phone_register">手机号快捷注册 ></div>
      </div>
    </div>
    <!--邮箱登录-->
    <div class="showWay_wrapper" v-show="loginWay">
      <div class="way_logo_wrapper">
        <img class="login_min" src="./images/logo.png" alt="">
      </div>
      <div class="user_input_info">
        <input class="phone_input" placeholder="邮箱账号" type="text">
        <div class="msg_wrapper">
          <input class="msg" placeholder="密码" type="text">
        </div>
      </div>
      <div class="bottom_wrapper">
        <div class="login_btn_wrapper">
          <div class="_login"></div>
          <span class="login_txt" >登录</span>
        </div>
        <div class="way_btn_wrapper">
          <div class="_way"></div>
          <span class="way_txt"@click="toggleShow">其他方式登录</span>
        </div>
      </div>
    </div>
    <!--<AlertTip :alertText="alertText" v-show="alertShow" @closeTip="closeTip1"/>-->
  </div>
</template>

<script>

  export default {
    data(){
      return {
        isShow:true,
        loginWay:false,
        computeTime:0,
        phone:'',
        code:'',
        alertText:'',
        isRightPhone:false,
        alertShow:false,
      }
    },
    components: {},
    methods:{
      toggleShow(){
        this.isShow = !this.isShow
      },
      phoneLogin(){
        this.isShow = !this.isShow
        this.loginWay = false
      },
      mailLogin(){
        this.isShow = !this.isShow
        this.loginWay = true

      },
      getCode(){
        this.isRightPhone = /^1\d{10}$/.test(this.phone)
        if(this.isRightPhone && this.computeTime === 0){
          this.sendCode()
        }else{
          alert('请输入正确的手机号')
        }
      },
      async sendCode(){
          this.computeTime = 30
          const intervalId = setInterval(()=>{
          console.log('---')
            this.computeTime--
            if(this.computeTime <= 0){
              clearInterval(intervalId)
            }
            console.log(this.computeTime)
          },1000)



      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .login_wrapper{
    .login_header{
      padding: 0 16px 0 24px;
      height: 87px;
      /*background-color: #fff;*/
      display: flex;
      align-items: center;
      background-color: #fafafa;
      justify-content: space-between;
      position: relative;
      .home_icon{
        background-image: url('/static/images/xb.png');
        background-size: 172px 398px;
        background-repeat: no-repeat;
        background-position: 0 -74px;
        width: 48px;
        height: 44px;

      }

      .home_title{
          position: absolute;
          top:0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          height: 54px;
          width: 172px;
          background-image: url('/static/images/xb.png');
          background-size: 172px 398px;
          background-repeat: no-repeat;
          background-position: 0 -128px;
        }

      .search_cart{
        display: flex;
        .search_icon{
          background-image: url('/static/images/xb.png');
          background-size: 172px 398px;
          background-repeat: no-repeat;
          background-position: 0 -334px;
          width: 64px;
          height: 64px;
        }
        .cart_icon{
          background-image: url('/static/images/xb.png');
          background-size: 172px 398px;
          background-repeat: no-repeat;
          background-position: 0 0px;
          width: 64px;
          height: 64px;
        }
      }
    }
    .login_main{
      .login_middle_wrapper{
        padding-bottom: 548px;
        background-color: #f2f5f4;
        .login_logo{
          display: block;
          text-align: center;
          padding:160px 0;
          img{
            width: 268px;
            height: 90px;
          }

        }
        .login_phone_mail{
          padding: 0 40px;
          box-sizing: border-box;
          font-size: 28px;
          font-weight: 400;
          .phone{
            height:92px;
            margin-bottom: 32px;
            border: 1px solid #b4282d;
            background-color: #b4282d;
            line-height: 92px;
            border-radius: 5px;
            text-align: center;
            color: white;

            ._icon{
              background-image: url('/static/images/xb1.png');
              background-size: 40px 290px;
              background-repeat: no-repeat;
              z-index: 4;
              display: inline-block;
              width: 40px;
              height: 40px;
              vertical-align: middle;

              &.phone_icon{
                background-position: 0 -50px;
              }

            }
            .login_type{
              vertical-align: middle;
            }
          }
          .mail{
            border: 1px solid #b4282d;
            line-height: 92px;
            height:92px;
            border-radius: 5px;
            text-align: center;
            margin-bottom: 32px;
            color:#b4282d;
            ._icon{
              background-image: url('/static/images/xb1.png');
              background-size: 40px 290px;
              background-repeat: no-repeat;
              z-index: 4;
              display: inline-block;
              width: 40px;
              height: 40px;
              vertical-align: middle;

              &.mail_icon{
                background-position: 0 0;
              }

            }
            .login_type{
              vertical-align: middle;
            }
          }
        }
        .text{
          font-size: 28px;
          text-align: center;
          /*color: #333;*/
        }
      }
      .login_bottom_wrapper{
        display: block;
        position: absolute;
        left: 0;
        right:0;
        /*display: block;*/
        text-align: center;
        bottom:80px;
        font-size: 28px;
        color: #7f7f7f;
        .left{
          /*float: left;*/
          display: inline-block;

          padding-right:40px ;
          border-right: 1px solid #979797;
          img{
            width: 40px;
            height: 40px;
            vertical-align: middle;
          }
          .lt{
            display: inline-block;
            /*margin-right: 5px;*/
          }
        }
        .middle{
          /*float: left;*/
          border-right: 1px solid #979797;
          padding-right:40px ;
          display: inline-block;
          margin-left: 20px;

          img{
            width: 40px;
            height: 40px;
            vertical-align: middle;
            /*margin-left:10px ;*/
          .mt{
            display: inline-block;
            /*margin-right: 10px;*/
           }
          }
        }
        .right{
          /*float: left;*/
          display: inline-block;
          margin-left: 20px;

          img{
            width: 40px;
            height: 40px;
            vertical-align: middle;
            /*margin-left: 10px;*/
          }
        }
      }
    }
    .showWay_wrapper{
      .way_logo_wrapper{
        margin-top: 150px;
        text-align: center;
        .login_min{
          display: inline-block;
          width: 192px;
          height: 64px;
        }
      }
      .user_input_info{
        margin-top:100px;
        padding: 0 40px;
        font-size: 30px;

        .phone_input{
          border-bottom: 1px solid #d4d4d4;
          width: 100%;
          margin:20px 0;
          outline: none;
          padding:0 0 30px 16px;
        }
        .msg_wrapper{
          position: relative;
          .msg{
            border-bottom: 1px solid #d4d4d4;
            width: 100%;
            margin:20px 0;
            padding:0 0 30px 16px;
            font-size: 30px;
            outline: none;

          }
          .btn_msg{
            position: absolute;
            right:0;
            top:12px;
            border: 1px solid #333;
            border-radius: 10px;
            text-align: center;
            line-height: 42px;
            padding: 10px;
            width: 162px;
            height: 42px;
            &.right_num{
              color: #c4c4c4;
            }
          }
        }
      }
      .bottom_wrapper{
        padding: 100px 40px 0;
        font-size: 28px;
        font-weight: 400;
        .login_btn_wrapper{
          height:92px;
          margin-bottom: 32px;
          border: 1px solid #b4282d;
          background-color: #b4282d;
          line-height: 92px;
          border-radius: 5px;
          text-align: center;
          color: white;
          ._login{
            background-image: url('/static/images/xb1.png');
            background-size: 40px 290px;
            background-repeat: no-repeat;
            z-index: 4;
            display: inline-block;
            width: 40px;
            height: 40px;
            vertical-align: middle;
            background-position: 0 -50px;
            margin-right: 10px;

          }
          .login_txt{

          }
        }
        .way_btn_wrapper{
          border: 1px solid #b4282d;
          line-height: 92px;
          height:92px;
          border-radius: 5px;
          text-align: center;
          margin-bottom: 32px;
          color:#b4282d;
          ._way{
            background-image: url('/static/images/xb1.png');
            background-size: 40px 290px;
            background-repeat: no-repeat;
            z-index: 4;
            display: inline-block;
            width: 40px;
            height: 40px;
            vertical-align: middle;
            background-position: 0 0;
            margin-right: 10px;

          }
          .way_txt{

          }
        }
        .phone_register{
          text-align: center;
        }
      }
    }
  }
</style>
