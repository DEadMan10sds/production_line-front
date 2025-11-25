import { useSelector } from "react-redux";
import type { Role } from "./types/Role";
import type { RootState } from "./store/Store";
import createFlow from "./common/CreateFlow";
import type FlowBase from "./interfaces/FlowBase";

type FlowMethod = keyof FlowBase;

function RenderFlow({ flowToRender = "home" }: { flowToRender?: FlowMethod }) {
  //Function to return a single role
  //const role: Role = useSelector(
  //  (state: RootState) => state.user.roles[0] as Role
  //);
  //const flow = createFlow(role);
  //return flow[flowToRender]();

  const roles: Role[] = useSelector(
    (state: RootState) => state.user.roles as Role[]
  );

  const flows = roles.map((role) => createFlow(role));

  return (
    <>
      {flows.map((fl, index) => (
        <div key={`${flowToRender}-${index}`}>{fl[flowToRender]()}</div>
      ))}
    </>
  );
}

export default RenderFlow;
