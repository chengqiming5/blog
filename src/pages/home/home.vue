<template>
<div>
    <home-header></home-header>
    <home-icons></home-icons>
    <home-main></home-main>
</div>
</template>
<script>
import HomeHeader from './components/Head'
import HomeIcons from './components/Icon'
import HomeMain from './components/Main'
export default {
  name: 'HOME',
  components: {
    HomeHeader,
    HomeMain,
    HomeIcons
  }
}
</script>
<style>
</style>
