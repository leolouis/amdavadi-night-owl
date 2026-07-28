# 🦉 Amdavadi Night Owl

<p align="center">
  <img src="https://img.shields.io/github/stars/leolouis/amdavadi-night-owl?style=for-the-badge&logo=github&color=yellow" />
  <img src="https://img.shields.io/github/forks/leolouis/amdavadi-night-owl?style=for-the-badge&logo=github" />
  <img src="https://img.shields.io/github/issues/leolouis/amdavadi-night-owl?style=for-the-badge&logo=github" />
  <img src="https://img.shields.io/github/license/leolouis/amdavadi-night-owl?style=for-the-badge" />
  <img src="https://img.shields.io/github/last-commit/leolouis/amdavadi-night-owl?style=for-the-badge" />
  <img src="https://img.shields.io/github/languages/top/leolouis/amdavadi-night-owl?style=for-the-badge&color=blue" />
  <img src="https://img.shields.io/github/repo-size/leolouis/amdavadi-night-owl?style=for-the-badge" />
</p>

<p align="center">
<strong>An interactive community-powered night map for discovering Ahmedabad after dark.</strong>
</p>

<p align="center">
Find late-night food spots, tea stalls, cafés, desserts, and hangout locations with an interactive map, GPS support, category filters, random discovery, and community updates.
</p>

<p align="center">
🌐 <strong>Live Demo</strong><br>
https://leolouis.github.io/amdavadi-night-owl/
</p>

---

# 🌃 About The Project

Ahmedabad has a unique nightlife culture.

From famous food streets and chai corners to hidden cafés and late-night gathering places, the city has countless experiences after sunset.

The challenge is finding places that are:

* Actually open
* Worth visiting
* Easy to discover
* Updated by local knowledge

**Amdavadi Night Owl** is a community-driven interactive map that helps people explore Ahmedabad after dark.

The project uses a simple and transparent architecture:

* No traditional backend
* No user database
* No login system
* Location data stored in JSON
* Community updates through GitHub Issues

The goal is to build a lightweight, open map for Ahmedabad's night explorers.

---

# 🚦 Current Status

The project is actively under development.

Current features:

✅ Interactive Ahmedabad night map
✅ 100+ curated locations
✅ Food, Tea, Cafe, Dessert categories
✅ GPS location support
✅ Location markers with details
✅ Midnight Roulette discovery
✅ Community spot submissions
✅ GitHub-based alerts system

---

# 📸 Preview

Screenshots will be added here:

```
assets/screenshots/
├── desktop.png
├── mobile.png
└── demo.gif
```

---

# ✨ Features

## 🌙 Interactive Night Map

Explore Ahmedabad through a responsive Leaflet-powered map.

Features:

* Interactive markers
* Smooth navigation
* Mobile-friendly design
* Location details
* Google Maps navigation links

---

## 📍 Locate Me

Find your current position instantly.

Features:

* Browser-based GPS detection
* User location marker
* Accuracy indicator
* Map movement to current position

Your location is processed locally in your browser and is not stored.

---

## 🍔 Category Filters

Quickly explore places by category:

* 🍵 Tea
* 🍔 Food
* ☕ Cafe
* 🍨 Dessert

Find the type of night experience you want.

---

## 🎲 Midnight Roulette

Can't decide where to go?

The roulette feature randomly selects a destination.

Features:

* Random location selection
* Animated map movement
* Celebration animation

---

## ➕ Add A Spot

Help improve the map by submitting new locations.

The project uses GitHub Issues instead of a database.

Contribution flow:

```
User submits location
        ↓
GitHub Issue created
        ↓
Maintainer reviews
        ↓
Location added to places.json
        ↓
Everyone receives the update
```

---

## 🚨 Community Alerts

Important updates can be submitted through GitHub Issues.

Examples:

* Temporary closures
* Road conditions
* Events
* Local updates

---

# 🛠 Technology Stack

| Technology             | Purpose               |
| ---------------------- | --------------------- |
| HTML5                  | Application structure |
| CSS3                   | Responsive styling    |
| JavaScript ES6 Modules | Application logic     |
| Leaflet.js             | Interactive maps      |
| OpenStreetMap          | Map tiles             |
| GitHub Pages           | Hosting               |
| GitHub Issues API      | Community updates     |
| JSON                   | Location database     |
| Canvas Confetti        | Animations            |
| Google Fonts           | Typography            |

---

# 🏗 Architecture

```
                    User
                      |
                      ▼
              GitHub Pages App
                      |
          ┌───────────┴───────────┐
          │                       │
          ▼                       ▼
     places.json          GitHub Issues
          │                       │
          ▼                       ▼
   Map + Markers          Alerts/Submissions
          |
          ▼
      Leaflet Map
```

---

# 📁 Project Structure

```
amdavadi-night-owl/
│
├── index.html
├── places.json
│
├── css/
│   ├── style.css
│   └── animations.css
│
├── js/
│   ├── app.js
│   ├── map.js
│   ├── markers.js
│   ├── filter.js
│   ├── roulette.js
│   ├── geolocation.js
│   ├── alerts.js
│   └── utils.js
│
├── assets/
│   ├── icons/
│   ├── screenshots/
│   └── images/
│
├── README.md
└── LICENSE
```

---

# ⚙ How It Works

## Location Data

All locations are stored in:

```
places.json
```

Each location contains information such as:

* Name
* Category
* Description
* Coordinates
* Rating
* Opening hours
* Safety indicator

Example:

```json
{
  "name": "Manek Chowk",
  "category": "food",
  "rating": 4.8,
  "open": "20:00",
  "close": "03:00"
}
```

---

## Map Rendering

When the application loads:

```
places.json
      ↓
map.js
      ↓
markers.js
      ↓
Leaflet markers
      ↓
Interactive map
```

---

## Community Updates

The project uses GitHub as a lightweight collaboration platform.

Users can:

* Suggest new locations
* Report issues
* Share improvements

Maintainers review updates before publishing changes.

---

# 🚀 Getting Started

## Requirements

You need:

* Modern browser
* Git (optional)
* VS Code recommended

---

# 💻 Local Development

## Clone Repository

```bash
git clone https://github.com/leolouis/amdavadi-night-owl.git

cd amdavadi-night-owl
```

---

## Run Locally

Because the project loads JSON files, use a local server.

Recommended:

### VS Code Live Server

1. Install Live Server extension
2. Open the project
3. Right-click `index.html`
4. Select:

```
Open with Live Server
```

---

# 📖 Usage Guide

## Find Your Location

Press:

```
📍 Locate Me
```

Allow browser location permission.

---

## Discover A Place

Use:

```
🎲 Midnight Roulette
```

to randomly discover a night spot.

---

## Filter Locations

Select:

```
🍵 Tea
🍔 Food
☕ Cafe
🍨 Dessert
```

to explore specific categories.

---

## Submit A Location

Use:

```
➕ Add Spot
```

to suggest a new place.

---

# 🤝 Contributing

Community contributions help make the map better.

You can contribute by:

* Adding new locations
* Fixing incorrect information
* Reporting bugs
* Improving UI
* Suggesting features
* Improving documentation

---

## Contribution Workflow

```
Fork Repository
        ↓
Create Branch
        ↓
Make Changes
        ↓
Commit
        ↓
Push
        ↓
Open Pull Request
        ↓
Review
        ↓
Merge
```

---

# 🧹 Coding Guidelines

## JavaScript

* Use ES6 modules
* Keep functions focused
* Use meaningful names
* Avoid unnecessary globals

## CSS

* Maintain responsive layouts
* Keep styles organised
* Follow consistent spacing

## HTML

* Use semantic elements
* Maintain accessibility

---

# 📱 Mobile Experience

The application is designed primarily for mobile users.

Optimised for:

* GPS usage
* Touch controls
* Night exploration
* Quick discovery

---

# ⚡ Performance

The project focuses on simplicity and speed.

Current optimisations:

* Static hosting
* Lightweight dependencies
* JSON-based data
* Vanilla JavaScript
* No backend overhead

Future improvements:

* Marker clustering
* Progressive Web App support
* Offline caching

---

# 🔒 Privacy

Amdavadi Night Owl does not collect personal information.

The project does not use:

* User accounts
* Personal databases
* Tracking cookies

Location access is used only inside your browser for map features.

---

# 🛣 Roadmap

## Near Future

* [ ] Improved search
* [ ] Better category filtering
* [ ] Open now detection
* [ ] Favourite locations
* [ ] Marker clustering
* [ ] Progressive Web App support

## Future Ideas

* [ ] Community ratings
* [ ] Photo uploads
* [ ] Multi-language support
* [ ] Smart recommendations
* [ ] Offline mode

---

# ❓ FAQ

## Is this project serverless?

Yes.

The application uses:

* Static files
* GitHub Pages
* JSON data
* GitHub Issues

No traditional backend server is required.

---

## How are locations added?

Locations are submitted through GitHub Issues and reviewed before being added.

---

## Does the app store my location?

No.

Your location is only used locally by your browser.

---

# 🙌 Acknowledgements

Built using amazing open-source technologies:

* Leaflet.js
* OpenStreetMap
* GitHub Pages
* GitHub REST API
* Canvas Confetti
* Google Fonts

---

# 🌟 Support The Project

If you like Amdavadi Night Owl:

⭐ Star the repository
🐛 Report issues
💡 Suggest improvements
📍 Add new locations

---

# 📜 License

This project is licensed under the MIT License.

You are free to:

* Use
* Modify
* Fork
* Distribute

See the `LICENSE` file for details.

---

# 👨‍💻 Author

Made with ☕ and countless midnight coding sessions by **Leo Louis**.

Built for Ahmedabad's night explorers.

---

<div align="center">

## 🌙 See You After Midnight

**Explore • Discover • Share**

🦉

</div>
