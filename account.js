// Функція, яка буде виконуватись при натисканні на посилання "Мої оголошення"
function handleMyAdsClick() {
    // Ваш код для обробки натискання на "Мої оголошення" тут
    console.log("Мої оголошення");
  }

  // Функція, яка буде виконуватись при натисканні на посилання "Мої замовлення"
  function handleMyOrdersClick() {
    // Ваш код для обробки натискання на "Мої замовлення" тут
    console.log("Мої замовлення");
  }

  // Функція, яка буде виконуватись при натисканні на посилання "Редагувати профіль"
  function handleEditProfileClick() {
    // Ваш код для обробки натискання на "Редагувати профіль" тут
    console.log("Редагувати профіль");
  }

  // Функція, яка буде виконуватись при натисканні на посилання "Змінити пароль"
  function handleChangePasswordClick() {
    // Ваш код для обробки натискання на "Змінити пароль" тут
    console.log("Змінити пароль");
  }

  // Функція, яка буде виконуватись при натисканні на посилання "Вийти"
  function handleLogoutClick() {
    // Ваш код для обробки натискання на "Вийти" тут
    console.log("Вийти");
  }

  // Додаємо обробники подій до посилань
  document.querySelector('a[href="#"]').addEventListener('click', handleMyAdsClick);
  document.querySelector('a[href="#"]').addEventListener('click', handleMyOrdersClick);
  document.querySelector('a[href="#"]').addEventListener('click', handleEditProfileClick);
  document.querySelector('a[href="#"]').addEventListener('click', handleChangePasswordClick);
  document.querySelector('a[href="#"]').addEventListener('click', handleLogoutClick);