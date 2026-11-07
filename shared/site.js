(function () {
  'use strict';
  const { languages: L, products: P, fullLang: F, productText: T, email } = window.APP_CONTENT;
  const keys = Object.keys(L), pageNames = ['index', 'privacy', 'support'];
  const app = document.body.dataset.app, page = document.body.dataset.page, product = P[app];
  
  const escape = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const langValue = (value, lang, fallback = 'en') => value[lang] || value[fallback] || value['zh-Hans'];
  const featureValue = (arr, lang) => arr[F[lang] ?? 1];

  function normalize(v) {
    if (!v) return null;
    if (keys.includes(v)) return v;
    const x = v.toLowerCase();
    if (x === 'zh' || x === 'zh-cn' || x === 'zh-sg' || x.startsWith('zh-hans')) return 'zh-Hans';
    if (/^zh-(tw|hk|mo|hant)/.test(x)) return 'zh-Hant';
    return keys.find(k => k.toLowerCase() === x) || keys.find(k => k.split('-')[0] === x.split('-')[0]) || null;
  }

  function chosenLanguage() {
    const fromURL = normalize(new URL(location.href).searchParams.get('lang'));
    if (fromURL) return fromURL;
    try {
      const saved = normalize(localStorage.getItem('app-policies-language'));
      if (saved) return saved;
    } catch {}
    return (navigator.languages || [navigator.language]).map(normalize).find(Boolean) || 'en';
  }

  function aLang(lang) {
    return `?lang=${encodeURIComponent(lang)}`;
  }

  function route(p, lang) {
    return `${p}.html${aLang(lang)}`;
  }

  function title(lang) {
    return `${product.name} — ${L[lang].nav[['index', 'privacy', 'support'].indexOf(page)]}`;
  }

  function languageSelect(lang, pos) {
    return `<label class="language"><span class="sr-only">${escape(L[lang].langLabel)}</span><select aria-label="${escape(L[lang].langLabel)}" data-lang id="${pos}-language">${keys.map(k => `<option value="${k}" lang="${k}"${k === lang ? ' selected' : ''}>${escape(L[k].name)}</option>`).join('')}</select></label>`;
  }

  function nav(lang, footer = false) {
    return `<nav class="${footer ? 'footer-nav' : 'main-nav'}" aria-label="${escape(L[lang].nav[0])}">${pageNames.map((p, i) => `<a href="${route(p, lang)}"${page === p ? ' aria-current="page"' : ''}>${escape(L[lang].nav[i])}</a>`).join('')}</nav>`;
  }

  function header(lang) {
    const c = L[lang];
    const allAppsText = c.allApps || 'All Apps';
    return `
      <a class="skip" href="#main">${escape(c.skip)}</a>
      <header class="header wrap">
        <div class="brand-group">
          <a class="hub-pill" href="../index.html${aLang(lang)}" title="${escape(allAppsText)}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
            <span>${escape(allAppsText)}</span>
          </a>
          <a class="brand" href="${route('index', lang)}">
            <img src="assets/icon.png" alt="${escape(product.name)}" width="38" height="38">
            <span>${escape(product.name)}</span>
          </a>
        </div>
        ${nav(lang)}
        <div class="tools">
          ${languageSelect(lang, 'top')}
          <button class="theme" type="button" data-theme></button>
        </div>
      </header>
    `;
  }

  function footer(lang) {
    const c = L[lang];
    const allAppsText = c.allApps || 'All Apps';
    const footerText = product.footerNote
      ? (product.footerNote[lang] || product.footerNote.en || product.footerNote['zh-Hans'])
      : product.platform === 'iOS'
      ? (app === 'shelflife'
          ? (lang.startsWith('zh') ? (lang === 'zh-Hant' ? '管好全家器物與保固，井井有條、安心長久。' : '管好全家器物与保修，井井有条、安心长久。') : 'Smart household inventory, warranty & consumable tracker.')
          : app === 'luxframe'
          ? (lang.startsWith('zh') ? (lang === 'zh-Hant' ? '為底片攝影與暗房創作者打造的專業工具。' : '为胶片摄影与暗房创作者打造的专业工具。') : 'Precision tools for film photographers and darkroom artists.')
          : app === 'netpulse'
          ? (lang.startsWith('zh') ? (lang === 'zh-Hant' ? '為硬體與網路工程師打造的專業行動工具箱。' : '为硬件与网络工程师打造的专业移动工具箱。') : 'Professional field toolkit for hardware & network engineers.')
          : (lang.startsWith('zh') ? '让两个人的小家，更有温度与安全感。' : 'A private home for the everyday things you share.'))
      : c.footer;
    return `
      <footer class="footer wrap">
        <div>
          <a class="footer-brand" href="${route('index', lang)}">${escape(product.name)}</a>
          <p>${escape(footerText)}</p>
          <a class="email-plain" href="mailto:${email}">${email}</a>
          <small>© 2026 ${escape(product.name)} · <a href="../index.html${aLang(lang)}" style="color:inherit;text-decoration:underline">${escape(allAppsText)}</a></small>
        </div>
        <div class="footer-right">
          ${nav(lang, true)}
        </div>
      </footer>
    `;
  }

  function home(lang) {
    const c = L[lang], tagline = langValue(product.tagline, lang), desc = langValue(product.description, lang);
    const platformName = product.platformTag ? (product.platformTag[lang] || product.platformTag.en || product.platformTag['zh-Hans']) : (product.platform === 'iOS' ? 'iPhone · iOS 18+' : 'macOS');
    const features = product.featuresDetail ? product.featuresDetail.map((f, i) => {
      const title = f.title[lang] || f.title.en || f.title['zh-Hans'];
      const desc = f.desc[lang] || f.desc.en || f.desc['zh-Hans'];
      return `
        <article class="feature reveal">
          <span class="feature-mark" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
          <div>
            <h3>${escape(title)}</h3>
            <p>${escape(desc)}</p>
          </div>
        </article>
      `;
    }).join('') : product.features.map((arr, i) => `
      <article class="feature reveal">
        <span class="feature-mark" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
        <div>
          <h3>${escape(featureValue(arr, lang, 0))}</h3>
          <p>${escape(featureValue(arr, lang, 1))}</p>
        </div>
      </article>
    `).join('');
    const chips = product.factStrip
      ? (product.factStrip[lang] || product.factStrip.en || product.factStrip['zh-Hans'])
      : [c.locally, c.noAccount, c.noTracking];
    const privacySummary = product.privacySummary
      ? (product.privacySummary[lang] || product.privacySummary.en || product.privacySummary['zh-Hans'])
      : c.privacySummary;
    const contactText = product.platform === 'iOS'
      ? (lang.startsWith('zh') ? '请把问题、应用版本和 iOS 版本发给我们。' : 'Tell us what happened and include the app and iOS versions.')
      : c.contactText;

    return `
      <main id="main" class="wrap home">
        <section class="hero reveal">
          <div class="hero-copy">
            <span class="product-tag">${escape(product.name)} ${platformName}</span>
            <h1>${escape(tagline)}</h1>
            <p class="intro">${escape(desc)}</p>
            <div class="hero-actions">
              <a class="button" href="${route('support', lang)}">${escape(c.homeAction)} <span aria-hidden="true">→</span></a>
              <a class="quiet-link" href="${route('privacy', lang)}">${escape(c.privacyLink)}</a>
            </div>
          </div>
          <div class="hero-art">
            <div class="art-caption">
              <span>${escape(product.name)}</span>
              <span>${platformName}</span>
            </div>
            <img src="assets/icon.png" width="220" height="220" alt="${escape(product.name)} ${escape(c.homeLabel)}" fetchpriority="high">
            <div class="art-caption art-bottom">
              <span>${escape(featureValue(product.features[0], lang, 0))}</span>
            </div>
          </div>
        </section>
        
        <section class="fact-strip reveal" aria-label="${escape(c.privacy)}">
          ${chips.map(x => `<div><span>${escape(x)}</span></div>`).join('')}
        </section>

        <section class="features-section reveal">
          <div class="section-title">
            <h2>${escape(c.features)}</h2>
            <p>${escape(desc)}</p>
          </div>
          <div class="feature-list">${features}</div>
        </section>

        <section class="privacy-callout reveal">
          <div class="callout-symbol" aria-hidden="true"></div>
          <div>
            <p class="callout-label">${escape(c.privacy)}</p>
            <h2>${escape(privacySummary)}</h2>
            <a href="${route('privacy', lang)}">${escape(c.privacyLink)} <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <section class="contact-row reveal">
          <div>
            <h2>${escape(c.question)}</h2>
            <p>${escape(contactText)}</p>
          </div>
          <a class="contact-link" href="mailto:${email}">${escape(email)} <span aria-hidden="true">↗</span></a>
        </section>
      </main>
    `;
  }

  function privacy(lang) {
    const c = L[lang], facts = T[app], tr = lang === 'zh-Hans' || lang === 'zh-Hant';
    const body = tr ? facts.body[lang === 'zh-Hant' ? 7 : 0] : facts.body[lang === 'en' ? 1 : ({ fr: 2, de: 3, es: 4, ko: 5, ja: 6 }[lang] || 1)];
    const local = tr ? facts.local[lang === 'zh-Hant' ? 7 : 0] : facts.local[lang === 'en' ? 1 : ({ fr: 2, de: 3, es: 4, ko: 5, ja: 6 }[lang] || 1)];
    const net = app === 'localdrop'
      ? ({ 'zh-Hans': 'LocalDrop 会按你的设置向局域网客户端提供共享内容。HTTP 和 FTP 不加密；仅在证书配置后使用 HTTPS。不要向公网开放服务。', 'zh-Hant': 'LocalDrop 依設定向區域網路用戶端提供共享內容。HTTP 和 FTP 不加密；僅在設定憑證後使用 HTTPS。請勿對公網開放服務。', en: 'LocalDrop serves shared content to LAN clients according to your settings. HTTP and FTP are unencrypted; use HTTPS only after configuring a certificate. Do not expose the service to the public internet.', ja: '設定に従い LAN クライアントへ共有します。HTTP と FTP は暗号化されません。証明書を設定して HTTPS を使い、インターネットには公開しないでください。', ko: '설정에 따라 LAN 클라이언트에 공유합니다. HTTP와 FTP는 암호화되지 않습니다. 인증서를 설정한 뒤 HTTPS를 사용하고 인터넷에 공개하지 마세요.', de: 'Freigegebene Inhalte werden gemäß deinen Einstellungen an LAN-Clients übertragen. HTTP und FTP sind unverschlüsselt. Nutze HTTPS mit Zertifikat und veröffentliche den Dienst nicht im Internet.', fr: 'Le contenu est transmis aux clients du réseau local selon vos réglages. HTTP et FTP ne sont pas chiffrés. Configurez un certificat pour HTTPS et n’exposez pas le service à Internet.', es: 'El contenido se comparte con clientes LAN según tu configuración. HTTP y FTP no están cifrados. Configura un certificado para HTTPS y no expongas el servicio a Internet.' })[lang]
      : app === 'caffeineai'
      ? ({ 'zh-Hans': '读取 Wi‑Fi 名称需要 macOS 定位服务权限（不读取坐标）；日历规则需日历权限。拒绝或无法取得信号时不会匹配。应用不含第三方分析或广告 SDK。', 'zh-Hant': '讀取 Wi‑Fi 名稱需要 macOS 定位服務權限（不讀取座標）；行事曆規則需要行事曆權限。拒絕或無法取得訊號時不會符合規則。App 不含第三方分析或廣告 SDK。', en: 'Wi-Fi name rules require macOS Location Services permission, but do not read coordinates; calendar rules require Calendar permission. A denied or unavailable signal is not a match. The app has no third-party analytics or advertising SDKs.', ja: 'Wi-Fi 名のルールには macOS の位置情報権限（座標は読み取りません）、カレンダーのルールにはカレンダー権限が必要です。拒否または取得不可の信号は一致しません。', ko: 'Wi-Fi 이름 규칙에는 macOS 위치 서비스 권한(좌표는 읽지 않음), 캘린더 규칙에는 캘린더 권한이 필요합니다. 권한이 거부되거나 신호를 사용할 수 없으면 규칙이 일치하지 않습니다.', de: 'WLAN-Namen erfordern macOS-Ortungsdienste (ohne Koordinaten); Kalenderregeln benötigen Kalenderzugriff. Abgelehnte oder nicht verfügbare Signale gelten nicht als Treffer.', fr: 'Les règles Wi-Fi nécessitent les services de localisation macOS (sans lire les coordonnées) ; les règles de calendrier demandent l’accès au calendrier. Un signal refusé ou indisponible ne correspond pas.', es: 'Las reglas de Wi-Fi requieren Localización de macOS (sin leer coordenadas); las de calendario requieren acceso al calendario. Una señal denegada o no disponible no coincide.' })[lang]
      : app === 'couple'
      ? ({ 'zh-Hans': '小家通过 Apple CloudKit 共享空间在两台设备间私密同步。无自建服务器、无第三方统计或广告追踪 SDK。位置共享默认关闭，仅在主动开启后向伴侣展示最近位置。', 'zh-Hant': '小家透過 Apple CloudKit 共享空間在兩台裝置間私密同步。無自建伺服器、無第三方統計或廣告追蹤 SDK。位置共享預設關閉，僅在主動開啟後向伴侶展示最近位置。', en: 'Households sync privately between partners via Apple CloudKit sharing. No custom backend, no ads, and no tracking SDKs. Location sharing is off by default and shared only with your partner when enabled.', ja: 'ふたりの共有は Apple CloudKit を通じてプライベートに同期されます。独自サーバーや追跡 SDK はありません。位置情報の共有は初期状態で無効です。', ko: '가정 데이터는 Apple CloudKit을 통해 두 기기 간 안전하게 동기화됩니다. 자체 서버나 추적 SDK는 없습니다. 위치 공유는 기본적으로 꺼져 있습니다.', de: 'Die Synchronisation erfolgt privat über Apple CloudKit. Kein eigener Server, keine Werbe- oder Tracking-SDKs. Standortfreigabe ist standardmäßig deaktiviert.', fr: 'Le foyer se synchronise en toute intimité via Apple CloudKit. Aucun serveur tiers ni traqueur. Le partage de localisation est désactivé par défaut.', es: 'El hogar se sincroniza en privado mediante Apple CloudKit. Sin servidores propios ni rastreadores. La ubicación compartida está desactivada por defecto.' })[lang]
      : app === 'shelflife'
      ? ({ 'zh-Hans': 'ShelfLife 纯离线优先运行。开启个人 iCloud 同步或家庭共享时，通过 Apple CloudKit 在私有数据库或受邀家庭成员间加密传输。无自建服务器、无第三方统计或广告追踪 SDK。', 'zh-Hant': 'ShelfLife 純離線優先運作。開啟個人 iCloud 同步或家庭共享時，透過 Apple CloudKit 在私有資料庫或受邀家庭成員間加密傳輸。無自建伺服器、無第三方統計或廣告追蹤 SDK。', en: 'ShelfLife works offline-first. iCloud personal sync and optional household sharing use Apple CloudKit private databases and encrypted sharing. No developer server, and no third-party tracking or ad SDKs.', ja: 'ShelfLife はオフライン優先で動作します。iCloud 同期およびファミリー共有は Apple CloudKit を通じてプライベートに行われます。自社サーバーや追跡・広告 SDK は一切ありません。', ko: 'ShelfLife는 오프라인 우선으로 작동합니다. 개인 iCloud 동기화 및 가족 공유는 Apple CloudKit을 통해 안전하게 암호화 전송됩니다. 자체 서버 및 광고/추적 SDK가 없습니다.', de: 'ShelfLife arbeitet offline-first. iCloud-Synchronisierung und Familienfreigabe nutzen Apple CloudKit verschlüsselt. Kein Entwickler-Server, keine Werbe- oder Tracking-SDKs.', fr: 'ShelfLife fonctionne en priorité hors ligne. La synchronisation iCloud et le partage familial reposent sur Apple CloudKit sécurisé. Aucun serveur propre, aucun SDK publicitaire.', es: 'ShelfLife funciona sin conexión. La sincronización de iCloud y el uso compartido familiar se realizan mediante Apple CloudKit cifrado. Sin servidores propios ni SDKs de rastreo o publicidad.' })[lang]
      : app === 'luxframe'
      ? ({ 'zh-Hans': 'LuxFrame 不设自建服务器与用户体系，无第三方统计或广告追踪 SDK。云备份与相机预设通过 Apple CloudKit 私密同步；位置与相机仅在测光、场记或日照计算时于端侧调用。', 'zh-Hant': 'LuxFrame 不設自建伺服器與使用者體系，無第三方統計或廣告追蹤 SDK。雲端備份與相機預設透過 Apple CloudKit 私密同步；位置與相機僅在測光、場記或日照計算時於端側調用。', en: 'LuxFrame operates no custom servers or user accounts, and contains no third-party analytics or ad-tracking SDKs. Backups and presets sync privately via Apple CloudKit; camera and location run on-device only when needed for metering, logging, or ephemeris tools.', ja: 'LuxFrame は独自サーバーやユーザーアカウントを持たず、第三者の分析・広告追跡 SDK も含みません。バックアップと機材設定は Apple CloudKit で安全に同期され、カメラや位置情報は測光や撮影メモ、日照計算時に端末内でのみ処理されます。', ko: 'LuxFrame은 자체 서버나 계정 시스템이 없으며 제3자 분석 또는 광고 추적 SDK를 포함하지 않습니다. 백업과 기기 프리셋은 Apple CloudKit으로 비공개 동기화되며, 카메라와 위치 정보는 측광, 기록, 일조 계산 시 기기 내에서만 처리됩니다.', de: 'LuxFrame betreibt keine eigenen Server oder Konten und enthält keine Analyse- oder Werbe-SDKs von Drittanbietern. Backups und Voreinstellungen synchronisieren sich privat über Apple CloudKit; Kamera und Standort werden nur bei Bedarf lokal genutzt.', fr: 'LuxFrame n’exploite aucun serveur ni compte tiers, et n’intègre aucun SDK de pistage ou de publicité. Les sauvegardes se synchronisent via Apple CloudKit privé ; l’appareil photo et la position restent strictement sur l’appareil.', es: 'LuxFrame no dispone de servidores propios ni cuentas externas, y carece de SDKs de análisis o publicidad. Las copias y ajustes se sincronizan de forma privada mediante Apple CloudKit; la cámara y ubicación se procesan solo en el dispositivo.' })[lang]
      : app === 'droidbridge'
      ? ({ 'zh-Hans': 'DroidBridge 通过 USB（MTP/ADB）或本地局域网（FTP/WebDAV/网页快传）直接在 Mac 与安卓设备间传输。无开发者中转服务器，不经第三方云端。Wi-Fi 网页传输建议仅在受信任局域网中使用。', 'zh-Hant': 'DroidBridge 透過 USB（MTP/ADB）或本機區域網路（FTP/WebDAV/網頁快傳）直接在 Mac 與安卓裝置間傳輸。無開發者中轉伺服器，不經第三方雲端。Wi-Fi 網頁傳輸建議僅在受信任區域網路中使用。', en: 'DroidBridge transfers files directly between your Mac and Android devices over USB (MTP/ADB) or local network (FTP/WebDAV/Web Transfer). No custom relay servers and no third-party cloud. Wi-Fi transfers are recommended on trusted local networks.', ja: 'DroidBridge は USB（MTP/ADB）またはローカルネットワーク（FTP/WebDAV/Web転送）を介して Mac と Android 間で直接転送します。独自の中継サーバーや外部クラウドは使用しません。', ko: 'DroidBridge는 USB(MTP/ADB) 또는 로컬 네트워크(FTP/WebDAV/웹 전송)를 통해 Mac과 Android 간에 직접 전송합니다. 자체 릴레이 서버나 외부 클라우드를 거치지 않습니다.', de: 'DroidBridge überträgt Dateien direkt zwischen Mac und Android per USB (MTP/ADB) oder lokalem Netzwerk (FTP/WebDAV/Web-Transfer). Keine Relayserver oder Cloud-Dienste.', fr: 'DroidBridge transfère les fichiers directement entre votre Mac et votre appareil Android via USB (MTP/ADB) ou réseau local (FTP/WebDAV/transfert web). Aucun serveur relais ni cloud tiers.', es: 'DroidBridge transfiere archivos directamente entre tu Mac y Android por USB (MTP/ADB) o red local (FTP/WebDAV/transferencia web). Sin servidores de retransmisión ni nube de terceros.' })[lang]
      : app === 'dropsqueeze'
      ? ({ 'zh-Hans': 'DropSqueeze 纯端侧本地运行，不含任何统计分析或广告追踪 SDK。购买与订阅由 Apple StoreKit 官方框架与 App Store 通信，开发者不收集或存储任何付款信息或 Apple ID。', 'zh-Hant': 'DropSqueeze 純端側本地執行，不含任何統計分析或廣告追蹤 SDK。購買與訂閱由 Apple StoreKit 官方框架與 App Store 通訊，開發者不收集或儲存任何付款資訊或 Apple ID。', en: 'DropSqueeze runs strictly on-device without analytics or ad-tracking SDKs. In-app purchases and subscriptions communicate with App Store via Apple StoreKit; developer does not collect or store payment info or Apple IDs.', ja: 'DropSqueeze は端末内ローカルで動作し、解析や広告追跡 SDK は含みません。購入・定期購読は Apple StoreKit で処理され、支払い情報等は収集・保持されません。', ko: 'DropSqueeze는 기기 로컬에서만 실행되며 분석 또는 광고 추적 SDK가 없습니다. 인앱 구매 및 구독은 Apple StoreKit을 통해 처리되며 결제 정보나 Apple ID는 저장되지 않습니다.', de: 'DropSqueeze läuft strikt lokal ohne Analyse- oder Werbe-SDKs. Käufe und Abos kommunizieren über Apple StoreKit; keine Zahlungsdaten oder Apple-IDs werden erfasst.', fr: 'DropSqueeze s’exécute localement sans SDK d’analyse ni traceur publicitaire. Achats et abonnements passent par Apple StoreKit ; aucune coordonnée de paiement n’est conservée.', es: 'DropSqueeze se ejecuta localmente sin SDKs de analítica o publicidad. Compras y suscripciones se gestionan vía Apple StoreKit; no se recopilan datos de pago ni cuentas de Apple.' })[lang]
      : app === 'pastepipe'
      ? ({ 'zh-Hans': 'PastePipe 默认纯本地离线处理，无开发者运营的云端账户或追踪服务器。若主动开启可选的私有 iCloud 同步，文本历史与片段通过 Apple CloudKit 同步至你个人的私有数据库，可随时关闭。', 'zh-Hant': 'PastePipe 預設純本機離線處理，無開發者營運的雲端帳戶或追蹤伺服器。若主動開啟可選的私有 iCloud 同步，文字歷史與片段透過 Apple CloudKit 同步至你個人的私有資料庫，可隨時關閉。', en: 'PastePipe processes clipboard content and OCR locally by default with no developer-operated accounts or tracking servers. If you enable optional private iCloud sync, text history and snippets sync to your personal iCloud database via Apple CloudKit and can be turned off anytime.', ja: 'PastePipe は初期状態で端末内ローカル処理を行い、開発者サーバーや追跡機能はありません。任意のプライベート iCloud 同期を有効にした場合のみ、テキスト履歴とスニペットが個人の iCloud データベースに同期され、いつでも無効化できます。', ko: 'PastePipe는 기본적으로 기기 로컬에서 처리하며 개발자 서버나 추적 기능이 없습니다. 선택적 개인 iCloud 동기화를 켤 때만 텍스트 기록과 스니펫이 Apple CloudKit을 통해 개인 데이터베이스에 동기화되며 언제든 끌 수 있습니다.', de: 'PastePipe verarbeitet Daten standardmäßig lokal ohne Entwickler-Server oder Tracking. Bei aktivierter optionaler privater iCloud-Synchronisierung werden Textverlauf und Snippets über Apple CloudKit in deiner persönlichen Datenbank synchronisiert und können jederzeit deaktiviert werden.', fr: 'PastePipe traite vos données localement par défaut, sans serveur développeur ni traqueur. Si vous activez la synchronisation privée iCloud optionnelle, l’historique texte et les snippets sont synchronisés dans votre base privée via Apple CloudKit et désactivables à tout moment.', es: 'PastePipe procesa los datos de forma local por defecto sin servidores ni rastreo del desarrollador. Si activas la sincronización opcional con iCloud privado, el historial de texto y fragmentos se sincronizan en tu base de datos personal mediante Apple CloudKit y puedes desactivarla cuando quieras.' })[lang]
      : app === 'netpulse'
      ? ({ 'zh-Hans': 'NetPulse 仅在本地网络与蓝牙范围内执行扫描、GATT 调试与 RTSP 监控。应用无自建云端服务器、无第三方追踪或广告 SDK。测速功能使用官方测速端点，仅在用户主动测速时交互。', 'zh-Hant': 'NetPulse 僅在區域網路與藍牙範圍內執行掃描、GATT 除錯與 RTSP 監控。App 無自建雲端伺服器、無第三方追蹤或廣告 SDK。測速功能使用官方測速端點，僅在使用者主動測速時互動。', en: 'NetPulse operates strictly within your local network and Bluetooth range. No developer servers, no analytics, and no tracking SDKs. Speed tests connect to public test endpoints only upon direct request.', ja: 'NetPulse はローカルネットワークと Bluetooth 範囲内でのみ動作します。開発者サーバー、アクセス解析、追跡 SDK はありません。速度測定はお客様の指示時のみ接続します。', ko: 'NetPulse는 로컬 네트워크 및 블루투스 범위 내에서만 동작합니다. 개발자 서버, 분석 및 추적 SDK가 없습니다. 속도 측정은 사용자가 요청할 때만 연결됩니다.', de: 'NetPulse arbeitet ausschließlich im lokalen Netzwerk und über Bluetooth. Keine Entwickler-Server, keine Analysen und keine Tracking-SDKs. Geschwindigkeitstests verbinden sich nur bei manueller Ausführung.', fr: 'NetPulse fonctionne exclusivement sur le réseau local et en Bluetooth. Aucun serveur tiers, aucun outil d’analyse ni traqueur. Le test de débit ne se connecte que sur demande.', es: 'NetPulse funciona exclusivamente en la red local y por Bluetooth. Sin servidores propios, sin analítica ni rastreo. La prueba de velocidad solo se conecta al solicitarla.' })[lang]
      : ({ 'zh-Hans': '应用不提供开发者运营的云同步或广告跟踪服务。系统功能及第三方服务仅在你主动使用时参与。', 'zh-Hant': 'App 不提供開發者營運的雲端同步或廣告追蹤服務。系統功能及第三方服務僅在你主動使用時參與。', en: 'The app does not provide developer-operated cloud sync, advertising, or tracking. System features and third-party services are involved only when you choose to use them.', ja: '開発者が運営するクラウド同期、広告、追跡はありません。システム機能や第三者サービスはお客様が利用した場合にのみ関与します。', ko: '개발자 운영 클라우드 동기화, 광고 또는 추적 기능이 없습니다. 시스템 기능과 제3자 서비스는 사용자가 선택한 경우에만 관여합니다.', de: 'Es gibt keine vom Entwickler betriebene Cloud-Synchronisierung, Werbung oder Nachverfolgung. System- und Drittanbieterdienste werden nur bei deiner Nutzung eingebunden.', fr: 'Aucune synchronisation cloud, publicité ou suivi géré par le développeur. Les services système et tiers n’interviennent que si vous les utilisez.', es: 'No hay sincronización en la nube, publicidad ni seguimiento gestionados por el desarrollador. Los servicios del sistema y de terceros solo intervienen si decides usarlos.' })[lang];
    const retention = ({ 'zh-Hans': '你可以在应用提供的设置中清除相关历史或缓存；本机数据也可随卸载应用或移除其数据而删除。邮件支持内容仅在你主动发送后由支持团队收到。', 'zh-Hant': '你可在 App 提供的設定中清除相關歷史或快取；解除安裝 App 或移除其資料也可刪除本機資料。支援郵件僅在你主動寄出後由支援團隊收到。', en: 'Use the controls provided by the app to clear available history or cache. Local app data can also be removed by deleting the app and its data. Support receives email only after you send it.', ja: 'アプリ内の設定から履歴やキャッシュを削除できます。アプリとそのデータを削除することでもローカルデータを消去できます。サポートメールは送信後にのみ届きます。', ko: '앱에서 제공하는 설정으로 기록이나 캐시를 지울 수 있습니다. 앱과 데이터를 삭제해도 로컬 데이터가 제거됩니다. 지원팀은 사용자가 이메일을 보낸 후에만 내용을 받습니다.', de: 'Verfügbare Verläufe und Caches kannst du in den App-Einstellungen löschen. Lokale Daten lassen sich auch durch Löschen der App-Daten entfernen. Support erhält E-Mails erst nach deinem Versand.', fr: 'Vous pouvez supprimer l’historique ou le cache dans les réglages de l’app. Les données locales peuvent aussi être supprimées avec celles de l’app. L’assistance ne reçoit votre e-mail qu’après son envoi.', es: 'Puedes borrar el historial o la caché desde los ajustes de la app. También puedes eliminar los datos locales al borrar la app y sus datos. Soporte recibe el correo solo después de que lo envíes.' })[lang];
    const sections = [body, local, net, retention], topics = c.privacyTopics;
    const archive = window.APP_PRIVACY_SOURCE?.[app] || {};
    const archiveLang = archive[lang] ? lang : (lang.startsWith('zh') && (archive['zh-Hans'] || archive['zh-CN']) ? (archive['zh-Hans'] ? 'zh-Hans' : 'zh-CN') : (archive.en ? 'en' : Object.keys(archive)[0]));
    const archiveItems = archive[archiveLang] || [];
    const archiveLanguage = L[normalize(archiveLang)]?.name || ({ 'zh-CN': '简体中文' })[archiveLang] || archiveLang;
    const archiveMarkup = archiveItems.map(item => {
      const content = escape(item.text);
      if (item.type === 'h1') return `<h3>${content}</h3>`;
      if (item.type === 'h2' || item.type === 'h3' || item.type === 'h4') return `<h4>${content}</h4>`;
      if (item.type === 'li') return `<p class="source-bullet">${content}</p>`;
      return `<p>${content}</p>`;
    }).join('');

    return `
      <main id="main" class="wrap privacy-page">
        <section class="legal-head reveal">
          <h1>${escape(product.name)} · ${escape(c.policyLabel)}</h1>
          <p class="intro">${escape(c.policyLead)}</p>
          <p class="date">${escape(c.updated)}</p>
        </section>
        
        <section class="policy-summary reveal">
          <span class="summary-dot" aria-hidden="true"></span>
          <div>
            <p>${escape(c.privacy)}</p>
            <h2>${escape(product.privacySummary ? (product.privacySummary[lang] || product.privacySummary.en || product.privacySummary['zh-Hans']) : c.privacySummary)}</h2>
          </div>
        </section>

        <div class="legal-grid">
          <aside class="toc">
            <p>${escape(c.more)}</p>
            ${topics.map((x, i) => `<a href="#topic-${i + 1}">${escape(x)}</a>`).join('')}
          </aside>
          <article class="legal-copy">
            ${sections.map((s, i) => `
              <section id="topic-${i + 1}" class="reveal">
                <h2>${escape(topics[i])}</h2>
                <p>${escape(s)}</p>
                ${i === 3 ? `<p>${escape(c.contactText)}</p><p><a class="email-plain" href="mailto:${email}">${email}</a></p>` : ''}
              </section>
            `).join('')}
            <p class="legal-note">${escape(c.legal)}</p>
            <details class="source-policy reveal">
              <summary>${escape(c.sourcePolicy || '展开详细条款')} · ${escape(archiveLanguage)}</summary>
              <p class="source-note">${escape(c.sourceNote || '以下为产品已有详细政策原文。')}</p>
              <div class="source-copy">${archiveMarkup}</div>
            </details>
          </article>
        </div>
      </main>
    `;
  }

  function support(lang) {
    const c = L[lang];
    const answers = {
      upload: T[app].body[lang === 'zh-Hans' ? 0 : lang === 'zh-Hant' ? 7 : ({ en: 1, fr: 2, de: 3, es: 4, ko: 5, ja: 6 }[lang] || 1)],
      contact: product.platform === 'iOS'
        ? (lang.startsWith('zh') ? '请以邮件说明 App 和 iOS 版本、操作步骤及完整错误提示；不要附上密码或私密文件。' : 'Email the app and iOS versions, steps you took, and the full error message. Do not include passwords or private files.')
        : ({ 'zh-Hans': '请邮件说明应用和 macOS 版本、操作步骤及完整错误提示；不要附上密码或私人文件。', 'zh-Hant': '請以電子郵件說明 App 和 macOS 版本、操作步驟及完整錯誤提示；請勿附上密碼或私人檔案。', en: 'Email the app and macOS versions, steps you took, and the full error message. Do not include passwords or private files.', ja: 'アプリと macOS のバージョン、操作手順、エラー全文をメールでお知らせください。パスワードや個人ファイルは添付しないでください。', ko: '앱과 macOS 버전, 진행 단계 및 전체 오류 메시지를 이메일로 보내 주세요. 비밀번호나 개인 파일은 첨부하지 마세요.', de: 'Nenne per E-Mail App- und macOS-Version, Schritte und die vollständige Fehlermeldung. Sende keine Passwörter oder privaten Dateien.', fr: 'Indiquez par e-mail les versions, les étapes et le message d’erreur complet. N’envoyez ni mot de passe ni fichier privé.', es: 'Indica por correo las versiones, los pasos y el mensaje de error completo. No envíes contraseñas ni archivos privados.' })[lang]
    };
    const qa = [c.faqItems[0], answers.upload, c.faqItems[1], answers.contact, c.faqItems[2], product.privacySummary ? (product.privacySummary[lang] || product.privacySummary.en || product.privacySummary['zh-Hans']) : c.privacySummary];
    const contactPrompt = product.platform === 'iOS'
      ? (lang.startsWith('zh') ? '请把问题、应用版本和 iOS 版本发给我们。' : 'Tell us what happened and include the app and iOS versions.')
      : c.contactText;
    const subject = encodeURIComponent(product.name + (lang.startsWith('zh') ? ' 支持请求' : ' Support Request'));

    const faqMarkup = product.customFaq
      ? (product.customFaq[lang] || product.customFaq.en || product.customFaq['zh-Hans']).map(item => `
          <details class="reveal">
            <summary>${escape(item.q)}</summary>
            <p>${escape(item.a)}</p>
          </details>
        `).join('')
      : [0, 2, 4].map(i => `
          <details class="reveal">
            <summary>${escape(qa[i])}</summary>
            <p>${escape(qa[i + 1])}</p>
          </details>
        `).join('');

    return `
      <main id="main" class="wrap support-page">
        <section class="support-hero reveal">
          <div>
            <h1>${escape(product.name)} · ${escape(c.supportLabel)}</h1>
            <p class="intro">${escape(c.supportLead)}</p>
          </div>
          <aside class="contact-card">
            <p>${escape(c.contactTitle)}</p>
            <h2>${escape(contactPrompt)}</h2>
            <a class="button" href="mailto:${email}?subject=${subject}">${escape(c.mail)} <span aria-hidden="true">↗</span></a>
            <a class="email-plain" href="mailto:${email}">${email}</a>
            <button class="copy" type="button" data-copy>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
              <span>${escape(c.copy)}</span>
            </button>
            <span class="copy-status" aria-live="polite" role="status"></span>
          </aside>
        </section>

        <section class="faq-section reveal">
          <div>
            <h2>${escape(c.faq)}</h2>
            <p>${escape(c.supportLead)}</p>
          </div>
          <div class="faq-list">
            ${faqMarkup}
          </div>
        </section>

        <section class="support-bottom reveal">
          <div>
            <h2>${escape(c.privacy)}</h2>
            <p>${escape(product.privacySummary ? (product.privacySummary[lang] || product.privacySummary.en || product.privacySummary['zh-Hans']) : c.privacySummary)}</p>
          </div>
          <a href="${route('privacy', lang)}">${escape(c.privacyLink)} <span aria-hidden="true">→</span></a>
        </section>
      </main>
    `;
  }

  /* Scroll Reveal & Spotlight Interactions */
  function initInteractions() {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    } else {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('revealed'));
    }
  }

  function render(lang, replace = true) {
    const body = page === 'privacy' ? privacy(lang) : page === 'support' ? support(lang) : home(lang);
    const content = `${header(lang)}${body}${footer(lang)}`;
    if (replace) document.body.innerHTML = content;
    document.documentElement.lang = lang;
    document.title = title(lang);
    document.querySelector('meta[name="description"]').content = langValue(product.description, lang);
    document.querySelector('meta[property="og:title"]').content = title(lang);
    document.querySelector('meta[property="og:description"]').content = langValue(product.description, lang);
    document.body.dataset.lang = lang;
    document.querySelectorAll('[data-lang]').forEach(s => s.value = lang);
    themeButtons(lang);
    initInteractions();
  }

  function stored(key, value) {
    try {
      if (value === undefined) return localStorage.getItem(key);
      localStorage.setItem(key, value);
    } catch {}
    return null;
  }

  function themeButtons(lang) {
    document.querySelectorAll('button[data-theme]').forEach(b => {
      const isDark = document.documentElement.dataset.theme !== 'light';
      const label = isDark ? L[lang].theme[0] : L[lang].theme[1];
      b.textContent = label;
      b.setAttribute('aria-label', label);
      b.title = label;
    });
  }

  let current = chosenLanguage();
  const storedTheme = stored('app-policies-theme');
  document.documentElement.dataset.theme = storedTheme === 'light' ? 'light' : 'dark';
  render(current);

  document.addEventListener('change', e => {
    if (!e.target.matches('[data-lang]')) return;
    const controlId = e.target.id;
    current = e.target.value;
    stored('app-policies-language', current);
    const u = new URL(location.href);
    u.searchParams.set('lang', current);
    history.replaceState(null, '', u);
    render(current);
    document.getElementById(controlId)?.focus({ preventScroll: true });
  });

  document.addEventListener('click', async e => {
    const theme = e.target.closest('button[data-theme]');
    if (theme) {
      const nextTheme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
      document.documentElement.dataset.theme = nextTheme;
      stored('app-policies-theme', nextTheme);
      themeButtons(current);
      return;
    }

    const copy = e.target.closest('[data-copy]');
    if (copy) {
      const status = document.querySelector('.copy-status');
      try {
        await navigator.clipboard.writeText(email);
        status.textContent = `✓ ${L[current].copied}`;
        setTimeout(() => { status.textContent = ''; }, 3500);
      } catch {
        status.textContent = email;
      }
      return;
    }
  });
})();
