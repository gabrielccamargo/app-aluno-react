export default function ProgressBar({ value }) {
  return (
    <div className="progress" aria-label={`Progresso de ${value}%`}>
      <span style={{ width: `${value}%` }} />
    </div>
  );
}
