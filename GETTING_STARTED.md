# Ammar Mazhar Portfolio - Getting Started

Welcome to your new portfolio website! This document will help you get started with your new online portfolio.

## Files and Structure

1. **index.html** - The main HTML file containing your portfolio content
2. **assets/css/styles.css** - Main CSS styles
3. **assets/css/animations.css** - Enhanced animations and effects
4. **assets/js/main.js** - JavaScript functionality
5. **server.js** - A simple Node.js server for local testing
6. **start_portfolio.bat** - Windows batch file to easily launch the portfolio

## How to Launch the Portfolio

### Method 1: Direct Opening

- Simply double-click the `index.html` file to open it in your default web browser

### Method 2: Using the Local Server

- Double-click the `start_portfolio.bat` file (requires Node.js installed)
- Or open a terminal/command prompt, navigate to the portfolio folder, and run `npm start`
- Access the site at http://localhost:3000

## Customizing Your Portfolio

### Adding Your Profile Picture

1. Place your profile photo in the `assets/images` folder
2. Name it `profile.jpg` or update the reference in the HTML file

### Updating Content

- Edit the `index.html` file to update text content, links, and sections

### Changing Colors

- Edit the color variables at the top of `assets/css/styles.css`

### Modifying Animations

- Customize animations in the `assets/css/animations.css` file

### Adding Projects

- Add new projects by duplicating sections in the HTML file

## Making the Form Functional

The contact form currently shows an alert message when submitted but doesn't send data anywhere. To make it functional:

1. Set up a form handling service like Formspree (https://formspree.io/)
2. Update the form action attribute in the HTML
3. Or modify the JavaScript code in main.js to handle form submission

## Publishing Your Portfolio

To make your portfolio available online:

1. Create an account on a hosting service (GitHub Pages, Netlify, Vercel, etc.)
2. Follow their instructions to upload your files
3. Your portfolio will be available at the URL provided by the hosting service

## Need Help?

If you need any assistance with your portfolio, feel free to seek help from web development communities or forums.

Good luck with your new portfolio!
