<script setup lang="ts">
import type { Tile } from "../types";
import type { Color } from "../types";
import { lyingMeepleSrc, standingMeepleSrc } from "@/assets/meeples";

const tileSize = 60; // px
const spotRadius = 2; // px
const spotColor = "#FFDAB9";

defineProps<{
  tile: Tile | null;
  placeable: boolean;
  placing: boolean;
  focusing: boolean;
  addingFrame: boolean;
}>();
defineEmits<{
  (e: "placeMeeple", idx: number): void;
  (e: "removeMeeple"): void;
  (e: "removeTile"): void;
  (e: "defocus"): void;
  (e: "addFrame"): void;
}>();

const boxStyle = {
  height: `${tileSize}px`,
  width: `${tileSize}px`,
};
const tileStyle = (dir: number, frame: Color) => {
  return {
    transform: `rotate(${dir * 90}deg)`,
    outline: frame !== null ? `1.8px solid ${frame}` : "none",
    "outline-offset": frame !== null ? "-1.8px" : "none",
  };
};
</script>

<template>
  <div class="box placing" :style="boxStyle" v-if="tile && placing">
    <img
      :style="{ transform: `rotate(${tile.Direction * 90}deg)` }"
      :src="tile.Src"
    />
  </div>
  <div class="box focusing" :style="boxStyle" v-else-if="tile && focusing">
    <img
      :style="{ transform: `rotate(${tile.Direction * 90}deg)` }"
      :src="tile.Src"
    />
    <i class="times mini icon remove-tile" @click="$emit('removeTile')"> </i>
    <div
      class="meeple-spots"
      v-for="pos in tile.MeepleablePositions()"
      :key="pos.idx"
    >
      <img
        class="meeple"
        v-if="tile.MeepledPosition === pos.idx"
        @click="$emit('removeMeeple')"
        :style="{
          position: 'absolute',
          left: `${tileSize / 2 + (pos.x * tileSize) / 2 - 10}px`,
          top: `${tileSize / 2 - (pos.y * tileSize) / 2 - 10}px`,
        }"
        :src="
          pos.isField
            ? lyingMeepleSrc(tile.MeepleColor)
            : standingMeepleSrc(tile.MeepleColor)
        "
      />
      <div
        class="empty"
        v-else
        @click="$emit('placeMeeple', pos.idx)"
        :style="{
          position: 'absolute',
          left: `${tileSize / 2 + (pos.x * tileSize) / 2 - spotRadius}px`,
          top: `${tileSize / 2 - (pos.y * tileSize) / 2 - spotRadius}px`,
          border: `${spotRadius}px solid ${spotColor}`,
        }"
      ></div>
    </div>
  </div>
  <div class="box" :style="boxStyle" v-else-if="tile">
    <img
      v-if="addingFrame"
      :style="tileStyle(tile.Direction, tile.Frame)"
      :src="tile.Src"
      @click="$emit('addFrame')"
    />
    <img
      v-else
      :style="tileStyle(tile.Direction, tile.Frame)"
      :src="tile.Src"
    />
    <div
      class="meeple-spots"
      v-for="pos in tile.MeepleablePositions()"
      :key="pos.idx"
    >
      <img
        class="meeple"
        v-if="tile.MeepledPosition === pos.idx"
        :style="{
          position: 'absolute',
          left: `${tileSize / 2 + (pos.x * tileSize) / 2 - 10}px`,
          top: `${tileSize / 2 - (pos.y * tileSize) / 2 - 10}px`,
        }"
        :src="
          pos.isField
            ? lyingMeepleSrc(tile.MeepleColor)
            : standingMeepleSrc(tile.MeepleColor)
        "
      />
    </div>
  </div>
  <div v-else-if="placeable" class="box placeable" :style="boxStyle"></div>
  <div v-else class="box" :style="boxStyle" @click="$emit('defocus')">
    <!-- just some space -->
  </div>
</template>

<style scoped>
div.box {
  position: relative;
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
.focusing > img {
  outline: 1.8px solid black;
  outline-offset: -1.8px;
}
.empty {
  border-radius: 50%;
  cursor: pointer;
}
.meeple {
  cursor: pointer;
  z-index: 10;
}
img.meeple {
  width: 18px;
}
.remove-tile {
  cursor: pointer;
  position: absolute;
  right: -2px;
  top: 3px;
}
</style>
