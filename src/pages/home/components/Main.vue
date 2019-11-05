<template>
<div class="textList">
    <div class="area">
        <div class="title">最近更新</div>
        <router-link to ="/text/0001" tag="ul">
            <li>
                <div class="item-wrapper"
                    v-for="item of recent"
                    :key="item.id"
                    >
                    <img class="item-img" :src="item.src" alt="imge"/>
                    <div class="item-info">
                        <p class="item-name">{{item.title}}</p>
                        <p class="item-lastname">最后更新时间：{{item.time}}</p>
                        <div class="item-label">{{item.label}}</div>
                    </div>
                </div>
            </li>
        </router-link>
        <div class="title">推荐阅读</div>
        <ul>
            <li>
                <div class="item-wrapper">
                    <img class="item-img" src="static/images/1.jpg" alt=""/>
                    <div class="item-info">
                        <p class="item-name">xxxxx</p>
                        <p class="item-lastname">最后更新时间：2018，1}</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>
<script>
export default {
  name: 'HomeMain',
  props: {
      recent: Array
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.title
    height $handerHeigh/2
    background: $bgColor
    border-radius: .01rem
    font-size .4rem
.item-wrapper
    display flex
    height 2rem
    padding .05rem
    .item-img
        display flex
        width 1.8rem
        height 1.8rem
        padding .1rem
    .item-info
        flex 1
        padding .1rem
        .item-name
            line-height 1rem
            font-size .44rem
        .item-time
            flex 1
            line-height .4rem
</style>
