(function () {
  'use strict';

  /* 8 Multi-language App Profiles */
  const APPS = [
    {
      id: 'beauty-folder',
      path: 'beauty-folder/',
      icon: 'beauty-folder/assets/icon.png',
      color: '#ff8e6e',
      onColor: '#2e1208',
      category: 'files',
      names: {
        'zh-Hans': 'BeautyFolder',
        'zh-Hant': 'BeautyFolder',
        en: 'BeautyFolder',
        ja: 'BeautyFolder',
        ko: 'BeautyFolder',
        de: 'BeautyFolder',
        fr: 'BeautyFolder',
        es: 'BeautyFolder'
      },
      taglines: {
        'zh-Hans': '让常用文件夹更容易被认出来。',
        'zh-Hant': '讓常用資料夾更容易辨認。',
        en: 'Make your folders easier to recognize.',
        ja: 'よく使うフォルダを見つけやすく。',
        ko: '자주 쓰는 폴더를 한눈에 알아보세요.',
        de: 'Ordner auf einen Blick erkennen.',
        fr: 'Repérez vos dossiers plus facilement.',
        es: 'Identifica tus carpetas de un vistazo.'
      },
      descriptions: {
        'zh-Hans': '为 Finder 文件夹设计颜色与图像图标，应用前由你确认。',
        'zh-Hant': '為 Finder 資料夾設計顏色與圖片圖示，套用前由你確認。',
        en: 'Style Finder folders with colors and images, then choose when to apply them.',
        ja: 'Finder フォルダを色や画像でデザインし、適用前に確認できます。',
        ko: '색상과 이미지로 Finder 폴더를 꾸미고 적용 전에 확인하세요.',
        de: 'Gestalte Finder-Ordner mit Farben und Bildern und bestätige die Anwendung.',
        fr: 'Personnalisez les dossiers Finder avec couleurs et images avant application.',
        es: 'Personaliza carpetas del Finder con colores e imágenes antes de aplicarlas.'
      },
      chips: {
        'zh-Hans': ['颜色与图像', '只操作已选文件夹', 'Mac 本地处理'],
        'zh-Hant': ['顏色與圖片', '只處理已選資料夾', 'Mac 本機處理'],
        en: ['Colors & Images', 'Selected Folders Only', 'On-Device'],
        ja: ['色と画像', '選択したフォルダのみ', 'Mac 上で処理'],
        ko: ['색상 및 이미지', '선택한 폴더만', '기기 내 처리'],
        de: ['Farben & Bilder', 'Nur ausgewählte Ordner', 'Lokale Verarbeitung'],
        fr: ['Couleurs et images', 'Dossiers sélectionnés', 'Traitement local'],
        es: ['Colores e imágenes', 'Solo carpetas elegidas', 'Procesamiento local']
      }
    },
    {
      id: 'caffeineai',
      path: 'caffeineai/',
      icon: 'caffeineai/assets/icon.png',
      color: '#a3e635',
      onColor: '#172a04',
      category: 'system',
      names: {
        'zh-Hans': 'CaffeineAI',
        'zh-Hant': 'CaffeineAI',
        en: 'CaffeineAI',
        ja: 'CaffeineAI',
        ko: 'CaffeineAI',
        de: 'CaffeineAI',
        fr: 'CaffeineAI',
        es: 'CaffeineAI'
      },
      taglines: {
        'zh-Hans': '让 Mac 在任务进行时保持唤醒',
        'zh-Hant': '讓 Mac 在工作期間保持喚醒',
        en: 'Keep your Mac awake while work is in progress.',
        ja: '作業中、Mac のスリープを防止。',
        ko: '작업하는 동안 Mac이 잠들지 않도록 하세요.',
        de: 'Halte deinen Mac während der Arbeit wach.',
        fr: 'Gardez votre Mac éveillé pendant vos tâches.',
        es: 'Mantén tu Mac activo mientras trabajas.'
      },
      descriptions: {
        'zh-Hans': '创建有时限的手动会话，或为选定应用配置本机条件规则。',
        'zh-Hant': '建立有時限的手動工作階段，或為指定 App 設定本機條件規則。',
        en: 'Start timed sessions or create local, condition-based rules for selected apps.',
        ja: '時間制のセッションや、選択したアプリ向けのローカルルールを設定。',
        ko: '시간제 세션을 시작하거나 선택한 앱에 로컬 조건 규칙을 설정하세요.',
        de: 'Starte zeitlich begrenzte Sitzungen oder lokale Regeln für ausgewählte Apps.',
        fr: 'Lancez des sessions temporisées ou des règles locales pour certaines apps.',
        es: 'Inicia sesiones temporizadas o reglas locales para las apps que elijas.'
      },
      chips: {
        'zh-Hans': ['手动与定时会话', '本机条件规则', '清晰电源边界'],
        'zh-Hant': ['手動與計時工作階段', '本機條件規則', '清楚電源限制'],
        en: ['Manual & Timed', 'Local Condition Rules', 'Clear Power Boundaries'],
        ja: ['手動・時間制', 'ローカル条件ルール', '明確な電源制御'],
        ko: ['수동 및 시간제', '로컬 조건 규칙', '명확한 전원 경계'],
        de: ['Manuell & Zeitgesteuert', 'Lokale Regeln', 'Klare Systemgrenzen'],
        fr: ['Manuelles & temporisées', 'Règles locales', 'Limites explicites'],
        es: ['Manual y temporizada', 'Reglas locales', 'Límites claros']
      }
    },
    {
      id: 'drift',
      path: 'drift/',
      icon: 'drift/assets/icon.png',
      color: '#fbbf24',
      onColor: '#2a1b04',
      category: 'system',
      names: {
        'zh-Hans': 'Drift',
        'zh-Hant': 'Drift',
        en: 'Drift',
        ja: 'Drift',
        ko: 'Drift',
        de: 'Drift',
        fr: 'Drift',
        es: 'Drift'
      },
      taglines: {
        'zh-Hans': '空间去哪儿了？让存储一目了然。',
        'zh-Hant': '空間去哪裡了？讓儲存狀況一目了然。',
        en: 'See where your Mac storage goes.',
        ja: 'Mac のストレージを見える化。',
        ko: 'Mac 저장 공간을 한눈에 확인하세요.',
        de: 'Sieh, wohin dein Mac-Speicher geht.',
        fr: 'Visualisez l’espace utilisé sur votre Mac.',
        es: 'Descubre qué ocupa el espacio de tu Mac.'
      },
      descriptions: {
        'zh-Hans': '用空间图谱、开发者清理建议、重复项检查和历史快照了解磁盘使用。',
        'zh-Hant': '透過空間圖譜、開發者清理建議、重複項目檢查和歷史快照了解磁碟用量。',
        en: 'Explore disk usage, developer cleanup suggestions, duplicate files, and scan snapshots.',
        ja: '容量マップ、開発者向け整理候補、重複ファイル、スキャン履歴を確認。',
        ko: '저장 공간 지도, 개발자 정리 제안, 중복 파일 및 스캔 스냅샷을 확인하세요.',
        de: 'Erkunde Speicherbelegung, Entwickler-Bereinigung, Duplikate und Scan-Snapshots.',
        fr: 'Explorez l’espace disque, les suggestions de nettoyage, les doublons et les instantanés.',
        es: 'Explora el uso del disco, sugerencias de limpieza, duplicados y capturas.'
      },
      chips: {
        'zh-Hans': ['空间透视图', '重复项与清理建议', '历史扫描比较'],
        'zh-Hant': ['儲存空間圖譜', '重複項目與清理建議', '比較掃描快照'],
        en: ['Visual Storage Map', 'Duplicates & Cleanup', 'Scan Snapshots'],
        ja: ['容量マップ', '重複項目と整理候補', 'スキャン比較'],
        ko: ['저장 공간 지도', '중복 및 정리 제안', '스캔 비교'],
        de: ['Speicherkarte', 'Duplikate & Tipps', 'Scans vergleichen'],
        fr: ['Carte de stockage', 'Doublons & nettoyage', 'Comparer analyses'],
        es: ['Mapa de almacenamiento', 'Duplicados y limpieza', 'Comparar capturas']
      }
    },
    {
      id: 'folderify',
      path: 'folderify/',
      icon: 'folderify/assets/icon.png',
      color: '#fb923c',
      onColor: '#311504',
      category: 'files',
      names: {
        'zh-Hans': 'Folderify',
        'zh-Hant': 'Folderify',
        en: 'Folderify',
        ja: 'Folderify',
        ko: 'Folderify',
        de: 'Folderify',
        fr: 'Folderify',
        es: 'Folderify'
      },
      taglines: {
        'zh-Hans': '让项目文件夹，一眼成体系。',
        'zh-Hant': '讓專案資料夾一眼成系統。',
        en: 'Give every project folder its own visual language.',
        ja: 'プロジェクトフォルダに一貫した見た目を。',
        ko: '프로젝트 폴더를 일관된 시각 체계로 정리하세요.',
        de: 'Gib Projektordnern eine klare visuelle Ordnung.',
        fr: 'Donnez une identité visuelle à vos dossiers de projet.',
        es: 'Crea un lenguaje visual para tus carpetas de proyecto.'
      },
      descriptions: {
        'zh-Hans': '用颜色、材质、符号和规则整理 Finder 文件夹；批量更改前可检查并撤销。',
        'zh-Hant': '使用顏色、材質、符號和規則整理 Finder 資料夾；批次變更前可檢查並復原。',
        en: 'Organize Finder folders with colors, materials, symbols, and rules. Review batch changes and undo them.',
        ja: '色、素材、シンボル、ルールで Finder を整理。複数変更は確認して元に戻せます。',
        ko: '색상, 재질, 기호, 규칙으로 Finder 폴더를 정리하고 일괄 변경을 검토하고 되돌리세요.',
        de: 'Ordne Finder-Ordner mit Farben, Materialien, Symbolen und Regeln. Prüfe und widerrufe Stapeländerungen.',
        fr: 'Organisez Finder avec couleurs, matières, symboles et règles. Vérifiez et annulez les changements groupés.',
        es: 'Organiza Finder con colores, materiales, símbolos y reglas. Revisa y deshaz cambios por lotes.'
      },
      chips: {
        'zh-Hans': ['设计图标与方案', '规则批量整理', '检查与撤销'],
        'zh-Hant': ['設計圖示與方案', '依規則批次整理', '檢查與復原'],
        en: ['Icons & Presets', 'Rule-Based Batch', 'Review & Undo'],
        ja: ['アイコンとプリセット', 'ルール一括整理', '確認して取り消し'],
        ko: ['아이콘 및 프리셋', '규칙 기반 일괄', '검토 및 실행 취소'],
        de: ['Symbole & Vorlagen', 'Regelbasierte Stapel', 'Prüfen & widerrufen'],
        fr: ['Icônes & modèles', 'Styles par règles', 'Vérifier & annuler'],
        es: ['Iconos y estilos', 'Estilos por reglas', 'Revisar y deshacer']
      }
    },
    {
      id: 'localdrop',
      path: 'localdrop/',
      icon: 'localdrop/assets/icon.png',
      color: '#38bdf8',
      onColor: '#042033',
      category: 'media',
      names: {
        'zh-Hans': 'LocalDrop Server',
        'zh-Hant': 'LocalDrop Server',
        en: 'LocalDrop Server',
        ja: 'LocalDrop Server',
        ko: 'LocalDrop Server',
        de: 'LocalDrop Server',
        fr: 'LocalDrop Server',
        es: 'LocalDrop Server'
      },
      taglines: {
        'zh-Hans': '让设备在同一局域网内直接互传文件。',
        'zh-Hant': '讓裝置在同一區域網路中直接互傳檔案。',
        en: 'Share files directly across your local network.',
        ja: '同じローカルネットワークでファイルを共有。',
        ko: '같은 로컬 네트워크에서 파일을 직접 공유하세요.',
        de: 'Teile Dateien direkt in deinem lokalen Netzwerk.',
        fr: 'Partagez des fichiers directement sur votre réseau local.',
        es: 'Comparte archivos directamente en tu red local.'
      },
      descriptions: {
        'zh-Hans': '把 Mac 变成局域网文件服务器，通过浏览器或 FTP 客户端访问已选目录。',
        'zh-Hant': '將 Mac 變成區域網路檔案伺服器，透過瀏覽器或 FTP 用戶端存取已選目錄。',
        en: 'Turn your Mac into a LAN file server, accessible from a browser or FTP client.',
        ja: 'Mac を LAN ファイルサーバーにして、ブラウザや FTP クライアントから利用。',
        ko: 'Mac을 LAN 파일 서버로 설정해 브라우저나 FTP 클라이언트에서 이용하세요.',
        de: 'Verwandle deinen Mac in einen LAN-Dateiserver für Browser und FTP-Clients.',
        fr: 'Transformez votre Mac en serveur local accessible depuis un navigateur ou un client FTP.',
        es: 'Convierte tu Mac en servidor local para navegadores y clientes FTP.'
      },
      chips: {
        'zh-Hans': ['浏览器与 FTP 访问', '多目录与权限控制', '可选 HTTPS'],
        'zh-Hant': ['瀏覽器與 FTP 存取', '多目錄與權限控制', '可選 HTTPS'],
        en: ['Browser & FTP', 'Folder Permissions', 'Optional HTTPS'],
        ja: ['ブラウザ・FTP 接続', '複数フォルダと権限', 'HTTPS 選択可能'],
        ko: ['브라우저 및 FTP 접속', '여러 폴더 및 권한', '선택적 HTTPS'],
        de: ['Browser- & FTP-Zugriff', 'Ordner & Berechtigungen', 'Optionales HTTPS'],
        fr: ['Accès navigateur & FTP', 'Dossiers & permissions', 'HTTPS en option'],
        es: ['Acceso web y FTP', 'Carpetas y permisos', 'HTTPS opcional']
      }
    },
    {
      id: 'medialens',
      path: 'medialens/',
      icon: 'medialens/assets/icon.png',
      color: '#818cf8',
      onColor: '#111438',
      category: 'media',
      names: {
        'zh-Hans': 'MediaLens',
        'zh-Hant': 'MediaLens',
        en: 'MediaLens',
        ja: 'MediaLens',
        ko: 'MediaLens',
        de: 'MediaLens',
        fr: 'MediaLens',
        es: 'MediaLens'
      },
      taglines: {
        'zh-Hans': '从媒体文件，快速看到可执行的结论。',
        'zh-Hant': '從媒體檔案快速取得可執行的結論。',
        en: 'Turn media files into clear, actionable QA.',
        ja: 'メディアファイルから、すぐに使える検査結果を。',
        ko: '미디어 파일을 명확하고 실행 가능한 QA 결과로 확인하세요.',
        de: 'Erhalte klare, umsetzbare QA-Ergebnisse für Mediendateien.',
        fr: 'Transformez vos médias en résultats QA exploitables.',
        es: 'Obtén resultados de QA claros y útiles para tus archivos.'
      },
      descriptions: {
        'zh-Hans': '检查媒体技术信息、比较版本、批量 QA，并生成可脱敏的交付报告。',
        'zh-Hant': '檢查媒體技術資訊、比較版本、批次 QA，並產生可去識別的交付報告。',
        en: 'Inspect media metadata, compare versions, run batch QA, and export privacy-aware reports.',
        ja: 'メタデータ確認、バージョン比較、バッチ QA、配慮したレポート出力。',
        ko: '미디어 메타데이터를 확인하고 비교·일괄 QA 및 개인정보 보호 보고서를 내보내세요.',
        de: 'Prüfe Metadaten, vergleiche Versionen, führe Batch-QA aus und exportiere bereinigte Berichte.',
        fr: 'Inspectez les métadonnées, comparez les versions, lancez un QA par lot et exportez des rapports.',
        es: 'Inspecciona metadatos, compara versiones, ejecuta QA por lotes y exporta informes.'
      },
      chips: {
        'zh-Hans': ['技术信息与结构检查', '批量 QA 与版本比较', '报告导出与路径脱敏'],
        'zh-Hant': ['技術資訊與結構檢查', '批次 QA 與版本比較', '報告匯出與路徑隱藏'],
        en: ['Metadata & Structure', 'Batch QA & Compare', 'Path Redaction'],
        ja: ['メタデータ・構造検査', '一括 QA と比較', 'パスを伏せたレポート'],
        ko: ['메타데이터 및 구조', '일괄 QA 및 비교', '경로 비식별 보고서'],
        de: ['Metadaten & Struktur', 'Batch-QA & Vergleich', 'Berichte mit Pfadschutz'],
        fr: ['Métadonnées & structure', 'QA par lot & comparaison', 'Rapports & chemins masqués'],
        es: ['Metadatos y estructura', 'QA por lotes y comparación', 'Informes con rutas ocultas']
      }
    },
    {
      id: 'wavedeck',
      path: 'wavedeck/',
      icon: 'wavedeck/assets/icon.png',
      color: '#61d2ec',
      onColor: '#08202b',
      category: 'media',
      names: {
        'zh-Hans': 'WaveDeck',
        'zh-Hant': 'WaveDeck',
        en: 'WaveDeck',
        ja: 'WaveDeck',
        ko: 'WaveDeck',
        de: 'WaveDeck',
        fr: 'WaveDeck',
        es: 'WaveDeck'
      },
      taglines: {
        'zh-Hans': '让电波表对时，更有把握。',
        'zh-Hant': '讓電波錶對時，更有把握。',
        en: 'Precision radio-controlled watch sync and acoustics.',
        ja: '電波時計の近場同期を、もっと確実に。',
        ko: '전파 시계 근접 동기화를 더욱 확실하게.',
        de: 'Präzise Funkuhren-Synchronisation und Akustik.',
        fr: 'Synchronisation précise pour montres radio-pilotées.',
        es: 'Sincronización precisa para relojes radiocontrolados.'
      },
      descriptions: {
        'zh-Hans': '六种标准时码、NTP 时间参考与本地手表方案，让兼容的电波表近场对时更有准备。',
        'zh-Hant': '六種標準時碼、NTP 時間參考與本機手錶設定，協助相容的電波錶近場完成對時。',
        en: 'Six standard time codes, NTP references, and local watch profiles for precision acoustic sync.',
        ja: '6つの標準時号、NTP リファレンス、ローカル設定で正確な近接同期を実現。',
        ko: '6가지 표준 시각 코드, NTP 참조 및 로컬 프로필로 정확한 근접 동기화를 제공합니다.',
        de: 'Sechs Standard-Zeitcodes, NTP-Referenzen und Profile für präzisen Abgleich.',
        fr: 'Six codes horaires standard, références NTP et profils de montre pour une synchronisation acoustique.',
        es: 'Seis códigos horarios estándar, referencias NTP y perfiles locales para una sincronización acústica.'
      },
      chips: {
        'zh-Hans': ['6大标准时码', 'NTP 纳秒级参考', '设备本地运算'],
        'zh-Hant': ['6大標準時碼', 'NTP 奈秒級參考', '裝置本機運算'],
        en: ['6 Standard Codes', 'NTP Reference', '100% On-Device'],
        ja: ['6つの標準時号', 'NTP 基準', '完全端末内処理'],
        ko: ['6개 표준 코드', 'NTP 기준', '기기 내 완전 처리'],
        de: ['6 Standard-Codes', 'NTP-Referenz', 'Lokale Ausführung'],
        fr: ['6 codes standard', 'Référence NTP', '100% local'],
        es: ['6 códigos estándar', 'Referencia NTP', '100% en dispositivo']
      }
    },
    {
      id: 'zipmaster',
      path: 'zipmaster/',
      icon: 'zipmaster/assets/icon.png',
      color: '#facc15',
      onColor: '#2e2303',
      category: 'files',
      names: {
        'zh-Hans': 'ZipMaster',
        'zh-Hant': 'ZipMaster',
        en: 'ZipMaster',
        ja: 'ZipMaster',
        ko: 'ZipMaster',
        de: 'ZipMaster',
        fr: 'ZipMaster',
        es: 'ZipMaster'
      },
      taglines: {
        'zh-Hans': '解压归档，也把收件后的校验做清楚。',
        'zh-Hant': '解壓封存檔，也清楚檢查收到的檔案。',
        en: 'Extract archives and verify what you receive.',
        ja: 'アーカイブを展開し、受け取ったファイルを検証。',
        ko: '압축을 풀고 받은 파일을 검증하세요.',
        de: 'Entpacke Archive und prüfe erhaltene Dateien.',
        fr: 'Décompressez vos archives et vérifiez les fichiers reçus.',
        es: 'Descomprime archivos y verifica lo que recibes.'
      },
      descriptions: {
        'zh-Hans': '在 Mac 本地管理归档，核对 SHA-256 清单并批量测试完整性。',
        'zh-Hant': '在 Mac 本機管理封存檔、核對 SHA-256 清單並批次測試完整性。',
        en: 'Manage archives locally, verify SHA-256 manifests, and test archive integrity in batches.',
        ja: 'Mac 上でアーカイブを管理し、SHA-256 と整合性をまとめて確認。',
        ko: 'Mac에서 압축 파일을 관리하고 SHA-256 목록 및 무결성을 일괄 검사하세요.',
        de: 'Verwalte Archive lokal, prüfe SHA-256-Manifeste und teste die Integrität gesammelt.',
        fr: 'Gérez vos archives localement, vérifiez les listes SHA-256 et testez leur intégrité.',
        es: 'Gestiona archivos localmente y comprueba manifiestos SHA-256 e integridad por lotes.'
      },
      chips: {
        'zh-Hans': ['创建与解开归档', 'SHA-256 清单校验', '批量完整性测试'],
        'zh-Hant': ['建立與解開封存檔', 'SHA-256 清單校驗', '批次完整性測試'],
        en: ['Create & Extract', 'SHA-256 Verification', 'Batch Integrity Tests'],
        ja: ['作成・展開', 'SHA-256 検証', '一括整合性テスト'],
        ko: ['생성 및 해제', 'SHA-256 검사', '일괄 무결성 검사'],
        de: ['Erstellen & Entpacken', 'SHA-256-Prüfung', 'Integritätstests'],
        fr: ['Créer & extraire', 'Vérification SHA-256', 'Tests groupés'],
        es: ['Crear y extraer', 'Verificación SHA-256', 'Pruebas por lotes']
      }
    }
  ];

  /* Hub Multi-language UI Strings */
  const UI = {
    'zh-Hans': {
      brand: 'Mac 独立精选',
      heroBadge: '8 款精选原生工具 · macOS 专属',
      heroTitle: '专注 macOS 原生体验，为纯粹与隐私而生。',
      heroSubtitle: '精心雕琢的 8 款 Mac 实用工具。坚持本机运算、零云端依赖、无追踪无广告。',
      stat1: '8 款独立应用',
      stat2: '100% 本地运算',
      stat3: '零数据上传',
      stat4: '支持 8 国语言',
      filterAll: '全部应用',
      filterSystem: '系统与效能',
      filterFiles: '文件与整理',
      filterMedia: '媒体与传输',
      searchPlaceholder: '搜索应用名称或特性...',
      enterApp: '进入官网',
      privacyLink: '隐私政策',
      supportLink: '支持与帮助',
      emptyTitle: '未找到符合的应用',
      emptyDesc: '请尝试其他关键词搜索或切换分类',
      manifestoTitle: '我们的工程与设计哲学',
      manifestoDesc: '拒绝臃肿，不让复杂消耗你的注意力。',
      m1Title: '本地优先 (Local First)',
      m1Desc: '所有处理均在你的 Mac 本地静默完成，不依赖外部服务器，即使断网也能全力运作。',
      m2Title: '隐私即承诺 (Privacy by Design)',
      m2Desc: '无账户登录，不收集使用习惯，零第三方分析追踪 SDK，保障私人数据的绝对纯净。',
      m3Title: '原生轻盈 (Mac Native)',
      m3Desc: '遵循 macOS 原生人机交互标准，极低内存与电量占用，为 Apple Silicon 芯片深度调优。',
      footerLead: '为每一次指尖操作，赋予确定感与宁静。',
      email: 'zipmaster_support@126.com',
      copyEmail: '复制支持邮箱',
      copied: '已复制邮箱'
    },
    'zh-Hant': {
      brand: 'Mac 獨立精選',
      heroBadge: '8 款精選原生工具 · macOS 專屬',
      heroTitle: '專注 macOS 原生體驗，為純粹與隱私而生。',
      heroSubtitle: '精心雕琢的 8 款 Mac 實用工具。堅持本機運算、零雲端依賴、無追蹤無廣告。',
      stat1: '8 款獨立 App',
      stat2: '100% 本機運算',
      stat3: '零資料上傳',
      stat4: '支援 8 種語言',
      filterAll: '全部 App',
      filterSystem: '系統與效能',
      filterFiles: '檔案與整理',
      filterMedia: '媒體與傳輸',
      searchPlaceholder: '搜尋 App 名稱或功能...',
      enterApp: '進入官網',
      privacyLink: '隱私權政策',
      supportLink: '技術支援',
      emptyTitle: '找不到符合的 App',
      emptyDesc: '請嘗試其他關鍵字或切換分類',
      manifestoTitle: '我們的工程與設計哲學',
      manifestoDesc: '拒絕臃腫，不讓繁複消耗你的注意力。',
      m1Title: '本機優先 (Local First)',
      m1Desc: '所有處理皆在你的 Mac 本機完成，不依賴外部伺服器，斷網亦可全速運作。',
      m2Title: '隱私即承諾 (Privacy by Design)',
      m2Desc: '無帳號登入，不收集操作習慣，零第三方追蹤 SDK，保障私人資料的絕對安全。',
      m3Title: '原生輕巧 (Mac Native)',
      m3Desc: '遵循 macOS 人機互動指引，極低資源占用，專為 Apple Silicon 晶片最佳化。',
      footerLead: '為每一次指尖操作，賦予確定感與寧靜。',
      email: 'zipmaster_support@126.com',
      copyEmail: '複製支援信箱',
      copied: '已複製信箱'
    },
    en: {
      brand: 'Mac Crafted Apps',
      heroBadge: '8 Native Tools · Designed for macOS',
      heroTitle: 'Pure macOS Experience. Built for Speed and Privacy.',
      heroSubtitle: 'A curated suite of 8 utilities for Mac power users. 100% on-device processing, no cloud accounts, and zero telemetry.',
      stat1: '8 Standalone Apps',
      stat2: '100% On-Device',
      stat3: 'Zero Cloud Storage',
      stat4: '8 Languages Ready',
      filterAll: 'All Apps',
      filterSystem: 'System & Power',
      filterFiles: 'Files & Folders',
      filterMedia: 'Media & Sync',
      searchPlaceholder: 'Search by app name or feature...',
      enterApp: 'Visit App Site',
      privacyLink: 'Privacy',
      supportLink: 'Support',
      emptyTitle: 'No apps match your criteria',
      emptyDesc: 'Try adjusting your search terms or category filter.',
      manifestoTitle: 'Our Engineering Philosophy',
      manifestoDesc: 'Clean, reliable, and respectful of your attention and system resources.',
      m1Title: 'Local First Architecture',
      m1Desc: 'All processing occurs directly on your Mac. No developer servers, fully functional offline.',
      m2Title: 'Privacy by Design',
      m2Desc: 'No accounts, no user telemetry, and zero tracking SDKs. Your files remain exclusively yours.',
      m3Title: 'Mac Native Craftsmanship',
      m3Desc: 'Adheres to macOS design standards with minimal memory footprint and optimized battery life.',
      footerLead: 'Bringing calm, focus, and precision to your daily macOS workflow.',
      email: 'zipmaster_support@126.com',
      copyEmail: 'Copy Support Email',
      copied: 'Email copied'
    },
    ja: {
      brand: 'Mac 厳選ツール',
      heroBadge: '8つの厳選ネイティブツール · macOS 専用',
      heroTitle: 'macOS 本来の心地よさ。純粋さとプライバシーのために。',
      heroSubtitle: 'Mac ユーザーのために設計された8つの実用ツール。端末内処理、クラウド不要、広告・追跡ゼロ。',
      stat1: '8つの独立アプリ',
      stat2: '100% 端末内処理',
      stat3: 'データ送信なし',
      stat4: '8言語対応',
      filterAll: 'すべてのアプリ',
      filterSystem: 'システム・効率',
      filterFiles: 'ファイル・整理',
      filterMedia: 'メディア・通信',
      searchPlaceholder: 'アプリ名や機能で検索...',
      enterApp: '公式サイトへ',
      privacyLink: 'プライバシー',
      supportLink: 'サポート',
      emptyTitle: '一致するアプリが見つかりません',
      emptyDesc: '検索キーワードやカテゴリを変更してください。',
      manifestoTitle: '設計とエンジニアリングの哲学',
      manifestoDesc: '過剰な装飾を排し、本質的な快適さを追求します。',
      m1Title: 'ローカルファースト',
      m1Desc: 'すべての処理がお使いの Mac 上で完結します。オフラインでも制限なく機能します。',
      m2Title: 'プライバシー最優先',
      m2Desc: 'アカウント登録不要、行動ログや外部追跡 SDK は一切含まれていません。',
      m3Title: 'Mac ネイティブの軽快さ',
      m3Desc: 'macOS 標準に沿った設計で、メモリやバッテリーの消費を最小限に抑えます。',
      footerLead: '毎日の Mac 操作に、確かな安心と静けさを。',
      email: 'zipmaster_support@126.com',
      copyEmail: 'メールアドレスをコピー',
      copied: 'コピーしました'
    },
    ko: {
      brand: 'Mac 엄선 앱',
      heroBadge: '8가지 엄선 도구 · macOS 전용',
      heroTitle: '순수한 macOS 경험. 효율성과 프라이버시를 위해.',
      heroSubtitle: 'Mac 사용자를 위해 정성껏 다듬은 8가지 유틸리티. 100% 기기 내 처리, 클라우드 불필요, 광고 및 추적 없음.',
      stat1: '8개의 독립 앱',
      stat2: '100% 로컬 연산',
      stat3: '클라우드 전송 없음',
      stat4: '8개 언어 지원',
      filterAll: '모든 앱',
      filterSystem: '시스템 및 성능',
      filterFiles: '파일 및 정리',
      filterMedia: '미디어 및 전송',
      searchPlaceholder: '앱 이름 또는 기능 검색...',
      enterApp: '웹사이트 이동',
      privacyLink: '개인정보방침',
      supportLink: '고객 지원',
      emptyTitle: '일치하는 앱을 찾을 수 없습니다',
      emptyDesc: '검색어나 카테고리 필터를 변경해 보세요.',
      manifestoTitle: '우리의 개발 및 디자인 철학',
      manifestoDesc: '불필요한 복잡함을 없애고 사용자의 집중에 기여합니다.',
      m1Title: '로컬 퍼스트 (Local First)',
      m1Desc: '모든 작업이 사용자의 Mac 내에서 안전하게 실행되며 오프라인에서도 작동합니다.',
      m2Title: '철저한 프라이버시',
      m2Desc: '계정 가입이 필요 없고 외부 추적 SDK가 포함되지 않아 데이터가 안전합니다.',
      m3Title: 'Mac 네이티브의 완성도',
      m3Desc: 'Apple Silicon에 최적화되어 리소스 소모가 적고 부드럽게 동작합니다.',
      footerLead: '모든 Mac 작업에 확신과 명쾌함을 전합니다.',
      email: 'zipmaster_support@126.com',
      copyEmail: '지원 이메일 복사',
      copied: '복사 완료'
    },
    de: {
      brand: 'Mac Crafted Apps',
      heroBadge: '8 Native Werkzeuge · Für macOS',
      heroTitle: 'Reines macOS-Erlebnis. Entwickelt für Geschwindigkeit und Datenschutz.',
      heroSubtitle: '8 sorgfältig entwickelte Mac-Tools. Lokale Verarbeitung, kein Cloud-Zwang, keine Werbung oder Tracking.',
      stat1: '8 Apps',
      stat2: '100% Lokal',
      stat3: 'Kein Upload',
      stat4: '8 Sprachen',
      filterAll: 'Alle Apps',
      filterSystem: 'System & Leistung',
      filterFiles: 'Dateien & Ordner',
      filterMedia: 'Medien & Transfer',
      searchPlaceholder: 'Nach Name oder Funktion suchen...',
      enterApp: 'Zur App-Seite',
      privacyLink: 'Datenschutz',
      supportLink: 'Support',
      emptyTitle: 'Keine passenden Apps gefunden',
      emptyDesc: 'Bitte passe deine Suchbegriffe oder Filter an.',
      manifestoTitle: 'Unsere Entwicklungsphilosophie',
      manifestoDesc: 'Einfach, stabil und respektvoll gegenüber deinen Daten.',
      m1Title: 'Local First',
      m1Desc: 'Alles wird lokal auf deinem Mac verarbeitet – zuverlässig auch ohne Internetverbindung.',
      m2Title: 'Datenschutz by Design',
      m2Desc: 'Kein Nutzerkonto erforderlich, keine Tracking-SDKs, vollkommene Privatsphäre.',
      m3Title: 'Mac-Native Qualität',
      m3Desc: 'Optimiert für Apple Silicon mit minimaler Systemlast und maximaler Effizienz.',
      footerLead: 'Ruhe, Fokus und Präzision für deine tägliche Arbeit auf dem Mac.',
      email: 'zipmaster_support@126.com',
      copyEmail: 'E-Mail kopieren',
      copied: 'Kopiert'
    },
    fr: {
      brand: 'Mac Crafted Apps',
      heroBadge: '8 Outils Natifs · Conçus pour macOS',
      heroTitle: 'L’expérience macOS pure. Conçu pour la vitesse et la confidentialité.',
      heroSubtitle: 'Une collection de 8 outils pensés pour Mac. Traitement local, sans compte cloud, sans publicité ni pistage.',
      stat1: '8 Applications',
      stat2: '100% Local',
      stat3: 'Zéro Cloud',
      stat4: '8 Langues',
      filterAll: 'Toutes les apps',
      filterSystem: 'Système & Efficacité',
      filterFiles: 'Fichiers & Dossiers',
      filterMedia: 'Médias & Réseau',
      searchPlaceholder: 'Rechercher une app ou fonction...',
      enterApp: 'Visiter le site',
      privacyLink: 'Confidentialité',
      supportLink: 'Assistance',
      emptyTitle: 'Aucune app ne correspond',
      emptyDesc: 'Essayez d’ajuster votre recherche ou filtre.',
      manifestoTitle: 'Notre Philosophie de Conception',
      manifestoDesc: 'La clarté et l’efficacité au service de votre productivité.',
      m1Title: 'Priorité au Local',
      m1Desc: 'Tout est traité directement sur votre Mac, fonctionnel même sans connexion.',
      m2Title: 'Confidentialité Totale',
      m2Desc: 'Aucun compte requis, aucune collecte de données, aucun traceur publicitaire.',
      m3Title: 'Finition Native Mac',
      m3Desc: 'Optimisé pour Apple Silicon avec une consommation mémoire et batterie minimale.',
      footerLead: 'Simplicité, précision et sérénité pour vos tâches quotidiennes sur Mac.',
      email: 'zipmaster_support@126.com',
      copyEmail: 'Copier l’adresse e-mail',
      copied: 'Copié'
    },
    es: {
      brand: 'Mac Crafted Apps',
      heroBadge: '8 Herramientas Nativas · Para macOS',
      heroTitle: 'Experiencia nativa de macOS. Creada para la velocidad y privacidad.',
      heroSubtitle: '8 utilidades diseñadas con precisión para Mac. Procesamiento en el dispositivo, sin cuentas en la nube ni rastreo.',
      stat1: '8 Apps',
      stat2: '100% Local',
      stat3: 'Cero Nube',
      stat4: '8 Idiomas',
      filterAll: 'Todas las apps',
      filterSystem: 'Sistema y Eficiencia',
      filterFiles: 'Archivos y Carpetas',
      filterMedia: 'Medios y Red',
      searchPlaceholder: 'Buscar por nombre o función...',
      enterApp: 'Ver Sitio de la App',
      privacyLink: 'Privacidad',
      supportLink: 'Soporte',
      emptyTitle: 'No se encontraron aplicaciones',
      emptyDesc: 'Prueba con otros términos de búsqueda o filtros.',
      manifestoTitle: 'Nuestra Filosofía de Desarrollo',
      manifestoDesc: 'Herramientas puras y transparentes que respetan tu privacidad.',
      m1Title: 'Prioridad Local',
      m1Desc: 'Todo se procesa en tu Mac, sin enviar tus archivos a servidores externos.',
      m2Title: 'Privacidad por Diseño',
      m2Desc: 'Sin necesidad de cuentas, sin SDKs de seguimiento comercial.',
      m3Title: 'Artesanía Nativa Mac',
      m3Desc: 'Diseño cuidado según las guías de Apple y optimizado para Apple Silicon.',
      footerLead: 'Calma, foco y precisión para tu flujo de trabajo en Mac.',
      email: 'zipmaster_support@126.com',
      copyEmail: 'Copiar correo',
      copied: 'Copiado'
    }
  };

  const LANGUAGES = {
    'zh-Hans': '简体中文',
    'zh-Hant': '繁體中文',
    en: 'English',
    ja: '日本語',
    ko: '한국어',
    de: 'Deutsch',
    fr: 'Français',
    es: 'Español'
  };

  const escape = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  function normalize(v) {
    if (!v) return null;
    const keys = Object.keys(LANGUAGES);
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
    return (navigator.languages || [navigator.language]).map(normalize).find(Boolean) || 'zh-Hans';
  }

  function stored(key, value) {
    try {
      if (value === undefined) return localStorage.getItem(key);
      localStorage.setItem(key, value);
    } catch {}
    return null;
  }

  let currentLang = chosenLanguage();
  let currentCategory = 'all';
  let currentSearch = '';

  function renderHub() {
    const t = UI[currentLang] || UI.en;
    const langParam = `?lang=${encodeURIComponent(currentLang)}`;

    // Top Navigation Header
    const headerEl = document.querySelector('.header');
    if (headerEl) {
      headerEl.innerHTML = `
        <div class="brand-group">
          <a class="brand" href="index.html${langParam}">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="color:var(--accent)">
              <rect width="18" height="18" x="3" y="3" rx="4"/>
              <path d="M3 9h18"/>
              <path d="M9 21V9"/>
            </svg>
            <span>${escape(t.brand)}</span>
          </a>
        </div>
        <nav class="main-nav" aria-label="快捷跳转">
          <a href="#apps">${escape(t.filterAll)}</a>
          <a href="#manifesto">${escape(t.manifestoTitle)}</a>
          <a href="#contact">支持</a>
        </nav>
        <div class="tools">
          <label class="language">
            <span class="sr-only">语言</span>
            <select aria-label="语言" id="top-lang-select">
              ${Object.entries(LANGUAGES).map(([code, name]) => `
                <option value="${code}" ${code === currentLang ? 'selected' : ''}>${escape(name)}</option>
              `).join('')}
            </select>
          </label>
          <button class="theme" type="button" data-theme></button>
        </div>
      `;
    }

    // Hero Section
    const heroEl = document.querySelector('.hub-hero');
    if (heroEl) {
      heroEl.innerHTML = `
        <span class="hub-hero-badge">${escape(t.heroBadge)}</span>
        <h1>${escape(t.heroTitle)}</h1>
        <p class="hero-subtitle">${escape(t.heroSubtitle)}</p>
        <div class="hub-stats-row">
          <div class="stat-chip">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
            <span>${escape(t.stat1)}</span>
          </div>
          <div class="stat-chip">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            <span>${escape(t.stat2)}</span>
          </div>
          <div class="stat-chip">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span>${escape(t.stat3)}</span>
          </div>
          <div class="stat-chip">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
            <span>${escape(t.stat4)}</span>
          </div>
        </div>
      `;
    }

    // Toolbar Tabs
    const tabsEl = document.querySelector('.filter-tabs');
    if (tabsEl) {
      tabsEl.innerHTML = `
        <button class="filter-tab ${currentCategory === 'all' ? 'active' : ''}" data-cat="all">${escape(t.filterAll)} (${APPS.length})</button>
        <button class="filter-tab ${currentCategory === 'system' ? 'active' : ''}" data-cat="system">${escape(t.filterSystem)}</button>
        <button class="filter-tab ${currentCategory === 'files' ? 'active' : ''}" data-cat="files">${escape(t.filterFiles)}</button>
        <button class="filter-tab ${currentCategory === 'media' ? 'active' : ''}" data-cat="media">${escape(t.filterMedia)}</button>
      `;
    }

    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
      searchInput.placeholder = t.searchPlaceholder;
    }

    // Render Cards
    renderCards();

    // Manifesto Section
    const manEl = document.querySelector('.manifesto-section');
    if (manEl) {
      manEl.innerHTML = `
        <div class="manifesto-heading reveal">
          <h2>${escape(t.manifestoTitle)}</h2>
          <p>${escape(t.manifestoDesc)}</p>
        </div>
        <div class="manifesto-grid">
          <div class="manifesto-card reveal">
            <div class="manifesto-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/>
              </svg>
            </div>
            <h3>${escape(t.m1Title)}</h3>
            <p>${escape(t.m1Desc)}</p>
          </div>
          <div class="manifesto-card reveal">
            <div class="manifesto-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <h3>${escape(t.m2Title)}</h3>
            <p>${escape(t.m2Desc)}</p>
          </div>
          <div class="manifesto-card reveal">
            <div class="manifesto-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/>
              </svg>
            </div>
            <h3>${escape(t.m3Title)}</h3>
            <p>${escape(t.m3Desc)}</p>
          </div>
        </div>
      `;
    }

    // Footer
    const footerEl = document.querySelector('.footer');
    if (footerEl) {
      footerEl.innerHTML = `
        <div>
          <a class="footer-brand" href="index.html${langParam}">${escape(t.brand)}</a>
          <p>${escape(t.footerLead)}</p>
          <a class="email-plain" href="mailto:${t.email}">${t.email}</a>
          <small>© 2026 ${escape(t.brand)} · All Rights Reserved.</small>
        </div>
        <div class="footer-right">
          <div class="footer-controls">
            <button class="copy quiet-link" type="button" data-copy>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
              <span>${escape(t.copyEmail)}</span>
            </button>
            <span class="copy-status" style="margin-left:8px"></span>
          </div>
        </div>
      `;
    }

    // Sync HTML Lang & Meta
    document.documentElement.lang = currentLang;
    document.title = `${t.brand} · ${t.heroTitle}`;
    syncThemeButtons();
    initScrollReveal();
  }

  function renderCards() {
    const t = UI[currentLang] || UI.en;
    const grid = document.querySelector('.apps-grid');
    if (!grid) return;

    const filtered = APPS.filter(app => {
      const matchCat = currentCategory === 'all' || app.category === currentCategory;
      if (!matchCat) return false;
      if (!currentSearch) return true;
      const term = currentSearch.toLowerCase();
      const name = (app.names[currentLang] || app.names.en).toLowerCase();
      const tagline = (app.taglines[currentLang] || app.taglines.en).toLowerCase();
      const desc = (app.descriptions[currentLang] || app.descriptions.en).toLowerCase();
      return name.includes(term) || tagline.includes(term) || desc.includes(term);
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="empty-state reveal">
          <p style="font-size:1.4rem;font-weight:600;color:var(--text-primary);margin-bottom:8px">🔍 ${escape(t.emptyTitle)}</p>
          <p>${escape(t.emptyDesc)}</p>
        </div>
      `;
      return;
    }

    const langParam = `?lang=${encodeURIComponent(currentLang)}`;

    grid.innerHTML = filtered.map(app => {
      const name = app.names[currentLang] || app.names.en;
      const tagline = app.taglines[currentLang] || app.taglines.en;
      const desc = app.descriptions[currentLang] || app.descriptions.en;
      const chips = app.chips[currentLang] || app.chips.en;
      const categoryLabel = {
        system: t.filterSystem,
        files: t.filterFiles,
        media: t.filterMedia
      }[app.category] || 'Utility';

      return `
        <article class="app-card reveal" style="--card-color:${app.color};--card-on-color:${app.onColor};--card-glow:${app.color}33;--card-tint:${app.color}14;--card-tint-border:${app.color}38;">
          <div class="app-card-top">
            <div class="app-header">
              <div class="app-icon-wrap">
                <img src="${app.icon}" alt="${escape(name)}" loading="lazy">
              </div>
              <span class="app-category-badge">${escape(categoryLabel)}</span>
            </div>
            <div class="app-title-group">
              <h2>${escape(name)}</h2>
              <div class="app-tagline">${escape(tagline)}</div>
              <p class="app-desc">${escape(desc)}</p>
            </div>
            <div class="app-chips">
              ${chips.map(c => `<span class="app-chip">${escape(c)}</span>`).join('')}
            </div>
          </div>
          <div class="app-card-actions">
            <a class="app-enter-btn" href="${app.path}index.html${langParam}">
              <span>${escape(t.enterApp)}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <div class="app-sub-links">
              <a href="${app.path}privacy.html${langParam}">${escape(t.privacyLink)}</a>
              <a href="${app.path}support.html${langParam}">${escape(t.supportLink)}</a>
            </div>
          </div>
        </article>
      `;
    }).join('');

    initSpotlight();
    initScrollReveal();
  }

  /* Spotlight cursor tracking on cards */
  function initSpotlight() {
    const cards = document.querySelectorAll('.app-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });
  }

  function initScrollReveal() {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    } else {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('revealed'));
    }
  }

  function syncThemeButtons() {
    const isDark = document.documentElement.dataset.theme !== 'light';
    const label = isDark ? '浅色' : '深色';
    document.querySelectorAll('button[data-theme]').forEach(b => {
      b.textContent = label;
      b.setAttribute('aria-label', label);
    });
  }

  // Initialize theme
  const savedTheme = stored('app-policies-theme');
  document.documentElement.dataset.theme = savedTheme === 'light' ? 'light' : 'dark';

  // Initial Render
  renderHub();

  // Category filter clicks
  document.addEventListener('click', e => {
    const tab = e.target.closest('.filter-tab');
    if (tab) {
      currentCategory = tab.dataset.cat;
      document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
      tab.classList.add('active');
      renderCards();
      return;
    }

    const themeBtn = e.target.closest('button[data-theme]');
    if (themeBtn) {
      const nextTheme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
      document.documentElement.dataset.theme = nextTheme;
      stored('app-policies-theme', nextTheme);
      syncThemeButtons();
      return;
    }

    const copyBtn = e.target.closest('[data-copy]');
    if (copyBtn) {
      const status = document.querySelector('.copy-status');
      const email = UI[currentLang]?.email || 'zipmaster_support@126.com';
      try {
        navigator.clipboard.writeText(email);
        status.textContent = `✓ ${UI[currentLang]?.copied || 'Copied'}`;
        setTimeout(() => { status.textContent = ''; }, 3000);
      } catch {
        status.textContent = email;
      }
    }
  });

  // Language select change
  document.addEventListener('change', e => {
    if (e.target.id === 'top-lang-select') {
      currentLang = e.target.value;
      stored('app-policies-language', currentLang);
      const u = new URL(location.href);
      u.searchParams.set('lang', currentLang);
      history.replaceState(null, '', u);
      renderHub();
    }
  });

  // Real-time search
  document.addEventListener('input', e => {
    if (e.target.matches('.search-input')) {
      currentSearch = e.target.value.trim();
      renderCards();
    }
  });
})();
