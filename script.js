// Mobile Menu
document.getElementById('mobile-menu').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.nav-links').classList.toggle('active');
});

// BOOK RIDE — 100% REDIRECT TO booking.html
document.getElementById('book-now').addEventListener('click', function() {
  const pickup = document.getElementById('pickup-input').value.trim();
  const drop = document.getElementById('drop-input').value.trim();
  
  if (pickup && drop) {
    localStorage.setItem('pickup', pickup);
    localStorage.setItem('drop', drop);
    window.location.href = 'booking.html';
  } else {
    alert('Please enter both Pickup and Drop locations!');
  }
});