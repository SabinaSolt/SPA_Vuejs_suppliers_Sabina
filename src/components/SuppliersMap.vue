<template>
    <div  class ="map-div" >
        <h1>Carte des fournisseurs</h1>
        <h3  v-if ="loading" style="color:green;"> requête en cours </h3>
        <h3  v-if ="error" style="color:red;"> {{error}} </h3>
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
        props: {
            suppliers: Array,
            loading: Boolean,
            error: String,
            //center:Array,
        },
        data() {
            return {
                url: "https://{s}.tile.osm.org/{z}/{x}/{y}.png",
                zoom: 6,
                center:  [46.5322, 2.5482],
                bounds: null,
            };
        },

        beforeCreate() {
                  navigator.geolocation.getCurrentPosition((position) => {
                      this.center= [position.coords.latitude, position.coords.longitude];
                });
        }
    }
</script>

<style scoped>
.map-div {
    height: 80vh;
    width: 80vw;
    display: inline-block;
}
</style>