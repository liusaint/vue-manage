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
          this.getBreadcrumb(true);//刷新的参数为true
        },
        data() {
            return {
                 breadList: [] // 路由集合
            }
        },
        methods: {
            getBreadcrumb(isreload) {
                var breadNumber= typeof(this.$route.meta.breadNumber)!="undefined"?this.$route.meta.breadNumber:1;//默认为1
                var newBread={name:this.$route.name,path:this.$route.fullPath};//当前页面的
                var breadList=this.$store.getters.breadListState;//获取breadList数组
                breadList.splice(breadNumber,breadList.length-breadNumber,newBread);
                var breadList=JSON.stringify(breadList);
                this.$store.commit('breadListMutations',breadList);
                this.breadList=this.$store.getters.breadListState;
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