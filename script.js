const API_KEY = 'af29091570d24cd7882713168241f926';

// Mobile Menu
document.getElementById('mobile-menu').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.nav-links').classList.toggle('active');
  this.querySelectorAll('.bar').forEach((bar, i) => {
    if (i === 0) bar.style.transform = this.classList.contains('active') ? 'rotate(45deg) translate(10px, 10px)' : '';
    if (i === 1) bar.style.opacity = this.classList.contains('active') ? '0' : '1';
    if (i === 2) bar.style.transform = this.classList.contains('active') ? 'rotate(-45deg) translate(8px, -8px)' : '';
  });
});

// Geoapify Autocomplete - FULLY WORKING
new Geoapify.GeocoderAutocomplete(
  document.getElementById("pickup-autocomplete"),
  API_KEY, 
  { 
    placeholder: "Enter Pickup Location", 
    countryCodes: ['in'], 
    limit: 6, 
    lang: 'en',
    debounceDelay: 300
  }
);

new Geoapify.GeocoderAutocomplete(
  document.getElementById("drop-autocomplete"),
  API_KEY, 
  { 
    placeholder: "Enter Drop Location", 
    countryCodes: ['in'], 
    limit: 6, 
    lang: 'en',
    debounceDelay: 300
  }
);

// Book Ride
document.getElementById('book-now').addEventListener('click', () => {
  const pickup = document.querySelector('#pickup-autocomplete input')?.value || '';
  const drop = document.querySelector('#drop-autocomplete input')?.value || '';
  
  if (pickup && drop) {
    localStorage.setItem('pickup', pickup);
    localStorage.setItem('drop', drop);
    window.location.href = 'booking.html';
  } else {
    alert('Please select both Pickup & Drop locations!');
  }
});