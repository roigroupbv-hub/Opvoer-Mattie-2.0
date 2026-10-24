# Kapsalon Rheden – website

Website van Kapsalon Rheden (voorheen Dierking Coiffures Rheden), Groenestraat 39, Rheden.
Donker en warm ontwerp met champagne-accent, koppen in Poppins (sluit aan op het logo) en tekst in Figtree.

## Pagina's

| Bestand | Inhoud |
|---|---|
| `index.html` | Home: sfeerfoto, openingsstatus, welkom, behandelingen, prijzen, team, kleuradvies, openingstijden en contact |
| `behandelingen.html` | Zes behandelingen met foto, uitleg en prijs |
| `prijzen.html` | Volledige prijslijst |
| `team.html` | Teamleden en "Werken bij ons" |
| `contact.html` | Afspraakformulier, contactgegevens en openingstijden |

Gedeelde bestanden:

- `assets/css/style.css`: alle opmaak (kleuren en lettertypes staan bovenaan als variabelen)
- `assets/js/main.js`: mobiel menu, "nu geopend/gesloten", vandaag markeren in de openingstijden en het afspraakformulier
- `img/`: logo, favicons en foto's

## Gebruik

Open `index.html` in je browser, of zet de hele map `kapsalon-rheden/` op een webhosting.
Er is geen server of build-stap nodig.

## Afspraakformulier

Het formulier opent bij versturen het e-mailprogramma van de bezoeker, met een ingevulde aanvraag aan het adres in `data-email` (in `contact.html`).
Links als `contact.html?behandeling=Kleuradvies` kiezen de behandeling alvast voor.
Gaan jullie een online boekingssysteem gebruiken (bijv. Salonized of Treatwell)? Laat dan de knoppen "Afspraak maken" naar die boekingslink wijzen.

## Nog in te vullen of te controleren vóór livegang

- **E-mailadres** `info@kapsalonrheden.nl` is een placeholder. Vervang het in `contact.html` (`data-email` en het mailto-adres), in `index.html` (contactblok en het JSON-LD-blok bovenin).
- **Team**: `[Naam]`, `[Functie]` en `[Specialisatie]` in `team.html` en `index.html`. Vraag de mensen op de foto's om toestemming voor publicatie.
- **Telefoon 026 495 1200**: het nummer van Dierking Rheden. Klopt het dat jullie dit overnemen?
- **Postcode 6991 GC**: komt uit een bedrijvengids.
- **Openingstijden**: overgenomen van Dierking Rheden. Ze staan op vijf plekken: `HOURS` in `assets/js/main.js`, de tabellen in `index.html` en `contact.html`, de footer van elke pagina en het JSON-LD-blok in `index.html`.
- **Prijzen**: de vanaf-prijzen van Dierking, in `prijzen.html`, `behandelingen.html` en `index.html`.
- **Foto's**: komen van de oude Dierking-site. Check of de overname het gebruik dekt. In `interieur.jpg` is in een spiegel een stukje van het oude Dierking-logo te zien, en `model-pony.jpg` lijkt een campagnebeeld van een productmerk.
- **"Voorheen Dierking Coiffures Rheden"**: staat in de balk bovenaan de homepage, de meta-omschrijving en de footer. Check of jullie de oude naam mogen noemen.
- **Kinderen** heeft nog geen foto. Vervang op `behandelingen.html` het blok `treatment-panel` door een `<img class="treatment-media" …>` zodra er een foto is.
