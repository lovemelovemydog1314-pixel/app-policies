# app-policies

- Root `index.html`: Showcase portal & hub for all Mac apps with real-time filtering, search, and spotlight micro-interactions.
- Each app folder exposes the same three public routes:
  - The assets directory contains the app icon and page assets.
  - index.html introduces the app.
  - privacy.html contains its privacy policy and any related notices.
  - support.html provides help and contact information.

The seven sites other than WaveDeck share the templates and localized copy in `shared/` while keeping their existing product-specific URLs and icons. The pages support Simplified Chinese, Traditional Chinese, English, Japanese, Korean, German, French, and Spanish. The header and footer both include quick return navigation to the Hub portal, language controls, and appearance toggles. Support contact is `zipmaster_support@126.com` on each site.

Privacy pages show an eight-language summary and keep each product's existing detailed policy text available in its original language. `shared/privacy-source.json` is the source archive used to generate `shared/privacy-source.js`.

After changing the shared templates or copy, regenerate the Chinese static fallback pages with:

```sh
node shared/build.mjs
node wavedeck/build.mjs
```

Projects:

- beauty-folder
- caffeineai
- drift
- folderify
- localdrop
- medialens
- wavedeck
- zipmaster
