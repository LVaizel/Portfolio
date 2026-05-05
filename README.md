# Gurvansh Singh Makkar — Portfolio

A personal portfolio website built with React.js. Dark terminal-inspired aesthetic.

## 🚀 Getting Started

### Install dependencies
```bash
npm install
```

### Run locally
```bash
npm start
```
Opens at http://localhost:3000

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js / Navbar.css
│   └── Footer.js / Footer.css
├── pages/
│   ├── Home.js / Home.css         ← Landing page
│   ├── About.js / About.css       ← Bio + timeline
│   ├── Projects.js / Projects.css ← Project grid with filters
│   ├── ProjectDetail.js / .css    ← Individual project (screenshots, video)
│   ├── Skills.js / Skills.css     ← Skill bars + certifications
│   └── Contact.js / Contact.css   ← Contact links
└── data/
    └── projects.js                ← ⭐ EDIT THIS to update projects
public/
└── media/                         ← Put project screenshots here
    ├── deep-learning-cv/
    ├── grandmas-cooking/
    └── ...
```

---

## 🖼 Adding Screenshots & Videos to Projects

1. **Add your images** to `public/media/<project-slug>/`  
   Example: `public/media/grandmas-cooking/home-page.png`

2. **Update `src/data/projects.js`** — find your project and fill in the `screenshots` array:

```js
screenshots: [
  { src: '/media/grandmas-cooking/home-page.png', caption: 'Home page' },
  { src: '/media/grandmas-cooking/recipe-list.png', caption: 'Recipe management' },
],
```

3. **Add a video** by setting `videoUrl` to a YouTube embed URL:
```js
videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',
```

---

## 📄 Adding Your Resume PDF

Put your resume at: `public/media/Gurvansh_Singh_Makkar_Resume.pdf`

The "Resume ↗" button in the navbar will link to it automatically.

---

## 🌍 Free Hosting Options

### Option 1: Netlify (Recommended — easiest)
1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com) → drag the `build/` folder into the deploy zone
3. Done! You get a free URL like `https://gurvansh-portfolio.netlify.app`

**For auto-deploy from GitHub:**
1. Push this repo to GitHub
2. Connect Netlify to the repo
3. Build command: `npm run build`
4. Publish directory: `build`

### Option 2: GitHub Pages
1. In `package.json`, set `"homepage": "https://LVaizel.github.io/portfolio"`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Run: `npm run deploy`

### Option 3: Vercel
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → import repo
3. Framework: Create React App → Deploy

---

## ✏️ Customization

- **Projects**: Edit `src/data/projects.js`
- **Skills & proficiency**: Edit `src/pages/Skills.js`
- **Timeline**: Edit `src/pages/About.js`
- **Colors/fonts**: Edit `src/index.css` (CSS variables at the top)
- **Contact links**: Edit `src/pages/Contact.js`
