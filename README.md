# Chillz 🍦

A fun, interactive ice cream-themed web application where users can explore different ice cream flavors, enjoy smooth animations, and switch themes. Built with **React**, **TailwindCSS**, and **Framer Motion**, Chillz offers a visually delightful and responsive experience for ice cream lovers.  

---

## **Project Overview**

**Chillz** aims to provide an engaging, playful interface for exploring ice cream flavors:

- **Hero Section:** Animated ice cream image with flavor selection.
- **Flavor Selector:** Tilted flavor icons that straighten on hover and zoom slightly.
- **Theme Management:** Switch between different flavor themes.
- **Responsive Design:** Optimized for mobile, tablet, and desktop screens.
- **Smooth Animations:** Using Framer Motion for fade, slide, and hover effects.

---

## **Folder Structure**

```bash
chillz/
├─ public/
│ ├─ images/ # All ice cream images/icons
│ 
├─ src/
│ ├─ components/ # Reusable React components
│ │ └─ HeroSection.jsx
│ │ └─ Navbar.jsx
│ ├─ context/ # ThemeContext for flavor/themes management
│ │ └─ ThemeContext.jsx
│ ├─ App.jsx # Main React App component
│ └─ main.jsx # React entry point
├─ .gitignore
├─ package.json
└─ README.md
```

---

## **Setup & Deployment Instructions**

### **Prerequisites**
- Node.js (>=18)
- npm or yarn

### **Installation**
1. Clone the repository:  
```bash
git clone https://github.com/yourusername/chillz.git
cd chillz
