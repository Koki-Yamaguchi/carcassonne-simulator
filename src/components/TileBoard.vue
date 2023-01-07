<script setup lang="ts">
import { onMounted, ref, type PropType } from "vue";
import Panzoom from "@panzoom/panzoom";
import type { Tile } from "../types"
import { boardSize } from "@/assets/tiles";
import TileSquare from "@/components/TileSquare.vue";

const props = defineProps<{
  placeablePositions: [number, number][],
  tiles: (Tile | null)[][],
  placingTile: (Tile | null),
  placingPosition?: [number, number],
}>()
const emit = defineEmits<{
  (e: 'selectingPosition', pos: [number, number]): void
  (e: 'turnTile'): void
}>()
const elem = ref<HTMLElement>();
onMounted(() => {
  if (elem.value) {
    const panzoom = Panzoom(elem.value, {
      maxScale: 20,
    });
    if (elem.value.parentElement) {
      elem.value.parentElement.addEventListener("wheel", panzoom.zoomWithWheel);
    }
  }
});
const selectPosition = (pos: [number, number]) => {
  emit('selectingPosition', pos)
}
</script>

<template>
  <div ref="elem" class="board">
    <div class="row" v-for="y in boardSize - 1"> <!-- 1 based index -->
      <div v-for="x in boardSize - 1">
        <div v-if="tiles[y][x]">
          <TileSquare
            :tile="tiles[y][x]"
            :placeable="false"
            :placing="false"
          />
        </div>
        <div v-else-if="placeablePositions.filter(pos => { return pos[0] === y && pos[1] === x}).length > 0">
          <TileSquare
            :onClickPosition="selectPosition"
            :pos="[y, x]"
            :tile="null"
            :placeable="true"
            :placing="false"
          />
        </div>
        <div v-else-if="placingPosition && placingPosition[0] === y && placingPosition[1] === x">
          <TileSquare
            @click="$emit('turnTile')"
            :tile="placingTile"
            :placeable="false"
            :placing="true"
          />
        </div>
        <div v-else>
          <TileSquare
            :tile="null"
            :placeable="false"
            :placing="false"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.board {
  width: 500px;
  height: 700px;
}
.row {
  display: flex;
}
</style>
