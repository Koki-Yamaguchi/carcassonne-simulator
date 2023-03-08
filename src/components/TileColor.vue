<script setup lang="ts">
import type { Color } from "@/types";

defineProps<{
  color: Color;
}>();
</script>

<template>
  <div
    v-if="color"
    class="border"
    :style="{
      border: `1.5px solid ${color}`,
    }"
  ></div>
  <i v-else class="times icon"></i>
</template>
<style scoped>
.border {
  width: 20px;
  height: 20px;
}
</style>
