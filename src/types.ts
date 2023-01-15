type Side = "field" | "road" | "city";

export type Color = "red" | "yellow" | null;

export type Position = {
  idx: number;
  y: number;
  x: number;
  isField: boolean;
};

export class Tile {
  Name: string;
  Direction: number;
  Src: any;
  // position (y (px), x (px)), given that the center of the tile is (0, 0)
  DefaultMeepleablePositions: Position[] = [];
  Sides: Side[];
  MeepledPosition: number = -1;
  MeepleColor: Color;
  Right(): Side {
    return this.Sides[(0 + this.Direction) % 4];
  }
  Top(): Side {
    return this.Sides[(1 + this.Direction) % 4];
  }
  Left(): Side {
    return this.Sides[(2 + this.Direction) % 4];
  }
  Bottom(): Side {
    return this.Sides[(3 + this.Direction) % 4];
  }
  Rotate() {
    this.Direction = (this.Direction + 1) % 4;
  }
  ResetDirection() {
    this.Direction = 0;
  }
  PlaceMeeple(idx: number, color: Color) {
    this.MeepledPosition = idx;
    this.MeepleColor = color;
  }
  RemoveMeeple() {
    this.MeepledPosition = -1;
    this.MeepleColor = null;
  }
  MeepleablePositions(): Position[] {
    return this.DefaultMeepleablePositions.map((pos, idx) => {
      const y = pos.y;
      const x = pos.x;
      const theta = -Math.PI * 0.5 * this.Direction;
      const toY = x * Math.sin(theta) + y * Math.cos(theta);
      const toX = x * Math.cos(theta) - y * Math.sin(theta);
      return { idx: idx + 1, y: toY, x: toX, isField: pos.isField };
    });
  }
  constructor(
    name: string,
    direction: number,
    sides: Side[],
    src: any,
    meepleColor: Color,
    defaultMeepleablePositions?: Position[],
    meepledPostion?: number
  ) {
    this.Name = name;
    this.Direction = direction;
    this.Sides = sides;
    this.Src = src;
    this.MeepleColor = meepleColor;
    if (defaultMeepleablePositions) {
      this.DefaultMeepleablePositions = defaultMeepleablePositions;
    }
    if (meepledPostion) {
      this.MeepledPosition = meepledPostion;
    }
  }
}
