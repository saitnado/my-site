import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <div className="logo-square"></div>
        <span>(РїРѕС‚РѕРј РїСЂРёРґСѓРјР°С‚СЊ РґРёР·Р°Р№РЅ РЅР°Р·РІР°РЅРёРµ)</span>
      </Link>

      <nav className="nav">
        <Link to="/news">РќРѕРІРѕСЃС‚Рё</Link>
        <Link to="/venue">РњРµСЃС‚Рѕ РїСЂРѕРІРµРґРµРЅРёСЏ</Link>
        <Link to="/organizers">РћСЂРіР°РЅРёР·Р°С‚РѕСЂС‹</Link>
        <Link to="/about">Рћ С…Р°РєР°С‚РѕРЅРµ</Link>
        <Link to="/projects">Проекты</Link>
        <Link to="/terms">Условия проведения</Link>
      </nav>

      <a className="telegram" href="#" aria-label="Telegram">
        вњ€
      </a>
    </header>
  );
}

export default Header;
