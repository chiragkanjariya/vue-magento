<template>
  <div class="container w-50">
  </div>
</template>

<script>

import store from '../store/layout.js';

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