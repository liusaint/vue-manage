import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const state = {
	tabHisObj: {
		editableTabsValue: '2',
		editableTabs: [
		// {
		// 	title: 'Tab 1',
		// 	name: '1',
		// 	content: 'Tab 1 content'
		// }, {
		// 	title: 'Tab 2',
		// 	name: '2',
		// 	content: 'Tab 2 content'
		// }
		],
	}
}

const mutations = {
	//修改tab的value。
	changeTabHisVal:function(state,playload){
		state.tabHisObj.editableTabsValue = playload;
	},
	addTabHis:function(state,playload){
		var isIn = false;
		state.tabHisObj.editableTabs.forEach(function(value,index, array) {
			if(value.path == playload.path){
				isIn = true;
			}
		});
		if(!isIn){
			state.tabHisObj.editableTabs.push(playload);
		}
		//赋值
		state.tabHisObj.editableTabsValue = playload.name;
	}

}

const actions = {

}

export default new Vuex.Store({
	state,
	mutations,
})