import { Outlet } from "react-router-dom";
import Navbar from "./features/Home/Navbar";

function AppLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
