import { ArrowRight } from "lucide-react";
import Button from "./Button.jsx";
import ProgressBar from "./ProgressBar.jsx";

export default function CourseCard({ disciplina, compact = false }) {
  return (
    <article className={compact ? "course-card course-card--compact" : "course-card"}>
      <div className="course-card__content">
        <div className="course-card__topline">
          <h2>{disciplina.nome}</h2>
          <span className={disciplina.progresso > 0 ? "status status--success" : "status"}>
            {disciplina.status}
          </span>
        </div>

        {compact ? (
          <p className="course-card__teacher">{disciplina.professor}</p>
        ) : (
          <p>{disciplina.aulaAtual}</p>
        )}

        <div className="course-card__progress-row">
          <span>{compact ? disciplina.progressoRotulo : ""}</span>
          <strong>{disciplina.progresso}%</strong>
        </div>
        <ProgressBar value={disciplina.progresso} />
      </div>

      <footer className="course-card__footer">
        <Button className="course-card__button">
          {compact ? "Acessar Disciplina" : "Retomar Estudo"}
          {!compact && <ArrowRight size={16} aria-hidden="true" />}
        </Button>
      </footer>
    </article>
  );
}
