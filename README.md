# Private Knight Combo – Landing Page

A production-ready React + Vite landing page for **Ayurnnath Private Knight Combo**.

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```

### 3. Build for production
```bash
npm run build
```

### 4. Preview production build
```bash
npm run preview
```

---

## 📁 Project Structure

```
private-knight-app/
├── index.html
├── vite.config.js
├── package.json
├── src/
│   ├── main.jsx              # Entry point
│   ├── App.jsx               # Root component (assembles all sections)
│   ├── index.css             # Global CSS variables & reset
│   ├── data.js               # All product data (JSON-driven)
│   ├── assets/               # Images & logo
│   │   ├── AyurnathLogo.png
│   │   ├── hero-1.jpeg
│   │   ├── hero-2.jpeg
│   │   ├── hero-3.jpeg
│   │   ├── hero-4.jpeg
│   │   ├── product-hero.webp
│   │   └── ad14.jpeg
│   └── components/
│       ├── AnnouncementBar.jsx   # Scrolling top bar
│       ├── Header.jsx            # Sticky header with logo & contact btns
│       ├── ProductSection.jsx    # Gallery + product info + language tabs
│       ├── Licenses.jsx          # ISO, GMP, FSSAI certifications
│       ├── ContactSection.jsx    # Large Call & WhatsApp cards
│       ├── InfoSections.jsx      # WhyChoose, WhyItWorks, Highlights, Delivery, Dosage, FAQ
│       ├── BuySection.jsx        # Price reveal + COD order form
│       ├── FloatingButtons.jsx   # Vibrating fixed Call & WhatsApp buttons
│       └── Footer.jsx            # Footer with logo, links, certifications
```

---

## ✏️ Customization

### Update phone number / WhatsApp
Edit `src/data.js`:
```js
phone: "+91XXXXXXXXXX",
whatsapp: "91XXXXXXXXXX",
```

### Update pricing
Edit `src/data.js`:
```js
pricing: {
  original: 2700,
  discounted: 1799,
  savePercent: 33,
}
```

### Add / change images
Replace files in `src/assets/` and update imports in `ProductSection.jsx`.

### Change product content
All text, badges, FAQ, benefits, and descriptions live in `src/data.js` — edit once, updates everywhere.

---

## 🎨 Color Theme (White & Green)

All colors are CSS variables in `src/index.css`:

| Variable | Value | Usage |
|----------|-------|-------|
| `--g1` | `#0a3d0a` | Dark green (primary) |
| `--g3` | `#1e7a1e` | Medium green |
| `--g5` | `#4ccc4c` | Light green (accent) |
| `--pale` | `#edf7ed` | Background tint |
| `--wa` | `#25d366` | WhatsApp green |

---

## 🌐 Languages Supported
- English
- हिंदी (Hindi)
- বাংলা (Bengali)

Language content is in `src/data.js` under the `languages` key.

---

## 📦 Tech Stack
- **React 18**
- **Vite 5**
- **CSS Modules** (scoped styles per component)
- **Google Fonts** (Cormorant Garamond + Nunito)
