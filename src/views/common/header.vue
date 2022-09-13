<template>
  <div class="container py-1 mb-3">
    <h4>
      Manage {{ pageType }}
      <input
        type="text"
        v-model="search"
        name="search"
        class="formfield"
        placeholder="Search Text"
      />
      <router-link
        :to="pageType === 'Category' ? '/categories/new' : '/admin/new'"
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
        >WRONG
      </router-link>
    </h4>
  </div>
</template>

<script>
export default {
  name: "CommonHeader",
  props: {
    searchText: String,
    pageType: String,
  },
  computed: {
    search: {
      get() {
        return this.searchText;
      },
      set(text) {
        this.$emit("setSearchText", text);
      },
    },
  },
};
</script>

<style>
.formfield {
  font-size: 18px;
  margin-left: 200px;
  padding: 4px;
}
</style>