<template>
  <section class="first_view_wraper">
    <section class="pic_wrap">
      <img src="./images/top1.jpg"></img>
      <img src="./images/top2.jpg"></img>
    </section>
    <section class="bottom_pic_wraper">
      <img src="./images/bottom.jpg"></img>
      <div class="router_mask"  @click="$router.push('/msite')"></div>
    </section>
  </section>
</template>

<script>

  export default {
    components: {}
  }
</script>

<style lang="less" rel="stylesheet/less">
  .first_view_wraper{
    width: 100%;
    .pic_wrap img{
      width: 100%;
      vertical-align: top;
    }
    .bottom_pic_wraper{
      position: relative;
      img{
        width: 100%;
      }
      .router_mask{
        position: absolute;
        opacity: 0.5;
        width: 254px;
        height:30px;
        left: 250px;
        top:230px;
      }
    }

  }


</style>
