<template>
    <div>
        <h1 > Modifier le fournisseur: </h1>
        <div  class="suppl-list">


        </div>
    </div>

</template>

<script>



    export default {
        name: "EditSupplier",
        components: {

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


        },

    }
</script>

<style scoped>
    .suppl-list {
        width:75%;
        display: inline-block;
    }
</style>