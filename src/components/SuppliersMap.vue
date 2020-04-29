<template>
    <div style="height: 80vh">
        <h1>Carte des fournisseurs</h1>
        <LMap :zoom="zoom" :center="center">
            <LTileLayer :url="url"></LTileLayer>
            <LMarker v-for="supplier in suppliers"
                     :key ="supplier.id"
                     :lat-lng="[supplier.latitude, supplier.longitude]"></LMarker>

        </LMap>
    </div>

</template>

<script>
    import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
    export default {
        name: "SuppliersMap",
        components: {
            LMap,
            LTileLayer,
            LMarker
        },
        data() {
            return {
                url: "https://{s}.tile.osm.org/{z}/{x}/{y}.png",
                zoom: 6,
                center: [46.5322, 2.9482],
                bounds: null,
                suppliers: [
                    {
                        id: 1,
                        latitude: 45,
                        longitude: 3
                    },
                    {
                        id: 2,
                        latitude: 46,
                        longitude: 5
                    }
                ]
            };
        },
    }
</script>

<style scoped>

</style>