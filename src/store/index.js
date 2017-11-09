import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)



export default new Vuex.Store({
	state: {
		breadListState: [{
			name: '首页',
			path: '/',
			breadNumber:0
		}]
	},
	mutations: {
		breadListMutations(state, list) {
			state.breadListState = list;			
		}
	}

})