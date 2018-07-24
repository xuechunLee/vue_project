<template>
  <div class="look_wrapper">
    <div class="look_header">严选LOOK</div>
    <img :src="yxLook.picUrl" alt="" class="look_img">
    <div class="look_bottom_wrapper">
      <div class="look_user">
        <img :src="yxLook.avatar" alt="" class="avatar">
        <div class="id">{{yxLook.nickname}}</div>
      </div>
      <p class="look_desc">{{yxLook.content}}</p>
    </div>
    <div class="tag">
      <transition name="fade">
        <div v-show="show" class="center"></div>
      </transition>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        show:true

      }
    },
    components: {},
    computed: {
      ...mapState(['yxLook'])
    },
    mounted(){
      this.$store.dispatch('getYxLook',()=>{
        setInterval(()=>{
          this.show = !this.show
        },600)
      })
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .look_wrapper{
    border-top: 20px solid #fafafa;
    position: relative;
    .look_header{
      height:120px;
      text-align: center;
      line-height: 120px;
    }
    .look_img{
      height:500px;
      background-color: lightsteelblue;
    }
    .look_bottom_wrapper{
      padding:24px 30px 46px 30px;
      box-sizing: border-box;
      /*display: flex;*/
      /*flex-direction: column;*/
      .look_user{
        margin-bottom: 24px;
        height: 48px;
        display: flex;
        align-items: center;
        font-size: 24px;
        .avatar{
          width: 48px;
          height: 48px;
          background-color: #7e8c8d;
          border-radius: 100%;
          vertical-align: middle;
          margin-right: 10px;
        }
        .id{
          vertical-align: middle;
        }
      }
      .look_desc{
        font-size: 28px;
        color: #7f7f7f;
        line-height: 45px;
        display: block;
        width: 690px;
        word-break: break-all;
      }
    }
    .tag{
      position: absolute;
      width: 16px;
      height: 16px;
      top:230px;
      left: 244px;
      border-radius: 100%;
      background-color: #f48f18;
      .center{
        position: absolute;
        width: 16px;
        height: 16px;
        background-color: #f48f18;
        border-radius: 100%;
        &.fade-leave-active{
          transition: all 1s;
        }
        &.fade-leave-to{
          transform: scale(4);
          opacity: 0;
        }
      }
    }
  }
</style>
