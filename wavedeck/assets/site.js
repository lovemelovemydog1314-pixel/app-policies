/* Shared static-page renderer. Also used by build.mjs to provide readable HTML without JavaScript. */
(function (global) {
  'use strict';
  const languages = {
    'zh-Hans': '简体中文', 'zh-Hant': '繁體中文', en: 'English', ja: '日本語',
    ko: '한국어', de: 'Deutsch', fr: 'Français', es: 'Español'
  };
  const pages = ['index', 'privacy', 'support'];
  const email = 'zipmaster_support@126.com';
  const storeURL = 'https://apps.apple.com/app/id6810270280';
  const escape = value => String(value).replace(/[&<>"']/g, char => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[char]));
  const href = (page, lang) => `${page}.html?lang=${encodeURIComponent(lang)}`;
  const textBlock = text => text.split('\n').map(line => line.startsWith('• ') ? `<li>${escape(line.slice(2))}</li>` : `<p>${escape(line)}</p>`).join('');
  function paragraphs(text) {
    return text.startsWith('• ') ? `<ul>${textBlock(text)}</ul>` : textBlock(text);
  }
  function image(c, lang, i, hero = false) {
    const screenshotLang = {'zh-Hans': 'zh', 'zh-Hant': 'zh-Hant', en: 'en', ja: 'ja', ko: 'ko'}[lang] || 'en';
    const name = ['1.overview', '3.watches', '4.guide'][i];
    const src = `assets/screenshots/${screenshotLang}/${name}.webp`;
    return `<figure class="app-preview${hero ? ' hero-preview' : ''}">
      <a class="screenshot-link" href="${src}" data-preview aria-label="${escape(c.zoom + ': ' + c.imageAlts[i])}"><img src="${src}" alt="${escape(c.imageAlts[i])}" width="1800" height="1125" ${hero ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"></a>
      <figcaption><span>${escape(c.imageAlts[i])}</span><span>${escape(screenshotLang === 'en' && lang !== 'en' ? c.englishNote : c.screenshotNote)}</span></figcaption>
    </figure>`;
  }
  function steps(c, className = '') {
    return `<ol class="steps ${className}">${c.steps.map(([title, body], i) => `<li><span class="step-index" aria-hidden="true">${i + 1}</span><div><h3>${escape(title)}</h3><p>${escape(body)}</p></div></li>`).join('')}</ol>`;
  }
  function safety(c) {
    return `<aside class="safety-note"><h2>${escape(c.safetyTitle)}</h2><p>${escape(c.safetyBody)}</p></aside>`;
  }
  function home(c, lang) {
    return `<section class="hero" aria-labelledby="page-title">
      <div class="hero-copy"><p class="eyebrow">${escape(c.heroKicker)}</p><h1 id="page-title">${c.heroTitle.includes('，') ? c.heroTitle.split('，').map((part, i) => `<span class="headline-phrase">${escape(part + (i === 0 ? '，' : ''))}</span>`).join('') : escape(c.heroTitle)}</h1><p class="lede">${escape(c.heroBody)}</p><div class="actions"><a class="button" href="${storeURL}" target="_blank" rel="noopener noreferrer">${escape(c.download)} <span aria-hidden="true">↗</span></a><a class="text-link" href="${href('support', lang)}">${escape(c.heroHelp)} <span aria-hidden="true">→</span></a></div></div>
      ${image(c, lang, 0, true)}
    </section>
    <section class="station-section" aria-labelledby="stations-title"><h2 id="stations-title">${escape(c.stationsTitle)}</h2><dl class="stations">${['BPC', 'JJY40', 'JJY60', 'WWVB', 'MSF', 'DCF77'].map((name, i) => `<div><dt>${name}</dt><dd>${escape(c.regions[i])}</dd></div>`).join('')}</dl></section>
    <section class="content-section" aria-labelledby="features-title"><div class="section-heading"><h2 id="features-title">${escape(c.featuresTitle)}</h2><p>${escape(c.featuresBody)}</p></div><div class="feature-layout"><div class="feature-list">${c.features.map(([title, body], i) => `<article class="feature"><span class="feature-index" aria-hidden="true">0${i + 1}</span><div><h3>${escape(title)}</h3><p>${escape(body)}</p></div></article>`).join('')}</div>${image(c, lang, 1)}</div></section>
    <section class="content-section" aria-labelledby="start-title"><div class="section-heading"><h2 id="start-title">${escape(c.startTitle)}</h2><p>${escape(c.startBody)}</p></div><div class="guide-layout">${image(c, lang, 2)}${steps(c)}</div></section>
    <section class="privacy-note" aria-labelledby="privacy-title"><div><h2 id="privacy-title">${escape(c.privacyTitle)}</h2><p>${escape(c.privacyBody)}</p></div><a class="text-link" href="${href('privacy', lang)}">${escape(c.privacyLink)} <span aria-hidden="true">→</span></a></section>
    <aside class="limits"><h2>${escape(c.limitsTitle)}</h2><p>${escape(c.limitsBody)}</p></aside>`;
  }
  function support(c, lang) {
    return `<section class="page-hero support-hero"><div><p class="eyebrow">${escape(c.supportKicker)}</p><h1 id="page-title">${escape(c.supportTitle)}</h1><p class="lede">${escape(c.supportBody)}</p></div><aside class="contact-panel"><h2>${escape(c.contactTitle)}</h2><p>${escape(c.contactBody)}</p><a class="button" href="mailto:${email}?subject=WaveDeck%20Support">${escape(c.mail)} <span aria-hidden="true">↗</span></a><a class="email-link" href="mailto:${email}">${email}</a><button class="copy-email" type="button" data-copy-email hidden>${escape(c.copy)}</button><span class="copy-status" role="status" aria-live="polite"></span></aside></section>
    <section class="content-section" aria-labelledby="setup-title"><div class="section-heading"><h2 id="setup-title">${escape(c.helpStepsTitle)}</h2></div>${steps(c, 'steps-horizontal')}</section>
    <section class="faq-section" aria-labelledby="faq-title"><div class="section-heading"><h2 id="faq-title">${escape(c.faqTitle)}</h2><p>${escape(c.faqBody)}</p></div><div class="faq-list">${c.faqs.map(([q, a]) => `<details><summary>${escape(q)}</summary><p>${escape(a)}</p></details>`).join('')}</div></section>
    ${safety(c)}<div class="support-policy"><a class="text-link" href="${href('privacy', lang)}">${escape(c.privacyLink)} <span aria-hidden="true">→</span></a></div>`;
  }
  function privacy(c, p) {
    const privacySections = [...p.privacySections, {id: 'camera', title: c.cameraTitle, body: c.cameraBody}];
    const disclaimerSections = [...p.disclaimerSections, {id: 'hearing', title: c.hearingTitle, body: c.hearingBody}, {id: 'power', title: c.powerTitle, body: c.powerBody}];
    const section = (s, prefix) => `<section class="legal-section" id="${prefix}-${s.id}"><h3>${escape(s.title)}</h3>${paragraphs(s.body)}${s.id === 'contact' ? `<p><a href="mailto:${email}">${email}</a></p>` : ''}</section>`;
    return `<section class="page-hero policy-hero"><p class="eyebrow">${escape(c.policyKicker)}</p><h1 id="page-title">${escape(p.title)}</h1><div class="policy-dates"><span>${escape(p.effectiveDateLabel)} <time datetime="2026-09-27">${escape(p.effectiveDate)}</time></span><span>${escape(c.webUpdated)}</span></div><p class="lede">${escape(p.intro)}</p></section>
    <section class="policy-summary" aria-labelledby="summary-title"><h2 id="summary-title">${escape(c.policySummaryTitle)}</h2><div>${c.policySummaries.map(([title, body]) => `<article><h3>${escape(title)}</h3><p>${escape(body)}</p></article>`).join('')}</div></section>
    <div class="legal-layout"><aside class="toc"><nav aria-label="${escape(c.toc)}"><h2>${escape(c.toc)}</h2><a href="#privacy-policy">${escape(p.privacyHeading)}</a><a class="toc-sub" href="#privacy-network">${escape(p.privacySections[1].title)}</a><a class="toc-sub" href="#privacy-camera">${escape(c.cameraTitle)}</a><a href="#disclaimer">${escape(p.disclaimerHeading)}</a><a class="toc-sub" href="#disclaimer-hearing">${escape(c.hearingTitle)}</a><a href="#additional-notice">${escape(p.additionalHeading)}</a><a href="#privacy-contact">${escape(p.privacySections[7].title)}</a></nav></aside><article class="legal-content"><section id="privacy-policy"><h2>${escape(p.privacyHeading)}</h2>${privacySections.map(s => section(s, 'privacy')).join('')}</section><section id="disclaimer"><h2>${escape(p.disclaimerHeading)}</h2>${disclaimerSections.map(s => section(s, 'disclaimer')).join('')}</section><section id="additional-notice"><h2>${escape(p.additionalHeading)}</h2><p>${escape(p.additionalBody)}</p><p>${escape(c.stationNotice)}</p></section></article></div>`;
  }
  function render(page, lang) {
    const c = global.WAVEDECK_LOCALES[lang];
    const p = global.WAVEDECK_POLICY[lang];
    const navigation = footer => `<nav class="${footer ? 'footer-links' : 'site-nav'}" aria-label="${escape(footer ? c.footerLabel : c.navLabel)}">${pages.map((name, i) => `<a href="${href(name, lang)}"${page === name ? ' aria-current="page"' : ''}>${escape(c.nav[i])}</a>`).join('')}</nav>`;
    const controls = position => `<div class="${position}-actions"><label class="language-control" hidden><span class="sr-only">${escape(c.language)}</span><select id="${position === 'header' ? 'language-select' : 'footer-language-select'}" data-language-select aria-label="${escape(c.language)}">${Object.entries(languages).map(([code, label]) => `<option value="${code}" lang="${code}"${code === lang ? ' selected' : ''}>${label}</option>`).join('')}</select></label><button class="theme-toggle" type="button" hidden></button></div>`;
    const allAppsText = c.allApps || 'All Apps';
    return `<a class="skip-link" href="#main-content">${escape(c.skip)}</a><div class="page-shell"><header class="site-header"><div class="brand-group"><a class="hub-pill" href="../index.html?lang=${encodeURIComponent(lang)}" title="${escape(allAppsText)}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><path d="m15 18-6-6 6-6"/></svg><span>${escape(allAppsText)}</span></a><a class="brand" href="${href('index', lang)}"><img src="assets/icon.webp" alt="" width="40" height="40"><span>WaveDeck</span></a></div>${navigation(false)}${controls('header')}</header><main id="main-content" tabindex="-1">${page === 'privacy' ? privacy(c, p) : page === 'support' ? support(c, lang) : home(c, lang)}</main><footer class="site-footer"><div><a class="footer-brand" href="${href('index', lang)}">WaveDeck</a><p>${escape(c.footer)}</p><small>© 2026 WaveDeck · <a href="../index.html?lang=${encodeURIComponent(lang)}" style="color:inherit;text-decoration:underline">${escape(allAppsText)}</a></small></div><div class="footer-tools">${navigation(true)}</div></footer></div><dialog class="image-dialog" aria-label="${escape(c.screenshotNote)}"><button class="dialog-close" type="button">${escape(c.close)} <span aria-hidden="true">×</span></button><img alt="" width="1800" height="1125"></dialog>`;
  }
  global.WaveDeckSite = {render, languages, pages};
  if (typeof document === 'undefined') return;
  const page = document.body.dataset.page || 'index';
  const storageKey = 'wavedeck-language';
  let currentLanguage;
  function normalize(code) {
    if (!code) return null;
    if (Object.hasOwn(languages, code)) return code;
    const value = code.toLowerCase();
    if (value === 'zh' || value === 'zh-cn' || value === 'zh-sg' || value.startsWith('zh-hans')) return 'zh-Hans';
    if (/^zh-(tw|hk|mo|hant)/.test(value)) return 'zh-Hant';
    return Object.keys(languages).find(key => key === value.split('-')[0]) || null;
  }
  function readStored(key) { try { return localStorage.getItem(key); } catch { return null; } }
  function store(key, value) { try { localStorage.setItem(key, value); } catch { /* URL keeps the choice usable. */ } }
  function detectLanguage() {
    return normalize(new URL(location.href).searchParams.get('lang')) || normalize(readStored(storageKey)) || (navigator.languages || [navigator.language]).map(normalize).find(Boolean) || 'en';
  }
  function themeLabel() {
    const c = global.WAVEDECK_LOCALES[currentLanguage];
    const dark = document.documentElement.dataset.theme === 'dark';
    document.querySelectorAll('.theme-toggle').forEach(button => {
      button.textContent = dark ? c.light : c.dark;
      button.setAttribute('aria-label', dark ? c.lightLabel : c.darkLabel);
    });
  }
  function setLanguage(lang, updateURL = true) {
    const openFAQs = [...document.querySelectorAll('.faq-list details')].map(node => node.open);
    currentLanguage = lang;
    const c = global.WAVEDECK_LOCALES[lang];
    document.documentElement.lang = lang;
    document.title = c.meta[pages.indexOf(page)];
    document.querySelector('meta[name="description"]').content = c.description[pages.indexOf(page)];
    document.querySelector('meta[property="og:title"]').content = document.title;
    document.querySelector('meta[property="og:description"]').content = c.description[pages.indexOf(page)];
    document.body.innerHTML = render(page, lang);
    document.querySelectorAll('.language-control, .theme-toggle, [data-copy-email]').forEach(node => { node.hidden = false; });
    document.querySelectorAll('.faq-list details').forEach((node, i) => { node.open = Boolean(openFAQs[i]); });
    themeLabel();
    store(storageKey, lang);
    if (updateURL) {
      const url = new URL(location.href);
      url.searchParams.set('lang', lang);
      try { history.replaceState(null, '', url); } catch { /* Local-file previews may disallow history updates. */ }
    }
  }
  setLanguage(detectLanguage());
  document.addEventListener('change', event => {
    if (!event.target.matches('[data-language-select]')) return;
    const controlId = event.target.id;
    setLanguage(event.target.value);
    const control = document.getElementById(controlId);
    control.focus({preventScroll: true});
    if (controlId === 'footer-language-select') control.scrollIntoView({block: 'nearest', behavior: 'instant'});
  });
  let previewTrigger;
  document.addEventListener('click', async event => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;
    if (target.closest('.theme-toggle')) {
      const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = theme;
      document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#0b1220' : '#f4f7fb';
      store('wavedeck-theme', theme);
      themeLabel();
    }
    if (target.closest('[data-copy-email]')) {
      const c = global.WAVEDECK_LOCALES[currentLanguage];
      const status = document.querySelector('.copy-status');
      try { await navigator.clipboard.writeText(email); status.textContent = c.copied; }
      catch { status.textContent = c.copyError; }
    }
    const preview = target.closest('[data-preview]');
    if (preview && typeof HTMLDialogElement !== 'undefined' && typeof document.querySelector('.image-dialog').showModal === 'function') {
      event.preventDefault();
      const dialog = document.querySelector('.image-dialog');
      dialog.querySelector('img').src = preview.href;
      dialog.querySelector('img').alt = preview.querySelector('img').alt;
      previewTrigger = preview;
      dialog.showModal();
      document.documentElement.classList.add('preview-open');
    }
    if (target.closest('.dialog-close') || target.matches('.image-dialog')) document.querySelector('.image-dialog').close();
  });
  document.addEventListener('close', event => {
    if (event.target.matches('.image-dialog')) {
      document.documentElement.classList.remove('preview-open');
      previewTrigger?.focus({preventScroll: true});
    }
  }, true);
  window.addEventListener('popstate', () => setLanguage(detectLanguage(), false));
})(window);
