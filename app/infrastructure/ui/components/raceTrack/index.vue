<template>
  <div ref="track" class="map-container"></div>
</template>

<script lang="ts" setup>
import mapboxgl from 'mapbox-gl';

// Importing Adapters
import { circuitStoreAdapter } from '@infra/adapters/store/circuit';

// Data
const map = ref();
const track = ref();
const { circuit } = toRefs(circuitStoreAdapter());

// Watch
watch(
  () => circuit.value,
  async () => {
    mapboxgl.accessToken =
      'pk.eyJ1Ijoibmt0a2FybmFueSIsImEiOiJjbTJ5bHl5MnAwMjF6Mm1zOGpidXFlYTFoIn0.Xa2nwsPqC98sFQ9fTils4Q';

    map.value = new mapboxgl.Map({
      container: track.value,
      style: 'mapbox://styles/mapbox/light-v11', // Mapbox style
      center: [-99.092, 19.402], // Map center coordinates
      zoom: 15
    });

    map.value.on('load', () => {
      // Add GeoJSON source to the map
      map.value.addSource('circuit-track', {
        type: 'geojson',
        data: circuit.value?.geoJSON
      });

      // Add a line layer to display the circuit track
      map.value.addLayer({
        id: 'circuit-track-line',
        type: 'line',
        source: 'circuit-track',
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': '#FF1E00', // Track line color
          'line-width': 3 // Track line width
        }
      });
    });
  }
);

defineOptions({
  name: 'RaceTrack'
});
</script>

<style lang="scss">
.map-container {
  width: 100%;
  height: 100%;
}
</style>
