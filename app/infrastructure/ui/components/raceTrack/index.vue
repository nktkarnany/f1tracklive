<template>
  <div ref="track" class="svg-container"></div>
</template>

<script lang="ts" setup>
import * as d3 from 'd3';

// Importing Entities
import type { FeatureCollection } from '@domain/Circuit';

// Importing Adapters
import { circuitStoreAdapter } from '@infra/adapters/store/circuit';

// Data
const track = ref();
const { circuit } = toRefs(circuitStoreAdapter());

// Watch
watch(
  () => circuit.value,
  async () => {
    const currentTrack = circuit.value?.geoJSON;
    if (currentTrack) loadTrack(currentTrack);
  }
);

// Methods
function loadTrack(currentTrack: FeatureCollection) {
  // Set up your SVG container with margins
  const widthCoveragePercentage = 50;
  const heightCoveragePercentage = 30;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const margin = { top: 20, right: 20, bottom: 20, left: 20 };
  const width = (windowWidth * widthCoveragePercentage) / 100 - margin.left - margin.right;
  const height = (windowHeight * heightCoveragePercentage) / 100 - margin.top - margin.bottom;
  const svg = d3
    .select(track.value)
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

  // fitSize makes the output take up all the space inside the svg
  const projection = d3.geoMercator().fitSize([width, height], currentTrack as d3.GeoGeometryObjects);
  const path = d3.geoPath().projection(projection);

  // So that it still works if there are more features than just one
  svg
    .selectAll('path')
    .data(currentTrack.features)
    .enter()
    .append('path')
    .attr('d', path)
    .style('fill', 'none')
    .style('stroke-width', '2')
    .style('stroke', '#343a40');
}

defineOptions({
  name: 'RaceTrack'
});
</script>

<style lang="scss">
.svg-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
