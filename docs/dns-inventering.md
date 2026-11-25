# DNS-inventering för aifolkbildaren.se

Hämtad från WordPress.com 2026-11-24.

**Läget i dag:** domänen är registrerad hos **Misshosting**, men namnservrarna pekar på **WordPress.com**. Alla DNS-poster ligger alltså hos WordPress. När WordPress-kopplingen avslutas måste posterna finnas någon annanstans, annars slutar både hemsidan **och e-posten** att fungera.

**Plan:** lägg in posterna nedan i Misshostings DNS-hantering *innan* namnservrarna byts tillbaka till Misshosting. (Alternativ: Cloudflare, gratis.)

DNS-poster är offentliga uppgifter, så det är okej att de står här.

---

## 1. Hemsidan → GitHub Pages (NYA poster)

| Typ | Namn | Värde |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |
| CNAME | `www` | `vidarru.github.io.` |
| TXT | `_github-pages-challenge-VidarRu` | *(värdet visas när domänen verifieras i GitHub)* |

Ersätter WordPress A-poster (`192.0.78.24`, `192.0.78.25`) och `www` → `aifolkbildaren.se`.

## 2. E-post via Microsoft 365 – MÅSTE följa med

| Typ | Namn | Värde |
|---|---|---|
| MX | `@` | `aifolkbildaren-se.mail.protection.outlook.com.` (prioritet 0) |
| CNAME | `autodiscover` | `autodiscover.outlook.com.` |
| TXT | `@` | `MS=ms14874527` |

## 3. SPF, DMARC och verifieringar

| Typ | Namn | Värde i dag | Förslag |
|---|---|---|---|
| TXT | `@` | `v=spf1 a mx include:spf.titan.email include:_spf.mlsend.com include:spf.protection.outlook.com ~all` | `v=spf1 include:spf.protection.outlook.com ~all`. Ta bort `a` (pekar på GitHub efter flytten), Titan (beslutat) och MailerLite (ersätts). Lägg till nyhetsbrevstjänstens `include:` bara om den skickar från den egna domänen. |
| TXT | `_dmarc` | `v=DMARC1;p=none;sp=none;adkim=r;aspf=r;pct=100` | Behåll |
| TXT | `@` | `google-site-verification=AUYeaiN5WkbaDXjS06GxIlJnrUX6OwCJDJAdNq1vyl0` | Behåll (Google Search Console) |

## 4. Nyhetsbrev – MailerLite (ska bort)

MailerLite ersätts av ett nytt nyhetsbrev (se `PROGRESS.md`). Posterna flyttas **inte** med.

| Typ | Namn | Värde |
|---|---|---|
| CNAME | `litesrv._domainkey` | `litesrv._domainkey.mlsend.com.` |
| TXT | `@` | `mailerlite-domain-verification=765e153470d7fce8514e090bd8dedda7625e76d8` |

Om nyhetsbrevet flyttar till Substack: Substack behöver normalt inga poster, utom om en egen domän ska användas (t.ex. `nyhetsbrev.aifolkbildaren.se`, kräver CNAME enligt Substacks instruktioner).

## 5. Tas bort

| Typ | Namn | Varför |
|---|---|---|
| TXT | `titan1._domainkey` | Titan (WordPress.com:s e-post) – felinställd och används inte längre (beslutat 2026-11-25) |
| CNAME / TXT | `litesrv._domainkey`, `mailerlite-domain-verification` | MailerLite ersätts |
| TXT | `_domainconnect` | Gäller bara WordPress.com |
| NS / A (skyddade) | `@` | WordPress.com:s egna, ersätts av Misshostings namnservrar och GitHub-posterna ovan |

## Tips

- Microsoft 365 har ingen DKIM inlagd i dag (`selector1._domainkey`/`selector2._domainkey`). Det kan läggas till i samband med flytten för bättre leverans – värdena finns i Microsoft 365 Defender → E-postautentisering.
- Efter bytet: kontrollera med t.ex. `dig aifolkbildaren.se MX` eller en webbtjänst som MXToolbox.
