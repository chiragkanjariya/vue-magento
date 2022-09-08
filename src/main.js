import Vue from 'vue'
import App from './App.vue'

import Router from 'vue-router'
Vue.use(Router);

Vue.config.productionTip = false

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import routerConfig from './etc/router';
const routes = routerConfig.list;
const router = new Router({
  mode: 'history',
  base: __dirname,
  routes // short for `routes: routes`
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
