# Ammar Mazhar - Personal Portfolio

A modern, responsive personal portfolio website built with HTML, CSS, and JavaScript. This portfolio showcases Ammar's skills, experience, education, and certificates.

## Features

- Responsive design that works on all devices
- Modern animations using AOS (Animate On Scroll) library
- Interactive UI elements
- Smooth scrolling navigation
- Skill progress visualization
- Language proficiency circular progress bars
- Timeline for professional experience
- Contact form
- Social media links

## Getting Started

1. Clone or download this repository to your local machine.
2. Add your profile image to the `assets/images` folder and name it `profile.jpg`.
3. Open `index.html` in a web browser to view the website.

## Customization

### Changing Colors

You can easily customize the color palette by editing the CSS variables in the `assets/css/styles.css` file:

```css
:root {
  --primary-color: #3498db; /* Bright Blue */
  --secondary-color: #2ecc71; /* Emerald Green */
  --accent-color: #e74c3c; /* Flat Red */
  --dark-color: #2c3e50; /* Dark Blue/Gray */
  --light-color: #ecf0f1; /* Light Gray */
  /* ... other variables ... */
}
```

### Adding More Sections

To add more sections to your portfolio:

1. Create a new section in the `index.html` file following the existing structure.
2. Add corresponding styles in `assets/css/styles.css`.
3. If needed, add JavaScript functionality in `assets/js/main.js`.

### Contact Form

The contact form currently displays an alert on submission. To make it functional:

1. Set up a backend service to process form submissions (like Formspree, Netlify Forms, or a custom backend).
2. Update the form submission handler in `assets/js/main.js`.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- [AOS](https://michalsnik.github.io/aos/) (Animate On Scroll)
- [Font Awesome](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/)

## Browser Compatibility

This portfolio is designed to work with all modern browsers, including:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## License

This project is available for personal use.

## Author

Ammar Mazhar
