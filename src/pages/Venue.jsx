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
        <p>
          <strong>Адрес:</strong> Санкт-Петербург, Общественно-деловое пространство SENO
        </p>
      </div>

      <div className="venue-links">
        <a
          className="venue-link-btn"
          href="https://yandex.com/maps/213/moscow/house/podolskoye_shosse_8/Z04YcAVkSkQOQFtvfXtwdXhlYQ==/?ll=37.624319%2C55.714465&z=17.19"
          target="_blank"
          rel="noopener noreferrer"
        >
          На Яндекс карте
        </a>
        <a
          className="venue-link-btn"
          href="https://2gis.ru/moscow/firm/4504128908656437/37.623341%2C55.713966?m=37.623788%2C55.714115%2F18.71"
          target="_blank"
          rel="noopener noreferrer"
        >
          На 2gis
        </a>
        <a
          className="venue-link-btn"
          href="https://yandex.com/maps/213/moscow/house/podolskoye_shosse_8/Z04YcAVkSkQOQFtvfXtwdXhlYQ==/?ll=37.624319%2C55.714465&z=17.19"
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
