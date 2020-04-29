<template>
    <div>
        <h1 > Liste des fournisseurs: </h1>
        <div >
            <Supplier v-for="supplier in suppliers"
                        :key="supplier.id"
                        :name="supplier.name"
                        :status="supplier.status"
                        :checked-at="supplier.checkedAt"/>

        </div>
    </div>

</template>

<script>
    import Supplier from "./Supplier";
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
        }
    }
</script>

<style scoped>

</style>