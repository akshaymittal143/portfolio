# Akshay Mittal - Professional Portfolio

A modern, responsive portfolio website showcasing achievements in AI-Augmented DevSecOps, Secure Cloud-Native Infrastructure, and academic research.

**Live Site**: [akshaymittal143.github.io](https://akshaymittal143.github.io)

## Features

* **Hero Section**: Key metrics and achievements (50M+ transactions secured, 30+ publications, 119+ peer reviews, $2M+ cost savings)
* **About**: Comprehensive professional background and expertise
* **Awards & Recognition**: IEEE Best Paper Awards, PayPal Innovation Award, IEEE Senior Member status
* **Technical Expertise**: AI & Cybersecurity, DevSecOps, Cloud Infrastructure, Programming & Tools
* **Research & Publications**: 30+ peer-reviewed publications with detailed cards
* **Book Chapters**: Springer Nature and IGI Global contributions
* **Academic Service**: Peer review, TPC memberships, hackathon judging
* **Speaking & Media**: Conference presentations, podcasts, expert panels
* **Selected Work**: Industry impact at PayPal, Charles Schwab, and open-source contributions
* **Contact**: Social links and email

## Technology Stack

* **HTML5**: Semantic markup
* **CSS3**: Modern styling with CSS Grid and Flexbox
* **JavaScript**: Smooth scrolling, mobile navigation, intersection observer animations
* **Fonts**: Inter font family from Google Fonts
* **Icons**: SVG icons for social links

## Getting Started

### Local Development

1. Clone this repository:
   ```bash
   git clone https://github.com/akshaymittal143/akshaymittal143.github.io.git
   cd akshaymittal143.github.io
   ```

2. Open `index.html` in your browser, or use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server -p 8000
   ```

3. Visit `http://localhost:8000` in your browser

### GitHub Pages Deployment

This repository is configured for GitHub Pages. To deploy:

1. **Push to GitHub**: Ensure your repository is pushed to GitHub
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository settings on GitHub
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

3. **Access Your Site**: Your site will be available at:
   `https://akshaymittal143.github.io`

   Note: It may take a few minutes for changes to propagate.

### Custom Domain (Optional)

To use a custom domain:

1. Create a `CNAME` file in the root directory with your domain:
   ```
   yourdomain.com
   ```

2. Configure DNS settings:
   - Add a CNAME record pointing to `akshaymittal143.github.io`
   - Or add A records for GitHub Pages IPs (see GitHub Pages docs)

3. Enable "Enforce HTTPS" in GitHub Pages settings

## Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── README.md              # This file
├── static/
│   ├── css/
│   │   └── style.css      # Main stylesheet
│   ├── js/
│   │   └── main.js        # JavaScript for interactivity
│   └── images/
│       ├── favicon.ico    # Site favicon
│       └── profile_pic.jpg # Profile photo
└── templates/             # Legacy templates (can be removed)
```

## Customization

### Updating Content

1. **Personal Information**: Edit `index.html` and update:
   - Hero section title and subtitle
   - About section text
   - Contact email and social links

2. **Publications**: Add new publications in the Research section by copying a `publication-card` div

3. **Work Experience**: Update work cards in the Selected Work section

4. **Awards**: Add new awards in the Awards section

### Styling

- Colors: Edit CSS variables in `static/css/style.css`:
  ```css
  :root {
    --primary-color: #2563eb;
    --primary-dark: #1e40af;
    /* ... */
  }
  ```

- Fonts: Change the font family in the `@import` statement or update `font-family` in CSS

### Images

- Replace `static/images/profile_pic.jpg` with your profile photo
- Update `static/images/favicon.ico` with your favicon

## Browser Support

* Chrome (latest)
* Firefox (latest)
* Safari (latest)
* Edge (latest)
* Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

* Optimized images
* CSS Grid and Flexbox for layout
* Smooth scrolling and animations
* Mobile-responsive design
* Fast loading times

## Contributing

This is a personal portfolio website. If you'd like to suggest improvements or report bugs, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

**Akshay Mittal**
- Email: akshaycanodia@gmail.com
- LinkedIn: [linkedin.com/in/akshaymittal143](https://linkedin.com/in/akshaymittal143)
- GitHub: [github.com/akshaymittal143](https://github.com/akshaymittal143)
- Google Scholar: [scholar.google.com/citations?user=bPibYWkAAAAJ](https://scholar.google.com/citations?user=bPibYWkAAAAJ)
- ORCID: [orcid.org/0009-0008-5233-9248](https://orcid.org/0009-0008-5233-9248)

---

**Last Updated**: January 2026
