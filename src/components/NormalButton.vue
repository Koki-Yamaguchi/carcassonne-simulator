<script setup lang="ts">
defineProps<{
  onClick: () => void;
  disabled: boolean;
  text: string;
}>();
</script>

<template>
  <button class="ui button" @click="onClick()" :disabled="disabled">
    {{ text }}
  </button>
</template>
