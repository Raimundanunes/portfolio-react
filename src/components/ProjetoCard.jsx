import { useEffect, useRef } from "react";

function ProjetoCard({ projeto }) {
  const cardRef = useRef();

  function abrirProjeto(nome) {
    alert("Você clicou no projeto: " + nome);
  }

  useEffect(() => {
    function handleScroll() {
      const posicao = cardRef.current.getBoundingClientRect().top;
      const tela = window.innerHeight;

      if (posicao < tela - 50) {
        cardRef.current.classList.add("aparecer");
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={cardRef}
      className="card"
      onClick={() => abrirProjeto(projeto.nome)}
    >
      <h3>{projeto.nome}</h3>
      <p>{projeto.descricao}</p>
    </div>
  );
}

export default ProjetoCard;