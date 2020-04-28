<template>
    <div>
        <h1>Fournisseur </h1>
        <h3>A du stock? </h3>
        <h5>Date du dernier relevé : </h5>
    </div>


</template>

<script>
    export default {
        name: "Supplier",
        data: function () {
            return {
                name: 'I <3 Algues',
                status: false, // est ce qu'il y a du stock
                checkedAt: new Date() // date de la dernière mise à jour du stock
            }
        }
    }
</script>

<style scoped>

</style>