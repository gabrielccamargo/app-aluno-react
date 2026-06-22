import { Clock3, ClipboardList, MessagesSquare } from "lucide-react";

const icons = {
  tempo: Clock3,
  tarefas: ClipboardList,
  ia: MessagesSquare,
};

export default function StatCard({ indicador }) {
  const Icon = icons[indicador.id] ?? Clock3;

  return (
    <article className="stat-card">
      <div className="stat-card__title">
        <Icon size={18} aria-hidden="true" />
        <span>{indicador.titulo}</span>
      </div>
      <strong>{indicador.valor}</strong>
      <p>{indicador.detalhe}</p>
    </article>
  );
}
