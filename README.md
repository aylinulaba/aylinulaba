# 🌟 Portfolio

This repository contains the codebase for my personal portfolio website.

---

## 📂 Structure
portfolio/
├── index.html
├── styles.css
├── custom.css
├── app.js
├── README.md
├── .gitignore
└── assets/
├── images/
├── icons/
└── fonts/

---

## 🖌️ Design System

### Typography
- **Headings:** Nunito Sans  
- **Body & UI:** Inter  
- **Logotype:** Plus Jakarta Sans  

Responsive scales are defined for:
- **Desktop (base)**
- **Medium (`max-width: 1200px`)**
- **Small (`max-width: 640px`)**

### Colors
- **Brand Palette:** Primary (Bloodsmoke), Secondary (Late Homework), Accent (Open Book)  
- **Neutral Palette:** Jam Jar (50–900 scale)  
- **Semantic Colors:** Success, Warning, Error, Info  
- **Interaction States:** Buttons (primary, secondary, ghost, disabled)  
- **Text / Surface / Border** definitions  
- **Overlay & Divider** layers  

All tokens are stored in `styles.css` as **CSS custom properties** (`--color-…`).

### Icons
- **Lucide Icons** are integrated via ESM in `app.js`.  
  Example usage (not active in `index.html` yet):
  ```html
  <i data-lucide="heart"></i>

---

## 🛠️ Tech
- HTML5  
- CSS3  
- JavaScript  
- Git & GitHub  

---

## 📄 License
MIT License © 2025