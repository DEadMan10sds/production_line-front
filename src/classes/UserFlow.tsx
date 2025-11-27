import type { JSX } from "react";
import type FlowBase from "../interfaces/FlowBase";
import { UserHome } from "../components/UserHome";
import {
  AsideLink,
  type AssideLinkProperties,
} from "../components/general/AsideLink";
import { PiHouse } from "react-icons/pi";

export default class UserFlow implements FlowBase {
  private links: AssideLinkProperties[] = [
    { text: "Inicio", path: "/", icon: <PiHouse /> },
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
    return <>This is the settings page for the user</>;
  }

  home(): JSX.Element {
    return <UserHome />;
  }
}
