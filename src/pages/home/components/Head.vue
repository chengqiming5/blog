<template>
<div class="header">
    <div class="header-left">
        <div class="image">
            <img src="static/images/img.jpg" alt="headimage">
        </div>
    </div>
    <div class ="header-input">
            <div class="iconfont search-icon">
                &#xe626;
            </div>
            <div class="search-info">
                搜索关键字、日期、标签
            </div>
    </div>
</div>
</template>
<script>
export default {
  name: 'HomeHeader'
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.header
    display flex
    height $handerHeigh
    line-height $handerHeigh
    background: $bgColor
    .image
        width: .6rem
        padding  .13rem
        img
            border-radius: .5rem;
.header-input
    flex: 1
    height :.64rem
    margin-top: .12rem
    margin-right .12rem
    background:#fff
    border-radius: .1rem
    position relative
    .search-icon
        position absolute
        font-size: 25px;
        top 0
        left 0
    .search-info
        color green
        text-align center
</style>
