import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/components/layout'
import index from '@/components/index'
Vue.use(Router)



const a1 = (resolve) => {
	import ('@/components/a1').then((module) => {
		resolve(module)
	})
}

const a2 = () => import ('@/components/a2')


const a3 = () =>import ('@/components/a3')

const a4 = () => import ('@/components/a4')


const b1 = () => import ('@/components/b1')

const b2 = () => import ('@/components/b2')


export default new Router({
	routes: [{
			path: '/',
			name: '首页',
			component: Layout,
			children: [{
				path: '/',
				component: index,
				name: '首页',
				meta:{
					breadNumber:0
				}
			}]
		},

		{
			path: '/a',
			name: 'a',
			component: Layout,
			children: [{
				path: '/a1',
				component: a1,
				name: 'a1',
			}, {

				path: '/a2',
				component: a2,
				name: 'a2',
				meta: {
					breadNumber: 2
				}
			}, {
				path: '/a3',
				component: a3,
				name: 'a3',
				meta: {
					breadNumber: 3
				}
			}, {
				path: '/a4',
				component: a4,
				name: 'a4',
				meta: {
					breadNumber: 4
				}
			}]
		}, {
			path: '/b',
			name: 'b',
			component: Layout,
			children: [{
				path: '/b1',
				component: b1,
				name: 'b1',
			}, {
				path: '/b2',
				component: b2,
				name: 'b2',
				meta: {
					breadNumber: 2
				}
			}]
		},
	]
})