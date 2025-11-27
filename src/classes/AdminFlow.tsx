import type { JSX } from "react";
import type FlowBase from "../interfaces/FlowBase";
import { AdminSettings } from "../pages/AdminSettings";
import {
  AsideLink,
  type AssideLinkProperties,
} from "../components/general/AsideLink";
import { PiGear, PiUser } from "react-icons/pi";

export default class AdminFlow implements FlowBase {
  private links: AssideLinkProperties[] = [
    { text: "Usuarios", path: "/users", icon: <PiUser /> },
    { text: "Configuración", path: "/settings", icon: <PiGear /> },
  ];

  asideLinks(): JSX.Element {
    return (
      <>
        {this.links.map((link) => (
          <AsideLink {...link} />
        ))}
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
