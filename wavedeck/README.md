# WaveDeck public pages

Self-contained static homepage, privacy policy and support page. Keep `index.html`, `privacy.html` and `support.html` at their existing URLs.

- Eight website languages: `zh-Hans`, `zh-Hant`, `en`, `ja`, `ko`, `de`, `fr`, `es`.
- Link to a language with, for example, `support.html?lang=ja`. Priority: valid URL language, saved preference, browser language, English. `lang=zh` remains a Simplified Chinese alias.
- Header and footer both provide synchronized language and appearance controls. Page navigation preserves the selected language. Language and appearance preferences use browser local storage when available. No external fonts, analytics, cookies or third-party scripts are loaded.
- Dark appearance follows the WorkPageHtml reference; visitors can select light appearance. Both use the same accessible layout and content.
- All three HTML files include readable Simplified Chinese content without JavaScript. Language switching and screenshot dialogs enhance that content when JavaScript is enabled. Screenshot links still open the original images without JavaScript.

## Editing

- `assets/locales.js`: all website UI strings, feature descriptions, support answers and additional policy disclosures.
- `assets/policy.js`: a snapshot of the application's existing eight-language privacy policy, taken on October 20, 2026 from `TimeWave/Sources/TimeWave/Views/PrivacyPolicyTranslations.swift` and `SettingsView.swift`. It retains the app policy's September 27, 2026 effective date; the website separately shows its October 20 update date.
- `assets/site.js`: shared templates and progressive enhancements.
- `assets/site.css`: responsive layout, dark/light tokens, print and reduced-motion styles.
- `assets/screenshots/`: local copies of the real WaveDeck interface images from WorkPageHtml (Chinese, Traditional Chinese, English, Japanese and Korean). German, French and Spanish explicitly label the English screenshots. These images illustrate the interface and may differ from a later app release.

The website supplements the app policy with disclosures for optional on-device camera/photo recognition, and retains the prior website's hearing-safety and battery-use notices. Network-time disclosures reflect the current app source: NTP/SNTP and parallel HTTPS references, including source IP and standard connection metadata.

After editing templates or text, run from the repository root:

```sh
node wavedeck/build.mjs
```

This refreshes the checked-in Chinese HTML fallback. Deployment is ordinary static hosting; no Node runtime or build step is required on the server. To preview locally, serve the repository with `python3 -m http.server 8765 --bind 127.0.0.1`, then open `http://127.0.0.1:8765/wavedeck/`.
