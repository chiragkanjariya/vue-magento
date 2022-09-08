<template>
  <div>
      <div class="container">
        <Headers :layout="getLayout()" />
      </div>
      <div class="container">
        <Contents :layout="getLayout()" />
      </div>
  </div>  
</template>

<script>
import LayoutAbstract from './../core/layoutAbstract';
import Headers from './html/header.vue';
import Contents from './html/content.vue';

export default {
  name : 'layout',
  extends:LayoutAbstract,
  components:{
    Headers,
    Contents
  }
}
</script>