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
                breadList: [] // 路由集合
            }
        },
        methods: {
        	getBreadcrumb() {
                var breadNumber= typeof(this.$route.meta.breadNumber)!="undefined"?this.$route.meta.breadNumber:1;//默认为1
                var newBread={name:this.$route.name,path:this.$route.fullPath,breadNumber:breadNumber};//当前页面的
                var breadList=this.$store.state.breadListState;//获取breadList数组

                breadList.splice(breadNumber,breadList.length-breadNumber,newBread);

				//检测面包屑，如果出现　首页>3>2　这种顺序颠倒的情况。只留首页。　
				for (var i = 1; i < breadList.length; i++) {
					var preBread = breadList[i-1];
					var bread = breadList[i];

					if(preBread.breadNumber>bread.breadNumber){
						breadList.splice(1,breadList.length-1,newBread);
						break;
					}
				}

				this.$store.commit('breadListMutations',breadList);
				this.breadList=breadList;
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