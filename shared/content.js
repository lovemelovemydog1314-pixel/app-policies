/* Product facts and visitor-facing copy for the seven public product sites. */
(function (root) {
  const L = {
    'zh-Hans': { allApps:"全部应用",name:'简体中文', nav:['首页','隐私政策','技术支持'], theme:['浅色','深色'], skip:'跳到主要内容', email:'联系支持团队', emailNote:'描述问题时，请附上应用版本、macOS 版本和复现步骤。', copy:'复制邮箱', copied:'已复制邮箱地址', features:'核心功能', privacy:'隐私摘要', privacyLink:'阅读完整隐私政策', help:'使用帮助', faq:'常见问题', back:'返回首页', updated:'网站更新日期：2026 年 10 月 20 日', contact:'电子邮件支持', mail:'发送邮件', locally:'本机处理', noAccount:'无需开发者云账户', noTracking:'无广告与跟踪', supportLead:'查看常见问题，或直接通过电子邮件联系我们。', policyLead:'本政策说明应用处理的信息、保存位置和你的选择。实际处理取决于你启用的功能。', langLabel:'语言', homeAction:'了解隐私与支持', homeLabel:'产品首页', policyLabel:'隐私政策', supportLabel:'技术支持', footer:'为 Mac 用户打造的实用工具。', contactTitle:'需要帮助？', contactText:'请把问题、应用版本和 macOS 版本发给我们。', question:'还有疑问？', privacySummary:'应用主要在你的 Mac 上运行。除非你主动使用邮件、系统功能或网络共享功能，应用不会把文件内容发送给开发者。', legal:'本页面为产品隐私说明，不替代适用法律规定。', privacyTopics:['应用处理的信息','本机保存与权限','网络与第三方服务','保留、删除与联系'], faqItems:['应用会把我的文件上传吗？','如何联系支持？','我可以在哪里了解数据处理？'], more:'了解详情', emailSubject:'产品支持请求' },
    'zh-Hant': { allApps:"全部 App",name:'繁體中文', nav:['首頁','隱私權政策','技術支援'], theme:['淺色','深色'], skip:'跳至主要內容', email:'聯絡支援團隊', emailNote:'描述問題時，請附上 App 版本、macOS 版本和重現步驟。', copy:'複製電子郵件', copied:'已複製電子郵件地址', features:'核心功能', privacy:'隱私摘要', privacyLink:'閱讀完整隱私權政策', help:'使用說明', faq:'常見問題', back:'返回首頁', updated:'網站更新日期：2026 年 10 月 20 日', contact:'電子郵件支援', mail:'寄送電子郵件', locally:'在本機處理', noAccount:'無需開發者雲端帳戶', noTracking:'無廣告與追蹤', supportLead:'查看常見問題，或直接透過電子郵件聯絡我們。', policyLead:'本政策說明 App 處理的資訊、儲存位置和你的選擇。實際處理取決於你啟用的功能。', langLabel:'語言', homeAction:'了解隱私與支援', homeLabel:'產品首頁', policyLabel:'隱私權政策', supportLabel:'技術支援', footer:'為 Mac 使用者打造的實用工具。', contactTitle:'需要協助嗎？', contactText:'請將問題、App 版本和 macOS 版本寄給我們。', question:'還有疑問嗎？', privacySummary:'App 主要在你的 Mac 上執行。除非你主動使用電子郵件、系統功能或網路分享功能，App 不會將檔案內容傳送給開發者。', legal:'本頁面為產品隱私說明，不取代適用法律規定。', privacyTopics:['App 處理的資訊','本機儲存與權限','網路與第三方服務','保留、刪除與聯絡'], faqItems:['App 會上傳我的檔案嗎？','如何聯絡支援？','我可以在哪裡了解資料處理方式？'], more:'了解詳情', emailSubject:'產品支援請求' },
    en: { allApps:"All Apps",name:'English', nav:['Home','Privacy','Support'], theme:['Light','Dark'], skip:'Skip to content', email:'Contact support', emailNote:'Include the app version, macOS version, and steps to reproduce the issue.', copy:'Copy email', copied:'Email address copied', features:'What it does', privacy:'Privacy at a glance', privacyLink:'Read the full privacy policy', help:'Help center', faq:'Frequently asked questions', back:'Back to home', updated:'Website updated October 20, 2026', contact:'Email support', mail:'Send email', locally:'Processed on your Mac', noAccount:'No developer cloud account', noTracking:'No ads or tracking', supportLead:'Browse these answers or contact us directly by email.', policyLead:'This policy explains what the app handles, where it is stored, and the choices available to you. Processing depends on the features you enable.', langLabel:'Language', homeAction:'Privacy and support', homeLabel:'Product home', policyLabel:'Privacy policy', supportLabel:'Support', footer:'Practical tools for Mac users.', contactTitle:'Need a hand?', contactText:'Tell us what happened and include the app and macOS versions.', question:'Still have a question?', privacySummary:'The app primarily works on your Mac. It does not send file contents to the developer unless you choose to use email, a system service, or a network-sharing feature.', legal:'This product notice supplements applicable legal requirements.', privacyTopics:['Information the app handles','Local storage and permissions','Network and third parties','Retention, deletion, and contact'], faqItems:['Does the app upload my files?','How do I contact support?','Where can I learn about data handling?'], more:'Learn more', emailSubject:'Product support request' },
    ja: { allApps:"すべてのアプリ",name:'日本語', nav:['ホーム','プライバシー','サポート'], theme:['ライト','ダーク'], skip:'本文へ移動', email:'サポートに連絡', emailNote:'お問い合わせにはアプリと macOS のバージョン、再現手順を記載してください。', copy:'メールをコピー', copied:'メールアドレスをコピーしました', features:'主な機能', privacy:'プライバシー概要', privacyLink:'プライバシーポリシー全文', help:'ヘルプ', faq:'よくある質問', back:'ホームに戻る', updated:'サイト更新日：2026年10月20日', contact:'メールサポート', mail:'メールを送信', locally:'Mac 上で処理', noAccount:'アカウント不要', noTracking:'広告・追跡なし', supportLead:'よくある質問をご覧いただくか、メールでお問い合わせください。', policyLead:'本ポリシーでは、アプリが扱う情報、保存場所、お客様の選択肢を説明します。処理内容は有効にした機能によって異なります。', langLabel:'言語', homeAction:'プライバシーとサポート', homeLabel:'ホーム', policyLabel:'プライバシーポリシー', supportLabel:'サポート', footer:'Mac ユーザーのための実用ツール。', contactTitle:'お困りですか？', contactText:'問題の内容とアプリ、macOS のバージョンをお知らせください。', question:'ほかにご質問がありますか？', privacySummary:'アプリは主に Mac 上で動作します。メール、システム機能、ネットワーク共有をお客様が利用しない限り、ファイル内容を開発者に送信しません。', legal:'この説明は適用される法令上の要件に代わるものではありません。', privacyTopics:['アプリが扱う情報','ローカル保存と権限','ネットワークと第三者','保存期間・削除・連絡先'], faqItems:['ファイルはアップロードされますか？','サポートへの連絡方法は？','データの扱いはどこで確認できますか？'], more:'詳しく見る', emailSubject:'製品サポートのお問い合わせ' },
    ko: { allApps:"모든 앱",name:'한국어', nav:['홈','개인정보','지원'], theme:['라이트','다크'], skip:'본문으로 건너뛰기', email:'지원팀 문의', emailNote:'앱 버전, macOS 버전 및 재현 단계를 함께 보내 주세요.', copy:'이메일 복사', copied:'이메일 주소를 복사했습니다', features:'주요 기능', privacy:'개인정보 한눈에 보기', privacyLink:'전체 개인정보 처리방침', help:'도움말', faq:'자주 묻는 질문', back:'홈으로', updated:'사이트 업데이트: 2026년 10월 20일', contact:'이메일 지원', mail:'이메일 보내기', locally:'Mac에서 처리', noAccount:'계정 불필요', noTracking:'광고 및 추적 없음', supportLead:'자주 묻는 질문을 확인하거나 이메일로 문의해 주세요.', policyLead:'이 방침은 앱이 처리하는 정보, 저장 위치 및 사용자의 선택을 설명합니다. 실제 처리는 활성화한 기능에 따라 달라집니다.', langLabel:'언어', homeAction:'개인정보 및 지원', homeLabel:'홈', policyLabel:'개인정보 처리방침', supportLabel:'지원', footer:'Mac 사용자를 위한 실용적인 도구.', contactTitle:'도움이 필요하신가요?', contactText:'문제 내용과 앱 및 macOS 버전을 알려 주세요.', question:'다른 질문이 있으신가요?', privacySummary:'앱은 주로 Mac에서 작동합니다. 이메일, 시스템 기능 또는 네트워크 공유 기능을 직접 사용하지 않는 한 파일 내용을 개발자에게 전송하지 않습니다.', legal:'이 안내는 관련 법률상 요구사항을 대체하지 않습니다.', privacyTopics:['앱이 처리하는 정보','로컬 저장 및 권한','네트워크 및 제3자','보관·삭제·연락처'], faqItems:['파일이 업로드되나요?','지원팀에 어떻게 연락하나요?','정보 처리는 어디서 확인하나요?'], more:'자세히 보기', emailSubject:'제품 지원 문의' },
    de: { allApps:"Alle Apps",name:'Deutsch', nav:['Startseite','Datenschutz','Support'], theme:['Hell','Dunkel'], skip:'Zum Inhalt springen', email:'Support kontaktieren', emailNote:'Bitte nenne die App- und macOS-Version sowie die Schritte zur Reproduktion.', copy:'E-Mail kopieren', copied:'E-Mail-Adresse kopiert', features:'Funktionen', privacy:'Datenschutz auf einen Blick', privacyLink:'Vollständige Datenschutzerklärung', help:'Hilfe', faq:'Häufige Fragen', back:'Zurück zur Startseite', updated:'Website aktualisiert am 20. Oktober 2026', contact:'E-Mail-Support', mail:'E-Mail senden', locally:'Verarbeitung auf deinem Mac', noAccount:'Kein Konto erforderlich', noTracking:'Keine Werbung oder Tracking', supportLead:'Sieh dir die Antworten an oder kontaktiere uns direkt per E-Mail.', policyLead:'Diese Erklärung beschreibt verarbeitete Informationen, Speicherorte und deine Wahlmöglichkeiten. Die Verarbeitung hängt von den aktivierten Funktionen ab.', langLabel:'Sprache', homeAction:'Datenschutz und Support', homeLabel:'Startseite', policyLabel:'Datenschutzerklärung', supportLabel:'Support', footer:'Praktische Werkzeuge für Mac-Nutzer.', contactTitle:'Brauchst du Hilfe?', contactText:'Beschreibe das Problem und nenne App- und macOS-Version.', question:'Noch eine Frage?', privacySummary:'Die App arbeitet überwiegend auf deinem Mac. Dateiinhalte werden nicht an den Entwickler gesendet, außer du nutzt selbst E-Mail, Systemdienste oder eine Netzwerkfreigabe.', legal:'Dieser Hinweis ersetzt keine geltenden gesetzlichen Anforderungen.', privacyTopics:['Verarbeitete Informationen','Lokale Speicherung und Berechtigungen','Netzwerk und Drittanbieter','Speicherung, Löschung und Kontakt'], faqItems:['Lädt die App meine Dateien hoch?','Wie erreiche ich den Support?','Wo finde ich Informationen zur Datenverarbeitung?'], more:'Mehr erfahren', emailSubject:'Supportanfrage' },
    fr: { allApps:"Toutes les apps",name:'Français', nav:['Accueil','Confidentialité','Assistance'], theme:['Clair','Sombre'], skip:'Aller au contenu', email:'Contacter l’assistance', emailNote:'Indiquez la version de l’app, celle de macOS et les étapes pour reproduire le problème.', copy:'Copier l’adresse e-mail', copied:'Adresse e-mail copiée', features:'Fonctionnalités', privacy:'Confidentialité en bref', privacyLink:'Lire la politique complète', help:'Centre d’aide', faq:'Questions fréquentes', back:'Retour à l’accueil', updated:'Site mis à jour le 20 octobre 2026', contact:'Assistance par e-mail', mail:'Envoyer un e-mail', locally:'Traitement sur votre Mac', noAccount:'Aucun compte requis', noTracking:'Sans publicité ni suivi', supportLead:'Consultez les réponses ou contactez-nous directement par e-mail.', policyLead:'Cette politique explique les informations traitées par l’app, leur stockage et vos choix. Le traitement dépend des fonctionnalités activées.', langLabel:'Langue', homeAction:'Confidentialité et assistance', homeLabel:'Accueil', policyLabel:'Politique de confidentialité', supportLabel:'Assistance', footer:'Des outils pratiques pour Mac.', contactTitle:'Besoin d’aide ?', contactText:'Décrivez le problème et indiquez les versions de l’app et de macOS.', question:'Vous avez encore une question ?', privacySummary:'L’app fonctionne principalement sur votre Mac. Elle n’envoie pas le contenu de vos fichiers au développeur, sauf si vous utilisez volontairement l’e-mail, un service système ou le partage réseau.', legal:'Cette notice complète les exigences légales applicables.', privacyTopics:['Informations traitées','Stockage local et autorisations','Réseau et tiers','Conservation, suppression et contact'], faqItems:['L’app envoie-t-elle mes fichiers ?','Comment contacter l’assistance ?', 'Où consulter le traitement des données ?'], more:'En savoir plus', emailSubject:'Demande d’assistance produit' },
    es: { allApps:"Todas las apps",name:'Español', nav:['Inicio','Privacidad','Soporte'], theme:['Claro','Oscuro'], skip:'Saltar al contenido', email:'Contactar con soporte', emailNote:'Incluye la versión de la app, la de macOS y los pasos para reproducir el problema.', copy:'Copiar correo', copied:'Dirección de correo copiada', features:'Funciones', privacy:'Privacidad de un vistazo', privacyLink:'Leer la política completa', help:'Centro de ayuda', faq:'Preguntas frecuentes', back:'Volver al inicio', updated:'Sitio actualizado el 20 de octubre de 2026', contact:'Soporte por correo', mail:'Enviar correo', locally:'Procesamiento en tu Mac', noAccount:'No requiere cuenta', noTracking:'Sin anuncios ni seguimiento', supportLead:'Consulta estas respuestas o escríbenos directamente por correo.', policyLead:'Esta política explica qué información trata la app, dónde se guarda y qué opciones tienes. El tratamiento depende de las funciones activadas.', langLabel:'Idioma', homeAction:'Privacidad y soporte', homeLabel:'Inicio', policyLabel:'Política de privacidad', supportLabel:'Soporte', footer:'Herramientas prácticas para usuarios de Mac.', contactTitle:'¿Necesitas ayuda?', contactText:'Cuéntanos qué ocurrió e incluye las versiones de la app y macOS.', question:'¿Tienes otra pregunta?', privacySummary:'La app funciona principalmente en tu Mac. No envía el contenido de los archivos al desarrollador, salvo que decidas usar el correo, servicios del sistema o una función de red compartida.', legal:'Este aviso complementa los requisitos legales aplicables.', privacyTopics:['Información que trata la app','Almacenamiento local y permisos','Red y terceros','Conservación, eliminación y contacto'], faqItems:['¿La app sube mis archivos?','¿Cómo contacto con soporte?','¿Dónde consulto el tratamiento de datos?'], more:'Más información', emailSubject:'Solicitud de soporte del producto' }
  };
  const products = {
    'beauty-folder': {
      name:'BeautyFolder', tagline:{'zh-Hans':'让常用文件夹更容易被认出来。','zh-Hant':'讓常用資料夾更容易辨認。',en:'Make your folders easier to recognize.',ja:'よく使うフォルダを見つけやすく。',ko:'자주 쓰는 폴더를 한눈에 알아보세요.',de:'Ordner auf einen Blick erkennen.',fr:'Repérez vos dossiers plus facilement.',es:'Identifica tus carpetas de un vistazo.'},
      description:{'zh-Hans':'为 Finder 文件夹设计颜色与图像图标，应用前由你确认。','zh-Hant':'為 Finder 資料夾設計顏色與圖片圖示，套用前由你確認。',en:'Style Finder folders with colors and images, then choose when to apply them.',ja:'Finder フォルダを色や画像でデザインし、適用前に確認できます。',ko:'색상과 이미지로 Finder 폴더를 꾸미고 적용 전에 확인하세요.',de:'Gestalte Finder-Ordner mit Farben und Bildern und bestätige die Anwendung.',fr:'Personnalisez les dossiers Finder avec couleurs et images avant application.',es:'Personaliza carpetas del Finder con colores e imágenes antes de aplicarlas.'},
      features:[['颜色与图像','Color and image styling','Couleurs et images','Farben und Bilder','Colores e imágenes','색상 및 이미지','色と画像','顏色與圖片'],['只操作已选文件夹','Only the folders you select','Dossiers sélectionnés','Nur ausgewählte Ordner','Solo carpetas elegidas','선택한 폴더만','選択したフォルダのみ','只處理已選資料夾'],['Mac 本地处理','On-device processing','Traitement local','Lokale Verarbeitung','Procesamiento local','기기 내 처리','Mac 上で処理','Mac 本機處理']],
      facts:{en:['Selected folder URLs and imported images are handled locally for the icon operation. The app does not recursively read folder contents or upload paths or images.','Folder access is granted by drag-and-drop or the macOS file picker. Applying or restoring an icon changes Finder icon metadata on the selected folder; no persistent access bookmark is saved.','Custom color values and a review-prompt version marker may be stored in local app preferences. The app does not send analytics or diagnostic logs.','Email is sent only if you choose to send it. Apple rating features are handled by Apple. The app has no account, cloud sync, advertising, or tracking.'], zh:['应用只在本机临时处理你选中的文件夹路径和导入图片；不会递归读取文件夹内容，也不会上传路径或图片。','通过拖放或 macOS 文件选择器授予文件夹访问权限。设置或还原图标会更改所选文件夹的 Finder 图标元数据；不会保存持久访问书签。','自定义颜色和评分提示版本标记可能保存在本机偏好设置中。应用不会发送分析数据或诊断日志。','只有你主动发送邮件时开发者才会收到邮件内容。评分由 Apple 服务处理。应用没有账户、云同步、广告或追踪。']},
      faq:[['导入图像或文件夹会上传吗？','不会，图标处理在本机进行。应用只访问你明确选择的文件夹。'],['为什么 Finder 图标操作可能改变文件夹日期？','为刷新 Finder 图标，macOS 可能更新所选文件夹的元数据。应用不会有意修改其中其他文件。'],['邮件会自动发送吗？','不会。只有你在邮件应用中主动发送后，支持团队才会收到内容。']]
    },
    'caffeineai': {
      name:'CaffeineAI', tagline:{'zh-Hans':'让 Mac 在任务进行时保持唤醒','zh-Hant':'讓 Mac 在工作期間保持喚醒',en:'Keep your Mac awake while work is in progress.',ja:'作業中、Mac のスリープを防止。',ko:'작업하는 동안 Mac이 잠들지 않도록 하세요.',de:'Halte deinen Mac während der Arbeit wach.',fr:'Gardez votre Mac éveillé pendant vos tâches.',es:'Mantén tu Mac activo mientras trabajas.'},
      description:{'zh-Hans':'创建有时限的手动会话，或为选定应用配置本机条件规则。','zh-Hant':'建立有時限的手動工作階段，或為指定 App 設定本機條件規則。',en:'Start timed sessions or create local, condition-based rules for selected apps.',ja:'時間制のセッションや、選択したアプリ向けのローカルルールを設定。',ko:'시간제 세션을 시작하거나 선택한 앱에 로컬 조건 규칙을 설정하세요.',de:'Starte zeitlich begrenzte Sitzungen oder lokale Regeln für ausgewählte Apps.',fr:'Lancez des sessions temporisées ou des règles locales pour certaines apps.',es:'Inicia sesiones temporizadas o reglas locales para las apps que elijas.'},
      features:[['手动与定时会话','Manual and timed sessions','Sessions manuelles et temporisées','Manuelle und zeitlich begrenzte Sitzungen','Sesiones manuales y temporizadas','수동 및 시간제 세션','手動・時間制セッション','手動與計時工作階段'],['本机条件规则','Local condition rules','Règles locales','Lokale Regeln','Reglas locales','로컬 조건 규칙','ローカル条件ルール','本機條件規則'],['清晰的电源边界','Clear power boundaries','Limites système explicites','Klare Systemgrenzen','Límites claros del sistema','명확한 전원 경계','明確な電源制御','清楚的電源限制']],
      facts:{en:['Enabled rules can read local signals such as the foreground app, CPU and network counters, mounted volumes, audio or Bluetooth state, Wi-Fi network name, calendar activity, battery, and thermal status. Signals are evaluated on this Mac and are not uploaded.','Preferences and rules are stored in the app container. Optional decision history keeps up to 2,000 events for at most seven days; recent diagnostics stay in memory and clear when the app quits.','Wi-Fi name rules use macOS Location Services permission; calendar rules require Calendar access. Disk keep-alive stores a selected file path and security-scoped bookmark and reads one byte at the chosen interval without changing the file.','Configuration exports exclude selected file paths, bookmarks, and active sessions. The app has no account, analytics, ads, or developer server.'], zh:['仅在启用规则需要时，本机读取前台应用标识、CPU 和网络计数、挂载卷、音频或蓝牙状态、Wi‑Fi 名称、日历活动、电量和热状态；这些信号在本机判断，不上传。','偏好设置和规则保存在应用容器。可选决策历史最多保存 2,000 条，最长七天；诊断记录只在内存中保留，退出应用后清除。','Wi‑Fi 名称规则需要 macOS 定位服务权限，日历规则需要日历权限。磁盘保活会保存所选文件路径及安全书签，并按设定间隔读取一个字节，不修改文件。','配置导出不含所选文件路径、安全书签或活动会话。应用没有账户、分析、广告或开发者服务器。']},
      faq:[['应用可以唤醒已经睡眠的 Mac 吗？','不能。它只能请求 macOS 在会话期间防止闲置睡眠，不能覆盖合盖睡眠或系统电源保护。'],['自动规则会一直运行吗？','自动会话有结束时限；只有手动会话可由你选择无限时。规则默认关闭。'],['规则数据会上传吗？','不会。规则和相关信号只在这台 Mac 上使用。']]
    },
    'drift': {
      name:'Drift', tagline:{'zh-Hans':'空间去哪儿了？让存储一目了然。','zh-Hant':'空間去哪裡了？讓儲存狀況一目了然。',en:'See where your Mac storage goes.',ja:'Mac のストレージを見える化。',ko:'Mac 저장 공간을 한눈에 확인하세요.',de:'Sieh, wohin dein Mac-Speicher geht.',fr:'Visualisez l’espace utilisé sur votre Mac.',es:'Descubre qué ocupa el espacio de tu Mac.'},
      description:{'zh-Hans':'用空间图谱、开发者清理建议、重复项检查和历史快照了解磁盘使用。','zh-Hant':'透過空間圖譜、開發者清理建議、重複項目檢查和歷史快照了解磁碟用量。',en:'Explore disk usage, developer cleanup suggestions, duplicate files, and scan snapshots.',ja:'容量マップ、開発者向け整理候補、重複ファイル、スキャン履歴を確認。',ko:'저장 공간 지도, 개발자 정리 제안, 중복 파일 및 스캔 스냅샷을 확인하세요.',de:'Erkunde Speicherbelegung, Entwickler-Bereinigung, Duplikate und Scan-Snapshots.',fr:'Explorez l’espace disque, les suggestions de nettoyage, les doublons et les instantanés.',es:'Explora el uso del disco, sugerencias de limpieza, duplicados y capturas.'},
      features:[['空间透视图','Visual storage map','Carte de stockage','Speicherkarte','Mapa de almacenamiento','저장 공간 지도','容量マップ','儲存空間圖譜'],['重复项与清理建议','Duplicates and cleanup suggestions','Doublons et pistes de nettoyage','Duplikate und Aufräumtipps','Duplicados y sugerencias','중복 및 정리 제안','重複項目と整理候補','重複項目與清理建議'],['历史扫描比较','Compare scan snapshots','Comparer les analyses','Scans vergleichen','Comparar análisis','스캔 비교','スキャン比較','比較掃描快照']],
      facts:{en:['Drift scans only folders you authorize and keeps scan results and snapshots in local app storage. It does not upload scan data.','To inspect protected locations, macOS may require Full Disk Access. You can review or revoke this permission in System Settings.','The app may read names, allocated sizes, and metadata needed to map storage. Files you choose for cleanup are moved to the system Trash; review them before confirming.','The app does not require an account or use advertising or analytics. Contact is handled only when you choose to send an email.'], zh:['Drift 只扫描你授权的文件夹，扫描结果和快照保存在应用本机数据中，不会上传扫描数据。','检查受保护的位置时，macOS 可能要求完全磁盘访问权限。你可以在系统设置中查看或撤销权限。','为生成空间图谱，应用可能读取名称、占用空间和必要元数据。你确认清理的项目会移至系统废纸篓；操作前请先检查。','应用无需账户，不使用广告或分析工具。只有你主动发送邮件时才会联系支持团队。']},
      faq:[['Drift 会删除文件吗？','清理操作由你选择并确认，所选项目会移到系统废纸篓。请在确认前检查清单。'],['为什么需要完全磁盘访问？','macOS 会保护部分位置。授权后 Drift 才能扫描这些位置；你可随时在系统设置撤销。'],['扫描结果会上传吗？','不会。扫描和快照保留在本机。']]
    },
    'folderify': {
      name:'Folderify', tagline:{'zh-Hans':'让项目文件夹，一眼成体系。','zh-Hant':'讓專案資料夾一眼成系統。',en:'Give every project folder its own visual language.',ja:'プロジェクトフォルダに一貫した見た目を。',ko:'프로젝트 폴더를 일관된 시각 체계로 정리하세요.',de:'Gib Projektordnern eine klare visuelle Ordnung.',fr:'Donnez une identité visuelle à vos dossiers de projet.',es:'Crea un lenguaje visual para tus carpetas de proyecto.'},
      description:{'zh-Hans':'用颜色、材质、符号和规则整理 Finder 文件夹；批量更改前可检查并撤销。','zh-Hant':'使用顏色、材質、符號和規則整理 Finder 資料夾；批次變更前可檢查並復原。',en:'Organize Finder folders with colors, materials, symbols, and rules. Review batch changes and undo them.',ja:'色、素材、シンボル、ルールで Finder を整理。複数変更は確認して元に戻せます。',ko:'색상, 재질, 기호, 규칙으로 Finder 폴더를 정리하고 일괄 변경을 검토하고 되돌리세요.',de:'Ordne Finder-Ordner mit Farben, Materialien, Symbolen und Regeln. Prüfe und widerrufe Stapeländerungen.',fr:'Organisez Finder avec couleurs, matières, symboles et règles. Vérifiez et annulez les changements groupés.',es:'Organiza Finder con colores, materiales, símbolos y reglas. Revisa y deshaz cambios por lotes.'},
      features:[['设计图标与方案','Design icons and presets','Créer icônes et modèles','Symbole und Vorlagen','Diseña iconos y estilos','아이콘 및 프리셋 디자인','アイコンとプリセット','設計圖示與方案'],['规则批量整理','Rule-based batch styling','Styles par règles','Regelbasierte Stapelgestaltung','Estilos por reglas','규칙 기반 일괄 꾸미기','ルールによる一括整理','依規則批次整理'],['检查与撤销','Review and undo','Vérifier et annuler','Prüfen und rückgängig','Revisar y deshacer','검토 및 실행 취소','確認して取り消し','檢查與復原']],
      facts:{en:['Folderify processes folder names, Finder tags, and directory structure locally for matching rules; it does not read file contents. Only folders you select are changed.','Rules, design settings, history, and recovery data are stored locally. Batch changes can be reviewed and reverted through Undo Vault.','The app needs macOS file access to read selected folder metadata and apply Finder icon resources. You can review and confirm proposed operations before applying them.','The app does not use advertising, tracking, or a developer-operated cloud service. Email is sent only when you choose to contact support.'], zh:['Folderify 在本机读取文件夹名称、Finder 标签和目录结构以匹配规则，不读取文件内容；只修改你选中的文件夹。','规则、设计设置、历史和恢复数据保存在本机。批量更改可在 Undo Vault 中检查和回退。','应用需要 macOS 文件权限以读取所选文件夹信息并应用 Finder 图标资源。应用前可检查并确认待执行操作。','应用不使用广告、追踪或开发者云服务。只有你主动联系支持时才会发送邮件。']},
      faq:[['规则会读取我的文件吗？','智能匹配只读取文件夹名称、Finder 标签和目录结构，不读取文件内容。'],['批量操作可以恢复吗？','可以。通过 Undo Vault 回退支持的批量图标更改。'],['为什么有些项目无法应用？','权限、iCloud 状态、只读磁盘或外置磁盘状态可能影响写入。应用前检查会提示部分问题。']]
    },
    'localdrop': {
      name:'LocalDrop Server', tagline:{'zh-Hans':'让设备在同一局域网内直接互传文件。','zh-Hant':'讓裝置在同一區域網路中直接互傳檔案。',en:'Share files directly across your local network.',ja:'同じローカルネットワークでファイルを共有。',ko:'같은 로컬 네트워크에서 파일을 직접 공유하세요.',de:'Teile Dateien direkt in deinem lokalen Netzwerk.',fr:'Partagez des fichiers directement sur votre réseau local.',es:'Comparte archivos directamente en tu red local.'},
      description:{'zh-Hans':'把 Mac 变成局域网文件服务器，通过浏览器或 FTP 客户端访问已选目录。','zh-Hant':'將 Mac 變成區域網路檔案伺服器，透過瀏覽器或 FTP 用戶端存取已選目錄。',en:'Turn your Mac into a LAN file server, accessible from a browser or FTP client.',ja:'Mac を LAN ファイルサーバーにして、ブラウザや FTP クライアントから利用。',ko:'Mac을 LAN 파일 서버로 설정해 브라우저나 FTP 클라이언트에서 이용하세요.',de:'Verwandle deinen Mac in einen LAN-Dateiserver für Browser und FTP-Clients.',fr:'Transformez votre Mac en serveur local accessible depuis un navigateur ou un client FTP.',es:'Convierte tu Mac en servidor local para navegadores y clientes FTP.'},
      features:[['浏览器与 FTP 访问','Browser and FTP access','Accès navigateur et FTP','Browser- und FTP-Zugriff','Acceso web y FTP','브라우저 및 FTP 접속','ブラウザ・FTP 接続','瀏覽器與 FTP 存取'],['多目录与权限控制','Multiple folders and permissions','Dossiers et permissions','Ordner und Berechtigungen','Carpetas y permisos','여러 폴더 및 권한','複数フォルダと権限','多目錄與權限控制'],['可选 HTTPS','Optional HTTPS','HTTPS en option','Optionales HTTPS','HTTPS opcional','선택적 HTTPS','HTTPS を選択可能','可選 HTTPS']],
      facts:{en:['LocalDrop runs a server on your Mac and serves folders you explicitly share to devices that connect over your local network. Files and text you choose to share are transmitted to those clients.','Account names, permission settings, shared-folder metadata, and service configuration are stored locally. Passwords can be migrated to macOS Keychain. Backups exclude passwords.','HTTP and traditional FTP do not encrypt traffic. HTTPS is available when you import and configure a trusted certificate; FTP remains unencrypted. Temporary links and shared text are available to connected users according to the app settings.','Local diagnostics are stored on the Mac and can be exported in a redacted form. StoreKit processes purchases through Apple. Do not expose the service to the public internet.'], zh:['LocalDrop 在 Mac 上运行服务器，并向通过局域网连接的设备提供你明确共享的文件夹。你选择共享的文件和文本会传输给这些客户端。','账户名、权限、共享目录信息和服务配置保存在本机。密码可迁移到 macOS 钥匙串。配置备份不含密码。','HTTP 和传统 FTP 不加密传输。导入并配置受信任证书后可使用 HTTPS；FTP 仍未加密。临时链接及共享文本按应用设置提供给已连接用户。','本地诊断保存在 Mac 上，可脱敏导出。购买由 Apple StoreKit 处理。请勿将服务暴露到公共互联网。']},
      faq:[['共享内容会经过云端吗？','服务由你的 Mac 在局域网运行，连接设备会直接访问你选定共享的内容。'],['HTTP 或 FTP 是否加密？','HTTP 与传统 FTP 为明文传输。需要加密浏览器连接时，请配置受信任证书并使用 HTTPS。'],['可以开放到互联网吗？','LocalDrop 面向局域网使用。请勿将端口映射至公网，只在可信网络启动服务。']]
    },
    'medialens': {
      name:'MediaLens', tagline:{'zh-Hans':'从媒体文件，快速看到可执行的结论。','zh-Hant':'從媒體檔案快速取得可執行的結論。',en:'Turn media files into clear, actionable QA.',ja:'メディアファイルから、すぐに使える検査結果を。',ko:'미디어 파일을 명확하고 실행 가능한 QA 결과로 확인하세요.',de:'Erhalte klare, umsetzbare QA-Ergebnisse für Mediendateien.',fr:'Transformez vos médias en résultats QA exploitables.',es:'Obtén resultados de QA claros y útiles para tus archivos.'},
      description:{'zh-Hans':'检查媒体技术信息、比较版本、批量 QA，并生成可脱敏的交付报告。','zh-Hant':'檢查媒體技術資訊、比較版本、批次 QA，並產生可去識別的交付報告。',en:'Inspect media metadata, compare versions, run batch QA, and export privacy-aware reports.',ja:'メタデータ確認、バージョン比較、バッチ QA、配慮したレポート出力。',ko:'미디어 메타데이터를 확인하고 비교·일괄 QA 및 개인정보 보호 보고서를 내보내세요.',de:'Prüfe Metadaten, vergleiche Versionen, führe Batch-QA aus und exportiere bereinigte Berichte.',fr:'Inspectez les métadonnées, comparez les versions, lancez un QA par lot et exportez des rapports.',es:'Inspecciona metadatos, compara versiones, ejecuta QA por lotes y exporta informes.'},
      features:[['技术信息与结构检查','Metadata and structure inspection','Métadonnées et structure','Metadaten und Struktur','Metadatos y estructura','메타데이터 및 구조 검사','メタデータ・構造検査','技術資訊與結構檢查'],['批量 QA 与版本比较','Batch QA and comparison','QA et comparaison','Batch-QA und Vergleich','QA por lotes y comparación','일괄 QA 및 비교','一括 QA と比較','批次 QA 與版本比較'],['报告导出与路径脱敏','Reports with path redaction','Rapports et chemins masqués','Berichte mit Pfadschutz','Informes con rutas ocultas','경로 비식별 보고서','パスを伏せたレポート','報告匯出與路徑隱藏']],
      facts:{en:['MediaLens reads local media metadata and file structure for inspection and QA. It does not upload media files or modify source media during analysis.','Recent files, scan history, preferences, and analysis cache may be stored locally. You can clear recent records and batch-analysis cache in the app.','Reports are written only to a destination you choose. Batch reports can redact a sensitive home-directory path; inspect exported content before sharing.','The app does not request remote media resources referenced by local playlists and does not use analytics or advertising. Local parsing uses bundled components and system frameworks.'], zh:['MediaLens 在本机读取媒体元数据和文件结构用于检查及 QA；不会上传媒体文件，也不会在分析时修改源文件。','最近文件、扫描历史、偏好设置和分析缓存可能保存在本机。你可以在应用中清除最近记录和批量分析缓存。','报告只写入你选择的位置。批量报告可隐藏敏感主目录路径；分享前请检查导出内容。','对于本地播放列表引用的远程媒体资源，应用不会发起请求。应用不使用分析或广告服务，解析使用内置组件和系统框架。']},
      faq:[['MediaLens 会修改媒体文件吗？','不会。检查期间只读分析，报告写入你选择的导出位置。'],['为什么结果显示“待确认”？','部分规则只能检查可读取的元数据，不能代替行业认证或完整视听质量评估。'],['扫描会访问远程媒体吗？','不会。远程引用不会被请求；报告会标注无法展开或达到安全上限的项目。']]
    },
    'zipmaster': {
      name:'ZipMaster', tagline:{'zh-Hans':'解压归档，也把收件后的校验做清楚。','zh-Hant':'解壓封存檔，也清楚檢查收到的檔案。',en:'Extract archives and verify what you receive.',ja:'アーカイブを展開し、受け取ったファイルを検証。',ko:'압축을 풀고 받은 파일을 검증하세요.',de:'Entpacke Archive und prüfe erhaltene Dateien.',fr:'Décompressez vos archives et vérifiez les fichiers reçus.',es:'Descomprime archivos y verifica lo que recibes.'},
      description:{'zh-Hans':'在 Mac 本地管理归档，核对 SHA-256 清单并批量测试完整性。','zh-Hant':'在 Mac 本機管理封存檔、核對 SHA-256 清單並批次測試完整性。',en:'Manage archives locally, verify SHA-256 manifests, and test archive integrity in batches.',ja:'Mac 上でアーカイブを管理し、SHA-256 と整合性をまとめて確認。',ko:'Mac에서 압축 파일을 관리하고 SHA-256 목록 및 무결성을 일괄 검사하세요.',de:'Verwalte Archive lokal, prüfe SHA-256-Manifeste und teste die Integrität gesammelt.',fr:'Gérez vos archives localement, vérifiez les listes SHA-256 et testez leur intégrité.',es:'Gestiona archivos localmente y comprueba manifiestos SHA-256 e integridad por lotes.'},
      features:[['创建与解开归档','Create and extract archives','Créer et extraire','Archive erstellen und entpacken','Crear y extraer archivos','압축 파일 생성 및 해제','作成・展開','建立與解開封存檔'],['SHA-256 清单校验','SHA-256 manifest checks','Vérification SHA-256','SHA-256-Prüfung','Verificación SHA-256','SHA-256 목록 검사','SHA-256 検証','SHA-256 清單校驗'],['批量完整性测试','Batch integrity tests','Tests d’intégrité groupés','Integritätstests im Stapel','Pruebas por lotes','일괄 무결성 검사','一括整合性テスト','批次完整性測試']],
      facts:{en:['Archive creation, extraction, browsing, and hash verification are performed locally on your Mac. The app accesses files only within the scope authorized by macOS.','An archive password is used only for the current task and is not uploaded or shared by the app. Temporary processing files are used only as needed for the operation.','The app does not include analytics, advertising, tracking, or cloud-storage SDKs. Diagnostic information is shared only if you choose to contact support and include it.','A SHA-256 match confirms that content matches the listed hash; it does not prove who sent the file. Keep backups of important data before archive operations.'], zh:['归档创建、解压、浏览和哈希校验都在 Mac 本机完成。应用仅在 macOS 授权范围内访问文件。','归档密码只用于当前任务，应用不会上传或共享密码。临时处理文件仅在操作所需时使用。','应用不含分析、广告、追踪或云存储 SDK。只有你主动联系支持并附上诊断信息时，相关信息才会被分享。','SHA-256 匹配表示文件内容与清单哈希一致，不证明发送者身份。处理重要数据前请保留备份。']},
      faq:[['校验成功能证明发送者身份吗？','不能。它只说明文件内容与清单中的 SHA-256 值一致。'],['加密归档密码会被保存吗？','密码仅用于当前任务，不会发送给开发者。请勿通过邮件发送密码。'],['归档文件会上传吗？','不会。文件处理在本机完成。']]
    },
    'couple': {
      name:'Couple', platform:'iOS',
      tagline:{'zh-Hans':'两个人的小家，一起认真记录。','zh-Hant':'兩個人的小家，一起認真記錄。',en:'A private home for the everyday things you share.',ja:'ふたりの暮らしを、大切にていねいに記録。',ko:'둘만의 소중한 일상을 함께 기록하세요.',de:'Ein gemeinsames Zuhause für die Dinge, die ihr teilt.',fr:'Un foyer privé pour tout ce que vous partagez à deux.',es:'Un espacio íntimo para compartir el día a día en pareja.'},
      description:{'zh-Hans':'Couple 把账本、愿望、纪念日与日常资料放在一起，私密陪伴两人的共同生活。','zh-Hant':'Couple 將共同帳本、願望、紀念日與日常資料放在一起，私密陪伴兩人的共同生活。',en:'Couple for iPhone brings shared expenses, wishes, anniversaries, tasks, moods, and family records together.',ja:'家計簿・願い事・記念日・暮らしの記録をひとつにまとめ、ふたりの生活に寄り添います。',ko:'공동 가계부, 위시리스트, 기념일, 일상 기록을 안전하게 함께 관리하세요.',de:'Couple bringt gemeinsame Ausgaben, Wünsche, Jahrestage, Aufgaben und Dokumente sicher zusammen.',fr:'Couple réunit dépenses partagées, souhaits, anniversaires, humeurs et documents du foyer.',es:'Couple reúne gastos compartidos, deseos, aniversarios, tareas y recuerdos en pareja.'},
      features:[
        ['一起记账，慢慢攒钱','Shared Expenses & Savings','Comptabilité partagée','Gemeinsam sparen','Gastos compartidos','공동 가계부 & 저축','ふたりで家計簿・貯金','一起記帳，慢慢存錢'],
        ['记住彼此的小事','Remember Every Little Moment','Petits moments précieux','Kleine Momente festhalten','Momentos especiales','소중한 순간 기록','ふたりの思い出を記録','記住彼此的小事'],
        ['整理家庭重要资料','Organize Household Documents','Documents du foyer','Familienunterlagen ordnen','Documentos del hogar','가정 중요 자료 정리','家庭の重要書類を整理','整理家庭重要資料'],
        ['由你选择如何分享','Private iCloud Sharing','Partage privé iCloud','Private iCloud-Freigabe','Control total de privacidad','안전한 iCloud 공유','安心の iCloud プライベート共有','由你選擇如何分享']
      ],
      featuresDetail:[
        {
          title:{'zh-Hans':'一起记账，慢慢攒钱','zh-Hant':'一起記帳，慢慢存錢',en:'Shared Expenses & Budgets',ja:'ふたりで家計簿・予算',ko:'공동 가계부 및 예산',de:'Gemeinsame Finanzen',fr:'Comptabilité et budgets',es:'Finanzas y presupuestos'},
          desc:{'zh-Hans':'管理共同收支、预算、资产与储蓄目标，也能导出账本和年度回顾。','zh-Hant':'管理共同收支、預算、資產與儲蓄目標，也能匯出帳本和年度回顧。',en:'Manage shared expenses, budgets, assets, and savings goals with export and annual reviews.',ja:'共同の収支・予算・貯金目標を管理し、年間レポートの出力にも対応。',ko:'공동 수입·지출, 예산, 자산 및 저축 목표를 관리하고 리포트를 내보내세요.',de:'Gemeinsame Ausgaben, Budgets und Sparziele verwalten mit Jahresrückblick.',fr:'Gérez dépenses, budgets et épargne avec exports et bilans annuels.',es:'Gestiona gastos, presupuestos y metas de ahorro con resúmenes anuales.'}
        },
        {
          title:{'zh-Hans':'记住彼此的小事','zh-Hant':'記住彼此的小事',en:'Remember Every Little Detail',ja:'ふたりの小さな約束',ko:'둘만의 소소한 약속',de:'Kleine Momente festhalten',fr:'Chaque petit moment compte',es:'Los pequeños momentos'},
          desc:{'zh-Hans':'纪念日、愿望、共同待办与每日心情，让重要的日子和约定有处可放。','zh-Hant':'紀念日、願望、共同待辦與每日心情，讓重要的日子和約定有處可放。',en:'Anniversaries, wishlists, shared to-dos, and daily mood check-ins keep you connected.',ja:'記念日、願い事、共有ToDo、日々の気分を優しく記録。',ko:'기념일, 위시리스트, 공동 할 일, 기분 기록으로 일상을 더 가깝게.',de:'Jahrestage, Wünsche, To-dos und tägliche Stimmungen an einem Ort.',fr:'Anniversaires, vœux, tâches partagées et humeurs du jour.',es:'Aniversarios, listas de deseos, tareas compartidas y estados de ánimo.'}
        },
        {
          title:{'zh-Hans':'整理家庭重要资料','zh-Hant':'整理家庭重要資料',en:'Organize Household Records',ja:'暮らしの大切な情報',ko:'가정 중요 정보 정리',de:'Familienunterlagen ordnen',fr:'Documents importants du foyer',es:'Documentos clave del hogar'},
          desc:{'zh-Hans':'收好证件、旅行资料、保险与紧急信息；在保存和分享前仔细检查敏感内容。','zh-Hant':'收好證件、旅行資料、保險與緊急資訊；在保存和分享前仔細檢查敏感內容。',en:'Store IDs, travel plans, insurance, and emergency contacts with local encryption.',ja:'身分証、旅行計画、保険、緊急連絡先を端末内暗号化で安全に保管。',ko:'신분증, 여행 일정, 보험, 비상 연락처를 로컬 암호화로 안전하게 보관하세요.',de:'Ausweise, Reisepläne, Versicherungen und Notfallkontakte lokal verschlüsselt sichern.',fr:'Conservez pièces d’identité, voyages, assurances et contacts d’urgence.',es:'Guarda documentos, planes de viaje, seguros y contactos de emergencia.'}
        },
        {
          title:{'zh-Hans':'由你选择如何分享','zh-Hant':'由你選擇如何分享',en:'You Choose How to Share',ja:'安心のプライベート共有',ko:'원하는 방식으로 안전하게',de:'Freigabe unter deiner Kontrolle',fr:'Vous maîtrisez vos partages',es:'Tú decides qué compartir'},
          desc:{'zh-Hans':'通过 iCloud 连接共同小家，按需开启位置与提醒，在设置中管理数据与删除。','zh-Hant':'透過 iCloud 連接共同小家，按需開啟位置與提醒，在設定中管理資料與刪除。',en:'Connect via private iCloud, enable location optionally, and manage or erase data anytime.',ja:'iCloud 共有でつながり、位置情報や通知は必要な時だけオンにできます。',ko:'iCloud로 연결하고 위치 공유는 필요할 때만 켜고 끌 수 있습니다.',de:'Verbindung über iCloud, optionale Standortfreigabe und jederzeit löschbare Daten.',fr:'Connexion via iCloud privé, localisation optionnelle et suppression complète à tout moment.',es:'Conéctate mediante iCloud privado, con ubicación opcional y borrado cuando quieras.'}
        }
      ],
      factStrip:{
        'zh-Hans':['端侧与私有 iCloud','无自建数据服务器','无广告与商业追踪'],
        'zh-Hant':['端側與私有 iCloud','無自建資料伺服器','無廣告與商業追蹤'],
        en:['On-Device & Private iCloud','No Developer Server','No Ads or Tracking'],
        ja:['端末内 & プライベート iCloud','独自サーバーなし','広告・追跡なし'],
        ko:['기기 내 & 개인 iCloud','자체 서버 없음','광고 및 추적 없음'],
        de:['Lokal & Private iCloud','Keine Entwickler-Server','Keine Werbung/Tracking'],
        fr:['En local & iCloud privé','Aucun serveur tiers','Sans pub ni suivi'],
        es:['Local y privado en iCloud','Sin servidores propios','Sin anuncios ni rastreo']
      },
      privacySummary:{
        'zh-Hans':'Couple 不设独立账户系统，不运营自建数据服务器。你的小家数据通过 Apple CloudKit 私密同步与备份，始终由你掌控。',
        'zh-Hant':'Couple 不設獨立帳號系統，不營運自建資料伺服器。你的小家資料透過 Apple CloudKit 私密同步與備份，始終由你掌控。',
        en:'Couple operates no custom user database or tracking backend. Household records sync and back up privately via Apple CloudKit under your full control.',
        ja:'Couple は独自のアカウントシステムやサーバーを持っていません。小家のデータは Apple CloudKit を通じてプライベートに同期・保護されます。',
        ko:'Couple은 별도의 계정 시스템이나 자체 서버를 운영하지 않습니다. 데이터는 Apple CloudKit을 통해 안전하게 동기화되고 백업됩니다.',
        de:'Couple betreibt keine eigenen Benutzerkonten oder Server. Haushaltsdaten synchronisieren sich privat über Apple CloudKit.',
        fr:'Couple n’exploite aucun serveur d’utilisateurs ni compte tiers. Les données du foyer sont synchronisées en privé via Apple CloudKit.',
        es:'Couple no dispone de cuentas externas ni servidores propios. Los datos se sincronizan de forma privada a través de Apple CloudKit.'
      },
      customFaq:{
        'zh-Hans':[
          {q:'如何连接两个人的小家？',a:'两台 iPhone 需登录各自 Apple 账户并开启 Couple 的 iCloud。创建者在绑定页分享专属二维码图片，对方使用相机扫描或从相册选择图片即可完成端对端安全绑定。'},
          {q:'为什么同步、备份或位置暂时没有更新？',a:'请先检查网络、Apple 账户和 iCloud 云盘状态，再在 App 内下拉刷新。定位受系统权限与省电机制限制，非实时紧急定位，仅供伴侣报平安。'},
          {q:'如何彻底删除数据？',a:'在 App 内打开“我们 → 隐私与安全 → 删除数据”，按提示确认即可删除小家、CloudKit 共享记录、个人 iCloud 备份与本机所有数据。'},
          {q:'敏感证件号码与扫描件怎样保护？',a:'单独填写的完整证件号码在本机使用 AES-GCM 高强度加密，密钥安全保存在设备钥匙串中，不随常规备份泄漏。'}
        ],
        'zh-Hant':[
          {q:'如何連接兩個人的小家？',a:'兩台 iPhone 需登入各自 Apple 帳號並開啟 Couple 的 iCloud。創建者在綁定頁分享專屬二維碼圖片，對方使用相機掃描或從相簿選擇圖片即可完成安全綁定。'},
          {q:'為什麼同步、備份或位置暫時沒有更新？',a:'請先檢查網路、Apple 帳號和 iCloud 雲碟狀態，再於 App 內下拉重新整理。定位受系統權限與省電機制限制，非即時緊急定位。'},
          {q:'如何徹底刪除資料？',a:'在 App 內開啟「我們 → 隱私與安全 → 刪除資料」，依提示確認即可刪除小家、CloudKit 共享紀錄、個人 iCloud 備份與本機所有資料。'},
          {q:'敏感證件號碼與掃描檔如何保護？',a:'單獨填寫的完整證件號碼在本機使用 AES-GCM 高強度加密，金鑰安全保存在裝置鑰匙圈中，不隨常規備份外洩。'}
        ],
        en:[
          {q:'How do partners connect the household?',a:'Both iPhones sign in to their Apple Accounts with Couple iCloud enabled. The creator shares a private QR image; the partner scans or selects it from Photos to link securely via CloudKit.'},
          {q:'Why is sync, backup, or location delayed?',a:'Check your internet connection, Apple Account, and iCloud Drive, then pull down to refresh. Location depends on iOS battery and permission policies and is not intended for emergency dispatch.'},
          {q:'How do I permanently delete data?',a:'Go to We → Privacy & Security → Delete Data. Follow the prompts to remove the shared household, CloudKit records, personal iCloud backups, and all local files.'},
          {q:'How are sensitive document numbers protected?',a:'Full document numbers are encrypted on-device using AES-GCM with keys stored in the iOS Keychain, shielded from ordinary backup extraction.'}
        ]
      },
      faq:[
        ['如何连接两个人的小家？','两台 iPhone 需登录各自 Apple 账户并开启 Couple 的 iCloud。创建者在绑定页分享专属二维码图片，对方使用相机扫描或从相册选择图片即可完成端对端安全绑定。'],
        ['为什么同步、备份或位置暂时没有更新？','请先检查网络、Apple 账户和 iCloud 云盘状态，再在 App 内下拉刷新。定位受系统权限与省电机制限制，非实时紧急定位，仅供伴侣报平安。'],
        ['如何彻底删除数据？','在 App 内打开“我们 → 隐私与安全 → 删除数据”，按提示确认即可删除小家、CloudKit 共享记录、个人 iCloud 备份与本机所有数据。'],
        ['敏感证件号码与扫描件怎样保护？','单独填写的完整证件号码在本机使用 AES-GCM 高强度加密，密钥安全保存在设备钥匙串中，不随常规备份泄漏。']
      ]
    },
        'dropsqueeze': {
      name: 'DropSqueeze',
      tagline: {
        'zh-Hans': '静默压缩截图与录屏，剪贴板原地瘦身。',
        'zh-Hant': '安靜壓縮截圖與錄影，剪貼簿原地瘦身。',
        en: 'Silently compress screenshots, screen recordings, and clipboard media.',
        ja: 'スクリーンショットと画面録画を静かに圧縮、クリップボードも軽量化。',
        ko: '스크린샷과 화면 녹화를 무음 압축하고 클립보드를 가볍게 유지하세요.',
        de: 'Screenshots und Bildschirmaufnahmen leise komprimieren, Zwischenablage optimieren.',
        fr: 'Compressez silencieusement vos captures, enregistrements et presse-papiers.',
        es: 'Comprime capturas y grabaciones silenciosamente y optimiza el portapapeles.'
      },
      description: {
        'zh-Hans': '在 Mac 本地极速无损压缩图片与视频，自动监听剪贴板与指定文件夹，保护原始文件与隐私元数据。',
        'zh-Hant': '在 Mac 本機極速無損壓縮圖片與影片，自動監聽剪貼簿與指定資料夾，保護原始檔案與隱私中繼資料。',
        en: 'Lightning-fast on-device compression for images and video on Mac. Automatically watches clipboard and folders while protecting source files and metadata.',
        ja: 'Mac 上で画像と動画を高速圧縮。クリップボードと監視フォルダを自動処理し、元ファイルとメタデータを保護。',
        ko: 'Mac에서 이미지와 동영상을 초고속 압축합니다. 클립보드와 감시 폴더를 자동 처리하며 원본과 메타데이터를 보호합니다.',
        de: 'Blitzschnelle lokale Medienkompression auf dem Mac. Überwacht Zwischenablage und Ordner, schützt Originale und Metadaten.',
        fr: 'Compression ultra-rapide sur Mac pour images et vidéos. Surveille le presse-papiers et vos dossiers en préservant originaux et métadonnées.',
        es: 'Compresión ultrarrápida en el Mac para imágenes y vídeo. Supervisa el portapapeles y carpetas protegiendo los originales y metadatos.'
      },
      features: [
        [
          '剪贴板静默瘦身',
          'Silent Clipboard Compression',
          'Compression silencieuse du presse-papiers',
          'Leise Zwischenablage-Optimierung',
          'Compresión silenciosa del portapapeles',
          '클립보드 무음 자동 압축',
          'クリップボード自動軽量化',
          '剪貼簿安靜瘦身'
        ],
        [
          '文件夹自动化监控',
          'Folder Automation Watcher',
          'Surveillance automatisée des dossiers',
          'Automatische Ordnerüberwachung',
          'Vigilancia automática de carpetas',
          '폴더 자동 감시 및 레시피',
          'フォルダ自動監視とレシピ',
          '資料夾自動化監控'
        ],
        [
          '悬浮拖拽黑洞与转码',
          'Floating Drop Zone & Transcoding',
          'Zone de glisser-déposer et transcodage',
          'Schwebende Drop-Zone & Transkodierung',
          'Zona de soltar flotante y transcodificación',
          '플로팅 드롭존 및 변환',
          'フローティングドロップ＆形式変換',
          '懸浮拖曳與轉碼'
        ],
        [
          '纯本地运算与元数据脱敏',
          '100% On-Device & Metadata Stripping',
          '100% sur l’appareil et retrait des métadonnées',
          '100% Lokal & Metadaten-Bereinigung',
          '100% local y eliminación de metadatos',
          '100% 로컬 처리 및 메타데이터 삭제',
          '完全ローカル処理＆メタデータ消去',
          '純本地運算與中繼資料脫敏'
        ]
      ],
      featuresDetail: [
        {
          title: {
            'zh-Hans': '剪贴板静默瘦身',
            'zh-Hant': '剪貼簿安靜瘦身',
            en: 'Silent Clipboard Compression',
            ja: 'クリップボード自動軽量化',
            ko: '클립보드 무음 자동 압축',
            de: 'Leise Zwischenablage-Optimierung',
            fr: 'Compression silencieuse du presse-papiers',
            es: 'Compresión silenciosa del portapapeles'
          },
          desc: {
            'zh-Hans': '截图后无需额外操作，自动压缩剪贴板中的 PNG、JPEG、HEIC、WebP 等图像，防循环标记杜绝死循环。',
            'zh-Hant': '截圖後無需額外操作，自動壓縮剪貼簿中的 PNG、JPEG、HEIC、WebP 等圖片，防循環標記杜絕死循環。',
            en: 'Compresses newly copied screenshots in the background without interrupting your flow, with private anti-loop protection.',
            ja: 'スクショ撮影後、余計な操作なしで PNG/JPEG/HEIC/WebP を自動圧縮。ループ防止設計で安心。',
            ko: '스크린샷 복사 시 백그라운드에서 PNG, JPEG, HEIC, WebP 이미지를 자동 압축하며 루프 방지 태그가 적용됩니다.',
            de: 'Komprimiert kopierte Bilder im Hintergrund ohne Arbeitsunterbrechung, geschützt vor Endlosschleifen.',
            fr: 'Compresse automatiquement les images copiées en arrière-plan sans interrompre votre travail, avec protection anti-boucle.',
            es: 'Comprime imágenes copiadas en segundo plano sin interrumpir tu flujo de trabajo, con protección antibucles.'
          }
        },
        {
          title: {
            'zh-Hans': '文件夹自动化监控',
            'zh-Hant': '資料夾自動化監控',
            en: 'Folder Automation Watcher',
            ja: 'フォルダ自動監視とレシピ',
            ko: '폴더 자동 감시 및 레시피',
            de: 'Automatische Ordnerüberwachung',
            fr: 'Surveillance automatisée des dossiers',
            es: 'Vigilancia automática de carpetas'
          },
          desc: {
            'zh-Hans': '监控桌面或指定截图录屏目录，自定义命名与压缩配方，原文件始终完好保留。',
            'zh-Hant': '監控桌面或指定截圖錄影目錄，自訂命名與壓縮配方，原始檔案一律完好保留。',
            en: 'Watches desktop or custom folders with security-scoped bookmarks, applying custom compression recipes while keeping sources intact.',
            ja: 'デスクトップや指定フォルダを監視し、好みのレシピで自動圧縮。元ファイルは常に安全に保持されます。',
            ko: '바탕화면이나 스크린샷 폴더를 감시하여 사용자 정의 레시피로 자동 처리하며 원본은 그대로 보존합니다.',
            de: 'Überwacht Schreibtisch oder Zielordner mit Lesezeichen und eigenen Rezepten, während Originale unberührt bleiben.',
            fr: 'Surveille le Bureau ou des dossiers choisis et applique vos règles tout en préservant intacts vos fichiers sources.',
            es: 'Supervisa el escritorio o carpetas específicas aplicando recetas personalizadas sin modificar los archivos de origen.'
          }
        },
        {
          title: {
            'zh-Hans': '悬浮拖拽黑洞与转码',
            'zh-Hant': '懸浮拖曳與轉碼',
            en: 'Floating Drop Zone & Transcoding',
            ja: 'フローティングドロップ＆形式変換',
            ko: '플로팅 드롭존 및 변환',
            de: 'Schwebende Drop-Zone & Transkodierung',
            fr: 'Zone de glisser-déposer et transcodage',
            es: 'Zona de soltar flotante y transcodificación'
          },
          desc: {
            'zh-Hans': '顶部边缘悬浮压缩舱，拖拽即压；支持 MOV 转 MP4/GIF、WebP 转换与音频提取。',
            'zh-Hant': '頂部邊緣懸浮壓縮艙，拖曳即壓；支援 MOV 轉 MP4/GIF、WebP 轉換與音訊擷取。',
            en: 'Floating drop bar near screen edge. Converts MOV to MP4 or high-framerate GIF, exports WebP, and extracts audio.',
            ja: '画面上部に浮かぶドロップゾーンで素早く圧縮。MOVからMP4/GIFへの変換や音声抽出にも対応。',
            ko: '화면 상단 플로팅 드롭 영역에 끌어놓아 즉시 압축하세요. MOV를 MP4/GIF로 변환하고 오디오 추출도 지원합니다.',
            de: 'Schwebende Drop-Zone am oberen Bildschirmrand. Konvertiert MOV zu MP4/GIF, unterstützt WebP und Audio-Extraktion.',
            fr: 'Barre de dépôt flottante en haut de l’écran. Convertit MOV en MP4/GIF, produit du WebP et extrait les pistes audio.',
            es: 'Zona flotante en el borde superior. Convierte MOV a MP4/GIF fluido, genera WebP y extrae pistas de audio.'
          }
        },
        {
          title: {
            'zh-Hans': '纯本地运算与元数据脱敏',
            'zh-Hant': '純本地運算與中繼資料脫敏',
            en: '100% On-Device & Metadata Stripping',
            ja: '完全ローカル処理＆メタデータ消去',
            ko: '100% 로컬 처리 및 메타데이터 삭제',
            de: '100% Lokal & Metadaten-Bereinigung',
            fr: '100% sur l’appareil et retrait des métadonnées',
            es: '100% local y eliminación de metadatos'
          },
          desc: {
            'zh-Hans': '所有压缩与硬件编码在 Mac 本机完成，可选自动剥离 EXIF 与 GPS 拍摄定位，零云端上传。',
            'zh-Hant': '所有壓縮與硬體編碼在 Mac 本機完成，可選自動剝離 EXIF 與 GPS 拍攝定位，零雲端上傳。',
            en: 'All processing and hardware acceleration run locally on your Mac, with optional EXIF/GPS scrubbing and zero telemetry.',
            ja: 'ハードウェアアクセラレーションを含む全処理を Mac 本機で完結。EXIF・GPS位置情報の自動消去に対応。',
            ko: '하드웨어 가속을 포함한 모든 처리가 Mac 로컬에서 실행되며 EXIF/GPS 위치 정보 자동 제거를 지원합니다.',
            de: 'Sämtliche Kompression läuft lokal auf dem Mac. Optionales Entfernen von EXIF- und GPS-Standortdaten ohne Telemetrie.',
            fr: 'Tous les calculs s’effectuent en local sur votre Mac avec option de suppression des données EXIF et GPS.',
            es: 'Todo el procesamiento se realiza en local en tu Mac, con opción de eliminar datos EXIF y ubicación GPS.'
          }
        }
      ],
      factStrip: {
        'zh-Hans': ['100% 本地极速运算', '零云端上传与追踪', '源文件严格保护'],
        'zh-Hant': ['100% 本地極速運算', '零雲端上傳與追蹤', '來源檔案嚴格保護'],
        en: ['100% On-Device Processing', 'Zero Cloud Uploads or Tracking', 'Source Files Always Preserved'],
        ja: ['100% ローカル高速処理', 'クラウド送信・追跡なし', '元ファイルを厳格保護'],
        ko: ['100% 로컬 초고속 처리', '클라우드 업로드 및 추적 없음', '원본 파일 안전 보존'],
        de: ['100% Lokale Verarbeitung', 'Keine Cloud-Uploads oder Tracking', 'Originale stets geschützt'],
        fr: ['Traitement 100% local', 'Zéro transfert cloud ni pistage', 'Fichiers sources préservés'],
        es: ['Procesamiento 100% local', 'Cero envíos a la nube o rastreo', 'Archivos originales protegidos']
      },
      privacySummary: {
        'zh-Hans': 'DropSqueeze 纯端侧在你的 Mac 本地运行。剪贴板、截图、视频与压缩历史绝不上传至任何服务器，也无广告追踪 SDK。',
        'zh-Hant': 'DropSqueeze 純端側在你的 Mac 本機執行。剪貼簿、截圖、影片與壓縮歷史絕不上傳至任何伺服器，亦無廣告追蹤 SDK。',
        en: 'DropSqueeze operates strictly on-device on your Mac. Clipboard data, screenshots, videos, and compression history are never sent to any server, with zero advertising or analytics tracking.',
        ja: 'DropSqueeze は Mac 端末内のみで動作します。クリップボード、画像、動画、履歴がサーバーに送信されることはなく、追跡機能もありません。',
        ko: 'DropSqueeze는 Mac 로컬에서만 실행됩니다. 클립보드, 스크린샷, 동영상 및 압축 기록은 서버로 전송되지 않으며 광고 추적도 없습니다.',
        de: 'DropSqueeze läuft ausschließlich lokal auf deinem Mac. Zwischenablage, Screenshots, Videos und Verläufe werden nicht hochgeladen, ohne Tracking.',
        fr: 'DropSqueeze fonctionne exclusivement en local sur votre Mac. Presse-papiers, captures, vidéos et historique ne sont jamais transmis à un serveur.',
        es: 'DropSqueeze funciona únicamente de forma local en tu Mac. El portapapeles, capturas, vídeos e historial nunca se envían a servidores.'
      },
      facts: {
        en: [
          'All image and video compression, hardware video encoding, on-device OCR, and clipboard handling run 100% locally on your Mac. No files or media bytes are uploaded to remote servers.',
          'Clipboard monitoring safely replaces contents only when a smaller file is produced, guarded with an anti-loop marker. The clipboard collection stays in memory and is never written to disk.',
          'Watched folders and output locations are persisted solely via macOS security-scoped bookmarks within the App Sandbox. Source files are strictly preserved and never overwritten.',
          'Offers optional removal of EXIF, GPS locations, and camera metadata upon compression. No user accounts, advertising SDKs, or third-party tracking.'
        ],
        zh: [
          '所有图片有损/无损压缩、视频硬件编码、Vision 端侧 OCR 提取及剪贴板处理全部在 Mac 本机完成，绝不向外部服务器上传任何媒体内容。',
          '剪贴板监听仅在产生更小副本时安全替换，防循环标记杜绝死循环；临时剪贴板历史仅保存在会话内存中，退出即销毁，不落盘。',
          '监控文件夹和输出目录仅通过 macOS 安全作用域书签（Security-Scoped Bookmarks）持久化；源文件始终保留，绝不擅自覆盖或删除原图。',
          '支持在压缩时主动抹除 EXIF、GPS 拍摄地点与相机信息；无开发者账户系统、无第三方统计或广告追踪 SDK。'
        ]
      },
      customFaq: {
        'zh-Hans': [
          { q: '剪贴板和截图视频会被上传到云端吗？', a: '绝不会。所有压缩算法、图像编码与系统 API 调用都在您的 Mac 本机完成，应用无任何网络上传代码，也无自建服务器。' },
          { q: '压缩时会损坏或覆盖我的原始文件吗？', a: '不会。DropSqueeze 严格遵循非破坏性原则，默认在原文件旁创建独立压缩副本，源文件完好无损。' },
          { q: '文件夹自动监控是如何在沙盒中工作的？', a: '通过系统 NSOpenPanel 授权后，应用使用 Security-Scoped Bookmark 本地记录目录访问权。您可随时暂停监控或移除文件夹。' },
          { q: '如何管理和清空历史记录与本地数据？', a: '在设置中点击“清空历史记录”即可一键删除所有统计与处理历史；偏好设置也仅存储在本地 UserDefaults。' }
        ],
        'zh-Hant': [
          { q: '剪貼簿與截圖影片會被上傳至雲端嗎？', a: '絕不會。所有壓縮演算法、圖片編碼與系統 API 調用均在您的 Mac 本機完成，App 完全不具備任何網路傳送代碼。' },
          { q: '壓縮時會損壞或覆蓋我的原始檔案嗎？', a: '不會。DropSqueeze 嚴格遵循非破壞性原則，預設在原檔案旁建立獨立壓縮副本，來源檔案完好如初。' },
          { q: '資料夾自動監控是如何在沙盒中運作的？', a: '透過系統 NSOpenPanel 授權後，App 使用 Security-Scoped Bookmark 本地記錄存取權。您可隨時暫停監控或移除資料夾。' },
          { q: '如何管理與清除歷史紀錄及本機資料？', a: '在設定中點選「清空歷史紀錄」即可一鍵清除所有統計與處理歷程；偏好設定亦僅儲存於本機 UserDefaults。' }
        ],
        en: [
          { q: 'Are my clipboard media or screenshots uploaded to the cloud?', a: 'Never. All compression algorithms, hardware encoders, and system APIs run 100% locally on your Mac. The app has no server backend or data uploading mechanism.' },
          { q: 'Will compression overwrite or damage my original files?', a: 'No. DropSqueeze strictly preserves your source files and creates sidecar compressed copies by default. Original files remain completely untouched.' },
          { q: 'How does folder automation work under macOS Sandbox?', a: 'Folder access is granted via NSOpenPanel and stored securely on-device using Security-Scoped Bookmarks. You can pause or revoke access at any time.' },
          { q: 'How do I clear compression history and saved statistics?', a: 'Go to Settings and click Clear History to permanently delete all local activity logs and savings counters from local UserDefaults.' }
        ]
      },
      faq: [
        ['剪贴板和截图视频会被上传到云端吗？', '绝不会。所有压缩算法、图像编码与系统 API 调用都在您的 Mac 本机完成，应用无任何网络上传代码，也无自建服务器。'],
        ['压缩时会损坏或覆盖我的原始文件吗？', '不会。DropSqueeze 严格遵循非破坏性原则，默认在原文件旁创建独立压缩副本，源文件完好无损。'],
        ['文件夹自动监控是如何在沙盒中工作的？', '通过系统 NSOpenPanel 授权后，应用使用 Security-Scoped Bookmark 本地记录目录访问权。您可随时暂停监控或移除文件夹。'],
        ['如何管理和清空历史记录与本地数据？', '在设置中点击“清空历史记录”即可一键删除所有统计与处理历史；偏好设置也仅存储在本地 UserDefaults。']
      ]
    },
'shelflife': {
      name:'ShelfLife', platform:'iOS',
      tagline:{
        'zh-Hans':'家庭器物与保修耗材管家',
        'zh-Hant':'家庭器物與保固耗材管家',
        en:'Smart Tracker for Warranties, Consumables & Manuals',
        ja:'家電の保証期限・消耗品寿命・説明書をスマート管理',
        ko:'가전제품 보증기간, 소모품 수명 및 설명서 스마트 관리',
        de:'Garantiefristen, Verbrauchsmaterialien und Anleitungen im Griff',
        fr:'Suivi des garanties, pièces d’usure et notices d’appareils',
        es:'Control de garantías, consumibles y manuales del hogar'
      },
      description:{
        'zh-Hans':'离线识别发票小票与电器铭牌，追踪保修到期、滤芯更换周期，整理说明书与维保记录。',
        'zh-Hant':'離線識別發票收據與電器銘牌，追蹤保固到期、濾網更換週期，整理說明書與維修紀錄。',
        en:'Scan receipts and appliance labels on-device. Track warranty dates, filter replacement intervals, and manuals.',
        ja:'レシートや銘板を端末内でスキャン。保証期限やフィルター交換時期、説明書を一元管理。',
        ko:'영수증과 라벨을 기기 내에서 스캔하여 보증 만료일, 필터 교체 주기, 설명서를 관리하세요.',
        de:'Belege und Typenschilder lokal scannen. Garantiefristen, Filterwechsel und Handbücher verwalten.',
        fr:'Scannez vos reçus et étiquettes en local. Suivez garanties, pièces d’usure et notices.',
        es:'Escanea recibos y etiquetas en local. Controla garantías, cambio de filtros y manuales.'
      },
      features:[
        ['拍照与条码极速建档','Instant Scan & Barcode Entry','Saisie rapide par photo','Schnellerfassung per Foto','Registro instantáneo con fotos','사진 및 바코드 즉시 등록','写真・バーコードで瞬時登録','拍照與條碼極速建檔'],
        ['保修追踪与日均成本','Warranty & Daily Cost','Garantie et coût d’usage','Garantie-Countdown & Tageskosten','Garantía y coste por día','보증 카운트다운 및 일일 비용','保証追跡と日割りコスト','保固追蹤與日均成本'],
        ['滤芯耗材与一键重置','Consumable Lifespans & Reset','Consommables et reset express','Verbrauchsteile & Widget-Reset','Consumibles y reinicio rápido','소모품 수명 및 원탭 리셋','消耗品寿命とワンタップリセット','濾網耗材與一鍵重設'],
        ['说明书搜索与家庭共享','Manual Search & Family Sync','Notices PDF et partage privé','Handbuchsuche & Freigabe','Manuales y sincronización familiar','설명서 검색 및 가족 공유','説明書検索 & ファミリー共有','說明書檢索與家庭共享']
      ],
      featuresDetail:[
        {
          title:{'zh-Hans':'拍照与条码极速建档','zh-Hant':'拍照與條碼極速建檔',en:'Instant Scan & Barcode Entry',ja:'写真・バーコードで瞬時登録',ko:'사진 및 바코드 즉시 등록',de:'Schnellerfassung per Foto & Barcode',fr:'Saisie rapide par photo et code-barres',es:'Registro instantáneo con fotos y códigos'},
          desc:{'zh-Hans':'Apple Vision 离线识别小票、订单与铭牌，自动提取购买日、金额与序列号；条码本地比对。','zh-Hant':'Apple Vision 離線識別收據、訂單與銘牌，自動擷取購買日、金額與序號；條碼本機比對。',en:'On-device Apple Vision OCR recognizes receipts and serial numbers. Barcodes match against a verified local catalog.',ja:'Apple Vision でレシートや銘板を端末内認識し、購入日やシリアル番号を抽出。バーコードもローカル照合。',ko:'Apple Vision 기반 온디바이스 OCR로 영수증과 시리얼 번호를 자동 인식하고 바코드를 로컬 조회합니다.',de:'Lokale Apple Vision OCR erkennt Belege und Seriennummern. Barcodes werden mit einem lokalen Katalog abgeglichen.',fr:'Apple Vision reconnaît reçus et numéros de série en local. Codes-barres vérifiés sans requête externe.',es:'Apple Vision OCR procesa recibos y números de serie localmente. Códigos de barras validados sin conexión.'}
        },
        {
          title:{'zh-Hans':'保修追踪与日均成本','zh-Hant':'保固追蹤與日均成本',en:'Warranty Countdown & Daily Cost',ja:'保証カウントダウンと日割りコスト',ko:'보증 카운트다운 및 일일 사용 비용',de:'Garantie-Countdown & Tageskosten',fr:'Compte à rebours et coût quotidien',es:'Cuenta atrás de garantía y coste diario'},
          desc:{'zh-Hans':'清晰掌握退货期与保修剩余天数，实时计算器物日均使用成本与折旧估值。','zh-Hant':'清楚掌握退貨期與保固剩餘天數，即時計算器物日均使用成本與折舊估值。',en:'Track return windows and warranty expiration, with dynamic daily cost-of-use and depreciation calculations.',ja:'返品期限と保証満了日を把握し、日割り使用コストや減価償却を自動算出。',ko:'반품 기한과 보증 만료일을 추적하고 하루 평균 사용 비용과 감가상각을 계산합니다.',de:'Rückgabefristen und Garantieablauf verfolgen, inklusive täglicher Nutzungskosten und Abschreibung.',fr:'Suivez fenêtres de retour et garanties, avec calcul dynamique du coût d’usage par jour.',es:'Controla plazos de devolución y fin de garantía, calculando el coste de uso diario y amortización.'}
        },
        {
          title:{'zh-Hans':'滤芯耗材与一键重置','zh-Hant':'濾網耗材與一鍵重設',en:'Consumable Lifespans & One-Tap Reset',ja:'消耗品寿命とワンタップリセット',ko:'소모품 수명 및 원탭 리셋',de:'Verbrauchsteile & Widget-Reset',fr:'Durée des consommables et reset express',es:'Vida útil de consumibles y reinicio rápido'},
          desc:{'zh-Hans':'滤芯、刷头、猫砂、机油周期环形进度条显示，支持桌面小组件一键重置并记录开销。','zh-Hant':'濾網、刷頭、貓砂、機油週期環形進度條顯示，支援桌面小工具一鍵重設並記錄開銷。',en:'Circular lifespans for water filters, brush heads, pet care, and maintenance with interactive home-screen resets.',ja:'浄水器フィルターや歯ブラシ等の交換周期を円形ゲージで可視化。ウィジェットから即座にリセット。',ko:'정수기 필터, 칫솔모 등의 교체 주기를 원형 게이지로 표시하고 위젯에서 즉시 리셋하세요.',de:'Kreisanzeigen für Wasserfilter, Bürsten und Wartung mit direktem Reset über interaktive Widgets.',fr:'Jauges circulaires pour filtres et brosses, réinitialisables en un geste via widget interactif.',es:'Indicadores para filtros de agua, cepillos y recambios con reinicio directo desde el widget de inicio.'}
        },
        {
          title:{'zh-Hans':'说明书检索与家庭共享','zh-Hant':'說明書檢索與家庭共享',en:'Manual Search & Private Family Sync',ja:'説明書全文検索 & ファミリー共有',ko:'설명서 검색 및 가족 프라이빗 공유',de:'Handbuchsuche & Private Familienfreigabe',fr:'Recherche de notices et partage privé',es:'Búsqueda de manuales y sincronización familiar'},
          desc:{'zh-Hans':'PDF 说明书全文故障码速查；支持私有 iCloud 同步与基于 CloudKit 的受邀家庭共享。','zh-Hant':'PDF 說明書全文故障代碼速查；支援私有 iCloud 同步與基於 CloudKit 的受邀家庭共享。',en:'Search PDF manuals for error codes. Sync securely across personal devices and invite family members via CloudKit.',ja:'PDF 取扱説明書のエラーコードを瞬時に検索。プライベート iCloud と安全なファミリー共有に対応。',ko:'PDF 설명서에서 에러 코드를 빠르게 검색하세요. 개인 iCloud 및 안전한 CloudKit 가족 공유 지원.',de:'PDF-Handbücher nach Fehlercodes durchsuchen. Sichere Synchronisierung via iCloud und CloudKit-Freigabe.',fr:'Trouvez les codes d’erreur dans vos manuels PDF. Synchronisation sécurisée via iCloud et CloudKit.',es:'Busca códigos de error en manuales PDF. Sincronización segura mediante iCloud y CloudKit.'}
        }
      ],
      factStrip:{
        'zh-Hans':['离线识别与条码','私有 iCloud 同步','无广告与跟踪'],
        'zh-Hant':['離線識別與條碼','私有 iCloud 同步','無廣告與追蹤'],
        en:['On-Device OCR & Vision','Private iCloud Sync','No Ads or Tracking'],
        ja:['端末内 OCR & バーコード','プライベート iCloud 同期','広告・追跡なし'],
        ko:['온디바이스 OCR & 바코드','개인 iCloud 동기화','광고 및 추적 없음'],
        de:['Lokale OCR & Barcode','Private iCloud-Synchronisation','Keine Werbung/Tracking'],
        fr:['OCR & vision en local','iCloud privé','Sans pub ni suivi'],
        es:['OCR y códigos en local','iCloud privado','Sin anuncios ni rastreo']
      },
      privacySummary:{
        'zh-Hans':'ShelfLife 纯离线优先运行，不运营自建数据服务器。小票识别与条码查询均在设备本地完成，资料与附件仅保存在本机及你的个人私有 iCloud / CloudKit 共享空间中。',
        'zh-Hant':'ShelfLife 純離線優先運作，不營運自建資料伺服器。收據識別與條碼查詢均在裝置本機完成，資料與附件僅儲存在本機及你的個人私有 iCloud / CloudKit 共享空間中。',
        en:'ShelfLife works offline-first with no developer server. Receipt recognition and barcode lookups stay on-device; records and attachments sync only via your private Apple iCloud and optional CloudKit sharing.',
        ja:'ShelfLife はオフライン優先で動作し、独自サーバーを持ちません。レシート認識やバーコード照合は端末内で行われ、データは端末内およびプライベート iCloud / CloudKit にのみ保管されます。',
        ko:'ShelfLife는 오프라인 우선으로 작동하며 개발자 서버를 운영하지 않습니다. 영수증 인식 및 바코드 조회는 기기 내에서 처리되며, 데이터는 기기 및 개인 iCloud / CloudKit에만 보관됩니다.',
        de:'ShelfLife arbeitet offline-first ohne Entwickler-Server. Beleg- und Barcode-Erkennung erfolgen lokal; Daten und Anhänge verbleiben auf dem Gerät oder in Ihrer privaten iCloud / CloudKit.',
        fr:'ShelfLife fonctionne en priorité hors ligne sans serveur dédié. Reconnaissance des reçus et codes-barres en local ; données et pièces jointes restent sur l’appareil et votre iCloud privé.',
        es:'ShelfLife funciona sin conexión y sin servidores externos. El escaneo de recibos y códigos se realiza en local; tus datos y adjuntos solo se guardan en el dispositivo y en tu iCloud privado.'
      },
      customFaq:{
        'zh-Hans':[
          {q:'小票识别和条码查询会上传我的文件吗？',a:'不会。ShelfLife 使用 Apple Vision 框架完全在你的 iPhone 本地进行文本与铭牌识别，条码也仅在本地内置已核实的小型离线库中比对，未匹配的条码仅保存在你的本地档案中供手动补全，不会上传到任何外部商品目录或开发者服务器。'},
          {q:'个人 iCloud 同步与家庭共享是如何运作的？',a:'个人同步使用 Apple CloudKit 私有数据库，仅与你的 Apple 账户关联；家庭共享通过系统的共享面板邀请家人，资料以端到端方式在成员间同步，开发者不运营任何中转服务器，也无法查看你的物品与发票内容。'},
          {q:'如何备份和彻底删除我的数据？',a:'你可以在设置中随时创建带密码加密的完整本地备份文件（.zip）。需要删除时，在 App 内删除物品会同步清除本地附件与云端记录；若要彻底清空，删除 App 即可清除本机容器内所有数据。'},
          {q:'提醒事项与通知是如何工作的？',a:'ShelfLife 在获得权限后，仅在你的设备本地安排最多最近 30 项临期保修、耗材更换或维护提醒；若开启 Apple 提醒事项同步，会在专属的“ShelfLife”列表中同步，绝不会修改你的其他日常事项。'}
        ],
        'zh-Hant':[
          {q:'收據識別與條碼查詢會上傳我的檔案嗎？',a:'不會。ShelfLife 使用 Apple Vision 框架完全在你的 iPhone 本機進行文字與銘牌識別，條碼也僅在本地內建已核實的小型離線庫中比對，未比對的條碼僅儲存在你的本機檔案中供手動補全，不會上傳到任何外部商品目錄或開發者伺服器。'},
          {q:'個人 iCloud 同步與家庭共享是如何運作的？',a:'個人同步使用 Apple CloudKit 私有資料庫，僅與你的 Apple 帳號關聯；家庭共享透過系統的共享面板邀請家人，資料以端對端方式在成員間同步，開發者不營運任何中轉伺服器，也無法查看你的物品與發票內容。'},
          {q:'如何備份與徹底刪除我的資料？',a:'你可以在設定中隨時建立帶密碼加密的完整本機備份檔（.zip）。需要刪除時，在 App 內刪除物品會同步清除本機附件與雲端紀錄；若要徹底清空，刪除 App 即可清除本機容器內所有資料。'},
          {q:'提醒事項與通知是如何運作的？',a:'ShelfLife 在獲得權限後，僅在你的裝置本機安排最多最近 30 項臨期保固、耗材更換或維護提醒；若開啟 Apple 提醒事項同步，會在專屬的「ShelfLife」列表中同步，絕不會修改你的其他日常事項。'}
        ],
        en:[
          {q:'Are scanned receipts or barcodes uploaded?',a:'No. ShelfLife uses on-device Apple Vision frameworks to recognize receipts and serial numbers. Barcodes are checked against a verified offline catalog. Unmatched barcodes and images are never uploaded to any external server.'},
          {q:'How do personal iCloud sync and household sharing work?',a:'Personal records sync to your private CloudKit container tied to your Apple Account. Household sharing lets you invite family members via the iOS share sheet over CloudKit. The developer operates no servers and cannot see your records or files.'},
          {q:'How can I back up or permanently delete my data?',a:'You can export password-encrypted ZIP backups anytime in Settings. Deleting an item removes its details and attachments locally and from iCloud. Deleting the app removes all local container data.'},
          {q:'How do Reminders and notifications work?',a:'ShelfLife schedules up to the nearest 30 upcoming deadlines locally on your iPhone. Optional Reminders sync manages a dedicated "ShelfLife" list without touching your personal lists.'}
        ]
      },
      faq:[
        ['小票识别和条码查询会上传我的文件吗？','不会。ShelfLife 使用 Apple Vision 框架完全在你的 iPhone 本地进行文本与铭牌识别，条码也仅在本地内置已核实的小型离线库中比对，未匹配的条码仅保存在你的本地档案中供手动补全，不会上传到任何外部商品目录或开发者服务器。'],
        ['个人 iCloud 同步与家庭共享是如何运作的？','个人同步使用 Apple CloudKit 私有数据库，仅与你的 Apple 账户关联；家庭共享通过系统的共享面板邀请家人，资料以端到端方式在成员间同步，开发者不运营任何中转服务器，也无法查看你的物品与发票内容。'],
        ['如何备份和彻底删除我的数据？','你可以在设置中随时创建带密码加密的完整本地备份文件（.zip）。需要删除时，在 App 内删除物品会同步清除本地附件与云端记录；若要彻底清空，删除 App 即可清除本机容器内所有数据。'],
        ['提醒事项与通知是如何工作的？','ShelfLife 在获得权限后，仅在你的设备本地安排最多最近 30 项临期保修、耗材更换或维护提醒；若开启 Apple 提醒事项同步，会在专属的“ShelfLife”列表中同步，绝不会修改你的其他日常事项。']
      ]
    },
    'droidbridge': {
      name: 'DroidBridge',
      tagline: {
        'zh-Hans': 'Mac 与安卓设备极速互传与无线挂载。',
        'zh-Hant': 'Mac 與安卓裝置極速互傳與無線掛載。',
        en: 'High-speed transfer & wireless mount between Mac and Android.',
        ja: 'Mac と Android の高速ファイル転送・ワイヤレス接続。',
        ko: 'Mac과 Android 간의 초고속 파일 전송 및 무선 마운트.',
        de: 'Dateitransfer und drahtlose Einbindung zwischen Mac und Android.',
        fr: 'Transfert rapide et montage sans fil entre Mac et Android.',
        es: 'Transferencia rápida y montaje inalámbrico entre Mac y Android.'
      },
      description: {
        'zh-Hans': '在 Mac 菜单栏直接浏览与传输安卓文件，支持 USB MTP、ADB、局域网 FTP/WebDAV 与扫码快传。',
        'zh-Hant': '在 Mac 選單列直接瀏覽與傳輸安卓檔案，支援 USB MTP、ADB、區域網路 FTP/WebDAV 與掃碼快傳。',
        en: 'Browse and move Android files from your Mac menu bar over USB MTP, ADB, LAN FTP/WebDAV, or instant QR transfer.',
        ja: 'Mac のメニューバーから Android ファイルを閲覧・転送。USB MTP、ADB、LAN FTP/WebDAV、QRコード転送に対応。',
        ko: 'Mac 메뉴 막대에서 Android 파일을 탐색하고 전송하세요. USB MTP, ADB, LAN FTP/WebDAV 및 QR 빠른 전송을 지원합니다.',
        de: 'Android-Dateien direkt aus der Mac-Menüleiste verwalten – über USB MTP, ADB, LAN FTP/WebDAV oder QR-Direktübertragung.',
        fr: 'Parcourez et transférez des fichiers Android depuis la barre des menus Mac via USB MTP, ADB, FTP/WebDAV local ou code QR.',
        es: 'Explora y transfiere archivos de Android desde la barra de menús de tu Mac mediante USB MTP, ADB, FTP/WebDAV local o código QR.'
      },
      features: [
        ['USB MTP 与 ADB 高速传输', 'High-Speed USB MTP & ADB', 'USB MTP et ADB haute vitesse', 'Schnelles USB MTP & ADB', 'USB MTP y ADB de alta velocidad', '초고속 USB MTP 및 ADB', '高速 USB MTP・ADB 接続', 'USB MTP 與 ADB 高速傳輸'],
        ['无线挂载与扫码快传', 'Wireless Mount & QR Web Drop', 'Montage sans fil & code QR', 'Drahtlos-Mount & QR-Transfer', 'Montaje inalámbrico y QR', '무선 마운트 & QR 전송', 'ワイヤレス接続・QRコード転送', '無線掛載與掃碼快傳'],
        ['相册直拖与增量备份', 'Menu Bar Photos & Incremental Sync', 'Photos en barre des menus & sync', 'Menüleisten-Fotos & Synchronisation', 'Fotos en barra de menús y sync', '메뉴 막대 사진 & 증분 동기화', '写真のドラッグ＆増分同期', '相簿直拖與增量備份']
      ],
      featuresDetail: [
        {
          title: {
            'zh-Hans': 'USB MTP 与 ADB 高速传输',
            'zh-Hant': 'USB MTP 與 ADB 高速傳輸',
            en: 'High-Speed USB MTP & ADB',
            ja: '高速 USB MTP・ADB 接続',
            ko: '초고속 USB MTP 및 ADB',
            de: 'Schnelles USB MTP & ADB',
            fr: 'USB MTP et ADB haute vitesse',
            es: 'USB MTP y ADB de alta velocidad'
          },
          desc: {
            'zh-Hans': '免驱动支持 4GB+ 大文件分片加速、目录批量导出、断点续传与 SHA-256 完整性双端校验。',
            'zh-Hant': '免驅動支援 4GB+ 大檔案分片加速、目錄批次匯出、斷點續傳與 SHA-256 完整性雙端校驗。',
            en: 'Driver-free transfers with 4GB+ partial object reads, batch directory exports, resumable downloads, and SHA-256 checks.',
            ja: 'ドライバ不要で 4GB 超の大容量ファイル、一括書き出し、中断再開、SHA-256 完全性検証に対応。',
            ko: '드라이버 없이 4GB+ 대용량 파일 분할 전송, 디렉터리 일괄 내보내기, 이어받기 및 SHA-256 검증 지원.',
            de: 'Treiberlose Übertragung für 4GB+ Dateien, Batch-Export, Wiederaufnahme und beidseitige SHA-256-Prüfung.',
            fr: 'Transferts sans pilote pour fichiers 4 Go+, export par lot, reprise sur interruption et vérification SHA-256.',
            es: 'Transferencias sin controladores para archivos de 4GB+, exportación por lotes, reanudación y comprobación SHA-256.'
          }
        },
        {
          title: {
            'zh-Hans': '无线挂载与扫码快传',
            'zh-Hant': '無線掛載與掃碼快傳',
            en: 'Wireless Mount & QR Web Drop',
            ja: 'ワイヤレス接続・QRコード転送',
            ko: '무선 마운트 & QR 빠른 전송',
            de: 'Drahtlos-Mount & QR-Transfer',
            fr: 'Montage sans fil & code QR',
            es: 'Montaje inalámbrico y QR'
          },
          desc: {
            'zh-Hans': '自动发现局域网 FTP/WebDAV，手机扫码即可免安装客户端在浏览器直接下载与上传文件。',
            'zh-Hant': '自動發現區域網路 FTP/WebDAV，手機掃碼即可免安裝用戶端在瀏覽器直接下載與上傳檔案。',
            en: 'Auto-discover local FTP/WebDAV services, or scan a QR code for zero-install transfers in your phone browser.',
            ja: 'ローカルの FTP/WebDAV を自動検出し、QRコードを読み取るだけでブラウザから直接送受信可能。',
            ko: '로컬 네트워크의 FTP/WebDAV를 자동 검색하고, QR 코드를 스캔해 브라우저에서 바로 파일을 주고받으세요.',
            de: 'FTP/WebDAV im lokalen Netzwerk automatisch erkennen oder per QR-Code direkt im Browser übertragen.',
            fr: 'Détection automatique FTP/WebDAV local ou scan QR pour transférer directement dans le navigateur du smartphone.',
            es: 'Detecta FTP/WebDAV en red local o escanea un código QR para transferir desde el navegador del móvil.'
          }
        },
        {
          title: {
            'zh-Hans': '菜单栏最新照片秒取',
            'zh-Hant': '選單列最新照片秒取',
            en: 'Instant Menu Bar Photos',
            ja: 'メニューバーから写真秒速取得',
            ko: '메뉴 막대 최신 사진 즉시 전송',
            de: 'Menüleisten-Fotos sofort nutzen',
            fr: 'Photos instantanées en barre des menus',
            es: 'Fotos al instante en la barra'
          },
          desc: {
            'zh-Hans': '菜单栏横向预览手机最新拍摄的照片和截图，鼠标直接拖进 Finder、设计工具或聊天窗口。',
            'zh-Hant': '選單列橫向預覽手機最新拍攝的照片和截圖，滑鼠直接拖進 Finder、設計工具或通訊軟體。',
            en: 'Preview newest photos and screenshots from the menu bar and drag them directly into Finder or apps.',
            ja: 'メニューバーに最新の写真やスクリーンショットを表示し、Finder やアプリへ直接ドラッグ＆ドロップ。',
            ko: '메뉴 막대에서 최신 사진과 스크린샷을 미리 보고 Finder나 작업 창으로 바로 드래그하세요.',
            de: 'Neueste Fotos und Screenshots in der Menüleiste ansehen und direkt in Finder oder Apps ziehen.',
            fr: 'Affichez les dernières photos et captures dans la barre des menus et glissez-les directement dans Finder.',
            es: 'Previsualiza fotos y capturas recientes en la barra de menús y arrástralas al Finder o aplicaciones.'
          }
        },
        {
          title: {
            'zh-Hans': '增量同步与剪贴板互通',
            'zh-Hant': '增量同步與剪貼簿互通',
            en: 'Incremental Sync & Clipboard',
            ja: '増分バックアップ＆クリップボード共有',
            ko: '증分 동기화 & 클립보드 공유',
            de: 'Inkrementelle Synchronisation & Zwischenablage',
            fr: 'Sauvegarde incrémentale & presse-papiers',
            es: 'Sincronización incremental y portapapeles'
          },
          desc: {
            'zh-Hans': '定时增量备份相册与工作目录；可选加密双向剪贴板同步，离开网络或退至后台自动暂停。',
            'zh-Hant': '定時增量備份相簿與工作目錄；可選加密雙向剪貼簿同步，離開網路或退至背景自動暫停。',
            en: 'Schedule incremental backups for photos and work folders; optional encrypted clipboard sync between devices.',
            ja: '写真やフォルダを定期増分バックアップ。暗号化されたクリップボード双方向共有にも対応。',
            ko: '사진 및 작업 폴더를 예약 증분 백업하고, 종단간 암호화된 클립보드 양방향 공유를 지원합니다.',
            de: 'Regelmäßige inkrementelle Sicherung von Fotos und Ordnern; optionale verschlüsselte Zwischenablage.',
            fr: 'Sauvegardes incrémentales planifiées des photos et dossiers ; synchronisation chiffrée du presse-papiers.',
            es: 'Copias incrementales programadas de fotos y carpetas; sincronización cifrada de portapapeles.'
          }
        }
      ],
      factStrip: {
        'zh-Hans': ['Mac 与设备直连', '零开发者云端中转', '无广告与商业追踪'],
        'zh-Hant': ['Mac 與裝置直連', '零開發者雲端中轉', '無廣告與商業追蹤'],
        en: ['Direct Mac-to-Device', 'Zero Cloud Relays', 'No Ads or Tracking'],
        ja: ['端末間ダイレクト接続', 'クラウド中継なし', '広告・追跡なし'],
        ko: ['기기 간 직접 연결', '클라우드 중계 없음', '광고 및 추적 없음'],
        de: ['Direkte Geräteverbindung', 'Keine Cloud-Relays', 'Keine Werbung oder Tracking'],
        fr: ['Connexion directe', 'Zéro relais cloud', 'Sans pub ni pistage'],
        es: ['Conexión directa', 'Sin servidores intermedios', 'Sin anuncios ni rastreo']
      },
      privacySummary: {
        'zh-Hans': '文件仅在你的 Mac 与安卓设备之间通过 USB 或局域网直接传输。无开发者云端服务器，传输过程支持 SHA-256 校验与断点保护。',
        'zh-Hant': '檔案僅在你的 Mac 與安卓裝置之間透過 USB 或區域網路直接傳輸。無開發者雲端伺服器，傳輸過程支援 SHA-256 校驗與斷點保護。',
        en: 'Files transfer directly between your Mac and Android device via USB or local Wi-Fi. No developer relay servers, with SHA-256 integrity and resume protection.',
        ja: 'ファイルは USB またはローカル Wi-Fi を介して Mac と Android 間で直接転送されます。中継サーバーはなく、SHA-256 検証に対応しています。',
        ko: '파일은 USB 또는 로컬 Wi-Fi를 통해 Mac과 Android 간에 직접 전송됩니다. 개발자 릴레이 서버가 없으며 SHA-256 무결성 검증을 지원합니다.',
        de: 'Dateien werden direkt per USB oder lokalem WLAN übertragen. Keine Entwickler-Server, mit SHA-256-Integritätsprüfung.',
        fr: 'Les fichiers sont transférés directement via USB ou Wi-Fi local, sans serveur intermédiaire, avec vérification d’intégrité SHA-256.',
        es: 'Los archivos se transfieren directamente vía USB o Wi-Fi local sin servidores intermedios, con verificación de integridad SHA-256.'
      },
      customFaq: {
        'zh-Hans': [
          { q: 'DroidBridge 会将我的手机文件上传到服务器吗？', a: '绝对不会。应用所有文件操作均发生在 Mac 本地与通过 USB 或本地局域网直连的安卓设备之间，没有任何开发者中转服务器或云端备份。' },
          { q: 'USB 传输需要开启开发者选项或安装驱动吗？', a: '基础 MTP 文件传输无需开启开发者选项，手机解锁后选择“文件传输”模式即可。如需 ADB 调试高级功能或管理 APK，可在手机设置中开启 USB 调试。' },
          { q: 'Wi-Fi 快传与 FTP 传输安全吗？', a: 'Wi-Fi 快传与 FTP 仅在同一局域网内直接点对点通信。HTTPS 伴侣二维码经由证书指纹校验；针对无证书的局域网明文传输，建议仅在受信任的家庭或公司私有 Wi-Fi 中使用。' },
          { q: '剪贴板同步如何保证私密性？', a: '剪贴板同步需配对扫码授权，使用 256 位动态会话令牌，且在传输期间采用加密保护；设备离开局域网或切换到后台时会自动暂停。' }
        ],
        'zh-Hant': [
          { q: 'DroidBridge 會將我的手機檔案上傳到伺服器嗎？', a: '絕對不會。App 所有檔案操作均發生在 Mac 本機與透過 USB 或本機區域網路直連的安卓裝置之間，沒有任何開發者中轉伺服器或雲端備份。' },
          { q: 'USB 傳輸需要開啟開發者選項或安裝驅動嗎？', a: '基礎 MTP 檔案傳輸無需開啟開發者選項，手機解鎖後選擇「檔案傳輸」模式即可。如需 ADB 除錯進階功能或管理 APK，可在手機設定中開啟 USB 除錯。' },
          { q: 'Wi-Fi 快傳與 FTP 傳輸安全嗎？', a: 'Wi-Fi 快傳與 FTP 僅在同一區域網路內直接點對點通訊。HTTPS 伴侶二維碼經由憑證指紋校驗；針對無憑證的區域網路明文傳輸，建議僅在受信任的私人 Wi-Fi 中使用。' },
          { q: '剪貼簿同步如何保證私密性？', a: '剪貼簿同步需配對掃碼授權，使用 256 位元動態會話權杖，且在傳輸期間採用加密保護；裝置離開區域網路或切換到背景時會自動暫停。' }
        ],
        en: [
          { q: 'Does DroidBridge upload files to developer servers?', a: 'Absolutely not. All transfers happen directly between your Mac and connected Android devices over USB or local Wi-Fi. There is no cloud relay or remote storage.' },
          { q: 'Does USB transfer require developer options or special drivers?', a: 'Standard MTP browsing does not require developer options—simply unlock your phone and select "File transfer". ADB features and APK installation require USB debugging enabled on the phone.' },
          { q: 'Are Wi-Fi transfers and FTP secure?', a: 'Transfers operate entirely within your local network. HTTPS transfers use fingerprint validation; unencrypted web or FTP connections should only be used on trusted private networks.' },
          { q: 'How does clipboard sync protect private data?', a: 'Clipboard sync pairs via dynamic 256-bit session tokens with payload encryption, and automatically suspends when backgrounded or disconnected.' }
        ]
      },
      faq: [
        ['DroidBridge 会将我的手机文件上传到服务器吗？', '绝对不会。应用所有文件操作均发生在 Mac 本地与通过 USB 或本地局域网直连的安卓设备之间，没有任何开发者中转服务器或云端备份。'],
        ['USB 传输需要开启开发者选项或安装驱动吗？', '基础 MTP 文件传输无需开启开发者选项，手机解锁后选择“文件传输”模式即可。如需 ADB 调试高级功能或管理 APK，可在手机设置中开启 USB 调试。'],
        ['Wi-Fi 快传与 FTP 传输安全吗？', 'Wi-Fi 快传与 FTP 仅在同一局域网内直接点对点通信。HTTPS 伴侣二维码经由证书指纹校验；针对无证书的局域网明文传输，建议仅在受信任的家庭或公司私有 Wi-Fi 中使用。'],
        ['剪贴板同步如何保证私密性？', '剪贴板同步需配对扫码授权，使用 256 位动态会话令牌，且在传输期间采用加密保护；设备离开局域网或切换到后台时会自动暂停。']
      ]
    },
    'luxframe': {
      name: 'LuxFrame', platform: 'iOS',
      tagline: {
        'zh-Hans': '测光、场记与冲扫，认真记录每一格胶片。',
        'zh-Hant': '測光、場記與沖掃，認真記錄每一格底片。',
        en: 'Precision light metering, film roll logs, and scan EXIF injection.',
        ja: '露出計・フィルム記録・スキャン EXIF 埋め込みをひとつに。',
        ko: '노출계, 필름 롤 로그, 스캔 EXIF 주입을 한 번에.',
        de: 'Präzisions-Belichtungsmesser, Filmprotokolle und EXIF-Scan-Werkzeuge.',
        fr: 'Posemètre de précision, carnet de pellicules et injection EXIF.',
        es: 'Fotómetro de precisión, registro de carretes e inyección EXIF.'
      },
      description: {
        'zh-Hans': 'LuxFrame 为胶片与大画幅摄影师打造，集点测光、倒易律长曝、胶卷暗盒场记本与扫描件 EXIF 写回于一体。',
        'zh-Hant': 'LuxFrame 為底片與大畫幅攝影師打造，集點測光、倒易律長曝、底片暗盒場記本與掃描件 EXIF 寫回於一體。',
        en: 'A native film photography toolkit for iPhone and Apple Watch: spot metering, reciprocity timer, roll journal, and scan EXIF injection.',
        ja: 'iPhone・Apple Watch のための本格フィルム撮影ツール：スポット測光・相反則不軌タイマー・撮影ノート・EXIF 一括書き込み。',
        ko: 'iPhone 및 Apple Watch를 위한 필름 사진 툴킷: 스팟 측광, 상반칙 불궤 타이머, 롤 일지 및 스캔 EXIF 주입.',
        de: 'Mobiles Filmfotografie-Toolkit: Spotmessung, Schwarzschildeffekt-Timer, Filmtagebuch und EXIF-Scan-Injektor.',
        fr: 'Boîte à outils argentique native : mesure spot, réciprocité, carnet de bobines et injection EXIF.',
        es: 'Herramienta integral de fotografía química: medición puntual, temporizador de reciprocidad, diario e inyección EXIF.'
      },
      features: [
        ['专业测光与区域曝光', 'Precision Metering & Zone System', 'Mesure spot & zones', 'Spotmessung & Zonensystem', 'Medición puntual y zonas', '스팟 측광 & 존 시스템', 'スポット測光 & ゾーン', '專業測光與區域曝光'],
        ['倒易律暗房长曝计时', 'Reciprocity & Darkroom Timers', 'Réciprocité & chambre noire', 'Schwarzschildeffekt-Timer', 'Reciprocidad y cuarto oscuro', '상반칙 불궤 & 암실 타이머', '相反則不軌タイマー', '倒易律暗房長曝計時'],
        ['胶卷暗盒与 EXIF 注入', 'Roll Journal & EXIF Injection', 'Carnet & injection EXIF', 'Filmtagebuch & EXIF-Injektor', 'Diario de carretes y EXIF', '필름 롤 일지 & EXIF 주입', 'フィルム記録 & EXIF 埋込', '底片暗盒與 EXIF 注入'],
        ['外拍全套光学工具箱', 'Field & Optical Toolbox', 'Boîte à outils optique', 'Optische Werkzeuge für unterwegs', 'Herramientas de campo', '야외 출사 광학 툴킷', '光学ツールボックス', '外拍全套光學工具箱']
      ],
      featuresDetail: [
        {
          title: { 'zh-Hans': '专业点测光与区域曝光', 'zh-Hant': '專業點測光與區域曝光', en: 'Precision Metering & Zone System', ja: 'スポット測光 & ゾーンシステム', ko: '스팟 측광 및 존 시스템', de: 'Spotmessung & Zonensystem', fr: 'Mesure spot & Système de zones', es: 'Medición puntual y zonas' },
          desc: { 'zh-Hans': '支持平均与局部点测光、入射光校准、Zone System 阶调锚定，配合机械拨盘细腻触感反馈。', 'zh-Hant': '支援平均與局部點測光、入射光校準、Zone System 階調錨定，配合機械撥盤細膩觸感回饋。', en: 'Average, spot, and incident metering with Zone System tonal anchors, live EV histogram, and tactile dial haptics.', ja: '平均・スポット・入射光測定、ゾーンシステム階調分析、メカニカルダイヤルの触感フィードバック。', ko: '평균·스팟·입사광 측광, 존 시스템 톤 분석, 햅틱 진동이 지원되는 기계식 다이얼.', de: 'Spot-, Integral- und Lichtmessung mit Zonensystem, Live-Histogramm und haptischen Einstellrädern.', fr: 'Mesure moyenne, spot et incidente avec système de zones, histogramme et retour haptique.', es: 'Medición puntual, promedio e incidente con anclas de zonas y diales hápticos.' }
        },
        {
          title: { 'zh-Hans': '倒易律与暗房长曝计时', 'zh-Hant': '倒易律與暗房長曝計時', en: 'Reciprocity Failure & Darkroom Timer', ja: '相反則不軌 & 暗室タイマー', ko: '상반칙 불궤 & 암실 타이머', de: 'Schwarzschildeffekt & Dunkelkammer-Timer', fr: 'Réciprocité & Compte à rebours', es: 'Reciprocidad y cuarto oscuro' },
          desc: { 'zh-Hans': '内置主流胶卷倒易律失效曲线，自动计算曝光补偿；支持暗房红光界面与灵动岛锁屏实时计时。', 'zh-Hant': '內建主流底片倒易律失效曲線，自動計算曝光補償；支援暗房紅光介面與動態島鎖定畫面即時計時。', en: 'Built-in reciprocity curves for major film stocks with darkroom red-light UI and Live Activities on the Lock Screen.', ja: '主要フィルムの相反則不軌曲線を内蔵。暗室用セーフライト表示とライブアクティビティに対応。', ko: '주요 필름의 상반칙 불궤 곡선 탑재, 암실용 적색광 모드와 다이내믹 아일랜드 실시간 타이머.', de: 'Integrierte Schwarzschildeffekt-Kurven, Dunkelkammer-Rotlichtanzeige und Live-Aktivitäten.', fr: 'Courbes de réciprocité intégrées pour films courants, interface inactinique rouge et Activités en direct.', es: 'Curvas de reciprocidad para películas clásicas, interfaz de luz roja y Live Activities.' }
        },
        {
          title: { 'zh-Hans': '胶卷暗盒记录与 EXIF 注入', 'zh-Hant': '底片暗盒記錄與 EXIF 注入', en: 'Film Roll Journal & EXIF Injector', ja: 'フィルム記録 & EXIF 一括書き込み', ko: '필름 롤 일지 & EXIF 일괄 주입', de: 'Filmtagebuch & EXIF-Stapelinjektor', fr: 'Carnet de pellicules & Injection EXIF', es: 'Diario de película e inyección EXIF' },
          desc: { 'zh-Hans': '按帧记录机镜、光圈快门、地点与参考图；冲扫后一键将拍摄参数批量写回扫描件 EXIF。', 'zh-Hant': '按幀記錄機鏡、光圈快門、地點與參考圖；沖掃後一鍵將拍攝參數批次寫回掃描件 EXIF。', en: 'Log gear, aperture, shutter, GPS, and reference shots per frame; batch inject metadata into digital lab scans.', ja: 'コマごとに露出・機材・位置情報を記録。スキャン画像へ撮影データをワンタップで一括書き込み。', ko: '프레임별 장비, 조리개, 셔터, GPS, 참고 사진을 기록하고 스캔 파일에 EXIF를 한 번에 주입.', de: 'Kamera, Objektiv, Belichtung und GPS je Bild festhalten; EXIF-Metadaten direkt in Scans schreiben.', fr: 'Consignez réglages, optique, GPS et aperçu par vue ; injectez les données dans vos scans en un clic.', es: 'Guarda ajustes, objetivo y GPS por fotograma; inyecta los datos de disparo en los escaneos del laboratorio.' }
        },
        {
          title: { 'zh-Hans': '外拍全套光学与天文工具', 'zh-Hant': '外拍全套光學與天文工具', en: 'Field Optics & Celestial Planning', ja: '野外光学 & 天文プランナー', ko: '야외 광학 & 천문 플래너', de: 'Feldoptik & Himmelsplanung', fr: 'Optique de terrain & Planification', es: 'Óptica de campo y efemérides' },
          desc: { 'zh-Hans': '包含景深超焦距、针孔计算、大画幅视场、日照天文轨迹、机械快门声音测速与 Apple Watch 联动。', 'zh-Hant': '包含景深超焦距、針孔計算、大畫幅視場、日照天文軌跡、機械快門聲音測速與 Apple Watch 聯動。', en: 'Depth of field, pinhole, view camera movements, AR sun path, audio shutter speed tester, and Apple Watch companion.', ja: '被写界深度・過焦点、ピンホール、大判アオリ、AR 太陽軌道、シャッター音測定、Apple Watch 連携。', ko: '피사계 심도·과초점 거리, 핀홀, 대형 무브먼트, AR 일조 궤적, 셔터 소리 측정 및 Apple Watch 연동.', de: 'Schärfentiefe, Lochkamera, Großformat, AR-Sonnenbahn, Audio-Verschlusstest und Apple Watch.', fr: 'Profondeur de champ, sténopé, grand format, course solaire AR, test sonore d’obturateur et Apple Watch.', es: 'Profundidad de campo, estenopo, gran formato, trayectoria solar en RA, test de obturador y Apple Watch.' }
        }
      ],
      factStrip: {
        'zh-Hans': ['端侧计算与本机存储', '无自建云账户与追踪', 'iCloud 私密备份'],
        'zh-Hant': ['端側計算與本機儲存', '無自建雲端帳號與追蹤', 'iCloud 私密備份'],
        en: ['On-Device & Local Storage', 'No Accounts or Tracking', 'Private iCloud Backup'],
        ja: ['端末内処理 & ローカル保存', '独自アカウント・追跡なし', '安全なプライベート iCloud'],
        ko: ['기기 내 처리 및 로컬 저장', '자체 계정 및 추적 없음', '비공개 iCloud 백업'],
        de: ['Lokale Verarbeitung & Speicherung', 'Keine Konten oder Tracking', 'Privates iCloud-Backup'],
        fr: ['Traitement et stockage local', 'Aucun compte ni pistage', 'Sauvegarde privée iCloud'],
        es: ['Procesamiento y guardado local', 'Sin cuentas ni rastreo', 'Copia privada en iCloud']
      },
      privacySummary: {
        'zh-Hans': 'LuxFrame 不设独立账户系统，不运营收集数据的自建服务器。测光、快门测试与照片元数据全部在端侧处理；备份与预设通过你的 Apple 私有 iCloud 同步。',
        'zh-Hant': 'LuxFrame 不設獨立帳號系統，不營運收集資料的自建伺服器。測光、快門測試與照片元資料全部在端側處理；備份與預設透過你的 Apple 私有 iCloud 同步。',
        en: 'LuxFrame operates no custom account system or telemetry backend. Light metering, shutter testing, and EXIF processing run strictly on-device; backups sync privately via your personal Apple iCloud.',
        ja: 'LuxFrame は独自のアカウントシステムやデータ収集サーバーを持っていません。露出測定、シャッター速度テスト、EXIF 書き込みはすべて端末内で処理され、バックアップは個人の Apple iCloud で安全に保護されます。',
        ko: 'LuxFrame은 별도의 계정 시스템이나 자체 데이터 수집 서버를 운영하지 않습니다. 측광, 셔터 측정 및 EXIF 처리는 기기 내에서만 이루어지며, 백업은 사용자의 개인 Apple iCloud를 통해 안전하게 보관됩니다.',
        de: 'LuxFrame betreibt keine eigenen Benutzerkonten oder Server zur Datenerfassung. Belichtungsmessung, Verschlussprüfung und EXIF-Verarbeitung erfolgen strikt lokal; Backups synchronisieren sich privat über dein persönliches Apple iCloud.',
        fr: 'LuxFrame n’exploite aucun système de compte ni serveur de collecte de données. La mesure de lumière, le test d’obturateur et le traitement EXIF s’exécutent en local ; les sauvegardes restent privées dans votre propre iCloud Apple.',
        es: 'LuxFrame no cuenta con cuentas externas ni servidores de recolección de datos. La medición de luz, pruebas de obturador y metadatos EXIF se procesan en el dispositivo; las copias de seguridad se sincronizan en tu iCloud personal de Apple.'
      },
      customFaq: {
        'zh-Hans': [
          { q: 'LuxFrame 会上传我记录的胶卷数据、参考照片或扫描件吗？', a: '不会。胶卷记录、相机预设、参考照片和扫描件均保存在设备本地；只有你主动开启 iCloud 备份时，数据才会存储在你受保护的私有 iCloud 空间中，开发者无法查看。' },
          { q: '相机、麦克风与位置权限是如何使用的？', a: '相机仅用于实时测光、日照路径实景与手动拍摄参考图；麦克风仅在录制语音备忘或运行机械快门声音测试时启用（快门音频仅在内存分析，不保存到磁盘）；位置仅用于查询附近冲洗店、日出日落天文计算及可选的胶卷 GPS 标记。' },
          { q: 'EXIF 批量注入功能如何保护我的原始照片？', a: '写入 EXIF 时只在你的本地设备上直接处理图像元数据，处理后的照片或负片校正正片按你选择导出到系统相册中的专用相册（如“LuxFrame EXIF”），不经过任何第三方服务器。' },
          { q: '如何备份或迁移我的胶卷暗盒历史？', a: '你可以通过设置导出完整的未加密或 AES 加密备份文件（.luxframebackup），也可以直接将胶卷导出为 CSV 表格或 GPX 轨迹。随时可以通过“删除数据”彻底清空本机与 iCloud 记录。' }
        ],
        'zh-Hant': [
          { q: 'LuxFrame 會上傳我記錄的底片資料、參考照片或掃描件嗎？', a: '不會。底片記錄、相機預設、參考照片和掃描件均儲存在裝置本機；只有你主動開啟 iCloud 備份時，資料才會儲存在你受保護的私有 iCloud 空間中，開發者無法查看。' },
          { q: '相機、麥克風與位置權限是如何使用的？', a: '相機僅用於即時測光、日照路徑實景與手動拍攝參考圖；麥克風僅在錄製語音備忘或執行機械快門聲音測試時啟用（快門音訊僅於記憶體分析，不儲存至磁碟）；位置僅用於查詢附近沖洗店、日出日落天文計算及可選的底片 GPS 標記。' },
          { q: 'EXIF 批次注入功能如何保護我的原始照片？', a: '寫入 EXIF 時僅於你的本機裝置上直接處理影像元資料，處理後的照片或負片校正正片依你選擇匯出至系統相簿中的專用相簿，不經過任何第三方伺服器。' },
          { q: '如何備份或遷移我的底片暗盒歷史？', a: '你可透過設定匯出完整的未加密或 AES 加密備份檔案（.luxframebackup），亦可直接將底片匯出為 CSV 表格或 GPX 軌跡。隨時可透過「刪除資料」徹底清空本機與 iCloud 記錄。' }
        ],
        en: [
          { q: 'Does LuxFrame upload my roll logs, reference photos, or lab scans?', a: 'No. All roll journals, gear profiles, reference photos, and scans are stored locally on your device. When iCloud backup is enabled, data syncs privately to your personal Apple iCloud container where the developer cannot access it.' },
          { q: 'How are camera, microphone, and location permissions used?', a: 'The camera is used for live metering, AR sun-path previews, and manual reference shots. The microphone is used solely for optional voice memos and the audio shutter tester (shutter audio is analyzed strictly in memory and never written to disk). Location is used only for nearby lab lookups, solar/lunar ephemeris, and optional frame geotags.' },
          { q: 'How does the batch EXIF injector handle my scans safely?', a: 'EXIF writing takes place entirely on-device using system image frameworks. Tagged scans or inverted negatives are saved to designated albums in your Photos library upon your confirmation, without passing through any external servers.' },
          { q: 'How can I back up, export, or erase my film records?', a: 'You can export complete unencrypted or encrypted (.luxframebackup) files, or export rolls as CSV spreadsheets and GPX tracks anytime. You can also completely delete all local and iCloud data from Settings.' }
        ],
        ja: [
          { q: 'フィルム記録、参考写真、スキャン画像がサーバーに送信されることはありますか？', a: 'いいえ。すべての記録や機材設定、写真は端末内に保存されます。iCloud バックアップを有効にした場合でも、お客様個人の Apple iCloud 領域に安全に保存され、開発者が閲覧することはできません。' },
          { q: 'カメラ、マイク、位置情報の権限はどのように使われますか？', a: 'カメラは露出測定、AR 太陽軌道、参考写真撮影に使用します。マイクは音声メモおよびシャッター音テスト時のみ起動し、音声データはメモリ内で即時解析されディスクには保存されません。位置情報は現像所検索や天文計算、任意の GPS 記録にのみ使用されます。' },
          { q: 'EXIF 一括書き込み機能は安全ですか？', a: 'EXIF 処理は端末内のシステムフレームワークで直接実行されます。書き込み後のスキャン画像や反転正片は写真ライブラリの専用アルバムに保存され、外部サーバーを経由することはありません。' },
          { q: 'データのバックアップや削除はどのように行えますか？', a: '暗号化バックアップファイル（.luxframebackup）や CSV/GPX ファイルとして自由に書き出せます。設定画面の「データ削除」から端末内および iCloud 上のすべてのデータをいつでも完全に消去できます。' }
        ],
        ko: [
          { q: '필름 기록, 참고 사진 또는 스캔본이 개발자 서버로 전송되나요?', a: '아니요. 모든 필름 일지, 장비 프로필, 참고 사진 및 스캔본은 기기 로컬에 저장됩니다. iCloud 백업을 켤 경우에도 사용자의 개인 Apple iCloud에 비공개 보관되며 개발자는 접근할 수 없습니다.' },
          { q: '카메라, 마이크, 위치 권한은 어떻게 사용되나요?', a: '카메라는 실시간 측광, AR 일조 궤적 및 수동 참고 사진에 쓰입니다. 마이크는 음성 메모와 셔터 소리 측정 시에만 사용되며, 셔터 오디오는 메모리에서만 분석되고 저장되지 않습니다. 위치 정보는 현상소 검색, 천문 계산 및 선택적 GPS 태그에만 사용됩니다.' },
          { q: 'EXIF 일괄 주입 기능은 안전하게 동작하나요?', a: 'EXIF 주입은 기기 내부의 시스템 이미지 프레임워크를 통해 로컬에서 직접 처리됩니다. 처리된 스캔본과 반전 필름은 사용자의 확인을 거쳐 사진 보관함의 전용 앨범에 저장되며 외부 서버를 거치지 않습니다.' },
          { q: '필름 데이터를 어떻게 백업하거나 삭제할 수 있나요?', a: '설정에서 완전한 암호화 백업 파일(.luxframebackup)이나 CSV/GPX 형식으로 언제든 내보낼 수 있습니다. 또한 설정의 데이터 삭제 메뉴를 통해 기기 및 iCloud의 모든 기록을 완전히 제거할 수 있습니다.' }
        ],
        de: [
          { q: 'Werden Filmprotokolle, Referenzfotos oder Scans hochgeladen?', a: 'Nein. Alle Filmtagebücher, Ausrüstungsprofile, Fotos und Scans verbleiben lokal auf deinem Gerät. Bei aktiviertem iCloud-Backup erfolgt die Synchronisierung ausschließlich über dein persönliches Apple iCloud, ohne Zugriff durch den Entwickler.' },
          { q: 'Wie werden Kamera-, Mikrofon- und Standortberechtigungen genutzt?', a: 'Die Kamera dient der Belichtungsmessung, AR-Sonnenbahn und Referenzfotos. Das Mikrofon wird nur für Sprachnotizen und den Verschlussprüfer genutzt (Audiodaten werden ausschließlich im Arbeitsspeicher analysiert und niemals gespeichert). Der Standort dient der Laborsuche, Himmelsberechnung und optionalem GPS-Geotagging.' },
          { q: 'Wie sicher arbeitet der EXIF-Stapelinjektor?', a: 'Das Schreiben von EXIF-Metadaten erfolgt vollständig lokal auf dem Gerät über System-Frameworks. Verarbeitete Scans werden nach deiner Bestätigung in speziellen Alben der Fotos-Mediathek abgelegt, ohne externe Server zu durchlaufen.' },
          { q: 'Wie kann ich meine Filmdaten sichern oder löschen?', a: 'Du kannst vollständige verschlüsselte Backups (.luxframebackup) sowie CSV- oder GPX-Dateien exportieren. In den Einstellungen kannst du alle lokalen und iCloud-Daten jederzeit vollständig löschen.' }
        ],
        fr: [
          { q: 'LuxFrame téléverse-t-il mes carnets, photos ou scans ?', a: 'Non. Tous les journaux de bobines, profils d’appareils, photos de référence et scans sont stockés localement sur votre appareil. Avec la sauvegarde iCloud, les données sont synchronisées dans votre conteneur privé Apple iCloud, sans accès possible pour le développeur.' },
          { q: 'Comment sont utilisées les autorisations de caméra, micro et position ?', a: 'La caméra sert à la mesure de lumière, au tracé solaire en RA et aux photos de référence. Le micro n’est activé que pour les mémos vocaux et le test d’obturateur (le signal audio est analysé uniquement en mémoire vive et jamais enregistré). La position sert à localiser les laboratoires, aux calculs célestes et au géomarquage facultatif.' },
          { q: 'L’injection EXIF est-elle sécurisée pour mes scans ?', a: 'L’écriture EXIF s’effectue entièrement en local via les composants système d’iOS. Les scans modifiés ou négatifs inversés sont enregistrés dans des albums dédiés de votre photothèque après confirmation, sans transiter par des serveurs tiers.' },
          { q: 'Comment sauvegarder ou effacer mes données ?', a: 'Vous pouvez exporter des sauvegardes chiffrées complètes (.luxframebackup) ou exporter vos bobines en CSV/GPX à tout moment. Toutes les données locales et iCloud peuvent être définitivement effacées depuis les réglages.' }
        ],
        es: [
          { q: '¿LuxFrame sube mis registros de película, fotos de referencia o escaneos?', a: 'No. Todos los diarios de carretes, perfiles de equipo, fotos y escaneos se guardan localmente en el dispositivo. Con la copia en iCloud, los datos se sincronizan de forma privada en tu cuenta personal de Apple iCloud sin acceso del desarrollador.' },
          { q: '¿Cómo se usan los permisos de cámara, micrófono y ubicación?', a: 'La cámara se utiliza para la medición de luz, la trayectoria solar en RA y fotos de referencia. El micrófono solo se activa para notas de voz y la prueba sonora de obturador (el audio se analiza en memoria y nunca se guarda). La ubicación se usa solo para buscar laboratorios, efemérides y geoetiquetado opcional.' },
          { q: '¿Es seguro el inyector por lotes de EXIF para mis fotos?', a: 'La escritura de metadatos EXIF se realiza íntegramente en el dispositivo con las librerías nativas del sistema. Los escaneos etiquetados se guardan en álbumes específicos de Fotos tras tu confirmación, sin pasar por servidores externos.' },
          { q: '¿Cómo puedo respaldar o eliminar mis datos de película?', a: 'Puedes exportar copias de seguridad cifradas (.luxframebackup) o archivos CSV y GPX en cualquier momento. En ajustes puedes borrar por completo todos los registros locales y de iCloud.' }
        ]
      },
      faq: [
        ['LuxFrame 会上传我记录的胶卷数据、参考照片或扫描件吗？', '不会。胶卷记录、相机预设、参考照片和扫描件均保存在设备本地；只有你主动开启 iCloud 备份时，数据才会存储在你受保护的私有 iCloud 空间中，开发者无法查看。'],
        ['相机、麦克风与位置权限是如何使用的？', '相机仅用于实时测光、日照路径实景与手动拍摄参考图；麦克风仅在录制语音备忘或运行机械快门声音测试时启用（快门音频仅在内存分析，不保存到磁盘）；位置仅用于查询附近冲洗店、日出日落天文计算及可选的胶卷 GPS 标记。'],
        ['EXIF 批量注入功能如何保护我的原始照片？', '写入 EXIF 时只在你的本地设备上直接处理图像元数据，处理后的照片或负片校正正片按你选择导出到系统相册中的专用相册（如“LuxFrame EXIF”），不经过任何第三方服务器。'],
        ['如何备份或迁移我的胶卷暗盒历史？', '你可以通过设置导出完整的未加密或 AES 加密备份文件（.luxframebackup），也可以直接将胶卷导出为 CSV 表格或 GPX 轨迹。随时可以通过“删除数据”彻底清空本机与 iCloud 记录。']
      ]
    },
      'netpulse': {
      name:'NetPulse', platform:'iOS',
      platformTag:{'zh-Hans':'iPhone & iPad · iOS 17+','zh-Hant':'iPhone & iPad · iOS 17+',en:'iPhone & iPad · iOS 17+',ja:'iPhone & iPad · iOS 17+',ko:'iPhone & iPad · iOS 17+',de:'iPhone & iPad · iOS 17+',fr:'iPhone & iPad · iOS 17+',es:'iPhone & iPad · iOS 17+'},
      footerNote:{
        'zh-Hans':'为硬件与网络工程师打造的专业移动工具箱。',
        'zh-Hant':'為硬體與網路工程師打造的專業行動工具箱。',
        en:'Professional field toolkit for hardware & network engineers.',
        ja:'ハードウェア技術者とネットワーク管理者のためのポータブルツール。',
        ko:'하드웨어 엔지니어와 네트워크 관리자를 위한 전문 모바일 툴킷.',
        de:'Professionelles mobiles Werkzeug für Hardware- und Netzwerk-Profis.',
        fr:'Outil mobile professionnel pour ingénieurs réseau et matériel.',
        es:'Herramienta móvil profesional para ingenieros de hardware y redes.'
      },
      tagline:{
        'zh-Hans':'硬件与网络工程师的随身调试工具箱。',
        'zh-Hant':'硬體與網路工程師的隨身除錯工具箱。',
        en:'The portable field toolkit for hardware & network engineers.',
        ja:'ハードウェア・ネットワーク技術者のためのポータブル診断ツール。',
        ko:'하드웨어 및 네트워크 엔지니어를 위한 모바일 툴킷.',
        de:'Das mobile Diagnose-Toolkit für Hardware- und Netzwerk-Ingenieure.',
        fr:'La boîte à outils mobile pour ingénieurs réseau et matériel.',
        es:'El kit de herramientas móvil para ingenieros de hardware y redes.'
      },
      description:{
        'zh-Hans':'NetPulse 专为 iPhone 与 iPad 设计，集成 BLE/GATT 调试、局域网设备扫描、ONVIF 摄像头管理、RTSP 极速预览及网络链路诊断。全本地运行，零云端依赖。',
        'zh-Hant':'NetPulse 專為 iPhone 與 iPad 設計，整合 BLE/GATT 除錯、區域網路裝置掃描、ONVIF 攝影機管理、RTSP 極速預覽及網路鏈路診斷。全本機執行，零雲端依賴。',
        en:'NetPulse is an on-device field toolkit for iPhone & iPad, combining BLE/GATT debugging, LAN discovery, ONVIF camera management, RTSP live preview, and network link diagnostics. Zero cloud dependencies.',
        ja:'NetPulse は iPhone & iPad 向けに設計されたポータブル診断ツールです。BLE/GATT デバッグ、LAN 機器検出、ONVIF カメラ管理、RTSP プレビュー、ネットワーク診断を完全ローカルで提供します。',
        ko:'NetPulse는 iPhone 및 iPad를 위한 모바일 툴킷으로 BLE/GATT 디버깅, 로컬 네트워크 장치 검색, ONVIF 카메라 관리, RTSP 실시간 프리뷰 및 네트워크 진단을 100% 로컬에서 지원합니다.',
        de:'NetPulse ist das mobile Toolkit für iPhone & iPad: BLE/GATT-Debugging, LAN-Erkennung, ONVIF-Kamerasteuerung, RTSP-Live-Vorschau und Netzwerkdiagnose. Komplett lokal ohne Cloud.',
        fr:'NetPulse est la boîte à outils mobile pour iPhone et iPad : débogage BLE/GATT, découverte réseau local, caméras ONVIF, aperçu RTSP et diagnostic réseau. Entièrement local, zéro cloud.',
        es:'NetPulse es el kit de herramientas para iPhone y iPad: depuración BLE/GATT, escaneo de red local, cámaras ONVIF, vista previa RTSP y diagnóstico de red. 100% local y sin nube.'
      },
      features:[
        ['BLE 雷达与 GATT 调试','BLE Scanner & GATT Console','Scanner BLE & Console GATT','BLE-Scanner & GATT-Konsole','Escáner BLE y Consola GATT','BLE 레이더 및 GATT 디버거','BLE スキャン & GATT コンソール','BLE 雷達與 GATT 除錯'],
        ['局域网发现与端口扫描','LAN Discovery & Port Scan','Découverte LAN & Scan de ports','LAN-Erkennung & Port-Scan','Detección LAN y Escaneo de puertos','LAN 장치 검색 및 포트 스캔','LAN 機器検索 & ポートスキャン','區域網路搜尋與連接埠掃描'],
        ['ONVIF 监控与 RTSP 预览','ONVIF Cameras & RTSP Live','Caméras ONVIF & Aperçu RTSP','ONVIF-Kameras & RTSP-Live','Cámaras ONVIF y RTSP directo','ONVIF 카메라 및 RTSP 프리뷰','ONVIF カメラ & RTSP プレビュー','ONVIF 監控與 RTSP 預覽'],
        ['链路诊断与带宽测速','Link Diagnostics & Speed Test','Diagnostic de liaison & Test de débit','Diagnose & Geschwindigkeitstest','Diagnóstico de red y Test de velocidad','네트워크 진단 및 속도 측정','回線診断 & スピードテスト','鏈路診斷與頻寬測速']
      ],
      featuresDetail:[
        {
          title:{'zh-Hans':'BLE 雷达与 GATT 调试','zh-Hant':'BLE 雷達與 GATT 除錯',en:'BLE Scanner & GATT Console',ja:'BLE スキャン & GATT コンソール',ko:'BLE 레이더 및 GATT 디버거',de:'BLE-Scanner & GATT-Konsole',fr:'Scanner BLE & Console GATT',es:'Escáner BLE y Consola GATT'},
          desc:{'zh-Hans':'实时 RSSI 曲线、广播包结构化解析、特征值读写与监听，支持 Nordic DFU / MCUmgr 固件升级。','zh-Hant':'即時 RSSI 曲線、廣播封包結構化解析、特徵值讀寫與監聽，支援 Nordic DFU / MCUmgr 韌體升級。',en:'Live RSSI charts, parsed advertisement packets, read/write/notify console, and Nordic DFU / MCUmgr firmware updates.',ja:'リアルタイム RSSI グラフ、パケット解析、キャラクタリスティック読み書き、Nordic DFU / MCUmgr ファームウェア更新。',ko:'실시간 RSSI 신호 차트, 브로드캐스트 패킷 분석, 특성 읽기/쓰기/구독 및 Nordic DFU / MCUmgr 펌웨어 업데이트.',de:'Echtzeit-RSSI-Diagramme, Paket-Parser, Lesen/Schreiben/Benachrichtigungen und Nordic DFU / MCUmgr-Updates.',fr:'Graphiques RSSI en direct, analyse des trames, lecture/écriture/notification et mises à jour Nordic DFU / MCUmgr.',es:'Gráficos RSSI en tiempo real, análisis de tramas, lectura/escritura/notificación y actualización Nordic DFU / MCUmgr.'}
        },
        {
          title:{'zh-Hans':'局域网发现与端口扫描','zh-Hant':'區域網路搜尋與連接埠掃描',en:'LAN Discovery & Port Scan',ja:'LAN 機器検索 & ポートスキャン',ko:'LAN 장치 검색 및 포트 스캔',de:'LAN-Erkennung & Port-Scan',fr:'Découverte LAN & Scan de ports',es:'Detección LAN y Escaneo de puertos'},
          desc:{'zh-Hans':'通过 mDNS/Bonjour、SSDP 与广播扫描识别设备，支持 IPv4/IPv6 Ping 监测、路径追踪与常用端口探测。','zh-Hant':'透過 mDNS/Bonjour、SSDP 與廣播掃描識別裝置，支援 IPv4/IPv6 Ping 監測、路徑追蹤與常用連接埠探測。',en:'Identify devices via mDNS/Bonjour, SSDP, and broadcast sweeps; run IPv4/IPv6 Ping monitors, traceroute, and port checks.',ja:'mDNS/Bonjour、SSDP で端末を特定。IPv4/IPv6 Ping 監視、Traceroute、ポート診断に対応。',ko:'mDNS/Bonjour, SSDP 및 브로드캐스트 스캔으로 장치 식별. IPv4/IPv6 Ping 모니터링, Traceroute, 포트 검사.',de:'Geräte über mDNS/Bonjour und SSDP finden; IPv4/IPv6-Ping, Traceroute und Portprüfungen ausführen.',fr:'Identifiez les appareils via mDNS/Bonjour et SSDP ; effectuez des pings IPv4/IPv6, traceroutes et scans de ports.',es:'Identifica dispositivos con mDNS/Bonjour y SSDP; ejecuta monitor Ping IPv4/IPv6, traceroute y escaneo de puertos.'}
        },
        {
          title:{'zh-Hans':'ONVIF 监控与 RTSP 预览','zh-Hant':'ONVIF 監控與 RTSP 預覽',en:'ONVIF Cameras & RTSP Live',ja:'ONVIF カメラ & RTSP プレビュー',ko:'ONVIF 카메라 및 RTSP 실시간 프리뷰',de:'ONVIF-Kameras & RTSP-Live',fr:'Caméras ONVIF & Aperçu RTSP',es:'Cámaras ONVIF y RTSP en directo'},
          desc:{'zh-Hans':'WS-Discovery 自动探测摄像头，低延迟 RTSP 直连秒开，支持 PTZ 云台控制与双向音频对讲。','zh-Hant':'WS-Discovery 自動探測攝影機，低延遲 RTSP 直連秒開，支援 PTZ 雲台控制與雙向音訊對講。',en:'Auto-discover cameras via WS-Discovery, stream low-latency RTSP feeds, and control PTZ with two-way audio talkback.',ja:'WS-Discovery による自動検出、低遅延 RTSP 再生、PTZ 雲台操作、双方向インターホン通話に対応。',ko:'WS-Discovery 자동 검색, 초저지연 RTSP 스트리밍, PTZ 팬/틸트 제어 및 양방향 오디오 통화 지원.',de:'Kameras per WS-Discovery finden, latenzarme RTSP-Streams abspielen, PTZ steuern und Gegensprechen nutzen.',fr:'Détection automatique WS-Discovery, flux RTSP ultra-rapides, contrôle PTZ et interphonie bidirectionnelle.',es:'Descubrimiento WS-Discovery, streaming RTSP de baja latencia, control PTZ e interfonía bidireccional.'}
        },
        {
          title:{'zh-Hans':'链路诊断与带宽测速','zh-Hant':'鏈路診斷與頻寬測速',en:'Link Diagnostics & Speed Test',ja:'回線診断 & スピードテスト',ko:'네트워크 진단 및 속도 측정',de:'Diagnose & Geschwindigkeitstest',fr:'Diagnostic de liaison & Test de débit',es:'Diagnóstico de red y Test de velocidad'},
          desc:{'zh-Hans':'内置 Cloudflare 测速模块、DNS 记录解析、Wake-on-LAN 远程唤醒，安全导出带防注入校验的 CSV 报告。','zh-Hant':'內建 Cloudflare 測速模組、DNS 記錄解析、Wake-on-LAN 遠端喚醒，安全匯出帶防注入校驗的 CSV 報告。',en:'Integrated Cloudflare speed tests, DNS queries, Wake-on-LAN, and safe CSV report exports with formula protection.',ja:'Cloudflare 速度測定、DNS レコード検索、Wake-on-LAN、数式インジェクション対策済み CSV 出力。',ko:'Cloudflare 속도 측정 모듈, DNS 레코드 조회, Wake-on-LAN, 수식 인젝션 방지 안전 CSV 내보내기.',de:'Integrierter Cloudflare-Speedtest, DNS-Abfragen, Wake-on-LAN und sichere CSV-Exporte mit Formelschutz.',fr:'Test de débit Cloudflare intégré, requêtes DNS, Wake-on-LAN et exports CSV sécurisés contre l’injection.',es:'Test de velocidad Cloudflare, consultas DNS, Wake-on-LAN y exportación de informes CSV protegidos.'}
        }
      ],
      factStrip:{
        'zh-Hans':['端侧离线优先','无开发者云服务器','无广告与商业追踪'],
        'zh-Hant':['端側離線優先','無開發者雲端伺服器','無廣告與商業追蹤'],
        en:['100% On-Device & Offline','No Developer Cloud','No Ads or Tracking'],
        ja:['端末内完結・オフライン対応','独自サーバーなし','広告・追跡なし'],
        ko:['100% 기기 내 처리 & 오프라인','개발자 서버 없음','광고 및 추적 없음'],
        de:['100% Lokal & Offline','Keine Entwickler-Server','Keine Werbung/Tracking'],
        fr:['100% Local & Hors-ligne','Aucun serveur tiers','Sans pub ni suivi'],
        es:['100% Local y Fuera de línea','Sin servidores propios','Sin publicidad ni rastreo']
      },
      privacySummary:{
        'zh-Hans':'应用在你的 iPhone/iPad 本地网络与蓝牙环境中运行。不设自建数据服务器，不收集设备资产或网络拓扑，不含广告与追踪 SDK。',
        'zh-Hant':'App 在你的 iPhone/iPad 區域網路與藍牙環境中執行。不設自建資料伺服器，不收集裝置資產或網路拓撲，不含廣告與追蹤 SDK。',
        en:'NetPulse operates entirely within your local Wi-Fi, Ethernet, and Bluetooth environment. No telemetry servers, no topology collection, and zero tracking SDKs.',
        ja:'NetPulse は iPhone/iPad のローカルネットワークと Bluetooth 内でのみ動作します。外部サーバーへの送信、トポロジー収集、追跡 SDK は一切ありません。',
        ko:'NetPulse는 iPhone/iPad의 로컬 네트워크 및 블루투스 환경에서만 작동합니다. 외부 데이터 서버, 네트워크 정보 수집, 추적 SDK가 전혀 없습니다.',
        de:'NetPulse arbeitet vollständig im lokalen WLAN-, Ethernet- und Bluetooth-Umfeld. Keine Telemetrie-Server, keine Topologie-Erfassung und kein Tracking.',
        fr:'NetPulse fonctionne entièrement sur votre réseau local et en Bluetooth. Aucun serveur de télémétrie, aucune collecte de topologie, aucun traqueur.',
        es:'NetPulse opera íntegramente en tu entorno de red local y Bluetooth. Sin servidores externos, sin recopilación de topología y sin rastreadores.'
      },
      customFaq:{
        'zh-Hans':[
          {q:'NetPulse 会把扫描到的内网或蓝牙设备上传吗？',a:'绝对不会。所有的 BLE 广播、GATT 数据、局域网设备列表、端口扫描结果及 RTSP 视频流均在设备端本地实时处理，绝不上传任何服务器。'},
          {q:'为什么需要本地网络和蓝牙权限？',a:'iOS 强制要求获取本地网络权限以扫描局域网 Bonjour/mDNS、SSDP 与 ONVIF 摄像头，以及探测主机端口；蓝牙权限用于扫描 BLE 外设并调试 GATT 特征值。NetPulse 不会利用这些权限采集你的位置。'},
          {q:'对讲麦克风音频会被录音或保存吗？',a:'不会。仅在你在 ONVIF 摄像头控制页主动开启对讲时，麦克风音频才会被采集并直接通过 RTSP 协议推流至摄像头；应用不会录制、不会持久化、更不会上传云端。'},
          {q:'测速功能是如何工作的？',a:'测速模块直接连接 Cloudflare 官方测速节点测量下载/上传带宽与延迟，仅在用户主动触发测速时产生测试流量，不会附带任何本地网络设备隐私数据。'}
        ],
        'zh-Hant':[
          {q:'NetPulse 會上傳掃描到的區域網路或藍牙裝置嗎？',a:'絕對不會。所有 BLE 廣播、GATT 資料、區域網路裝置清單、連接埠掃描結果及 RTSP 視訊流均在裝置本機即時處理，絕不上傳任何伺服器。'},
          {q:'為什麼需要區域網路和藍牙權限？',a:'iOS 強制要求取得區域網路權限以搜尋區網 Bonjour/mDNS、SSDP 與 ONVIF 攝影機，以及探測主機連接埠；藍牙權限用於掃描 BLE 外設並除錯 GATT 特徵值。NetPulse 不會利用這些權限收集你的位置。'},
          {q:'對講麥克風音訊會被錄音或儲存嗎？',a:'不會。僅在你在 ONVIF 攝影機控制頁主動開啟對講時，麥克風音訊才會被採集並直接透過 RTSP 協定推流至攝影機；App 不會錄製、不會持久化、更不會上傳雲端。'},
          {q:'測速功能是如何運作的？',a:'測速模組直接連線 Cloudflare 官方測速節點測量下載/上傳頻寬與延遲，僅在使用者主動觸發測速時產生測試流量，不會附帶任何區網裝置隱私資料。'}
        ],
        en:[
          {q:'Does NetPulse upload discovered LAN or Bluetooth devices?',a:'Never. All BLE advertisements, GATT data, LAN device inventories, port scan results, and RTSP video feeds are processed strictly on-device in real time without any cloud upload.'},
          {q:'Why does NetPulse request Local Network and Bluetooth permissions?',a:'iOS requires Local Network permission to discover Bonjour/mDNS, SSDP, and ONVIF devices and to probe ports; Bluetooth permission is required to scan and communicate with BLE peripherals. NetPulse never uses these permissions for location tracking.'},
          {q:'Is talkback microphone audio recorded or stored?',a:'No. The microphone is accessed only while you actively use two-way talkback with an ONVIF camera. Audio streams directly to the camera over RTSP and is never recorded, saved, or uploaded.'},
          {q:'How does the speed test feature work?',a:'The speed test module communicates directly with official Cloudflare speed endpoints to measure bandwidth and latency. Test traffic is generated solely when initiated by the user and carries no local network inventory data.'}
        ]
      },
      faq:[
        ['NetPulse 会把扫描到的内网或蓝牙设备上传吗？','绝对不会。所有的 BLE 广播、GATT 数据、局域网设备列表、端口扫描结果及 RTSP 视频流均在设备端本地实时处理，绝不上传任何服务器。'],
        ['为什么需要本地网络和蓝牙权限？','iOS 强制要求获取本地网络权限以扫描局域网 Bonjour/mDNS、SSDP 与 ONVIF 摄像头，以及探测主机端口；蓝牙权限用于扫描 BLE 外设并调试 GATT 特征值。NetPulse 不会利用这些权限采集你的位置。'],
        ['对讲麦克风音频会被录音或保存吗？','不会。仅在你在 ONVIF 摄像头控制页主动开启对讲时，麦克风音频才会被采集并直接通过 RTSP 协议推流至摄像头；应用不会录制、不会持久化、更不会上传云端。'],
        ['测速功能是如何工作的？','测速模块直接连接 Cloudflare 官方测速节点测量下载/上传带宽与延迟，仅在用户主动触发测速时产生测试流量，不会附带任何本地网络设备隐私数据。']
      ]
    },
    'pastepipe': {
      name: 'PastePipe',
      tagline: {
        'zh-Hans': '剪贴板历史、文本清洗与屏幕识字。',
        'zh-Hant': '剪貼板歷史、文字清洗與螢幕辨識。',
        en: 'Clipboard history, text pipe, and on-device OCR.',
        ja: 'クリップボード履歴、テキスト整形、そして OCR。',
        ko: '클립보드 기록, 텍스트 파이프라인 및 화면 OCR.',
        de: 'Zwischenablage-Verlauf, Text-Pipes und On-Device-OCR.',
        fr: 'Historique du presse-papiers, filtres de texte et OCR.',
        es: 'Historial del portapapeles, filtros de texto y OCR.'
      },
      description: {
        'zh-Hans': '按 ⌘⇧V 随处调出剪贴板，按 Tab 清洗转换杂乱文本，框选屏幕直接识字。全程本地处理，保护隐私。',
        'zh-Hant': '按 ⌘⇧V 隨處叫出剪貼板，按 Tab 清洗轉換雜亂文字，框選螢幕直接辨識。全程本機處理，保護隱私。',
        en: 'Press ⌘⇧V for clipboard history, Tab to transform messy text, and ⌘⇧2 for on-device screen OCR. Local-first and private by design.',
        ja: '⌘⇧V で履歴を呼び出し、Tab でテキストを整形、⌘⇧2 で画面上の文字を直接認識。安心のローカル処理。',
        ko: '⌘⇧V로 클립보드 기록을 열고, Tab으로 텍스트를 정리하며, ⌘⇧2로 화면을 인식합니다. 안전한 로컬 처리.',
        de: '⌘⇧V für die Zwischenablage, Tab zum Bereinigen von Text und ⌘⇧2 für Bildschirm-OCR. Vollständig lokal und sicher.',
        fr: '⌘⇧V pour l’historique, Tab pour transformer le texte et ⌘⇧2 pour l’OCR d’écran. Traitement local et respect de la vie privée.',
        es: '⌘⇧V para el historial, Tab para transformar texto y ⌘⇧2 para OCR en pantalla. Procesamiento local y privado.'
      },
      features: [
        ['剪贴板历史与搜索', 'Clipboard history & search', 'Historique et recherche', 'Verlauf & Suche', 'Historial y búsqueda', '클립보드 기록 및 검색', 'クリップボード履歴・検索', '剪貼板歷史與搜尋'],
        ['32 种文本清洗管道', '32 Built-in text pipes', '32 filtres de texte', '32 Text-Pipes', '32 filtros de texto', '32가지 텍스트 파이프라인', '32種類のテキスト整形パイプ', '32 種文字清洗管道'],
        ['端侧屏幕与图片 OCR', 'On-device screen & image OCR', 'OCR d’écran et d’images local', 'Lokales Bildschirm- & Bild-OCR', 'OCR local de pantalla e imágenes', '기기 내 화면 및 이미지 OCR', '端末内画面・画像 OCR', '端側螢幕與圖片 OCR'],
        ['钥匙串加密与私密同步', 'Keychain encryption & private sync', 'Chiffrement Trousseau et sync privée', 'Keychain-Verschlüsselung & privater Sync', 'Cifrado Llavero y sincronización privada', '키체인 암호화 및 비공개 동기화', 'Keychain 暗号化・非公開同期', '鑰匙圈加密與私密同步']
      ],
      featuresDetail: [
        {
          title: { 'zh-Hans': '剪贴板历史与极速搜索', 'zh-Hant': '剪貼板歷史與極速搜尋', en: 'Clipboard History & Instant Search', ja: 'クリップボード履歴と即時検索', ko: '클립보드 기록 및 즉시 검색', de: 'Zwischenablage-Verlauf & Sofortsuche', fr: 'Historique et recherche instantanée', es: 'Historial y búsqueda instantánea' },
          desc: { 'zh-Hans': '按 ⌘⇧V 面板立即浮现于光标旁，支持按类型、来源筛选、标签分类与常用置顶。', 'zh-Hant': '按 ⌘⇧V 面板立即浮現於游標旁，支援按類型、來源篩選、標籤分類與常用置頂。', en: 'Press ⌘⇧V to pop up history at cursor. Filter by type or app, organize with tags, and pin essentials.', ja: '⌘⇧V でカーソル横に履歴を表示。種類やアプリ別フィルタ、タグ分類、固定表示に対応。', ko: '⌘⇧V로 커서 옆에 기록 패널을 표시합니다. 유형 및 앱별 필터링, 태그 분류, 고정 기능을 지원합니다.', de: '⌘⇧V öffnet den Verlauf am Zeiger. Filtere nach Typ/App, nutze Tags und hefte Wichtiges an.', fr: '⌘⇧V ouvre l’historique près du curseur. Filtrez par type/app, classez par tags et épinglez.', es: '⌘⇧V abre el historial junto al cursor. Filtra por tipo o app, organiza con etiquetas y fija elementos.' }
        },
        {
          title: { 'zh-Hans': '按 Tab 清洗与转换文本', 'zh-Hant': '按 Tab 清洗與轉換文字', en: 'Tab to Transform & Clean Text', ja: 'Tab でテキスト整形と変換', ko: 'Tab 키로 텍스트 정리 및 변환', de: 'Tab zum Bereinigen und Transformieren', fr: 'Tab pour nettoyer et transformer', es: 'Tab para limpiar y transformar texto' },
          desc: { 'zh-Hans': '一键去除格式、格式化 JSON、Base64 / URL 编解码、命名风格互转与多步骤自定义工作流。', 'zh-Hant': '一鍵去除格式、格式化 JSON、Base64 / URL 編解碼、命名風格互轉與多步驟自訂工作流。', en: 'Strip formatting, format JSON, encode/decode Base64 & URLs, convert casing, or chain custom workflows.', ja: '書式なし化、JSON 整形、Base64/URL 変換、命名規則変更、複数ステップの自作ワークフローに対応。', ko: '서식 제거, JSON 정리, Base64/URL 인코딩, 대소문자 표기법 변환 및 다단계 맞춤 워크플로를 지원합니다.', de: 'Formatierung entfernen, JSON formatieren, Base64/URL konvertieren, Casing anpassen und Workflows anlegen.', fr: 'Texte brut, formatage JSON, encodage Base64/URL, casse variable et chaînage de flux personnalisés.', es: 'Quita formatos, limpia JSON, codifica Base64/URL, cambia estilos de texto y crea flujos de trabajo.' }
        },
        {
          title: { 'zh-Hans': '端侧屏幕框选与图片 OCR', 'zh-Hant': '端側螢幕框選與圖片 OCR', en: 'On-Device Screen & Image OCR', ja: '完全ローカルの画面・画像 OCR', ko: '기기 내 화면 영역 및 이미지 OCR', de: 'Lokales Bildschirm- & Bild-OCR', fr: 'OCR local pour capture d’écran et images', es: 'OCR local de pantalla e imágenes' },
          desc: { 'zh-Hans': '按 ⌘⇧2 框选屏幕任意区域，由 Apple Vision 在本机秒级识别文字与二维码，不经云端。', 'zh-Hant': '按 ⌘⇧2 框選螢幕任意區域，由 Apple Vision 在本機秒級辨識文字與二維碼，不經雲端。', en: 'Press ⌘⇧2 to capture any screen region. Apple Vision extracts text and QR codes locally in seconds.', ja: '⌘⇧2 で画面を範囲選択。Apple Vision が文字や QR コードを端末内で瞬時に読み取ります。', ko: '⌘⇧2로 화면을 선택하면 Apple Vision이 텍스트와 QR 코드를 기기 내에서 즉시 인식합니다.', de: '⌘⇧2 erfasst jeden Bildschirmbereich. Apple Vision erkennt Text und QR-Codes lokal in Sekunden.', fr: '⌘⇧2 pour capturer une zone. Apple Vision extrait textes et codes QR en local en quelques secondes.', es: '⌘⇧2 para capturar cualquier área. Apple Vision reconoce texto y códigos QR localmente al instante.' }
        },
        {
          title: { 'zh-Hans': '隐私默认：钥匙串加密与机密过滤', 'zh-Hant': '隱私預設：鑰匙圈加密與機密過濾', en: 'Private by Default: Keychain & Secrets Filter', ja: '安心のプライバシー：Keychain 暗号化・機密保護', ko: '기본적인 개인정보 보호: 키체인 암호화 및 비밀정보 필터', de: 'Privat per Standard: Keychain & Passwortfilter', fr: 'Confidentialité par défaut : Trousseau & filtre de secrets', es: 'Privacidad por defecto: Llavero y filtro de claves' },
          desc: { 'zh-Hans': '本地 AES-GCM 加密，自动跳过密码管理器复制内容，可选私人 iCloud 同步由你全权掌控。', 'zh-Hant': '本機 AES-GCM 加密，自動略過密碼管理器複製內容，可選私人 iCloud 同步由你全權掌控。', en: 'Encrypted with AES-GCM via Keychain, auto-ignores password managers, and optional private iCloud sync.', ja: 'Keychain 鍵による AES-GCM 暗号化。パスワード管理アプリを自動除外、任意同期も完全管理可能。', ko: '키체인 키로 AES-GCM 암호화되며, 비밀번호 관리자를 자동 제외하고 비공개 iCloud 동기화를 제어합니다.', de: 'AES-GCM-Verschlüsselung im Keychain, automatisches Ignorieren von Passwort-Managern und optionaler Sync.', fr: 'Chiffrement AES-GCM via le Trousseau, exclusion des gestionnaires de mots de passe et sync iCloud optionnelle.', es: 'Cifrado AES-GCM con el Llavero, omite gestores de contraseñas y permite sincronización opcional con iCloud.' }
        }
      ],
      factStrip: {
        'zh-Hans': ['100% 本地运算', '无分析与广告', '密码管理器自动过滤'],
        'zh-Hant': ['100% 本地運算', '無分析與廣告', '密碼管理器自動過濾'],
        en: ['100% On-Device', 'No Analytics or Ads', 'Password Managers Ignored'],
        ja: ['100% ローカル処理', '分析・広告なし', 'パスワード管理アプリ自動除外'],
        ko: ['100% 기기 내 처리', '분석 및 광고 없음', '비밀번호 관리자 자동 제외'],
        de: ['100% lokal verarbeitet', 'Keine Analyse/Werbung', 'Passwort-Manager ignoriert'],
        fr: ['100% traitement local', 'Sans analyse ni pub', 'Exclusion gestionnaires mdp'],
        es: ['100% procesamiento local', 'Sin análisis ni anuncios', 'Gestores de claves ignorados']
      },
      privacySummary: {
        'zh-Hans': 'PastePipe 默认纯本地离线运行。历史记录、工作流与文本均使用 macOS 钥匙串密钥在本地加密存储；不设云端账户，不收集任何使用分析。可选的 iCloud 同步仅在你主动开启后使用个人私有数据库。',
        'zh-Hant': 'PastePipe 預設純本機離線執行。歷史紀錄、工作流與文字均使用 macOS 鑰匙圈金鑰在本機加密儲存；不設雲端帳戶，不收集任何使用分析。可選的 iCloud 同步僅在你主動開啟後使用個人私有資料庫。',
        en: 'PastePipe runs strictly on-device by default. History, snippets, and workflows are encrypted locally with a key held in macOS Keychain. No account, no analytics. Optional iCloud sync uses your private database only when explicitly enabled.',
        ja: 'PastePipe は初期状態で完全に端末内ローカルで動作します。履歴やワークフローは macOS Keychain の鍵で暗号化保存されます。アカウントや解析機能はありません。任意の iCloud 同期は明示的に有効にした場合のみ動作します。',
        ko: 'PastePipe는 기본적으로 기기 로컬에서 안전하게 실행됩니다. 기록, 스니펫 및 워크플로는 macOS 키체인의 키로 로컬 암호화됩니다. 계정이나 분석이 없습니다. 선택적 iCloud 동기화는 켰을 때만 개인 데이터베이스를 사용합니다.',
        de: 'PastePipe arbeitet standardmäßig vollständig lokal auf deinem Mac. Verlauf, Snippets und Workflows werden mit einem Schlüssel im macOS Keychain verschlüsselt. Kein Konto, keine Analyse. Optionaler iCloud-Sync nutzt nur deine private Datenbank.',
        fr: 'PastePipe fonctionne entièrement en local par défaut. L’historique, les snippets et les flux sont chiffrés localement avec une clé stockée dans le Trousseau macOS. Aucun compte ni suivi. La synchronisation iCloud optionnelle reste privée.',
        es: 'PastePipe opera estrictamente de manera local por defecto. El historial, fragmentos y flujos se cifran con una clave guardada en el Llavero de macOS. Sin cuentas ni análisis. La sincronización opcional con iCloud es completamente privada.'
      },
      customFaq: {
        'zh-Hans': [
          { q: 'PastePipe 会记录或上传我的密码吗？', a: '不会。PastePipe 开箱即默认忽略 1Password、Bitwarden、KeePassXC、Apple 钥匙串等常见密码管理器复制的内容，同时具备端侧机密探测器自动拦截疑似 API Key、Token 和密码。所有数据只在本地或你个人的私有 iCloud 中存在，绝不上传到开发者服务器。' },
          { q: '屏幕识字（OCR）需要联网吗？', a: '完全不需要。PastePipe 使用 Apple Vision 框架完全在 Mac 本地芯片上执行图像识别，离线状态下同样毫秒级返回识别结果。' },
          { q: '直接粘贴功能为什么需要辅助功能权限？', a: '在选定历史项后直接自动粘贴到前台应用是可选功能，需要 macOS 辅助功能（Accessibility）权限来模拟按键。如果未授予权限，PastePipe 依然可以完整工作（回车复制到剪贴板，由你手动 ⌘V 粘贴），核心功能不受任何限制。' },
          { q: '如何彻底清除所有历史和数据？', a: '在设置中你可以一键清空全部历史记录、标签和工作流。直接删除应用及其容器目录也会彻底销毁所有本地加密数据。若开启了 iCloud 同步，在应用内清空本地项目也会同步删除个人私有 iCloud 中的对应副本。' }
        ],
        'zh-Hant': [
          { q: 'PastePipe 會記錄或上傳我的密碼嗎？', a: '不會。PastePipe 預設略過 1Password、Bitwarden、KeePassXC、Apple 鑰匙圈等常見密碼管理器複製的內容，並具備端側機密偵測器自動攔截疑似 API Key、Token 與密碼。所有資料僅在本機或你的個人私有 iCloud，絕不上傳至開發者伺服器。' },
          { q: '螢幕辨識（OCR）需要連網嗎？', a: '完全不需要。PastePipe 使用 Apple Vision 框架完全在 Mac 本地晶片上執行圖像辨識，離線狀態下一樣毫秒級返回辨識結果。' },
          { q: '直接貼上功能為什麼需要輔助使用權限？', a: '在選定歷史項目後直接自動貼上至前景 App 為可選功能，需要 macOS 輔助使用（Accessibility）權限來模擬按鍵。若未授予權限，PastePipe 依然能完整運作（按 Enter 複製至剪貼板，手動 ⌘V 貼上），核心功能不受限制。' },
          { q: '如何徹底清除所有歷史與資料？', a: '在設定中你可一鍵清除全部歷史紀錄、標籤與工作流。直接移除 App 及其容器目錄也會徹底銷毀所有本機加密資料。若開啟了 iCloud 同步，在 App 內清空本機項目也會同步刪除個人私有 iCloud 中的對應副本。' }
        ],
        en: [
          { q: 'Does PastePipe record or upload passwords?', a: 'No. PastePipe ignores password managers such as 1Password, Bitwarden, KeePassXC, and Apple Keychain out of the box. It also includes an on-device secrets filter to skip likely API keys and tokens. Content never touches a developer server.' },
          { q: 'Does Screen OCR require an internet connection?', a: 'Not at all. OCR uses Apple Vision to recognize text entirely on-device, functioning with instant speed even completely offline.' },
          { q: 'Why does direct paste ask for Accessibility permission?', a: 'Directly pasting into the active app upon selecting a clip is an optional convenience that requires macOS Accessibility permission to simulate keystrokes. Without it, pressing Return copies the text to the clipboard so you can paste manually with ⌘V.' },
          { q: 'How do I permanently delete my data?', a: 'You can clear all clipboard history, tags, and workflows in Settings. Deleting the app container removes all local encrypted data. If iCloud sync was enabled, deleting clips locally synchronizes the deletion to your private iCloud database.' }
        ]
      },
      faq: [
        ['PastePipe 会记录或上传密码吗？', '不会。默认自动忽略主流密码管理器，且内置端侧过滤器拦截疑似敏感密钥。无自建服务器。'],
        ['屏幕识字（OCR）需要联网吗？', '不需要。基于 Apple Vision 纯端侧计算，离线亦可秒级识别。'],
        ['直接粘贴为什么需要辅助功能权限？', '直接粘贴到上一个应用需要辅助功能权限来模拟按键。未授权时仍可正常使用回车复制到剪贴板。']
      ]
    },
};
  const cloudAccountLabel = {
    'zh-Hans':'无需开发者云账户','zh-Hant':'無需開發者雲端帳戶',en:'No developer cloud account',
    ja:'開発者のクラウドアカウント不要',ko:'개발자 클라우드 계정 불필요',
    de:'Kein Entwickler-Cloudkonto',fr:'Aucun compte cloud développeur',es:'Sin cuenta en la nube del desarrollador'
  };
  for (const lang of Object.keys(L)) L[lang].noAccount = cloudAccountLabel[lang];
  const fullLang = { 'zh-Hans':0,'zh-Hant':7,en:1,fr:2,de:3,es:4,ko:5,ja:6 };
  const productText = {
    'beauty-folder': {
      title:['文件夹图标与图像处理','Folder and image handling','Traitement des dossiers et images','Ordner- und Bildverarbeitung','Carpetas e imágenes','폴더 및 이미지 처리','フォルダと画像の処理','資料夾與圖片處理'],
      body:['只在本机临时处理你明确选择的文件夹路径和导入图片，不递归读取目录中的其他文件，也不上传路径或图像。','Selected folder paths and imported images are handled temporarily on your Mac. The app does not recursively read other files or upload paths or images.','Les chemins des dossiers et images choisis sont traités temporairement sur votre Mac. L’app ne parcourt pas les autres fichiers et ne téléverse rien.','Ausgewählte Ordnerpfade und Bilder werden vorübergehend lokal verarbeitet. Andere Dateien werden nicht rekursiv gelesen und nichts wird hochgeladen.','Las rutas e imágenes seleccionadas se procesan temporalmente en tu Mac. No se leen otros archivos de forma recursiva ni se suben datos.','선택한 폴더 경로와 이미지는 Mac에서 임시 처리합니다. 다른 파일을 재귀적으로 읽거나 업로드하지 않습니다.','選択したフォルダのパスと画像は Mac 上で一時的に処理します。他のファイルを再帰的に読み取ったりアップロードしたりしません。','只在本機暫時處理你選取的資料夾路徑和匯入圖片，不會遞迴讀取其他檔案，也不會上傳路徑或圖片。'],
      local:['自定义颜色和评分提示标记可保存在本机偏好设置中。','Custom colors and a review-prompt marker may be saved in local preferences.','Les couleurs et l’état du rappel de note peuvent être enregistrés dans les préférences locales.','Eigene Farben und ein Bewertungsmarker können lokal gespeichert werden.','Los colores y un marcador de solicitud de valoración pueden guardarse localmente.','사용자 색상과 평가 알림 표시는 로컬 환경설정에 저장될 수 있습니다.','カスタムカラーと評価プロンプトの記録はローカル設定に保存される場合があります。','自訂色彩與評分提示標記可能會儲存在本機偏好設定。']
    },
    'caffeineai': {
      title:['按规则读取的本机信号','Local signals used by rules','Signaux locaux des règles','Lokale Signale für Regeln','Señales locales de las reglas','규칙에서 사용하는 로컬 신호','ルールが使うローカル信号','規則使用的本機訊號'],
      body:['启用规则按需读取前台应用、CPU/网络、卷宗、音频/蓝牙、Wi‑Fi 名称、日历活动及电量/热状态。只在本机判断，不上传，也不读取位置坐标。','Enabled rules may read the foreground app, CPU/network, volumes, audio/Bluetooth, Wi-Fi name, calendar activity, and battery/thermal state as needed. These signals stay on the Mac; location coordinates are not read.','Les règles activées peuvent lire l’app active, l’activité CPU/réseau, les volumes, l’audio/Bluetooth, le Wi-Fi, le calendrier et l’état énergétique. Ces signaux restent sur le Mac.','Aktivierte Regeln können aktive App, CPU/Netzwerk, Volumes, Audio/Bluetooth, WLAN, Kalender sowie Batterie und Temperatur auswerten. Diese Signale bleiben lokal.','Las reglas activadas pueden leer la app activa, CPU/red, volúmenes, audio/Bluetooth, Wi-Fi, calendario y batería/temperatura. Las señales permanecen en el Mac.','활성 규칙은 필요에 따라 전면 앱, CPU/네트워크, 볼륨, 오디오/블루투스, Wi-Fi, 캘린더 및 배터리/온도를 읽습니다. 신호는 Mac에만 보관됩니다.','有効なルールは必要に応じて前面アプリ、CPU/ネットワーク、ボリューム、音声/Bluetooth、Wi-Fi、カレンダー、バッテリー/温度を参照します。情報は Mac 内に留まります。','啟用的規則會依需要讀取前景 App、CPU/網路、卷宗、音訊/藍牙、Wi‑Fi、行事曆活動和電池/溫度。訊號只留在 Mac。'],
      local:['偏好与规则保存在应用容器。可选历史最多 2,000 条、最长七天；诊断记录在退出时清除。','Preferences and rules are stored in the app container. Optional history is limited to 2,000 events and seven days; diagnostics clear on quit.','Les préférences et règles restent dans le conteneur de l’app. L’historique facultatif est limité à 2 000 événements et sept jours.','Einstellungen und Regeln bleiben im App-Container. Der optionale Verlauf ist auf 2.000 Ereignisse und sieben Tage begrenzt.','Las preferencias y reglas se guardan localmente. El historial opcional se limita a 2.000 eventos y siete días.','환경설정과 규칙은 앱 컨테이너에 저장됩니다. 선택 기록은 최대 2,000개, 7일로 제한됩니다.','設定とルールはアプリコンテナに保存されます。任意の履歴は最大 2,000 件、7 日間です。','偏好設定和規則儲存在 App 容器。選擇性歷史最多 2,000 筆、保留七天。']
    },
    'drift': {
      title:['扫描结果与文件权限','Scan results and file access','Résultats et accès aux fichiers','Scanergebnisse und Dateizugriff','Resultados y acceso a archivos','스캔 결과 및 파일 접근','スキャン結果とアクセス権','掃描結果與檔案權限'],
      body:['只扫描你在 macOS 中授权的目录。文件名、占用空间和所需元数据在本机读取，扫描数据不会上传。','Drift scans only folders authorized in macOS. Names, allocated sizes, and required metadata are read locally; scan data is not uploaded.','Drift analyse uniquement les dossiers autorisés. Les noms, tailles occupées et métadonnées sont lus localement, sans téléversement.','Drift scannt nur in macOS freigegebene Ordner. Namen, belegter Speicher und nötige Metadaten werden lokal gelesen.','Drift analiza solo carpetas autorizadas. Los nombres, tamaños ocupados y metadatos se leen localmente y no se suben.','Drift는 macOS에서 허용한 폴더만 검사합니다. 이름, 할당 크기 및 필요한 메타데이터는 로컬에서 읽으며 업로드하지 않습니다.','Drift は macOS で許可されたフォルダのみをスキャンします。名前、割り当て容量、必要なメタデータはローカルで読み取ります。','只掃描你在 macOS 授權的資料夾。檔名、配置大小和所需中繼資料在本機讀取，不會上傳。'],
      local:['扫描快照保存在本机。经你确认的清理项目会移至系统废纸篓；检查受保护位置可能需要完全磁盘访问权限。','Scan snapshots are stored locally. Cleanup items you confirm are moved to the system Trash; protected locations may require Full Disk Access.','Les instantanés restent sur le Mac. Les éléments confirmés sont placés dans la Corbeille ; l’accès complet au disque peut être requis.','Snapshots bleiben lokal. Bestätigte Elemente werden in den Papierkorb verschoben; geschützte Orte können Festplattenvollzugriff erfordern.','Las capturas se guardan localmente. Los elementos confirmados van a la Papelera; algunas ubicaciones requieren Acceso total al disco.','스냅샷은 로컬에 저장됩니다. 확인한 정리 항목은 휴지통으로 이동하며 보호된 위치에는 전체 디스크 접근 권한이 필요할 수 있습니다.','スナップショットはローカル保存されます。確認した項目はゴミ箱へ移動します。保護された場所にはフルディスクアクセスが必要な場合があります。','掃描快照保存在本機。你確認清理的項目會移至系統垃圾桶；受保護位置可能需要完全磁碟存取權限。']
    },
    'folderify': {
      title:['本机规则与文件夹操作','Local rules and folder operations','Règles locales et dossiers','Lokale Regeln und Ordneraktionen','Reglas locales y carpetas','로컬 규칙 및 폴더 작업','ローカルルールとフォルダ操作','本機規則與資料夾操作'],
      body:['智能匹配在本机读取文件夹名称、Finder 标签和目录结构，不读取文件内容。仅修改你选择的文件夹图标。','Smart matching reads folder names, Finder tags, and directory structure locally, not file contents. Only selected folder icons are changed.','La correspondance lit localement noms, étiquettes Finder et structure, pas le contenu des fichiers. Seuls les dossiers sélectionnés sont modifiés.','Die intelligente Zuordnung liest lokal Ordnernamen, Finder-Tags und Struktur, keine Dateiinhalte. Nur ausgewählte Ordner werden geändert.','La coincidencia lee nombres, etiquetas y estructura localmente, no el contenido. Solo cambia los iconos de carpetas elegidas.','스마트 매칭은 폴더 이름, Finder 태그 및 구조를 로컬에서 읽으며 파일 내용은 읽지 않습니다. 선택한 폴더 아이콘만 변경합니다.','スマート一致はフォルダ名、Finder タグ、構造をローカルで読み取り、ファイル内容は読みません。選択したフォルダのみ変更します。','智慧比對在本機讀取資料夾名稱、Finder 標籤和結構，不讀取檔案內容。只會變更你選取的資料夾圖示。'],
      local:['规则、设计设置和历史保存在本机。应用前可检查操作；支持的批量图标更改可通过 Undo Vault 回退。','Rules, design settings, and history stay local. Review changes before applying; supported batch icon changes can be reverted in Undo Vault.','Règles, réglages et historique restent locaux. Vérifiez avant application ; les changements groupés pris en charge sont annulables.','Regeln, Design und Verlauf bleiben lokal. Prüfe Änderungen vorab; unterstützte Stapeländerungen lassen sich zurücksetzen.','Reglas, diseño e historial permanecen localmente. Revisa antes de aplicar; algunos cambios por lotes pueden revertirse.','규칙, 디자인 설정 및 기록은 로컬에 저장됩니다. 적용 전에 검토하고 지원되는 일괄 변경은 Undo Vault에서 되돌릴 수 있습니다.','ルール、デザイン設定、履歴はローカル保存されます。適用前に確認し、対応する一括変更は Undo Vault で戻せます。','規則、設計設定和歷史保存在本機。套用前可檢查；支援的批次圖示變更可用 Undo Vault 復原。']
    },
    'localdrop': {
      title:['局域网共享与网络连接','LAN sharing and network connections','Partage local et connexions réseau','LAN-Freigabe und Netzwerkverbindungen','Compartición LAN y conexiones','LAN 공유 및 네트워크 연결','LAN 共有とネットワーク接続','區域網路分享與連線'],
      body:['服务器在你的 Mac 上运行，向连接设备提供你明确选中的共享文件夹。共享文件会传输给这些客户端。','The server runs on your Mac and serves folders you select to connected devices. Shared files are transferred to those clients.','Le serveur fonctionne sur votre Mac et transmet les dossiers choisis aux appareils connectés.','Der Server läuft auf deinem Mac und stellt ausgewählte Ordner verbundenen Geräten bereit.','El servidor funciona en tu Mac y ofrece las carpetas elegidas a los dispositivos conectados.','서버는 Mac에서 실행되며 선택한 공유 폴더를 연결된 기기에 제공합니다.','サーバーは Mac 上で動作し、選択した共有フォルダを接続端末に提供します。','伺服器在你的 Mac 執行，向已連線裝置提供你選取的共享資料夾。'],
      local:['账户、权限和服务配置保存在本机；诊断事件可脱敏导出，配置备份排除密码。购买由 Apple StoreKit 处理。','Accounts, permissions, and configuration are stored locally. Diagnostics can be exported with redaction; backups omit passwords. Apple StoreKit handles purchases.','Comptes et réglages restent locaux. Les diagnostics sont expurgés à l’export et les sauvegardes excluent les mots de passe.','Konten und Einstellungen bleiben lokal. Diagnosen können bereinigt exportiert werden; Sicherungen enthalten keine Passwörter.','Cuentas y ajustes se guardan localmente. Los diagnósticos se exportan anonimizados; las copias excluyen contraseñas.','계정과 설정은 로컬에 저장됩니다. 진단 내보내기는 비식별 처리되며 백업에는 비밀번호가 포함되지 않습니다.','アカウントと設定はローカル保存されます。診断の書き出しは情報を伏せ、バックアップにパスワードは含まれません。','帳戶、權限與設定保存在本機。診斷可去識別後匯出，備份不含密碼。購買由 Apple StoreKit 處理。']
    },
    'medialens': {
      title:['媒体文件与分析结果','Media files and analysis results','Médias et résultats d’analyse','Mediendateien und Analyseergebnisse','Archivos y resultados','미디어 파일 및 분석 결과','メディアファイルと解析結果','媒體檔案與分析結果'],
      body:['在本机分析媒体元数据和容器结构。分析时不上传或修改源媒体，也不请求播放列表引用的远程资源。','Media metadata and container structure are analyzed locally. Source media is not uploaded or modified, and remote playlist resources are not requested.','Les métadonnées et structures sont analysées localement. Les fichiers ne sont ni téléversés ni modifiés ; aucune ressource distante n’est demandée.','Metadaten und Containerstruktur werden lokal analysiert. Quelldateien werden weder hochgeladen noch geändert; entfernte Playlist-Ressourcen werden nicht abgerufen.','Los metadatos y la estructura se analizan localmente. No se suben ni modifican medios ni se solicitan recursos remotos de listas.','미디어 메타데이터와 컨테이너 구조는 로컬에서 분석됩니다. 원본을 업로드하거나 수정하지 않으며 원격 재생목록 리소스를 요청하지 않습니다.','メタデータとコンテナ構造をローカル解析します。元ファイルをアップロード・変更せず、プレイリストのリモート資源も取得しません。','在本機分析媒體中繼資料與容器結構。不會上傳或修改來源媒體，也不會請求播放清單引用的遠端資源。'],
      local:['历史、偏好设置和分析缓存可保存在本机。报告写入你选择的位置；批量报告可隐藏敏感主目录路径。','History, preferences, and analysis cache may be stored locally. Reports go to a location you choose; batch reports can redact a sensitive home path.','Historique, préférences et cache restent locaux. Les rapports vont à l’emplacement choisi et peuvent masquer le chemin personnel.','Verlauf, Einstellungen und Cache bleiben lokal. Berichte werden am gewählten Ort gespeichert und können den Benutzerpfad verbergen.','El historial, preferencias y caché son locales. Los informes se guardan donde elijas y pueden ocultar la ruta personal.','기록, 환경설정 및 분석 캐시는 로컬에 저장될 수 있습니다. 보고서는 선택한 위치에 저장되며 개인 경로를 숨길 수 있습니다.','履歴、設定、キャッシュはローカル保存されます。レポートは選択場所に保存し、ホームパスを伏せられます。','歷史、偏好設定和分析快取保存在本機。報告寫入你選擇的位置；批次報告可隱藏敏感主目錄路徑。']
    },
    'zipmaster': {
      title:['归档处理与文件校验','Archive processing and file checks','Archives et vérification','Archivverarbeitung und Dateiprüfung','Archivos y verificación','압축 파일 처리 및 검증','アーカイブ処理と検証','封存檔處理與檔案校驗'],
      body:['创建、浏览、解压和校验都在本机进行。应用仅在 macOS 授权范围内访问你选择的文件。','Creation, browsing, extraction, and verification run locally. The app accesses selected files only within macOS authorization.','Création, navigation, extraction et vérification sont locales. L’app accède aux fichiers dans le cadre des autorisations macOS.','Erstellen, Durchsuchen, Entpacken und Prüfen erfolgen lokal und nur mit macOS-Berechtigung.','Crear, explorar, extraer y verificar se hace localmente y dentro de los permisos de macOS.','생성, 탐색, 압축 해제 및 검증은 로컬에서 수행되며 macOS 권한 범위 내에서만 파일에 접근합니다.','作成、閲覧、展開、検証はローカルで行われ、macOS の許可範囲内でのみアクセスします。','建立、瀏覽、解壓和校驗都在本機進行，只在 macOS 授權範圍內存取檔案。'],
      local:['归档密码只用于当前任务，不会上传或共享。SHA-256 匹配表示内容与清单值一致，不验证发送者身份。','Archive passwords are used only for the current task and are not uploaded or shared. A SHA-256 match confirms content, not sender identity.','Le mot de passe ne sert qu’à la tâche en cours. Une correspondance SHA-256 confirme le contenu, pas l’identité de l’expéditeur.','Archivpasswörter gelten nur für den aktuellen Vorgang. Ein SHA-256-Treffer bestätigt den Inhalt, nicht die Absenderidentität.','La contraseña se usa solo en la tarea actual. SHA-256 confirma el contenido, no la identidad del remitente.','압축 암호는 현재 작업에만 사용됩니다. SHA-256 일치는 내용을 확인할 뿐 발신자 신원을 증명하지 않습니다.','パスワードは現在の処理にのみ使用します。SHA-256 の一致は内容を確認しますが、送信者は証明しません。','封存檔密碼只用於目前任務，不會上傳或共享。SHA-256 相符代表內容一致，不驗證傳送者身分。']
    },
    'couple': {
      title:['家庭资料与生活记录','Household and Family Records','Données du foyer','Haushaltsdaten','Datos del hogar','가정 및 생활 기록','暮らしと家庭の記録','家庭資料與生活記錄'],
      body:[
        '资产账本、愿望、纪念日、待办与心情记录仅用于小家日常管理与统计。家庭资料（证件、医疗、紧急联系人）仅在主动添加时在设备端处理。',
        'Expenses, budgets, wishlists, anniversaries, tasks, and moods support shared household management. Sensitive family records are handled on-device.',
        'Les dépenses, budgets, souhaits, anniversaires et humeurs soutiennent la vie du foyer. Les dossiers de famille sont traités en local.',
        'Ausgaben, Budgets, Jahrestage und Notizen dienen der gemeinsamen Haushaltsführung. Sensible Dokumente verbleiben auf dem Gerät.',
        'Los gastos, presupuestos, aniversarios y notas facilitan la vida en pareja. Los documentos familiares se procesan localmente.',
        '지출, 예산, 기념일, 할 일 및 기분 기록은 가정 관리를 위해 사용됩니다. 민감한 가족 자료는 기기 내에서 처리됩니다.',
        '家計簿、記念日、ToDo、気分の記録は暮らしの管理のために使用されます。大切な家庭資料は端末内で安全に処理されます。',
        '資產帳本、願望、紀念日、待辦與心情記錄僅用於小家日常管理與統計。家庭資料（證件、醫療、緊急聯絡人）僅在主動新增時於裝置端處理。'
      ],
      local:[
        '数据保存在本机及个人私有 iCloud。完整证件号码在本机使用 AES-GCM 加密，密钥存放在设备钥匙串中，生物识别由 iOS 系统验证。',
        'Records are stored on-device and in private iCloud. Full document numbers are encrypted on-device via AES-GCM with Keychain keys; Face ID is validated by iOS.',
        'Les données restent sur l’appareil et dans votre iCloud privé. Les numéros sensibles sont chiffrés en local (AES-GCM) ; Face ID est géré par iOS.',
        'Daten verbleiben lokal und in der privaten iCloud. Vollständige Nummern werden per AES-GCM verschlüsselt; Face ID wird über iOS ausgeführt.',
        'Los datos se guardan en el dispositivo y en iCloud privado. Los números confidenciales se cifran con AES-GCM; Face ID lo gestiona iOS.',
        '데이터는 기기와 개인 iCloud에 보관됩니다. 중요 번호는 AES-GCM으로 로컬 암호화되며 생체 인증은 iOS가 처리합니다.',
        'データは端末内および個人 iCloud に保管されます。重要番号は AES-GCM で端末暗号化され、生体認証は iOS が安全に処理します。',
        '資料保存在本機及個人私有 iCloud。完整證件號碼在本機使用 AES-GCM 加密，金鑰存放於裝置鑰匙圈中，生物辨識由 iOS 系統驗證。'
      ]
    },
        'dropsqueeze': {
      title: [
        '媒体文件与剪贴板处理',
        'Media Files & Clipboard Processing',
        'Traitement des médias et du presse-papiers',
        'Medien- und Zwischenablage-Verarbeitung',
        'Procesamiento de medios y portapapeles',
        '미디어 파일 및 클립보드 처리',
        'メディアファイルとクリップボード処理',
        '媒體檔案與剪貼簿處理'
      ],
      body: [
        'DropSqueeze 在 Mac 本地执行所有图片、视频、GIF 及 PDF 媒体压缩，绝不向开发者或第三方服务器上传文件。剪贴板监控仅在产生更小体积时置回，并在会话内存中安全维护临时收集条。',
        'DropSqueeze performs all image, video, GIF, and PDF compression locally on your Mac without uploading media to external servers. Clipboard monitoring only replaces contents when a smaller result is achieved, keeping recent items in session memory only.',
        'DropSqueeze effectue toutes les compressions d’images, vidéos, GIF et PDF localement sur votre Mac sans téléverser aucun fichier. Le presse-papiers n’est remplacé que lorsque le résultat est plus léger.',
        'DropSqueeze komprimiert Bilder, Videos, GIFs und PDFs vollständig lokal auf Ihrem Mac ohne Datenuploads. Die Zwischenablage wird nur aktualisiert, wenn die Datei kleiner geworden ist.',
        'DropSqueeze procesa imágenes, vídeos, GIFs y PDFs de forma 100% local en tu Mac sin subir datos a servidores. El portapapeles solo se reemplaza cuando el archivo resultante es más pequeño.',
        'DropSqueeze는 외부 서버로 데이터를 업로드하지 않고 Mac 로컬에서 이미지, 비디오, GIF, PDF를 압축합니다. 더 작은 파일이 생성되었을 때만 클립보드를 교체합니다.',
        'DropSqueeze は画像・動画・GIF・PDF の圧縮をすべてローカルの Mac 上で行い、外部サーバーへアップロードしません。容量が削減できた場合のみクリップボードを更新します。',
        'DropSqueeze 在 Mac 本機執行所有圖片、影片、GIF 及 PDF 媒體壓縮，絕不上傳檔案至伺服器。剪貼簿監聽僅在產生更小檔案時寫回，臨時收集條僅保留於記憶體中。'
      ],
      local: [
        '监控文件夹通过 App Sandbox 安全作用域书签访问；原文件始终保留。历史记录、统计数据与偏好设置保存在本机 UserDefaults，可随时在设置中一键清空。',
        'Monitored folders are accessed via App Sandbox security-scoped bookmarks; original files are always kept intact. History, savings statistics, and settings are stored locally in UserDefaults and can be cleared anytime.',
        'L’accès aux dossiers surveillés s’effectue via des signets sécurisés App Sandbox ; les originaux sont préservés. Historique, statistiques et réglages restent stockés localement.',
        'Ordnerzugriffe erfolgen über sandbox-sichere Lesezeichen; Originaldateien bleiben stets unberührt. Verlauf, Einsparungsstatistiken und Einstellungen werden lokal gespeichert.',
        'El acceso a carpetas usa marcadores seguros de App Sandbox; los archivos originales nunca se sobreescriben. Historial, estadísticas y ajustes se guardan localmente.',
        '감시 폴더는 App Sandbox 보안 북마크를 통해 접근하며 원본 파일은 항상 안전하게 유지됩니다. 압축 기록, 통계, 환경설정은 로컬에만 저장됩니다.',
        '監視フォルダは App Sandbox のセキュリティスコープブックマーク経由でアクセスし、元ファイルは保護されます。履歴や節約統計はローカルにのみ保存されます。',
        '監控資料夾透過 App Sandbox 安全範圍書籤存取；原始檔案一律妥善保留。歷史紀錄、節省空間統計與偏好設定保存在本機，可隨時在設定中一鍵清空。'
      ]
    },
'shelflife': {
      title:[
        '器物档案与凭证附件',
        'Inventory and Attachments',
        'Inventaire et pièces jointes',
        'Inventar und Anhänge',
        'Inventario y adjuntos',
        '물품 목록 및 첨부 파일',
        '持ち物リストと添付書類',
        '器物檔案與憑證附件'
      ],
      body:[
        '录入的器物、购买记录、保修期、耗材周期、维修与理赔资料保存在本机。小票识别与条码查询在本机完成，未匹配条码不会上传至外部目录。',
        'Items, purchase records, warranty deadlines, consumable lifespans, maintenance, and claims are stored locally. Receipt OCR and barcode checks run on-device without uploading unmatched codes.',
        'Articles, achats, garanties, consommables, entretiens et sinistres sont stockés en local. L’OCR et les codes-barres restent sur l’appareil sans téléversement.',
        'Artikel, Einkäufe, Garantien, Verbrauchsteile, Wartungen und Schadensfälle bleiben lokal. OCR und Barcode-Abfragen laufen auf dem Gerät ohne Uploads.',
        'Artículos, compras, garantías, consumibles y siniestros se guardan en local. El OCR y la consulta de códigos se procesan en el dispositivo sin subidas.',
        '입력한 물품, 구매 내역, 보증 기한, 소모품 수명 및 수리 내역은 로컬에 저장됩니다. 영수증 OCR과 바코드 검색은 기기 내에서만 처리됩니다.',
        '登録した品目、購入記録、保証期限、消耗品サイクル、修理履歴は端末内に保存されます。レシート OCR とバーコード照合は端末内で処理されます。',
        '輸入的器物、購買紀錄、保固期、耗材週期、維修與理賠資料儲存在本機。收據識別與條碼查詢在本機完成，未比對條碼不會上傳至外部目錄。'
      ],
      local:[
        '数据保存在本机及个人私有 iCloud。可选开启家庭共享时通过 Apple CloudKit 同步；支持设置密码加密导出本地备份。系统提醒事项与通知均在本地排程。',
        'Data is stored on-device and in private iCloud, with optional CloudKit family sharing. Local backups support password encryption. Reminders and notifications are scheduled locally.',
        'Données conservées en local et sur votre iCloud privé, avec partage familial CloudKit optionnel. Sauvegardes chiffrées par mot de passe. Rappels et notifications planifiés en local.',
        'Daten verbleiben lokal und in der privaten iCloud, mit optionaler CloudKit-Familienfreigabe. Lokale Backups mit Passwortschutz. Erinnerungen und Mitteilungen werden lokal geplant.',
        'Los datos se guardan en el dispositivo y en iCloud privado, con uso compartido familiar opcional por CloudKit. Copias locales con contraseña. Recordatorios y notificaciones locales.',
        '데이터는 기기 및 개인 iCloud에 저장되며 CloudKit 가족 공유를 지원합니다. 비밀번호 암호화 로컬 백업을 제공하며 미리 알림 및 알림은 로컬에서 예약됩니다.',
        'データは端末内およびプライベート iCloud に保存され、任意の CloudKit ファミリー共有にも対応。パスワード保護バックアップや端末内通知スケジューリングを備えています。',
        '資料儲存在本機及個人私有 iCloud。可選開啟家庭共享時透過 Apple CloudKit 同步；支援設定密碼加密匯出本機備份。系統提醒事項與通知均在本機排程。'
      ]
    },
    'droidbridge': {
      title: [
        '设备直连与本地文件传输',
        'Direct Device Transfer & Local Storage',
        'Transfert direct et stockage local',
        'Direkte Geräteübertragung & lokaler Speicher',
        'Transferencia directa y almacenamiento local',
        '기기 직접 전송 및 로컬 저장소',
        '端末直接転送とローカルストレージ',
        '裝置直連與本機檔案傳輸'
      ],
      body: [
        '应用通过 USB 直连或局域网协议在 Mac 与安卓设备之间传输文件。传输内容由两端设备直接收发，不经过任何开发者中转云服务器。',
        'Files transfer directly between your Mac and Android devices over USB or local network protocols without passing through any developer cloud server.',
        'Les fichiers sont transférés directement entre votre Mac et votre appareil Android via USB ou réseau local sans passer par aucun serveur cloud.',
        'Dateien werden direkt zwischen Mac und Android per USB oder lokalem Netzwerk übertragen – ohne Umweg über Entwickler-Cloud-Server.',
        'Los archivos se transfieren directamente entre tu Mac y Android por USB o red local, sin pasar por servidores en la nube.',
        '파일은 개발자 클라우드 서버를 거치지 않고 USB 또는 로컬 네트워크 프로토콜을 통해 Mac과 Android 간에 직접 전송됩니다.',
        'ファイルは開発者のクラウドサーバーを経由せず、USB またはローカルネットワークを介して Mac と Android の間で直接転送されます。',
        '應用程式透過 USB 直連或區域網路通訊協定在 Mac 與安卓裝置之間傳輸檔案。傳輸內容由兩端裝置直接收發，不經過任何開發者中轉雲端伺服器。'
      ],
      local: [
        '连接历史、安全书签与传输进度保存在 Mac 本机。钥匙串用于保存可选网络凭据，最近传输记录可随时手动清空。内购与订阅由 Apple StoreKit 安全处理。',
        'Connection history, security bookmarks, and transfer logs stay on your Mac. Optional server credentials use macOS Keychain, and transfer logs can be cleared anytime. StoreKit handles purchases.',
        'L’historique, les signets de sécurité et les journaux restent sur votre Mac. Le trousseau macOS protège les identifiants et StoreKit gère les achats.',
        'Verlauf, Sicherheits-Lesezeichen und Protokolle verbleiben auf deinem Mac. Der macOS-Schlüsselbund sichert Zugangsdaten, und StoreKit wickelt Käufe ab.',
        'El historial, marcadores de seguridad y registros permanecen en tu Mac. El llavero de macOS guarda credenciales y StoreKit gestiona las compras.',
        '연결 기록, 보안 책갈피 및 전송 로그는 Mac에 저장됩니다. 서버 자격 증명은 macOS 키체인에 보관되며 StoreKit이 인앱 구매를 처리합니다.',
        '接続履歴、セキュリティブックマーク、転送ログは Mac 内に保存されます。サーバー情報はキーチェーンに保管され、購入は StoreKit が処理します。',
        '連線歷史、安全書籤與傳輸進度保存在 Mac 本機。鑰匙圈用於保存選用網路憑證，最近傳輸紀錄可隨時手動清除。內購與訂閱由 Apple StoreKit 安全處理。'
      ]
    },
    'luxframe': {
      title: [
        '胶片测光、场记与冲扫元数据',
        'Film metering, roll logs, and scan EXIF',
        'Mesure argentique, carnet et EXIF',
        'Film-Belichtungsmessung, Protokolle und EXIF',
        'Medición analógica, registro y EXIF',
        '필름 측광, 롤 로그 및 EXIF 기록',
        '露出測定・フィルム記録・スキャン EXIF',
        '底片測光、場記與沖掃元資料'
      ],
      body: [
        '测光读数、曝光组合、胶卷暗盒场记、相机镜头档案、扫描件 EXIF 参数及快门声音测试均在设备端直接处理。应用不设用户账户系统，不向自建服务器传输个人数据。',
        'Light metering values, exposure settings, film roll logs, camera profiles, scan EXIF metadata, and shutter audio tests are processed entirely on-device. The app operates no user accounts and transmits no personal data to custom servers.',
        'Les mesures de lumière, réglages d’exposition, carnets de bobines, profils d’appareils, métadonnées EXIF et tests d’obturateur sont traités sur l’appareil. Aucun compte tiers ni serveur développeur n’est exploité.',
        'Belichtungsmesswerte, Kameraeinstellungen, Filmtagebücher, Ausrüstungsprofile, EXIF-Metadaten und Verschlussprüfungen werden vollständig lokal verarbeitet. Es gibt keine Entwickler-Konten oder externe Server.',
        'Los valores de medición, ajustes de exposición, diarios de carretes, perfiles de equipo, metadatos EXIF y pruebas de obturador se procesan en el dispositivo. No hay cuentas de usuario ni servidores externos.',
        '측광 수치, 노출 설정, 필름 롤 일지, 카메라 프로필, 스캔 EXIF 메타데이터 및 셔터 오디오 테스트는 기기 내에서 직접 처리됩니다. 별도의 사용자 계정이나 자체 서버 전송이 없습니다.',
        '露出測定値、設定、フィルム記録、機材プロファイル、スキャン EXIF、シャッター音測定はすべて端末内で処理されます。独自アカウントやサーバーへの送信はありません。',
        '測光讀數、曝光組合、底片暗盒場記、相機鏡頭檔案、掃描件 EXIF 參數及快門聲音測試均在裝置端直接處理。App 不設使用者帳號系統，不向自建伺服器傳輸個人資料。'
      ],
      local: [
        '胶卷与配置保存在本机及私有 iCloud。相机与位置按需用于测光和天文计算；快门检测音频仅在内存分析，不保存到磁盘；扫描件导出经你确认写入指定系统相册。',
        'Records and profiles are stored on-device and in private iCloud. Camera and location are used on-demand for metering and celestial tools; shutter audio is analyzed in memory only; scans export to Photos upon confirmation.',
        'Les données restent sur l’appareil et dans votre iCloud privé. Caméra et localisation sont appelées à la demande ; l’audio du testeur reste en mémoire vive ; les scans vont dans Photos après confirmation.',
        'Daten werden lokal und im privaten iCloud gespeichert. Kamera und Ortung werden bedarfsgerecht genutzt; Verschluss-Audiodaten verbleiben im RAM; Scans werden nach Bestätigung in Fotos gespeichert.',
        'Los datos se guardan localmente y en iCloud privado. Cámara y ubicación se usan bajo demanda; el audio del obturador permanece solo en RAM; los escaneos se exportan a Fotos con tu confirmación.',
        '기록과 프로필은 기기 및 개인 iCloud에 저장됩니다. 카메라와 위치는 필요 시 측광과 천문 계산에 사용되며, 셔터 오디오는 메모리에서만 분석되고 스캔 파일은 확인 후 사진 앨범에 저장됩니다.',
        'データは端末内およびプライベート iCloud に保管されます。カメラと位置情報は測光や天文計算時にのみ使用され、シャッター音はメモリ内でのみ解析され、スキャン画像は確認後に写真へ保存されます。',
        '底片與設定保存在本機及私有 iCloud。相機與位置依需要用於測光和天文計算；快門檢測音訊僅於記憶體分析，不儲存至磁碟；掃描件匯出經你確認寫入指定系統相簿。'
      ]
    },
      'netpulse': {
      title: [
        '网络探测、BLE 调试与本地诊断',
        'Network Discovery, BLE Debugging & Local Diagnostics',
        'Découverte réseau, débogage BLE et diagnostic local',
        'Netzwerkerkennung, BLE-Debugging & lokale Diagnose',
        'Detección de red, depuración BLE y diagnóstico local',
        '네트워크 검색, BLE 디버깅 및 로컬 진단',
        'ネットワーク検出・BLE デバッグ・ローカル診断',
        '網路探測、BLE 除錯與本機診斷'
      ],
      body: [
        'BLE 广播与 GATT 交互、局域网设备发现、端口探测、ONVIF 摄像头拉流及测速均在设备端直接与目标设备通信，不经过任何开发者中转云服务器。',
        'BLE advertisements and GATT sessions, LAN device discovery, port probes, ONVIF camera streams, and speed tests communicate directly with target endpoints without developer proxy servers.',
        'Les échanges BLE/GATT, la découverte LAN, les scans de ports, les flux ONVIF et les tests de débit communiquent directement avec les cibles, sans serveur relais du développeur.',
        'BLE/GATT-Sitzungen, LAN-Erkennung, Port-Scans, ONVIF-Streams und Speedtests kommunizieren direkt mit Zielgeräten – ohne Entwickler-Zwischenserver.',
        'Las sesiones BLE/GATT, detección LAN, escaneo de puertos, flujos ONVIF y tests de velocidad se comunican directamente con los dispositivos de destino sin intermediarios.',
        'BLE/GATT 통신, LAN 장치 검색, 포트 검사, ONVIF 스트리밍 및 속도 측정은 개발자 중계 서버 없이 대상 장치와 직접 통신합니다.',
        'BLE/GATT 通信、LAN 機器検出、ポート診断、ONVIF カメラ再生、速度テストは開発者の中継サーバーを経由せず対象端末と直接通信します。',
        'BLE 廣播與 GATT 互動、區域網路裝置搜尋、連接埠探測、ONVIF 攝影機串流及測速均在裝置端直接與目標裝置通訊，不經過任何開發者中轉雲端伺服器。'
      ],
      local: [
        '设备别名、调试宏、测速与 Ping 历史保存在设备受保护沙盒中，并排除在 iCloud 云备份之外。凭据安全存储于钥匙串或仅驻留内存，导出临时报表在分享后自动销毁。',
        'Device aliases, macros, speed-test logs, and Ping histories stay in protected local storage excluded from iCloud backups. Credentials reside in Keychain or memory, and export files are purged after sharing.',
        'Les alias, macros, historiques de ping et de débit sont conservés dans un stockage local protégé exclu d’iCloud. Les identifiants sont au trousseau ou en mémoire, et les exports sont détruits après partage.',
        'Geräte-Aliasse, Makros, Ping- und Speedtest-Verläufe verbleiben im geschützten lokalen Speicher ohne iCloud-Backup. Zugangsdaten liegen im Schlüsselbund oder RAM; Exporte werden gelöscht.',
        'Los alias, macros e historiales de ping y velocidad se guardan en el almacenamiento local protegido excluido de iCloud. Las credenciales están en el llavero o memoria, y los archivos exportados se borran.',
        '장치 별칭, 매크로, Ping 및 속도 측정 기록은 iCloud 백업에서 제외된 로컬 저장소에 보관됩니다. 인증 정보는 키체인이나 메모리에만 유지되며 내보내기 파일은 즉시 삭제됩니다.',
        '機器の別名、マクロ、Ping・速度履歴は iCloud バックアップ対象外の保護領域に保存されます。認証情報はキーチェーンまたはメモリ内のみに保持され、エクスポートファイルは共有後に破棄されます。',
        '裝置別名、除錯巨集、測速與 Ping 歷史保存在裝置受保護沙盒中，並排除在 iCloud 雲端備份之外。憑證安全儲存於鑰匙圈或僅駐留記憶體，匯出暫存報表在分享後自動銷毀。'
      ]
    },
    'pastepipe': {
      title: [
        '剪贴板内容、管道处理与屏幕识字',
        'Clipboard, text pipes, and screen OCR',
        'Presse-papiers, filtres et OCR d’écran',
        'Zwischenablage, Text-Pipes und Bildschirm-OCR',
        'Portapapeles, filtros de texto y OCR',
        '클립보드, 텍스트 파이프라인 및 화면 OCR',
        'クリップボード・テキスト整形・画面 OCR',
        '剪貼板內容、管道處理與螢幕辨識'
      ],
      body: [
        '剪贴板文本、图像、颜色与文件引用仅在你的 Mac 本地捕获与保存。历史记录、片段与工作流使用 macOS 钥匙串生成的 AES-GCM 密钥加密存储。默认忽略密码管理器复制内容，并内置端侧机密规则跳过疑似令牌。屏幕与图像 OCR 均通过 Apple Vision 在本机执行，不上传任何像素或文本。',
        'Clipboard text, images, colors, and file references are captured and stored locally on your Mac. History, snippets, and workflows are encrypted at rest with an AES-GCM key held in your macOS Keychain. Password managers are ignored by default, and an on-device secrets filter skips likely tokens. Screen and image OCR runs locally via Apple Vision without uploading pixels or text.',
        'Les textes, images, couleurs et références de fichiers sont capturés et conservés localement sur votre Mac. L’historique, les snippets et les flux sont chiffrés (AES-GCM) via le Trousseau macOS. Les gestionnaires de mots de passe sont ignorés par défaut et un filtre local écarte les secrets. L’OCR d’écran et d’images fonctionne exclusivement sur l’appareil sans téléversement.',
        'Zwischenablagentexte, Bilder, Farben und Dateireferenzen werden lokal auf deinem Mac erfasst und gespeichert. Verlauf, Snippets und Workflows sind per AES-GCM mit Schlüsseln im macOS Keychain verschlüsselt. Passwort-Manager werden standardmäßig ignoriert; ein lokaler Filter überspringt Tokens. OCR läuft vollständig lokal über Apple Vision ohne Uploads.',
        'Los textos, imágenes, colores y referencias se capturan y guardan localmente en tu Mac. El historial, fragmentos y flujos están cifrados con AES-GCM mediante el Llavero de macOS. Los gestores de contraseñas se omiten por defecto y un filtro local descarta claves. El OCR de pantalla e imágenes opera localmente con Apple Vision sin subir datos.',
        '클립보드 텍스트, 이미지, 색상 및 파일 참조는 Mac 로컬에서만 캡처 및 저장됩니다. 기록, 스니펫 및 워크플로는 macOS 키체인의 AES-GCM 키로 암호화됩니다. 비밀번호 관리자는 기본적으로 제외되며, 로컬 민감정보 필터가 토큰을 건너뜁니다. 화면 및 이미지 OCR은 Apple Vision을 통해 로컬에서 실행되며 데이터를 업로드하지 않습니다.',
        'クリップボードのテキスト、画像、カラー、ファイル参照は Mac ローカルでのみ記録・保存されます。履歴やスニペットは macOS Keychain の AES-GCM 鍵で暗号化されます。パスワード管理アプリは初期状態で除外され、機密フィルタがトークンを自動検知します。画面および画像 OCR は Apple Vision により端末内で実行され、外部へ送信されません。',
        '剪貼板文字、影像、色彩與檔案參照僅在你的 Mac 本機擷取與保存。歷史紀錄、片段與工作流使用 macOS 鑰匙圈產生的 AES-GCM 金鑰加密儲存。預設略過密碼管理器複製內容，並內建端側機密規則跳過疑似權杖。螢幕與影像 OCR 均透過 Apple Vision 在本機執行，不外傳任何像素或文字。'
      ],
      local: [
        '偏好设置、自定义管道工作流、置顶项与加密历史均保存在应用本地沙盒中。可选的辅助功能权限仅在启用自动直接粘贴时使用；屏幕录制权限仅在触发 ⌘⇧2 框选 OCR 时由 macOS 授权用于截取指定区域。',
        'Preferences, custom workflows, pinned items, and encrypted history remain in the local app container. Optional Accessibility access is used only if direct paste is enabled; Screen Recording access is authorized by macOS only when you trigger ⌘⇧2 screen OCR.',
        'Préférences, flux personnalisés et historique chiffré restent dans le conteneur local de l’app. L’accès Accessibilité facultatif ne sert que si le collage direct est activé ; l’accès Enregistrement de l’écran n’est requis que lors du déclenchement de l’OCR d’écran ⌘⇧2.',
        'Einstellungen, eigene Workflows und der verschlüsselte Verlauf verbleiben im lokalen App-Container. Der optionale Bedienungshilfen-Zugriff wird nur bei aktiviertem direktem Einfügen genutzt; die Bildschirmaufnahme nur beim Auslösen des ⌘⇧2-Bildschirm-OCRs.',
        'Las preferencias, flujos personalizados y el historial cifrado residen en el contenedor local de la app. El permiso opcional de Accesibilidad solo se usa al activar el pegado directo; Grabación de pantalla solo se autoriza al iniciar el OCR ⌘⇧2.',
        '환경설정, 맞춤 워크플로 및 암호화된 기록은 로컬 앱 컨테이너에 보관됩니다. 선택적 손쉬운 사용 권한은 직접 붙여넣기 활성화 시에만 쓰이며, 화면 기록 권한은 ⌘⇧2 화면 OCR을 실행할 때만 지정 영역 캡처에 사용됩니다.',
        '設定、カスタムワークフロー、暗号化履歴はローカルアプリコンテナに保持されます。任意のアクセシビリティ権限は直接ペースト有効時のみ、画面収録権限は ⌘⇧2 画面 OCR を実行した時のみ指定領域の取得に使用されます。',
        '偏好設定、自訂管道工作流、置頂項與加密歷史均保存在 App 本機沙盒中。可選的輔助使用權限僅在啟用自動直接貼上時使用；螢幕錄製權限僅在觸發 ⌘⇧2 框選 OCR 時由 macOS 授權用於截取指定區域。'
      ]
    },
};
  const beautyFolderMetadata = [
    '为刷新 Finder 显示，macOS 可能更新文件夹修改时间，并短暂创建后删除一个标记文件。',
    'To refresh Finder, macOS may update the folder modification time and briefly create and remove a marker file.',
    'Pour actualiser Finder, macOS peut modifier la date du dossier et créer puis supprimer brièvement un fichier marqueur.',
    'Zum Aktualisieren des Finders kann macOS das Änderungsdatum des Ordners anpassen und kurz eine Markierungsdatei erstellen und entfernen.',
    'Para actualizar Finder, macOS puede cambiar la fecha de modificación de la carpeta y crear y eliminar brevemente un archivo marcador.',
    'Finder 갱신을 위해 macOS가 폴더 수정 시간을 바꾸거나 표식 파일을 잠시 만들었다가 제거할 수 있습니다.',
    'Finder の更新時に macOS がフォルダの変更日時を更新し、一時的なマーカーファイルを作成・削除する場合があります。',
    '為更新 Finder 顯示，macOS 可能修改資料夾的變更時間，並短暫建立及移除標記檔。'
  ];
  productText['beauty-folder'].body = productText['beauty-folder'].body.map((s,i)=>`${s} ${beautyFolderMetadata[i]}`);
  const caffeineDiskKeepAlive = [
    '启用磁盘保活时，应用保存所选文件路径和安全书签，并按设定间隔读取一个字节，不会修改该文件。',
    'When disk keep-alive is enabled, the app stores the selected file path and security-scoped bookmark and reads one byte at the chosen interval without changing the file.',
    'Lorsque le maintien du disque est activé, l’app mémorise le chemin choisi et son signet de sécurité, puis lit un octet à l’intervalle choisi sans modifier le fichier.',
    'Bei aktiviertem Festplatten-Wachhalten werden Dateipfad und Sicherheits-Lesezeichen gespeichert; in gewählten Abständen wird ein Byte gelesen, ohne die Datei zu ändern.',
    'Al activar el mantenimiento del disco, se guardan la ruta y el marcador de seguridad del archivo elegido y se lee un byte al intervalo indicado sin modificarlo.',
    '디스크 유지 기능을 켜면 선택한 파일 경로와 보안 책갈피를 저장하고 설정 간격마다 1바이트를 읽으며 파일은 수정하지 않습니다.',
    'ディスク維持を有効にすると選択したファイルのパスとセキュリティスコープブックマークを保存し、指定間隔で 1 バイトを読み取ります。ファイルは変更しません。',
    '啟用磁碟保活時會儲存所選檔案路徑與安全書籤，並依指定間隔讀取一個位元組，不會修改檔案。'
  ];
  productText.caffeineai.local = productText.caffeineai.local.map((s,i)=>`${s} ${caffeineDiskKeepAlive[i]}`);
  const sourceLabels = {
    'zh-Hans':['展开详细条款','以下为原语言版本的详细政策正文；上方摘要已提供本网站的简体中文说明。'],
    'zh-Hant':['展開詳細條款','以下為原始語言版本的詳細政策正文；上方摘要已提供本網站的繁體中文說明。'],
    en:['Show detailed policy text','The detailed source policy is shown in its original language; the summary above is provided in English.'],
    ja:['詳細なポリシーを表示','詳細な原文ポリシーを掲載しています。上記に日本語の概要があります。'],
    ko:['상세 정책 보기','상세 원문 정책을 표시합니다. 위에 한국어 요약을 제공합니다.'],
    de:['Detaillierten Richtlinientext anzeigen','Der ausführliche Richtlinientext wird in der Originalsprache angezeigt; oben steht die deutsche Zusammenfassung.'],
    fr:['Afficher le texte détaillé','Le texte détaillé est présenté dans sa langue d’origine ; le résumé ci-dessus est en français.'],
    es:['Mostrar el texto detallado','El texto completo se muestra en su idioma original; el resumen anterior está en español.']
  };
  for (const [lang, labels] of Object.entries(sourceLabels)) { L[lang].sourcePolicy=labels[0]; L[lang].sourceNote=labels[1]; }
  root.APP_CONTENT = { languages:L, products, fullLang, productText, email:'zipmaster_support@126.com' };
})(window);
