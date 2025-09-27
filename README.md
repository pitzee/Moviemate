# 🎬 Moviemate

A modern, responsive movie discovery platform built with Next.js and The Movie Database (TMDB) API. Discover trending movies, search for your favorites, and create your personal movie collection with a beautiful, dark-themed interface.

![Moviemate Logo](movimate/public/Images/logo.jpeg)

## ✨ Features

- 🎭 **Movie Discovery**: Browse trending, popular, and top-rated movies
- 🔍 **Advanced Search**: Find movies by title with real-time search
- ❤️ **Favorites System**: Save and manage your favorite movies
- 📱 **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- 🌙 **Dark Theme**: Beautiful dark interface with violet accents
- ⚡ **Fast Performance**: Built with Next.js 15 and optimized for speed
- 🎨 **Modern UI**: Clean, intuitive interface using Radix UI components

  <img width="1299" height="650" alt="Screenshot From 2025-09-21 13-17-46" src="https://github.com/user-attachments/assets/e2ad43c6-80db-4217-96d2-1e7ebd08b59f" />

  

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager
- TMDB API key (free)

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd movimate
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key_here
   NEXT_PUBLIC_TMDB_BEARER_TOKEN=your_tmdb_bearer_token_here
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🔑 API Setup

### TMDB API Configuration

Moviemate uses The Movie Database (TMDB) API to fetch movie data. Follow these steps to get your API credentials:

1. **Visit TMDB Website**

   - Go to [https://www.themoviedb.org/](https://www.themoviedb.org/)
   - Create a free account

2. **Get API Key**

   - Go to [API Settings](https://www.themoviedb.org/settings/api)
   - Request an API key
   - Copy your API Key (v3 auth)

3. **Get Bearer Token (Optional)**

   - For enhanced features, you can also get a Bearer Token
   - Go to [API Settings](https://www.themoviedb.org/settings/api) → API Access Token
   - Create a new token and copy it

4. **Environment Variables**

   Add these to your `.env.local` file:

   ```env
   # Required
   NEXT_PUBLIC_TMDB_API_KEY=your_api_key_here

   # Optional (for enhanced features)
   NEXT_PUBLIC_TMDB_BEARER_TOKEN=your_bearer_token_here
   ```

### API Endpoints Used

The application uses the following TMDB API endpoints:

- **Trending Movies**: `/trending/movie/week`
- **Popular Movies**: `/movie/popular`
- **Top Rated Movies**: `/movie/top_rated`
- **Search Movies**: `/search/movie`
- **Movie Details**: `/movie/{id}`
- **Movie Cast**: `/movie/{id}/credits`
- **Similar Movies**: `/movie/{id}/similar`

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: React Icons
- **HTTP Client**: Axios
- **State Management**: React Context API
- **API**: The Movie Database (TMDB)

## 📁 Project Structure

```
movimate/
├── public/
│   ├── Images/
│   │   └── logo.jpeg          # App logo
│   ├── favicon.svg            # Circular favicon
│   └── favicon.ico            # Fallback favicon
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   ├── not-found.tsx      # 404 page
│   │   ├── search/            # Search page
│   │   ├── movie/[id]/        # Movie details page
│   │   └── favorite/          # Favorites page
│   ├── components/            # Reusable components
│   │   ├── Navbar.tsx         # Desktop navigation
│   │   ├── MobileNavbar.tsx   # Mobile navigation
│   │   ├── MovieCard.tsx      # Movie card component
│   │   ├── Footer.tsx         # Footer component
│   │   └── ...
│   ├── contexts/              # React contexts
│   │   └── FavoritesContext.tsx
│   ├── config/                # Configuration files
│   │   └── tmdb.ts           # TMDB API config
│   └── utils/                 # Utility functions
│       └── tmdbApi.ts        # TMDB API wrapper
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🎨 Features Overview

### Home Page

- Trending movies carousel
- Popular movies grid
- Top-rated movies section
- Quick navigation to search and favorites

### Search Functionality

- Real-time movie search
- Search results with movie details
- Pagination support
- Error handling for no results

### Movie Details

- Comprehensive movie information
- Cast and crew details
- Similar movie recommendations
- Add to favorites functionality

### Favorites System

- Save movies to personal collection
- Remove favorites
- Persistent storage using React Context
- Responsive favorites grid

### Navigation

- Responsive design for all screen sizes
- Mobile-friendly hamburger menu
- Quick access to all features
- Beautiful circular logo branding

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Alternative with yarn
yarn dev
yarn build
yarn start
yarn lint
```

## 🌐 Deployment

### Vercel

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables in Vercel dashboard
   - Deploy!

### Other Platforms

The app can be deployed on any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🔒 Environment Variables

| Variable                        | Description                  | Required |
| ------------------------------- | ---------------------------- | -------- |
| `NEXT_PUBLIC_TMDB_API_KEY`      | TMDB API key for movie data  | Yes      |
| `NEXT_PUBLIC_TMDB_BEARER_TOKEN` | TMDB bearer token (optional) | No       |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the movie API
- [Radix UI](https://www.radix-ui.com/) for the beautiful component library
- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

## 🎯 Future Features

- [ ] User authentication
- [ ] Movie reviews and ratings
- [ ] Watchlist functionality
- [ ] Movie recommendations based on preferences
- [ ] Social features (share favorites)
- [ ] Advanced filtering options
- [ ] Dark/Light theme toggle
- [ ] PWA support

Enjoy discovering amazing movies with Moviemate! 🎬✨
