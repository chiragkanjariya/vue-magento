<template>
  <component :key="key" :is="getLayoutComponent()" :action="getAction()"></component>  
</template>

<script>
export default {
  name: 'actionAbstract',
  props:['controller'],
  data(){
    return {
      key : 0
    }
  },
  methods: {
    getAction(){
      return this;
    },
    getController(){
      return this.controller;
    },

    getParams(){
      return this.getController().getParams();
    },

    getLayoutComponent(){
      let layout = this.getController().getLayoutConfig().list.Onecolumn;
      return layout;
    },

    // block methods.
    getContent(){
      return [];
    }
  }
}
</script>