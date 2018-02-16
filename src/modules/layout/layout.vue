<template>
	<div class="page-wrap">
		<SelfHeader/>
		<div class="page-container">
			<Left/>
			<div class="page-content">
				<hisTab/>
				<router-view/>			
			</div>			
		</div>
		<SelfFooter/>		
	</div>
</template>
<script>
console.log('layout');
import SelfFooter from './footer.vue';
import SelfHeader from './header.vue';

import Left from "./left.vue";
import hisTab from "./hisTab.vue";
export default {
	name: 'layout',
	components:{
		SelfHeader,SelfFooter,Left,hisTab
	}
}
</script >

<style lang="less">
/* 整个layout的样式代码统一写在这里，方便调试*/
@headerHeight: 60px;
@footerHeight: 40px;
@menuWidth: 240px;

html,body{
	height: 100%;
}
#app,.page-wrap{
	height: 100%;
}
.page-container {
	/* less的兼容写法　calc ???*/
   height:calc(~"100% - @{headerHeight} - @{footerHeight}");   
} 
.page-content {
	margin-left: @menuWidth;
	padding:10px;
	padding-bottom: @footerHeight;
	height: 100%;
	position: relative;
    overflow: auto;
}
footer {
	color: #999;
	font-size: 14px;
	line-height: @footerHeight;
	border-top:1px solid #ddd;
	position:absolute;
	bottom:0;
	width: 100%;
}
.left-menu{
	width: @menuWidth;
	float: left;
	height: 100%;
	overflow: auto;
}

</style>
