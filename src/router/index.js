import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import about from '@/components/about/about'
import mine from '@/components/mine/mine'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
		{
			path: '/index',
			name: 'index',
			component: index
		},
		{
			path: '/about',
			name: 'about',
			component: about
		},
		{
			path: '/mine',
			name: 'mine',
			component: mine
		},
  ]
})
