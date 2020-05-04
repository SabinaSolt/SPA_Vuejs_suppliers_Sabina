<template>
    <div>

        <div  class="suppl-list">
            <h3>Ajouter  un fournisseur:</h3>

            <label>Nom:</label>
            <input type="text" v-model="name">

            <br>
            <br>

            <label>Status:</label>
            <input type="checkbox" v-model="status">
            <br>
            <br>
            <label>Latitude:</label>
            <input type="number" v-model="latitude">
            <br>
            <br>
            <label>Longitude:</label>
            <input type="number" v-model="longitude">
            <br>
            <br>


            <button @click="addSupplier">Toggle me</button>


        </div>
    </div>

</template>

<script>


    const axios = require('axios');
    export default {
        name: "EditSupplier",
        components: {

        },
        props: {

        },
        data() {
            return {
                name:'',
                checkedAt:new Date(),
                status:false,
                latitude:0,
                longitude:0,

            };
        },

        methods: {
            addSupplier: function(){

                axios.post('https://api-suppliers.herokuapp.com/api/suppliers', {
                    name:this.name,
                    checkedAt: this.checkedAt,
                    status:this.status,
                    latitude:this.latitude,
                    longitude:this.longitude,
                })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }

        },

    }
</script>

<style scoped>
    .suppl-list {
        width:75%;
        display: inline-block;
    }
</style>