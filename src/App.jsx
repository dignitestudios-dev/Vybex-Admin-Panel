import { Route, Routes } from "react-router";
import "./App.css";
import DashboardLayout from "./layouts/DashboardLayout";

import AuthLayout from "./layouts/AuthLayout";
import { authRoutes } from "./routes/authentication/AutheticationRoutes";
import { pageRoutes } from "./routes/app/PageRoutes";

import { Navigate } from "react-router";
import Cookies from "js-cookie";
function ProtectedRoute({ children }) {
  const token = Cookies.get("token");
  return token ? children : <Navigate to="/auth/login" replace />;
}

function App() {
  return (
    <Routes>
    {/* Protected Routes */}
    <Route
      path="/"
      element={
      <ProtectedRoute>
          <DashboardLayout />
      </ProtectedRoute>
     
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
