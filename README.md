# 🦉 Amdavadi Night Owl

<p align="center">
  <img src="https://img.shields.io/github/stars/leolouis/amdavadi-night-owl?style=for-the-badge" />
  <img src="https://img.shields.io/github/forks/leolouis/amdavadi-night-owl?style=for-the-badge" />
  <img src="https://img.shields.io/github/issues/leolouis/amdavadi-night-owl?style=for-the-badge" />
  <img src="https://img.shields.io/github/license/leolouis/amdavadi-night-owl?style=for-the-badge" />
  <img src="https://img.shields.io/github/last-commit/leolouis/amdavadi-night-owl?style=for-the-badge" />
  <img src="https://img.shields.io/github/languages/top/leolouis/amdavadi-night-owl?style=for-the-badge" />
</p>

<p align="center">
<strong>An interactive, crowdsourced, and completely serverless map built for Ahmedabad's midnight explorers.</strong>
</p>

<p align="center">
Discover active food trucks, tea kitlis, cafés, and late-night hangout spots with community-powered updates, live alerts, safety insights, and zero backend infrastructure.
</p>

<p align="center">
🌐 <strong>Live Demo</strong><br>
https://leolouis.github.io/amdavadi-night-owl/
</p>

---

# 🌃 Why Amdavadi Night Owl?

Ahmedabad comes alive after sunset.

From bustling tea kitlis and food trucks to hidden midnight cafés, the city has a vibrant late-night culture. Unfortunately, discovering which places are actually open can be frustrating. Search engines are often outdated, and maps rarely reflect the real-time status of these dynamic spots.

**Amdavadi Night Owl** solves this by creating a community-driven map where anyone can help keep information accurate—without relying on expensive servers or databases.

Built entirely with static files, GitHub Pages, and the GitHub REST API, the project demonstrates how modern web applications can be fast, scalable, collaborative, and completely free to host.

---

# 📸 Preview

> Replace these placeholders with screenshots after deployment.

## 🖥 Desktop

```
/assets/screenshots/desktop.png
```

---

## 📱 Mobile

```
/assets/screenshots/mobile.png
```

---

## 🎥 Demo GIF

```
/assets/screenshots/demo.gif
```

Suggested demo sequence:

- Open website
- Locate Me
- Midnight Roulette
- Live Alerts
- Add Spot
- Invite the Gang

---

# ✨ Features

## 🌙 Interactive Night Map

Navigate Ahmedabad using a beautiful cyberpunk-inspired dark map powered by Leaflet.js.

- High-contrast night theme
- Responsive design
- Smooth zooming
- Interactive markers
- Mobile optimized

---

## 📍 Real-Time GPS Location

Find your exact location and instantly discover nearby late-night food spots.

✔ One-click geolocation

✔ Accurate positioning

✔ Distance awareness

✔ Mobile-friendly

---

## 🚨 Live Community Alerts

Stay informed with community-submitted alerts fetched directly from GitHub Issues.

Examples include:

- Road closures
- Police checkpoints
- Temporary closures
- Construction
- Crowds
- Traffic updates

No backend required.

---

## 🎲 Midnight Roulette

Can't decide where to eat?

Press one button and let the wheel randomly choose your next destination.

Features include:

- Animated selection
- Automatic map pan
- Randomized recommendations
- Confetti celebration

---

## ➕ Serverless "Add Spot"

Users can contribute without creating accounts.

The app automatically generates a pre-filled GitHub Issue containing structured JSON.

Maintainers simply review the submission and paste it into `places.json`.

No databases.

No authentication.

No servers.

---

## 💬 Invite the Gang

Generate WhatsApp-ready invitation messages containing:

- Spot name
- Google Maps link
- Friendly invitation text

Perfect for planning midnight outings with friends.

---

# 🚀 Feature Highlights

| Feature | Description |
|----------|-------------|
| 🌙 Dark Theme | Designed specifically for night-time navigation |
| 📍 GPS Support | Find yourself instantly |
| 🗺 Interactive Map | Powered by Leaflet.js |
| 🚨 Live Alerts | GitHub Issues become community warnings |
| 🎲 Roulette | Random late-night destination picker |
| ➕ Add Spot | Serverless crowdsourced submissions |
| 💬 Share Invite | WhatsApp-friendly invitations |
| ⚡ Fast | Static website hosted on GitHub Pages |
| 💰 Free | No servers or databases |
| 📱 Responsive | Works beautifully on mobile |

---

# 🛠 Technology Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Application structure |
| CSS3 | Styling |
| JavaScript (ES6) | Application logic |
| Tailwind CSS | Utility-first responsive UI |
| Leaflet.js | Interactive mapping |
| CARTO Dark Matter | Beautiful night-themed tiles |
| GitHub REST API | Community alerts and submissions |
| GitHub Pages | Free hosting |
| Canvas Confetti | Celebration animations |
| Google Fonts (Space Grotesk) | Modern typography |

---

# 🤔 Why These Technologies?

| Technology | Why We Chose It |
|------------|----------------|
| Leaflet | Lightweight, open-source, and highly customizable |
| Tailwind CSS | Rapid UI development with responsive utilities |
| GitHub Pages | Free, reliable static hosting |
| GitHub REST API | Eliminates the need for a backend server |
| JSON | Simple, human-readable data storage |
| Vanilla JavaScript | Fast performance with zero framework overhead |

---

# 🏗 Architecture

```
                   User
                     │
                     ▼
            GitHub Pages Website
                     │
          ┌──────────┴──────────┐
          │                     │
          ▼                     ▼
     places.json         GitHub REST API
          │                     │
          ▼                     ▼
    Map Rendering        Live Alerts
                                │
                                ▼
                      GitHub Issues
                                ▲
                                │
                         User Submissions
```

---

# 📁 Project Structure

```
amdavadi-night-owl/
│
├── index.html
├── style.css
├── script.js
├── places.json
│
├── assets/
│   ├── icons/
│   ├── screenshots/
│   └── images/
│
├── README.md
│
└── LICENSE
```

Project components:

- **index.html** → Main application
- **style.css** → Styling
- **script.js** → Core functionality
- **places.json** → Community-maintained location database
- **assets/** → Images, icons, screenshots

---

# ⚙ How It Works

Unlike traditional web apps, **Amdavadi Night Owl** has **no backend server**.

Instead, it leverages GitHub's infrastructure to keep everything simple, scalable, and free.

### 1️⃣ Places Database

All map locations are stored inside:

```text
places.json
```

Whenever maintainers update this file, every user instantly receives the latest data through GitHub Pages.

### 2️⃣ Live Alerts

Community members submit alerts using GitHub Issues.

When the website loads, JavaScript requests all open issues through the GitHub REST API.

If active alerts exist, they are automatically displayed as warning banners inside the application.

### 3️⃣ Add a Spot

Instead of storing submissions in a database, contributors can submit new locations directly through a pre-filled GitHub Issue.

The submitted issue contains structured JSON that can be reviewed by maintainers before being added to `places.json`.

This workflow keeps the project:

- ✅ Free
- ✅ Transparent
- ✅ Version controlled
- ✅ Easy to maintain
- ✅ Community driven

---

# 🚀 Getting Started

## Prerequisites

All you need is:

- A modern web browser (Chrome, Edge, Firefox, Safari)
- Git (optional, for development)
- VS Code (recommended)

---

# 💻 Local Development

## 1. Clone the Repository

```bash
git clone https://github.com/leolouis/amdavadi-night-owl.git
cd amdavadi-night-owl
```

---

## 2. Open the Project

You can simply open:

```text
index.html
```

in your browser.

For the best experience (especially GPS and API requests), use a local development server.

### VS Code

Install the **Live Server** extension.

Then:

- Right-click `index.html`
- Select **Open with Live Server**

---

## 3. Start Exploring

Once the page loads you can:

- Browse nearby locations
- Test GPS positioning
- Spin Midnight Roulette
- Report Alerts
- Add New Spots
- Share invitations

---

# 📖 Usage Guide

## 📍 Locate Me

Tap the **Locate Me** button.

The application requests your device's location and displays your current position relative to nearby spots.

---

## 🚨 Report an Alert

Found a temporary closure or traffic issue?

1. Click **Report Alert**
2. A GitHub Issue opens automatically
3. Submit the issue
4. Other users immediately benefit from your update

---

## ➕ Add a Spot

Know an amazing midnight food destination?

Click **Add Spot** and provide:

- Name
- Address
- Coordinates
- Category
- Opening hours
- Notes

The app generates a formatted GitHub Issue for maintainers to review.

---

## 🎲 Midnight Roulette

Feeling adventurous?

Click **Midnight Roulette** and let the app randomly choose your next destination.

The selected marker is highlighted automatically on the map.

---

## 💬 Invite the Gang

Generate a ready-to-send WhatsApp invitation containing:

- Spot name
- Map link
- Friendly message

Perfect for spontaneous midnight plans.

---

# 🤝 Contributing

Community contributions are what make this project useful.

Whether you discover a new tea kitli or notice an existing location has changed, your help keeps the map accurate.

---

## Ways to Contribute

- Add a new location
- Report incorrect information
- Improve documentation
- Suggest features
- Fix bugs
- Improve accessibility
- Improve UI
- Optimize performance

Every contribution matters.

---

## Contribution Workflow

```text
Fork Repository
        │
        ▼
Create Feature Branch
        │
        ▼
Make Changes
        │
        ▼
Commit Changes
        │
        ▼
Push Branch
        │
        ▼
Open Pull Request
        │
        ▼
Code Review
        │
        ▼
Merged 🎉
```

---

## Reporting Bugs

Please include:

- Browser
- Device
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots (if applicable)

This helps maintainers resolve issues faster.

---

## Feature Requests

Feature requests are welcome.

Before opening a new issue:

- Search existing issues
- Explain the problem
- Describe your proposed solution
- Include mockups if available

---

# 🧹 Coding Standards

Please follow these conventions.

## HTML

- Semantic elements
- Accessible markup
- Proper indentation

---

## CSS

- Mobile-first
- Utility classes where possible
- Consistent spacing

---

## JavaScript

- ES6+
- Meaningful variable names
- Modular functions
- Avoid global variables
- Comment complex logic

---

# 📱 Mobile Experience

Amdavadi Night Owl is designed primarily for phones.

Optimized for:

- 📍 GPS navigation
- ☕ Walking between food spots
- 🌙 Night-time visibility
- 👆 Touch interactions
- 📲 Responsive layouts

---

# ⚡ Performance

Designed to load quickly even on slower connections.

Current optimizations include:

- Static hosting
- No backend server
- Lightweight Leaflet map
- Optimized assets
- Vanilla JavaScript
- Minimal dependencies

Future improvements include:

- Lazy loading
- Image optimization
- Offline caching
- Progressive Web App support

---

# 🔒 Security

This project intentionally avoids collecting personal data.

- No login system
- No user database
- No cookies
- No tracking
- No analytics by default

User-submitted content is reviewed before being added to the map.

This helps maintain data quality while reducing abuse.

---

# ❤️ Community Philosophy

This project is built around a simple idea:

> Great communities build great maps.

Every tea stall, food truck, and late-night hangout exists because people share local knowledge.

Amdavadi Night Owl simply gives that knowledge a home.

---
# 🛣 Roadmap

The journey has just begun! Here are some exciting features planned for future releases.

## 🚀 Upcoming Features

- [ ] User voting for favorite spots
- [ ] Heatmap of popular late-night locations
- [ ] Advanced search & filtering
- [ ] Category filters (Tea, Food, Cafés, Desserts, etc.)
- [ ] Open/Closed prediction improvements
- [ ] Photo uploads
- [ ] Community ratings & reviews
- [ ] Verified locations
- [ ] Progressive Web App (PWA)
- [ ] Offline support
- [ ] Push notifications for live alerts
- [ ] Multi-language support (English & Gujarati)
- [ ] Route navigation integration
- [ ] Nearby recommendations
- [ ] QR code sharing
- [ ] Seasonal event markers
- [ ] User achievements & contributor badges
- [ ] AI-powered recommendations

Have an idea?

Open a Feature Request—we'd love to hear it!

---

# ❓ Frequently Asked Questions

## Is this project really serverless?

Yes.

There is **no backend server**, **no database**, and **no hosting costs** beyond GitHub Pages.

The application relies on:

- Static assets
- `places.json`
- GitHub REST API
- GitHub Issues

---

## How are new locations added?

Contributors submit a GitHub Issue through the **Add Spot** feature.

Maintainers verify the information and merge it into `places.json`.

---

## Why not use Firebase or Supabase?

The goal of this project is to demonstrate that many community-driven applications can be built without traditional backend infrastructure.

This keeps the project:

- Free
- Simple
- Open
- Easy to fork
- Easy to maintain

---

## Can I contribute if I'm not a developer?

Absolutely!

You can help by:

- Reporting incorrect locations
- Suggesting new food spots
- Sharing ideas
- Reporting bugs
- Improving documentation

---

## Does GPS data get stored?

No.

Your location is only used locally by your browser to improve the map experience and is never stored by the application.

---

## Which browsers are supported?

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari
- Brave
- Most Chromium-based browsers

---

# 🙌 Acknowledgements

Special thanks to the amazing open-source projects that make this application possible.

- **Leaflet.js** — Interactive maps
- **OpenStreetMap** — Geographic data
- **CARTO** — Dark Matter map tiles
- **Tailwind CSS** — Utility-first styling
- **Canvas Confetti** — Celebration animations
- **Google Fonts** — Space Grotesk typography
- **GitHub Pages** — Free static hosting
- **GitHub REST API** — Community-powered backend

Open source thrives because of communities like these.

Thank you ❤️

---

# 🌟 Show Your Support

If you enjoy this project, consider giving it a ⭐ on GitHub.

It helps others discover the project and motivates future development.

---

# 💡 Ideas & Suggestions

Have an idea to make Amdavadi Night Owl even better?

Open an issue or submit a pull request.

Every contribution—big or small—is appreciated.

---

# 📜 License

This project is licensed under the **MIT License**.

You are free to:

- Use
- Modify
- Fork
- Distribute

Please see the `LICENSE` file for full details.

---

# 👨‍💻 Author

Made with 🩸, ☕, and countless midnight coding sessions by **Leo Louis**.

Built for the late-night explorers of Ahmedabad.

---

# ❤️ Contributing

If this project helped you discover your new favorite midnight spot, consider contributing back.

Whether it's:

- Fixing a typo
- Adding a new kitli
- Improving the UI
- Reporting an issue
- Suggesting a feature

Every contribution helps the community.

---

# ⭐ Star History

If you like this project, don't forget to leave a ⭐ on GitHub!

Your support encourages continued development and helps more people discover the project.

---

<div align="center">

## 🌙 See You After Midnight.

**Made for the Night Owls of Ahmedabad.**

☕ Explore • Discover • Share • Repeat

---

### Happy Exploring! 🦉

</div>
