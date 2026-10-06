import './App.css'

const featuredCampers = [
  {
    title: 'Kamper rodzinny',
    location: 'Krakow',
    price: 'od 390 zl / doba',
    details: '4 miejsca do spania, kuchnia, ogrzewanie',
  },
  {
    title: 'Van weekendowy',
    location: 'Wroclaw',
    price: 'od 280 zl / doba',
    details: '2 miejsca, kompaktowy, gotowy na city break',
  },
  {
    title: 'Polintegra',
    location: 'Gdansk',
    price: 'od 520 zl / doba',
    details: 'komfortowa trasa dla 4 osob, duzy bagaznik',
  },
]

const ownerSteps = [
  'Dodajesz opis, zdjecia, terminy i cene.',
  'Otrzymujesz zapytania od osob szukajacych wyjazdu.',
  'Samodzielnie ustalasz szczegoly i warunki wynajmu.',
]

const travelerSteps = [
  'Szukasz kampera po lokalizacji, terminie i typie wyjazdu.',
  'Porownujesz oferty prywatnych wlascicieli.',
  'Kontaktujesz sie z wlascicielem i dogadujesz rezerwacje.',
]

function App() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__media" aria-hidden="true" />
        <div className="hero__shade" />
        <div className="hero__content">
          <p className="eyebrow">Marketplace wynajmu kamperow</p>
          <h1 id="hero-title">Wynajmij kampera albo zarabiaj na swoim.</h1>
          <p className="hero__lead">
            Kamper Rent laczy wlascicieli kamperow z osobami szukajacymi
            dobrych ofert na wyjazd. Serwis pomaga znalezc druga strone, ale
            sam nie swiadczy uslug wynajmu.
          </p>
          <div className="hero__actions" aria-label="Glowne sciezki">
            <a className="button button--primary" href="#szukam">
              Szukam kampera
            </a>
            <a className="button button--secondary" href="#wystawiam">
              Mam kampera
            </a>
          </div>
        </div>
      </section>

      <section className="choice-band" aria-label="Dla kogo jest serwis">
        <article className="choice-panel" id="szukam">
          <p className="eyebrow">Dla podrozujacych</p>
          <h2>Znajdz oferte bez dzwonienia w ciemno.</h2>
          <p>
            Przegladaj kampery od prywatnych wlascicieli, porownuj lokalizacje,
            ceny i wyposazenie, a potem kontaktuj sie bezposrednio.
          </p>
        </article>
        <article className="choice-panel choice-panel--dark" id="wystawiam">
          <p className="eyebrow">Dla wlascicieli</p>
          <h2>Zarabiaj, kiedy kamper stoi nieuzywany.</h2>
          <p>
            Pokaz pojazd, ustaw dostepnosc i zbieraj zapytania od osob, ktore
            faktycznie planuja wyjazd.
          </p>
        </article>
      </section>

      <section className="section section--split" aria-labelledby="how-title">
        <div>
          <p className="eyebrow">Jak to dziala</p>
          <h2 id="how-title">Jedno miejsce, dwie jasne sciezki.</h2>
          <p className="section__intro">
            Na starcie budujemy proste skojarzenie stron. Platnosci, umowy i
            szczegoly wydania pojazdu pozostaja po stronie wlasciciela i
            wynajmujacego.
          </p>
        </div>
        <div className="step-grid">
          <div className="step-column">
            <h3>Wystawiam kampera</h3>
            <ol>
              {ownerSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
          <div className="step-column">
            <h3>Szukam kampera</h3>
            <ol>
              {travelerSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section section--muted" aria-labelledby="offers-title">
        <div className="section__header">
          <div>
            <p className="eyebrow">Przykladowe oferty</p>
            <h2 id="offers-title">Kierunek: pierwszy katalog kamperow.</h2>
          </div>
          <a className="text-link" href="mailto:hello@kamper-rent.local">
            Dodaj swoj pojazd
          </a>
        </div>
        <div className="offer-grid">
          {featuredCampers.map((camper) => (
            <article className="offer-card" key={camper.title}>
              <div className="offer-card__badge">{camper.location}</div>
              <h3>{camper.title}</h3>
              <p>{camper.details}</p>
              <strong>{camper.price}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="cta" aria-labelledby="cta-title">
        <div>
          <p className="eyebrow">MVP</p>
          <h2 id="cta-title">Najpierw sprawdzamy popyt i podaz.</h2>
        </div>
        <p>
          Ta wersja strony jest gotowa do hostowania jako statyczny frontend na
          Cloudflare Pages. Kolejny krok to formularz zgloszenia kampera albo
          lista oczekujacych.
        </p>
      </section>
    </main>
  )
}

export default App
