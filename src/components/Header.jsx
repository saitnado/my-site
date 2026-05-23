import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const OPEN_ANIMATION_MS = 1700;
const CLOSE_ANIMATION_MS = 1500;
const NAV_DELAY_MS = 1000;

function Header() {
  const [portalState, setPortalState] = useState("closed");
  const portalStateRef = useRef("closed");
  const pendingCloseRef = useRef(false);

  const openTimerRef = useRef(null);
  const closeTimerRef = useRef(null);
  const navTimerRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  const isOnRegistration = location.pathname === "/" && location.hash === "#registration";

  useEffect(() => {
    portalStateRef.current = portalState;
  }, [portalState]);

  const startClosing = () => {
    const state = portalStateRef.current;

    if (state === "closed" || state === "closing") {
      return;
    }

    if (state === "opening") {
      pendingCloseRef.current = true;
      return;
    }

    if (openTimerRef.current) {
      clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }

    setPortalState("closing");

    closeTimerRef.current = setTimeout(() => {
      setPortalState("closed");
      closeTimerRef.current = null;
    }, CLOSE_ANIMATION_MS);
  };

  const startOpening = () => {
    const state = portalStateRef.current;

    if (state === "open" || state === "opening") {
      return;
    }

    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    setPortalState("opening");

    openTimerRef.current = setTimeout(() => {
      setPortalState("open");
      openTimerRef.current = null;

      if (pendingCloseRef.current) {
        pendingCloseRef.current = false;
        startClosing();
      }
    }, OPEN_ANIMATION_MS);
  };

  const scrollToRegistration = (delayMs = 60) => {
    setTimeout(() => {
      const el = document.querySelector("#registration");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, delayMs);
  };

  const navigateToRegistration = (event) => {
    event.preventDefault();
    startOpening();

    if (navTimerRef.current) {
      clearTimeout(navTimerRef.current);
      navTimerRef.current = null;
    }

    if (isOnRegistration) {
      scrollToRegistration(20);
      return;
    }

    navTimerRef.current = setTimeout(() => {
      navigate({ pathname: "/", hash: "#registration" });
      scrollToRegistration(80);
      navTimerRef.current = null;
    }, NAV_DELAY_MS);
  };

  useEffect(() => {
    if (isOnRegistration) {
      startOpening();
    } else {
      startClosing();
    }
  }, [isOnRegistration]);

  useEffect(() => {
    const onPortalNavigate = (event) => {
      const detail = event?.detail ?? {};

      if (detail.target === "/" && detail.hash === "#registration") {
        startOpening();

        if (navTimerRef.current) {
          clearTimeout(navTimerRef.current);
          navTimerRef.current = null;
        }

        if (isOnRegistration) {
          scrollToRegistration(20);
          return;
        }

        navTimerRef.current = setTimeout(() => {
          navigate({ pathname: "/", hash: "#registration" });
          scrollToRegistration(80);
          navTimerRef.current = null;
        }, NAV_DELAY_MS);

        return;
      }

      if (!detail.target) return;

      if (detail.hash) {
        navigate({ pathname: detail.target, hash: detail.hash });
      } else {
        navigate(detail.target);
      }
    };

    window.addEventListener("portal:navigate", onPortalNavigate);

    return () => {
      window.removeEventListener("portal:navigate", onPortalNavigate);

      if (openTimerRef.current) {
        clearTimeout(openTimerRef.current);
      }
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
      if (navTimerRef.current) {
        clearTimeout(navTimerRef.current);
      }
    };
  }, [isOnRegistration, navigate]);

  const logoClass = `logo ${portalState === "closed" ? "" : `is-${portalState}`}`.trim();

  return (
    <header className="header">
      <Link to="/" className={logoClass} aria-label="На главную">
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
        <Link to="/about">О хакатоне</Link>
        <Link to="/projects">Проекты</Link>
        <Link to="/terms">Условия проведения</Link>
      </nav>

      <a className="header-cta" href="/#registration" onClick={navigateToRegistration}>
        Подать заявку
      </a>
    </header>
  );
}

export default Header;
