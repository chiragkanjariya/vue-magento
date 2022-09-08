<script>

export default {
  name : 'template',
  props:{
      layout:Object
  },
  methods: {
    getLayout(){
      return this.layout;
    }
  }  
}
</script>