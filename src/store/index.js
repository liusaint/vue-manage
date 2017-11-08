import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)



export default new Vuex.Store({
	state: {
		breadListState: [{
			name: '首页',
			path: '/'
		}]
	},
	mutations: {
		breadListMutations(getters, list) {
			getters.breadListState = list;
			sessionStorage.setItem('breadListStorage', list);
		}
	},
	getters: {
		breadListState() {
			return JSON.parse(sessionStorage.getItem('breadListStorage')) || [];
		}
	}
})