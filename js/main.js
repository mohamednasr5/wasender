/* ═══════════════════════════════════════════════════════════════
   WA Sender - Main JavaScript
   Multi-Page PWA with Full Multi-Language Support
   ═══════════════════════════════════════════════════════════════ */

// ── GLOBAL CONFIG ──
const CONFIG = {
  downloadUrl: 'https://wasendernew.com/wasender.exe',
  whatsappNumber: '201279934735',
  siteUrl: 'https://wasendernew.com',
  // D360 Bank Details
  bankDetails: {
    name: { ar: 'D360 بنك', en: 'D360 Bank', fr: 'Banque D360', ru: 'Банк D360', it: 'Banca D360' },
    accountHolder: { ar: 'ايمن نصر نصر عبد الوهاب حماد', en: 'Ayman Nasr Nasr Abdel Wahab Hamad', fr: 'Ayman Nasr Nasr Abdel Wahab Hamad', ru: 'Айман Наср Наср Абдель Вахаб Хамад', it: 'Ayman Nasr Nasr Abdel Wahab Hamad' },
    iban: 'SA7636036036031909112576',
    swift: 'DBAKSARIXXX'
  },
  // PayPal Links for all plans
  paypalLinks: {
    yearly: 'https://www.paypal.com/ncp/payment/PYEJ6X9HQL2L8',
    '2yearly': 'https://www.paypal.com/ncp payment/PYEJ6X9HQL2L8',
    '3yearly': 'https://www.paypal.com/ncp/payment/PYEJ6X9HQL2L8',
    lifetime: 'https://www.paypal.com/ncp/payment/PYEJ6X9HQL2L8',
    '2dev-yearly': 'https://www.paypal.com/ncp/payment/PYEJ6X9HQL2L8',
    '3dev-yearly': 'https://www.paypal.com/ncp/payment/PYEJ6X9HQL2L8',
    '2dev-2yr': 'https://www.paypal.com/ncp/payment/PYEJ6X9HQL2L8'
  }
};

// ── TRANSLATIONS - COMPLETE FOR ALL LANGUAGES ──
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
    price_sub: 'جميع الباقات تتضمن ميزات مراسلة غير محدودة مع تحديثات مجانية',
    price_group1: 'خطط الجهاز الواحد',
    price_group2: 'خطط الأجهزة المتعددة',
    plan1_name: 'سنة واحدة', plan1_period: '/ سنة',
    plan1b_name: 'سنتين', plan1b_period: '/ سنتين',
    plan2_name: 'مدى الحياة', plan2_period: '/ مرة واحدة',
    pf1: 'رخصة واحدة لجهاز واحد', pf2: 'رسائل يومية غير محدودة',
    pf3: 'جميع الميزات المميزة', pf4: 'استيراد جهات اتصال غير محدودة',
    pf5: 'التخصيص والأتمتة',
    pf6: 'تحديثات مجانية خلال فترة الاشتراك',
    pf7: 'دعم فني مباشر عبر واتساب',
    pf8: 'تحديثات مدى الحياة',
    pf9: 'أولوية في الدعم الفني',
    pf10: 'رخصتان لجهازين مختلفين',
    pf11: '3 رخص لـ 3 أجهزة مختلفة',
    pf12: 'دعم فني ذهبي',
    pf13: 'توفير 1$ عن الشراء المنفصل',
    btn_buy_now: 'اشترِ الآن',
    popular_badge: '⭐ الأكثر مبيعاً',
    devices_2: '🖥️ جهازان',
    devices_3: '🖥️🖥️ 3 أجهزة',
    devices_year: 'جهازان / سنة',
    devices_2year: 'جهازان / سنتين',
    devices_3year: '3 أجهزة / سنة',
    
    // Payment Methods
    payment_title: 'طرق الدفع المتاحة',
    payment_subtitle: 'اختر طريقة الدفع المناسبة لك وأتمم عملية الشراء بسهولة',
    pm_vodafone_title: 'فودافون كاش (مصر)',
    pm_vodafone_sub: 'تحويل فوري للمحفظة',
    pm_vodafone_note: 'أرسل إيصال التحويل عبر واتساب للتفعيل الفوري.',
    pm_barq_title: 'تطبيق برق (السعودية)',
    pm_barq_sub: 'تحويل دولي للسعودية',
    pm_barq_steps: 'خطوات التحويل: التحويل الدولي ← مصر ← أدخل الرقم أدناه',
    pm_barq_note: 'أرسل الإيصال بعد التحويل للتفعيل.',
    pm_instapay_title: 'InstaPay (مصر)',
    pm_instapay_sub: 'تحويل مباشر من مصر',
    pm_instapay_link: 'فتح رابط InstaPay →',
    pm_instapay_note: 'أرسل إيصال الدفع بعد إتمام العملية.',
    pm_bank_title: 'تحويل بنكي - D360 (السعودية)',
    pm_bank_sub: 'عبر الأيبان السعودي',
    pm_bank_name: 'البنك:',
    pm_bank_holder: 'اسم المستفيد:',
    pm_bank_iban: 'رقم الأيبان (IBAN):',
    pm_bank_swift: 'رمز السويفت (SWIFT):',
    pm_bank_note: 'يستغرق التحويل 1-24 ساعة عمل. أرسل الإيصال للتفعيل.',
    pm_paypal_title: 'فيزا / PayPal',
    pm_paypal_sub: 'دفع آمن بالبطاقة البنكية',
    pm_paypal_note: 'بعد الدفع، أرسل اسم البريد الإلكتروني المستخدم عبر واتساب.',
    paypal_plan_yearly: '💳 PayPal - $5 (سنة)',
    paypal_plan_2yearly: '💳 PayPal - $15 (سنتين)',
    paypal_plan_3yearly: '💳 PayPal - $20 (3 سنوات)',
    paypal_plan_lifetime: '💳 PayPal - $50 (مدى الحياة)',
    paypal_plan_2dev_yearly: '💳 PayPal - $8 (جهازان/سنة)',
    paypal_plan_3dev_yearly: '💳 PayPal - $12 (3 أجهزة/سنة)',
    paypal_plan_2dev_2yr: '💳 PayPal - $25 (جهازان/سنتين)',
    copy_btn: 'نسخ',
    copied: '✓ تم النسخ',
    
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
    pwa_dismiss: 'لاحقاً',
    
    // FAQ
    faq_title: 'الأسئلة الشائعة عن الأسعار والدفع',
    faq_q1: 'هل يمكنني ترقية خطتي لاحقاً؟',
    faq_a1: 'نعم! يمكنك ترقية خطتك في أي وقت. ستحسب لك الفرق بين خطتك الحالية والخطة الجديدة مع خصم على المدة المتبقية.',
    faq_q2: 'ما هي طرق الدفع المتاحة؟',
    faq_a2: 'نقبل عدة طرق دفع: فودافون كاش (مصر)، تطبيق برق السعودي، InstaPay، تحويل بنكي D360 (السعودية)، وبطاقات فيزا و PayPal للدفع الدولي.',
    faq_q3: 'كم يستغرق تفعيل الرخصة بعد الدفع؟',
    faq_a3: 'عادةً يتم التفعيل خلال دقائق قليلة بعد استلام إيصال الدفع عبر واتساب. في حالات التحويل البنكي قد يستغرق 1-24 ساعة عمل.',
    faq_q4: 'هل يمكن نقل الرخصة لجهاز آخر؟',
    faq_a4: 'الرخصة مربوطة بجهاز واحد. إذا غيرت جهازك، تواصل معنا عبر واتساب وسنساعدك في نقل الرخصة للجهاز الجديد مجاناً.',
    
    // Video Playlist (Arabic)
    vid1_title: 'استخراج أرقام أعضاء مجموعات ومجتمع واتساب',
    vid1_desc: 'شرح كيفية استخراج أرقام أعضاء مجموعات ومجتمعات واتساب باستخدام WA Sender Pro.',
    vid2_title: 'عمل حملة إعلانية باستخدام WA Sender Pro',
    vid2_desc: 'شرح إنشاء وإرسال حملة إعلانية احترافية عبر برنامج WA Sender Pro.',
    vid3_title: 'تحويل البيانات إلى ملف جهات اتصال CSV',
    vid3_desc: 'شرح تحويل الأرقام والبيانات إلى ملف CSV جاهز للاستيراد والاستخدام.',
    vid4_title: 'استخراج جهات الاتصال أو مجموعات واتساب المحفوظة',
    vid4_desc: 'شرح استخراج جهات الاتصال والمجموعات المحفوظة داخل واتساب بسهولة.',
    vid5_title: 'خدمة الرد التلقائي',
    vid5_desc: 'شرح إعداد واستخدام خدمة الرد التلقائي في برنامج WA Sender Pro.',
    vid6_title: 'استخراج دردشات واتساب',
    vid6_desc: 'شرح استخراج محادثات واتساب وإدارتها باستخدام WA Sender Pro.',
    vid7_title: 'استخراج روابط مجموعات واتساب من صفحات الويب',
    vid7_desc: 'شرح استخراج روابط مجموعات واتساب المنشورة على مواقع الويب تلقائيًا.',
    vid8_title: 'تحويل البيانات إلى جهات اتصال CSV',
    vid8_desc: 'شرح تجهيز ملفات CSV وإدارتها لاستخدامها في حملات واتساب.',
    vid9_title: 'استخراج الأرقام والبيانات من خرائط جوجل',
    vid9_desc: 'شرح استخراج أرقام الهواتف والبيانات التجارية من خرائط جوجل باستخدام WA Sender Pro.',
    vid10_title: 'طريقة عمل حملة إعلانية على واتساب - آخر تحديث',
    vid10_desc: 'شرح أحدث طريقة لإنشاء حملة إعلانية عبر واتساب مع أفضل الممارسات لتقليل نسبة الحظر.'
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
    price_sub: 'All plans include unlimited messaging features with free updates',
    price_group1: 'Single Device Plans',
    price_group2: 'Multi-Device Plans',
    plan1_name: 'One Year', plan1_period: '/ year',
    plan1b_name: 'Two Years', plan1b_period: '/ 2 years',
    plan2_name: 'Lifetime', plan2_period: '/ one time',
    pf1: 'Single device license', pf2: 'Unlimited daily messages',
    pf3: 'All premium features', pf4: 'Unlimited contacts import',
    pf5: 'Customization & Automation',
    pf6: 'Free updates during subscription',
    pf7: 'Direct technical support via WhatsApp',
    pf8: 'Lifetime updates',
    pf9: 'Priority technical support',
    pf10: 'Two licenses for two different devices',
    pf11: '3 licenses for 3 different devices',
    pf12: 'Gold technical support',
    pf13: 'Save $1 compared to separate purchase',
    btn_buy_now: 'Buy Now',
    popular_badge: '⭐ Best Seller',
    devices_2: '🖥️ 2 Devices',
    devices_3: '🖥️🖥️ 3 Devices',
    devices_year: '2 Devices / Year',
    devices_2year: '2 Devices / 2 Years',
    devices_3year: '3 Devices / Year',
    payment_title: 'Available Payment Methods',
    payment_subtitle: 'Choose your preferred payment method and complete your purchase easily',
    pm_vodafone_title: 'Vodafone Cash (Egypt)',
    pm_vodafone_sub: 'Instant wallet transfer',
    pm_vodafone_note: 'Send transfer receipt via WhatsApp for instant activation.',
    pm_barq_title: 'Barq App (Saudi Arabia)',
    pm_barq_sub: 'International transfer to Saudi Arabia',
    pm_barq_steps: 'Transfer steps: International Transfer → Egypt → Enter number below',
    pm_barq_note: 'Send receipt after transfer for activation.',
    pm_instapay_title: 'InstaPay (Egypt)',
    pm_instapay_sub: 'Direct transfer from Egypt',
    pm_instapay_link: 'Open InstaPay Link →',
    pm_instapay_note: 'Send payment receipt after completing the transaction.',
    pm_bank_title: 'Bank Transfer - D360 (Saudi Arabia)',
    pm_bank_sub: 'Via Saudi IBAN',
    pm_bank_name: 'Bank:',
    pm_bank_holder: 'Beneficiary Name:',
    pm_bank_iban: 'IBAN Number:',
    pm_bank_swift: 'SWIFT Code:',
    pm_bank_note: 'Transfer takes 1-24 business hours. Send receipt for activation.',
    pm_paypal_title: 'Visa / PayPal',
    pm_paypal_sub: 'Secure payment with credit card',
    pm_paypal_note: 'After payment, send the email address used via WhatsApp.',
    paypal_plan_yearly: '💳 PayPal - $5 (Year)',
    paypal_plan_2yearly: '💳 PayPal - $15 (2 Years)',
    paypal_plan_3yearly: '💳 PayPal - $20 (3 Years)',
    paypal_plan_lifetime: '💳 PayPal - $50 (Lifetime)',
    paypal_plan_2dev_yearly: '💳 PayPal - $8 (2 Devices/Year)',
    paypal_plan_3dev_yearly: '💳 PayPal - $12 (3 Devices/Year)',
    paypal_plan_2dev_2yr: '💳 PayPal - $25 (2 Devices/2 Years)',
    copy_btn: 'Copy',
    copied: '✓ Copied',
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
    pwa_dismiss: 'Later',
    faq_title: 'Frequently Asked Questions About Pricing & Payment',
    faq_q1: 'Can I upgrade my plan later?',
    faq_a1: 'Yes! You can upgrade your plan at any time. We\'ll calculate the difference between your current plan and the new plan with a discount on the remaining period.',
    faq_q2: 'What payment methods are available?',
    faq_a2: 'We accept multiple payment methods: Vodafone Cash (Egypt), Barq App Saudi Arabia, InstaPay, Bank Transfer D360 (Saudi Arabia), and Visa & PayPal cards for international payments.',
    faq_q3: 'How long does license activation take after payment?',
    faq_a3: 'Activation usually happens within minutes after receiving the payment receipt via WhatsApp. For bank transfers, it may take 1-24 business hours.',
    faq_q4: 'Can I transfer the license to another device?',
    faq_a4: 'The license is tied to one device. If you change your device, contact us via WhatsApp and we\'ll help you transfer the license to the new device for free.',
    vid1_title: 'Extract WhatsApp Group & Community Member Numbers',
    vid1_desc: 'Learn how to extract member numbers from WhatsApp groups and communities using WA Sender Pro.',
    vid2_title: 'Run Advertising Campaign with WA Sender Pro',
    vid2_desc: 'Learn how to create and send a professional advertising campaign via WA Sender Pro.',
    vid3_title: 'Convert Data to CSV Contact File',
    vid3_desc: 'Learn how to convert numbers and data into a CSV file ready for import and use.',
    vid4_title: 'Extract Saved Contacts or WhatsApp Groups',
    vid4_desc: 'Learn how to extract saved contacts and groups from WhatsApp easily.',
    vid5_title: 'Auto Reply Service',
    vid5_desc: 'Learn how to set up and use the auto-reply service in WA Sender Pro.',
    vid6_title: 'Extract WhatsApp Chats',
    vid6_desc: 'Learn how to extract and manage WhatsApp conversations using WA Sender Pro.',
    vid7_title: 'Extract WhatsApp Group Links from Web Pages',
    vid7_desc: 'Learn how to automatically extract WhatsApp group links published on websites.',
    vid8_title: 'Convert Data to CSV Contacts',
    vid8_desc: 'Learn how to prepare and manage CSV files for use in WhatsApp campaigns.',
    vid9_title: 'Extract Numbers & Data from Google Maps',
    vid9_desc: 'Learn how to extract phone numbers and business data from Google Maps using WA Sender Pro.',
    vid10_title: 'How to Run WhatsApp Ad Campaign - Latest Update',
    vid10_desc: 'Learn the latest method for creating an ad campaign via WhatsApp with best practices to reduce ban rate.'
  },
  
  fr: {
    nav_home: 'Accueil',
    nav_how: 'Tutoriel',
    nav_guide: 'Guide Anti-Blocage',
    nav_features: 'Fonctionnalités',
    nav_prix: 'Tarifs',
    nav_contact: 'Contact',
    nav_policies: 'Politiques',
    bn_home: 'Accueil',
    bn_videos: 'Vidéos',
    bn_pricing: 'Tarifs',
    bn_download: 'Télécharger',
    bn_contact: 'Contact',
    bn_features: 'Fonctions',
    bn_policies: 'Politiques',
    badge_new: 'Nouvelle Version 5.0.7',
    hero_title: 'WA Sender<br>Logiciel de Marketing WhatsApp',
    hero_sub: 'Logiciel complet de marketing WhatsApp avec plus de 15 outils puissants pour les messages en masse, l\'automatisation et la génération de prospects',
    btn_download: 'Téléchargement Gratuit',
    btn_buy: 'Acheter Maintenant',
    warn_title: 'Important : Politique Anti-Spam de Meta / WhatsApp',
    warn_p1: 'Meta (la société mère de WhatsApp) impose des restrictions strictes sur les messages en masse et les activités de spam.',
    warn_p2: 'Les comptes qui violent les conditions de WhatsApp peuvent faire face à des blocages temporaires ou permanents.',
    warn_p3: 'WA Sender inclut des fonctionnalités de sécurité pour vous aider à respecter les politiques de Meta, mais doit être utilisé de manière responsable.',
    warn_p5: 'Note : Assurez-vous de configurer Windows Defender ou votre antivirus pour permettre l\'installation du programme.',
    how_label: 'Tutoriel',
    how_title: 'Regardez et Commencez en Minutes',
    how_sub: 'Tutoriel vidéo complet pour l\'installation, l\'activation de la licence et l\'utilisation des principaux outils étape par étape',
    how_badge: 'Tutoriel Vidéo Complet',
    how_caption: '▶ Liste de lecture de 10 tutoriels vidéo diffusés directement sur le site sans redirection externe vers YouTube',
    steps_title: 'Activation en 4 Étapes Simples',
    step1_title: 'Télécharger le Programme',
    step1_desc: 'Téléchargez WA Sender depuis le bouton de téléchargement gratuit et installez-le sur votre appareil en quelques étapes simples.',
    step2_title: 'Choisissez Votre Plan & Payez',
    step2_desc: 'Choisissez le bon plan dans la section tarifs et effectuez le paiement avec n\'importe quelle méthode disponible.',
    step3_title: 'Envoyez le Reçu de Paiement',
    step3_desc: 'Envoyez une capture d\'écran du reçu de paiement via WhatsApp et vous recevrez le code d\'activation immédiatement.',
    step4_title: 'Activez & Commencez à Envoyer',
    step4_desc: 'Entrez le code d\'activation dans le programme et profitez de tous les outils immédiatement.',
    guide_label: 'Conseils de Sécurité',
    guide_title: 'Directives de Protection Contre le Blocage WhatsApp',
    guide_sub: 'Pour assurer la continuité de vos campagnes marketing sans perdre vos numéros, suivez ces étapes :',
    g1_title: '1. Chauffage du Numéro',
    g1_li1: '<strong>Période d\'attente :</strong> Si le numéro est nouveau, attendez 20-30 jours avant de commencer toute campagne.',
    g1_li2: '<strong>Interaction naturelle :</strong> Utilisez le numéro dans des conversations personnelles quotidiennes et des discussions de groupe pour montrer une activité naturelle à WhatsApp.',
    g2_title: '2. Timing Intelligent',
    g2_li1: '<strong>Intervalles de temps :</strong> Laissez 20-30 secondes entre chaque message.',
    g2_li2: '<strong>Limite maximale :</strong> Envoyez au maximum 200-300 messages par heure.',
    g2_li3: '<strong>Périodes de repos :</strong> Arrêtez la campagne périodiquement et faites des pauses pour éviter d\'être marqué comme "spam".',
    g3_title: '3. Gestion des Contacts',
    g3_li1: '<strong>Pré-enregistrement :</strong> Sauvegardez les numéros au moins 24 heures avant l\'envoi.',
    g3_li2: '<strong>Synchronisation :</strong> Utilisez Google Contacts pour vous assurer que les numéros sont corrects et mettez à jour la liste régulièrement.',
    g4_title: '4. Stratégie de Contenu des Messages',
    g4_li1: '<strong>Messages personnalisés :</strong> Évitez les messages uniformes (Copier-Coller) et essayez de personnaliser chaque message avec le nom ou l\'intérêt de la personne.',
    g4_li2: '<strong>Option de désinscription :</strong> Donnez aux clients la possibilité de refuser de recevoir des messages (Opt-out) pour qu\'ils ne vous signalent pas.',
    g4_li3: '<strong>Contenu utile :</strong> Évitez le langage ressemblant au spam et respectez la vie privée et les souhaits des clients.',
    feat_label: 'Fonctionnalités',
    feat_title: 'Fonctionnalités Principales WA Sender v5.0.7',
    feat_sub: 'Plus de 15 outils professionnels en un seul programme',
    f1_title: 'Envoyer aux Contacts', f1_desc: 'Envoyer des messages en masse en utilisant des modèles, des pièces jointes et une variation automatique du texte pour éviter le blocage.',
    f2_title: 'Envoyer aux Groupes', f2_desc: 'Étendre l\'envoi en masse pour inclure les groupes WhatsApp facilement et efficacement.',
    f3_title: 'Extraire les Membres du Groupe', f3_desc: 'Extraire les membres des groupes WhatsApp facilement et avec haute efficacité pour construire des listes marketing.',
    f4_title: 'Collecter les Liens de Groupes', f4_desc: 'Extraire les liens de groupes WhatsApp des pages web automatiquement.',
    f5_title: 'Bot de Réponse Automatique', f5_desc: 'Réponses automatiques intelligentes fonctionnant 24/7 pour répondre aux demandes des clients.',
    f6_title: 'Extracteur de Liste de Contacts', f6_desc: 'Collecter les noms et numéros de téléphone des contacts de manière organisée.',
    f7_title: 'Extracteur de Données Google Maps', f7_desc: 'Extraire des prospects potentiels par localisation géographique depuis Google Maps.',
    f8_title: 'Rejoindre Automatiquement les Groupes', f8_desc: 'Rejoindre automatiquement les groupes WhatsApp et élargir votre réseau.',
    f9_title: 'Filtre de Numéros WhatsApp', f9_desc: 'Filtrer les numéros WhatsApp actifs pour assurer la livraison des messages.',
    f10_title: 'Extraire les Membres Actifs', f10_desc: 'Cibler les membres actifs dans les groupes et les listes de discussion avec précision.',
    f11_title: 'Créateur de Groupes en Masse', f11_desc: 'Créer plusieurs groupes et organiser les contacts avec un générateur CSV.',
    f12_title: 'Extracteur d\'Emails et Téléphones', f12_desc: 'Extraire les données de contact des sites web automatiquement et de manière organisée.',
    f13_title: 'Réchauffeur WhatsApp', f13_desc: 'Préparer les nouveaux comptes et réduire efficacement le risque de blocage.',
    f14_title: 'Planificateur de Campagnes', f14_desc: 'Planifier les campagnes marketing précisément au bon moment automatiquement.',
    f15_title: 'Ajouter des Membres + Recherche', f15_desc: 'Élargir les groupes et trouver des groupes appropriés stratégiquement.',
    price_label: 'Tarifs',
    price_title: 'Choisissez Votre Plan',
    price_sub: 'Tous les plans incluent des fonctionnalités de messagerie illimitées avec des mises à jour gratuites',
    price_group1: 'Plans pour Un Seul Appareil',
    price_group2: 'Plans pour Plusieurs Appareils',
    plan1_name: 'Un An', plan1_period: '/ an',
    plan1b_name: 'Deux Ans', plan1b_period: '/ 2 ans',
    plan2_name: 'À Vie', plan2_period: '/ paiement unique',
    pf1: 'Licence pour un seul appareil', pf2: 'Messages quotidiens illimités',
    pf3: 'Toutes les fonctionnalités premium', pf4: 'Import de contacts illimité',
    pf5: 'Personnalisation et Automatisation',
    pf6: 'Mises à jour gratuites pendant l\'abonnement',
    pf7: 'Support technique direct via WhatsApp',
    pf8: 'Mises à jour à vie',
    pf9: 'Support technique prioritaire',
    pf10: 'Deux licences pour deux appareils différents',
    pf11: '3 licences pour 3 appareils différents',
    pf12: 'Support technique or',
    pf13: 'Économisez 1$ par rapport à l\'achat séparé',
    btn_buy_now: 'Acheter Maintenant',
    popular_badge: '⭐ Best-seller',
    devices_2: '🖥️ 2 Appareils',
    devices_3: '🖥️🖥️ 3 Appareils',
    devices_year: '2 Appareils / An',
    devices_2year: '2 Appareils / 2 Ans',
    devices_3year: '3 Appareils / An',
    payment_title: 'Modes de Paiement Disponibles',
    payment_subtitle: 'Choisissez votre mode de paiement préféré et complétez votre achat facilement',
    pm_vodafone_title: 'Vodafone Cash (Égypte)',
    pm_vodafone_sub: 'Transfert instantané vers le portefeuille',
    pm_vodafone_note: 'Envoyez le reçu du transfert via WhatsApp pour l\'activation immédiate.',
    pm_barq_title: 'Application Barq (Arabie Saoudite)',
    pm_barq_sub: 'Transfert international vers l\'Arabie Saoudite',
    pm_barq_steps: 'Étapes de transfert : Transfert International → Égypte → Entrez le numéro ci-dessous',
    pm_barq_note: 'Envoyez le reçu après le transfert pour l\'activation.',
    pm_instapay_title: 'InstaPay (Égypte)',
    pm_instapay_sub: 'Transfert direct depuis l\'Égypte',
    pm_instapay_link: 'Ouvrir le Lien InstaPay →',
    pm_instapay_note: 'Envoyez le reçu de paiement après avoir complété la transaction.',
    pm_bank_title: 'Virement Bancaire - D360 (Arabie Saoudite)',
    pm_bank_sub: 'Via IBAN saoudien',
    pm_bank_name: 'Banque :',
    pm_bank_holder: 'Nom du Bénéficiaire :',
    pm_bank_iban: 'Numéro IBAN :',
    pm_bank_swift: 'Code SWIFT :',
    pm_bank_note: 'Le transfert prend 1-24 heures ouvrables. Envoyez le reçu pour l\'activation.',
    pm_paypal_title: 'Visa / PayPal',
    pm_paypal_sub: 'Paiement sécurisé par carte bancaire',
    pm_paypal_note: 'Après le paiement, envoyez l\'adresse e-mail utilisée via WhatsApp.',
    paypal_plan_yearly: '💳 PayPal - $5 (1 An)',
    paypal_plan_2yearly: '💳 PayPal - $15 (2 Ans)',
    paypal_plan_3yearly: '💳 PayPal - $20 (3 Ans)',
    paypal_plan_lifetime: '💳 PayPal - $50 (À Vie)',
    paypal_plan_2dev_yearly: '💳 PayPal - $8 (2 Appareils/An)',
    paypal_plan_3dev_yearly: '💳 PayPal - $12 (3 Appareils/An)',
    paypal_plan_2dev_2yr: '💳 PayPal - $25 (2 Appareils/2 Ans)',
    copy_btn: 'Copier',
    copied: '✓ Copié',
    contact_label: 'Contactez-nous',
    contact_title: 'Nous Contacter',
    contact_sub: 'Nous sommes là pour aidez. Contactez-nous via les canaux suivants',
    ct1_title: 'WhatsApp', ct1_desc: 'Pour le support immédiat et l\'activation',
    ct2_title: 'E-mail', ct2_desc: 'Pour les demandes et le support technique',
    ct3_title: 'Heures d\'Ouverture', ct3_desc: 'Disponible pendant les heures d\'ouverture', ct3_hours: '9h - 22h',
    cf_title: 'Envoyer un Message', cf_name: 'Nom Complet', cf_email: 'E-mail',
    cf_subject: 'Sujet', cf_opt1: 'Demande Générale', cf_opt2: 'Support Technique',
    cf_opt3: 'Problème de Paiement', cf_opt4: 'Demande de Licence', cf_msg: 'Votre Message', cf_send: 'Envoyer le Message',
    footer_desc: 'Logiciel professionnel de marketing WhatsApp avec des outils avancés pour les messages en masse et l\'automatisation.',
    footer_quick: 'Liens Rapides',
    footer_legal: 'Légal',
    footer_support: 'Support',
    footer_rights: 'Tous droits réservés',
    privacy_title: 'Politique de Confidentialité',
    purchase_title: 'Politique d\'Achat',
    refund_title: 'Politique de Remboursement',
    terms_title: 'Conditions Générales',
    pwa_install: 'Installer l\'Application',
    pwa_subtitle: 'Obtenez une meilleure expérience sans navigateur',
    pwa_dismiss: 'Plus tard',
    faq_title: 'Questions Fréquentes sur les Tarifs et le Paiement',
    faq_q1: 'Puis-je mettre à niveau mon plan plus tard ?',
    faq_a1: 'Oui ! Vous pouvez mettre à niveau votre plan à tout moment. Nous calculerons la différence entre votre plan actuel et le nouveau plan avec une réduction sur la période restante.',
    faq_q2: 'Quels modes de paiement sont disponibles ?',
    faq_a2: 'Nous acceptons plusieurs modes de paiement : Vodafone Cash (Égypte), Application Barq Arabie Saoudite, InstaPay, Virement Bancaire D360 (Arabie Saoudite), et cartes Visa & PayPal pour les paiements internationaux.',
    faq_q3: 'Combien de temps faut-il pour activer la licence après le paiement ?',
    faq_a3: 'L\'activation se fait généralement en quelques minutes après la réception du reçu de paiement via WhatsApp. Pour les virements bancaires, cela peut prendre 1-24 heures ouvrables.',
    faq_q4: 'Puis-je transférer la licence vers un autre appareil ?',
    faq_a4: 'La licence est liée à un seul appareil. Si vous changez d\'appareil, contactez-nous via WhatsApp et nous vous aiderons à transférer la licence vers le nouvel appareil gratuitement.',
    vid1_title: 'Extraire les Numéros des Membres des Groupes WhatsApp',
    vid1_desc: 'Apprenez à extraire les numéros des membres des groupes et communautés WhatsApp en utilisant WA Sender Pro.',
    vid2_title: 'Lancer une Campagne Publicitaire avec WA Sender Pro',
    vid2_desc: 'Apprenez à créer et envoyer une campagne publicitaire professionnelle via WA Sender Pro.',
    vid3_title: 'Convertir les Données en Fichier de Contacts CSV',
    vid3_desc: 'Apprenez à convertir les numéros et données en fichier CSV prêt pour l\'importation et l\'utilisation.',
    vid4_title: 'Extraire les Contacts ou Groupes WhatsApp Sauvegardés',
    vid4_desc: 'Apprenez à extraire les contacts et groupes sauvegardés dans WhatsApp facilement.',
    vid5_title: 'Service de Réponse Automatique',
    vid5_desc: 'Apprenez à configurer et utiliser le service de réponse automatique dans WA Sender Pro.',
    vid6_title: 'Extraire les Discussions WhatsApp',
    vid6_desc: 'Apprenez à extraire et gérer les conversations WhatsApp en utilisant WA Sender Pro.',
    vid7_title: 'Extraire les Liens de Groupes WhatsApp des Pages Web',
    vid7_desc: 'Apprenez à extraire automatiquement les liens de groupes WhatsApp publiés sur les sites web.',
    vid8_title: 'Convertir les Données en Contacts CSV',
    vid8_desc: 'Apprenez à préparer et gérer les fichiers CSV pour les utiliser dans les campagnes WhatsApp.',
    vid9_title: 'Extraire les Numéros et Données de Google Maps',
    vid9_desc: 'Apprenez à extraire les numéros de téléphone et données commerciales de Google Maps en utilisant WA Sender Pro.',
    vid10_title: 'Comment Lancer une Campagne Publicitaire WhatsApp - Dernière Mise à Jour',
    vid10_desc: 'Apprenez la dernière méthode pour créer une campagne publicitaire via WhatsApp avec les meilleures pratiques pour réduire le taux de blocage.'
  },
  
  ru: {
    nav_home: 'Главная',
    nav_how: 'Обучение',
    nav_guide: 'Защита от Блокировки',
    nav_features: 'Функции',
    nav_pricing: 'Цены',
    nav_contact: 'Контакт',
    nav_policies: 'Политики',
    bn_home: 'Главная',
    bn_videos: 'Видео',
    bn_pricing: 'Цены',
    bn_download: 'Скачать',
    bn_contact: 'Контакт',
    bn_features: 'Функции',
    bn_policies: 'Политики',
    badge_new: 'Новая Версия 5.0.7',
    hero_title: 'WA Sender<br>Программа для Маркетинга в WhatsApp',
    hero_sub: 'Полная программа для маркетинга в WhatsApp с более чем 15 мощными инструментами для массовой рассылки, автоматизации и генерации лидов',
    btn_download: 'Бесплатная Загрузка',
    btn_buy: 'Купить Сейчас',
    warn_title: 'Важно: Политика Meta / WhatsApp против Спама',
    warn_p1: 'Meta (материнская компания WhatsApp) накладывает строгие ограничения на массовые рассылки и спам-активность.',
    warn_p2: 'Учетные записи, нарушающие условия WhatsApp, могут быть временно или постоянно заблокированы.',
    warn_p3: 'WA Sender включает функции безопасности, помогающие соблюдать политики Meta, но должен использоваться ответственно.',
    warn_p5: 'Примечание: Убедитесь, что настроили Windows Defender или антивирус для разрешения установки программы.',
    how_label: 'Обучение',
    how_title: 'Смотрите и Начните за Минуты',
    how_sub: 'Полное видеообучение по установке, активации лицензии и использованию основных инструментов пошагово',
    how_badge: 'Полное Видео Обучение',
    how_caption: '▶ Плейлист из 10 обучающих видео, воспроизводимых непосредственно на сайте без перенаправления на YouTube',
    steps_title: 'Активация в 4 Простых Шага',
    step1_title: 'Загрузить Программу',
    step1_desc: 'Загрузите WA Sender с кнопки бесплатной загрузки и установите на свое устройство простыми шагами.',
    step2_title: 'Выберите План и Оплатите',
    step2_desc: 'Выберите подходящий план из раздела цен и завершите оплату любым доступным способом.',
    step3_title: 'Отправьте Квитанцию об Оплате',
    step3_desc: 'Отправьте скриншот квитанции об оплате через WhatsApp, и вы сразу получите код активации.',
    step4_title: 'Активируйте и Начните Отправку',
    step4_desc: 'Введите код активации внутри программы и наслаждайтесь всеми инструментами немедленно.',
    guide_label: 'Советы по Безопасности',
    guide_title: 'Руководство по Защите от Блокировки WhatsApp',
    guide_sub: 'Чтобы обеспечить непрерывность ваших маркетинговых кампаний без потери номеров, выполните следующие шаги:',
    g1_title: '1. Прогрев Номера',
    g1_li1: '<strong>Период ожидания:</strong> Если номер новый, подождите 20-30 дней перед началом любой кампании.',
    g1_li2: '<strong>Естественное взаимодействие:</strong> Используйте номер в ежедневных личных разговорах и групповых чатах для показа естественной активности WhatsApp.',
    g2_title: '2. Умный Тайминг',
    g2_li1: '<strong>Временные интервалы:</strong> Оставляйте 20-30 секунд между каждым сообщением.',
    g2_li2: '<strong>Максимум:</strong> Отправляйте не более 200-300 сообщений в час.',
    g2_li3: '<strong>Периоды отдыха:</strong> Периодически останавливайте кампанию и делайте перерывы, чтобы не быть помеченным как "спам".',
    g3_title: '3. Управление Контактами',
    g3_li1: '<strong>Предварительная регистрация:</strong> Сохраняйте номера как минимум за 24 часа до отправки.',
    g3_li2: '<strong>Синхронизация:</strong> Используйте Google Contacts, чтобы убедиться, что номера правильные, и регулярно обновляйте список.',
    g4_title: '4. Стратегия Содержания Сообщений',
    g4_li1: '<strong>Персонализированные сообщения:</strong> Избегайте единообразных сообщений (Копировать-Вставить) и старайтесь делать каждое сообщение персонализированным с именем или интересом человека.',
    g4_li2: '<strong>Опция отказа:</strong> Дайте клиентам возможность отказаться от получения сообщений (Opt-out), чтобы они не жаловались на вас.',
    g4_li3: '<strong>Полезное содержимое:</strong> Избегайте языка, похожего на спам, и уважайте конфиденциальность и пожелания клиентов.',
    feat_label: 'Функции',
    feat_title: 'Основные Функции WA Sender v5.0.7',
    feat_sub: 'Более 15 профессиональных инструментов в одной программе',
    f1_title: 'Отправка Контактам', f1_desc: 'Массовая рассылка сообщений с использованием шаблонов, вложений и автоматического изменения текста для избежания блокировки.',
    f2_title: 'Отправка в Группы', f2_desc: 'Расширение массовой рассылки для включения групп WhatsApp легко и эффективно.',
    f3_title: 'Извлечение Участников Групп', f3_desc: 'Извлечение участников групп WhatsApp легко и с высокой эффективностью для построения маркетинговых списков.',
    f4_title: 'Сбор Ссылок на Группы', f4_desc: 'Извлечение ссылок на группы WhatsApp с веб-страниц автоматически.',
    f5_title: 'Бот Автоответов', f5_desc: 'Умные автоответы, работающие 24/7 для ответа на запросы клиентов.',
    f6_title: 'Извлечение Списка Контактов', f6_desc: 'Сбор имен и номеров телефонов контактов организованно.',
    f7_title: 'Извлечение Данных Google Maps', f7_desc: 'Извлечение потенциальных лидов по географическому расположению из Google Maps.',
    f8_title: 'Автоматическое Вступление в Группы', f8_desc: 'Автоматическое вступление в группы WhatsApp и расширение сети.',
    f9_title: 'Фильтр Номеров WhatsApp', f9_desc: 'Фильтрация активных номеров WhatsApp для обеспечения доставки сообщений.',
    f10_title: 'Извлечение Активных Участников', f10_desc: 'Таргетинг активных участников в группах и списках чатов точно.',
    f11_title: 'Массовое Создание Групп', f11_desc: 'Создание нескольких групп и организация контактов с генератором CSV.',
    f12_title: 'Извлечение Email и Телефонов', f12_desc: 'Сбор контактных данных с веб-сайтов автоматически и организованно.',
    f13_title: 'Прогрев WhatsApp', f13_desc: 'Подготовка новых аккаунтов и эффективное снижение риска блокировки.',
    f14_title: 'Планировщик Кампаний', f14_desc: 'Точное планирование маркетинговых кампаний в нужное время автоматически.',
    f15_title: 'Добавление Участников + Поиск', f15_desc: 'Расширение групп и поиск подходящих групп стратегически.',
    price_label: 'Цены',
    price_title: 'Выберите Ваш План',
    price_sub: 'Все планы включают неограниченные функции обмена сообщениями с бесплатными обновлениями',
    price_group1: 'Планы на Одно Устройство',
    price_group2: 'Планы на Несколько Устройств',
    plan1_name: 'Один Год', plan1_period: '/ год',
    plan1b_name: 'Два Года', plan1b_period: '/ 2 года',
    plan2_name: 'Навсегда', plan2_period: '/ единоразово',
    pf1: 'Лицензия на одно устройство', pf2: 'Неограниченные ежедневные сообщения',
    pf3: 'Все премиум функции', pf4: 'Неограниченный импорт контактов',
    pf5: 'Настройка и Автоматизация',
    pf6: 'Бесплатные обновления в период подписки',
    pf7: 'Прямая техническая поддержка через WhatsApp',
    pf8: 'Обновления навсегда',
    pf9: 'Приоритетная техническая поддержка',
    pf10: 'Две лицензии на два разных устройства',
    pf11: '3 лицензии на 3 разных устройства',
    pf12: 'Золотая техническая поддержка',
    pf13: 'Экономия 1$ по сравнению с отдельной покупкой',
    btn_buy_now: 'Купить Сейчас',
    popular_badge: '⭐ Хит Продаж',
    devices_2: '🖥️ 2 Устройства',
    devices_3: '🖥️🖥️ 3 Устройства',
    devices_year: '2 Устройства / Год',
    devices_2year: '2 Устройства / 2 Года',
    devices_3year: '3 Устройства / Год',
    payment_title: 'Доступные Способы Оплаты',
    payment_subtitle: 'Выберите предпочтительный способ оплаты и легко завершите покупку',
    pm_vodafone_title: 'Vodafone Cash (Египет)',
    pm_vodafone_sub: 'Мгновенный перевод на кошелек',
    pm_vodafone_note: 'Отправьте квитанцию о переводе через WhatsApp для мгновенной активации.',
    pm_barq_title: 'Приложение Barq (Саудовская Аравия)',
    pm_barq_sub: 'Международный перевод в Саудовскую Аравию',
    pm_barq_steps: 'Шаги перевода: Международный Перевод → Египет → Введите номер ниже',
    pm_barq_note: 'Отправьте квитанцию после перевода для активации.',
    pm_instapay_title: 'InstaPay (Египет)',
    pm_instapay_sub: 'Прямой перевод из Египта',
    pm_instapay_link: 'Открыть Ссылку InstaPay →',
    pm_instapay_note: 'Отправьте квитанцию об оплате после завершения транзакции.',
    pm_bank_title: 'Банковский Перевод - D360 (Саудовская Аравия)',
    pm_bank_sub: 'Через саудовский IBAN',
    pm_bank_name: 'Банк:',
    pm_bank_holder: 'Имя Получателя:',
    pm_bank_iban: 'Номер IBAN:',
    pm_bank_swift: 'Код SWIFT:',
    pm_bank_note: 'Перевод занимает 1-24 рабочих часа. Отправьте квитанцию для активации.',
    pm_paypal_title: 'Visa / PayPal',
    pm_paypal_sub: 'Безопасная оплата банковской картой',
    pm_paypal_note: 'После оплаты отправьте использованный адрес электронной почты через WhatsApp.',
    paypal_plan_yearly: '💳 PayPal - $5 (Год)',
    paypal_plan_2yearly: '💳 PayPal - $15 (2 Года)',
    paypal_plan_3yearly: '💳 PayPal - $20 (3 Года)',
    paypal_plan_lifetime: '💳 PayPal - $50 (Навсегда)',
    paypal_plan_2dev_yearly: '💳 PayPal - $8 (2 Устр./Год)',
    paypal_plan_3dev_yearly: '💳 PayPal - $12 (3 Устр./Год)',
    paypal_plan_2dev_2yr: '💳 PayPal - $25 (2 Устр./2 Года)',
    copy_btn: 'Копировать',
    copied: '✓ Скопировано',
    contact_label: 'Связаться с Нами',
    contact_title: 'Свяжитесь с Нами',
    contact_sub: 'Мы здесь, чтобы помочь. Свяжитесь с нами через следующие каналы',
    ct1_title: 'WhatsApp', ct1_desc: 'Для мгновенной поддержки и активации',
    ct2_title: 'Электронная Почта', ct2_desc: 'Для запросов и технической поддержки',
    ct3_title: 'Часы Работы', ct3_desc: 'Доступен в рабочие часы', ct3_hours: '9:00 - 22:00',
    cf_title: 'Отправить Сообщение', cf_name: 'Полное Имя', cf_email: 'Email',
    cf_subject: 'Тема', cf_opt1: 'Общий Запрос', cf_opt2: 'Техническая Поддержка',
    cf_opt3: 'Проблема с Оплатой', cf_opt4: 'Запрос Лицензии', cf_msg: 'Ваше Сообщение', cf_send: 'Отправить Сообщение',
    footer_desc: 'Профессиональная программа для маркетинга в WhatsApp с расширенными инструментами для массовой рассылки и автоматизации.',
    footer_quick: 'Быстрые Ссылки',
    footer_legal: 'Юридическое',
    footer_support: 'Поддержка',
    footer_rights: 'Все права защищены',
    privacy_title: 'Политика Конфиденциальности',
    purchase_title: 'Политика Покупки',
    refund_title: 'Политика Возврата',
    terms_title: 'Условия Использования',
    pwa_install: 'Установить Приложение',
    pwa_subtitle: 'Получите лучший опыт без браузера',
    pwa_dismiss: 'Позже',
    faq_title: 'Часто Задаваемые Вопросы о Ценах и Оплате',
    faq_q1: 'Могу ли я обновить свой план позже?',
    faq_a1: 'Да! Вы можете обновить свой план в любое время. Мы рассчитаем разницу между вашим текущим планом и новым планом со скидкой на оставшийся период.',
    faq_q2: 'Какие способы оплаты доступны?',
    faq_a2: 'Мы принимаем несколько способов оплаты: Vodafone Cash (Египет), Приложение Barq Саудовская Аравия, InstaPay, Банковский Перевод D360 (Саудовская Аравия), и карты Visa & PayPal для международных платежей.',
    faq_q3: 'Сколько времени занимает активация лицензии после оплаты?',
    faq_a3: 'Активация обычно происходит в течение нескольких минут после получения квитанции об оплате через WhatsApp. Для банковских переводов это может занять 1-24 рабочих часа.',
    faq_q4: 'Могу ли я передать лицензию на другое устройство?',
    faq_a4: 'Лицензия привязана к одному устройству. Если вы смените устройство, свяжитесь с нами через WhatsApp, и мы бесплатно поможем передать лицензию на новое устройство.',
    vid1_title: 'Извлечение Номеров Участников Групп и Сообществ WhatsApp',
    vid1_desc: 'Узнайте, как извлекать номера участников групп и сообществ WhatsApp с помощью WA Sender Pro.',
    vid2_title: 'Запуск Рекламной Кампании с помощью WA Sender Pro',
    vid2_desc: 'Узнайте, как создать и отправить профессиональную рекламную кампанию через WA Sender Pro.',
    vid3_title: 'Преобразование Данных в Файл Контактов CSV',
    vid3_desc: 'Узнайте, как преобразовать номера и данные в файл CSV готовый для импорта и использования.',
    vid4_title: 'Извлечение Сохраненных Контактов или Групп WhatsApp',
    vid4_desc: 'Узнайте, как легко извлекать сохраненные контакты и группы из WhatsApp.',
    vid5_title: 'Служба Автоответов',
    vid5_desc: 'Узнайте, как настроить и использовать службу автоответов в WA Sender Pro.',
    vid6_title: 'Извлечение Чатов WhatsApp',
    vid6_desc: 'Узнайте, как извлекать и управлять разговорами WhatsApp с помощью WA Sender Pro.',
    vid7_title: 'Извлечение Ссылок на Группы WhatsApp со Страниц Сайтов',
    vid7_desc: 'Узнайте, как автоматически извлекать ссылки на группы WhatsApp, опубликованные на веб-сайтах.',
    vid8_title: 'Преобразование Данных в Контакты CSV',
    vid8_desc: 'Узнайте, как подготавливать и управлять файлами CSV для использования в кампаниях WhatsApp.',
    vid9_title: 'Извлечение Номеров и Данных из Google Maps',
    vid9_desc: 'Узнайте, как извлекать номера телефонов и бизнес-данные из Google Maps с помощью WA Sender Pro.',
    vid10_title: 'Как Запустить Рекламную Кампанию в WhatsApp - Последнее Обновление',
    vid10_desc: 'Узнайте последний метод создания рекламной кампании в WhatsApp с лучшими практиками для снижения уровня блокировки.'
  },
  
  it: {
    nav_home: 'Home',
    nav_how: 'Tutorial',
    nav_guida: 'Guida Anti-Ban',
    nav_features: 'Funzionalità',
    nav_pricing: 'Prezzi',
    nav_contact: 'Contatti',
    nav_policies: 'Politiche',
    bn_home: 'Home',
    bn_videos: 'Video',
    bn_pricing: 'Prezzi',
    bn_download: 'Scarica',
    bn_contact: 'Contatti',
    bn_features: 'Funzioni',
    bn_policies: 'Politiche',
    badge_new: 'Nuova Versione 5.0.7',
    hero_title: 'WA Sender<br>Software di Marketing WhatsApp',
    hero_sub: 'Software completo di marketing WhatsApp con oltre 15 potenti strumenti per messaggi in massa, automazione e generazione di lead',
    btn_download: 'Download Gratuito',
    btn_buy: 'Acista Ora',
    warn_title: 'Importante: Politica Anti-Spam di Meta / WhatsApp',
    warn_p1: 'Meta (società madre di WhatsApp) impone restrizioni rigorose sui messaggi in massa e attività di spam.',
    warn_p2: 'I account che violano i termini di WhatsApp potrebbero affrontare blocc temporanei o permanenti.',
    warn_p3: 'WA Sender include funzionalità di sicurezza per aiutarti a rispettare le politiche di Meta, ma deve essere utilizzato in modo responsabile.',
    warn_p5: 'Nota: Assicurati di configurare Windows Defender o il tuo antivirus per consentire l\'installazione del programma.',
    how_label: 'Tutorial',
    how_title: 'Guarda e Inizia in Minuti',
    how_sub: 'Tutorial video completo per installazione, attivazione della licenza e utilizzo dei principali strumenti passo dopo passo',
    how_badge: 'Tutorial Video Completo',
    how_caption: '▶ Playlist di 10 video tutorial riprodotti direttamente sul sito senza reindirizzamento esterno a YouTube',
    steps_title: 'Attivazione in 4 Semplici Passaggi',
    step1_title: 'Scarica il Programma',
    step1_desc: 'Scarica WA Sender dal pulsante di download gratuito e installalo sul tuo dispositivo con semplici passaggi.',
    step2_title: 'Scegli Il Tuo Piano & Paga',
    step2_desc: 'Scegli il piano giusto dalla sezione prezzi e completa il pagamento con qualsiasi metodo disponibile.',
    step3_title: 'Invia Ricevuta del Pagamento',
    step3_desc: 'Invia uno screenshot della ricevuta del pagamento tramite WhatsApp e riceverai immediatamente il codice di attivazione.',
    step4_title: 'Attiva & Inizia Inviare',
    step4_desc: 'Inserisci il codice di attivazione all\'interno del programma e goditi tutti gli strumenti immediatamente.',
    guide_label: 'Consigli di Sicurezza',
    guide_title: 'Linee Guida per la Protezione dal Blocco WhatsApp',
    guide_sub: 'Per assicurare la continuità delle tue campagne di marketing senza perdere i tuoi numeri, segui questi passaggi:',
    g1_title: '1. Riscaldamento del Numero',
    g1_li1: '<strong>Periodo di raffreddamento:</strong> Se il numero è nuovo, attendi 20-30 giorni prima di iniziare qualsiasi campagna.',
    g1_li2: '<strong>Interazione naturale:</strong> Utilizza il numero in conversazioni personali quotidiane e chat di gruppo per mostrare attività naturale a WhatsApp.',
    g2_title: '2. Timing Intelligente',
    g2_li1: '<strong>Intervallo di tempo:</strong> Lascia 20-30 secondi tra ogni messaggio.',
    g2_li2: '<strong>Limite massimo:</strong> Invia al massimo 200-300 messaggi all\'ora.',
    g2_li3: '<strong>Periodi di pausa:</strong> Ferma la campagna periodicamente e prendi pause per evitare di essere contrassegnato come "spam".',
    g3_title: '3. Gestione dei Contatti',
    g3_li1: '<strong>Pre-registrazione:</strong> Salva i numeri almeno 24 ore prima dell\'invio.',
    g3_li2: '<strong>Sincronizzazione:</strong> Utilizza Google Contacts per assicurarti che i numeri siano corretti e aggiorna la lista regolarmente.',
    g4_title: '4. Strategia del Contenuto dei Messaggi',
    g4_li1: '<strong>Messaggi personalizzati:</strong> Evita messaggi uniformi (Copia-Incolla) e cerca di rendere ogni messaggio personalizzato con il nome o l\'interesse della persona.',
    g4_li2: '<strong>Opzione di opt-out:</strong> Dai ai clienti la possibilità di rifiutare di ricevere messaggi (Opt-out) in modo che non ti segnalino.',
    g4_li3: '<strong>Contenuto utile:</strong> Evita linguaggio simile allo spam e rispetta la privacy e i desideri dei clienti.',
    feat_label: 'Funzionalità',
    feat_title: 'Funzionalità Principali WA Sender v5.0.7',
    feat_sub: 'Più di 15 strumenti professionali in unico programma',
    f1_title: 'Invia ai Contatti', f1_desc: 'Invia messaggi in massa utilizzando modelli, allegati e variazione automatica del testo per evitare il blocco.',
    f2_title: 'Invia ai Gruppi', f2_desc: 'Estendi l\'invio in massa per includere i gruppi WhatsApp facilmente ed efficientemente.',
    f3_title: 'Estrai Membri del Gruppo', f3_desc: 'Estrai membri dei gruppi WhatsApp facilmente e con alta efficienza per costruire liste di marketing.',
    f4_title: 'Raccogli Link dei Gruppi', f4_desc: 'Estrai link dei gruppi WhatsApp dalle pagine web automaticamente.',
    f5_title: 'Bot di Risposta Automatica', f5_desc: 'Risposte automatiche intelligenti che funzionano 24/7 per rispondere alle richieste dei clienti.',
    f6_title: 'Estrattore Lista Contatti', f6_desc: 'Raccogli nomi e numeri di telefono dai contatti in modo organizzato.',
    f7_title: 'Estrattore Dati Google Maps', f7_desc: 'Estrai lead potenziali per localizzazione geografica da Google Maps.',
    f8_title: 'Partecipazione Automatica ai Gruppi', f8_desc: 'Partecipa automaticamente ai gruppi WhatsApp e espandi la tua rete.',
    f9_title: 'Filtro Numeri WhatsApp', f9_desc: 'Filtra i numeri WhatsApp attivi per garantire la consegna dei messaggi.',
    f10_title: 'Estrai Membri Attivi', f10_desc: 'Targeting dei membri attivi nei gruppi e nelle liste chat con precisione.',
    f11_title: 'Creatore di Gruppi in Massa', f11_desc: 'Crea più gruppi e organizza i contatti con generatore CSV.',
    f12_title: 'Estrattore Email e Telefono', f12_desc: 'Estrai dati di contatto dai siti web automaticamente e in modo organizzato.',
    f13_title: 'Riscaldatore WhatsApp', f13_desc: 'Prepara nuovi account e riduci efficacemente il rischio di blocco.',
    f14_title: 'Programmatore di Campagne', f14_desc: 'Pianifica campagne di marketing con precisione al momento giusto automaticamente.',
    f15_title: 'Aggiungi Membri + Ricerca', f15_desc: 'Espandi i gruppi e trova gruppi appropriati strategicamente.',
    price_label: 'Prezzi',
    price_title: 'Scegli Il Tuo Piano',
    price_sub: 'Tutti i piani includono funzionalità di messaggistica illimitate con aggiornamenti gratuiti',
    price_group1: 'Piani per Dispositivo Singolo',
    price_group2: 'Piani per Più Dispositivi',
    plan1_name: 'Un Anno', plan1_period: '/ anno',
    plan1b_name: 'Due Anni', plan1b_period: '/ 2 anni',
    plan2_name: 'A Vita', plan2_period: '/ pagamento unico',
    pf1: 'Licenza per singolo dispositivo', pf2: 'Messaggi giornalieri illimitati',
    pf3: 'Tutte le funzionalità premium', pf4: 'Importazione contatti illimitata',
    pf5: 'Personalizzazione e Automazione',
    pf6: 'Aggiornamenti gratuiti durante l\'abbonamento',
    pf7: 'Supporto tecnico diretto via WhatsApp',
    pf8: 'Aggiornamenti a vita',
    pf9: 'Supporto tecnico prioritario',
    pf10: 'Due licenze per due dispositivi diversi',
    pf11: '3 licenze per 3 dispositivi diversi',
    pf12: 'Supporto tecnico oro',
    pf13: 'Risparmia 1$ rispetto all\'acquisto separato',
    btn_buy_now: 'Acista Ora',
    popular_badge: '⭐ Bestseller',
    devices_2: '🖥️ 2 Dispositivi',
    devices_3: '🖥️🖥️ 3 Dispositivi',
    devices_year: '2 Dispositivi / Anno',
    devices_2year: '2 Dispositivi / 2 Anni',
    devices_3year: '3 Dispositivi / Anno',
    payment_title: 'Metodi di Pagamento Disponibili',
    payment_subtitle: 'Scegli il tuo metodo di pagamento preferito e completa l\'acquisto facilmente',
    pm_vodafone_title: 'Vodafone Cash (Egitto)',
    pm_vodafone_sub: 'Trasferimento istantaneo al portafoglio',
    pm_vodafone_note: 'Invia ricevuta del trasferimento via WhatsApp per attivazione istantanea.',
    pm_barq_title: 'App Barq (Arabia Saudita)',
    pm_barq_sub: 'Trasferimento internazionale in Arabia Saudita',
    pm_barq_steps: 'Passaggi trasferimento: Trasferimento Internazionale → Egitto → Inserisci il numero qui sotto',
    pm_barq_note: 'Invia ricevuta dopo il trasferimento per l\'attivazione.',
    pm_instapay_title: 'InstaPay (Egitto)',
    pm_instapay_sub: 'Trasferimento diretto dall\'Egitto',
    pm_instapay_link: 'Apri Link InstaPay →',
    pm_instapay_note: 'Invia ricevuta del pagamento dopo aver completato la transazione.',
    pm_bank_title: 'Bonifico Bancario - D360 (Arabia Saudita)',
    pm_bank_sub: 'Tramite IBAN saudita',
    pm_bank_name: 'Banca:',
    pm_bank_holder: 'Nome Beneficiario:',
    pm_bank_iban: 'Numero IBAN:',
    pm_bank_swift: 'Codice SWIFT:',
    pm_bank_note: 'Il trasferimento richiede 1-24 ore lavorative. Invia ricevuta per l\'attivazione.',
    pm_paypal_title: 'Visa / PayPal',
    pm_paypal_sub: 'Pagamento sicuro con carta di credito',
    pm_paypal_note: 'Dopo il pagamento, invia l\'indirizzo email utilizzato via WhatsApp.',
    paypal_plan_yearly: '💳 PayPal - $5 (1 Anno)',
    paypal_plan_2yearly: '💳 PayPal - $15 (2 Anni)',
    paypal_plan_3yearly: '💳 PayPal - $20 (3 Anni)',
    paypal_plan_lifetime: '💳 PayPal - $50 (A Vita)',
    paypal_plan_2dev_yearly: '💳 PayPal - $8 (2 Disp./Anno)',
    paypal_plan_3dev_yearly: '💳 PayPal - $12 (3 Disp./Anno)',
    paypal_plan_2dev_2yr: '💳 PayPal - $25 (2 Disp./2 Anni)',
    copy_btn: 'Copia',
    copied: '✓ Copiato',
    contact_label: 'Contattaci',
    contact_title: 'Contattaci',
    contact_sub: 'Siamo qui per aiutati. Contattaci attraverso i seguenti canali',
    ct1_title: 'WhatsApp', ct1_desc: 'Per supporto immediato e attivazione',
    ct2_title: 'Email', ct2_desc: 'Per richieste e supporto tecnico',
    ct3_title: 'Orari di Lavoro', ct3_desc: 'Disponibile durante l\'orario di lavoro', ct3_hours: '9:00 - 22:00',
    cf_title: 'Invia Messaggio', cf_name: 'Nome Completo', cf_email: 'Email',
    cf_subject: 'Oggetto', cf_opt1: 'Richiesta Generale', cf_opt2: 'Supporto Tecnico',
    cf_opt3: 'Problema di Pagamento', cf_opt4: 'Richiesta Licenza', cf_msg: 'Il Tuo Messaggio', cf_send: 'Invia Messaggio',
    footer_desc: 'Software professionale di marketing WhatsApp con strumenti avanzati per messaggi in massa e automazione.',
    footer_quick: 'Link Rapidi',
    footer_legale: 'Legale',
    footer_support: 'Supporto',
    footer_rights: 'Tutti i diritti riservati',
    privacy_title: 'Politica sulla Privacy',
    purchase_title: 'Politica di Acquisto',
    refund_title: 'Politica di Rimborso',
    terms_title: 'Termini e Condizioni',
    pwa_install: 'Installa App',
    pwa_subtitle: 'Ottieni un\'esperienza migliore senza browser',
    pwa_dismiss: 'Dopo',
    faq_title: 'Domande Frequenti su Prezzi e Pagamento',
    faq_q1: 'Posso aggiornare il mio piano più tardi?',
    faq_a1: 'Sì! Puoi aggiornare il tuo piano in qualsiasi momento. Calcoleremo differenza tra il tuo piano attuale e quello nuovo con sconto sul periodo rimanente.',
    faq_q2: 'Quali metodi di pagamento sono disponibili?',
    faq_a2: 'Accettiamo molteplici metodi di pagamento: Vodafone Cash (Egitto), App Barq Arabia Saudita, InstaPay, Bonifico Bancario D360 (Arabia Saudita), e carte Visa & PayPal per pagamenti internazionali.',
    faq_q3: 'Quanto tempo richiede l\'attivazione della licenza dopo il pagamento?',
    faq_a3: 'L\'attivazione avviene solitamente entro pochi minuti dopo aver ricevuto la ricevuta del pagamento via WhatsApp. Per i bonifici bancari potrebbe richiedere 1-24 ore lavorative.',
    faq_q4: 'Posso trasferire la licenza su un altro dispositivo?',
    faq_a4: 'La licenza è legata a un solo dispositivo. Se cambi dispositivo, contattaci via WhatsApp e ti aiuteremo a trasferire la licenza sul nuovo dispositivo gratuitamente.',
    vid1_title: 'Estrai Numeri Membri Gruppi e Comunità WhatsApp',
    vid1_desc: 'Impara come estrarre numeri membri di gruppi e comunità WhatsApp usando WA Sender Pro.',
    vid2_title: 'Esegui Campagna Pubblicitaria con WA Sender Pro',
    vid2_desc: 'Impara come creare e inviare una campagna pubblicitaria professionale tramite WA Sender Pro.',
    vid3_title: 'Converti Dati in File Contatti CSV',
    vid3_desc: 'Impara come convertire numeri e dati in file CSV pronto per importazione e uso.',
    vid4_title: 'Estrai Contatti o Gruppi WhatsApp Salvati',
    vid4_desc: 'Impara come estrarre contatti e gruppi salvati in WhatsApp facilmente.',
    vid5_title: 'Servizio di Risposta Automatica',
    vid5_desc: 'Impara come configurare e usare il servizio di risposta automatica in WA Sender Pro.',
    vid6_title: 'Estrai Chat WhatsApp',
    vid6_desc: 'Impara come estrarre e gestire conversazioni WhatsApp usando WA Sender Pro.',
    vid7_title: 'Estrai Link Gruppi WhatsApp da Pagine Web',
    vid7_desc: 'Impara come estrarre automaticamente link gruppi WhatsApp pubblicati sui siti web.',
    vid8_title: 'Converti Dati in Contatti CSV',
    vid8_desc: 'Impara come preparare e gestire file CSV per usarli in campagne WhatsApp.',
    vid9_title: 'Estrai Numeri e Dati da Google Maps',
    vid9_desc: 'Impara come estrarre numeri di telefono e dati commerciali da Google Maps usando WA Sender Pro.',
    vid10_title: 'Come Eseguire Campagna Pubblicitaria WhatsApp - Ultimo Aggiornamento',
    vid10_desc: 'Impara l\'ultimo metodo per creare campagna pubblicitaria via WhatsApp con migliori pratiche per ridurre tasso di blocco.'
  }
};

// ── VIDEO PLAYLIST TRANSLATIONS ──
const videoPlaylistI18n = {
  ar: [
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
  ],
  en: [
    { num: '01', title: 'Extract WhatsApp Group & Community Member Numbers', desc: 'Learn how to extract member numbers from WhatsApp groups and communities using WA Sender Pro.', src: 'video/1.mp4' },
    { num: '02', title: 'Run Advertising Campaign with WA Sender Pro', desc: 'Learn how to create and send a professional advertising campaign via WA Sender Pro.', src: 'video/2.mp4' },
    { num: '03', title: 'Convert Data to CSV Contact File', desc: 'Learn how to convert numbers and data into a CSV file ready for import and use.', src: 'video/3.mp4' },
    { num: '04', title: 'Extract Saved Contacts or WhatsApp Groups', desc: 'Learn how to extract saved contacts and groups from WhatsApp easily.', src: 'video/4.mp4' },
    { num: '05', title: 'Auto Reply Service', desc: 'Learn how to set up and use the auto-reply service in WA Sender Pro.', src: 'video/5.mp4' },
    { num: '06', title: 'Extract WhatsApp Chats', desc: 'Learn how to extract and manage WhatsApp conversations using WA Sender Pro.', src: 'video/6.mp4' },
    { num: '07', title: 'Extract WhatsApp Group Links from Web Pages', desc: 'Learn how to automatically extract WhatsApp group links published on websites.', src: 'video/7.mp4' },
    { num: '08', title: 'Convert Data to CSV Contacts', desc: 'Learn how to prepare and manage CSV files for use in WhatsApp campaigns.', src: 'video/8.mp4' },
    { num: '09', title: 'Extract Numbers & Data from Google Maps', desc: 'Learn how to extract phone numbers and business data from Google Maps using WA Sender Pro.', src: 'video/9.mp4' },
    { num: '10', title: 'How to Run WhatsApp Ad Campaign - Latest Update', desc: 'Learn the latest method for creating an ad campaign via WhatsApp with best practices to reduce ban rate.', src: 'video/10.mp4' }
  ],
  fr: [
    { num: '01', title: 'Extraire les Numéros des Membres des Groupes WhatsApp', desc: 'Apprenez à extraire les numéros des membres des groupes et communautés WhatsApp en utilisant WA Sender Pro.', src: 'video/1.mp4' },
    { num: '02', title: 'Lancer une Campagne Publicitaire avec WA Sender Pro', desc: 'Apprenez à créer et envoyer une campagne publicitaire professionnelle via WA Sender Pro.', src: 'video/2.mp4' },
    { num: '03', title: 'Convertir les Données en Fichier de Contacts CSV', desc: 'Apprenez à convertir les numéros et données en fichier CSV prêt pour l\'importation et l\'utilisation.', src: 'video/3.mp4' },
    { num: '04', title: 'Extraire les Contacts ou Groupes WhatsApp Sauvegardés', desc: 'Apprenez à extraire les contacts et groupes sauvegardés dans WhatsApp facilement.', src: 'video/4.mp4' },
    { num: '05', title: 'Service de Réponse Automatique', desc: 'Apprenez à configurer et utiliser le service de réponse automatique dans WA Sender Pro.', src: 'video/5.mp4' },
    { num: '06', title: 'Extraire les Discussions WhatsApp', desc: 'Apprenez à extraire et gérer les conversations WhatsApp en utilisant WA Sender Pro.', src: 'video/6.mp4' },
    { num: '07', title: 'Extraire les Liens de Groupes WhatsApp des Pages Web', desc: 'Apprenez à extraire automatiquement les liens de groupes WhatsApp publiés sur les sites web.', src: 'video/7.mp4' },
    { num: '08', title: 'Convertir les Données en Contacts CSV', desc: 'Apprenez à préparer et gérer les fichiers CSV pour les utiliser dans les campagnes WhatsApp.', src: 'video/8.mp4' },
    { num: '09', title: 'Extraire les Numéros et Données de Google Maps', desc: 'Apprenez à extraire les numéros de téléphone et données commerciales de Google Maps en utilisant WA Sender Pro.', src: 'video/9.mp4' },
    { num: '10', title: 'Comment Lancer une Campagne Publicitaire WhatsApp - Dernière Mise à Jour', desc: 'Apprenez la dernière méthode pour créer une campagne publicitaire via WhatsApp avec les meilleures pratiques pour réduire le taux de blocage.', src: 'video/10.mp4' }
  ],
  ru: [
    { num: '01', title: 'Извлечение Номеров Участников Групп и Сообществ WhatsApp', desc: 'Узнайте, как извлекать номера участников групп и сообществ WhatsApp с помощью WA Sender Pro.', src: 'video/1.mp4' },
    { num: '02', title: 'Запуск Рекламной Кампании с помощью WA Sender Pro', desc: 'Узнайте, как создать и отправить профессиональную рекламную кампанию через WA Sender Pro.', src: 'video/2.mp4' },
    { num: '03', title: 'Преобразование Данных в Файл Контактов CSV', desc: 'Узнайте, как преобразовать номера и данные в файл CSV готовый для импорта и использования.', src: 'video/3.mp4' },
    { num: '04', title: 'Извлечение Сохраненных Контактов или Групп WhatsApp', desc: 'Узнайте, как легко извлекать сохраненные контакты и группы из WhatsApp.', src: 'video/4.mp4' },
    { num: '05', title: 'Служба Автоответов', desc: 'Узнайте, как настроить и использовать службу автоответов в WA Sender Pro.', src: 'video/5.mp4' },
    { num: '06', title: 'Извлечение Чатов WhatsApp', desc: 'Узнайте, как извлекать и управлять разговорами WhatsApp с помощью WA Sender Pro.', src: 'video/6.mp4' },
    { num: '07', title: 'Извлечение Ссылок на Группы WhatsApp со Страниц Сайтов', desc: 'Узнайте, как автоматически извлекать ссылки на группы WhatsApp, опубликованные на веб-сайтах.', src: 'video/7.mp4' },
    { num: '08', title: 'Преобразование Данных в Контакты CSV', desc: 'Узнайте, как подготавливать и управлять файлами CSV для использования в кампаниях WhatsApp.', src: 'video/8.mp4' },
    { num: '09', title: 'Извлечение Номеров и Данных из Google Maps', desc: 'Узнайте, как извлекать номера телефонов и бизнес-данные из Google Maps с помощью WA Sender Pro.', src: 'video/9.mp4' },
    { num: '10', title: 'Как Запустить Рекламную Кампанию в WhatsApp - Последнее Обновление', desc: 'Узнайте последний метод создания рекламной кампании в WhatsApp с лучшими практиками для снижения уровня блокировки.', src: 'video/10.mp4' }
  ],
  it: [
    { num: '01', title: 'Estrai Numeri Membri Gruppi e Comunità WhatsApp', desc: 'Impara come estrarre numeri membri di gruppi e comunità WhatsApp usando WA Sender Pro.', src: 'video/1.mp4' },
    { num: '02', title: 'Esegui Campagna Pubblicitaria con WA Sender Pro', desc: 'Impara come creare e inviare una campagna pubblicitaria professionale tramite WA Sender Pro.', src: 'video/2.mp4' },
    { num: '03', title: 'Converti Dati in File Contatti CSV', desc: 'Impara come convertire numeri e dati in file CSV pronto per importazione e uso.', src: 'video/3.mp4' },
    { num: '04', title: 'Estrai Contatti o Gruppi WhatsApp Salvati', desc: 'Impara come estrarre contatti e gruppi salvati in WhatsApp facilmente.', src: 'video/4.mp4' },
    { num: '05', title: 'Servizio di Risposta Automatica', desc: 'Impara come configurare e usare il servizio di risposta automatica in WA Sender Pro.', src: 'video/5.mp4' },
    { num: '06', title: 'Estrai Chat WhatsApp', desc: 'Impara come estrarre e gestire conversazioni WhatsApp usando WA Sender Pro.', src: 'video/6.mp4' },
    { num: '07', title: 'Estrai Link Gruppi WhatsApp da Pagine Web', desc: 'Impara come estrarre automaticamente link gruppi WhatsApp pubblicati sui siti web.', src: 'video/7.mp4' },
    { num: '08', title: 'Converti Dati in Contatti CSV', desc: 'Impara come preparare e gestire file CSV per usarli in campagne WhatsApp.', src: 'video/8.mp4' },
    { num: '09', title: 'Estrai Numeri e Dati da Google Maps', desc: 'Impara come estrarre numeri di telefono e dati commerciali da Google Maps usando WA Sender Pro.', src: 'video/9.mp4' },
    { num: '10', title: 'Come Eseguire Campagna Pubblicitaria WhatsApp - Ultimo Aggiornamento', desc: 'Impara l\'ultimo metodo per creare campagna pubblicitaria via WhatsApp con migliori pratiche per ridurre tasso di blocco.', src: 'video/10.mp4' }
  ]
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
  updatePaymentMethods();
});

// ── LANGUAGE FUNCTIONS ──
function initLanguage() {
  const dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = currentLang;
  document.documentElement.dir = dir;
  document.body.dir = dir;
  
  if (document.getElementById('currentLangLabel')) {
    const langNames = { 
      ar: 'العربية', 
      en: 'English', 
      fr: 'Français', 
      ru: 'Русский', 
      it: 'Italiano'
    };
    document.getElementById('currentLangLabel').textContent = langNames[currentLang] || currentLang;
  }
  
  applyTranslations();
  updatePaymentMethods(); // Update payment methods text when language changes
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('wasender_lang', lang);
  initLanguage();
  toggleLangMenu();
  
  // Update video playlist if exists
  if (typeof currentVideoIndex !== 'undefined') {
    const playlist = videoPlaylistI18n[lang] || videoPlaylistI18n.ar;
    if (playlist[currentVideoIndex]) {
      const vid = playlist[currentVideoIndex];
      const titleEl = document.getElementById('videoCurrentTitle');
      const descEl = document.getElementById('videoCurrentDesc');
      if (titleEl) titleEl.textContent = vid.title;
      if (descEl) descEl.textContent = vid.desc;
      
      // Update playlist items
      document.querySelectorAll('.vp-item').forEach((item, idx) => {
        if (playlist[idx]) {
          const titleSpan = item.querySelector('.vp-title');
          if (titleSpan) titleSpan.textContent = playlist[idx].title;
        }
      });
    }
  }
  
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

// ── PAYMENT METHODS UPDATE FUNCTION ──
function updatePaymentMethods() {
  const t = i18n[currentLang] || i18n.ar;
  
  // Update payment section titles
  const paymentTitle = document.querySelector('.checkout-container h2');
  if (paymentTitle) paymentTitle.textContent = t.payment_title;
  
  const paymentSubtitle = document.querySelector('.checkout-container .text-center p');
  if (paymentSubtitle && paymentSubtitle.closest('.checkout-container')) paymentSubtitle.textContent = t.payment_subtitle;
  
  // Update Vodafone Cash
  updatePMElement('.pm-vodafone .pm-title', t.pm_vodafone_title);
  updatePMElement('.pm-vodafone .pm-sub', t.pm_vodafone_sub);
  updatePMElement('.pm-vodafone .pm-note', t.pm_vodafone_note);
  
  // Update Barq
  updatePMElement('.pm-barq .pm-title', t.pm_barq_title);
  updatePMElement('.pm-barq .pm-sub', t.pm_barq_sub);
  updatePMElement('.pm-barq p:not(.pm-note):not(.pm-sub):not(.pm-title)', t.pm_barq_steps);
  updatePMElement('.pm-barq .pm-note', t.pm_barq_note);
  
  // Update InstaPay
  updatePMElement('.pm-instapay .pm-title', t.pm_instapay_title);
  updatePMElement('.pm-instapay .pm-sub', t.pm_instapay_sub);
  updatePMElement('.pm-instapay .instapay-link', t.pm_instapay_link);
  updatePMElement('.pm-instapay .pm-note', t.pm_instapay_note);
  
  // Update Bank Transfer (D360)
  updatePMElement('.pm-bank .pm-title', t.pm_bank_title);
  updatePMElement('.pm-bank .pm-sub', t.pm_bank_sub);
  
  // Update bank details with correct info
  const bankNameEl = document.querySelector('#pm-bank p[style*="font-weight:700"]');
  if (bankNameEl) bankNameEl.innerHTML = `<strong>${t.pm_bank_name}</strong> ${CONFIG.bankDetails.name[currentLang] || CONFIG.bankDetails.name.en}`;
  
  const bankHolderEl = document.querySelectorAll('#pm-bank p[style*="font-weight:700"]')[1];
  if (bankHolderEl) bankHolderEl.innerHTML = `<strong>${t.pm_bank_holder}</strong> ${CONFIG.bankDetails.accountHolder[currentLang] || CONFIG.bankDetails.accountHolder.en}`;
  
  // Update IBAN label
  const ibanLabel = document.querySelector('#pm-bank label');
  if (ibanLabel) ibanLabel.textContent = t.pm_bank_iban;
  
  // Update IBAN value
  const ibanValue = document.querySelector('#pm-bank .copy-row span[dir]');
  if (ibanValue) ibanValue.textContent = CONFIG.bankDetails.iban;
  
  // Add SWIFT code if not exists
  const pmBankBody = document.getElementById('pm-bank');
  if (pmBankBody && !pmBankBody.querySelector('.swift-row')) {
    const swiftRow = document.createElement('div');
    swiftRow.className = 'copy-row swift-row';
    swiftRow.innerHTML = `
      <label style="font-size:0.85rem;color:var(--text-muted);">${t.pm_bank_swift}</label>
    `;
    const swiftValue = document.createElement('div');
    swiftValue.className = 'copy-row';
    swiftValue.innerHTML = `
      <span dir="ltr" style="font-size:0.82rem;">${CONFIG.bankDetails.swift}</span>
      <button class="copy-btn" onclick="copyToClipboard('${CONFIG.bankDetails.swift}',this)">${t.copy_btn}</button>
    `;
    pmBankBody.insertBefore(swiftRow, pmBankBody.querySelector('.pm-note'));
    pmBankBody.insertBefore(swiftValue, pmBankBody.querySelector('.pm-note'));
  } else if (pmBankBody) {
    // Update existing SWIFT
    const swiftLabel = pmBankBody.querySelector('.swift-row label');
    if (swiftLabel) swiftLabel.textContent = t.pm_bank_swift;
    const swiftVal = pmBankBody.querySelector('.swift-row + .copy-row span, .swift-row span[dir]');
    if (swiftVal) swiftVal.textContent = CONFIG.bankDetails.swift;
  }
  
  updatePMElement('.pm-bank .pm-note', t.pm_bank_note);
  
  // Update PayPal
  updatePMElement('.pm-paypal .pm-title', t.pm_paypal_title);
  updatePMElement('.pm-paypal .pm-sub', t.pm_paypal_sub);
  updatePMElement('.pm-paypal .pm-note', t.pm_paypal_note);
  
  // Update PayPal buttons
  const paypalBtns = document.querySelectorAll('.paypal-btn');
  const paypalKeys = ['paypal_plan_yearly', 'paypal_plan_2yearly', 'paypal_plan_3yearly', 'paypal_plan_lifetime', 'paypal_plan_2dev_yearly', 'paypal_plan_3dev_yearly', 'paypal_plan_2dev_2yr'];
  paypalBtns.forEach((btn, idx) => {
    if (t[paypalKeys[idx]]) {
      btn.textContent = t[paypalKeys[idx]];
    }
  });
  
  // Update FAQ section
  const faqTitle = document.querySelector('.faq-list')?.closest('section')?.querySelector('h2');
  if (faqTitle) faqTitle.textContent = t.faq_title;
  
  // Update FAQ items
  const faqItems = document.querySelectorAll('.faq-item');
  const faqQs = [t.faq_q1, t.faq_q2, t.faq_q3, t.faq_q4];
  const faqAs = [t.faq_a1, t.faq_a2, t.faq_a3, t.faq_a4];
  faqItems.forEach((item, idx) => {
    const qEl = item.querySelector('.faq-q');
    const aEl = item.querySelector('.faq-a p');
    if (qEl && faqQs[idx]) {
      qEl.childNodes[0].textContent = faqQs[idx];
    }
    if (aEl && faqAs[idx]) {
      aEl.textContent = faqAs[idx];
    }
  });
}

function updatePMElement(selector, text) {
  const el = document.querySelector(selector);
  if (el) el.textContent = text;
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

function getVideoPlaylist() {
  return videoPlaylistI18n[currentLang] || videoPlaylistI18n.ar;
}

function initVideoPlayer() {
  const playlistEl = document.getElementById('videoPlaylist');
  const videoEl = document.getElementById('mainVideo');
  
  if (!playlistEl || !videoEl) return;
  
  const playlist = getVideoPlaylist();
  
  // Render playlist
  playlist.forEach((vid, idx) => {
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
  const playlist = getVideoPlaylist();
  if (index < 0 || index >= playlist.length) return;
  
  currentVideoIndex = index;
  const vid = playlist[index];
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
  if (nextBtn) nextBtn.disabled = index === playlist.length - 1;
  
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
    const t = i18n[currentLang] || i18n.ar;
    btn.title = soundEnabled ? (t.pwa_install === 'ثبّت التطبيق' ? 'تشغيل / إيقاف المؤثرات الصوتية' : 'Toggle Sound Effects') : (currentLang === 'ar' ? 'الصوت مغلق' : 'Sound is off');
  }
}

// ── PRICING FUNCTIONS ──
function goToCheckout(plan) {
  // Scroll to payment methods section instead of redirecting
  const paymentSection = document.querySelector('.checkout-container') || document.querySelector('[style*="bg-alt"]');
  if (paymentSection) {
    paymentSection.scrollIntoView({ behavior: 'smooth' });
    // Open PayPal section by default
    setTimeout(() => togglePayment('paypal'), 500);
  }
  playClickSound();
}

function updateLocalPrices() {
  // Local price approximations based on language
  const pricesByLang = {
    ar: {
      'local-yearly': '~250 ج.م / سنة',
      'local-2yr': '~450 ج.م / سنتين',
      'local-lifetime': '~1500 ج.م',
      'local-2dev-yearly': '~400 ج.م / سنة',
      'local-3dev-yearly': '~600 ج.م / سنة',
      'local-2dev-2yr': '~750 ج.م / سنتين',
      'local-3yr': '~900 ج.م / 3 سنوات'
    },
    en: {
      'local-yearly': '~$5 / year',
      'local-2yr': '~$15 / 2 years',
      'local-lifetime': '~$50 lifetime',
      'local-2dev-yearly': '~$8 / year',
      'local-3dev-yearly': '~$12 / year',
      'local-2dev-2yr': '~$25 / 2 years',
      'local-3yr': '~$20 / 3 years'
    },
    fr: {
      'local-yearly': '~5€ / an',
      'local-2yr': ~'15€ / 2 ans',
      'local-lifetime': '~50€ à vie',
      'local-2dev-yearly': '~8€ / an',
      'local-3dev-yearly': '~12€ / an',
      'local-2dev-2yr': '~25€ / 2 ans',
      'local-3yr': '~20€ / 3 ans'
    },
    ru: {
      'local-yearly': '~₽450 / год',
      'local-2yr': '~₽1300 / 2 года',
      'local-lifetime': '~₽4500 навсегда',
      'local-2dev-yearly': '~₽700 / год',
      'local-3dev-yearly': '~₽1100 / год',
      'local-2dev-2yr': '~₽2200 / 2 года',
      'local-3yr': '~₽1800 / 3 года'
    },
    it: {
      'local-yearly': '~5€ / anno',
      'local-2yr': '~15€ / 2 anni',
      'local-lifetime': '~50€ a vita',
      'local-2dev-yearly': '~8€ / anno',
      'local-3dev-yearly': '~12€ / anno',
      'local-2dev-2yr': '~25€ / 2 anni',
      'local-3yr': '~20€ / 3 anni'
    }
  };
  
  const prices = pricesByLang[currentLang] || pricesByLang.ar;
  
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
  const t = i18n[currentLang] || i18n.ar;
  navigator.clipboard.writeText(text).then(() => {
    const originalText = btn.textContent;
    btn.textContent = t.copied;
    setTimeout(() => btn.textContent = t.copy_btn, 2000);
    playClickSound();
  }).catch(() => {
    // Fallback
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    btn.textContent = t.copied;
    setTimeout(() => btn.textContent = t.copy_btn, 2000);
  });
}

// ── CONTACT FORM ──
function handleContactForm(e) {
  e.preventDefault();
  playClickSound();
  
  const form = e.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  
  const t = i18n[currentLang] || i18n.ar;
  
  // Create WhatsApp message based on language
  const msgPrefixes = {
    ar: '*استفسار جديد من الموقع*',
    en: '*New Inquiry from Website*',
    fr: '*Nouvelle Demande du Site Web*',
    ru: *Новый Запрос с Сайта*,
    it: '*Nuova Richiesta dal Sito Web*'
  };
  
  const fieldLabels = {
    ar: { name: '*الاسم:*', email: '*البريد:*', subject: '*الموضوع:*', message: '*الرسالة:*' },
    en: { name: '*Name:*', email: '*Email:*', subject: '*Subject:*', message: '*Message:*' },
    fr: { name: '*Nom:*', email: '*Email:*', subject: '*Sujet:*', message: '*Message:*' },
    ru: { name: '*Имя:*', email: '*Email:*', subject: '*Тема:*', message: '*Сообщение:*' },
    it: { name: '*Nome:*', email: '*Email:*', subject: '*Oggetto:*', message: '*Messaggio:*' }
  };
  
  const prefix = msgPrefixes[currentLang] || msgPrefixes.ar;
  const labels = fieldLabels[currentLang] || fieldLabels.ar;
  
  const message = `${prefix}%0A%0A${labels.name} ${data.name}%0A${labels.email} ${data.email}%0A${labels.subject} ${data.subject}%0A${labels.message} ${data.message}`;
  
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
