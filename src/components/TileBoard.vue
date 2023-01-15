<script setup lang="ts">
import { onMounted, ref } from "vue";
import Panzoom from "@panzoom/panzoom";
import type { Tile } from "../types";
import { boardSize } from "@/assets/tiles";
import TileSquare from "@/components/TileSquare.vue";

defineProps<{
  placeablePositions: [number, number][];
  tiles: (Tile | null)[][];
  placingTile: Tile | null;
  placingPosition?: [number, number];
  focusingPosition: [number, number];
}>();
defineEmits<{
  (e: "selectingPosition", pos: [number, number]): void;
  (e: "turnTile"): void;
  (e: "editTile", pos: [number, number]): void;
}>();
const elem = ref<HTMLElement>();
onMounted(() => {
  if (elem.value) {
    const panzoom = Panzoom(elem.value, {
      maxScale: 20,
      startX: -60 * 14,
      startY: -60 * 14,
    });
    if (elem.value.parentElement) {
      elem.value.parentElement.addEventListener("wheel", panzoom.zoomWithWheel);
    }
  }
});
</script>

<template>
  <div ref="elem" class="board">
    <div class="row" v-for="y in boardSize - 1" :key="y">
      <!-- 1 based index -->
      <div v-for="x in boardSize - 1" :key="x">
        <div v-if="tiles[y][x]">
          <TileSquare
            v-if="focusingPosition[0] === y && focusingPosition[1] === x"
            :tile="tiles[y][x]"
            :placeable="false"
            :placing="false"
            :focusing="true"
          />
          <TileSquare
            v-else
            @click="$emit('editTile', [y, x])"
            :tile="tiles[y][x]"
            :placeable="false"
            :placing="false"
            :focusing="false"
          />
        </div>
        <div
          v-else-if="
            placingPosition &&
            placingPosition[0] === y &&
            placingPosition[1] === x
          "
        >
          <TileSquare
            @click="$emit('turnTile')"
            :tile="placingTile"
            :placeable="false"
            :placing="true"
            :focusing="false"
          />
        </div>
        <div
          v-else-if="
            placeablePositions.filter((pos) => {
              return pos[0] === y && pos[1] === x;
            }).length > 0
          "
        >
          <TileSquare
            @click="$emit('selectingPosition', [y, x])"
            :tile="null"
            :placeable="true"
            :placing="false"
            :focusing="false"
          />
        </div>
        <div v-else>
          <TileSquare
            :tile="null"
            :placeable="false"
            :placing="false"
            :focusing="false"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.row {
  display: flex;
}
</style>
