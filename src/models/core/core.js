import Axios from 'axios';
import Global from './../../etc/constant';
// make sure key will be the controller key passed in url

const CoreModel = {
	data : [],
	endPoint : "",
    baseURL: Global.baseurl,
    component : null,

	setComponent(component){
		this.component = component;
		return this;
	},

    setEndPoint(newEndPoint){
        this.endPoint = newEndPoint
        return this
    },
    // setGetURL(Url){
    //     this.getURL = Model.global.baseurl.this.endPoint
    //     return this
    // },
    setPostURL(Url){
        this.baseURL = Url
        return this
    },
    setDeleteURL(Url){
        this.baseURL = Url
        return this
    },
    getGetURL(){
        return this.baseURL+this.endPoint
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

	edit(request_id = null){
		Axios
		.get(`${this.getGetURL()}${request_id}`)
		.then(response => {
			this.component.data = response.data;
		})
		.catch(error => {
			console.error(error.message);
		})
		.finally(response => {
			console.log('admin listed');
		})
	},
    update( data = {}){
        Axios
		.patch(`${this.getGetURL()}${data.id}`, {
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