/**
 * LANDING PAGE LOW TICKET — DANIEL JUNIOR
 * Script base da Hero (preparado para interações das próximas seções)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Comportamento de acordeão para o FAQ (fechar os demais ao abrir um)
  const faqCards = document.querySelectorAll('.faq-card');
  faqCards.forEach(card => {
    card.addEventListener('toggle', () => {
      if (card.open) {
        faqCards.forEach(otherCard => {
          if (otherCard !== card && otherCard.open) {
            otherCard.open = false;
          }
        });
      }
    });
  });

  // Meta Pixel: InitiateCheckout ao clicar nos botões que levam ao checkout da Kiwify
  const checkoutLinks = document.querySelectorAll('a[href*="pay.kiwify.com.br"]');
  checkoutLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (typeof fbq === 'function') {
        fbq('track', 'InitiateCheckout', { value: 97, currency: 'BRL' });
      }
    });
  });
});

