<script>
import ActionAbstract from './../core/actionAbstract';

import AdminEdit from './../../views/admin/edit';

export default {
  name : 'AdminEdit',
  extends : ActionAbstract,
  methods: {
    getContent(){
      return [AdminEdit];
    }
  }
}
</script>