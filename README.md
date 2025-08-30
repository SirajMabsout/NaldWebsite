# NALD Website - National Association for Local Development

A production-ready, responsive static website for the National Association for Local Development (NALD), built with semantic HTML5, CSS3, and vanilla JavaScript.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with fluid typography and flexible layouts
- **Accessibility**: WCAG AA compliant with proper semantic markup and ARIA labels
- **Performance Optimized**: Lazy loading images, optimized assets, and efficient code
- **SEO Ready**: Meta tags, Open Graph, structured data, and clean URLs
- **Modern CSS**: CSS custom properties, Grid/Flexbox layouts, and smooth animations
- **Vanilla JavaScript**: No frameworks, lightweight and fast

## 📁 Project Structure

```
nald-website/
├── index.html                 # Homepage
├── about.html                 # About page
├── programs.html              # Programs page
├── values.html                # Values page
├── affiliates.html            # Affiliates page
├── contact.html               # Contact page
├── robots.txt                 # SEO robots file
├── README.md                  # This file
├── css/
│   └── styles.css             # Main stylesheet
├── js/
│   └── main.js                # Main JavaScript file
├── images/                    # Image assets
│   ├── hero-placeholder.jpg
│   ├── about-placeholder.jpg
│   ├── programs-placeholder.jpg
│   ├── values-placeholder.jpg
│   ├── affiliates-placeholder.jpg
│   ├── contact-placeholder.jpg
│   ├── logo-placeholder.png
│   ├── favicon.png
│   └── programs/              # Program-specific images
│       ├── program-01.jpg
│       ├── program-02.jpg
│       ├── program-03.jpg
│       └── program-04.jpg
└── data/
    └── programs.json          # Programs data
```

## 🛠️ Getting Started

### Prerequisites

- A modern web browser
- A local web server (optional, but recommended)

### Installation

1. **Clone or download** the project files to your local machine
2. **Open the project folder** in your preferred code editor
3. **Start a local server** (recommended):
   - Using Python: `python -m http.server 8000`
   - Using Node.js: `npx serve .`
   - Using PHP: `php -S localhost:8000`
   - Or simply open `index.html` in your browser

### Running Locally

1. Navigate to the project directory
2. Start a local web server (see options above)
3. Open your browser and go to `http://localhost:8000`
4. The website should now be running locally!

## 🎨 Customization

### Adding Real Images

Replace the placeholder images in the `/images/` directory:

1. **Logo**: Replace `logo-placeholder.png` with your actual logo
2. **Hero Image**: Replace `hero-placeholder.jpg` with your hero background
3. **Page Images**: Replace other placeholder images with relevant content
4. **Program Images**: Add real program photos to `/images/programs/`
5. **Favicon**: Replace `favicon.png` with your brand favicon

### Updating Content

#### Programs Data
Edit `/data/programs.json` to update program information:

```json
{
  "id": "unique-program-id",
  "title": "Program Title",
  "description": "Program description",
  "date": "2024-01-15",
  "image": "program-image.jpg",
  "category": "Category Name"
}
```

#### Page Content
- Edit HTML files directly to update text content
- Modify CSS variables in `/css/styles.css` to change colors and styling
- Update contact information in all HTML files

### Styling Customization

The website uses CSS custom properties for easy theming. Edit these variables in `/css/styles.css`:

```css
:root {
  --brand: #2563eb;           /* Primary brand color */
  --accent: #f59e0b;          /* Accent color */
  --text: #1f2937;            /* Text color */
  --bg: #ffffff;              /* Background color */
  /* ... more variables */
}
```

## 📱 Responsive Breakpoints

- **Mobile**: 360px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## ♿ Accessibility Features

- Semantic HTML5 markup
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- High contrast ratios
- Screen reader friendly
- Alt text for all images

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Performance Features

- Lazy loading images
- Optimized CSS and JavaScript
- Minimal dependencies
- Efficient asset loading
- Responsive images with srcset
- Compressed assets

## 🚀 Deployment

### Static Hosting
This website can be deployed to any static hosting service:

- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your repository
- **GitHub Pages**: Push to a repository
- **AWS S3**: Upload files to a bucket
- **Any web server**: Upload files to your server

### Production Checklist

Before deploying to production:

- [ ] Replace all placeholder images with real content
- [ ] Update contact information
- [ ] Test all forms and links
- [ ] Validate HTML and CSS
- [ ] Test on multiple devices and browsers
- [ ] Check accessibility with screen readers
- [ ] Optimize images for web
- [ ] Update meta descriptions and titles

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is created for the National Association for Local Development (NALD). All rights reserved.

## 📞 Support

For questions or support:
- Email: naldevelopment@gmail.com
- Phone: +961 03626454
- Instagram: [@n_a_l_d_](https://www.instagram.com/n_a_l_d_?igsh=ZWY1MjZ6ZzRxajlr)
- Facebook: [NALD](https://www.facebook.com/naldevelopment)

---

**Built with ❤️ for community development and youth empowerment**
