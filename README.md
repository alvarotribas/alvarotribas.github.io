# Personal Academic Website

A clean, minimal academic website for PhD students in Electrical Engineering / Telecommunications.

## Project Structure

```
├── index.html              ← Main (and only) HTML file — all 5 pages live here
├── css/
│   └── style.css           ← All styling
├── js/
│   └── main.js             ← Navigation logic & publication filter
├── images/                 ← Add your photo here (create this folder)
│   └── photo.jpg           ← Your profile photo (optional)
├── files/                  ← Add your CV PDF here (create this folder)
│   └── cv.pdf              ← Your CV (linked from the CV page)
└── .github/
    └── workflows/
        └── deploy.yml      ← Automatic GitHub Pages deployment
```

## How to Personalise

Open `index.html` in any text editor and search for the following placeholders:

| Placeholder | Replace with |
|---|---|
| `Jane Doe` | Your full name |
| `University Name` | Your university |
| `Prof. Supervisor Name` | Your advisor's name |
| `jane.doe@university.edu` | Your email |
| `yourusername` | Your GitHub username |
| `yourprofile` | Your LinkedIn profile slug |
| `0000-0000-0000-0000` | Your ORCID |

Add your profile photo to an `images/` folder and update the `<div class="profile-photo-placeholder">` block to:
```html
<img src="images/photo.jpg" alt="Your Name" class="profile-photo" />
```

Add your CV PDF to a `files/` folder. The download link in the CV tab will work automatically.

## Deploying to GitHub Pages

### First time setup

1. Create a new **public** repository on GitHub (e.g. `yourusername.github.io`).
2. Clone it locally:
   ```bash
   git clone https://github.com/yourusername/yourusername.github.io
   ```
3. Copy all the files from this project into that folder.
4. Push to GitHub:
   ```bash
   git add .
   git commit -m "Initial website"
   git push origin main
   ```
5. In your GitHub repository, go to **Settings → Pages**.
6. Under **Source**, select **GitHub Actions**.
7. The workflow (`.github/workflows/deploy.yml`) will run automatically on every push.
8. Your site will be live at `https://yourusername.github.io` within a minute or two.

### Updating your site

Whenever you want to update anything (new publication, news item, etc.):
```bash
git add .
git commit -m "Add new publication"
git push origin main
```
GitHub Actions will redeploy automatically.

## Customisation Tips

- **Colours**: Open `css/style.css` and change `--accent: #1d4ed8` to any colour you like.
- **Fonts**: The fonts are loaded from Google Fonts. You can swap them in the `<link>` tag in `index.html`.
- **Adding publications**: Copy one of the `<li class="pub-item">` blocks in `index.html` and fill in your details. Set `data-type` to `journal`, `conference`, or `preprint` for the filter to work.
- **Adding updates**: Copy one of the `<li class="update-item">` blocks and pick the right badge class (`badge-paper`, `badge-talk`, `badge-award`, `badge-news`, `badge-travel`).
