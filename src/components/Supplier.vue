<template>
    <div>
        <h1> Fournisseur: {{name}} </h1>
        <h3  v-if ="status" style="color:green;"> A du stock? OK </h3>
        <h3 v-else style="color:red;"> A du stock? KO</h3>
        <h5>Date du dernier relevé :
            {{checkedAt.toLocaleString({
                weekday:'short',
                month: 'short',
                day:'numeric',
                year: 'numeric',
                hour:'2-digit',
                minute:'2-digit',
                second:'2-digit',
                timeZone: 'UTC',
                timeZoneName:'short'})}}
        </h5>
    </div>


</template>

<script>
    export default {
        name: "Supplier",
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