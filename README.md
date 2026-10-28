# Samriye's Social Media Hub

A magnificent, professional **Light Mode** single-page React application designed to fit within the viewport height (**100vh / 100dvh**). Visitors can see all four personal channels simultaneously without scrolling:

- 🔵 **LinkedIn** — Professional network & career experience
- 🔴 **Instagram** — Stories, reels, and lifestyle
- 🟢 **WhatsApp** — Direct messaging & instant chat
- 🟣 **Personal Website** — Portfolio, blog & showcase

---

## ✨ Features

- **Single Screen Fit (Max Height 100vh)**: Seamlessly designed to display the profile header, all 4 cards, and footer within the viewport on both desktop and mobile screens.
- **Magnificent Light Aesthetic**: Crisp pearlescent gradient background, soft glassmorphic frosted cards (`backdrop-blur-xl`), radiant ambient blooms, and brand-tailored glow borders on hover.
- **Configuration in `.env`**: Destination URLs, handles, names, and bio are configured in `.env`.
- **One-Click Copy**: Built-in "Copy" button on every card with toast feedback.
- **Interactive QR Code**: Built-in modal to view and download a sharing QR code.
- **Native Web Share**: Share button for easy distribution on mobile and desktop.

---

## ⚙️ Configuring Your Links in `.env`

All links and personal information are managed in [`.env`](file:///c:/Users/Yanet/Desktop/samriye's%20social%20media/.env). Open the `.env` file and edit any of the variables:

```env
# Profile Details
VITE_NAME="Samrawit Atnafu"
VITE_TITLE="Digital Creator & Entrepreneur"
VITE_BIO="Connecting ideas, creativity, and people. Welcome to my personal channels!"
VITE_AVATAR="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
VITE_LOCATION="Addis Ababa, Ethiopia"
VITE_STATUS="Online & open to collaborate"

# 1. LinkedIn
VITE_LINKEDIN_URL="https://www.linkedin.com/in/samri-atnafu"
VITE_LINKEDIN_HANDLE="@samri-atnafu"
VITE_LINKEDIN_SUBTITLE="Professional Network & Experience"

# 2. Instagram
VITE_INSTAGRAM_URL="https://www.instagram.com/samri_atnafu_?xtok=and2Yng3eml5OGhv"
VITE_INSTAGRAM_HANDLE="@samri_atnafu_"
VITE_INSTAGRAM_SUBTITLE="Stories, Reels & Lifestyle"

# 3. WhatsApp
VITE_WHATSAPP_URL="https://wa.me/251911515291?text=Hi%20Samri,%20I%20found%20your%20profile%20and%20would%20like%20to%20connect!"
VITE_WHATSAPP_HANDLE="+251 911 515 291"
VITE_WHATSAPP_SUBTITLE="Direct Message & Inquiries"

# 4. Website
VITE_WEBSITE_URL="https://samriatnafu.com"
VITE_WEBSITE_HANDLE="samriatnafu.com"
VITE_WEBSITE_SUBTITLE="Personal Portfolio & Showcase"
```

---

## 🚀 Running the App

### 1. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
```
Production assets are generated in the `dist/` directory ready for deployment.
