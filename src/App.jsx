import { useState } from "react";
import logo from "./assets/logo.png";
import { useEffect, useRef } from "react";
import {
  IconArrowRight,
  IconBrain,
  IconBrandPython,
  IconCalendarEvent,
  IconChartBar,
  IconChevronDown,
  IconClipboardList,
  IconClockHour4,
  IconCompass,
  IconDatabase,
  IconDna2,
  IconFlag,
  IconMail,
  IconMapPin,
  IconMenu2,
  IconPresentation,
  IconSchool,
  IconShield,
  IconStar,
  IconTargetArrow,
  IconTrophy,
  IconUsersGroup,
  IconUserStar,
} from "@tabler/icons-react";
import heroGifVideo from "./assets/gif.MP4";
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

const chips = [
  "Биоинформатика",
  "Данные единичных клеток",
  "AI и ML",
  "Прецизионная медицина",
];

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

const stats = [
  { value: "72", caption: "часа\nкомандной работы", icon: "time" },
  { value: "3-5", caption: "человек\nв команде", icon: "team" },
  { value: "25+", caption: "экспертов\nи менторов", icon: "cap" },
  { value: "6", caption: "проектных\nнаправлений", icon: "compass" },
];

const hackathonDays = [
  {
    day: "День 1",
    text: "Открытие, две вводные лекции, пленарный доклад, знакомство с модераторами и проектами, формирование команд, командная работа",
  },
  {
    day: "День 2",
    text: "Пленарный доклад, продолжение командной работы",
  },
  {
    day: "День 3",
    text: "Пленарный доклад, продолжение командной работы",
  },
  {
    day: "День 4",
    text: "Приглашённый доклад, продолжение командной работы",
  },
  {
    day: "День 5",
    text: "Защита проектов, определение победителей, награждение, закрытие",
  },
];

const lecturers = [
  {
    name: "Евгений Денисов",
    image: "/partners/lectors/Evgeny_Denisov.png",
    role: "Доктор биологических наук, профессор РАН, заместитель директора по научной работе НИИ онкологии Томского НИМЦ, зав. лабораторией биологии опухолевой прогрессии НИИ онкологии Томского НИМЦ, зав. лабораторией биологии единичных клеток НИИ молекулярной и клеточной медицины Медицинского института РУДН",
    location: "Томск, Москва",
    tags: ["Онкология", "Single-cell", "Опухолевая прогрессия"],
  },
  {
    name: "Антон Поддубский",
    image: "/partners/lectors/Anton_Poddubsky.png",
    role: "Кандидат технических наук, директор Факультета искусственного интеллекта РУДН",
    location: "Москва",
    tags: ["Искусственный интеллект", "ФИИ РУДН", "AI-образование"],
  },
  {
    name: "Иван Тюкин",
    image: "/partners/lectors/Ivan_Tyukin.png",
    role: "Доктор технических наук, Сколковский институт науки и технологий (Сколтех), РУДН",
    location: "Москва",
    tags: ["Искусственный интеллект", "Сколтех", "РУДН"],
  },
  {
    name: "Александр Яневски",
    image: "/partners/lectors/Alexander_Yanevsky.png",
    role: "PhD, Assistant Professor, Европейский университет Санкт-Петербурга / University of Helsinki",
    location: "Санкт-Петербург",
    tags: ["Computational Biology", "Cell diagnostics", "EUSP"],
  },
  {
    name: "Johnny Yu",
    image: "/partners/lectors/Johnny_Yu.png",
    role: "PhD, Chief Scientific Officer & сооснователь, Tahoe Therapeutics",
    location: "San Francisco, USA",
    tags: ["Precision Medicine", "Biotech", "Drug discovery"],
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
    image: "/partners/moderators/Alexander_Ikonnikov.jpg",
    role: "младший научный сотрудник лаборатории биологии единичных клеток НИИ молекулярной и клеточной медицины РУДН",
    location: "Москва",
    initials: "АИ",
    tags: ["Редкие заболевания", "Терапевтические мишени", "Single-cell"],
  },
  {
    name: "Артем Торопов",
    image: "/partners/moderators/Artem_Tropov.jpg",
    role: "стажёр-исследователь лаборатории биологии единичных клеток НИИ молекулярной и клеточной медицины РУДН",
    location: "Москва",
    tags: ["Саркомы", "Персонализация терапии", "Single-cell"],
  },
  {
    name: "Павел Ямщиков",
    image: "/partners/moderators/Pavel_Yamshchikov.png",
    role: "специалист в области биоинформатики лаборатории биологии опухолевой прогрессии НИИ онкологии Томского НИМЦ",
    location: "Томск",
    tags: ["Биоинформатика", "Онкология", "Прогностические факторы"],
  },
  {
    name: "Александр Яневски",
    image: "/partners/moderators/Alexander_Yanevsky.png",
    role: "PhD, Assistant Professor, Европейский университет Санкт-Петербурга / University of Helsinki",
    location: "Санкт-Петербург",
    tags: ["Computational Biology", "Differential diagnostics", "EUSP"],
  },
  {
    name: "Вера Субракова",
    image: "/partners/moderators/Vera_Subrakova.jpg",
    role: "специалист в области биоинформатики лаборатории биологии опухолевой прогрессии НИИ онкологии Томского НИМЦ",
    location: "Томск",
    tags: ["Биоинформатика", "Клеточная пластичность", "Онкология"],
  },
  {
    name: "Полина Козлова",
    image: "/partners/moderators/Polina_Kozlova.jpg",
    role: "специалист в области биоинформатики лаборатории биологии опухолевой прогрессии НИИ онкологии Томского НИМЦ",
    location: "Томск",
    tags: ["Биоинформатика", "Клеточная пластичность", "Терапевтический ответ"],
  },
  {
    name: "Кирилл Кириленко",
    image: "/partners/moderators/Kirill_Kirilenko.jpg",
    role: "специалист в области биоинформатики лаборатории биологии опухолевой прогрессии НИИ онкологии Томского НИМЦ",
    location: "Томск",
    tags: ["Биоинформатика", "Иммунное профилирование", "Эпитопы"],
  },
  {
    name: "Семён Куприянов",
    image: "/partners/moderators/Semyon_Kupriyanov.jpg",
    role: "специалист в области биоинформатики лаборатории биологии опухолевой прогрессии НИИ онкологии Томского НИМЦ",
    location: "Томск",
    tags: ["Биоинформатика", "Иммунология", "Патологии человека"],
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

const iconMap = {
  brain: IconBrain,
  calendar: IconCalendarEvent,
  cap: IconSchool,
  chart: IconChartBar,
  clipboard: IconClipboardList,
  compass: IconCompass,
  database: IconDatabase,
  dna: IconDna2,
  flag: IconFlag,
  mail: IconMail,
  python: IconBrandPython,
  shield: IconShield,
  star: IconStar,
  target: IconTargetArrow,
  team: IconUsersGroup,
  time: IconClockHour4,
  trophy: IconTrophy,
};

function TermIcon({ name }) {
  const Icon = iconMap[name];

  return Icon ? <Icon aria-hidden="true" /> : null;
}

function App() {
  const heroRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

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
          <IconArrowRight aria-hidden="true" />
        </a>
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
              <span className="hero-title-main">Хакатомикс</span>
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
              <a className="btn btn-primary" href="#registration">
                Участвовать
                <IconArrowRight aria-hidden="true" />
              </a>
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
        </section>

        <section id="projects" className="section-dark projects-section">
          <div className="section-head compact on-dark">
            <h2>Проекты</h2>
          </div>
        </section>

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

        <section id="registration" className="section-dark registration-section">
          <div className="registration-copy">
            <span className="registration-icon" aria-hidden="true">
              <TermIcon name="mail" />
            </span>
            <div>
              <h2>Не пропустите старт регистрации</h2>
              <p>
                Оставьте email, и мы напомним, когда откроется регистрация на хакатон в июне 2026
                года.
              </p>
            </div>
          </div>
          <form className="registration-form" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="registration-email">
              Email
            </label>
            <input id="registration-email" type="email" placeholder="Ваш email" required />
            <button type="submit">Оставить email</button>
          </form>
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

        <section id="news" className="section-light news-section">
          <div className="section-head compact">
            <h2>Новости</h2>
          </div>
        </section>

      </main>

      <footer id="contacts" className="site-footer section-dark">
        <div className="footer-top">
          <p className="footer-brand">Хакатомикс 2026</p>
          <p>10-14 октября, 72 часа для идей, которые меняют медицину.</p>
          <div className="socials">
            <a href="#">Telegram</a>
            <a href="#">VK</a>
            <a href="#">GitHub</a>
          </div>
          <a className="btn btn-primary footer-registration" href="#registration">
            Зарегистрироваться <IconArrowRight aria-hidden="true" />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© Хакатомикс 2026</span>
          <a href="#">Контакты</a>
          <a href="#">Политика конфиденциальности</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
