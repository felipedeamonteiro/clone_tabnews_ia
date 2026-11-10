import Confete from "./confete";

const URL_TABNEWS = "https://www.tabnews.com.br";

async function buscarTotalDeConteudos() {
  try {
    const resposta = await fetch(`${URL_TABNEWS}/api/v1/contents?strategy=new&per_page=1`, {
      cache: "no-store",
    });

    if (!resposta.ok) return null;

    const total = Number(resposta.headers.get("x-pagination-total-rows"));
    return Number.isFinite(total) ? total : null;
  } catch {
    return null;
  }
}

export default async function Home() {
  const totalDeConteudos = await buscarTotalDeConteudos();

  return (
    <main className="em-construcao">
      <Confete />
      <span className="selo">🚧 Em Construção</span>
      <h1>
        Estamos neste exato momento reconstruindo o TabNews, um lugar na
        internet para quem trabalha com tecnologia e precisa consumir conteúdos
        com valor concreto
      </h1>

      <p className="total">
        {totalDeConteudos !== null ? (
          <>
            <strong>{totalDeConteudos.toLocaleString("pt-BR")}</strong>{" "}
            conteúdos já publicados no TabNews
          </>
        ) : (
          "Não foi possível carregar o total de conteúdos publicados no TabNews."
        )}
      </p>

      <a className="link-oficial" href={URL_TABNEWS}>
        Visite o TabNews oficial →
      </a>
    </main>
  );
}
