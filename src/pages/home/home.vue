<template>
<div>
    <home-header></home-header>
    <home-icons></home-icons>
    <home-main  :recent="recent"
                ></home-main>
</div>
</template>
<script>
import axios from'axios'
import HomeHeader from  './components/Head'
import HomeIcons from './components/Icon'
import HomeMain from './components/Main'
export default {
  name: 'HOME',
  components: {
    HomeHeader,
    HomeMain,
    HomeIcons
  },
  methods:{
    getTextInfo(){
      axios.get('/api/text.json')
           .then(this.handleGetTextInfoSucc)
    },
    handleGetTextInfoSucc(res){
      res = res.data
      if(res.ret && res.data){
            const data = res.data
            this.recent = data.recent
      }
    }
  },
  mounted(){
    this.getTextInfo()
  },
  data(){
    return{
      recent: []
      }
  }
}
</script>
<style>
</style>
