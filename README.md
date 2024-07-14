# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Project: Mixlist

[Github Pages Link](https://yourgithubusername.github.io/mixlist/)

# Overview

- Intro
- Features
- Responsive Design
- Technologies Used
- Setup
- Contributing
- Future Enhancements
- Author
- License
- Acknowledgements
- Contact

## Intro

"Mixlist" is an interactive web platform where users can discover and create cocktail recipes. The app allows users to explore various drinks and view detailed recipes through interactive recipe cards that flip to reveal more information.

## Features

- **Recipe Cards:** Each card displays a drink image and name on the front. Hovering over the card flips it over to reveal the recipe.
- **Recipe Sharing:** Users can submit their own cocktail recipes.
- **Database Integration:** The app pulls from a database of original cocktail recipes.
- **Mixlist Button:** A Mixlist button populates the page with new and interesting drinks for users to discover.
- **Night Mode:** Users can switch to night mode by clicking the Mixlist logo in the header.
- **Hover Animations:** All buttons, including the header logo, feature hover animations utilizing various pseudoclasses (e.g., :hover, ::before, ::after) for a dynamic user experience.
- **Likes Feature:** Users can like their favorite cocktail recipes with a simple click.

## Responsive Design

This project is fully responsive, designed to provide an optimal viewing experience across a wide range of devices. Key responsiveness features include:

- **Media Queries:** Apply different styling rules based on the viewport size.
- **Flexible Images and Grids:** All images and grid-based layouts scale and resize to maintain their aspect ratio and fit within their respective containers.
- **Adaptive Units:** Use of `rem`, `vw`, and `vh` units, along with percentage-based widths, ensures that padding, margins, and element sizes adjust to the screen.

## JavaScript Features

In "Mixlist", JavaScript ES6 is used to create an immersive and interactive experience. Key JavaScript features include:

- **Dynamic Content Creation:** Using `document.createElement()` and template literals to build and insert content into the DOM.
- **Event Handling:** Adding event listeners to handle clicks, form submissions, and other user interactions, such as flipping cards to reveal recipes.
- **DOM Manipulation:** Dynamically updating the DOM in response to user actions, like submitting new recipes.
- **Database Integration:** Fetching initial set of cocktail recipes from a database that ensures data persistence across page reloads.

## Technologies Used

- HTML5 for structured web content
- CSS3 for modern web styling
- JavaScript (ES6, DOM manipulation, event handling)
- Webpack for module bundling
- Git and GitHub for version control
- Figma for design mockups
- MongoDB Compass for database management

## Webpack Setup

The project uses Webpack for bundling JavaScript modules, enabling a cleaner and more efficient development process. The Webpack configuration includes:

- **Entry and Output:** Specified entry point for the app and the output directory for the bundled code.
- **Loaders:** Configured loaders for processing CSS and images, allowing seamless integration and optimization.
- **Plugins:** Utilized plugins for HTML template generation and environment variable management.

## Git Setup

To view the project on your local machine:

1. Clone the public repository using `git clone`.
2. Open the `index.html` file in a modern web browser to see the project live.

## Contributing

Interested in contributing? We'd love your help improving "Mixlist"! Check out the future enhancements and see if there's anything you'd like to work on.

## Future Enhancements

We are committed to continually enhancing the user experience and feature set of "Mixlist". Planned future improvements include:

- **Enhanced Search Functionality:** Introduce advanced search to filter recipes by ingredients, popularity, or date.
- **User Commenting System:** Develop a feature for users to comment on recipes, fostering a community of discussion.
- **Interactive Map Integration:** Implement an interactive map that allows users to explore cocktail recipes geographically.
- **Personalized User Galleries:** Enable users to create and share personalized galleries, organizing recipes based on themes or occasions.
- **Mobile App Development:** Expand the platform's reach by developing a mobile application for iOS and Android.
- **Performance Optimization:** Continue to optimize the site's performance, particularly image loading times, for a smoother user experience.
- **Accessibility Improvements:** Ensure the site is fully accessible by conducting thorough accessibility audits and addressing any issues to comply with WCAG guidelines.

## Author

Jack Malzone

## License

MIT

## Acknowledgements

- Thanks to TripleTen for another great challenge.
- All images are credited to their respective photographers.

## Contact

For any additional questions or comments, please email [jackmalzone@gmail.com](mailto:jackmalzone@gmail.com).

## Team

- **Dmitriy Slinkovenko** - [LinkedIn](https://www.linkedin.com/in/dmitriy-slinkovenko/)
- **Avery Morgan** - [LinkedIn](https://www.linkedin.com/in/avery-morgan/)
- **Jack Malzone** - [LinkedIn](https://www.linkedin.com/in/jackmalzone/)
- **Telasja Reynolds** - [LinkedIn](https://www.linkedin.com/in/telasjareynolds/)
