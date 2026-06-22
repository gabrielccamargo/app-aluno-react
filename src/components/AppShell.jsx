import { Bot, LayoutDashboard, NotebookTabs, UserRound } from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/dashboard", label: "Painel", icon: LayoutDashboard },
  { to: "/disciplinas", label: "Disciplinas", icon: NotebookTabs },
  { to: "/tutor-ia", label: "Tutor IA", icon: Bot },
  { to: "/perfil", label: "Perfil", icon: UserRound },
];

export default function AppShell({ children }) {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="topbar__inner">
          <NavLink className="brand" to="/dashboard">
            <strong>Academia</strong>
            <span>Portal do Aluno</span>
          </NavLink>

          <nav className="topbar__nav" aria-label="Navegação principal">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink key={item.to} className="nav-link" to={item.to}>
                  <Icon size={18} aria-hidden="true" />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="page">{children}</main>
    </div>
  );
}
