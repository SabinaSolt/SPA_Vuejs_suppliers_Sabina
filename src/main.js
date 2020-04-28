import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from "./components/HelloWorld";
import SuppliersList from "./components/SuppliersList";
import SuppliersMap from "./components/SuppliersMap";
import Supplier from "./components/Supplier";
Vue.use(VueRouter);

const router = new VueRouter ({
  mode: 'history',
  routes:[
    {path:'/', component: HelloWorld},
    {path:'/suppliers', component:SuppliersList},
    {path:'/supplier', component:Supplier},
    {path:'/map', component:SuppliersMap}
  ]
});


import App from './App.vue'

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
