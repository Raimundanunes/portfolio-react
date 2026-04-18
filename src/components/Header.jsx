function Header() {
  function irPara(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header>
      <h1>Raimunda Nunes</h1>
      <div>
        <button onClick={() => irPara("sobre")}>Sobre Mim</button>
        <button onClick={() => irPara("projetos")}>Projetos</button>
      </div>
    </header>
  );
}

export default Header;