<script setup lang="ts">
defineProps<{
  onClick: () => void;
  disabled: boolean;
  text: string;
  style?: any;
}>();
</script>

<template>
  <button
    :style="style ? style : null"
    class="ui button"
    @click="onClick()"
    :disabled="disabled"
  >
    {{ text }}
  </button>
</template>
