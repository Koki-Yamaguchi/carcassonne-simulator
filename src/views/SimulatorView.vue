<script setup lang="ts">
import TileBoard from "../components/TileBoard.vue";
import PlaceNewTile from "../components/PlaceNewTile.vue";
import ConfirmPlacement from "../components/ConfirmPlacement.vue";
import { ref } from "vue";
import type { Tile } from "../types";
import { initialTiles, newTile, boardSize } from "../assets/tiles";

const tiles = ref<(Tile | null)[][]>(initialTiles);
const placingTile = ref<Tile | null>(null);
const placeablePositions = ref<[number, number][]>([]);
const placeableDirections = ref<number[]>([]);
const placingPosition = ref<[number, number]>([-1, -1]);
const handleTileSelected = (tileKind: Tile) => {
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
};
const handlePositionSelected = (pos: [number, number]) => {
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

  placeablePositions.value = [];
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
};
</script>

<template>
  <div class="buttons">
    <PlaceNewTile @placingTile="handleTileSelected" />
    <ConfirmPlacement :onClickConfirm="confirm" />
  </div>
  <div class="board">
    <TileBoard
      :placeablePositions="placeablePositions"
      :tiles="tiles"
      @selectingPosition="handlePositionSelected"
      :placingTile="placingTile"
      :placingPosition="placingPosition"
      :placeableDirections="placeableDirections"
      @turnTile="handleTurnTile"
    />
  </div>
</template>
<style scoped>
.buttons {
  margin-left: 10px;
  margin-top: 10px;
  display: flex;
}
</style>
