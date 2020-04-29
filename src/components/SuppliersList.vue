<template>
    <div>
        <h1 > Liste des fournisseurs: </h1>
        <div  class="suppl-list">
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
        data: function () {
            return {
                suppliers: [
                    {
                        id: 1,
                        name: "I <3 Algues",
                        status: true,
                        checkedAt: new Date()
                    },
                    {
                        id: 2,
                        name: "Spiruline forever alive!!!",
                        status: false,
                        checkedAt: new Date()
                    }
                ]
            }
        },

        methods: {
            formatDate: function (date) {
               return format(date);
            }
        }
    }
</script>

<style scoped>
    .suppl-list {
        width:75%;
        display: inline-block;
    }
</style>