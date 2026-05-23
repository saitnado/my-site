import { NavLink } from "react-router-dom"

function Header() {
  return (
    <header className="header">
      <NavLink to="/" className="logo">
        KUB Academy
      </NavLink>

      <nav className="nav">
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/about">О проекте</NavLink>
        <NavLink to="/courses">Курсы</NavLink>
        <NavLink to="/contacts">Контакты</NavLink>
      </nav>

      <button className="headerButton">
        Записаться
      </button>
    </header>
  )
}

export default Header