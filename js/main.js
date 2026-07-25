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

let currentLang = localStorage.getItem('wasender_lang') || 'ar';
let soundEnabled = localStorage.getItem('wasender_sound') !== 'false';

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initNavigation();
  updateFooterCopyrightYear();
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