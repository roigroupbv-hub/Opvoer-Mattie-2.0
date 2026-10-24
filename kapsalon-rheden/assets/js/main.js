// Kapsalon Rheden — menu, openingstijden en afspraakformulier

// Openingstijden per weekdag (0 = zondag). Pas deze aan als de tijden veranderen,
// en ook de tabellen in index.html en contact.html, de footer en het JSON-LD-blok in index.html.
const HOURS = {
  0: null,
  1: null,
  2: ['09:00', '18:00'],
  3: ['09:00', '18:00'],
  4: ['09:00', '18:00'],
  5: ['09:00', '20:00'],
  6: ['08:30', '17:00']
};
const DAYS = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];

document.addEventListener('DOMContentLoaded', () => {
  initMenu();
  initOpeningHours();
  initBookingForm();
  document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
});

function initMenu() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;

  const setOpen = open => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.querySelector('.sr-only').textContent = open ? 'Menu sluiten' : 'Menu openen';
    nav.classList.toggle('open', open);
  };
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', e => { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setOpen(false); });
}

// Tijd in Nederland, ongeacht de tijdzone van de bezoeker
function nowInRheden() {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Amsterdam', weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23'
  }).formatToParts(new Date());
  const part = type => parts.find(p => p.type === type).value;
  return {
    day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(part('weekday')),
    minutes: Number(part('hour')) * 60 + Number(part('minute'))
  };
}

function toMinutes(time) {
  const [h, m] = time.split(':').map(Number);
  return h * 60 + m;
}

function initOpeningHours() {
  const { day, minutes } = nowInRheden();

  document.querySelectorAll(`.hours tr[data-day="${day}"]`).forEach(row => row.classList.add('today'));

  const target = document.querySelector('[data-open-status]');
  if (!target) return;

  const today = HOURS[day];
  if (today && minutes < toMinutes(today[0])) {
    target.textContent = `Vandaag open van ${today[0]} tot ${today[1]}`;
  } else if (today && minutes < toMinutes(today[1])) {
    target.textContent = `Nu geopend · tot ${today[1]}`;
  } else {
    for (let i = 1; i <= 7; i++) {
      const next = (day + i) % 7;
      if (HOURS[next]) {
        target.textContent = `Gesloten · ${i === 1 ? 'morgen' : DAYS[next]} vanaf ${HOURS[next][0]}`;
        break;
      }
    }
  }
}

// Het formulier heeft geen server nodig: het opent een ingevulde e-mail aan het adres in data-email.
function initBookingForm() {
  const form = document.getElementById('booking-form');
  if (!form) return;

  const wrap = document.getElementById('booking-wrap');
  const thanks = document.getElementById('form-thanks');
  const select = form.querySelector('[name="behandeling"]');

  // Voorselectie via een link als contact.html?behandeling=Kleuradvies
  const wanted = new URLSearchParams(window.location.search).get('behandeling');
  if (wanted && select) {
    const option = [...select.options].find(o => o.value.toLowerCase() === wanted.toLowerCase());
    if (option) select.value = option.value;
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form);
    const subject = `Afspraakaanvraag: ${data.get('behandeling')}`;
    const body = [
      `Naam: ${data.get('naam')}`,
      `Telefoon: ${data.get('telefoon')}`,
      `Behandeling: ${data.get('behandeling')}`,
      `Voorkeursdag: ${data.get('dag')}`,
      '',
      data.get('opmerking') || ''
    ].join('\n');

    window.location.href = `mailto:${form.dataset.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    wrap.hidden = true;
    thanks.hidden = false;
    thanks.querySelector('h2').focus();
  });

  thanks.querySelector('[data-reset]').addEventListener('click', () => {
    form.reset();
    thanks.hidden = true;
    wrap.hidden = false;
    form.querySelector('input').focus();
  });
}
