<template>
	<div>
		<Header/>
		<Left/>
		<router-view></router-view>
		<Footer/>
	</div>
</template>
<script>
import Header from './header.vue';
import Footer from './footer.vue';
import Left from "./left.vue";
export default {
	name: 'layout',
	components:{
		Header,Footer,Left
	}
}
</script>