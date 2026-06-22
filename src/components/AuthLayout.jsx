export default function AuthLayout({ title, description, children }) {
  return (
    <div className="auth-layout">
      <aside className="auth-quote">
        <p>
          Educação não é aprendizado de fatos, mas o treinamento da mente para pensar.
          <span>Albert Einstein</span>
        </p>
      </aside>

      <main className="auth-main">
        <section className="auth-card" aria-labelledby="auth-title">
          <h1 id="auth-title">{title}</h1>
          <p>{description}</p>
          {children}
        </section>
      </main>
    </div>
  );
}
