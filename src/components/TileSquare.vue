<script setup lang="ts">
import type { Tile } from "../types";

defineProps<{
  tile: Tile | null;
  placeable: boolean;
  placing: boolean;
}>();
</script>

<template>
  <div class="box placing" v-if="tile && placing">
    <img
      :style="{ transform: `rotate(${tile.Direction * 90}deg)` }"
      :src="tile.Src"
    />
  </div>
  <div class="box" v-else-if="tile">
    <img
      :style="{ transform: `rotate(${tile.Direction * 90}deg)` }"
      :src="tile.Src"
    />
  </div>
  <div v-else-if="placeable" class="box placeable"></div>
  <div class="box" v-else>
    <!-- just some space -->
  </div>
</template>

<style scoped>
.box {
  height: 60px;
  width: 60px;
}
img {
  width: 100%;
}
.placeable {
  border-color: rgba(0, 0, 0, 0.3);
  background-color: rgba(0, 0, 0, 0.3);
}
.placing img {
  opacity: 0.5;
}
</style>
