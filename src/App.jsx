import { useState } from "react";
import logo from "./assets/logo.png";
import "./App.css";

const navItems = [
  { id: "about", label: "О хакатоне" },
  { id: "projects", label: "Проекты" },
  { id: "terms", label: "Условия проведения" },
  { id: "venue", label: "Место проведения" },
  { id: "news", label: "Новости" },
  { id: "contacts", label: "Контактная информация" },
];

const organizerPartners = [
  {
    name: "АСКА",
    text: "Ассоциация специалистов по вычислительной биологии",
    image: "/partners/asca.png",
  },
  {
    name: "РУДН",
    text: "Российский университет дружбы народов",
    image: "/partners/biomedhub-rudn.png",
  },
  {
    name: "Партнер",
    text: "Научные технологии во благо будущего",
    image: logo,
  },
];

const chips = ["Биоинформатика", "Single-cell данные", "AI и ML", "Прецизионная медицина"];

const dnaDots = Array.from({ length: 28 }, (_, index) => {
  const progress = index / 27;
  const wave = Math.sin(progress * Math.PI * 4);
  const size = 0.55 + Math.cos(progress * Math.PI * 4) * 0.12;

  return {
    id: index,
    top: `${5 + progress * 90}%`,
    left: `${50 + wave * 15}%`,
    right: `${50 - wave * 15}%`,
    size: `${size}rem`,
    opacity: 0.62 + Math.abs(wave) * 0.26,
  };
});

const networkNodes = [
  ["8%", "22%"],
  ["15%", "70%"],
  ["27%", "58%"],
  ["39%", "82%"],
  ["63%", "30%"],
  ["78%", "73%"],
  ["90%", "42%"],
];

const stats = [
  { value: "48", caption: "часов\nнон-стоп разработки", icon: "time" },
  { value: "3-5", caption: "человек\nв команде", icon: "team" },
  { value: "25+", caption: "экспертов\nи менторов", icon: "cap" },
  { value: "6", caption: "проектных\nнаправлений", icon: "compass" },
];

const hackathonDays = [
  {
    day: "День 1",
    text: "открытие, две вводные лекции, приглашённый доклад, знакомство с модераторами и проектами, формирование команд, командная работа",
  },
  {
    day: "День 2",
    text: "приглашённый доклад, продолжение командной работы",
  },
  {
    day: "День 3",
    text: "приглашённый доклад, продолжение командной работы",
  },
  {
    day: "День 4",
    text: "защита проектов, определение победителей, награждение, закрытие",
  },
];

const lecturers = [
  { name: "Иван Соколов", role: "Руководитель группы биоинформатики" },
  { name: "Мария Титова", role: "Старший исследователь" },
  { name: "Дмитрий Смирнов", role: "Data Science Lead" },
  { name: "Екатерина Петрова", role: "Профессор биоинформатики" },
  { name: "Роман Волков", role: "CTO платформы для анализа данных" },
];

const moderators = [
  "Олег Кузнецов - Биоинформатик, ментор проектов",
  "Андрей Морозов - ML-инженер, эксперт по данным",
  "Анна Воронина - Исследователь в области геномики",
  "Павел Чебышев - Разработчик, ментор команд",
];

const faq = [
  {
    q: "Кто может участвовать?",
    a: "Студенты, исследователи, разработчики, аналитики и команды из 3-5 человек.",
  },
  {
    q: "Сколько стоит участие?",
    a: "Участие бесплатное, регистрация обязательна.",
  },
  {
    q: "Нужна ли готовая идея?",
    a: "Нет, можно прийти с идеей или выбрать задачу после брифинга.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="landing">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Хакатомикс 2026">
          <img className="brand-logo" src={logo} alt="" />
          <span className="brand-copy">
            Хакатомикс
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
          <span />
          <span />
          <span />
        </button>

        <nav className={`menu ${menuOpen ? "is-open" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            О хакатоне
          </a>

          <div className="menu-item has-dropdown">
            <a className="menu-link" href="#organizers" onClick={() => setMenuOpen(false)}>
              Организаторы
              <span className="dropdown-caret" aria-hidden="true" />
            </a>
            <div className="organizers-dropdown" aria-label="Организаторы и партнеры">
              <div className="dropdown-roles">
                <a href="#organizers" onClick={() => setMenuOpen(false)}>
                  <span className="role-icon" aria-hidden="true">
                    Л
                  </span>
                  <span>
                    <strong>Лекторы</strong>
                    <small>Ведущие эксперты в области биоинформатики и ИИ</small>
                  </span>
                </a>
                <a href="#organizers" onClick={() => setMenuOpen(false)}>
                  <span className="role-icon" aria-hidden="true">
                    М
                  </span>
                  <span>
                    <strong>Менторы</strong>
                    <small>Практики и исследователи, готовые помочь командам</small>
                  </span>
                </a>
              </div>

              <div className="dropdown-partners">
                <p>Организаторы и партнеры</p>
                <div className="partner-menu-grid">
                  {organizerPartners.map((partner) => (
                    <a
                      className="partner-menu-card"
                      href="#organizers"
                      key={partner.name}
                      onClick={() => setMenuOpen(false)}
                    >
                      <img src={partner.image} alt="" />
                      <strong>{partner.name}</strong>
                      <small>{partner.text}</small>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {navItems.slice(1).map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="btn btn-header" href="#registration">
          Регистрация
          <span aria-hidden="true">→</span>
        </a>
      </header>

      <main id="top">
        <section className="hero section-dark">
          <div className="hero-copy">
            <p className="eyebrow">Bioinformatics + AI + Precision Medicine</p>
            <h1>
              BioHakaton
              <br />
              2026
            </h1>
            <p className="lead">48 часов, чтобы создать решения для прецизионной медицины</p>

            <div className="chip-row">
              {chips.map((chip) => (
                <span key={chip} className="chip">
                  {chip}
                </span>
              ))}
            </div>

            <div className="actions">
              <a className="btn btn-primary" href="#registration">
                Участвовать
              </a>
              <a className="btn btn-ghost" href="#about">
                Подробнее
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="bio-grid" />
            <div className="bio-network">
              {networkNodes.map(([left, top]) => (
                <span key={`${left}-${top}`} style={{ left, top }} />
              ))}
            </div>
            <div className="bio-cell bio-cell-large">
              <span />
            </div>
            <div className="bio-cell bio-cell-small">
              <span />
            </div>
            <div className="dna-helix">
              {dnaDots.map((dot) => (
                <span
                  className="dna-dot dna-dot-a"
                  key={`dna-a-${dot.id}`}
                  style={{
                    top: dot.top,
                    left: dot.left,
                    width: dot.size,
                    height: dot.size,
                    opacity: dot.opacity,
                  }}
                />
              ))}
              {dnaDots.map((dot) => (
                <span
                  className="dna-dot dna-dot-b"
                  key={`dna-b-${dot.id}`}
                  style={{
                    top: dot.top,
                    left: dot.right,
                    width: dot.size,
                    height: dot.size,
                    opacity: dot.opacity,
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-light about about-reference">
          <div className="about-reference-top">
            <div className="about-reference-copy">
              <h2>О хакатоне</h2>
              <p>
                Омиксные технологии на уровне единичных клеток (single-cell) вместе с искусственным
                интеллектом открывают новые возможности для изучения молекулярного ландшафта тканей
                и органов. Хакатон объединяет специалистов для поиска инновационных решений в
                прецизионной медицине.
              </p>
            </div>
            <div className="about-reference-stats">
              {stats.map((item) => (
                <article key={item.value} className="about-stat-card">
                  <span className={`about-stat-icon about-stat-icon-${item.icon}`} aria-hidden="true" />
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
                <span className="about-card-icon about-card-icon-target" aria-hidden="true" />
                <h3>Актуальность</h3>
              </div>
              <p>
                Омиксные технологии на уровне single-cell позволяют исследовать геном, транскриптом,
                протеом и метаболом каждой клетки с высокой точностью.
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
                <span className="about-card-icon about-card-icon-flag" aria-hidden="true" />
                <h3>Цель</h3>
              </div>
              <p>
                Объединить усилия исследователей, биоинформатиков и специалистов ИИ для создания
                инновационных подходов в прецизионной медицине на основе данных single-cell.
              </p>
              <div className="about-cells" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </article>

            <article className="about-info-card about-days">
              <div className="about-card-title">
                <span className="about-card-icon about-card-icon-calendar" aria-hidden="true" />
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
              {lecturers.map((person, index) => (
                <article key={person.name} className="lecturer-card">
                  <div className="avatar" aria-hidden="true">
                    <span>{index + 1}</span>
                  </div>
                  <h3>{person.name}</h3>
                  <p>{person.role}</p>
                </article>
              ))}
            </div>
            <p className="muted-note">Список лекторов будет дополняться.</p>
          </div>
          <div className="organizer-group">
            <h3 className="organizer-subhead">Менторы</h3>
            <div className="moderators-grid">
              {moderators.map((moderator) => (
                <article key={moderator} className="moderator-card">
                  {moderator}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section-dark projects-section">
          <div className="section-head compact on-dark">
            <h2>Проекты</h2>
          </div>
        </section>

        <section id="terms" className="section-light terms-section">
          <div className="section-head compact">
            <h2>Условия проведения</h2>
          </div>
          <div className="terms-grid">
            <article className="terms-card">
              <h3>Что вам нужно</h3>
              <ul>
                <li>Уметь анализировать данные</li>
                <li>Иметь базовые навыки программирования</li>
                <li>Быть готовым к 48 часам интенсивной работы</li>
                <li>Быть в команде 3-5 человек</li>
              </ul>
            </article>
            <article className="terms-card">
              <h3>Организационное</h3>
              <ul>
                <li>Регистрация обязательна</li>
                <li>Участие бесплатное</li>
                <li>Организаторы предоставляют данные и инфраструктуру</li>
                <li>Победителей ждут призы и возможности для роста</li>
              </ul>
            </article>
          </div>
          <div className="faq-grid">
            {faq.map((item) => (
              <article key={item.q} className="faq-card">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="venue" className="section-dark venue">
          <div className="venue-copy">
            <h2>Место проведения</h2>
            <h3>НИИ МКМ и ФИИ РУДН</h3>
            <p>Москва, Подольское ш., 8</p>
            <p>
              Современное пространство для работы, нетворкинга и презентации решений в сфере
              биомедицины и ИИ.
            </p>
          </div>
          <div className="map-card" aria-hidden="true">
            <div className="map-grid" />
            <span className="map-pin" />
            <a className="btn btn-ghost map-btn" href="#">
              Показать на карте →
            </a>
          </div>
        </section>

        <section id="news" className="section-light news-section">
          <div className="section-head compact">
            <h2>Новости</h2>
          </div>
        </section>

      </main>

      <footer id="contacts" className="site-footer section-dark">
        <div className="footer-top">
          <p className="footer-brand">BioHakaton 2026</p>
          <p>48 часов для идей, которые меняют медицину.</p>
          <div className="socials">
            <a href="#">Telegram</a>
            <a href="#">VK</a>
            <a href="#">GitHub</a>
          </div>
          <a id="registration" className="btn btn-primary footer-registration" href="#">
            Зарегистрироваться →
          </a>
        </div>
        <div className="footer-bottom">
          <span>© BioHakaton 2026</span>
          <a href="#">Контакты</a>
          <a href="#">Политика конфиденциальности</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
