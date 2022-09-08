<template>
  <Menu  :layout="getLayout()" />
</template>

<script>
import Template from './../../core/template';
import Menu from './header/menu';

export default {
  name : 'layoutHeader',
  extends:Template,
  components:{
    Menu
  },
  methods: {
    hello(){
      alert(1)
    }
  },
}
</script>