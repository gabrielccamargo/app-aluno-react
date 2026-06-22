import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout.jsx";
import InputField from "../components/InputField.jsx";
import Button from "../components/Button.jsx";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function RecoverPasswordPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!emailRegex.test(email)) {
      setError("Informe um e-mail válido para continuar.");
      return;
    }

    setError("");
    navigate("/nova-senha");
  };

  return (
    <AuthLayout
      title="Esqueceu a senha"
      description="Informe seu e-mail para enviarmos um link para redefinir sua senha."
    >
      <form className="auth-form" onSubmit={handleSubmit}>
        <InputField
          id="email"
          label="Endereço de e-mail"
          value={email}
          onChange={setEmail}
          placeholder="user@email.com"
          autoComplete="email"
          error={error}
        />
        <Button type="submit">Enviar</Button>
      </form>

      <p className="auth-switch">
        <Link to="/">Voltar para login</Link>
      </p>
    </AuthLayout>
  );
}
