<template>
  <component :is="getActionComponent()" :controller="getController()"></component>
</template>

<script>
import LayoutConfig from './../../etc/layout';
import Request from './request.vue';

export default {
  name: 'controllerAbstract',
  extends: Request,
  props:['front'],
  methods: {
    getActionComponent(){
      let actions = Object.keys(this.$options.components);
      if(actions.includes(this.getFront().getActionName()) === true){
        return this.getFront().getActionName();
      }
      
      let url = '/'+ this.getConfig().defaultController + '/' + this.getConfig().defaultAction;
      this.$router.push(url);      

      //return this.getConfig().defaultAction;
    },

    getFront(){
      //return this.$parent;
      return this.front;
    },

    getController(){
      return this;
    },

    getParams(){
      return this.getFront().getParams()
    },
    
    getLayoutConfig(){
      return LayoutConfig;
    },

    getConfig(){
      return this.getFront().getConfig();
    }
  }  
}
</script>