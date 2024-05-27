import { Navigate, Route, Routes } from "react-router-dom";

import Bus from "./pages/Bus";
import Buses from "./pages/Buses";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import Driver from "./pages/Driver";
import Drivers from "./pages/Drivers";
import Users from "./pages/Users";

import AppLayout from "./ui/AppLayout";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="/dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="buses" element={<Buses />} />
          <Route path="buses/:id" element={<Bus />} />
          <Route path="drivers" element={<Drivers />} />
          <Route path="drivers/:id" element={<Driver />} />
          <Route path="users" element={<Users />} />
        </Route>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default Router;
