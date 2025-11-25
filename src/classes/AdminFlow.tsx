import type { JSX } from "react";
import type FlowBase from "../interfaces/FlowBase";
import { AdminSettings } from "../pages/AdminSettings";
import { Link } from "react-router-dom";

export default class AdminFlow implements FlowBase {
  asideLinks(): JSX.Element {
    return (
      <>
        <Link to="/settings">Configuración</Link>
      </>
    );
  }

  settings(): JSX.Element {
    return <AdminSettings />;
  }

  home(): JSX.Element {
    return <></>;
  }
}
