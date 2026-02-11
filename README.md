# My Games Website

A modern, dark-themed static website for showcasing game landing pages, inspired by Doctor Shinobi's design.

## Project Structure

```
Website/
├── index.html                 # Main page with game buttons
├── deadwatch.html            # Dead Watch game landing page
├── outcore.html              # Outcore game landing page
├── styles.css                # Global styles
├── images/
│   ├── deadwatch-button.svg  # Dead Watch button image
│   ├── deadwatch-header.svg  # Dead Watch header image
│   ├── outcore-button.svg    # Outcore button image
│   └── outcore-header.svg    # Outcore header image
└── README.md                 # This file
```

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern Dark Theme**: Dark gradient backgrounds with cyan and magenta accents
- **Smooth Animations**: Glowing text effects and hover animations
- **SVG Graphics**: Vector-based images for crisp quality at any resolution
- **Easy Navigation**: Intuitive navigation between game pages
- **Static Site**: No server or build process required - just open in a browser

## Colors Used

- **Primary Accent**: Cyan (`#00d4ff`)
- **Secondary Accent**: Magenta (`#ff00ff`)
- **Text**: Light gray (`#e0e0e0`)
- **Background**: Dark gradients with blue/purple tones

## How to Use

1. **Open in Browser**: Simply open `index.html` in any modern web browser
2. **Local Server** (Optional): For best results, serve from a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js with http-server
   npx http-server
   ```
3. **Customize**: Edit the HTML files to update content, and modify `styles.css` for design changes

## Customization

### Update Game Content
Edit `deadwatch.html` and `outcore.html` to:
- Change game descriptions
- Update features lists
- Modify social media links
- Add more content sections

### Replace Images
The SVG images can be replaced with your own:
1. Save your images in the `images/` folder
2. Update the image paths in the HTML files
3. Supported formats: `.png`, `.jpg`, `.svg`, `.gif`

### Modify Styling
Edit `styles.css` to:
- Change color scheme (search for `#00d4ff` and `#ff00ff`)
- Adjust font sizes and spacing
- Modify animations and hover effects
- Update responsive breakpoints

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Tips

1. **Replace Images**: For professional results, create or commission custom artwork for the button and header images
2. **Add Social Links**: Update the `href` attributes in the social links section to point to your actual social media
3. **SEO**: Update meta tags in each HTML file for better search engine visibility
4. **Analytics**: Consider adding Google Analytics or similar for tracking

## License

Feel free to use and modify this template for your projects!
