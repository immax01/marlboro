# 🚀 DEPLOYMENT GUIDE - Step by Step

## Before You Start

You need:
- ✅ The project folder on your computer
- ✅ Node.js installed (download from nodejs.org)
- ✅ A terminal/command prompt

---

## FASTEST METHOD: Vercel (5 Minutes)

### Step 1: Open Terminal
- **Mac**: Press `Cmd + Space`, type "Terminal"
- **Windows**: Press `Win + R`, type "cmd"

### Step 2: Navigate to Project
```bash
cd path/to/marlboro-banya-project
```

### Step 3: Install Dependencies
```bash
npm install
```
⏱️ This takes 2-3 minutes. Wait for it to complete.

### Step 4: Test Locally (Optional)
```bash
npm start
```
Opens browser to `http://localhost:3000` - Check if everything looks good!
Press `Ctrl + C` to stop.

### Step 5: Install Vercel
```bash
npm install -g vercel
```

### Step 6: Deploy!
```bash
vercel
```

**Follow the prompts:**
```
? Set up and deploy? → Y (Yes)
? Which scope? → Your account
? Link to existing project? → N (No)
? What's your project's name? → marlboro-banya
? In which directory is your code located? → ./ (press Enter)
```

### Step 7: Get Your Live URL! 🎉
Vercel will show you a URL like:
```
https://marlboro-banya-abc123.vercel.app
```

Your site is LIVE! Share this URL or add a custom domain.

---

## Adding a Custom Domain (marlborobanya.com)

### In Vercel Dashboard:

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click your project → "Settings" → "Domains"
3. Enter `marlborobanya.com`
4. Vercel shows you DNS records to add

### At Your Domain Registrar (GoDaddy, Namecheap, etc.):

1. Login to your domain provider
2. Find "DNS Settings" or "Manage DNS"
3. Add these records from Vercel:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
4. Save and wait 5-60 minutes for DNS propagation

---

## ALTERNATIVE: Netlify Drop (Even Easier!)

### Step 1: Build the Project
```bash
cd path/to/marlboro-banya-project
npm install
npm run build
```

### Step 2: Deploy
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the `build` folder onto the page
3. Done! Get instant URL

---

## IF YOU HAVE EXISTING HOSTING (cPanel/FTP)

### Step 1: Build
```bash
npm install
npm run build
```

### Step 2: Upload via FTP
1. Open FileZilla (download from filezilla-project.org)
2. Connect to your hosting:
   - Host: `ftp.yourdomain.com`
   - Username: Your FTP username
   - Password: Your FTP password
3. Navigate to `public_html` or `www` folder
4. Upload ALL files from `build` folder
5. Make sure `index.html` is in the root

### Step 3: Configure (Important!)
Create `.htaccess` file in your hosting root:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 🆘 TROUBLESHOOTING

### "npm: command not found"
→ Install Node.js from [nodejs.org](https://nodejs.org)

### Build fails with errors
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Images not showing after deployment
- Make sure images are in `public` folder
- Use absolute paths: `/images/photo.jpg`
- Re-deploy after adding images

### White screen after deployment
- Check browser console (F12)
- Verify all files uploaded correctly
- Check `.htaccess` configuration

### Custom domain not working
- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct
- Clear browser cache

---

## 📋 QUICK CHECKLIST

Before deploying:
- [ ] Tested locally with `npm start`
- [ ] All images load correctly
- [ ] Contact form works
- [ ] Links open correctly
- [ ] Mobile responsive

After deploying:
- [ ] Test on mobile device
- [ ] Test all pages/sections
- [ ] Verify contact form sends emails
- [ ] Check loading speed
- [ ] Test on different browsers

---

## 💡 PRO TIPS

1. **Use Vercel for easiest deployment**
2. **Always test locally first**
3. **Keep the source code backed up**
4. **Use custom domain for professionalism**
5. **Enable HTTPS (auto on Vercel/Netlify)**

---

## Need Help?

**Vercel Issues:** [vercel.com/support](https://vercel.com/support)
**Netlify Issues:** [netlify.com/support](https://netlify.com/support)
**General React:** [react.dev/learn](https://react.dev/learn)

---

**Remember:** Vercel is recommended because:
- ✅ Free forever
- ✅ Automatic HTTPS
- ✅ Global CDN (fast everywhere)
- ✅ Automatic deployments
- ✅ Easy custom domains
- ✅ No credit card required

**You're just 5 commands away from being live!**
```bash
cd marlboro-banya-project
npm install
npm install -g vercel
vercel
# Done! 🎉
```
