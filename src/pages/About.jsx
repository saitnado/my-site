import { useEffect, useRef } from "react";

const precisionStages = [
  {
    title: "Health",
    level: "Гомогенная популяция клеток",
    application: "Профилактические меры",
  },
  {
    title: "Disease",
    level: "Идентичность и состояние клетки",
    application: "Раннее выявление и стратификация пациентов",
  },
  {
    title: "Disease Progression",
    level: "Тканевой уровень",
    application: "Мониторинг и прогноз",
  },
  {
    title: "Personalized Treatments",
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

const whatIsCards = [
  "Реальные научные задачи",
  "Команды единомышленников",
  "Практика и новые навыки",
  "Защита проектов и награды",
];

const audienceCards = [
  {
    title: "Биологи и медики",
    text: "Для тех, кто работает с биомедицинскими данными и хочет усилить аналитический стек.",
  },
  {
    title: "AI и Data Science",
    text: "Для тех, кто умеет строить модели и хочет применять ML в медицине.",
  },
  {
    title: "Исследователи",
    text: "Для аспирантов и молодых учёных, которым важны новые коллаборации.",
  },
  {
    title: "Студенты",
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

      <section className="about-section precision-map scroll-reveal">
        <h2>Карта Precision Medicine</h2>
        <p className="precision-caption">
          Схема показывает путь от анализа отдельных клеток к персонализированным
          стратегиям лечения.
        </p>
        <div className="precision-grid">
          {precisionStages.map((stage, index) => (
            <article key={stage.title} className="precision-stage">
              <p className="precision-stage-title">{stage.title}</p>
              <div className="precision-node">
                <span>{index + 1}</span>
              </div>
              <p className="precision-stage-level">{stage.level}</p>
              <p className="precision-stage-application">{stage.application}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section about-facts scroll-reveal">
        <h2>Что такое хакатон</h2>
        <p>
          Хакатон «Омики единичных клеток и искусственный интеллект для прецизионной
          медицины» — это 4-дневный интенсив, где команды работают над реальными
          научными кейсами на стыке биологии, медицины и машинного обучения.
        </p>
        <div className="about-pill-grid">
          {whatIsCards.map((item) => (
            <div key={item} className="about-pill-card">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="about-section audience-grid scroll-reveal">
        <h2>Для кого хакатон</h2>
        <div className="about-cards">
          {audienceCards.map((card) => (
            <article key={card.title} className="about-card">
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
