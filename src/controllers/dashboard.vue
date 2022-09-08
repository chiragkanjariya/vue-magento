<script>
import ControllerAbstract from './core/controllerAbstract';

export default {
  name : 'controllerDashboard',
  extends : ControllerAbstract,
  components:{
    index : () => import('./dashboard/index'),
  },
}
</script>