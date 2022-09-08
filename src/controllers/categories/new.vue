<script>
import ActionAbstract from './../core/actionAbstract';
import CategoryEdit from './../../views/categories/edit';

export default {
  name : 'CategoryEdit',
  extends : ActionAbstract,
  methods: {
    getContent(){
      return [CategoryEdit];
    }
  }
}
</script>