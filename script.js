// JavaScript for interactive elements
document.querySelectorAll('details').forEach((detail) => {
    const summary = detail.querySelector('summary');
    const content = detail.querySelector('div');
  
    summary.addEventListener('click', (event) => {
      event.preventDefault();
      if (detail.hasAttribute('open')) {
        // Transition to closed state
        content.style.height = `${content.scrollHeight}px`;
        requestAnimationFrame(() => {
          content.style.height = '0px';
        });
        detail.removeAttribute('open');
      } else {
        // Transition to open state
        detail.setAttribute('open', 'open');
        content.style.height = `${content.scrollHeight}px`;
      }
    });
  
    detail.addEventListener('toggle', () => {
      if (detail.open) {
        content.style.height = `${content.scrollHeight}px`;
      } else {
        content.style.height = '0px';
      }
    });
  });