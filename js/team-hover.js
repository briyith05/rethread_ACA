// Añade la clase .hovering al contenedor .team-grid cuando el cursor
// entra en cualquiera de las tarjetas `.team-card`, y la quita al salir.
// Usa eventos pointer para funcionar con mouse y pantallas táctiles.

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.team-card');
  cards.forEach(card => {
    const grid = card.closest('.team-grid');
    if (!grid) return;

    card.addEventListener('pointerenter', () => {
      grid.classList.add('hovering');
    });

    card.addEventListener('pointerleave', () => {
      grid.classList.remove('hovering');
    });

    // Para usuarios táctiles que tocan la tarjeta, añadimos/removemos
    // la clase tras un breve delay para dar feedback táctil.
    card.addEventListener('pointerdown', () => {
      grid.classList.add('hovering');
    });
    card.addEventListener('pointerup', () => {
      setTimeout(() => grid.classList.remove('hovering'), 200);
    });
  });
});
