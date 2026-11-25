# Flytt av aifolkbildaren.se – plan och status

> **Deadline: 27 december 2026.** Då går WordPress-kopplingen av domänen ut (betald t.o.m. 2026-12-27, förnyas automatiskt).
> Målet är att domänbytet är klart **senast ~16 december**, så att det finns marginal över jul.
>
> Den här filen är projektets minne. Uppdatera den varje gång något blir klart eller beslutas.

Senast uppdaterad: 2026-11-25

---

## Status i korthet

| Del | Status |
|---|---|
| Första version av startsida + resursbibliotek | ✅ Klar (2026-11-24), väntar på Vidars granskning |
| GitHub Pages påslaget för förhandsvisning | ⬜ Vidar gör (se steg 1) |
| Meritlista uppdaterad | ⬜ Väntar på ny lista från Vidar |
| Bilder | ⬜ Platshållare inlagda – riktiga bilder kommer |
| Nytt nyhetsbrev (ersätter MailerLite) | ⬜ Plan nedan – startas om från grunden |
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
- **Domänkoppling (alt. A, beslutat 2026-11-25):** `aifolkbildaren.se` kopplas till *det här* repot. Utbildningsportalerna ligger kvar på sina vanliga `vidarru.github.io/...`-adresser.
- **Kontaktadress:** Gmail-adressen visas på sidan (den Vidar läser varje dag).
- **Textändringar godkända:** "pedagogisk" (inte "politisk") om den publika föreläsningen, och ingen ålder i presentationen.
- **Titan:** användes tidigare men är felinställd och ska inte användas – DNS-posterna för Titan tas bort.
- **Nyhetsbrev:** MailerLite-upplägget görs om från grunden (se avsnittet *Nytt nyhetsbrev*). Avsändaradressen behöver inte vara densamma som förut.

## Öppna frågor / beslut som behövs

1. **Nyhetsbrevstjänst:** Substack eller annan tjänst? Se avsnittet *Nytt nyhetsbrev* nedan.
2. **Prenumeranterna i MailerLite:** finns det en lista värd att ta med? Exportera den i så fall innan kontot avslutas.

## Att granska i texterna

- ~~"politisk" → "pedagogisk"~~ ✅ godkänt
- ~~Ålder borttagen~~ ✅ godkänt
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
- [x] Pull request skapad med första versionen
- [ ] **Vidar:** granska texter och design

### Vecka 49 (1–7 dec) – Innehåll och förberedelser
- [ ] Uppdaterad meritlista in på sidan
- [ ] Bilder: ladda upp och placera ut (ersätt `.ph`-rutorna)
- [ ] Finslipa utbildningsupplägget
- [ ] **Säkerhetskopiera WordPress:** WordPress.com → Verktyg → Exportera (allt innehåll + mediebiblioteket). Spara zip-filerna lokalt
- [ ] Ladda ner de bilder från WordPress som ska återanvändas
- [ ] **Vidar:** logga in på Misshosting och kontrollera att du kan hantera DNS-poster där för domänen (det är dit DNS ska flyttas)
- [ ] Välj nyhetsbrevstjänst och exportera ev. prenumeranter från MailerLite (se *Nytt nyhetsbrev*)

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

### Vecka 52 (22–27 dec) – Avveckling och marginal
- [ ] WordPress.com: stäng av automatisk förnyelse av domänkopplingen **och betalplanen** (Upgrades → Purchases). Planen behövs inte längre: domänen ägs via Misshosting och e-posten går via Microsoft 365
- [ ] MailerLite: avsluta kontot när prenumeranterna är exporterade
- [ ] Koppla bort domänen från WordPress-sajten
- [ ] Låt WordPress-sajten ligga kvar (privat) en tid som backup, eller radera när allt är verifierat
- [ ] Google Search Console: lägg till/verifiera sajten igen om det behövs

### Senare (efter 27 dec)
- [ ] **Nyhetsbrevssida** (`/nyhetsbrev/`) där utskicken publiceras/speglas så att man kan läsa dem på sajten
- [ ] Fler resurser i resursbiblioteket (material från utbildningarna)

---

## Nytt nyhetsbrev

**Problemet i dag:** utskicken via MailerLite riskerar att hamna i skräpposten. Upplägget har varit MailerLite (gratis) med avsändare på företagsdomänen, och WordPress-planen betalades i praktiken för att få en domän som MailerLite godkände. Titan-inställningarna var dessutom felaktiga.

**Bra att veta:** domänen `aifolkbildaren.se` är din via Misshosting oavsett WordPress. När DNS ligger hos Misshosting kan du styra alla e-postinställningar själv, så WordPress-planen behövs inte för nyhetsbrevet.

**Varför utskick hamnar i skräpposten:** mottagarnas e-posttjänster kontrollerar att avsändardomänen har godkänt tjänsten som skickar. Det sker med tre DNS-poster: **SPF** (vilka servrar som får skicka), **DKIM** (digital signatur) och **DMARC** (vad som ska hända om kontrollerna misslyckas). Saknas någon av dem, eller pekar fel som Titan-posterna, kan Gmail och Outlook sortera bort utskicken.

**Två vägar:**

| | **Substack** (Vidars första tanke) | **Nyhetsbrevstjänst med egen domän** (MailerLite, Brevo m.fl.) |
|---|---|---|
| Avsändare | Substacks egen domän (t.ex. `aifolkbildaren@substack.com`) | `nyhetsbrev@aifolkbildaren.se` eller liknande |
| Skräppost | Substack sköter SPF/DKIM/DMARC själva. Inga DNS-poster behövs. | Kräver att SPF, DKIM och DMARC läggs in rätt i DNS |
| Arkiv att läsa på webben | Ingår (Substack-sidan), kan speglas till `/nyhetsbrev/` | Måste byggas själv |
| Kostnad | Gratis för gratisnyhetsbrev | Gratisnivåer finns, med begränsningar |

*Rekommendation:* **Substack**. Det löser skräppostproblemet utan DNS-arbete och ger ett arkiv direkt. Om en egen domän önskas senare kan Substack kopplas till t.ex. `nyhetsbrev.aifolkbildaren.se`.

**Steg:**
- [ ] Bestäm tjänst (Substack eller annan)
- [ ] Exportera prenumeranter från MailerLite (CSV) om listan ska följa med. Kontrollera att de har gett samtycke till att få utskick
- [ ] Skapa nyhetsbrevet, med namn, beskrivning och välkomstmejl
- [ ] Importera prenumeranterna
- [ ] Skicka ett testutskick till Gmail och Outlook och kontrollera att det inte hamnar i skräpposten
- [ ] Lägg in ett "Prenumerera"-fält eller en länk på hemsidan (t.ex. i Kontakt och i sidfoten)
- [ ] Ta bort MailerLite-posterna ur DNS och avsluta MailerLite
- [ ] Senare: sidan `/nyhetsbrev/` med utskicken

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

- **2026-11-25** – Beslut: domänen kopplas till det här repot (alt. A), Gmail visas som kontaktadress, "pedagogisk" och borttagen ålder godkända, Titan tas bort. Plan för nytt nyhetsbrev tillagd. Pull request skapad.
- **2026-11-24** – Projektet startat. WordPress-sajten inventerad (16 sidor, 1 inlägg, 2 menyer, DNS). Beslut om struktur, design och vad som följer med. Första version av `index.html` och `resursbibliotek/` byggd. Plan och DNS-inventering skrivna.
