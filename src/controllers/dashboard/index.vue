<script>
import ActionAbstract from './../core/actionAbstract';
import Dashboard from './../../views/dashboard/index.vue';

export default {
  name : 'dashboardIndex',
  extends : ActionAbstract,
  methods: {
    getContent(){
      return [Dashboard];
    }
  }
}
</script>