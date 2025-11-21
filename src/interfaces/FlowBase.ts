import type { JSX } from "react";

export default interface FlowBase {
  settings(): JSX.Element;
  home(): JSX.Element;
}
