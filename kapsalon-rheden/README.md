# Kapsalon Rheden – website

Nieuwe website voor Kapsalon Rheden (voorheen Dierking Coiffures Rheden), Groenestraat 39, Rheden.
Stijl: luxe salon met warme zand- en roze-beige tinten, Cormorant Garamond voor koppen en Jost voor tekst.

## Gebruik

Open `index.html` in je browser. Alles staat in één bestand (HTML, CSS en JavaScript) en er is geen server nodig.
Je kunt de map zo op elke hosting zetten.

## Foto's toevoegen

Zet foto's met deze namen in de map `img/`. Ze verschijnen dan vanzelf in de boogvormige kaders.
Zolang er geen foto staat, toont de site een decoratieve achtergrond.

| Bestand | Plek | Advies |
|---|---|---|
| `img/hero.jpg` | Grote boog bovenaan | Staand, minstens 900 × 1300 px, bijv. het interieur |
| `img/detail.jpg` | Kleine boog bovenaan | Staand, minstens 500 × 700 px, bijv. een kapper aan het werk |
| `img/salon.jpg` | Boog bij "Over ons" | Staand (4:5), minstens 800 × 1000 px, bijv. de gevel of de salon |

## Nog controleren vóór livegang

De gegevens hieronder komen van de oude Dierking-site en uit openbare bedrijvengidsen. Controleer ze:

- **Telefoon `026 495 1200`**: het nummer van Dierking Rheden. Klopt het dat jullie dit nummer overnemen?
- **E-mail `info@kapsalonrheden.nl`**: dit is een placeholder. Vervang het door jullie echte adres op 3 plekken: het JSON-LD-blok in `<head>`, de contactkaart en `data-email` op het afspraakformulier.
- **Postcode `6991 GC`**: komt uit een bedrijvengids.
- **Openingstijden**: overgenomen van Dierking Rheden. Pas ze aan in de tabel bij `#contact`. De status "Nu geopend/gesloten" bovenaan leest de tijden daaruit. Pas ook het JSON-LD-blok en de footer aan.
- **Prijzen**: de vanaf-prijzen van Dierking. Pas ze aan bij `#prijzen` en in de drie bedragen in de hero.
- **Behandelingen**: algemene kapsalondiensten. Haal weg wat jullie niet aanbieden.
- **Melding "voorheen Dierking Coiffures Rheden"**: staat in de balk bovenaan, de meta-omschrijving en de footer. Check of jullie de oude naam mogen noemen volgens de overnameafspraken.

## Afspraakformulier

Het formulier heeft geen server nodig. Na versturen opent het e-mailprogramma van de bezoeker met een ingevulde aanvraag aan het adres in `data-email`.
Gaan jullie een online boekingssysteem gebruiken (bijv. Salonized of Treatwell)? Dan kun je de knoppen "Afspraak maken" naar die boekingslink laten wijzen.
