import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function Header() {
  const [isOpening, setIsOpening] = useState(false);
  const timerRef = useRef(null);
  const navigate = useNavigate();

  const runPortalAndNavigate = (target, hash) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    setIsOpening(true);

    timerRef.current = setTimeout(() => {
      if (hash) {
        navigate({ pathname: target, hash });
      } else {
        navigate(target);
      }
      setIsOpening(false);
    }, 760);
  };

  const triggerPortalAndNavigate = (event, target, hash) => {
    event.preventDefault();
    runPortalAndNavigate(target, hash);
  };

  useEffect(() => {
    const onPortalNavigate = (event) => {
      const detail = event?.detail ?? {};
      if (!detail.target) return;
      runPortalAndNavigate(detail.target, detail.hash);
    };

    window.addEventListener("portal:navigate", onPortalNavigate);

    return () => {
      window.removeEventListener("portal:navigate", onPortalNavigate);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <header className="header">
      <Link to="/" className={`logo ${isOpening ? "is-opening" : ""}`} aria-label="На главную">
        <span className="logo-square" aria-hidden="true">
          <span className="portal-ring portal-ring-1"></span>
          <span className="portal-ring portal-ring-2"></span>
          <span className="portal-node portal-node-1"></span>
          <span className="portal-node portal-node-2"></span>
          <span className="portal-node portal-node-3"></span>
          <span className="portal-mesh portal-mesh-1"></span>
          <span className="portal-mesh portal-mesh-2"></span>
          <span className="portal-core"></span>
          <span className="portal-universe"></span>
        </span>
      </Link>

      <nav className="nav">
        <Link to="/news">Новости</Link>
        <Link to="/venue">Место проведения</Link>
        <Link to="/organizers">Организаторы</Link>
        <Link to="/about" onClick={(e) => triggerPortalAndNavigate(e, "/about")}>
          О хакатоне
        </Link>
        <Link to="/projects" onClick={(e) => triggerPortalAndNavigate(e, "/projects")}>
          Проекты
        </Link>
        <Link to="/terms">Условия проведения</Link>
      </nav>

      <a
        className="header-cta"
        href="/#registration"
        onClick={(e) => triggerPortalAndNavigate(e, "/", "#registration")}
      >
        Подать заявку
      </a>
    </header>
  );
}

export default Header;
