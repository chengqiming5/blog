<template>
<div class="header">
<router-link to ="/">
    <div class="iconfont header-back">&#xe63e;</div>
</router-link>
</div>
</template>
<script>
export default {
  name: 'TextHeader'
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.header
    display flex
    height $handerHeigh
    line-height $handerHeigh
    background: $bgColor
    .header-back
        font-size 1.2rem
</style>
