import AppShell from "../components/AppShell.jsx";
import ProfileRows from "../components/ProfileRows.jsx";
import { useUsuario } from "../context/UsuarioContext.jsx";

export default function ProfilePage() {
  const { usuario } = useUsuario();
  const initials = usuario.nome
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <AppShell>
      <section className="profile-header">
        <div className="avatar" aria-hidden="true">{initials}</div>
        <div>
          <h1>{usuario.nome}</h1>
          <p>{usuario.curso} • {usuario.ano}</p>
        </div>
      </section>

      <div className="tabs" aria-label="Seções do perfil">
        <button className="tabs__item tabs__item--active" type="button">Dados Pessoais</button>
        <button className="tabs__item" type="button">Configurações</button>
        <button className="tabs__item" type="button">Segurança</button>
      </div>

      <ProfileRows usuario={usuario} />
    </AppShell>
  );
}
