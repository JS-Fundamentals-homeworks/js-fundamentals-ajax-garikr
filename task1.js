// Завдання: отримання даних про користувачів 
// За допомогою засобі Fetch отримати інформацію про користувачів
// за посиланням - https://jsonplaceholder.typicode.com/users 
// Імена користувачів відобразити в ненумерованому списку ul.usersList,
// який створений у файлі index.html
// Запустити програму за допомогою Live Server
// Перевірити за допомогою команди npm tests/task1.test.js 
document.addEventListener("DOMContentLoaded", () => {
  const userListElement = document.querySelector(".usersList");

  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  async function fetchUsers() {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const users = await response.json();
      userListElement.innerHTML = "";

      users.forEach((user) => {
        const listItem = document.createElement("li");
        listItem.textContent = user.name;

        userListElement.appendChild(listItem);
      });
    } catch (error) {
      console.error("Failed to fetch users:", error);
      userListElement.innerHTML = "<li>Failed to load user data.</li>";
      if (userListElement.firstChild) {
        userListElement.firstChild.style.color = "red";
      }
    }
  }

  fetchUsers();
});
