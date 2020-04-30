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