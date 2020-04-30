<template>
    <div>
        <h1 > Liste des fournisseurs: </h1>
        <div  class="suppl-list">
            <h3  v-if ="loading" style="color:green;"> requête en cours </h3>
            <h3  v-if ="error" style="color:red;"> {{error}} </h3>
            <Supplier v-for="supplier in suppliers"
                        :key="supplier.id"
                        :name="supplier.name"
                        :status="supplier.status"
                        :checked-at="formatDate(supplier.checkedAt)"/>

        </div>
    </div>

</template>

<script>
    import Supplier from "./Supplier";
    import { format } from 'timeago.js';
    const axios = require('axios');


    export default {
        name: "SuppliersList",
        components: {
            Supplier,

        },
        data: function () {
            return {
                suppliers: [],
                loading:false,
                error:null,
            }
        },
        created() {
            // try{
            //   const response= await axios.get('https://api-suppliers.herokuapp.com/api/suppliers');
            //     this.suppliers=response.data;
            // } catch (error) {
            //     console.log(error)
            // }
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
        methods: {
            formatDate: function (date) {
               return format(date);
            },

        }
    }
</script>

<style scoped>
    .suppl-list {
        width:75%;
        display: inline-block;
    }
</style>