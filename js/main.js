/* ═══════════════════════════════════════════════════════════════
   WA Sender - Main JavaScript
   Multi-Page PWA with Full Multi-Language Support
   ═══════════════════════════════════════════════════════════════ */

// ── GLOBAL CONFIG ──
const CONFIG = {
  downloadUrl: 'https://wasendernew.com/wasender.exe',
  wadefenderDownloadUrl: 'https://wasendernew.com/WaDefender.msi',
  whatsappNumber: '201279934735',
  siteUrl: 'https://wasendernew.com',
  bankDetails: {
    name: { ar: 'D360 بنك', en: 'D360 Bank', fr: 'Banque D360', ru: 'Банк D360', it: 'Banca D360' },
    accountHolder: { ar: 'ايمن نصر نصر عبد الوهاب حماد', en: 'Ayman Nasr Nasr Abdel Wahab Hamad', fr: 'Ayman Nasr Nasr Abdel Wahab Hamad', ru: 'Айман Наср Наср Абдель Вахаб Хамад', it: 'Ayman Nasr Nasr Abdel Wahab Hamad' },
    iban: 'SA7636036036031909112576',
    swift: 'DBAKSARIXXX'
  },
  paypalLinks: {
    yearly: 'https://www.paypal.com/ncp/payment/S2MZ5XXCR65ZG',
    '2yearly': 'https://www.paypal.com/ncp/payment/FNR3E3UFRLSTC',
    '3yearly': 'https://www.paypal.com/ncp/payment/QF2GAKDECFGNJ',
    lifetime: 'https://www.paypal.com/ncp/payment/YR7KL36E3G6DW',
    '2dev-yearly': 'https://www.paypal.com/ncp/payment/UALYCA9GWSGYL',
    '3dev-yearly': 'https://www.paypal.com/ncp/payment/2GKPTJEBQF7KL',
    '2dev-2yr': 'https://www.paypal.com/ncp/payment/PMNSNED5TBWU8',
    wadefenderYearly: 'https://www.paypal.com/ncp/payment/6A5DXLMT28W84'
  }
};

// ── TRANSLATIONS ──
const i18n = {
  ar: {
    nav_home: 'الرئيسية',
    nav_how: 'شرح البرنامج',
    nav_guide: 'حماية من الحظر',
    nav_features: 'المميزات',
    nav_pricing: 'الأسعار',
    nav_contact: 'اتصل بنا',
    nav_policies: 'السياسات',
    nav_marketing: '📊 بيانات التسويق',
    nav_wacrm: '🟢 WA CRM',
    nav_wadefender: '🛡️ WaDefender',
    nav_exclusive_software: '⭐ برامج التسويق الحصرية',
    
    bn_home: 'الرئيسية',
    bn_videos: 'الفيديوهات',
    bn_pricing: 'الأسعار',
    bn_download: 'تحميل',
    bn_contact: 'تواصل',
    
    footer_quick: 'روابط سريعة',
    footer_legal: 'قانوني',
    footer_support: 'الدعم',
    footer_rights: 'جميع الحقوق محفوظة',
    footer_desc: 'برنامج احترافي للتسويق عبر واتساب مع أدوات متقدمة للرسائل الجماعية والأتمتة.',
    footer_privacy: 'سياسة الخصوصية',
    footer_purchase: 'سياسة الشراء',
    footer_refund: 'سياسة الاسترجاع',
    footer_terms: 'الشروط والأحكام',
    footer_whatsapp: 'واتساب'
  },
  en: {
    nav_home: 'Home',
    nav_how: 'Tutorial',
    nav_guide: 'Anti-Ban Guide',
    nav_features: 'Features',
    nav_pricing: 'Pricing',
    nav_contact: 'Contact',
    nav_policies: 'Policies',
    nav_marketing: '📊 Marketing Data',
    nav_wacrm: '🟢 WA CRM',
    nav_wadefender: '🛡️ WaDefender',
    nav_exclusive_software: '⭐ Exclusive Marketing Software',
    
    bn_home: 'Home',
    bn_videos: 'Videos',
    bn_pricing: 'Prices',
    bn_download: 'Download',
    bn_contact: 'Contact',
    
    footer_quick: 'Quick Links',
    footer_legal: 'Legal',
    footer_support: 'Support',
    footer_rights: 'All rights reserved',
    footer_desc: 'Professional WhatsApp marketing software with advanced tools for bulk messaging and automation.',
    footer_privacy: 'Privacy Policy',
    footer_purchase: 'Purchase Policy',
    footer_refund: 'Refund Policy',
    footer_terms: 'Terms & Conditions',
    footer_whatsapp: 'WhatsApp'
  },
  fr: {
    nav_home: 'Accueil',
    nav_how: 'Tutoriel',
    nav_guide: 'Guide Anti-Blocage',
    nav_features: 'Fonctionnalités',
    nav_pricing: 'Tarifs',
    nav_contact: 'Contact',
    nav_policies: 'Politiques',
    nav_marketing: '📊 Données Marketing',
    nav_wacrm: '🟢 WA CRM',
    nav_wadefender: '🛡️ WaDefender',
    nav_exclusive_software: '⭐ Logiciels Marketing Exclusifs',
    
    bn_home: 'Accueil',
    bn_videos: 'Vidéos',
    bn_pricing: 'Tarifs',
    bn_download: 'Télécharger',
    bn_contact: 'Contact',
    
    footer_quick: 'Liens Rapides',
    footer_legal: 'Légal',
    footer_support: 'Support',
    footer_rights: 'Tous droits réservés',
    footer_desc: 'Logiciel professionnel de marketing WhatsApp avec des outils avancés.',
    footer_privacy: 'Politique de Confidentialité',
    footer_purchase: 'Politique d\'Achat',
    footer_refund: 'Politique de Remboursement',
    footer_terms: 'Conditions Générales',
    footer_whatsapp: 'WhatsApp'
  },
  ru: {
    nav_home: 'Главная',
    nav_how: 'Обучение',
    nav_guide: 'Защита от Блокировки',
    nav_features: 'Функции',
    nav_pricing: 'Цены',
    nav_contact: 'Контакт',
    nav_policies: 'Политики',
    nav_marketing: '📊 Маркетинг',
    nav_wacrm: '🟢 WA CRM',
    nav_wadefender: '🛡️ WaDefender',
    nav_exclusive_software: '⭐ Эксклюзивные Программы',
    
    bn_home: 'Главная',
    bn_videos: 'Видео',
    bn_pricing: 'Цены',
    bn_download: 'Скачать',
    bn_contact: 'Контакт',
    
    footer_quick: 'Быстрые Ссылки',
    footer_legal: 'Юридическое',
    footer_support: 'Поддержка',
    footer_rights: 'Все права защищены',
    footer_desc: 'Профессиональная программа для маркетинга в WhatsApp.',
    footer_privacy: 'Политика Конфиденциальности',
    footer_purchase: 'Политика Покупки',
    footer_refund: 'Политика Возврата',
    footer_terms: 'Условия',
    footer_whatsapp: 'WhatsApp'
  },
  it: {
    nav_home: 'Home',
    nav_how: 'Tutorial',
    nav_guide: 'Guida Anti-Ban',
    nav_features: 'Funzionalità',
    nav_pricing: 'Prezzi',
    nav_contact: 'Contatti',
    nav_policies: 'Politiche',
    nav_marketing: '📊 Marketing Data',
    nav_wacrm: '🟢 WA CRM',
    nav_wadefender: '🛡️ WaDefender',
    nav_exclusive_software: '⭐ Software Esclusivi',
    
    bn_home: 'Home',
    bn_videos: 'Video',
    bn_pricing: 'Prezzi',
    bn_download: 'Scarica',
    bn_contact: 'Contatti',
    
    footer_quick: 'Link Rapidi',
    footer_legal: 'Legale',
    footer_support: 'Supporto',
    footer_rights: 'Tutti i diritti riservati',
    footer_desc: 'Software professionale di marketing WhatsApp.',
    footer_privacy: 'Privacy Policy',
    footer_purchase: 'Policy di Acquisto',
    footer_refund: 'Policy di Rimborso',
    footer_terms: 'Termini e Condizioni',
    footer_whatsapp: 'WhatsApp'
  }
};

// ── VIDEO PLAYLIST DATA ──
// ⚠️ عدّل مسارات "src" و"poster" هنا لتشير إلى ملفات الفيديو والصور الحقيقية الخاصة بك.
// ⚠️ ملفات الفيديو موجودة في مجلد /video/ بأسماء أرقام (1.mp4 ... 10.mp4).
// إذا كانت الامتدادات مختلفة (مثل .mp4 فعلاً) أو المسار على السيرفر مختلف، عدّل قيمة "src" لكل فيديو.
// مدة كل فيديو (duration) قيمة مبدئية "--:--"، حدّثها بالمدة الحقيقية لكل فيديو.
const videoData = [
  { id: 1, duration: '--:--', src: '/video/1.mp4',
    title: { ar: 'استخراج أرقام أعضاء مجموعات ومجتمع واتساب', en: 'Extracting Numbers of WhatsApp Group & Community Members' },
    desc: { ar: 'شرح كيفية استخراج أرقام أعضاء مجموعات ومجتمعات واتساب باستخدام WA Sender Pro.', en: 'How to extract member numbers from WhatsApp groups and communities using WA Sender Pro.' } },
  { id: 2, duration: '--:--', src: '/video/2.mp4',
    title: { ar: 'عمل حملة إعلانية باستخدام WA Sender Pro', en: 'Running an Ad Campaign with WA Sender Pro' },
    desc: { ar: 'شرح إنشاء وإرسال حملة إعلانية احترافية عبر برنامج WA Sender Pro.', en: 'How to create and send a professional ad campaign using WA Sender Pro.' } },
  { id: 3, duration: '--:--', src: '/video/3.mp4',
    title: { ar: 'تحويل البيانات إلى ملف جهات اتصال CSV', en: 'Converting Data into a CSV Contacts File' },
    desc: { ar: 'شرح تحويل الأرقام والبيانات إلى ملف CSV جاهز للاستيراد والاستخدام.', en: 'How to convert numbers and data into a ready-to-import CSV file.' } },
  { id: 4, duration: '--:--', src: '/video/4.mp4',
    title: { ar: 'استخراج جهات الاتصال أو مجموعات واتساب المحفوظة', en: 'Extracting Saved WhatsApp Contacts or Groups' },
    desc: { ar: 'شرح استخراج جهات الاتصال والمجموعات المحفوظة داخل واتساب بسهولة.', en: 'How to easily extract saved contacts and groups from WhatsApp.' } },
  { id: 5, duration: '--:--', src: '/video/5.mp4',
    title: { ar: 'خدمة الرد التلقائي', en: 'Auto-Reply Service' },
    desc: { ar: 'شرح إعداد واستخدام خدمة الرد التلقائي في برنامج WA Sender Pro.', en: 'How to set up and use the auto-reply service in WA Sender Pro.' } },
  { id: 6, duration: '--:--', src: '/video/6.mp4',
    title: { ar: 'استخراج دردشات واتساب', en: 'Extracting WhatsApp Chats' },
    desc: { ar: 'شرح استخراج محادثات واتساب وإدارتها باستخدام WA Sender Pro.', en: 'How to extract and manage WhatsApp conversations using WA Sender Pro.' } },
  { id: 7, duration: '--:--', src: '/video/7.mp4',
    title: { ar: 'استخراج روابط مجموعات واتساب من صفحات الويب', en: 'Extracting WhatsApp Group Links from Web Pages' },
    desc: { ar: 'شرح استخراج روابط مجموعات واتساب المنشورة على مواقع الويب تلقائيًا.', en: 'How to automatically extract WhatsApp group links published on websites.' } },
  { id: 8, duration: '--:--', src: '/video/8.mp4',
    title: { ar: 'تحويل البيانات إلى جهات اتصال CSV', en: 'Converting Data into CSV Contacts' },
    desc: { ar: 'شرح تجهيز ملفات CSV وإدارتها لاستخدامها في حملات واتساب.', en: 'How to prepare and manage CSV files for use in WhatsApp campaigns.' } },
  { id: 9, duration: '--:--', src: '/video/9.mp4',
    title: { ar: 'استخراج الأرقام والبيانات من خرائط جوجل', en: 'Extracting Numbers and Data from Google Maps' },
    desc: { ar: 'شرح استخراج أرقام الهواتف والبيانات التجارية من خرائط جوجل باستخدام WA Sender Pro.', en: 'How to extract phone numbers and business data from Google Maps using WA Sender Pro.' } },
  { id: 10, duration: '--:--', src: '/video/10.mp4',
    title: { ar: 'طريقة عمل حملة إعلانية على واتساب - آخر تحديث', en: 'How to Run a WhatsApp Ad Campaign - Latest Update' },
    desc: { ar: 'شرح أحدث طريقة لإنشاء حملة إعلانية عبر واتساب مع أفضل الممارسات لتقليل نسبة الحظر.', en: 'The latest method for creating a WhatsApp ad campaign with best practices to reduce ban risk.' } }
];
let currentVideoIndex = 0;

let currentLang = localStorage.getItem('wasender_lang') || 'ar';
let soundEnabled = localStorage.getItem('wasender_sound') !== 'false';

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initNavigation();
  updateFooterCopyrightYear();
  initRevealAnimations();
  initAccordions();
  initPWABanner();
  initVideoPlaylist();
});

function updateFooterCopyrightYear() {
  const currentYear = new Date().getFullYear();
  document.querySelectorAll('.current-year').forEach(el => {
    el.textContent = currentYear;
  });
}

function initLanguage() {
  const dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = currentLang;
  document.documentElement.dir = dir;
  document.body.dir = dir;
  
  const langLabel = document.getElementById('currentLangLabel');
  if (langLabel) {
    const langNames = { ar: 'العربية', en: 'English', fr: 'Français', ru: 'Русский', it: 'Italiano' };
    langLabel.textContent = langNames[currentLang] || currentLang;
  }
  
  applyTranslations();
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('wasender_lang', lang);
  initLanguage();
  toggleLangMenu();
}

function toggleLangMenu() {
  const dropdown = document.getElementById('langDropdown');
  if (dropdown) dropdown.classList.toggle('open');
}

function toggleSoftwareDropdown() {
  const dropdown = document.getElementById('softwareDropdown');
  if (dropdown) dropdown.classList.toggle('open');
}

function applyTranslations() {
  const t = i18n[currentLang] || i18n.ar;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.innerHTML = t[key];
  });
  updateFooterCopyrightYear();

  if (document.getElementById('videoPlaylist') && typeof videoData !== 'undefined') {
    renderVideoPlaylist();
    const numEl = document.getElementById('videoCurrentNum');
    const titleEl = document.getElementById('videoCurrentTitle');
    const descEl = document.getElementById('videoCurrentDesc');
    const item = videoData[currentVideoIndex];
    if (item) {
      if (numEl) numEl.textContent = String(currentVideoIndex + 1).padStart(2, '0');
      if (titleEl) titleEl.textContent = videoText('title', item);
      if (descEl) descEl.textContent = videoText('desc', item);
    }
  }
}

function initNavigation() {
  document.addEventListener('click', (e) => {
    const navLinks = document.querySelector('.nav-links');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    if (navLinks?.classList.contains('open') && !navLinks.contains(e.target) && !menuBtn?.contains(e.target)) {
      navLinks.classList.remove('open');
    }
    
    if (!e.target.closest('.lang-selector')) {
      document.getElementById('langDropdown')?.classList.remove('open');
    }
    if (!e.target.closest('.software-dropdown-wrap')) {
      document.getElementById('softwareDropdown')?.classList.remove('open');
    }
  });

  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      menuBtn.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
    });
  }
}

function playClickSound() {
  if (!soundEnabled) return;
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }
  } catch (e) {}
}

function toggleSound(btn) {
  soundEnabled = !soundEnabled;
  localStorage.setItem('wasender_sound', soundEnabled);
  if (btn) btn.textContent = soundEnabled ? '🔊' : '🔇';
}

/* ── VIDEO PLAYLIST (tutorial.html) ── */
function initVideoPlaylist() {
  const playlistEl = document.getElementById('videoPlaylist');
  if (!playlistEl || !videoData.length) return;

  renderVideoPlaylist();
  loadVideo(0, { silent: true });

  document.getElementById('prevVidBtn')?.addEventListener('click', () => {
    loadVideo((currentVideoIndex - 1 + videoData.length) % videoData.length);
  });
  document.getElementById('nextVidBtn')?.addEventListener('click', () => {
    loadVideo((currentVideoIndex + 1) % videoData.length);
  });
}

function videoText(field, item) {
  const lang = i18n[currentLang] ? currentLang : 'ar';
  return (item[field][lang] || item[field].en || item[field].ar);
}

function renderVideoPlaylist() {
  const playlistEl = document.getElementById('videoPlaylist');
  if (!playlistEl) return;

  playlistEl.innerHTML = videoData.map((item, i) => `
    <div class="video-item${i === currentVideoIndex ? ' active' : ''}" data-index="${i}" style="--i:${i}" role="option" aria-selected="${i === currentVideoIndex}">
      <div class="video-item-thumb">
        <span class="video-item-num">${String(i + 1).padStart(2, '0')}</span>
        <div class="video-item-eq"><span></span><span></span><span></span></div>
      </div>
      <div class="video-item-body">
        <h4>${videoText('title', item)}</h4>
        <span>⏱ ${item.duration}</span>
      </div>
    </div>
  `).join('');

  playlistEl.querySelectorAll('.video-item').forEach(el => {
    el.addEventListener('click', () => loadVideo(parseInt(el.dataset.index, 10)));
  });
}

function loadVideo(index, opts = {}) {
  if (index < 0 || index >= videoData.length) return;
  currentVideoIndex = index;
  const item = videoData[index];

  const player = document.getElementById('mainVideo');
  if (player) {
    if (item.poster) {
      player.setAttribute('poster', item.poster);
    } else {
      player.removeAttribute('poster');
    }
    if (player.getAttribute('src') !== item.src) {
      player.setAttribute('src', item.src);
    }
    if (!opts.silent) {
      player.play().catch(() => {});
    }
  }

  const numEl = document.getElementById('videoCurrentNum');
  const titleEl = document.getElementById('videoCurrentTitle');
  const descEl = document.getElementById('videoCurrentDesc');
  const infoWrap = document.querySelector('.video-current-info');

  if (numEl) numEl.textContent = String(index + 1).padStart(2, '0');
  if (titleEl) titleEl.textContent = videoText('title', item);
  if (descEl) descEl.textContent = videoText('desc', item);
  if (infoWrap) {
    infoWrap.style.animation = 'none';
    void infoWrap.offsetWidth;
    infoWrap.style.animation = '';
  }

  document.querySelectorAll('.video-playlist .video-item').forEach(el => {
    const isActive = parseInt(el.dataset.index, 10) === index;
    el.classList.toggle('active', isActive);
    el.setAttribute('aria-selected', isActive);
  });

  const activeItem = document.querySelector('.video-playlist .video-item.active');
  activeItem?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}

/* ── SCROLL-REVEAL ANIMATIONS ──
   Powers every .reveal element across the site (hero, cards, sections).
   Elements fade + slide into view once they cross the viewport threshold. */
function initRevealAnimations() {
  const targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;

  // If the browser doesn't support IntersectionObserver, just show everything.
  if (!('IntersectionObserver' in window)) {
    targets.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  targets.forEach(el => observer.observe(el));
}

/* ── ACCORDIONS (payment methods on pricing.html + FAQ on pricing.html) ──
   Delegated so it works regardless of how many items are on the page. */
function initAccordions() {
  // Pricing page FAQ (.faq-item > .faq-q / .faq-a)
  document.querySelectorAll('.faq-list .faq-q').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.closest('.faq-item');
      if (!item) return;
      const wasOpen = item.classList.contains('open');
      item.parentElement.querySelectorAll('.faq-item.open').forEach(other => {
        if (other !== item) other.classList.remove('open');
      });
      item.classList.toggle('open', !wasOpen);
    });
  });
}

/* Payment method accordion (pricing.html) — called via onclick="togglePayment('vodafone')" */
function togglePayment(id) {
  const body = document.getElementById('pm-' + id);
  if (!body) return;
  const method = body.closest('.payment-method');
  if (!method) return;
  const wasOpen = method.classList.contains('open');

  document.querySelectorAll('.payment-method.open').forEach(other => {
    if (other !== method) other.classList.remove('open');
  });

  method.classList.toggle('open', !wasOpen);
}

/* Copy bank/wallet numbers to clipboard — called via onclick="copyToClipboard('...', this)" */
function copyToClipboard(text, btn) {
  const done = () => {
    if (!btn) return;
    const original = btn.textContent;
    btn.textContent = '✓ تم النسخ';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = original;
      btn.classList.remove('copied');
    }, 1800);
  };

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
  } else {
    fallbackCopy(text, done);
  }
}

function fallbackCopy(text, cb) {
  const tmp = document.createElement('textarea');
  tmp.value = text;
  tmp.style.position = 'fixed';
  tmp.style.opacity = '0';
  document.body.appendChild(tmp);
  tmp.select();
  try { document.execCommand('copy'); } catch (e) {}
  document.body.removeChild(tmp);
  if (cb) cb();
}

/* ── PWA INSTALL BANNER ── */
let deferredInstallPrompt = null;

function initPWABanner() {
  const banner = document.getElementById('pwaBanner');
  if (!banner) return;

  if (localStorage.getItem('wasender_pwa_dismissed') === 'true') return;

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    banner.classList.add('show');
  });

  window.addEventListener('appinstalled', () => {
    banner.classList.remove('show');
    localStorage.setItem('wasender_pwa_dismissed', 'true');
  });
}

function installPWA() {
  const banner = document.getElementById('pwaBanner');
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    deferredInstallPrompt.userChoice.finally(() => {
      deferredInstallPrompt = null;
      if (banner) banner.classList.remove('show');
    });
  } else if (banner) {
    banner.classList.remove('show');
  }
}

function hidePWAInstallBanner() {
  const banner = document.getElementById('pwaBanner');
  if (banner) banner.classList.remove('show');
  localStorage.setItem('wasender_pwa_dismissed', 'true');
}
/* ═══════════════════════════════════════════════════════════════
   SALES NOTIFICATIONS SYSTEM
   Real-time purchase notifications with Arabic names
   ═══════════════════════════════════════════════════════════════ */

// ── ARABIC NAMES DATABASE (Egyptian + Gulf) ──
const SALES_NAMES = {
  // أسماء مصرية masculine
  egyptian_male: [
    'أحمد محمد', 'محمد علي', 'محمود حسن', 'كريم سامي', 'أمير طارق',
    'يوسف إبراهيم', 'عمر فاروق', 'حسين عبدالله', 'خالد سعيد', 'رامي أشرف',
    'طاهر محمود', 'سيف الدين', 'إبراهيم عادل', 'أنس أحمد', 'باسم خالد',
    'شادي سمير', 'فادي رضا', 'مصطفى كمال', 'نبيل حسين', 'وائل مجدي'
  ],
  // أسماء مصرية feminine
  egyptian_female: [
    'نورهان أحمد', 'سارة محمود', 'مريم خالد', 'يارا سامي', 'جمانة حسن',
    'ريم عبدالله', 'دينا أشرف', 'هند طارق', 'مى علي', 'آية إبراهيم',
    'سلمى عمر', 'نادين فاروق', 'أمل حسين', 'رانيا سعيد', 'منى كريم',
    'شيرين سمير', 'غادة رضا', 'أسماء مصطفى', 'فاطمة نبيل', 'لينا وائل'
  ],
  // أسماء خليجية masculine
  gulf_male: [
    'عبدالله سلطان', 'محمد فهد', 'خالد العتيبي', 'سعود الشمري', 'ناصر القحطاني',
    'فيصل الدوسري', 'تركي الغامدي', 'بدر المطيري', 'ماجد الحربي', 'عبدالرحمن السبيعي',
    'سلطان العنزي', 'فهد الزهراني', 'حمد المالكي', 'عيسى الكندري', 'جاسم النعيمي',
    'راشد المري', 'طلال الخالدي', 'يعقوب الحمادي', 'منصور الهاشمي', 'مبارك العتيبي'
  ],
  // أسماء خليجية feminine
  gulf_female: [
    'نورة الخليف', 'منيرة السعد', 'لطيفة الدوسري', 'هيا الشمري', 'شيخة القحطانية',
    'مريم الغامدي', 'فاطمة المطيري', 'عائشة الحربي', 'سارة السبيعي', 'ريم العنزية',
    'دانة الزهرانية', 'لطيفة المالكية', 'مودة الكندري', 'نوال النعيمية', 'أريج المري',
    'حصة الخالدي', 'ملاك الحمادية', 'أميرة الهاشمية', 'لطوف العتيبية', 'جواهر السالم'
  ]
};

// ── PLANS & PROGRAMS DATA ──
const SALES_PLANS = [
  { name: 'اشتراك سنوي', program: 'WA Sender Pro', url: '/pricing.html#yearly' },
  { name: 'اشتراك سنتين', program: 'WA Sender Pro', url: '/pricing.html#2yearly' },
  { name: 'اشتراك 3 سنوات', program: 'WA Sender Pro', url: '/pricing.html#3yearly' },
  { name: 'اشتراك مدى الحياة', program: 'WA Sender Pro', url: '/pricing.html#lifetime' },
  { name: 'اشتراك سنوي - مطورين', program: 'WA Sender Pro', url: '/pricing.html#2dev-yearly' },
  { name: 'اشتراك 3 سنوات - مطورين', program: 'WA Sender Pro', url: '/pricing.html#3dev-yearly' },
  { name: 'اشتراك سنتين - مطورين', program: 'WA Sender Pro', url: '/pricing.html#2dev-2yr' },
  { name: 'اشتراك سنوي', program: 'WaDefender', url: '/pricing.html#wadefender' }
];

// ── LOCATIONS FOR REALISM ──
const LOCATIONS = [
  'القاهرة', 'الإسكندرية', 'الجيزة', 'المنصورة', 'السويس',
  'الرياض', 'جدة', 'مكة المكرمة', 'المدينة المنورة', 'الدمام',
  'الظهران', 'الخبر', 'تبوك', 'أبها', 'الطائف',
  'المنوفية', 'الغربية', 'الشرقية', 'كفر الشيخ', 'بورسعيد'
];

// ── TIME AGO PHRASES ──
const TIME_AGO = ['منذ دقيقة', 'منذ دقيقتين', 'منذ 3 دقائق', 'منذ 5 دقائق', 'منذ 8 دقائق', 'منذ 10 دقائق', 'منذ 12 دقيقة', 'منذ 15 دقيقة'];

// ── NOTIFICATION STATE ──
let salesNotificationInterval = null;
let isNotificationShowing = false;

// ── GET RANDOM ITEM FROM ARRAY ──
function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ── GENERATE RANDOM CUSTOMER ──
function generateRandomCustomer() {
  const isEgyptian = Math.random() > 0.5;
  const isMale = Math.random() > 0.5;

  let name;
  if (isEgyptian) {
    name = isMale ? getRandomItem(SALES_NAMES.egyptian_male) : getRandomItem(SALES_NAMES.egyptian_female);
  } else {
    name = isMale ? getRandomItem(SALES_NAMES.gulf_male) : getRandomItem(SALES_NAMES.gulf_female);
  }

  const plan = getRandomItem(SALES_PLANS);

  return {
    name,
    location: getRandomItem(LOCATIONS),
    planName: plan.name,
    program: plan.program,
    url: plan.url,
    timeAgo: getRandomItem(TIME_AGO)
  };
}

// ── CREATE NOTIFICATION ELEMENT ──
function createSalesNotification(customer) {
  let container = document.getElementById('sales-notifications-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'sales-notifications-container';
    document.body.appendChild(container);
  }

  const notification = document.createElement('a');
  notification.href = customer.url;
  notification.className = 'sales-notification';
  notification.setAttribute('aria-label', `إشعار شراء: ${customer.name}`);
  notification.innerHTML = `
    <div class="sn-icon">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <div class="sn-content">
      <div class="sn-text">
        <strong>${customer.name}</strong>
        <span>اشترى ${customer.planName}</span>
        <span class="sn-program">📦 ${customer.program}</span>
      </div>
      <div class="sn-meta">
        <span class="sn-location">📍 ${customer.location}</span>
        <span class="sn-time">${customer.timeAgo}</span>
      </div>
    </div>
    <button class="sn-close" aria-label="إغلاق" onclick="event.preventDefault(); event.stopPropagation(); this.parentElement.remove();">&times;</button>
  `;

  notification.style.animation = 'slideInRight 0.4s ease-out forwards';

  setTimeout(() => {
    if (notification.parentElement) {
      notification.style.animation = 'slideOutRight 0.3s ease-in forwards';
      setTimeout(() => notification.remove(), 300);
    }
  }, 8000);

  return notification;
}

// ── SHOW NEW NOTIFICATION ──
function showSalesNotification() {
  if (isNotificationShowing) return;

  const customer = generateRandomCustomer();
  const container = document.getElementById('sales-notifications-container');
  if (!container) return;

  const existingNotifications = container.querySelectorAll('.sales-notification');
  if (existingNotifications.length >= 3) {
    existingNotifications[0].remove();
  }

  isNotificationShowing = true;
  const notification = createSalesNotification(customer);
  container.appendChild(notification);

  setTimeout(() => {
    isNotificationShowing = false;
  }, 500);
}

// ── INITIALIZE SALES NOTIFICATIONS ──
function initSalesNotifications() {
  if (window.location.pathname.includes('pricing')) return;
  if (localStorage.getItem('sales_notifications_disabled') === 'true') return;

  setTimeout(() => {
    showSalesNotification();

    salesNotificationInterval = setInterval(() => {
      const delay = Math.random() * 30000 + 15000;
      clearInterval(salesNotificationInterval);

      setTimeout(() => {
        showSalesNotification();
        salesNotificationInterval = setInterval(showSalesNotification, Math.random() * 30000 + 15000);
      }, delay);
    }, 15000);
  }, 5000);
}

// ── TOGGLE SALES NOTIFICATIONS ──
function toggleSalesNotifications(disabled) {
  localStorage.setItem('sales_notifications_disabled', disabled ? 'true' : 'false');

  if (disabled && salesNotificationInterval) {
    clearInterval(salesNotificationInterval);
    salesNotificationInterval = null;
  } else if (!disabled && !salesNotificationInterval) {
    initSalesNotifications();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initSalesNotifications();
});
