function Registration() {
  return (
    <section className="page">
      <h1>Форма регистрации</h1>

      <form className="registration-form">
        <label>
          Имя
          <input type="text" placeholder="Введите имя" />
        </label>

        <label>
          Email
          <input type="email" placeholder="Введите email" />
        </label>

        <button type="submit">Отправить</button>
      </form>
    </section>
  );
}

export default Registration;