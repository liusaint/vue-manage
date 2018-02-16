import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const state = {
	tabHisObj: {
		editableTabsValue: '2',
		editableTabs: [
		{
			title: 'Tab 1',
			name: '1',
			content: 'Tab 1 content'
		}, {
			title: 'Tab 2',
			name: '2',
			content: 'Tab 2 content'
		}
		],
	}
}

const mutations = {
	//修改tab的value。
	changeTabHisVal:function(state,playload){
		state.tabHisObj.editableTabsValue = playload;
	},

}

const actions = {

}

export default new Vuex.Store({
	state,
	mutations,
})