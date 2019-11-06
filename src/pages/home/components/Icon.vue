<template>
    <div class="icons">
        <router-link to ="/textlist/0001" tag="div" class="icon" >
            <div class="icon-img"> &#xe62d;</div>
            <p class="icon-desc">文章合集</p>
        </router-link>
        <div class="icon">
            <div class="icon-img"> &#xe620;</div>
            <p class="icon-desc">读书记录</p>
        </div>
        <div class="icon">
            <div class="icon-img">&#xe628;</div>
            <p class="icon-desc">技术体会</p>
        </div>
        <div class="icon">
            <div class="icon-img"> &#xe621;</div>
            <p class="icon-desc">关于自己</p>
        </div>
    </div>
</template>
<script>
export default {
  name: 'HomeIcons'
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.icons
    display flex
    height: 0
    padding-bottom 25%
    .icon
        width: 25%
        text-align:center
        left .1rem
        .icon-img
            font-family: "iconfont" !important
            font-size 1rem
        .icon-desc
            color green
            text-align center
</style>
