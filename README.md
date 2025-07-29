# Software Recruitment Homepage

A modern, responsive homepage for a software recruitment company built with React and Tailwind CSS.

## Features

- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations
- **Component-Based Architecture**: Well-organized React components for maintainability
- **Tailwind CSS**: Utility-first CSS framework for consistent styling
- **Interactive Elements**: Hover effects, mobile menu, and job carousel functionality

## Project Structure

```
sourceflow/
├── public/
│   ├── assets/
│   │   ├── arrow.svg
│   │   ├── office-lady.jpg
│   │   └── company logos (Atlassian.png, Microsoft.png, etc.)
│   ├── font/
│   │   └── HelveticaNeue font files
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Sponsors.jsx
│   │   ├── Jobs.jsx
│   │   └── Footer.jsx
│   ├── fonts/
│   │   └── HelveticaNeue font files
│   ├── App.jsx
│   ├── index.js
│   ├── index.css
│   └── fonts.css
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## Sections

1. **Navbar**: Navigation with dropdown menus and action buttons
2. **Hero**: Main banner with search functionality and professional imagery
3. **Sponsors**: Company logos showcasing partnerships
4. **Jobs**: Latest job listings with colorful cards and carousel navigation
5. **Footer**: Company information, social links, and organized navigation

## Installation & Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm start
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## Technologies Used

- **React 18**: Modern React with hooks and functional components
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing tool
- **Helvetica Neue**: Primary typography with Inter fallback

## Assets Included

- **Company Logos**: Atlassian, Microsoft, Oracle, VMware, Cloudflare
- **Icons**: Arrow SVG, cash icon, Python logo
- **Images**: Professional office imagery
- **Fonts**: Complete Helvetica Neue font family (multiple weights and styles)

## Color Scheme

- **Primary Blue**: `#064EA4` - Main branding color
- **Primary Orange**: `#F99D76` - Accent color for CTAs
- **Primary Yellow**: `#FCDF69` - Secondary accent color

## Typography

The project uses a carefully curated font stack:
- **Primary**: Helvetica Neue (locally hosted)
- **Fallback**: Inter (Google Fonts), Helvetica, Arial, sans-serif
- **Weights Available**: Light (300), Normal (400), Medium (500), Bold (700)
- **Font Loading**: Optimized with `font-display: swap` for better performance

## Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for demonstration purposes. 