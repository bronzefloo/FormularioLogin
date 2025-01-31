// Função para alternar entre mostrar/esconder a senha
const showPassword = document.getElementById('show-password');
const passwordInput = document.getElementById('password');
const eyeIcon = document.getElementById('olho');

showPassword.addEventListener('click', function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.src = "https://cdn0.iconfinder.com/data/icons/ui-icons-pack/100/ui-icon-pack-02-512.png"; // Ícone de olho aberto
  } else {
    passwordInput.type = "password";
    eyeIcon.src = "https://cdn0.iconfinder.com/data/icons/ui-icons-pack/100/ui-icon-pack-14-512.png"; // Ícone de olho fechado
  }
});

// Alternar entre as páginas de Login e Criar Conta
const createAccountLink = document.getElementById('create-account');
const criarContaSection = document.getElementById('criar-conta');
const loginSection = document.querySelector('.primeiro');
const goBackLink = document.getElementById('go-back');

createAccountLink.addEventListener('click', function (e) {
  e.preventDefault();
  loginSection.style.display = 'none';
  criarContaSection.style.display = 'block';
});

goBackLink.addEventListener('click', function (e) {
  e.preventDefault();
  loginSection.style.display = 'block';
  criarContaSection.style.display = 'none';
});
