<template>
  <div>
    <CommonHeader :searchText="searchText" :pageType="'Category'" @setSearchText="setSearchText" />
    <CommonTable :searchText="searchText" :tableHeaders="headers" :tableData="searchResults" :pageType="'categories'" @delete="deleteCategory" />
  </div>
</template>

<script>
import Template from "./../core/template";
import Category from "./../../models/category";
import CommonHeader from "./../common/header.vue"
import CommonTable from "./../common/table.vue"

export default {
  name: "CategoriesList",
  extends: Template,
  components: {
    CommonHeader,
    CommonTable
  },
  data() {
    return {
      data: [],
      sortDir: "DESC",
      searchText: '',
      headers: [
        {key: 'id', text: 'Id'},
        {key: 'title', text: 'Title'},
        {key: 'action', text: 'Action'}
      ]
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
      Category.setComponent(this);
      Category.setCategoriesEndPoint();
      Category.setCategoryData();
      this.$nextTick(() => {});
    },
    setSearchText(text){
      this.searchText=text
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
      Category.setCategoriesEndPoint();
      const action = Category.categorydelete(id);
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
</style>