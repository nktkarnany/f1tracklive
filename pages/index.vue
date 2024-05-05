<template>
  <div class="svg-container">
    <svg
      viewBox="-50 -50 400 200"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="black"
      stroke-width="1"
      v-html="miamiSvg"
    ></svg>
  </div>
</template>

<script lang="ts" setup>
import { GeoJSON2SVG } from "geojson2svg";

const miamiSvg = ref();

onMounted(async () => {
  const queryTracks = await queryContent("tracks").findOne();

  const miamiTrack = queryTracks.body[0];

  const converter = new GeoJSON2SVG({
    viewportSize: { width: 200, height: 100 },
    fitTo: "height",
  });

  miamiSvg.value = converter.convert(miamiTrack)[0];
});
</script>

<style lang="scss">
.svg-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

svg {
  max-width: 75%;
}
</style>
