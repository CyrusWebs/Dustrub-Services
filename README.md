# Dustrub Services - Professional Cleaning Website

A modern, responsive website for Dustrub Services built with React, Vite, and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Gradient accents, smooth animations, and interactive components
- **Pages**:
  - Home - Hero section with CTA
  - Services - 3 main service offerings
  - Why Us - Key features and benefits
  - About Us - Company mission, values, and team
  - Contact - Contact information and form
  - Get Quote - Quote request form

- **Interactive Elements**:
  - Floating action buttons for call and partnership
  - Modal dialogs for more information
  - Responsive mobile navigation
  - Smooth hover effects and transitions

## Tech Stack

- **React 18** - UI library
- **React Router v7** - Client-side routing
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful SVG icons

## Getting Started

### Installation

1. Navigate to the project directory:
```bash
cd "c:\Users\ADMIN\Desktop\dustrub services"
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The site will open at `http://localhost:5173` with hot module reloading enabled.

### Building

Create a production build:
```bash
npm run build
```

Output files will be in the `dist` directory.

### Preview

Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Layout.jsx           # Main layout wrapper
│   ├── Navigation.jsx       # Header with navigation
│   ├── Footer.jsx          # Footer component
│   └── modals/
│       ├── CallModal.jsx    # Contact modal
│       ├── PartnerModal.jsx # Partnership modal
│       └── StoryModal.jsx   # Company story modal
├── pages/
│   ├── Home.jsx            # Homepage
│   ├── Services.jsx        # Services page
│   ├── WhyUs.jsx          # Why choose us page
│   ├── AboutUs.jsx        # About us page
│   ├── Contact.jsx        # Contact page
│   └── GetQuote.jsx       # Quote request page
├── App.jsx                # Main app component with routes
├── main.jsx               # React entry point
└── index.css              # Global styles
```

## Design System

### Colors
- **Primary**: Blue-600 to Cyan-500 gradient
- **Secondary**: Purple-600 to Pink-500 (partnership)
- **Background**: White with subtle blue/cyan gradients
- **Text**: Gray-900 (headings), Gray-600 (body)

### Typography
- **Font**: Poppins (from Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Hierarchy**: H1 (48px), H2 (30px), H3 (24px), Body (20px)

### Spacing & Layout
- Max width container: 1280px (max-w-7xl)
- Grid gaps: 8 units (32px) for sections
- Card padding: 8 units (32px)

## Customization

### Change Colors
Edit `tailwind.config.js` to modify the color scheme.

### Update Content
Edit individual page components in `src/pages/` to update content.

### Add New Pages
1. Create a new component in `src/pages/`
2. Add route to `src/App.jsx`
3. Add navigation link in `src/components/Navigation.jsx`

## Future Enhancements

- [ ] Backend API integration
- [ ] Form submission handling
- [ ] Email notifications
- [ ] Booking/scheduling system
- [ ] Customer testimonials
- [ ] Blog section
- [ ] Admin dashboard
- [ ] Multi-language support
- [ ] Search functionality
- [ ] Image gallery with real photos

## License

© 2025 Dustrub Services. All rights reserved.
