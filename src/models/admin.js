import Axios from 'axios';

const Admin = {
	params : {},
	component : null,

	setComponent(component){
		this.component = component;
		return this;
	},

	setParams(params){
		let f = new FormData();
		for (const [k1, v1] of Object.entries(params)) {
				if(typeof v1 === 'object'){
					for (const [k2, v2] of Object.entries(v1)) {
						if(typeof v2 === 'object'){
							for (const [k3, v3] of Object.entries(v2)) {
									f.append(`${k1}[${k2}][${k3}]`,v3);    
							}
						}
					else{
						f.append(`${k1}[${k2}]`,v2);
					}
				}
			}
			else{
				f.append(k1,v1);
			}
		}
		this.params = f;
		return this;
	},

	setAdmins(){
		Axios
		.get('http://localhost:3000/admins')
		.then(response => {
			this.component.admins = response.data;
		})
		.catch(error => {
			console.error(error.message);
		})
		.finally(response => {
			console.log('admin listed');
		})
	},

	setAdmin(){
		Axios
		.post('http://localhost:3000/admins', this.params)
		.then(response => {
			this.component.admin = response.data;
		})
		.catch(error => {
			console.error(error.message);
		})
		.finally(response => {
			console.log('admin listed');
		})
	},

	saveAdmin(adminData){
		Axios
		.post('http://localhost:3000/admins', adminData)
		.then(response => {
			if(response.status === 201) {
				alert("Data Added Successfully")
				this.setAdmins()
			}
		})
		.catch(error => {
			console.error(error.message);
		})
		.finally(response => {
			console.log('admin listed');
		})
	},

	editAdmin(id){
		Axios
		.get(`http://localhost:3000/admins/${id}`)
		.then(response => {
			this.component.admin = response.data;
		})
		.catch(error => {
			console.error(error.message);
		})
		.finally(response => {
			console.log('admin listed');
		})
	},

	updateAdmin(adminData) {
		Axios
		.patch(`http://localhost:3000/admins/${adminData.id}`, {
			name: adminData.name,
			username: adminData.username,
			phone: adminData.phone,
			email: adminData.email,
		})
		.then(response => {
			if(response.status === 200) {
				alert("Data Updated Successfully")
				this.setAdmins()
			}
		})
		.catch(error => {
			console.error(error.message);
		})
		.finally(response => {
			console.log('admin listed');
		})
	},

	deleteAdmin(id) {
		Axios
		.delete(`http://localhost:3000/admins/${id}`)
		.then(response => {
			if(response.status === 200){
				alert('Data Deleted SuccessFully')
				this.setAdmins()
			}
		})
		.catch(error => {
			console.error(error.message);
		})
		.finally(response => {
			console.log('admin listed');
		})
	}
}

export default Admin;