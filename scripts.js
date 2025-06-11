// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
  
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        tabButtons.forEach(btn => btn.classList.remove('active'));
        // Hide all content
        tabContents.forEach(content => content.style.display = 'none');
  
        // Add active class to clicked button
        button.classList.add('active');
        // Add smooth scroll into view
    targetSection.scrollIntoView({
      behavior: 'smooth'
      });
    });
  });
  
  