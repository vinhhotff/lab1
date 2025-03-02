import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

// Dùng lazy loading để tách code
const LoginPage = lazy(() => import("../src/components/Pages/Login"));
const RegisterPage = lazy(() => import("../src/components/Pages/Register"));
const Dashboard = lazy(() => import("./components/Pages/Dashboard"));
const Layout = lazy(() => import("./components/Pages/Layout"));

export default function AppRoutes() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        </Routes>
      </Suspense>
    </Router>
  );
}
