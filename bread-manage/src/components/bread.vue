<template>
	<div class="bread">
		<span v-for="(item,index) in breadList" >
			<router-link :to="item.path">{{item.name}}</router-link>
			&gt;
		</span>
	</div>
</template>
<script>

export default{
	created() {
		this.getBreadcrumb();
	},
	data() {
		return {
			breadList: [{
				name: '首页',
				path: '/',
				breadNumber:0
			}]
		}
	},
	methods: {
		getBreadcrumb() {
                var breadNumber= typeof(this.$route.meta.breadNumber)!="undefined"?this.$route.meta.breadNumber:1;//默认为1
                var newBread={name:this.$route.name,path:this.$route.fullPath,breadNumber:breadNumber};//当前页面的
                var breadList=this.breadList;//获取breadList数组

				var spliceStart = breadList.length;

				//层级排序
				for (var i = 0; i < breadList.length; i++) {					

					var bread = breadList[i];

					if(breadNumber<=bread.breadNumber){
						spliceStart = i;
						break;
					}

				}	
			
				breadList.splice(spliceStart,breadList.length-spliceStart,newBread);



		
			} 



		},
		watch: {
			$route () {
				this.getBreadcrumb();
			}
		},
	}
	</script>

	<style>
	.bread{
		text-align: left;
	}
	</style>