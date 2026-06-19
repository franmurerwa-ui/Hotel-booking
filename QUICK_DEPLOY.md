# ⚡ Quick Deploy Cheat Sheet

## 🚀 Deploy in 5 Minutes

### 1️⃣ Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/booking-clone.git
git push -u origin main
```

### 2️⃣ Deploy to Vercel
1. Go to **[vercel.com](https://vercel.com)**
2. Sign up with GitHub
3. Click **"New Project"**
4. Import `booking-clone`
5. Click **"Deploy"** ✨

**Done!** Your site is live at `your-project.vercel.app`

---

## 📝 Future Updates

```bash
git add .
git commit -m "Your update message"
git push
```

Vercel auto-deploys! 🎉

---

## 🔗 Important Commands

```bash
# Check status
git status

# See changes
git diff

# View commit history
git log --oneline

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Create new branch
git checkout -b feature-name

# Test build locally
npm run build
npm run preview
```

---

## 🆘 Common Issues

**404 on refresh?**
✅ Already fixed with `vercel.json`

**Build failed?**
```bash
npm run build  # Test locally first
```

**Git push rejected?**
```bash
git pull origin main --rebase
git push
```

**Forgot to add files?**
```bash
git add forgotten-file.js
git commit --amend --no-edit
git push --force
```

---

## 🎯 Pro Tips

1. **Test before pushing:**
   ```bash
   npm run build
   npm run preview
   ```

2. **Write good commit messages:**
   - ❌ "Fixed stuff"
   - ✅ "Fix: Mobile menu not closing on link click"

3. **Deploy preview branches:**
   ```bash
   git checkout -b feature-name
   git push origin feature-name
   ```
   Vercel creates preview URLs automatically!

4. **Check deploy status:**
   - Vercel Dashboard → Your Project → Deployments

---

## 📱 Share Your Project

**LinkedIn Post Template:**
```
🚀 Just deployed my Booking.com clone!

Features:
✅ Fully responsive (mobile/tablet/desktop)
✅ Search & filter properties
✅ Dynamic routing with React Router
✅ Modern UI with Tailwind CSS

🔗 Live: [your-vercel-url]
💻 Code: [your-github-url]

Built with React, Vite, and Tailwind CSS

#WebDevelopment #React #Frontend #Portfolio
```

**Twitter/X Template:**
```
🏨 Built a Booking.com clone with React + Vite!

✨ Fully responsive
🎨 Tailwind CSS
⚡ Lightning fast
🔍 Search & filters

Live: [url]
Code: [github]

#ReactJS #WebDev #100DaysOfCode
```

---

## 🎓 Resources

- **Vite Deploy Guide:** https://vitejs.dev/guide/static-deploy
- **Vercel Docs:** https://vercel.com/docs
- **Git Cheat Sheet:** https://education.github.com/git-cheat-sheet-education.pdf
- **React Router:** https://reactrouter.com

---

**Need detailed help?** → See `DEPLOYMENT_GUIDE.md` 📖
