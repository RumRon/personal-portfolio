'use strict';

// Mobile sidebar.
const sidebar = document.querySelector('[data-sidebar]');
const sidebarButton = document.querySelector('[data-sidebar-btn]');
if (sidebar && sidebarButton) {
  sidebarButton.addEventListener('click', () => sidebar.classList.toggle('active'));
}

// Section navigation; works with the cleaned five-page portfolio.
const navigationLinks = [...document.querySelectorAll('[data-nav-link]')];
const pages = [...document.querySelectorAll('[data-page]')];
navigationLinks.forEach(link => {
  link.addEventListener('click', () => {
    const target = link.textContent.trim().toLowerCase();
    pages.forEach(page => page.classList.toggle('active', page.dataset.page === target));
    navigationLinks.forEach(item => item.classList.toggle('active', item === link));
    window.scrollTo({ top: 0, behavior: 'auto' });
  });
});
