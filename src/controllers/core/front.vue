<template>
  <component v-bind:front="getFront()" :is="controllerComponent()"></component>
</template>

<script>

import ControllerConfig from './../../etc/controller';

export default {
  name:'front',
  components:ControllerConfig.list,
  methods: {
    controllerComponent()
    {
      let controllerKeys = Object.keys(ControllerConfig.list);
      if(controllerKeys.includes(this.getControllerName()) === true){
        return this.getControllerName();
      }
      let url = '/'+ this.getConfig().defaultController + '/' + this.getConfig().defaultAction;
      this.$router.push(url);
      
      //return this.getConfig().defaultController;
    },

    getControllerName(){
      if(this.$route.params.controller !== undefined)
      {
        return this.$route.params.controller;
      }
      return this.getConfig().defaultController;
    },
    getActionName(){
      if(this.$route.params.action !== undefined)
      {
        return this.$route.params.action;
      }
      return this.getConfig().defaultAction;
    },

    getParams(){
      return this.$route.params;
    },
    
    getFront(){
      return this;
    },

    getConfig(){
      return ControllerConfig;
    }
  }
}
</script>