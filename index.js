function ingresar(event) {
  event.preventDefault(); // Evitar el envío del formulario

  let usuario = document.getElementById("usuario").value;
  let contraseña = document.getElementById("contraseña").value;
  let verificacionusuario1 = "Isaac";
  let verificacioncontraseña1 = "2004";
  let verificacionusuario2 = "Garcia";
  let verificacioncontraseña2 = "12345678";

  // Verificación de usuario y contraseña
  if (
      (usuario === verificacionusuario1 && contraseña === verificacioncontraseña1) ||
      (usuario === verificacionusuario2 && contraseña === verificacioncontraseña2)
  ) {
      // Muestra una alerta de éxito antes de redirigir
      Swal.fire({
        title: "Correct Access",
        text: "You clicked the button!",
        icon: "success",
          timer: 1500
      });
      // Redirige a otra página si las credenciales son correctas
      setTimeout(() => {
          window.location.href = "./principal.html";
      }, 1500); // Redirigir después de la alerta
  } else {
      // Muestra una alerta de error si las credenciales son incorrectas
      Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Usuario o contraseña inválidos"
      });
  }
}
