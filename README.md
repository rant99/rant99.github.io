# Ryan Anthony — Academic Website

Built with Jekyll, deployed via GitHub Pages.

## Quick Start

### 1. Add your photo
- Place your headshot at `assets/img/profile.jpg`
- Open `index.html` and uncomment the `<img>` tag, delete the placeholder `<div>`

### 2. Add your CV
- Place your PDF at `assets/pdf/cv.pdf`

### 3. Deploy to GitHub Pages
- Rename this repo to `<yourgithubusername>.github.io`
- Go to Settings → Pages → Source → **GitHub Actions**
- Push to `main` — the site builds automatically via `.github/workflows/deploy.yml`

### 4. Local preview (optional)
```bash
bundle install
bundle exec jekyll serve
# visit http://localhost:4000
```

## File Structure

```
├── _config.yml          # Site settings (name, email, URL)
├── _layouts/
│   └── default.html     # Main HTML shell, nav, footer
├── _pages/
│   ├── research.html    # All papers with abstract toggles
│   └── teaching.html    # Teaching page
├── assets/
│   ├── css/main.css     # All styles
│   ├── js/main.js       # Abstract toggle JS
│   ├── img/             # ← put profile.jpg here
│   └── pdf/             # ← put cv.pdf here
└── index.html           # Homepage
```

## Adding a New Paper

Open `_pages/research.html` and add a new `<div class="paper">` block:

```html
<div class="paper">
  <p class="paper-title">Your Paper Title</p>
  <p class="paper-authors"><strong>R. Anthony</strong>, Co-Author Name.</p>
  <p class="paper-venue"><em>Journal Name</em>, vol(issue), pages. (year)</p>
  <div class="paper-actions">
    <button class="btn-abstract" onclick="toggleAbstract(this)">Abstract</button>
    <a class="btn-paper" href="https://doi.org/..." target="_blank">Paper</a>
  </div>
  <div class="abstract-panel">
    Your abstract text here.
  </div>
</div>
```

## Updating the Greeting Languages

Open `index.html` and edit the `greetings` array to add or remove languages.

## Updating the Nav

Open `_layouts/default.html` to add/remove nav links. Update your LinkedIn URL there too.
