/* ═══════════════════════════════════════════════════════════════
   WA Sender - Main JavaScript
   Multi-Page PWA with Enhanced Mobile Experience
   ═══════════════════════════════════════════════════════════════ */

// ── GLOBAL CONFIG ──
const CONFIG = {
  downloadUrl: 'https://wasendernew.com/wasender.exe',
  whatsappNumber: '201279934735',
  siteUrl: 'https://wasendernew.com'
};

// ── TRANSLATIONS ──
const i18n = {
  ar: {
    // Navigation
    nav_home: 'الرئيسية',
    nav_how: 'شرح البرنامج',
    nav_guide: 'حماية من الحظر',
    nav_features: 'المميزات',
    nav_pricing: 'الأسعار',
    nav_contact: 'اتصل بنا',
    nav_policies: 'السياسات',
    
    // Bottom Navigation
    bn_home: 'الرئيسية',
    bn_videos: 'الفيديوهات',
    bn_pricing: 'الأسعار',
    bn_download: 'تحميل',
    bn_contact: 'تواصل',
    bn_features: 'المميزات',
    bn_policies: 'السياسات',
    
    // Hero
    badge_new: 'الإصدار الجديد 5.0.7',
    hero_title: 'WA Sender<br>برنامج التسويق عبر واتساب',
    hero_sub: 'برنامج تسويق واتساب كامل مع 15+ أداة قوية للرسائل الجماعية، والأتمتة، وتوليد العملاء المحتملين',
    btn_download: 'تحميل مجاني',
    btn_buy: 'اشترِ الآن',
    
    // Warning
    warn_title: 'هام: سياسة Meta / WhatsApp لمكافحة السبام',
    warn_p1: 'تفرض شركة Meta (الشركة المالكة لواتساب) قيودًا صارمة على أنشطة الرسائل الجماعية والرسائل المزعجة.',
    warn_p2: 'الحسابات التي تنتهك شروط استخدام واتساب قد تتعرّض للحظر المؤقت أو الدائم.',
    warn_p3: 'يتضمن WA Sender خصائص أمان تساعدك على الالتزام بسياسات Meta، ولكن يجب استخدامه بمسؤولية.',
    warn_p5: 'ملاحظة: تأكّد من ضبط Windows Defender أو برنامج الحماية لديك للسماح بتثبيت البرنامج.',
    
    // How it works
    how_label: 'شرح البرنامج',
    how_title: 'اتفرج وابدأ خلال دقائق',
    how_sub: 'فيديو شرح كامل لتثبيت البرنامج، تفعيل الترخيص، واستخدام أهم الأدوات خطوة بخطوة',
    how_badge: 'شرح كامل بالفيديو',
    how_caption: '▶ قائمة تشغيل من 10 فيديوهات شرح تعمل مباشرة داخل الموقع بدون أي تحويل خارجي لليوتيوب',
    
    // Steps
    steps_title: 'طريقة التفعيل في 4 خطوات بسيطة',
    step1_title: 'حمّل البرنامج',
    step1_desc: 'حمّل ملف WA Sender من زر التحميل المجاني وثبّته على جهازك بخطوات بسيطة.',
    step2_title: 'اختر باقتك وادفع',
    step2_desc: 'اختر الخطة المناسبة لك من قسم الأسعار وأتمم الدفع بأي وسيلة متاحة.',
    step3_title: 'أرسل إيصال الدفع',
    step3_desc: 'أرسل لقطة شاشة إيصال الدفع عبر واتساب وهيوصلك كود التفعيل فورًا.',
    step4_title: 'فعّل وابدأ الإرسال',
    step4_desc: 'أدخل كود التفعيل داخل البرنامج واستمتع بكل الأدوات فورًا.',
    
    // Guide
    guide_label: 'نصائح الأمان',
    guide_title: 'إرشادات الحماية من حظر الواتساب',
    guide_sub: 'عشان تضمن استمرار حملاتك التسويقية من غير ما تخسر أرقامك، لازم تمشي على الخطوات دي:',
    
    g1_title: '1. تسخين الرقم',
    g1_li1: '<strong>فترة السماح:</strong> لو الرقم جديد، استنى عليه من 20 لـ 30 يوم قبل ما تبدأ أي حملة.',
    g1_li2: '<strong>التفاعل الطبيعي:</strong> استخدم الرقم في محادثات شخصية يومية ودخول جروبات عشان يبان نشاط طبيعي للواتساب.',
    
    g2_title: '2. التوقيت الذكي',
    g2_li1: '<strong>الفواصل الزمنية:</strong> سيب فرق من 20 لـ 30 ثانية بين كل رسالة والتانية.',
    g2_li2: '<strong>الحد الأقصى:</strong> ابعت من 200 لـ 300 رسالة بالكتير في الساعة الواحدة.',
    g2_li3: '<strong>فترات راحة:</strong> لازم توقف الحملة كل شوية وتاخد بريك عشان متتحظرش كـ "سبام".',
    
    g3_title: '3. إدارة جهات الاتصال',
    g3_li1: '<strong>التسجيل المسبق:</strong> احفظ الأرقام عندك قبل الإرسال بـ 24 ساعة على الأقل.',
    g3_li2: '<strong>المزامنة:</strong> استخدم Google Contacts عشان تضمن إن الأرقام متسمعة وصح، واعمل تحديث للقائمة باستمرار.',
    
    g4_title: '4. استراتيجية محتوى الرسالة',
    g4_li1: '<strong>الرسائل الشخصية:</strong> ابعد عن الرسائل الموحدة (Copy-Paste) وحاول تخلي كل رسالة موجهة باسم الشخص أو اهتمامه.',
    g4_li2: '<strong>خيار الإلغاء:</strong> لازم تدي للعميل فرصة يرفض استقبال الرسايل (Opt-out) عشان ميبلغش عنك.',
    g4_li3: '<strong>المحتوى المفيد:</strong> ابعد عن الكلام اللي شكله "سبام" واحترم خصوصية ورغبة العميل.',
    
    // Features
    feat_label: 'المميزات',
    feat_title: 'المميزات الرئيسية WA Sender v5.0.7',
    feat_sub: 'أكثر من 15 أداة احترافية في برنامج واحد',
    f1_title: 'إرسال جهات الاتصال', f1_desc: 'إرسال رسائل جماعية باستخدام قوالب جاهزة، مرفقات، وتغيير تلقائي للنص لتفادي الحظر.',
    f2_title: 'إرسال المجموعات', f2_desc: 'توسيع الإرسال الجماعي ليشمل مجموعات واتساب بكل سهولة وكفاءة.',
    f3_title: 'استخراج أعضاء المجموعات', f3_desc: 'سحب أعضاء مجموعات واتساب بسهولة وكفاءة عالية لبناء قوائم تسويقية.',
    f4_title: 'جمع روابط المجموعات', f4_desc: 'استخراج روابط مجموعات واتساب من صفحات الويب بشكل تلقائي.',
    f5_title: 'بوت الرد التلقائي', f5_desc: 'ردود تلقائية ذكية تعمل 24/7 للرد على استفسارات عملائك.',
    f6_title: 'ساحب قائمة جهات الاتصال', f6_desc: 'جمع الأسماء وأرقام الهواتف من جهات الاتصال بشكل منظم.',
    f7_title: 'مستخرج بيانات خرائط جوجل', f7_desc: 'استخراج عملاء محتملين حسب الموقع الجغرافي من خرائط جوجل.',
    f8_title: 'الانضمام التلقائي للمجموعات', f8_desc: 'الانضمام لمجموعات واتساب بشكل أوتوماتيكي وتوسيع شبكتك.',
    f9_title: 'فلتر أرقام واتساب', f9_desc: 'فلترة الأرقام النشطة على واتساب لضمان وصول رسائلك.',
    f10_title: 'استخراج الأعضاء النشطين', f10_desc: 'استهداف الأعضاء النشطين في المجموعات وقائمة الشات بدقة.',
    f11_title: 'منشئ مجموعات جماعي', f11_desc: 'إنشاء مجموعات متعددة وتنظيم جهات الاتصال بمولّد CSV.',
    f12_title: 'مستخرج الإيميلات والهواتف', f12_desc: 'سحب بيانات التواصل من مواقع الويب بشكل تلقائي ومنظم.',
    f13_title: 'واتساب وورمر', f13_desc: 'تهيئة الحسابات الجديدة وتقليل خطر الحظر بشكل فعّال.',
    f14_title: 'جدولة الحملات', f14_desc: 'تخطيط الحملات التسويقية بدقة وفي التوقيت المناسب تلقائيًا.',
    f15_title: 'إضافة أعضاء + البحث', f15_desc: 'توسيع المجموعات والعثور على مجموعات مناسبة بشكل استراتيجي.',
    
    // Pricing
    price_label: 'الأسعار',
    price_title: 'اختر خطتك',
    price_sub: 'جميع الباقات تتضمن ميزات مراسلة غير محدودة',
    price_group1: 'خطط الجهاز الواحد',
    price_group2: 'خطط الأجهزة المتعددة',
    plan1_name: 'سنة واحدة', plan1_period: '/ سنة',
    plan1b_name: 'سنتين', plan1b_period: '/ سنتين',
    plan2_name: 'مدى الحياة', plan2_period: '/ مرة واحدة',
    pf1: 'رخصة واحدة لجهاز واحد', pf2: 'رسائل يومية غير محدودة',
    pf3: 'جميع الميزات المميزة', pf4: 'استيراد جهات اتصال غير محدودة',
    pf5: 'التخصيص والأتمتة',
    btn_buy_now: 'اشترِ الآن',
    
    // Contact
    contact_label: 'التواصل',
    contact_title: 'اتصل بنا',
    contact_sub: 'نحن هنا للمساعدة. تواصل معنا عبر القنوات التالية',
    ct1_title: 'واتساب', ct1_desc: 'للدعم الفوري والتفعيل',
    ct2_title: 'البريد الإلكتروني', ct2_desc: 'للاستفسارات والدعم التقني',
    ct3_title: 'ساعات العمل', ct3_desc: 'متاح خلال ساعات العمل', ct3_hours: '9 ص – 10 م',
    cf_title: 'أرسل رسالة', cf_name: 'الاسم الكامل', cf_email: 'البريد',
    cf_subject: 'الموضوع', cf_opt1: 'استفسار عام', cf_opt2: 'دعم تقني',
    cf_opt3: 'مشكلة في الدفع', cf_opt4: 'طلب ترخيص', cf_msg: 'رسالتك', cf_send: 'إرسال الرسالة',
    
    // Footer
    footer_desc: 'برنامج احترافي للتسويق عبر واتساب مع أدوات متقدمة للرسائل الجماعية والأتمتة.',
    footer_quick: 'روابط سريعة',
    footer_legal: 'قانوني',
    footer_support: 'الدعم',
    footer_rights: 'جميع الحقوق محفوظة',
    
    // Policies
    privacy_title: 'سياسة الخصوصية',
    purchase_title: 'سياسة الشراء',
    refund_title: 'سياسة الاسترجاع',
    terms_title: 'الشروط والأحكام',
    
    // PWA Banner
    pwa_install: 'ثبّت التطبيق',
    pwa_subtitle: 'احصل على تجربة أفضل بدون متصفح',
    pwa_dismiss: 'لاحقاً'
  },
  en: {
    nav_home: 'Home',
    nav_how: 'Tutorial',
    nav_guide: 'Anti-Ban Guide',
    nav_features: 'Features',
    nav_pricing: 'Pricing',
    nav_contact: 'Contact',
    nav_policies: 'Policies',
    bn_home: 'Home',
    bn_videos: 'Videos',
    bn_pricing: 'Prices',
    bn_download: 'Download',
    bn_contact: 'Contact',
    bn_features: 'Features',
    bn_policies: 'Policies',
    badge_new: 'New Version 5.0.7',
    hero_title: 'WA Sender<br>WhatsApp Marketing Software',
    hero_sub: 'Complete WhatsApp marketing software with 15+ powerful tools for bulk messaging, automation, and lead generation',
    btn_download: 'Free Download',
    btn_buy: 'Buy Now',
    warn_title: 'Important: Meta / WhatsApp Anti-Spam Policy',
    warn_p1: 'Meta (WhatsApp\'s parent company) imposes strict restrictions on bulk messaging and spam activities.',
    warn_p2: 'Accounts that violate WhatsApp terms may face temporary or permanent bans.',
    warn_p3: 'WA Sender includes security features to help you comply with Meta policies, but must be used responsibly.',
    warn_p5: 'Note: Make sure to configure Windows Defender or your antivirus to allow the program installation.',
    how_label: 'Tutorial',
    how_title: 'Watch and Start in Minutes',
    how_sub: 'Complete video tutorial for installation, license activation, and using the main tools step by step',
    how_badge: 'Complete Video Tutorial',
    how_caption: '▶ Playlist of 10 tutorial videos playing directly on the site without any external redirect to YouTube',
    steps_title: 'Activation in 4 Simple Steps',
    step1_title: 'Download the Program',
    step1_desc: 'Download WA Sender from the free download button and install it on your device with simple steps.',
    step2_title: 'Choose Your Plan & Pay',
    step2_desc: 'Choose the right plan from the pricing section and complete payment with any available method.',
    step3_title: 'Send Payment Receipt',
    step3_desc: 'Send a screenshot of the payment receipt via WhatsApp and you\'ll receive the activation code immediately.',
    step4_title: 'Activate & Start Sending',
    step4_desc: 'Enter the activation code inside the program and enjoy all tools immediately.',
    guide_label: 'Security Tips',
    guide_title: 'WhatsApp Ban Protection Guidelines',
    guide_sub: 'To ensure your marketing campaigns continue without losing your numbers, follow these steps:',
    g1_title: '1. Number Warming',
    g1_li1: '<strong>Cooling Period:</strong> If the number is new, wait 20-30 days before starting any campaign.',
    g1_li2: '<strong>Natural Interaction:</strong> Use the number in daily personal conversations and group chats to show natural activity to WhatsApp.',
    g2_title: '2. Smart Timing',
    g2_li1: '<strong>Time Intervals:</strong> Leave 20-30 seconds between each message.',
    g2_li2: '<strong>Maximum Limit:</strong> Send 200-300 messages per hour at most.',
    g2_li3: '<strong>Rest Periods:</strong> Stop the campaign periodically and take breaks to avoid being marked as "spam".',
    g3_title: '3. Contact Management',
    g3_li1: '<strong>Pre-registration:</strong> Save numbers at least 24 hours before sending.',
    g3_li2: '<strong>Synchronization:</strong> Use Google Contacts to ensure numbers are correct and update the list regularly.',
    g4_title: '4. Message Content Strategy',
    g4_li1: '<strong>Personalized Messages:</strong> Avoid uniform messages (Copy-Paste) and try to make each message personalized with the person\'s name or interest.',
    g4_li2: '<strong>Opt-out Option:</strong> Give customers the option to refuse receiving messages (Opt-out) so they don\'t report you.',
    g4_li3: '<strong>Useful Content:</strong> Avoid spam-looking language and respect customer privacy and wishes.',
    feat_label: 'Features',
    feat_title: 'Main Features WA Sender v5.0.7',
    feat_sub: 'More than 15 professional tools in one program',
    f1_title: 'Send to Contacts', f1_desc: 'Send bulk messages using templates, attachments, and automatic text variation to avoid blocking.',
    f2_title: 'Send to Groups', f2_desc: 'Extend bulk messaging to include WhatsApp groups easily and efficiently.',
    f3_title: 'Extract Group Members', f3_desc: 'Extract WhatsApp group members easily and with high efficiency for building marketing lists.',
    f4_title: 'Collect Group Links', f4_desc: 'Extract WhatsApp group links from web pages automatically.',
    f5_title: 'Auto Reply Bot', f5_desc: 'Smart auto-replies working 24/7 to respond to customer inquiries.',
    f6_title: 'Contact List Extractor', f6_desc: 'Collect names and phone numbers from contacts in an organized manner.',
    f7_title: 'Google Maps Data Extractor', f7_desc: 'Extract potential leads by geographic location from Google Maps.',
    f8_title: 'Auto Join Groups', f8_desc: 'Automatically join WhatsApp groups and expand your network.',
    f9_title: 'WhatsApp Number Filter', f9_desc: 'Filter active WhatsApp numbers to ensure message delivery.',
    f10_title: 'Extract Active Members', f10_desc: 'Target active members in groups and chat lists precisely.',
    f11_title: 'Bulk Group Creator', f11_desc: 'Create multiple groups and organize contacts with CSV generator.',
    f12_title: 'Email & Phone Extractor', f12_desc: 'Scrape contact data from websites automatically and organized.',
    f13_title: 'WhatsApp Warmer', f13_desc: 'Prepare new accounts and reduce ban risk effectively.',
    f14_title: 'Campaign Scheduler', f14_desc: 'Plan marketing campaigns precisely at the right time automatically.',
    f15_title: 'Add Members + Search', f15_desc: 'Expand groups and find suitable groups strategically.',
    price_label: 'Pricing',
    price_title: 'Choose Your Plan',
    price_sub: 'All plans include unlimited messaging features',
    price_group1: 'Single Device Plans',
    price_group2: 'Multi-Device Plans',
    plan1_name: 'One Year', plan1_period: '/ year',
    plan1b_name: 'Two Years', plan1b_period: '/ 2 years',
    plan2_name: 'Lifetime', plan2_period: '/ one time',
    pf1: 'Single device license', pf2: 'Unlimited daily messages',
    pf3: 'All premium features', pf4: 'Unlimited contacts import',
    pf5: 'Customization & Automation',
    btn_buy_now: 'Buy Now',
    contact_label: 'Contact Us',
    contact_title: 'Get in Touch',
    contact_sub: 'We are here to help. Reach us through the following channels',
    ct1_title: 'WhatsApp', ct1_desc: 'For instant support and activation',
    ct2_title: 'Email', ct2_desc: 'For inquiries and technical support',
    ct3_title: 'Working Hours', ct3_desc: 'Available during working hours', ct3_hours: '9 AM - 10 PM',
    cf_title: 'Send a Message', cf_name: 'Full Name', cf_email: 'Email',
    cf_subject: 'Subject', cf_opt1: 'General Inquiry', cf_opt2: 'Technical Support',
    cf_opt3: 'Payment Issue', cf_opt4: 'License Request', cf_msg: 'Your Message', cf_send: 'Send Message',
    footer_desc: 'Professional WhatsApp marketing software with advanced tools for bulk messaging and automation.',
    footer_quick: 'Quick Links',
    footer_legal: 'Legal',
    footer_support: 'Support',
    footer_rights: 'All rights reserved',
    privacy_title: 'Privacy Policy',
    purchase_title: 'Purchase Policy',
    refund_title: 'Refund Policy',
    terms_title: 'Terms & Conditions',
    pwa_install: 'Install App',
    pwa_subtitle: 'Get a better experience without browser',
    pwa_dismiss: 'Later'
  }
};

// ── STATE ──
let currentLang = localStorage.getItem('wasender_lang') || 'ar';
let soundEnabled = localStorage.getItem('wasender_sound') !== 'false';
let deferredPrompt = null;

// ── INITIALIZATION ──
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initNavigation();
  initScrollReveal();
  initMobileMenu();
  initFAQ();
  initVideoPlayer();
  initPWA();
  updateLocalPrices();
  setActiveNavLink();
});

// ── LANGUAGE FUNCTIONS ──
function initLanguage() {
  const dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = currentLang;
  document.documentElement.dir = dir;
  document.body.dir = dir;
  
  if (document.getElementById('currentLangLabel')) {
    const langNames = { ar: 'العربية', en: 'English', fr: 'Français', ru: 'Русский', it: 'Italiano', hi: 'हिंदी', tl: 'Filipino', ja: '日本語', de: 'Deutsch' };
    document.getElementById('currentLangLabel').textContent = langNames[currentLang] || currentLang;
  }
  
  applyTranslations();
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('wasender_lang', lang);
  initLanguage();
  toggleLangMenu();
  
  // Update active state in dropdown
  document.querySelectorAll('.lang-dropdown button').forEach(btn => {
    btn.classList.toggle('active', btn.onclick.toString().includes(`'${lang}'`));
  });
}

function toggleLangMenu() {
  const dropdown = document.getElementById('langDropdown');
  if (dropdown) {
    dropdown.classList.toggle('open');
  }
}

function applyTranslations() {
  const t = i18n[currentLang] || i18n.ar;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });
}

// ── NAVIGATION FUNCTIONS ──
function initNavigation() {
  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    const navLinks = document.querySelector('.nav-links');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    if (navLinks?.classList.contains('open') && 
        !navLinks.contains(e.target) && 
        !menuBtn?.contains(e.target)) {
      navLinks.classList.remove('open');
    }
    
    // Close lang dropdown
    const dropdown = document.getElementById('langDropdown');
    if (dropdown?.classList.contains('open') && !e.target.closest('.lang-selector')) {
      dropdown.classList.remove('open');
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

function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a[href], .bn-item[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ── SCROLL REVEAL ──
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  
  reveals.forEach(el => observer.observe(el));
}

// ── FAQ ACCORDION ──
function initFAQ() {
  document.querySelectorAll('.faq-q').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isOpen = item.classList.contains('open');
      
      // Close all other items
      document.querySelectorAll('.faq-item.open').forEach(openItem => {
        if (openItem !== item) openItem.classList.remove('open');
      });
      
      item.classList.toggle('open', !isOpen);
    });
  });
}

// ── VIDEO PLAYER ──
let currentVideoIndex = 0;
const videoPlaylist = [
  { num: '01', title: 'استخراج أرقام أعضاء مجموعات ومجتمع واتساب', desc: 'شرح كيفية استخراج أرقام أعضاء مجموعات ومجتمعات واتساب باستخدام WA Sender Pro.', src: 'video/1.mp4' },
  { num: '02', title: 'عمل حملة إعلانية باستخدام WA Sender Pro', desc: 'شرح إنشاء وإرسال حملة إعلانية احترافية عبر برنامج WA Sender Pro.', src: 'video/2.mp4' },
  { num: '03', title: 'تحويل البيانات إلى ملف جهات اتصال CSV', desc: 'شرح تحويل الأرقام والبيانات إلى ملف CSV جاهز للاستيراد والاستخدام.', src: 'video/3.mp4' },
  { num: '04', title: 'استخراج جهات الاتصال أو مجموعات واتساب المحفوظة', desc: 'شرح استخراج جهات الاتصال والمجموعات المحفوظة داخل واتساب بسهولة.', src: 'video/4.mp4' },
  { num: '05', title: 'خدمة الرد التلقائي', desc: 'شرح إعداد واستخدام خدمة الرد التلقائي في برنامج WA Sender Pro.', src: 'video/5.mp4' },
  { num: '06', title: 'استخراج دردشات واتساب', desc: 'شرح استخراج محادثات واتساب وإدارتها باستخدام WA Sender Pro.', src: 'video/6.mp4' },
  { num: '07', title: 'استخراج روابط مجموعات واتساب من صفحات الويب', desc: 'شرح استخراج روابط مجموعات واتساب المنشورة على مواقع الويب تلقائيًا.', src: 'video/7.mp4' },
  { num: '08', title: 'تحويل البيانات إلى جهات اتصال CSV', desc: 'شرح تجهيز ملفات CSV وإدارتها لاستخدامها في حملات واتساب.', src: 'video/8.mp4' },
  { num: '09', title: 'استخراج الأرقام والبيانات من خرائط جوجل', desc: 'شرح استخراج أرقام الهواتف والبيانات التجارية من خرائط جوجل باستخدام WA Sender Pro.', src: 'video/9.mp4' },
  { num: '10', title: 'طريقة عمل حملة إعلانية على واتساب - آخر تحديث', desc: 'شرح أحدث طريقة لإنشاء حملة إعلانية عبر واتساب مع أفضل الممارسات لتقليل نسبة الحظر.', src: 'video/10.mp4' }
];

function initVideoPlayer() {
  const playlistEl = document.getElementById('videoPlaylist');
  const videoEl = document.getElementById('mainVideo');
  
  if (!playlistEl || !videoEl) return;
  
  // Render playlist
  videoPlaylist.forEach((vid, idx) => {
    const item = document.createElement('button');
    item.className = `vp-item${idx === 0 ? ' active' : ''}`;
    item.innerHTML = `
      <span class="vp-num">${vid.num}</span>
      <span class="vp-title">${vid.title}</span>
      <div class="vp-playing-eq"><span></span><span></span><span></span></div>
    `;
    item.addEventListener('click', () => playVideo(idx));
    playlistEl.appendChild(item);
  });
  
  // Load first video
  playVideo(0);
  
  // Video navigation buttons
  const prevBtn = document.getElementById('prevVidBtn');
  const nextBtn = document.getElementById('nextVidBtn');
  
  if (prevBtn) prevBtn.addEventListener('click', () => playVideo(currentVideoIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => playVideo(currentVideoIndex + 1));
}

function playVideo(index) {
  if (index < 0 || index >= videoPlaylist.length) return;
  
  currentVideoIndex = index;
  const vid = videoPlaylist[index];
  const videoEl = document.getElementById('mainVideo');
  
  if (videoEl) {
    videoEl.src = vid.src;
    videoEl.play().catch(() => {});
  }
  
  // Update info
  const numEl = document.getElementById('videoCurrentNum');
  const titleEl = document.getElementById('videoCurrentTitle');
  const descEl = document.getElementById('videoCurrentDesc');
  
  if (numEl) numEl.textContent = vid.num;
  if (titleEl) titleEl.textContent = vid.title;
  if (descEl) descEl.textContent = vid.desc;
  
  // Update active state in playlist
  document.querySelectorAll('.vp-item').forEach((item, idx) => {
    item.classList.toggle('active', idx === index);
  });
  
  // Update navigation buttons
  const prevBtn = document.getElementById('prevVidBtn');
  const nextBtn = document.getElementById('nextVidBtn');
  if (prevBtn) prevBtn.disabled = index === 0;
  if (nextBtn) nextBtn.disabled = index === videoPlaylist.length - 1;
  
  playClickSound();
}

// ── SOUND EFFECTS ──
function playClickSound() {
  if (!soundEnabled) return;
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  } catch (e) {}
}

function toggleSound(btn) {
  soundEnabled = !soundEnabled;
  localStorage.setItem('wasender_sound', soundEnabled);
  if (btn) {
    btn.textContent = soundEnabled ? '🔊' : '🔇';
    btn.title = soundEnabled ? 'تشغيل / إيقاف المؤثرات الصوتية' : 'Sound is off';
  }
}

// ── PRICING FUNCTIONS ──
function goToCheckout(plan) {
  window.location.href = `checkout.html?plan=${plan}`;
  playClickSound();
}

function updateLocalPrices() {
  // Local price approximations
  const prices = {
    'local-yearly': '~250 ج.م / سنة',
    'local-2yr': '~450 ج.م / سنتين',
    'local-lifetime': '~1500 ج.م',
    'local-2dev-yearly': '~400 ج.م / سنة',
    'local-3dev-yearly': '~600 ج.م / سنة',
    'local-2dev-2yr': '~750 ج.م / سنتين'
  };
  
  Object.entries(prices).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  });
}

// ── PAYMENT METHODS TOGGLE ──
function togglePayment(id) {
  const body = document.getElementById(`pm-${id}`);
  if (body) body.classList.toggle('open');
  playClickSound();
}

// ── COPY TO CLIPBOARD ──
function copyToClipboard(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    const originalText = btn.textContent;
    btn.textContent = '✓ تم النسخ';
    setTimeout(() => btn.textContent = originalText, 2000);
    playClickSound();
  }).catch(() => {
    // Fallback
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    btn.textContent = '✓ Copied';
    setTimeout(() => btn.textContent = 'Copy', 2000);
  });
}

// ── CONTACT FORM ──
function handleContactForm(e) {
  e.preventDefault();
  playClickSound();
  
  const form = e.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  
  // Create WhatsApp message
  const message = `*استفسار جديد من الموقع*%0A%0A*الاسم:* ${data.name}%0A*البريد:* ${data.email}%0A*الموضوع:* ${data.subject}%0A*الرسالة:* ${data.message}`;
  
  window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${message}`, '_blank');
  form.reset();
}

// ── PWA FUNCTIONS ──
function initPWA() {
  // Register service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  }
  
  // Listen for install prompt
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    showPWAInstallBanner();
  });
  
  // Listen for install completion
  window.addEventListener('appinstalled', () => {
    hidePWAInstallBanner();
    deferredPrompt = null;
  });
}

function showPWAInstallBanner() {
  // Check if already dismissed
  if (sessionStorage.getItem('pwa_banner_dismissed')) return;
  
  const banner = document.querySelector('.pwa-install-banner');
  if (banner) {
    banner.classList.add('show');
    document.body.classList.add('has-pwa-banner');
  }
}

function hidePWAInstallBanner() {
  const banner = document.querySelector('.pwa-install-banner');
  if (banner) {
    banner.classList.remove('show');
    document.body.classList.remove('has-pwa-banner');
    sessionStorage.setItem('pwa_banner_dismissed', 'true');
  }
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

// ── UTILITY FUNCTIONS ──
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Close dropdowns on escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelector('.lang-dropdown')?.classList.remove('open');
    document.querySelector('.nav-links')?.classList.remove('open');
  }
});
