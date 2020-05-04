import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import HelloWorld from "./components/HelloWorld";
import SuppliersList from "./components/SuppliersList";
import SuppliersMap from "./components/SuppliersMap";
import Supplier from "./components/Supplier";
import EditSupplier from "./components/EditSupplier";
import AddSupplier from "./components/AddSupplier";
// Import the Icon
import { Icon } from "leaflet";
// Import the whole Leaflet CSS
import "leaflet/dist/leaflet.css";

Vue.config.productionTip = false;

// Resolve an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

Vue.use(VueRouter);

const router = new VueRouter ({
  mode: 'history',
  routes:[
    {path:'/', component: HelloWorld},
    {path:'/suppliers',  component:SuppliersList},
    {path:'/supplier', component:Supplier},
    {path:'/map', component:SuppliersMap},
    {path:'/editsupplier',component:EditSupplier},
    {path:'/addsupplier', component:AddSupplier}
  ]
});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
