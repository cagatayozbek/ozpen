# Copilot Instructions for Ozpen

Welcome to the Ozpen codebase! This document provides essential guidelines for AI coding agents to be productive and aligned with the project's structure and conventions.

## Project Overview

Ozpen is a React-based web application bootstrapped with Create React App. It features a modular component structure and is organized to support scalability and maintainability. The project includes multiple directories for components, assets, and styles, with a focus on reusable and composable design patterns.

### Key Directories

- **`src/component`**: Contains all React components, organized by feature or domain.
  - Example: `src/component/urunler/sistemler` includes components for product systems.
- **`src/assets`**: Stores static assets like images and icons.
- **`public`**: Contains static files like `index.html` and `manifest.json`.
- **`build`**: Generated production build files.

## Developer Workflows

### Running the Application

- Use `npm start` to run the app in development mode. The app will be available at [http://localhost:3000](http://localhost:3000).

### Testing

- Run `npm test` to launch the test runner in interactive watch mode.
- Tests are located alongside components, e.g., `src/App.test.js`.

### Building for Production

- Use `npm run build` to create an optimized production build in the `build` directory.

## Project-Specific Conventions

### Component Structure

- Components are organized by feature or domain.
- Each component typically includes:
  - A `.js` file for the logic.
  - A `.css` file for styles (if applicable).
  - Assets in a nested `assets` directory (if needed).

### Naming Conventions

- Use PascalCase for component names (e.g., `Header.js`, `Footer.js`).
- Use camelCase for variables and functions.
- CSS class names follow the BEM (Block Element Modifier) methodology.

### Styling

- CSS files are colocated with their respective components.
- Global styles are avoided; prefer scoped styles within components.

## Integration Points

### External Dependencies

- The project relies on React and Create React App.
- Additional dependencies are listed in `package.json`.

### Cross-Component Communication

- Props are the primary method for data flow between components.
- Context API or state management libraries (if added) should be used for global state.

## Examples

### Adding a New Component

1. Create a new directory under `src/component` for the feature.
2. Add the `.js` file for the component logic.
3. Add a `.css` file for styles (if needed).
4. Import and use the component in the relevant parent component.

### Updating Styles

1. Locate the `.css` file associated with the component.
2. Follow the BEM methodology for class names.
3. Test changes by running `npm start`.

---

For further details, refer to the [README.md](../README.md) file or consult the project maintainers.
