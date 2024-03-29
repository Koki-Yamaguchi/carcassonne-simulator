<script setup lang="ts">
import TileBoard from "../components/TileBoard.vue";
import PlaceNewTile from "../components/PlaceNewTile.vue";
import NormalButton from "../components/NormalButton.vue";
import ChangeColor from "../components/ChangeColor.vue";
import SelectFrame from "../components/SelectFrame.vue";
import { ref, computed } from "vue";
import type { Color, Tile } from "../types";
import { getBoard, newTile, boardSize, resetBoard } from "../assets/tiles";
import { useRouter } from "vue-router";
import WoodImg from "../assets/img/background-wood.png";

const router = useRouter();
const tiles = ref<(Tile | null)[][]>(getBoard());
const placingTile = ref<Tile | null>(null);
const placeablePositions = ref<[number, number][]>([]);
const placeableDirections = ref<number[]>([]);
const placingPosition = ref<[number, number]>([-1, -1]);
const focusingPosition = ref<[number, number]>([-1, -1]);
const currentColor = ref<Color>("red");
const addingFrame = ref<boolean>(false);
const selectedFrame = ref<Color>(null);

const handleTileSelected = (tileKind: Tile) => {
  defocus();
  placingTile.value = newTile(tileKind);
  for (let y = 1; y < boardSize - 1; y++) {
    for (let x = 1; x < boardSize - 1; x++) {
      if (tiles.value[y][x] === null) {
        if (
          tiles.value[y - 1][x] === null &&
          tiles.value[y + 1][x] === null &&
          tiles.value[y][x - 1] === null &&
          tiles.value[y][x + 1] === null
        ) {
          continue;
        }
        for (let dir = 0; dir < 4; dir++) {
          placingTile.value.Rotate();
          if (
            (tiles.value[y - 1][x] !== null &&
              tiles.value[y - 1][x]?.Bottom() !== placingTile.value.Top()) ||
            (tiles.value[y + 1][x] !== null &&
              tiles.value[y + 1][x]?.Top() !== placingTile.value.Bottom()) ||
            (tiles.value[y][x - 1] !== null &&
              tiles.value[y][x - 1]?.Right() !== placingTile.value.Left()) ||
            (tiles.value[y][x + 1] !== null &&
              tiles.value[y][x + 1]?.Left() !== placingTile.value.Right())
          ) {
            continue;
          }
          placeablePositions.value.push([y, x]);
        }
      }
    }
  }
  if (placeablePositions.value.length === 0) {
    placingTile.value = null;
    alert("There is no square that the selected tile fits.");
  }
};
const handlePositionSelected = (pos: [number, number]) => {
  placeableDirections.value = [];
  placingTile.value?.ResetDirection();
  const y = pos[0];
  const x = pos[1];
  const dirs = [];
  for (let dir = 0; dir < 4; dir++) {
    let placeable = true;
    if (
      (tiles.value[y - 1][x] !== null &&
        tiles.value[y - 1][x]?.Bottom() !== placingTile.value?.Top()) ||
      (tiles.value[y + 1][x] !== null &&
        tiles.value[y + 1][x]?.Top() !== placingTile.value?.Bottom()) ||
      (tiles.value[y][x - 1] !== null &&
        tiles.value[y][x - 1]?.Right() !== placingTile.value?.Left()) ||
      (tiles.value[y][x + 1] !== null &&
        tiles.value[y][x + 1]?.Left() !== placingTile.value?.Right())
    ) {
      placeable = false;
    }
    if (placeable) {
      dirs.push(dir);
    }
    placingTile.value?.Rotate();
  }
  placeableDirections.value = dirs;

  // initial valid direction
  placingPosition.value = pos;
  while (
    !placeableDirections.value.includes(
      placingTile.value ? placingTile.value.Direction : -1
    )
  ) {
    placingTile.value?.Rotate();
  }
};
const handleTurnTile = () => {
  placingTile.value?.Rotate();
  while (
    !placeableDirections.value.includes(
      placingTile.value ? placingTile.value.Direction : -1
    )
  ) {
    placingTile.value?.Rotate();
  }
};
const confirm = () => {
  tiles.value[placingPosition.value[0]][placingPosition.value[1]] =
    placingTile.value;
  placingTile.value = null;
  placeablePositions.value = [];
  placeableDirections.value = [];
  placingPosition.value = [-1, -1];
  saveBoardInCache();
};
const cancel = () => {
  placingTile.value = null;
  placeablePositions.value = [];
  placeableDirections.value = [];
  placingPosition.value = [-1, -1];

  addingFrame.value = false;
  selectedFrame.value = null;
};
const reset = () => {
  if (!window.confirm("Do you reset the entire board?")) {
    return;
  }
  resetBoard(tiles.value);
  placingTile.value = null;
  placeablePositions.value = [];
  placeableDirections.value = [];
  placingPosition.value = [-1, -1];
  saveBoardInCache();
};
const handleEditTile = (pos: [number, number]) => {
  focusingPosition.value = pos;
};
const placeMeeple = (meeplePosIdx: number, pos: [number, number]) => {
  tiles.value[pos[0]][pos[1]]?.PlaceMeeple(meeplePosIdx, currentColor.value);
  saveBoardInCache();
};
const removeMeeple = (pos: [number, number]) => {
  tiles.value[pos[0]][pos[1]]?.RemoveMeeple();
  saveBoardInCache();
};
const removeTile = (pos: [number, number]) => {
  tiles.value[pos[0]][pos[1]] = null;
  saveBoardInCache();
};
const handleChangeColor = (color: Color) => {
  currentColor.value = color;
};
const handleSelectFrame = (color: Color) => {
  addingFrame.value = true;
  selectedFrame.value = color;
};
const addFrame = (pos: [number, number]) => {
  tiles.value[pos[0]][pos[1]]?.AddFrame(selectedFrame.value);
  selectedFrame.value = null;
  addingFrame.value = false;
  saveBoardInCache();
};
const defocus = () => {
  focusingPosition.value = [-1, -1];
};
const saveBoardInCache = () => {
  localStorage.setItem("board", JSON.stringify(tiles.value));
};
const getBoardTheme = () => {
  let boardTheme = "wood";
  const brdtheme = localStorage.getItem("boardTheme");
  if (brdtheme) {
    boardTheme = brdtheme;
    if (brdtheme === "custom") {
      const cbrdtheme = localStorage.getItem("customBoardTheme");
      if (cbrdtheme) {
        boardTheme = cbrdtheme;
      }
    }
  }
  return boardTheme;
};
const boardStyle = computed(() => {
  const theme = getBoardTheme();
  if (
    theme[0] === "#" ||
    theme === "black" ||
    theme === "white" ||
    theme === "blue" ||
    theme === "blue" ||
    theme === "red" ||
    theme === "pink" ||
    theme === "purple" ||
    theme === "green" ||
    theme === "yellow" ||
    theme === "brown" ||
    theme === "cyan"
  ) {
    return {
      "background-color": theme,
    };
  } else {
    return {
      "background-image": "url(" + WoodImg + ")",
    };
  }
});
</script>

<template>
  <div class="simulator">
    <div class="items">
      <PlaceNewTile
        class="item"
        @placingTile="handleTileSelected"
        :disabled="placingTile !== null || addingFrame"
      />
      <ChangeColor
        class="item"
        @changeColor="handleChangeColor"
        :currentColor="currentColor"
        :disabled="placingTile !== null || addingFrame"
      />
      <SelectFrame
        class="item"
        @selectFrame="handleSelectFrame"
        :disabled="
          placingTile !== null || addingFrame || focusingPosition[0] !== -1
        "
      />
      <NormalButton
        class="item"
        :onClick="confirm"
        :disabled="
          placingTile === null ||
          addingFrame ||
          placeableDirections.length === 0
        "
        :text="'Confirm'"
      />
      <NormalButton
        class="item"
        :onClick="cancel"
        :disabled="placingTile === null && !addingFrame"
        :text="'Cancel'"
      />
      <NormalButton
        class="item"
        :onClick="reset"
        :disabled="false"
        :style="{ color: '#DC143C' }"
        :text="'Reset'"
      />
      <button
        class="ui icon button item"
        @click="router.push('/simulator/settings')"
      >
        <i class="cog icon"></i>
      </button>
    </div>
    <div class="board" :style="boardStyle">
      <TileBoard
        :placeablePositions="placeablePositions"
        :tiles="tiles"
        @selectingPosition="handlePositionSelected"
        :placingTile="placingTile"
        :placingPosition="placingPosition"
        :placeableDirections="placeableDirections"
        @turnTile="handleTurnTile"
        @editTile="handleEditTile"
        :focusingPosition="focusingPosition"
        @placeMeeple="placeMeeple"
        @removeMeeple="removeMeeple"
        @removeTile="removeTile"
        @defocus="defocus"
        :selectedFrame="selectedFrame"
        :addingFrame="addingFrame"
        @addFrame="addFrame"
      />
    </div>
  </div>
  <div class="footer">
    <div class="ui vertical footer segment">
      <div class="ui center aligned container">
        <div class="ui section divider"></div>
        <div class="ui horizontal small divided link list">
          <a class="item"> © 2023 Koki Yamaguchi </a>
          <a
            class="item"
            href="https://github.com/Koki-Yamaguchi/carcassonne-simulator"
            target="_blank"
          >
            Contribute
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.simulator {
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
}
.items {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 10px;
}
.item {
  margin-bottom: 3px;
}
.board {
  height: 1000px;
  border-radius: 0.5%;
}
</style>
