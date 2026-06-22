import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import RecoverPasswordPage from "./pages/RecoverPasswordPage.jsx";
import NewPasswordPage from "./pages/NewPasswordPage.jsx";
import RegisterCpfPage from "./pages/RegisterCpfPage.jsx";
import RegisterDataPage from "./pages/RegisterDataPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import DisciplinesPage from "./pages/DisciplinesPage.jsx";
import TutorPage from "./pages/TutorPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/recuperar-senha" element={<RecoverPasswordPage />} />
      <Route path="/nova-senha" element={<NewPasswordPage />} />
      <Route path="/cadastro" element={<RegisterCpfPage />} />
      <Route path="/cadastro/dados" element={<RegisterDataPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/disciplinas" element={<DisciplinesPage />} />
      <Route path="/tutor-ia" element={<TutorPage />} />
      <Route path="/perfil" element={<ProfilePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
