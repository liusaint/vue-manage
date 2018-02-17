<template>
	<div>
		<el-tabs v-model="hisVal" type="card" closable @tab-remove="removeTab">
			<el-tab-pane
			v-for="(item, index) in tabHisObj.editableTabs"
			:key="item.name"
			:label="item.title"
			:name="item.name"
			></el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
console.log('hisTab.vue');
import Vue from 'vue'
import { mapState } from 'vuex'

export default {
	data() {
		return {

		}

	},
	computed: {
		...mapState(['tabHisObj']),
		hisVal:{
			get:function(){
				return this.tabHisObj.editableTabsValue;
			},
			set:function(value){
				this.$store.commit('changeTabHisVal',value)
			}
		}
	},
	methods: {
		//删除标签。1.如果不是激活标签。则直接删除元素。2.是激活标签。则需要激活前面或后面的标签。
		removeTab(targetName){
			const tabArr = this.tabHisObj.editableTabs;
			let activeTabName = this.hisVal;
			if(targetName == activeTabName){			

				var that = this;
				tabArr.forEach(function(tab,index){
					if(tab.name != targetName){
						return;
					}
					var nextTab = tabArr[index-1]||tabArr[index+1];
					if(nextTab){
						that.hisVal = nextTab.name;
					}

				})
			}
			this.tabHisObj.editableTabs = tabArr.filter(tab=>tab.name!=targetName);

		}
	},
	

}
</script>