<script setup lang="ts">
const props = defineProps<{
  onClickConfirm: () => void;
}>();
const confirm = () => {
  props.onClickConfirm();
};
</script>

<template>
  <button class="ui button" @click="confirm()">Confirm</button>
</template>
