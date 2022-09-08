import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const Admin = {
	namespaced:true,
	state : {
		admins: [
				{adminId:"1",name:"harish varma",email:"harish@gmail.com",password:"harish333",status:"1"}
		],
		admin : {}
	},

	getters:{
		getAdmins(state){
				return state.admins;
		}
	},

	mutations : {
		setAdmins(state, data){
				console.log(data);
				state.admins = data;
		},
		setAdmin(state, data){
				console.log(data);
				state.admin = data;
		},
	},

	actions:{
		setAdmins(context, state){
		},
		setAdmin(context, state){
		}
	}
};

const store = new Vuex.Store({
	namespaced:true,
	modules:{
			admin:Admin
	}
});

export default store;