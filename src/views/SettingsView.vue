<script setup lang="ts">
import ViewWrapper from "../components/ViewWrapper.vue";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const boardTheme = ref("wood");
const useCustomBoardTheme = () => {
  return boardTheme.value === "custom";
};
const customBoardTheme = ref("");

onMounted(() => {
  loadSettingsFromCache();
});

const loadSettingsFromCache = () => {
  const brdtheme = localStorage.getItem("boardTheme");
  if (brdtheme) {
    boardTheme.value = brdtheme;
    if (brdtheme === "custom") {
      const cbrdtheme = localStorage.getItem("customBoardTheme");
      if (cbrdtheme) {
        customBoardTheme.value = cbrdtheme;
      }
    }
  }
};

const saveSettingsInCache = () => {
  localStorage.setItem("boardTheme", boardTheme.value);
  localStorage.setItem("customBoardTheme", customBoardTheme.value);
  alert("Saved!");
};
</script>

<template>
  <ViewWrapper>
    <div class="settings">
      <h3>Settings</h3>
      <div class="ui form">
        <div class="grouped fields">
          <label>Board Theme</label>
          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" value="wood" v-model="boardTheme" />
              <label>Wood</label>
            </div>
          </div>
          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" value="white" v-model="boardTheme" />
              <label>White</label>
            </div>
          </div>
          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" value="black" v-model="boardTheme" />
              <label>Black</label>
            </div>
          </div>
          <div class="field">
            <div class="ui radio checkbox">
              <input type="radio" value="custom" v-model="boardTheme" />
              <label>Custom Color</label>
            </div>
          </div>
          <div v-if="useCustomBoardTheme()" class="field">
            <input
              v-model="customBoardTheme"
              type="text"
              placeholder="Color Code (e.g. #ffff00)"
            />
          </div>
        </div>
        <div class="ui button" @click="saveSettingsInCache()">Save</div>
        <div class="ui button" @click="router.push('/simulator')">Back</div>
      </div>
    </div>
  </ViewWrapper>
</template>
