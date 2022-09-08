<script>
import ControllerAbstract from './core/controllerAbstract';

export default {
  name : 'controllerCustomer',
  extends : ControllerAbstract,
  components:{
    list : () => import('./customer/list'),
  } 
}
</script>