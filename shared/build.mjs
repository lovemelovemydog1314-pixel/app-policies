import { readFile, writeFile } from 'node:fs/promises';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');
const source = await readFile(resolve(here, 'content.js'), 'utf8');
const privacySource = JSON.parse(await readFile(resolve(here, 'privacy-source.json'), 'utf8'));
privacySource.localdrop['zh-Hans'] = privacySource.localdrop['zh-CN'];
delete privacySource.localdrop['zh-CN'];
await writeFile(resolve(here, 'privacy-source.js'), `window.APP_PRIVACY_SOURCE=${JSON.stringify(privacySource)};\n`);
const window = {};
vm.runInNewContext(source, { window });
const { languages, products, productText, fullLang } = window.APP_CONTENT;
const esc = value => String(value).replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
const locales = Object.keys(languages);
const href = (app, page) => page === 'index' ? 'index.html' : `${page}.html`;
const html = (app, page) => {
  const p = products[app], zh = languages['zh-Hans'];
  const title = page === 'index' ? p.tagline['zh-Hans'] : `${p.name} · ${zh.nav[page === 'privacy' ? 1 : 2]}`;
  const description = p.description['zh-Hans'];
  const menu = ['index','privacy','support'].map((route, i) => `<a href="${href(app, route)}"${page === route ? ' aria-current="page"' : ''}>${zh.nav[i]}</a>`).join('');
  const header = `<a class="skip" href="#main">跳到主要内容</a><header class="header wrap"><a class="brand" href="index.html"><img src="assets/icon.png" alt="" width="42" height="42"><span>${esc(p.name)}</span></a><nav class="main-nav" aria-label="页面导航">${menu}</nav><div class="tools"><label class="language"><span class="sr-only">语言</span><select aria-label="语言" data-lang id="top-language">${locales.map(k=>`<option value="${k}" lang="${k}"${k==='zh-Hans'?' selected':''}>${languages[k].name}</option>`).join('')}</select></label><button class="theme" type="button" data-theme>浅色</button></div></header>`;
  const footer = `<footer class="footer wrap"><div><a class="footer-brand" href="index.html">${esc(p.name)}</a><p>为 Mac 用户打造的实用工具。</p><a class="email-plain" href="mailto:zipmaster_support@126.com">zipmaster_support@126.com</a><small>© 2026 ${esc(p.name)}</small></div><div class="footer-right"><nav class="footer-nav" aria-label="页尾导航">${menu}</nav><div class="footer-controls"><label class="language"><span class="sr-only">语言</span><select aria-label="语言" data-lang id="bottom-language">${locales.map(k=>`<option value="${k}" lang="${k}"${k==='zh-Hans'?' selected':''}>${languages[k].name}</option>`).join('')}</select></label><button class="theme" type="button" data-theme>浅色</button></div></div></footer>`;
  let main;
  if (page === 'index') {
    main = `<main id="main" class="wrap home"><section class="hero"><div class="hero-copy"><h1>${esc(p.tagline['zh-Hans'])}</h1><p class="intro">${esc(description)}</p><div class="hero-actions"><a class="button" href="support.html">隐私与支持 <span aria-hidden="true">→</span></a><a class="quiet-link" href="privacy.html">阅读完整隐私政策</a></div></div><div class="hero-art"><div class="art-caption"><span>${esc(p.name)}</span><span>macOS</span></div><img src="assets/icon.png" width="220" height="220" alt="${esc(p.name)} 产品图标" fetchpriority="high"><div class="art-caption art-bottom"><span>${esc(p.features[0][0])}</span></div></div></section><section class="fact-strip"><div>在本机处理</div><div>无开发者云账户</div><div>无广告与跟踪</div></section><section class="features-section"><div class="section-title"><h2>核心功能</h2><p>${esc(description)}</p></div><div class="feature-list">${p.features.map((f,i)=>`<article class="feature"><span class="feature-mark">${String(i+1).padStart(2,'0')}</span><div><h3>${esc(f[0])}</h3><p>${esc(f[0])}</p></div></article>`).join('')}</div></section><section class="privacy-callout"><div class="callout-symbol" aria-hidden="true"></div><div><p class="callout-label">隐私摘要</p><h2>应用主要在你的 Mac 上运行。除非你主动使用邮件、系统功能或网络共享功能，应用不会把文件内容发送给开发者。</h2><a href="privacy.html">阅读隐私政策 →</a></div></section><section class="contact-row"><div><h2>需要帮助？</h2><p>请把问题、应用版本和 macOS 版本发给我们。</p></div><a class="contact-link" href="mailto:zipmaster_support@126.com">zipmaster_support@126.com ↗</a></section></main>`;
  } else if (page === 'privacy') {
    const t=productText[app], idx=0;
    const sections=[['应用处理的信息',t.body[idx]],['本机保存与权限',t.local[idx]],['网络与第三方服务',app==='localdrop'?'LocalDrop 会按你的设置向局域网客户端提供共享内容。HTTP 和 FTP 不加密；仅在证书配置后使用 HTTPS。不要向公网开放服务。':'应用不提供开发者运营的云同步或广告跟踪服务。系统功能及第三方服务仅在你主动使用时参与。'],['保留、删除与联系','你可以在应用提供的设置中清除相关历史或缓存；本机数据也可随卸载应用或移除其数据而删除。邮件支持内容仅在你主动发送后由支持团队收到。']];
    const archived=privacySource[app], archiveLang=archived['zh-Hans']?'zh-Hans':archived.en?'en':Object.keys(archived)[0], sourceTitle=archiveLang==='zh-Hans'?'展开详细条款 · 简体中文':archiveLang==='zh-Hant'?'展开详细条款 · 繁體中文':'展开详细条款 · English';
    const archiveBody=archived[archiveLang].map(item=>`<p>${esc(item.text)}</p>`).join('');
    main=`<main id="main" class="wrap privacy-page"><section class="legal-head"><h1>${esc(p.name)} · 隐私政策</h1><p class="intro">本政策说明应用处理的信息、保存位置和你的选择。实际处理取决于你启用的功能。</p><p class="date">网站更新日期：2026 年 10 月 20 日</p></section><section class="policy-summary"><span class="summary-dot" aria-hidden="true"></span><div><p>隐私摘要</p><h2>应用主要在你的 Mac 上运行。除非你主动使用邮件、系统功能或网络共享功能，应用不会把文件内容发送给开发者。</h2></div></section><div class="legal-grid"><aside class="toc"><p>本页内容</p>${sections.map((s,i)=>`<a href="#topic-${i+1}">${s[0]}</a>`).join('')}</aside><article class="legal-copy">${sections.map((s,i)=>`<section id="topic-${i+1}"><h2>${s[0]}</h2><p>${esc(s[1])}</p>${i===3?`<p>如有疑问，请联系支持团队：</p><a class="email-plain" href="mailto:zipmaster_support@126.com">zipmaster_support@126.com</a>`:''}</section>`).join('')}<p class="legal-note">本页面为产品隐私说明，不替代适用法律规定。</p><details class="source-policy"><summary>${sourceTitle}</summary><p class="source-note">以下为产品已有的详细政策原文。</p><div class="source-copy">${archiveBody}</div></details></article></div></main>`;
  } else {
    main=`<main id="main" class="wrap support-page"><section class="support-hero"><div><h1>${esc(p.name)} · 技术支持</h1><p class="intro">查看常见问题，或直接通过电子邮件联系我们。</p></div><aside class="contact-card"><p>需要帮助？</p><h2>请把问题、应用版本和 macOS 版本发给我们。</h2><a class="button" href="mailto:zipmaster_support@126.com?subject=${encodeURIComponent(p.name+' 支持请求')}">发送邮件 ↗</a><a class="email-plain" href="mailto:zipmaster_support@126.com">zipmaster_support@126.com</a><button class="copy" type="button" data-copy>复制邮箱</button><span class="copy-status" aria-live="polite" role="status"></span></aside></section><section class="faq-section"><div><h2>常见问题</h2><p>以下信息可以帮助你快速排查。</p></div><div class="faq-list"><details><summary>应用会把我的文件上传吗？</summary><p>${esc(productText[app].body[0])}</p></details><details><summary>如何联系支持？</summary><p>请邮件说明应用和 macOS 版本、操作步骤及完整错误提示；不要附上密码或私人文件。</p></details><details><summary>我可以在哪里了解数据处理？</summary><p>应用主要在本机处理。详细信息请查看隐私政策。</p></details></div></section><section class="support-bottom"><div><h2>隐私与数据处理</h2><p>阅读各项信息处理方式、权限和你的选择。</p></div><a href="privacy.html">阅读完整隐私政策 →</a></section></main>`;
  }
  const assets='<link rel="stylesheet" href="../shared/site.css?v=20261020e">';
  const scripts='<script defer src="../shared/privacy-source.js?v=20261020e"></script><script defer src="../shared/content.js?v=20261020e"></script><script defer src="../shared/site.js?v=20261020e"></script>';
  return `<!doctype html><html lang="zh-Hans"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#0c1118"><meta name="description" content="${esc(description)}"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><title>${esc(title)}</title>${assets}</head><body data-app="${app}" data-page="${page}">${header}${main}${footer}${scripts}</body></html>\n`;
};

for (const app of Object.keys(products)) for (const page of ['index','privacy','support']) {
  await writeFile(resolve(root, app, `${page}.html`), html(app, page));
}
console.log(`Generated ${Object.keys(products).length * 3} pages for ${locales.length} languages.`);
