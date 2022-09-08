<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item" v-for="(menu, index) in menus" :key="index">
            <router-link class="nav-link" :to="menu.link">{{ menu.title }}</router-link>
        </li>
    </ul>  
  </div>
</nav>
</template>

<script>
import Template from './../../../core/template';
export default {
    name : 'headerMenu',
    extends:Template,
    data(){
        return {
            menus:[
                {menuId:3, title:'Admins', link:'/admin/list'},
                {menuId:4, title:'Products', link:'/product/list'},
                {menuId:5, title:'Customers', link:'/customer/list'},
                {menuId:6, title:'Categories', link:'/categories/list'},
                {menuId:7, title:'Cron Demo', link:'/cron/demo'},
            ]     
        }
    }
}
</script>