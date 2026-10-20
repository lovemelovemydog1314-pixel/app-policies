// Policy text synchronized from TimeWave Views/PrivacyPolicyTranslations.swift and SettingsView.swift (2026-10-20).
window.WAVEDECK_POLICY = {
  "zh-Hant": {
    "title": "5. 軟體更新",
    "effectiveDateLabel": "生效日期：",
    "effectiveDate": "2026 年 9 月 27 日",
    "intro": "感謝您使用 WaveDeck（以下簡稱「本應用程式」）。我們重視您的隱私與資料安全。本頁說明本應用程式如何處理您的資訊及網路校時請求。",
    "privacyHeading": "一、隱私政策",
    "disclaimerHeading": "二、免責聲明",
    "additionalHeading": "三、附加聲明",
    "additionalBody": "WaveDeck 是獨立開發的時間工具，與 Apple Inc.、卡西歐（CASIO）、西鐵城（CITIZEN）、精工（SEIKO）或其他手錶及硬體廠商沒有隸屬或商業合作關係。文中提及的品牌及電波制式名稱（BPC、JJY、WWVB、MSF、DCF77 等）均為各自權利人的註冊商標，僅用於客觀說明技術相容性。",
    "feedbackEmailLabel": "問題回報電子郵件：",
    "qqGroupLabel": "QQ 交流群組：",
    "privacySections": [
      {
        "id": "collection",
        "title": "1. 資訊收集",
        "body": "本應用程式不要求您註冊帳號或登入。訊號計算、手錶方案與發射歷史均保存在您的裝置上，不會由本應用程式上傳。網路校時會向第三方時間服務傳送請求，相關網路資訊如下所述。"
      },
      {
        "id": "network",
        "title": "2. 網路校時與資料處理",
        "body": "• 本應用程式會在啟動時嘗試自動校時；當應用程式回到前景或網路恢復時，若上次同步失敗或距離上次成功同步至少 5 分鐘，也會再次嘗試。您也可以手動重新整理或切換時間來源來發起同步；\n• 同步時，應用程式會透過 UDP 並行查詢所選 NTP/SNTP 時間來源，以及阿里／淘寶、騰訊和 Apple 的 HTTPS 時間服務（HTTP Date 回應）；自動模式會並行比較多個 UDP 候選來源；\n• 這些服務可能收到時間請求資料、來源 IP 位址及標準網路協定中繼資料。本應用程式不會在請求中附加帳號、廣告識別碼、精確位置、手錶方案或發射歷史。各服務如何處理及保留連線資訊，依其各自的隱私政策為準；本應用程式不會在本機記錄這些連線；\n• 六種電波時碼訊號完全由裝置本機音訊硬體即時計算並播放。本應用程式不會錄音或上傳音訊。"
      },
      {
        "id": "logs",
        "title": "3. 日誌與診斷資訊",
        "body": "本應用程式未整合廣告、行為分析、診斷記錄或當機回報 SDK，也不會在本機保存校時請求日誌。若您主動透過電子郵件回報問題，我們會收到您自願提供的資訊，以協助排查。"
      },
      {
        "id": "third-party",
        "title": "4. 第三方服務與 SDK",
        "body": "本應用程式不嵌入第三方商業廣告 SDK、行為統計 SDK 或跨應用程式追蹤器。訊號產生、手錶方案與歷史記錄均在本機處理；網路校時會連線至上文列出的第三方時間服務。"
      },
      {
        "id": "security",
        "title": "5. 資料安全與沙盒機制",
        "body": "本應用程式遵循 Apple App Sandbox 安全模型。手錶方案與發射歷史保存在應用程式沙盒中，可在應用程式內刪除；解除安裝應用程式會移除沙盒資料。本應用程式不會在本機記錄校時請求；遠端時間服務如何保留資料，依其各自的隱私政策為準。"
      },
      {
        "id": "children",
        "title": "6. 兒童隱私",
        "body": "本應用程式並非以未滿 13 歲兒童為對象，也不會要求兒童提供個人資料。與其他使用者相同，時間同步請求會向所連線的時間服務傳送標準連線資訊，例如 IP 位址。"
      },
      {
        "id": "updates",
        "title": "7. 政策更新",
        "body": "我們可能會不定期更新本隱私政策。最新版本將持續於應用程式內公布，並於公布後生效。"
      },
      {
        "id": "contact",
        "title": "8. 聯絡我們",
        "body": "若您對本隱私政策有任何疑問或建議，請透過以下方式聯絡我們。"
      }
    ],
    "disclaimerSections": [
      {
        "id": "scope",
        "title": "1. 使用範圍",
        "body": "本應用程式僅供電波鐘錶愛好者在沒有真實長波電波塔訊號覆蓋的室內環境中，使用近場聲學／電磁諧波輔助校時。使用者不得利用本應用程式從事任何違反法律法規或無線電管理規定的活動。"
      },
      {
        "id": "variability",
        "title": "2. 校時效果與環境差異",
        "body": "手錶接收聲波高次諧波訊號的靈敏度，會受到內建天線方向、錶殼金屬屏蔽、貼合距離及環境聲學噪音等物理因素影響。受客觀物理限制，開發者無法保證所有手錶型號及使用環境都能 100% 成功校時。"
      },
      {
        "id": "precision",
        "title": "3. 校時精度與延遲",
        "body": "本應用程式會根據網路時間樣本校準本機參考時間。網路延遲、系統排程及音訊緩衝都可能造成誤差；介面顯示的延遲或不確定度是測量估算，不代表手錶最終接收精度，也不保證校時成功。"
      },
      {
        "id": "services",
        "title": "4. 第三方校時伺服器的可用性",
        "body": "本應用程式會連線至設定中選擇的 NTP/SNTP 節點，並使用阿里／淘寶、騰訊及 Apple 的 HTTPS 時間回應作為並行參考。這些服務由第三方營運，其可用性及連線資訊處理方式依服務提供者的說明為準。"
      },
      {
        "id": "updates",
        "title": "5. 軟體更新",
        "body": "我們會不定期發布版本，以持續改善調變演算法與使用體驗。建議您將應用程式維持在最新版本，以取得最佳校時效果。"
      }
    ]
  },
  "ja": {
    "title": "5. ソフトウェアの更新",
    "effectiveDateLabel": "発効日：",
    "effectiveDate": "2026年9月27日",
    "intro": "WaveDeckをご利用いただきありがとうございます。本アプリ（以下「本アプリ」）は、お客様のプライバシーとデータの安全を大切にしています。本ページでは、お客様の情報とネットワーク時刻同期リクエストの取り扱いについて説明します。",
    "privacyHeading": "I. プライバシーポリシー",
    "disclaimerHeading": "II. 免責事項",
    "additionalHeading": "III. 追加のお知らせ",
    "additionalBody": "WaveDeck は独立して開発された時刻ツールであり、Apple Inc.、カシオ (CASIO)、シチズン (CITIZEN)、セイコー (SEIKO) などの時計・ハードウェアメーカーとの系列関係や商業提携はありません。記載されているブランド名と電波方式名（BPC、JJY、WWVB、MSF、DCF77 など）は各権利者の登録商標であり、技術的な互換性を客観的に説明する目的でのみ使用しています。",
    "feedbackEmailLabel": "お問い合わせメール：",
    "qqGroupLabel": "QQ グループ：",
    "privacySections": [
      {
        "id": "collection",
        "title": "1. 情報の収集",
        "body": "本アプリでは、アカウント登録やサインインは必要ありません。信号の生成、時計の設定、送信履歴はお使いの端末内に保存され、本アプリからアップロードされることはありません。ネットワーク時刻同期では、以下に記載する第三者の時刻サービスへリクエストを送信します。"
      },
      {
        "id": "network",
        "title": "2. ネットワーク時刻同期とデータ処理",
        "body": "• 起動時に自動同期を試みます。アプリが前面に戻ったとき、またはネットワークが復旧したときに、前回の同期が失敗していた場合、もしくは前回の成功から5分以上経過している場合は再試行します。手動での更新や時刻ソースの切り替えによる同期も可能です。\n• 同期時は、選択した NTP/SNTP 時刻ソースを UDP で照会し、Alibaba／Taobao、Tencent、Apple の HTTP Date 応答を使う HTTPS 時刻サービスにも並行して問い合わせます。自動モードでは複数の UDP 候補を並行して比較します。\n• これらのサービスには、時刻リクエストのデータ、送信元 IP アドレス、標準的なネットワークプロトコルのメタデータが届く場合があります。本アプリはアカウント情報、広告識別子、正確な位置情報、時計の設定、送信履歴をリクエストに付加しません。接続情報の取り扱いと保存期間は各サービスのプライバシーポリシーに従います。本アプリはこれらの接続を端末内に記録しません。\n• 6種類の電波時刻コード信号は端末のオーディオハードウェアでリアルタイムに生成・再生されます。音声の録音やアップロードは行いません。"
      },
      {
        "id": "logs",
        "title": "3. ログと診断情報",
        "body": "本アプリには、広告、行動分析、診断ログ、クラッシュレポート用の SDK は組み込まれておらず、時刻同期リクエストのログも端末内に保存しません。お客様がメールでサポートに連絡した場合は、お客様が任意で提供した情報を受け取り、問題の調査に利用します。"
      },
      {
        "id": "third-party",
        "title": "4. 第三者サービスと SDK",
        "body": "本アプリには、第三者の商用広告 SDK、行動分析 SDK、アプリ横断トラッカーは組み込まれていません。信号生成、時計の設定、履歴は端末内で処理されます。ネットワーク時刻同期では、上記の第三者時刻サービスに接続します。"
      },
      {
        "id": "security",
        "title": "5. データの安全性とサンドボックス",
        "body": "本アプリは Apple の App Sandbox セキュリティモデルに準拠しています。時計の設定と送信履歴はアプリのサンドボックスに保存され、アプリ内で削除できます。アプリをアンインストールするとサンドボックス内のデータも削除されます。本アプリは時刻同期リクエストを端末内に記録しません。外部の時刻サービスによる情報の保存は、各サービスのプライバシーポリシーに従います。"
      },
      {
        "id": "children",
        "title": "6. 子どものプライバシー",
        "body": "本アプリは13歳未満の子どもを対象としておらず、子どもに個人情報の提供を求めません。他のユーザーと同様に、時刻同期リクエストでは接続先の時刻サービスに IP アドレスなどの標準的な接続情報が送信されます。"
      },
      {
        "id": "updates",
        "title": "7. ポリシーの更新",
        "body": "本プライバシーポリシーは随時更新される場合があります。最新版は常にアプリ内に掲載され、掲載後に適用されます。"
      },
      {
        "id": "contact",
        "title": "8. お問い合わせ",
        "body": "本プライバシーポリシーについてご質問やご提案がある場合は、以下の方法でお問い合わせください。"
      }
    ],
    "disclaimerSections": [
      {
        "id": "scope",
        "title": "1. 使用範囲",
        "body": "本アプリは、実際の長波電波塔の電波が届かない屋内環境で、電波時計や電波置時計の愛好家が近距離の音響／電磁高調波を利用して時刻を合わせるための補助ツールです。法令や電波管理規則に違反する目的で本アプリを使用してはなりません。"
      },
      {
        "id": "variability",
        "title": "2. 受信結果と環境による違い",
        "body": "音響高調波信号の受信感度は、時計内部のアンテナの向き、金属製ケースによる遮蔽、スピーカーとの距離、周囲の騒音などの物理的条件に左右されます。こうした制約があるため、開発者はすべての時計モデルや使用環境で同期が必ず成功することを保証できません。"
      },
      {
        "id": "precision",
        "title": "3. 時刻精度と遅延",
        "body": "本アプリはネットワーク時刻サンプルをもとに端末の基準時刻を補正します。ネットワーク遅延、システムの処理タイミング、オーディオバッファによって誤差が生じる場合があります。画面に表示される遅延や不確かさは推定値であり、時計の最終的な受信精度や同期の成功を保証するものではありません。"
      },
      {
        "id": "services",
        "title": "4. 第三者時刻サーバーの利用可能性",
        "body": "本アプリは選択された NTP/SNTP サーバーにアクセスし、Alibaba／Taobao、Tencent、Apple の HTTPS 時刻応答も並行する参照情報として利用します。これらのサービスは第三者が運営しており、利用可能性や接続情報の取り扱いは各提供者の案内に従います。"
      },
      {
        "id": "updates",
        "title": "5. ソフトウェアの更新",
        "body": "変調アルゴリズムとユーザー体験を改善するため、随時アップデートを公開します。最適な時刻同期のため、アプリを最新の状態に保つことをおすすめします。"
      }
    ]
  },
  "de": {
    "title": "5. Softwareupdates",
    "effectiveDateLabel": "Gültig ab: ",
    "effectiveDate": "27. September 2026",
    "intro": "Vielen Dank, dass Sie WaveDeck verwenden. Wir nehmen den Schutz Ihrer Privatsphäre und Ihrer Daten ernst. Diese Seite erläutert, wie die App mit Ihren Informationen und Netzwerkanfragen zur Zeitsynchronisierung umgeht.",
    "privacyHeading": "I. Datenschutzerklärung",
    "disclaimerHeading": "II. Haftungsausschluss",
    "additionalHeading": "III. Ergänzender Hinweis",
    "additionalBody": "WaveDeck ist ein unabhängig entwickeltes Zeitwerkzeug und steht in keiner Verbindung oder geschäftlichen Partnerschaft mit Apple Inc., Casio, Citizen, Seiko oder anderen Uhren- und Hardwareherstellern. Alle genannten Marken und Funkzeitformate (BPC, JJY, WWVB, MSF, DCF77 usw.) sind eingetragene Marken ihrer jeweiligen Inhaber und werden ausschließlich zur sachlichen Beschreibung der technischen Kompatibilität genannt.",
    "feedbackEmailLabel": "Support-E-Mail:",
    "qqGroupLabel": "QQ-Gruppe:",
    "privacySections": [
      {
        "id": "collection",
        "title": "1. Erhebung von Informationen",
        "body": "Für die App sind weder ein Konto noch eine Anmeldung erforderlich. Signalerzeugung, Uhrenprofile und Sendungsverlauf bleiben auf Ihrem Gerät und werden von der App nicht hochgeladen. Bei der Netzwerksynchronisierung werden Anfragen an Zeitdienste Dritter gesendet; Einzelheiten zu den Netzwerkdaten finden Sie unten."
      },
      {
        "id": "network",
        "title": "2. Netzwerkzeitsynchronisierung und Datenverarbeitung",
        "body": "• Beim Start wird eine automatische Synchronisierung versucht. Wird die App wieder aktiv oder die Netzwerkverbindung wiederhergestellt, erfolgt ein neuer Versuch, wenn die letzte Synchronisierung fehlgeschlagen ist oder die letzte erfolgreiche Synchronisierung mindestens 5 Minuten zurückliegt. Sie können die Synchronisierung auch manuell aktualisieren oder die Zeitquelle wechseln.\n• Während der Synchronisierung fragt die App die ausgewählte NTP/SNTP-Zeitquelle über UDP sowie HTTPS-Zeitdienste von Alibaba/Taobao, Tencent und Apples HTTP-Date-Antwort parallel ab. Im Automatikmodus werden mehrere UDP-Kandidaten parallel verglichen.\n• Diese Dienste können Zeitdaten aus der Anfrage, Ihre Quell-IP-Adresse und übliche Metadaten des Netzwerkprotokolls erhalten. Die App fügt den Anfragen keine Kontodaten, Werbe-IDs, genauen Standortdaten, Uhrenprofile oder Sendungsverläufe hinzu. Die Verarbeitung und Speicherung von Verbindungsdaten richtet sich nach der jeweiligen Datenschutzerklärung der Anbieter. Die App protokolliert diese Verbindungen nicht lokal.\n• Alle sechs Funkzeitcodes werden in Echtzeit von der Audiohardware Ihres Geräts erzeugt und wiedergegeben. Die App nimmt keine Audiodaten auf und lädt sie nicht hoch."
      },
      {
        "id": "logs",
        "title": "3. Protokolle und Diagnoseinformationen",
        "body": "Die App enthält keine SDKs für Werbung, Verhaltensanalyse, Diagnoseprotokolle oder Absturzberichte und speichert lokal keine Protokolle der Zeitsynchronisierung. Wenn Sie den Support freiwillig per E-Mail kontaktieren, erhalten wir die von Ihnen bereitgestellten Informationen zur Fehlerbehebung."
      },
      {
        "id": "third-party",
        "title": "4. Dienste und SDKs Dritter",
        "body": "Die App enthält keine kommerziellen Werbe-SDKs, Analyse-SDKs oder appübergreifenden Tracker von Drittanbietern. Signalerzeugung, Uhrenprofile und Verlauf werden lokal verarbeitet. Für die Netzwerksynchronisierung verbindet sich die App mit den oben genannten Zeitdiensten Dritter."
      },
      {
        "id": "security",
        "title": "5. Datensicherheit und Sandbox",
        "body": "Die App folgt Apples App-Sandbox-Sicherheitsmodell. Uhrenprofile und Sendungsverlauf werden in der App-Sandbox gespeichert und können in der App gelöscht werden. Bei der Deinstallation werden die Sandbox-Daten entfernt. Die App protokolliert Zeitsynchronisierungsanfragen nicht lokal. Für die Speicherung durch externe Zeitdienste gelten deren jeweilige Datenschutzerklärungen."
      },
      {
        "id": "children",
        "title": "6. Datenschutz von Kindern",
        "body": "Die App richtet sich nicht an Kinder unter 13 Jahren und fordert Kinder nicht zur Angabe personenbezogener Daten auf. Wie bei anderen Nutzern werden bei der Zeitsynchronisierung übliche Verbindungsdaten, etwa die IP-Adresse, an den kontaktierten Zeitdienst übermittelt."
      },
      {
        "id": "updates",
        "title": "7. Änderungen dieser Erklärung",
        "body": "Wir können diese Datenschutzerklärung gelegentlich aktualisieren. Die aktuelle Fassung wird in der App veröffentlicht und gilt ab ihrer Veröffentlichung."
      },
      {
        "id": "contact",
        "title": "8. Kontakt",
        "body": "Bei Fragen oder Anregungen zu dieser Datenschutzerklärung erreichen Sie uns unter:"
      }
    ],
    "disclaimerSections": [
      {
        "id": "scope",
        "title": "1. Nutzungsumfang",
        "body": "Die App dient Funkuhren-Enthusiasten als Hilfsmittel zur Zeitsynchronisierung in Innenräumen ohne Empfang eines realen Langwellen-Zeitsenders. Sie nutzt dafür akustische bzw. elektromagnetische Oberwellen im Nahfeld. Die App darf nicht für Aktivitäten verwendet werden, die gegen Gesetze oder Funkvorschriften verstoßen."
      },
      {
        "id": "variability",
        "title": "2. Empfangsergebnis und Umgebungsbedingungen",
        "body": "Der Empfang akustischer Oberwellensignale hängt unter anderem von der Ausrichtung der internen Uhrenantenne, der Abschirmung durch das Metallgehäuse, dem Abstand zum Lautsprecher und Umgebungsgeräuschen ab. Aufgrund dieser physikalischen Grenzen kann der Entwickler eine erfolgreiche Synchronisierung für jedes Uhrenmodell und jede Umgebung nicht garantieren."
      },
      {
        "id": "precision",
        "title": "3. Zeitgenauigkeit und Verzögerung",
        "body": "Die App kalibriert ihre lokale Referenzzeit anhand von Netzwerkzeitproben. Netzwerkverzögerungen, Systemplanung und Audiopuffer können Abweichungen verursachen. Angezeigte Verzögerungen oder Unsicherheiten sind Schätzwerte und garantieren weder die endgültige Empfangsgenauigkeit der Uhr noch den Erfolg der Synchronisierung."
      },
      {
        "id": "services",
        "title": "4. Verfügbarkeit von Zeitservern Dritter",
        "body": "Die App fragt den ausgewählten NTP/SNTP-Server ab und verwendet HTTPS-Zeitantworten von Alibaba/Taobao, Tencent und Apple als parallele Referenzen. Diese Dienste werden von Dritten betrieben; ihre Verfügbarkeit und der Umgang mit Verbindungsdaten richten sich nach den jeweiligen Anbieterinformationen."
      },
      {
        "id": "updates",
        "title": "5. Softwareupdates",
        "body": "Wir veröffentlichen gelegentlich Updates, um Modulationsalgorithmen und Benutzerfreundlichkeit zu verbessern. Für optimale Ergebnisse empfehlen wir, die App auf dem neuesten Stand zu halten."
      }
    ]
  },
  "fr": {
    "title": "5. Mises à jour du logiciel",
    "effectiveDateLabel": "Date d’entrée en vigueur : ",
    "effectiveDate": "27 septembre 2026",
    "intro": "Merci d’utiliser WaveDeck. Nous accordons une grande importance à votre vie privée et à la sécurité de vos données. Cette page explique comment l’app traite vos informations et les demandes de synchronisation horaire par réseau.",
    "privacyHeading": "I. Politique de confidentialité",
    "disclaimerHeading": "II. Avis de non-responsabilité",
    "additionalHeading": "III. Mention complémentaire",
    "additionalBody": "WaveDeck est un outil horaire développé de manière indépendante, sans affiliation ni partenariat commercial avec Apple Inc., Casio, Citizen, Seiko ou d’autres fabricants de montres et de matériel. Les marques et formats radio cités (BPC, JJY, WWVB, MSF, DCF77, etc.) sont des marques déposées de leurs propriétaires respectifs et ne sont mentionnés qu’à titre descriptif pour expliquer la compatibilité technique.",
    "feedbackEmailLabel": "E-mail d’assistance :",
    "qqGroupLabel": "Groupe QQ :",
    "privacySections": [
      {
        "id": "collection",
        "title": "1. Collecte des informations",
        "body": "L’app ne nécessite ni compte ni connexion. La génération des signaux, les profils de montres et l’historique des émissions restent sur votre appareil et ne sont pas téléversés par l’app. La synchronisation horaire par réseau envoie des requêtes à des services tiers, comme indiqué ci-dessous."
      },
      {
        "id": "network",
        "title": "2. Synchronisation horaire et traitement des données",
        "body": "• Une synchronisation automatique est tentée au lancement. Lorsque l’app revient au premier plan ou que le réseau est rétabli, elle réessaie si la dernière synchronisation a échoué ou si au moins 5 minutes se sont écoulées depuis la dernière réussite. Vous pouvez aussi actualiser manuellement ou changer de source horaire.\n• Pendant la synchronisation, l’app interroge en parallèle la source NTP/SNTP choisie via UDP et des services horaires HTTPS d’Alibaba/Taobao, Tencent et Apple (réponse HTTP Date). Le mode automatique compare plusieurs sources UDP candidates en parallèle.\n• Ces services peuvent recevoir les données de la requête horaire, votre adresse IP source et les métadonnées standard du protocole réseau. L’app n’ajoute aux requêtes ni identifiant de compte, ni identifiant publicitaire, ni localisation précise, ni profil de montre, ni historique d’émission. Le traitement et la conservation des informations de connexion relèvent de la politique de confidentialité de chaque service. L’app ne consigne pas ces connexions localement.\n• Les six signaux horaires radio sont calculés et diffusés en temps réel par le matériel audio de l’appareil. L’app n’enregistre ni ne téléverse aucun son."
      },
      {
        "id": "logs",
        "title": "3. Journaux et informations de diagnostic",
        "body": "L’app n’intègre aucun SDK de publicité, d’analyse comportementale, de journalisation diagnostique ou de rapport de plantage et ne conserve pas localement de journal des requêtes de synchronisation. Si vous contactez volontairement l’assistance par e-mail, nous recevons les informations que vous choisissez de fournir pour vous aider."
      },
      {
        "id": "third-party",
        "title": "4. Services et SDK tiers",
        "body": "L’app n’intègre aucun SDK publicitaire commercial tiers, SDK d’analyse comportementale ni traceur entre applications. La génération des signaux, les profils de montres et l’historique sont traités sur l’appareil. La synchronisation horaire se connecte aux services tiers mentionnés ci-dessus."
      },
      {
        "id": "security",
        "title": "5. Sécurité des données et bac à sable",
        "body": "L’app respecte le modèle de sécurité App Sandbox d’Apple. Les profils de montres et l’historique des émissions sont conservés dans le bac à sable de l’app et peuvent être supprimés depuis celle-ci. La désinstallation supprime les données du bac à sable. L’app ne journalise pas localement les requêtes horaires. La conservation par les services distants relève de leurs politiques respectives."
      },
      {
        "id": "children",
        "title": "6. Vie privée des enfants",
        "body": "L’app ne s’adresse pas aux enfants de moins de 13 ans et ne leur demande pas de données personnelles. Comme pour les autres utilisateurs, les demandes de synchronisation transmettent des informations de connexion standard, telles qu’une adresse IP, au service horaire contacté."
      },
      {
        "id": "updates",
        "title": "7. Mises à jour de la politique",
        "body": "Nous pouvons mettre cette politique de confidentialité à jour périodiquement. La dernière version est publiée dans l’app et s’applique dès sa publication."
      },
      {
        "id": "contact",
        "title": "8. Nous contacter",
        "body": "Pour toute question ou suggestion concernant cette politique de confidentialité, vous pouvez nous contacter à l’adresse suivante :"
      }
    ],
    "disclaimerSections": [
      {
        "id": "scope",
        "title": "1. Utilisation prévue",
        "body": "L’app aide les amateurs d’horloges et de montres radio-pilotées à synchroniser l’heure en intérieur, dans les lieux non couverts par un véritable émetteur radio à ondes longues, grâce à des harmoniques acoustiques et électromagnétiques de proximité. Toute utilisation contraire aux lois ou à la réglementation radio est interdite."
      },
      {
        "id": "variability",
        "title": "2. Réception et variations de l’environnement",
        "body": "La réception des harmoniques acoustiques dépend de facteurs physiques tels que l’orientation de l’antenne interne de la montre, le blindage métallique du boîtier, la proximité du haut-parleur et le bruit ambiant. En raison de ces limites, le développeur ne peut garantir une synchronisation réussie à 100 % pour chaque modèle et chaque environnement."
      },
      {
        "id": "precision",
        "title": "3. Précision horaire et latence",
        "body": "L’app calibre son heure de référence locale à partir d’échantillons réseau. La latence réseau, la planification du système et la mémoire tampon audio peuvent entraîner des écarts. La latence ou l’incertitude affichée est une estimation et ne garantit ni la précision finale reçue par la montre ni la réussite de la synchronisation."
      },
      {
        "id": "services",
        "title": "4. Disponibilité des serveurs horaires tiers",
        "body": "L’app interroge la source NTP/SNTP sélectionnée et utilise en parallèle les réponses horaires HTTPS d’Alibaba/Taobao, Tencent et Apple comme références. Ces services sont exploités par des tiers ; leur disponibilité et le traitement des informations de connexion dépendent de leurs propres avis."
      },
      {
        "id": "updates",
        "title": "5. Mises à jour du logiciel",
        "body": "Nous publions périodiquement des mises à jour pour améliorer les algorithmes de modulation et l’expérience utilisateur. Nous vous recommandons d’utiliser la dernière version pour obtenir les meilleurs résultats."
      }
    ]
  },
  "ko": {
    "title": "5. 소프트웨어 업데이트",
    "effectiveDateLabel": "시행일: ",
    "effectiveDate": "2026년 9월 27일",
    "intro": "WaveDeck을 이용해 주셔서 감사합니다. 본 앱은 사용자의 개인정보와 데이터 보안을 중요하게 생각합니다. 이 페이지에서는 본 앱이 사용자 정보와 네트워크 시간 동기화 요청을 처리하는 방식을 설명합니다.",
    "privacyHeading": "I. 개인정보 처리방침",
    "disclaimerHeading": "II. 면책 조항",
    "additionalHeading": "III. 추가 안내",
    "additionalBody": "WaveDeck은 독립적으로 개발된 시간 도구이며 Apple Inc., 카시오(CASIO), 시티즌(CITIZEN), 세이코(SEIKO) 등 시계 또는 하드웨어 제조사와 제휴하거나 상업적 관계를 맺고 있지 않습니다. 언급된 브랜드와 전파 형식(BPC, JJY, WWVB, MSF, DCF77 등)은 각 권리자의 등록 상표이며 기술 호환성을 객관적으로 설명하기 위해서만 사용됩니다.",
    "feedbackEmailLabel": "문의 이메일:",
    "qqGroupLabel": "QQ 그룹:",
    "privacySections": [
      {
        "id": "collection",
        "title": "1. 정보 수집",
        "body": "본 앱은 계정 등록이나 로그인을 요구하지 않습니다. 신호 생성, 시계 프로필, 송신 기록은 기기에 저장되며 앱에서 업로드하지 않습니다. 네트워크 시간 동기화 시 아래에 설명된 타사 시간 서비스로 요청을 보냅니다."
      },
      {
        "id": "network",
        "title": "2. 네트워크 시간 동기화 및 데이터 처리",
        "body": "• 앱을 실행할 때 자동 동기화를 시도합니다. 앱이 다시 활성화되거나 네트워크가 복구되면 이전 동기화가 실패했거나 마지막 성공 후 5분 이상 지난 경우 다시 시도합니다. 직접 새로 고치거나 시간 소스를 변경해 동기화를 시작할 수도 있습니다.\n• 동기화 중에는 선택한 NTP/SNTP 시간 소스를 UDP로 조회하고 Alibaba/Taobao, Tencent, Apple의 HTTP Date 응답을 사용하는 HTTPS 시간 서비스에도 병렬로 요청합니다. 자동 모드에서는 여러 UDP 후보를 병렬 비교합니다.\n• 이러한 서비스에는 시간 요청 데이터, 출발지 IP 주소, 표준 네트워크 프로토콜 메타데이터가 전달될 수 있습니다. 본 앱은 계정 정보, 광고 식별자, 정확한 위치, 시계 프로필, 송신 기록을 요청에 추가하지 않습니다. 연결 정보의 처리 및 보관은 각 서비스의 개인정보 처리방침을 따릅니다. 본 앱은 해당 연결을 기기에 기록하지 않습니다.\n• 여섯 가지 전파 시각 코드 신호는 기기의 오디오 하드웨어에서 실시간으로 생성 및 재생됩니다. 앱은 오디오를 녹음하거나 업로드하지 않습니다."
      },
      {
        "id": "logs",
        "title": "3. 로그 및 진단 정보",
        "body": "본 앱에는 광고, 행동 분석, 진단 로그, 충돌 보고 SDK가 포함되어 있지 않으며 시간 동기화 요청 로그를 기기에 저장하지 않습니다. 사용자가 이메일로 직접 문의하면 문제 해결을 위해 사용자가 자발적으로 제공한 정보를 받습니다."
      },
      {
        "id": "third-party",
        "title": "4. 타사 서비스 및 SDK",
        "body": "본 앱에는 타사 상업 광고 SDK, 행동 분석 SDK, 앱 간 추적기가 포함되어 있지 않습니다. 신호 생성, 시계 프로필, 기록은 기기에서 처리하며 네트워크 시간 동기화는 위에 나열된 타사 시간 서비스에 연결합니다."
      },
      {
        "id": "security",
        "title": "5. 데이터 보안 및 샌드박스",
        "body": "본 앱은 Apple App Sandbox 보안 모델을 따릅니다. 시계 프로필과 송신 기록은 앱 샌드박스에 저장되며 앱 안에서 삭제할 수 있습니다. 앱을 삭제하면 샌드박스 데이터도 제거됩니다. 본 앱은 시간 동기화 요청을 기기에 기록하지 않습니다. 원격 시간 서비스의 데이터 보관은 각 서비스의 개인정보 처리방침을 따릅니다."
      },
      {
        "id": "children",
        "title": "6. 아동 개인정보 보호",
        "body": "본 앱은 만 13세 미만 아동을 대상으로 하지 않으며 아동에게 개인정보 제공을 요청하지 않습니다. 다른 사용자와 마찬가지로 시간 동기화 요청은 연결된 시간 서비스에 IP 주소와 같은 표준 연결 정보를 전송합니다."
      },
      {
        "id": "updates",
        "title": "7. 방침 변경",
        "body": "본 개인정보 처리방침은 수시로 업데이트될 수 있습니다. 최신 버전은 앱에 게시되며 게시 시점부터 적용됩니다."
      },
      {
        "id": "contact",
        "title": "8. 문의",
        "body": "본 개인정보 처리방침에 질문이나 제안이 있으면 아래 연락처로 문의해 주세요."
      }
    ],
    "disclaimerSections": [
      {
        "id": "scope",
        "title": "1. 사용 범위",
        "body": "본 앱은 실제 장파 전파탑 신호가 닿지 않는 실내에서 전파 시계 사용자들이 근거리 음향 및 전자기 고조파를 이용해 시간을 맞추도록 돕는 용도입니다. 법률이나 무선 규정을 위반하는 활동에 본 앱을 사용해서는 안 됩니다."
      },
      {
        "id": "variability",
        "title": "2. 수신 결과와 환경 차이",
        "body": "음향 고조파 신호의 수신 감도는 시계 내부 안테나 방향, 금속 케이스 차폐, 스피커와의 거리, 주변 소음 등 물리적 요인의 영향을 받습니다. 이러한 한계로 인해 개발자는 모든 시계 모델과 환경에서 동기화가 성공한다고 보장할 수 없습니다."
      },
      {
        "id": "precision",
        "title": "3. 시간 정확도와 지연",
        "body": "본 앱은 네트워크 시간 샘플로 기기의 기준 시간을 보정합니다. 네트워크 지연, 시스템 스케줄링, 오디오 버퍼링으로 오차가 생길 수 있습니다. 화면에 표시되는 지연이나 불확실도는 추정치이며 시계의 최종 수신 정확도나 동기화 성공을 보장하지 않습니다."
      },
      {
        "id": "services",
        "title": "4. 타사 시간 서버의 이용 가능성",
        "body": "본 앱은 선택한 NTP/SNTP 서버를 조회하고 Alibaba/Taobao, Tencent, Apple의 HTTPS 시간 응답을 병렬 기준으로 사용합니다. 해당 서비스는 타사가 운영하며 이용 가능성과 연결 정보 처리는 각 서비스의 안내를 따릅니다."
      },
      {
        "id": "updates",
        "title": "5. 소프트웨어 업데이트",
        "body": "변조 알고리즘과 사용자 경험을 개선하기 위해 업데이트를 수시로 제공합니다. 최상의 시간 동기화 결과를 위해 최신 버전을 유지하는 것이 좋습니다."
      }
    ]
  },
  "es": {
    "title": "5. Actualizaciones de software",
    "effectiveDateLabel": "Fecha de entrada en vigor: ",
    "effectiveDate": "27 de septiembre de 2026",
    "intro": "Gracias por usar WaveDeck. Nos tomamos muy en serio su privacidad y la seguridad de sus datos. Esta página explica cómo la aplicación trata su información y las solicitudes de sincronización horaria por red.",
    "privacyHeading": "I. Política de privacidad",
    "disclaimerHeading": "II. Exención de responsabilidad",
    "additionalHeading": "III. Aviso adicional",
    "additionalBody": "WaveDeck es una herramienta horaria desarrollada de forma independiente y no está afiliada ni mantiene acuerdos comerciales con Apple Inc., Casio, Citizen, Seiko u otros fabricantes de relojes o hardware. Las marcas y los formatos horarios de radio mencionados (BPC, JJY, WWVB, MSF, DCF77, etc.) son marcas registradas de sus respectivos titulares y se citan únicamente para describir objetivamente la compatibilidad técnica.",
    "feedbackEmailLabel": "Correo de soporte:",
    "qqGroupLabel": "Grupo QQ:",
    "privacySections": [
      {
        "id": "collection",
        "title": "1. Recopilación de información",
        "body": "La aplicación no requiere una cuenta ni iniciar sesión. La generación de señales, los perfiles de relojes y el historial de emisiones permanecen en su dispositivo y la aplicación no los carga. La sincronización horaria por red envía solicitudes a servicios de hora de terceros, como se explica a continuación."
      },
      {
        "id": "network",
        "title": "2. Sincronización horaria por red y tratamiento de datos",
        "body": "• Al iniciar la aplicación se intenta una sincronización automática. Cuando vuelve a estar activa o se restablece la conexión, se reintenta si la última sincronización falló o han pasado al menos 5 minutos desde la última correcta. También puede actualizar manualmente o cambiar la fuente horaria.\n• Durante la sincronización, la aplicación consulta en paralelo por UDP la fuente NTP/SNTP seleccionada y servicios horarios HTTPS de Alibaba/Taobao, Tencent y la respuesta HTTP Date de Apple. El modo automático compara varias fuentes UDP candidatas en paralelo.\n• Estos servicios pueden recibir los datos de la solicitud horaria, su dirección IP de origen y metadatos estándar del protocolo de red. La aplicación no añade a las solicitudes datos de cuenta, identificadores publicitarios, ubicación precisa, perfiles de relojes ni historial de emisiones. El tratamiento y la conservación de la información de conexión se rigen por la política de privacidad de cada servicio. La aplicación no registra estas conexiones localmente.\n• Las seis señales de código horario se generan y reproducen en tiempo real mediante el hardware de audio del dispositivo. La aplicación no graba ni carga audio."
      },
      {
        "id": "logs",
        "title": "3. Registros e información de diagnóstico",
        "body": "La aplicación no integra SDK de publicidad, análisis de comportamiento, registro de diagnósticos ni informes de fallos, y no guarda localmente registros de solicitudes de sincronización. Si se pone en contacto con el soporte por correo, recibiremos la información que decida proporcionar voluntariamente para ayudarle."
      },
      {
        "id": "third-party",
        "title": "4. Servicios y SDK de terceros",
        "body": "La aplicación no incorpora SDK comerciales de publicidad, SDK de análisis de comportamiento ni rastreadores entre aplicaciones de terceros. La generación de señales, los perfiles de relojes y el historial se procesan en el dispositivo. La sincronización horaria por red se conecta a los servicios horarios de terceros indicados anteriormente."
      },
      {
        "id": "security",
        "title": "5. Seguridad de los datos y entorno aislado",
        "body": "La aplicación sigue el modelo de seguridad App Sandbox de Apple. Los perfiles de relojes y el historial de emisiones se guardan en el entorno aislado de la aplicación y pueden eliminarse desde ella. Al desinstalarla se eliminan los datos de ese entorno. La aplicación no registra localmente las solicitudes horarias. La conservación por parte de los servicios remotos se rige por sus respectivas políticas de privacidad."
      },
      {
        "id": "children",
        "title": "6. Privacidad infantil",
        "body": "La aplicación no está dirigida a menores de 13 años y no les solicita datos personales. Al igual que a otros usuarios, las solicitudes de sincronización envían información de conexión estándar, como la dirección IP, al servicio horario contactado."
      },
      {
        "id": "updates",
        "title": "7. Actualizaciones de la política",
        "body": "Es posible que actualicemos esta política de privacidad periódicamente. La versión más reciente se publicará en la aplicación y entrará en vigor al publicarse."
      },
      {
        "id": "contact",
        "title": "8. Contacto",
        "body": "Si tiene preguntas o sugerencias sobre esta política de privacidad, puede ponerse en contacto con nosotros mediante:"
      }
    ],
    "disclaimerSections": [
      {
        "id": "scope",
        "title": "1. Uso previsto",
        "body": "La aplicación ayuda a los aficionados a relojes radiocontrolados a sincronizar la hora en interiores sin cobertura de una torre real de onda larga, mediante armónicos acústicos o electromagnéticos de campo cercano. No debe utilizarse para actividades que infrinjan las leyes o la normativa de radio."
      },
      {
        "id": "variability",
        "title": "2. Recepción y variaciones del entorno",
        "body": "La recepción de señales armónicas acústicas depende de factores físicos como la orientación de la antena interna del reloj, el blindaje metálico de la caja, la distancia al altavoz y el ruido ambiental. Debido a estas limitaciones, el desarrollador no puede garantizar que la sincronización tenga éxito en todos los modelos y entornos."
      },
      {
        "id": "precision",
        "title": "3. Precisión horaria y latencia",
        "body": "La aplicación calibra la hora de referencia local a partir de muestras de red. La latencia de red, la planificación del sistema y el búfer de audio pueden causar errores. La latencia o incertidumbre mostrada es una estimación y no garantiza la precisión final recibida por el reloj ni el éxito de la sincronización."
      },
      {
        "id": "services",
        "title": "4. Disponibilidad de servidores horarios de terceros",
        "body": "La aplicación consulta la fuente NTP/SNTP seleccionada y utiliza en paralelo como referencia las respuestas horarias HTTPS de Alibaba/Taobao, Tencent y Apple. Estos servicios son operados por terceros; su disponibilidad y el tratamiento de la información de conexión se rigen por sus propias condiciones."
      },
      {
        "id": "updates",
        "title": "5. Actualizaciones de software",
        "body": "Publicamos actualizaciones periódicas para mejorar los algoritmos de modulación y la experiencia de uso. Recomendamos mantener la aplicación actualizada para obtener los mejores resultados."
      }
    ]
  },
  "zh-Hans": {
    "title": "WaveDeck 隐私政策与免责声明",
    "effectiveDateLabel": "生效日期：",
    "effectiveDate": "2026 年 9 月 27 日",
    "intro": "感谢您使用 WaveDeck（以下简称“本应用”）。我们非常重视您的隐私与数据安全。本页面将说明本应用如何处理您的信息与网络授时请求。",
    "privacyHeading": "一、隐私政策（Privacy Policy）",
    "privacySections": [
      {
        "id": "collection",
        "title": "1. 信息收集",
        "body": "本应用不要求您注册账号或登录。信号计算、手表方案和发射历史保存在设备本地，本应用不会将这些内容上传。网络授时会向第三方时间服务发送校时请求，相关网络信息见下文。"
      },
      {
        "id": "network",
        "title": "2. 网络授时与数据处理",
        "body": "• 自动授时会在应用启动时尝试；回到前台或网络恢复时，若上次同步失败或距上次成功同步至少 5 分钟，也会再次尝试。您还可以手动刷新或切换时间源来发起同步；\n• 同步时，应用会并行查询所选的 NTP/SNTP（UDP）时间源和 HTTPS 时间服务（阿里/淘宝、腾讯及 Apple 的 HTTP Date 时间响应）；自动模式会并行比较多个 UDP 候选源；\n• 这些服务可能接收请求中的时间数据、来源 IP 地址和标准网络协议元数据。本应用不会在请求中附加账号、广告标识符、精确位置、手表方案或发射历史；服务方对连接信息的处理和保留以其各自隐私政策为准；本应用不会在本地记录这些连接；\n• 六种电波时码信号完全在设备本地音频硬件中实时计算播放，不录音，也不上传音频。"
      },
      {
        "id": "logs",
        "title": "3. 日志与诊断信息",
        "body": "本应用不集成广告、行为分析、诊断日志或崩溃报告 SDK，也不会在本地保存网络授时请求日志。若您主动通过邮件反馈问题，我们会收到您自愿提供的信息以协助排查。"
      },
      {
        "id": "third-party",
        "title": "4. 第三方服务与 SDK",
        "body": "本应用不嵌入第三方商业广告 SDK、行为统计 SDK 或跨应用追踪器。信号生成、手表方案和历史记录在本地处理；网络授时会连接上文列出的第三方时间服务。"
      },
      {
        "id": "security",
        "title": "5. 数据安全与沙盒机制",
        "body": "本应用遵循 Apple App Sandbox 安全模型。手表方案和发射历史保存在应用沙盒中，可在应用内删除；卸载应用会移除沙盒数据。本应用不在本地记录网络授时请求；远端时间服务的保留方式以其各自隐私政策为准。"
      },
      {
        "id": "children",
        "title": "6. 儿童隐私",
        "body": "本应用不面向未满 13 周岁的儿童，也不要求儿童提供个人资料。与其他用户相同，时间同步请求会向所连接的时间服务发送标准连接信息，例如 IP 地址。"
      },
      {
        "id": "updates",
        "title": "7. 政策更新",
        "body": "我们可能会不定期更新本隐私政策。最新版本将始终在应用内公布并即时生效。"
      },
      {
        "id": "contact",
        "title": "8. 联系方式",
        "body": "如果您对本隐私政策有任何疑问或建议，请通过以下方式联系我们："
      }
    ],
    "disclaimerHeading": "二、免责声明（Disclaimer）",
    "disclaimerSections": [
      {
        "id": "scope",
        "title": "1. 用途限制",
        "body": "本应用仅供电波钟表爱好者在无真实长波电波塔覆盖的室内环境下进行近场声学/电磁谐波辅助对时。用户不得利用本应用从事任何违反法律法规或无线电管理规定的活动。"
      },
      {
        "id": "variability",
        "title": "2. 对时效果与环境差异",
        "body": "手表接收声波高次谐波信号的灵敏度受手表内置天线取向、手表外壳金属屏蔽、贴合距离及环境声学噪声等物理因素影响。由于客观物理限制，开发者无法保证在所有手表型号及使用环境下均能实现 100% 成功对时。"
      },
      {
        "id": "precision",
        "title": "3. 授时精度与延迟说明",
        "body": "本应用根据网络时间样本校准本地参考时间。网络延迟、系统调度和音频缓冲都会带来误差；界面显示的延迟或不确定度是测量估算，不代表手表最终接收精度或对时成功保证。"
      },
      {
        "id": "services",
        "title": "4. 第三方授时服务器可用性",
        "body": "应用会访问设置中选择的 NTP/SNTP 节点，并使用阿里/淘宝、腾讯和 Apple 的 HTTPS 时间响应作为并行时间参考。相关服务由第三方运营，其可用性及连接信息处理方式以服务方说明为准。"
      },
      {
        "id": "updates",
        "title": "5. 软件更新",
        "body": "我们将不定期发布版本以持续优化调制算法与用户体验。建议用户保持应用为最新版本以获得最佳授时效果。"
      }
    ],
    "additionalHeading": "三、附加声明",
    "additionalBody": "WaveDeck 是一款独立开发的时间工具软件，与 Apple Inc.、卡西欧（CASIO）、西铁城（CITIZEN）、精工（SEIKO）等手表或硬件厂商无任何隶属或商业合作关系。所有提及的品牌与电波制式名称（BPC、JJY、WWVB、MSF、DCF77 等）均为其各自商标持有人的注册商标，仅用于技术兼容性客观描述。",
    "feedbackEmailLabel": "问题反馈邮箱：",
    "qqGroupLabel": "QQ 交流群："
  },
  "en": {
    "title": "WaveDeck Privacy Policy & Disclaimer",
    "effectiveDateLabel": "Effective Date:",
    "effectiveDate": "September 27, 2026",
    "intro": "Thank you for using WaveDeck (hereinafter referred to as \"the App\"). We value your privacy and data security. This page explains how the App handles your information and network time requests.",
    "privacyHeading": "I. Privacy Policy",
    "privacySections": [
      {
        "id": "collection",
        "title": "1. Information Collection",
        "body": "The App does not require an account or sign-in. Signal generation, saved watch setups, and transmission history stay on your device and are not uploaded by the App. Network time synchronization sends requests to third-party time services as described below."
      },
      {
        "id": "network",
        "title": "2. Network Time & Data Processing",
        "body": "• Automatic sync is attempted at launch. When the App becomes active or network connectivity returns, it tries again if the previous sync failed or the last successful sync was at least 5 minutes ago. You can also refresh manually or change the time source;\n• During sync, the App queries the selected NTP/SNTP source over UDP and HTTPS time services from Alibaba/Taobao, Tencent, and Apple's HTTP Date response. Automatic mode compares multiple UDP candidates in parallel;\n• These services may receive time request data, your source IP address, and standard network protocol metadata. The App does not add account IDs, advertising identifiers, precise location, saved watch setups, or transmission history. Each service's handling and retention are governed by its own privacy policy; the App does not log these connections locally;\n• All six radio time-code signals are generated by your device's audio hardware. The App does not record or upload audio."
      },
      {
        "id": "logs",
        "title": "3. Logs and Diagnostic Information",
        "body": "The App includes no advertising, behavioral analytics, diagnostic logging, or crash-reporting SDKs and does not keep local logs of time-sync requests. If you contact support by email, we receive the information you choose to provide."
      },
      {
        "id": "third-party",
        "title": "4. Third-Party Services and SDKs",
        "body": "The App embeds no third-party advertising SDKs, behavioral analytics SDKs, or cross-app trackers. Signal generation, saved watch setups, and history stay on-device; network time sync connects to the third-party services listed above."
      },
      {
        "id": "security",
        "title": "5. Data Security & Sandbox Model",
        "body": "The App uses Apple's App Sandbox. Saved watch setups and transmission history stay in the app container and can be deleted in the App; uninstalling the App removes its sandbox data. The App does not log time-sync requests locally. Retention by remote time services follows each provider's privacy policy."
      },
      {
        "id": "children",
        "title": "6. Children's Privacy",
        "body": "The App is not directed toward children under 13 and does not ask children to provide personal details. As with other users, time-sync requests send standard connection information, such as an IP address, to the contacted time service."
      },
      {
        "id": "updates",
        "title": "7. Policy Updates",
        "body": "We may update this Privacy Policy periodically. The latest version will always be published directly within the App."
      },
      {
        "id": "contact",
        "title": "8. Contact Us",
        "body": "If you have any questions or suggestions regarding this Privacy Policy, please contact us via:"
      }
    ],
    "disclaimerHeading": "II. Disclaimer",
    "disclaimerSections": [
      {
        "id": "scope",
        "title": "1. Scope of Use",
        "body": "The App is intended to assist radio-controlled watch and clock users in synchronizing time in indoor environments without radio tower coverage. Users must comply with local laws and radio regulations."
      },
      {
        "id": "variability",
        "title": "2. Reception & Environmental Variability",
        "body": "The reception of acoustic harmonic signals depends on internal watch coil orientation, metal shielding of watch cases, speaker proximity, and background ambient noise. Due to physical limitations, the developer cannot guarantee 100% synchronization success across every watch model and physical condition."
      },
      {
        "id": "precision",
        "title": "3. Timing Precision & Audio Latency",
        "body": "The App calibrates its local reference time from network samples. Network latency, system scheduling, and audio buffering can introduce error. Displayed latency or uncertainty is an estimate and does not guarantee the final reception accuracy or success of a watch sync."
      },
      {
        "id": "services",
        "title": "4. Third-Party NTP Server Availability",
        "body": "The App queries the selected NTP/SNTP source and uses HTTPS time responses from Alibaba/Taobao, Tencent, and Apple as parallel references. These services are operated by third parties; their availability and handling of connection information follow their own notices."
      },
      {
        "id": "updates",
        "title": "5. Software Updates",
        "body": "We periodically deliver updates to optimize signal modulation and user experience. Users are encouraged to maintain the latest version for best performance."
      }
    ],
    "additionalHeading": "III. Additional Notice",
    "additionalBody": "WaveDeck is an independently developed utility with no affiliation, partnership, or endorsement from Apple Inc., Casio, Citizen, Seiko, or other watch manufacturers. All mentioned brand names and radio station formats (BPC, JJY, WWVB, MSF, DCF77, etc.) are registered trademarks of their respective owners, cited strictly for descriptive technical compatibility.",
    "feedbackEmailLabel": "Feedback email:",
    "qqGroupLabel": "QQ community group:"
  }
};
