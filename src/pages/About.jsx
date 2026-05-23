import { useEffect, useRef } from "react";

const precisionStages = [
  {
    title: "Здоровье",
    icon: "cells",
    level: "Гомогенная популяция клеток",
    application: "Профилактические меры",
  },
  {
    title: "Заболевание",
    icon: "disease",
    level: "Идентичность и состояние клетки",
    application: "Раннее выявление и стратификация пациентов",
  },
  {
    title: "Прогрессирование",
    icon: "organs",
    level: "Тканевой уровень",
    application: "Мониторинг и прогноз",
  },
  {
    title: "Персонализированное лечение",
    icon: "patients",
    level: "Системный уровень",
    application: "Терапия следующего поколения",
  },
];

const scheduleDays = [
  {
    day: "День 1",
    title: "Открытие и знакомство",
    text: "Вводные лекции, знакомство с модераторами, проектами и формирование команд.",
  },
  {
    day: "День 2",
    title: "Командная работа",
    text: "Приглашённый доклад, работа над задачами, консультации с менторами.",
  },
  {
    day: "День 3",
    title: "Углублённая разработка",
    text: "Доработка решений, подготовка материалов и репетиция защиты.",
  },
  {
    day: "День 4",
    title: "Финальная защита",
    text: "Презентации проектов, выбор победителей, награждение и закрытие.",
  },
];

const whatIsMetrics = [
  { title: "4 дня", text: "интенсива" },
  { title: "Команды", text: "единомышленников" },
  { title: "Реальные", text: "научные задачи" },
  { title: "Призы", text: "и награды" },
];

const whatIsCards = [
  {
    icon: "bio",
    title: "Реальные научные задачи",
    text: "Работа с актуальными биомедицинскими данными и исследовательскими кейсами от экспертов.",
  },
  {
    icon: "team",
    title: "Команды единомышленников",
    text: "Междисциплинарные команды биологов, медиков, аналитиков данных и AI-специалистов.",
  },
  {
    icon: "code",
    title: "Практика и новые навыки",
    text: "Интенсивная работа, новые знания и инструменты на стыке биоинформатики и искусственного интеллекта.",
  },
  {
    icon: "award",
    title: "Защита проектов и награды",
    text: "Финальная защита проектов перед экспертным жюри и возможность получить классные призы.",
  },
];

const audienceCards = [
  {
    title: "Биологи и медики",
    icon: "bio",
    text: "Для тех, кто работает с биомедицинскими данными и хочет усилить аналитический стек.",
  },
  {
    title: "AI и Data Science",
    icon: "ai",
    text: "Для тех, кто умеет строить модели и хочет применять ML в медицине.",
  },
  {
    title: "Исследователи",
    icon: "research",
    text: "Для аспирантов и молодых учёных, которым важны новые коллаборации.",
  },
  {
    title: "Студенты",
    icon: "students",
    text: "Для студентов, которые хотят получить опыт командной проектной работы.",
  },
];

const participantBenefits = [
  "Работа с реальными биомедицинскими датасетами",
  "Командная работа и поддержка менторов",
  "Лекции и доклады приглашённых экспертов",
  "Практический опыт в bioinformatics и AI",
  "Финальная защита проектов и ценные призы",
  "Новые знакомства и профессиональное сообщество",
];

function PrecisionIllustration({ type }) {
  if (type === "cells") {
    return (
      <svg viewBox="0 0 140 80" role="img" aria-hidden="true">
        {[
          [28, 22],
          [54, 20],
          [80, 22],
          [106, 20],
          [36, 48],
          [62, 46],
          [88, 48],
        ].map(([x, y]) => (
          <g key={`${x}-${y}`}>
            <circle cx={x} cy={y} r="11" className="precision-svg-cell" />
            <circle cx={x + 1.5} cy={y + 0.5} r="3.8" className="precision-svg-cell-core" />
          </g>
        ))}
      </svg>
    );
  }

  if (type === "disease") {
    return (
      <svg viewBox="0 0 140 80" role="img" aria-hidden="true">
        {[
          [30, 23],
          [55, 20],
          [82, 24],
          [108, 22],
          [38, 48],
          [64, 46],
          [92, 50],
        ].map(([x, y]) => (
          <g key={`${x}-${y}`}>
            <circle cx={x} cy={y} r="11" className="precision-svg-cell" />
            <circle cx={x + 1.5} cy={y + 0.5} r="3.8" className="precision-svg-cell-core" />
          </g>
        ))}
        <path d="M24 56 L115 15" className="precision-svg-warning" />
        <path d="M28 16 L110 58" className="precision-svg-warning" />
      </svg>
    );
  }

  if (type === "organs") {
    return (
      <svg viewBox="0 0 140 80" role="img" aria-hidden="true">
        <path
          className="precision-svg-organ"
          d="M24 47 C20 33,32 20,49 22 C63 23,71 35,67 48 C62 62,34 61,24 47 Z"
        />
        <path
          className="precision-svg-organ"
          d="M77 26 C88 18,106 20,114 32 C120 41,114 54,102 58 C88 63,73 52,74 39 C74 33,75 29,77 26 Z"
        />
        <path
          className="precision-svg-organ-alt"
          d="M56 58 C58 50,66 46,74 49 C81 52,84 61,78 66 C70 73,55 68,56 58 Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 140 80" role="img" aria-hidden="true">
      {[32, 70, 108].map((x) => (
        <g key={x}>
          <circle cx={x} cy="25" r="8" className="precision-svg-person" />
          <rect x={x - 9} y="36" width="18" height="24" rx="7" className="precision-svg-person" />
        </g>
      ))}
    </svg>
  );
}

function AudienceIllustration({ type }) {
  if (type === "bio") {
    return (
      <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
        <path className="audience-svg-stroke" d="M22 12 L34 24" />
        <rect className="audience-svg-stroke" x="30" y="20" width="8" height="22" rx="2" />
        <path className="audience-svg-stroke" d="M24 50 H42" />
        <path className="audience-svg-stroke" d="M29 46 H37" />
        <circle className="audience-svg-dot" cx="23" cy="31" r="7" />
        <circle className="audience-svg-dot" cx="23" cy="31" r="3.2" />
      </svg>
    );
  }

  if (type === "ai") {
    return (
      <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
        <rect className="audience-svg-stroke" x="14" y="14" width="36" height="36" rx="8" />
        <circle className="audience-svg-dot" cx="24" cy="24" r="2.5" />
        <circle className="audience-svg-dot" cx="40" cy="24" r="2.5" />
        <circle className="audience-svg-dot" cx="24" cy="40" r="2.5" />
        <circle className="audience-svg-dot" cx="40" cy="40" r="2.5" />
        <path className="audience-svg-stroke" d="M24 24 L40 24 L40 40 L24 40 Z" />
      </svg>
    );
  }

  if (type === "research") {
    return (
      <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
        <path className="audience-svg-stroke" d="M14 20 L32 12 L50 20 L32 28 Z" />
        <path className="audience-svg-stroke" d="M20 26 V36 C20 42,44 42,44 36 V26" />
        <path className="audience-svg-stroke" d="M50 20 V34" />
        <circle className="audience-svg-dot" cx="50" cy="37" r="3" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
      <circle className="audience-svg-stroke" cx="24" cy="24" r="7" />
      <circle className="audience-svg-stroke" cx="40" cy="24" r="7" />
      <path className="audience-svg-stroke" d="M14 44 C14 36,22 34,28 34 C34 34,42 36,42 44" />
      <path className="audience-svg-stroke" d="M26 44 C26 36,34 34,40 34 C46 34,54 36,54 44" />
    </svg>
  );
}

function HackathonFeatureIllustration({ type }) {
  if (type === "bio") {
    return (
      <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
        <path className="facts-svg-stroke" d="M22 14 C36 16,48 28,44 42 C40 54,26 52,18 44 C10 36,10 20,22 14 Z" />
        <path className="facts-svg-stroke" d="M20 24 C28 28,34 34,38 42" />
        <circle className="facts-svg-dot" cx="22" cy="30" r="2.6" />
        <circle className="facts-svg-dot" cx="29" cy="36" r="2.6" />
      </svg>
    );
  }

  if (type === "team") {
    return (
      <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
        <circle className="facts-svg-stroke" cx="22" cy="24" r="6" />
        <circle className="facts-svg-stroke" cx="42" cy="24" r="6" />
        <circle className="facts-svg-stroke" cx="32" cy="18" r="5" />
        <path className="facts-svg-stroke" d="M14 44 C14 36,22 34,28 34 C34 34,42 36,42 44" />
        <path className="facts-svg-stroke" d="M24 44 C24 36,32 34,38 34 C44 34,52 36,52 44" />
      </svg>
    );
  }

  if (type === "code") {
    return (
      <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
        <path className="facts-svg-stroke" d="M24 20 L14 32 L24 44" />
        <path className="facts-svg-stroke" d="M40 20 L50 32 L40 44" />
        <path className="facts-svg-stroke" d="M36 16 L28 48" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" role="img" aria-hidden="true">
      <path className="facts-svg-stroke" d="M18 18 H46 V30 C46 38,40 44,32 44 C24 44,18 38,18 30 Z" />
      <path className="facts-svg-stroke" d="M24 14 H40" />
      <path className="facts-svg-stroke" d="M26 48 H38" />
      <path className="facts-svg-stroke" d="M32 44 V48" />
    </svg>
  );
}

function About() {
  const pageRef = useRef(null);

  useEffect(() => {
    const pageNode = pageRef.current;
    if (!pageNode) {
      return undefined;
    }

    const revealNodes = Array.from(pageNode.querySelectorAll(".scroll-reveal"));
    if (revealNodes.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.22 },
    );

    revealNodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={pageRef} className="page about-page">
      <div className="about-ambient" aria-hidden="true">
        <span className="about-ambient-blob about-ambient-blob-one" />
        <span className="about-ambient-blob about-ambient-blob-two" />
        <span className="about-ambient-blob about-ambient-blob-three" />
        <div className="about-ambient-dna about-ambient-dna-left">
          <svg viewBox="0 0 120 520" role="img" aria-hidden="true">
            <path
              className="about-ambient-dna-strand"
              d="M32 8 C92 48,92 112,32 152 C-20 188,-20 252,32 292 C92 332,92 396,32 436 C-20 472,-20 504,32 512"
            />
            <path
              className="about-ambient-dna-strand"
              d="M88 8 C28 48,28 112,88 152 C140 188,140 252,88 292 C28 332,28 396,88 436 C140 472,140 504,88 512"
            />
            {[48, 84, 120, 156, 192, 228, 264, 300, 336, 372, 408, 444, 480].map((y) => (
              <line key={y} x1="38" y1={y} x2="82" y2={y + 16} className="about-ambient-dna-rung" />
            ))}
            {[24, 88, 152, 216, 280, 344, 408, 472].map((y) => (
              <circle key={`a-${y}`} cx="32" cy={y} r="3" className="about-ambient-dna-node" />
            ))}
            {[56, 120, 184, 248, 312, 376, 440, 504].map((y) => (
              <circle key={`b-${y}`} cx="88" cy={y} r="3" className="about-ambient-dna-node" />
            ))}
          </svg>
        </div>
        <div className="about-ambient-dna about-ambient-dna-right">
          <svg viewBox="0 0 120 520" role="img" aria-hidden="true">
            <path
              className="about-ambient-dna-strand"
              d="M32 8 C92 48,92 112,32 152 C-20 188,-20 252,32 292 C92 332,92 396,32 436 C-20 472,-20 504,32 512"
            />
            <path
              className="about-ambient-dna-strand"
              d="M88 8 C28 48,28 112,88 152 C140 188,140 252,88 292 C28 332,28 396,88 436 C140 472,140 504,88 512"
            />
            {[48, 84, 120, 156, 192, 228, 264, 300, 336, 372, 408, 444, 480].map((y) => (
              <line key={y} x1="38" y1={y} x2="82" y2={y + 16} className="about-ambient-dna-rung" />
            ))}
            {[24, 88, 152, 216, 280, 344, 408, 472].map((y) => (
              <circle key={`c-${y}`} cx="32" cy={y} r="3" className="about-ambient-dna-node" />
            ))}
            {[56, 120, 184, 248, 312, 376, 440, 504].map((y) => (
              <circle key={`d-${y}`} cx="88" cy={y} r="3" className="about-ambient-dna-node" />
            ))}
          </svg>
        </div>
      </div>

      <div className="about-hero scroll-reveal">
        <div className="about-hero-bg" aria-hidden="true">
          <span className="about-hero-glow about-hero-glow-one" />
          <span className="about-hero-glow about-hero-glow-two" />
          <span className="about-hero-dna about-hero-dna-one" />
          <span className="about-hero-dna about-hero-dna-two" />
        </div>

        <h1>О хакатоне</h1>
        <p>
          Междисциплинарный хакатон по биоинформатике, single-cell omics и
          искусственному интеллекту.
        </p>
        <p className="about-hero-lead">
          Объединяем биологов, исследователей, аналитиков данных и AI-специалистов
          для решения реальных задач медицины будущего.
        </p>
      </div>

      <section className="about-section about-facts scroll-reveal">
        <div className="about-facts-head">
          <div className="about-facts-copy">
            <h2>Что такое хакатон</h2>
            <p>
              Хакатон «Омики единичных клеток и искусственный интеллект для
              прецизионной медицины» — это 4-дневный интенсив, где команды работают
              над реальными научными кейсами на стыке биологии, медицины и машинного
              обучения.
            </p>
            <div className="about-facts-metrics">
              {whatIsMetrics.map((item) => (
                <article key={item.title} className="about-facts-metric">
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </article>
              ))}
            </div>
          </div>
          <section className="about-facts-visual cell-visual" aria-hidden="true">
            <div className="cell-cluster">
              <span className="cell cell-1" />
              <span className="cell cell-2" />
              <span className="cell cell-3" />
              <span className="cell cell-4" />
              <span className="cell cell-5" />
              <span className="cell cell-6" />
            </div>

            <div className="hud-corner top-left" />
            <div className="hud-corner top-right" />

            <div className="hud-cross horizontal" />
            <div className="hud-cross vertical" />

            <div className="hud-text">
              SINGLE-CELL VIEW
              <br />
              RESOLUTION 0.8μm
              <br />
              CH 1 / 2 / 3
            </div>

            <div className="magnifier">
              <div className="magnifier-inner" />
            </div>

            <div className="scale">
              <span />
              <span />
              <span />
              <span />
            </div>
          </section>
        </div>

        <div className="about-facts-feature-grid">
          {whatIsCards.map((item, index) => (
            <article key={item.title} className="about-facts-feature-card">
              <div className="about-facts-feature-top">
                <div className="about-facts-feature-icon" aria-hidden="true">
                  <HackathonFeatureIllustration type={item.icon} />
                </div>
                <span className="about-facts-feature-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section schedule-block scroll-reveal">
        <h2>Расписание</h2>
        <p className="schedule-goal">
          <strong>Цель хакатона:</strong> разработка подходов прецизионной медицины с
          использованием single-cell omics и искусственного интеллекта.
        </p>

        <div className="schedule-days">
          {scheduleDays.map((day, index) => (
            <article key={day.day} className="schedule-day-card">
              <span className="schedule-index">{index + 1}</span>
              <p className="schedule-day-label">{day.day}</p>
              <h3 className="schedule-day-title">{day.title}</h3>
              <p className="schedule-day-text">{day.text}</p>
            </article>
          ))}
        </div>

        <div className="schedule-members">
          <p>
            <strong>Участники:</strong>
          </p>
          <ul>
            <li>Студенты, аспиранты и сотрудники научных и образовательных учреждений.</li>
            <li>7 команд по 5 человек, всего 35 участников.</li>
          </ul>
        </div>
      </section>

      <section className="about-section precision-map scroll-reveal">
        <h2>Карта прецизионной медицины</h2>
        <p className="precision-caption">
          Схема показывает путь от анализа отдельных клеток к персонализированным
          стратегиям лечения.
        </p>

        <div className="precision-layout">
          <aside className="precision-organization" aria-label="Уровни организации">
            <p className="precision-organization-title">Уровень организации</p>
            <div className="precision-org-diagram">
              <svg
                className="precision-org-lines"
                viewBox="0 0 200 150"
                role="img"
                aria-hidden="true"
              >
                <line x1="100" y1="38" x2="46" y2="104" />
                <line x1="100" y1="38" x2="154" y2="104" />
                <line x1="46" y1="104" x2="154" y2="104" />
              </svg>
              <span className="precision-org-node precision-org-node-cell">Клетка</span>
              <span className="precision-org-node precision-org-node-tissue">Ткань</span>
              <span className="precision-org-node precision-org-node-organism">Организм</span>
            </div>
          </aside>

          <div className="precision-grid">
            {precisionStages.map((stage, index) => (
              <article key={stage.title} className="precision-stage">
                <p className="precision-stage-title">{stage.title}</p>
                <div className={`precision-illustration precision-illustration-${stage.icon}`}>
                  <PrecisionIllustration type={stage.icon} />
                </div>
                <div className="precision-node">
                  <span>{index + 1}</span>
                </div>
                <p className="precision-stage-level">{stage.level}</p>
                <p className="precision-stage-application">{stage.application}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section audience-grid scroll-reveal">
        <h2>Для кого хакатон</h2>
        <div className="about-cards">
          {audienceCards.map((card) => (
            <article key={card.title} className="about-card">
              <div className="audience-icon" aria-hidden="true">
                <AudienceIllustration type={card.icon} />
              </div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section impact-section scroll-reveal">
        <h2>Почему это важно</h2>
        <div className="impact-layout">
          <ul>
            <li>Single-cell omics позволяет видеть гетерогенность тканей на уровне клеток.</li>
            <li>AI помогает находить скрытые закономерности и потенциальные биомаркеры.</li>
            <li>Прецизионная медицина ведёт к более точной диагностике и терапии.</li>
          </ul>
          <div className="impact-note">
            Комбинация омиксных данных и AI формирует новую инфраструктуру
            биомедицинских исследований и клинических решений.
          </div>
        </div>
      </section>
      <section className="about-section benefits-section scroll-reveal">
        <h2>Что ждёт участников</h2>
        <div className="about-pill-grid benefits-grid">
          {participantBenefits.map((item) => (
            <div key={item} className="about-pill-card">
              {item}
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

export default About;
