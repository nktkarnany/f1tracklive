<template>
  <div class="user-media">
    <img :src="driver.headshot_url" alt="User headshot" class="user-media__image" />
    <div class="user-media__info">
      <h2 class="user-media__name">{{ driver.full_name }}</h2>
      <p class="user-media__subtitle">{{ driver.team_name }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Driver } from '@domain/Driver';

type DriverProps = {
  driver: Driver;
};

defineProps<DriverProps>();

defineOptions({
  name: 'RaceDriver'
});
</script>

<style lang="scss" scoped>
.user-media {
  display: flex;
  align-items: center;
  height: 5vh; /* Each UserMedia takes up 5% of the viewport height */
  padding: 10px;
  box-sizing: border-box;
  overflow: hidden; /* Ensure contents fit within the component */
}

.user-media__image {
  height: 100%; /* Image height adjusts to the height of the container */
  width: auto; /* Maintain aspect ratio */
  max-height: 100%; /* Ensure image does not overflow */
  margin-right: 16px;
}

.user-media__info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.user-media__name {
  font-size: 1em;
  margin: 0;
}

.user-media__subtitle {
  color: #666;
  margin: 0;
  font-size: 0.9em;
}
</style>
