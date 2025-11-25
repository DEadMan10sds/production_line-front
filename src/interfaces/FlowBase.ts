import type { JSX } from "react";

export default interface FlowBase {
  asideLinks(): JSX.Element;
  settings(): JSX.Element;
  home(): JSX.Element;
}
