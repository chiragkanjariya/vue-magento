<template>
  <div>
    <div class="container py-1 mb-3">
      <h4>
        Manage Categories
        <router-link
          to="/categories/new"
          class="btn btn-secondary btn-sm float-right"
          role="button"
          aria-pressed="true"
          >ADD NEW</router-link
        >
        <router-link
          to="/categories/wrong"
          class="btn btn-secondary btn-sm float-right mr-1"
          role="button"
          aria-pressed="true"
          >WRONG</router-link
        >
      </h4>
    </div>
    <div>
      <table class="table table-bordered table-fixed">
        <thead>
          <tr>
            <th class="w-auto text-center">Id</th>
            <th class="w-auto text-center">Title</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="category.id" v-for="category in data">
            <td class="text-center">{{ category.id }}</td>
            <td class="text-center">{{ category.title }}</td>
            <td class="text-center">
              <router-link
                :to="`/categories/edit/id/` + category.id"
                class="btn btn-secondary btn-sm mr-2"
                >EDIT</router-link
              >
              <a class="btn btn-secondary btn-sm" @click="deleteCategory(category.id)">DELETE</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Template from "./../core/template";
import Category from "./../../models/category";
import CoreModel from "./../../models/core";

export default {
  name: "CategoriesList",
  extends: Template,
  data() {
    return {
      data: [],
    };
  },
  computed: {},
  created() {
    this.setCategories();
  },
  methods: {
    setCategories() {
      CoreModel.setComponent(this).setEndPoint('categories/').setData();
      this.$nextTick(() => {});
    },
    deleteCategory(id) {
      const action = CoreModel.delete(id);
      if(action) {
        this.setCategories();
      }
    },
  },
};
</script>