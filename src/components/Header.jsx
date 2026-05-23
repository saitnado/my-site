import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <div className="logo-square"></div>
        <span>(потом придумать дизайн название)</span>
      </Link>

      <nav className="nav">
        <Link to="/news">Новости</Link>
        <Link to="/venue">Место проведения</Link>
        <Link to="/organizers">Организаторы</Link>
        <Link to="/about">О хакатоне</Link>
      </nav>

      <a className="telegram" href="#" aria-label="Telegram">
        ✈
      </a>
    </header>
  );
}

export default Header;