<template>
  <div class="container">
    <div class="container border my-1" v-for="(admin, index) in admins" :key="index">
      <span class="border display-block" px-1 py-1 width-1>{{admin.adminId}}</span>
      <span class="border display-block" px-1 py-1>{{admin.name}}</span>
    </div>
    <br>
    <a class="link" @click="addAdmin()">Add New Admin</a>
    <br>
    <router-link to="/foo">/foo</router-link>
    <br>
    <router-link to="/bar">/bar</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

import store from '../../store/layout.js';

export default {
  name: 'HelloWorld',
  store,
  
  data(){
    return {
      admins : this.$store.getters.getAdmins
    }
  },
  computed:{
    
  },

  methods: {
      addAdmin(){
        this.$store.commit('addAdmin', 25);
      }
  },
}


</script>