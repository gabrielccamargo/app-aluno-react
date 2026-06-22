import { createContext, useContext, useMemo, useState } from "react";

const UsuarioContext = createContext(null);

const usuarioInicial = {
  nome: "Gabriel Camargo",
  nomePreferencia: "Gabriel",
  curso: "Engenharia de Software",
  ano: "3º Período",
  email: "joao.silva@satc.edu.br",
  telefone: "",
  cpfFinal: "89",
};

export function UsuarioProvider({ children }) {
  const [usuario, setUsuario] = useState(usuarioInicial);

  const atualizarUsuario = (dados) => {
    setUsuario((atual) => ({ ...atual, ...dados }));
  };

  const value = useMemo(
    () => ({ usuario, atualizarUsuario }),
    [usuario]
  );

  return (
    <UsuarioContext.Provider value={value}>
      {children}
    </UsuarioContext.Provider>
  );
}

export function useUsuario() {
  const context = useContext(UsuarioContext);

  if (!context) {
    throw new Error("useUsuario deve ser usado dentro de UsuarioProvider");
  }

  return context;
}
