<template>
    <div>
        <h1 > Liste des fournisseurs: </h1>
        <Supplier :name="name" :status="status" :checked-at="checkedAt"/>
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
                name: 'I <3 Algues',
                status: false, // est ce qu'il y a du stock
                checkedAt: new Date() /* date de la dernière mise à jour du stock*/}
        }

    }
</script>

<style scoped>

</style>