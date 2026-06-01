import { useState } from "react";
import "./App.css";

const navItems = [
  { id: "about", label: "О хакатоне" },
  { id: "audience", label: "Для кого" },
  { id: "tracks", label: "Направления" },
  { id: "program", label: "Программа" },
  { id: "lecturers", label: "Лекторы" },
  { id: "venue", label: "Место" },
  { id: "faq", label: "FAQ" },
];

const chips = ["Биоинформатика", "Single-cell данные", "AI и ML", "Прецизионная медицина"];

const stats = [
  { value: "48", caption: "часов нон-стоп разработки" },
  { value: "3-5", caption: "человек в команде" },
  { value: "25+", caption: "экспертов и менторов" },
  { value: "6", caption: "проектных направлений" },
];

const audience = [
  {
    title: "Аналитики данных",
    text: "Работайте с биомедицинскими данными и создавайте надежные модели.",
  },
  {
    title: "Биоинформатики",
    text: "Применяйте свои знания для решения реальных биомедицинских задач.",
  },
  {
    title: "Студенты и исследователи",
    text: "Получайте новый опыт, находите единомышленников и развивайте проекты.",
  },
  {
    title: "Разработчики и инженеры",
    text: "Создавайте инструменты и сервисы для медицины будущего.",
  },
];

const tracks = [
  {
    id: "01",
    title: "Анализ single-cell данных",
    text: "Выделение типов клеток, траекторий и маркеров.",
  },
  {
    id: "02",
    title: "Биомаркеры",
    text: "Выявление и валидация новых молекулярных маркеров.",
  },
  {
    id: "03",
    title: "Прогнозирование и модели",
    text: "Прогнозирование ответов на терапию и исходов.",
  },
  {
    id: "04",
    title: "Диагностика и скрининг",
    text: "Разработка алгоритмов для ранней диагностики и скрининга.",
  },
  {
    id: "05",
    title: "Мультимодальные данные",
    text: "Интеграция геномных, транскриптомных и клинических данных.",
  },
  {
    id: "06",
    title: "Инструменты и платформы",
    text: "Создание утилит, пайплайнов и визуализаций для биомедицины.",
  },
];

const timeline = [
  {
    title: "Регистрация",
    text: "Соберите команду и подайте заявку на участие.",
  },
  {
    title: "Открытие и брифинг",
    text: "Знакомство, представление задач и формирование команд.",
  },
  {
    title: "48 часов разработки",
    text: "Работа над проектами с поддержкой экспертов и менторов.",
  },
  {
    title: "Финал и награждение",
    text: "Презентации проектов и объявление победителей.",
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
        <a className="brand" href="#top" aria-label="BioHakaton 2026">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </span>
          <span>
            BioHakaton
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
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="btn btn-header" href="#registration">
          Участвовать →
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
            <div className="cell cell-a" />
            <div className="cell cell-b" />
            <div className="cell cell-c" />
            <div className="network-line line-a" />
            <div className="network-line line-b" />
            <div className="network-line line-c" />
            <div className="dot-cluster" />
            <div className="grid-overlay" />
          </div>
        </section>

        <section id="about" className="section-light about">
          <div className="section-head">
            <h2>О хакатоне</h2>
            <p>
              BioHakaton 2026 - это интенсивные 48 часов, где участники объединяются для решения
              задач биоинформатики, single-cell данных, искусственного интеллекта и прецизионной
              медицины.
            </p>
          </div>
          <div className="stats-grid">
            {stats.map((item) => (
              <article key={item.caption} className="stat-card">
                <strong>{item.value}</strong>
                <span>{item.caption}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="audience" className="section-light">
          <div className="section-head compact">
            <h2>Для кого</h2>
          </div>
          <div className="audience-grid">
            {audience.map((item) => (
              <article key={item.title} className="audience-card">
                <div className="mini-icon" aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="tracks" className="section-dark">
          <div className="section-head compact on-dark">
            <h2>Направления проектов</h2>
          </div>
          <div className="tracks-grid">
            {tracks.map((item) => (
              <article key={item.id} className="track-card">
                <span className="track-id">{item.id}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="program" className="section-light timeline-section">
          <div className="section-head compact">
            <h2>Как все пройдет</h2>
          </div>
          <div className="timeline">
            {timeline.map((item, index) => (
              <article key={item.title} className="timeline-card">
                <span>{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="lecturers" className="section-dark">
          <div className="section-head compact on-dark">
            <h2>Приглашенные лекторы</h2>
          </div>
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
        </section>

        <section className="section-light">
          <div className="section-head compact">
            <h2>Модераторы</h2>
          </div>
          <div className="moderators-grid">
            {moderators.map((moderator) => (
              <article key={moderator} className="moderator-card">
                {moderator}
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="section-light terms-section">
          <div className="section-head compact">
            <h2>Условия участия</h2>
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

        <section id="registration" className="section-dark cta">
          <div>
            <h2>Хотите участвовать?</h2>
            <p>
              Соберите команду и подайте заявку прямо сейчас. Количество мест ограничено.
            </p>
            <a className="btn btn-primary" href="#">
              Зарегистрироваться →
            </a>
          </div>
          <div className="cta-decor" aria-hidden="true" />
        </section>
      </main>

      <footer className="site-footer section-dark">
        <div className="footer-top">
          <p className="footer-brand">BioHakaton 2026</p>
          <p>48 часов для идей, которые меняют медицину.</p>
          <div className="socials">
            <a href="#">Telegram</a>
            <a href="#">VK</a>
            <a href="#">GitHub</a>
          </div>
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
