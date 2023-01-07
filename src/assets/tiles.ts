import { Tile } from "../types"

const allTileKinds: Tile[] = [
  new Tile("City Cap With Straight", 0, "src/assets/img/city_cap_with_straight.png", ["road", "city", "road", "field"]),
  new Tile("Triple Roads", 0, "src/assets/img/triple_roads.png", ["road", "field", "road", "road"]),
  new Tile("Monastery", 0, "src/assets/img/monastery.png", ["field", "field", "field", "field"]),
]

function newTile(tile: Tile): Tile {
  return new Tile(
    tile.Name,
    tile.Direction,
    tile.ImgURL,
    tile.Sides,
  )
}

const boardSize = 2 * 5 + 1
const initialTiles: (Tile | null)[][] = []
for (let i = 0; i < boardSize; i ++) {
  const emptyRow: (Tile | null)[] = []
  for (let i = 0; i < boardSize; i ++) {
    emptyRow.push(null)
  }
  initialTiles.push(emptyRow)
}
initialTiles[(boardSize - 1) / 2][(boardSize - 1) / 2] = new Tile("City Cap With Straight", 0, "src/assets/img/city_cap_with_straight.png", ["road", "city", "road", "field"])

export { allTileKinds, initialTiles, boardSize, newTile }
