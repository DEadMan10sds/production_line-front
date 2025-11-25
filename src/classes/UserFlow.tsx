import type { JSX } from "react";
import type FlowBase from "../interfaces/FlowBase";
import { UserHome } from "../components/UserHome";
import { Link } from "react-router-dom";

export default class UserFlow implements FlowBase {
  asideLinks(): JSX.Element {
    return (
      <>
        <Link to="/">Inicio</Link>
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
