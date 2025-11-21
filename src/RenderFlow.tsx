import { useSelector } from "react-redux";
import type { Role } from "./types/Role";
import type { RootState } from "./store/Store";
import createFlow from "./common/CreateFlow";
import type FlowBase from "./interfaces/FlowBase";

type FlowMethod = keyof FlowBase;

function RenderFlow({ flowToRender = "home" }: { flowToRender?: FlowMethod }) {
  const role: Role = useSelector((state: RootState) => state.user.role as Role);

  const flow = createFlow(role);
  return flow[flowToRender]();
}

export default RenderFlow;
