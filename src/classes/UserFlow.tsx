import type { JSX } from "react";
import type FlowBase from "../interfaces/FlowBase";
import { UserHome } from "../components/UserHome";

export default class UserFlow implements FlowBase {
  settings(): JSX.Element {
    return <>This is the settings page for the user</>;
  }

  home(): JSX.Element {
    return <UserHome />;
  }
}
