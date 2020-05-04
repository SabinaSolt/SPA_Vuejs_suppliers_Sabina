<template>
    <div>
        <h1 > Liste des fournisseurs: </h1>
        <div  class="suppl-list">
            <label for="filter">Filtrer les fournisseurs</label>
            <select  v-model="filterS" id="filter" style="margin: 20px;">
                <option >Stock dispo</option>
                <option >Sans stock</option>
                <option selected>All</option>
            </select>

            <h3  v-if ="loading" style="color:green;"> requête en cours </h3>
            <h3  v-if ="error" style="color:red;"> {{error}} </h3>

            <Supplier v-for="supplier in suppliersFiltered()"
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

    export default {
        name: "SuppliersList",
        components: {
            Supplier,
        },
        props: {
            suppliers: Array,
            loading: Boolean,
            error: String,
        },
        data() {
            return {
                filterS:'All',
            };
        },

        methods: {
            formatDate: function (date) {
               return format(date);
            },

            suppliersFiltered: function(){
                return this.suppliers.filter(supplier=>{
                    if(this.filterS=="Stock dispo") {
                        return supplier.status;
                    }
                    else if(this.filterS=="Sans stock") {
                        return supplier.status==false;
                    }
                    else {
                        return supplier.status==false || supplier.status;
                    }
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