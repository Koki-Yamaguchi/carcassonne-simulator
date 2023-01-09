<script setup lang="ts">
import { allTileKinds } from "../assets/tiles";
import type { Tile } from "../types";

defineEmits<{
  (e: "placingTile", tile: Tile): void;
}>();
defineProps<{
  disabled: boolean;
}>();
</script>

<template>
  <div>
    <div class="ui button simple dropdown" :class="{ disabled }">
      <i class="plus icon"></i>
      <span class="text">Place Tile</span>
      <div class="menu">
        <div
          v-for="tileKind in allTileKinds"
          class="item"
          :key="tileKind.Name"
          @click="$emit('placingTile', tileKind)"
        >
          <img class="ui avatar image" :src="tileKind.Src" />
          {{ tileKind.Name }}
        </div>
      </div>
    </div>
  </div>
</template>
