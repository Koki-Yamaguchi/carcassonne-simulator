<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Panzoom from '@panzoom/panzoom'
const elem = ref<HTMLElement>()
onMounted(() => {
  if (elem.value) {
    const panzoom = Panzoom(elem.value, {
      maxScale: 10,
    })
    if (elem.value.parentElement) {
      elem.value.parentElement.addEventListener('wheel', panzoom.zoomWithWheel)
    }
  }
})
</script>

<template>
  <div
    ref="elem"
    class="board"
  >
    <img src="../assets/img/city_lip.png" />
  </div>
</template>

<style scoped>
.board {
  width: 500px;
  height: 500px;
  border: solid;
}
</style>
