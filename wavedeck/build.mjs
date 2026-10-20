// Optional: regenerate the Chinese static fallback after changing templates/copy.
// Serve the wavedeck directory directly; production needs no build tools.
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root = path.dirname(fileURLToPath(import.meta.url));
const context = vm.createContext({window: {}});
for (const file of ['locales.js', 'policy.js', 'site.js']) {
  vm.runInContext(fs.readFileSync(path.join(root, 'assets', file), 'utf8'), context);
}
const api = context.window.WaveDeckSite;
const c = context.window.WAVEDECK_LOCALES['zh-Hans'];
for (const [i, page] of api.pages.entries()) {
  const html = `<!doctype html>
<html lang="zh-Hans" data-theme="dark">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#0b1220">
  <meta name="description" content="${c.description[i]}">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${c.meta[i]}">
  <meta property="og:description" content="${c.description[i]}">
  <title>${c.meta[i]}</title>
  <link rel="icon" type="image/webp" href="assets/icon.webp">
  <link rel="stylesheet" href="assets/site.css?v=20261020b">
  <script>try { var theme = localStorage.getItem('wavedeck-theme'); if (theme === 'light' || theme === 'dark') { document.documentElement.dataset.theme = theme; document.querySelector('meta[name="theme-color"]').content = theme === 'light' ? '#f4f7fb' : '#0b1220'; } } catch (e) {}</script>
  <script defer src="assets/locales.js?v=20261020b"></script>
  <script defer src="assets/policy.js?v=20261020b"></script>
  <script defer src="assets/site.js?v=20261020b"></script>
</head>
<body data-page="${page}">
${api.render(page, 'zh-Hans')}
</body>
</html>
`;
  fs.writeFileSync(path.join(root, `${page}.html`), html);
}
console.log('Generated WaveDeck home, privacy and support static pages.');
