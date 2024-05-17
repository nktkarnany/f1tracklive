<template>
  <div ref="racePage" class="race-page" @click="randomizeBg">
    <h1 class="location">{{ circuit?.location }}</h1>
    <race-track />
    <button @click="getPositions">Get New Positions</button>
  </div>
</template>

<script lang="ts" setup>
// Importing Adapters
import { circuitStoreAdapter } from '@infra/adapters/store/circuit';
import { raceStoreAdapter } from '@infra/adapters/store/race';

// Importing Uƒsecases
import { loadRaceUseCase } from '@usecases/loadRace';
import { loadCircuitUseCase } from '@usecases/loadCircuit';
import { loadDriversUseCase } from '@usecases/loadDrivers';
import { loadPositionsUseCase } from '@usecases/loadPositions';

const { circuit } = toRefs(circuitStoreAdapter());
const { race } = toRefs(raceStoreAdapter());

const racePage = ref();

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
  racePage.value.style.backgroundColor = pastelColors[Math.floor(Math.random() * pastelColors.length)];
}

async function getPositions() {
  if (race.value?.session_key) await loadPositionsUseCase(race.value.session_key);
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
