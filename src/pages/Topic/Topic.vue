<template>
  <div class="topic_wrapper">

    <header class="topic_top">
      <div class="header_inner">
        <router-link to="/msite" class="home_icon"></router-link>
        <router-link to="/msite" class="title_wrapper">
          <div class="topic_title"></div>
        </router-link>
        <div class="right_wrap">
          <div class="search_icon"></div>
          <div class="shop_icon"></div>
        </div>
      </div>
    </header>
<!--lunbo-->
    <TopicSwiper></TopicSwiper>

    <!--bscroll-->
    <TopicScrollBar></TopicScrollBar>

    <!--recommendtoyou-->
    <RecommendYou></RecommendYou>

    <!--tenfifteen-->
    <TenFifteen></TenFifteen>

    <Classic></Classic>

    <Look></Look>

    <More></More>

  </div>
</template>

<script>
  import TopicScrollBar from './components/TopicScrollBar/TopicScrollBar.vue'
  import TopicSwiper from '../../components/TopicSwiper/TopicSwiper.vue'
  import RecommendYou from '../../components/Topic/RecommendYou/RecommendYou.vue'
  import TenFifteen from '../../components/Topic/TenFifteen/TenFifteen.vue'
  import Classic from '../../components/Topic/Classic/Classic.vue'
  import Look from '../../components/Topic/Look/Look.vue'
  import More from '../../components/Topic/More/More.vue'
  export default {
    components: {
      TopicSwiper,
      TopicScrollBar,
      RecommendYou,
      TenFifteen,
      Classic,
      Look,
      More
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
.topic_wrapper{
  width: 100%;
  overflow: hidden;
  background-color: white;
  padding-bottom: 98px;
  box-sizing: border-box;
  .topic_top{
    position: fixed;
    left:0;
    top:0;
    height: 87px;
    width: 100%;
    z-index:2;
    .header_inner{
      background-color: #fafafa;
      height:100%;
      padding:0 16px 0 24px;
      position: relative;
      line-height: 87px;
      .home_icon{
        width: 48px;
        display: inline-block;
        height:44px;
        background-repeat: no-repeat;
        background-position: 0 -74px;
        background-size: 172px 398px;
        background-image: url("/static/images/xb.png");
      }
      .title_wrapper{
        .topic_title{
          width: 172px;
          height: 54px;
          display: inline-block;
          /*vertical-align: middle;*/
          position: absolute;
          left: 0;
          top:0;
          bottom:0;
          right:0;
          margin:auto;
          background-image: url("/static/images/xb.png");
          background-repeat: no-repeat;
          background-position: 0 -128px;
          background-size: 172px 398px;
        }
      }
    }

      .right_wrap{
        float: right;
        /*background-color: #02a774;*/
        display: inline-block;
        width: 148px;
        height: 64px;
        /*box-sizing: border-box;*/
        /*vertical-align: baseline;*/
        /*line-height: 84px;*/
        margin-top: 10px;
        .search_icon{
          box-sizing: border-box;
          /*vertical-align: baseline;*/
          width: 64px;
          height: 64px;
          /*background-color: white;*/
          padding-right: 20px;
          float: left;
          margin-right: 20px;
          background-repeat: no-repeat;
          background-position: 0 -334px;
          background-size: 172px 398px;
          background-image: url("/static/images/xb.png");
        }
        .shop_icon{
          width: 64px;
          height: 64px;
          /*background-color: white;*/
          float: left;
          background-repeat: no-repeat;
          background-position: 0 0px;
          background-size: 172px 398px;
          background-image: url("/static/images/xb.png");
        }

      }

  }
}
</style>
