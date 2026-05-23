function Home() {
  const portalNavigate = (event, target, hash) => {
    event.preventDefault();
    window.dispatchEvent(new CustomEvent("portal:navigate", { detail: { target, hash } }));
  };

  return (
    <div className="home-page">
      <section className="hero home-hero">
        <div className="hero-bg" aria-hidden="true">
          <span className="hero-orb hero-orb-1"></span>
          <span className="hero-orb hero-orb-2"></span>
          <span className="hero-orb hero-orb-3"></span>
          <span className="hero-neural hero-neural-1"></span>
          <span className="hero-neural hero-neural-2"></span>
          <span className="hero-neural hero-neural-3"></span>
          <span className="hero-cell hero-cell-1"></span>
          <span className="hero-cell hero-cell-2"></span>
          <span className="hero-cell hero-cell-3"></span>
        </div>

        <div className="home-hero-grid">
          <div className="home-hero-copy">
            <p className="home-chip">10-13 октября 2026 • Москва</p>
            <h1>Омики единичных клеток и искусственный интеллект для прецизионной медицины</h1>
            <p className="home-subtitle">(хакатон по биоинформатике)</p>
            <p className="home-description">
              Объединяем биологов, исследователей, аналитиков данных и AI-специалистов
              для решения реальных задач медицины будущего.
            </p>
            <div className="home-hero-actions">
              <a
                href="/#registration"
                className="home-btn home-btn-primary"
                onClick={(e) => portalNavigate(e, "/", "#registration")}
              >
                Подать заявку
              </a>
              <a
                href="/about"
                className="home-btn home-btn-ghost"
                onClick={(e) => portalNavigate(e, "/about")}
              >
                Узнать больше
              </a>
            </div>
          </div>

          <div className="home-hero-visual" aria-hidden="true">
            <div className="cell-main"></div>
            <div className="cell-mini cell-mini-1"></div>
            <div className="cell-mini cell-mini-2"></div>
            <div className="hero-tag">
              <p>Single-cell omics</p>
              <p>AI / Machine Learning</p>
              <p>Bioinformatics</p>
              <p>Precision Medicine</p>
            </div>
          </div>
        </div>

        <div className="home-stats">
          <article><strong>35</strong><span>Участников</span></article>
          <article><strong>7</strong><span>Команд</span></article>
          <article><strong>4</strong><span>Дня интенсива</span></article>
          <article><strong>10+</strong><span>Экспертов</span></article>
        </div>
      </section>

      <section className="registration" id="registration">
        <div className="registration-card registration-card-home">
          <h2>Зарегистрируйтесь для участия</h2>
          <p>Оставьте заявку, и мы свяжемся с вами с дополнительной информацией.</p>

          <form className="registration-form registration-grid-form">
            <label>
              Имя
              <input type="text" name="fullName" placeholder="Ваше имя" />
            </label>

            <label>
              Email
              <input type="email" name="email" placeholder="example@mail.ru" />
            </label>

            <label>
              Направление / Специализация
              <input type="text" name="track" placeholder="Биоинформатика, AI, Биология..." />
            </label>

            <label>
              Статус
              <select name="status" defaultValue="student">
                <option value="student">Студент</option>
                <option value="researcher">Исследователь</option>
                <option value="specialist">Специалист</option>
              </select>
            </label>

            <label className="registration-wide">
              О себе (кратко)
              <textarea name="experience" rows="4" placeholder="Расскажите о себе и вашем опыте..."></textarea>
            </label>

            <div className="registration-submit-wrap">
              <button type="submit">Отправить заявку</button>
            </div>
          </form>
        </div>
      </section>

      <section className="partners-section">
        <h2>Наши партнеры</h2>
        <div className="partners-grid">
          <article className="partner-card">
            <div className="partner-media">
              <img
                className="partner-logo partner-logo-biomedhub"
                src="/partners/biomedhub-rudn.png"
                alt="НИИ молекулярной и клеточной медицины biomedhub / RUDN"
              />
            </div>
          </article>
          <article className="partner-card">
            <div className="partner-media">
              <img
                className="partner-logo partner-logo-rudn"
                src="/partners/rudn-ai-faculty.png"
                alt="РУДН Факультет искусственного интеллекта"
              />
            </div>
          </article>
          <article className="partner-card">
            <div className="partner-media">
              <img
                className="partner-logo partner-logo-asca"
                src="/partners/asca.png"
                alt="Association for Single Cell Analysis"
              />
            </div>
          </article>
        </div>
      </section>

      <section className="home-values">
        <article>
          <h3>Single-cell omics</h3>
          <p>Исследуем сложные биологические системы на уровне отдельных клеток</p>
        </article>
        <article>
          <h3>Искусственный интеллект</h3>
          <p>Применяем современные алгоритмы для извлечения новых знаний из данных</p>
        </article>
        <article>
          <h3>Прецизионная медицина</h3>
          <p>Находим биомаркеры и мишени для персонализированной терапии</p>
        </article>
        <article>
          <h3>Командная работа</h3>
          <p>Объединяем экспертизу разных областей для создания инновационных решений</p>
        </article>
      </section>
    </div>
  );
}

export default Home;

