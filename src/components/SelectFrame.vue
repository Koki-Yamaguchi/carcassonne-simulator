<script setup lang="ts">
import TileColor from "../components/TileColor.vue";
import type { Color } from "@/types";

defineEmits<{
  (e: "selectFrame", color: Color): void;
}>();
defineProps<{
  disabled: boolean;
}>();
const colors: Color[] = ["red", "yellow", "green", "black", "blue", null];
</script>

<template>
  <div class="ui button simple dropdown" :class="{ disabled }">
    Frame
    <div class="menu">
      <div class="colors">
        <TileColor
          v-for="(color, idx) in colors"
          :key="idx"
          @click="$emit('selectFrame', color)"
          :color="color"
          class="color"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
.ui.button.simple.dropdown {
  height: 36px;
}
.colors {
  display: flex;
}
.color {
  margin: 5px 5px 5px 5px;
}
</style>
