import type { JSX } from "react";
import type FlowBase from "../interfaces/FlowBase";
import { GuestHome } from "../components/GuestHome";

export class GuestFlow implements FlowBase {
  asideLinks(): JSX.Element {
    return <></>;
  }

  settings(): JSX.Element {
    return <GuestHome />;
  }

  home(): JSX.Element {
    return <GuestHome />;
  }
}
