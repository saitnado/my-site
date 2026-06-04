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
    image: "/partners/rudn-ai-faculty.png",
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
  {
    name: "Евгений Денисов",
    image: "/partners/lectors/Evgeny_Denisov.png",
    role: "Доктор биологических наук, профессор РАН, заместитель директора по научной работе НИИ онкологии Томского НИМЦ, зав. лабораторией биологии опухолевой прогрессии НИИ онкологии Томского НИМЦ, зав. лабораторией биологии единичных клеток НИИ молекулярной и клеточной медицины Медицинского института РУДН",
    location: "Томск, Москва",
    tags: ["Онкология", "Single-cell", "Геномика"],
  },
  {
    name: "Антон Поддубский",
    image: "/partners/lectors/Anton_Poddubsky.png",
    role: "Кандидат технических наук, директор Факультета искусственного интеллекта РУДН",
    location: "Москва",
    tags: ["Искусственный интеллект", "Data Science", "Руководитель AI-направления"],
  },
  {
    name: "Иван Тюкин",
    image: "/partners/lectors/Ivan_Tyukin.png",
    role: "Доктор технических наук, Сколковский институт науки и технологий (Сколтех), РУДН",
    location: "Москва",
    tags: ["Искусственный интеллект", "Data Science", "Сколтех"],
  },
  {
    name: "Александр Яневски",
    image: "/partners/lectors/Alexander_Yanevsky.png",
    role: "PhD, Assistant Professor, Европейский университет Санкт-Петербурга / University of Helsinki",
    location: "Санкт-Петербург",
    tags: ["Computational Biology", "PhD", "SPbU"],
  },
  {
    name: "Johnny Yu",
    image: "/partners/lectors/Johnny_Yu.png",
    role: "PhD, Chief Scientific Officer & сооснователь, Tahoe Therapeutics",
    location: "San Francisco, USA",
    tags: ["Precision Medicine", "Biotech", "PhD"],
  },
  {
    name: "Weidi Xie",
    image: "/partners/lectors/Weidi Xie.jpg",
    role: "Associate Professor, Shanghai Jiao Tong University; visitor researcher, University of Oxford",
    location: "Shanghai, China",
    tags: ["AI Research", "Computational Biology", "Oxford"],
  },
];

const moderators = [
  {
    name: "Александр Иконников",
    role: "младший научный сотрудник лаборатории биологии единичных клеток НИИ молекулярной и клеточной медицины РУДН",
    location: "Москва",
    initials: "АИ",
  },
  {
    name: "Артем Торопов",
    image: "/partners/moderators/Artem_Tropov.jpg",
    role: "стажёр-исследователь лаборатории биологии единичных клеток НИИ молекулярной и клеточной медицины РУДН",
    location: "Москва",
  },
  {
    name: "Павел Ямщиков",
    image: "/partners/moderators/Pavel_Yamshchikov.png",
    role: "специалист в области биоинформатики лаборатории биологии опухолевой прогрессии НИИ онкологии Томского НИМЦ",
    location: "Томск",
  },
  {
    name: "Александр Яневски",
    image: "/partners/moderators/Alexander_Yanevsky.png",
    role: "PhD, Assistant Professor, Европейский университет Санкт-Петербурга / University of Helsinki",
    location: "Санкт-Петербург",
  },
  {
    name: "Вера Субракова",
    image: "/partners/moderators/Vera_Subrakova.jpg",
    role: "специалист в области биоинформатики лаборатории биологии опухолевой прогрессии НИИ онкологии Томского НИМЦ",
    location: "Томск",
  },
  {
    name: "Полина Козлова",
    image: "/partners/moderators/Polina_Kozlova.jpg",
    role: "специалист в области биоинформатики лаборатории биологии опухолевой прогрессии НИИ онкологии Томского НИМЦ",
    location: "Томск",
  },
  {
    name: "Кирилл Кириленко",
    image: "/partners/moderators/Kirill_Kirilenko.jpg",
    role: "специалист в области биоинформатики лаборатории биологии опухолевой прогрессии НИИ онкологии Томского НИМЦ",
    location: "Томск",
  },
  {
    name: "Семён Куприянов",
    image: "/partners/moderators/Semyon_Kupriyanov.jpg",
    role: "специалист в области биоинформатики лаборатории биологии опухолевой прогрессии НИИ онкологии Томского НИМЦ",
    location: "Томск",
  },
];

const requirementCards = [
  {
    icon: "python",
    title: "Python или R",
    text: "Уверенное чтение кода, работа с базовыми библиотеками для анализа биологических данных.",
  },
  {
    icon: "database",
    title: "Работа с базами данных",
    text: "Умение находить записи в NCBI (Entrez), UniProt по ID; поиск датасетов в GEO, Zenodo. Знание веб-инструментов для анализа биомедицинских данных.",
  },
  {
    icon: "chart",
    title: "Анализ данных",
    text: "Опыт статистического анализа биомедицинских данных (геномных, транскриптомных, больших клинических данных).",
  },
  {
    icon: "dna",
    title: "Биологическая интерпретация",
    text: "Умение интерпретировать результаты анализа (биологическое образование или опыт участия в биологических исследованиях).",
  },
  {
    icon: "brain",
    title: "Машинное обучение",
    text: "Знание базовых инструментов ML.",
  },
];

function TermIcon({ name }) {
  switch (name) {
    case "python":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M24 6h7.5a5.5 5.5 0 0 1 5.5 5.5V20H19a7 7 0 0 0-7 7v3.5" />
          <path d="M24 42h-7.5a5.5 5.5 0 0 1-5.5-5.5V28h18a7 7 0 0 0 7-7v-3.5" />
          <path d="M18 14h.1M30 34h.1" />
          <path d="M18 20h18M12 30h18" />
        </svg>
      );
    case "database":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <ellipse cx="24" cy="12" rx="13" ry="6" />
          <path d="M11 12v24c0 3.3 5.8 6 13 6s13-2.7 13-6V12" />
          <path d="M11 24c0 3.3 5.8 6 13 6s13-2.7 13-6" />
          <path d="M11 18c0 3.3 5.8 6 13 6s13-2.7 13-6" />
        </svg>
      );
    case "chart":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M9 39h31" />
          <path d="M14 34V24" />
          <path d="M24 34V17" />
          <path d="M34 34V10" />
        </svg>
      );
    case "dna":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M16 6c16 8 16 28 0 36" />
          <path d="M32 6c-16 8-16 28 0 36" />
          <path d="M17 14h14M15 24h18M17 34h14" />
        </svg>
      );
    case "brain":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M20 38a8 8 0 0 1-8-8 7.5 7.5 0 0 1 2-5.1A8 8 0 0 1 22 12a7 7 0 0 1 13 3.5 7.5 7.5 0 0 1 1 14.4A8 8 0 0 1 28 38" />
          <path d="M24 13v28M18 23h6M24 29h8M29 18v7" />
        </svg>
      );
    case "star":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="m24 7 5 10.1 11.2 1.6-8.1 7.9 1.9 11.1-10-5.2-10 5.2 1.9-11.1-8.1-7.9L19 17.1 24 7Z" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M24 5 9 11v11c0 10.5 6.3 17.6 15 21 8.7-3.4 15-10.5 15-21V11L24 5Z" />
          <path d="M24 17v11M24 34h.1" />
        </svg>
      );
    case "trophy":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M16 8h16v10a8 8 0 0 1-16 0V8Z" />
          <path d="M16 12H8v5a7 7 0 0 0 8 7M32 12h8v5a7 7 0 0 1-8 7" />
          <path d="M24 26v9M17 40h14M20 35h8" />
        </svg>
      );
    case "clipboard":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M17 10h-4a4 4 0 0 0-4 4v25a4 4 0 0 0 4 4h22a4 4 0 0 0 4-4V14a4 4 0 0 0-4-4h-4" />
          <path d="M18 6h12v8H18V6ZM17 23h14M17 31h10" />
        </svg>
      );
    case "mail":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path d="M8 14h32v22H8V14Z" />
          <path d="m9 15 15 13 15-13" />
        </svg>
      );
    default:
      return null;
  }
}

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
            <div className="organizers-dropdown" aria-label="Организаторы">
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
              {lecturers.map((person) => (
                <article key={person.name} className="lecturer-card">
                  <img className="lecturer-photo" src={person.image} alt={person.name} />
                  <div className="lecturer-copy">
                    <h3>{person.name}</h3>
                    <p>{person.role}</p>
                    <span className="lecturer-location">
                      <span className="location-pin" aria-hidden="true" />
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
                    <img className="moderator-photo" src={moderator.image} alt={moderator.name} />
                  ) : (
                    <div className="moderator-photo-placeholder" aria-hidden="true">
                      {moderator.initials}
                    </div>
                  )}
                  <div className="moderator-copy">
                    <h3>{moderator.name}</h3>
                    <p>{moderator.role}</p>
                    <span className="lecturer-location">
                      <span className="location-pin" aria-hidden="true" />
                      {moderator.location}
                    </span>
                  </div>
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

        <section id="terms" className="section-dark terms-section">
          <div className="terms-orbit" aria-hidden="true" />
          <div className="terms-helix" aria-hidden="true">
            {dnaDots.slice(0, 18).map((dot) => (
              <span key={dot.id} style={{ top: dot.top, left: dot.left, right: dot.right }} />
            ))}
          </div>
          <div className="section-head compact on-dark terms-head">
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
                Опыт анализа данных single-cell RNA-seq. Продвинутые знания в ML/AI: опыт
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
                Команды-победители будут отмечены денежными призами. Каждый участник получит
                сертификат и памятный подарок.
              </p>
            </article>

            <article className="terms-info-card">
              <span className="terms-icon" aria-hidden="true">
                <TermIcon name="clipboard" />
              </span>
              <h3>Регистрация</h3>
              <span className="terms-card-line" aria-hidden="true" />
              <p>
                Регистрация на хакатон откроется в июне 2026 года. Чтобы не пропустить старт
                открытия, оставьте свой email в форме ниже.
              </p>
              <a className="terms-email-btn" href="#registration">
                <TermIcon name="mail" />
                Оставить email
              </a>
            </article>
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
