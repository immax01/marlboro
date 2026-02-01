# Marlboro Banya Website

A modern, luxury React website for Marlboro Banya - New Jersey's premier Russian bathhouse and spa.

## 🚀 Quick Start

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. **Extract or navigate to the project folder:**
   ```bash
   cd marlboro-banya-project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

   The site will open at `http://localhost:3000`

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```

This creates a `build` folder with optimized files ready for deployment.

## 🌐 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

**Perfect for beginners - Free hosting with automatic deployments**

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   cd marlboro-banya-project
   vercel
   ```

3. **Follow the prompts:**
   - Login/signup
   - Confirm project settings
   - Get instant live URL!

**Or use the web interface:**
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub/GitLab/Bitbucket
3. Click "Import Project"
4. Upload your project folder
5. Click "Deploy"

**Custom Domain:**
- Add your domain in Vercel dashboard
- Update DNS at your domain registrar with Vercel's nameservers

---

### Option 2: Netlify

**Great for drag-and-drop deployment**

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy:**
   - Go to [netlify.com](https://netlify.com)
   - Drag the `build` folder onto the upload zone
   - Get instant live site!

**Or use Netlify CLI:**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

---

### Option 3: GitHub Pages

**Free hosting through GitHub**

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json:**
   ```json
   "homepage": "https://yourusername.github.io/marlboro-banya",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

---

### Option 4: Traditional Hosting (cPanel/FTP)

**For existing hosting services like GoDaddy, Bluehost, etc.**

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload files:**
   - Use FileZilla or cPanel File Manager
   - Upload ALL contents of the `build` folder to your `public_html` or `www` directory
   - Make sure `index.html` is in the root directory

---

## 🔧 Project Structure

```
marlboro-banya-project/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── App.js              # Main component
│   ├── index.js            # Entry point
│   └── index.css           # Tailwind CSS
├── package.json            # Dependencies
├── tailwind.config.js      # Tailwind configuration
└── README.md              # This file
```

## 🎨 Features

- ✨ Premium minimalist design
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎭 Smooth animations and transitions
- 🖼️ Photo gallery with hover effects
- 📋 Contact form integration
- 🔗 Social media links
- 💳 Online booking integration

## 🛠️ Technologies Used

- React 18
- Tailwind CSS 3
- Lucide React (icons)
- Modern CSS animations

## 📝 Customization

### Update Content:
Edit `src/App.js` to modify:
- Text content
- Pricing
- Hours
- Contact information

### Change Colors:
Modify Tailwind classes in `src/App.js`:
- Current: `stone-50`, `stone-900` (neutral stone palette)
- Options: `slate`, `gray`, `zinc`, `neutral`, `blue`, `green`, etc.

### Add Images:
Place images in `public` folder and reference as:
```jsx
<img src="/your-image.jpg" alt="description" />
```

## 🆘 Troubleshooting

**Build fails?**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Port already in use?**
```bash
# Change port in package.json or run:
PORT=3001 npm start
```

**Tailwind classes not working?**
- Verify `tailwind.config.js` exists
- Check `index.css` has Tailwind directives
- Restart development server

## 📞 Support

For issues with:
- **Deployment:** Check the hosting platform's documentation
- **React/Development:** See [React docs](https://react.dev)
- **Tailwind CSS:** See [Tailwind docs](https://tailwindcss.com)

## 📄 License

© 2024 Marlboro Banya. All rights reserved.

---

## 🎯 Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Test locally: `npm start`
3. ✅ Build for production: `npm run build`
4. ✅ Deploy using any option above
5. ✅ Add custom domain (optional)

**Recommended: Start with Vercel - it's the fastest and easiest!**
