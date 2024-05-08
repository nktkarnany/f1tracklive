<template>
  <div ref="racePage" class="race-page" @click="randomizeBg">
    <h1 class="location">IMOLA</h1>
    <race-track />
  </div>
</template>

<script lang="ts" setup>
const racePage = ref();

// Methods
function randomizeBg() {
  const pastelColors = [
    '#fbf8cc',
    '#fde4cf',
    '#ffcfd2',
    '#f1c0e8',
    '#cfbaf0',
    '#a3c4f3',
    '#90dbf4',
    '#8eecf5',
    '#98f5e1',
    '#b9fbc0'
  ];
  racePage.value.style.backgroundColor = pastelColors[Math.floor(Math.random() * pastelColors.length)];
}
</script>

<style lang="scss">
.location {
  user-select: none;
  color: #343a40;
}

.race-page {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
