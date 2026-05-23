function Terms() {
  return (
    <section className="page terms-page">
      <div className="terms-document">
        <div className="terms-heading">
          <h1>Условия проведения</h1>
        </div>

        <div className="terms-section terms-section-primary">
          <h2>Требования для участников</h2>

          <h3>Обязательные компетенции:</h3>

          <div className="terms-skill-grid">
            <p>
              <strong>Python или R:</strong> уверенное чтение кода, работа с базовыми
              библиотеками для анализа биологических данных.
            </p>

            <p>
              <strong>Работа с базами данных:</strong> умение находить записи в NCBI
              (Entrez), UniProt по ID; поиск датасетов в GEO, Zenodo. Знание
              веб-инструментов для анализа биомедицинских данных.
            </p>

            <p>
              <strong>Анализ данных:</strong> опыт статистического анализа
              биомедицинских данных: геномных, транскриптомных, больших клинических
              данных.
            </p>

            <p>
              <strong>Биологическая интерпретация:</strong> умение интерпретировать
              результаты анализа, биологическое образование или опыт участия в
              биологических исследованиях.
            </p>

            <p>
              <strong>Машинное обучение:</strong> знание базовых инструментов ML.
            </p>
          </div>

          <div className="terms-advantage">
            <h3>Будет преимуществом:</h3>

            <ul>
              <li>Опыт анализа данных single-cell RNA-seq.</li>
              <li>
                Продвинутые знания в ML/AI: опыт создания и обучения deep learning
                моделей — autoencoders, VAEs, transformers — для работы с
                биологическими данными.
              </li>
            </ul>
          </div>

          <p className="terms-note">
            <strong>Важно:</strong> мы не ожидаем от вас экспертного уровня во всём
            сразу. Главное — желание разбираться в задачах на стыке биологии и
            анализа данных.
          </p>
        </div>

        <div className="terms-section">
          <h2>Информация о призах</h2>

          <p>
            Команды-победители будут отмечены денежными призами. Каждый участник
            получит сертификат и памятный подарок.
          </p>
        </div>

        <div className="terms-registration">
          <div className="terms-cta-row">
            <a className="register-button" href="/#registration">
              Регистрация участников
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Terms;
