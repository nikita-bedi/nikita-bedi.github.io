# Nikita Bedi - Portfolio Website

Modern React portfolio website with animated background, dark/light theme toggle, and easy contact options.

## Features

- 🎨 **Animated Background** - Beautiful gradient orbs that float across the page
- 🌓 **Theme Toggle** - Switch between light and dark modes (preference saved)
- 📱 **Fully Responsive** - Works great on mobile, tablet, and desktop
- 💬 **Easy Contact** - Multiple ways to reach out (research questions, code issues, website feedback)
- ⚡ **Fast & Modern** - Built with React + Vite for optimal performance

## Development

### Prerequisites
- Node.js (v16 or higher)
- npm

### Setup
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

Visit `http://localhost:5173` to see the site.

### Build for Production
```bash
npm run build
```

## Deployment to GitHub Pages

### First Time Setup
1. Make sure you have a GitHub repository at your desired github.io url
2. Install dependencies: `npm install`

### Deploy
```bash
npm run deploy
```

This will:
1. Build the production version
2. Deploy to the `gh-pages` branch
3. Your site will be live at `https://xx.github.io`

### Manual Deployment Steps
If you prefer to deploy manually:

```bash
# Build the site
npm run build

# Deploy the dist folder to gh-pages branch
npx gh-pages -d dist
```

## Project Structure

```
vite-project/
├── src/
│   ├── App.jsx           # Main app component
│   ├── App.css           # Styles with theme support
│   ├── main.jsx          # Entry point
│   ├── index.css         # Global styles
│   └── data/             # Data files
│       ├── publications.js
│       ├── projects.js
│       └── news.js
├── public/
│   └── profile.jpeg      # Profile photo
├── package.json
└── vite.config.js
```

## Customization

### Update Content
Edit the data files in `src/data/`:
- `publications.js` - Your publications
- `projects.js` - Your projects
- `news.js` - Recent news/updates

### Change Colors
Edit CSS variables in `src/App.css`:
- Light theme: `:root[data-theme="light"]`
- Dark theme: `:root[data-theme="dark"]`

### Update Profile Photo
Replace `public/profile.jpeg` with your photo

## Technologies

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **CSS3** - Styling with CSS variables for theming
- **gh-pages** - Deployment to GitHub Pages

## Contact

Questions about the code or website? Feel free to reach out!
- Email: nbedi@ucla.edu
- GitHub: [@nikita-bedi](https://github.com/nikita-bedi)

## License

This website is open source. Feel free to use it as inspiration for your own portfolio!
