# Project Overview: Portfolio 2024

A modern, responsive personal portfolio website built with **React**, **Vite**, and **Tailwind CSS**. The project features a data-driven architecture, a 3D background scene using **Three.js**, and a glassmorphism-inspired UI layout.

## Core Technologies

- **Frontend Framework:** React 18 (Vite-powered)
- **Styling:** Tailwind CSS (with JIT mode and custom theme extensions)
- **3D Graphics:** Three.js
- **Routing:** React Router DOM v7
- **Icons/SVGs:** SVGR (Vite plugin) and standard SVG assets
- **Content Management:** JSON files in `src/data/` (Projects, Experience, Education, etc.)

## Project Structure

- `src/main.jsx`: Application entry point, wraps the app with `NavbarProvider`.
- `src/App.jsx`: Main routing configuration.
- `src/components/`: Reusable UI components (Cards, Buttons, Layouts).
  - `MainLayout.jsx`: Defines the persistent background, navbar, and content area.
  - `ThreeScene.jsx`: Implements 3D elements using Three.js.
- `src/pages/`: Main page components (Home, About, Experience, etc.).
- `src/sections/`: Modular sections of pages (e.g., `About.jsx` used in `Home.jsx`).
- `src/data/`: JSON data stores for portfolio content, making it easy to update text without changing components.
- `src/context/`: React Contexts for global state (Navbar, Section Observers).
- `src/hooks/`: Custom React hooks (e.g., `userDarkMode.jsx`).

## Building and Running

| Command | Description |
| :--- | :--- |
| `npm install` | Install all project dependencies. |
| `npm run dev` | Start the development server (Vite). |
| `npm run build` | Generate a production build in the `dist/` directory. |
| `npm run lint` | Run ESLint to check for code quality issues. |
| `npm run preview` | Locally preview the production build. |

## Development Conventions

- **Data-Driven UI:** Content should be added or updated via the JSON files in `src/data/` whenever possible.
- **Styling:** Use Tailwind CSS utility classes. Custom colors and font families (Cinzel, Texturina, Fira Code) are defined in `tailwind.config.js`.
- **Icons:** SVGs can be imported as React components thanks to `vite-plugin-svgr`.
- **Responsive Design:** The layout uses a responsive sidebar/navbar that collapses on smaller screens.
- **3D Scenes:** Complex 3D logic should be encapsulated within dedicated components (like `ThreeScene.jsx`) using `three.js`.
