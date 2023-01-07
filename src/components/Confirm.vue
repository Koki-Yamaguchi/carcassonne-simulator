<script setup lang="ts">
const props = defineProps<{
  onClickConfirm: () => void
}>()
</script>

<template>
  <button
    class="ui button"
    @click="onClickConfirm()"
  >
    Confirm
  </button>
</template>
