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
  // PayPal Links for all plans (each plan has its own unique payment link)
  paypalLinks: {
    yearly: 'https://www.paypal.com/ncp/payment/S2MZ5XXCR65ZG',
    '2yearly': 'https://www.paypal.com/ncp/payment/FNR3E3UFRLSTC',
    '3yearly': 'https://www.paypal.com/ncp/payment/QF2GAKDECFGNJ',
    lifetime: 'https://www.paypal.com/ncp/payment/YR7KL36E3G6DW',
    '2dev-yearly': 'https://www.paypal.com/ncp/payment/UALYCA9GWSGYL',
    '3dev-yearly': 'https://www.paypal.com/ncp/payment/2GKPTJEBQF7KL',
    '2dev-2yr': 'https://www.paypal.com/ncp/payment/PMNSNED5TBWU8'
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
    nav_marketing: '📊 بيانات التسويق',
    nav_wacrm: '🟢 WA CRM',
    nav_wadefender: '🛡️ WaDefender',
    
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
    pm_paypal_note2: 'اضغط زر \'اشترِ الآن\' أو امسح QR أسفل الباقة التي تريدها في أعلى الصفحة، وسيتم توجيهك مباشرة لصفحة الدفع بالمبلغ الصحيح. بعد الدفع، أرسل اسم البريد الإلكتروني المستخدم عبر واتساب.',
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
    cf_desc: 'املأ النموذج أدناه وسنتواصل معك في أقرب وقت',
    cf_name_ph: 'أدخل اسمك الكامل',
    cf_subject_ph: 'اختر موضوع الرسالة',
    cf_msg_ph: 'اكتب رسالتك هنا بالتفصيل...',
    
    // Contact FAQ
    faq_contact_title: 'لم تجد إجابة لسؤالك؟',
    faq_contact_sub: 'قد تجد إجابة في أسئلتنا الشائعة',
    
    // Footer Links
    footer_privacy: 'سياسة الخصوصية',
    footer_refund: 'سياسة الاسترجاع',
    footer_terms: 'الشروط والأحكام',
    footer_purchase: 'سياسة الشراء',
    footer_whatsapp: 'واتساب',
    
    // Features Page Section Titles
    feat_msg_tools: '📨 أدوات الرسائل والإرسال',
    feat_extract_tools: '🔍 أدوات الاستخراج والبيانات',
    feat_mgmt_tools: '🛡️ الإدارة والحماية',
    
    // CTA Section
    cta_ready: 'جاهز تجرب كل هذه المميزات؟',
    cta_desc: 'حمّل البرنامج مجانًا وابدأ استخدم كل الأدوات فورًا',
    btn_subscribe: 'اشترك الآن',
    
    // View All Buttons
    view_all_features: 'عرض جميع المميزات ←',
    view_all_plans: 'عرض جميع الباقات ←',
    
    // Tutorial CTA
    cta_desc_tutorial: 'حمّل البرنامج مجانًا وابدأ رحلتك في التسويق عبر واتساب',
    
    // Footer
    footer_desc: 'برنامج احترافي للتسويق عبر واتساب مع أدوات متقدمة للرسائل الجماعية والأتمتة.',
    footer_quick: 'روابط سريعة',
    footer_legal: 'قانوني',
    footer_support: 'الدعم',
    footer_rights: 'جميع الحقوق محفوظة',
    
    // WA CRM Page
    wacrm_title: 'WA CRM - برنامج إدارة علاقات العملاء عبر واتساب',
    wacrm_desc: 'برنامج احترافي لإدارة علاقات العملاء عبر واتساب. تنظيم العملاء، تتبع المحادثات، وإدارة المبيعات بسهولة.',
    wacrm_badge: 'جديد',
    wacrm_hero_title: 'WA CRM<br>إدارة علاقات العملاء عبر الواتساب',
    wacrm_hero_sub: 'نظام متكامل لإدارة عملائك وتنظيم محادثات الواتساب وتتبع المبيعات بكفاءة عالية',
    wacrm_download: 'تحميل مجاني',
    wacrm_buy: 'اشترِ الآن - 20$/سنة',
    wacrm_feature1_title: 'إدارة جهات الاتصال', wacrm_feature1_desc: 'تنظيم جميع عملائك في مكان واحد مع إمكانية التصنيف والتصفية السريعة.',
    wacrm_feature2_title: 'تتبع المحادثات', wacrm_feature2_desc: 'تتبع جميع محادثات واتساب مع العملاء وتاريخ كامل للتواصل.',
    wacrm_feature3_title: 'إدارة المبيعات', wacrm_feature3_desc: 'تتبع المبيعات والطلبات وإعداد التقارير الشاملة لأداء فريق المبيعات.',
    wacrm_feature4_title: 'الردود السريعة', wacrm_feature4_desc: 'قوالب ردود جاهزة للاستخدام السريع مع إمكانية التخصيص الكامل.',
    wacrm_feature5_title: 'التقويم والمهام', wacrm_feature5_desc: 'جدولة المهام والمواعيد مع تذكيرات ذكية لإدارة وقتك بفعالية.',
    wacrm_feature6_title: 'التقارير والتحليلات', wacrm_feature6_desc: 'تقارير شاملة وتحليلات مفصلة لأداء المبيعات وتفاعل العملاء.',
    wacrm_how_title: 'كيف يعمل WA CRM؟',
    wacrm_how_sub: 'ثلاث خطوات بسيطة لإدارة عملائك باحترافية',
    wacrm_step1_title: 'حمّل البرنامج', wacrm_step1_desc: 'حمّل WA CRM مجانًا وثبّته على جهازك بخطوات بسيطة.',
    wacrm_step2_title: 'اشترك وفعّل', wacrm_step2_desc: 'اشتراك سنوي بسعر 20$ فقط واحصل على كود التفعيل فوراً.',
    wacrm_step3_title: 'ابدأ الإدارة', wacrm_step3_desc: 'أدخل بيانات عملائك وابدأ إدارة علاقاتهم باحترافية.',
    wacrm_price_title: 'خطة واحدة شاملة',
    wacrm_price_amount: '20',
    wacrm_price_period: '/ سنة',
    wacrm_price_feat1: 'جميع الميزات المتاحة',
    wacrm_price_feat2: 'تحديثات مجانية مستمرة',
    wacrm_price_feat3: 'دعم فني مباشر 24/7',
    wacrm_price_feat4: 'ترخيص لجهاز واحد',
    wacrm_cta_ready: 'جاهز لإدارة عملائك باحترافية؟',
    wacrm_cta_desc: 'حمّل WA CRM الآن وابدأ تنظيم علاقات عملائك من اليوم',
    
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
    vid10_desc: 'شرح أحدث طريقة لإنشاء حملة إعلانية عبر واتساب مع أفضل الممارسات لتقليل نسبة الحظر.',

    // ── FAQ (contact page) ──
    faq_sub: 'قد تجد إجابة في أسئلتنا الشائعة',

    // ── Page titles & meta descriptions (used for document.title / meta description switching) ──
    title_home: 'WA Sender - تحميل برنامج واتساب سيندر + شرح التفعيل وأسعار الاشتراك',
    desc_home: 'حمّل برنامج واتساب سيندر (WA Sender v5.0.7) مجانًا: إرسال رسائل جماعية، بوت رد تلقائي، حماية من الحظر، واستخراج أعضاء المجموعات. شاهد شرح التفعيل بالفيديو واطّلع على أسعار الاشتراك وطرق الدفع.',
    title_features: 'مميزات WA Sender v5.0.7 - أكثر من 15 أداة احترافية | WA Sender',
    desc_features: 'اكتشف جميع مميزات برنامج WA Sender: إرسال رسائل جماعية، بوت رد تلقائي، استخراج الأعضاء، فلتر الأرقام، جدولة الحملات، وأكثر من 15 أداة احترافية.',
    title_pricing: 'أسعار واشتراكات WA Sender - خطط مرنة لكل الاحتياجات | WA Sender',
    desc_pricing: 'اختر خطة اشتراك WA Sender المناسبة لك: سنة، سنتين، 3 أعوام، أو مدى الحياة. أسعار تبدأ من 5 دولار فقط. طرق دفع متعددة.',
    title_contact: 'اتصل بنا - WA Sender | دعم فني واستفسارات',
    desc_contact: 'تواصل مع فريق دعم WA Sender عبر واتساب أو البريد الإلكتروني. نحن هنا لمساعدتك في أي استفسار أو مشكلة تقنية.',
    title_tutorial: 'شرح برنامج WA Sender - فيديوهات تعليمية خطوة بخطوة | WA Sender',
    desc_tutorial: 'شاهد فيديوهات شرح كاملة لبرنامج WA Sender: التثبيت، التفعيل، إرسال الرسائل الجماعية، استخراج الأعضاء، وكل الأدوات خطوة بخطوة.',
    title_privacy: 'سياسة الخصوصية - WA Sender | كيف نحمي بياناتك',
    desc_privacy: 'اقرأ سياسة الخصوصية الخاصة بـ WA Sender. نلتزم بحماية بياناتك الشخصية وعدم مشاركتها مع أطراف ثالثة.',
    title_purchase: 'سياسة الشراء - WA Sender | طرق الدفع والتراخيص',
    desc_purchase: 'اقرأ سياسة الشراء الخاصة بـ WA Sender: طرق الدفع المتاحة، تفاصيل الترخيص، وشروط الشراء.',
    title_refund: 'سياسة الاسترجاع - WA Sender | شروط إعادة المبلغ',
    desc_refund: 'اقرأ سياسة الاسترجاع الخاصة بـ WA Sender. نوضح شروط استرداد الأموال وإجراءات طلب الاسترجاع.',
    title_terms: 'الشروط والأحكام - WA Sender | شروط الاستخدام',
    desc_terms: 'اقرأ الشروط والأحكام الخاصة باستخدام برنامج WA Sender وموقع wasendernew.com.',

    // ── Legal Pages: Privacy / Purchase / Refund / Terms (full content) ──
    legal_last_update: 'آخر تحديث: يناير 2024',
    pv01: '1. مقدمة',
    pv02: 'نحن في WA Sender ملتزمون بحماية خصوصيتك. توضح هذه السياسة كيف نجمع ونستخدم ونحمي معلوماتك الشخصية عند استخدامك لموقعنا الإلكتروني وبرنامج WA Sender.',
    pv03: 'باستخدام موقعنا أو برنامجنا، فإنك توافق على الممارسات الموضحة في سياسة الخصوصية هذه.',
    pv04: '2. المعلومات التي نجمعها',
    pv05: '2.1 المعلومات التي تقدمها طوعاً:',
    pv06: '<strong>معلومات الاتصال:</strong> الاسم الكامل، عنوان البريد الإلكتروني، رقم الهاتف عند التواصل معنا أو شراء ترخيص.',
    pv07: '<strong>معلومات الدفع:</strong> بيانات الدفع اللازمة لمعالجة مشترياتك (يتم معالجتها عبر بوابات دفع آمنة ولا نخزنها مباشرة).',
    pv08: '<strong>المسائل التقنية:</strong> أي معلومات تقدمها عند الإبلاغ عن مشكلة تقنية أو طلب دعم فني.',
    pv09: '2.2 المعلومات التي يتم جمعها تلقائياً:',
    pv10: '<strong>بيانات التصفح:</strong> نوع المتصفح، نظام التشغيل، عناوين IP، صفحات الموقع التي زرتها، وقت وتاريخ الزيارة.',
    pv11: '<strong>ملفات تعريف الارتباط (Cookies):</strong> نستخدم ملفات تعريف الارتباط لتحسين تجربتك على الموقع. يمكنك تعطيلها من إعدادات المتصفح.',
    pv12: '<strong>بيانات التحليلات:</strong> نستخدم أدوات تحليلات مجهولة المصدر لفهم كيف يستخدم الزوار موقعنا.',
    pv13: '3. كيف نستخدم معلوماتك',
    pv14: 'نستخدم المعلومات التي نجمعها للأغراض التالية:',
    pv15: 'تقديم وتشغيل وحماية خدماتنا (بما في ذلك استكشاف الأخطاء وإصلاحها).',
    pv16: 'معالجة المعاملات وإرسال معلومات ذات صلة بالشراء.',
    pv17: 'الرد على استفساراتك وتقديم الدعم الفني.',
    pv18: 'تحسين خدماتنا وتطوير ميزات جديدة.',
    pv19: 'إرسال إشعارات مهمة حول الخدمة (إن وجدت).',
    pv20: 'الامتثال للالتزامات القانونية والتنظيمية.',
    pv21: '4. مشاركة المعلومات',
    pv22: 'لا نبيع أو نتاجر أوؤجر معلوماتك الشخصية لأطراف ثالثة. قد نشارك معلوماتك فقط في الحالات التالية:',
    pv23: '<strong>مقدمو الخدمات:</strong> شركات تساعدنا في تشغيل أعمالنا (بوابات الدفع، استضافة الخوادم) ولديهم التزام بحماية بياناتك.',
    pv24: '<strong>المتطلبات القانونية:</strong> عندما يكون ذلك مطلوباً بموجب القانون أو لحماية حقوقنا أو سلامة مستخدمينا.',
    pv25: '<strong>موافقتك:</strong> عندما تعطينا موافقة صريحة على مشاركة معلوماتك.',
    pv26: '5. أمان البيانات',
    pv27: 'نتخذ إجراءات أمنية تقنية وتنظيمية مناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التعديل أو الإفصاح أو التدمير. ومع ذلك، لا يمكن ضمان أمان أي نقل بيانات عبر الإنترنت بنسبة 100%.',
    pv28: '6. حقوقك',
    pv29: 'لديك الحق في:',
    pv30: 'الوصول إلى بيانات الشخصية التي نحتفظ بها عنك.',
    pv31: 'طلب تصحيح أي معلومات غير دقيقة.',
    pv32: 'طلب حذف بياناتك الشخصية (مع بعض الاستثناءات).',
    pv33: 'الاعتراض على معالجة بياناتك لأغراض التسويق المباشر.',
    pv34: 'سحب موافقتك في أي وقت.',
    pv35: '7. الاحتفاظ بالبيانات',
    pv36: 'نحتفظ بمعلوماتك الشخصية فقط للمدة اللازمة لتحقيق الأغراض الموضحة في هذه السياسة، ما لم يتطلب القانون فترة احتفاظ أطول.',
    pv37: '8. روابط المواقع الخارجية',
    pv38: 'قد يحتوي موقعنا على روابط لمواقع خارجية. نحن مسؤولون عن محتوى هذه المواقع الخارجية ولا نتحمل مسؤولية ممارسات الخصوصية الخاصة بها.',
    pv39: '9. تغييرات هذه السياسة',
    pv40: 'قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنُعلِن عن أي تغييرات مهمة عبر نشر السياسة الجديدة على هذه الصفحة مع تحديث "آخر تحديث".',
    pv41: '10. اتصل بنا',
    pv42: 'إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا عبر:',
    legal_contact_whatsapp: '<strong>واتساب:</strong> <a href="https://wa.me/201279934735" target="_blank">+20 127 993 4735</a>',
    legal_contact_email: '<strong>البريد الإلكتروني:</strong> <a href="mailto:support@wasendernew.com">support@wasendernew.com</a>',
    pp01: '1. مقدمة',
    pp02: 'توضح هذه السياسة شروط وأحكام شراء واستخدام تراخيص برنامج WA Sender. بشرائك ترخيص WA Sender، فإنك توافق على الالتزام بهذه الشروط.',
    pp03: '2. أنواع التراخيص والأسعار',
    pp04: 'نقدم عدة خطط اشتراك لتلبية احتياجات مختلفة:',
    pp05: '2.1 خطط الجهاز الواحد:',
    pp06: '<strong>اشتراك سنوي:</strong> 5 دولار أمريكي - صالح لمدة سنة واحدة على جهاز واحد.',
    pp07: '<strong>اشتراك لسنتين:</strong> 15 دولار أمريكي - صالح لمدة سنتين على جهاز واحد.',
    pp08: '<strong>اشتراك 3 أعوام:</strong> 20 دولار أمريكي - صالح لمدة 3 أعوام على جهاز واحد.',
    pp09: '<strong>اشتراك مدى الحياة:</strong> 50 دولار أمريكي - صالح مدى الحياة على جهاز واحد مع تحديثات دائمة.',
    pp10: '2.2 خطط الأجهزة المتعددة:',
    pp11: '<strong>جهازان / سنة:</strong> 8 دولار أمريكي - رخصتان لجهازين مختلفين.',
    pp12: '<strong>3 أجهزة / سنة:</strong> 12 دولار أمريكي - 3 رخص لـ 3 أجهزة مختلفة.',
    pp13: '<strong>جهازان / سنتان:</strong> 25 دولار أمريكي - رخصتان لجهازين لمدة سنتين.',
    pp14: '3. طرق الدفع المقبولة',
    pp15: 'قبلول عدة طرق دفع لتسهيل عملية الشراء:',
    pp16: '<strong>فودافون كاش (مصر):</strong> تحويل فوري للمحفظة.',
    pp17: '<strong>تطبيق برق (السعودية):</strong> تحويل دولي للسعودية.',
    pp18: '<strong>InstaPay (مصر):</strong> تحويل مباشر من مصر.',
    pp19: '<strong>التحويل البنكي (IBAN السعودية):</strong> عبر بنك D360 FINTECH.',
    pp20: '<strong>PayPal / فيزا:</strong> دفع دولي آمن بالبطاقة البنكية.',
    pp21: '4. عملية التفعيل',
    pp22: 'قم بتحميل البرنامج مجاناً من موقعنا.',
    pp23: 'اختر الخطة المناسبة لك من صفحة الأسعار.',
    pp24: 'أتمم الدفع بإحدى الطرق المتاحة.',
    pp25: 'أرسل إيصال الدفع عبر واتساب على الرقم: +20 127 993 4735',
    pp26: 'ستتلقى كود التفعيل خلال دقائق (قد تصل إلى 24 ساعة للتحويلات البنكية).',
    pp27: 'أدخل كود التفعيل داخل البرنامج لتفعيل جميع الميزات.',
    pp28: '5. شروط الترخيص',
    pp29: 'كل ترخيص صالح لجهاز واحد فقط (ما لم يكن ترخيص أجهزة متعددة).',
    pp30: 'لا يجوز مشاركة كود التفعيل مع أشخاص آخرين.',
    pp31: 'الترخيص غير قابل للتحويل أو إعادة البيع.',
    pp32: 'في حالة تغيير الجهاز، تواصل معنا لنقل الرخصة مجاناً.',
    pp33: 'التحديثات المجانية متاحة خلال فترة الاشتراك الصالحة.',
    pp34: '6. ضمان الأسعار',
    pp35: 'نحتفظ بالحق في تغيير أسعارنا في أي وقت. ومع ذلك، إذا قمت بشراء اشتراك، فإن السعر الذي دفعته سيظل سارياً طوال فترة الاشتراك الخاصة بك.',
    pp36: '7. الفواتير والإيصالات',
    pp37: 'عند إتمام الدفع، يمكنك طلب إيصال رسمي عبر واتساب أو البريد الإلكتروني. يحتوي الإيصال على تفاصيل المشترى وتاريخ الدفع والمبلغ المدفوع.',
    pp38: '8. المشاكل التقنية بعد الشراء',
    pp39: 'إذا واجهت أي مشكلة تقنية في تثبيت البرنامج أو تفعيله:',
    pp40: 'تواصل معنا فوراً عبر واتساب أو البريد الإلكتروني.',
    pp41: 'صف المشكلة بالتفصيل مع لقطة شاشة إن أمكن.',
    pp42: 'سيقوم فريق الدعم بحل مشكلتك في أقرب وقت ممكن (خلال 24 ساعة كحد أقصى).',
    pp43: '9. اتصل بنا',
    pp44: 'للاستفسارات المتعلقة بالشراء أو الدفع:',
    rf01: '1. سياسة الاسترجاع العامة',
    rf02: 'نحن في WA Sender ملتزمون بتقديم منتج عالي الجودة وخدمة عملاء ممتازة. نظرًا للطبيعة الرقمية لمنتجنا (برنامج مع ترخيص)، فإن سياسة الاسترجاع لدينا محدودة ولكننا نسعى لتلبية توقعات عملائنا.',
    rf03: '2. حالات الاستحقاق للاسترجاع',
    rf04: '2.1 الاسترجاع الكامل (ضمان 7 أيام):',
    rf05: 'نقدم ضمان استرجاع كامل خلال <strong>7 أيام</strong> من تاريخ الشراء في الحالات التالية:',
    rf06: 'إذا كان البرنامج لا يعمل على جهازك رغم مساعدة فريق الدعم الفني.',
    rf07: 'إذا كان هناك خلل تقني كبير يمنع استخدام جميع الميزات الأساسية.',
    rf08: 'إذا لم يتم تفعيل ترخيصك خلال 48 ساعة من الدفع (بعد تواصلك معنا).',
    rf09: '2.2 الاسترجاع الجزئي:',
    rf10: 'في بعض الحالات، قد نعرض استرجاع جزئي بنسبة تتراوح بين 50-70%:',
    rf11: 'إذا تغيرت احتياجاتك بعد شراء الاشتراك.',
    rf12: 'إذا وجدت أن البرنامج لا يناسب متطلباتك المحددة.',
    rf13: 'في حالة وجود مشاكل تقبية تم حلها جزئياً.',
    rf14: '3. حالات عدم الاستحقاق للاسترجاع',
    rf15: 'لا يمكن طلب استرجاع في الحالات التالية:',
    rf16: 'بعد مرور 14 يوم من تاريخ الشراء.',
    rf17: 'إذا تم استخدام الترخيص بالفعل لإرسال حملات (حتى لو كانت تجريبية).',
    rf18: 'في حالة انتهاك شروط الاستخدام أو سياسات واتساب/Meta.',
    rf19: 'إذا تم مشاركة كود التفعيل مع مستخدمين آخرين.',
    rf20: 'إذا كان طلب الاسترجاع بسبب حظر رقم الواتساب (انظر إرشادات الحماية من الحظر).',
    rf21: '4. كيفية طلب الاسترجاع',
    rf22: 'لطلب استرجاع، يرجى اتباع الخطوات التالية:',
    rf23: 'تواصل معنا عبر واتساب على: <a href="https://wa.me/201279934735" target="_blank">+20 127 993 4735</a>',
    rf24: 'أو أرسل بريداً إلكترونياً إلى: <a href="mailto:support@wasendernew.com">support@wasendernew.com</a>',
    rf25: 'اذكر سبب طلب الاسترجاع بالتفصيل.',
    rf26: 'أرفق إيصال الدفع الأصلي إن أمكن.',
    rf27: 'صف المشكلة التي واجهتها (إن وجدت) مع لقطات شاشة.',
    rf28: '5. معالجة طلب الاسترجاع',
    rf29: '<strong>وقت المراجعة:</strong> سنراجع طلبك خلال 48 ساعة عمل.',
    rf30: '<strong>وقت المعالجة:</strong> في حالة الموافقة، سيتم معالجة الاسترجاع خلال 5-10 أيام عمل.',
    rf31: '<strong>طريقة الاسترجاع:</strong> سيتم إعادة المبلغ بنفس طريقة الدفع الأصلية.',
    rf32: '<strong>التأكيد:</strong> ستتلقى تأكيداً عبر البريد الإلكتروني عند معالجة الاسترجاع.',
    rf33: '6. بدائل الاسترجاع',
    rf34: 'بدلاً من الاسترجاع، قد نعرض البدائل التالية:',
    rf35: '<strong>تمديد فترة الاشتراك:</strong> إضافة وقت مجاني لاشتراكك.',
    rf36: '<strong>ترقية مجانية:</strong> الترقية إلى خطة أعلى بدون دفع فرق السعر.',
    rf37: '<strong>نقل الترخيص:</strong> نقل الترخيص لجهاز آخر إذا كان الجهاز الحالي غير متوافق.',
    rf38: '<strong>جلسة تدريب إضافية:</strong> جلسة خاصة عبر واتساب لشرح كيفية استخدام البرنامج بشكل صحيح.',
    rf39: '7. ملاحظة هامة بخصوص حظر واتساب',
    rf40: '<strong>⚠️ تنبيه مهم:</strong> حظر رقم واتساب ليس سبباً لاسترجاع المبلغ. نقدم إرشادات مفصلة للحماية من الحظر في صفحة "شرح البرنامج" وفي البرنامج نفسه. يتحمل المستخدم مسؤولية اتباع هذه الإرشادات وتطبيق أفضل الممارسات. نوصي بشدة بقراءة دليل الحماية من الحظر قبل استخدام البرنامج لإرسال أي رسائل.',
    rf41: '8. الأسئلة الشائعة حول الاسترجاع',
    rf42: 'س: هل يمكنني تجربة البرنامج قبل الشراء؟',
    rf43: 'ج: نعم! يمكنك تحميل البرنامج مجاناً وتجربة جميع الميزات. الدفع مطلوب فقط لتفعيل الترخيص.',
    rf44: 'س: ماذا إذا لم يعمل البرنامج على جهازي؟',
    rf45: 'ج: يتطلب WA Sender Windows 10 أو أحدث. إذا كان جهازك متوافقاً ولكنه لا يزال لا يعمل، تواصل معنا وسنساعدك. إذا لم نتمكن من حل المشكلة، يمكنك طلب استرجاع خلال 7 أيام.',
    rf46: 'س: هل يمكنني تغيير رأي بعد شراء اشتراك مدى الحياة؟',
    rf47: 'ج: نعم، يمكنك طلب استرجاع خلال 7 أيام من الشراء إذا لم تستخدم الترخيص. بعد ذلك، لا يمكننا قبول طلبات الاسترجاع لاشتراكات مدى الحياة.',
    rf48: '9. اتصل بنا',
    rf49: 'للاستفسارات حول سياسة الاسترجاع أو لتقديم طلب:',
    tm01: '1. قبول الشروط',
    tm02: 'باستخدام موقع wasendernew.com أو برنامج WA Sender، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا لا توافق على أي من هذه الشروط، يرجى عدم استخدام خدماتنا.',
    tm03: '2. وصف الخدمة',
    tm04: 'WA Sender هو برنامج تسويق عبر واتساب يوفر أدوات لإرسال الرسائل الجماعية، الأتمتة، وإدارة الحملات التسويقية. البرنامج مصمم للاستخدام الشخصي والتجاري ضمن حدود قوانين وسياسات Meta/WhatsApp.',
    tm05: '3. الشروط المؤهلة للاستخدام',
    tm06: 'ل استخدام WA Sender، يجب أن:',
    tm07: 'كنت في السن القانونية (18 سنة أو أكثر) في بلدك.',
    tm08: 'تمتلك أهلية قانونية لإبرام اتفاقية ملزمة.',
    tm09: 'توفر معلومات دقيقة وصحيحة عند التسجيل أو الشراء.',
    tm10: 'تحافظ على سرية بيانات حسابك.',
    tm11: '4. الاستخدام المسموح',
    tm12: 'يوافق المستخدم على استخدام WA Sender للأغراض التالية فقط:',
    tm13: 'إرسال رسائل تسويقية مشروعة لأرقام حصلت على موافقتها.',
    tm14: 'إدارة حملات التسويق عبر واتساب بشكل احترافي.',
    tm15: 'أتمتة الردود على استفسارات العملاء المشروعة.',
    tm16: 'استخراج البيانات المتاحة للعامة لأغراض تسويقية مشروعة.',
    tm17: '5. الاستخدام الممنوع',
    tm18: '<strong>يُحظر صراحةً</strong> استخدام البرنامج للأغراض التالية:',
    tm19: 'إرسال رسائل سبام أو غير مرغوب فيها.',
    tm20: 'إرسال محتوى ضار أو احتيالي أو غير قانوني.',
    tm21: 'انتهاك خصوصية الآخرين أو حقوقهم.',
    tm22: 'محاولة اختراق أو إتلاف أنظمة واتساب أو Meta.',
    tm23: 'مشاركة كود التفعيل أو بيعه أو توزيعه.',
    tm24: 'عكس هندسة البرنامج أو تعديله أو نسخه.',
    tm25: 'استخدامه لأي غرض يتعارض مع شروط خدمة واتساب/Meta.',
    tm26: '6. المسؤولية تجاه واتساب/Meta',
    tm27: '<strong>⚠️ تنبيه مهم:</strong> WA Sender ليس مرتبطاً بـ Meta أو WhatsApp أو Facebook أو أي شركة تابعة لها. استخدام هذا البرنامج قد ينتهك شروط خدمة واتساب. أنت وحدك تتحمل كامل المسؤولية عن أي عواقب ناتجة عن استخدامك للبرنامج، بما في ذلك على سبيل المثال لا الحصر حظر حسابك على واتساب أو اتخاذ إجراءات قانونية ضدك.',
    tm28: '7. الملكية الفكرية',
    tm29: 'جميع الحقوق في WA Sender مملوكة لفريق التطوير.',
    tm30: 'البرنامج محمي بقوانين حقوق النشر الدولية.',
    tm31: 'لا يحق لك نسخ أو تعديل أو توزيع البرنامج دون إذن كتابي صريح.',
    tm32: 'الشعار والأيقونات والتصميم هي ملك لـ WA Sender.',
    tm33: '8. الترخيص والاستخدام',
    tm34: 'عند شرائك ترخيص، تحصل على حق شخصي وغير قابل للنقل لاستخدام البرنامج.',
    tm35: 'كل ترخيص صالح لجهاز واحد فقط (ما لم يكن ترخيص أجهزة متعددة).',
    tm36: 'لا يجوز تأجير أو إعارة أو بيع الترخيص لأطراف ثالثة.',
    tm37: 'نحتفظ بالحق في إلغاء الترخيص في حالة انتهاك هذه الشروط.',
    tm38: '9. إخلاء المسؤولية',
    tm39: 'يُقدم البرنامج "كما هو" بدون أي ضمانات صريحة أو ضمنية. نحن لا نضمن:',
    tm40: 'أن البرنامج سيعمل بدون انقطاع أو أخطاء.',
    tm41: 'أن نتائج استخدام البرنامج ستلبي توقعاتك.',
    tm42: 'أن استخدام البرنامج لن يؤدي إلى حظر رقم واتسابك.',
    tm43: 'أن جميع الميزات ستكون متوفرة بشكل مستمر.',
    tm44: '10. حد المسؤولية',
    tm45: 'في أقصى الحالات المسموحة بها، لن تتجاوز مسؤوليتنا الإجمالية المبلغ الذي دفعته مقابل الترخيص. لن نكون مسؤولين عن:',
    tm46: 'أي أضرار مباشرة أو غير مباشرة أو عرضية أو تبعية ناتجة عن استخدام أو عدم القدرة على استخدام البرنامج.',
    tm47: 'فقدان البيانات أو الأرباح أو الفرص التجارية.',
    tm48: 'حظر حسابك على واتساب أو أي منصة أخرى.',
    tm49: 'أي إجراءات قانونية من طرف ثالث ضدك.',
    tm50: '11. التعويض',
    tm51: 'توافق على تعويض وإعفاء WA Sender وفريقه وموظفيه وشركائه من أي مطالبات أو خسائر أو أضرار (بما فيها رسوم المحاماة) ناتجة عن:',
    tm52: 'استخدامك للبرنامج.',
    tm53: 'انتهاكك لهذه الشروط.',
    tm54: 'انتهاكك لحقوق الغير.',
    tm55: '12. التعديلات على الشروط',
    tm56: 'نحتفظ بالحق في تعديل هذه الشروط في أي وقت. التعديلات سارية المفعول فور نشرها على الموقع. استمرارك في استخدام البرنامج بعد التعديلات يعني قبولك لها.',
    tm57: '13. القانون الواجب التطبيق',
    tm58: 'تخضع هذه الشروط وتفسر وفقاً للقوانين المعمول بها. أي نزاعات تنشأ عن هذه الشروط ستخضع للولاية القضائية الحصرية للمحاكم المختصة.',
    tm59: '14. الاتصال بنا',
    tm60: 'للاستفسارات حول هذه الشروط:',

    // WaDefender Page
    wadefender_title: 'WaDefender - محلل قوة حساب واتساب',
    wadefender_desc: 'أداة احترافية لفحص وتحليل قوة حسابك على واتساب',
    wadefender_badge: '🛡️ أداة حماية متقدمة',
    wadefender_hero_title: 'WaDefender<br>محلل قوة حساب واتساب',
    wadefender_hero_sub: 'أداة احترافية لفحص وتحليل قوة حسابك على واتساب، اكتشف نقاط الضعف وقوِّ حسابك ضد خطر الحظر.',
    wadefender_download: 'تحميل مجاني',
    wadefender_buy: 'اشترك الآن - 5$/سنة',
    wadefender_feature1_title: 'تحليل قوة الحساب',
    wadefender_feature1_desc: 'فحص شامل لحالة حساب واتساب الخاصك مع تقرير مفصل عن نقاط القوة والضعف.',
    wadefender_feature2_title: 'فحص صحة الأرقام',
    wadefender_feature2_desc: 'التحقق من نشاط أرقام واتساب ومعرفة إذا كانت مسجلة أو محظورة.',
    wadefender_feature3_title: 'حماية من الحظر',
    wadefender_feature3_desc: 'تقييم مخاطر الحظر على حسابك وإجراءات وقائية للحماية.',
    wadefender_feature4_title: 'تقارير تفصيلية',
    wadefender_feature4_desc: 'تقارير شاملة ومحدثة عن حالة حسابك.',
    wadefender_how_title: 'ابدأ في 3 خطوات بسيطة',
    wadefender_step1_title: 'حمّل البرنامج',
    wadefender_step1_desc: 'حمّل WaDefender مجانًا وثبته على جهازك.',
    wadefender_step2_title: 'اشترك وفعّل',
    wadefender_step2_desc: 'اشترك بسعر 5 دولار فقط للسنة الكاملة.',
    wadefender_step3_title: 'ابدأ التحليل',
    wadefender_step3_desc: 'أدخل كود التفعيل وابدأ فحص حسابك.',
    wadefender_price_title: 'الباقة السنوية',
    wadefender_price_amount: '$5',
    wadefender_price_period: '/ سنة',

    // Gulf Data Packages
    kuwait_title: 'باقة الكويت',
    kuwait_count: '2 مليون رقم',
    kuwait_price: '$25 USD',
    uae_title: 'باقة الإمارات',
    uae_count: '1 مليون رقم',
    uae_price: '$15 USD',
    gulf_title: 'باقة دول الخليج مجمعة',
    gulf_count: '+10 ملايين رقم',
    gulf_price: '$250 USD'
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
    pm_paypal_note2: 'Click \'Buy Now\' or scan the QR code below the plan you want above, and you will be taken directly to the payment page with the correct amount. After payment, send the email address used via WhatsApp.',
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
    cf_desc: 'Fill out the form below and we\'ll get back to you as soon as possible',
    cf_name_ph: 'Enter your full name',
    cf_subject_ph: 'Select message subject',
    cf_msg_ph: 'Write your message here in detail...',
    
    // Contact FAQ
    faq_contact_title: 'Didn\'t find an answer to your question?',
    faq_contact_sub: 'You may find an answer in our frequently asked questions',
    
    // Footer Links
    footer_privacy: 'Privacy Policy',
    footer_refund: 'Refund Policy',
    footer_terms: 'Terms & Conditions',
    footer_purchase: 'Purchase Policy',
    footer_whatsapp: 'WhatsApp',
    
    // Features Page Section Titles
    feat_msg_tools: '📨 Messaging & Sending Tools',
    feat_extract_tools: '🔍 Extraction & Data Tools',
    feat_mgmt_tools: '🛡️ Management & Protection',
    
    // CTA Section
    cta_ready: 'Ready to try all these features?',
    cta_desc: 'Download the program for free and start using all tools immediately',
    btn_subscribe: 'Subscribe Now',
    
    // View All Buttons
    view_all_features: 'View All Features →',
    view_all_plans: 'View All Plans →',
    
    // Tutorial CTA
    cta_desc_tutorial: 'Download the program for free and start your WhatsApp marketing journey',
    footer_desc: 'Professional WhatsApp marketing software with advanced tools for bulk messaging and automation.',
    footer_quick: 'Quick Links',
    footer_legal: 'Legal',
    footer_support: 'Support',
    footer_rights: 'All rights reserved',
    
    // WA CRM Page
    wacrm_title: 'WA CRM - WhatsApp Customer Relationship Management',
    wacrm_desc: 'Professional software for managing customer relationships via WhatsApp. Organize clients, track conversations, and manage sales easily.',
    wacrm_badge: 'New',
    wacrm_hero_title: 'WA CRM<br>WhatsApp Customer Management',
    wacrm_hero_sub: 'Complete system to manage your clients, organize WhatsApp conversations, and track sales with high efficiency',
    wacrm_download: 'Free Download',
    wacrm_buy: 'Buy Now - $20/year',
    wacrm_feature1_title: 'Contact Management', wacrm_feature1_desc: 'Organize all your clients in one place with quick categorization and filtering.',
    wacrm_feature2_title: 'Conversation Tracking', wacrm_feature2_desc: 'Track all WhatsApp conversations with clients and complete communication history.',
    wacrm_feature3_title: 'Sales Management', wacrm_feature3_desc: 'Track sales and orders and generate comprehensive reports for your sales team performance.',
    wacrm_feature4_title: 'Quick Replies', wacrm_feature4_desc: 'Ready-to-use reply templates for quick responses with full customization options.',
    wacrm_feature5_title: 'Calendar & Tasks', wacrm_feature5_desc: 'Schedule tasks and appointments with smart reminders for effective time management.',
    wacrm_feature6_title: 'Reports & Analytics', wacrm_feature6_desc: 'Comprehensive reports and detailed analytics for sales performance and customer engagement.',
    wacrm_how_title: 'How does WA CRM work?',
    wacrm_how_sub: 'Three simple steps to professionally manage your clients',
    wacrm_step1_title: 'Download the Program', wacrm_step1_desc: 'Download WA CRM for free and install it on your device in simple steps.',
    wacrm_step2_title: 'Subscribe & Activate', wacrm_step2_desc: 'Annual subscription for only $20 and get your activation code instantly.',
    wacrm_step3_title: 'Start Managing', wacrm_step3_desc: 'Enter your client data and start managing their relationships professionally.',
    wacrm_price_title: 'One Comprehensive Plan',
    wacrm_price_amount: '20',
    wacrm_price_period: '/ year',
    wacrm_price_feat1: 'All features included',
    wacrm_price_feat2: 'Free continuous updates',
    wacrm_price_feat3: '24/7 direct support',
    wacrm_price_feat4: 'Single device license',
    wacrm_cta_ready: 'Ready to manage your clients professionally?',
    wacrm_cta_desc: 'Download WA CRM now and start organizing your client relationships today',
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
    vid10_desc: 'Learn the latest method for creating an ad campaign via WhatsApp with best practices to reduce ban rate.',

    // ── FAQ (contact page) ──
    faq_sub: 'You might find an answer in our FAQ',

    // ── Page titles & meta descriptions (used for document.title / meta description switching) ──
    title_home: 'WA Sender - Download WhatsApp Sender Software + Activation Guide & Pricing',
    desc_home: 'Download WA Sender (v5.0.7) for free: bulk messaging, auto-reply bot, anti-ban protection, and group member extraction. Watch the video activation guide and check subscription prices and payment methods.',
    title_features: 'WA Sender v5.0.7 Features - 15+ Professional Tools | WA Sender',
    desc_features: 'Discover all WA Sender features: bulk messaging, auto-reply bot, member extraction, number filtering, campaign scheduling, and over 15 professional tools.',
    title_pricing: 'WA Sender Pricing & Subscriptions - Flexible Plans for Every Need | WA Sender',
    desc_pricing: 'Choose the WA Sender subscription plan that suits you: 1 year, 2 years, 3 years, or lifetime. Prices start from just $5. Multiple payment methods available.',
    title_contact: 'Contact Us - WA Sender | Technical Support & Inquiries',
    desc_contact: 'Get in touch with the WA Sender support team via WhatsApp or email. We\'re here to help with any question or technical issue.',
    title_tutorial: 'WA Sender Tutorial - Step-by-Step Video Guides | WA Sender',
    desc_tutorial: 'Watch complete tutorial videos for WA Sender: installation, activation, sending bulk messages, member extraction, and all tools step by step.',
    title_privacy: 'Privacy Policy - WA Sender | How We Protect Your Data',
    desc_privacy: 'Read the WA Sender Privacy Policy. We are committed to protecting your personal data and never sharing it with third parties.',
    title_purchase: 'Purchase Policy - WA Sender | Payment Methods & Licensing',
    desc_purchase: 'Read the WA Sender Purchase Policy: available payment methods, license details, and terms of purchase.',
    title_refund: 'Refund Policy - WA Sender | Terms of Reimbursement',
    desc_refund: 'Read the WA Sender Refund Policy. We explain the terms for refunds and how to submit a refund request.',
    title_terms: 'Terms & Conditions - WA Sender | Terms of Use',
    desc_terms: 'Read the Terms and Conditions for using the WA Sender software and the wasendernew.com website.',

    // ── Legal Pages: Privacy / Purchase / Refund / Terms (full content) ──
    legal_last_update: 'Last updated: January 2024',
    legal_contact_whatsapp: '<strong>WhatsApp:</strong> <a href="https://wa.me/201279934735" target="_blank">+20 127 993 4735</a>',
    legal_contact_email: '<strong>Email:</strong> <a href="mailto:support@wasendernew.com">support@wasendernew.com</a>',
    pv01: '1. Introduction',
    pv02: 'At WA Sender, we are committed to protecting your privacy. This policy explains how we collect, use, and protect your personal information when you use our website and the WA Sender software.',
    pv03: 'By using our website or software, you agree to the practices described in this Privacy Policy.',
    pv04: '2. Information We Collect',
    pv05: '2.1 Information you provide voluntarily:',
    pv06: '<strong>Contact information:</strong> Full name, email address, phone number when you contact us or purchase a license.',
    pv07: '<strong>Payment information:</strong> Payment details needed to process your purchases (processed via secure payment gateways; we do not store them directly).',
    pv08: '<strong>Technical matters:</strong> Any information you provide when reporting a technical issue or requesting support.',
    pv09: '2.2 Information collected automatically:',
    pv10: '<strong>Browsing data:</strong> Browser type, operating system, IP addresses, pages visited, and date/time of visit.',
    pv11: '<strong>Cookies:</strong> We use cookies to improve your experience on the site. You can disable them from your browser settings.',
    pv12: '<strong>Analytics data:</strong> We use anonymous analytics tools to understand how visitors use our site.',
    pv13: '3. How We Use Your Information',
    pv14: 'We use the information we collect for the following purposes:',
    pv15: 'Providing, operating, and protecting our services (including troubleshooting).',
    pv16: 'Processing transactions and sending purchase-related information.',
    pv17: 'Responding to your inquiries and providing technical support.',
    pv18: 'Improving our services and developing new features.',
    pv19: 'Sending important service notifications (if any).',
    pv20: 'Complying with legal and regulatory obligations.',
    pv21: '4. Sharing Information',
    pv22: 'We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following cases:',
    pv23: '<strong>Service providers:</strong> Companies that help us run our business (payment gateways, server hosting) who are obligated to protect your data.',
    pv24: '<strong>Legal requirements:</strong> When required by law or to protect our rights or the safety of our users.',
    pv25: '<strong>Your consent:</strong> When you give us explicit consent to share your information.',
    pv26: '5. Data Security',
    pv27: 'We take appropriate technical and organizational security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no data transmission over the internet can be guaranteed 100% secure.',
    pv28: '6. Your Rights',
    pv29: 'You have the right to:',
    pv30: 'Access the personal data we hold about you.',
    pv31: 'Request correction of any inaccurate information.',
    pv32: 'Request deletion of your personal data (with some exceptions).',
    pv33: 'Object to the processing of your data for direct marketing purposes.',
    pv34: 'Withdraw your consent at any time.',
    pv35: '7. Data Retention',
    pv36: 'We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.',
    pv37: '8. External Website Links',
    pv38: 'Our website may contain links to external sites. We are not responsible for the content of these external sites and do not take responsibility for their privacy practices.',
    pv39: '9. Changes to This Policy',
    pv40: 'We may update this Privacy Policy from time to time. We will announce any significant changes by publishing the new policy on this page and updating the "last updated" date.',
    pv41: '10. Contact Us',
    pv42: 'If you have any questions about this Privacy Policy, please contact us via:',
    pp01: '1. Introduction',
    pp02: 'This policy explains the terms and conditions for purchasing and using WA Sender software licenses. By purchasing a WA Sender license, you agree to comply with these terms.',
    pp03: '2. License Types and Pricing',
    pp04: 'We offer several subscription plans to suit different needs:',
    pp05: '2.1 Single-device plans:',
    pp06: '<strong>Annual subscription:</strong> $5 USD - valid for one year on one device.',
    pp07: '<strong>2-year subscription:</strong> $15 USD - valid for two years on one device.',
    pp08: '<strong>3-year subscription:</strong> $20 USD - valid for 3 years on one device.',
    pp09: '<strong>Lifetime subscription:</strong> $50 USD - valid for life on one device with permanent updates.',
    pp10: '2.2 Multi-device plans:',
    pp11: '<strong>2 devices / year:</strong> $8 USD - two licenses for two different devices.',
    pp12: '<strong>3 devices / year:</strong> $12 USD - 3 licenses for 3 different devices.',
    pp13: '<strong>2 devices / 2 years:</strong> $25 USD - two licenses for two devices for two years.',
    pp14: '3. Accepted Payment Methods',
    pp15: 'We accept several payment methods to make the purchase process easier:',
    pp16: '<strong>Vodafone Cash (Egypt):</strong> Instant wallet transfer.',
    pp17: '<strong>Barq App (Saudi Arabia):</strong> International transfer to Saudi Arabia.',
    pp18: '<strong>InstaPay (Egypt):</strong> Direct transfer from Egypt.',
    pp19: '<strong>Bank transfer (Saudi IBAN):</strong> Via D360 FINTECH bank.',
    pp20: '<strong>PayPal / Visa:</strong> Secure international payment by bank card.',
    pp21: '4. Activation Process',
    pp22: 'Download the software for free from our website.',
    pp23: 'Choose the plan that suits you from the pricing page.',
    pp24: 'Complete payment using one of the available methods.',
    pp25: 'Send the payment receipt via WhatsApp to: +20 127 993 4735',
    pp26: 'You will receive the activation code within minutes (may take up to 24 hours for bank transfers).',
    pp27: 'Enter the activation code inside the software to activate all features.',
    pp28: '5. License Terms',
    pp29: 'Each license is valid for one device only (unless it is a multi-device license).',
    pp30: 'The activation code may not be shared with other people.',
    pp31: 'The license is non-transferable and may not be resold.',
    pp32: 'If you change your device, contact us to transfer the license for free.',
    pp33: 'Free updates are available during the valid subscription period.',
    pp34: '6. Price Guarantee',
    pp35: 'We reserve the right to change our prices at any time. However, if you purchase a subscription, the price you paid will remain valid for the entire duration of your subscription.',
    pp36: '7. Invoices and Receipts',
    pp37: 'After completing payment, you can request an official receipt via WhatsApp or email. The receipt includes purchase details, payment date, and amount paid.',
    pp38: '8. Technical Issues After Purchase',
    pp39: 'If you encounter any technical issue installing or activating the software:',
    pp40: 'Contact us immediately via WhatsApp or email.',
    pp41: 'Describe the issue in detail with a screenshot if possible.',
    pp42: 'Our support team will resolve your issue as soon as possible (within 24 hours maximum).',
    pp43: '9. Contact Us',
    pp44: 'For inquiries related to purchases or payments:',
    rf01: '1. General Refund Policy',
    rf02: 'At WA Sender, we are committed to providing a high-quality product and excellent customer service. Due to the digital nature of our product (licensed software), our refund policy is limited, but we strive to meet our customers\' expectations.',
    rf03: '2. Refund Eligibility Cases',
    rf04: '2.1 Full refund (7-day guarantee):',
    rf05: 'We offer a full refund guarantee within <strong>7 days</strong> of the purchase date in the following cases:',
    rf06: 'If the software does not work on your device despite help from our technical support team.',
    rf07: 'If there is a major technical malfunction that prevents the use of all core features.',
    rf08: 'If your license was not activated within 48 hours of payment (after contacting us).',
    rf09: '2.2 Partial refund:',
    rf10: 'In some cases, we may offer a partial refund ranging between 50-70%:',
    rf11: 'If your needs changed after purchasing the subscription.',
    rf12: 'If you find that the software does not suit your specific requirements.',
    rf13: 'In case of technical issues that were partially resolved.',
    rf14: '3. Non-Eligibility Cases for Refund',
    rf15: 'A refund cannot be requested in the following cases:',
    rf16: 'After 14 days have passed from the purchase date.',
    rf17: 'If the license has already been used to send campaigns (even trial ones).',
    rf18: 'In case of violation of the terms of use or WhatsApp/Meta policies.',
    rf19: 'If the activation code has been shared with other users.',
    rf20: 'If the refund request is due to a WhatsApp number ban (see the anti-ban protection guide).',
    rf21: '4. How to Request a Refund',
    rf22: 'To request a refund, please follow these steps:',
    rf23: 'Contact us via WhatsApp at: <a href="https://wa.me/201279934735" target="_blank">+20 127 993 4735</a>',
    rf24: 'Or send an email to: <a href="mailto:support@wasendernew.com">support@wasendernew.com</a>',
    rf25: 'State the reason for your refund request in detail.',
    rf26: 'Attach the original payment receipt if possible.',
    rf27: 'Describe the problem you encountered (if any) with screenshots.',
    rf28: '5. Processing a Refund Request',
    rf29: '<strong>Review time:</strong> We will review your request within 48 business hours.',
    rf30: '<strong>Processing time:</strong> If approved, the refund will be processed within 5-10 business days.',
    rf31: '<strong>Refund method:</strong> The amount will be refunded using the original payment method.',
    rf32: '<strong>Confirmation:</strong> You will receive email confirmation once the refund is processed.',
    rf33: '6. Refund Alternatives',
    rf34: 'Instead of a refund, we may offer the following alternatives:',
    rf35: '<strong>Extending the subscription period:</strong> Adding free time to your subscription.',
    rf36: '<strong>Free upgrade:</strong> Upgrading to a higher plan without paying the price difference.',
    rf37: '<strong>License transfer:</strong> Transferring the license to another device if your current device is incompatible.',
    rf38: '<strong>Extra training session:</strong> A dedicated WhatsApp session to explain how to use the software correctly.',
    rf39: '7. Important Note Regarding WhatsApp Bans',
    rf40: '<strong>⚠️ Important notice:</strong> A WhatsApp number ban is not grounds for a refund. We provide detailed guidance on ban protection on the "Tutorial" page and within the software itself. The user is responsible for following this guidance and applying best practices. We strongly recommend reading the anti-ban protection guide before using the software to send any messages.',
    rf41: '8. Frequently Asked Questions About Refunds',
    rf42: 'Q: Can I try the software before purchasing?',
    rf43: 'A: Yes! You can download the software for free and try all the features. Payment is only required to activate the license.',
    rf44: 'Q: What if the software doesn\'t work on my device?',
    rf45: 'A: WA Sender requires Windows 10 or newer. If your device is compatible but it still doesn\'t work, contact us and we\'ll help you. If we can\'t resolve the issue, you can request a refund within 7 days.',
    rf46: 'Q: Can I change my mind after purchasing a lifetime subscription?',
    rf47: 'A: Yes, you can request a refund within 7 days of purchase if you haven\'t used the license. After that, we cannot accept refund requests for lifetime subscriptions.',
    rf48: '9. Contact Us',
    rf49: 'For inquiries about the refund policy or to submit a request:',
    tm01: '1. Acceptance of Terms',
    tm02: 'By using the wasendernew.com website or the WA Sender software, you agree to be bound by these Terms and Conditions. If you do not agree to any of these terms, please do not use our services.',
    tm03: '2. Service Description',
    tm04: 'WA Sender is a WhatsApp marketing software that provides tools for sending bulk messages, automation, and managing marketing campaigns. The software is designed for personal and commercial use within the limits of WhatsApp/Meta\'s laws and policies.',
    tm05: '3. Eligibility Requirements',
    tm06: 'To use WA Sender, you must:',
    tm07: 'Be of legal age (18 years or older) in your country.',
    tm08: 'Have the legal capacity to enter into a binding agreement.',
    tm09: 'Provide accurate and truthful information when registering or purchasing.',
    tm10: 'Maintain the confidentiality of your account information.',
    tm11: '4. Permitted Use',
    tm12: 'The user agrees to use WA Sender for the following purposes only:',
    tm13: 'Sending legitimate marketing messages to numbers that have given their consent.',
    tm14: 'Managing WhatsApp marketing campaigns professionally.',
    tm15: 'Automating responses to legitimate customer inquiries.',
    tm16: 'Extracting publicly available data for legitimate marketing purposes.',
    tm17: '5. Prohibited Use',
    tm18: '<strong>It is explicitly prohibited</strong> to use the software for the following purposes:',
    tm19: 'Sending spam or unsolicited messages.',
    tm20: 'Sending harmful, fraudulent, or illegal content.',
    tm21: 'Violating the privacy or rights of others.',
    tm22: 'Attempting to hack or damage WhatsApp or Meta systems.',
    tm23: 'Sharing, selling, or distributing the activation code.',
    tm24: 'Reverse engineering, modifying, or copying the software.',
    tm25: 'Using it for any purpose that conflicts with WhatsApp/Meta\'s terms of service.',
    tm26: '6. Responsibility Toward WhatsApp/Meta',
    tm27: '<strong>⚠️ Important notice:</strong> WA Sender is not affiliated with Meta, WhatsApp, Facebook, or any of their subsidiaries. Using this software may violate WhatsApp\'s terms of service. You alone bear full responsibility for any consequences resulting from your use of the software, including but not limited to your WhatsApp account being banned or legal action being taken against you.',
    tm28: '7. Intellectual Property',
    tm29: 'All rights to WA Sender are owned by the development team.',
    tm30: 'The software is protected by international copyright laws.',
    tm31: 'You may not copy, modify, or distribute the software without explicit written permission.',
    tm32: 'The logo, icons, and design are the property of WA Sender.',
    tm33: '8. License and Use',
    tm34: 'When you purchase a license, you get a personal, non-transferable right to use the software.',
    tm35: 'Each license is valid for one device only (unless it is a multi-device license).',
    tm36: 'The license may not be leased, lent, or sold to third parties.',
    tm37: 'We reserve the right to revoke the license in the event of a violation of these terms.',
    tm38: '9. Disclaimer of Warranties',
    tm39: 'The software is provided "as is" without any express or implied warranties. We do not guarantee:',
    tm40: 'That the software will operate without interruption or errors.',
    tm41: 'That the results of using the software will meet your expectations.',
    tm42: 'That using the software will not result in your WhatsApp number being banned.',
    tm43: 'That all features will be continuously available.',
    tm44: '10. Limitation of Liability',
    tm45: 'To the maximum extent permitted, our total liability shall not exceed the amount you paid for the license. We shall not be liable for:',
    tm46: 'Any direct, indirect, incidental, or consequential damages resulting from the use or inability to use the software.',
    tm47: 'Loss of data, profits, or business opportunities.',
    tm48: 'The banning of your account on WhatsApp or any other platform.',
    tm49: 'Any third-party legal action against you.',
    tm50: '11. Indemnification',
    tm51: 'You agree to indemnify and hold harmless WA Sender, its team, employees, and partners from any claims, losses, or damages (including attorney fees) arising from:',
    tm52: 'Your use of the software.',
    tm53: 'Your violation of these terms.',
    tm54: 'Your violation of the rights of others.',
    tm55: '12. Modifications to the Terms',
    tm56: 'We reserve the right to modify these terms at any time. Modifications take effect immediately upon being published on the website. Your continued use of the software after modifications means you accept them.',
    tm57: '13. Governing Law',
    tm58: 'These terms are governed by and construed in accordance with applicable law. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the competent courts.',
    tm59: '14. Contact Us',
    tm60: 'For inquiries about these terms:',

    // WaDefender Page
    wadefender_title: 'WaDefender - WhatsApp Account Strength Analyzer',
    wadefender_desc: 'Professional tool to analyze your WhatsApp account strength',
    wadefender_badge: '🛡️ Advanced Protection Tool',
    wadefender_hero_title: 'WaDefender<br>WhatsApp Account Analyzer',
    wadefender_hero_sub: 'Professional tool to analyze and check your WhatsApp account strength, discover weaknesses and protect against bans.',
    wadefender_download: 'Free Download',
    wadefender_buy: 'Subscribe Now - $5/year',
    wadefender_feature1_title: 'Account Strength Analysis',
    wadefender_feature1_desc: 'Comprehensive check of your WhatsApp account status with detailed report on strengths and weaknesses.',
    wadefender_feature2_title: 'Number Validity Check',
    wadefender_feature2_desc: 'Verify WhatsApp numbers activity and know if they are registered or banned.',
    wadefender_feature3_title: 'Ban Protection',
    wadefender_feature3_desc: 'Assess ban risks on your account and preventive protection measures.',
    wadefender_feature4_title: 'Detailed Reports',
    wadefender_feature4_desc: 'Comprehensive and updated reports about your account status.',
    wadefender_how_title: 'Get Started in 3 Simple Steps',
    wadefender_step1_title: 'Download the Program',
    wadefender_step1_desc: 'Download WaDefender for free and install it on your device.',
    wadefender_step2_title: 'Subscribe & Activate',
    wadefender_step2_desc: 'Subscribe for only $5 for the full year.',
    wadefender_step3_title: 'Start Analysis',
    wadefender_step3_desc: 'Enter activation code and start checking your account.',
    wadefender_price_title: 'Annual Plan',
    wadefender_price_amount: '$5',
    wadefender_price_period: '/year',

    // Gulf Data Packages
    kuwait_title: 'Kuwait Package',
    kuwait_count: '2 Million Numbers',
    kuwait_price: '$25 USD',
    uae_title: 'UAE Package',
    uae_count: '1 Million Numbers',
    uae_price: '$15 USD',
    gulf_title: 'Gulf Countries Bundle',
    gulf_count: '10M+ Numbers',
    gulf_price: '$250 USD'
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
    pm_paypal_note2: 'Cliquez sur \'Acheter\' ou scannez le QR sous le forfait souhaité ci-dessus pour aller directement à la page de paiement avec le bon montant. Après le paiement, envoyez l\'adresse e-mail utilisée via WhatsApp.',
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
    cf_desc: 'Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais',
    cf_name_ph: 'Entrez votre nom complet',
    cf_subject_ph: 'Sélectionnez le sujet du message',
    cf_msg_ph: 'Écrivez votre message ici en détail...',
    
    // Contact FAQ
    faq_contact_title: 'Vous n\'avez pas trouvé de réponse à votre question ?',
    faq_contact_sub: 'Vous trouverez peut-être une réponse dans nos questions fréquentes',
    
    // Footer Links
    footer_privacy: 'Politique de Confidentialité',
    footer_refund: 'Politique de Remboursement',
    footer_terms: 'Conditions Générales',
    footer_purchase: 'Politique d\'Achat',
    footer_whatsapp: 'WhatsApp',
    
    // Features Page Section Titles
    feat_msg_tools: '📨 Outils de Messagerie et d\'Envoi',
    feat_extract_tools: '🔍 Outils d\'Extraction et de Données',
    feat_mgmt_tools: '🛡️ Gestion et Protection',
    
    // CTA Section
    cta_ready: 'Prêt à essayer toutes ces fonctionnalités ?',
    cta_desc: 'Téléchargez le programme gratuitement et commencez à utiliser tous les outils immédiatement',
    btn_subscribe: 'S\'abonner Maintenant',
    
    // View All Buttons
    view_all_features: 'Voir Toutes les Fonctionnalités →',
    view_all_plans: 'Voir Tous les Plans →',
    
    // Tutorial CTA
    cta_desc_tutorial: 'Téléchargez le programme gratuitement et commencez votre parcours de marketing WhatsApp',
    footer_desc: 'Logiciel professionnel de marketing WhatsApp avec des outils avancés pour les messages en masse et l\'automatisation.',
    footer_quick: 'Liens Rapides',
    footer_legal: 'Légal',
    footer_support: 'Support',
    footer_rights: 'Tous droits réservés',
    
    // WA CRM Page
    wacrm_title: 'WA CRM - Gestion de la Relation Client via WhatsApp',
    wacrm_desc: 'Logiciel professionnel pour gérer les relations clients via WhatsApp. Organisez les clients, suivez les conversations et gérez les ventes facilement.',
    wacrm_badge: 'Nouveau',
    wacrm_hero_title: 'WA CRM<br>Gestion des Clients WhatsApp',
    wacrm_hero_sub: 'Système complet pour gérer vos clients, organiser les conversations WhatsApp et suivre les ventes avec une grande efficacité',
    wacrm_download: 'Téléchargement Gratuit',
    wacrm_buy: 'Acheter maintenant - 20€/an',
    wacrm_feature1_title: 'Gestion des Contacts', wacrm_feature1_desc: 'Organisez tous vos clients en un seul endroit avec catégorisation et filtrage rapides.',
    wacrm_feature2_title: 'Suivi des Conversations', wacrm_feature2_desc: 'Suivez toutes les conversations WhatsApp avec les clients et historique complet des communications.',
    wacrm_feature3_title: 'Gestion des Ventes', wacrm_feature3_desc: 'Suivez les ventes et commandes et générez des rapports complets sur la performance de votre équipe commerciale.',
    wacrm_feature4_title: 'Réponses Rapides', wacrm_feature4_desc: 'Modèles de réponse prêts à l\'emploi pour des réponses rapides avec options de personnalisation complètes.',
    wacrm_feature5_title: 'Calendrier et Tâches', wacacrm_feature5_desc: 'Planifiez tâches et rendez-vous avec rappels intelligents pour une gestion efficace du temps.',
    wacrm_feature6_title: 'Rapports et Analyses', wacrm_feature6_desc: 'Rapports complets et analyses détaillées de la performance des ventes et de l\'engagement client.',
    wacrm_how_title: 'Comment fonctionne WA CRM ?',
    wacrm_how_sub: 'Trois étapes simples pour gérer vos clients professionnellement',
    wacrm_step1_title: 'Télécharger le Programme', wacrm_step1_desc: 'Téléchargez WA CRM gratuitement et installez-le sur votre appareil en quelques étapes simples.',
    wacrm_step2_title: 'S\'abonner et Activer', wacrm_step2_desc: 'Abonnement annuel pour seulement 20€ et recevez votre code d\'activation instantanément.',
    wacrm_step3_title: 'Commencer à Gérer', wacrm_step3_desc: 'Entrez les données de vos clients et commencez à gérer leurs relations professionnellement.',
    wacrm_price_title: 'Plan Complet Unique',
    wacrm_price_amount: '20',
    wacrm_price_period: '/ an',
    wacrm_price_feat1: 'Toutes les fonctionnalités incluses',
    wacrm_price_feat2: 'Mises à jour gratuites continues',
    wacrm_price_feat3: 'Support direct 24/7',
    wacrm_price_feat4: 'Licence pour un seul appareil',
    wacrm_cta_ready: 'Prêt à gérer vos clients professionnellement ?',
    wacrm_cta_desc: 'Téléchargez WA CRM maintenant et commencez à organiser vos relations clients aujourd\'hui',
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
    vid10_desc: 'Apprenez la dernière méthode pour créer une campagne publicitaire via WhatsApp avec les meilleures pratiques pour réduire le taux de blocage.',

    // ── FAQ (contact page) ──
    faq_sub: 'Vous trouverez peut-être une réponse dans notre FAQ',

    // ── Page titles & meta descriptions (used for document.title / meta description switching) ──
    title_home: 'WA Sender - Télécharger le logiciel WhatsApp Sender + Guide d\'activation et tarifs',
    desc_home: 'Téléchargez WA Sender (v5.0.7) gratuitement : envoi de messages en masse, bot de réponse automatique, protection anti-bannissement et extraction des membres de groupes. Regardez le guide vidéo d\'activation et consultez les tarifs et moyens de paiement.',
    title_features: 'Fonctionnalités de WA Sender v5.0.7 - Plus de 15 outils professionnels | WA Sender',
    desc_features: 'Découvrez toutes les fonctionnalités de WA Sender : envoi de messages en masse, bot de réponse automatique, extraction de membres, filtrage de numéros, planification de campagnes, et plus de 15 outils professionnels.',
    title_pricing: 'Tarifs et abonnements WA Sender - Formules flexibles pour tous les besoins | WA Sender',
    desc_pricing: 'Choisissez la formule d\'abonnement WA Sender qui vous convient : 1 an, 2 ans, 3 ans ou à vie. Prix à partir de 5 $ seulement. Plusieurs moyens de paiement disponibles.',
    title_contact: 'Contactez-nous - WA Sender | Support technique et questions',
    desc_contact: 'Contactez l\'équipe d\'assistance de WA Sender via WhatsApp ou par e-mail. Nous sommes là pour vous aider pour toute question ou problème technique.',
    title_tutorial: 'Tutoriel WA Sender - Guides vidéo étape par étape | WA Sender',
    desc_tutorial: 'Regardez des vidéos tutorielles complètes pour WA Sender : installation, activation, envoi de messages en masse, extraction des membres et tous les outils étape par étape.',
    title_privacy: 'Politique de confidentialité - WA Sender | Comment nous protégeons vos données',
    desc_privacy: 'Lisez la politique de confidentialité de WA Sender. Nous nous engageons à protéger vos données personnelles et à ne jamais les partager avec des tiers.',
    title_purchase: 'Politique d\'achat - WA Sender | Moyens de paiement et licences',
    desc_purchase: 'Lisez la politique d\'achat de WA Sender : moyens de paiement disponibles, détails de la licence et conditions d\'achat.',
    title_refund: 'Politique de remboursement - WA Sender | Conditions de remboursement',
    desc_refund: 'Lisez la politique de remboursement de WA Sender. Nous expliquons les conditions de remboursement et comment soumettre une demande.',
    title_terms: 'Conditions générales - WA Sender | Conditions d\'utilisation',
    desc_terms: 'Lisez les conditions générales d\'utilisation du logiciel WA Sender et du site wasendernew.com.',

    // ── Legal Pages: Privacy / Purchase / Refund / Terms (full content) ──
    legal_last_update: 'Dernière mise à jour : janvier 2024',
    legal_contact_whatsapp: '<strong>WhatsApp :</strong> <a href="https://wa.me/201279934735" target="_blank">+20 127 993 4735</a>',
    legal_contact_email: '<strong>E-mail :</strong> <a href="mailto:support@wasendernew.com">support@wasendernew.com</a>',
    pv01: '1. Introduction',
    pv02: 'Chez WA Sender, nous nous engageons à protéger votre vie privée. Cette politique explique comment nous collectons, utilisons et protégeons vos informations personnelles lorsque vous utilisez notre site web et le logiciel WA Sender.',
    pv03: 'En utilisant notre site web ou notre logiciel, vous acceptez les pratiques décrites dans cette politique de confidentialité.',
    pv04: '2. Informations que nous collectons',
    pv05: '2.1 Informations que vous fournissez volontairement :',
    pv06: '<strong>Informations de contact :</strong> nom complet, adresse e-mail, numéro de téléphone lorsque vous nous contactez ou achetez une licence.',
    pv07: '<strong>Informations de paiement :</strong> données de paiement nécessaires au traitement de vos achats (traitées via des passerelles de paiement sécurisées ; nous ne les stockons pas directement).',
    pv08: '<strong>Questions techniques :</strong> toute information que vous fournissez lors du signalement d\'un problème technique ou d\'une demande d\'assistance.',
    pv09: '2.2 Informations collectées automatiquement :',
    pv10: '<strong>Données de navigation :</strong> type de navigateur, système d\'exploitation, adresses IP, pages visitées, date et heure de la visite.',
    pv11: '<strong>Cookies :</strong> nous utilisons des cookies pour améliorer votre expérience sur le site. Vous pouvez les désactiver dans les paramètres de votre navigateur.',
    pv12: '<strong>Données analytiques :</strong> nous utilisons des outils d\'analyse anonymes pour comprendre comment les visiteurs utilisent notre site.',
    pv13: '3. Comment nous utilisons vos informations',
    pv14: 'Nous utilisons les informations collectées aux fins suivantes :',
    pv15: 'Fournir, exploiter et protéger nos services (y compris le dépannage).',
    pv16: 'Traiter les transactions et envoyer des informations relatives aux achats.',
    pv17: 'Répondre à vos demandes et fournir une assistance technique.',
    pv18: 'Améliorer nos services et développer de nouvelles fonctionnalités.',
    pv19: 'Envoyer des notifications importantes concernant le service (le cas échéant).',
    pv20: 'Respecter les obligations légales et réglementaires.',
    pv21: '4. Partage des informations',
    pv22: 'Nous ne vendons, n\'échangeons ni ne louons vos informations personnelles à des tiers. Nous ne partageons vos informations que dans les cas suivants :',
    pv23: '<strong>Prestataires de services :</strong> entreprises qui nous aident à exploiter notre activité (passerelles de paiement, hébergement de serveurs) et qui sont tenues de protéger vos données.',
    pv24: '<strong>Exigences légales :</strong> lorsque cela est requis par la loi ou pour protéger nos droits ou la sécurité de nos utilisateurs.',
    pv25: '<strong>Votre consentement :</strong> lorsque vous nous donnez votre consentement explicite pour partager vos informations.',
    pv26: '5. Sécurité des données',
    pv27: 'Nous prenons des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos informations personnelles contre tout accès, modification, divulgation ou destruction non autorisés. Cependant, aucune transmission de données sur Internet ne peut être garantie sécurisée à 100 %.',
    pv28: '6. Vos droits',
    pv29: 'Vous avez le droit de :',
    pv30: 'Accéder aux données personnelles que nous détenons à votre sujet.',
    pv31: 'Demander la correction de toute information inexacte.',
    pv32: 'Demander la suppression de vos données personnelles (sous certaines exceptions).',
    pv33: 'Vous opposer au traitement de vos données à des fins de marketing direct.',
    pv34: 'Retirer votre consentement à tout moment.',
    pv35: '7. Conservation des données',
    pv36: 'Nous conservons vos informations personnelles uniquement pendant la durée nécessaire pour atteindre les objectifs décrits dans cette politique, sauf si la loi exige une période de conservation plus longue.',
    pv37: '8. Liens vers des sites externes',
    pv38: 'Notre site peut contenir des liens vers des sites externes. Nous ne sommes pas responsables du contenu de ces sites externes et déclinons toute responsabilité quant à leurs pratiques en matière de confidentialité.',
    pv39: '9. Modifications de cette politique',
    pv40: 'Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Nous annoncerons tout changement important en publiant la nouvelle politique sur cette page et en mettant à jour la date de « dernière mise à jour ».',
    pv41: '10. Contactez-nous',
    pv42: 'Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter via :',
    pp01: '1. Introduction',
    pp02: 'Cette politique explique les termes et conditions d\'achat et d\'utilisation des licences du logiciel WA Sender. En achetant une licence WA Sender, vous acceptez de respecter ces conditions.',
    pp03: '2. Types de licences et tarifs',
    pp04: 'Nous proposons plusieurs formules d\'abonnement pour répondre à différents besoins :',
    pp05: '2.1 Formules pour un seul appareil :',
    pp06: '<strong>Abonnement annuel :</strong> 5 USD - valable un an sur un seul appareil.',
    pp07: '<strong>Abonnement 2 ans :</strong> 15 USD - valable deux ans sur un seul appareil.',
    pp08: '<strong>Abonnement 3 ans :</strong> 20 USD - valable 3 ans sur un seul appareil.',
    pp09: '<strong>Abonnement à vie :</strong> 50 USD - valable à vie sur un seul appareil avec mises à jour permanentes.',
    pp10: '2.2 Formules multi-appareils :',
    pp11: '<strong>2 appareils / an :</strong> 8 USD - deux licences pour deux appareils différents.',
    pp12: '<strong>3 appareils / an :</strong> 12 USD - 3 licences pour 3 appareils différents.',
    pp13: '<strong>2 appareils / 2 ans :</strong> 25 USD - deux licences pour deux appareils pendant deux ans.',
    pp14: '3. Moyens de paiement acceptés',
    pp15: 'Nous acceptons plusieurs moyens de paiement pour faciliter le processus d\'achat :',
    pp16: '<strong>Vodafone Cash (Égypte) :</strong> transfert instantané vers le portefeuille.',
    pp17: '<strong>Application Barq (Arabie saoudite) :</strong> transfert international vers l\'Arabie saoudite.',
    pp18: '<strong>InstaPay (Égypte) :</strong> transfert direct depuis l\'Égypte.',
    pp19: '<strong>Virement bancaire (IBAN saoudien) :</strong> via la banque D360 FINTECH.',
    pp20: '<strong>PayPal / Visa :</strong> paiement international sécurisé par carte bancaire.',
    pp21: '4. Processus d\'activation',
    pp22: 'Téléchargez gratuitement le logiciel depuis notre site.',
    pp23: 'Choisissez la formule qui vous convient sur la page des tarifs.',
    pp24: 'Effectuez le paiement via l\'une des méthodes disponibles.',
    pp25: 'Envoyez le reçu de paiement via WhatsApp au numéro : +20 127 993 4735',
    pp26: 'Vous recevrez le code d\'activation en quelques minutes (jusqu\'à 24 heures pour les virements bancaires).',
    pp27: 'Saisissez le code d\'activation dans le logiciel pour activer toutes les fonctionnalités.',
    pp28: '5. Conditions de licence',
    pp29: 'Chaque licence est valable pour un seul appareil (sauf licence multi-appareils).',
    pp30: 'Le code d\'activation ne peut être partagé avec d\'autres personnes.',
    pp31: 'La licence n\'est ni transférable ni revendable.',
    pp32: 'En cas de changement d\'appareil, contactez-nous pour transférer la licence gratuitement.',
    pp33: 'Les mises à jour gratuites sont disponibles pendant la durée de validité de l\'abonnement.',
    pp34: '6. Garantie des prix',
    pp35: 'Nous nous réservons le droit de modifier nos prix à tout moment. Cependant, si vous achetez un abonnement, le prix payé restera valable pendant toute la durée de votre abonnement.',
    pp36: '7. Factures et reçus',
    pp37: 'Après le paiement, vous pouvez demander un reçu officiel via WhatsApp ou par e-mail. Le reçu contient les détails de l\'achat, la date de paiement et le montant payé.',
    pp38: '8. Problèmes techniques après l\'achat',
    pp39: 'Si vous rencontrez un problème technique lors de l\'installation ou de l\'activation du logiciel :',
    pp40: 'Contactez-nous immédiatement via WhatsApp ou par e-mail.',
    pp41: 'Décrivez le problème en détail avec une capture d\'écran si possible.',
    pp42: 'Notre équipe d\'assistance résoudra votre problème dans les plus brefs délais (maximum 24 heures).',
    pp43: '9. Contactez-nous',
    pp44: 'Pour toute question relative à l\'achat ou au paiement :',
    rf01: '1. Politique de remboursement générale',
    rf02: 'Chez WA Sender, nous nous engageons à fournir un produit de haute qualité et un service client excellent. En raison de la nature numérique de notre produit (logiciel sous licence), notre politique de remboursement est limitée, mais nous nous efforçons de répondre aux attentes de nos clients.',
    rf03: '2. Cas d\'éligibilité au remboursement',
    rf04: '2.1 Remboursement intégral (garantie de 7 jours) :',
    rf05: 'Nous offrons une garantie de remboursement intégral dans les <strong>7 jours</strong> suivant la date d\'achat dans les cas suivants :',
    rf06: 'Si le logiciel ne fonctionne pas sur votre appareil malgré l\'aide de notre équipe d\'assistance technique.',
    rf07: 'S\'il existe un dysfonctionnement technique majeur empêchant l\'utilisation de toutes les fonctionnalités essentielles.',
    rf08: 'Si votre licence n\'a pas été activée dans les 48 heures suivant le paiement (après nous avoir contactés).',
    rf09: '2.2 Remboursement partiel :',
    rf10: 'Dans certains cas, nous pouvons proposer un remboursement partiel compris entre 50 et 70 % :',
    rf11: 'Si vos besoins ont changé après l\'achat de l\'abonnement.',
    rf12: 'Si vous constatez que le logiciel ne répond pas à vos besoins spécifiques.',
    rf13: 'En cas de problèmes techniques partiellement résolus.',
    rf14: '3. Cas d\'inéligibilité au remboursement',
    rf15: 'Un remboursement ne peut pas être demandé dans les cas suivants :',
    rf16: 'Après l\'écoulement de 14 jours depuis la date d\'achat.',
    rf17: 'Si la licence a déjà été utilisée pour envoyer des campagnes (même d\'essai).',
    rf18: 'En cas de violation des conditions d\'utilisation ou des politiques de WhatsApp/Meta.',
    rf19: 'Si le code d\'activation a été partagé avec d\'autres utilisateurs.',
    rf20: 'Si la demande de remboursement est due au bannissement d\'un numéro WhatsApp (voir le guide de protection anti-bannissement).',
    rf21: '4. Comment demander un remboursement',
    rf22: 'Pour demander un remboursement, veuillez suivre les étapes suivantes :',
    rf23: 'Contactez-nous via WhatsApp au : <a href="https://wa.me/201279934735" target="_blank">+20 127 993 4735</a>',
    rf24: 'Ou envoyez un e-mail à : <a href="mailto:support@wasendernew.com">support@wasendernew.com</a>',
    rf25: 'Indiquez en détail la raison de votre demande de remboursement.',
    rf26: 'Joignez le reçu de paiement original si possible.',
    rf27: 'Décrivez le problème rencontré (le cas échéant) avec des captures d\'écran.',
    rf28: '5. Traitement d\'une demande de remboursement',
    rf29: '<strong>Délai d\'examen :</strong> nous examinerons votre demande dans un délai de 48 heures ouvrées.',
    rf30: '<strong>Délai de traitement :</strong> en cas d\'approbation, le remboursement sera traité dans un délai de 5 à 10 jours ouvrés.',
    rf31: '<strong>Méthode de remboursement :</strong> le montant sera remboursé selon le mode de paiement d\'origine.',
    rf32: '<strong>Confirmation :</strong> vous recevrez une confirmation par e-mail une fois le remboursement traité.',
    rf33: '6. Alternatives au remboursement',
    rf34: 'Au lieu d\'un remboursement, nous pouvons proposer les alternatives suivantes :',
    rf35: '<strong>Prolongation de la période d\'abonnement :</strong> ajout de temps gratuit à votre abonnement.',
    rf36: '<strong>Mise à niveau gratuite :</strong> passage à une formule supérieure sans payer la différence de prix.',
    rf37: '<strong>Transfert de licence :</strong> transfert de la licence vers un autre appareil si votre appareil actuel est incompatible.',
    rf38: '<strong>Session de formation supplémentaire :</strong> une session dédiée via WhatsApp pour expliquer comment utiliser correctement le logiciel.',
    rf39: '7. Remarque importante concernant les bannissements WhatsApp',
    rf40: '<strong>⚠️ Avis important :</strong> le bannissement d\'un numéro WhatsApp ne constitue pas un motif de remboursement. Nous fournissons des instructions détaillées sur la protection anti-bannissement sur la page « Tutoriel » et dans le logiciel lui-même. L\'utilisateur est responsable de suivre ces instructions et d\'appliquer les meilleures pratiques. Nous recommandons vivement de lire le guide de protection anti-bannissement avant d\'utiliser le logiciel pour envoyer des messages.',
    rf41: '8. Questions fréquentes sur les remboursements',
    rf42: 'Q : Puis-je essayer le logiciel avant de l\'acheter ?',
    rf43: 'R : Oui ! Vous pouvez télécharger le logiciel gratuitement et essayer toutes les fonctionnalités. Le paiement n\'est requis que pour activer la licence.',
    rf44: 'Q : Que se passe-t-il si le logiciel ne fonctionne pas sur mon appareil ?',
    rf45: 'R : WA Sender nécessite Windows 10 ou une version plus récente. Si votre appareil est compatible mais que cela ne fonctionne toujours pas, contactez-nous et nous vous aiderons. Si nous ne pouvons pas résoudre le problème, vous pouvez demander un remboursement dans les 7 jours.',
    rf46: 'Q : Puis-je changer d\'avis après avoir acheté un abonnement à vie ?',
    rf47: 'R : Oui, vous pouvez demander un remboursement dans les 7 jours suivant l\'achat si vous n\'avez pas utilisé la licence. Passé ce délai, nous ne pouvons pas accepter de demandes de remboursement pour les abonnements à vie.',
    rf48: '9. Contactez-nous',
    rf49: 'Pour toute question sur la politique de remboursement ou pour soumettre une demande :',
    tm01: '1. Acceptation des conditions',
    tm02: 'En utilisant le site wasendernew.com ou le logiciel WA Sender, vous acceptez d\'être lié par les présentes conditions générales. Si vous n\'acceptez pas l\'une de ces conditions, veuillez ne pas utiliser nos services.',
    tm03: '2. Description du service',
    tm04: 'WA Sender est un logiciel de marketing WhatsApp qui fournit des outils pour l\'envoi de messages en masse, l\'automatisation et la gestion de campagnes marketing. Le logiciel est conçu pour un usage personnel et commercial dans les limites des lois et politiques de WhatsApp/Meta.',
    tm05: '3. Conditions d\'éligibilité à l\'utilisation',
    tm06: 'Pour utiliser WA Sender, vous devez :',
    tm07: 'Être majeur (18 ans ou plus) dans votre pays.',
    tm08: 'Avoir la capacité juridique de conclure un accord contraignant.',
    tm09: 'Fournir des informations exactes et véridiques lors de l\'inscription ou de l\'achat.',
    tm10: 'Préserver la confidentialité des informations de votre compte.',
    tm11: '4. Utilisation autorisée',
    tm12: 'L\'utilisateur accepte d\'utiliser WA Sender uniquement aux fins suivantes :',
    tm13: 'Envoi de messages marketing légitimes à des numéros ayant donné leur consentement.',
    tm14: 'Gestion professionnelle de campagnes marketing via WhatsApp.',
    tm15: 'Automatisation des réponses aux demandes légitimes des clients.',
    tm16: 'Extraction de données publiquement disponibles à des fins marketing légitimes.',
    tm17: '5. Utilisation interdite',
    tm18: '<strong>Il est expressément interdit</strong> d\'utiliser le logiciel aux fins suivantes :',
    tm19: 'Envoi de messages indésirables ou de spam.',
    tm20: 'Envoi de contenu nuisible, frauduleux ou illégal.',
    tm21: 'Violation de la vie privée ou des droits d\'autrui.',
    tm22: 'Tentative de piratage ou d\'endommagement des systèmes WhatsApp ou Meta.',
    tm23: 'Partage, vente ou distribution du code d\'activation.',
    tm24: 'Rétro-ingénierie, modification ou copie du logiciel.',
    tm25: 'Utilisation à toute fin contraire aux conditions de service de WhatsApp/Meta.',
    tm26: '6. Responsabilité envers WhatsApp/Meta',
    tm27: '<strong>⚠️ Avis important :</strong> WA Sender n\'est affilié ni à Meta, ni à WhatsApp, ni à Facebook, ni à aucune de leurs filiales. L\'utilisation de ce logiciel peut enfreindre les conditions de service de WhatsApp. Vous assumez seul l\'entière responsabilité de toute conséquence résultant de votre utilisation du logiciel, y compris, mais sans s\'y limiter, le bannissement de votre compte WhatsApp ou des poursuites judiciaires à votre encontre.',
    tm28: '7. Propriété intellectuelle',
    tm29: 'Tous les droits sur WA Sender appartiennent à l\'équipe de développement.',
    tm30: 'Le logiciel est protégé par les lois internationales sur le droit d\'auteur.',
    tm31: 'Vous n\'avez pas le droit de copier, modifier ou distribuer le logiciel sans autorisation écrite explicite.',
    tm32: 'Le logo, les icônes et le design sont la propriété de WA Sender.',
    tm33: '8. Licence et utilisation',
    tm34: 'Lors de l\'achat d\'une licence, vous obtenez un droit personnel et non transférable d\'utiliser le logiciel.',
    tm35: 'Chaque licence est valable pour un seul appareil (sauf licence multi-appareils).',
    tm36: 'La licence ne peut être louée, prêtée ou vendue à des tiers.',
    tm37: 'Nous nous réservons le droit de révoquer la licence en cas de violation des présentes conditions.',
    tm38: '9. Exclusion de garanties',
    tm39: 'Le logiciel est fourni « tel quel » sans aucune garantie expresse ou implicite. Nous ne garantissons pas :',
    tm40: 'Que le logiciel fonctionnera sans interruption ni erreur.',
    tm41: 'Que les résultats de l\'utilisation du logiciel répondront à vos attentes.',
    tm42: 'Que l\'utilisation du logiciel n\'entraînera pas le bannissement de votre numéro WhatsApp.',
    tm43: 'Que toutes les fonctionnalités seront disponibles en permanence.',
    tm44: '10. Limitation de responsabilité',
    tm45: 'Dans toute la mesure permise, notre responsabilité totale ne dépassera pas le montant que vous avez payé pour la licence. Nous ne serons pas responsables de :',
    tm46: 'Tout dommage direct, indirect, accessoire ou consécutif résultant de l\'utilisation ou de l\'impossibilité d\'utiliser le logiciel.',
    tm47: 'La perte de données, de bénéfices ou d\'opportunités commerciales.',
    tm48: 'Le bannissement de votre compte sur WhatsApp ou toute autre plateforme.',
    tm49: 'Toute action en justice d\'un tiers contre vous.',
    tm50: '11. Indemnisation',
    tm51: 'Vous acceptez d\'indemniser et de dégager de toute responsabilité WA Sender, son équipe, ses employés et ses partenaires de toute réclamation, perte ou dommage (y compris les frais d\'avocat) résultant de :',
    tm52: 'Votre utilisation du logiciel.',
    tm53: 'Votre violation des présentes conditions.',
    tm54: 'Votre violation des droits d\'autrui.',
    tm55: '12. Modifications des conditions',
    tm56: 'Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications prennent effet dès leur publication sur le site. La poursuite de votre utilisation du logiciel après les modifications signifie que vous les acceptez.',
    tm57: '13. Loi applicable',
    tm58: 'Les présentes conditions sont régies et interprétées conformément à la loi applicable. Tout litige découlant de ces conditions relèvera de la compétence exclusive des tribunaux compétents.',
    tm59: '14. Nous contacter',
    tm60: 'Pour toute question concernant les présentes conditions :',

    // WaDefender Page
    wadefender_title: 'WaDefender - Analyseur de Force de Compte WhatsApp',
    wadefender_desc: 'Outil professionnel pour analyser la force de votre compte WhatsApp',
    wadefender_badge: '🛡️ Outil de Protection Avancé',
    wadefender_hero_title: 'WaDefender<br>Analyseur de Compte WhatsApp',
    wadefender_hero_sub: 'Outil professionnel pour analyser et vérifier la force de votre compte WhatsApp, découvrir les faiblesses et vous protéger contre les blocages.',
    wadefender_download: 'Téléchargement Gratuit',
    wadefender_buy: 'Abonnez-vous - 5$/an',
    wadefender_feature1_title: 'Analyse de la Force du Compte',
    wadefender_feature1_desc: 'Vérification complète de l\'état de votre compte WhatsApp avec un rapport détaillé sur les forces et faiblesses.',
    wadefender_feature2_title: 'Vérification de Validité des Numéros',
    wadefender_feature2_desc: 'Vérifier l\'activité des numéros WhatsApp et savoir s\'ils sont enregistrés ou bloqués.',
    wadefender_feature3_title: 'Protection contre le Blocage',
    wadefender_feature3_desc: 'Évaluer les risques de blocage sur votre compte et mesures préventives de protection.',
    wadefender_feature4_title: 'Rapports Détaillés',
    wadefender_feature4_desc: 'Rapports complets et à jour sur l\'état de votre compte.',
    wadefender_how_title: 'Commencez en 3 Étapes Simples',
    wadefender_step1_title: 'Télécharger le Programme',
    wadefender_step1_desc: 'Téléchargez WaDefender gratuitement et installez-le sur votre appareil.',
    wadefender_step2_title: 'Abonnez-vous et Activez',
    wadefender_step2_desc: 'Abonnez-vous pour seulement 5$ pour l\'année complète.',
    wadefender_step3_title: 'Commencez l\'Analyse',
    wadefender_step3_desc: 'Entrez le code d\'activation et commencez à vérifier votre compte.',
    wadefender_price_title: 'Plan Annuel',
    wadefender_price_amount: '$5',
    wadefender_price_period: '/an',

    // Gulf Data Packages
    kuwait_title: 'Pack Koweït',
    kuwait_count: '2 Millions de Numéros',
    kuwait_price: '$25 USD',
    uae_title: 'Pack EAU',
    uae_count: '1 Million de Numéros',
    uae_price: '$15 USD',
    gulf_title: 'Bundle Pays du Golfe',
    gulf_count: '10M+ Numéros',
    gulf_price: '$250 USD'
  },
  
  ru: {
    nav_home: 'Главная',
    nav_how: 'Обучение',
    nav_guide: 'Защита от Блокировки',
    nav_features: 'Функции',
    nav_pricing: 'Цены',
    nav_contact: 'Контакт',
    nav_policies: 'Политики',
    nav_marketing: '📊 Маркетинговые данные',
    nav_wacrm: '🟢 WA CRM',
    nav_wadefender: '🛡️ WaDefender',
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
    pm_paypal_note2: 'Нажмите \'Купить\' или отсканируйте QR-код под нужным тарифом выше — вы сразу перейдёте на страницу оплаты с правильной суммой. После оплаты отправьте использованный адрес электронной почты через WhatsApp.',
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
    cf_desc: 'Заполните форму ниже, и мы свяжемся с вами в ближайшее время',
    cf_name_ph: 'Введите ваше полное имя',
    cf_subject_ph: 'Выберите тему сообщения',
    cf_msg_ph: 'Напишите ваше сообщение здесь подробно...',
    
    // Contact FAQ
    faq_contact_title: 'Не нашли ответ на свой вопрос?',
    faq_contact_sub: 'Возможно, вы найдете ответ в наших часто задаваемых вопросах',
    
    // Footer Links
    footer_privacy: 'Политика Конфиденциальности',
    footer_refund: 'Политика Возврата',
    footer_terms: 'Условия Использования',
    footer_purchase: 'Политика Покупки',
    footer_whatsapp: 'WhatsApp',
    
    // Features Page Section Titles
    feat_msg_tools: '📨 Инструменты Сообщений и Отправки',
    feat_extract_tools: '🔍 Инструменты Извлечения и Данных',
    feat_mgmt_tools: '🛡️ Управление и Защита',
    
    // CTA Section
    cta_ready: 'Готовы попробовать все эти функции?',
    cta_desc: 'Скачайте программу бесплатно и начните использовать все инструменты немедленно',
    btn_subscribe: 'Подписаться Сейчас',
    
    // View All Buttons
    view_all_features: 'Смотреть Все Функции →',
    view_all_plans: 'Смотреть Все Планы →',
    
    // Tutorial CTA
    cta_desc_tutorial: 'Скачайте программу бесплатно и начните свой путь в маркетинге WhatsApp',
    footer_desc: 'Профессиональная программа для маркетинга в WhatsApp с расширенными инструментами для массовой рассылки и автоматизации.',
    footer_quick: 'Быстрые Ссылки',
    footer_legal: 'Юридическое',
    footer_support: 'Поддержка',
    footer_rights: 'Все права защищены',
    
    // WA CRM Page
    wacrm_title: 'WA CRM - Управление отношениями с клиентами через WhatsApp',
    wacrm_desc: 'Профессиональное программное обеспечение для управления отношениями с клиентами через WhatsApp. Организация клиентов, отслеживание разговоров и управление продажами.',
    wacrm_badge: 'Новинка',
    wacrm_hero_title: 'WA CRM<br>Управление клиентами WhatsApp',
    wacrm_hero_sub: 'Полная система для управления вашими клиентами, организации разговоров WhatsApp и отслеживания продаж с высокой эффективностью',
    wacrm_download: 'Бесплатная загрузка',
    wacrm_buy: 'Купить сейчас - 20$/год',
    wacrm_feature1_title: 'Управление контактами', wacrm_feature1_desc: 'Организуйте всех клиентов одном месте с быстрой категоризацией и фильтрацией.',
    wacrm_feature2_title: 'Отслеживание разговоров', wacrm_feature2_desc: 'Отслеживайте все разговоры WhatsApp с клиентами и полную историю общения.',
    wacrm_feature3_title: 'Управление продажами', wacrm_feature3_desc: 'Отслеживайте продажи и заказы и создавайте комплексные отчеты о производительности вашей команды продаж.',
    wacrm_feature4_title: 'Быстрые ответы', wacrm_feature4_desc: 'Готовые шаблоны ответов для быстрых ответов с полными возможностями настройки.',
    wacrm_feature5_title: 'Календарь и задачи', wacrm_feature5_desc: 'Планируйте задачи и встречи с умными напоминаниями для эффективного управления временем.',
    wacrm_feature6_title: 'Отчеты и аналитика', wacrm_feature6_desc: 'Комплексные отчеты и подробная аналитика производительности продаж и вовлеченности клиентов.',
    wacrm_how_title: 'Как работает WA CRM?',
    wacrm_how_sub: 'Три простых шага для профессионального управления вашими клиентами',
    wacrm_step1_title: 'Загрузите программу', wacrm_step1_desc: 'Бесплатно загрузите WA CRM и установите на устройство в несколько простых шагов.',
    wacrm_step2_title: 'Подпишитесь и активируйте', wacrm_step2_desc: 'Годовая подписка всего за 20$ и получите код активации мгновенно.',
    wacrm_step3_title: 'Начните управлять', wacrm_step3_desc: 'Введите данные клиентов и начните профессионально управлять их отношениями.',
    wacrm_price_title: 'Один комплексный план',
    wacrm_price_amount: '20',
    wacrm_price_period: '/ год',
    wacrm_price_feat1: 'Все функции включены',
    wacrm_price_feat2: 'Бесплатные постоянные обновления',
    wacrm_price_feat3: 'Поддержка 24/7',
    wacrm_price_feat4: 'Лицензия на одно устройство',
    wacrm_cta_ready: 'Готовы управлять клиентами профессионально?',
    wacrm_cta_desc: 'Загрузите WA CRM прямо сейчас и начните организовывать отношения с клиентами сегодня',
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
    vid10_desc: 'Узнайте последний метод создания рекламной кампании в WhatsApp с лучшими практиками для снижения уровня блокировки.',

    // ── FAQ (contact page) ──
    faq_sub: 'Возможно, вы найдёте ответ в наших часто задаваемых вопросах',

    // ── Page titles & meta descriptions (used for document.title / meta description switching) ──
    title_home: 'WA Sender - Скачать программу WhatsApp Sender + руководство по активации и цены',
    desc_home: 'Скачайте WA Sender (v5.0.7) бесплатно: массовая рассылка сообщений, бот автоответа, защита от блокировки и извлечение участников групп. Посмотрите видеоруководство по активации и узнайте цены на подписку и способы оплаты.',
    title_features: 'Функции WA Sender v5.0.7 - более 15 профессиональных инструментов | WA Sender',
    desc_features: 'Узнайте обо всех функциях WA Sender: массовая рассылка сообщений, бот автоответа, извлечение участников, фильтрация номеров, планирование кампаний и более 15 профессиональных инструментов.',
    title_pricing: 'Цены и подписки WA Sender - гибкие тарифы для любых потребностей | WA Sender',
    desc_pricing: 'Выберите подходящий тарифный план WA Sender: 1 год, 2 года, 3 года или пожизненный. Цены начинаются всего от 5 долларов. Доступны разные способы оплаты.',
    title_contact: 'Связаться с нами - WA Sender | Техническая поддержка и вопросы',
    desc_contact: 'Свяжитесь со службой поддержки WA Sender через WhatsApp или по электронной почте. Мы готовы помочь с любым вопросом или технической проблемой.',
    title_tutorial: 'Обучение WA Sender - Пошаговые видеоруководства | WA Sender',
    desc_tutorial: 'Смотрите полные обучающие видео по WA Sender: установка, активация, массовая рассылка сообщений, извлечение участников и все инструменты по шагам.',
    title_privacy: 'Политика конфиденциальности - WA Sender | Как мы защищаем ваши данные',
    desc_privacy: 'Ознакомьтесь с политикой конфиденциальности WA Sender. Мы обязуемся защищать ваши персональные данные и никогда не передавать их третьим лицам.',
    title_purchase: 'Политика покупки - WA Sender | Способы оплаты и лицензии',
    desc_purchase: 'Ознакомьтесь с политикой покупки WA Sender: доступные способы оплаты, детали лицензии и условия покупки.',
    title_refund: 'Политика возврата средств - WA Sender | Условия возврата',
    desc_refund: 'Ознакомьтесь с политикой возврата средств WA Sender. Мы разъясняем условия возврата денег и порядок подачи запроса.',
    title_terms: 'Условия использования - WA Sender | Условия эксплуатации',
    desc_terms: 'Ознакомьтесь с условиями использования программы WA Sender и сайта wasendernew.com.',

    // ── Legal Pages: Privacy / Purchase / Refund / Terms (full content) ──
    legal_last_update: 'Последнее обновление: январь 2024 г.',
    legal_contact_whatsapp: '<strong>WhatsApp:</strong> <a href="https://wa.me/201279934735" target="_blank">+20 127 993 4735</a>',
    legal_contact_email: '<strong>Эл. почта:</strong> <a href="mailto:support@wasendernew.com">support@wasendernew.com</a>',
    pv01: '1. Введение',
    pv02: 'В WA Sender мы стремимся защищать вашу конфиденциальность. В этой политике объясняется, как мы собираем, используем и защищаем вашу личную информацию при использовании нашего сайта и программы WA Sender.',
    pv03: 'Используя наш сайт или программу, вы соглашаетесь с практиками, описанными в данной Политике конфиденциальности.',
    pv04: '2. Информация, которую мы собираем',
    pv05: '2.1 Информация, которую вы предоставляете добровольно:',
    pv06: '<strong>Контактная информация:</strong> полное имя, адрес электронной почты, номер телефона при обращении к нам или покупке лицензии.',
    pv07: '<strong>Платёжная информация:</strong> данные, необходимые для обработки ваших покупок (обрабатываются через защищённые платёжные шлюзы; мы не храним их напрямую).',
    pv08: '<strong>Технические вопросы:</strong> любая информация, которую вы предоставляете при сообщении о технической проблеме или запросе поддержки.',
    pv09: '2.2 Информация, собираемая автоматически:',
    pv10: '<strong>Данные о просмотре:</strong> тип браузера, операционная система, IP-адреса, посещённые страницы, дата и время посещения.',
    pv11: '<strong>Файлы cookie:</strong> мы используем cookie для улучшения вашего опыта на сайте. Вы можете отключить их в настройках браузера.',
    pv12: '<strong>Аналитические данные:</strong> мы используем анонимные инструменты аналитики, чтобы понять, как посетители используют наш сайт.',
    pv13: '3. Как мы используем вашу информацию',
    pv14: 'Мы используем собранную информацию в следующих целях:',
    pv15: 'Предоставление, эксплуатация и защита наших услуг (включая устранение неполадок).',
    pv16: 'Обработка транзакций и отправка информации, связанной с покупками.',
    pv17: 'Ответы на ваши запросы и предоставление технической поддержки.',
    pv18: 'Улучшение наших услуг и разработка новых функций.',
    pv19: 'Отправка важных уведомлений об услуге (при наличии).',
    pv20: 'Соблюдение юридических и нормативных обязательств.',
    pv21: '4. Передача информации',
    pv22: 'Мы не продаём, не обмениваем и не сдаём в аренду вашу личную информацию третьим лицам. Мы можем передавать вашу информацию только в следующих случаях:',
    pv23: '<strong>Поставщики услуг:</strong> компании, помогающие нам вести бизнес (платёжные шлюзы, хостинг серверов), обязанные защищать ваши данные.',
    pv24: '<strong>Юридические требования:</strong> когда этого требует закон или необходимо защитить наши права или безопасность наших пользователей.',
    pv25: '<strong>Ваше согласие:</strong> когда вы даёте нам явное согласие на передачу вашей информации.',
    pv26: '5. Безопасность данных',
    pv27: 'Мы принимаем надлежащие технические и организационные меры безопасности для защиты вашей личной информации от несанкционированного доступа, изменения, раскрытия или уничтожения. Однако ни одна передача данных через интернет не может быть гарантированно на 100% безопасной.',
    pv28: '6. Ваши права',
    pv29: 'Вы имеете право:',
    pv30: 'Получить доступ к персональным данным, которые мы храним о вас.',
    pv31: 'Запросить исправление любой неточной информации.',
    pv32: 'Запросить удаление ваших персональных данных (с некоторыми исключениями).',
    pv33: 'Возражать против обработки ваших данных в целях прямого маркетинга.',
    pv34: 'Отозвать своё согласие в любое время.',
    pv35: '7. Хранение данных',
    pv36: 'Мы храним вашу личную информацию только в течение времени, необходимого для достижения целей, изложенных в данной политике, если законом не требуется более длительный срок хранения.',
    pv37: '8. Ссылки на внешние сайты',
    pv38: 'Наш сайт может содержать ссылки на внешние сайты. Мы не несём ответственности за содержание этих внешних сайтов и не отвечаем за их практику конфиденциальности.',
    pv39: '9. Изменения данной политики',
    pv40: 'Мы можем время от времени обновлять данную Политику конфиденциальности. Мы будем сообщать о любых существенных изменениях, публикуя новую политику на этой странице и обновляя дату «последнее обновление».',
    pv41: '10. Свяжитесь с нами',
    pv42: 'Если у вас есть вопросы об этой Политике конфиденциальности, пожалуйста, свяжитесь с нами через:',
    pp01: '1. Введение',
    pp02: 'Данная политика разъясняет условия покупки и использования лицензий программы WA Sender. Приобретая лицензию WA Sender, вы соглашаетесь соблюдать данные условия.',
    pp03: '2. Виды лицензий и цены',
    pp04: 'Мы предлагаем несколько тарифных планов для разных потребностей:',
    pp05: '2.1 Планы для одного устройства:',
    pp06: '<strong>Годовая подписка:</strong> 5 долларов США — действует один год на одном устройстве.',
    pp07: '<strong>Подписка на 2 года:</strong> 15 долларов США — действует два года на одном устройстве.',
    pp08: '<strong>Подписка на 3 года:</strong> 20 долларов США — действует 3 года на одном устройстве.',
    pp09: '<strong>Пожизненная подписка:</strong> 50 долларов США — действует пожизненно на одном устройстве с постоянными обновлениями.',
    pp10: '2.2 Планы для нескольких устройств:',
    pp11: '<strong>2 устройства / год:</strong> 8 долларов США — две лицензии для двух разных устройств.',
    pp12: '<strong>3 устройства / год:</strong> 12 долларов США — 3 лицензии для 3 разных устройств.',
    pp13: '<strong>2 устройства / 2 года:</strong> 25 долларов США — две лицензии для двух устройств на два года.',
    pp14: '3. Принимаемые способы оплаты',
    pp15: 'Мы принимаем несколько способов оплаты для упрощения процесса покупки:',
    pp16: '<strong>Vodafone Cash (Египет):</strong> мгновенный перевод на кошелёк.',
    pp17: '<strong>Приложение Barq (Саудовская Аравия):</strong> международный перевод в Саудовскую Аравию.',
    pp18: '<strong>InstaPay (Египет):</strong> прямой перевод из Египта.',
    pp19: '<strong>Банковский перевод (саудовский IBAN):</strong> через банк D360 FINTECH.',
    pp20: '<strong>PayPal / Visa:</strong> безопасный международный платёж банковской картой.',
    pp21: '4. Процесс активации',
    pp22: 'Скачайте программу бесплатно с нашего сайта.',
    pp23: 'Выберите подходящий тариф на странице цен.',
    pp24: 'Завершите оплату одним из доступных способов.',
    pp25: 'Отправьте квитанцию об оплате через WhatsApp на номер: +20 127 993 4735',
    pp26: 'Вы получите код активации в течение нескольких минут (для банковских переводов — до 24 часов).',
    pp27: 'Введите код активации в программе, чтобы активировать все функции.',
    pp28: '5. Условия лицензии',
    pp29: 'Каждая лицензия действительна только для одного устройства (если это не лицензия для нескольких устройств).',
    pp30: 'Код активации нельзя передавать другим лицам.',
    pp31: 'Лицензия не подлежит передаче или перепродаже.',
    pp32: 'При смене устройства свяжитесь с нами для бесплатного переноса лицензии.',
    pp33: 'Бесплатные обновления доступны в течение действующего срока подписки.',
    pp34: '6. Гарантия цены',
    pp35: 'Мы оставляем за собой право изменять цены в любое время. Однако, если вы приобрели подписку, уплаченная вами цена останется действительной на весь срок вашей подписки.',
    pp36: '7. Счета и квитанции',
    pp37: 'После завершения оплаты вы можете запросить официальную квитанцию через WhatsApp или по электронной почте. Квитанция содержит детали покупки, дату оплаты и уплаченную сумму.',
    pp38: '8. Технические проблемы после покупки',
    pp39: 'Если вы столкнулись с технической проблемой при установке или активации программы:',
    pp40: 'Немедленно свяжитесь с нами через WhatsApp или по электронной почте.',
    pp41: 'Опишите проблему подробно, при возможности со скриншотом.',
    pp42: 'Наша служба поддержки решит вашу проблему как можно скорее (максимум в течение 24 часов).',
    pp43: '9. Свяжитесь с нами',
    pp44: 'По вопросам, связанным с покупкой или оплатой:',
    rf01: '1. Общая политика возврата средств',
    rf02: 'В WA Sender мы стремимся предоставлять высококачественный продукт и отличное обслуживание клиентов. Из-за цифровой природы нашего продукта (лицензионное ПО) наша политика возврата ограничена, но мы стремимся соответствовать ожиданиям наших клиентов.',
    rf03: '2. Случаи, дающие право на возврат средств',
    rf04: '2.1 Полный возврат (гарантия 7 дней):',
    rf05: 'Мы предлагаем гарантию полного возврата средств в течение <strong>7 дней</strong> с даты покупки в следующих случаях:',
    rf06: 'Если программа не работает на вашем устройстве, несмотря на помощь нашей службы технической поддержки.',
    rf07: 'Если существует серьёзная техническая неисправность, препятствующая использованию всех основных функций.',
    rf08: 'Если ваша лицензия не была активирована в течение 48 часов после оплаты (после обращения к нам).',
    rf09: '2.2 Частичный возврат:',
    rf10: 'В некоторых случаях мы можем предложить частичный возврат в размере от 50 до 70%:',
    rf11: 'Если ваши потребности изменились после покупки подписки.',
    rf12: 'Если вы обнаружили, что программа не соответствует вашим конкретным требованиям.',
    rf13: 'В случае технических проблем, которые были частично решены.',
    rf14: '3. Случаи, не дающие право на возврат средств',
    rf15: 'Возврат средств невозможен в следующих случаях:',
    rf16: 'По истечении 14 дней с даты покупки.',
    rf17: 'Если лицензия уже использовалась для отправки кампаний (даже пробных).',
    rf18: 'В случае нарушения условий использования или политик WhatsApp/Meta.',
    rf19: 'Если код активации был передан другим пользователям.',
    rf20: 'Если запрос на возврат связан с блокировкой номера WhatsApp (см. руководство по защите от блокировки).',
    rf21: '4. Как запросить возврат средств',
    rf22: 'Чтобы запросить возврат средств, выполните следующие шаги:',
    rf23: 'Свяжитесь с нами через WhatsApp по номеру: <a href="https://wa.me/201279934735" target="_blank">+20 127 993 4735</a>',
    rf24: 'Или отправьте письмо на адрес: <a href="mailto:support@wasendernew.com">support@wasendernew.com</a>',
    rf25: 'Подробно укажите причину запроса на возврат средств.',
    rf26: 'По возможности приложите оригинал квитанции об оплате.',
    rf27: 'Опишите возникшую проблему (при наличии) со скриншотами.',
    rf28: '5. Обработка запроса на возврат средств',
    rf29: '<strong>Время рассмотрения:</strong> мы рассмотрим ваш запрос в течение 48 рабочих часов.',
    rf30: '<strong>Время обработки:</strong> в случае одобрения возврат средств будет обработан в течение 5–10 рабочих дней.',
    rf31: '<strong>Способ возврата:</strong> сумма будет возвращена тем же способом оплаты, который использовался изначально.',
    rf32: '<strong>Подтверждение:</strong> вы получите подтверждение по электронной почте после обработки возврата.',
    rf33: '6. Альтернативы возврату средств',
    rf34: 'Вместо возврата средств мы можем предложить следующие альтернативы:',
    rf35: '<strong>Продление срока подписки:</strong> добавление бесплатного времени к вашей подписке.',
    rf36: '<strong>Бесплатное обновление:</strong> переход на более высокий тариф без доплаты разницы в цене.',
    rf37: '<strong>Перенос лицензии:</strong> перенос лицензии на другое устройство, если ваше текущее устройство несовместимо.',
    rf38: '<strong>Дополнительная обучающая сессия:</strong> отдельная сессия через WhatsApp с объяснением правильного использования программы.',
    rf39: '7. Важное замечание о блокировке WhatsApp',
    rf40: '<strong>⚠️ Важное уведомление:</strong> блокировка номера WhatsApp не является основанием для возврата средств. Мы предоставляем подробные рекомендации по защите от блокировки на странице «Обучение» и в самой программе. Пользователь несёт ответственность за соблюдение этих рекомендаций и применение лучших практик. Мы настоятельно рекомендуем прочитать руководство по защите от блокировки перед использованием программы для отправки любых сообщений.',
    rf41: '8. Часто задаваемые вопросы о возврате средств',
    rf42: 'В: Могу ли я попробовать программу перед покупкой?',
    rf43: 'О: Да! Вы можете бесплатно скачать программу и опробовать все функции. Оплата требуется только для активации лицензии.',
    rf44: 'В: Что делать, если программа не работает на моём устройстве?',
    rf45: 'О: WA Sender требует Windows 10 или более новую версию. Если ваше устройство совместимо, но программа всё равно не работает, свяжитесь с нами, и мы поможем вам. Если проблему не удастся решить, вы можете запросить возврат средств в течение 7 дней.',
    rf46: 'В: Могу ли я передумать после покупки пожизненной подписки?',
    rf47: 'О: Да, вы можете запросить возврат средств в течение 7 дней после покупки, если не использовали лицензию. После этого мы не можем принимать запросы на возврат для пожизненных подписок.',
    rf48: '9. Свяжитесь с нами',
    rf49: 'По вопросам о политике возврата средств или для подачи запроса:',
    tm01: '1. Принятие условий',
    tm02: 'Используя сайт wasendernew.com или программу WA Sender, вы соглашаетесь соблюдать данные Условия использования. Если вы не согласны с любым из этих условий, пожалуйста, не используйте наши услуги.',
    tm03: '2. Описание услуги',
    tm04: 'WA Sender — это программа для маркетинга через WhatsApp, предоставляющая инструменты для массовой рассылки сообщений, автоматизации и управления маркетинговыми кампаниями. Программа предназначена для личного и коммерческого использования в рамках законов и политик WhatsApp/Meta.',
    tm05: '3. Требования к праву на использование',
    tm06: 'Чтобы использовать WA Sender, вы должны:',
    tm07: 'Достичь совершеннолетия (18 лет и старше) в вашей стране.',
    tm08: 'Обладать правоспособностью для заключения обязывающего соглашения.',
    tm09: 'Предоставлять точную и правдивую информацию при регистрации или покупке.',
    tm10: 'Сохранять конфиденциальность данных вашей учётной записи.',
    tm11: '4. Разрешённое использование',
    tm12: 'Пользователь соглашается использовать WA Sender только в следующих целях:',
    tm13: 'Отправка законных маркетинговых сообщений на номера, давшие своё согласие.',
    tm14: 'Профессиональное управление маркетинговыми кампаниями через WhatsApp.',
    tm15: 'Автоматизация ответов на законные запросы клиентов.',
    tm16: 'Извлечение общедоступных данных в законных маркетинговых целях.',
    tm17: '5. Запрещённое использование',
    tm18: '<strong>Прямо запрещено</strong> использовать программу в следующих целях:',
    tm19: 'Отправка спама или нежелательных сообщений.',
    tm20: 'Отправка вредоносного, мошеннического или незаконного контента.',
    tm21: 'Нарушение конфиденциальности или прав других лиц.',
    tm22: 'Попытки взлома или повреждения систем WhatsApp или Meta.',
    tm23: 'Передача, продажа или распространение кода активации.',
    tm24: 'Обратная разработка, изменение или копирование программы.',
    tm25: 'Использование в любых целях, противоречащих условиям обслуживания WhatsApp/Meta.',
    tm26: '6. Ответственность перед WhatsApp/Meta',
    tm27: '<strong>⚠️ Важное уведомление:</strong> WA Sender не связан с Meta, WhatsApp, Facebook или любыми их дочерними компаниями. Использование данной программы может нарушать условия обслуживания WhatsApp. Вы единолично несёте полную ответственность за любые последствия использования программы, включая, помимо прочего, блокировку вашей учётной записи WhatsApp или судебные разбирательства против вас.',
    tm28: '7. Интеллектуальная собственность',
    tm29: 'Все права на WA Sender принадлежат команде разработчиков.',
    tm30: 'Программа защищена международными законами об авторском праве.',
    tm31: 'Вы не имеете права копировать, изменять или распространять программу без явного письменного разрешения.',
    tm32: 'Логотип, значки и дизайн являются собственностью WA Sender.',
    tm33: '8. Лицензия и использование',
    tm34: 'При покупке лицензии вы получаете личное, непередаваемое право на использование программы.',
    tm35: 'Каждая лицензия действительна только для одного устройства (если это не лицензия для нескольких устройств).',
    tm36: 'Лицензия не может быть сдана в аренду, передана во временное пользование или продана третьим лицам.',
    tm37: 'Мы оставляем за собой право аннулировать лицензию в случае нарушения данных условий.',
    tm38: '9. Отказ от гарантий',
    tm39: 'Программа предоставляется «как есть» без каких-либо явных или подразумеваемых гарантий. Мы не гарантируем:',
    tm40: 'Что программа будет работать без перебоев и ошибок.',
    tm41: 'Что результаты использования программы оправдают ваши ожидания.',
    tm42: 'Что использование программы не приведёт к блокировке вашего номера WhatsApp.',
    tm43: 'Что все функции будут непрерывно доступны.',
    tm44: '10. Ограничение ответственности',
    tm45: 'В максимально допустимой степени наша общая ответственность не превысит сумму, уплаченную вами за лицензию. Мы не несём ответственности за:',
    tm46: 'Любой прямой, косвенный, случайный или косвенный ущерб, возникший в результате использования или невозможности использования программы.',
    tm47: 'Потерю данных, прибыли или деловых возможностей.',
    tm48: 'Блокировку вашей учётной записи в WhatsApp или на любой другой платформе.',
    tm49: 'Любые судебные иски третьих лиц против вас.',
    tm50: '11. Возмещение ущерба',
    tm51: 'Вы соглашаетесь возместить ущерб и оградить от ответственности WA Sender, его команду, сотрудников и партнёров от любых претензий, убытков или ущерба (включая судебные расходы), возникающих в результате:',
    tm52: 'Вашего использования программы.',
    tm53: 'Вашего нарушения данных условий.',
    tm54: 'Вашего нарушения прав других лиц.',
    tm55: '12. Изменения условий',
    tm56: 'Мы оставляем за собой право изменять данные условия в любое время. Изменения вступают в силу немедленно после публикации на сайте. Продолжение использования программы после внесения изменений означает ваше согласие с ними.',
    tm57: '13. Применимое право',
    tm58: 'Данные условия регулируются и толкуются в соответствии с применимым законодательством. Любые споры, возникающие из данных условий, подлежат исключительной юрисдикции компетентных судов.',
    tm59: '14. Связаться с нами',
    tm60: 'По вопросам, касающимся данных условий:',

    // WaDefender Page
    wadefender_title: 'WaDefender - Анализатор Силы Аккаунта WhatsApp',
    wadefender_desc: 'Профессиональный инструмент для анализа силы вашего аккаунта WhatsApp',
    wadefender_badge: '🛡️ Продвинутый Инструмент Защиты',
    wadefender_hero_title: 'WaDefender<br>Анализатор Аккаунта WhatsApp',
    wadefender_hero_sub: 'Профессиональный инструмент для анализа и проверки силы вашего аккаунта WhatsApp, обнаружения слабых мест и защиты от блокировок.',
    wadefender_download: 'Бесплатная Загрузка',
    wadefender_buy: 'Подписаться - 5$/год',
    wadefender_feature1_title: 'Анализ Силы Аккаунта',
    wadefender_feature1_desc: 'Комплексная проверка состояния вашего аккаунта WhatsApp с подробным отчётом о сильных и слабых сторонах.',
    wadefender_feature2_title: 'Проверка Валидности Номеров',
    wadefender_feature2_desc: 'Проверить активность номеров WhatsApp и узнать, зарегистрированы они или заблокированы.',
    wadefender_feature3_title: 'Защита от Блокировки',
    wadefender_feature3_desc: 'Оценить риски блокировки вашего аккаунта и превентивные меры защиты.',
    wadefender_feature4_title: 'Подробные Отчёты',
    wadefender_feature4_desc: 'Комплексные и актуальные отчёты о состоянии вашего аккаунта.',
    wadefender_how_title: 'Начните в 3 Простых Шага',
    wadefender_step1_title: 'Загрузить Программу',
    wadefender_step1_desc: 'Загрузите WaDefender бесплатно и установите на своё устройство.',
    wadefender_step2_title: 'Подпишитесь и Активируйте',
    wadefender_step2_desc: 'Подпишитесь всего за 5$ на полный год.',
    wadefender_step3_title: 'Начните Анализ',
    wadefender_step3_desc: 'Введите код активации и начните проверку аккаунта.',
    wadefender_price_title: 'Годовой План',
    wadefender_price_amount: '$5',
    wadefender_price_period: '/год',

    // Gulf Data Packages
    kuwait_title: 'Пакет Кувейта',
    kuwait_count: '2 Миллиона Номеров',
    kuwait_price: '$25 USD',
    uae_title: 'Пакет ОАЭ',
    uae_count: '1 Миллион Номеров',
    uae_price: '$15 USD',
    gulf_title: 'Пакет Стран Персидского Залива',
    gulf_count: '10М+ Номеров',
    gulf_price: '$250 USD'
  },
  
  it: {
    nav_home: 'Home',
    nav_how: 'Tutorial',
    nav_guide: 'Guida Anti-Ban',
    nav_features: 'Funzionalità',
    nav_pricing: 'Prezzi',
    nav_contact: 'Contatti',
    nav_policies: 'Politiche',
    nav_marketing: '📊 Dati di Marketing',
    nav_wacrm: '🟢 WA CRM',
    nav_wadefender: '🛡️ WaDefender',
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
    pm_paypal_note2: 'Clicca su \'Acquista ora\' o scansiona il QR sotto il piano desiderato in alto per andare direttamente alla pagina di pagamento con l\'importo corretto. Dopo il pagamento, invia l\'indirizzo email utilizzato via WhatsApp.',
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
    cf_desc: 'Compila il modulo qui sotto e ti risponderemo al più presto',
    cf_name_ph: 'Inserisci il tuo nome completo',
    cf_subject_ph: 'Seleziona l\'oggetto del messaggio',
    cf_msg_ph: 'Scrivi qui il tuo messaggio in dettaglio...',
    
    // Contact FAQ
    faq_contact_title: 'Non hai trovato risposta alla tua domanda?',
    faq_contact_sub: 'Potresti trovare una risposta nelle nostre domande frequenti',
    
    // Footer Links
    footer_privacy: 'Privacy Policy',
    footer_refund: 'Policy di Rimborso',
    footer_terms: 'Termini e Condizioni',
    footer_purchase: 'Policy di Acquisto',
    footer_whatsapp: 'WhatsApp',
    
    // Features Page Section Titles
    feat_msg_tools: '📨 Strumenti di Messaggistica e Invio',
    feat_extract_tools: '🔍 Strumenti di Estrazione e Dati',
    feat_mgmt_tools: '🛡️ Gestione e Protezione',
    
    // CTA Section
    cta_ready: 'Pronto a provare tutte queste funzionalità?',
    cta_desc: 'Scarica il programma gratuitamente e inizia a usare tutti gli strumenti immediatamente',
    btn_subscribe: 'Iscriviti Ora',
    
    // View All Buttons
    view_all_features: 'Vedi Tutte le Funzionalità →',
    view_all_plans: 'Vedi Tutti i Piani →',
    
    // Tutorial CTA
    cta_desc_tutorial: 'Scarica il programma gratuitamente e inizia il tuo percorso di marketing WhatsApp',
    footer_desc: 'Software professionale di marketing WhatsApp con strumenti avanzati per messaggi in massa e automazione.',
    footer_quick: 'Link Rapidi',
    footer_legal: 'Legale',
    footer_support: 'Supporto',
    footer_rights: 'Tutti i diritti riservati',
    
    // WA CRM Page
    wacrm_title: 'WA CRM - Gestione delle Relazioni Clienti tramite WhatsApp',
    wacrm_desc: 'Software professionale per gestire le relazioni con i clienti tramite WhatsApp. Organizza i clienti, traccia le conversazioni e gestisci le vendite facilmente.',
    wacrm_badge: 'Nuovo',
    wacrm_hero_title: 'WA CRM<br>Gestione Clienti WhatsApp',
    wacrm_hero_sub: 'Sistema completo per gestire i tuoi clienti, organizzare le conversazioni WhatsApp e tracciare le vendite con alta efficienza',
    wacrm_download: 'Download Gratuito',
    wacrm_buy: 'Acquista Ora - 20€/anno',
    wacrm_feature1_title: 'Gestione Contatti', wacrm_feature1_desc: 'Organizza tutti i tuoi clienti in un unico luogo con rapida categorizzazione e filtraggio.',
    wacrm_feature2_title: 'Tracciamento Conversazioni', wacrm_feature2_desc: 'Traccia tutte le conversazioni WhatsApp con i clienti e storia completa delle comunicazioni.',
    wacrm_feature3_title: 'Gestione Vendite', wacrm_feature3_desc: 'Traccia vendite e ordini e genera report completi sulle prestazioni del tuo team di vendita.',
    wacrm_feature4_title: 'Risposte Rapide', wacrm_feature4_desc: 'Modelli di risposta pronti all\'uso per risposte rapide con opzioni di personalizzazione complete.',
    wacrm_feature5_title: 'Calendario e Attività', wacrm_feature5_desc: 'Pianifica attività e appuntamenti promemoria intelligenti per una gestione efficace del tempo.',
    wacrm_feature6_title: 'Report e Analisi', wacrm_feature6_desc: 'Report completi e analisi dettagliate delle prestazioni di vendita e del coinvolimento dei clienti.',
    wacrm_how_title: 'Come funziona WA CRM?',
    wacrm_how_sub: 'Tre semplici passaggi per gestire professionalmente i tuoi clienti',
    wacrm_step1_title: 'Scarica il Programma', wacrm_step1_desc: 'Scarica WA CRM gratuitamente e installalo sul tuo dispositivo in pochi passaggi.',
    wacrm_step2_title: 'Abbonati e Attiva', wacrm_step2_desc: 'Abbonamento annuale a soli 20€ e ricevi il codice di attivazione istantaneamente.',
    wacrm_step3_title: 'Inizia a Gestire', wacrm_step3_desc: 'Inserisci i dati dei tuoi clienti e inizia a gestire le loro relazioni professionalmente.',
    wacrm_price_title: 'Piano Completo Unico',
    wacrm_price_amount: '20',
    wacrm_price_period: '/ anno',
    wacrm_price_feat1: 'Tutte le funzioni incluse',
    wacrm_price_feat2: 'Aggiornamenti gratuiti continui',
    wacrm_price_feat3: 'Supporto diretto 24/7',
    wacrm_price_feat4: 'Licenza per un singolo dispositivo',
    wacrm_cta_ready: 'Pronto a gestire i tuoi clienti professionalmente?',
    wacrm_cta_desc: 'Scarica WA CRM ora e inizia a organizzare le relazioni con i clienti oggi',
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
    vid10_desc: 'Impara l\'ultimo metodo per creare campagna pubblicitaria via WhatsApp con migliori pratiche per ridurre tasso di blocco.',

    // WaDefender Page
    wadefender_title: 'WaDefender - Analizzatore di Forza Account WhatsApp',
    wadefender_desc: 'Strumento professionale per analizzare la forza del tuo account WhatsApp',
    wadefender_badge: '🛡️ Strumento di Protezione Avanzato',
    wadefender_hero_title: 'WaDefender<br>Analizzatore Account WhatsApp',
    wadefender_hero_sub: 'Strumento professionale per analizzare e controllare la forza del tuo account WhatsApp, scoprire debolezze e proteggere dai blocchi.',
    wadefender_download: 'Download Gratuito',
    wadefender_buy: 'Abbonati Ora - 5$/anno',
    wadefender_feature1_title: 'Analisi Forza Account',
    wadefender_feature1_desc: 'Controllo completo dello stato del tuo account WhatsApp con rapporto dettagliato su punti di forza e debolezza.',
    wadefender_feature2_title: 'Controllo Validità Numeri',
    wadefender_feature2_desc: 'Verifica l\'attività dei numeri WhatsApp e sapere se sono registrati o bloccati.',
    wadefender_feature3_title: 'Protezione dal Blocco',
    wadefender_feature3_desc: 'Valutare i rischi di blocco sul tuo account e misure preventive di protezione.',
    wadefender_feature4_title: 'Rapporti Dettagliati',
    wadefender_feature4_desc: 'Rapporti completi e aggiornati sullo stato del tuo account.',
    wadefender_how_title: 'Inizia in 3 Semplici Passaggi',
    wadefender_step1_title: 'Scarica il Programma',
    wadefender_step1_desc: 'Scarica WaDefender gratuitamente e installalo sul tuo dispositivo.',
    wadefender_step2_title: 'Abbonati e Attiva',
    wadefender_step2_desc: 'Abbonati per soli 5$ per l\'anno completo.',
    wadefender_step3_title: 'Inizia l\'Analisi',
    wadefender_step3_desc: 'Inserisci il codice di attivazione e inizia a controllare il tuo account.',
    wadefender_price_title: 'Piano Annuale',
    wadefender_price_amount: '$5',
    wadefender_price_period: '/anno',

    // Gulf Data Packages
    kuwait_title: 'Pacco Kuwait',
    kuwait_count: '2 Milioni di Numeri',
    kuwait_price: '$25 USD',
    uae_title: 'Pacco UAE',
    uae_count: '1 Milione di Numeri',
    uae_price: '$15 USD',
    gulf_title: 'Bundle Paesi Golfo',
    gulf_count: '10M+ Numeri',
    gulf_price: '$250 USD'
  },

    // ── FAQ (contact page) ──
    faq_sub: 'Potresti trovare una risposta nelle nostre domande frequenti',

    // ── Page titles & meta descriptions (used for document.title / meta description switching) ──
    title_home: 'WA Sender - Scarica il software WhatsApp Sender + Guida all\'attivazione e prezzi',
    desc_home: 'Scarica WA Sender (v5.0.7) gratuitamente: invio di messaggi di massa, bot di risposta automatica, protezione anti-ban ed estrazione dei membri dei gruppi. Guarda la guida video all\'attivazione e scopri i prezzi degli abbonamenti e i metodi di pagamento.',
    title_features: 'Funzionalità di WA Sender v5.0.7 - Oltre 15 strumenti professionali | WA Sender',
    desc_features: 'Scopri tutte le funzionalità di WA Sender: invio di messaggi di massa, bot di risposta automatica, estrazione membri, filtro numeri, pianificazione campagne e oltre 15 strumenti professionali.',
    title_pricing: 'Prezzi e abbonamenti WA Sender - Piani flessibili per ogni esigenza | WA Sender',
    desc_pricing: 'Scegli il piano di abbonamento WA Sender più adatto a te: 1 anno, 2 anni, 3 anni o a vita. Prezzi a partire da soli 5 dollari. Diversi metodi di pagamento disponibili.',
    title_contact: 'Contattaci - WA Sender | Assistenza tecnica e richieste',
    desc_contact: 'Contatta il team di assistenza di WA Sender via WhatsApp o email. Siamo qui per aiutarti con qualsiasi domanda o problema tecnico.',
    title_tutorial: 'Tutorial WA Sender - Guide video passo dopo passo | WA Sender',
    desc_tutorial: 'Guarda video tutorial completi per WA Sender: installazione, attivazione, invio di messaggi di massa, estrazione membri e tutti gli strumenti passo dopo passo.',
    title_privacy: 'Informativa sulla privacy - WA Sender | Come proteggiamo i tuoi dati',
    desc_privacy: 'Leggi l\'informativa sulla privacy di WA Sender. Ci impegniamo a proteggere i tuoi dati personali e a non condividerli mai con terze parti.',
    title_purchase: 'Politica di acquisto - WA Sender | Metodi di pagamento e licenze',
    desc_purchase: 'Leggi la politica di acquisto di WA Sender: metodi di pagamento disponibili, dettagli della licenza e condizioni di acquisto.',
    title_refund: 'Politica di rimborso - WA Sender | Condizioni di rimborso',
    desc_refund: 'Leggi la politica di rimborso di WA Sender. Spieghiamo le condizioni per il rimborso e come inviare una richiesta.',
    title_terms: 'Termini e condizioni - WA Sender | Termini di utilizzo',
    desc_terms: 'Leggi i termini e le condizioni per l\'utilizzo del software WA Sender e del sito wasendernew.com.',

    // ── Legal Pages: Privacy / Purchase / Refund / Terms (full content) ──
    legal_last_update: 'Ultimo aggiornamento: gennaio 2024',
    legal_contact_whatsapp: '<strong>WhatsApp:</strong> <a href="https://wa.me/201279934735" target="_blank">+20 127 993 4735</a>',
    legal_contact_email: '<strong>Email:</strong> <a href="mailto:support@wasendernew.com">support@wasendernew.com</a>',
    pv01: '1. Introduzione',
    pv02: 'In WA Sender ci impegniamo a proteggere la tua privacy. Questa politica spiega come raccogliamo, utilizziamo e proteggiamo le tue informazioni personali quando utilizzi il nostro sito web e il software WA Sender.',
    pv03: 'Utilizzando il nostro sito web o il nostro software, accetti le pratiche descritte in questa Informativa sulla privacy.',
    pv04: '2. Informazioni che raccogliamo',
    pv05: '2.1 Informazioni fornite volontariamente:',
    pv06: '<strong>Informazioni di contatto:</strong> nome completo, indirizzo email, numero di telefono quando ci contatti o acquisti una licenza.',
    pv07: '<strong>Informazioni di pagamento:</strong> dati di pagamento necessari per elaborare i tuoi acquisti (elaborati tramite gateway di pagamento sicuri; non li conserviamo direttamente).',
    pv08: '<strong>Questioni tecniche:</strong> qualsiasi informazione fornita quando segnali un problema tecnico o richiedi assistenza.',
    pv09: '2.2 Informazioni raccolte automaticamente:',
    pv10: '<strong>Dati di navigazione:</strong> tipo di browser, sistema operativo, indirizzi IP, pagine visitate, data e ora della visita.',
    pv11: '<strong>Cookie:</strong> utilizziamo i cookie per migliorare la tua esperienza sul sito. Puoi disattivarli dalle impostazioni del browser.',
    pv12: '<strong>Dati analitici:</strong> utilizziamo strumenti di analisi anonimi per capire come i visitatori usano il nostro sito.',
    pv13: '3. Come utilizziamo le tue informazioni',
    pv14: 'Utilizziamo le informazioni raccolte per i seguenti scopi:',
    pv15: 'Fornire, gestire e proteggere i nostri servizi (compresa la risoluzione dei problemi).',
    pv16: 'Elaborare le transazioni e inviare informazioni relative agli acquisti.',
    pv17: 'Rispondere alle tue richieste e fornire assistenza tecnica.',
    pv18: 'Migliorare i nostri servizi e sviluppare nuove funzionalità.',
    pv19: 'Inviare notifiche importanti sul servizio (se presenti).',
    pv20: 'Rispettare gli obblighi legali e normativi.',
    pv21: '4. Condivisione delle informazioni',
    pv22: 'Non vendiamo, scambiamo né affittiamo le tue informazioni personali a terzi. Possiamo condividere le tue informazioni solo nei seguenti casi:',
    pv23: '<strong>Fornitori di servizi:</strong> aziende che ci aiutano a gestire la nostra attività (gateway di pagamento, hosting dei server) obbligate a proteggere i tuoi dati.',
    pv24: '<strong>Requisiti legali:</strong> quando richiesto dalla legge o per proteggere i nostri diritti o la sicurezza dei nostri utenti.',
    pv25: '<strong>Il tuo consenso:</strong> quando ci dai il consenso esplicito a condividere le tue informazioni.',
    pv26: '5. Sicurezza dei dati',
    pv27: 'Adottiamo misure di sicurezza tecniche e organizzative adeguate per proteggere le tue informazioni personali da accessi, modifiche, divulgazioni o distruzioni non autorizzate. Tuttavia, nessuna trasmissione di dati su Internet può essere garantita sicura al 100%.',
    pv28: '6. I tuoi diritti',
    pv29: 'Hai il diritto di:',
    pv30: 'Accedere ai dati personali che conserviamo su di te.',
    pv31: 'Richiedere la correzione di qualsiasi informazione inesatta.',
    pv32: 'Richiedere la cancellazione dei tuoi dati personali (con alcune eccezioni).',
    pv33: 'Opporti al trattamento dei tuoi dati per finalità di marketing diretto.',
    pv34: 'Revocare il tuo consenso in qualsiasi momento.',
    pv35: '7. Conservazione dei dati',
    pv36: 'Conserviamo le tue informazioni personali solo per il tempo necessario a raggiungere le finalità indicate in questa politica, salvo quando la legge richieda un periodo di conservazione più lungo.',
    pv37: '8. Link a siti esterni',
    pv38: 'Il nostro sito potrebbe contenere link a siti esterni. Non siamo responsabili del contenuto di questi siti esterni e non ci assumiamo alcuna responsabilità per le loro pratiche sulla privacy.',
    pv39: '9. Modifiche a questa politica',
    pv40: 'Potremmo aggiornare periodicamente questa Informativa sulla privacy. Annunceremo eventuali modifiche significative pubblicando la nuova politica su questa pagina e aggiornando la data di "ultimo aggiornamento".',
    pv41: '10. Contattaci',
    pv42: 'Se hai domande su questa Informativa sulla privacy, contattaci tramite:',
    pp01: '1. Introduzione',
    pp02: 'Questa politica spiega i termini e le condizioni per l\'acquisto e l\'utilizzo delle licenze del software WA Sender. Acquistando una licenza WA Sender, accetti di rispettare questi termini.',
    pp03: '2. Tipi di licenza e prezzi',
    pp04: 'Offriamo diversi piani di abbonamento per soddisfare esigenze diverse:',
    pp05: '2.1 Piani per un singolo dispositivo:',
    pp06: '<strong>Abbonamento annuale:</strong> 5 USD - valido per un anno su un dispositivo.',
    pp07: '<strong>Abbonamento di 2 anni:</strong> 15 USD - valido per due anni su un dispositivo.',
    pp08: '<strong>Abbonamento di 3 anni:</strong> 20 USD - valido per 3 anni su un dispositivo.',
    pp09: '<strong>Abbonamento a vita:</strong> 50 USD - valido a vita su un dispositivo con aggiornamenti permanenti.',
    pp10: '2.2 Piani multi-dispositivo:',
    pp11: '<strong>2 dispositivi / anno:</strong> 8 USD - due licenze per due dispositivi diversi.',
    pp12: '<strong>3 dispositivi / anno:</strong> 12 USD - 3 licenze per 3 dispositivi diversi.',
    pp13: '<strong>2 dispositivi / 2 anni:</strong> 25 USD - due licenze per due dispositivi per due anni.',
    pp14: '3. Metodi di pagamento accettati',
    pp15: 'Accettiamo diversi metodi di pagamento per facilitare il processo di acquisto:',
    pp16: '<strong>Vodafone Cash (Egitto):</strong> trasferimento istantaneo al portafoglio.',
    pp17: '<strong>App Barq (Arabia Saudita):</strong> trasferimento internazionale verso l\'Arabia Saudita.',
    pp18: '<strong>InstaPay (Egitto):</strong> trasferimento diretto dall\'Egitto.',
    pp19: '<strong>Bonifico bancario (IBAN saudita):</strong> tramite la banca D360 FINTECH.',
    pp20: '<strong>PayPal / Visa:</strong> pagamento internazionale sicuro con carta bancaria.',
    pp21: '4. Processo di attivazione',
    pp22: 'Scarica gratuitamente il software dal nostro sito.',
    pp23: 'Scegli il piano più adatto a te dalla pagina dei prezzi.',
    pp24: 'Completa il pagamento con uno dei metodi disponibili.',
    pp25: 'Invia la ricevuta di pagamento via WhatsApp al numero: +20 127 993 4735',
    pp26: 'Riceverai il codice di attivazione entro pochi minuti (fino a 24 ore per i bonifici bancari).',
    pp27: 'Inserisci il codice di attivazione all\'interno del software per attivare tutte le funzionalità.',
    pp28: '5. Termini della licenza',
    pp29: 'Ogni licenza è valida per un solo dispositivo (a meno che non si tratti di una licenza multi-dispositivo).',
    pp30: 'Il codice di attivazione non può essere condiviso con altre persone.',
    pp31: 'La licenza non è trasferibile né rivendibile.',
    pp32: 'In caso di cambio dispositivo, contattaci per trasferire la licenza gratuitamente.',
    pp33: 'Gli aggiornamenti gratuiti sono disponibili durante il periodo di validità dell\'abbonamento.',
    pp34: '6. Garanzia dei prezzi',
    pp35: 'Ci riserviamo il diritto di modificare i nostri prezzi in qualsiasi momento. Tuttavia, se acquisti un abbonamento, il prezzo pagato rimarrà valido per l\'intera durata del tuo abbonamento.',
    pp36: '7. Fatture e ricevute',
    pp37: 'Dopo aver completato il pagamento, puoi richiedere una ricevuta ufficiale via WhatsApp o email. La ricevuta contiene i dettagli dell\'acquisto, la data di pagamento e l\'importo pagato.',
    pp38: '8. Problemi tecnici dopo l\'acquisto',
    pp39: 'Se riscontri un problema tecnico durante l\'installazione o l\'attivazione del software:',
    pp40: 'Contattaci immediatamente via WhatsApp o email.',
    pp41: 'Descrivi il problema in dettaglio con uno screenshot se possibile.',
    pp42: 'Il nostro team di assistenza risolverà il tuo problema il prima possibile (entro un massimo di 24 ore).',
    pp43: '9. Contattaci',
    pp44: 'Per domande relative all\'acquisto o al pagamento:',
    rf01: '1. Politica generale di rimborso',
    rf02: 'In WA Sender ci impegniamo a offrire un prodotto di alta qualità e un ottimo servizio clienti. Data la natura digitale del nostro prodotto (software con licenza), la nostra politica di rimborso è limitata, ma cerchiamo comunque di soddisfare le aspettative dei nostri clienti.',
    rf03: '2. Casi idonei al rimborso',
    rf04: '2.1 Rimborso completo (garanzia di 7 giorni):',
    rf05: 'Offriamo una garanzia di rimborso completo entro <strong>7 giorni</strong> dalla data di acquisto nei seguenti casi:',
    rf06: 'Se il software non funziona sul tuo dispositivo nonostante l\'assistenza del nostro team di supporto tecnico.',
    rf07: 'Se si verifica un malfunzionamento tecnico grave che impedisce l\'uso di tutte le funzionalità principali.',
    rf08: 'Se la tua licenza non è stata attivata entro 48 ore dal pagamento (dopo averci contattato).',
    rf09: '2.2 Rimborso parziale:',
    rf10: 'In alcuni casi, potremmo offrire un rimborso parziale compreso tra il 50 e il 70%:',
    rf11: 'Se le tue esigenze sono cambiate dopo l\'acquisto dell\'abbonamento.',
    rf12: 'Se ritieni che il software non soddisfi le tue esigenze specifiche.',
    rf13: 'In caso di problemi tecnici risolti solo parzialmente.',
    rf14: '3. Casi non idonei al rimborso',
    rf15: 'Non è possibile richiedere un rimborso nei seguenti casi:',
    rf16: 'Dopo che sono trascorsi 14 giorni dalla data di acquisto.',
    rf17: 'Se la licenza è già stata utilizzata per inviare campagne (anche di prova).',
    rf18: 'In caso di violazione dei termini di utilizzo o delle policy di WhatsApp/Meta.',
    rf19: 'Se il codice di attivazione è stato condiviso con altri utenti.',
    rf20: 'Se la richiesta di rimborso è dovuta al ban di un numero WhatsApp (vedi la guida di protezione anti-ban).',
    rf21: '4. Come richiedere un rimborso',
    rf22: 'Per richiedere un rimborso, segui questi passaggi:',
    rf23: 'Contattaci via WhatsApp al numero: <a href="https://wa.me/201279934735" target="_blank">+20 127 993 4735</a>',
    rf24: 'Oppure invia un\'email a: <a href="mailto:support@wasendernew.com">support@wasendernew.com</a>',
    rf25: 'Indica in dettaglio il motivo della richiesta di rimborso.',
    rf26: 'Allega la ricevuta di pagamento originale, se possibile.',
    rf27: 'Descrivi il problema riscontrato (se presente) con screenshot.',
    rf28: '5. Elaborazione della richiesta di rimborso',
    rf29: '<strong>Tempo di revisione:</strong> esamineremo la tua richiesta entro 48 ore lavorative.',
    rf30: '<strong>Tempo di elaborazione:</strong> in caso di approvazione, il rimborso sarà elaborato entro 5-10 giorni lavorativi.',
    rf31: '<strong>Metodo di rimborso:</strong> l\'importo sarà rimborsato con lo stesso metodo di pagamento originale.',
    rf32: '<strong>Conferma:</strong> riceverai una conferma via email una volta elaborato il rimborso.',
    rf33: '6. Alternative al rimborso',
    rf34: 'Invece del rimborso, potremmo offrire le seguenti alternative:',
    rf35: '<strong>Estensione del periodo di abbonamento:</strong> aggiunta di tempo gratuito al tuo abbonamento.',
    rf36: '<strong>Aggiornamento gratuito:</strong> passaggio a un piano superiore senza pagare la differenza di prezzo.',
    rf37: '<strong>Trasferimento della licenza:</strong> trasferimento della licenza a un altro dispositivo se il tuo dispositivo attuale non è compatibile.',
    rf38: '<strong>Sessione di formazione extra:</strong> una sessione dedicata via WhatsApp per spiegare come utilizzare correttamente il software.',
    rf39: '7. Nota importante sui ban di WhatsApp',
    rf40: '<strong>⚠️ Avviso importante:</strong> il ban di un numero WhatsApp non è motivo di rimborso. Forniamo indicazioni dettagliate sulla protezione anti-ban nella pagina "Tutorial" e all\'interno del software stesso. L\'utente è responsabile di seguire queste indicazioni e di applicare le migliori pratiche. Consigliamo vivamente di leggere la guida di protezione anti-ban prima di utilizzare il software per inviare qualsiasi messaggio.',
    rf41: '8. Domande frequenti sui rimborsi',
    rf42: 'D: Posso provare il software prima di acquistarlo?',
    rf43: 'R: Sì! Puoi scaricare il software gratuitamente e provare tutte le funzionalità. Il pagamento è richiesto solo per attivare la licenza.',
    rf44: 'D: Cosa succede se il software non funziona sul mio dispositivo?',
    rf45: 'R: WA Sender richiede Windows 10 o versioni successive. Se il tuo dispositivo è compatibile ma il software non funziona comunque, contattaci e ti aiuteremo. Se non riusciamo a risolvere il problema, puoi richiedere un rimborso entro 7 giorni.',
    rf46: 'D: Posso cambiare idea dopo aver acquistato un abbonamento a vita?',
    rf47: 'R: Sì, puoi richiedere un rimborso entro 7 giorni dall\'acquisto se non hai utilizzato la licenza. Dopo questo periodo, non possiamo accettare richieste di rimborso per gli abbonamenti a vita.',
    rf48: '9. Contattaci',
    rf49: 'Per domande sulla politica di rimborso o per inviare una richiesta:',
    tm01: '1. Accettazione dei termini',
    tm02: 'Utilizzando il sito wasendernew.com o il software WA Sender, accetti di essere vincolato da questi Termini e Condizioni. Se non accetti uno di questi termini, ti preghiamo di non utilizzare i nostri servizi.',
    tm03: '2. Descrizione del servizio',
    tm04: 'WA Sender è un software di marketing per WhatsApp che fornisce strumenti per l\'invio di messaggi di massa, l\'automazione e la gestione di campagne di marketing. Il software è progettato per uso personale e commerciale nei limiti delle leggi e delle policy di WhatsApp/Meta.',
    tm05: '3. Requisiti di idoneità all\'uso',
    tm06: 'Per utilizzare WA Sender, devi:',
    tm07: 'Avere l\'età legale (18 anni o più) nel tuo paese.',
    tm08: 'Possedere la capacità legale di stipulare un accordo vincolante.',
    tm09: 'Fornire informazioni accurate e veritiere al momento della registrazione o dell\'acquisto.',
    tm10: 'Mantenere riservate le informazioni del tuo account.',
    tm11: '4. Uso consentito',
    tm12: 'L\'utente accetta di utilizzare WA Sender esclusivamente per i seguenti scopi:',
    tm13: 'Invio di messaggi di marketing legittimi a numeri che hanno dato il proprio consenso.',
    tm14: 'Gestione professionale di campagne di marketing tramite WhatsApp.',
    tm15: 'Automazione delle risposte a richieste legittime dei clienti.',
    tm16: 'Estrazione di dati pubblicamente disponibili per scopi di marketing legittimi.',
    tm17: '5. Uso vietato',
    tm18: '<strong>È espressamente vietato</strong> utilizzare il software per i seguenti scopi:',
    tm19: 'Invio di messaggi spam o non richiesti.',
    tm20: 'Invio di contenuti dannosi, fraudolenti o illegali.',
    tm21: 'Violazione della privacy o dei diritti altrui.',
    tm22: 'Tentativi di violare o danneggiare i sistemi di WhatsApp o Meta.',
    tm23: 'Condivisione, vendita o distribuzione del codice di attivazione.',
    tm24: 'Reverse engineering, modifica o copia del software.',
    tm25: 'Utilizzo per qualsiasi scopo contrario ai termini di servizio di WhatsApp/Meta.',
    tm26: '6. Responsabilità verso WhatsApp/Meta',
    tm27: '<strong>⚠️ Avviso importante:</strong> WA Sender non è affiliato a Meta, WhatsApp, Facebook o a nessuna delle loro filiali. L\'utilizzo di questo software potrebbe violare i termini di servizio di WhatsApp. Sei l\'unico responsabile di qualsiasi conseguenza derivante dall\'uso del software, incluso ma non limitato al ban del tuo account WhatsApp o ad azioni legali nei tuoi confronti.',
    tm28: '7. Proprietà intellettuale',
    tm29: 'Tutti i diritti su WA Sender appartengono al team di sviluppo.',
    tm30: 'Il software è protetto dalle leggi internazionali sul copyright.',
    tm31: 'Non hai il diritto di copiare, modificare o distribuire il software senza esplicita autorizzazione scritta.',
    tm32: 'Il logo, le icone e il design sono di proprietà di WA Sender.',
    tm33: '8. Licenza e utilizzo',
    tm34: 'Acquistando una licenza, ottieni un diritto personale e non trasferibile di utilizzare il software.',
    tm35: 'Ogni licenza è valida per un solo dispositivo (a meno che non si tratti di una licenza multi-dispositivo).',
    tm36: 'La licenza non può essere affittata, prestata o venduta a terzi.',
    tm37: 'Ci riserviamo il diritto di revocare la licenza in caso di violazione di questi termini.',
    tm38: '9. Esclusione di garanzie',
    tm39: 'Il software viene fornito "così com\'è" senza alcuna garanzia esplicita o implicita. Non garantiamo:',
    tm40: 'Che il software funzionerà senza interruzioni o errori.',
    tm41: 'Che i risultati dell\'utilizzo del software soddisferanno le tue aspettative.',
    tm42: 'Che l\'utilizzo del software non comporterà il ban del tuo numero WhatsApp.',
    tm43: 'Che tutte le funzionalità saranno disponibili in modo continuativo.',
    tm44: '10. Limitazione di responsabilità',
    tm45: 'Nella misura massima consentita, la nostra responsabilità totale non supererà l\'importo pagato per la licenza. Non saremo responsabili per:',
    tm46: 'Qualsiasi danno diretto, indiretto, incidentale o consequenziale derivante dall\'uso o dall\'impossibilità di utilizzare il software.',
    tm47: 'La perdita di dati, profitti o opportunità commerciali.',
    tm48: 'Il ban del tuo account su WhatsApp o su qualsiasi altra piattaforma.',
    tm49: 'Qualsiasi azione legale di terzi nei tuoi confronti.',
    tm50: '11. Manleva',
    tm51: 'Accetti di manlevare e tenere indenne WA Sender, il suo team, i dipendenti e i partner da qualsiasi reclamo, perdita o danno (comprese le spese legali) derivanti da:',
    tm52: 'Il tuo utilizzo del software.',
    tm53: 'La tua violazione di questi termini.',
    tm54: 'La tua violazione dei diritti altrui.',
    tm55: '12. Modifiche ai termini',
    tm56: 'Ci riserviamo il diritto di modificare questi termini in qualsiasi momento. Le modifiche hanno effetto immediatamente dopo la pubblicazione sul sito. Il continuo utilizzo del software dopo le modifiche implica la loro accettazione.',
    tm57: '13. Legge applicabile',
    tm58: 'Questi termini sono regolati e interpretati in conformità con la legge applicabile. Eventuali controversie derivanti da questi termini saranno soggette alla giurisdizione esclusiva dei tribunali competenti.',
    tm59: '14. Contattaci',
    tm60: 'Per domande su questi termini:'
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
  
  // Translate all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });
  
  // Translate placeholders (input, textarea)
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) {
      el.placeholder = t[key];
    }
  });
  
  // Translate option elements with data-i18n
  document.querySelectorAll('option[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
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
  // Redirect directly to the plan's dedicated PayPal payment link
  playClickSound();
  const url = CONFIG.paypalLinks[plan];
  if (url) {
    window.open(url, '_blank', 'noopener');
  }
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
    ru: '*Новый Запрос с Сайта*',
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

// ═══════════════════════════════════════════════════════════════
// ADVANCED ANIMATIONS & DYNAMIC INTERACTIONS
// ═══════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  // ── 1. SCROLL PROGRESS INDICATOR ──
  initScrollProgress();
  
  // ── 2. SCROLL REVEAL ANIMATIONS ──
  initScrollReveal();
  
  // ── 3. RIPPLE EFFECT FOR BUTTONS ──
  initRippleEffect();
  
  // ── 4. COUNTER ANIMATION ──
  initCounterAnimation();
  
  // ── 5. TILT EFFECT FOR CARDS ──
  initTiltEffect();
  
  // ── 6. NAVBAR SCROLL EFFECTS ──
  initNavbarScroll();
  
  // ── 7. SMOOTH PAGE TRANSITIONS ──
  initPageTransitions();
  
  // ── 8. PARALLAX EFFECTS ──
  initParallaxEffect();
  
  // ── 9. FAQ ACCORDION ──
  initFaqAccordion();
  
  // ── 10. MAGNETIC BUTTONS ──
  initMagneticButtons();
});

// ── SCROLL PROGRESS INDICATOR ──
function initScrollProgress() {
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  progressBar.style.cssText = 'position:fixed;top:0;left:0;height:4px;background:linear-gradient(135deg, #25D366, #128C7E);z-index:10001;transition:width 0.1s ease;box-shadow:0 0 10px rgba(37,211,102,0.5);';
  document.body.appendChild(progressBar);
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
  }, { passive: true });
}

// ── SCROLL REVEAL ANIMATIONS ──
function initScrollReveal() {
  const revealElements = document.querySelectorAll(
    '.reveal, .reveal-on-scroll, .reveal-left, .reveal-right, .reveal-scale, ' +
    '.feature-card, .step-card, .pricing-card, .product-card, .why-card, .faq-item'
  );
  
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        
        const parent = entry.target.parentElement;
        if (parent) {
          const siblings = Array.from(parent.children).filter(el => 
            el.classList.contains('reveal') || 
            el.classList.contains('reveal-on-scroll') ||
            el.classList.contains('feature-card') ||
            el.classList.contains('step-card')
          );
          const index = siblings.indexOf(entry.target);
          if (index > 0) {
            entry.target.style.transitionDelay = `${index * 0.1}s`;
          }
        }
        
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  revealElements.forEach(el => observer.observe(el));
}

// ── RIPPLE EFFECT FOR BUTTONS ──
function initRippleEffect() {
  const buttons = document.querySelectorAll('.btn, .buy-btn, .cta-btn, .wacrm-buy-btn, .pricing-btn');
  
  buttons.forEach(button => {
    button.classList.add('ripple-container');
    
    button.addEventListener('click', function(e) {
      const existingRipple = this.querySelector('.ripple');
      if (existingRipple) existingRipple.remove();
      
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.4);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
      `;
      
      this.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    });
  });
}

// ── COUNTER ANIMATION ──
function initCounterAnimation() {
  const counters = document.querySelectorAll('.stat-number, .counter');
  
  const animateCounter = (el) => {
    const text = el.textContent.trim();
    const match = text.match(/^([\d.]+)([M+K+]*)$/);
    
    if (!match) return;
    
    const target = parseFloat(match[1]);
    const suffix = match[2] || '';
    const duration = 2000;
    const start = 0;
    const startTime = performance.now();
    
    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = start + (target - start) * easeOutQuart;
      
      el.textContent = current.toFixed(current % 1 === 0 ? 0 : 1) + suffix;
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };
    
    requestAnimationFrame(updateCounter);
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(counter => observer.observe(counter));
}

// ── TILT EFFECT FOR CARDS ──
function initTiltEffect() {
  const tiltCards = document.querySelectorAll('.card, .feature-card, .product-card, .why-card, .pricing-card');
  
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });
}

// ── NAVBAR SCROLL EFFECTS ──
function initNavbarScroll() {
  const navWrapper = document.querySelector('.nav-wrapper');
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    
    if (currentScroll > 50) {
      navWrapper?.classList.add('scrolled');
    } else {
      navWrapper?.classList.remove('scrolled');
    }
  }, { passive: true });
}

// ── SMOOTH PAGE TRANSITIONS ──
function initPageTransitions() {
  const overlay = document.createElement('div');
  overlay.className = 'page-transition';
  overlay.id = 'pageTransition';
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #25D366;
    z-index: 99999;
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);
    pointer-events: none;
  `;
  document.body.appendChild(overlay);
  
  const internalLinks = document.querySelectorAll('a[href^="/"]:not([href^="//"]):not([target="_blank"])');
  
  internalLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      if (href.startsWith('#') || href.startsWith('http')) return;
      
      e.preventDefault();
      
      overlay.style.transformOrigin = 'top';
      overlay.classList.add('active');
      
      setTimeout(() => {
        window.location.href = href;
      }, 500);
    });
  });
}

// ── PARALLAX EFFECTS ──
function initParallaxEffect() {
  const parallaxElements = document.querySelectorAll('.hero-shape, .particle');
  
  if (parallaxElements.length === 0 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  
  window.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;
    
    parallaxElements.forEach((el, index) => {
      const speed = (index + 1) * 20;
      const x = mouseX * speed;
      const y = mouseY * speed;
      
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
  });
}

// ── FAQ ACCORDION ──
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question?.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
      
      item.classList.toggle('active', !isActive);
      
      if (typeof playClickSound === 'function') playClickSound();
    });
  });
}

// ── MAGNETIC BUTTONS ──
function initMagneticButtons() {
  if (window.matchMedia('(max-width: 768px)').matches) return;
  
  const magneticBtns = document.querySelectorAll('.btn-primary, .btn-gold, .wa-float');
  
  magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
    });
  });
}

// ── LAZY LOAD IMAGES ──
function initLazyLoad() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
}

initLazyLoad();

console.log(
  '%c🚀 WA Sender %c Professional WhatsApp Marketing Tool ',
  'background: linear-gradient(135deg, #25D366, #128C7E); color: white; padding: 10px 15px; border-radius: 8px 0 0 8px; font-weight: bold;',
  'background: #1a1a2e; color: #25D366; padding: 10px 15px; border-radius: 0 8px 8px 0;'
);
