function Home() {
  return (
    <section className="hero">
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

      <div className="hero-panel">
        <p className="hero-kicker">ОМИКИ ЕДИНИЧНЫХ КЛЕТОК • AI • ПРЕЦИЗИОННАЯ МЕДИЦИНА</p>
        <h1>Хакатон для тех, кто строит медицину будущего</h1>
        <p className="hero-subtitle">
          Междисциплинарная лаборатория идей: биоинформатика, single-cell анализ и
          искусственный интеллект в реальных научных кейсах.
        </p>
      </div>
    </section>
  );
}

export default Home;
