<template>
    <div >
        <div class="fourn">
            <h2> Fournisseur: {{name}} </h2>
            <h3  v-if ="status" style="color:green;"> A du stock? OK </h3>
            <h3 v-else style="color:red;"> A du stock? KO</h3>
            <h5>Date du dernier relevé : {{checkedAt}}</h5>

            <router-link :to="{name:'EditSupplier', params:{id:supplierId}}">
                <button style="margin-bottom: 20px;"> Editer le fournisseur</button>
            </router-link>
            <router-view></router-view>
        </div>
        <br>
    </div>
</template>

<script>

    export default {
        name: "Supplier",
        props:  {
                name: String,
                status: Boolean, // est ce qu'il y a du stock
                checkedAt: String, /* date de la dernière mise à jour du stock*/
                supplierId:String,

        }
    }
</script>

<style scoped>
.fourn {
    border: 2px solid #2c3e50;
}
</style>