# aifolkbildaren.se – hemsida

Vidar Kjerstadius hemsida för AI-Folkbildaren (AI-utbildningar för bibliotek). Flyttas från WordPress.com till GitHub Pages.

**Läs `PROGRESS.md` först** – där finns plan, beslut, öppna frågor och deadline (27 december 2026). Uppdatera den när något blir klart eller beslutas, och lägg en rad i loggen.

## Struktur

- `index.html` – startsidan, en lång sida med ankarmeny (#om, #varfor, #utbildningar, #omdomen, #kontakt)
- `resursbibliotek/index.html` – resursbiblioteket (artiklar, prompter, tips)
- `assets/css/style.css` – all stil. Färger och typsnitt som variabler i `:root`, mörkt läge både via `prefers-color-scheme` och `data-theme`
- `assets/js/main.js` – mörkt läge, aktiv menylänk, kopiera-knappar, inglidning
- `docs/dns-inventering.md` – alla DNS-poster som ska flyttas (inkl. e-post!)

## Konventioner

- Allt på svenska. Vanlig HTML/CSS/JS, inget byggsteg, inga ramverk.
- Designen kommer från utbildningsportalerna (repo `VidarRu/ai-i-folkbibliotekets-praktik`) men i ljusare ton. Varje avsnitt har en egen färg via `data-part` → `--part`.
- Bildplatser är `<div class="ph …">` med texten "Bild: …" – byt mot `<img class="media-photo" …>` när riktiga bilder finns. Bilder läggs i `assets/img/`.
- Relativa länkar (`resursbibliotek/`, `../`) så att sidan fungerar både på `vidarru.github.io/aifolkbildaren_hemsida/` och på `aifolkbildaren.se`.
- Sidorna har `noindex` tills lansering.
- Testa på mobilbredd (390 px) och i mörkt läge.
