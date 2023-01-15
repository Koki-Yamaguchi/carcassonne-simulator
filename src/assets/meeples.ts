import type { Color } from "@/types";
import RedStanding from "../assets/img/red_standing.png";
import YellowStanding from "../assets/img/yellow_standing.png";

function meepleSrc(color: Color): any {
  if (color === "red") {
    return RedStanding;
  }
  if (color === "yellow") {
    return YellowStanding;
  }
  return null;
}

export { meepleSrc };
