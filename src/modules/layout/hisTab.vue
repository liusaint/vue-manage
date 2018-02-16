<template>
	<div>
		<el-tabs v-model="hisVal" type="card" closable >
			<el-tab-pane
			v-for="(item, index) in tabHisObj.editableTabs"
			:key="item.name"
			:label="item.title"
			:name="item.name"
			>
		</el-tab-pane>
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
		handleTabsEdit(targetName, action) {
			if (action === 'add') {
				let newTabName = ++this.tabIndex + '';
				this.editableTabs.push({
					title: 'New Tab',
					name: newTabName,
					content: 'New Tab content'
				});
				this.editableTabsValue = newTabName;
			}
			if (action === 'remove') {
				let tabs = this.editableTabs;
				let activeName = this.editableTabsValue;
				if (activeName === targetName) {
					tabs.forEach((tab, index) => {
						if (tab.name === targetName) {
							let nextTab = tabs[index + 1] || tabs[index - 1];
							if (nextTab) {
								activeName = nextTab.name;
							}
						}
					});
				}

				this.editableTabsValue = activeName;
				this.editableTabs = tabs.filter(tab => tab.name !== targetName);
			}
		}
	},

}
</script>