<template>
    <div>
      <div class="container py-1 mb-3">
        <h4>{{$route.params.action === 'edit' ? 'Edit Admin' : 'New Admin' }} 
          <router-link to="/admin/list" class="btn btn-secondary btn-sm float-right" role="button" aria-pressed="true">Back</router-link> 
        </h4>
      </div>
      <div class="container border py-1 mb-3">
      <form>
        <div class="form-group w-25">
          <label>UserName</label>
          <input type="text" v-model="admin.username" class="form-control">
        </div>
        <div class="form-group w-25">
          <label>Name</label>
          <input type="text" v-model="admin.name" class="form-control">
        </div>
        <div class="form-group w-25">
          <label>Email </label>
          <input type="text" v-model="admin.email" class="form-control">
        </div>
        <div class="form-group w-25">
          <label>Phone Number </label>
          <input type="text" v-model="admin.phone" class="form-control">
        </div>
        <div class="form-group">
          <a v-if="this.$route.params.action === 'edit'" class="btn btn-secondary btn-sm mr-2" @click="updateAdmin()">Update</a>
          <a v-else class="btn btn-secondary btn-sm mr-2" @click="saveAdmin()">Save</a>
          <router-link to="/admin/list" class="btn btn-secondary btn-sm">Cancel</router-link>
        </div>
      </form>
    </div>
    </div>
</template>

<script>
import Template from './../core/template';
import store from "./../../store/admin";
import Admin from "./../../models/admin";

export default {
  name : 'ViewAdminEdit',
  extends : Template,
  data() {
    return {
      admin : {
        name: '',
        email: '',
        phone: '',
        username: ''
      }
    }
  },
  mounted() {
    if(this.$route.params.action === 'edit' && this.$route.params.id) {
      const adminId = this.$route.params.id
      Admin.setComponent(this).editAdmin(adminId)
    }
	},
  methods:{
    // setAdmin(){
    //   let params = {
    //     // id: this.getLayout().getParams('id')
    //     id: this.getLayout()._uid
    //   }
    //   Admin.setComponent(this).setParams(params).setAdmin();
    // },
    updateAdmin() {
      Admin.updateAdmin(this.admin)
      this.$router.push('/admin/list');
      this.getLayout().getAction().key = Math.random()*100;
    },
    saveAdmin(){
      let params = {  
        // id: this.getLayout().getParams('id'),
        id: this.getLayout()._uid,
        name : this.admin.name,
        phone: this.admin.phone,
        email: this.admin.email,
        username: this.admin.username
      }
      Admin.setComponent(this).saveAdmin(params);
      this.$router.push('/admin/list');
      this.getLayout().getAction().key = Math.random()*100;
    }
  }
}
</script>