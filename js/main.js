(function () {
  'use strict';

  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.nav');
  var links = document.querySelectorAll('.nav__link');
  var navItems = Array.prototype.slice.call(document.querySelectorAll('.nav__item'));
  var sections = [];

  if (burger && nav) {
    burger.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('nav--open');
      burger.classList.toggle('burger--active', isOpen);
      burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    links.forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('nav--open');
        burger.classList.remove('burger--active');
        burger.setAttribute('aria-expanded', 'false');
      });
    });

    navItems.forEach(function (item) {
      var link = item.querySelector('.nav__link');
      if (link && link.getAttribute('href')) {
        sections.push(link.getAttribute('href'));
      }
    });

    window.addEventListener('scroll', function () {
      var fromTop = window.scrollY + 100;
      var current = sections[0] || '#hero';
      sections.forEach(function (hash) {
        var target = document.querySelector(hash);
        if (target && target.offsetTop <= fromTop) {
          current = hash;
        }
      });

      navItems.forEach(function (item) {
        var link = item.querySelector('.nav__link');
        var active = link && link.getAttribute('href') === current;
        link.classList.toggle('nav__link--active', active);
      });
    });
  }

  var yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();