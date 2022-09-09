import Axios from 'axios';
import { response } from 'express';

// make sure key will be the controller key passed in url
const Model = {};
Model.global = import('./../etc/constant')

const CoreModel = {
	data : {},
	endPoint : "",
    getURL: "http://localhost:3000/",
    component : null,

	setComponent(component){
		this.component = component;
		return this;
	},

    setEndPoint(newEndPoint){
        this.endPoint = newEndPoint
        console.log(this.endPoint)
        return this
    },
    setGetURL(Url){
        this.getURL = Model.global.baseurl.this.endPoint
        return this
    },
    setPostURL(Url){
        this.getURL = Url
        return this
    },
    setDeleteURL(Url){
        this.getURL = Url
        return this
    },
    getGetURL(){
        if(this.getURL){
            return this.getURL
        }else{
            return Model.global.baseurl
        }
    },

    getAll(){
        Axios
            .get(this.getGetURL())
            .then(response=> {
                this.data = response.data
            })
            .catch(error => {
                console.error(error.message)
            })
            .finally(response => {
                console.log('Get Request Completed.')
            })
    },

    get(request_id = null){
        Axios
            .get(`${this.getGetURL()}${request_id}`)
            .then(response=> {
                this.component.data = response.data
            })
            .catch(error => {
                console.error(error.message)
            })
            .finally(response => {
                console.log('Get Request Completed.')
            })
    },

    update(request_id = null, data = {}){
        Axios
		.patch(`${this.getGetURL()}${request_id}`, {
			data
		})
		.then(response => {
			if(response.status === 200) {
				this.setData()
			}
		})
		.catch(error => {
			console.error(error.message);
		})
		.finally(response => {
			console.log('listed');
		})
    },

    create(data = {}){
		Axios
		.post(this.getGetURL(), data)
		.then(response => {
			if(response.status === 201) {
				this.setData()
			}
		})
		.catch(error => {
			console.error(error.message);
		})
		.finally(response => {
			console.log('admin listed');
		})
	},

    setData(){
		Axios
		.get(this.getGetURL())
		.then(response => {
			this.component.data = response.data;
		})
		.catch(error => {
			console.error(error.message);
		})
		.finally(response => {
			console.log('data listed');
		})
	},

    delete(request_id = null) {
		Axios
		.delete(`${this.getGetURL()}${request_id}`)
		.then(response => {
			if(response.status === 200){
				this.setData()
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

export default CoreModel;