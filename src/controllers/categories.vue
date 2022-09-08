<script>
import ControllerAbstract from './core/controllerAbstract';

export default {
  name : 'controllerCategories',
  extends : ControllerAbstract,
  components:{
    list : () => import('./categories/list'),
    new : () => import('./categories/new'),
    edit : () => import('./categories/edit'),
  } 
}
</script>