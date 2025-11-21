import { Link, Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="px-5 flex gap-3">
        <aside className="p-5 w-[20%] flex flex-col gap-4 internal-neo [--shadow-color:#110f0e] [--box-shadow:#272320]">
          <p>Herramientas</p>
          <Link to="/settings">Settings</Link>
        </aside>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};
