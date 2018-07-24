<template>
  <footer class="footer_guide">
    <span class="guide_item" @click="goTo('/msite')" :class="{on:'/msite' === $route.path}">
      <span class="item_icon">
        <i class="footer_icon_msite" :class="{on:'/msite' === $route.path}"></i>
      </span>
      <span>首页</span>
    </span>
    <span class="guide_item" @click="goTo('/topic')" :class="{on:'/topic' === $route.path}">
      <span class="item_icon">
        <i class="footer_icon_topic" :class="{on:'/topic' === $route.path}"></i>
      </span>
      <span>识物</span>
    </span>
    <span class="guide_item" @click="goTo('/item')" :class="{on:'/item' === $route.path}">
      <span class="item_icon">
        <i class="footer_icon_item" :class="{on:'/item' === $route.path}"></i>
      </span>
      <span>分类</span>
    </span>
    <span class="guide_item" @click="goTo('/cart')" :class="{on:'/cart' === $route.path}">
      <span class="item_icon">
        <i class="footer_icon_cart" :class="{on:'/cart' === $route.path}"></i>
      </span>
      <span>购物车</span>
    </span>
    <span class="guide_item" @click="goTo('/personal')" :class="{on:'/personal' === $route.path}">
      <span class="item_icon">
        <i class="footer_icon_personal" :class="{on:'/personal' === $route.path}"></i>
      </span>
    <span>个人</span>
    </span>
  </footer>
</template>

<script>

  export default {
    methods:{
      goTo(path){
        this.$router.replace(path)
      }
    },
    components: {}
  }
</script>

<style lang="less" rel="stylesheet/less">
  .footer_guide{
    position:fixed;
    z-index:100;
    left: 0;
    bottom:0;
    background-color: #fafafa;
    width:100%;
    height:98px;
    display: flex;
    border-top:1px solid #d9d9d9;
    color: #666;
    .guide_item{
      margin-top: 14px;
      display: flex;
      flex:1;
      text-align: center;
      flex-direction:column;
      align-items: center;
      width: 48px;
      height:71px;
      &.on{
        color:#b4282d;
      }
      span{
        font-size: 24px;
        i{
          display: inline-block;
          width: 40px;
          height:40px;
          background-repeat:no-repeat;
          background-image: url('/static/images/footer.png');
          vertical-align:middle;
          background-size: 40px 490px;
          &.footer_icon_msite{
            background-position: 0 -250px;
            &.on{
              background-position: 0 -200px;
            }
          }
          &.footer_icon_topic{
            background-position: 0 -350px;
            &.on{
              background-position: 0 -300px;
            }
          }
          &.footer_icon_item{
            background-position: 0 -150px;
            &.on{
              background-position: 0 -100px;
            }
          }
          &.footer_icon_cart{
            background-position: 0 -50px;
            &.on{
              background-position: 0 0;
            }
          }
          &.footer_icon_personal{
            background-position: 0 -450px;
            &.on{
              background-position: 0 -400px;
            }
          }
        }

      }
    }
  }
</style>
