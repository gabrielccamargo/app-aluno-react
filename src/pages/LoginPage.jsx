import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthLayout from "../components/AuthLayout.jsx";
import InputField from "../components/InputField.jsx";
import Button from "../components/Button.jsx";
import { useUsuario } from "../context/UsuarioContext.jsx";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LoginPage() {
  const navigate = useNavigate();
  const { atualizarUsuario } = useUsuario();
  const [form, setForm] = useState({ email: "", senha: "" });
  const [errors, setErrors] = useState({});

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = {
      email: !emailRegex.test(form.email) ? "Informe um e-mail válido." : "",
      senha: form.senha.trim().length < 3 ? "Informe sua senha." : "",
    };

    setErrors(nextErrors);

    if (nextErrors.email || nextErrors.senha) {
      return;
    }

    atualizarUsuario({ email: form.email });
    navigate("/dashboard");
  };

  return (
    <AuthLayout
      title="Bem-vindo de volta"
      description="Por favor, insira suas credenciais para acessar seu painel acadêmico"
    >
      <form className="auth-form" onSubmit={handleSubmit}>
        <InputField
          id="email"
          label="Endereço de e-mail"
          value={form.email}
          onChange={(value) => updateField("email", value)}
          placeholder="user@email.com"
          autoComplete="email"
          error={errors.email}
        />

        <InputField
          id="senha"
          label="Senha"
          type="password"
          value={form.senha}
          onChange={(value) => updateField("senha", value)}
          autoComplete="current-password"
          error={errors.senha}
          rightSlot={<Link to="/recuperar-senha">Esqueceu?</Link>}
        />

        <Button type="submit">Entrar</Button>
      </form>

      <p className="auth-switch">
        Não tem conta? <Link to="/cadastro">Registre-se agora</Link>
      </p>
    </AuthLayout>
  );
}
