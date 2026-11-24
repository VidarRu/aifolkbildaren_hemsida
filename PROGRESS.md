# Flytt av aifolkbildaren.se – plan och status

> **Deadline: 27 december 2026.** Då går WordPress-kopplingen av domänen ut (betald t.o.m. 2026-12-27, förnyas automatiskt).
> Målet är att domänbytet är klart **senast ~16 december**, så att det finns marginal över jul.
>
> Den här filen är projektets minne. Uppdatera den varje gång något blir klart eller beslutas.

Senast uppdaterad: 2026-11-24

---

## Status i korthet

| Del | Status |
|---|---|
| Första version av startsida + resursbibliotek | ✅ Klar (2026-11-24), väntar på Vidars granskning |
| GitHub Pages påslaget för förhandsvisning | ⬜ Vidar gör (se steg 1) |
| Meritlista uppdaterad | ⬜ Väntar på ny lista från Vidar |
| Bilder | ⬜ Platshållare inlagda – riktiga bilder kommer |
| Nyhetsbrev (MailerLite → ?) | ⬜ Ska redas ut före 27/12 |
| DNS-flytt (WordPress → Misshosting) | ⬜ Inventering klar, se `docs/dns-inventering.md` |
| Domänbyte till GitHub Pages | ⬜ |
| WordPress avvecklat | ⬜ |

---

## Beslut som är tagna

- **Struktur:** en lång startsida med meny som scrollar till avsnitten (Om mig, Varför AI?, Utbildningar, Omdömen, Kontakt) + en separat sida **Resursbibliotek** (`/resursbibliotek/`). Namnet är *resursbibliotek*, inte promptbibliotek – sidan ska kunna rymma mer än prompter och vara den sida Vidar pekar till från sina utbildningar.
- **Design:** samma stil som utbildningsportalerna (skogsgrönt, Playfair Display + DM Sans, frostade paneler över bokhyllan, mörkt läge) men i **en aningen ljusare ton**. Färgerna är kontrollerade mot WCAG AA.
- **Teknik:** vanlig HTML + CSS + lite JS, inget byggsteg. Gemensam stilmall i `assets/css/style.css`.
- **Innehåll som INTE följer med:** Valet 2026-satsningen (startsidan + undersidan), de gamla modulsidorna från 2025, "Hej världen"-inlägget, WordPress-temats exempelbild.
- **Utbildningar:** texterna från sidan "Boka mig" (maj 2026) gäller. Upplägget finslipas efter hand.
- **Domän:** `aifolkbildaren.se` ska vara själva hemsidan (roten). Den adressen finns på många ställen och får inte ändras.
- **Bilder:** platshållarrutor (`.ph` i HTML, märkta "Bild: …") tills Vidar laddar upp riktiga bilder.
- **Lösenordet i portalerna:** inte en del av det här projektet – lämnas därhän.

## Öppna frågor / beslut som behövs

1. **Ska portalerna hamna under aifolkbildaren.se?** Det finns två sätt:
   - **A – Domänen på det här repot.** `aifolkbildaren.se` = hemsidan. Portalerna ligger kvar på `vidarru.github.io/<portal>/`. Enklast, påverkar inget annat.
   - **B – Gör det här repot till användarsajt** (döp om till `VidarRu.github.io`) och sätt domänen där. Då hamnar hemsidan på `aifolkbildaren.se` och **alla** dina publika GitHub Pages-projekt automatiskt på `aifolkbildaren.se/<repo>/` (gamla github.io-länkar omdirigeras). OBS: det gäller även orelaterade projekt (t.ex. bokklubb, partisajt, 3D-bibliotek) om de har Pages påslaget – de kan få en egen domän eller stängas av.
   - *Rekommendation:* A nu (snabbt och säkert före 27/12), B kan göras senare om det önskas.
2. **Kontaktadress:** sidan visar Gmail-adressen (som på WordPress). Domänen har e-post via Microsoft 365 – vill du hellre visa en `@aifolkbildaren.se`-adress?
3. **Nyhetsbrev:** byta från MailerLite till Substack? I så fall: exportera prenumeranterna från MailerLite och importera i Substack *före* avvecklingen. Behöver MailerLite vara kvar alls efter 27/12?
4. **Titan-e-post:** DNS innehåller rester av Titan (WordPress.com:s e-posttjänst). Används den? Troligen inte – då tas posterna bort.

## Att granska i texterna (ändrat vid flytten)

- Publik föreläsning: originalet sa "en **politisk** och informativ föreläsning" – ändrat till "**pedagogisk**". Stämmer det?
- "Jag heter Vidar och är 40 år" – åldern är borttagen (blir inaktuell). OK?
- Små språkfixar i utbildningstexterna (t.ex. "med din personliga på plats" → "med er personal på plats").
- Länken "Kom i gång med AI" (Internetkunskap) innehåller `%20` i adressen och kan vara trasig – kontrollera.
- Meritlistan är från hösten 2025 – **ska uppdateras** (Vidar skickar ny lista).

---

## Plan vecka för vecka

### Vecka 48 (24–30 nov) – Första version och granskning
- [x] Inventera WordPress-sidan (innehåll, menyer, DNS)
- [x] Bygga startsida + resursbibliotek i portalens design, ljusare
- [x] Skriva denna plan + DNS-inventering
- [ ] **Vidar:** slå på GitHub Pages för förhandsvisning: repot → *Settings → Pages → Build and deployment → Deploy from a branch* → välj `main` (efter att ändringarna slagits ihop) och mappen `/ (root)`. Sidan syns då på `https://vidarru.github.io/aifolkbildaren_hemsida/`
- [ ] **Vidar:** granska texter och design, svara på öppna frågor ovan

### Vecka 49 (1–7 dec) – Innehåll och förberedelser
- [ ] Uppdaterad meritlista in på sidan
- [ ] Bilder: ladda upp och placera ut (ersätt `.ph`-rutorna)
- [ ] Finslipa utbildningsupplägget
- [ ] **Säkerhetskopiera WordPress:** WordPress.com → Verktyg → Exportera (allt innehåll + mediebiblioteket). Spara zip-filerna lokalt
- [ ] Ladda ner de bilder från WordPress som ska återanvändas
- [ ] **Vidar:** logga in på Misshosting och kontrollera att du kan hantera DNS-poster där för domänen (det är dit DNS ska flyttas)
- [ ] Beslut om nyhetsbrev (MailerLite/Substack) och ev. export av prenumeranter
- [ ] Beslut i fråga 1 (portalerna) – påverkar vilken repo domänen kopplas till

### Vecka 50 (8–14 dec) – Klart för lansering
- [ ] Omdirigeringssidor för gamla WordPress-adresser (se lista nedan)
- [ ] Ta bort `noindex` i `<head>` på alla sidor
- [ ] Favicon + delningsbild (`og:image`)
- [ ] Sista genomgång: mobil, mörkt läge, länkar, stavning
- [ ] Lägg in alla DNS-poster i Misshostings DNS **i förväg** (enligt `docs/dns-inventering.md`) – de gör ingen skillnad förrän namnservrarna byts

### Vecka 51 (15–21 dec) – Domänbytet (helst må–tis 15–16 dec)
- [ ] GitHub: verifiera domänen (Profil → Settings → Pages → Add a domain) – ger en TXT-post att lägga in
- [ ] Lägg till filen `CNAME` med innehållet `aifolkbildaren.se` i repot / ange domänen under Settings → Pages
- [ ] Hos Misshosting: byt namnservrar från WordPress.com till Misshostings egna
- [ ] Vänta på spridning (några timmar, upp till ett dygn)
- [ ] Kontrollera: sajten laddar på `aifolkbildaren.se` och `www.aifolkbildaren.se`, slå på **Enforce HTTPS**
- [ ] **Kontrollera e-posten:** skicka och ta emot på domänadressen (Microsoft 365)
- [ ] Kontrollera nyhetsbrevsutskick om MailerLite fortfarande används

### Vecka 52 (22–27 dec) – Avveckling och marginal
- [ ] WordPress.com: stäng av automatisk förnyelse av domänkopplingen och eventuell plan (Upgrades → Purchases)
- [ ] Koppla bort domänen från WordPress-sajten
- [ ] Låt WordPress-sajten ligga kvar (privat) en tid som backup, eller radera när allt är verifierat
- [ ] Google Search Console: lägg till/verifiera sajten igen om det behövs

### Senare (efter 27 dec)
- [ ] **Nyhetsbrevssida** (`/nyhetsbrev/`) där Substack-utskick publiceras/speglas så att man kan läsa dem på sajten
- [ ] Fler resurser i resursbiblioteket (material från utbildningarna)
- [ ] Ev. flytta portalerna in under domänen (fråga 1, alternativ B)

---

## Gamla WordPress-adresser som ska omdirigeras

GitHub Pages saknar riktiga omdirigeringar, så varje gammal adress får en liten sida som skickar vidare (`<meta http-equiv="refresh">` + `rel="canonical"`).

| Gammal adress | Ny adress |
|---|---|
| `/utbildningsmoduler/` (Boka mig) | `/#utbildningar` |
| `/utbildningsmoduler/*` (7 gamla modulsidor + valet-2026) | `/#utbildningar` |
| `/varfor-ai/` | `/#varfor` |
| `/kontakt/` | `/#kontakt` |
| `/promptbibliotek-och-resurser-real/` | `/resursbibliotek/` |
| `/promptbibliotek-och-resurser-real/prompter-for-moten/` | `/resursbibliotek/#prompter-moten` |
| `/promptbibliotek-och-resurser-real/prompter-for-projektplanering/` | `/resursbibliotek/#prompter-brainstorming` |
| `/promptbibliotek-och-resurser-real/prompter-for-skrivande/` | `/resursbibliotek/#prompter-skrivande` |

Undersidor under `/utbildningsmoduler/`: `teoretisk-introduktion-till-generativ-ai-teknik-historia-och-juridik`, `praktisk-introduktion-till-generativ-ai-och-ai-i-det-egna-arbetet`, `ai-for-omvarldsbevakning-och-referensarbete`, `ai-for-informationshantering`, `ai-som-hjalp-vid-projekt-och-programverksamheten`, `ai-for-bild-video-och-musik`, `ai-och-skolbiblioteket`, `valet-2026-och-kallkritik`.

---

## Logg

- **2026-11-24** – Projektet startat. WordPress-sajten inventerad (16 sidor, 1 inlägg, 2 menyer, DNS). Beslut om struktur, design och vad som följer med. Första version av `index.html` och `resursbibliotek/` byggd. Plan och DNS-inventering skrivna.
