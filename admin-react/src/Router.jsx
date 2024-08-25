import { Route, Routes } from "react-router-dom";

import Bus from "./pages/Bus";
import Buses from "./pages/Buses";
import Driver from "./pages/Driver";
import Drivers from "./pages/Drivers";
import Managers from "./pages/Managers";
import PageNotFound from "./pages/PageNotFound";
import Users from "./pages/Users";

import { AuthenticationProvider } from "./context/AuthProvider";
import Account from "./pages/Account";
import FeedbackPage from "./pages/FeedbackPage";
import MapPage from "./pages/MapPage";
import Notification from "./pages/Notification";
import Notifications from "./pages/Notifications";
import AppLayout from "./ui/AppLayout";

function Router() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
              <AppLayout />
          }
        >
          {/* <Route index element={<Navigate to="/dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} /> */}
          <Route index element={<Buses />} />
          <Route path="buses" element={<Buses />} />
          <Route path="buses/:id" element={<Bus />} />
          <Route path="drivers" element={<Drivers />} />
          <Route path="drivers/:id" element={<Driver />} />
          <Route path="users" element={<Users />} />
          <Route path="managers" element={<Managers />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="notifications/:id" element={<Notification />} />
          <Route path="feedback" element={<FeedbackPage />} />
          <Route path="account" element={<Account />} />
          <Route path=":target/:id/map" element={<MapPage />} />
        </Route>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default Router;
