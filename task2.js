// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

ocument.addEventListener("DOMContentLoaded", () => {
  const userNameInput = document.getElementById("userNameInput");
  const getUserButton = document.getElementById("getUserButton");
  const userCitySpan = document.getElementById("userCity");
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  async function findUserCity() {
    const nameToSearch = userNameInput.value.trim();

    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`Помилка HTTP: ${response.status}`);
      }

      const users = await response.json();

      const foundUser = users.find(
        (user) => user.name.toLowerCase() === nameToSearch.toLowerCase()
      );

      if (foundUser) {
        userCitySpan.textContent =
          foundUser.address?.city || "Місто не вказано";
      } else {
        userCitySpan.textContent = "Користувача не знайдено.";
      }
    } catch (error) {
      console.error("Помилка під час отримання даних:", error);
      userCitySpan.textContent = "Не вдалося завантажити дані.";
    }
  }

  getUserButton.addEventListener("click", findUserCity);
});
