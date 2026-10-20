// Check Service Location Availability in Meerut
function checkLocation() {
    const loc = document.getElementById('userLocation').value;
    const res = document.getElementById('locResult');
    
    if (!res) return;

    if (loc === 'ganga') {
        res.innerHTML = "Great! Instant Doorstep Service available in Ganga Nagar.";
        res.style.color = "#25d366";
    } else if (loc === 'meerut_city') {
        res.innerHTML = "Service available! Technician can visit your location in Meerut City / Outer Area.";
        res.style.color = "#25d366";
    } else {
        res.innerHTML = "Service available! Technician can visit your location.";
        res.style.color = "#25d366";
    }
}

function toggleReviews() {
  const wrapper = document.getElementById('reviewsWrapper');
  const btn = document.getElementById('toggleReviewsBtn');
  const btnText = btn.querySelector('span');

  wrapper.classList.toggle('collapsed');
  btn.classList.toggle('active');

  if (wrapper.classList.contains('collapsed')) {
    btnText.textContent = 'Read Customer Reviews';
  } else {
    btnText.textContent = 'Hide Customer Reviews';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const navToggleBtn = document.getElementById('navToggleBtn');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Toggle button click logic
  if (navToggleBtn && navMenu) {
    navToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('active');
      
      // Icon toggle (Hamburger <-> Close X icon)
      const icon = navToggleBtn.querySelector('i');
      if (icon) {
        if (navMenu.classList.contains('active')) {
          icon.className = 'fa-solid fa-xmark';
        } else {
          icon.className = 'fa-solid fa-bars';
        }
      }
    });

    // Mobile menu link click karne par automatically close ho jaye
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navMenu.classList.remove('active');
          const icon = navToggleBtn.querySelector('i');
          if (icon) icon.className = 'fa-solid fa-bars';
        }
      });
    });

    // Menu ke bahar kahin bhi click karne par menu close ho jaye
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !navToggleBtn.contains(e.target)) {
        navMenu.classList.remove('active');
        const icon = navToggleBtn.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
      }
    });
  }
});