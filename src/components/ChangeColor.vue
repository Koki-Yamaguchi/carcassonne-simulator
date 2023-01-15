<script setup lang="ts">
import { standingMeepleSrc } from "../assets/meeples";
import type { Color } from "@/types";

defineEmits<{
  (e: "changeColor", color: Color): void;
}>();
defineProps<{
  currentColor: Color;
}>();
const colors: Color[] = ["red", "yellow", "green", "black", "blue"];
</script>

<template>
  <div class="ui button simple dropdown">
    <img class="current" :src="standingMeepleSrc(currentColor)" />
    <div class="menu">
      <div>
        <img
          v-for="(color, idx) in colors"
          :key="idx"
          @click="$emit('changeColor', color)"
          :src="standingMeepleSrc(color)"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
.ui.button.simple.dropdown {
  height: 36px;
  padding-top: 8px;
}
img {
  width: 30px;
}
img.current {
  width: 20px;
}
</style>
