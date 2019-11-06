import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home.vue'
import Text from '@/pages/text/text.vue'
import TextList from '@/pages/textlist/textlist.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HOME',
      component: home
    },
    {
      path: '/text/:id',
      name: 'Text',
      component: Text
    },
    {
      path: '/textlist/:id',
      name: 'TextList',
      component: TextList
    }
  ]
})
