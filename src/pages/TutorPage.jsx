import { ArrowUp, Bot, Clipboard, RefreshCcw, ThumbsDown, Volume2 } from "lucide-react";
import { useEffect, useState } from "react";
import AppShell from "../components/AppShell.jsx";
import Button from "../components/Button.jsx";
import { useUsuario } from "../context/UsuarioContext.jsx";
import { buscarRespostaTutor } from "../services/tutorService.js";

const perguntaInicial = "Explique computação quântica";

export default function TutorPage() {
  const { usuario } = useUsuario();
  const [pergunta, setPergunta] = useState(perguntaInicial);
  const [perguntaEnviada, setPerguntaEnviada] = useState(perguntaInicial);
  const [resposta, setResposta] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  async function carregarResposta(texto) {
    setLoading(true);
    setErro("");

    try {
      const data = await buscarRespostaTutor(texto);
      setResposta(data);
    } catch (error) {
      setErro(error.message);
      setResposta(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregarResposta(perguntaInicial);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!pergunta.trim()) {
      setErro("Digite uma pergunta para o Tutor IA.");
      return;
    }

    setPerguntaEnviada(pergunta.trim());
    carregarResposta(pergunta.trim());
  };

  return (
    <AppShell>
      <section className="chat">
        <article className="message message--user">
          <div className="chat-avatar chat-avatar--user" aria-hidden="true">
            {usuario.nomePreferencia[0]}
          </div>
          <div>
            <strong>{usuario.nome}</strong>
            <p>{perguntaEnviada}</p>
          </div>
        </article>

        <article className="message">
          <div className="chat-avatar" aria-hidden="true">
            <Bot size={18} />
          </div>
          <div>
            <strong>Tutor IA</strong>
            {loading && <p className="muted">Carregando resposta...</p>}
            {erro && <p className="field-error">{erro}</p>}
            {resposta && !loading && !erro && (
              <p>
                {resposta.body} Essa resposta foi gerada a partir de uma API externa
                para demonstrar o padrão loading, erro e dados.
              </p>
            )}
            <div className="message-actions" aria-label="Ações da resposta">
              <button type="button" aria-label="Ouvir resposta"><Volume2 size={16} /></button>
              <button type="button" aria-label="Copiar resposta"><Clipboard size={16} /></button>
              <button type="button" aria-label="Gerar novamente"><RefreshCcw size={16} /></button>
              <button type="button" aria-label="Avaliar negativamente"><ThumbsDown size={16} /></button>
            </div>
          </div>
        </article>
      </section>

      <form className="chat-form" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="pergunta">Pergunte alguma coisa</label>
        <input
          id="pergunta"
          value={pergunta}
          onChange={(event) => setPergunta(event.target.value)}
          placeholder="Pergunte alguma coisa"
        />
        <Button type="submit" className="chat-form__button" aria-label="Enviar pergunta">
          <ArrowUp size={20} />
        </Button>
      </form>
      <p className="chat-note">O Tutor pode cometer erros. Considere verificar informações importantes.</p>
    </AppShell>
  );
}
