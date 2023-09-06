import CardFilme from "@/components/CardFilme";
import Titulo from "@/components/Titulo";

async function carregarFilmes(){
  const url = "https://api.themoviedb.org/3/trending/movie/week?api_key=1e922667481ab207d642450b0efb461e&language=pt-br"
  const resposta = await fetch(url)
  const json = await resposta.json()
  return json.results
}

export default async function Home() {
  carregarFilmes()
  //mock
  const filmes = await carregarFilmes()


  return (
    <>
      <nav className="bg-slate-900 p-4">
        <h1 className="text-3xl font-bold">Fiap Series</h1>
      </nav>

      <Titulo>em alta</Titulo>

      <section className="flex flex-wrap gap-2">
        {filmes.map( filme => <CardFilme filme={filme} /> )}
      </section>

      <Titulo>lançamentos</Titulo>

    </>
  )
}
