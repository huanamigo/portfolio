# Portfolio Website

## Description

Just a show off

## Features

- **Interactive UI**: Utilizes Framer Motion to animate page transitions and elements, enhancing the user experience with smooth animations.
- **Single Page Application (SPA)**: Built with React and React Router for efficient, seamless navigation without page reloads.
- **Responsive Design**: Fully responsive layout that adapts to various screen sizes and devices.
- **SCSS Styling**: Uses SCSS for advanced styling features and organized stylesheets.
- **GitHub Pages Hosting**: Hosted on GitHub Pages for easy updates and maintenance.

## Technologies

- **React**: A JavaScript library for building user interfaces.
- **React Router**: Library to handle routing in React applications.
- **JavaScript (ES6+)**: For dynamic content and interactive elements.
- **Framer Motion**: A powerful animation library for React.
- **SCSS**: Advanced CSS with features like variables, nested rules, and mixins.
- **GitHub Pages**: Free hosting directly from your GitHub repository.

## Project Setup

### Prerequisites

If you really have to clone it make sure you have Node.js installed on your machine. This project was developed using Node.js v20.10.0

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/huanamigo/portfolio.git
   cd portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:5173`.

### Deployment to GitHub Pages

1. Install the `gh-pages` package:

   ```bash
   npm install gh-pages --save-dev
   ```

2. Add the following scripts to your `package.json`:

   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Add a `homepage` field to your `package.json`:

   ```json
   "homepage": "https://your-username.github.io/portfolio-website"
   ```

4. Deploy the application:
   ```bash
   npm run deploy
   ```

After running this command, your application will be available at the specified `homepage` URL.

## Usage

Navigate through the website using the navigation links. Each page is loaded dynamically via React Router, ensuring a smooth and fast experience without traditional page reloads.

## Contributing

Again, if you really want to contribute, here’s how:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
