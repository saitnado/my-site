import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function Header() {
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const openTimerRef = useRef(null);
  const navigate = useNavigate();

  const openPortalOnce = () => {
    setIsPortalOpen((prev) => {
      if (prev) return prev;
      return true;
    });
  };

  const runPortalAndNavigate = (target, hash) => {
    if (!isPortalOpen) {
      openPortalOnce();

      if (openTimerRef.current) {
        clearTimeout(openTimerRef.current);
      }

      openTimerRef.current = setTimeout(() => {
        if (hash) {
          navigate({ pathname: target, hash });
          if (hash === "#registration") {
            setTimeout(() => {
              const el = document.querySelector(hash);
              if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }, 80);
          }
        } else {
          navigate(target);
        }
      }, 2100);

      return;
    }

    if (hash) {
      navigate({ pathname: target, hash });
      if (hash === "#registration") {
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 40);
      }
    } else {
      navigate(target);
    }
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

    const onAnyInteraction = () => {
      openPortalOnce();
    };

    window.addEventListener("portal:navigate", onPortalNavigate);
    window.addEventListener("pointerdown", onAnyInteraction, { passive: true });
    window.addEventListener("keydown", onAnyInteraction);
    window.addEventListener("wheel", onAnyInteraction, { passive: true });
    window.addEventListener("touchstart", onAnyInteraction, { passive: true });

    return () => {
      window.removeEventListener("portal:navigate", onPortalNavigate);
      window.removeEventListener("pointerdown", onAnyInteraction);
      window.removeEventListener("keydown", onAnyInteraction);
      window.removeEventListener("wheel", onAnyInteraction);
      window.removeEventListener("touchstart", onAnyInteraction);

      if (openTimerRef.current) {
        clearTimeout(openTimerRef.current);
      }
    };
  }, [isPortalOpen, navigate]);

  return (
    <header className="header">
      <Link to="/" className={`logo ${isPortalOpen ? "is-open" : ""}`} aria-label="На главную">
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

