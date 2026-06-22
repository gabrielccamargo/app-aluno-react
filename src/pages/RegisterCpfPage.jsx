import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout.jsx";
import InputField from "../components/InputField.jsx";
import Button from "../components/Button.jsx";
import { useUsuario } from "../context/UsuarioContext.jsx";

export default function RegisterCpfPage() {
  const navigate = useNavigate();
  const { atualizarUsuario } = useUsuario();
  const [cpf, setCpf] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const digits = cpf.replace(/\D/g, "");
    if (digits.length !== 11) {
      setError("Informe um CPF com 11 números.");
      return;
    }

    atualizarUsuario({ cpfFinal: digits.slice(-2) });
    navigate("/cadastro/dados");
  };

  return (
    <AuthLayout
      title="Cadastre-se"
      description="Passo 1 de 2. Por favor, insira seu CPF para prosseguir."
    >
      <form className="auth-form" onSubmit={handleSubmit}>
        <InputField
          id="cpf"
          label="CPF"
          value={cpf}
          onChange={setCpf}
          placeholder="000.000.000-00"
          autoComplete="off"
          error={error}
        />
        <Button type="submit">Prosseguir</Button>
      </form>

      <p className="auth-switch">
        Já tem conta? <Link to="/">Entrar</Link>
      </p>
    </AuthLayout>
  );
}
