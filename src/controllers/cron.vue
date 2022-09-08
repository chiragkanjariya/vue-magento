<script>
import ControllerAbstract from './core/controllerAbstract';

export default {
  name : 'controllerCategories',
  extends : ControllerAbstract,
  components:{
    demo : () => import('./cron/demo'),
  } 
}
</script>