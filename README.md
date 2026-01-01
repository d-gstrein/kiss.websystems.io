# KISS.Shop Landingpage

Statische Produkt-Landingpage für die Shopsoftware KISS.Shop.  
Gebaut mit [Astro](https://astro.build), gehostet auf GitHub Pages.

## Lokale Entwicklung

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev

# Produktions-Build erstellen
npm run build

# Build lokal testen
npm run preview
```

## Deployment

Das Deployment erfolgt automatisch via GitHub Actions bei jedem Push auf `master`.

### Erstmaliges Setup

1. Repository auf GitHub erstellen: `kiss-shop-landingpage`
2. Code pushen:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin git@github.com:DEIN-USERNAME/kiss-shop-landingpage.git
   git push -u origin master
   ```
3. In den Repository-Settings → Pages:
   - Source: "GitHub Actions" auswählen
4. DNS für `kiss.websystems.io` konfigurieren:
   - CNAME-Record auf `DEIN-USERNAME.github.io` setzen

## Projektstruktur

```
├── src/
│   ├── components/       # Wiederverwendbare Komponenten
│   │   ├── Hero.astro
│   │   ├── ComparisonTable.astro
│   │   ├── FAQ.astro
│   │   └── CTA.astro
│   ├── layouts/
│   │   └── Layout.astro  # Haupt-Layout mit Meta-Tags
│   ├── pages/
│   │   ├── index.astro   # Hauptseite
│   │   ├── impressum.astro
│   │   ├── datenschutz.astro
│   │   └── vergleich/    # Vergleichsseiten
│   └── styles/
│       └── main.css      # Zentrale Styles
├── public/
│   ├── robots.txt
│   ├── CNAME
│   ├── favicon.svg
│   └── .nojekyll
└── astro.config.mjs
```

## Seiten

- `/` – Landingpage
- `/vergleich/` – Übersicht aller Vergleiche
- `/vergleich/shopify/` – KISS.Shop vs. Shopify
- `/vergleich/woocommerce/` – KISS.Shop vs. WooCommerce
- `/vergleich/prestashop/` – KISS.Shop vs. PrestaShop
- `/vergleich/shopware/` – KISS.Shop vs. Shopware
- `/impressum/` – Impressum (noindex)
- `/datenschutz/` – Datenschutzerklärung (noindex)

## Anpassungen

### Inhalte ändern

Die Inhalte sind direkt in den `.astro`-Dateien. Keine separaten Content-Dateien.

### Styles anpassen

Alle Styles in `src/styles/main.css`. CSS-Variablen am Anfang der Datei:

```css
:root {
  --color-bg: #fafafa;
  --color-text: #1a1a1a;
  --color-accent: #d45500;
  /* ... */
}
```

### Vergleichstabellen erweitern

In den Vergleichsseiten die `comparisonRows` anpassen:

```javascript
const comparisonRows = [
  { feature: "Merkmal", kiss: "Wert", other: "Wert" },
  { feature: "Boolean-Wert", kiss: true, other: false },
];
```

## Analytics (optional)

Für Plausible oder Google Analytics: Script im `Layout.astro` im `<head>` einfügen.

## Lizenz

Proprietär – Alle Rechte vorbehalten.
