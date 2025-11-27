import { useSelector } from "react-redux";
import type { Role } from "./types/Role";
import type { RootState } from "./store/Store";
import createFlow from "./common/CreateFlow";
import type FlowBase from "./interfaces/FlowBase";
import React from "react";

type FlowMethod = keyof FlowBase;

function RenderFlow({ flowToRender = "home" }: { flowToRender?: FlowMethod }) {
  const roles: Role[] = useSelector(
    (state: RootState) => state.user.roles as Role[]
  );

  const flows = roles.map((role) => createFlow(role));

  return (
    <>
      {flows.map((fl, index) => (
        <React.Fragment key={`${flowToRender}-${index}`}>
          {fl[flowToRender]()}
        </React.Fragment>
      ))}
    </>
  );
}

export default RenderFlow;
