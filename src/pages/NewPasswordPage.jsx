import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout.jsx";
import InputField from "../components/InputField.jsx";
import Button from "../components/Button.jsx";

export default function NewPasswordPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ senha: "", repetirSenha: "" });
  const [errors, setErrors] = useState({});

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = {
      senha: form.senha.length < 6 ? "A senha deve ter pelo menos 6 caracteres." : "",
      repetirSenha: form.senha !== form.repetirSenha ? "As senhas precisam ser iguais." : "",
    };

    setErrors(nextErrors);

    if (!nextErrors.senha && !nextErrors.repetirSenha) {
      navigate("/");
    }
  };

  return (
    <AuthLayout title="Nova Senha" description="Informe abaixo sua nova senha.">
      <form className="auth-form" onSubmit={handleSubmit}>
        <InputField
          id="senha"
          label="Senha"
          type="password"
          value={form.senha}
          onChange={(value) => updateField("senha", value)}
          autoComplete="new-password"
          error={errors.senha}
        />
        <InputField
          id="repetirSenha"
          label="Repita a Senha"
          type="password"
          value={form.repetirSenha}
          onChange={(value) => updateField("repetirSenha", value)}
          autoComplete="new-password"
          error={errors.repetirSenha}
        />
        <Button type="submit">Salvar</Button>
      </form>

      <p className="auth-switch">
        <Link to="/">Voltar para login</Link>
      </p>
    </AuthLayout>
  );
}
