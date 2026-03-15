# Auto Serwis - Nowoczesna wizytówka One-Page

Projekt responsywnej strony internetowej stworzonej dla profesjonalnego warsztatu samochodowego. Projekt powstał od zera, bez użycia zewnętrznych bibliotek i frameworków (Zero Dependencies) – z naciskiem na czysty, semantyczny kod, wysokie bezpieczeństwo, zgodność z prawem i maksymalną wydajność. Stanowi świetny przykład praktycznego wykorzystania nowoczesnego HTML, CSS oraz Vanilla JavaScript.

**[Link do wersji Live](https://r3gus.github.io/auto-serwis/)**

---

## Główne funkcjonalności

- **W pełni responsywny układ (RWD):** Strona wygląda świetnie na każdym ekranie (smartfon, tablet, desktop). Wykorzystano nowoczesny CSS Grid oraz Flexbox.
- **Nawigacja i Mobilne Menu:** Przyklejone menu (Sticky Header) ze wskaźnikiem aktualnie czytanej sekcji (zbudowane na Intersection Observer) oraz w pełni funkcjonalne, animowane "Hamburger Menu" dla urządzeń mobilnych.
- **Płynne animacje (Scroll Reveal):** Elementy strony pojawiają się łagodnie w trakcie przewijania, co nadaje stronie nowoczesnego charakteru (bez użycia ciężkich bibliotek, wyłącznie natywne API).
- **Akordeon FAQ:** Interaktywna sekcja "Często zadawane pytania" napisana w czystym JavaScript, obsługująca płynne rozwijanie i zwijanie odpowiedzi.
- **Podstrony i zgodność prawna (RODO/ODR):** Gotowe, ostylowane podstrony dla Regulaminu i Polityki Prywatności, dostosowane do wymagań Prawa Telekomunikacyjnego i RODO.
- **Pełnoekranowy Baner Cookies:** Estetyczny, zgodny z UX moduł obsługujący zgodę na pliki cookies (z użyciem obiektu `localStorage`).

## Zaawansowane bezpieczeństwo

- **Content Security Policy (CSP):** Wdrożono rygorystyczną polisę CSP w nagłówkach HTML chroniącą witrynę przed atakami typu XSS (Cross-Site Scripting). Polisa została precyzyjnie skonfigurowana w oparciu o białą listę (allowlist), dzięki czemu zapewnia maksymalne bezpieczeństwo, nie blokując jednocześnie zewnętrznych modułów takich jak interaktywna Mapa Google czy system weryfikacji reCAPTCHA.
- **Ochrona formularzy i reCAPTCHA:** Formularz zintegrowano z zewnętrznym punktem końcowym (eliminacja backendu) oraz zabezpieczono rozwiązaniem reCAPTCHA od Google.
- **Ochrona antyspamowa (Base64 + Weryfikacja człowieka):** Ochrona wrażliwych danych przed botami i scraperami. Dane w kodzie HTML zakodowano w formacie Base64. JavaScript dekoduje je i tworzy linki dopiero wtedy, gdy wykryje fizyczną interakcję użytkownika ze stroną (ruch myszką, scroll, dotyk).

---

## Wykorzystane technologie

Projekt opiera się w 100% na czystych technologiach frontendowych (Vanilla Stack):

- **HTML5:** Semantyczne tagi, dostępność dla czytników ekranu, CSP, iframe z Google Maps.
- **CSS3:** Custom Properties (zmienne CSS), Flexbox, CSS Grid, Media Queries, płynne przejścia (`transition`), natywny `scroll-behavior: smooth`. 
- **Vanilla JavaScript (ES6+):** Logika menu, localStorage (cookies), Base64 obfuscation, IntersectionObserver API.

---

## Struktura projektu

```text
 auto-serwis/
├──  index.html             # Główna strona (One-Page) + Moduł Kontakt / Formularz
├──  regulamin.html         # Podstrona z regulaminem i prawami konsumenta
├──  prywatnosc.html        # Podstrona z polityką prywatności i tabelą RODO
├──  README.md              # Dokumentacja projektu
└──  assets/
    ├──  css/
    │   └──  style.css      # Wszystkie style (zmienne, układ, mobile, cookies)
    └──  js/
        └──  main.js        # Skrypty (Menu, Animacje, Akordeon, Observer, Antyspam, Cookies)