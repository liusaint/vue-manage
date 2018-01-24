<template>	
	<div>
		
		<header>这是头部</header>
		<bread></bread>
		<div class="container clear">
		<left-nav></left-nav>
		<div class="main-container">
			<router-view>这是内容区</router-view>
		</div>
		</div>
		<footer>这是底部</footer>

	</div>
</template>

<script>
	import leftNav from '@/components/leftNav'
	import bread from '@/components/bread'  
	export default {
		components:{
			leftNav,bread
		}

	}




</script>

<style>
.clear:after{
	content: '';
	display: table;
	clear: both;
	overflow: hidden;

}
	.main-container{
		float: left;
		width: 70%
	}
</style>