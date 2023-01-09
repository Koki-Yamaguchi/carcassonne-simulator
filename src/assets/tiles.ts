import { Tile } from "../types";
import CityCapWithStraightImg from "../assets/img/city_cap_with_straight.png";
import TripleRoadsImg from "../assets/img/triple_roads.png";
import MonasteryImg from "../assets/img/monastery.png";

const allTileKinds: Tile[] = [
  new Tile(
    "City Cap With Straight",
    0,
    ["road", "city", "road", "field"],
    CityCapWithStraightImg
  ),
  new Tile(
    "Triple Roads",
    0,
    ["road", "field", "road", "road"],
    TripleRoadsImg
  ),
  new Tile("Monastery", 0, ["field", "field", "field", "field"], MonasteryImg),
];

function newTile(tile: Tile): Tile {
  return new Tile(tile.Name, tile.Direction, tile.Sides, tile.Src);
}

const boardSize = 2 * 16 + 1;
const initialBoard: (Tile | null)[][] = [];
for (let i = 0; i < boardSize; i++) {
  const emptyRow: (Tile | null)[] = [];
  for (let j = 0; j < boardSize; j++) {
    emptyRow.push(null);
  }
  initialBoard.push(emptyRow);
}
initialBoard[(boardSize - 1) / 2][(boardSize - 1) / 2] = new Tile(
  "City Cap With Straight",
  0,
  ["road", "city", "road", "field"],
  CityCapWithStraightImg
);

function resetBoard(board: (Tile | null)[][]) {
  for (let y = 0; y < boardSize; y++) {
    for (let x = 0; x < boardSize; x++) {
      if (y !== (boardSize - 1) / 2 || x !== (boardSize - 1) / 2) {
        board[y][x] = null;
      }
    }
  }
}

export { allTileKinds, initialBoard, boardSize, newTile, resetBoard };
