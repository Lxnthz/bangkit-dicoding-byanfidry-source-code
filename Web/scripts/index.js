function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  const hamburger = document.querySelector('.hamburger');
  
  menu.classList.toggle('open');
  hamburger.classList.toggle('open');
}

function showSection(sectionId) {
  // Close the mobile menu after clicking a link
  const menu = document.getElementById('mobile-menu');
  menu.classList.remove('open');
  
  // Get all sections
  const sections = document.querySelectorAll('.section');
  
  // Hide all sections
  sections.forEach(section => {
      section.classList.remove('active');
  });
  
  // Show the selected section
  setTimeout(() => {
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
  }, 100)
}

document.addEventListener('DOMContentLoaded', function() {
  const skillsSection = document.getElementById('skills');
  const progressBars = document.querySelectorAll('.progress');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        progressBars.forEach((bar) => {
          const progressValue = bar.getAttribute('data-progress');
          bar.style.width = progressValue + '%';
        });
      }
    });
  }, { threshold: 0.5 }); // Trigger when 50% of the section is visible

  observer.observe(skillsSection);
});
