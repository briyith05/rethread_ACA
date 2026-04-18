document.addEventListener('DOMContentLoaded', () => {
  const enviarBtn = document.getElementById('enviarBtn');
  const faqItems = document.querySelectorAll('.faq-item');

  if (enviarBtn) {
    enviarBtn.addEventListener('click', enviarFormulario);
  }

  faqItems.forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.toggle('open');
    });
  });
});

function enviarFormulario() {
  const nombreInput = document.getElementById('nombre');
  const apellidoInput = document.getElementById('apellido');
  const emailInput = document.getElementById('email');
  const tipoInput = document.getElementById('tipo');
  const mensajeInput = document.getElementById('mensaje');
  const successMsg = document.getElementById('successMsg');

  if (!nombreInput || !emailInput || !mensajeInput || !successMsg) {
    return;
  }

  const nombre = nombreInput.value.trim();
  const email = emailInput.value.trim();
  const mensaje = mensajeInput.value.trim();

  if (!nombre || !email || !mensaje) {
    alert('Por favor completa los campos requeridos: nombre, correo y mensaje.');
    return;
  }

  successMsg.style.display = 'block';
  nombreInput.value = '';

  if (apellidoInput) {
    apellidoInput.value = '';
  }

  emailInput.value = '';
  mensajeInput.value = '';

  if (tipoInput) {
    tipoInput.value = '';
  }
}
