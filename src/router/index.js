import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Mhead from '@/components/header/mhead'
// import Mnav from '@/components/nav/mnav'
import Recommend from '@/components/recommend/recommend'

Vue.use(Router)

export default new Router({
    routes: [
        // {
        //   path: '/',
        //   name: 'HelloWorld',
        //   component: HelloWorld
        // },
        {
          path: '/',
          name: 'Recommend',
          component: Recommend
        }
    ]
})
