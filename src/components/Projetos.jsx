import ProjetoCard from "./ProjetoCard";

function Projetos() {
  const listaProjetos = [
    {
      nome: "Meu Portfólio",
      descricao: "Site feito com HTML, CSS e JS"
    },
    {
      nome: "Landing Page",
      descricao: "Página responsiva moderna"
    },
    {
      nome: "Calculadora",
      descricao: "Feita com JavaScript"
    }
  ];

  return (
    <section id="projetos">
      <h2>Projetos</h2>

      <div className="cards">
        {listaProjetos.map((proj, index) => (
          <ProjetoCard key={index} projeto={proj} />
        ))}
      </div>
    </section>
  );
}

export default Projetos;