<template>
  <div ref="page" class="page">
    <race-title />
    <div class="track">
      <race-track />
    </div>
  </div>
</template>

<script lang="ts" setup>
// Importing Adapters
import { raceStoreAdapter } from '@infra/adapters/store/race';

// Importing Usecases
import { loadRaceUseCase } from '@usecases/loadRace';
import { loadCircuitUseCase } from '@usecases/loadCircuit';
import { loadPositionsUseCase } from '@usecases/loadPositions';
import { loadDriversUseCase } from '@usecases/loadDrivers';

const { race } = toRefs(raceStoreAdapter());

const page = ref();

// Lifecycle: start
onMounted(async () => {
  await loadRaceUseCase();

  // if (race.value?.session_key) await loadDriversUseCase(race.value.session_key);
  // if (race.value?.session_key) await loadPositionsUseCase(race.value.session_key);
  if (race.value?.circuit_key) await loadCircuitUseCase(race.value.circuit_key);
});
</script>

<style lang="scss">
.page {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
}

.track {
  width: 100%;
  height: 100%;
}
</style>
