import AppShell from "../components/AppShell.jsx";
import CourseCard from "../components/CourseCard.jsx";
import { disciplinas } from "../data.js";

export default function DisciplinesPage() {
  return (
    <AppShell>
      <section className="page-heading">
        <h1>Minhas Disciplinas</h1>
      </section>

      <section className="disciplines-grid" aria-label="Lista de disciplinas">
        {disciplinas.map((disciplina) => (
          <CourseCard key={disciplina.id} disciplina={disciplina} compact />
        ))}
      </section>
    </AppShell>
  );
}
