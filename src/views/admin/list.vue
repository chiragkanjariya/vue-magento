<template>
  <div>
    <div class="container py-1 mb-3">
      <h4>
        Manage Admins
        <input type="text" v-model="searchText" name="search" class="formfield" placeholder="Search Text" />
        <router-link
          to="/admin/new"
          class="btn btn-secondary btn-sm float-right"
          role="button"
          aria-pressed="true"
          >ADD NEW</router-link
        >
        <router-link
          to="/admin/wrong"
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
            <th class="w-auto text-center clickable" @click="sort('username')">
              UserName
            </th>
            <th class="w-auto text-center clickable" @click="sort('name')">
              Name
            </th>
            <th class="w-auto text-center clickable" @click="sort('email')">
              Email
            </th>
            <th class="w-auto text-center clickable" @click="sort('phone')">
              Phone Number
            </th>
            <th class="w-auto text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="admin.id" v-for="admin in searchResults">
            <td class="text-center">{{ admin.id }}</td>
            <td class="text-center">{{ admin.username }}</td>
            <td class="text-center">{{ admin.name }}</td>
            <td class="text-center">{{ admin.email }}</td>
            <td class="text-center">{{ admin.phone }}</td>
            <td class="text-center">
              <router-link
                :to="`/admin/edit/id/` + admin.id"
                class="btn btn-secondary btn-sm mr-2"
                >EDIT</router-link
              >
              <a class="btn btn-secondary btn-sm" @click="deleteAdmin(admin.id)"
                >DELETE</a
              >
            </td>
          </tr>
          <tr v-if="searchResults.length < 1">
            <td colspan="6" class="text-center"><h3>No Records Found "{{searchText}}"</h3></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Template from "./../core/template";
// import store from "./../../store/admin";
import CoreModel from "./../../models/core";
import Admin from "./../../models/admin";

export default {
  name: "adminList",
  extends: Template,
  data() {
    return {
      data: [],
      ortDir: "DESC",
      searchText: '',
    };
  },
  computed: {
    searchResults() {
      if (!this.searchText) return this.data;
      return this.data.filter((item) => {
        return (
          item.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
          item.username.toLowerCase().includes(this.searchText.toLowerCase()) ||
          item.email.toLowerCase().includes(this.searchText.toLowerCase()) ||
          item.phone.toLowerCase().includes(this.searchText.toLowerCase())
        );
      });
    },
  },
  created() {
    this.setAdmins();
  },
  methods: {
    setAdmins() {
      CoreModel.setComponent(this).setEndPoint("admins/").setData();
      this.$nextTick(() => {});
    },
    deleteAdmin(id) {
      const action = CoreModel.delete(id);
      if (action) {
        this.setAdmins();
      }
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