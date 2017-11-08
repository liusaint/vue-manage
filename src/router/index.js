import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/components/layout'
import index from '@/components/index'
Vue.use(Router)



const a1 = (resolve) => {
	import ('@/components/a1').then((module) => {
		resolve(module)
	})
}

const a2 = (resolve) => {
	import ('@/components/a2').then((module) => {
		resolve(module)
	})
}

const a3 = (resolve) => {
	import ('@/components/a3').then((module) => {
		resolve(module)
	})
}

const b1 = (resolve) => {
	import ('@/components/b1').then((module) => {
		resolve(module)
	})
}

const b2 = (resolve) => {
	import ('@/components/b2').then((module) => {
		resolve(module)
	})
}

export default new Router({
	routes: [{
			path: '/',
			name: '首页',
			component: index,
		},

		{
			path: '/a',
			name: 'a',
			component: Layout,
			children: [{
				path: 'a1',
				component: a1,
				name: 'a1',
			}, {

				path: 'a2',
				component: a2,
				name: 'a2',
				meta: {
					breadNumber: 2
				}
			},
			{
				path: 'a3',
				component: a3,
				name: 'a3',
				meta: {
					breadNumber: 3
				}
			}]
		}, {
			path: '/b',
			name: 'b',
			component: Layout,
			children: [{
				path: 'b1',
				component: b1,
				name: 'b1',
			}, {
				path: 'b2',
				component: b2,
				name: 'b2',
				meta: {
					breadNumber: 2
				}
			}]
		},
	]
})