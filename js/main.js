/* ═══════════════════════════════════════════════════════════════
   WA Sender - Main JavaScript
   Multi-Page PWA with Full Multi-Language Support
   ═══════════════════════════════════════════════════════════════ */

const CONFIG = {
  downloadUrl: 'https://wasendernew.com/wasender.exe',
  whatsappNumber: '201279934735',
  siteUrl: 'https://wasendernew.com',
  bankDetails: {
    name: { ar: 'D360 بنك', en: 'D360 Bank', fr: 'Banque D360', ru: 'Банк D360', it: 'Banca D360' },
    accountHolder: { ar: 'ايمن نصر نصر عبد الوهاب حماد', en: 'Ayman Nasr Nasr Abdel Wahab Hamad' },
    iban: 'SA7636036036031909112576',
    swift: 'DBAKSARIXXX'
  },
  paypalLinks: {
    yearly: 'https://www.paypal.com/ncp/payment/S2MZ5XXCR65ZG',
    lifetime: 'https://www.paypal.com/ncp/payment/YR7KL36E3G6DW'
  }
};

const i18n = {
  ar: {
    nav_home: 'الرئيسية', nav_how: 'شرح البرنامج', nav_guide: 'حماية من الحظر',
    nav_features: 'المميزات', nav_pricing: 'الأسعار', nav_contact: 'اتصل بنا',
    badge_new: 'الإصدار الجديد 5.0.7',
    hero_title: 'WA Sender<br>برنامج التسويق عبر واتساب',
    hero_sub: 'برنامج تسويق واتساب كامل مع 15+ أداة قوية للرسائل الجماعية، والأتمتة، وتوليد العملاء المحتملين',
    btn_download: 'تحميل مجاني', btn_buy: 'اشترِ الآن',
    warn_title: 'هام: سياسة Meta / WhatsApp لمكافحة السبام',
    warn_p1: 'تفرض شركة Meta قيودًا صارمة على أنشطة الرسائل الجماعية والرسائل المزعجة.',
    warn_p2: 'الحسابات التي تنتهك شروط استخدام واتساب قد تتعرّض للحظر المؤقت أو الدائم.',
    warn_p3: 'يتضمن WA Sender خصائص أمان تساعدك على الالتزام بسياسات Meta.',
    warn_p5: 'ملاحظة: تأكّد من ضبط Windows Defender أو برنامج الحماية لديك.',
    how_label: 'شرح البرنامج', how_title: 'اتفرج وابدأ خلال دقائق',
    how_sub: 'فيديو شرح كامل لتثبيت البرنامج وتفعيل الترخيص خطوة بخطوة',
    how_badge: 'شرح كامل بالفيديو', how_caption: '▶ فيديوهات شرح تعمل مباشرة داخل الموقع',
    steps_title: 'طريقة التفعيل في 4 خطوات بسيطة',
    step1_title: 'حمّل البرنامج', step1_desc: 'حمّل ملف WA Sender وثبّته على جهازك بسهولة.',
    step2_title: 'اختر باقتك وادفع', step2_desc: 'اختر الخطة المناسبة وأتمم الدفع بأي وسيلة متاحة.',
    step3_title: 'أرسل إيصال الدفع', step3_desc: 'أرسل لقطة شاشة الإيصال عبر واتساب لتلقي كود التفعيل.',
    step4_title: 'فعّل وابدأ الإرسال', step4_desc: 'أدخل الكود داخل البرنامج واستمتع بكل الأدوات.',
    plan1_name: 'سنة واحدة', plan2_name: 'مدى الحياة',
    plan1_period: '/ سنة', plan2_period: '/ مرة واحدة',
    pf1: 'رخصة واحدة لجهاز واحد', pf2: 'رسائل يومية غير محدودة',
    pf3: 'جميع الميزات المميزة', pf4: 'استيراد جهات اتصال غير محدودة',
    pf5: 'التخصيص والأتمتة', btn_buy_now: 'اشترِ الآن',
    footer_desc: 'برنامج احترافي للتسويق عبر واتساب مع أدوات متقدمة للرسائل الجماعية.',
    footer_quick: 'روابط سريعة', footer_legal: 'قانوني', footer_support: 'الدعم',
    footer_rights: 'جميع الحقوق محفوظة', pwa_install: 'ثبّت التطبيق',
    pwa_subtitle: 'احصل على تجربة أفضل بدون متصفح', bn_home: 'الرئيسية',
    bn_pricing: 'الأسعار', bn_download: 'تحميل', bn_contact: 'تواصل'
  },
  en: {
    nav_home: 'Home', nav_how: 'Tutorial', nav_guide: 'Anti-Ban Guide',
    nav_features: 'Features', nav_pricing: 'Pricing', nav_contact: 'Contact',
    badge_new: 'New Version 5.0.7',
    hero_title: 'WA Sender<br>WhatsApp Marketing Software',
    hero_sub: 'Complete WhatsApp marketing software with 15+ powerful tools for bulk messaging and automation',
    btn_download: 'Free Download', btn_buy: 'Buy Now',
    warn_title: 'Important: Meta / WhatsApp Anti-Spam Policy',
    warn_p1: 'Meta imposes strict restrictions on bulk messaging and spam activities.',
    warn_p2: 'Accounts violating WhatsApp terms may face temporary or permanent bans.',
    warn_p3: 'WA Sender includes security features to help comply with Meta policies.',
    warn_p5: 'Note: Ensure your antivirus allows program installation.',
    how_label: 'Tutorial', how_title: 'Watch and Start in Minutes',
    how_sub: 'Complete video tutorial for installation and activation step by step',
    how_badge: 'Complete Video Tutorial', how_caption: '▶ Playlist playing directly on site',
    steps_title: 'Activation in 4 Simple Steps',
    step1_title: 'Download Program', step1_desc: 'Download WA Sender and install it easily.',
    step2_title: 'Choose Plan & Pay', step2_desc: 'Select the right plan and pay securely.',
    step3_title: 'Send Receipt', step3_desc: 'Send payment receipt via WhatsApp to get code.',
    step4_title: 'Activate & Send', step4_desc: 'Enter code inside the program and enjoy tools.',
    plan1_name: 'One Year', plan2_name: 'Lifetime',
    plan1_period: '/ year', plan2_period: '/ one time',
    pf1: 'Single device license', pf2: 'Unlimited daily messages',
    pf3: 'All premium features', pf4: 'Unlimited contacts import',
    pf5: 'Customization & Automation', btn_buy_now: 'Buy Now',
    footer_desc: 'Professional WhatsApp marketing software with advanced tools.',
    footer_quick: 'Quick Links', footer_legal: 'Legal', footer_support: 'Support',
    footer_rights: 'All rights reserved', pwa_install: 'Install App',
    pwa_subtitle: 'Get a better experience without browser', bn_home: 'Home',
    bn_pricing: 'Prices', bn_download: 'Download', bn_contact: 'Contact'
  }
};

let currentLang = localStorage.getItem('wasender_lang') || 'ar';
let soundEnabled = localStorage.getItem('wasender_sound') !== 'false';
let deferredPrompt = null;

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initNavigation();
  initMobileMenu();
  initFAQ();
  initPWA();
});

function initLanguage() {
  const dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = currentLang;
  document.documentElement.dir = dir;
  document.body.dir = dir;
  
  if (document.getElementById('currentLangLabel')) {
    const langNames = { ar: 'العربية', en: 'English', fr: 'Français', ru: 'Русский', it: 'Italiano' };
    document.getElementById('currentLangLabel').textContent = langNames[currentLang] || currentLang;
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
  document.getElementById('langDropdown')?.classList.toggle('open');
}

function applyTranslations() {
  const t = i18n[currentLang] || i18n.ar;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.innerHTML = t[key];
  });
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
  });
}

function initMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      menuBtn.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
    });
  }
}

function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(header => {
    header.addEventListener('click', () => {
      header.parentElement.classList.toggle('active');
    });
  });
}

function toggleSound(btn) {
  soundEnabled = !soundEnabled;
  localStorage.setItem('wasender_sound', soundEnabled);
  if (btn) btn.textContent = soundEnabled ? '🔊' : '🔇';
}

function initPWA() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  }
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    document.getElementById('pwaBanner')?.classList.add('show');
  });
}

function hidePWAInstallBanner() {
  document.getElementById('pwaBanner')?.classList.remove('show');
  sessionStorage.setItem('pwa_banner_dismissed', 'true');
}

async function installPWA() {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  if (outcome === 'accepted') hidePWAInstallBanner();
  deferredPrompt = null;
}