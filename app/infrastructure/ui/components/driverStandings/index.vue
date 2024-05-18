<template>
  <div class="standings">
    <race-driver v-for="(d, i) in drivers" :key="i" :driver="d" />
  </div>
</template>

<script lang="ts" setup>
// Importing Adapters
import { raceStoreAdapter } from '@infra/adapters/store/race';
import { driverStoreAdapter } from '@infra/adapters/store/driver';

// Importing usecases
import { loadPositionsUseCase } from '@usecases/loadPositions';

const { race, isLive } = toRefs(raceStoreAdapter());
const { drivers } = toRefs(driverStoreAdapter());

watch(
  () => isLive.value,
  async () => {
    setInterval(async () => {
      if (race.value?.session_key) await loadPositionsUseCase(race.value.session_key);
    }, 10000);
  },
  {
    immediate: true
  }
);

defineOptions({
  name: 'DriverStandings'
});
</script>

<style lang="scss" scoped>
.standings {
  display: flex;
  flex-direction: column;

  height: 100%;
  overflow: hidden;
}
</style>
