<template>
	<div>
		<el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
			<el-tab-pane
			:key="item.name"
			v-for="(item, index) in editableTabs"
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
import router from '../../router'

// router.beforeEach((to, from, next) => {
//   console.log(1);
//   next();
// })
// router.beforeEach((to, from, next) => {
//   console.log(2);
//   next();
// })
export default {
	data() {
		return {
			editableTabsValue: '2',
			editableTabs: [],
			tabIndex: 2
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
	}
}
</script>