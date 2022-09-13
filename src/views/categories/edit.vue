<template>
    <div>
      <div class="container py-1 mb-3">
        <h4>{{$route.params.action === 'edit' ? 'Edit Category' : 'New Category' }} 
          <router-link to="/categories/list" class="btn btn-secondary btn-sm float-right" role="button" aria-pressed="true">Back</router-link> 
        </h4>
      </div>
      <div class="container border py-1 mb-3">
      <form>
        <div class="form-group w-25">
          <label>Category Name</label>
          <input type="text" v-model="data.title" class="form-control">
        </div>
        <div class="form-group">
          <a v-if="this.$route.params.action === 'edit'" class="btn btn-secondary btn-sm mr-2" @click="updateCategory()">Update</a>
          <a v-else class="btn btn-secondary btn-sm mr-2" @click="saveCategory()">Save</a>
          <router-link to="/categories/list" class="btn btn-secondary btn-sm">Cancel</router-link>
        </div>
      </form>
    </div>
    </div>
</template>

<script>
import Template from './../core/template';
import Category from "./../../models/category";
import CoreModel from "./../../models/core/core";

export default {
  name : 'ViewCategoriesEdit',
  extends : Template,
  data() {
    return {
      data : {
        title: '',
        id:''
      }
    }
  },
  mounted() {
    Category.setComponent(this)
    if(this.$route.params.action === 'edit' && this.$route.params.id) {
      const categoryId = this.$route.params.id
      Category.setCategoriesEndPoint()
      Category.editCategory(categoryId)
    }
	},
  methods:{
    updateCategory() {
      Category.setCategoriesEndPoint()
      Category.categoryUpdate(this.data)
      this.$router.push('/categories/list');
      this.getLayout().getAction().key = Math.random()*100;
    },
    saveCategory(){
      let params = {  
        id: this.getLayout()._uid,
        title : this.category.title,
      }
      Category.setCategoriesEndPoint().
      Category.createCategories(params);
      this.$router.push('/categories/list');
      this.getLayout().getAction().key = Math.random()*100;
    }
  }
}
</script>