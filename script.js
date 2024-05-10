const buttons = document.querySelectorAll('.button');
buttons.forEach(btn => {
  btn.addEventListener('touchend', () => {
    btn.blur(); // Remove focus to clear hover state
  });
});





