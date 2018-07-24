<template>
  <div class="more">
    <div class="more_header">
      <span class="title">更多精彩</span>
    </div>
    <div class="more_main" v-for="(findMore, index) in findMores" :key="index">
      <img  v-if="findMore.picList.length === 0" :src="findMore.itemPicUrl" alt="">
      <div class="three_pic_wrapper" v-if="findMore.picList.length !== 0">
        <!--<div class="pic1"></div>-->
        <img class="pic1" :src="findMore.picList[0]" alt="">
        <div class="pic23">
          <!--<div class="pic2"></div>-->
          <img class="pic2" :src="findMore.picList[1]" alt="">
          <!--<div class="pic3"></div>-->
          <img class="pic3" :src="findMore.picList[2]" alt="">
        </div>
      </div>
      <div class="desc ellipsis">{{findMore.subtitle}}</div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    components: {},
    computed: {
      ...mapState(['findMores'])
    },
    mounted(){
      this.$store.dispatch('getFindMores')
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
.more{
  margin:0 30px 30px 30px;
  background-color: #fafafa;
  .more_header{
    height: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    &:after,&:before{
      content: '';
      display: block;
      height:1px;
      background-color: rgba(221,153,153,0.6);;
      width: 264px;
      .title{
        display: block;
        margin:0 24px;
        padding: 0 24px;
        color: #333;
      }
    }
  }
  .more_main{
    padding: 24px;
    box-sizing: border-box;
    margin-bottom: 30px;
    img{
      height: 360px;
      background-color: #02a774;
    }
    .three_pic_wrapper{
      /*height: 360px;*/
      display: flex;
      .pic1{
        width: 460px;
        height: 360px;
        background-color: #7e8c8d;
        margin-right: 4px;

      }
      .pic23{
        /*width: 178px;*/
        /*height: 178px;*/
        /*background-color: #7e8c8d;*/
        /*margin-bottom: 4px;*/
        display: flex;
        flex-direction: column;
        float: right;
        .pic2{
          width: 178px;
          height: 178px;
          background-color: #7e8c8d;
          margin-bottom: 4px;
        }
        .pic3{
          width: 178px;
          height: 178px;
          background-color: #7e8c8d;
          /*margin-bottom: 4px;*/
        }
      }


    }
    .desc{
      padding-top: 28px;
      padding-bottom: 29px;
      line-height: 33px;
      font-size: 28px;
    }
  }
}
</style>
