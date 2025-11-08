const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
const logo = document.getElementById('logo');
const navItems = document.querySelectorAll('.nav-item');

// Bật/tắt menu mobile
burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Khi bấm vào logo -> cuộn về đầu trang
logo.addEventListener('click', () => {
  document.querySelector('#hero').scrollIntoView({ behavior: 'smooth' });
});

// Hiệu ứng active khi click vào link
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
    navLinks.classList.remove('active'); // đóng menu mobile
  });
});

// === Scroll Spy ===
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href') === `#${current}`) {
      item.classList.add('active');
    }
  });
});

// === Hiệu ứng fade-in khi cuộn ===
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2 };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

