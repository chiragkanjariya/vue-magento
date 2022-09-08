<script>
import ActionAbstract from './../core/actionAbstract';
import CategoryList from './../../views/categories/list.vue';

export default {
  name : 'CategoriesList',
  extends : ActionAbstract,
  methods: {
    getContent(){
      return [CategoryList];
    }
  }
}
</script>