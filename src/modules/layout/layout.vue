<template>
	<div>
		<SelfHeader/>
		<Left/>
		<router-view></router-view>
		<SelfFooter/>
	</div>
</template>
<script>
import SelfHeader from './header.vue';
import SelfFooter from './footer.vue';
import Left from "./left.vue";
export default {
	name: 'layout',
	components:{
		SelfHeader,SelfFooter,Left
	}
}
</script>