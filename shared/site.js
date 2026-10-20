(function () {
  'use strict';
  const { languages:L, products:P, fullLang:F, productText:T, email } = window.APP_CONTENT;
  const keys = Object.keys(L), pageNames = ['index','privacy','support'];
  const app = document.body.dataset.app, page = document.body.dataset.page, product = P[app];
  const appIndex = ['beauty-folder','caffeineai','drift','folderify','localdrop','medialens','zipmaster'].indexOf(app);
  const escape = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const safe = s => escape(s).replace(/\n/g,'<br>');
  const langValue = (value, lang, fallback='en') => value[lang] || value[fallback] || value['zh-Hans'];
  const featureValue = (arr, lang, index) => arr[F[lang] ?? 1];
  function normalize(v) {
    if (!v) return null;
    if (keys.includes(v)) return v;
    const x=v.toLowerCase();
    if (x==='zh'||x==='zh-cn'||x==='zh-sg'||x.startsWith('zh-hans')) return 'zh-Hans';
    if (/^zh-(tw|hk|mo|hant)/.test(x)) return 'zh-Hant';
    return keys.find(k=>k.toLowerCase()===x) || keys.find(k=>k.split('-')[0]===x.split('-')[0]) || null;
  }
  function chosenLanguage() {
    const fromURL=normalize(new URL(location.href).searchParams.get('lang'));
    if (fromURL) return fromURL;
    try { const saved=normalize(localStorage.getItem('app-policies-language')); if(saved) return saved; } catch {}
    return (navigator.languages || [navigator.language]).map(normalize).find(Boolean) || 'en';
  }
  function aLang(lang) { return `?lang=${encodeURIComponent(lang)}`; }
  function route(p, lang) { return `${p}.html${aLang(lang)}`; }
  function title(lang) { return `${product.name} — ${L[lang].nav[['index','privacy','support'].indexOf(page)]}`; }
  function languageSelect(lang, pos) {
    return `<label class="language"><span class="sr-only">${escape(L[lang].langLabel)}</span><select aria-label="${escape(L[lang].langLabel)}" data-lang id="${pos}-language">${keys.map(k=>`<option value="${k}" lang="${k}"${k===lang?' selected':''}>${escape(L[k].name)}</option>`).join('')}</select></label>`;
  }
  function nav(lang, footer=false) {
    return `<nav class="${footer?'footer-nav':'main-nav'}" aria-label="${escape(L[lang].nav[footer?0:0])}">${pageNames.map((p,i)=>`<a href="${route(p,lang)}"${page===p?' aria-current="page"':''}>${escape(L[lang].nav[i])}</a>`).join('')}</nav>`;
  }
  function header(lang) {
    const c=L[lang];
    return `<a class="skip" href="#main">${escape(c.skip)}</a><header class="header wrap"><a class="brand" href="${route('index',lang)}"><img src="assets/icon.png" alt="" width="42" height="42"><span>${escape(product.name)}</span></a>${nav(lang)}<div class="tools">${languageSelect(lang,'top')}<button class="theme" type="button" data-theme></button></div></header>`;
  }
  function footer(lang) {
    const c=L[lang];
    return `<footer class="footer wrap"><div><a class="footer-brand" href="${route('index',lang)}">${escape(product.name)}</a><p>${escape(c.footer)}</p><a class="email-plain" href="mailto:${email}">${email}</a><small>© 2026 ${escape(product.name)}</small></div><div class="footer-right">${nav(lang,true)}<div class="footer-controls">${languageSelect(lang,'bottom')}<button class="theme" type="button" data-theme aria-label="${escape(c.theme[0])}"></button></div></div></footer>`;
  }
  function home(lang) {
    const c=L[lang], title=langValue(product.tagline,lang), desc=langValue(product.description,lang);
    const features=product.features.map((arr,i)=>`<article class="feature"><span class="feature-mark" aria-hidden="true">${String(i+1).padStart(2,'0')}</span><div><h3>${escape(featureValue(arr,lang,0))}</h3><p>${escape(featureValue(arr,lang,1))}</p></div></article>`).join('');
    const chips=[c.locally,c.noAccount,c.noTracking];
    return `<main id="main" class="wrap home"><section class="hero"><div class="hero-copy"><h1>${escape(title)}</h1><p class="intro">${escape(desc)}</p><div class="hero-actions"><a class="button" href="${route('support',lang)}">${escape(c.homeAction)} <span aria-hidden="true">→</span></a><a class="quiet-link" href="${route('privacy',lang)}">${escape(c.privacyLink)}</a></div></div><div class="hero-art"><div class="art-caption"><span>${escape(product.name)}</span><span>macOS</span></div><img src="assets/icon.png" width="220" height="220" alt="${escape(product.name)} ${escape(c.homeLabel)}" fetchpriority="high"><div class="art-caption art-bottom"><span>${escape(featureValue(product.features[0],lang,0))}</span></div></div></section><section class="fact-strip" aria-label="${escape(c.privacy)}">${chips.map(x=>`<div><span>${escape(x)}</span></div>`).join('')}</section><section class="features-section"><div class="section-title"><h2>${escape(c.features)}</h2><p>${escape(desc)}</p></div><div class="feature-list">${features}</div></section><section class="privacy-callout"><div class="callout-symbol" aria-hidden="true"></div><div><p class="callout-label">${escape(c.privacy)}</p><h2>${escape(c.privacySummary)}</h2><a href="${route('privacy',lang)}">${escape(c.privacyLink)} <span aria-hidden="true">→</span></a></div></section><section class="contact-row"><div><h2>${escape(c.question)}</h2><p>${escape(c.contactText)}</p></div><a class="contact-link" href="mailto:${email}">${escape(email)} <span aria-hidden="true">↗</span></a></section></main>`;
  }
  function privacy(lang) {
    const c=L[lang], facts=T[app], tr=lang==='zh-Hans'||lang==='zh-Hant', body=tr?facts.body[lang==='zh-Hant'?7:0]:facts.body[lang==='en'?1:({fr:2,de:3,es:4,ko:5,ja:6}[lang]||1)];
    const local=tr?facts.local[lang==='zh-Hant'?7:0]:facts.local[lang==='en'?1:({fr:2,de:3,es:4,ko:5,ja:6}[lang]||1)];
    const net = app==='localdrop'
      ? ({'zh-Hans':'LocalDrop 会按你的设置向局域网客户端提供共享内容。HTTP 和 FTP 不加密；仅在证书配置后使用 HTTPS。不要向公网开放服务。','zh-Hant':'LocalDrop 依設定向區域網路用戶端提供共享內容。HTTP 和 FTP 不加密；僅在設定憑證後使用 HTTPS。請勿對公網開放服務。',en:'LocalDrop serves shared content to LAN clients according to your settings. HTTP and FTP are unencrypted; use HTTPS only after configuring a certificate. Do not expose the service to the public internet.',ja:'設定に従い LAN クライアントへ共有します。HTTP と FTP は暗号化されません。証明書を設定して HTTPS を使い、インターネットには公開しないでください。',ko:'설정에 따라 LAN 클라이언트에 공유합니다. HTTP와 FTP는 암호화되지 않습니다. 인증서를 설정한 뒤 HTTPS를 사용하고 인터넷에 공개하지 마세요.',de:'Freigegebene Inhalte werden gemäß deinen Einstellungen an LAN-Clients übertragen. HTTP und FTP sind unverschlüsselt. Nutze HTTPS mit Zertifikat und veröffentliche den Dienst nicht im Internet.',fr:'Le contenu est transmis aux clients du réseau local selon vos réglages. HTTP et FTP ne sont pas chiffrés. Configurez un certificat pour HTTPS et n’exposez pas le service à Internet.',es:'El contenido se comparte con clientes LAN según tu configuración. HTTP y FTP no están cifrados. Configura un certificado para HTTPS y no expongas el servicio a Internet.'})[lang]
      : app==='caffeineai'
      ? ({'zh-Hans':'读取 Wi‑Fi 名称需要 macOS 定位服务权限（不读取坐标）；日历规则需日历权限。拒绝或无法取得信号时不会匹配。应用不含第三方分析或广告 SDK。','zh-Hant':'讀取 Wi‑Fi 名稱需要 macOS 定位服務權限（不讀取座標）；行事曆規則需要行事曆權限。拒絕或無法取得訊號時不會符合規則。App 不含第三方分析或廣告 SDK。',en:'Wi-Fi name rules require macOS Location Services permission, but do not read coordinates; calendar rules require Calendar permission. A denied or unavailable signal is not a match. The app has no third-party analytics or advertising SDKs.',ja:'Wi-Fi 名のルールには macOS の位置情報権限（座標は読み取りません）、カレンダーのルールにはカレンダー権限が必要です。拒否または取得不可の信号は一致しません。',ko:'Wi-Fi 이름 규칙에는 macOS 위치 서비스 권한(좌표는 읽지 않음), 캘린더 규칙에는 캘린더 권한이 필요합니다. 권한이 거부되거나 신호를 사용할 수 없으면 규칙이 일치하지 않습니다.',de:'WLAN-Namen erfordern macOS-Ortungsdienste (ohne Koordinaten); Kalenderregeln benötigen Kalenderzugriff. Abgelehnte oder nicht verfügbare Signale gelten nicht als Treffer.',fr:'Les règles Wi-Fi nécessitent les services de localisation macOS (sans lire les coordonnées) ; les règles de calendrier demandent l’accès au calendrier. Un signal refusé ou indisponible ne correspond pas.',es:'Las reglas de Wi-Fi requieren Localización de macOS (sin leer coordenadas); las de calendario requieren acceso al calendario. Una señal denegada o no disponible no coincide.'})[lang]
      : ({'zh-Hans':'应用不提供开发者运营的云同步或广告跟踪服务。系统功能及第三方服务仅在你主动使用时参与。','zh-Hant':'App 不提供開發者營運的雲端同步或廣告追蹤服務。系統功能及第三方服務僅在你主動使用時參與。',en:'The app does not provide developer-operated cloud sync, advertising, or tracking. System features and third-party services are involved only when you choose to use them.',ja:'開発者が運営するクラウド同期、広告、追跡はありません。システム機能や第三者サービスはお客様が利用した場合にのみ関与します。',ko:'개발자 운영 클라우드 동기화, 광고 또는 추적 기능이 없습니다. 시스템 기능과 제3자 서비스는 사용자가 선택한 경우에만 관여합니다.',de:'Es gibt keine vom Entwickler betriebene Cloud-Synchronisierung, Werbung oder Nachverfolgung. System- und Drittanbieterdienste werden nur bei deiner Nutzung eingebunden.',fr:'Aucune synchronisation cloud, publicité ou suivi géré par le développeur. Les services système et tiers n’interviennent que si vous les utilisez.',es:'No hay sincronización en la nube, publicidad ni seguimiento gestionados por el desarrollador. Los servicios del sistema y de terceros solo intervienen si decides usarlos.'})[lang];
    const retention = ({'zh-Hans':'你可以在应用提供的设置中清除相关历史或缓存；本机数据也可随卸载应用或移除其数据而删除。邮件支持内容仅在你主动发送后由支持团队收到。','zh-Hant':'你可在 App 提供的設定中清除相關歷史或快取；解除安裝 App 或移除其資料也可刪除本機資料。支援郵件僅在你主動寄出後由支援團隊收到。',en:'Use the controls provided by the app to clear available history or cache. Local app data can also be removed by deleting the app and its data. Support receives email only after you send it.',ja:'アプリ内の設定から履歴やキャッシュを削除できます。アプリとそのデータを削除することでもローカルデータを消去できます。サポートメールは送信後にのみ届きます。',ko:'앱에서 제공하는 설정으로 기록이나 캐시를 지울 수 있습니다. 앱과 데이터를 삭제해도 로컬 데이터가 제거됩니다. 지원팀은 사용자가 이메일을 보낸 후에만 내용을 받습니다.',de:'Verfügbare Verläufe und Caches kannst du in den App-Einstellungen löschen. Lokale Daten lassen sich auch durch Löschen der App-Daten entfernen. Support erhält E-Mails erst nach deinem Versand.',fr:'Vous pouvez supprimer l’historique ou le cache dans les réglages de l’app. Les données locales peuvent aussi être supprimées avec celles de l’app. L’assistance ne reçoit votre e-mail qu’après son envoi.',es:'Puedes borrar el historial o la caché desde los ajustes de la app. También puedes eliminar los datos locales al borrar la app y sus datos. Soporte recibe el correo solo después de que lo envíes.'})[lang];
    const sections=[body,local,net,retention], topics=c.privacyTopics;
    const archive=window.APP_PRIVACY_SOURCE?.[app]||{};
    const archiveLang=archive[lang]?lang:(lang.startsWith('zh')&&(archive['zh-Hans']||archive['zh-CN'])?(archive['zh-Hans']?'zh-Hans':'zh-CN'):(archive.en?'en':Object.keys(archive)[0]));
    const archiveItems=archive[archiveLang]||[];
    const archiveLanguage=L[normalize(archiveLang)]?.name||({'zh-CN':'简体中文'})[archiveLang]||archiveLang;
    const archiveMarkup=archiveItems.map(item=>{
      const content=escape(item.text);
      if(item.type==='h1')return `<h3>${content}</h3>`;
      if(item.type==='h2'||item.type==='h3'||item.type==='h4')return `<h4>${content}</h4>`;
      if(item.type==='li')return `<p class="source-bullet">${content}</p>`;
      return `<p>${content}</p>`;
    }).join('');
    return `<main id="main" class="wrap privacy-page"><section class="legal-head"><h1>${escape(product.name)} · ${escape(c.policyLabel)}</h1><p class="intro">${escape(c.policyLead)}</p><p class="date">${escape(c.updated)}</p></section><section class="policy-summary"><span class="summary-dot" aria-hidden="true"></span><div><p>${escape(c.privacy)}</p><h2>${escape(c.privacySummary)}</h2></div></section><div class="legal-grid"><aside class="toc"><p>${escape(c.more)}</p>${topics.map((x,i)=>`<a href="#topic-${i+1}">${escape(x)}</a>`).join('')}</aside><article class="legal-copy">${sections.map((s,i)=>`<section id="topic-${i+1}"><h2>${escape(topics[i])}</h2><p>${escape(s)}</p>${i===3?`<p>${escape(c.contactText)}</p><p><a class="email-plain" href="mailto:${email}">${email}</a></p>`:''}</section>`).join('')}<p class="legal-note">${escape(c.legal)}</p><details class="source-policy"><summary>${escape(c.sourcePolicy)} · ${escape(archiveLanguage)}</summary><p class="source-note">${escape(c.sourceNote)}</p><div class="source-copy">${archiveMarkup}</div></details></article></div></main>`;
  }
  function support(lang) {
    const c=L[lang];
    const answers = {
      upload:T[app].body[lang==='zh-Hans'?0:lang==='zh-Hant'?7:({en:1,fr:2,de:3,es:4,ko:5,ja:6}[lang]||1)],
      contact:({'zh-Hans':'请邮件说明应用和 macOS 版本、操作步骤及完整错误提示；不要附上密码或私人文件。','zh-Hant':'請以電子郵件說明 App 和 macOS 版本、操作步驟及完整錯誤提示；請勿附上密碼或私人檔案。',en:'Email the app and macOS versions, steps you took, and the full error message. Do not include passwords or private files.',ja:'アプリと macOS のバージョン、操作手順、エラー全文をメールでお知らせください。パスワードや個人ファイルは添付しないでください。',ko:'앱과 macOS 버전, 진행 단계 및 전체 오류 메시지를 이메일로 보내 주세요. 비밀번호나 개인 파일은 첨부하지 마세요.',de:'Nenne per E-Mail App- und macOS-Version, Schritte und die vollständige Fehlermeldung. Sende keine Passwörter oder privaten Dateien.',fr:'Indiquez par e-mail les versions, les étapes et le message d’erreur complet. N’envoyez ni mot de passe ni fichier privé.',es:'Indica por correo las versiones, los pasos y el mensaje de error completo. No envíes contraseñas ni archivos privados.'})[lang]
    };
    const qa=[c.faqItems[0],answers.upload,c.faqItems[1],answers.contact,c.faqItems[2],c.privacySummary];
    return `<main id="main" class="wrap support-page"><section class="support-hero"><div><h1>${escape(product.name)} · ${escape(c.supportLabel)}</h1><p class="intro">${escape(c.supportLead)}</p></div><aside class="contact-card"><p>${escape(c.contactTitle)}</p><h2>${escape(c.contactText)}</h2><a class="button" href="mailto:${email}?subject=${encodeURIComponent(c.emailSubject)}">${escape(c.mail)} <span aria-hidden="true">↗</span></a><a class="email-plain" href="mailto:${email}">${email}</a><button class="copy" type="button" data-copy>${escape(c.copy)}</button><span class="copy-status" aria-live="polite" role="status"></span></aside></section><section class="faq-section"><div><h2>${escape(c.faq)}</h2><p>${escape(c.supportLead)}</p></div><div class="faq-list">${[0,2,4].map((i)=>`<details><summary>${escape(qa[i])}</summary><p>${escape(qa[i+1])}</p></details>`).join('')}</div></section><section class="support-bottom"><div><h2>${escape(c.privacy)}</h2><p>${escape(c.privacySummary)}</p></div><a href="${route('privacy',lang)}">${escape(c.privacyLink)} <span aria-hidden="true">→</span></a></section></main>`;
  }
  function render(lang, replace=true) {
    const c=L[lang], body=page==='privacy'?privacy(lang):page==='support'?support(lang):home(lang);
    const content=`${header(lang)}${body}${footer(lang)}`;
    if(replace) document.body.innerHTML=content;
    document.documentElement.lang=lang;
    document.title=title(lang);
    document.querySelector('meta[name="description"]').content=langValue(product.description,lang);
    document.querySelector('meta[property="og:title"]').content=title(lang);
    document.querySelector('meta[property="og:description"]').content=langValue(product.description,lang);
    document.body.dataset.lang=lang;
    document.querySelectorAll('[data-lang]').forEach(s=>s.value=lang);
    themeButtons(lang);
  }
  function stored(key,value) { try { if(value===undefined)return localStorage.getItem(key); localStorage.setItem(key,value); } catch {} return null; }
  function themeButtons(lang) { document.querySelectorAll('button[data-theme]').forEach(b=>{const dark=document.documentElement.dataset.theme==='dark'; b.textContent=dark?L[lang].theme[0]:L[lang].theme[1]; b.setAttribute('aria-label',dark?L[lang].theme[0]:L[lang].theme[1]); b.title=dark?L[lang].theme[0]:L[lang].theme[1];}); }
  let current=chosenLanguage();
  const storedTheme=stored('app-policies-theme'); document.documentElement.dataset.theme=storedTheme==='light'?'light':'dark';
  render(current);
  document.addEventListener('change',e=>{ if(!e.target.matches('[data-lang]'))return; const controlId=e.target.id; current=e.target.value; stored('app-policies-language',current); const u=new URL(location.href);u.searchParams.set('lang',current);history.replaceState(null,'',u);render(current);document.getElementById(controlId)?.focus({preventScroll:true}); });
  document.addEventListener('click',async e=>{
    const theme=e.target.closest('[data-theme]');
    if(theme){const value=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=value;stored('app-policies-theme',value);themeButtons(current);return;}
    const copy=e.target.closest('[data-copy]'); if(copy){const status=document.querySelector('.copy-status');try{await navigator.clipboard.writeText(email);status.textContent=L[current].copied;}catch{status.textContent=email;}return;}
  });
})();
