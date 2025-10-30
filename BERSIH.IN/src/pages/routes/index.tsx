import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routeConfig";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        {routes.map((r) => (
          <Route
            key={r.path}
            path={r.path}
            element={r.protected ? <ProtectedRoute>{<r.component />}</ProtectedRoute> : <r.component />}
          />
        ))}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
