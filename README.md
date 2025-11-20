# SEO Masters - Professional SEO Services Website

A modern, responsive React.js website for SEO Masters - a professional SEO services company that helps businesses achieve sustainable organic growth through data-driven strategies.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark/light theme support
- **Responsive Layout**: Fully responsive across all devices (mobile, tablet, desktop)
- **SEO Optimized**: Built with SEO best practices including meta tags, structured data, and semantic HTML
- **Fast Performance**: Optimized for speed with Vite build tool and lazy loading
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **TypeScript**: Type-safe development with TypeScript
- **Component Architecture**: Modular, reusable component structure

## 📋 Pages Included

- **Home**: Hero section, services overview, portfolio highlights, testimonials, blog preview
- **About**: Company story, mission/vision/values, team members, expertise
- **Services**: Detailed service descriptions with features and pricing
- **Portfolio**: Case studies with results and metrics
- **Pricing**: Three-tier pricing structure with detailed features
- **Blog**: Blog posts with categories, author info, and reading time
- **Contact**: Contact form with validation and contact information
- **Testimonials**: Customer reviews and success stories
- **FAQ**: Frequently asked questions organized by categories

## 🛠️ Tech Stack

- **Frontend**: React.js 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS for utility-first styling
- **Icons**: Lucide React for consistent iconography
- **Routing**: React Router v6 for client-side routing
- **State Management**: React Context for theme management
- **Animations**: CSS transitions and animations
- **SEO**: Custom SEO component with meta tags and structured data

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/seo-masters-website.git
   cd seo-masters-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 🏗️ Project Structure

```
seo-masters-website/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── layout/        # Header, Footer, etc.
│   │   ├── ui/            # Button, Card, Section, etc.
│   │   └── SEO/           # SEO component
│   ├── contexts/          # React Context providers
│   ├── data/              # Static data and configurations
│   ├── pages/             # Page components
│   ├── utils/             # Utility functions
│   ├── App.tsx            # Main App component
│   └── main.tsx           # Application entry point
├── index.html             # HTML template
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite configuration
```

## 🎨 Customization

### Site Configuration
Edit `src/data/siteData.tsx` to customize:
- Company name and description
- Contact information
- Social media links
- Navigation items
- Services and pricing
- Team members
- Testimonials

### Theme Configuration
Modify `tailwind.config.js` to customize:
- Colors and branding
- Typography
- Spacing and sizing
- Breakpoints

### SEO Configuration
Update `src/components/SEO/SEO.tsx` to customize:
- Default meta tags
- Structured data
- Social media meta tags

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌙 Dark/Light Theme

The website includes a theme toggle that switches between:
- **Light Theme**: Clean, professional appearance
- **Dark Theme**: Modern, eye-friendly dark mode

Theme preferences are saved in localStorage.

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader friendly
- Proper ARIA labels
- Focus indicators
- Color contrast compliance

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags for all pages
- Open Graph tags for social sharing
- Twitter Card tags
- Structured data (JSON-LD)
- Canonical URLs
- XML sitemap ready
- Robots.txt configuration
- Fast loading times
- Mobile-first indexing

## 📊 Performance

- Optimized images and assets
- Lazy loading for components
- Code splitting with dynamic imports
- Minified CSS and JavaScript
- Gzip compression ready
- CDN compatible

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

### Netlify
1. Connect your repository to Netlify
2. Configure build settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`

### Other Platforms
The build output in `dist/` can be deployed to any static hosting service:
- AWS S3 + CloudFront
- GitHub Pages
- Firebase Hosting
- Surge.sh
- Your own server

## 📞 Support

For support, email hello@seomasters.com or join our Slack channel.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 🙏 Acknowledgments

- React.js team for the amazing framework
- Tailwind CSS for the utility-first approach
- Lucide for the beautiful icons
- Vite for the fast build tool
- All contributors and supporters

---

**Built with ❤️ by SEO Masters** - Helping businesses grow online since 2024
