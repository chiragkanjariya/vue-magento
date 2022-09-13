import CoreModel from './core/core';

const Category = {
	component : null,
	setComponent(component){
		CoreModel.setComponent(component)
	},
	setCategoriesEndPoint(){
		CoreModel.setEndPoint('categories/')
	},
	createCategories(params){
		CoreModel.create(params)
	},
	findCategories(request_id){
		CoreModel.find(request_id)
	},
	setCategoryData(){
		CoreModel.setData()
	},
	categorydelete(request_id){
		CoreModel.delete(request_id)
	},
	categoryUpdate(data = {}){
		CoreModel.update(data)
	},
	editCategory(request_id){
		CoreModel.find(request_id)
	}
}

export default Category;

// import Axios from 'axios';

// const Category = {
// 	params : {},
// 	component : null,

// 	setComponent(component){
// 		this.component = component;
// 		return this;
// 	},

// 	setParams(params){
// 		let f = new FormData();
// 		for (const [k1, v1] of Object.entries(params)) {
// 				if(typeof v1 === 'object'){
// 					for (const [k2, v2] of Object.entries(v1)) {
// 						if(typeof v2 === 'object'){
// 							for (const [k3, v3] of Object.entries(v2)) {
// 									f.append(`${k1}[${k2}][${k3}]`,v3);    
// 							}
// 						}
// 					else{
// 						f.append(`${k1}[${k2}]`,v2);
// 					}
// 				}
// 			}
// 			else{
// 				f.append(k1,v1);
// 			}
// 		}
// 		this.params = f;
// 		return this;
// 	},

// 	setCategories(){
// 		Axios
// 		.get('http://localhost:3000/categories')
// 		.then(response => {
// 			this.component.categories = response.data;
// 		})
// 		.catch(error => {
// 			console.error(error.message);
// 		})
// 		.finally(response => {
// 			console.log('category listed');
// 		})
// 	},

// 	setCategory(){
// 		Axios
// 		.post('http://localhost:3000/categories', this.params)
// 		.then(response => {
// 			this.component.category = response.data;
// 		})
// 		.catch(error => {
// 			console.error(error.message);
// 		})
// 		.finally(response => {
// 			console.log('category listed');
// 		})
// 	},

// 	saveCategory(categoryData){
// 		Axios
// 		.post('http://localhost:3000/categories', categoryData)
// 		.then(response => {
// 			if(response.status === 201) {
// 				alert("Data Added Successfully")
// 				this.setCategories()
// 			}
// 		})
// 		.catch(error => {
// 			console.error(error.message);
// 		})
// 		.finally(response => {
// 			console.log('category listed');
// 		})
// 	},

// 	editCategory(id){
// 		Axios
// 		.get(`http://localhost:3000/categories/${id}`)
// 		.then(response => {
// 			this.component.category = response.data;
// 		})
// 		.catch(error => {
// 			console.error(error.message);
// 		})
// 		.finally(response => {
// 			console.log('category listed');
// 		})
// 	},

// 	updateCategory(categoryData) {
// 		Axios
// 		.patch(`http://localhost:3000/categories/${categoryData.id}`, {
// 			title: categoryData.title,
// 		})
// 		.then(response => {
// 			if(response.status === 200) {
// 				alert("Data Updated Successfully")
// 				this.setCategories()
// 			}
// 		})
// 		.catch(error => {
// 			console.error(error.message);
// 		})
// 		.finally(response => {
// 			console.log('category listed');
// 		})
// 	},

// 	deleteCategory(id) {
// 		Axios
// 		.delete(`http://localhost:3000/categories/${id}`)
// 		.then(response => {
// 			if(response.status === 200){
// 				alert('Data Deleted SuccessFully')
// 				this.setCategories()
// 			}
// 		})
// 		.catch(error => {
// 			console.error(error.message);
// 		})
// 		.finally(response => {
// 			console.log('category listed');
// 		})
// 	}
// }

// export default Category;