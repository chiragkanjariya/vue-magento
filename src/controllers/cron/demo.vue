<script>
import ActionAbstract from './../core/actionAbstract';
import CronDemo from '../../views/cron/demo.vue';

export default {
  name : 'CategoriesList',
  extends : ActionAbstract,
  methods: {
    getContent(){
      return [CronDemo];
    }
  }
}
</script>