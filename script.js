document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const container = document.querySelector('.card-section');
  const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;

  // Tap behavior for touch devices
  if (isTouchDevice) {
    cards.forEach(card => {
      card.addEventListener('click', (e) => {
        e.preventDefault();
        cards.forEach(c => {
          if (c !== card) c.classList.remove('tapped');
        });
        card.classList.toggle('tapped');
      });
    });
  }

  // Detect current scroll direction (x or y) and scroll accordingly
  if (container) {
    container.addEventListener('wheel', function(e) {
      const isHorizontalLayout = window.getComputedStyle(container).flexDirection === 'row';

      if (isHorizontalLayout) {
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
          e.preventDefault();
          const scrollSpeed = 4.5;
          container.scrollLeft += e.deltaY * scrollSpeed;
        }
      }
      // Otherwise, let vertical scroll happen naturally
    }, { passive: false });
  }
});
