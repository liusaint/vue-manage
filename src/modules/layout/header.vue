<template>
	<header>
		<div class="layout-left">Vue Manage</div>
		<div class="layout-right">
			<i class="icon el-icon-bell"></i>
			<i class="icon iconfont icon-skin"></i>
                <el-dropdown class="user-info">
                    <div class="el-dropdown-link">
                        <img class="user-img" src="../../assets/images/user.jpg" >
                        <p>ls</p>
                        <i class="el-icon-arrow-down el-icon-right"></i>
                    </div>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>用户管理</el-dropdown-item>
                        <el-dropdown-item @click.native="logout">退出账号</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
		</div>

	</header>
</template>
<script>
console.log('header.vue');
export default {
	name: 's-header',
}
</script>

<style lang="less" >
header{
	@leftWidth:240px;
	width: 100%;
	height: 60px;
	background: #2e323d;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	.layout-left{
		width:@leftWidth;
		background:#1388ff;
		color: #fff;
		line-height: 60px;
		font-size: 24px;
		float: left;
	}
	.layout-right{
		float: right;
		margin-top: 13px;
		height: 30px;
		line-height: 30px;
		&>i{
			color:#fff;
			display: inline-block;
			font-size:24px;
			vertical-align: top;
			line-height:30px;
			margin-right: 15px;
		}
		.user-info{
			display: inline-block;
			padding: 0 20px 0 10px;
			color: #cdced1;
			p{
				float: left;
				margin: 0;
			}
			.el-icon-arrow-down {
				float: left;
				line-height: 30px;
				margin-left: 10px;
			}
		}
		.user-img{
			width: 30px;
			height: 30px;
			padding-right: 10px;
			float: left;
		}		

	}
	.user-img{
		height:40px;
		width:40px;
		border-radius: 50%;
	}
}

</style>