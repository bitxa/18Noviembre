<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import L from 'leaflet';

export default defineComponent({
    name: 'ForthSection',

    setup() {
        onMounted(() => {
            const latitude = -4.001144;
            const longitude = -79.198810;

            const map = L.map('map', {
                zoomControl: true, // Disable zoom control
                scrollWheelZoom: false, // Disable zooming with the scroll wheel
                doubleClickZoom: false, // Disable zooming on double click
                touchZoom: false, // Disable zooming with touch gestures
                boxZoom: false,
            }).setView([latitude, longitude], 19);

            L.tileLayer('https://{s}.tile.thunderforest.com/atlas/{z}/{x}/{y}.png?apikey=e3d2fbe5196e4c92bf00fe2a9b3759ee', {
                maxZoom: 19,
            }).addTo(map);

            const marker = L.marker([latitude, longitude]).addTo(map);

            const wazeLink = `https://waze.com/ul?ll=${latitude},${longitude}&navigate=yes`;
            marker.bindPopup(`<h6>Escuela 18 de Noviembre</h6>
            <div style="display:flex; align-items: center;">
                <i class="fa-solid fa-compass" style="margin:2vh; margin-left:0vh; font-size: 1.2rem;"></i>
                <a href="${wazeLink}" target="_blank">Navegar hasta la ubicación</a>
            </div>`).openPopup();



        });
    },
});

</script>


<template >
    <div class="forth-section">
        <h4>¿CÓMO LLEGAR?</h4>
        <div id="map"></div>
    </div>
</template>
<style scoped>
.forth-section {
    width: 100%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    background-color: #F1EDE5;
    text-align: center;
    padding: 2vh;
    box-sizing: border-box;
}

.forth-section h4 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #41444B;
    margin-bottom: 2vh;
}

#map {
    flex-grow: 1;
    width: 100%;
    min-height: 70vh;
    box-sizing: border-box;
}

@media (max-width: 768px) {
    .forth-section h4 {
        font-size: 2rem;
    }

    #map {
        min-height: 50vh;
    }
}

@media (max-width: 480px) {
    .forth-section h4 {
        font-size: 1.5rem;
    }

    #map {
        min-height: 40vh;
    }
}
</style>
