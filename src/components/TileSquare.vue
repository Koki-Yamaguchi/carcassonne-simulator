<script setup lang="ts">
import type { Tile, Color } from "../types";
import RedStanding from "../assets/img/red_standing.png";
import YellowStanding from "../assets/img/yellow_standing.png";

const tileSize = 60; // px
const spotRadius = 2; // px
const spotColor = "#FFDAB9";

defineProps<{
  tile: Tile | null;
  placeable: boolean;
  placing: boolean;
  focusing: boolean;
}>();
defineEmits<{
  (e: "placeMeeple", idx: number, color: Color): void;
  (e: "removeMeeple"): void;
}>();

const boxStyle = {
  height: `${tileSize}px`,
  width: `${tileSize}px`,
};
const meepleSrc = (color: Color) => {
  if (color === "red") {
    return RedStanding;
  }
  if (color === "yellow") {
    return YellowStanding;
  }
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
        :src="meepleSrc(tile.MeepleColor)"
      />
      <div
        class="empty"
        v-else
        @click="$emit('placeMeeple', pos.idx, 'yellow')"
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
      :style="{ transform: `rotate(${tile.Direction * 90}deg)` }"
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
        :src="meepleSrc(tile.MeepleColor)"
      />
    </div>
  </div>
  <div v-else-if="placeable" class="box placeable" :style="boxStyle"></div>
  <div class="box" :style="boxStyle" v-else>
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
  outline: 2px solid black;
  outline-offset: -2px;
}
.empty {
  border-radius: 50%;
  cursor: pointer;
}
.meeple {
  cursor: pointer;
}
img.meeple {
  width: 15px;
}
</style>
