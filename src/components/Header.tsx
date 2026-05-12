import { Link, useNavigate } from "react-router-dom";

type HeaderProps = {
  showButton?: boolean;
};

export function Header({ showButton = false }: HeaderProps) {

  const navigate = useNavigate();

  return (
    <header className="header">

      <div className="logo">
        <span>Code</span>
        <span>Hunter</span>
      </div>

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/conteudo">Conteúdo</Link>
      </nav>

      <div className="header-right">

        {showButton && (
          <button
            className="page-btn"
            onClick={() => navigate("/sobre")}
          >
            Ver mais
          </button>
        )}

      </div>

    </header>
  );
}