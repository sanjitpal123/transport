import { Outlet } from "react-router-dom";
import Headers from "./Header";
import Sidebar from "./SideBar";

function Layout() {
  return (
    <div>
      <Headers />
      <Sidebar />
      <Outlet />
    </div>
  );
}
export default Layout;
