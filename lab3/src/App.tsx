import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../src/components/Pages/Login";
import RegisterPage from "../src/components/Pages/Register";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}
