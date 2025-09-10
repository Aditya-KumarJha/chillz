# Chillz 🍦

A fun, interactive ice cream-themed web application where users can explore different ice cream flavors, enjoy smooth animations, and switch themes. Built with React, Tailwind CSS, and Framer Motion, Chillz offers a visually delightful and responsive experience for ice cream lovers.

---

## Live Demo
**🔗 Check Website:** [Click Here](https://chillz-mauve.vercel.app/)

---

## Project Overview
- Chillz aims to provide an engaging, playful interface for exploring ice cream flavors:
  - Hero Section: Animated ice cream image with flavor selection.
  - Flavor Selector: Tilted flavor icons that straighten on hover and zoom slightly.
  - Theme Management: Switch between different flavor themes.
  - Responsive Design: Optimized for mobile, tablet, and desktop screens.
  - Smooth Animations: Using Framer Motion for fade, slide, and hover effects.

---

## Folder Structure
```bash
chillz/
├─ public/
│  └─ images/             # All ice cream images/icons
│ 
├─ src/
│  ├─ components/         # Reusable React components
│  │  ├─ HeroSection.jsx
│  │  └─ Navbar.jsx
│  ├─ context/            # ThemeContext for flavor/themes management
│  │  └─ ThemeContext.jsx
│  ├─ App.jsx             # Main React App component
│  └─ main.jsx            # React entry point
├─ .gitignore
├─ package.json
└─ README.md
└─ License
```

---

## Setup & Deployment Instructions
### Prerequisites
#### Node.js (>=18)

```bash
npm or yarn
```

### Installation
#### Clone the repository:

```bash
git clone https://github.com/Aditya-KumarJha/chillz.git
```
```bash
cd chillz
```

### Install dependencies:

```bash
npm install
or
yarn install
```

### Start the development server:

```bash
npm run dev
```

Runs at http://localhost:5173

## Limitations
- Currently supports only PNG images for ice cream flavors.

- Animations might have slight performance issues on very low-end devices.

- Theme switching is limited to predefined flavors/themes.

- No backend or database integration yet — all flavor data is local.

## Internal Documentation & Comments
- ThemeContext.jsx: Handles all flavor theme management.

- HeroSection.jsx: Main UI for the hero section, includes:

- AnimatePresence + motion.img for smooth image transitions.

- Flavor selector with hover tilt and zoom effects.

- Tailwind CSS classes: Utility-first styling applied throughout for rapid development.

- Components are reusable and self-contained to allow easy future expansion.

### Tip for Developers:
- When adding new ice cream flavors:

- Add the image to public/images/Component-<index>.png.

- Update the themes object in ThemeContext.jsx.

- The HeroSection will automatically render the new flavor.

## License

MIT License © 2025 Aditya Kumar Jha
