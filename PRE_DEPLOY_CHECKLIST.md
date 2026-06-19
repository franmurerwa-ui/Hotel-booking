# ✅ Pre-Deployment Checklist

Run through this checklist before pushing to GitHub and deploying.

## 🔍 Code Quality

- [ ] **No console errors**
  ```bash
  npm run dev
  # Open browser DevTools (F12) → Check Console tab
  ```

- [ ] **Build succeeds**
  ```bash
  npm run build
  # Should complete without errors
  ```

- [ ] **Preview works**
  ```bash
  npm run preview
  # Test at http://localhost:4173
  ```

## 📱 Responsive Testing

Test on different screen sizes (use browser DevTools - F12 → Toggle device toolbar):

- [ ] **Mobile (375px - iPhone SE)**
  - [ ] Hamburger menu works
  - [ ] Search form is vertical stacked
  - [ ] No horizontal scroll
  - [ ] All images load
  - [ ] Text is readable

- [ ] **Tablet (768px - iPad)**
  - [ ] Layout adjusts properly
  - [ ] Nav tabs visible
  - [ ] Cards display in 2-3 columns

- [ ] **Desktop (1440px+)**
  - [ ] Full navigation visible
  - [ ] Property cards in 4-5 columns
  - [ ] Booking widget is sticky
  - [ ] Footer looks good

## 🧭 Navigation Testing

- [ ] **Home page loads** (`/`)
- [ ] **Search works** (`/search`)
- [ ] **Property details load** (`/property/1`)
- [ ] **Login page accessible** (`/login`)
- [ ] **Signup page accessible** (`/signup`)
- [ ] **Header navigation works**
- [ ] **Footer links work**

## 🎨 Visual Testing

- [ ] **All images load** (no broken image icons)
- [ ] **Colors are correct**
  - Header: #003580 (navy blue)
  - Search button: #0071c2 (blue)
  - Yellow border: #febb02
- [ ] **Fonts load** (Inter from Google Fonts)
- [ ] **Icons display correctly**
- [ ] **Hover states work**
- [ ] **Buttons are clickable**

## 🔧 Functionality Testing

- [ ] **Search functionality**
  - [ ] Can type destination
  - [ ] Can select dates
  - [ ] Can adjust guest count
  - [ ] Search button navigates to results

- [ ] **Search results page**
  - [ ] Filters work (property type, rating)
  - [ ] Sort dropdown works
  - [ ] Mobile filter drawer opens/closes
  - [ ] Property cards are clickable

- [ ] **Property details page**
  - [ ] Image gallery works
  - [ ] Lightbox opens/closes
  - [ ] Image navigation works (prev/next)
  - [ ] Room table displays properly
  - [ ] Booking widget displays

- [ ] **Heart/Save functionality**
  - [ ] Heart icon toggles on click
  - [ ] Doesn't navigate when clicking heart
  - [ ] Works on all property cards

## 📄 Files Check

- [ ] **`.gitignore` exists** (excludes node_modules, dist, .env)
- [ ] **`vercel.json` exists** (handles React Router routes)
- [ ] **`README.md` is updated** with your info
- [ ] **`package.json` is correct** (name, version, scripts)

## 🧹 Clean Up

- [ ] **Remove console.logs**
  ```bash
  # Search for console.log in your code
  # Remove or comment them out
  ```

- [ ] **No commented-out code blocks**
  (Remove large commented sections)

- [ ] **No TODO comments left**
  (Or create GitHub issues for them)

- [ ] **Remove unused imports**
  (Most editors highlight these)

## 🔐 Security Check

- [ ] **No API keys in code** (use environment variables)
- [ ] **No passwords committed**
- [ ] **No sensitive data in properties.json**

## 📊 Performance

- [ ] **Images are optimized** (not too large)
- [ ] **Using loading="lazy"** on images
- [ ] **No unnecessary dependencies**

## 📝 Documentation

- [ ] **README has:**
  - [ ] Project description
  - [ ] Setup instructions
  - [ ] Tech stack list
  - [ ] Deployment instructions
  - [ ] Your name/contact

- [ ] **Code comments where needed**
  (Complex logic should have explanations)

## 🎯 Git Preparation

- [ ] **Git is initialized**
  ```bash
  git status
  # Should show your files
  ```

- [ ] **Staged all changes**
  ```bash
  git add .
  git status
  # Should show files ready to commit
  ```

- [ ] **Good commit message ready**
  ```
  ✅ "Initial commit: Booking.com clone"
  ❌ "first commit"
  ```

## 🌐 GitHub Ready

- [ ] **GitHub account created**
- [ ] **Repository name decided**
  Suggestion: `booking-clone` or `hotel-booking-app`

- [ ] **Repository description ready**
  ```
  Fully responsive Booking.com clone built with React, 
  Vite, and Tailwind CSS. Features property search, 
  filters, and detailed booking interface.
  ```

## 🚀 Deployment Ready

- [ ] **Vercel account created** (or Netlify)
- [ ] **Connected to GitHub**
- [ ] **Deployment plan chosen**

## 🎨 Optional Improvements

- [ ] Add a favicon (replace default Vite icon)
- [ ] Add meta tags for social sharing
- [ ] Add screenshots to README
- [ ] Create a demo video/GIF
- [ ] Set up custom domain (optional)

---

## ✨ Final Steps

Once everything above is checked:

```bash
# 1. Commit your code
git commit -m "Initial commit: Booking.com clone with React + Vite"

# 2. Create GitHub repo and push
git remote add origin https://github.com/YOUR-USERNAME/booking-clone.git
git push -u origin main

# 3. Deploy on Vercel
# Go to vercel.com → Import Project → Deploy
```

---

## 🎉 Post-Deployment

After deploying:

- [ ] **Visit your live site**
- [ ] **Test all features on live site**
- [ ] **Check mobile on real device** (if possible)
- [ ] **Share with friends for feedback**
- [ ] **Add live link to your portfolio**
- [ ] **Update resume with project link**
- [ ] **Post on LinkedIn**

---

## 🐛 If Something Goes Wrong

**Build fails on Vercel:**
1. Check build logs in Vercel dashboard
2. Try `npm run build` locally
3. Check Node version matches

**Routes don't work:**
1. Verify `vercel.json` exists
2. Check Vercel dashboard → Settings → Rewrites

**Images don't load:**
1. Check all URLs are HTTPS
2. Check browser console for errors
3. Verify images exist in properties.json

**Site looks broken:**
1. Clear browser cache
2. Check if CSS is loading (DevTools → Network)
3. Verify Tailwind built correctly

---

**All checked?** You're ready to deploy! 🚀

See `QUICK_DEPLOY.md` for deployment commands.
