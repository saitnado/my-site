import { useEffect, useRef, useState } from "react";
import {
  IconArrowRight,
  IconBuildingCommunity,
  IconChevronDown,
  IconMapPin,
  IconMenu2,
  IconPresentation,
  IconUserStar,
} from "@tabler/icons-react";
import logo from "./assets/logo.png";
import heroGifVideo from "./assets/gif.MP4";
import RegistrationModal from "./RegistrationForm";
import {
  chips,
  contactEmail,
  dnaDots,
  hackathonDays,
  iconMap,
  lecturers,
  moderators,
  navItems,
  organizerPartners,
  projects,
  requirementCards,
  sponsorPartners,
  stats,
} from "./config/app.config";
import "./App.css";

function TermIcon({ name }) {
  const Icon = iconMap[name];

  return Icon ? <Icon aria-hidden="true" /> : null;
}

function App() {
  const heroRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [regOpen, setRegOpen] = useState(false);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return undefined;

    let frame = 0;

    const updateParallax = () => {
      frame = 0;
      const rect = hero.getBoundingClientRect();
      const offset = rect.top * -0.18;

      hero.style.setProperty("--hero-parallax", `${offset}px`);
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return undefined;

    const elements = Array.from(
      document.querySelectorAll(
        ".about-stat-card, .about-info-card, .lecturer-card, .moderator-card, .sponsor-card, .project-card, .terms-card, .terms-info-card, .terms-alert, .map-card, .section-head, .about-reference-copy"
      )
    );
    if (!elements.length) return undefined;

    elements.forEach((el) => el.classList.add("reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!activeProject) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProject]);

  return (
    <div className="landing">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Hackatomics 2026">
          <img className="brand-logo" src={logo} alt="" />
          <span className="brand-copy">
            Hackatomics
            <b>2026</b>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Открыть меню"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <IconMenu2 aria-hidden="true" />
        </button>

        <nav className={`menu ${menuOpen ? "is-open" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            О хакатоне
          </a>

          <div className="menu-item has-dropdown">
            <a className="menu-link" href="#organizers" onClick={() => setMenuOpen(false)}>
              Организаторы
              <IconChevronDown className="dropdown-caret" aria-hidden="true" />
            </a>
            <div className="organizers-dropdown" aria-label="Организаторы">
              <div className="dropdown-roles">
                <a href="#organizers" onClick={() => setMenuOpen(false)}>
                  <span className="role-icon" aria-hidden="true">
                    <IconPresentation />
                  </span>
                  <span>
                    <strong>Лекторы</strong>
                    <small>Ведущие эксперты в области биоинформатики и ИИ</small>
                  </span>
                </a>
                <a href="#organizers" onClick={() => setMenuOpen(false)}>
                  <span className="role-icon" aria-hidden="true">
                    <IconUserStar />
                  </span>
                  <span>
                    <strong>Менторы</strong>
                    <small>Практики и исследователи, готовые помочь командам</small>
                  </span>
                </a>
                <a href="#organizers" onClick={() => setMenuOpen(false)}>
                  <span className="role-icon" aria-hidden="true">
                    <IconBuildingCommunity />
                  </span>
                  <span>
                    <strong>Спонсоры</strong>
                    <small>Партнёры, поддерживающие проведение хакатона</small>
                  </span>
                </a>
              </div>

              <div className="dropdown-partners">
                <p>Организаторы</p>
                <div className="partner-menu-grid">
                  {organizerPartners.map((partner) => (
                    <a
                      className="partner-menu-card"
                      href="#organizers"
                      key={partner.name}
                      onClick={() => setMenuOpen(false)}
                    >
                      <img src={partner.image} alt="" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {navItems.slice(1).map((item) => (
            <a
              key={item.id}
              href={item.href ?? `#${item.id}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="btn btn-header"
          onClick={() => {
            setMenuOpen(false);
            setRegOpen(true);
          }}
        >
          Регистрация
          <IconArrowRight aria-hidden="true" />
        </button>
      </header>

      <main id="top">
        <section className="hero section-dark" ref={heroRef}>
          <video
            className="hero-video-bg"
            src={heroGifVideo}
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
          />
          <div className="hero-copy">
            <p className="eyebrow">Bioinformatics + AI + Precision Medicine</p>
            <h1>
              <span className="hero-title-main">Hackatomics</span>
              <span className="hero-title-year">
                2026
                <span className="hero-title-date">10-14 октября</span>
              </span>
            </h1>
            <p className="lead">72 часа, чтобы создать решения для прецизионной медицины</p>

            <div className="chip-row">
              {chips.map((chip) => (
                <span key={chip} className="chip">
                  {chip}
                </span>
              ))}
            </div>

            <div className="actions">
              <button type="button" className="btn btn-primary" onClick={() => setRegOpen(true)}>
                Участвовать
                <IconArrowRight aria-hidden="true" />
              </button>
              <a className="btn btn-ghost" href="#about">
                Подробнее
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="section-light about about-reference">
          <div className="about-reference-top">
            <div className="about-reference-copy">
              <h2>О хакатоне</h2>
              <p>
                Омиксные технологии на уровне единичных клеток вместе с искусственным
                интеллектом открывают новые возможности для изучения молекулярного ландшафта тканей
                и органов. Хакатон объединяет специалистов для поиска инновационных решений в
                прецизионной медицине.
              </p>
            </div>
            <div className="about-reference-stats">
              {stats.map((item) => (
                <article key={item.value} className="about-stat-card">
                  <span className="about-stat-icon" aria-hidden="true">
                    <TermIcon name={item.icon} />
                  </span>
                  <strong>{item.value}</strong>
                  <span>
                    {item.caption.split("\n").map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </span>
                </article>
              ))}
            </div>
          </div>

          <div className="about-reference-grid">
            <article className="about-info-card about-relevance">
              <div className="about-card-title">
                <span className="about-card-icon" aria-hidden="true">
                  <TermIcon name="target" />
                </span>
                <h3>Актуальность</h3>
              </div>
              <p>
                Омиксные технологии на уровне единичных клеток позволяют исследовать геном,
                транскриптом, протеом и метаболом каждой клетки с высокой точностью.
              </p>
              <p className="about-bold">Применение ИИ для анализа этих данных помогает выявлять:</p>
              <ul>
                <li>молекулярные механизмы развития патологий;</li>
                <li>новые подтипы заболеваний;</li>
                <li>перспективные диагностические и терапевтические мишени.</li>
              </ul>
            </article>

            <article className="about-info-card about-goal">
              <div className="about-card-title">
                <span className="about-card-icon" aria-hidden="true">
                  <TermIcon name="flag" />
                </span>
                <h3>Цель</h3>
              </div>
              <p>
                Объединить усилия исследователей, биоинформатиков и специалистов ИИ для создания
                инновационных подходов в прецизионной медицине на основе данных единичных клеток.
              </p>
            </article>

            <article className="about-info-card about-days">
              <div className="about-card-title">
                <span className="about-card-icon" aria-hidden="true">
                  <TermIcon name="calendar" />
                </span>
                <h3>Дни хакатона</h3>
              </div>
              <div className="about-days-list">
                {hackathonDays.map((item) => (
                  <div className="about-day-row" key={item.day}>
                    <span className="about-day-label">{item.day}</span>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="organizers" className="section-dark">
          <div className="section-head compact on-dark">
            <h2>Организаторы</h2>
          </div>
          <div className="organizer-group">
            <h3 className="organizer-subhead">Лекторы</h3>
            <div className="lecturers-grid">
              {lecturers.map((person) => (
                <article key={person.name} className="lecturer-card">
                  <img className="lecturer-photo" src={person.image} alt={person.name} />
                  <div className="lecturer-copy">
                    <h3>{person.name}</h3>
                    <p>{person.role}</p>
                    <span className="lecturer-location">
                      <IconMapPin className="location-pin" aria-hidden="true" />
                      {person.location}
                    </span>
                    <div className="lecturer-tags">
                      {person.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <p className="muted-note">Список лекторов будет дополняться.</p>
          </div>
          <div className="organizer-group">
            <h3 className="organizer-subhead">Менторы</h3>
            <div className="moderators-grid">
              {moderators.map((moderator) => (
                <article key={moderator.name} className="moderator-card">
                  {moderator.image ? (
                    <img
                      className={`moderator-photo ${
                        moderator.name === "Семён Куприянов" ? "moderator-photo-semyon" : ""
                      } ${
                        moderator.name === "Артем Торопов" ? "moderator-photo-artem" : ""
                      }`}
                      src={moderator.image}
                      alt={moderator.name}
                    />
                  ) : (
                    <div className="moderator-photo-placeholder" aria-hidden="true">
                      {moderator.initials}
                    </div>
                  )}
                  <div className="moderator-copy">
                    <h3>{moderator.name}</h3>
                    <p>{moderator.role}</p>
                    <span className="lecturer-location">
                      <IconMapPin className="location-pin" aria-hidden="true" />
                      {moderator.location}
                    </span>
                    <div className="lecturer-tags">
                      {moderator.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="organizer-group">
            <h3 className="organizer-subhead">Спонсоры</h3>
            <div className="sponsors-grid">
              {sponsorPartners.map((sponsor) => (
                <a
                  className="sponsor-card"
                  href={sponsor.href}
                  key={sponsor.name}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={sponsor.name}
                >
                  <img className={sponsor.className ?? ""} src={sponsor.image} alt={sponsor.name} />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section-dark projects-section">
          <div className="section-head compact on-dark">
            <h2>Проекты</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-card-copy">
                  <h3>
                    <span>{project.number}.</span> {project.title}
                  </h3>
                  <p className="project-leader">{project.leader}</p>
                  <div className="project-goal">
                    <strong>Цель проекта:</strong>
                    <p>{project.goalShort}</p>
                  </div>
                  <button className="project-more" type="button" onClick={() => setActiveProject(project)}>
                    Подробнее
                    <IconArrowRight aria-hidden="true" />
                  </button>
                </div>
                <img className="project-image" src={project.image} alt="" />
              </article>
            ))}
          </div>
        </section>

        {activeProject ? (
          <div className="project-modal-backdrop" role="presentation" onMouseDown={() => setActiveProject(null)}>
            <div
              className="project-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              onMouseDown={(event) => event.stopPropagation()}
            >
              <button
                className="project-modal-close"
                type="button"
                aria-label="Закрыть окно"
                onClick={() => setActiveProject(null)}
              >
                ×
              </button>
              <p className="project-modal-kicker">Проект {activeProject.number}</p>
              <h3 id="project-modal-title">{activeProject.title}</h3>
              <dl className="project-modal-details">
                <div>
                  <dt>Руководитель</dt>
                  <dd>{activeProject.leader}</dd>
                </div>
                <div>
                  <dt>Цель проекта</dt>
                  <dd>{activeProject.goal}</dd>
                </div>
                {activeProject.description ? (
                  <div>
                    <dt>Контекст проекта</dt>
                    <dd>
                      {Array.isArray(activeProject.description) ? (
                        <div className="project-modal-paragraphs">
                          {activeProject.description.map((item) => (
                            <p key={item}>{item}</p>
                          ))}
                        </div>
                      ) : (
                        activeProject.description
                      )}
                    </dd>
                  </div>
                ) : null}
                <div>
                  <dt>Что предстоит сделать участникам</dt>
                  <dd>
                    {Array.isArray(activeProject.tasks) ? (
                      <ul className="project-modal-list">
                        {activeProject.tasks.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      activeProject.tasks
                    )}
                  </dd>
                </div>
                {activeProject.results ? (
                  <div>
                    <dt>{activeProject.resultsTitle || "Ожидаемые результаты"}</dt>
                    <dd>
                      {Array.isArray(activeProject.results) ? (
                        <ul className="project-modal-list">
                          {activeProject.results.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        activeProject.results
                      )}
                    </dd>
                  </div>
                ) : null}
                {activeProject.objects ? (
                  <div>
                    <dt>Объекты</dt>
                    <dd>{activeProject.objects}</dd>
                  </div>
                ) : null}
              </dl>
            </div>
          </div>
        ) : null}

        <section id="terms" className="section-light terms-section">
          <div className="terms-orbit" aria-hidden="true" />
          <div className="terms-helix" aria-hidden="true">
            {dnaDots.slice(0, 18).map((dot) => (
              <span key={dot.id} style={{ top: dot.top, left: dot.left, right: dot.right }} />
            ))}
          </div>
          <div className="section-head compact terms-head">
            <h2>Условия проведения</h2>
            <p>
              Участникам предстоит работать на стыке <span>биологии</span>,{" "}
              <span>анализа данных</span> и <span>машинного обучения</span>.
            </p>
          </div>

          <div className="terms-subhead">
            <span className="terms-subhead-icon" aria-hidden="true">
              <TermIcon name="clipboard" />
            </span>
            <h3>Требования для участников</h3>
          </div>

          <p className="terms-kicker">Обязательные компетенции:</p>
          <div className="terms-grid">
            {requirementCards.map((card, index) => (
              <article className="terms-card" key={card.title}>
                <span className="terms-icon" aria-hidden="true">
                  <TermIcon name={card.icon} />
                </span>
                <h3>
                  {index + 1}. {card.title}
                </h3>
                <span className="terms-card-line" aria-hidden="true" />
                <p>{card.text}</p>
              </article>
            ))}

            <article className="terms-card terms-card-accent">
              <span className="terms-icon" aria-hidden="true">
                <TermIcon name="star" />
              </span>
              <h3>Будет преимуществом:</h3>
              <span className="terms-card-line" aria-hidden="true" />
              <p>
                Опыт анализа RNA-seq данных на уровне единичных клеток. Продвинутые знания в ML/AI: опыт
                создания и обучения deep learning моделей (autoencoders, VAEs, transformers) для
                работы с биологическими данными.
              </p>
            </article>
          </div>

          <div className="terms-alert">
            <span className="terms-alert-icon" aria-hidden="true">
              <TermIcon name="shield" />
            </span>
            <strong>ВАЖНО</strong>
            <p>
              Мы не ожидаем от вас экспертного уровня во всём сразу. Главное — желание разбираться
              в задачах на стыке биологии и анализа данных.
            </p>
          </div>

          <div className="terms-info-grid">
            <article className="terms-info-card">
              <span className="terms-icon" aria-hidden="true">
                <TermIcon name="trophy" />
              </span>
              <h3>Информация о призах</h3>
              <span className="terms-card-line" aria-hidden="true" />
              <p>
                Призовой фонд хакатона — 450 000 рублей. Команды-победители будут отмечены
                денежными призами, а каждый участник получит сертификат и памятный подарок.
              </p>
            </article>

            <article className="terms-info-card">
              <span className="terms-icon" aria-hidden="true">
                <TermIcon name="clipboard" />
              </span>
              <h3>Регистрация</h3>
              <span className="terms-card-line" aria-hidden="true" />
              <p>
                Регистрация на хакатон открыта. Заполните анкету участника — это займёт несколько
                минут.
              </p>
              <button
                type="button"
                className="btn btn-primary terms-email-btn"
                onClick={() => setRegOpen(true)}
              >
                Зарегистрироваться
                <IconArrowRight aria-hidden="true" />
              </button>
            </article>
          </div>
        </section>

        <section id="registration" className="section-dark registration-section">
          <div className="registration-copy">
            <span className="registration-icon" aria-hidden="true">
              <TermIcon name="mail" />
            </span>
            <div>
              <h2>Регистрация на хакатон</h2>
              <p>
                Заполните анкету участника хакатона по омиксным технологиям и ИИ. Поля, отмеченные
                звёздочкой, обязательны.
              </p>
              <button
                type="button"
                className="btn btn-primary registration-cta"
                onClick={() => setRegOpen(true)}
              >
                Заполнить анкету
                <IconArrowRight aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="registration-door" aria-hidden="true" />
        </section>

        <section id="venue" className="section-light venue">
          <div className="venue-copy">
            <h2>Место проведения</h2>
            <h3>НИИ МКМ и ФИИ РУДН</h3>
            <p className="venue-address">Москва, Подольское шоссе, 8</p>
            <p>
              Современное пространство для работы, нетворкинга и презентации решений в сфере
              биомедицины и ИИ.
            </p>
          </div>
          <div className="map-card">
            <iframe
              className="map-frame"
              src="https://yandex.ru/map-widget/v1/?ll=37.624007%2C55.713864&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjY4NTU1MRJH0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINCf0L7QtNC-0LvRjNGB0YHQutC-0LUg0YjQvtGB0YHQtSwgOCI%2C&z=18"
              title="Место проведения на Яндекс.Картах"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="map-actions">
              <a
                className="map-btn"
                href="https://yandex.ru/maps/-/CPhUEKYD"
                target="_blank"
                rel="noreferrer"
              >
                <IconMapPin aria-hidden="true" />
                Вход в НИИ
              </a>
              <a
                className="map-btn map-btn-primary"
                href="https://2gis.ru/moscow/search/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C%20%D0%9F%D0%BE%D0%B4%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B5%20%D1%88%D0%BE%D1%81%D1%81%D0%B5%2C%208"
                target="_blank"
                rel="noreferrer"
              >
                2ГИС
              </a>
              <a
                className="map-btn map-btn-primary"
                href="https://yandex.ru/maps/-/CPhUEKYD"
                target="_blank"
                rel="noreferrer"
              >
                Я.Карты
              </a>
            </div>
          </div>
        </section>

      </main>

      <footer id="contacts" className="site-footer section-dark">
        <div className="footer-top">
          <p className="footer-brand">Hackatomics 2026</p>
          <p>10-14 октября, 72 часа для идей, которые меняют медицину.</p>
          <a className="footer-email" href={`mailto:${contactEmail}`}>
            {contactEmail}
          </a>
          <button
            type="button"
            className="btn btn-primary footer-registration"
            onClick={() => setRegOpen(true)}
          >
            Зарегистрироваться <IconArrowRight aria-hidden="true" />
          </button>
        </div>
        <div className="footer-bottom">
          <span>© Hackatomics 2026</span>
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <a
            href="https://www.rudn.ru/personal-data-processing-and-protection-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Политика конфиденциальности
          </a>
        </div>
      </footer>

      <RegistrationModal open={regOpen} onClose={() => setRegOpen(false)} />
    </div>
  );
}

export default App;
