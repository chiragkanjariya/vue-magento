<template>
  <div>
    <div class="container py-1 mb-3">
      <h4>
        Manage Categories
        <input type="text" v-model="searchText" name="search" class="formfield" placeholder="Search Text" />
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
            <th class="w-auto text-center clickable" @click="sort('id')">Id</th>
            <th class="w-auto text-center clickable" @click="sort('title')">
              Title
            </th>
            <th class="w-auto text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="category.id" v-for="category in searchResults">
            <td class="text-center">{{ category.id }}</td>
            <td class="text-center">{{ category.title }}</td>
            <td class="text-center">
              <router-link
                :to="`/categories/edit/id/` + category.id"
                class="btn btn-secondary btn-sm mr-2"
                >EDIT</router-link
              >
              <a
                class="btn btn-secondary btn-sm"
                @click="deleteCategory(category.id)"
                >DELETE</a
              >
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
      sortDir: "DESC",
      searchText: '',
    };
  },
  computed: {
    searchResults() {
      if (!this.searchText) return this.data;
      return this.data.filter((item) => {
        return (
          item.title.toLowerCase().includes(this.searchText.toLowerCase())
        );
      });
    },
  },
  created() {
    this.setCategories();
  },
  methods: {
    setCategories() {
      CoreModel.setComponent(this).setEndPoint("categories/").setData();
      this.$nextTick(() => {});
    },
    sort(key) {
      let data = this.data;
      data = data.sort((a, b) => {
        let fa = key !== "id" ? a[key].toLowerCase() : a[key],
          fb = key !== "id" ? b[key].toLowerCase() : b[key];
        if (fa < fb) {
          return this.sortDir === "ASC" ? -1 : 1;
        }
        if (fa > fb) {
          return this.sortDir === "ASC" ? 1 : -1;
        }
        return 0;
      });
      this.sortDir = this.sortDir === "ASC" ? "DESC" : "ASC";
    },
    deleteCategory(id) {
      const action = CoreModel.delete(id);
      if (action) {
        this.setCategories();
      }
    },
  },
};
</script>

<style>
.clickable {
  cursor: pointer;
}
.formfield {
  font-size: 18px;
  margin-left: 200px;
  padding: 4px;
}
</style>