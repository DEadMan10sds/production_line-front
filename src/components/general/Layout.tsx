import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar";
import RenderFlow from "../../RenderFlow";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="px-5 flex gap-3">
        <aside className="p-5 w-[20%] flex flex-col gap-2 internal-neo [--shadow-color:#110f0e] [--box-shadow:#272320]">
          <RenderFlow flowToRender="asideLinks" />
        </aside>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};
