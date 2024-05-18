<template>
  <div ref="page" class="page" @click="randomizeBg">
    <div class="page-sidebar">
      <driver-standings />
    </div>
    <div class="page-main">
      <race-title />
      <div class="race-track">
        <race-track />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Importing Adapters
import { raceStoreAdapter } from '@infra/adapters/store/race';

// Importing Usecases
import { loadRaceUseCase } from '@usecases/loadRace';
import { loadCircuitUseCase } from '@usecases/loadCircuit';
import { loadDriversUseCase } from '@usecases/loadDrivers';

const { race } = toRefs(raceStoreAdapter());

const page = ref();

// Lifecycle: start
onMounted(async () => {
  await loadRaceUseCase();

  if (race.value?.circuit_key) await loadCircuitUseCase(race.value.circuit_key);
  if (race.value?.session_key) await loadDriversUseCase(race.value.session_key);
});

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
  page.value.style.backgroundColor = pastelColors[Math.floor(Math.random() * pastelColors.length)];
}
</script>

<style lang="scss">
.page {
  width: 100%;
  height: 100vh;
  display: flex;

  &-sidebar {
    flex: 1;
  }

  &-main {
    flex: 3;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    .race-track {
      margin: auto;
    }
  }
}
</style>
