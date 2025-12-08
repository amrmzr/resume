document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS (Animate On Scroll)
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false,
  });

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile navigation toggle
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('active');
  });

  // Close mobile menu when clicking a nav link
  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      burger.classList.remove('active');
    });
  });

  // Scroll to top button
  const scrollToTopButton = document.getElementById('scrollToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      scrollToTopButton.classList.add('active');
    } else {
      scrollToTopButton.classList.remove('active');
    }
  });

  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  // Animate skill bars
  const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.progress-bar');
    skillBars.forEach((bar) => {
      const width = bar.getAttribute('data-width');
      bar.style.width = width + '%';
    });
  };

  // Animate progress circles
  const animateProgressCircles = () => {
    const circles = document.querySelectorAll('.progress-circle');
    circles.forEach((circle) => {
      const percent = circle.getAttribute('data-percent');
      const radius = circle.offsetWidth / 2;
      const circumference = 2 * Math.PI * radius;
      const dashOffset = circumference * (1 - percent / 100);

      // Create SVG for circular progress
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', '100%');
      svg.setAttribute('height', '100%');
      svg.setAttribute('viewBox', `0 0 ${radius * 2} ${radius * 2}`);
      svg.style.position = 'absolute';
      svg.style.transform = 'rotate(-90deg)';
      svg.style.overflow = 'visible';

      const circle1 = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'circle'
      );
      circle1.setAttribute('cx', radius);
      circle1.setAttribute('cy', radius);
      circle1.setAttribute('r', radius - 5);
      circle1.setAttribute('fill', 'none');
      circle1.setAttribute('stroke', '#e0e0e0');
      circle1.setAttribute('stroke-width', '5');

      const circle2 = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'circle'
      );
      circle2.setAttribute('cx', radius);
      circle2.setAttribute('cy', radius);
      circle2.setAttribute('r', radius - 5);
      circle2.setAttribute('fill', 'none');
      circle2.setAttribute('stroke', '#3498db');
      circle2.setAttribute('stroke-width', '5');
      circle2.setAttribute('stroke-dasharray', circumference);
      circle2.setAttribute('stroke-dashoffset', dashOffset);
      circle2.setAttribute('stroke-linecap', 'round');

      svg.appendChild(circle1);
      svg.appendChild(circle2);

      circle.appendChild(svg);
    });
  };

  // Typewriter effect for the hero section
  const typeWriter = () => {
    const textElement = document.querySelector('.hero-text h1');
    const text = textElement.innerHTML;
    textElement.innerHTML = '';

    let i = 0;
    const typing = () => {
      if (i < text.length) {
        textElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 70);
      }
    };

    setTimeout(typing, 500);
  };

  // Form submission handler
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // You can add your form submission logic here
      // For now, let's just show a success message
      const formData = new FormData(contactForm);
      const formValues = {};
      for (let [key, value] of formData.entries()) {
        formValues[key] = value;
      }

      console.log('Form submitted with values:', formValues);
      alert('Thank you for your message! I will get back to you soon.');
      contactForm.reset();
    });
  }

  // Initialize animations
  window.addEventListener('load', () => {
    animateSkillBars();
    animateProgressCircles();

    // Add hover effect for timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => {
      item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-10px)';
      });
      item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0)';
      });
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = targetElement.offsetTop - navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    });
  });

  // Enhanced handling for CTA buttons in hero section
  document.querySelectorAll('.cta-buttons .btn').forEach((button) => {
    // Add click effect
    button.addEventListener('mousedown', function () {
      this.style.transform = 'scale(0.95)';
    });

    button.addEventListener('mouseup', function () {
      this.style.transform = 'scale(1)';
    });

    button.addEventListener('mouseleave', function () {
      this.style.transform = 'scale(1)';
    });
  });

  // Add parallax effect to hero section
  window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.scrollY;

    if (scrollPosition < window.innerHeight) {
      hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
  });

  // Keyboard accessibility for buttons
  document.querySelectorAll('.btn').forEach((button) => {
    button.addEventListener('keydown', function (e) {
      // If Enter or Space key is pressed
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });
});

// Fix for buttons - make sure they're clickable
document.addEventListener('click', function (event) {
  // If the clicked element is a button or inside a button
  if (event.target.classList.contains('btn') || event.target.closest('.btn')) {
    const button = event.target.classList.contains('btn')
      ? event.target
      : event.target.closest('.btn');

    // Get the href attribute and follow it if it's an anchor
    const href = button.getAttribute('href');
    if (href && href.startsWith('#')) {
      event.preventDefault();
      const targetElement = document.querySelector(href);

      if (targetElement) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = targetElement.offsetTop - navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    }
  }
});
