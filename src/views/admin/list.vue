<template>
  <div>
    <CommonHeader
      :searchText="searchText"
      :pageType="'Admin'"
      @setSearchText="setSearchText"
    />
    <CommonTable :searchText="searchText" :tableHeaders="headers" :tableData="searchResults" :pageType="'admin'" @delete="deleteAdmin" />
  </div>
</template>

<script>
import Template from "./../core/template";
// import store from "./../../store/admin";
import Admin from "./../../models/admin";
import CommonHeader from "./../common/header.vue";
import CommonTable from "./../common/table.vue";

export default {
  name: "adminList",
  extends: Template,
  components: {
    CommonHeader,
    CommonTable
  },
  data() {
    return {
      data: [],
      ortDir: "DESC",
      searchText: "",
      headers: [
        {key: 'id', text: 'Id'},
        {key: 'name', text: 'Name'},
        {key: 'username', text: 'UserName'},
        {key: 'email', text: 'Email'},
        {key: 'phone', text: 'Phone'},
        {key: 'action', text: 'Action'},
      ]
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
      Admin.setComponent(this);
      Admin.setAdminEndPoint();
      Admin.setAdminData();
      this.$nextTick(() => {});
    },
    setSearchText(text) {
      this.searchText = text;
    },
    deleteAdmin(id) {
      Admin.setAdminEndPoint();
      const action = Admin.admindelete(id);
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