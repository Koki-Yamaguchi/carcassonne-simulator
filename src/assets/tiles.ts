import { Tile } from "../types";
import CityCapWithStraight from "../assets/img/city_cap_with_straight.png";
import Monastery from "../assets/img/monastery.png";
import Straight from "../assets/img/straight.png";
import Curve from "../assets/img/curve.png";
import QuadrupleRoad from "../assets/img/quadruple_road.png";
import TripleRoad from "../assets/img/triple_road.png";
import Triangle from "../assets/img/triangle.png";
import TriangleWithCOA from "../assets/img/triangle_with_coa.png";
import TriangleWithRoad from "../assets/img/triangle_with_road.png";
import TriangleWithRoadWithCOA from "../assets/img/triangle_with_road_with_coa.png";
import CityCapWithCrossRoads from "../assets/img/city_cap_with_crossroads.png";
import CityCap from "../assets/img/city_cap.png";
import Left from "../assets/img/left.png";
import Right from "../assets/img/right.png";
import Connector from "../assets/img/connector.png";
import ConnectorWithCOA from "../assets/img/connector_with_coa.png";
import VerticalSeparator from "../assets/img/vertical_separator.png";
import MonasteryWithRoad from "../assets/img/monastery_with_road.png";
import TripleCity from "../assets/img/triple_city.png";
import TripleCityWithCOA from "../assets/img/triple_city_with_coa.png";
import TripleCityWithRoad from "../assets/img/triple_city_with_road.png";
import TripleCityWithRoadWithCOA from "../assets/img/triple_city_with_road_with_coa.png";
import QuadrupleCityWithCOA from "../assets/img/quadruple_city_with_coa.png";
import Separator from "../assets/img/separator.png";

const allTileKinds: Tile[] = [
  new Tile("Monastery", 0, ["field", "field", "field", "field"], Monastery),
  new Tile(
    "Monastery With Road",
    0,
    ["field", "field", "field", "road"],
    MonasteryWithRoad
  ),
  new Tile("Straight", 0, ["field", "road", "field", "road"], Straight),
  new Tile("Curve", 0, ["field", "field", "road", "road"], Curve),
  new Tile("Triple Road", 0, ["road", "field", "road", "road"], TripleRoad),
  new Tile(
    "Quadruple Road",
    0,
    ["road", "road", "road", "road"],
    QuadrupleRoad
  ),
  new Tile("Triangle", 0, ["field", "city", "city", "field"], Triangle),
  new Tile(
    "Triangle With COA",
    0,
    ["field", "city", "city", "field"],
    TriangleWithCOA
  ),
  new Tile(
    "Triangle With Road",
    0,
    ["road", "city", "city", "road"],
    TriangleWithRoad
  ),
  new Tile(
    "Triangle With Road With COA",
    0,
    ["road", "city", "city", "road"],
    TriangleWithRoadWithCOA
  ),
  new Tile("City Cap", 0, ["field", "city", "field", "field"], CityCap),
  new Tile("Left", 0, ["field", "city", "road", "road"], Left),
  new Tile("Right", 0, ["road", "city", "field", "road"], Right),
  new Tile(
    "City Cap With Straight",
    0,
    ["road", "city", "road", "field"],
    CityCapWithStraight
  ),
  new Tile(
    "City Cap With Crossroads",
    0,
    ["road", "city", "road", "road"],
    CityCapWithCrossRoads
  ),
  new Tile("Separator", 0, ["field", "field", "city", "city"], Separator),
  new Tile(
    "Vertical Separator",
    0,
    ["field", "city", "field", "city"],
    VerticalSeparator
  ),
  new Tile("Connector", 0, ["city", "field", "city", "field"], Connector),
  new Tile(
    "ConnectorWithCOA",
    0,
    ["city", "field", "city", "field"],
    ConnectorWithCOA
  ),
  new Tile("Triple City", 0, ["city", "city", "city", "field"], TripleCity),
  new Tile(
    "Triple City With COA",
    0,
    ["city", "city", "city", "field"],
    TripleCityWithCOA
  ),
  new Tile(
    "Triple City With Road",
    0,
    ["city", "city", "city", "road"],
    TripleCityWithRoad
  ),
  new Tile(
    "Triple City With Road With COA",
    0,
    ["city", "city", "city", "road"],
    TripleCityWithRoadWithCOA
  ),
  new Tile(
    "Quadruple City With COA",
    0,
    ["city", "city", "city", "city"],
    QuadrupleCityWithCOA
  ),
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
  CityCapWithStraight
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
