<script>
import ActionAbstract from './../core/actionAbstract';
import List from './../../views/customer/list.vue';

export default {
  name : 'CustomerList',
  extends : ActionAbstract,
  methods: {
    getContent(){
      return [List];
    }
  }
}
</script>