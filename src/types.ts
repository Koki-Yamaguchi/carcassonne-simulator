type Side = "field" | "road" | "city";

type Position = {
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
  MeepleablePositions(): Position[] {
    return this.DefaultMeepleablePositions.map((pos) => {
      const y = pos.y;
      const x = pos.x;
      const theta = -Math.PI * 0.5 * this.Direction;
      const toY = x * Math.sin(theta) + y * Math.cos(theta);
      const toX = x * Math.cos(theta) - y * Math.sin(theta);
      return { y: toY, x: toX, isField: pos.isField };
    });
  }
  Sides: Side[];
  constructor(
    name: string,
    direction: number,
    sides: Side[],
    src: any,
    defaultMeepleablePositions?: Position[]
  ) {
    this.Name = name;
    this.Direction = direction;
    this.Sides = sides;
    this.Src = src;
    if (defaultMeepleablePositions) {
      this.DefaultMeepleablePositions = defaultMeepleablePositions;
    }
  }
}
