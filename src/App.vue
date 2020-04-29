
<template>

  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Que voulez vous faire?"/>

    <router-link to="/suppliers"><h2 class="menu-princip">Consulter la liste des fournisseurs</h2></router-link>
    <router-link to="/map"><h2 class="menu-princip"> Voir la carte</h2></router-link>
    <router-view></router-view>
  </div>
</template>


<script>

import HelloWorld from './components/HelloWorld.vue';


export default {
  name: 'App',
  components: {
    HelloWorld,

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

.menu-princip {

  background-color: #42b983;
  box-sizing: border-box;
  margin:40px;
  width:auto;
  display: inline-block;
}
</style>
