document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const nombre = this.nombre.value.trim();
  const email = this.email.value.trim();
  const mensaje = this.mensaje.value.trim();
  const correoDestino = 'jenner.calderon_gyf@sos4services.com.mx';
  const asunto = encodeURIComponent(`Mensaje de contacto de ${nombre}`);
  const cuerpo = encodeURIComponent(`${mensaje}\n\nCorreo: ${email}`);
  window.location.href = `mailto:${correoDestino}?subject=${asunto}&body=${cuerpo}`;
});

// Código para menú hamburguesa
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

