<template>
        <div class="bread">
            <span v-for="(item,index) in breadList" >
                <router-link :to="item.path">{{item.name}}</router-link>&gt;
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
                var newBread={name:this.$route.name,path:this.$route.fullPath};//当前页面的
                // debugger;
                var breadList=this.$store.state.breadListState;//获取breadList数组
                breadList.splice(breadNumber,breadList.length-breadNumber,newBread);
            
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