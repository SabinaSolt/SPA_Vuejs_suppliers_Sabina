
<template>

  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Que voulez vous faire?"/>

    <router-link to="/suppliers"><h2 class="menu-princip">Consulter la liste des fournisseurs</h2></router-link>
    <router-link to="/map"><h2 class="menu-princip"> Voir la carte</h2></router-link>
    <router-view :suppliers="suppliers"
                 :loading="loading"
                 :error="error"></router-view>
  </div>
</template>


<script>

import HelloWorld from './components/HelloWorld.vue';
const axios = require('axios');

export default {
  name: 'App',
  components: {
    HelloWorld,

  },
  data() {
    return {
      suppliers: [],
      loading:false,
      error:null,

    };
  },
  created() {
    // try{
    //     //   const response= await axios.get('https://api-suppliers.herokuapp.com/api/suppliers');
    //     //     this.suppliers=response.data;
    //     // } catch (error) {
    //     //     console.log(error)
    //     // }
    this.loading=true;
    axios.get('https://api-suppliers.herokuapp.com/api/suppliers')
            .then((response) =>{
              this.loading=false;
              this.suppliers=response.data;
            })
            .catch((error)=> {
              this.loading=false;
              this.error=error;
            });
  },
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
