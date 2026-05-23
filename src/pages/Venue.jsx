function Venue() {
  return (
    <section className="page">
      <h1>Место проведения</h1>

      <div className="venue-block">
        <h2>Место проведения хакатона</h2>
        <p>
          НИИ МКМ и ФИИ РУДН
          <br />
          Хакатон пройдет на базе Научно-исследовательского института Молекулярной и
          клеточной медицины (НИИ МКМ) и Факультета искусственного интеллекта (ФИИ)
          РУДН.
        </p>
      </div>

      <div className="venue-addresses">
        <p>
          <strong>Адрес:</strong> Москва, Подольское ш., 8
        </p>
      </div>

      <div className="venue-links">
        <a
          className="venue-link-btn"
          href="https://yandex.com/maps/213/moscow/?ll=37.624749%2C55.714023&mode=poi&poi%5Bpoint%5D=37.623499%2C55.713930&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1346764685&z=17.6"
          target="_blank"
          rel="noopener noreferrer"
        >
          На Яндекс карте
        </a>
        <a
          className="venue-link-btn"
          href="https://2gis.ru/moscow/firm/70000001027607438/37.623499%2C55.713930?m=37.623499%2C55.713930%2F17.6"
          target="_blank"
          rel="noopener noreferrer"
        >
          На 2gis
        </a>
        <a
          className="venue-link-btn"
          href="https://yandex.com/maps/213/moscow/?ll=37.624749%2C55.714023&mode=poi&poi%5Bpoint%5D=37.623499%2C55.713930&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1346764685&z=17.6"
          target="_blank"
          rel="noopener noreferrer"
        >
          Открыть в браузере
        </a>
      </div>
    </section>
  );
}

export default Venue;
