import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

export default function Layout() {
  return (
    <>
      <div className="row">
        <div className="col-2">
          <SideBar />
        </div>
        <div className="col-10">
          <Outlet />
        </div>
      </div>
    </>
  );
}
