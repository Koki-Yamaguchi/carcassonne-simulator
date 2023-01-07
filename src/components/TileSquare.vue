<script setup lang="ts">
import type { Tile } from "../types"

const props = defineProps<{
  tile: Tile | null,
  placeable: boolean,
  placing: boolean,
  onClickPosition?: (pos: [number, number]) => void,
  pos?: [number, number],
}>()
</script>

<template>
  <div class="box placing" v-if="tile && placing">
    <img :style="{'transform': `rotate(${tile.Direction * 90}deg)`}" :src="tile.ImgURL" />
  </div>
  <div class="box" v-else-if="tile">
    <img :style="{'transform': `rotate(${tile.Direction * 90}deg)`}" :src="tile.ImgURL" />
  </div>
  <div
    v-else-if="placeable"
    class="box placeable"
    @click="onClickPosition(pos)"
  >
  </div>
  <div class="box" v-else>
    <!-- just some space -->
  </div>
</template>

<style scoped>
.box {
  height: 100px;
  width: 100px;
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