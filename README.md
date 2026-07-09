# Students Anesthetist Collaborative Research Association (SACRA)

Welcome to the official web application repository for **SACRA** (Students Anesthetist Collaborative Research Association). This platform is designed to connect medical students, anesthesia residents, and clinical fellows internationally—empowering them to collaborate on multicenter audits, share simulation lab resources, access research fellowships, and publish clinical safety reviews.

The project is built as a highly responsive, modern React application powered entirely by custom **Vanilla CSS variables** (completely avoiding TailwindCSS) for maximum style fidelity and layout control.

---

## 🚀 Key Features

The portal implements 11 fully completed sitemap page views and common UI features:

*   **Home Page**: Renders clinical simulation hero layouts, absolute floating community metric widgets, core pillars, and graphical abstract networks.
*   **About Page**: Highlights the association's mission & vision, a chronological historical milestone timeline, and leadership committee profiles.
*   **Programs / Services Page**: Details clinical audit fellowships, simulation lab workshops, and tabbed guides detailing admission stages and benefits.
*   **Research Hub Page**: Displays active trials, investigator tracking badges, progress trackers, and a search-filterable publications bibliography table.
*   **Events & Symposia Page**: Highlights upcoming seminars, featured symposium registration cards with date/location badges, past event archives, and interactive RSVP validation overlays.
*   **Membership Activation Page**: Features plan tier cards and custom multi-step student signup validation forms.
*   **Gallery Page**: Filters photo cards by category and renders high-resolution lightbox image overlays.
*   **News & Blog Page**: Showcases cover stories and clinical journal update cards.
*   **FAQ Page**: Groups collapsible accordion items under categorised rows (e.g. General Membership and Research & Projects).
*   **Contact Page**: Formats circular details columns, a custom vector map of Lake Kivu/Rusizi Campus, and select-input contact forms.
*   **404 flatline Page**: A flatline cardiac pulse route redirecting back to home.

---

## 🛠️ Technology Stack & Architecture

*   **Framework**: [React.js](https://react.dev/) (standard SPA architecture)
*   **Routing**: [React Router DOM v6](https://reactrouter.com/) (declarative routing configuration)
*   **Icons**: [Lucide React](https://lucide.dev/) (complemented by custom inline SVGs for branded socials like Twitter, GitHub, and LinkedIn to ensure compile-time reliability)
*   **Styling**: Vanilla CSS (Global resets, typography scales, layout grids, animations, and custom Design System tokens defined in `:root`)

---

## 📂 Directory Structure

```
src/
├── assets/
│   └── images/         # Local image assets (e.g. sim-lab.png)
│
├── components/
│   ├── common/         # PageHeader.js, SectionTitle.js, Newsletter.js
│   ├── layout/         # Navbar.js, Footer.js, ScrollToTop.js
│   └── ui/             # Button.js, Card.js, Badge.js, Modal.js, Loader.js
│
├── pages/
│   ├── Home/           # Home.js, Home.css
│   ├── About/          # About.js, About.css
│   ├── Programs/       # Programs.js, Programs.css
│   ├── Research/       # Research.js, Research.css
│   ├── Events/         # Events.js, Events.css
│   ├── Membership/     # Membership.js, Membership.css
│   ├── Gallery/        # Gallery.js, Gallery.css
│   ├── Blog/           # Blog.js, Blog.css
│   ├── FAQ/            # FAQ.js, FAQ.css
│   ├── Contact/        # Contact.js, Contact.css
│   └── NotFound/       # NotFound.js, NotFound.css
│
├── layouts/            # MainLayout.js, MainLayout.css (Sticky layouts wrapper)
├── services/           # dataService.js (Simulates asynchronous API fetches)
├── routes/             # index.js (AppRoutes)
├── data/               # Static JSON databases (blogData, eventsData, researchData)
├── styles/             # variables.css (Design system tokens), global.css (Resets)
├── index.css           # Root style load import index
├── App.js              # Routing context router wrapper
└── index.js            # Initial React mount point
```

---

## ⚙️ Design Tokens & variables

Global styles are parameterized under `src/styles/variables.css`:

```css
:root {
  /* Color Palettes */
  --color-primary: #004c99;      /* Navy Blue */
  --color-primary-dark: #0d1b2a; /* Deep Charcoal */
  --color-accent: #02c39a;       /* Teal Accent */
  
  /* Layout Spacings */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-base: 16px;
  --space-lg: 24px;
  --space-xl: 32px;

  /* Typography Scales */
  --font-sans: 'Inter', sans-serif;
  --font-heading: 'Outfit', sans-serif;
}
```

---

## 💻 Getting Started

### Prerequisites

*   Node.js (v16.0.0 or higher)
*   npm (v7.0.0 or higher)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/leopoldbonfils/Students-Anesthetist-Collaborative-Research-Association-SACRA-.git
    cd Students-Anesthetist-Collaborative-Research-Association-SACRA-
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```

### Running Locally

To launch the project in development mode:
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload automatically if you modify any code files.

### Compiling Production Builds

To compile the application into a minimized, optimized production bundle:
```bash
npm run build
```
Build assets will be outputted to the `build/` directory, ready to be served.
