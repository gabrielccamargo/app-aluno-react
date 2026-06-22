export async function buscarRespostaTutor(pergunta) {
  const id = Math.max(1, Math.min(10, pergunta.trim().length % 10 || 1));
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 8000);

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error("Não foi possível carregar a resposta do Tutor IA.");
    }

    const data = await response.json();

    return {
      title: data.title,
      body: data.body,
    };
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error("Tempo esgotado ao consultar a API do Tutor IA.");
    }

    throw error;
  } finally {
    window.clearTimeout(timeout);
  }
}
