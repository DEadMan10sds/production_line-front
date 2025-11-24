import type { JSX } from "react";
import type FlowBase from "../interfaces/FlowBase";
import { AdminSettings } from "../pages/AdminSettings";

export default class AdminFlow implements FlowBase {
  settings(): JSX.Element {
    return <AdminSettings />;
  }

  home(): JSX.Element {
    return <h2>This is the admin flow</h2>;
  }
}
