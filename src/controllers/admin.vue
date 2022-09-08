<script>
import ControllerAbstract from './core/controllerAbstract';

export default {
  name : 'Admin',
  extends : ControllerAbstract,
  components:{
    new : () => import('./admin/new'),
    edit : () => import('./admin/edit'),
    list : () => import('./admin/list'),
  }
}
</script>