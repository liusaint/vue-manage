<template>



	<el-menu
	default-active="2"
	class="left-menu"
	@open=""
	@close="">
	<el-submenu index="45" >
		<template slot="title">
			<i class="iconfont icon-account"></i><span slot="title" class="title">个人中心</span>
		</template>
		<el-menu-item index="1" :key="1" >
			<router-link to="/ucenter/notice">个人信息</router-link>
		</el-menu-item>
		<el-menu-item index="2" :key="2" >
			<router-link to="/ucenter/message">消息中心</router-link>
		</el-menu-item>
		<el-menu-item index="3" :key="3" >
			<router-link to="/ucenter/todo">待办事项</router-link>
		</el-menu-item>
		<el-menu-item index="4" :key="4" >
			<router-link to="/ucenter/notice">公告通知</router-link>
		</el-menu-item>

	</el-submenu>

</el-menu>


</template>
<script>
console.log('left.vue');
export default {
	name: 'left',
}
</script>

