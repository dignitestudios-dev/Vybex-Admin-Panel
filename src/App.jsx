import { Route, Routes } from "react-router";
import "./App.css";
import DashboardLayout from "./layouts/DashboardLayout";

import AuthLayout from "./layouts/AuthLayout";
import { authRoutes } from "./routes/authentication/AutheticationRoutes";
import { pageRoutes } from "./routes/app/PageRoutes";

import { Navigate } from "react-router";

function App() {
  return (
    <Routes>
    {/* Protected Routes */}
    <Route
      path="/"
      element={
     
          <DashboardLayout />
     
      }
    >
      {pageRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.url}
          element={<route.page />}
        />
      ))}
      {/* Optional default redirect for "/" */}
      <Route index element={<Navigate to="/dashboard" replace />} />
    </Route>

    {/* Authentication Routes */}
    <Route path="auth" element={<AuthLayout />}>
      {authRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.url}
          element={<route.page />}
        />
      ))}
    </Route>

    {/* Catch-all Not Found */}
    <Route
      path="*"
      element={<div className="text-7xl">Page Not Found</div>}
    />
  </Routes>
  );
}

export default App;
