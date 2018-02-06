<template>
	<header>
		<div class="layout-left">Vue Manage</div>
		<div class="layout-right">
			<i class="el-icon-bell"></i>
			<i class="iconfont icon-skin"></i>
		</div>

	</header>
</template>
<script>

export default {
	// name: 'header',
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
		margin-left: @leftWidth;
		i{
			color:#fff;
		}
	}
}

</style>