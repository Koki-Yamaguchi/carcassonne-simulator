import { Tile } from "../types";
import CityCapWithStraight from "../assets/img/city_cap_with_straight.png";
import Monastery from "../assets/img/monastery.png";
import MonasteryWithRoad from "../assets/img/monastery_with_road.png";
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
import TripleCity from "../assets/img/triple_city.png";
import TripleCityWithCOA from "../assets/img/triple_city_with_coa.png";
import TripleCityWithRoad from "../assets/img/triple_city_with_road.png";
import TripleCityWithRoadWithCOA from "../assets/img/triple_city_with_road_with_coa.png";
import QuadrupleCityWithCOA from "../assets/img/quadruple_city_with_coa.png";
import Separator from "../assets/img/separator.png";

const allTileKinds: Tile[] = [
  new Tile(
    "Monastery",
    0,
    ["field", "field", "field", "field"],
    Monastery,
    null,
    [
      { idx: 1, y: 0, x: 0, isField: false },
      { idx: 2, y: 0.5, x: 0.5, isField: true },
    ]
  ),
  new Tile(
    "Monastery With Road",
    0,
    ["field", "field", "field", "road"],
    MonasteryWithRoad,
    null,
    [
      { idx: 1, y: 0, x: 0, isField: false },
      { idx: 2, y: 0.5, x: 0.5, isField: true },
      { idx: 3, y: -0.75, x: 0, isField: false },
    ]
  ),
  new Tile("Straight", 0, ["field", "road", "field", "road"], Straight, null, [
    { idx: 1, y: 0, x: 0.5, isField: true },
    { idx: 2, y: 0, x: 0, isField: false },
    { idx: 3, y: 0, x: -0.5, isField: true },
  ]),
  new Tile("Curve", 0, ["field", "field", "road", "road"], Curve, null, [
    { idx: 1, y: 0, x: 0, isField: false },
    { idx: 2, y: 0.5, x: 0.5, isField: true },
    { idx: 3, y: -0.5, x: -0.5, isField: true },
  ]),
  new Tile(
    "Triple Road",
    0,
    ["road", "field", "road", "road"],
    TripleRoad,
    null,
    [
      { idx: 1, y: 0.7, x: 0, isField: true },
      { idx: 2, y: 0.1, x: 0.7, isField: false },
      { idx: 3, y: 0.1, x: -0.7, isField: false },
      { idx: 4, y: -0.5, x: 0, isField: false },
      { idx: 5, y: -0.5, x: -0.5, isField: true },
      { idx: 6, y: -0.5, x: 0.5, isField: true },
    ]
  ),
  new Tile(
    "Quadruple Road",
    0,
    ["road", "road", "road", "road"],
    QuadrupleRoad,
    null,
    [
      { idx: 1, y: 0.7, x: 0.1, isField: true },
      { idx: 2, y: -0.1, x: 0.7, isField: false },
      { idx: 3, y: 0, x: -0.7, isField: false },
      { idx: 4, y: -0.7, x: 0, isField: false },
      { idx: 5, y: -0.5, x: -0.5, isField: true },
      { idx: 6, y: -0.5, x: 0.5, isField: true },
      { idx: 7, y: 0.5, x: 0.5, isField: true },
      { idx: 8, y: 0.5, x: -0.5, isField: true },
    ]
  ),
  new Tile("Triangle", 0, ["field", "city", "city", "field"], Triangle, null, [
    { idx: 1, y: 0.5, x: -0.5, isField: false },
    { idx: 2, y: -0.4, x: 0.4, isField: true },
  ]),
  new Tile(
    "Triangle With COA",
    0,
    ["field", "city", "city", "field"],
    TriangleWithCOA,
    null,
    [
      { idx: 1, y: 0.5, x: -0.5, isField: false },
      { idx: 2, y: -0.4, x: 0.4, isField: true },
    ]
  ),
  new Tile(
    "Triangle With Road",
    0,
    ["road", "city", "city", "road"],
    TriangleWithRoad,
    null,
    [
      { idx: 1, y: 0.5, x: -0.5, isField: false },
      { idx: 2, y: -0.4, x: 0.4, isField: false },
      { idx: 3, y: -0.1, x: 0.1, isField: true },
      { idx: 4, y: -0.7, x: 0.7, isField: true },
    ]
  ),
  new Tile(
    "Triangle With Road With COA",
    0,
    ["road", "city", "city", "road"],
    TriangleWithRoadWithCOA,
    null,
    [
      { idx: 1, y: 0.5, x: -0.5, isField: false },
      { idx: 2, y: -0.4, x: 0.4, isField: false },
      { idx: 3, y: -0.1, x: 0.1, isField: true },
      { idx: 4, y: -0.7, x: 0.7, isField: true },
    ]
  ),
  new Tile("City Cap", 0, ["field", "city", "field", "field"], CityCap, null, [
    { idx: 1, y: 0.8, x: 0, isField: false },
    { idx: 2, y: -0.1, x: 0, isField: true },
  ]),
  new Tile("Left", 0, ["field", "city", "road", "road"], Left, null, [
    { idx: 1, y: 0.8, x: 0, isField: false },
    { idx: 2, y: -0.1, x: 0.5, isField: true },
    { idx: 3, y: -0.25, x: -0.25, isField: false },
    { idx: 4, y: -0.6, x: -0.6, isField: true },
  ]),
  new Tile("Right", 0, ["road", "city", "field", "road"], Right, null, [
    { idx: 1, y: 0.8, x: 0, isField: false },
    { idx: 2, y: -0.1, x: -0.5, isField: true },
    { idx: 3, y: -0.25, x: 0.25, isField: false },
    { idx: 4, y: -0.6, x: 0.6, isField: true },
  ]),
  new Tile(
    "City Cap With Straight",
    0,
    ["road", "city", "road", "field"],
    CityCapWithStraight,
    null,
    [
      { idx: 1, y: 0.8, x: 0, isField: false },
      { idx: 2, y: 0.3, x: 0.7, isField: true },
      { idx: 3, y: 0, x: 0, isField: false },
      { idx: 4, y: -0.6, x: 0, isField: true },
    ]
  ),
  new Tile(
    "City Cap With Crossroads",
    0,
    ["road", "city", "road", "road"],
    CityCapWithCrossRoads,
    null,
    [
      { idx: 1, y: 0.8, x: 0, isField: false },
      { idx: 2, y: 0.3, x: 0.8, isField: true },
      { idx: 3, y: -0.2, x: 0.6, isField: false },
      { idx: 4, y: -0.1, x: -0.6, isField: false },
      { idx: 5, y: -0.6, x: -0.1, isField: false },
      { idx: 6, y: -0.7, x: 0.8, isField: true },
      { idx: 7, y: -0.7, x: -0.8, isField: true },
    ]
  ),
  new Tile(
    "Separator",
    0,
    ["field", "city", "city", "field"],
    Separator,
    null,
    [
      { idx: 1, y: 0.8, x: 0, isField: false },
      { idx: 2, y: 0, x: -0.85, isField: false },
      { idx: 3, y: -0.4, x: 0.4, isField: true },
    ]
  ),
  new Tile(
    "Vertical Separator",
    0,
    ["field", "city", "field", "city"],
    VerticalSeparator,
    null,
    [
      { idx: 1, y: 0.8, x: 0, isField: false },
      { idx: 2, y: 0, x: 0, isField: true },
      { idx: 3, y: -0.8, x: 0, isField: false },
    ]
  ),
  new Tile(
    "Connector",
    0,
    ["city", "field", "city", "field"],
    Connector,
    null,
    [
      { idx: 1, y: 0.85, x: 0, isField: true },
      { idx: 2, y: 0, x: 0, isField: false },
      { idx: 3, y: -0.8, x: 0, isField: true },
    ]
  ),
  new Tile(
    "ConnectorWithCOA",
    0,
    ["city", "field", "city", "field"],
    ConnectorWithCOA,
    null,
    [
      { idx: 1, y: 0.85, x: 0, isField: true },
      { idx: 2, y: 0, x: 0, isField: false },
      { idx: 3, y: -0.8, x: 0, isField: true },
    ]
  ),
  new Tile(
    "Triple City",
    0,
    ["city", "city", "city", "field"],
    TripleCity,
    null,
    [
      { idx: 1, y: 0.1, x: 0, isField: false },
      { idx: 2, y: -0.7, x: 0, isField: true },
    ]
  ),
  new Tile(
    "Triple City With COA",
    0,
    ["city", "city", "city", "field"],
    TripleCityWithCOA,
    null,
    [
      { idx: 1, y: 0.1, x: 0, isField: false },
      { idx: 2, y: -0.7, x: 0, isField: true },
    ]
  ),
  new Tile(
    "Triple City With Road",
    0,
    ["city", "city", "city", "road"],
    TripleCityWithRoad,
    null,
    [
      { idx: 1, y: 0.1, x: 0, isField: false },
      { idx: 2, y: -0.7, x: 0, isField: false },
      { idx: 3, y: -0.8, x: -0.4, isField: true },
      { idx: 4, y: -0.8, x: 0.4, isField: true },
    ]
  ),
  new Tile(
    "Triple City With Road With COA",
    0,
    ["city", "city", "city", "road"],
    TripleCityWithRoadWithCOA,
    null,
    [
      { idx: 1, y: 0.1, x: 0, isField: false },
      { idx: 2, y: -0.7, x: 0, isField: false },
      { idx: 3, y: -0.8, x: -0.4, isField: true },
      { idx: 4, y: -0.8, x: 0.4, isField: true },
    ]
  ),
  new Tile(
    "Quadruple City With COA",
    0,
    ["city", "city", "city", "city"],
    QuadrupleCityWithCOA,
    null,
    [{ idx: 1, y: 0, x: 0, isField: false }]
  ),
];

function newTile(tileKind: Tile): Tile {
  return new Tile(
    tileKind.Name,
    tileKind.Direction,
    tileKind.Sides,
    tileKind.Src,
    tileKind.MeepleColor,
    tileKind.DefaultMeepleablePositions
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
initialBoard[(boardSize - 1) / 2][(boardSize - 1) / 2] = newTile(
  allTileKinds.filter(
    (tileKind) => tileKind.Name === "City Cap With Straight"
  )[0]
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
