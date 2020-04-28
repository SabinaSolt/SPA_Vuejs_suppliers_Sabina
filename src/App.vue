<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Que voulez vous faire"/>
    <SuppliersList @click="onSuppliersListClick"/>
    <SuppliersMap @click="onMapClick"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import SuppliersList from "./components/SuppliersList.vue";
import SuppliersMap from "./components/SuppliersMap.vue";

export default {
  name: 'App',
  components: {
    HelloWorld,
    SuppliersList,
    SuppliersMap,
  },
  methods: {
    onSuppliersListClick: function(){alert("Clicked on Supplier List")},
    onMapClick: function() {alert("Clicked on Map")},
  }
}





</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h2 {

  background-color: #42b983;
  box-sizing: border-box;
  margin:40px;
  width:300px;
  display: inline-block;
}
</style>
