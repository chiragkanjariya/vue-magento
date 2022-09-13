<template>
  <table class="table table-bordered table-fixed">
        <thead>
          <tr>
            <th class="w-auto text-center clickable" @click="sort(header.key)" :key="header.id" v-for="header in tableHeaders">{{header.text}}</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="data.id" v-for="data in tableData">
            <td v-for="header in tableHeaders" :key="header.key" class="text-center">
              <template v-if="header.key === 'action'">
                <router-link
                :to="`/${pageType}/edit/id/` + data.id"
                class="btn btn-secondary btn-sm mr-2"
                >EDIT</router-link
              >
              <a class="btn btn-secondary btn-sm" @click="$emit('delete',data.id)"
                >DELETE</a
              >
              </template>
              <template v-else>
                {{data[header.key]}}
              </template>
            </td>
          </tr>
          <tr v-if="tableData.length < 1">
            <td colspan="6" class="text-center">
              <h3>No Records Found "{{ searchText }}"</h3>
            </td>
          </tr>
        </tbody>
      </table>
</template>

<script>
export default {
  name: "CommonTable",
  props: {
    tableData: Array,
    tableHeaders: Array,
    pageType: String,
    searchText: String
  },
  methods: {
    sort(key) {
      let data = this.tableData;
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
  }
};
</script>

<style>
.clickable {
  cursor: pointer;
}
</style>