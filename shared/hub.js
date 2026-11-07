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
    },
    {
      id: 'couple',
      path: 'couple/',
      icon: 'couple/assets/icon.png',
      color: '#f43f5e',
      onColor: '#ffffff',
      category: 'life',
      names: {
        'zh-Hans': 'Couple 小家',
        'zh-Hant': 'Couple 小家',
        en: 'Couple',
        ja: 'Couple',
        ko: 'Couple',
        de: 'Couple',
        fr: 'Couple',
        es: 'Couple'
      },
      taglines: {
        'zh-Hans': '两个人的小家，一起认真记录。',
        'zh-Hant': '兩個人的小家，一起認真記錄。',
        en: 'A private home for the everyday things you share.',
        ja: 'ふたりの暮らしを、大切にていねいに記録。',
        ko: '둘만의 소중한 일상을 함께 기록하세요.',
        de: 'Ein gemeinsames Zuhause für die Dinge, die ihr teilt.',
        fr: 'Un foyer privé pour tout ce que vous partagez à deux.',
        es: 'Un espacio íntimo para compartir el día a día en pareja.'
      },
      descriptions: {
        'zh-Hans': '把账本、愿望、纪念日与日常资料放在一起，私密陪伴两人的共同生活。',
        'zh-Hant': '將共同帳本、願望、紀念日與日常資料放在一起，私密陪伴兩人的共同生活。',
        en: 'Bring shared expenses, wishes, anniversaries, moods, and household records together in privacy.',
        ja: '家計簿・願い事・記念日・暮らしの記録をひとつにまとめ、ふたりの生活に寄り添います。',
        ko: '공동 가계부, 위시리스트, 기념일, 일상 기록을 안전하게 함께 관리하세요.',
        de: 'Gemeinsames Haushaltsbuch, Wünsche, Jahrestage und Dokumente sicher an einem Ort.',
        fr: 'Comptabilité partagée, souhaits, anniversaires et documents du quotidien en toute intimité.',
        es: 'Gestiona gastos compartidos, recuerdos y finanzas en un entorno privado.'
      },
      chips: {
        'zh-Hans': ['共同记账与预算', '纪念日与愿望清单', 'iCloud 私密同步'],
        'zh-Hant': ['共同記帳與預算', '紀念日與願望清單', 'iCloud 私密同步'],
        en: ['Shared Expenses', 'Wishes & Dates', 'Private iCloud Sync'],
        ja: ['共有家計簿・予算', '記念日・願い事', 'iCloud プライベート同期'],
        ko: ['공동 가계부 및 예산', '기념일 및 위시리스트', 'iCloud 개인 동기화'],
        de: ['Gemeinsame Finanzen', 'Jahrestage & Wünsche', 'iCloud-Synchronisation'],
        fr: ['Comptabilité à deux', 'Anniversaires & Vœux', 'iCloud privé'],
        es: ['Finanzas en pareja', 'Aniversarios y deseos', 'iCloud privado']
      }
    },
        {
      id: 'dropsqueeze',
      path: 'dropsqueeze/',
      icon: 'dropsqueeze/assets/icon.png',
      color: '#10b981',
      onColor: '#ffffff',
      category: 'media',
      names: {
        'zh-Hans': 'DropSqueeze',
        'zh-Hant': 'DropSqueeze',
        en: 'DropSqueeze',
        ja: 'DropSqueeze',
        ko: 'DropSqueeze',
        de: 'DropSqueeze',
        fr: 'DropSqueeze',
        es: 'DropSqueeze'
      },
      taglines: {
        'zh-Hans': '静默压缩截图与录屏，剪贴板原地瘦身。',
        'zh-Hant': '安靜壓縮截圖與錄影，剪貼簿原地瘦身。',
        en: 'Silently compress screenshots, screen recordings, and clipboard media.',
        ja: 'スクリーンショットと画面録画を静かに圧縮、クリップボードも軽量化。',
        ko: '스크린샷과 화면 녹화를 무음 압축하고 클립보드를 가볍게 유지하세요.',
        de: 'Screenshots und Bildschirmaufnahmen leise komprimieren, Zwischenablage optimieren.',
        fr: 'Compressez silencieusement vos captures, enregistrements et presse-papiers.',
        es: 'Comprime capturas y grabaciones silenciosamente y optimiza el portapapeles.'
      },
      descriptions: {
        'zh-Hans': '在 Mac 本地极速无损压缩图片与视频，自动监听剪贴板与指定文件夹，保护原始文件与隐私元数据。',
        'zh-Hant': '在 Mac 本機極速無損壓縮圖片與影片，自動監聽剪貼簿與指定資料夾，保護原始檔案與隱私中繼資料。',
        en: 'Lightning-fast on-device compression for images and video on Mac. Automatically watches clipboard and folders while protecting source files and metadata.',
        ja: 'Mac 上で画像と動画を高速圧縮。クリップボードと監視フォルダを自動処理し、元ファイルとメタデータを保護。',
        ko: 'Mac에서 이미지와 동영상을 초고속 압축합니다. 클립보드와 감시 폴더를 자동 처리하며 원본과 메타데이터를 보호합니다.',
        de: 'Blitzschnelle lokale Medienkompression auf dem Mac. Überwacht Zwischenablage und Ordner, schützt Originale und Metadaten.',
        fr: 'Compression ultra-rapide sur Mac pour images et vidéos. Surveille le presse-papiers et vos dossiers en préservant originaux et métadonnées.',
        es: 'Compresión ultrarrápida en el Mac para imágenes y vídeo. Supervisa el portapapeles y carpetas protegiendo los originales y metadatos.'
      },
      chips: {
        'zh-Hans': ['剪贴板静默瘦身', '文件夹自动监控', '100% 本地运算'],
        'zh-Hant': ['剪貼簿安靜瘦身', '資料夾自動監控', '100% 本地運算'],
        en: ['Silent Clipboard', 'Folder Watcher', '100% On-Device'],
        ja: ['クリップボード軽量化', 'フォルダ自動監視', '100% ローカル処理'],
        ko: ['클립보드 무음 압축', '폴더 자동 감시', '100% 로컬 처리'],
        de: ['Leise Zwischenablage', 'Ordnerüberwachung', '100% Lokal'],
        fr: ['Presse-papiers silencieux', 'Surveillance dossiers', '100% Local'],
        es: ['Portapapeles silencioso', 'Vigilancia de carpetas', '100% Local']
      }
    },
{
      id: 'shelflife',
      path: 'shelflife/',
      icon: 'shelflife/assets/icon.png',
      color: '#10b981',
      onColor: '#ffffff',
      category: 'life',
      names: {
        'zh-Hans': 'ShelfLife 器物志',
        'zh-Hant': 'ShelfLife 器物誌',
        en: 'ShelfLife',
        ja: 'ShelfLife',
        ko: 'ShelfLife',
        de: 'ShelfLife',
        fr: 'ShelfLife',
        es: 'ShelfLife'
      },
      taglines: {
        'zh-Hans': '家庭器物与保修耗材管家',
        'zh-Hant': '家庭器物與保固耗材管家',
        en: 'Smart Tracker for Warranties, Consumables & Manuals',
        ja: '家電の保証期限・消耗品寿命・説明書をスマート管理',
        ko: '가전제품 보증기간, 소모품 수명 및 설명서 스마트 관리',
        de: 'Garantiefristen, Verbrauchsmaterialien und Anleitungen im Griff',
        fr: 'Suivi des garanties, pièces d’usure et notices d’appareils',
        es: 'Control inteligente de garantías, consumibles y manuales'
      },
      descriptions: {
        'zh-Hans': '离线识别发票小票与电器铭牌，追踪保修到期、滤芯更换周期，整理说明书与维保记录。',
        'zh-Hant': '離線識別發票收據與電器銘牌，追蹤保固到期、濾網更換週期，整理說明書與維修紀錄。',
        en: 'Scan receipts and appliance labels on-device. Track warranty dates, filter replacement intervals, and manuals.',
        ja: 'レシートや銘板を端末内でスキャン。保証期限やフィルター交換時期、説明書を一元管理。',
        ko: '영수증과 라벨을 기기 내에서 스캔하여 보증 만료일, 필터 교체 주기, 설명서를 관리하세요.',
        de: 'Belege und Typenschilder lokal scannen. Garantiefristen, Filterwechsel und Handbücher verwalten.',
        fr: 'Scannez vos reçus et étiquettes en local. Suivez garanties, pièces d’usure et notices.',
        es: 'Escanea recibos y etiquetas en local. Controla garantías, cambio de filtros y manuales.'
      },
      chips: {
        'zh-Hans': ['保修与到期提醒', '耗材寿命与小组件', '发票与说明书归档'],
        'zh-Hant': ['保固與到期提醒', '耗材壽命與小工具', '發票與說明書歸檔'],
        en: ['Warranty & Expiry Alerts', 'Consumable Lifespans', 'Receipts & Manuals'],
        ja: ['保証・期限アラート', '消耗品寿命・ウィジェット', 'レシート・説明書保管'],
        ko: ['보증 및 만료 알림', '소모품 수명 및 위젯', '영수증 및 설명서 보관'],
        de: ['Garantie & Ablaufalarme', 'Verbrauchsteile & Widgets', 'Belege & Anleitungen'],
        fr: ['Alertes garantie & échéance', 'Consommables & widgets', 'Reçus & notices'],
        es: ['Alertas de garantía y fin', 'Vida útil de consumibles', 'Recibos y manuales']
      }
    },
    {
      id: 'droidbridge',
      path: 'droidbridge/',
      icon: 'droidbridge/assets/icon.png',
      color: '#22c55e',
      onColor: '#ffffff',
      category: 'media',
      names: {
        'zh-Hans': 'DroidBridge 安卓桥',
        'zh-Hant': 'DroidBridge 安卓橋',
        en: 'DroidBridge',
        ja: 'DroidBridge',
        ko: 'DroidBridge',
        de: 'DroidBridge',
        fr: 'DroidBridge',
        es: 'DroidBridge'
      },
      taglines: {
        'zh-Hans': 'Mac 与安卓设备极速互传与无线挂载。',
        'zh-Hant': 'Mac 與安卓裝置極速互傳與無線掛載。',
        en: 'High-speed transfer & wireless mount between Mac and Android.',
        ja: 'Mac と Android の高速ファイル転送・ワイヤレス接続。',
        ko: 'Mac과 Android 간의 초고속 파일 전송 및 무선 마운트.',
        de: 'Dateitransfer und drahtlose Einbindung zwischen Mac und Android.',
        fr: 'Transfert rapide et montage sans fil entre Mac et Android.',
        es: 'Transferencia rápida y montaje inalámbrico entre Mac y Android.'
      },
      descriptions: {
        'zh-Hans': '在 Mac 菜单栏直接浏览与传输安卓文件，支持 USB MTP、ADB、局域网 FTP/WebDAV 与扫码快传。',
        'zh-Hant': '在 Mac 選單列直接瀏覽與傳輸安卓檔案，支援 USB MTP、ADB、區域網路 FTP/WebDAV 與掃碼快傳。',
        en: 'Browse and move Android files from your Mac menu bar over USB MTP, ADB, LAN FTP/WebDAV, or instant QR transfer.',
        ja: 'Mac のメニューバーから Android ファイルを閲覧・転送。USB MTP、ADB、LAN FTP/WebDAV、QRコード転送に対応。',
        ko: 'Mac 메뉴 막대에서 Android 파일을 탐색하고 전송하세요. USB MTP, ADB, LAN FTP/WebDAV 및 QR 빠른 전송을 지원합니다.',
        de: 'Android-Dateien direkt aus der Mac-Menüleiste verwalten – über USB MTP, ADB, LAN FTP/WebDAV oder QR-Direktübertragung.',
        fr: 'Parcourez et transférez des fichiers Android depuis la barre des menus Mac via USB MTP, ADB, FTP/WebDAV local ou code QR.',
        es: 'Explora y transfiere archivos de Android desde la barra de menús de tu Mac mediante USB MTP, ADB, FTP/WebDAV local o código QR.'
      },
      chips: {
        'zh-Hans': ['USB MTP 与 ADB', '无线挂载与扫码快传', '相册直拖与增量备份'],
        'zh-Hant': ['USB MTP 與 ADB', '無線掛載與掃碼快傳', '相簿直拖與增量備份'],
        en: ['USB MTP & ADB', 'Wireless Mount & QR', 'Photos & Incremental Sync'],
        ja: ['USB MTP・ADB 高速転送', 'ワイヤレス・QR転送', '写真ドラッグ＆増分同期'],
        ko: ['USB MTP 및 ADB', '무선 마운트 및 QR 전송', '사진 드래그 및 증분 백업'],
        de: ['USB MTP & ADB', 'Drahtlos-Mount & QR', 'Fotos & Zuwachssync'],
        fr: ['USB MTP & ADB', 'Montage sans fil & QR', 'Photos & sync incrémentale'],
        es: ['USB MTP y ADB', 'Montaje inalámbrico y QR', 'Fotos y sync incremental']
      }
    },
    {
      id: 'luxframe',
      path: 'luxframe/',
      icon: 'luxframe/assets/icon.png',
      color: '#f59e0b',
      onColor: '#ffffff',
      category: 'media',
      names: {
        'zh-Hans': 'LuxFrame 光影暗盒',
        'zh-Hant': 'LuxFrame 光影暗盒',
        en: 'LuxFrame',
        ja: 'LuxFrame',
        ko: 'LuxFrame',
        de: 'LuxFrame',
        fr: 'LuxFrame',
        es: 'LuxFrame'
      },
      taglines: {
        'zh-Hans': '测光、场记与冲扫，认真记录每一格胶片。',
        'zh-Hant': '測光、場記與沖掃，認真記錄每一格底片。',
        en: 'Precision light metering, film roll logs, and scan EXIF injection.',
        ja: '露出計・フィルム記録・スキャン EXIF 埋め込みをひとつに。',
        ko: '노출계, 필름 롤 로그, 스캔 EXIF 주입을 한 번에.',
        de: 'Präzisions-Belichtungsmesser, Filmprotokolle und EXIF-Scan-Werkzeuge.',
        fr: 'Posemètre de précision, carnet de pellicules et injection EXIF.',
        es: 'Fotómetro de precisión, registro de carretes e inyección EXIF.'
      },
      descriptions: {
        'zh-Hans': '集点测光、倒易律长曝、胶卷暗盒场记本与扫描件 EXIF 写回于一体的胶片摄影工具箱。',
        'zh-Hant': '集點測光、倒易律長曝、底片暗盒場記本與掃描件 EXIF 寫回於一體的底片攝影工具箱。',
        en: 'A complete film photography toolkit: spot metering, reciprocity timers, roll logs, and scan EXIF injection.',
        ja: 'スポット測光、相反則不軌タイマー、撮影ノート、スキャン EXIF 埋め込みを備えたフィルムカメラ用ツール。',
        ko: '스팟 측광, 상반칙 불궤 타이머, 필름 롤 일지 및 스캔 EXIF 주입을 지원하는 필름 사진 툴킷.',
        de: 'Umfassendes Filmfotografie-Toolkit: Spotmessung, Schwarzschildeffekt-Timer, Filmtagebuch und EXIF-Injektor.',
        fr: 'La boîte à outils complète de l’argentique : mesure spot, réciprocité, carnet de bobines et injection EXIF.',
        es: 'El kit completo para fotografía analógica: medición puntual, reciprocidad, diario de carretes e inyección EXIF.'
      },
      chips: {
        'zh-Hans': ['专业点测光与倒易律', '胶卷暗盒与场记本', '扫描件 EXIF 批量写回'],
        'zh-Hant': ['專業點測光與倒易律', '底片暗盒與場記本', '掃描件 EXIF 批次寫回'],
        en: ['Spot Meter & Reciprocity', 'Film Roll Journal', 'Batch EXIF Injector'],
        ja: ['スポット測光 & 相反則不軌', 'フィルム暗箱・撮影メモ', 'スキャン EXIF 一括書き込み'],
        ko: ['스팟 측광 & 상반칙 불궤', '필름 롤 일지 & 장비', '스캔 EXIF 일괄 주입'],
        de: ['Spotmessung & Schwarzschildeffekt', 'Filmtagebuch & Notizen', 'Stapel-EXIF-Injektor'],
        fr: ['Mesure spot & réciprocité', 'Carnet de pellicules', 'Injection EXIF par lots'],
        es: ['Medición puntual y reciprocidad', 'Diario de carretes', 'Inyección EXIF por lotes']
      }
    },
    {
      id: 'pastepipe',
      path: 'pastepipe/',
      icon: 'pastepipe/assets/icon.png',
      color: '#06b6d4',
      onColor: '#04242d',
      category: 'system',
      names: {
        'zh-Hans': 'PastePipe',
        'zh-Hant': 'PastePipe',
        en: 'PastePipe',
        ja: 'PastePipe',
        ko: 'PastePipe',
        de: 'PastePipe',
        fr: 'PastePipe',
        es: 'PastePipe'
      },
      taglines: {
        'zh-Hans': '剪贴板历史、文本清洗与屏幕识字。',
        'zh-Hant': '剪貼板歷史、文字清洗與螢幕辨識。',
        en: 'Clipboard history, text pipe, and on-device OCR.',
        ja: 'クリップボード履歴、テキスト整形、そして OCR。',
        ko: '클립보드 기록, 텍스트 파이프라인 및 화면 OCR.',
        de: 'Zwischenablage-Verlauf, Text-Pipes und On-Device-OCR.',
        fr: 'Historique du presse-papiers, filtres de texte et OCR.',
        es: 'Historial del portapapeles, filtros de texto y OCR.'
      },
      descriptions: {
        'zh-Hans': '按 ⌘⇧V 随处调出剪贴板，按 Tab 清洗转换杂乱文本，框选屏幕直接识字。全程本地处理，保护隐私。',
        'zh-Hant': '按 ⌘⇧V 隨處叫出剪貼板，按 Tab 清洗轉換雜亂文字，框選螢幕直接辨識。全程本機處理，保護隱私。',
        en: 'Press ⌘⇧V for clipboard history, Tab to transform messy text, and ⌘⇧2 for on-device screen OCR. Local-first and private by design.',
        ja: '⌘⇧V で履歴を呼び出し、Tab でテキストを整形、⌘⇧2 で画面上の文字を直接認識。安心のローカル処理。',
        ko: '⌘⇧V로 클립보드 기록을 열고, Tab으로 텍스트를 정리하며, ⌘⇧2로 화면을 인식합니다. 안전한 로컬 처리.',
        de: '⌘⇧V für die Zwischenablage, Tab zum Bereinigen von Text und ⌘⇧2 für Bildschirm-OCR. Vollständig lokal und sicher.',
        fr: '⌘⇧V pour l’historique, Tab pour transformer le texte et ⌘⇧2 pour l’OCR d’écran. Traitement local et respect de la vie privée.',
        es: '⌘⇧V para el historial, Tab para transformar texto y ⌘⇧2 para OCR en pantalla. Procesamiento local y privado.'
      },
      chips: {
        'zh-Hans': ['剪贴板历史', 'Tab 文本管道', '端侧屏幕 OCR'],
        'zh-Hant': ['剪貼板歷史', 'Tab 文字管道', '端側螢幕 OCR'],
        en: ['Clipboard History', 'Tab Text Pipes', 'On-Device OCR'],
        ja: ['クリップボード履歴', 'Tab テキスト整形', '端末内画面 OCR'],
        ko: ['클립보드 기록', 'Tab 텍스트 파이프', '기기 내 화면 OCR'],
        de: ['Zwischenablage-Verlauf', 'Tab-Text-Pipes', 'Lokales Bildschirm-OCR'],
        fr: ['Historique presse-papiers', 'Filtres de texte Tab', 'OCR d’écran local'],
        es: ['Historial de portapapeles', 'Filtros de texto Tab', 'OCR local en pantalla']
      }
    },
    {
      id: 'netpulse',
      path: 'netpulse/',
      icon: 'netpulse/assets/icon.png',
      color: '#0ea5e9',
      onColor: '#ffffff',
      category: 'system',
      names: {
        'zh-Hans': 'NetPulse 极客网测',
        'zh-Hant': 'NetPulse 極客網測',
        en: 'NetPulse',
        ja: 'NetPulse',
        ko: 'NetPulse',
        de: 'NetPulse',
        fr: 'NetPulse',
        es: 'NetPulse'
      },
      taglines: {
        'zh-Hans': '硬件与网络工程师的随身调试工具箱。',
        'zh-Hant': '硬體與網路工程師的隨身除錯工具箱。',
        en: 'The portable field toolkit for hardware & network engineers.',
        ja: 'ハードウェア・ネットワーク技術者のためのポータブル診断ツール。',
        ko: '하드웨어 및 네트워크 엔지니어를 위한 모바일 툴킷.',
        de: 'Das mobile Diagnose-Toolkit für Hardware- und Netzwerk-Ingenieure.',
        fr: 'La boîte à outils mobile pour ingénieurs réseau et matériel.',
        es: 'El kit de herramientas móvil para ingenieros de hardware y redes.'
      },
      descriptions: {
        'zh-Hans': '集成 BLE/GATT 调试、局域网设备扫描、ONVIF 摄像头管理、RTSP 极速预览及网络链路诊断。全本地运行，零云端依赖。',
        'zh-Hant': '整合 BLE/GATT 除錯、區域網路裝置掃描、ONVIF 攝影機管理、RTSP 極速預覽及網路鏈路診斷。全本機執行，零雲端依賴。',
        en: 'An on-device field toolkit for iPhone & iPad, combining BLE/GATT debugging, LAN discovery, ONVIF camera management, RTSP live preview, and network link diagnostics.',
        ja: 'iPhone & iPad 向けポータブル診断ツール。BLE/GATT デバッグ、LAN 機器検出、ONVIF カメラ管理、RTSP プレビュー、ネットワーク診断を完全ローカルで提供。',
        ko: 'iPhone 및 iPad를 위한 모바일 툴킷으로 BLE/GATT 디버깅, 로컬 네트워크 장치 검색, ONVIF 카메라 관리, RTSP 실시간 프리뷰 및 네트워크 진단을 로컬에서 지원합니다.',
        de: 'Mobiles Toolkit für iPhone & iPad: BLE/GATT-Debugging, LAN-Erkennung, ONVIF-Kamerasteuerung, RTSP-Live-Vorschau und Netzwerkdiagnose ohne Cloud.',
        fr: 'Boîte à outils mobile pour iPhone et iPad : débogage BLE/GATT, découverte réseau local, caméras ONVIF, aperçu RTSP et diagnostic réseau sans cloud.',
        es: 'Kit de herramientas para iPhone y iPad: depuración BLE/GATT, escaneo de red local, cámaras ONVIF, vista previa RTSP y diagnóstico de red sin nube.'
      },
      chips: {
        'zh-Hans': ['BLE & GATT 调试', 'ONVIF 监控与 RTSP', '局域网发现与测速'],
        'zh-Hant': ['BLE & GATT 除錯', 'ONVIF 監控與 RTSP', '區域網路搜尋與測速'],
        en: ['BLE & GATT Console', 'ONVIF & RTSP Live', 'LAN Discovery & Speed'],
        ja: ['BLE & GATT デバッグ', 'ONVIF & RTSP プレビュー', 'LAN 検索 & 速度測定'],
        ko: ['BLE & GATT 디버깅', 'ONVIF & RTSP 스트리밍', 'LAN 검색 및 속도 측정'],
        de: ['BLE & GATT-Debugging', 'ONVIF & RTSP-Live', 'LAN-Erkennung & Speedtest'],
        fr: ['Débogage BLE & GATT', 'ONVIF & RTSP en direct', 'Découverte LAN & Débit'],
        es: ['Depuración BLE y GATT', 'ONVIF y RTSP directo', 'Detección LAN y Velocidad']
      }
    }
  ];

  /* Hub Multi-language UI Strings */
  const UI = {
    'zh-Hans': {
      brand: 'Mac & iOS 独立精选',
      heroBadge: '15 款精选原生应用 · Apple 生态专属',
      heroTitle: '专注原生体验，为纯粹与隐私而生。',
      heroSubtitle: '精心雕琢的 15 款实用工具。坚持本机运算、零云端依赖、无追踪无广告。',
      stat1: '15 款独立应用',
      stat2: '100% 本地运算',
      stat3: '零数据上传',
      stat4: '支持 8 国语言',
      filterAll: '全部应用',
      filterSystem: '系统与效能',
      filterFiles: '文件与整理',
      filterMedia: '媒体与传输',
      filterLife: '生活与记录',
      searchPlaceholder: '搜索应用名称或特性...',
      enterApp: '进入官网',
      privacyLink: '隐私政策',
      supportLink: '支持与帮助',
      emptyTitle: '未找到符合的应用',
      emptyDesc: '请尝试其他关键词搜索或切换分类',
      manifestoTitle: '我们的工程与设计哲学',
      manifestoDesc: '拒绝臃肿，不让复杂消耗你的注意力。',
      m1Title: '本地优先 (Local First)',
      m1Desc: '所有处理均在你的设备本地静默完成，不依赖外部服务器，即使断网也能全力运作。',
      m2Title: '隐私即承诺 (Privacy by Design)',
      m2Desc: '无账户登录，不收集使用习惯，零第三方分析追踪 SDK，保障私人数据的绝对纯净。',
      m3Title: '原生轻盈 (Apple Native)',
      m3Desc: '遵循 Apple 原生人机交互标准，极低内存与电量占用，为设备硬件深度调优。',
      footerLead: '为每一次指尖操作，赋予确定感与宁静。',
      email: 'zipmaster_support@126.com',
      copyEmail: '复制支持邮箱',
      copied: '已复制邮箱'
    },
    'zh-Hant': {
      brand: 'Mac & iOS 獨立精選',
      heroBadge: '15 款精選原生應用 · Apple 生態專屬',
      heroTitle: '專注原生體驗，為純粹與隱私而生。',
      heroSubtitle: '精心雕琢的 15 款實用工具。堅持本機運算、零雲端依賴、無追蹤無廣告。',
      stat1: '15 款獨立 App',
      stat2: '100% 本機運算',
      stat3: '零資料上傳',
      stat4: '支援 8 種語言',
      filterAll: '全部 App',
      filterSystem: '系統與效能',
      filterFiles: '檔案與整理',
      filterMedia: '媒體與傳輸',
      filterLife: '生活與記錄',
      searchPlaceholder: '搜尋 App 名稱或功能...',
      enterApp: '進入官網',
      privacyLink: '隱私權政策',
      supportLink: '技術支援',
      emptyTitle: '找不到符合的 App',
      emptyDesc: '請嘗試其他關鍵字或切換分類',
      manifestoTitle: '我們的工程與設計哲學',
      manifestoDesc: '拒絕臃腫，不讓繁複消耗你的注意力。',
      m1Title: '本機優先 (Local First)',
      m1Desc: '所有處理皆在你的裝置本機完成，不依賴外部伺服器，斷網亦可全速運作。',
      m2Title: '隱私即承諾 (Privacy by Design)',
      m2Desc: '無帳號登入，不收集操作習慣，零第三方追蹤 SDK，保障私人資料的絕對安全。',
      m3Title: '原生輕巧 (Apple Native)',
      m3Desc: '遵循 Apple 人機互動指引，極低資源占用，專為硬體晶片最佳化。',
      footerLead: '為每一次指尖操作，賦予確定感與寧靜。',
      email: 'zipmaster_support@126.com',
      copyEmail: '複製支援信箱',
      copied: '已複製信箱'
    },
    en: {
      brand: 'Apple Crafted Apps',
      heroBadge: '15 Native Apps · macOS & iOS',
      heroTitle: 'Pure Apple Experience. Built for Speed and Privacy.',
      heroSubtitle: 'A curated suite of 15 utilities for power users. 100% on-device processing, no cloud accounts, and zero telemetry.',
      stat1: '15 Standalone Apps',
      stat2: '100% On-Device',
      stat3: 'Zero Cloud Storage',
      stat4: '8 Languages Ready',
      filterAll: 'All Apps',
      filterSystem: 'System & Power',
      filterFiles: 'Files & Folders',
      filterMedia: 'Media & Sync',
      filterLife: 'Life & Everyday',
      searchPlaceholder: 'Search by app name or feature...',
      enterApp: 'Visit App Site',
      privacyLink: 'Privacy',
      supportLink: 'Support',
      emptyTitle: 'No apps match your criteria',
      emptyDesc: 'Try adjusting your search terms or category filter.',
      manifestoTitle: 'Our Engineering Philosophy',
      manifestoDesc: 'Clean, reliable, and respectful of your attention and system resources.',
      m1Title: 'Local First Architecture',
      m1Desc: 'All processing occurs directly on your device. No developer servers, fully functional offline.',
      m2Title: 'Privacy by Design',
      m2Desc: 'No accounts, no user telemetry, and zero tracking SDKs. Your files remain exclusively yours.',
      m3Title: 'Apple Native Craftsmanship',
      m3Desc: 'Adheres to Apple design standards with minimal memory footprint and optimized battery life.',
      footerLead: 'Bringing calm, focus, and precision to your daily Apple workflow.',
      email: 'zipmaster_support@126.com',
      copyEmail: 'Copy Support Email',
      copied: 'Email copied'
    },
    ja: {
      brand: 'Apple 厳選ツール',
      heroBadge: '15の厳選ネイティブアプリ · macOS & iOS',
      heroTitle: '心地よさと安心。純粋さとプライバシーのために。',
      heroSubtitle: '日々の暮らしと仕事のために設計された15の実用ツール。端末内処理、クラウド不要、広告・追跡ゼロ。',
      stat1: '15の独立アプリ',
      stat2: '100% 端末内処理',
      stat3: 'データ送信なし',
      stat4: '8言語対応',
      filterAll: 'すべてのアプリ',
      filterSystem: 'システム・効率',
      filterFiles: 'ファイル・整理',
      filterMedia: 'メディア・通信',
      filterLife: 'ライフ・日常',
      searchPlaceholder: 'アプリ名や機能で検索...',
      enterApp: '公式サイトへ',
      privacyLink: 'プライバシー',
      supportLink: 'サポート',
      emptyTitle: '一致するアプリが見つかりません',
      emptyDesc: '検索キーワードやカテゴリを変更してください。',
      manifestoTitle: '設計とエンジニアリングの哲学',
      manifestoDesc: '過剰な装飾を排し、本質的な快適さを追求します。',
      m1Title: 'ローカルファースト',
      m1Desc: 'すべての処理がお使いのデバイス上で完結します。オフラインでも制限なく機能します。',
      m2Title: 'プライバシー最優先',
      m2Desc: 'アカウント登録不要、行動ログや外部追跡 SDK は一切含まれていません。',
      m3Title: 'Apple ネイティブの軽快さ',
      m3Desc: 'Apple 標準に沿った設計で、メモリやバッテリーの消費を最小限に抑えます。',
      footerLead: '毎日の操作に、確かな安心と静けさを。',
      email: 'zipmaster_support@126.com',
      copyEmail: 'メールアドレスをコピー',
      copied: 'コピーしました'
    },
    ko: {
      brand: 'Apple 엄선 앱',
      heroBadge: '15가지 엄선 도구 · macOS & iOS',
      heroTitle: '순수한 네이티브 경험. 효율성과 프라이버시를 위해.',
      heroSubtitle: '사용자를 위해 정성껏 다듬은 15가지 유틸리티. 100% 기기 내 처리, 클라우드 불필요, 광고 및 추적 없음.',
      stat1: '15개의 독립 앱',
      stat2: '100% 로컬 연산',
      stat3: '클라우드 전송 없음',
      stat4: '8개 언어 지원',
      filterAll: '모든 앱',
      filterSystem: '시스템 및 성능',
      filterFiles: '파일 및 정리',
      filterMedia: '미디어 및 전송',
      filterLife: '라이프 & 일상',
      searchPlaceholder: '앱 이름 또는 기능 검색...',
      enterApp: '웹사이트 이동',
      privacyLink: '개인정보방침',
      supportLink: '고객 지원',
      emptyTitle: '일치하는 앱을 찾을 수 없습니다',
      emptyDesc: '검색어나 카테고리 필터를 변경해 보세요.',
      manifestoTitle: '우리의 개발 및 디자인 철학',
      manifestoDesc: '불필요한 복잡함을 없애고 사용자의 집중에 기여합니다.',
      m1Title: '로컬 퍼스트 (Local First)',
      m1Desc: '모든 작업이 기기 내에서 안전하게 실행되며 오프라인에서도 작동합니다.',
      m2Title: '철저한 프라이버시',
      m2Desc: '계정 가입이 필요 없고 외부 추적 SDK가 포함되지 않아 데이터가 안전합니다.',
      m3Title: 'Apple 네이티브의 완성도',
      m3Desc: '하드웨어 칩에 최적화되어 리소스 소모가 적고 부드럽게 동작합니다.',
      footerLead: '모든 작업에 확신과 명쾌함을 전합니다.',
      email: 'zipmaster_support@126.com',
      copyEmail: '지원 이메일 복사',
      copied: '복사 완료'
    },
    de: {
      brand: 'Apple Crafted Apps',
      heroBadge: '15 Native Werkzeuge · Für macOS & iOS',
      heroTitle: 'Reines Apple-Erlebnis. Entwickelt für Geschwindigkeit und Datenschutz.',
      heroSubtitle: '15 sorgfältig entwickelte Tools. Lokale Verarbeitung, kein Cloud-Zwang, keine Werbung oder Tracking.',
      stat1: '15 Apps',
      stat2: '100% Lokal',
      stat3: 'Kein Upload',
      stat4: '8 Sprachen',
      filterAll: 'Alle Apps',
      filterSystem: 'System & Leistung',
      filterFiles: 'Dateien & Ordner',
      filterMedia: 'Medien & Transfer',
      filterLife: 'Leben & Alltag',
      searchPlaceholder: 'Nach Name oder Funktion suchen...',
      enterApp: 'Zur App-Seite',
      privacyLink: 'Datenschutz',
      supportLink: 'Support',
      emptyTitle: 'Keine passenden Apps gefunden',
      emptyDesc: 'Bitte passe deine Suchbegriffe oder Filter an.',
      manifestoTitle: 'Unsere Entwicklungsphilosophie',
      manifestoDesc: 'Einfach, stabil und respektvoll gegenüber deinen Daten.',
      m1Title: 'Local First',
      m1Desc: 'Alles wird lokal auf deinem Gerät verarbeitet – zuverlässig auch ohne Internetverbindung.',
      m2Title: 'Datenschutz by Design',
      m2Desc: 'Kein Nutzerkonto erforderlich, keine Tracking-SDKs, vollkommene Privatsphäre.',
      m3Title: 'Apple-Native Qualität',
      m3Desc: 'Optimiert für maximale Effizienz und minimale Systemlast.',
      footerLead: 'Ruhe, Fokus und Präzision für deine tägliche Arbeit.',
      email: 'zipmaster_support@126.com',
      copyEmail: 'E-Mail kopieren',
      copied: 'Kopiert'
    },
    fr: {
      brand: 'Apple Crafted Apps',
      heroBadge: '15 Outils Natifs · Pour macOS & iOS',
      heroTitle: 'L’expérience Apple épurée. Conçu pour la vitesse et la confidentialité.',
      heroSubtitle: 'Une collection de 15 outils pensés pour vos appareils. Traitement local, sans compte cloud, sans publicité ni pistage.',
      stat1: '15 Applications',
      stat2: '100% Local',
      stat3: 'Zéro Cloud',
      stat4: '8 Langues',
      filterAll: 'Toutes les apps',
      filterSystem: 'Système & Efficacité',
      filterFiles: 'Fichiers & Dossiers',
      filterMedia: 'Médias & Réseau',
      filterLife: 'Vie & Quotidien',
      searchPlaceholder: 'Rechercher une app ou fonction...',
      enterApp: 'Visiter le site',
      privacyLink: 'Confidentialité',
      supportLink: 'Assistance',
      emptyTitle: 'Aucune app ne correspond',
      emptyDesc: 'Essayez d’ajuster votre recherche ou filtre.',
      manifestoTitle: 'Notre Philosophie de Conception',
      manifestoDesc: 'La clarté et l’efficacité au service de votre productivité.',
      m1Title: 'Priorité au Local',
      m1Desc: 'Tout est traité directement sur votre appareil, fonctionnel même sans connexion.',
      m2Title: 'Confidentialité Totale',
      m2Desc: 'Aucun compte requis, aucune collecte de données, aucun traceur publicitaire.',
      m3Title: 'Finition Native Apple',
      m3Desc: 'Optimisé pour Apple Silicon avec une consommation mémoire et batterie minimale.',
      footerLead: 'Simplicité, précision et sérénité pour vos tâches quotidiennes.',
      email: 'zipmaster_support@126.com',
      copyEmail: 'Copier l’adresse e-mail',
      copied: 'Copié'
    },
    es: {
      brand: 'Apple Crafted Apps',
      heroBadge: '15 Herramientas Nativas · Para macOS & iOS',
      heroTitle: 'Experiencia nativa de Apple. Creada para la velocidad y privacidad.',
      heroSubtitle: '15 utilidades diseñadas con precisión. Procesamiento en el dispositivo, sin cuentas en la nube ni rastreo.',
      stat1: '15 Apps',
      stat2: '100% Local',
      stat3: 'Cero Nube',
      stat4: '8 Idiomas',
      filterAll: 'Todas las apps',
      filterSystem: 'Sistema y Eficiencia',
      filterFiles: 'Archivos y Carpetas',
      filterMedia: 'Medios y Red',
      filterLife: 'Vida y Cotidiano',
      searchPlaceholder: 'Buscar por nombre o función...',
      enterApp: 'Ver Sitio de la App',
      privacyLink: 'Privacidad',
      supportLink: 'Soporte',
      emptyTitle: 'No se encontraron aplicaciones',
      emptyDesc: 'Prueba con otros términos de búsqueda o filtros.',
      manifestoTitle: 'Nuestra Filosofía de Desarrollo',
      manifestoDesc: 'Herramientas puras y transparentes que respetan tu privacidad.',
      m1Title: 'Prioridad Local',
      m1Desc: 'Todo se procesa en tu dispositivo, sin enviar tus archivos a servidores externos.',
      m2Title: 'Privacidad por Diseño',
      m2Desc: 'Sin necesidad de cuentas, sin SDKs de seguimiento comercial.',
      m3Title: 'Artesanía Nativa Apple',
      m3Desc: 'Diseño cuidado según las guías de Apple y optimizado para la batería.',
      footerLead: 'Calma, foco y precisión para tu flujo de trabajo.',
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
        <button class="filter-tab ${currentCategory === 'life' ? 'active' : ''}" data-cat="life">${escape(t.filterLife || '生活与记录')}</button>
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
        media: t.filterMedia,
        life: t.filterLife || '生活与记录'
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
