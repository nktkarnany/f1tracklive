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

// Watch for circuit data
watch(
  () => circuit.value,
  async () => {
    mapboxgl.accessToken =
      'pk.eyJ1Ijoibmt0a2FybmFueSIsImEiOiJjbTJ5bHl5MnAwMjF6Mm1zOGpidXFlYTFoIn0.Xa2nwsPqC98sFQ9fTils4Q';

    if (circuit.value?.geoJSON && circuit.value.geoJSON.bbox) {
      const [minLng, minLat, maxLng, maxLat] = circuit.value.geoJSON.bbox;

      map.value = new mapboxgl.Map({
        container: track.value,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [(minLng + maxLng) / 2, (minLat + maxLat) / 2], // Initial approximate center
        zoom: 10 // Initial zoom level
      });

      map.value.on('load', () => {
        if (circuit.value) {
          // Add GeoJSON source to the map
          map.value.addSource('circuit-track', {
            type: 'geojson',
            data: circuit.value.geoJSON
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

          // Fit map to the bounds of the GeoJSON track
          map.value.fitBounds(
            [
              [minLng, minLat],
              [maxLng, maxLat]
            ],
            {
              padding: 20, // Optional padding around the bounds
              maxZoom: 15 // Optional maximum zoom level
            }
          );
        }
      });
    }
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
