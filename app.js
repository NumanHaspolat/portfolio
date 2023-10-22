document.addEventListener("DOMContentLoaded", function () {
  const myProjectsLink = document.querySelector('.cool-link[href="#"]');
  const modularCard = document.querySelector(".features .card:nth-child(1)");

  myProjectsLink.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: modularCard.offsetTop,
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const contactLink = document.querySelector(
    '.cool-link[href="/contact.html"]'
  );
  const footer = document.querySelector("footer");

  contactLink.addEventListener("click", function (e) {
    e.preventDefault();
    footer.scrollIntoView({
      behavior: "smooth",
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
    const avatar = document.querySelector(".avatar");
    const mobileNav = document.querySelector(".hidden.mobile");
  
    function toggleMobileNav() {
      gsap.to(mobileNav, {
        y: mobileNav.style.display === "none" ? 0 : -50,
        opacity: mobileNav.style.display === "none" ? 1 : 0,
        duration: 0.5,
        display: mobileNav.style.display === "none" ? "flex" : "none",
      });
    }
  
    if (window.innerWidth <= 680) {
      avatar.addEventListener("click", toggleMobileNav);
    }
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var contactLinks = document.querySelectorAll('.contact-link');
    var featuresSection = document.querySelector('.features');
    var footer = document.querySelector('footer');

    contactLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            if (link.classList.contains('mbl')) {
                footer.scrollIntoView({ behavior: 'smooth' });
            } else {
                featuresSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var aboutMeLink = document.querySelector('.about');
  
    aboutMeLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'aboutme.html';
    });
});



