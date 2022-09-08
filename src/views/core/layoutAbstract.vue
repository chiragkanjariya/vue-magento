<script>
export default {
  name : 'layoutAbstract',
  props:{
    action:Object
  },
  methods: {
    getLayout(){
      return this;
    },
    getAction(){
      return this.action;
    },
    getParams(param){
      let params = this.getAction().getParams();
      if(param === undefined){
        return params;
      }
      if(params[param] === undefined){
        return null;
      }
      return params[param];
    }

  }
}
</script>