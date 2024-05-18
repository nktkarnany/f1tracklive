<template>
  <h1 class="race-title">{{ circuit?.location }}</h1>
</template>

<script lang="ts" setup>
import { circuitStoreAdapter } from '@infra/adapters/store/circuit';

const { circuit } = toRefs(circuitStoreAdapter());

defineOptions({
  name: 'RaceTitle'
});
</script>
