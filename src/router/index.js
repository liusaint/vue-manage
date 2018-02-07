console.log('router')
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '../modules/layout/layout.vue'

Vue.use(Router);

const userInfo = () => import('../modules/ucenter/userInfo.vue');
const userMessage = () => import('../modules/ucenter/message.vue');
const todo = () => import('../modules/ucenter/todo.vue');
const notice = () => import('../modules/ucenter/notice.vue');

export default new Router({
  routes: [
    {
      path: '/ucenter',
      name: 'ucenter',
      component: Layout,
		children: [{
			path: 'user-info',
			component: userInfo
		}, {
			path: 'message',
			component: userMessage
		}, {
			path: 'todo',
			component: todo
		}, {
			path: 'notice',
			component: notice
		}]
    }
  ]
})
