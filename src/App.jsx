import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<HomePage />} path="/" exact />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<ProfilePage />} path="/me" />
        <Route element={<RegistrationPage />} path="/register" />
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </AuthProvider>
  );
}

export default App;
