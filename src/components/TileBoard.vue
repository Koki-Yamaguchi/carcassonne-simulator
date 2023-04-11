<script setup lang="ts">
import { onMounted, ref } from "vue";
import Panzoom from "@panzoom/panzoom";
import type { Tile } from "../types";
import { boardSize } from "@/assets/tiles";
import TileSquare from "@/components/TileSquare.vue";
import type { Color } from "@/types";

defineProps<{
  placeablePositions: [number, number][];
  tiles: (Tile | null)[][];
  placingTile: Tile | null;
  placingPosition?: [number, number];
  focusingPosition: [number, number];
  selectedFrame: Color;
  addingFrame: boolean;
}>();
defineEmits<{
  (e: "selectingPosition", pos: [number, number]): void;
  (e: "turnTile"): void;
  (e: "editTile", pos: [number, number]): void;
  (e: "placeMeeple", meeplePosIdx: number, pos: [number, number]): void;
  (e: "removeMeeple", pos: [number, number]): void;
  (e: "removeTile", pos: [number, number]): void;
  (e: "defocus"): void;
  (e: "addFrame", pos: [number, number]): void;
}>();
const elem = ref<HTMLElement>();
onMounted(() => {
  if (elem.value) {
    const panzoom = Panzoom(elem.value, {
      maxScale: 20,
      startX: -60 * 18,
      startY: -60 * 18,
    });
    if (elem.value.parentElement) {
      elem.value.parentElement.addEventListener("wheel", panzoom.zoomWithWheel);
    }
  }
});
</script>

<template>
  <div ref="elem" class="tile-board">
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
            :addingFrame="false"
            @placeMeeple="(idx: number) => $emit('placeMeeple', idx, [y, x])"
            @removeMeeple="() => $emit('removeMeeple', [y, x])"
            @removeTile="() => $emit('removeTile', [y, x])"
          />
          <TileSquare
            v-else-if="addingFrame"
            :tile="tiles[y][x]"
            :placeable="false"
            :placing="false"
            :focusing="false"
            :addingFrame="true"
            @addFrame="() => $emit('addFrame', [y, x])"
          />
          <TileSquare
            v-else
            @click="$emit('editTile', [y, x])"
            :tile="tiles[y][x]"
            :placeable="false"
            :placing="false"
            :focusing="false"
            :addingFrame="false"
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
            :addingFrame="false"
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
            :addingFrame="false"
          />
        </div>
        <div v-else>
          <TileSquare
            :tile="null"
            :placeable="false"
            :placing="false"
            :focusing="false"
            :addingFrame="false"
            @defocus="$emit('defocus')"
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
