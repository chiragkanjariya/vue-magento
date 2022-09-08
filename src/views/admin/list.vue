<template>
  <div>
    <div class="container py-1 mb-3">
      <h4>
        Manage Admins
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
            <th class="w-auto text-center">Id</th>
            <th class="w-auto text-center">UserName</th>
            <th class="w-auto text-center">Name</th>
            <th class="w-auto text-center">Email</th>
            <th class="w-auto text-center">Phone Number</th>
            <th class="w-auto text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="admin.id" v-for="admin in admins">
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
              <a class="btn btn-secondary btn-sm" @click="deleteAdmin(admin.id)">DELETE</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Template from "./../core/template";
import store from "./../../store/admin";
import Admin from "./../../models/admin";

export default {
  name: "adminList",
  extends: Template,
  data() {
    return {
      admins: [],
    };
  },
  computed: {},
  created() {
    this.setAdmins();
  },
  methods: {
    setAdmins() {
      Admin.setComponent(this).setAdmins();
      this.$nextTick(() => {});
    },
    deleteAdmin(id) {
      const action = Admin.deleteAdmin(id);
      if(action) {
        this.setAdmins();
      }
    },
  },
};
</script>