/* ==========================================================
   SAIKIO ALGORITHM
   INICIO DE SESIÓN
========================================================== */

const loginForm = document.getElementById("loginForm");

const userInput = document.getElementById("user");

const passwordInput = document.getElementById("password");

const errorMessage = document.getElementById("errorMessage");

const showPassword = document.getElementById("showPassword");


/* ==========================================================
   MOSTRAR / OCULTAR CONTRASEÑA
========================================================== */

showPassword.addEventListener("click", function () {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        showPassword.textContent = "Ocultar";

    } else {

        passwordInput.type = "password";

        showPassword.textContent = "Mostrar";

    }

});


/* ==========================================================
   ACCEDER
========================================================== */

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const user = userInput.value.trim();

    const password = passwordInput.value.trim();


    /* Limpiar mensaje anterior */

    errorMessage.textContent = "";


    /* Comprobar correo/teléfono */

    if (user === "") {

        errorMessage.textContent =
            "Ingresa tu correo electrónico o número de teléfono.";

        userInput.focus();

        return;
    }


    /* Comprobar contraseña */

    if (password === "") {

        errorMessage.textContent =
            "Ingresa tu contraseña.";

        passwordInput.focus();

        return;
    }


    /*
       SI LOS CAMPOS ESTÁN LLENOS,
       ENTRAMOS A LA PÁGINA PRINCIPAL.
    */

    window.location.href = "index.html";

});