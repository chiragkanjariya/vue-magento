<script>
import ActionAbstract from './../core/actionAbstract';
import AdminList from './../../views/admin/list';

export default {
  name : 'adminList',
  extends : ActionAbstract,
  methods: {
    getContent(){
      return [AdminList];
    }
  }
}
</script>