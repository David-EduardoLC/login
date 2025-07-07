function login() {
  const correo = document.getElementById('correo').value;
  const contrasena = document.getElementById('contrasena').value;
  const mensajeError = document.getElementById('mensajeError');

  if (correo.trim() !== "" && contrasena.trim() !== "") {
    // Redirigir a la página local
    window.location.href = "Pagweb";
  } else {
    mensajeError.textContent = "Por favor, complete ambos campos.";
  }
}



function togglePassword() {
  const passwordInput = document.getElementById("contrasena");
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
}

function generarPassword() {
  const passwordInput = document.getElementById("contrasena");
  const pwd = generarContrasenaSegura();
  passwordInput.value = pwd;
  evaluarPassword(pwd);
}

function generarContrasenaSegura() {
  const mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const minus = "abcdefghijklmnopqrstuvwxyz";
  const numeros = "0123456789";
  const especiales = "!@#$%^&*()-_=+";
  const allChars = mayus + minus + numeros + especiales;

  let pwd = [
    mayus[Math.floor(Math.random() * mayus.length)],
    minus[Math.floor(Math.random() * minus.length)],
    numeros[Math.floor(Math.random() * numeros.length)],
    especiales[Math.floor(Math.random() * especiales.length)]
  ];

  for (let i = pwd.length; i < 12; i++) {
    pwd.push(allChars[Math.floor(Math.random() * allChars.length)]);
  }

  return pwd.sort(() => Math.random() - 0.5).join('');
}

function evaluarPassword(password) {
  const barra = document.getElementById("nivelSeguridad");
  const texto = document.getElementById("textoSeguridad");
  let nivel = 0;

  if (password.length >= 10) nivel++;
  if (/[A-Z]/.test(password)) nivel++;
  if (/[a-z]/.test(password)) nivel++;
  if (/[0-9]/.test(password)) nivel++;
  if (/[\W_]/.test(password)) nivel++;

  const porcentaje = nivel * 20;
  barra.style.width = `${porcentaje}%`;

  if (nivel <= 2) {
    barra.style.backgroundColor = "red";
    texto.textContent = "Débil";
  } else if (nivel === 3) {
    barra.style.backgroundColor = "orange";
    texto.textContent = "Regular";
  } else if (nivel === 4) {
    barra.style.backgroundColor = "gold";
    texto.textContent = "Buena";
  } else {
    barra.style.backgroundColor = "green";
    texto.textContent = "Muy segura";
  }
}
