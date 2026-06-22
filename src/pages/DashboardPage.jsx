import { useEffect, useState } from "react";
import AppShell from "../components/AppShell.jsx";
import CourseCard from "../components/CourseCard.jsx";
import StatCard from "../components/StatCard.jsx";
import { useUsuario } from "../context/UsuarioContext.jsx";
import { disciplinas, indicadores } from "../data.js";

function getSaudacao() {
  const hora = new Date().getHours();

  if (hora < 12) return "Bom dia";
  if (hora < 18) return "Boa tarde";
  return "Boa noite";
}

export default function DashboardPage() {
  const { usuario } = useUsuario();
  const [saudacao, setSaudacao] = useState(getSaudacao());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSaudacao(getSaudacao());
    }, 60000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <AppShell>
      <section className="hero">
        <h1>{saudacao}, {usuario.nomePreferencia}.</h1>
        <p>
          Bem-vindo de volta à sua sessão de estudo focado. Você tem 2 tarefas para esta semana
          e está atualmente adiantado em seu cronograma de leitura.
        </p>
      </section>

      <section className="course-list" aria-label="Disciplinas em destaque">
        {disciplinas.map((disciplina) => (
          <CourseCard key={disciplina.id} disciplina={disciplina} />
        ))}
      </section>

      <section className="stats-grid" aria-label="Resumo de estudos">
        {indicadores.map((indicador) => (
          <StatCard key={indicador.id} indicador={indicador} />
        ))}
      </section>
    </AppShell>
  );
}
