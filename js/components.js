(function () {
  'use strict';

  var LOGO_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="40" height="40">'
    + '<g transform="translate(100,100) rotate(-45)">'
    + '<circle cx="-20" cy="0" r="48" fill="none" stroke="#E65100" stroke-width="12"/>'
    + '<rect x="8" y="-48" width="12" height="96" fill="#E65100"/>'
    + '<rect x="52" y="-48" width="12" height="96" fill="#E65100"/>'
    + '<rect x="8" y="-6" width="56" height="12" fill="#E65100"/>'
    + '</g></svg>';

  var NAV_LINKS = [
    { label: 'About', href: '/about.html' },
    { label: 'Services', href: '/services.html' },
    { label: 'Safety', href: '/safety.html' },
    { label: 'Careers', href: '/careers.html' },
    { label: 'News', href: '/news.html' }
  ];

  var FOOTER_QUICK_LINKS = [
    { label: 'About Orbital Hydro', href: '/about.html' },
    { label: 'Our Services', href: '/services.html' },
    { label: 'Safety & Compliance', href: '/safety.html' },
    { label: 'Careers', href: '/careers.html' },
    { label: 'News & Press Releases', href: '/news.html' }
  ];

  var FOOTER_CORPORATE = [
    { label: 'Corporate Governance', href: '/about.html#governance' },
    { label: 'Employee Portal', href: 'https://crew.oh.energy' }
  ];

  function getActiveClass(href) {
    var path = window.location.pathname;
    if (href === '/' && (path === '/' || path === '/index.html')) return ' active';
    if (href !== '/' && path.indexOf(href) === 0) return ' active';
    return '';
  }

  function buildNavLinks() {
    var html = '';
    for (var i = 0; i < NAV_LINKS.length; i++) {
      var link = NAV_LINKS[i];
      html += '<li><a href="' + link.href + '"' + ' class="' + getActiveClass(link.href).trim() + '">' + link.label + '</a></li>';
    }
    return html;
  }

  function buildFooterLinks(links) {
    var html = '';
    for (var i = 0; i < links.length; i++) {
      html += '<li><a href="' + links[i].href + '">' + links[i].label + '</a></li>';
    }
    return html;
  }

  function injectHeader() {
    var header = document.createElement('header');
    header.className = 'site-header';
    header.innerHTML = '<div class="container">'
      + '<a href="/" class="site-header__logo">' + LOGO_SVG + '<span>Orbital Hydro</span></a>'
      + '<button class="nav-toggle" aria-label="Toggle navigation">'
      + '<span></span><span></span><span></span></button>'
      + '<nav class="site-nav">'
      + '<ul class="site-nav__links">' + buildNavLinks() + '</ul>'
      + '<a href="https://crew.oh.energy" class="btn btn--primary btn--small">Employee Portal</a>'
      + '</nav>'
      + '</div>';

    document.body.insertBefore(header, document.body.firstChild);

    var toggle = header.querySelector('.nav-toggle');
    var nav = header.querySelector('.site-nav');
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('active');
      nav.classList.toggle('open');
    });
  }

  function injectFooter() {
    var year = 2258;
    var footer = document.createElement('footer');
    footer.className = 'site-footer';
    footer.innerHTML = '<div class="container">'
      + '<div class="footer__grid">'
      + '<div class="footer__about">'
      + '<a href="/" class="site-header__logo" style="margin-bottom:1rem;">' + LOGO_SVG + '<span>Orbital Hydro</span></a>'
      + '<p>A beacon of innovation in sustainable energy, we pride ourself on unparalleled efficiency in our unwavering commitment to environmental stewardship and the destruction of our enemies.</p>'
      + '</div>'
      + '<div><h4>Quick Links</h4><ul class="footer__links">' + buildFooterLinks(FOOTER_QUICK_LINKS) + '</ul></div>'
      + '<div><h4>Corporate</h4><ul class="footer__links">' + buildFooterLinks(FOOTER_CORPORATE) + '</ul></div>'
      + '</div>'
      + '<div class="footer__bottom">'
      + '<div class="footer__copyright">&copy; Cycle ' + year + ' Orbital Hydro Corporation. All rights reserved.</div>'
      + '<div class="footer__legal">Orbital Hydro makes no guarantees regarding uninterrupted Alpha Matter supply in contested sectors or sectors adjacent to contested sectors or sectors that Orbital Hydro has designated for future contestation. '
      + 'Service availability subject to grid conditions, regulatory approval, active hostilities, and the continued structural integrity of your planet. '
      + 'By accessing this site you acknowledge that Orbital Hydro Corporation bears no liability for energy disruptions caused by acts of war, acts of Orbital Hydro, or acts that Orbital Hydro has determined were necessary. '
      + 'Orbital Hydro is a registered trademark of Orbital Hydro Corporation.</div>'
      + '</div>'
      + '</div>';

    document.body.appendChild(footer);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      injectHeader();
      injectFooter();
    });
  } else {
    injectHeader();
    injectFooter();
  }
})();
