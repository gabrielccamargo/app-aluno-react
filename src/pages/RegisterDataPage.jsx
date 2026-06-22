import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout.jsx";
import InputField from "../components/InputField.jsx";
import Button from "../components/Button.jsx";
import { useUsuario } from "../context/UsuarioContext.jsx";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function RegisterDataPage() {
  const navigate = useNavigate();
  const { atualizarUsuario } = useUsuario();
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    email: "",
    senha: "",
  });
  const [errors, setErrors] = useState({});

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const firstName = form.nome.trim().split(" ")[0] || "";
    const nextErrors = {
      nome: form.nome.trim().length < 3 ? "Informe seu nome completo." : "",
      email: !emailRegex.test(form.email) ? "Informe um e-mail válido." : "",
      senha: form.senha.length < 6 ? "A senha deve ter pelo menos 6 caracteres." : "",
    };

    setErrors(nextErrors);

    if (nextErrors.nome || nextErrors.email || nextErrors.senha) {
      return;
    }

    atualizarUsuario({
      nome: form.nome.trim(),
      nomePreferencia: firstName,
      email: form.email,
      telefone: form.telefone,
    });
    navigate("/dashboard");
  };

  return (
    <AuthLayout
      title="Cadastre-se"
      description="Passo 2 de 2. Por favor, insira os dados para finalizar."
    >
      <form className="auth-form" onSubmit={handleSubmit}>
        <InputField
          id="nome"
          label="Nome"
          value={form.nome}
          onChange={(value) => updateField("nome", value)}
          placeholder="Digite seu nome completo"
          autoComplete="name"
          error={errors.nome}
        />
        <InputField
          id="telefone"
          label="Telefone"
          type="tel"
          value={form.telefone}
          onChange={(value) => updateField("telefone", value)}
          placeholder="(99) 99999-9999"
          autoComplete="tel"
        />
        <InputField
          id="email"
          label="E-mail"
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
          autoComplete="new-password"
          error={errors.senha}
        />
        <Button type="submit">Cadastrar</Button>
      </form>
    </AuthLayout>
  );
}
