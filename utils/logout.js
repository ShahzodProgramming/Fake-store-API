function logout() {
  alert("Are you sure you want to logout?");
  localStorage.removeItem("token");

  window.location.href = "../pages/login.html";
}
