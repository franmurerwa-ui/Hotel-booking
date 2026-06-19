# 🏨 Booking.com Clone

A fully responsive hotel/accommodation booking web app inspired by Booking.com's design, built with **React + Vite + Tailwind CSS + React Router**.

![Booking Clone](https://img.shields.io/badge/React-18+-blue.svg)
![Vite](https://img.shields.io/badge/Vite-5+-purple.svg)
![Tailwind](https://img.shields.io/badge/Tailwind-3+-cyan.svg)

## ✨ Features

- 🎨 **Pixel-perfect Booking.com UI** - Matches the official design system
- 📱 **Fully Responsive** - Mobile, tablet, and desktop optimized
- 🔍 **Search Functionality** - Filter by destination, property type, and ratings
- 🏠 **Property Listings** - Browse hotels, apartments, resorts, and villas
- 📸 **Image Gallery** - Lightbox with carousel navigation
- ⭐ **Reviews & Ratings** - Display guest feedback
- 💾 **Save Properties** - Heart/save functionality on property cards
- 🎯 **Client-side Routing** - Smooth navigation with React Router

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR-USERNAME/booking-clone.git

# Navigate to project directory
cd booking-clone

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:5173`

### Build for Production

```bash
npm run build      # Creates optimized build in /dist
npm run preview    # Preview production build locally
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx                  # Sticky navigation with tabs
│   ├── Hero.jsx                    # Search bar with destination/dates/guests
│   ├── PropertyCard.jsx            # Reusable property card component
│   ├── PropertyTypes.jsx           # Browse by type carousel
│   ├── TrendingDestinations.jsx    # Featured cities grid
│   ├── TopUniqueProperties.jsx     # Curated property showcase
│   ├── HomesGuestsLove.jsx         # Popular properties carousel
│   ├── GeniusBanner.jsx            # Promotional banner
│   ├── PopularDestinations.jsx     # Destination links
│   └── Footer.jsx                  # Site footer
├── pages/
│   ├── Home.jsx                    # Landing page
│   ├── SearchResults.jsx           # Search + filters
│   ├── PropertyDetails.jsx         # Property details + booking
│   ├── Login.jsx                   # Sign in form (UI only)
│   └── Signup.jsx                  # Registration form (UI only)
├── data/
│   └── properties.json             # Mock property data
├── App.jsx                         # Route definitions
└── main.jsx                        # App entry point
```

## 🎨 Tech Stack

- **Frontend:** React 18+
- **Build Tool:** Vite 5+
- **Styling:** Tailwind CSS 3+
- **Routing:** React Router DOM 6+
- **Icons:** Custom SVG icons
- **Images:** Unsplash API

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/booking-clone.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite settings ✨
   - Click "Deploy"

### Deploy to Netlify

1. Push to GitHub (same as above)
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repo
5. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click "Deploy site"

## 📱 Responsive Breakpoints

- **Mobile:** < 640px - Single column, hamburger menu
- **Tablet:** 640px - 1024px - 2-3 column grids
- **Desktop:** > 1024px - Full layout with sidebar

## 🎨 Color Palette

```css
Primary Navy:  #003580
Accent Blue:   #0071c2
Yellow:        #febb02
Background:    #ffffff
Text:          #1a202c
```

## 📝 Routes

| Route              | Description                    |
|--------------------|--------------------------------|
| `/`                | Home page with search          |
| `/search`          | Search results with filters    |
| `/property/:id`    | Property details page          |
| `/login`           | Sign in (UI only)              |
| `/signup`          | Register (UI only)             |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is for educational purposes only. It's a UI clone inspired by Booking.com.

## 👨‍💻 Author

Your Name - [GitHub](https://github.com/YOUR-USERNAME)

## 🙏 Acknowledgments

- Design inspiration: [Booking.com](https://booking.com)
- Images: [Unsplash](https://unsplash.com)
- Icons: Custom SVG
