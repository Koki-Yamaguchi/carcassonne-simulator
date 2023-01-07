<script setup lang="ts">
import { allTileKinds } from "../assets/tiles";
import type { Tile } from "../types";

const emit = defineEmits<{
  (e: "placingTile", tile: Tile): void;
}>();
const place = (tileKind: Tile) => {
  emit("placingTile", tileKind);
};
</script>

<template>
  <div>
    <div class="ui button simple dropdown">
      <i class="plus icon"></i>
      <span class="text">Add Tile</span>
      <div class="menu">
        <div
          v-for="tileKind in allTileKinds"
          class="item"
          :key="tileKind.Name"
          @click="place(tileKind)"
        >
          <img class="ui avatar image" :src="tileKind.Src" />
          {{ tileKind.Name }}
        </div>
      </div>
    </div>
  </div>
</template>
