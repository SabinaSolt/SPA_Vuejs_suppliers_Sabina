<template>
    <div>

        <div  class="suppl-list">

            <h3>Modifier un fournisseur id {{$route.params['id']}}:</h3>
            <p>{{supplierComputed}}</p>
            <label>Nom:</label>
            <input type="text" v-model="supplierComputed.name" >

            <br>
            <br>
            <label>Checked at:</label>
            <input type="text" v-model="supplierComputed.checkedAt" >

            <br>
            <br>
            <label>Status:</label>
            <input type="checkbox" v-model="supplierComputed.status" >

            <br>
            <br>
            <label>Latitude:</label>
            <input type="number" v-model="supplierComputed.latitude">
            <br>
            <br>
            <label>Longitude:</label>
            <input type="number" v-model="supplierComputed.longitude">
            <br>
            <br>
            <button @click="editSup">Submit modifications</button>
            <br>
            <br>
            <button @click="deleteSup">Delete supplier</button>
        </div>
    </div>

</template>

<script>

    const axios = require('axios');

    export default {
        name: "EditSupplier",
        components: {
        },

        computed: {
            supplierComputed() {
                return this.$attrs.suppliers.filter(supplier=>{
                    return supplier.id==this.$route.params.id;
                })[0];
            },
        },

        methods: {
            editSup: function () {
                if (this.supplierComputed) {

                    axios.put('https://api-suppliers.herokuapp.com/api/suppliers/' + this.supplierComputed.id,
                        {
                            name: this.supplierComputed.name,
                            checkedAt: this.supplierComputed.checkedAt,
                            status: this.supplierComputed.status,
                            latitude: this.supplierComputed.latitude,
                            longitude: this.supplierComputed.longitude,
                        })
                        .then(function (response) {
                            console.log(response)
                        })
                        .catch(function (error) {
                            console.log(error)
                        });
                }

            },
            deleteSup: function () {
                axios.delete('https://api-suppliers.herokuapp.com/api/suppliers/' + this.supplierComputed.id)
                    .then(function (response) {
                        console.log(response)
                    })
                    .catch(function (error) {
                        console.log(error)
                    });
            },
        },
    }
</script>

<style scoped>
    .suppl-list {
        width:75%;
        display: inline-block;
    }
</style>