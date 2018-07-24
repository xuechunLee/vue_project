<template>
  <div class="text_scroll">
      <ul class="ul_wraper" ref="ul">
        <li ref="li">
          <div class="item_wraper recommend">
            <span class="item">推荐</span>
          </div>
        </li>
        <li v-for="(item,index) in type" :key="index" >
        <div class="item_wraper">
          <span class="item">{{item.name}}</span>
        </div>
      </li>
      </ul>

  </div>
</template>

<script>
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
const count = document.getElementsByTagName("li").length

console.log(count)

  export default {
    mounted(){
//      debugger
      this.$store.dispatch('getTypeNames')
      const ul = this.$refs.ul;

      const count =11
      console.log(count);
      const width = 70 * count + 'px'
      ul.style.width = width
//      debugger
      new BScroll('.text_scroll',{
        scrollX:true
      })

    },
//    methods:{
//      _initScroll(){
//        const ul = this.$refs.ul
//        const count = 12;
//        console.log(count);
//        const width = 68 * count + 'px'
//        ul.style.width = width
////        debugger
//        this.scroll = new BScroll('.text_scroll',{
//          scrollX:true
//        })
//      }
//    },
//    watch:{
//      type(){
//        if(!this.scroll){
//          this.$nextTick(()=>{
//            this._initScroll()
////            debugger
//          })
//        }
//      }
//    },
    computed:{
      ...mapState(['type']),

    },
    components: {}
  }
</script>

<style lang="less" rel="stylesheet/less">
  .text_scroll{

    ul{
      display: flex;
      list-style: none;
      flex-shrink: 0;
      .item_wraper{
        display: flex;
        flex:1;
        width: 88px;
        height: 60px;
        margin-left: 48px;
        color: #333;
        /*box-sizing: border-box;*/
        &.recommend{
          color: #b4282d;
          border-bottom: 1px solid #b4282d;
          margin-left: 20px;
        }
        .item{
          margin-top: 10px;
          position: absolute;
          padding: 0 16px;
          font-size: 28px;
        }
      }
    }
  }
</style>
