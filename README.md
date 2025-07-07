
# Proyecto de Login en HTML/CSS/JavaScript

<div align="center">

**TECNOLOGICO NACIONAL DE MEXICO**  
**INSTITUTO TECNOLÓGICO DE OAXACA**

Departamento de Ingeniería en Sistemas Computacionales  

Materia: Programación Web  
“Login con Enlace de Repositorio y GitHub Pages”  
Profesor: Martínez Nieto Adelina  

Alumno:  
**López Cruz David Eduardo**  
Grupo: VSI  

Oaxaca, Oaxaca, a 07 de julio de 2025.

</div>

---

## 🔐 Nombre del Proyecto: Login Web con Validación de Contraseña

Este proyecto consiste en un formulario de inicio de sesión con validación visual de contraseña, generado con HTML, CSS y JavaScript puro. Permite evaluar la seguridad de la contraseña y ofrece una interfaz atractiva, funcional y ligera.

---

## 📄 Descripción General

El formulario de login incluye:

- Campo de correo electrónico
- Campo de contraseña con botón de mostrar/ocultar
- Botón para generar una contraseña segura
- Barra de seguridad que evalúa la contraseña en tiempo real
- Validación básica antes de permitir el envío

Está construido sin frameworks externos, utilizando solo **Bootstrap para estilos base**.

---

## ⚙️ Explicación del HTML

```html
<form onsubmit="event.preventDefault(); login();">
```
Evita que el formulario recargue la página al enviarse. Llama a la función `login()`.

```html
<input type="email" id="correo" name="correo" placeholder="ejemplo@correo.com" required>
```
Campo para ingresar el correo, con validación automática de tipo `email`.

```html
<input type="password" id="contrasena" name="contrasena" oninput="evaluarPassword(this.value)" required />
```
Campo para contraseña que ejecuta `evaluarPassword()` conforme el usuario escribe.

```html
<button type="button" onclick="togglePassword()">👁️</button>
```
Permite mostrar u ocultar la contraseña al hacer clic.

```html
<button type="button" onclick="generarPassword()">Generar contraseña segura</button>
```
Genera una contraseña segura aleatoria.

```html
<div class="barra-seguridad" id="barraSeguridad">
  <div class="nivel" id="nivelSeguridad"></div>
</div>
```
Barra visual que muestra el nivel de seguridad de la contraseña.

```html
<button type="submit">Entrar</button>
```
Botón principal para iniciar sesión, que ejecuta `login()` al hacer clic.

---

## 🧠 Explicación detallada del JavaScript

### `login()`
```js
function login() {
  const correo = document.getElementById('correo').value;
  const contrasena = document.getElementById('contrasena').value;
  const mensajeError = document.getElementById('mensajeError');

  if (correo.trim() !== "" && contrasena.trim() !== "") {
    window.location.href = "http://localhost/prograweb/Tarea/Tarea1.html";
  } else {
    mensajeError.textContent = "Por favor, complete ambos campos.";
  }
}
```
Esta función valida que los campos de correo y contraseña no estén vacíos. Si están completos, simula un inicio de sesión redireccionando a una página local.

---

### `togglePassword()`
```js
function togglePassword() {
  const passwordInput = document.getElementById("contrasena");
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
}
```
Muestra u oculta el texto del campo de contraseña.

---

### `generarPassword()`
```js
function generarPassword() {
  const passwordInput = document.getElementById("contrasena");
  const pwd = generarContrasenaSegura();
  passwordInput.value = pwd;
  evaluarPassword(pwd);
}
```
Genera una nueva contraseña aleatoria segura y la evalúa automáticamente.

---

### `generarContrasenaSegura()`
```js
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
```
Asegura que la contraseña tenga al menos una letra mayúscula, minúscula, número y símbolo. Luego la rellena con caracteres aleatorios hasta alcanzar 12 caracteres y la mezcla.

---

### `evaluarPassword(password)`
```js
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
```
Evalúa cuán segura es la contraseña basándose en 5 criterios. Muestra una barra de progreso con color y texto según la calidad detectada.

---

## 🌐 GitHub Pages

Este proyecto puede visualizarse desde GitHub Pages:  
📎 [https://david-eduardolc.github.io/login-proyecto/](https://david-eduardolc.github.io/login-proyecto/)

---

## 🎥 Video Explicativo

▶️ https://youtu.be/WOUJ4MwsG3c

---
