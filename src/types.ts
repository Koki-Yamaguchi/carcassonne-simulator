type Side = "field" | "road" | "city"

export class Tile {
  Name: string;
  Direction: number;
  ImgURL: string;
  Right(): Side { return this.Sides[(0 + this.Direction) % 4] };
  Top(): Side { return this.Sides[(1 + this.Direction) % 4] };
  Left(): Side { return this.Sides[(2 + this.Direction) % 4] };
  Bottom(): Side { return this.Sides[(3 + this.Direction) % 4] };
  Rotate() { this.Direction = (this.Direction + 1) % 4}
  Sides: Side[];
  constructor(name: string, direction: number, imgURL: string, sides: Side[]) {
    this.Name = name
    this.Direction = direction
    this.ImgURL = imgURL
    this.Sides = sides
  }
}

type TileKind = Omit<Tile, "Direction">
