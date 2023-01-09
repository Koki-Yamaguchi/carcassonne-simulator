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
      <div class="menu">
        <div class="row">
          <img
            v-for="tileKind in allTileKinds"
            :key="tileKind.Name"
            @click="$emit('placingTile', tileKind)"
            :src="tileKind.Src"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.ui.button.simple.dropdown .plus {
  margin-right: 0px;
}
.row {
  display: flex;
  width: 180px;
  flex-wrap: wrap;
}
img {
  width: 60px;
  height: 60px;
  cursor: pointer;
  border-radius: 5%;
}
</style>
