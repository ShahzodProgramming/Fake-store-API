const api = "https://fakestoreapi.com/products";

const elForm = document.querySelector(".login-form");
const elUsername = document.querySelector(".username-label");
const elPassword = document.querySelector(".password-label");

elForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const usernameValue = elUsername.value.trim();
  const passwordValue = elPassword.value.trim();

  const user = {
    username: usernameValue,
    password: passwordValue,
  };


  fetch(api, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => {
        const token = data.token;
        localStorage.setItem("token", token);

        alert("Login successful")

        window.location.href = "../pages/admin.html";
    });
});
