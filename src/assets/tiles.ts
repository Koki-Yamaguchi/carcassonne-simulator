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
  new Tile("Monastery", 0, ["field", "field", "field", "field"], Monastery, [
    { y: 0, x: 0, isField: false },
    { y: 0.5, x: 0.5, isField: true },
  ]),
  new Tile(
    "Monastery With Road",
    0,
    ["field", "field", "field", "road"],
    MonasteryWithRoad,
    [
      { y: 0, x: 0, isField: false },
      { y: 0.5, x: 0.5, isField: true },
      { y: -0.75, x: 0, isField: false },
    ]
  ),
  new Tile("Straight", 0, ["field", "road", "field", "road"], Straight, [
    { y: 0, x: 0.5, isField: true },
    { y: 0, x: 0, isField: false },
    { y: 0, x: -0.5, isField: true },
  ]),
  new Tile("Curve", 0, ["field", "field", "road", "road"], Curve, [
    { y: 0, x: 0, isField: false },
    { y: 0.5, x: 0.5, isField: true },
    { y: -0.5, x: -0.5, isField: true },
  ]),
  new Tile("Triple Road", 0, ["road", "field", "road", "road"], TripleRoad, [
    { y: 0.7, x: 0, isField: true },
    { y: 0.1, x: 0.7, isField: false },
    { y: 0.1, x: -0.7, isField: false },
    { y: -0.5, x: 0, isField: false },
    { y: -0.5, x: -0.5, isField: true },
    { y: -0.5, x: 0.5, isField: true },
  ]),
  new Tile(
    "Quadruple Road",
    0,
    ["road", "road", "road", "road"],
    QuadrupleRoad,
    [
      { y: 0.7, x: 0.1, isField: true },
      { y: -0.1, x: 0.7, isField: false },
      { y: 0, x: -0.7, isField: false },
      { y: -0.7, x: 0, isField: false },
      { y: -0.5, x: -0.5, isField: true },
      { y: -0.5, x: 0.5, isField: true },
      { y: 0.5, x: 0.5, isField: true },
      { y: 0.5, x: -0.5, isField: true },
    ]
  ),
  new Tile("Triangle", 0, ["field", "city", "city", "field"], Triangle, [
    { y: 0.5, x: -0.5, isField: false },
    { y: -0.4, x: 0.4, isField: true },
  ]),
  new Tile(
    "Triangle With COA",
    0,
    ["field", "city", "city", "field"],
    TriangleWithCOA,
    [
      { y: 0.5, x: -0.5, isField: false },
      { y: -0.4, x: 0.4, isField: true },
    ]
  ),
  new Tile(
    "Triangle With Road",
    0,
    ["road", "city", "city", "road"],
    TriangleWithRoad,
    [
      { y: 0.5, x: -0.5, isField: false },
      { y: -0.4, x: 0.4, isField: false },
      { y: -0.1, x: 0.1, isField: true },
      { y: -0.7, x: 0.7, isField: true },
    ]
  ),
  new Tile(
    "Triangle With Road With COA",
    0,
    ["road", "city", "city", "road"],
    TriangleWithRoadWithCOA,
    [
      { y: 0.5, x: -0.5, isField: false },
      { y: -0.4, x: 0.4, isField: false },
      { y: -0.1, x: 0.1, isField: true },
      { y: -0.7, x: 0.7, isField: true },
    ]
  ),
  new Tile("City Cap", 0, ["field", "city", "field", "field"], CityCap, [
    { y: 0.8, x: 0, isField: false },
    { y: -0.1, x: 0, isField: true },
  ]),
  new Tile("Left", 0, ["field", "city", "road", "road"], Left, [
    { y: 0.8, x: 0, isField: false },
    { y: -0.1, x: 0.5, isField: true },
    { y: -0.25, x: -0.25, isField: false },
    { y: -0.6, x: -0.6, isField: true },
  ]),
  new Tile("Right", 0, ["road", "city", "field", "road"], Right, [
    { y: 0.8, x: 0, isField: false },
    { y: -0.1, x: -0.5, isField: true },
    { y: -0.25, x: 0.25, isField: false },
    { y: -0.6, x: 0.6, isField: true },
  ]),
  new Tile(
    "City Cap With Straight",
    0,
    ["road", "city", "road", "field"],
    CityCapWithStraight,
    [
      { y: 0.8, x: 0, isField: false },
      { y: 0.3, x: 0.7, isField: true },
      { y: 0, x: 0, isField: false },
      { y: -0.6, x: 0, isField: true },
    ]
  ),
  new Tile(
    "City Cap With Crossroads",
    0,
    ["road", "city", "road", "road"],
    CityCapWithCrossRoads,
    [
      { y: 0.8, x: 0, isField: false },
      { y: 0.3, x: 0.8, isField: true },
      { y: -0.2, x: 0.6, isField: false },
      { y: -0.1, x: -0.6, isField: false },
      { y: -0.6, x: -0.1, isField: false },
      { y: -0.7, x: 0.8, isField: true },
      { y: -0.7, x: -0.8, isField: true },
    ]
  ),
  new Tile("Separator", 0, ["field", "city", "city", "field"], Separator, [
    { y: 0.8, x: 0, isField: false },
    { y: 0, x: -0.85, isField: false },
    { y: -0.4, x: 0.4, isField: true },
  ]),
  new Tile(
    "Vertical Separator",
    0,
    ["field", "city", "field", "city"],
    VerticalSeparator,
    [
      { y: 0.8, x: 0, isField: false },
      { y: 0, x: 0, isField: true },
      { y: -0.8, x: 0, isField: false },
    ]
  ),
  new Tile("Connector", 0, ["city", "field", "city", "field"], Connector, [
    { y: 0.85, x: 0, isField: true },
    { y: 0, x: 0, isField: false },
    { y: -0.8, x: 0, isField: true },
  ]),
  new Tile(
    "ConnectorWithCOA",
    0,
    ["city", "field", "city", "field"],
    ConnectorWithCOA,
    [
      { y: 0.85, x: 0, isField: true },
      { y: 0, x: 0, isField: false },
      { y: -0.8, x: 0, isField: true },
    ]
  ),
  new Tile("Triple City", 0, ["city", "city", "city", "field"], TripleCity, [
    { y: 0.1, x: 0, isField: false },
    { y: -0.7, x: 0, isField: true },
  ]),
  new Tile(
    "Triple City With COA",
    0,
    ["city", "city", "city", "field"],
    TripleCityWithCOA,
    [
      { y: 0.1, x: 0, isField: false },
      { y: -0.7, x: 0, isField: true },
    ]
  ),
  new Tile(
    "Triple City With Road",
    0,
    ["city", "city", "city", "road"],
    TripleCityWithRoad,
    [
      { y: 0.1, x: 0, isField: false },
      { y: -0.7, x: 0, isField: false },
      { y: -0.8, x: -0.4, isField: true },
      { y: -0.8, x: 0.4, isField: true },
    ]
  ),
  new Tile(
    "Triple City With Road With COA",
    0,
    ["city", "city", "city", "road"],
    TripleCityWithRoadWithCOA,
    [
      { y: 0.1, x: 0, isField: false },
      { y: -0.7, x: 0, isField: false },
      { y: -0.8, x: -0.4, isField: true },
      { y: -0.8, x: 0.4, isField: true },
    ]
  ),
  new Tile(
    "Quadruple City With COA",
    0,
    ["city", "city", "city", "city"],
    QuadrupleCityWithCOA,
    [{ y: 0, x: 0, isField: false }]
  ),
];

function newTile(tile: Tile): Tile {
  return new Tile(
    tile.Name,
    tile.Direction,
    tile.Sides,
    tile.Src,
    tile.DefaultMeepleablePositions
  );
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
