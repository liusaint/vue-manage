console.log('router')
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '../modules/layout/layout.vue'

Vue.use(Router);

const userInfo = () =>
	import ('../modules/ucenter/userInfo.vue');
const userMessage = () =>
	import ('../modules/ucenter/message.vue');
const todo = () =>
	import ('../modules/ucenter/todo.vue');
const notice = () =>
	import ('../modules/ucenter/notice.vue');

const router = new Router({
	routes: [{
		path: '/ucenter',
		name: 'ucenter',
		component: Layout,
		children: [{
			path: 'user-info',
			component: userInfo,
			name: '用户信息',
		}, {
			path: 'message',
			component: userMessage,
			name: '消息中心',
		}, {
			path: 'todo',
			component: todo,
			name: '待办事项',
		}, {
			path: 'notice',
			component: notice,
			name: '公告通知'
		}]
	}]
})


//导航tab栏
router.beforeEach((to, from, next) => {

	const tabObj = {
		title: to.name,
		name: to.name,
		path: to.path
	}
	//???vue-router中使用vuex
	const tabHisObj = router.app.$store.state.tabHisObj;
	router.app.$store.commit('addTabHis',tabObj);
	
	next();
})

export default router;