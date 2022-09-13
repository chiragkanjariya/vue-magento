import CoreModel from './core/core';

const Admin = {
	component : null,
	setComponent(component){
		CoreModel.setComponent(component)
	},
	setAdminEndPoint(){
		CoreModel.setEndPoint('admins/')
	},
	createAdmin(params){
		CoreModel.create(params)
	},
	findAdmin(request_id){
		CoreModel.find(request_id)
	},
	setAdminData(){
		CoreModel.setData()
	},
	admindelete(request_id){
		CoreModel.delete(request_id)
	},
	adminUpdate(data = {}){
		console.log("Data : ",data);
	}
}

export default Admin;