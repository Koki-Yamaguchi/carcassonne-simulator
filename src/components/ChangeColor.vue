<script setup lang="ts">
import { meepleSrc } from "../assets/meeples";
import type { Color } from "@/types";

defineEmits<{
  (e: "changeColor", color: Color): void;
}>();
defineProps<{
  currentColor: Color;
}>();
const colors: Color[] = ["red", "yellow"];
</script>

<template>
  <div class="ui button simple dropdown">
    <img :src="meepleSrc(currentColor)" />
    <div class="menu">
      <div class="row">
        <img
          v-for="(color, idx) in colors"
          :key="idx"
          @click="$emit('changeColor', color)"
          :src="meepleSrc(color)"
        />
      </div>
    </div>
  </div>
</template>
