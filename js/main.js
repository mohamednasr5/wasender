/* =========================================================
   WA Sender — Main JavaScript
   Unified interactions for index.html + marketing-data.html
========================================================= */

const CONFIG = {
  downloadUrl: 'https://wasendernew.com/wasender.exe',
  whatsappNumber: '201279934735',
  siteUrl: 'https://wasendernew.com',
  paypalLinks: {
    yearly: 'https://www.paypal.com/ncp/payment/S2MZ5XXCR65ZG',
    lifetime: 'https://www.paypal.com/ncp/payment/YR7KL36E3G6DW'
  },
  bankDetails: {
    name: {
      ar: 'D360 بنك',
      en: 'D360 Bank',
      fr: 'Banque D360',
      ru: 'Банк D360',
      it: 'Banca D360'
    },
    accountHolder: {
      ar: 'ايمن نصر نصر عبد الوهاب حماد',
      en: 'Ayman Nasr Nasr Abdel Wahab Hamad'
    },
    iban: 'SA7636036036031909112576',
    swift: 'DBAKSARIXXX'
  }
};

const i18n = {
  ar: {
    navhome: 'الرئيسية',
    navhow: 'شرح البرنامج',
    navguide: 'حماية من الحظر',
    navfeatures: 'المميزات',
    navpricing: 'الأسعار',
    navcontact: 'اتصل بنا',
    badgenew: 'الإصدار الجديد 5.0.7',
    herotitle: 'WA Sender<br>برنامج التسويق عبر واتساب',
    herosub: 'برنامج تسويق واتساب كامل مع أدوات قوية للرسائل الجماعية، والأتمتة، وإدارة التواصل التجاري.',
    btndownload: 'تحميل مجاني',
    btnbuy: 'اشترِ الآن',
    warntitle: 'هام: سياسة Meta / WhatsApp لمكافحة الرسائل المزعجة',
    warnp1: 'تفرض Meta قيودًا صارمة على أنشطة الإرسال الجماعي غير المنظم.',
    warnp2: 'أي استخدام غير مسؤول قد يؤدي إلى تقييد الحساب مؤقتًا أو دائمًا.',
    warnp3: 'يوفر WA Sender خصائص تساعد على تحسين أسلوب الإرسال بشكل أكثر أمانًا.',
    warnp5: 'ملاحظة: تأكد من إعداد برنامج الحماية للسماح بتثبيت البرنامج.',
    howlabel: 'شرح البرنامج',
    howtitle: 'ابدأ بسرعة خلال دقائق',
    howsub: 'شرح مرئي لتثبيت البرنامج وتفعيله واستخدام أهم الأدوات.',
    howbadge: 'شرح كامل بالفيديو',
    howcaption: 'فيديوهات تعليمية تعمل مباشرة داخل الموقع',
    stepstitle: 'طريقة التفعيل في 4 خطوات',
    step1title: 'حمّل البرنامج',
    step1desc: 'قم بتحميل WA Sender وتثبيته بسهولة على جهازك.',
    step2title: 'اختر الباقة',
    step2desc: 'حدّد الباقة المناسبة وابدأ عملية الدفع.',
    step3title: 'أرسل الإيصال',
    step3desc: 'أرسل صورة الإيصال عبر واتساب للحصول على كود التفعيل.',
    step4title: 'فعّل وابدأ',
    step4desc: 'أدخل الكود داخل البرنامج وابدأ استخدام الأدوات مباشرة.',
    plan1name: 'سنة واحدة',
    plan2name: 'مدى الحياة',
    plan1period: '/ سنة',
    plan2period: '/ مرة واحدة',
    pf1: 'ترخيص لجهاز واحد',
    pf2: 'استخدام يومي مرن',
    pf3: 'الوصول إلى جميع الميزات الأساسية',
    pf4: 'استيراد جهات اتصال وقوائم',
    pf5: 'التخصيص والأتمتة',
    btnbuynow: 'اشترِ الآن',
    footerdesc: 'برنامج احترافي لإدارة حملات واتساب وتبسيط التواصل التجاري.',
    footerquick: 'روابط سريعة',
    footerlegal: 'قانوني',
    footersupport: 'الدعم',
    footerrights: 'جميع الحقوق محفوظة',
    pwainstall: 'تثبيت التطبيق',
    pwasubtitle: 'تجربة أفضل وسرعة أكبر من المتصفح',
    bnhome: 'الرئيسية',
    bnpricing: 'الأسعار',
    bndownload: 'تحميل',
    bncontact: 'تواصل'
  },
  en: {
    navhome: 'Home',
    navhow: 'Tutorial',
    navguide: 'Anti-Ban Guide',
    navfeatures: 'Features',
    navpricing: 'Pricing',
    navcontact: 'Contact',
    badgenew: 'New Version 5.0.7',
    herotitle: 'WA Sender<br>WhatsApp Marketing Software',
    herosub: 'Complete WhatsApp marketing software with powerful tools for outreach, automation, and organized business communication.',
    btndownload: 'Free Download',
    btnbuy: 'Buy Now',
    warntitle: 'Important: Meta / WhatsApp Messaging Policy',
    warnp1: 'Meta applies strict rules to unstructured bulk messaging activity.',
    warnp2: 'Improper usage may lead to temporary or permanent account restrictions.',
    warnp3: 'WA Sender includes features designed to support safer sending behavior.',
    warnp5: 'Note: Make sure your antivirus allows the program installation.',
    howlabel: 'Tutorial',
    howtitle: 'Start in Minutes',
    howsub: 'Video walkthrough for installation, activation, and the most important tools.',
    howbadge: 'Complete Video Tutorial',
    howcaption: 'Training videos played directly on the website',
    stepstitle: 'Activation in 4 Steps',
    step1title: 'Download the app',
    step1desc: 'Download WA Sender and install it on your device.',
    step2title: 'Choose a plan',
    step2desc: 'Select the plan that fits your workflow and continue to payment.',
    step3title: 'Send receipt',
    step3desc: 'Send your payment receipt through WhatsApp to receive the activation code.',
    step4title: 'Activate and start',
    step4desc: 'Enter the code in the app and start using the tools immediately.',
    plan1name: 'One Year',
    plan2name: 'Lifetime',
    plan1period: '/ year',
    plan2period: '/ one time',
    pf1: 'Single device license',
    pf2: 'Flexible daily usage',
    pf3: 'Access to core features',
    pf4: 'Import contacts and lists',
    pf5: 'Customization and automation',
    btnbuynow: 'Buy Now',
    footerdesc: 'Professional software for WhatsApp workflow and business communication.',
    footerquick: 'Quick Links',
    footerlegal: 'Legal',
    footersupport: 'Support',
    footerrights: 'All rights reserved',
    pwainstall: 'Install App',
    pwasubtitle: 'A faster and smoother experience than the browser',
    bnhome: 'Home',
    bnpricing: 'Pricing',
    bndownload: 'Download',
    bncontact: 'Contact'
  }
};

const storage = {
  get(key, fallback = null) {
    try {
      const value = window.localStorage.getItem(key);
      return value === null ? fallback : value;
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch {}
  },
  getSession(key, fallback = null) {
    try {
      const value = window.sessionStorage.getItem(key);
      return value === null ? fallback : value;
    } catch {
      return fallback;
    }
  },
  setSession(key, value) {
    try {
      window.sessionStorage.setItem(key, value);
    } catch {}
  }
};

let currentLang = storage.get('wasender_lang', 'ar');
let soundEnabled = storage.get('wasender_sound', 'true') !== 'false';
let deferredPrompt = null;

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initNavigation();
  initMobileMenu();
  initReveal();
  initFAQ();
  initPaymentAccordion();
  initCounterAnimation();
  initCopyButtons();
  initSoundToggleUI();
  initActiveBottomNav();
  initCurrentYear();
  initPWA();
  initSmoothHashScroll();
});

/* ---------------------------
   Language
---------------------------- */
function initLanguage() {
  const dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = currentLang;
  document.documentElement.dir = dir;
  if (document.body) document.body.dir = dir;

  const langLabel = document.getElementById('currentLangLabel');
  if (langLabel) {
    const langNames = {
      ar: 'العربية',
      en: 'English',
      fr: 'Français',
      ru: 'Русский',
      it: 'Italiano'
    };
    langLabel.textContent = langNames[currentLang] || currentLang;
  }

  syncLangButtons();
  applyTranslations();
  updateDocumentDirectionClasses(dir);
}

function setLang(lang) {
  currentLang = i18n[lang] ? lang : 'ar';
  storage.set('wasender_lang', currentLang);
  initLanguage();
  closeLangMenu();
}

function applyTranslations() {
  const dictionary = i18n[currentLang] || i18n.ar;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (!key || !dictionary[key]) return;
    el.innerHTML = dictionary[key];
  });
}

function syncLangButtons() {
  const dropdown = document.getElementById('langDropdown');
  if (!dropdown) return;
  dropdown.querySelectorAll('button').forEach((btn) => {
    btn.classList.remove('active');
    const onclick = btn.getAttribute('onclick') || '';
    if (onclick.includes(`setLang('${currentLang}')`) || onclick.includes(`setLang("${currentLang}")`) || onclick.includes(`setLang(${currentLang})`)) {
      btn.classList.add('active');
    }
  });
}

function updateDocumentDirectionClasses(dir) {
  document.body?.classList.toggle('is-ltr', dir === 'ltr');
  document.body?.classList.toggle('is-rtl', dir === 'rtl');
}

function toggleLangMenu() {
  document.getElementById('langDropdown')?.classList.toggle('open');
}

function closeLangMenu() {
  document.getElementById('langDropdown')?.classList.remove('open');
}

/* ---------------------------
   Navigation
---------------------------- */
function initNavigation() {
  document.addEventListener('click', (e) => {
    const navLinks = document.querySelector('.nav-links');
    const menuBtn = document.querySelector('.mobile-menu-btn');

    if (
      navLinks?.classList.contains('open') &&
      !navLinks.contains(e.target) &&
      !menuBtn?.contains(e.target)
    ) {
      navLinks.classList.remove('open');
      setMenuButtonState(false);
    }

    if (!e.target.closest('.lang-selector')) {
      closeLangMenu();
    }
  });
}

function initMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if (!menuBtn || !navLinks) return;

  setMenuButtonState(navLinks.classList.contains('open'));

  menuBtn.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    setMenuButtonState(isOpen);
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      setMenuButtonState(false);
    });
  });
}

function setMenuButtonState(isOpen) {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  if (!menuBtn) return;
  menuBtn.textContent = isOpen ? '✕' : '☰';
  menuBtn.setAttribute('aria-expanded', String(isOpen));
}

/* ---------------------------
   Reveal animations
---------------------------- */
function initReveal() {
  const elements = document.querySelectorAll('.reveal, .reveal-on-scroll');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible', 'revealed');
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -60px 0px'
    }
  );

  elements.forEach((el) => observer.observe(el));
}

/* ---------------------------
   FAQ
---------------------------- */
function initFAQ() {
  const items = document.querySelectorAll('.faq-item');
  if (!items.length) return;

  items.forEach((item) => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      items.forEach((other) => {
        other.classList.remove('active');
        other.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
      });

      if (!isActive) {
        item.classList.add('active');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ---------------------------
   Payment accordion
---------------------------- */
function initPaymentAccordion() {
  const items = document.querySelectorAll('.payment-method');
  if (!items.length) return;

  items.forEach((item) => {
    const header = item.querySelector('.pm-header');
    if (!header) return;

    header.addEventListener('click', () => {
      const willOpen = !item.classList.contains('open');

      items.forEach((other) => other.classList.remove('open'));
      if (willOpen) item.classList.add('open');
    });
  });
}

/* ---------------------------
   Counters
---------------------------- */
function initCounterAnimation() {
  const statNumbers = document.querySelectorAll('.stat-number');
  if (!statNumbers.length) return;

  const animateCounter = (element) => {
    const original = (element.dataset.originalValue || element.textContent || '').trim();
    if (!original) return;

    if (!element.dataset.originalValue) {
      element.dataset.originalValue = original;
    }

    const numeric = parseFloat(original.replace(/[^0-9.]/g, ''));
    if (Number.isNaN(numeric)) return;

    const hasM = original.toUpperCase().includes('M');
    const hasPlus = original.includes('+');
    const hasK = original.toUpperCase().includes('K');
    const decimals = numeric % 1 !== 0 ? 1 : 0;
    const duration = 1800;
    const startTime = performance.now();

    const format = (value) => {
      const fixed = decimals ? value.toFixed(1) : Math.floor(value).toString();
      if (hasM) return `${fixed}M`;
      if (hasK) return `${fixed}K`;
      if (hasPlus) return `${fixed}+`;
      return fixed;
    };

    const frame = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const value = numeric * eased;
      element.textContent = format(value);

      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        element.textContent = original;
      }
    };

    requestAnimationFrame(frame);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.45 }
  );

  statNumbers.forEach((stat) => observer.observe(stat));
}

/* ---------------------------
   Copy buttons
---------------------------- */
function initCopyButtons() {
  document.querySelectorAll('.copy-btn').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const row = btn.closest('.copy-row');
      if (!row) return;

      const textNode = [...row.childNodes].find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
      const text = textNode?.textContent?.trim() || row.dataset.copy || '';

      if (!text) return;

      try {
        await navigator.clipboard.writeText(text);
        const old = btn.textContent;
        btn.textContent = currentLang === 'ar' ? 'تم النسخ' : 'Copied';
        setTimeout(() => {
          btn.textContent = old;
        }, 1400);
      } catch {
        fallbackCopyText(text, btn);
      }
    });
  });
}

function fallbackCopyText(text, btn) {
  const input = document.createElement('textarea');
  input.value = text;
  input.style.position = 'fixed';
  input.style.opacity = '0';
  document.body.appendChild(input);
  input.focus();
  input.select();

  try {
    document.execCommand('copy');
    const old = btn?.textContent;
    if (btn) {
      btn.textContent = currentLang === 'ar' ? 'تم النسخ' : 'Copied';
      setTimeout(() => {
        btn.textContent = old;
      }, 1400);
    }
  } catch {}
  document.body.removeChild(input);
}

/* ---------------------------
   Sound
---------------------------- */
function toggleSound(btn) {
  soundEnabled = !soundEnabled;
  storage.set('wasender_sound', String(soundEnabled));
  updateSoundButton(btn);
}

function initSoundToggleUI() {
  const btn = document.querySelector('.sound-toggle');
  if (!btn) return;
  updateSoundButton(btn);
}

function updateSoundButton(btn) {
  if (!btn) return;
  btn.textContent = soundEnabled ? '🔊' : '🔇';
  btn.setAttribute(
    'aria-label',
    soundEnabled ? 'Disable sound effects' : 'Enable sound effects'
  );
  btn.setAttribute('title', soundEnabled ? 'Sound On' : 'Sound Off');
}

/* ---------------------------
   Bottom nav state
---------------------------- */
function initActiveBottomNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  const items = document.querySelectorAll('.bottom-nav .bn-item');
  if (!items.length) return;

  items.forEach((item) => {
    const href = item.getAttribute('href') || '';
    item.classList.remove('active');

    if (
      (path === '' || path === 'index.html') &&
      (href === '' || href === '/' || href.endsWith('index.html'))
    ) {
      item.classList.add('active');
      return;
    }

    if (href && path && href.includes(path)) {
      item.classList.add('active');
    }
  });
}

/* ---------------------------
   Year helper
---------------------------- */
function initCurrentYear() {
  document.querySelectorAll('[data-current-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
}

/* ---------------------------
   PWA
---------------------------- */
function initPWA() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  }

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;

    if (storage.getSession('pwa_banner_dismissed') === 'true') return;
    document.getElementById('pwaBanner')?.classList.add('show');
  });
}

function hidePWAInstallBanner() {
  document.getElementById('pwaBanner')?.classList.remove('show');
  storage.setSession('pwa_banner_dismissed', 'true');
}

async function installPWA() {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  if (outcome === 'accepted') {
    hidePWAInstallBanner();
  }
  deferredPrompt = null;
}

/* ---------------------------
   Smooth hash scroll
---------------------------- */
function initSmoothHashScroll() {
  if (!window.location.hash) return;
  requestAnimationFrame(() => {
    const target = document.querySelector(window.location.hash);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

/* ---------------------------
   Global exposure
---------------------------- */
window.setLang = setLang;
window.toggleLangMenu = toggleLangMenu;
window.toggleSound = toggleSound;
window.hidePWAInstallBanner = hidePWAInstallBanner;
window.installPWA = installPWA;