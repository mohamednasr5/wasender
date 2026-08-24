/* ═══════════════════════════════════════════════════════════════
   WA Sender - Main JavaScript
   Multi-Page PWA with Full Multi-Language Support
   Complete i18n Translations File
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
  // ═══════════════════════════════════════════════════════════════
  // ARABIC (ar) - Reference Language
  // ═══════════════════════════════════════════════════════════════
  ar: {
    nav_home: 'الرئيسية', nav_how: 'شرح البرنامج', nav_guide: 'حماية من الحظر',
    nav_features: 'المميزات', nav_pricing: 'الأسعار', nav_contact: 'اتصل بنا',
    nav_policies: 'السياسات', nav_marketing: '📊 بيانات التسويق',
    nav_wacrm: '🟢 WA CRM', nav_wadefender: '🛡️ WaDefender',
    nav_exclusive_software: '⭐ برامج التسويق الحصرية',
    bn_home: 'الرئيسية', bn_videos: 'الفيديوهات', bn_pricing: 'الأسعار',
    bn_download: 'تحميل', bn_contact: 'تواصل',
    footer_quick: 'روابط سريعة', footer_legal: 'قانوني', footer_support: 'الدعم',
    footer_rights: 'جميع الحقوق محفوظة',
    footer_desc: 'برنامج احترافي للتسويق عبر واتساب مع أدوات متقدمة للرسائل الجماعية والأتمتة.',
    footer_privacy: 'سياسة الخصوصية', footer_purchase: 'سياسة الشراء',
    footer_refund: 'سياسة الاسترجاع', footer_terms: 'الشروط والأحكام', footer_whatsapp: 'واتساب',
    title_home: 'WA Sender - برنامج التسويق عبر واتساب الاحترافي',
    title_features: 'المميزات - WA Sender', title_pricing: 'الأسعار والباقات - WA Sender',
    title_contact: 'اتصل بنا - WA Sender', title_policies: 'السياسات - WA Sender',
    title_marketing: 'بيانات التسويق - WA Sender', title_wacrm: 'WA CRM - نظام إدارة علاقات العملاء',
    title_wadefender: 'WaDefender - حماية حساب الواتساب', title_privacy: 'سياسة الخصوصية',
    title_purchase: 'سياسة الشراء', title_refund: 'سياسة الاسترجاع', title_terms: 'الشروط والأحكام',
    desc_home: 'برنامج WA Sender الاحترافي للتسويق عبر واتساب. إرسال رسائل جماعية، استخراج الأرقام، وإدارة الحملات الإعلانية بسهولة.',
    desc_features: 'اكتشف مميزات WA Sender القوية: إرسال رسائل جماعية، استخراج الأرقام، الرد التلقائي، والمزيد.',
    desc_pricing: 'اختر الباقة المناسبة لك من بين باقات WA Sender المتنوعة بأسعار تنافسية.',
    desc_contact: 'تواصل مع فريق دعم WA_sender للحصول على المساعدة أو الاستفسارات.',
    desc_marketing: 'أداة استخراج بيانات التسويق من خرائط جوجل ومواقع الويب لتعزيز أعمالك.',
    desc_wacrm: 'نظام إدارة علاقات العملاء المتكامل مع واتساب لإدارة عملائك بفعالية.',
    desc_wadefender: 'حمِ حسابك على واتساب من الحظر والإيقاف مع WaDefender.',
    hero_title: 'برنامج التسويق عبر واتساب الأقوى',
    hero_subtitle: 'أرسل رسائل جماعية، استخرج الأرقام، وأدر حملاتك الإعلانية بأدوات احترافية',
    hero_btn_download: 'تحميل البرنامج', hero_btn_features: 'اكتشف المميزات',
    hero_trusted_by: 'موثوق من قبل أكثر من 50,000 مستخدم',
    stats_users: 'مستخدم نشط', stats_messages: 'رسالة مرسلة يومياً',
    stats_countries: 'دولة حول العالم', stats_uptime: 'وقت التشغيل',
    how_title: 'كيف يعمل البرنامج؟', how_subtitle: 'ثلاث خطوات بسيطة للبدء في التسويق عبر واتساب',
    how_step1_title: 'تحميل البرنامج', how_step1_desc: 'قم بتحميل وتثبيت WA Sender على جهازك خلال ثوانٍ',
    how_step2_title: 'استيراد الأرقام', how_step2_desc: 'استورد قائمة أرقامك أو استخرجها من مجموعات واتساب',
    how_step3_title: 'إرسال الرسائل', how_step3_desc: 'أنشئ حملتك الإعلانية وأرسل الرسائل بضغطة زر',
    features_preview_title: 'مميزات قوية', features_preview_subtitle: 'كل ما تحتاجه للتسويق الناجح عبر واتساب',
    btn_view_all_features: 'عرض جميع المميزات', btn_get_started: 'ابدأ الآن',
    features_title: 'مميزات WA Sender', features_subtitle: 'أدوات احترافية شاملة للتسويق الفعّال عبر واتساب',
    f1_title: 'إرسال رسائل جماعية', f1_desc: 'أرسل رسائل نصية وصور وفيديوهات وملفات لآلاف الأرقام بضغطة واحدة.',
    f2_title: 'استخراج أعضاء المجموعات', f2_desc: 'استخرج أرقام جميع أعضاء مجموعات ومجتمعات واتساب تلقائياً.',
    f3_title: 'استخراج من خرائط جوجل', f3_desc: 'احصل على أرقام هواتف وعناوين لأي نشاط تجاري من أي مدينة.',
    f4_title: 'الرد التلقائي الذكي', f4_desc: 'أنشئ ردود تلقائية ذكية تستجيب للرسائل الواردة بناءً على الكلمات المفتاحية.',
    f5_title: 'استيراد وتصدير البيانات', f5_desc: 'استورد جهات الاتصال من ملفات CSV و Excel وصدر التقارير بصيغ متعددة.',
    f6_title: 'جدولة الرسائل', f6_desc: 'حدد مواعيد محددة لإرسال رسائلك حتى عندما لا تكون متصلاً بالإنترنت.',
    f7_title: 'أرقام وهمية للتجربة', f7_desc: 'اختبر حملاتك الإعلانية على أرقام وهمية قبل الإرسال الفعلي.',
    f8_title: 'فلترة الأرقام', f8_desc: 'تحقق من وجود الأرقام على واتساب وأزل الأرقام غير النشطة.',
    f9_title: 'متعدد الحسابات', f9_desc: 'استخدم عدة حسابات واتساب في نفس الوقت مع إمكانية التبديل السريع.',
    f10_title: 'تخصيص الرسائل', f10_desc: 'أضف متغيرات ديناميكية مثل {name} لجعلها شخصية لكل مستلم.',
    f11_title: 'دعم الوسائط المتعددة', f11_desc: 'أرسل صور وفيديوهات ومستندات وجهات اتصال ومواقع جغرافية.',
    f12_title: 'تقارير مفصلة', f12_desc: 'تابع أداء حملاتك بتقارير تفصيلية تشمل نسبة النجاح.',
    f13_title: 'حماية من الحظر', f13_desc: 'تقنية متقدمة تحمي حسابك من الحظر مع تأخير ذكي بين الرسائل.',
    f14_title: 'واجهة سهلة الاستخدام', f14_desc: 'تصميم عصري وبسيط يجعل استخدام البرنامج سهلاً للجميع.',
    f15_title: 'تحديثات مستمرة', f15_desc: 'نحافظ على تحديث البرنامج دورياً لدعم أحدث إصدارات واتساب.',
    price_label: 'الأسعار', price_title: 'اختر الباقة المناسبة لك', price_sub: 'خطط مرنة تناسب جميع الاحتياجات مع ضمان استرداد المال',
    plan1_name: 'الباقة الأساسية', plan1_period: 'سنة واحدة / جهاز واحد', plan1b_name: 'باقة التوفير', plan1b_period: '4 سنوات / جهاز واحد',
    plan2_name: 'باقة مدى الحياة', plan2_period: 'مدى الحياة / جهاز واحد',
    price_22: 'باقة الكبير أوي', price_04: '5 أعوام / جهاز واحد',
    pf1: 'إرسال رسائل غير محدودة', pf2: 'استخراج أعضاء المجموعات', pf3: 'استخراج من خرائط جوجل',
    pf4: 'الرد التلقائي', pf5: 'جدولة الرسائل', pf6: 'فلترة الأرقام', pf7: 'متعدد الحسابات',
    pf8: 'تقارير مفصلة', pf9: 'حماية من الحظر', pf10: 'دعم فني على مدار الساعة',
    pf11: 'تحديثات مجانية', pf12: 'جهازان في نفس الوقت', pf13: '3 أجهزة في نفس الوقت',
    devices_1: 'جهاز واحد', devices_2: 'جهازان', devices_3: '3 أجهزة',
    popular_badge: 'الأكثر شعبية', btn_buy_now: 'اشترك الآن',
    price_group1: 'باقات جهاز واحد', price_group2: 'باقات متعددة الأجهزة',
    payment_title: 'طرق الدفع المتاحة', payment_subtitle: 'اختر طريقة الدفع المناسبة لك',
    faq_title: 'الأسئلة الشائعة عن الأسعار والدفع',
    faq_q1: 'هل يمكنني ترقية خطتي لاحقاً؟', faq_a1: 'نعم! يمكنك ترقية خطتك في أي وقت. ستحسب لك الفرق بين خطتك الحالية والخطة الجديدة مع خصم على المدة المتبقية.',
    faq_q2: 'ما هي طرق الدفع المتاحة؟', faq_a2: 'نقبل عدة طرق دفع: فودافون كاش (مصر)، تطبيق برق السعودي، InstaPay، تحويل بنكي D360 (السعودية)، وبطاقات فيزا و PayPal للدفع الدولي.',
    faq_q3: 'كم يستغرق تفعيل الرخصة بعد الدفع؟', faq_a3: 'عادةً يتم التفعيل خلال دقائق قليلة بعد استلام إيصال الدفع عبر واتساب. في حالات التحويل البنكي قد يستغرق 1-24 ساعة عمل.',
    faq_q4: 'هل يمكن نقل الرخصة لجهاز آخر؟', faq_a4: 'الرخصة مربوطة بجهاز واحد. إذا غيرت جهازك، تواصل معنا عبر واتساب وسنساعدك في نقل الرخصة للجهاز الجديد مجاناً.',
    pm_vodafone_title: 'فودافون كاش (مصر)', pm_vodafone_sub: 'تحويل فوري للمحفظة', pm_vodafone_note: 'أرسل إيصال التحويل عبر واتساب للتفعيل الفوري.',
    pm_barq_title: 'تطبيق برق (السعودية)', pm_barq_sub: 'تحويل دولي للسعودية', pm_barq_steps: '<strong>خطوات التحويل:</strong> التحويل الدولي ← مصر ← أدخل الرقم أدناه', pm_barq_note: 'أرسل الإيصال بعد التحويل للتفعيل.',
    pm_instapay_title: 'InstaPay (مصر)', pm_instapay_sub: 'تحويل مباشر من مصر', pm_instapay_link: 'فتح رابط InstaPay →', pm_instapay_note: 'أرسل إيصال الدفع بعد إتمام العملية.',
    pm_bank_title: 'تحويل بنكي - D360 (السعودية)', pm_bank_sub: 'عبر الأيبان السعودي', pm_bank_name: 'البنك:', pm_bank_holder: 'اسم المستفيد:', pm_bank_iban: 'رقم الأيبان (IBAN):', pm_bank_swift: 'رمز السويفت (SWIFT):', pm_bank_note: 'يستغرق التحويل 1-24 ساعة عمل. أرسل الإيصال للتفعيل.',
    pm_paypal_title: 'فيزا / PayPal', pm_paypal_sub: 'دفع آمن بالبطاقة البنكية', pm_paypal_note2: 'اضغط زر "اشترِ الآن" أو امسح QR الموجود أسفل الباقة التي تريدها في أعلى الصفحة، وسيتم توجيهك مباشرة لصفحة الدفع بالمبلغ الصحيح. بعد الدفع، أرسل اسم البريد الإلكتروني المستخدم عبر واتساب.',
    price_01: '<span>البنك:</span> D360 بنك', price_02: '<span>اسم المستفيد:</span> أيمن نصر نصر',
    price_05: '/ سنة', price_06: '/ سنة', price_07: '/ سنتين',
    price_08: '📊 بيانات التسويق', price_09: '📊 بيانات التسويق',
    price_11: '📱 امسح للدفع السريع', price_12: '📱 امسح للدفع السريع', price_13: '📱 امسح للدفع السريع', price_14: '📱 امسح للدفع السريع', price_15: '📱 امسح للدفع السريع', price_16: '📱 امسح للدفع السريع', price_17: '📱 امسح للدفع السريع',
    price_18: 'خطوات التحويل:',
    price_19: 'أسعار واشتراكات WA Sender - خطط مرنة لكل الاحتياجات | WA Sender',
    price_20: '<strong>📱 امسح للدفع السريع</strong>ادفع 5$ مباشرة عبر PayPal', price_21: '<strong>📱 امسح للدفع السريع</strong>ادفع 15$ مباشرة عبر PayPal', price_23: '<strong>📱 امسح للدفع السريع</strong>ادفع 20$ مباشرة عبر PayPal', price_24: '<strong>📱 امسح للدفع السريع</strong>ادفع 50$ مباشرة عبر PayPal', price_25: '<strong>📱 امسح للدفع السريع</strong>ادفع 8$ مباشرة عبر PayPal', price_26: '<strong>📱 امسح للدفع السريع</strong>ادفع 12$ مباشرة عبر PayPal', price_27: '<strong>📱 امسح للدفع السريع</strong>ادفع 25$ مباشرة عبر PayPal',
    devices_year: 'جهازان / سنة', devices_2year: 'جهازان / سنتين', devices_3year: '3 أجهزة / سنة',
    privacy_title: 'سياسة الخصوصية', purchase_title: 'سياسة الشراء', refund_title: 'سياسة الاسترجاع', terms_title: 'الشروط والأحكام',
    pwa_install: 'ثبّت التطبيق', pwa_subtitle: 'احصل على تجربة أفضل بدون متصفح',
    btn_download: 'تحميل مجاني', copy_btn: 'نسخ',
    local_yearly_egp: '≈ 250 جنيه مصري', local_saver_egp: '≈ 750 جنيه مصري', local_ultimate_egp: '≈ 1000 جنيه مصري', local_lifetime_egp: '≈ 2500 جنيه مصري',
    pm_paypal: 'PayPal - بطاقات ائتمان', pm_paypal_desc: 'ادفع بأمان باستخدام PayPal أو بطاقات Visa و MasterCard',
    pm_bank: 'التحويل البنكي', pm_bank_desc: 'تحويل مباشر لحسابنا البنكي في D360 Bank',
    pm_vodafone: 'Vodafone Cash', pm_vodafone_desc: 'ادفع عبر Vodafone Cash المصري',
    pm_instapay: 'InstaPay', pm_instapay_desc: 'ادفع بسهولة عبر InstaPay',
    contact_title: 'تواصل معنا', contact_subtitle: 'نسعد بتواصلك معنا! اختر الطريقة المناسبة لك',
    cf_name: 'الاسم الكامل', cf_email: 'البريد الإلكتروني', cf_phone: 'رقم الهاتف',
    cf_subject: 'الموضوع', cf_message: 'الرسالة', cf_submit: 'إرسال الرسالة',
    cf_success: 'تم إرسال رسالتك بنجاح! سنرد عليك قريباً.', cf_error: 'حدث خطأ. يرجى المحاولة مرة أخرى.',
    ct_whatsapp_title: 'واتساب', ct_whatsapp_desc: 'تواصل معنا مباشرة عبر واتساب لرد سريع',
    ct_email_title: 'البريد الإلكتروني', ct_email_desc: 'أرسل لنا بريداً إلكترونياً وسنرد خلال 24 ساعة',
    ct_hours_title: 'ساعات العمل', ct_hours_desc: 'الأحد - الخميس: 9 صباحاً - 6 مساءً',
    pp01: 'سياسة الخصوصية', pp02: 'آخر تحديث: يناير 2025',
    pp03: 'نحن في WA Sender نلتزم بحماية خصوصيتك. توضح هذه السياسة كيف نجمع ونستخدم ونحمي بياناتك الشخصية.',
    pp04: '1. البيانات التي نجمعها', pp05: 'قد نقوم بجمع أنواع البيانات التالية:',
    pp06: '• معلومات التواصل: الاسم، البريد الإلكتروني، رقم الهاتف عند التواصل معنا',
    pp07: '• بيانات الدفع: معلومات المعاملة عبر PayPal أو التحوالات البنكية الآمنة',
    pp08: '• بيانات الاستخدام: معلومات تقنية عن كيفية استخدامك للبرنامج والموقع',
    pp09: '• ملفات تعريف الارتباط: لتحسين تجربتك على موقعنا',
    pp10: '2. كيف نستخدم بياناتك', pp11: 'نستخدم بياناتك للأغراض التالية:',
    pp12: '• تزويدك بخدماتنا ودعمك الفني', pp13: '• معالجة المدفوعات وإدارة اشتراكك',
    pp14: '• تحسين خدماتنا ومنتجاتنا', pp15: '• إرسال تحديثات وإشعارات مهمة',
    pp16: '• الامتثال للمتطلبات القانونية',
    pp17: '3. حماية البيانات', pp18: 'نتخذ تدابير أمنية مناسبة لحماية بياناتك بما في ذلك:',
    pp19: '• تشفير البيانات أثناء النقل والتخزين', pp20: '• الوصول المقيد للبيانات الشخصية',
    pp21: '• تحديث منتظم لإجراءات الأمان', pp22: '• عدم تخزين بيانات بطاقات الائتمان',
    pp23: '4. مشاركة البيانات', pp24: 'لا نبيع أو نشارك بياناتك الشخصية مع أطراف ثالثة إلا في الحالات التالية:',
    pp25: '• مزودي خدمات الدفع لمعالجة المعاملات', pp26: '• عند الالتزام القانوني أو القضائي',
    pp27: '• بموافقتك الصريحة',
    pp28: '5. حقوقك', pp29: 'للك حقوق تتعلق بياناتك الشخصية:',
    pp30: '• حق الوصول إلى بياناتك', pp31: '• حق تصحيح بياناتك', pp32: '• حق حذف بياناتك',
    pp33: '• حق سحب موافقتك', pp34: '• حق تقديم شكوى للجهات المختصة',
    pp35: '6. ملفات تعريف الارتباط (Cookies)', pp36: 'نستخدم ملفات تعريف الارتباط لـ:',
    pp37: '• تفضيلات اللغة والإعدادات', pp38: '• تحليل استخدام الموقع', pp39: '• تحسين تجربة المستخدم',
    pp40: '7. تغييرات هذه السياسة', pp41: 'قد نقوم بتحديث هذه السياسة من وقت لآخر. سيتم نشر أي تغييرات هنا مع تاريخ التحديث.',
    pp42: '8. اتصل بنا', pp43: 'لأي أسئلة حول هذه السياسة، تواصل معنا عبر:',
    pp44: '• البريد الإلكتروني: support@wasendernew.com', pp45: '• واتساب: +201279934735',
    rf01: 'سياسة الشراء', rf02: 'آخر تحديث: يناير 2025', rf03: 'يرجى قراءة هذه السياسة بعناية قبل شراء أي من منتجاتنا.',
    rf04: '1. المنتجات والخدمات', rf05: 'نقدم باقات اشتراكية لبرنامج WA Sender تشمل:',
    rf06: '• باقة سنوية - صلاحية سنة واحدة', rf07: '• باقة سنتين - صلاحية سنتين',
    rf08: '• باقة 3 سنوات - صلاحية 3 سنوات', rf09: '• باقة مدى الحياة - صلاحية دائمة',
    rf10: '• باقات متعددة الأجهزة - لاستخدام على 2 أو 3 أجهزة',
    rf11: '2. الأسعار والعملة', rf12: 'جميع الأسعار موضحة بالدولار الأمريكي (USD) وقد تخضع للضرائب المحلية.',
    rf13: '3. طرق الدفع المقبولة', rf14: 'نقبل طرق الدفع التالية:',
    rf15: '• PayPal (بطاقات ائتمان، حسابات PayPal)', rf16: '• التحويل البنكي (D360 Bank)',
    rf17: '• Vodafone Cash (مصر)', rf18: '• InstaPay (مصر)',
    rf19: '4. عملية الشراء', rf20: 'عند إتمام الشراء:',
    rf21: '• ستتلقى تأكيداً فورياً via البريد الإلكتروني', rf22: '• سيتم إرسال رخصة التنشيط خلال 24 ساعة كحد أقصى',
    rf23: '• تأكد من كتابة بيانات الاتصال بشكل صحيح',
    rf24: '5. تفعيل الرخصة', rf25: 'بعد الشراء:', rf26: '• ستحصل على مفتاح رخصة فريد',
    rf27: '• أدخل المفتاح في البرنامج للتفعيل', rf28: '• الرخصة مرتبطة بجهاز واحد (ما لم تكن باقة متعددة الأجهزة)',
    rf29: '6. التجديد', rf30: '• لن يتم التجديد التلقائي', rf31: '• ستتذكر إشعاراً قبل انتهاء الصلاحية بـ 7 أيام',
    rf32: '• يمكنك التجديد يدوياً في أي وقت',
    rf33: '7. نقل الرخصة', rf34: '• لا يمكن نقل الرخصة لجهاز آخر خلال فترة الاشتراك',
    rf35: '• في حالة تغيير الجهاز، تواصل مع الدعم الفني',
    rf36: '8. العروض والخصومات', rf37: '• قد نقدم عروضاً خاصة في أوقات محددة',
    rf38: '• الخصومات لا تراكم مع عروض أخرى', rf39: '• الأسعار قابلة للتغيير بدون إشعار مسبق',
    rf40: '9. شروط إضافية', rf41: '• الشراء يعني قبولك لهذه السياسة والشروط والأحكام',
    rf42: '• نحتفظ بحق إلغاء الاشتراك في حال انتهاك الشروط', rf43: '• جميع الأسعار خاضعة للتغيير بدون إشعار مسبق',
    rf44: '10. اتصل بنا', rf45: 'للاستفسارات المتعلقة بالشراء:',
    rf46: '• واتساب: +201279934735', rf47: '• البريد: support@wasendernew.com',
    tm01: 'سياسة الاسترجاع', tm02: 'آخر تحديث: يناير 2025', tm03: 'نهدف لتقديم خدمة مرضية. توضح هذه السياسة شروط استرداد الأموال.',
    tm04: '1. سياسة عامة', tm05: 'بسبب الطبيعة الرقمية لمنتجاتنا:',
    tm06: '• يمكنك طلب استرداد خلال 7 أيام من تاريخ الشراء',
    tm07: '• يجب ألا يكون قد تم استخدام البرنامج لإرسال أكثر من 100 رسالة',
    tm08: '• يجب تقديم سبب مقنع لطلب الاسترداد',
    tm09: '2. حالات الاسترداد المقبولة', tm10: 'نسترد الأموال في الحالات التالية:',
    tm11: '• مشاكل تقبية لم يتم حلها من قبل الدعم الفني خلال 5 أيام عمل',
    tm12: '• عدم توافق البرنامج مع نظام التشغيل الخاص بك',
    tm13: '• أخطاء جوهرية تمنع استخدام البرنامج بشكل أساسي', tm14: '• دفع مزدودد بالخطأ',
    tm15: '3. حالات عدم الاسترداد', tm16: 'لا نسترد الأموال في الحالات التالية:',
    tm17: '• تغيير الرأي بعد فترة الـ 7 أيام', tm18: '• المشاكل الناتجة عن عدم اتباع التعليمات',
    tm19: '• حظر الحساب بسبب مخالفة شروط واتساب', tm20: '• الشراء من طرف ثالث غير مصرح به',
    tm21: '4. عملية الاسترداد', tm22: 'لطلب استرداد:', tm23: '• تواصل معنا عبر واتساب أو البريد الإلكتروني',
    tm24: '• اذكر رقم الطلب أو البريد الإلكتروني المستخدم في الشراء', tm25: '• صف المشكلة بوضوح',
    tm26: '• سيتم المراجعة خلال 3-5 أيام عمل',
    tm27: '5. وقت الاسترداد', tm28: '• بعد الموافقة: 5-10 أيام عمل للبطاقات الائتمانية',
    tm29: '• PayPal: 3-5 أيام عمل', tm30: '• التحويل البنكي: 7-14 يوم عمل',
    tm31: '6. بدائل الاسترداد', tm32: 'بدلاً من الاسترداد، قد نقدم:',
    tm33: '• تمديد فترة الاشتراك مجاناً', tm34: '• ترقية إلى باقة أعلى بدون تكلفة إضافية',
    tm35: '• مساعدة إضافية لحل المشكلة التقنية',
    tm36: '7. نزاعات الدفع', tm37: '• نفضل حل المشكلة مباشرة معنا أولاً',
    tm38: '• افتح نزاع PayPal فقط كخيار أخير', tm39: '• النزاعات الكيدية قد تؤدي لحظر حسابك الدائم',
    tm40: '8. استثناءات خاصة', tm41: '• حالات طارئة: نتعامل معها بمرونة',
    tm42: '• عملاء دائمون: امتيازات خاصة', tm43: '• ظروف استثنائية: يُنظر فيها بشكل فردي',
    pv01: 'الشروط والأحكام', pv02: 'آخر تحديث: يناير 2025',
    pv03: 'مرحباً بك في WA Sender. باستخدام خدمتنا، أنت توافق على هذه الشروط.',
    pv04: '1. قبول الشروط', pv05: 'باستخدام برنامج WA Sender أو موقعنا الإلكتروني، أنت توافق على الالتزام بهذه الشروط والأحكام بالكامل.',
    pv06: '2. وصف الخدمة', pv07: 'يوفر WA Sender أدوات للتسويق عبر واتساب تشمل:',
    pv08: '• إرسال رسائل جماعية', pv09: '• استخراج الأرقام والمعلومات',
    pv10: '• إدارة الحملات الإعلانية', pv11: '• أدوات الأتمتة والرد التلقائي',
    pv12: '3. obligations المستخدم', pv13: 'تتعهد بـ:',
    pv14: '• استخدام البرنامج للأغراض المشروعة فقط', pv15: '• عدم إرسال رسائل مزعجة أو غير مرغوب بها (Spam)',
    pv16: '• احترام خصوصية الآخرين وقوانين حماية البيانات', pv17: '• عدم محاولة اختراق أو تعطيل الخدمة',
    pv18: '• الالتزام بشروط خدمة واتساب',
    pv19: '4. الملكية الفكرية', pv20: '• جميع حقوق البرنامج ملك لـ WA Sender',
    pv21: '• يُسمح بالاستخدام الشخصي فقط حسب الباقة المشتراة', pv22: '• يُمنع نسخ أو توزيع أو تعديل البرنامج',
    pv23: '• العلامات التجارية ملك لأصحابها',
    pv24: '5. مسؤولية المستخدم', pv25: 'أنت المسؤول الوحيد عن:',
    pv26: '• محتوى الرسائل التي ترسلها', pv27: '• الامتثال للقوانين المحلية والدولية',
    pv28: '• حماية حسابك على واتساب من الحظر', pv29: '• أي ضرر ناتج عن سوء الاستخدام',
    pv30: '6. حدود المسؤولية', pv31: '• نقدم البرنامج "كما هو" دون ضمانات صريحة أو ضمنية',
    pv32: '• لسنا مسؤولين عن حظر حسابك على واتساب', pv33: '• الحد الأقصى للمسؤولية يساوي المبلغ المدفوع',
    pv34: '• لسنا مسؤولين عن الأضرار غير المباشرة أو التبعية',
    pv35: '7. إنهاء الخدمة', pv36: 'نحقق إنهاء اشتراكك في حال:',
    pv37: '• انتهاك هذه الشروط', pv38: '• استخدام البرنامج لأغراض غير قانونية',
    pv39: '• محاولة الاحتيال أو الغش', pv40: '• الإضرار بسمعتنا أو خدمتنا',
    pv41: '8. التعديلات على الشروط', pv42: 'نحقق تعديل هذه الشروط في أي وقت. سيتم إشعار المستخدمين بالتغييرات الجوهرية.',
    pv43: '9. القانون الواجب التطبيق', pv44: 'تخضع هذه الشروط للقانون applicable. أي نزاع يُحل عبر التحكيم.',
    pv45: '10. اتصل بنا', pv46: 'للاستفسارات القانونية:',
    pv47: '• البريد: legal@wasendernew.com', pv48: '• واتساب: +201279934735',
    wd_title: 'WaDefender - حماية حساب الواتساب', wd_subtitle: 'حمِ حسابك على واتساب من الحظر والإيقاف مع أداة الحماية المتقدمة',
    wd_hero_desc: 'WaDefender هي أداة متخصصة تحمي حسابك على واتساب من خطر الحظر والإيقاف.',
    wd_feature1_title: 'مراقبة سلوك الحساب', wd_feature1_desc: 'تتبع أنشطة حسابك وتحليلها للكشف عن السلوكيات الخطرة.',
    wd_feature2_title: 'تنبيهات مبكرة', wd_feature2_desc: 'تلقي تنبيهات فورية عند اكتشاف أنشطة مشبوهة.',
    wd_feature3_title: 'إدارة معدل الإرسال', wd_feature3_desc: 'تحكم ذكي في عدد الرسائل المرسلة يومياً لتجنب الحدود المشبوهة.',
    wd_feature4_title: 'فحص جودة الأرقام', wd_feature4_desc: 'تحقق من سلامة الأرقام قبل الإرسال لتجنب الإبلاغ.',
    wd_feature5_title: 'جدولة آمنة', wd_feature5_desc: 'وزع رسائلك على فترات زمنية آمنة تحاكي السلوك الطبيعي.',
    wd_feature6_title: 'تقارير الحماية', wd_feature6_desc: 'تقارير مفصلة عن حالة حماية حسابك والتوصيات لتحسين الأمان.',
    wd_btn_download: 'تحميل WaDefender', wd_price: '$15/سنة', wd_note: 'يعمل جنباً إلى جنب مع WA Sender لحماية كاملة',
    md_title: 'بيانات التسويق', md_subtitle: 'أداة استخراج بيانات العملاء المحتملين من مصادر متعددة',
    md_hero_desc: 'استخرج أرقام الهواتف والبريدات الإلكترونية وعناوين الأنشطة التجارية من خرائط جوجل ومواقع الويب.',
    md_feature1_title: 'استخراج من خرائط جوجل', md_feature1_desc: 'ابحث عن أي نشاط تجاري في أي مدينة واستخرج جميع معلومات الاتصال.',
    md_feature2_title: 'استخراج من المواقع', md_feature2_desc: 'استخرج الأرقام والعناوين من أي موقع ويب باستخدام الروابط أو الكلمات المفتاحية.',
    md_feature3_title: 'تصفية متقدمة', md_feature3_desc: 'فلترة النتائج حسب المدينة أو نوع النشاط أو تقييمات العملاء.',
    md_feature4_title: 'تصدير متعدد الصيغ', md_feature4_desc: 'صدّر البيانات بصيغة CSV أو Excel أو JSON لسهولة الاستخدام.',
    md_feature5_title: 'بحث بالكلمات المفتاحية', md_feature5_desc: 'ابحث عن أنشطة تجارية محددة باستخدام كلمات مفتاحية متعددة.',
    md_feature6_title: 'تحديث تلقائي', md_feature6_desc: 'تحقق من تحديث البيانات وتجاهل الأرقام غير النشطة أو المغلقة.',
    md_btn_learn_more: 'اعرف المزيد', md_included: 'مضمنة مع WA Sender Pro',
    wacrm_title: 'WA CRM - نظام إدارة علاقات العملاء', wacrm_subtitle: 'أدر عملاءك واحملاتك التسويقية من مكان واحد',
    wacrm_hero_desc: 'نظام CRM متكامل يعمل داخل واتساب لتتبع العملاء وإدارة المبيعات وتنظيم الفرق.',
    wacrm_feature1_title: 'إدارة العملاء', wacrm_feature1_desc: 'أنشئ ملفات تعريف شاملة لكل عميل مع تاريخ المحادثات والملاحظات.',
    wacrm_feature2_title: 'تتبع المبيعات', wacrm_feature2_desc: 'تابع فرص المبيعات من الاتصال الأول حتى إغلاق الصفقة.',
    wacrm_feature3_title: 'إدارة الفريق', wacrm_feature3_desc: 'وزع المهام على فريقك وتابع أداء كل عضو.',
    wacrm_feature4_title: 'الردود السريعة', wacrm_feature4_desc: 'أنشئ قوالب ردود جاهزة للأسئلة المتكررة.',
    wacrm_feature5_title: 'التقويم والمواعيد', wacrm_feature5_desc: 'نظم مواعيدك ومهامك مع تذكيرات متكاملة مع واتساب.',
    wacrm_feature6_title: 'التقارير التحليلية', wacrm_feature6_desc: 'تحليلات متقدمة لأداء فريقك ومعدلات التحويل.',
    wacrm_feature7_title: 'التكامل مع WA Sender', wacrm_feature7_desc: 'ربط مباشر مع WA Sender لإرسال حملات تسويقية لشرائح عملاء محددة.',
    wacrm_feature8_title: 'الوصول عبر الأجهزة', wacrm_feature8_desc: 'Accessor بيانات CRM من أي جهاز مع مزامنة تلقائية آمنة.',
    wacrm_btn_start: 'ابدأ使用 WA CRM', wacrm_coming_soon: 'قريباً - سجل اهتمامك'
  },

  // ═══════════════════════════════════════════════════════════════
  // ENGLISH (en)
  // ═══════════════════════════════════════════════════════════════
  en: {
    nav_home: 'Home', nav_how: 'Tutorial', nav_guide: 'Anti-Ban Guide',
    nav_features: 'Features', nav_pricing: 'Pricing', nav_contact: 'Contact',
    nav_policies: 'Policies', nav_marketing: '📊 Marketing Data',
    nav_wacrm: '🟢 WA CRM', nav_wadefender: '🛡️ WaDefender',
    nav_exclusive_software: '⭐ Exclusive Marketing Software',
    bn_home: 'Home', bn_videos: 'Videos', bn_pricing: 'Prices',
    bn_download: 'Download', bn_contact: 'Contact',
    footer_quick: 'Quick Links', footer_legal: 'Legal', footer_support: 'Support',
    footer_rights: 'All rights reserved',
    footer_desc: 'Professional WhatsApp marketing software with advanced tools for bulk messaging and automation.',
    footer_privacy: 'Privacy Policy', footer_purchase: 'Purchase Policy',
    footer_refund: 'Refund Policy', footer_terms: 'Terms & Conditions', footer_whatsapp: 'WhatsApp',
    title_home: 'WA Sender - Professional WhatsApp Marketing Software',
    title_features: 'Features - WA Sender', title_pricing: 'Pricing & Plans - WA Sender',
    title_contact: 'Contact Us - WA Sender', title_policies: 'Policies - WA Sender',
    title_marketing: 'Marketing Data - WA Sender', title_wacrm: 'WA CRM - Customer Relationship Management',
    title_wadefender: 'WaDefender - WhatsApp Account Protection', title_privacy: 'Privacy Policy',
    title_purchase: 'Purchase Policy', title_refund: 'Refund Policy', title_terms: 'Terms & Conditions',
    desc_home: 'WA Sender professional WhatsApp marketing software. Send bulk messages, extract numbers, and manage ad campaigns easily.',
    desc_features: 'Discover powerful WA Sender features: bulk messaging, number extraction, auto-reply, and more.',
    desc_pricing: 'Choose the right plan for you from diverse packages at competitive prices.',
    desc_contact: 'Contact WA Sender support team for help or inquiries.',
    desc_marketing: 'Marketing data extraction tool from Google Maps and websites to boost your business.',
    desc_wacrm: 'Integrated WhatsApp CRM system to manage your customers effectively.',
    desc_wadefender: 'Protect your WhatsApp account from bans and suspension with WaDefender.',
    hero_title: 'The Most Powerful WhatsApp Marketing Software',
    hero_subtitle: 'Send bulk messages, extract numbers, and manage your advertising campaigns with professional tools',
    hero_btn_download: 'Download Now', hero_btn_features: 'Explore Features',
    hero_trusted_by: 'Trusted by over 50,000 users',
    stats_users: 'Active Users', stats_messages: 'Messages Sent Daily',
    stats_countries: 'Countries Worldwide', stats_uptime: 'Uptime',
    how_title: 'How Does It Work?', how_subtitle: 'Three simple steps to start WhatsApp marketing',
    how_step1_title: 'Download Software', how_step1_desc: 'Download and install WA Sender on your device in seconds',
    how_step2_title: 'Import Numbers', how_step2_desc: 'Import your number list or extract from WhatsApp groups',
    how_step3_title: 'Send Messages', how_step3_desc: 'Create your campaign and send messages with one click',
    features_preview_title: 'Powerful Features', features_preview_subtitle: 'Everything you need for successful WhatsApp marketing',
    btn_view_all_features: 'View All Features', btn_get_started: 'Get Started',
    features_title: 'WA Sender Features', features_subtitle: 'Comprehensive professional tools for effective WhatsApp marketing',
    f1_title: 'Bulk Messaging', f1_desc: 'Send text, images, videos, and files to thousands of numbers with one click, including personalization.',
    f2_title: 'Group Member Extraction', f2_desc: 'Automatically extract all member numbers from WhatsApp groups and communities.',
    f3_title: 'Google Maps Extraction', f3_desc: 'Get phone numbers, addresses, and emails for any business from any city using Google Maps.',
    f4_title: 'Smart Auto-Reply', f4_desc: 'Create intelligent auto-replies that respond to incoming messages based on keywords.',
    f5_title: 'Import & Export Data', f5_desc: 'Import contacts from CSV and Excel files, export reports in multiple formats.',
    f6_title: 'Message Scheduling', f6_desc: 'Set specific times to send messages even when offline, with recurring options.',
    f7_title: 'Dummy Number Testing', f7_desc: 'Test campaigns on dummy numbers before actual sending to verify content.',
    f8_title: 'Number Filtering', f8_desc: 'Check if numbers exist on WhatsApp and remove inactive numbers.',
    f9_title: 'Multi-Account Support', f9_desc: 'Use multiple WhatsApp accounts simultaneously with quick switching.',
    f10_title: 'Message Personalization', f10_desc: 'Add dynamic variables like {name} to personalize each message.',
    f11_title: 'Multimedia Support', f11_desc: 'Send images, videos, documents, contacts, locations, and emojis.',
    f12_title: 'Detailed Reports', f12_desc: 'Track campaign performance with detailed reports including success rates.',
    f13_title: 'Ban Protection', f13_desc: 'Advanced technology protects your account from banning with smart delays.',
    f14_title: 'User-Friendly Interface', f14_desc: 'Modern design makes the software easy for beginners and professionals.',
    f15_title: 'Continuous Updates', f15_desc: 'Regular updates to support latest WhatsApp versions and add new features.',
    price_label: 'Pricing', price_title: 'Choose the Right Plan for You', price_sub: 'Flexible plans with money-back guarantee',
    plan1_name: 'Basic Plan', plan1_period: '1 Year / 1 Device', plan1b_name: 'Saver Plan', plan1b_period: '4 Years / 1 Device',
    plan2_name: 'Lifetime Plan', plan2_period: 'Lifetime / 1 Device',
    price_22: 'Ultimate Plan', price_04: '5 Years / 1 Device',
    pf1: 'Unlimited messaging', pf2: 'Group member extraction', pf3: 'Google Maps extraction',
    pf4: 'Auto-reply', pf5: 'Message scheduling', pf6: 'Number filtering', pf7: 'Multi-account support',
    pf8: 'Detailed reports', pf9: 'Ban protection', pf10: '24/7 technical support',
    pf11: 'Free updates', pf12: 'Two devices simultaneously', pf13: '3 devices simultaneously',
    devices_1: 'Single Device', devices_2: 'Two Devices', devices_3: '3 Devices',
    popular_badge: 'Most Popular', btn_buy_now: 'Subscribe Now',
    price_group1: 'Single Device Plans', price_group2: 'Multi-Device Plans',
    payment_title: 'Available Payment Methods', payment_subtitle: 'Choose the payment method that suits you',
    faq_title: 'Frequently Asked Questions about Pricing & Payment',
    faq_q1: 'Can I upgrade my plan later?', faq_a1: 'Yes! You can upgrade your plan anytime. The difference between your current and new plan will be calculated, with a discount for the remaining period.',
    faq_q2: 'What payment methods are available?', faq_a2: 'We accept several payment methods: Vodafone Cash (Egypt), Barq App (Saudi Arabia), InstaPay, D360 Bank Transfer (Saudi Arabia), and Visa/PayPal for international payments.',
    faq_q3: 'How long does license activation take after payment?', faq_a3: 'Activation usually happens within a few minutes of receiving the payment receipt via WhatsApp. Bank transfers may take 1-24 business hours.',
    faq_q4: 'Can the license be transferred to another device?', faq_a4: 'The license is linked to one device. If you change your device, contact us via WhatsApp and we will help you transfer the license to the new device for free.',
    pm_vodafone_title: 'Vodafone Cash (Egypt)', pm_vodafone_sub: 'Instant Wallet Transfer', pm_vodafone_note: 'Send the transfer receipt via WhatsApp for instant activation.',
    pm_barq_title: 'Barq App (Saudi Arabia)', pm_barq_sub: 'International Transfer to Saudi Arabia', pm_barq_steps: '<strong>Transfer Steps:</strong> International Transfer → Egypt → Enter the number below', pm_barq_note: 'Send the receipt after transfer for activation.',
    pm_instapay_title: 'InstaPay (Egypt)', pm_instapay_sub: 'Direct Transfer from Egypt', pm_instapay_link: 'Open InstaPay Link →', pm_instapay_note: 'Send the payment receipt after completing the transaction.',
    pm_bank_title: 'Bank Transfer - D360 (Saudi Arabia)', pm_bank_sub: 'Via Saudi IBAN', pm_bank_name: 'Bank:', pm_bank_holder: 'Beneficiary Name:', pm_bank_iban: 'IBAN Number:', pm_bank_swift: 'SWIFT Code:', pm_bank_note: 'Transfer takes 1-24 business hours. Send the receipt to activate.',
    pm_paypal_title: 'Visa / PayPal', pm_paypal_sub: 'Secure Card Payment', pm_paypal_note2: 'Click the "Buy Now" button or scan the QR code below your desired plan above, and you will be taken directly to the payment page with the correct amount. After payment, send the email used via WhatsApp.',
    price_01: '<span>Bank:</span> D360 Bank', price_02: '<span>Beneficiary Name:</span> Ayman Nasr Nasr',
    price_05: '/ Year', price_06: '/ Year', price_07: '/ 2 Years',
    price_08: '📊 Marketing Data', price_09: '📊 Marketing Data',
    price_11: '📱 Scan to Pay Quickly', price_12: '📱 Scan to Pay Quickly', price_13: '📱 Scan to Pay Quickly', price_14: '📱 Scan to Pay Quickly', price_15: '📱 Scan to Pay Quickly', price_16: '📱 Scan to Pay Quickly', price_17: '📱 Scan to Pay Quickly',
    price_18: 'Transfer Steps:',
    price_19: 'WA Sender Pricing & Plans - Flexible Plans for Every Need | WA Sender',
    price_20: '<strong>📱 Scan to Pay Quickly</strong>Pay $5 directly via PayPal', price_21: '<strong>📱 Scan to Pay Quickly</strong>Pay $15 directly via PayPal', price_23: '<strong>📱 Scan to Pay Quickly</strong>Pay $20 directly via PayPal', price_24: '<strong>📱 Scan to Pay Quickly</strong>Pay $50 directly via PayPal', price_25: '<strong>📱 Scan to Pay Quickly</strong>Pay $8 directly via PayPal', price_26: '<strong>📱 Scan to Pay Quickly</strong>Pay $12 directly via PayPal', price_27: '<strong>📱 Scan to Pay Quickly</strong>Pay $25 directly via PayPal',
    devices_year: '2 Devices / Year', devices_2year: '2 Devices / 2 Years', devices_3year: '3 Devices / Year',
    privacy_title: 'Privacy Policy', purchase_title: 'Purchase Policy', refund_title: 'Refund Policy', terms_title: 'Terms & Conditions',
    pwa_install: 'Install App', pwa_subtitle: 'Get a better experience without a browser',
    btn_download: 'Free Download', copy_btn: 'Copy',
    ct_01: 'Free Download', ct_02: 'English', ct_03: '📊 Marketing Data', ct_04: '📊 Marketing Data',
    ct_05: '🇸🇦 العربية', ct_06: 'Contact Us - WA Sender | Technical Support & Inquiries', pp_01: '1. Introduction', pp_02: '2. Information We Collect',
    pp_03: '3. How We Use Your Information', pp_04: '4. Information Sharing', pp_05: '5. Data Security', pp_06: '6. Your Rights',
    pp_07: '7. Data Retention', pp_08: '8. External Website Links', pp_09: '9. Changes to This Policy', pp_10: '10. Contact Us',
    pp_11: '2.1 Information You Provide Voluntarily:', pp_12: '2.2 Information Collected Automatically:', pp_13: 'Last updated: August 2026', pp_14: 'At WA Sender, we are committed to protecting your privacy. This policy explains how we collect, use, and protect your personal information when you use our website and the WA Sender software.',
    pp_15: 'By using our website or software, you agree to the practices described in this Privacy Policy.', pp_16: 'We use the information we collect for the following purposes:', pp_17: 'We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following cases:', pp_18: 'We take appropriate technical and organizational security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of data transmission over the internet can be guaranteed to be 100% secure.',
    pp_19: 'You have the right to:', pp_20: 'We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.', pp_21: 'Our website may contain links to external websites. We are not responsible for the content of these external sites and do not assume responsibility for their privacy practices.', pp_22: 'We may update this Privacy Policy from time to time. We will announce any significant changes by posting the new policy on this page with an updated "Last updated" date.',
    pp_23: 'If you have any questions about this Privacy Policy, please contact us via:', pp_24: 'English', pp_25: '<strong data-i18n="pp_46">Contact Information:</strong> Full name, email address, phone number when you contact us or purchase a license.', pp_26: '<strong data-i18n="pp_47">Payment Information:</strong> Payment details necessary to process your purchases (processed via secure payment gateways and not stored directly by us).',
    pp_27: '<strong data-i18n="pp_48">Technical Issues:</strong> Any information you provide when reporting a technical issue or requesting support.', pp_28: '<strong data-i18n="pp_49">Browsing Data:</strong> Browser type, operating system, IP addresses, pages visited, and time and date of your visit.', pp_29: '<strong data-i18n="pp_50">Cookies:</strong> We use cookies to improve your experience on the website. You can disable them from your browser settings.', pp_30: '<strong data-i18n="pp_51">Analytics Data:</strong> We use anonymous analytics tools to understand how visitors use our website.',
    pp_31: 'Providing, operating, and protecting our services (including troubleshooting).', pp_32: 'Processing transactions and sending purchase-related information.', pp_33: 'Responding to your inquiries and providing technical support.', pp_34: 'Improving our services and developing new features.',
    pp_35: 'Sending important notifications about the service (if any).', pp_36: 'Complying with legal and regulatory obligations.', pp_37: '<strong data-i18n="pp_52">Service Providers:</strong> Companies that help us run our business (payment gateways, server hosting) and are obligated to protect your data.', pp_38: '<strong data-i18n="pp_53">Legal Requirements:</strong> When required by law or to protect our rights or the safety of our users.',
    pp_39: '<strong data-i18n="pp_54">Your Consent:</strong> When you give us explicit consent to share your information.', pp_40: 'Access the personal data we hold about you.', pp_41: 'Request correction of any inaccurate information.', pp_42: 'Request deletion of your personal data (with some exceptions).',
    pp_43: 'Object to processing of your data for direct marketing purposes.', pp_44: 'Withdraw your consent at any time.', pp_45: '🇸🇦 العربية', pp_46: 'Contact Information:',
    pp_47: 'Payment Information:', pp_48: 'Technical Issues:', pp_49: 'Browsing Data:', pp_50: 'Cookies:',
    pp_51: 'Analytics Data:', pp_52: 'Service Providers:', pp_53: 'Legal Requirements:', pp_54: 'Your Consent:',
    pp_55: 'WhatsApp:', pp_56: 'Email:', pp_57: 'Privacy Policy - WA Sender | How We Protect Your Data', pv_01: '1. Introduction',
    pv_02: '2. License Types & Pricing', pv_03: '3. Accepted Payment Methods', pv_04: '4. Activation Process', pv_05: '5. License Terms',
    pv_06: '6. Price Guarantee', pv_07: '7. Invoices & Receipts', pv_08: '8. Technical Issues After Purchase', pv_09: '9. Contact Us',
    pv_10: '2.1 Single Device Plans:', pv_11: '2.2 Multi-Device Plans:', pv_12: 'Last updated: August 2026', pv_13: 'This policy explains the terms and conditions for purchasing and using WA Sender software licenses. By purchasing a WA Sender license, you agree to comply with these terms.',
    pv_14: 'We offer several subscription plans to meet different needs:', pv_15: 'We accept several payment methods to make the purchase process easier:', pv_16: 'We reserve the right to change our prices at any time. However, if you have purchased a subscription, the price you paid will remain valid for the duration of your subscription.', pv_17: 'Once payment is complete, you can request an official receipt via WhatsApp or email. The receipt includes purchase details, payment date, and amount paid.',
    pv_18: 'If you encounter any technical issue installing or activating the software:', pv_19: 'For inquiries related to purchase or payment:', pv_20: 'English', pv_21: '<strong data-i18n="pv_48">Annual Subscription:</strong> $5 USD - valid for one year on one device.',
    pv_22: '<strong data-i18n="pv_49">Two-Year Subscription:</strong> $15 USD - valid for two years on one device.', pv_23: '<strong data-i18n="pv_50">3-Year Subscription:</strong> $20 USD - valid for 3 years on one device.', pv_24: '<strong data-i18n="pv_51">Lifetime Subscription:</strong> $50 USD - valid for life on one device with permanent updates.', pv_25: '<strong data-i18n="pv_52">2 Devices / Year:</strong> $8 USD - two licenses for two different devices.',
    pv_26: '<strong data-i18n="pv_53">3 Devices / Year:</strong> $12 USD - three licenses for 3 different devices.', pv_27: '<strong data-i18n="pv_54">2 Devices / 2 Years:</strong> $25 USD - two licenses for two devices for two years.', pv_28: '<strong data-i18n="pv_55">Vodafone Cash (Egypt):</strong> Instant wallet transfer.', pv_29: '<strong data-i18n="pv_56">Barq App (Saudi Arabia):</strong> International transfer to Saudi Arabia.',
    pv_30: '<strong data-i18n="pv_57">InstaPay (Egypt):</strong> Direct transfer from Egypt.', pv_31: '<strong data-i18n="pv_58">Bank Transfer (Saudi IBAN):</strong> Via D360 FINTECH bank.', pv_32: '<strong data-i18n="pv_59">PayPal / Visa:</strong> Secure international card payment.', pv_33: 'Download the software for free from our website.',
    pv_34: 'Choose the plan that suits you from the pricing page.', pv_35: 'Complete payment using one of the available methods.', pv_36: 'Send the payment receipt via WhatsApp through our contact link.', pv_37: 'You will receive the activation code within minutes (may take up to 24 hours for bank transfers).',
    pv_38: 'Enter the activation code inside the software to activate all features.', pv_39: 'Each license is valid for one device only (unless it\'s a multi-device license).', pv_40: 'The activation code may not be shared with other people.', pv_41: 'The license is non-transferable and may not be resold.',
    pv_42: 'If you change devices, contact us to transfer the license for free.', pv_43: 'Free updates are available during the valid subscription period.', pv_44: 'Contact us immediately via WhatsApp or email.', pv_45: 'Describe the problem in detail with a screenshot if possible.',
    pv_46: 'Our support team will resolve your issue as soon as possible (within 24 hours maximum).', pv_47: '🇸🇦 العربية', pv_48: 'Annual Subscription:', pv_49: 'Two-Year Subscription:',
    pv_50: '3-Year Subscription:', pv_51: 'Lifetime Subscription:', pv_52: '2 Devices / Year:', pv_53: '3 Devices / Year:',
    pv_54: '2 Devices / 2 Years:', pv_55: 'Vodafone Cash (Egypt):', pv_56: 'Barq App (Saudi Arabia):', pv_57: 'InstaPay (Egypt):',
    pv_58: 'Bank Transfer (Saudi IBAN):', pv_59: 'PayPal / Visa:', pv_60: 'WhatsApp:', pv_61: 'Email:',
    pv_62: 'Purchase Policy - WA Sender | Payment Methods & Licenses', rf_01: '1. General Refund Policy', rf_02: '2. Refund Eligibility Cases', rf_03: '3. Non-Eligible Refund Cases',
    rf_04: '4. How to Request a Refund', rf_05: '5. Refund Processing', rf_06: '6. Refund Alternatives', rf_07: '7. Important Note Regarding WhatsApp Bans',
    rf_08: '8. Refund FAQ', rf_09: '9. Contact Us', rf_10: '2.1 Full Refund (7-Day Guarantee):', rf_11: '2.2 Partial Refund:',
    rf_12: 'Q: Can I try the software before purchasing?', rf_13: 'Q: What if the software doesn\'t work on my device?', rf_14: 'Q: Can I change my mind after purchasing a lifetime subscription?', rf_15: 'Last updated: August 2026',
    rf_16: 'At WA Sender, we are committed to delivering a high-quality product and excellent customer service. Due to the digital nature of our product (licensed software), our refund policy is limited, but we strive to meet our customers\' expectations.', rf_17: '<strong data-i18n="rf_53">7 days</strong> from the purchase date in the following cases:', rf_18: 'In some cases, we may offer a partial refund ranging between 50-70%:', rf_19: 'A refund cannot be requested in the following cases:',
    rf_20: 'To request a refund, please follow these steps:', rf_21: 'Instead of a refund, we may offer the following alternatives:', rf_22: '<strong data-i18n="rf_62">⚠️ Important Notice:</strong> A WhatsApp number ban is not grounds for a refund. We provide detailed guidance to protect against bans on the "Tutorial" page and within the software itself. Users are responsible for following this guidance and applying best practices. We strongly recommend reading the anti-ban guide before using the software to send any messages.', rf_23: 'A: Yes! You can download the software for free and try all the features. Payment is only required to activate the license.',
    rf_24: 'A: WA Sender requires Windows 10 or newer. If your device is compatible but it still doesn\'t work, contact us and we\'ll help you. If we can\'t resolve the issue, you can request a refund within 7 days.', rf_25: 'A: Yes, you can request a refund within 7 days of purchase if you haven\'t used the license. After that, we cannot accept refund requests for lifetime subscriptions.', rf_26: 'For inquiries about the refund policy or to submit a request:', rf_27: 'English',
    rf_28: 'If the software doesn\'t work on your device despite technical support assistance.', rf_29: 'If there is a major technical defect preventing the use of all core features.', rf_30: 'If your license was not activated within 48 hours of payment (after contacting us).', rf_31: 'If your needs changed after purchasing the subscription.',
    rf_32: 'If you find the software doesn\'t suit your specific requirements.', rf_33: 'In case of technical issues that were partially resolved.', rf_34: 'After 14 days have passed from the purchase date.', rf_35: 'If the license has already been used to send campaigns (even trial ones).',
    rf_36: 'In case of violation of the terms of use or WhatsApp/Meta policies.', rf_37: 'If the activation code was shared with other users.', rf_38: 'If the refund request is due to a WhatsApp number ban (see anti-ban guidance).', rf_39: 'Contact us via WhatsApp at: <a href="https://wa.me/wasendernew" target="_blank">Contact Us</a>',
    rf_40: 'Or send an email to: <a href="mailto:support@wasendernew.com">support@wasendernew.com</a>', rf_41: 'State the reason for your refund request in detail.', rf_42: 'Attach the original payment receipt if possible.', rf_43: 'Describe the issue you encountered (if any) with screenshots.',
    rf_44: '<strong data-i18n="rf_54">Review Time:</strong> We will review your request within 48 business hours.', rf_45: '<strong data-i18n="rf_55">Processing Time:</strong> If approved, the refund will be processed within 5-10 business days.', rf_46: '<strong data-i18n="rf_56">Refund Method:</strong> The amount will be refunded using the same original payment method.', rf_47: '<strong data-i18n="rf_57">Confirmation:</strong> You will receive email confirmation once the refund is processed.',
    rf_48: '<strong data-i18n="rf_58">Extend Subscription:</strong> Adding free time to your subscription.', rf_49: '<strong data-i18n="rf_59">Free Upgrade:</strong> Upgrading to a higher plan without paying the price difference.', rf_50: '<strong data-i18n="rf_60">License Transfer:</strong> Transferring the license to another device if the current one is incompatible.', rf_51: '<strong data-i18n="rf_61">Extra Training Session:</strong> A dedicated session via WhatsApp to explain how to use the software correctly.',
    rf_52: '🇸🇦 العربية', rf_53: '7 days', rf_54: 'Review Time:', rf_55: 'Processing Time:',
    rf_56: 'Refund Method:', rf_57: 'Confirmation:', rf_58: 'Extend Subscription:', rf_59: 'Free Upgrade:',
    rf_60: 'License Transfer:', rf_61: 'Extra Training Session:', rf_62: '⚠️ Important Notice:', rf_63: 'WhatsApp:',
    rf_64: 'Email:', rf_65: 'Refund Policy - WA Sender | Refund Terms', tm_01: '1. Acceptance of Terms', tm_02: '2. Service Description',
    tm_03: '3. Eligibility Requirements', tm_04: '4. Permitted Use', tm_05: '5. Prohibited Use', tm_06: '6. Responsibility Toward WhatsApp/Meta',
    tm_07: '7. Intellectual Property', tm_08: '8. License & Usage', tm_09: '9. Disclaimer', tm_10: '10. Limitation of Liability',
    tm_11: '11. Indemnification', tm_12: '12. Changes to Terms', tm_13: '13. Governing Law', tm_14: '14. Contact Us',
    tm_15: 'Last updated: August 2026', tm_16: 'By using the wasendernew.com website or the WA Sender software, you agree to comply with these Terms and Conditions. If you do not agree to any of these terms, please do not use our services.', tm_17: 'WA Sender is a WhatsApp marketing software that provides tools for bulk messaging, automation, and marketing campaign management. The software is designed for personal and commercial use within the bounds of Meta/WhatsApp policies and laws.', tm_18: 'To use WA Sender, you must:',
    tm_19: 'The user agrees to use WA Sender only for the following purposes:', tm_20: '<strong data-i18n="tm_64">It is explicitly prohibited</strong> to use the software for the following purposes:', tm_21: '<strong data-i18n="tm_65">⚠️ Important Notice:</strong> WA Sender is not affiliated with Meta, WhatsApp, Facebook, or any of their subsidiaries. Using this software may violate WhatsApp\'s terms of service. You alone bear full responsibility for any consequences resulting from your use of the software, including but not limited to having your WhatsApp account banned or facing legal action against you.', tm_22: 'The software is provided "as is" without any express or implied warranties. We do not guarantee:',
    tm_23: 'To the maximum extent permitted, our total liability will not exceed the amount you paid for the license. We will not be liable for:', tm_24: 'You agree to indemnify and hold harmless WA Sender, its team, employees, and partners from any claims, losses, or damages (including legal fees) resulting from:', tm_25: 'We reserve the right to modify these terms at any time. Modifications take effect immediately upon posting on the website. Your continued use of the software after modifications means you accept them.', tm_26: 'These terms are governed by and interpreted in accordance with applicable laws. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the competent courts.',
    tm_27: 'For inquiries about these terms:', tm_28: 'English', tm_29: 'Are of legal age (18 years or older) in your country.', tm_30: 'Have the legal capacity to enter into a binding agreement.',
    tm_31: 'Provide accurate and correct information when registering or purchasing.', tm_32: 'Maintain the confidentiality of your account credentials.', tm_33: 'Sending legitimate marketing messages to numbers that have given their consent.', tm_34: 'Managing WhatsApp marketing campaigns professionally.',
    tm_35: 'Automating responses to legitimate customer inquiries.', tm_36: 'Extracting publicly available data for legitimate marketing purposes.', tm_37: 'Sending spam or unsolicited messages.', tm_38: 'Sending harmful, fraudulent, or illegal content.',
    tm_39: 'Violating the privacy or rights of others.', tm_40: 'Attempting to hack or damage WhatsApp or Meta systems.', tm_41: 'Sharing, selling, or distributing the activation code.', tm_42: 'Reverse-engineering, modifying, or copying the software.',
    tm_43: 'Using it for any purpose that conflicts with WhatsApp/Meta terms of service.', tm_44: 'All rights to WA Sender are owned by the development team.', tm_45: 'The software is protected by international copyright laws.', tm_46: 'You may not copy, modify, or distribute the software without explicit written permission.',
    tm_47: 'The logo, icons, and design are the property of WA Sender.', tm_48: 'When you purchase a license, you obtain a personal, non-transferable right to use the software.', tm_49: 'Each license is valid for one device only (unless it\'s a multi-device license).', tm_50: 'The license may not be rented, lent, or sold to third parties.',
    tm_51: 'We reserve the right to revoke the license in case of violation of these terms.', tm_52: 'That the software will work without interruption or errors.', tm_53: 'That the results of using the software will meet your expectations.', tm_54: 'That using the software will not lead to your WhatsApp number being banned.',
    tm_55: 'That all features will be continuously available.', tm_56: 'Any direct, indirect, incidental, or consequential damages resulting from the use or inability to use the software.', tm_57: 'Loss of data, profits, or business opportunities.', tm_58: 'Your account being banned on WhatsApp or any other platform.',
    tm_59: 'Any legal action taken against you by a third party.', tm_60: 'Your use of the software.', tm_61: 'Your violation of these terms.', tm_62: 'Your violation of third-party rights.',
    tm_63: '🇸🇦 العربية', tm_64: 'It is explicitly prohibited', tm_65: '⚠️ Important Notice:', tm_66: 'WhatsApp:',
    tm_67: 'Email:', tm_68: 'Terms & Conditions - WA Sender | Terms of Use',
    contact_label: 'Contact', contact_sub: 'We\'re here to help. Reach out via the channels below and we\'ll respond as soon as possible', ct1_title: 'WhatsApp', ct1_desc: 'For instant support, activation, and quick inquiries',
    ct2_title: 'Email', ct2_desc: 'For detailed inquiries and advanced technical support', ct3_title: 'Working Hours', ct3_desc: 'Available during official working hours',
    ct3_hours: '9 AM – 10 PM (Cairo Time)', cf_title: 'Send a Message', cf_desc: 'Fill out the form below and we\'ll get back to you as soon as possible', cf_subject_ph: 'Choose the message subject',
    cf_opt1: 'General Inquiry', cf_opt2: 'Technical Support', cf_opt3: 'Payment Issue', cf_opt4: 'License Request',
    cf_msg: 'Your Message', cf_send: 'Send Message', faq_sub: 'You might find an answer in our FAQ', cf_name_ph: 'Enter your full name',
    cf_msg_ph: 'Write your message here in detail...',
    ft_06: 'WA Sender v5.0.7 Features - 15+ Professional Tools | WA Sender', ft_01: 'Free Download', ft_02: 'English', ft_03: '📊 Marketing Data',
    ft_04: '📊 Marketing Data', ft_05: '🇸🇦 العربية', feat_label: 'Features', feat_title: 'Main Features of WA Sender v5.0.7',
    feat_sub: '15+ professional tools in one program to meet all your WhatsApp marketing needs', feat_msg_tools: '📨 Messaging & Sending Tools', feat_extract_tools: '🔍 Extraction & Data Tools', feat_mgmt_tools: '🛡️ Management & Protection',
    cta_ready: 'Ready to try all these features?', cta_desc: 'Download the software for free and start using all the tools instantly', btn_subscribe: '💳 Subscribe Now', tut_15: 'WA Sender Tutorial - Step-by-Step Videos | WA Sender',
    tut_01: 'Free Download', tut_03: '📊 Marketing Data', tut_02: 'English', tut_04: '🇸🇦 العربية',
    tut_05: 'Grace Period:', tut_06: 'Natural Interaction:', tut_07: 'Time Intervals:', tut_08: 'Maximum Limit:',
    tut_09: 'Rest Periods:', tut_10: 'Pre-Registration:', tut_11: 'Synchronization:', tut_12: 'Personal Messages:',
    tut_13: 'Opt-out Option:', tut_14: 'Useful Content:', cta_desc_tutorial: 'Download the software for free and start your WhatsApp marketing journey', crm_22: 'WA CRM - WhatsApp Customer Relationship Management Software | WA Sender',
    crm_02: 'Download WA CRM', crm_08: '📊 Marketing Data', crm_03: 'English', crm_21: '🇸🇦 العربية',
    wacrm_badge: '✨ New', wacrm_hero_title: 'WA CRM<br/>WhatsApp Customer Relationship Management', wacrm_hero_sub: 'An integrated system to manage your customers, organize WhatsApp conversations, and track sales efficiently', wacrm_download: 'Free Download',
    wacrm_buy: 'Buy Now - $20/year', crm_04: 'Features', wacrm_desc: 'Powerful tools to manage your customer relationships professionally', crm_05: 'Steps',
    wacrm_how_title: 'How does WA CRM work?', wacrm_how_sub: 'Three simple steps to manage your customers professionally', wacrm_step1_title: 'Download the Software', wacrm_step1_desc: 'Download WA CRM for free and install it on your device in simple steps.',
    wacrm_step2_title: 'Subscribe & Activate', wacrm_step2_desc: 'Annual subscription for just $20 and get your activation code instantly.', wacrm_step3_title: 'Start Managing', wacrm_step3_desc: 'Enter your customers\' data and start managing their relationships professionally.',
    crm_06: 'Pricing', wacrm_price_title: 'One Comprehensive Plan', crm_01: 'Everything you need to manage your customers at an unbelievable price', wacrm_price_amount: '20',
    wacrm_price_period: '/ year', wacrm_price_feat1: 'All available features', wacrm_price_feat2: 'Continuous free updates', wacrm_price_feat3: '24/7 direct technical support',
    wacrm_price_feat4: 'Single device license', crm_09: '💳 Buy Now - $20', wacrm_cta_ready: 'Ready to manage your customers professionally?', wacrm_cta_desc: 'Download WA CRM now and start organizing your customer relationships today',
    crm_10: 'Home', crm_11: 'Marketing Data', crm_12: 'Tutorial', crm_13: 'Features',
    crm_14: 'Pricing', crm_15: 'Privacy Policy', crm_16: 'Purchase Policy', crm_17: 'Refund Policy',
    crm_18: 'Terms & Conditions', crm_19: 'Contact Us', crm_20: 'WhatsApp', crm_07: 'Data',
    wd_62: 'WaDefender - WhatsApp Account Strength Analyzer | Download + Subscribe', wd_31: 'Free Download', wd_38: '📊 Marketing Data', wd_32: 'English',
    wd_59: '🇸🇦 العربية', wd_63: '🛡️ Advanced Protection Tool', wd_01: '<span>WaDefender</span><br/>WhatsApp Account Strength Analyzer', wd_17: 'A professional tool to scan and analyze the strength of your WhatsApp account, discover weaknesses, and strengthen your account against ban risk. Download for free and activate with an affordable annual subscription.',
    wd_39: '⬇️ Free Download', wd_40: '💳 Subscribe Now - $5/year', wd_33: 'Features', wd_02: 'Why WaDefender?',
    wd_18: 'Advanced tools to protect and improve your WhatsApp account\'s performance', wd_07: 'Account Strength Analysis', wd_19: 'Comprehensive scan of your WhatsApp account status with a detailed report on strengths, weaknesses, and improvement recommendations.', wd_08: 'Number Health Check',
    wd_20: 'Verify WhatsApp number activity and check with high accuracy whether they are registered, banned, or nonexistent.', wd_09: 'Ban Protection', wd_21: 'Assess your account\'s ban risk and receive preventive measures to keep your WhatsApp number safe.', wd_10: 'Detailed Reports',
    wd_22: 'Comprehensive, updated reports on your account status including registration date, trust level, and account activity.', wd_11: 'Ultra Fast', wd_23: 'A fast analysis engine that works with high efficiency to scan hundreds of numbers in record time without delay.', wd_12: 'Continuous Updates',
    wd_24: 'Regular updates to keep up with the latest WhatsApp changes and ensure result accuracy and software performance.', wd_34: 'How It Works', wd_03: 'Get started in 3 simple steps', wd_25: 'Easy to use, no technical experience needed',
    wd_14: 'Download the Software', wd_26: 'Download WaDefender for free from the website and install it on your device with simple, quick steps.', wd_15: 'Subscribe & Activate', wd_27: 'Subscribe for just $5 for the full year and get your activation code right after payment.',
    wd_16: 'Start Analyzing', wd_28: 'Enter the activation code and start scanning and analyzing your account and numbers instantly with ease.', wd_35: 'Pricing', wd_04: 'Annual subscription at a special price',
    wd_29: 'All features available at an unmatched price', wd_13: 'Annual Plan', wd_36: '/ year', wd_53: '✅ Unlimited account analysis',
    wd_54: '✅ Unlimited number health checks', wd_55: '✅ Comprehensive detailed reports', wd_56: '✅ Free updates throughout the year', wd_57: '✅ 24/7 direct technical support',
    wd_58: '✅ Single device license', wd_41: '💳 Buy Now via PayPal', wd_64: '<strong data-i18n="wd_60">Scan QR to Pay</strong>\n              using your phone or the PayPal app<br/>\n<small data-i18n="wd_61" style="color:var(--text-muted)">Amount: $5/year</small>', wd_60: 'Scan QR to Pay',
    wd_61: 'Amount: $5/year', wd_37: 'Statistics', wd_05: 'Numbers that trust WaDefender', wd_65: 'Active users',
    wd_66: 'numbers scanned', wd_67: 'result accuracy', wd_68: 'technical support', wd_06: 'Ready to protect your WhatsApp account?',
    wd_30: 'Download WaDefender now and start analyzing and protecting your account from ban risk', wd_42: '⬇️ Free Download', wd_43: '💳 Subscribe Now - $5', wd_44: 'Home',
    wd_45: 'Marketing Data', wd_46: 'Pricing', wd_47: 'Privacy Policy', wd_48: 'Terms & Conditions',
    wd_49: 'Refund Policy', wd_50: 'Purchase Policy', wd_51: 'Contact Us', wd_52: 'WhatsApp',
    idx_53: 'WA Sender - Download WhatsApp Sender Software + Activation Guide & Pricing', idx_39: 'Install', idx_22: '📊 Marketing Data', idx_07: 'English',
    idx_40: '🇸🇦 العربية', badge_new: 'New Version 5.0.7', hero_sub: 'Complete WhatsApp marketing software with 15+ powerful tools for bulk messaging, automation, and lead generation', btn_buy: 'Buy Now',
    warn_title: 'Important: Meta / WhatsApp Anti-Spam Policy', warn_p1: 'Meta (the company that owns WhatsApp) imposes strict restrictions on bulk and unsolicited messaging activities.', warn_p2: 'Accounts that violate WhatsApp\'s terms of use may face temporary or permanent bans.', warn_p3: 'WA Sender includes safety features to help you comply with Meta\'s policies, but it must be used responsibly.',
    warn_p5: 'Note: Make sure to configure Windows Defender or your security software to allow the software installation.', how_label: 'Tutorial', how_sub: 'A complete video guide for installing the software, activating the license, and using the most important tools step by step', how_badge: 'Full Video Guide',
    how_caption: '▶ A playlist of 10 tutorial videos that play directly on the website without any redirect to YouTube', steps_title: 'How to Activate in 4 Simple Steps', step1_title: 'Download the Software', step1_desc: 'Download the WA Sender file using the free download button and install it on your device in simple steps.',
    step2_title: 'Choose Your Plan & Pay', step2_desc: 'Choose the plan that suits you from the pricing section and complete payment using any available method.', step3_title: 'Send Payment Receipt', step3_desc: 'Send a screenshot of your payment receipt via WhatsApp and you\'ll receive the activation code instantly.',
    step4_title: 'Activate & Start Sending', step4_desc: 'Enter the activation code inside the software and enjoy all the tools instantly.', guide_label: 'Safety Tips', guide_title: 'WhatsApp Ban Protection Guidelines',
    guide_sub: 'To ensure your marketing campaigns keep running without losing your numbers, you need to follow these steps:', g1_title: '1. Number Warm-Up', g1_li1: '<strong data-i18n="idx_41">Grace Period:</strong> If the number is new, wait 20 to 30 days before starting any campaign.', idx_41: 'Grace Period:',
    g1_li2: '<strong data-i18n="idx_42">Natural Interaction:</strong> Use the number in daily personal conversations and join groups so it shows natural activity to WhatsApp.', idx_42: 'Natural Interaction:', g2_title: '2. Smart Timing', g2_li1: '<strong data-i18n="idx_43">Time Intervals:</strong> Leave a gap of 20 to 30 seconds between each message.',
    idx_43: 'Time Intervals:', g2_li2: '<strong data-i18n="idx_44">Maximum Limit:</strong> Send no more than 200 to 300 messages per hour.', idx_44: 'Maximum Limit:', g2_li3: '<strong data-i18n="idx_45">Rest Periods:</strong> You must pause the campaign periodically and take breaks so it isn\'t flagged as "spam".',
    idx_45: 'Rest Periods:', g3_title: '3. Contact Management', g3_li1: '<strong data-i18n="idx_46">Pre-Registration:</strong> Save the numbers at least 24 hours before sending.', idx_46: 'Pre-Registration:',
    g3_li2: '<strong data-i18n="idx_47">Synchronization:</strong> Use Google Contacts to make sure the numbers are properly formatted, and update the list continuously.', idx_47: 'Synchronization:', g4_title: '4. Message Content Strategy', g4_li1: '<strong data-i18n="idx_48">Personal Messages:</strong> Avoid copy-paste messages and try to make each message personalized to the recipient\'s name or interest.',
    idx_48: 'Personal Messages:', g4_li2: '<strong data-i18n="idx_49">Opt-out Option:</strong> You must give the customer a chance to opt out of receiving messages so they don\'t report you.', idx_49: 'Opt-out Option:', g4_li3: '<strong data-i18n="idx_50">Useful Content:</strong> Avoid anything that looks like "spam" and respect the customer\'s privacy and wishes.',
    idx_50: 'Useful Content:', view_all_features: 'View All Features ←', idx_08: '🔥 Special Offer', idx_01: 'Professional Databases for WhatsApp Marketing',
    idx_04: 'Over 84 million classified Saudi and Egyptian numbers ready for your marketing campaigns', idx_09: 'Saudi Number', idx_10: 'Egyptian Number', idx_23: '📦 Browse Available Data',
    idx_11: '✨ New', idx_02: 'WA CRM - WhatsApp Customer Relationship Management', idx_05: 'An integrated system to manage your customers, organize WhatsApp conversations, and track sales efficiently', idx_12: 'Customer Management',
    idx_13: 'Conversation Tracking', idx_14: '/year', idx_15: 'Special Price', idx_24: '🟢 Discover WA CRM',
    idx_25: '⬇️ Free Download', idx_16: '🛡️ Advanced Protection', idx_03: 'WaDefender - WhatsApp Account Strength Analyzer', idx_06: 'Scan your account, discover weaknesses, and strengthen your protection against ban risk before it happens',
    idx_17: 'numbers scanned', idx_18: 'result accuracy', idx_19: '/year', idx_20: 'affordable price',
    idx_26: '🛡️ Discover WaDefender', idx_27: '⬇️ Free Download', idx_54: '<strong data-i18n="idx_51">📱 Scan to Pay Quickly</strong>Pay $5 directly via PayPal', idx_51: '📱 Scan to Pay Quickly',
    idx_55: '<strong data-i18n="idx_52">📱 Scan to Pay Quickly</strong>Pay $50 directly via PayPal', idx_52: '📱 Scan to Pay Quickly', view_all_plans: 'View All Plans ←', idx_28: 'Home',
    idx_29: 'Marketing Data', idx_30: 'Tutorial', idx_31: 'Features', idx_32: 'Pricing',
    idx_33: 'Privacy Policy', idx_34: 'Purchase Policy', idx_35: 'Refund Policy', idx_36: 'Terms & Conditions',
    idx_37: 'Contact Us', idx_38: 'WhatsApp', idx_21: 'Data', md_119: 'Marketing Number Databases | Saudi, Egypt, Kuwait & UAE Databases - WA Sender',
    md_85: 'Home', md_86: '📊 Marketing Data', md_87: 'Tutorial', md_88: 'Features',
    md_89: 'Pricing', md_90: 'Contact Us', md_39: 'English', md_105: '🇸🇦 العربية',
    md_120: '🎯 The Optimal Solution for Digital Marketing & Sales Growth', md_01: 'Ready Customer & Contact Lists<br/>for WhatsApp Marketing', md_20: 'We provide precise marketing segments and ready-made lists to help your business reach its target audience easily and effectively.', md_40: 'Saudi List',
    md_41: 'Egypt List', md_42: 'Kuwait List', md_43: 'UAE List', md_44: '📦 Available Segments & Packages',
    md_02: 'Choose the Right Database for Your Business', md_21: 'Carefully organized and filtered data to save you time and effort in reaching interested customers', md_08: 'Saudi Database', md_45: 'Million Records',
    md_46: 'Covers the entire Kingdom of Saudi Arabia (13 regions)', md_47: 'Data updated within the last 5 years', md_48: 'Classified by profession and specialty', md_49: 'Classified by city and region',
    md_50: 'Excel (.xlsx) and TXT files', md_22: '<strong data-i18n="md_109">Note:</strong> Some numbers may change over time due to ongoing updates.', md_109: 'Note:', md_121: '<strong data-i18n="md_110">📱 Scan to Pay Quickly</strong>Pay $110 directly via PayPal',
    md_110: '📱 Scan to Pay Quickly', md_91: '💳 Buy Now - $110 USD', md_51: '📁 Instant Delivery via Google Drive', md_09: 'Egyptian Database',
    md_52: 'Million Records', md_53: 'Covers the entire Arab Republic of Egypt (27 governorates)', md_54: 'Data updated within the last 3 years', md_55: 'Classified by profession and specialty',
    md_56: 'Classified by governorate', md_57: 'Excel (.xlsx) and TXT files', md_23: '<strong data-i18n="md_111">Note:</strong> Some numbers may change over time due to ongoing updates.', md_111: 'Note:',
    md_122: '<strong data-i18n="md_112">📱 Scan to Pay Quickly</strong>Pay $12 directly via PayPal', md_112: '📱 Scan to Pay Quickly', md_92: '💳 Buy Now - $12 USD', md_58: '📁 Instant Delivery via Google Drive',
    md_10: 'Kuwaiti Database', md_59: 'Million Numbers', md_60: 'Very organized and professional data', md_61: 'Governorates arranged and organized precisely',
    md_62: 'Customer names included to personalize messages', md_63: 'Large and comprehensive size across various segments', md_64: 'Excel (.xlsx) and TXT files', md_24: '<strong data-i18n="md_113">Note:</strong> Organized, detailed data for Kuwait\'s governorates to make targeting easier.',
    md_113: 'Note:', md_123: '<strong data-i18n="md_114">📱 Scan to Pay Quickly</strong>Pay $25 directly via PayPal', md_114: '📱 Scan to Pay Quickly', md_93: '💳 Buy Now - $25 USD',
    md_65: '📁 Instant Delivery via Google Drive', md_11: 'Emirati Database', md_66: 'Million Numbers', md_67: 'Real, targeted citizens',
    md_68: 'Serious customers ready to buy and engage', md_69: 'A segment with very good financial standing', md_70: 'Very organized and ready for import', md_71: 'Excel (.xlsx) and TXT files',
    md_25: '<strong data-i18n="md_115">Note:</strong> Excellent data for businesses targeting the high-purchasing-power segment.', md_115: 'Note:', md_124: '<strong data-i18n="md_116">📱 Scan to Pay Quickly</strong>Pay $15 directly via PayPal', md_116: '📱 Scan to Pay Quickly',
    md_94: '💳 Buy Now - $15 USD', md_72: '📁 Instant Delivery via Google Drive', md_12: 'Combined Gulf Countries Database (Comprehensive Package)', md_125: 'Covering <span data-i18n="md_73">7 Arab and Gulf countries</span>',
    md_73: '7 Arab and Gulf countries', md_74: 'Kingdom of Saudi Arabia (34M+)', md_75: 'United Arab Emirates (1M+)', md_76: 'State of Kuwait (2M+)',
    md_77: 'Hashemite Kingdom of Jordan', md_78: 'Republic of Iraq', md_79: 'State of Qatar', md_80: 'Republic of Lebanon',
    md_26: '<strong data-i18n="md_117">Note:</strong> A comprehensive package combining databases from several major Arab and Gulf markets at a discounted price with high marketing value.', md_117: 'Note:', md_126: '<strong data-i18n="md_118">📱 Scan to Pay Quickly</strong>Pay $250 directly via PayPal', md_118: '📱 Scan to Pay Quickly',
    md_95: '💳 Buy the Comprehensive Package - $250 USD', md_81: '📁 Instant Delivery via Google Drive', md_82: '💡 Why WhatsApp Marketing?', md_03: 'The Power of Direct Marketing Channels',
    md_27: 'Discover why marketing through WhatsApp achieves the highest engagement rates and return on investment', md_13: 'Very High Read Rate', md_28: 'WhatsApp messages are read at rates that exceed traditional methods, ensuring your marketing message reaches customers directly.', md_14: 'Interaction & Response Speed',
    md_29: 'WhatsApp lets you open direct and fast communication channels with potential customers to answer their questions and close sales.', md_15: 'Organized & Professional Targeting', md_30: 'Using ready and classified lists lets you tailor your offers precisely to match the interests of your target segment.', md_04: 'The Biggest Challenge in Building Marketing Campaigns',
    md_31: 'Every successful marketer knows that the success of any WhatsApp campaign largely depends on the quality and strength of the customer list used.<br/>Instead of spending weeks manually collecting and cleaning data, we save you all this effort.', md_16: '✅ The Professional Solution, Ready in Your Hands', md_32: 'Choose the package or country you\'re targeting, and get the files organized and ready to work with and import into your marketing software instantly.', md_05: 'How to Receive the Files',
    md_33: 'After completing payment, you will be provided with a direct download link via <strong>Google Drive</strong> containing all the lists in both <strong>Excel (.xlsx)</strong> and <strong>TXT</strong> formats.', md_83: '❓ Frequently Asked Questions', md_06: 'Answers to Your Questions', md_106: 'What file formats will I receive?<span>+</span>',
    md_34: 'Files are available in Excel (.xlsx) and TXT formats to be fully compatible with sending and import software.', md_107: 'How do I get the files after payment?<span>+</span>', md_35: 'The Google Drive download link is sent instantly and securely right after payment is completed.', md_108: 'Is the data organized and classified?<span>+</span>',
    md_36: 'Yes, the lists are carefully organized and distributed by governorate and geographic region to make targeting easier.', md_07: 'Grow Your Marketing Campaign Today!', md_37: 'Choose the package that suits your business and start reaching your target audience', md_96: '🇸🇦 Saudi Data - $110',
    md_97: '🇪🇬 Egypt Data - $12', md_98: '🇰🇼 Kuwait Data - $25', md_38: 'Professional tools and software to grow your marketing campaigns and increase your sales.', md_17: 'Quick Links',
    md_99: 'Home', md_100: 'Marketing Data', md_101: 'Pricing', md_18: 'Legal',
    md_102: 'Privacy Policy', md_103: 'Terms & Conditions', md_19: 'Support', md_104: 'Contact Us',
    md_84: '© 2026 WA Sender. All Rights Reserved.',
    local_yearly_egp: '≈ 250 EGP', local_saver_egp: '≈ 750 EGP', local_ultimate_egp: '≈ 1000 EGP', local_lifetime_egp: '≈ 2500 EGP',
    pm_paypal: 'PayPal - Credit Cards', pm_paypal_desc: 'Pay securely via PayPal or Visa & MasterCard',
    pm_bank: 'Bank Transfer', pm_bank_desc: 'Direct transfer to our D360 Bank account',
    pm_vodafone: 'Vodafone Cash', pm_vodafone_desc: 'Pay via Egyptian Vodafone Cash',
    pm_instapay: 'InstaPay', pm_instapay_desc: 'Pay easily through InstaPay',
    contact_title: 'Contact Us', contact_subtitle: 'We\'d love to hear from you!',
    cf_name: 'Full Name', cf_email: 'Email Address', cf_phone: 'Phone Number',
    cf_subject: 'Subject', cf_message: 'Message', cf_submit: 'Send Message',
    cf_success: 'Your message has been sent successfully!', cf_error: 'An error occurred. Please try again.',
    ct_whatsapp_title: 'WhatsApp', ct_whatsapp_desc: 'Contact us directly via WhatsApp for quick response',
    ct_email_title: 'Email', ct_email_desc: 'Send us an email and we\'ll respond within 24 hours',
    ct_hours_title: 'Working Hours', ct_hours_desc: 'Sunday - Thursday: 9 AM - 6 PM',
    pp01: 'Privacy Policy', pp02: 'Last updated: January 2025',
    pp03: 'At WA Sender, we are committed to protecting your privacy. This policy explains data collection and protection.',
    pp04: '1. Data We Collect', pp05: 'We may collect:',
    pp06: '• Contact info: Name, email, phone when contacting us',
    pp07: '• Payment data: Transaction info via secure PayPal or bank transfers',
    pp08: '• Usage data: Technical info about software usage',
    pp09: '• Cookies: To improve site experience',
    pp10: '2. How We Use Your Data', pp11: 'We use data for:',
    pp12: '• Providing services and technical support', pp13: '• Processing payments',
    pp14: '• Improving services', pp15: '• Sending updates', pp16: '• Legal compliance',
    pp17: '3. Data Protection', pp18: 'Security measures include:',
    pp19: '• Data encryption', pp20: '• Restricted access', pp21: '• Regular security updates',
    pp22: '• No credit card storage',
    pp23: '4. Data Sharing', pp24: 'We don\'t share data except:',
    pp25: '• Payment processors', pp26: '• Legal requirements', pp27: '• With consent',
    pp28: '5. Your Rights', pp29: 'You have rights:',
    pp30: '• Access data', pp31: '• Correct data', pp32: '• Delete data',
    pp33: '• Withdraw consent', pp34: '• File complaints',
    pp35: '6. Cookies', pp36: 'We use cookies for:',
    pp37: '• Preferences', pp38: '• Analytics', pp39: '• UX improvement',
    pp40: '7. Changes', pp41: 'Updates posted here with dates.',
    pp42: '8. Contact Us', pp43: 'Email: support@wasendernew.com | WhatsApp: +201279934735',
    rf01: 'Purchase Policy', rf02: 'Last updated: January 2025',
    rf03: 'Please read carefully before purchasing.',
    rf04: '1. Products', rf05: 'Subscription packages include:',
    rf06: '• Annual Plan', rf07: '• Two-Year Plan', rf08: '• Three-Year Plan',
    rf09: '• Lifetime Plan', rf10: '• Multi-device Plans',
    rf11: '2. Prices', rf12: 'All prices in USD, taxes may apply.',
    rf13: '3. Payment Methods', rf14: 'We accept:',
    rf15: '• PayPal', rf16: '• Bank Transfer', rf17: '• Vodafone Cash', rf18: '• InstaPay',
    rf19: '4. Purchase Process', rf20: 'After purchase:',
    rf21: '• Email confirmation', rf22: '• License within 24h', rf23: '• Verify contact info',
    rf24: '5. Activation', rf25: 'After purchase:',
    rf26: '• Unique license key', rf27: '• Enter in software', rf28: '• Linked to device',
    rf29: '6. Renewal', rf30: '• No auto-renewal', rf31: '• 7-day reminder', rf32: '• Manual renewal',
    rf33: '7. Transfer', rf34: '• No transfer during subscription', rf35: '• Contact support for changes',
    rf36: '8. Offers', rf37: '• Special promotions', rf38: '• Non-stackable discounts',
    rf39: '• Prices subject to change',
    rf40: '9. Terms', rf41: '• Purchase = acceptance', rf42: '• Cancellation rights reserved',
    rf43: '• Prices may change',
    rf44: '10. Contact', rf45: 'WhatsApp: +201279934735 | Email: support@wasendernew.com',
    tm01: 'Refund Policy', tm02: 'Last updated: January 2025',
    tm03: 'We aim for satisfactory service.',
    tm04: '1. General Policy', tm05: 'Due to digital nature:',
    tm06: '• 7-day window', tm07: '• Under 100 messages sent', tm08: '• Valid reason required',
    tm09: '2. Accepted Cases', tm10: 'Refunds for:',
    tm11: '• Unresolved tech issues (5 days)', tm12: '• OS incompatibility',
    tm13: '• Critical errors', tm14: '• Duplicate payment',
    tm15: '3. Non-Refund Cases', tm16: 'No refund for:',
    tm17: '• After 7 days', tm18: '• User error', tm19: '• WhatsApp ban',
    tm20: '• Unauthorized purchase',
    tm21: '4. Process', tm22: 'To request:',
    tm23: '• Contact us', tm24: '• Provide order info', tm25: '• Describe issue',
    tm26: '• 3-5 day review',
    tm27: '5. Timeline', tm28: '• Cards: 5-10 days', tm29: '• PayPal: 3-5 days',
    tm30: '• Bank: 7-14 days',
    tm31: '6. Alternatives', tm32: 'We may offer:',
    tm33: '• Free extension', tm34: '• Upgrade', tm35: '• Tech support',
    tm36: '7. Disputes', tm37: '• Contact first', tm38: '• Dispute as last resort',
    tm39: '• Malicious disputes = ban',
    tm40: '8. Exceptions', tm41: '• Emergencies handled flexibly',
    tm42: '• Loyal customer perks', tm43: '• Case-by-case review',
    pv01: 'Terms & Conditions', pv02: 'Last updated: January 2025',
    pv03: 'Welcome to WA Sender. Using our service means accepting these terms.',
    pv04: '1. Acceptance', pv05: 'Using WA Sender = full acceptance of terms.',
    pv06: '2. Service Description', pv07: 'Tools include:',
    pv08: '• Bulk messaging', pv09: '• Extraction', pv10: '• Campaign management',
    pv11: '• Automation',
    pv12: '3. Obligations', pv13: 'You must:',
    pv14: '• Use lawfully', pv15: '• No spam', pv16: '• Respect privacy',
    pv17: '• No hacking', pv18: '• Follow WhatsApp ToS',
    pv19: '4. IP Rights', pv20: '• All rights belong to WA Sender',
    pv21: '• Personal use only', pv22: '• No copying/distribution',
    pv23: '• Trademarks to owners',
    pv24: '5. Liability', pv25: 'You\'re responsible for:',
    pv26: '• Message content', pv27: '• Legal compliance', pv28: '• Account safety',
    pv29: '• Misuse damages',
    pv30: '6. Limitation', pv31: '• "As is" provision', pv32: '• Not responsible for bans',
    pv33: '• Max liability = amount paid', pv34: '• No indirect damages',
    pv35: '7. Termination', pv36: 'We may terminate if:',
    pv37: '• Violation', pv38: '• Illegal use', pv39: '• Fraud',
    pv40: '• Reputation damage',
    pv41: '8. Changes', pv42: 'Terms modifiable; users notified of major changes.',
    pv43: '9. Law', pv44: 'Subject to applicable law; arbitration for disputes.',
    pv45: '10. Contact', pv46: 'Legal: legal@wasendernew.com | WhatsApp: +201279934735',
    wd_title: 'WaDefender - WhatsApp Account Protection',
    wd_subtitle: 'Protect your WhatsApp account from bans with advanced protection tool',
    wd_hero_desc: 'WaDefender specializes in protecting your WhatsApp account from banning and suspension risks.',
    wd_feature1_title: 'Behavior Monitoring', wd_feature1_desc: 'Track activities to detect dangerous behaviors.',
    wd_feature2_title: 'Early Alerts', wd_feature2_desc: 'Instant alerts for suspicious activity detection.',
    wd_feature3_title: 'Rate Management', wd_feature3_desc: 'Smart control over daily message limits.',
    wd_feature4_title: 'Quality Check', wd_feature4_desc: 'Verify numbers before sending to avoid reports.',
    wd_feature5_title: 'Safe Scheduling', wd_feature5_desc: 'Distribute messages over safe intervals simulating natural behavior.',
    wd_feature6_title: 'Protection Reports', wd_feature6_desc: 'Detailed protection status and security recommendations.',
    wd_btn_download: 'Download WaDefender', wd_price: '$15/year', wd_note: 'Works alongside WA Sender',
    md_title: 'Marketing Data', md_subtitle: 'Prospect data extraction from multiple sources',
    md_hero_desc: 'Extract phones, emails, and business addresses from Google Maps and websites.',
    md_feature1_title: 'Google Maps Extraction', md_feature1_desc: 'Search businesses in any city and extract contact info.',
    md_feature2_title: 'Website Extraction', md_feature2_desc: 'Extract numbers from websites using URLs or keywords.',
    md_feature3_title: 'Advanced Filtering', md_feature3_desc: 'Filter by city, business type, or ratings.',
    md_feature4_title: 'Multi-Format Export', md_feature4_desc: 'Export as CSV, Excel, or JSON.',
    md_feature5_title: 'Keyword Search', md_feature5_desc: 'Search using multiple keywords.',
    md_feature6_title: 'Auto Update', md_feature6_desc: 'Verify data and ignore inactive numbers.',
    md_btn_learn_more: 'Learn More', md_included: 'Included with WA Sender Pro',
    wacrm_title: 'WA CRM - Customer Relationship Management',
    wacrm_subtitle: 'Manage customers and campaigns from one place',
    wacrm_hero_desc: 'Integrated CRM system inside WhatsApp for tracking customers and managing sales.',
    wacrm_feature1_title: 'Customer Management', wacrm_feature1_desc: 'Comprehensive profiles with history and notes.',
    wacrm_feature2_title: 'Sales Tracking', wacrm_feature2_desc: 'Track opportunities from first contact to close.',
    wacrm_feature3_title: 'Team Management', wacrm_feature3_desc: 'Assign tasks and track performance.',
    wacrm_feature4_title: 'Quick Replies', wacrm_feature4_desc: 'Templates for frequent responses.',
    wacrm_feature5_title: 'Calendar & Appointments', wacrm_feature5_desc: 'Organize appointments with integrated reminders.',
    wacrm_feature6_title: 'Analytics Reports', wacrm_feature6_desc: 'Advanced analytics for performance tracking.',
    wacrm_feature7_title: 'WA Sender Integration', wacrm_feature7_desc: 'Direct link for marketing campaigns to segments.',
    wacrm_feature8_title: 'Cross-Device Access', wacrm_feature8_desc: 'Access from any device with auto-sync.',
    wacrm_btn_start: 'Start Using WA CRM', wacrm_coming_soon: 'Coming Soon - Register Interest'
  },

  // ═══════════════════════════════════════════════════════════════
  // FRENCH (fr) - FIXED: wacacrm_feature5_desc → wacrm_feature5_desc
  // ═══════════════════════════════════════════════════════════════
  fr: {
    nav_home: 'Accueil', nav_how: 'Tutoriel', nav_guide: 'Guide Anti-Blocage',
    nav_features: 'Fonctionnalités', nav_pricing: 'Tarifs', nav_contact: 'Contact',
    nav_policies: 'Politiques', nav_marketing: '📊 Données Marketing',
    nav_wacrm: '🟢 WA CRM', nav_wadefender: '🛡️ WaDefender',
    nav_exclusive_software: '⭐ Logiciels Marketing Exclusifs',
    bn_home: 'Accueil', bn_videos: 'Vidéos', bn_pricing: 'Tarifs',
    bn_download: 'Télécharger', bn_contact: 'Contact',
    footer_quick: 'Liens Rapides', footer_legal: 'Légal', footer_support: 'Support',
    footer_rights: 'Tous droits réservés',
    footer_desc: 'Logiciel professionnel de marketing WhatsApp avec outils avancés pour l\'envoi en masse et l\'automatisation.',
    footer_privacy: 'Politique de Confidentialité', footer_purchase: 'Politique d\'Achat',
    footer_refund: 'Politique de Remboursement', footer_terms: 'Conditions Générales', footer_whatsapp: 'WhatsApp',
    title_home: 'WA Sender - Logiciel Marketing WhatsApp Professionnel',
    title_features: 'Fonctionnalités - WA Sender', title_pricing: 'Tarifs et Forfaits - WA Sender',
    title_contact: 'Contactez-nous - WA Sender', title_policies: 'Politiques - WA Sender',
    title_marketing: 'Données Marketing - WA Sender', title_wacrm: 'WA CRM - Gestion Relation Client',
    title_wadefender: 'WaDefender - Protection Compte WhatsApp', title_privacy: 'Politique de Confidentialité',
    title_purchase: 'Politique d\'Achat', title_refund: 'Politique de Remboursement', title_terms: 'Conditions Générales',
    desc_home: 'Logiciel WA Sender professionnel pour le marketing WhatsApp. Envoi en masse, extraction de numéros, gestion de campagnes.',
    desc_features: 'Découvrez les fonctionnalités puissantes : envoi en masse, extraction, réponse automatique.',
    desc_pricing: 'Choisissez le forfait adapté à vos besoins à prix compétitifs.',
    desc_contact: 'Contactez l\'équipe support WA Sender pour assistance.',
    desc_marketing: 'Outil d\'extraction de données depuis Google Maps et sites web.',
    desc_wacrm: 'Système CRM intégré WhatsApp pour gérer vos clients efficacement.',
    desc_wadefender: 'Protégez votre compte WhatsApp des blocages avec WaDefender.',
    hero_title: 'Le Logiciel WhatsApp Marketing le Plus Puissant',
    hero_subtitle: 'Envoyez des messages en masse, extrayez des numéros et gérez vos campagnes avec des outils professionnels',
    hero_btn_download: 'Télécharger Maintenant', hero_btn_features: 'Explorer Fonctionnalités',
    hero_trusted_by: 'Plus de 50 000 utilisateurs nous font confiance',
    stats_users: 'Utilisateurs Actifs', stats_messages: 'Messages par Jour',
    stats_countries: 'Pays', stats_uptime: 'Disponibilité',
    how_title: 'Comment Ça Marche ?', how_subtitle: 'Trois étapes simples pour commencer',
    how_step1_title: 'Télécharger', how_step1_desc: 'Téléchargez et installez WA Sender en quelques secondes',
    how_step2_title: 'Importer Numéros', how_step2_desc: 'Importez votre liste ou extrayez des groupes WhatsApp',
    how_step3_title: 'Envoyer Messages', how_step3_desc: 'Créez votre campagne et envoyez en un clic',
    features_preview_title: 'Fonctionnalités Puissantes', features_preview_subtitle: 'Tout pour un marketing WhatsApp réussi',
    btn_view_all_features: 'Voir Toutes les Fonctionnalités', btn_get_started: 'Commencer',
    features_title: 'Fonctionnalités WA Sender', features_subtitle: 'Outils professionnels complets',
    f1_title: 'Envoi en Masse', f1_desc: 'Envoyez textes, images, vidéos à des milliers de numéros en un clic.',
    f2_title: 'Extraction Membres', f2_desc: 'Extrayez automatiquement les membres des groupes WhatsApp.',
    f3_title: 'Extraction Google Maps', f3_desc: 'Obtenez coordonnées de toute entreprise via Google Maps.',
    f4_title: 'Réponse Auto', f4_desc: 'Créez des réponses automatiques intelligentes basées sur mots-clés.',
    f5_title: 'Import/Export', f5_desc: 'Importez CSV/Excel, exportez rapports en multiples formats.',
    f6_title: 'Planification', f6_desc: 'Programmez l\'envoi même hors ligne.',
    f7_title: 'Test Fictif', f7_desc: 'Testez campagnes sur numéros fictifs avant envoi réel.',
    f8_title: 'Filtrage', f8_desc: 'Vérifiez existence des numéros et supprimez inactifs.',
    f9_title: 'Multi-Comptes', f9_desc: 'Utilisez plusieurs comptes simultanément.',
    f10_title: 'Personnalisation', f10_desc: 'Ajoutez variables comme {name} pour personnaliser.',
    f11_title: 'Multimédia', f11_desc: 'Envoyez images, vidéos, documents, localisations.',
    f12_title: 'Rapports', f12_desc: 'Suivez performance avec rapports détaillés.',
    f13_title: 'Anti-Blocage', f13_desc: 'Technologie avancée avec délais intelligents.',
    f14_title: 'Interface Simple', f14_desc: 'Design moderne accessible à tous.',
    f15_title: 'Mises à Jour', f15_desc: 'Mises à jour régulières pour dernières versions WhatsApp.',
    price_label: 'Tarifs', price_title: 'Choisissez Votre Forfait', price_sub: 'Forfaits flexibles avec garantie remboursement',
    plan1_name: 'Forfait Essentiel', plan1_period: '1 An / 1 Appareil', plan1b_name: 'Forfait Économie', plan1b_period: '4 Ans / 1 Appareil',
    plan2_name: 'Forfait à Vie', plan2_period: 'À Vie / 1 Appareil',
    price_22: 'Forfait Ultime', price_04: '5 Ans / 1 Appareil',
    pf1: 'Envoi illimité', pf2: 'Extraction groupes', pf3: 'Extraction Google Maps',
    pf4: 'Réponse auto', pf5: 'Planification', pf6: 'Filtrage', pf7: 'Multi-comptes',
    pf8: 'Rapports', pf9: 'Anti-blocage', pf10: 'Support 24/7',
    pf11: 'Mises à jour gratuites', pf12: '2 appareils', pf13: '3 appareils',
    devices_1: 'Appareil Unique', devices_2: 'Deux Appareils', devices_3: '3 Appareils',
    popular_badge: 'Plus Populaire', btn_buy_now: 'S\'abonner',
    price_group1: 'Forfaits 1 Appareil', price_group2: 'Forfaits Multi-Appareils',
    payment_title: 'Méthodes de Paiement', payment_subtitle: 'Choisissez votre méthode',
    faq_title: 'Questions Fréquentes sur les Prix et le Paiement',
    faq_q1: 'Puis-je mettre à niveau mon forfait plus tard ?', faq_a1: 'Oui ! Vous pouvez mettre à niveau votre forfait à tout moment. La différence entre votre forfait actuel et le nouveau sera calculée, avec une remise pour la période restante.',
    faq_q2: 'Quelles méthodes de paiement sont disponibles ?', faq_a2: "Nous acceptons plusieurs méthodes de paiement : Vodafone Cash (Égypte), l'application Barq (Arabie Saoudite), InstaPay, virement bancaire D360 (Arabie Saoudite), ainsi que Visa et PayPal pour les paiements internationaux.",
    faq_q3: "Combien de temps prend l'activation de la licence après le paiement ?", faq_a3: "L'activation se fait généralement en quelques minutes après réception du reçu de paiement via WhatsApp. Les virements bancaires peuvent prendre 1 à 24 heures ouvrables.",
    faq_q4: 'La licence peut-elle être transférée vers un autre appareil ?', faq_a4: "La licence est liée à un seul appareil. Si vous changez d'appareil, contactez-nous via WhatsApp et nous vous aiderons à transférer la licence vers le nouvel appareil gratuitement.",
    pm_vodafone_title: 'Vodafone Cash (Égypte)', pm_vodafone_sub: 'Virement Instantané vers le Portefeuille', pm_vodafone_note: 'Envoyez le reçu du virement via WhatsApp pour une activation instantanée.',
    pm_barq_title: 'Application Barq (Arabie Saoudite)', pm_barq_sub: "Virement International vers l'Arabie Saoudite", pm_barq_steps: "<strong>Étapes du Virement :</strong> Virement International → Égypte → Entrez le numéro ci-dessous", pm_barq_note: "Envoyez le reçu après le virement pour l'activation.",
    pm_instapay_title: 'InstaPay (Égypte)', pm_instapay_sub: "Virement Direct depuis l'Égypte", pm_instapay_link: 'Ouvrir le Lien InstaPay →', pm_instapay_note: 'Envoyez le reçu de paiement après avoir terminé la transaction.',
    pm_bank_title: 'Virement Bancaire - D360 (Arabie Saoudite)', pm_bank_sub: 'Via IBAN Saoudien', pm_bank_name: 'Banque :', pm_bank_holder: 'Nom du Bénéficiaire :', pm_bank_iban: 'Numéro IBAN :', pm_bank_swift: 'Code SWIFT :', pm_bank_note: "Le virement prend 1 à 24 heures ouvrables. Envoyez le reçu pour l'activation.",
    pm_paypal_title: 'Visa / PayPal', pm_paypal_sub: 'Paiement Sécurisé par Carte', pm_paypal_note2: "Cliquez sur le bouton « Acheter Maintenant » ou scannez le QR code sous le forfait souhaité ci-dessus, vous serez redirigé directement vers la page de paiement avec le bon montant. Après paiement, envoyez l'e-mail utilisé via WhatsApp.",
    price_01: '<span>Banque :</span> D360 Bank', price_02: '<span>Nom du Bénéficiaire :</span> Ayman Nasr Nasr',
    price_05: '/ An', price_06: '/ An', price_07: '/ 2 Ans',
    price_08: '📊 Données Marketing', price_09: '📊 Données Marketing',
    price_11: '📱 Scanner pour Payer', price_12: '📱 Scanner pour Payer', price_13: '📱 Scanner pour Payer', price_14: '📱 Scanner pour Payer', price_15: '📱 Scanner pour Payer', price_16: '📱 Scanner pour Payer', price_17: '📱 Scanner pour Payer',
    price_18: 'Étapes du Virement :',
    price_19: 'Tarifs et Abonnements WA Sender - Forfaits Flexibles | WA Sender',
    price_20: '<strong>📱 Scanner pour Payer</strong>Payez 5$ directement via PayPal', price_21: '<strong>📱 Scanner pour Payer</strong>Payez 15$ directement via PayPal', price_23: '<strong>📱 Scanner pour Payer</strong>Payez 20$ directement via PayPal', price_24: '<strong>📱 Scanner pour Payer</strong>Payez 50$ directement via PayPal', price_25: '<strong>📱 Scanner pour Payer</strong>Payez 8$ directement via PayPal', price_26: '<strong>📱 Scanner pour Payer</strong>Payez 12$ directement via PayPal', price_27: '<strong>📱 Scanner pour Payer</strong>Payez 25$ directement via PayPal',
    devices_year: '2 Appareils / An', devices_2year: '2 Appareils / 2 Ans', devices_3year: '3 Appareils / An',
    privacy_title: 'Politique de Confidentialité', purchase_title: "Politique d'Achat", refund_title: 'Politique de Remboursement', terms_title: 'Conditions Générales',
    pwa_install: "Installer l'Application", pwa_subtitle: "Profitez d'une meilleure expérience sans navigateur",
    btn_download: 'Téléchargement Gratuit', copy_btn: 'Copier',
    ct_01: 'Téléchargement Gratuit', ct_02: 'Français', ct_03: '📊 Données Marketing', ct_04: '📊 Données Marketing',
    ct_05: '🇸🇦 العربية', ct_06: 'Contactez-nous - WA Sender | Support Technique', pp_01: '1. Introduction', pp_02: '2. Informations que Nous Collectons',
    pp_03: '3. Comment Nous Utilisons Vos Informations', pp_04: '4. Partage des Informations', pp_05: '5. Sécurité des Données', pp_06: '6. Vos Droits',
    pp_07: '7. Conservation des Données', pp_08: '8. Liens vers des Sites Externes', pp_09: '9. Modifications de cette Politique', pp_10: '10. Nous Contacter',
    pp_11: '2.1 Informations que Vous Fournissez Volontairement :', pp_12: '2.2 Informations Collectées Automatiquement :', pp_13: 'Dernière mise à jour : août 2026', pp_14: 'Chez WA Sender, nous nous engageons à protéger votre vie privée. Cette politique explique comment nous collectons, utilisons et protégeons vos informations personnelles lorsque vous utilisez notre site web et le logiciel WA Sender.',
    pp_15: 'En utilisant notre site web ou notre logiciel, vous acceptez les pratiques décrites dans cette Politique de Confidentialité.', pp_16: 'Nous utilisons les informations que nous collectons aux fins suivantes :', pp_17: 'Nous ne vendons, n\'échangeons ni ne louons vos informations personnelles à des tiers. Nous pouvons partager vos informations uniquement dans les cas suivants :', pp_18: 'Nous prenons des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos informations personnelles contre tout accès non autorisé, modification, divulgation ou destruction. Cependant, aucune transmission de données sur Internet ne peut être garantie sécurisée à 100 %.',
    pp_19: 'Vous avez le droit de :', pp_20: 'Nous conservons vos informations personnelles uniquement pendant la durée nécessaire pour atteindre les objectifs décrits dans cette politique, sauf si une période de conservation plus longue est requise par la loi.', pp_21: 'Notre site web peut contenir des liens vers des sites externes. Nous ne sommes pas responsables du contenu de ces sites externes et déclinons toute responsabilité quant à leurs pratiques de confidentialité.', pp_22: 'Nous pouvons mettre à jour cette Politique de Confidentialité de temps à autre. Nous annoncerons tout changement important en publiant la nouvelle politique sur cette page avec une date de « Dernière mise à jour ».',
    pp_23: 'Si vous avez des questions concernant cette Politique de Confidentialité, veuillez nous contacter via :', pp_24: 'Français', pp_25: '<strong data-i18n="pp_46">Informations de Contact :</strong> Nom complet, adresse e-mail, numéro de téléphone lorsque vous nous contactez ou achetez une licence.', pp_26: '<strong data-i18n="pp_47">Informations de Paiement :</strong> Détails de paiement nécessaires au traitement de vos achats (traités via des passerelles de paiement sécurisées et non stockés directement par nous).',
    pp_27: '<strong data-i18n="pp_48">Problèmes Techniques :</strong> Toute information que vous fournissez lors du signalement d\'un problème technique ou d\'une demande d\'assistance.', pp_28: '<strong data-i18n="pp_49">Données de Navigation :</strong> Type de navigateur, système d\'exploitation, adresses IP, pages visitées, ainsi que la date et l\'heure de votre visite.', pp_29: '<strong data-i18n="pp_50">Cookies :</strong> Nous utilisons des cookies pour améliorer votre expérience sur le site. Vous pouvez les désactiver dans les paramètres de votre navigateur.', pp_30: '<strong data-i18n="pp_51">Données Analytiques :</strong> Nous utilisons des outils d\'analyse anonymes pour comprendre comment les visiteurs utilisent notre site.',
    pp_31: 'Fournir, exploiter et protéger nos services (y compris le dépannage).', pp_32: 'Traiter les transactions et envoyer des informations relatives à l\'achat.', pp_33: 'Répondre à vos demandes et fournir un support technique.', pp_34: 'Améliorer nos services et développer de nouvelles fonctionnalités.',
    pp_35: 'Envoyer des notifications importantes concernant le service (le cas échéant).', pp_36: 'Se conformer aux obligations légales et réglementaires.', pp_37: '<strong data-i18n="pp_52">Prestataires de Services :</strong> Entreprises qui nous aident à gérer notre activité (passerelles de paiement, hébergement de serveurs) et qui sont tenues de protéger vos données.', pp_38: '<strong data-i18n="pp_53">Exigences Légales :</strong> Lorsque la loi l\'exige ou pour protéger nos droits ou la sécurité de nos utilisateurs.',
    pp_39: '<strong data-i18n="pp_54">Votre Consentement :</strong> Lorsque vous nous donnez un consentement explicite pour partager vos informations.', pp_40: 'Accéder aux données personnelles que nous détenons à votre sujet.', pp_41: 'Demander la correction de toute information inexacte.', pp_42: 'Demander la suppression de vos données personnelles (avec certaines exceptions).',
    pp_43: 'Vous opposer au traitement de vos données à des fins de marketing direct.', pp_44: 'Retirer votre consentement à tout moment.', pp_45: '🇸🇦 العربية', pp_46: 'Informations de Contact :',
    pp_47: 'Informations de Paiement :', pp_48: 'Problèmes Techniques :', pp_49: 'Données de Navigation :', pp_50: 'Cookies :',
    pp_51: 'Données Analytiques :', pp_52: 'Prestataires de Services :', pp_53: 'Exigences Légales :', pp_54: 'Votre Consentement :',
    pp_55: 'WhatsApp :', pp_56: 'E-mail :', pp_57: 'Politique de Confidentialité - WA Sender | Comment Nous Protégeons Vos Données', pv_01: '1. Introduction',
    pv_02: '2. Types de Licences et Tarifs', pv_03: '3. Méthodes de Paiement Acceptées', pv_04: '4. Processus d\'Activation', pv_05: '5. Conditions de Licence',
    pv_06: '6. Garantie de Prix', pv_07: '7. Factures et Reçus', pv_08: '8. Problèmes Techniques Après Achat', pv_09: '9. Nous Contacter',
    pv_10: '2.1 Forfaits 1 Appareil :', pv_11: '2.2 Forfaits Multi-Appareils :', pv_12: 'Dernière mise à jour : août 2026', pv_13: 'Cette politique explique les termes et conditions d\'achat et d\'utilisation des licences du logiciel WA Sender. En achetant une licence WA Sender, vous acceptez de vous conformer à ces conditions.',
    pv_14: 'Nous proposons plusieurs forfaits d\'abonnement pour répondre à différents besoins :', pv_15: 'Nous acceptons plusieurs méthodes de paiement pour faciliter le processus d\'achat :', pv_16: 'Nous nous réservons le droit de modifier nos prix à tout moment. Cependant, si vous avez acheté un abonnement, le prix que vous avez payé restera valable pendant toute la durée de votre abonnement.', pv_17: 'Une fois le paiement effectué, vous pouvez demander un reçu officiel via WhatsApp ou par e-mail. Le reçu contient les détails de l\'achat, la date de paiement et le montant payé.',
    pv_18: 'Si vous rencontrez un problème technique lors de l\'installation ou de l\'activation du logiciel :', pv_19: 'Pour les demandes relatives à l\'achat ou au paiement :', pv_20: 'Français', pv_21: '<strong data-i18n="pv_48">Abonnement Annuel :</strong> 5 $ US - valable un an sur un appareil.',
    pv_22: '<strong data-i18n="pv_49">Abonnement 2 Ans :</strong> 15 $ US - valable deux ans sur un appareil.', pv_23: '<strong data-i18n="pv_50">Abonnement 3 Ans :</strong> 20 $ US - valable 3 ans sur un appareil.', pv_24: '<strong data-i18n="pv_51">Abonnement à Vie :</strong> 50 $ US - valable à vie sur un appareil avec mises à jour permanentes.', pv_25: '<strong data-i18n="pv_52">2 Appareils / An :</strong> 8 $ US - deux licences pour deux appareils différents.',
    pv_26: '<strong data-i18n="pv_53">3 Appareils / An :</strong> 12 $ US - trois licences pour 3 appareils différents.', pv_27: '<strong data-i18n="pv_54">2 Appareils / 2 Ans :</strong> 25 $ US - deux licences pour deux appareils pendant deux ans.', pv_28: '<strong data-i18n="pv_55">Vodafone Cash (Égypte) :</strong> Virement instantané vers le portefeuille.', pv_29: '<strong data-i18n="pv_56">Application Barq (Arabie Saoudite) :</strong> Virement international vers l\'Arabie Saoudite.',
    pv_30: '<strong data-i18n="pv_57">InstaPay (Égypte) :</strong> Virement direct depuis l\'Égypte.', pv_31: '<strong data-i18n="pv_58">Virement Bancaire (IBAN Saoudien) :</strong> Via la banque D360 FINTECH.', pv_32: '<strong data-i18n="pv_59">PayPal / Visa :</strong> Paiement international sécurisé par carte.', pv_33: 'Téléchargez le logiciel gratuitement depuis notre site.',
    pv_34: 'Choisissez le forfait qui vous convient depuis la page des tarifs.', pv_35: 'Complétez le paiement via l\'une des méthodes disponibles.', pv_36: 'Envoyez le reçu de paiement via WhatsApp via notre lien de contact.', pv_37: 'Vous recevrez le code d\'activation en quelques minutes (jusqu\'à 24 heures pour les virements bancaires).',
    pv_38: 'Entrez le code d\'activation dans le logiciel pour activer toutes les fonctionnalités.', pv_39: 'Chaque licence est valable pour un seul appareil (sauf licence multi-appareils).', pv_40: 'Le code d\'activation ne doit pas être partagé avec d\'autres personnes.', pv_41: 'La licence n\'est ni transférable ni revendable.',
    pv_42: 'En cas de changement d\'appareil, contactez-nous pour transférer la licence gratuitement.', pv_43: 'Les mises à jour gratuites sont disponibles pendant la période d\'abonnement valide.', pv_44: 'Contactez-nous immédiatement via WhatsApp ou e-mail.', pv_45: 'Décrivez le problème en détail avec une capture d\'écran si possible.',
    pv_46: 'Notre équipe de support résoudra votre problème dans les plus brefs délais (24 heures maximum).', pv_47: '🇸🇦 العربية', pv_48: 'Abonnement Annuel :', pv_49: 'Abonnement 2 Ans :',
    pv_50: 'Abonnement 3 Ans :', pv_51: 'Abonnement à Vie :', pv_52: '2 Appareils / An :', pv_53: '3 Appareils / An :',
    pv_54: '2 Appareils / 2 Ans :', pv_55: 'Vodafone Cash (Égypte) :', pv_56: 'Application Barq (Arabie Saoudite) :', pv_57: 'InstaPay (Égypte) :',
    pv_58: 'Virement Bancaire (IBAN Saoudien) :', pv_59: 'PayPal / Visa :', pv_60: 'WhatsApp :', pv_61: 'E-mail :',
    pv_62: 'Politique d\'Achat - WA Sender | Méthodes de Paiement et Licences', rf_01: '1. Politique Générale de Remboursement', rf_02: '2. Cas d\'Éligibilité au Remboursement', rf_03: '3. Cas de Non-Éligibilité au Remboursement',
    rf_04: '4. Comment Demander un Remboursement', rf_05: '5. Traitement de la Demande de Remboursement', rf_06: '6. Alternatives au Remboursement', rf_07: '7. Remarque Importante Concernant les Bannissements WhatsApp',
    rf_08: '8. FAQ sur les Remboursements', rf_09: '9. Nous Contacter', rf_10: '2.1 Remboursement Complet (Garantie 7 Jours) :', rf_11: '2.2 Remboursement Partiel :',
    rf_12: 'Q : Puis-je essayer le logiciel avant l\'achat ?', rf_13: 'Q : Que se passe-t-il si le logiciel ne fonctionne pas sur mon appareil ?', rf_14: 'Q : Puis-je changer d\'avis après avoir acheté un abonnement à vie ?', rf_15: 'Dernière mise à jour : août 2026',
    rf_16: 'Chez WA Sender, nous nous engageons à fournir un produit de haute qualité et un excellent service client. En raison de la nature numérique de notre produit (logiciel sous licence), notre politique de remboursement est limitée, mais nous nous efforçons de répondre aux attentes de nos clients.', rf_17: '<strong data-i18n="rf_53">7 jours</strong> à compter de la date d\'achat dans les cas suivants :', rf_18: 'Dans certains cas, nous pouvons proposer un remboursement partiel de 50 à 70 % :', rf_19: 'Un remboursement ne peut pas être demandé dans les cas suivants :',
    rf_20: 'Pour demander un remboursement, veuillez suivre ces étapes :', rf_21: 'Au lieu d\'un remboursement, nous pouvons proposer les alternatives suivantes :', rf_22: '<strong data-i18n="rf_62">⚠️ Avis Important :</strong> Le bannissement d\'un numéro WhatsApp ne constitue pas un motif de remboursement. Nous fournissons des conseils détaillés pour se protéger contre les bannissements sur la page « Tutoriel » et dans le logiciel lui-même. L\'utilisateur est responsable du respect de ces conseils et de l\'application des meilleures pratiques. Nous recommandons vivement de lire le guide anti-bannissement avant d\'utiliser le logiciel pour envoyer des messages.', rf_23: 'R : Oui ! Vous pouvez télécharger le logiciel gratuitement et essayer toutes les fonctionnalités. Le paiement n\'est requis que pour activer la licence.',
    rf_24: 'R : WA Sender nécessite Windows 10 ou une version plus récente. Si votre appareil est compatible mais que le logiciel ne fonctionne toujours pas, contactez-nous et nous vous aiderons. Si nous ne pouvons pas résoudre le problème, vous pouvez demander un remboursement dans les 7 jours.', rf_25: 'R : Oui, vous pouvez demander un remboursement dans les 7 jours suivant l\'achat si vous n\'avez pas utilisé la licence. Passé ce délai, nous ne pouvons pas accepter les demandes de remboursement pour les abonnements à vie.', rf_26: 'Pour toute question sur la politique de remboursement ou pour soumettre une demande :', rf_27: 'Français',
    rf_28: 'Si le logiciel ne fonctionne pas sur votre appareil malgré l\'aide du support technique.', rf_29: 'S\'il existe un défaut technique majeur empêchant l\'utilisation de toutes les fonctionnalités principales.', rf_30: 'Si votre licence n\'a pas été activée dans les 48 heures suivant le paiement (après nous avoir contactés).', rf_31: 'Si vos besoins ont changé après l\'achat de l\'abonnement.',
    rf_32: 'Si vous constatez que le logiciel ne correspond pas à vos besoins spécifiques.', rf_33: 'En cas de problèmes techniques partiellement résolus.', rf_34: 'Après 14 jours à compter de la date d\'achat.', rf_35: 'Si la licence a déjà été utilisée pour envoyer des campagnes (même d\'essai).',
    rf_36: 'En cas de violation des conditions d\'utilisation ou des politiques WhatsApp/Meta.', rf_37: 'Si le code d\'activation a été partagé avec d\'autres utilisateurs.', rf_38: 'Si la demande de remboursement est due à un bannissement du numéro WhatsApp (voir les conseils anti-bannissement).', rf_39: 'Contactez-nous via WhatsApp au : <a href="https://wa.me/wasendernew" target="_blank">Nous Contacter</a>',
    rf_40: 'Ou envoyez un e-mail à : <a href="mailto:support@wasendernew.com">support@wasendernew.com</a>', rf_41: 'Indiquez en détail la raison de votre demande de remboursement.', rf_42: 'Joignez le reçu de paiement original si possible.', rf_43: 'Décrivez le problème rencontré (le cas échéant) avec des captures d\'écran.',
    rf_44: '<strong data-i18n="rf_54">Délai d\'Examen :</strong> Nous examinerons votre demande dans les 48 heures ouvrables.', rf_45: '<strong data-i18n="rf_55">Délai de Traitement :</strong> En cas d\'approbation, le remboursement sera traité dans un délai de 5 à 10 jours ouvrables.', rf_46: '<strong data-i18n="rf_56">Méthode de Remboursement :</strong> Le montant sera remboursé selon la même méthode de paiement d\'origine.', rf_47: '<strong data-i18n="rf_57">Confirmation :</strong> Vous recevrez une confirmation par e-mail une fois le remboursement traité.',
    rf_48: '<strong data-i18n="rf_58">Prolongation de l\'Abonnement :</strong> Ajout de temps gratuit à votre abonnement.', rf_49: '<strong data-i18n="rf_59">Mise à Niveau Gratuite :</strong> Passage à un forfait supérieur sans payer la différence de prix.', rf_50: '<strong data-i18n="rf_60">Transfert de Licence :</strong> Transfert de la licence vers un autre appareil si l\'appareil actuel est incompatible.', rf_51: '<strong data-i18n="rf_61">Session de Formation Supplémentaire :</strong> Une session dédiée via WhatsApp pour expliquer comment utiliser correctement le logiciel.',
    rf_52: '🇸🇦 العربية', rf_53: '7 jours', rf_54: 'Délai d\'Examen :', rf_55: 'Délai de Traitement :',
    rf_56: 'Méthode de Remboursement :', rf_57: 'Confirmation :', rf_58: 'Prolongation de l\'Abonnement :', rf_59: 'Mise à Niveau Gratuite :',
    rf_60: 'Transfert de Licence :', rf_61: 'Session de Formation Supplémentaire :', rf_62: '⚠️ Avis Important :', rf_63: 'WhatsApp :',
    rf_64: 'E-mail :', rf_65: 'Politique de Remboursement - WA Sender | Conditions de Remboursement', tm_01: '1. Acceptation des Conditions', tm_02: '2. Description du Service',
    tm_03: '3. Conditions d\'Éligibilité', tm_04: '4. Utilisation Autorisée', tm_05: '5. Utilisation Interdite', tm_06: '6. Responsabilité envers WhatsApp/Meta',
    tm_07: '7. Propriété Intellectuelle', tm_08: '8. Licence et Utilisation', tm_09: '9. Avis de Non-Responsabilité', tm_10: '10. Limitation de Responsabilité',
    tm_11: '11. Indemnisation', tm_12: '12. Modifications des Conditions', tm_13: '13. Loi Applicable', tm_14: '14. Nous Contacter',
    tm_15: 'Dernière mise à jour : août 2026', tm_16: 'En utilisant le site wasendernew.com ou le logiciel WA Sender, vous acceptez de vous conformer à ces Conditions Générales. Si vous n\'acceptez pas l\'une de ces conditions, veuillez ne pas utiliser nos services.', tm_17: 'WA Sender est un logiciel de marketing WhatsApp qui fournit des outils pour l\'envoi de messages en masse, l\'automatisation et la gestion de campagnes marketing. Le logiciel est conçu pour un usage personnel et commercial dans le respect des lois et des politiques Meta/WhatsApp.', tm_18: 'Pour utiliser WA Sender, vous devez :',
    tm_19: 'L\'utilisateur accepte d\'utiliser WA Sender uniquement aux fins suivantes :', tm_20: '<strong data-i18n="tm_64">Il est formellement interdit</strong> d\'utiliser le logiciel aux fins suivantes :', tm_21: '<strong data-i18n="tm_65">⚠️ Avis Important :</strong> WA Sender n\'est pas affilié à Meta, WhatsApp, Facebook ou l\'une de leurs filiales. L\'utilisation de ce logiciel peut enfreindre les conditions d\'utilisation de WhatsApp. Vous seul assumez l\'entière responsabilité de toute conséquence résultant de votre utilisation du logiciel, y compris, sans s\'y limiter, le bannissement de votre compte WhatsApp ou des poursuites judiciaires à votre encontre.', tm_22: 'Le logiciel est fourni « en l\'état » sans garantie expresse ou implicite. Nous ne garantissons pas :',
    tm_23: 'Dans la mesure maximale permise, notre responsabilité totale n\'excédera pas le montant que vous avez payé pour la licence. Nous ne serons pas responsables de :', tm_24: 'Vous acceptez d\'indemniser et de dégager de toute responsabilité WA Sender, son équipe, ses employés et ses partenaires de toute réclamation, perte ou dommage (y compris les frais juridiques) résultant de :', tm_25: 'Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications prennent effet dès leur publication sur le site. Votre utilisation continue du logiciel après les modifications signifie que vous les acceptez.', tm_26: 'Ces conditions sont régies et interprétées conformément aux lois applicables. Tout litige découlant de ces conditions relèvera de la compétence exclusive des tribunaux compétents.',
    tm_27: 'Pour toute question concernant ces conditions :', tm_28: 'Français', tm_29: 'Êtes majeur légal (18 ans ou plus) dans votre pays.', tm_30: 'Avez la capacité juridique de conclure un accord contraignant.',
    tm_31: 'Fournissez des informations exactes et correctes lors de l\'inscription ou de l\'achat.', tm_32: 'Maintenez la confidentialité des identifiants de votre compte.', tm_33: 'Envoyer des messages marketing légitimes à des numéros ayant donné leur consentement.', tm_34: 'Gérer des campagnes marketing WhatsApp de manière professionnelle.',
    tm_35: 'Automatiser les réponses aux demandes légitimes des clients.', tm_36: 'Extraire des données publiquement disponibles à des fins marketing légitimes.', tm_37: 'Envoyer des messages indésirables ou du spam.', tm_38: 'Envoyer du contenu nuisible, frauduleux ou illégal.',
    tm_39: 'Violer la vie privée ou les droits d\'autrui.', tm_40: 'Tenter de pirater ou d\'endommager les systèmes WhatsApp ou Meta.', tm_41: 'Partager, vendre ou distribuer le code d\'activation.', tm_42: 'Faire de l\'ingénierie inverse, modifier ou copier le logiciel.',
    tm_43: 'L\'utiliser à des fins contraires aux conditions de service de WhatsApp/Meta.', tm_44: 'Tous les droits sur WA Sender appartiennent à l\'équipe de développement.', tm_45: 'Le logiciel est protégé par les lois internationales sur le droit d\'auteur.', tm_46: 'Vous ne pouvez pas copier, modifier ou distribuer le logiciel sans autorisation écrite explicite.',
    tm_47: 'Le logo, les icônes et le design sont la propriété de WA Sender.', tm_48: 'Lors de l\'achat d\'une licence, vous obtenez un droit personnel et non transférable d\'utiliser le logiciel.', tm_49: 'Chaque licence est valable pour un seul appareil (sauf licence multi-appareils).', tm_50: 'La licence ne peut être louée, prêtée ou vendue à des tiers.',
    tm_51: 'Nous nous réservons le droit de révoquer la licence en cas de violation de ces conditions.', tm_52: 'Que le logiciel fonctionnera sans interruption ni erreur.', tm_53: 'Que les résultats de l\'utilisation du logiciel répondront à vos attentes.', tm_54: 'Que l\'utilisation du logiciel n\'entraînera pas le bannissement de votre numéro WhatsApp.',
    tm_55: 'Que toutes les fonctionnalités seront disponibles en continu.', tm_56: 'Tout dommage direct, indirect, accessoire ou consécutif résultant de l\'utilisation ou de l\'incapacité à utiliser le logiciel.', tm_57: 'La perte de données, de profits ou d\'opportunités commerciales.', tm_58: 'Le bannissement de votre compte sur WhatsApp ou toute autre plateforme.',
    tm_59: 'Toute action en justice intentée contre vous par un tiers.', tm_60: 'Votre utilisation du logiciel.', tm_61: 'Votre violation de ces conditions.', tm_62: 'Votre violation des droits de tiers.',
    tm_63: '🇸🇦 العربية', tm_64: 'Il est formellement interdit', tm_65: '⚠️ Avis Important :', tm_66: 'WhatsApp :',
    tm_67: 'E-mail :', tm_68: 'Conditions Générales - WA Sender | Conditions d\'Utilisation',
    contact_label: 'Contact', contact_sub: 'Nous sommes là pour vous aider. Contactez-nous via les canaux ci-dessous et nous répondrons dès que possible', ct1_title: 'WhatsApp', ct1_desc: 'Pour un support instantané, l\'activation et les demandes rapides',
    ct2_title: 'E-mail', ct2_desc: 'Pour les demandes détaillées et le support technique avancé', ct3_title: 'Heures de Travail', ct3_desc: 'Disponible pendant les heures de travail officielles',
    ct3_hours: '9h – 22h (heure du Caire)', cf_title: 'Envoyer un Message', cf_desc: 'Remplissez le formulaire ci-dessous et nous vous répondrons dès que possible', cf_subject_ph: 'Choisissez le sujet du message',
    cf_opt1: 'Demande Générale', cf_opt2: 'Support Technique', cf_opt3: 'Problème de Paiement', cf_opt4: 'Demande de Licence',
    cf_msg: 'Votre Message', cf_send: 'Envoyer le Message', faq_sub: 'Vous trouverez peut-être une réponse dans notre FAQ', cf_name_ph: 'Entrez votre nom complet',
    cf_msg_ph: 'Écrivez votre message ici en détail...',
    ft_06: 'Fonctionnalités WA Sender v5.0.7 - Plus de 15 Outils Professionnels | WA Sender', ft_01: 'Téléchargement Gratuit', ft_02: 'Français', ft_03: '📊 Données Marketing',
    ft_04: '📊 Données Marketing', ft_05: '🇸🇦 العربية', feat_label: 'Fonctionnalités', feat_title: 'Fonctionnalités Principales de WA Sender v5.0.7',
    feat_sub: 'Plus de 15 outils professionnels dans un seul programme pour répondre à tous vos besoins de marketing WhatsApp', feat_msg_tools: '📨 Outils de Messagerie et d\'Envoi', feat_extract_tools: '🔍 Outils d\'Extraction et de Données', feat_mgmt_tools: '🛡️ Gestion et Protection',
    cta_ready: 'Prêt à essayer toutes ces fonctionnalités ?', cta_desc: 'Téléchargez le logiciel gratuitement et commencez à utiliser tous les outils immédiatement', btn_subscribe: '💳 S\'abonner Maintenant', tut_15: 'Tutoriel WA Sender - Vidéos Étape par Étape | WA Sender',
    tut_01: 'Téléchargement Gratuit', tut_03: '📊 Données Marketing', tut_02: 'Français', tut_04: '🇸🇦 العربية',
    tut_05: 'Période de Grâce :', tut_06: 'Interaction Naturelle :', tut_07: 'Intervalles de Temps :', tut_08: 'Limite Maximale :',
    tut_09: 'Périodes de Repos :', tut_10: 'Pré-enregistrement :', tut_11: 'Synchronisation :', tut_12: 'Messages Personnels :',
    tut_13: 'Option de Désabonnement :', tut_14: 'Contenu Utile :', cta_desc_tutorial: 'Téléchargez le logiciel gratuitement et commencez votre parcours de marketing WhatsApp', crm_22: 'WA CRM - Logiciel de Gestion de la Relation Client via WhatsApp | WA Sender',
    crm_02: 'Télécharger WA CRM', crm_08: '📊 Données Marketing', crm_03: 'Français', crm_21: '🇸🇦 العربية',
    wacrm_badge: '✨ Nouveau', wacrm_hero_title: 'WA CRM<br/>Gestion de la Relation Client via WhatsApp', wacrm_hero_sub: 'Un système intégré pour gérer vos clients, organiser les conversations WhatsApp et suivre les ventes efficacement', wacrm_download: 'Téléchargement Gratuit',
    wacrm_buy: 'Acheter - 20$/an', crm_04: 'Fonctionnalités', wacrm_desc: 'Des outils puissants pour gérer vos relations clients de manière professionnelle', crm_05: 'Étapes',
    wacrm_how_title: 'Comment fonctionne WA CRM ?', wacrm_how_sub: 'Trois étapes simples pour gérer vos clients de manière professionnelle', wacrm_step1_title: 'Téléchargez le Logiciel', wacrm_step1_desc: 'Téléchargez WA CRM gratuitement et installez-le sur votre appareil en quelques étapes simples.',
    wacrm_step2_title: 'Abonnez-vous et Activez', wacrm_step2_desc: 'Abonnement annuel pour seulement 20$ et recevez votre code d\'activation instantanément.', wacrm_step3_title: 'Commencez à Gérer', wacrm_step3_desc: 'Entrez les données de vos clients et commencez à gérer leurs relations de manière professionnelle.',
    crm_06: 'Tarifs', wacrm_price_title: 'Un Forfait Complet', crm_01: 'Tout ce dont vous avez besoin pour gérer vos clients à un prix incroyable', wacrm_price_amount: '20',
    wacrm_price_period: '/ an', wacrm_price_feat1: 'Toutes les fonctionnalités disponibles', wacrm_price_feat2: 'Mises à jour gratuites continues', wacrm_price_feat3: 'Support technique direct 24/7',
    wacrm_price_feat4: 'Licence pour un seul appareil', crm_09: '💳 Acheter - 20$', wacrm_cta_ready: 'Prêt à gérer vos clients de manière professionnelle ?', wacrm_cta_desc: 'Téléchargez WA CRM maintenant et commencez à organiser vos relations clients dès aujourd\'hui',
    crm_10: 'Accueil', crm_11: 'Données Marketing', crm_12: 'Tutoriel', crm_13: 'Fonctionnalités',
    crm_14: 'Tarifs', crm_15: 'Politique de Confidentialité', crm_16: 'Politique d\'Achat', crm_17: 'Politique de Remboursement',
    crm_18: 'Conditions Générales', crm_19: 'Nous Contacter', crm_20: 'WhatsApp', crm_07: 'Données',
    wd_62: 'WaDefender - Analyseur de Force de Compte WhatsApp | Télécharger + S\'abonner', wd_31: 'Téléchargement Gratuit', wd_38: '📊 Données Marketing', wd_32: 'Français',
    wd_59: '🇸🇦 العربية', wd_63: '🛡️ Outil de Protection Avancée', wd_01: '<span>WaDefender</span><br/>Analyseur de Force de Compte WhatsApp', wd_17: 'Un outil professionnel pour scanner et analyser la force de votre compte WhatsApp, découvrir les faiblesses et renforcer votre compte contre le risque de bannissement. Téléchargez gratuitement et activez avec un abonnement annuel abordable.',
    wd_39: '⬇️ Téléchargement Gratuit', wd_40: '💳 S\'abonner - 5$/an', wd_33: 'Fonctionnalités', wd_02: 'Pourquoi WaDefender ?',
    wd_18: 'Outils avancés pour protéger et améliorer les performances de votre compte WhatsApp', wd_07: 'Analyse de la Force du Compte', wd_19: 'Scan complet de l\'état de votre compte WhatsApp avec un rapport détaillé sur les points forts, les faiblesses et les recommandations d\'amélioration.', wd_08: 'Vérification de la Santé des Numéros',
    wd_20: 'Vérifiez l\'activité des numéros WhatsApp et déterminez avec une grande précision s\'ils sont enregistrés, bannis ou inexistants.', wd_09: 'Protection Contre le Bannissement', wd_21: 'Évaluez le risque de bannissement de votre compte et recevez des mesures préventives pour protéger votre numéro WhatsApp.', wd_10: 'Rapports Détaillés',
    wd_22: 'Rapports complets et actualisés sur l\'état de votre compte, y compris la date d\'inscription, le niveau de confiance et l\'activité du compte.', wd_11: 'Vitesse Ultra Rapide', wd_23: 'Un moteur d\'analyse rapide fonctionnant avec une grande efficacité pour scanner des centaines de numéros en un temps record sans délai.', wd_12: 'Mises à Jour Continues',
    wd_24: 'Mises à jour régulières pour suivre les derniers changements de WhatsApp et garantir la précision des résultats et les performances du logiciel.', wd_34: 'Comment ça Marche', wd_03: 'Commencez en 3 étapes simples', wd_25: 'Facile à utiliser, aucune expérience technique requise',
    wd_14: 'Téléchargez le Logiciel', wd_26: 'Téléchargez WaDefender gratuitement depuis le site et installez-le sur votre appareil avec des étapes simples et rapides.', wd_15: 'Abonnez-vous et Activez', wd_27: 'Abonnez-vous pour seulement 5$ pour toute l\'année et recevez votre code d\'activation juste après le paiement.',
    wd_16: 'Commencez l\'Analyse', wd_28: 'Entrez le code d\'activation et commencez à scanner et analyser votre compte et vos numéros instantanément et facilement.', wd_35: 'Tarifs', wd_04: 'Abonnement annuel à prix spécial',
    wd_29: 'Toutes les fonctionnalités disponibles à un prix imbattable', wd_13: 'Forfait Annuel', wd_36: '/ an', wd_53: '✅ Analyse illimitée des comptes',
    wd_54: '✅ Vérifications illimitées de la santé des numéros', wd_55: '✅ Rapports détaillés complets', wd_56: '✅ Mises à jour gratuites toute l\'année', wd_57: '✅ Support technique direct 24/7',
    wd_58: '✅ Licence pour un seul appareil', wd_41: '💳 Acheter via PayPal', wd_64: '<strong data-i18n="wd_60">Scannez le QR pour Payer</strong>\n              avec votre téléphone ou l\'application PayPal<br/>\n<small data-i18n="wd_61" style="color:var(--text-muted)">Montant : 5$/an</small>', wd_60: 'Scannez le QR pour Payer',
    wd_61: 'Montant : 5$/an', wd_37: 'Statistiques', wd_05: 'Numéros qui font confiance à WaDefender', wd_65: 'utilisateurs actifs',
    wd_66: 'numéros scannés', wd_67: 'précision des résultats', wd_68: 'support technique', wd_06: 'Prêt à protéger votre compte WhatsApp ?',
    wd_30: 'Téléchargez WaDefender maintenant et commencez à analyser et protéger votre compte contre le risque de bannissement', wd_42: '⬇️ Téléchargement Gratuit', wd_43: '💳 S\'abonner - 5$', wd_44: 'Accueil',
    wd_45: 'Données Marketing', wd_46: 'Tarifs', wd_47: 'Politique de Confidentialité', wd_48: 'Conditions Générales',
    wd_49: 'Politique de Remboursement', wd_50: 'Politique d\'Achat', wd_51: 'Nous Contacter', wd_52: 'WhatsApp',
    idx_53: 'WA Sender - Télécharger le Logiciel + Guide d\'Activation et Tarifs', idx_39: 'Installer', idx_22: '📊 Données Marketing', idx_07: 'Français',
    idx_40: '🇸🇦 العربية', badge_new: 'Nouvelle Version 5.0.7', hero_sub: 'Logiciel de marketing WhatsApp complet avec plus de 15 outils puissants pour l\'envoi en masse, l\'automatisation et la génération de leads', btn_buy: 'Acheter Maintenant',
    warn_title: 'Important : Politique Anti-Spam de Meta / WhatsApp', warn_p1: 'Meta (la société propriétaire de WhatsApp) impose des restrictions strictes sur les activités d\'envoi en masse et de messages non sollicités.', warn_p2: 'Les comptes qui enfreignent les conditions d\'utilisation de WhatsApp peuvent faire l\'objet d\'un bannissement temporaire ou permanent.', warn_p3: 'WA Sender inclut des fonctionnalités de sécurité pour vous aider à respecter les politiques de Meta, mais il doit être utilisé de manière responsable.',
    warn_p5: 'Remarque : Assurez-vous de configurer Windows Defender ou votre logiciel de sécurité pour autoriser l\'installation du logiciel.', how_label: 'Tutoriel', how_sub: 'Un guide vidéo complet pour installer le logiciel, activer la licence et utiliser les outils les plus importants étape par étape', how_badge: 'Guide Vidéo Complet',
    how_caption: '▶ Une playlist de 10 vidéos explicatives qui se lisent directement sur le site sans redirection vers YouTube', steps_title: 'Comment Activer en 4 Étapes Simples', step1_title: 'Téléchargez le Logiciel', step1_desc: 'Téléchargez le fichier WA Sender via le bouton de téléchargement gratuit et installez-le sur votre appareil en quelques étapes simples.',
    step2_title: 'Choisissez Votre Forfait et Payez', step2_desc: 'Choisissez le forfait qui vous convient dans la section des tarifs et complétez le paiement avec l\'une des méthodes disponibles.', step3_title: 'Envoyez le Reçu de Paiement', step3_desc: 'Envoyez une capture d\'écran de votre reçu de paiement via WhatsApp et vous recevrez le code d\'activation instantanément.',
    step4_title: 'Activez et Commencez à Envoyer', step4_desc: 'Entrez le code d\'activation dans le logiciel et profitez immédiatement de tous les outils.', guide_label: 'Conseils de Sécurité', guide_title: 'Directives de Protection Contre le Bannissement WhatsApp',
    guide_sub: 'Pour garantir la poursuite de vos campagnes marketing sans perdre vos numéros, vous devez suivre ces étapes :', g1_title: '1. Préchauffage du Numéro', g1_li1: '<strong data-i18n="idx_41">Période de Grâce :</strong> Si le numéro est nouveau, attendez 20 à 30 jours avant de démarrer une campagne.', idx_41: 'Période de Grâce :',
    g1_li2: '<strong data-i18n="idx_42">Interaction Naturelle :</strong> Utilisez le numéro dans des conversations personnelles quotidiennes et rejoignez des groupes pour qu\'il montre une activité naturelle à WhatsApp.', idx_42: 'Interaction Naturelle :', g2_title: '2. Timing Intelligent', g2_li1: '<strong data-i18n="idx_43">Intervalles de Temps :</strong> Laissez un écart de 20 à 30 secondes entre chaque message.',
    idx_43: 'Intervalles de Temps :', g2_li2: '<strong data-i18n="idx_44">Limite Maximale :</strong> N\'envoyez pas plus de 200 à 300 messages par heure.', idx_44: 'Limite Maximale :', g2_li3: '<strong data-i18n="idx_45">Périodes de Repos :</strong> Vous devez interrompre régulièrement la campagne et faire des pauses pour éviter d\'être signalé comme « spam ».',
    idx_45: 'Périodes de Repos :', g3_title: '3. Gestion des Contacts', g3_li1: '<strong data-i18n="idx_46">Pré-enregistrement :</strong> Enregistrez les numéros au moins 24 heures avant l\'envoi.', idx_46: 'Pré-enregistrement :',
    g3_li2: '<strong data-i18n="idx_47">Synchronisation :</strong> Utilisez Google Contacts pour vous assurer que les numéros sont correctement formatés, et mettez à jour la liste en continu.', idx_47: 'Synchronisation :', g4_title: '4. Stratégie de Contenu des Messages', g4_li1: '<strong data-i18n="idx_48">Messages Personnels :</strong> Évitez les messages copier-coller et essayez de personnaliser chaque message avec le nom ou l\'intérêt du destinataire.',
    idx_48: 'Messages Personnels :', g4_li2: '<strong data-i18n="idx_49">Option de Désabonnement :</strong> Vous devez donner au client la possibilité de refuser de recevoir des messages afin qu\'il ne vous signale pas.', idx_49: 'Option de Désabonnement :', g4_li3: '<strong data-i18n="idx_50">Contenu Utile :</strong> Évitez tout ce qui ressemble à du « spam » et respectez la vie privée et les souhaits du client.',
    idx_50: 'Contenu Utile :', view_all_features: 'Voir Toutes les Fonctionnalités ←', idx_08: '🔥 Offre Spéciale', idx_01: 'Bases de Données Professionnelles pour le Marketing WhatsApp',
    idx_04: 'Plus de 84 millions de numéros saoudiens et égyptiens classés et prêts pour vos campagnes marketing', idx_09: 'Numéro Saoudien', idx_10: 'Numéro Égyptien', idx_23: '📦 Parcourir les Données Disponibles',
    idx_11: '✨ Nouveau', idx_02: 'WA CRM - Gestion de la Relation Client via WhatsApp', idx_05: 'Un système intégré pour gérer vos clients, organiser les conversations WhatsApp et suivre les ventes efficacement', idx_12: 'Gestion des Clients',
    idx_13: 'Suivi des Conversations', idx_14: '/an', idx_15: 'Prix Spécial', idx_24: '🟢 Découvrir WA CRM',
    idx_25: '⬇️ Téléchargement Gratuit', idx_16: '🛡️ Protection Avancée', idx_03: 'WaDefender - Analyseur de Force de Compte WhatsApp', idx_06: 'Scannez votre compte, découvrez les faiblesses et renforcez votre protection contre le risque de bannissement avant qu\'il ne survienne',
    idx_17: 'numéros scannés', idx_18: 'précision des résultats', idx_19: '/an', idx_20: 'prix abordable',
    idx_26: '🛡️ Découvrir WaDefender', idx_27: '⬇️ Téléchargement Gratuit', idx_54: '<strong data-i18n="idx_51">📱 Scanner pour Payer</strong>Payez 5$ directement via PayPal', idx_51: '📱 Scanner pour Payer',
    idx_55: '<strong data-i18n="idx_52">📱 Scanner pour Payer</strong>Payez 50$ directement via PayPal', idx_52: '📱 Scanner pour Payer', view_all_plans: 'Voir Tous les Forfaits ←', idx_28: 'Accueil',
    idx_29: 'Données Marketing', idx_30: 'Tutoriel', idx_31: 'Fonctionnalités', idx_32: 'Tarifs',
    idx_33: 'Politique de Confidentialité', idx_34: 'Politique d\'Achat', idx_35: 'Politique de Remboursement', idx_36: 'Conditions Générales',
    idx_37: 'Nous Contacter', idx_38: 'WhatsApp', idx_21: 'Données', md_119: 'Bases de Données Marketing | Arabie Saoudite, Égypte, Koweït et Émirats - WA Sender',
    md_85: 'Accueil', md_86: '📊 Données Marketing', md_87: 'Tutoriel', md_88: 'Fonctionnalités',
    md_89: 'Tarifs', md_90: 'Nous Contacter', md_39: 'Français', md_105: '🇸🇦 العربية',
    md_120: '🎯 La Solution Optimale pour le Marketing Digital et la Croissance des Ventes', md_01: 'Listes de Clients et Contacts Prêtes<br/>pour le Marketing WhatsApp', md_20: 'Nous fournissons des segments marketing précis et des listes prêtes à l\'emploi pour aider votre entreprise à atteindre facilement et efficacement son public cible.', md_40: 'Liste Saoudienne',
    md_41: 'Liste Égyptienne', md_42: 'Liste Koweïtienne', md_43: 'Liste Émirats', md_44: '📦 Segments et Forfaits Disponibles',
    md_02: 'Choisissez la Base de Données Adaptée à Votre Activité', md_21: 'Données soigneusement organisées et filtrées pour vous faire gagner du temps et des efforts pour atteindre des clients intéressés', md_08: 'Base de Données Saoudienne', md_45: 'Millions d\'Enregistrements',
    md_46: 'Couvre l\'ensemble du Royaume d\'Arabie Saoudite (13 régions)', md_47: 'Données mises à jour au cours des 5 dernières années', md_48: 'Classées par profession et spécialité', md_49: 'Classées par ville et région',
    md_50: 'Fichiers Excel (.xlsx) et TXT', md_22: '<strong data-i18n="md_109">Remarque :</strong> Certains numéros peuvent changer avec le temps en raison des mises à jour continues.', md_109: 'Remarque :', md_121: '<strong data-i18n="md_110">📱 Scanner pour Payer</strong>Payez 110$ directement via PayPal',
    md_110: '📱 Scanner pour Payer', md_91: '💳 Acheter - 110$ USD', md_51: '📁 Livraison Instantanée via Google Drive', md_09: 'Base de Données Égyptienne',
    md_52: 'Millions d\'Enregistrements', md_53: 'Couvre l\'ensemble de la République Arabe d\'Égypte (27 gouvernorats)', md_54: 'Données mises à jour au cours des 3 dernières années', md_55: 'Classées par profession et spécialité',
    md_56: 'Classées par gouvernorat', md_57: 'Fichiers Excel (.xlsx) et TXT', md_23: '<strong data-i18n="md_111">Remarque :</strong> Certains numéros peuvent changer avec le temps en raison des mises à jour continues.', md_111: 'Remarque :',
    md_122: '<strong data-i18n="md_112">📱 Scanner pour Payer</strong>Payez 12$ directement via PayPal', md_112: '📱 Scanner pour Payer', md_92: '💳 Acheter - 12$ USD', md_58: '📁 Livraison Instantanée via Google Drive',
    md_10: 'Base de Données Koweïtienne', md_59: 'Millions de Numéros', md_60: 'Données très organisées et professionnelles', md_61: 'Gouvernorats classés et organisés avec précision',
    md_62: 'Noms des clients inclus pour personnaliser les messages', md_63: 'Taille grande et complète couvrant divers segments', md_64: 'Fichiers Excel (.xlsx) et TXT', md_24: '<strong data-i18n="md_113">Remarque :</strong> Données organisées et détaillées pour les gouvernorats du Koweït afin de faciliter le ciblage.',
    md_113: 'Remarque :', md_123: '<strong data-i18n="md_114">📱 Scanner pour Payer</strong>Payez 25$ directement via PayPal', md_114: '📱 Scanner pour Payer', md_93: '💳 Acheter - 25$ USD',
    md_65: '📁 Livraison Instantanée via Google Drive', md_11: 'Base de Données Émiratie', md_66: 'Millions de Numéros', md_67: 'Citoyens réels et ciblés',
    md_68: 'Clients sérieux prêts à acheter et interagir', md_69: 'Un segment avec une très bonne situation financière', md_70: 'Très organisé et prêt à l\'importation', md_71: 'Fichiers Excel (.xlsx) et TXT',
    md_25: '<strong data-i18n="md_115">Remarque :</strong> Données excellentes pour les entreprises ciblant le segment à fort pouvoir d\'achat.', md_115: 'Remarque :', md_124: '<strong data-i18n="md_116">📱 Scanner pour Payer</strong>Payez 15$ directement via PayPal', md_116: '📱 Scanner pour Payer',
    md_94: '💳 Acheter - 15$ USD', md_72: '📁 Livraison Instantanée via Google Drive', md_12: 'Base de Données Combinée des Pays du Golfe (Forfait Complet)', md_125: 'Couvrant <span data-i18n="md_73">7 pays arabes et du Golfe</span>',
    md_73: '7 pays arabes et du Golfe', md_74: 'Royaume d\'Arabie Saoudite (34M+)', md_75: 'Émirats Arabes Unis (1M+)', md_76: 'État du Koweït (2M+)',
    md_77: 'Royaume Hachémite de Jordanie', md_78: 'République d\'Irak', md_79: 'État du Qatar', md_80: 'République du Liban',
    md_26: '<strong data-i18n="md_117">Remarque :</strong> Un forfait complet regroupant les bases de données de plusieurs marchés arabes et du Golfe majeurs à prix réduit et à forte valeur marketing.', md_117: 'Remarque :', md_126: '<strong data-i18n="md_118">📱 Scanner pour Payer</strong>Payez 250$ directement via PayPal', md_118: '📱 Scanner pour Payer',
    md_95: '💳 Acheter le Forfait Complet - 250$ USD', md_81: '📁 Livraison Instantanée via Google Drive', md_82: '💡 Pourquoi le Marketing WhatsApp ?', md_03: 'La Puissance des Canaux Marketing Directs',
    md_27: 'Découvrez pourquoi le marketing via WhatsApp atteint les taux d\'engagement et de retour sur investissement les plus élevés', md_13: 'Taux de Lecture Très Élevé', md_28: 'Les messages WhatsApp sont lus à des taux qui dépassent les méthodes traditionnelles, garantissant que votre message marketing atteint directement les clients.', md_14: 'Interaction et Rapidité de Réponse',
    md_29: 'WhatsApp vous permet d\'ouvrir des canaux de communication directs et rapides avec des clients potentiels pour répondre à leurs questions et conclure des ventes.', md_15: 'Ciblage Organisé et Professionnel', md_30: 'L\'utilisation de listes prêtes et classées vous permet d\'adapter précisément vos offres aux intérêts de votre segment cible.', md_04: 'Le Plus Grand Défi dans la Création de Campagnes Marketing',
    md_31: 'Tout bon marketeur sait que le succès d\'une campagne WhatsApp dépend en grande partie de la qualité et de la puissance de la liste de clients utilisée.<br/>Au lieu de passer des semaines à collecter et nettoyer manuellement les données, nous vous épargnons tout cet effort.', md_16: '✅ La Solution Professionnelle, Prête Entre Vos Mains', md_32: 'Choisissez le forfait ou le pays que vous ciblez, et obtenez les fichiers organisés et prêts à être utilisés et importés dans votre logiciel marketing instantanément.', md_05: 'Comment Recevoir les Fichiers',
    md_33: 'Une fois le paiement effectué, vous recevrez un lien de téléchargement direct via <strong>Google Drive</strong> contenant toutes les listes aux formats <strong>Excel (.xlsx)</strong> et <strong>TXT</strong>.', md_83: '❓ Questions Fréquentes', md_06: 'Réponses à Vos Questions', md_106: 'Quels formats de fichiers vais-je recevoir ?<span>+</span>',
    md_34: 'Les fichiers sont disponibles aux formats Excel (.xlsx) et TXT pour être entièrement compatibles avec les logiciels d\'envoi et d\'importation.', md_107: 'Comment obtenir les fichiers après le paiement ?<span>+</span>', md_35: 'Le lien de téléchargement Google Drive est envoyé instantanément et en toute sécurité juste après la finalisation du paiement.', md_108: 'Les données sont-elles organisées et classées ?<span>+</span>',
    md_36: 'Oui, les listes sont soigneusement organisées et réparties par gouvernorat et région géographique pour faciliter le ciblage.', md_07: 'Développez Votre Campagne Marketing Aujourd\'hui !', md_37: 'Choisissez le forfait qui convient à votre entreprise et commencez à atteindre votre public cible', md_96: '🇸🇦 Données Saoudiennes - 110$',
    md_97: '🇪🇬 Données Égyptiennes - 12$', md_98: '🇰🇼 Données Koweïtiennes - 25$', md_38: 'Outils et logiciels professionnels pour développer vos campagnes marketing et augmenter vos ventes.', md_17: 'Liens Rapides',
    md_99: 'Accueil', md_100: 'Données Marketing', md_101: 'Tarifs', md_18: 'Juridique',
    md_102: 'Politique de Confidentialité', md_103: 'Conditions Générales', md_19: 'Support', md_104: 'Nous Contacter',
    md_84: '© 2026 WA Sender. Tous Droits Réservés.',
    local_yearly_egp: '≈ 250 EGP', local_saver_egp: '≈ 750 EGP', local_ultimate_egp: '≈ 1000 EGP', local_lifetime_egp: '≈ 2500 EGP',
    pm_paypal: 'PayPal - CB', pm_paypal_desc: 'Paiement sécurisé PayPal/Visa/MasterCard',
    pm_bank: 'Virement', pm_bank_desc: 'Virement direct compte D360 Bank',
    pm_vodafone: 'Vodafone Cash', pm_vodafone_desc: 'Paiement Vodafone Cash Égypte',
    pm_instapay: 'InstaPay', pm_instapay_desc: 'Paiement facile InstaPay',
    contact_title: 'Contactez-Nous', contact_subtitle: 'Nous sommes là pour vous !',
    cf_name: 'Nom Complet', cf_email: 'Email', cf_phone: 'Téléphone',
    cf_subject: 'Sujet', cf_message: 'Message', cf_submit: 'Envoyer',
    cf_success: 'Message envoyé avec succès !', cf_error: 'Erreur. Réessayez.',
    ct_whatsapp_title: 'WhatsApp', ct_whatsapp_desc: 'Contact direct pour réponse rapide',
    ct_email_title: 'Email', ct_email_desc: 'Réponse sous 24 heures',
    ct_hours_title: 'Horaires', ct_hours_desc: 'Dim-Jeu : 9h-18h',
    pp01: 'Politique de Confidentialité', pp02: 'Mis à jour : Janvier 2025',
    pp03: 'Chez WA Sender, nous protégeons votre vie privée.',
    pp04: '1. Données Collectées', pp05: 'Nous collectons :',
    pp06: '• Coordonnées', pp07: '• Paiement sécurisé', pp08: '• Usage technique', pp09: '• Cookies',
    pp10: '2. Utilisation', pp11: 'Pour :', pp12: '• Services/support', pp13: '• Paiements',
    pp14: '• Améliorations', pp15: '• Notifications', pp16: '• Légal',
    pp17: '3. Protection', pp18: 'Mesures :', pp19: '• Chiffrement', pp20: '• Accès restreint',
    pp21: '• Mises à jour sécurité', pp22: '• Pas de stockage CB',
    pp23: '4. Partage', pp24: 'Sauf :', pp25: '• Paiement', pp26: '• Légal', pp27: '• Consentement',
    pp28: '5. Droits', pp29: 'Vous avez :', pp30: '• Accès', pp31: '• Correction', pp32: '• Suppression',
    pp33: '• Retrait consentement', pp34: '• Réclamation',
    pp35: '6. Cookies', pp36: 'Pour :', pp37: '• Préférences', pp38: '• Analytique', pp39: '• UX',
    pp40: '7. Modifications', pp41: 'Mises à jour publiées ici.',
    pp42: '8. Contact', pp43: 'support@wasendernew.com | +201279934735',
    rf01: 'Politique d\'Achat', rf02: 'Mis à jour : Janvier 2025',
    rf03: 'Lisez attentivement avant achat.',
    rf04: '1. Produits', rf05: 'Forfaits :', rf06: '• Annuel', rf07: '• 2 Ans', rf08: '• 3 Ans',
    rf09: '• À Vie', rf10: '• Multi-appareils',
    rf11: '2. Prix', rf12: 'USD, taxes possibles.',
    rf13: '3. Paiement', rf14: 'Acceptons :', rf15: '• PayPal', rf16: '• Virement',
    rf17: '• Vodafone Cash', rf18: '• InstaPay',
    rf19: '4. Achat', rf20: 'Après :', rf21: '• Confirmation email', rf22: '• Licence 24h',
    rf23: '• Vérifiez coordonnées',
    rf24: '5. Activation', rf25: '• Clé unique', rf26: '• Entrer logiciel', rf27: '• Lié appareil',
    rf28: '6. Renouvellement', rf29: '• Pas auto', rf30: '• Rappel 7j', rf31: '• Manuel',
    rf32: '7. Transfert', rf33: '• Non pendant abonnement', rf34: '• Contact support',
    rf35: '8. Offres', rf36: '• Promotions', rf37: '• Non cumulables',
    rf38: '• Prix modifiables',
    rf39: '9. Conditions', rf40: '• Achat = acceptation', rf41: '• Droit annulation',
    rf42: '• Prix variables',
    rf43: '10. Contact', rf44: '+201279934735 | support@wasendernew.com',
    tm01: 'Politique Remboursement', tm02: 'Mis à jour : Janvier 2025',
    tm03: 'Service satisfaisant visé.',
    tm04: '1. Général', tm05: 'Nature numérique :',
    tm06: '• 7 jours', tm07: '< 100 messages', tm08: '• Raison valide',
    tm09: '2. Acceptés', tm10: 'Remboursement :',
    tm11: '• Tech non résolu (5j)', tm12: '• Incompatibilité', tm13: '• Erreur critique',
    tm14: '• Double paiement',
    tm15: '3. Refusés', tm16: 'Pas de remboursement :',
    tm17: '• Après 7j', tm18: '• Erreur utilisateur', tm19: '• Ban WhatsApp',
    tm20: '• Achat non autorisé',
    tm21: '4. Processus', tm22: 'Demander :',
    tm23: '• Contactez-nous', tm24: '• Numéro commande', tm25: '• Décrivez problème',
    tm26: '• 3-5 jours examen',
    tm27: '5. Délais', tm28: '• CB : 5-10j', tm29: '• PayPal : 3-5j', tm30: '• Virement : 7-14j',
    tm31: '6. Alternatives', tm32: 'Offrons :', tm33: '• Extension gratuite', tm34: '• Mise à niveau',
    tm35: '• Support tech',
    tm36: '7. Litiges', tm37: '• Contact d\'abord', tm38: '• Litige dernier recours',
    tm39: '• Malveillant = bannissement',
    tm40: '8. Exceptions', tm41: '• Urgences flexibles', tm42: '• Fidèles privilèges',
    tm43: '• Cas par cas',
    pv01: 'Conditions Générales', pv02: 'Mis à jour : Janvier 2025',
    pv03: 'Bienvenue. Utilisation = acceptation.',
    pv04: '1. Acceptation', pv05: 'Utilisation = acceptation totale.',
    pv06: '2. Service', pv07: 'Outils :', pv08: '• Envoi masse', pv09: '• Extraction',
    pv10: '• Campagnes', pv11: '• Automatisation',
    pv12: '3. Obligations', pv13: 'Vous devez :', pv14: '• Usage licite', pv15: '• Pas de spam',
    pv16: '• Respect vie privée', pv17: '• Pas de piratage', pv18: '• Respect WhatsApp ToS',
    pv19: '4. Propriété', pv20: '• Droits WA Sender', pv21: '• Usage personnel',
    pv22: '• Pas copie/distribution', pv23: '• Marques propriétaires',
    pv24: '5. Responsabilité', pv25: 'Vous responsable :', pv26: '• Contenu', pv27: '• Légalité',
    pv28: '• Sécurité compte', pv29: '• Dommages mauvais usage',
    pv30: '6. Limitation', pv31: '• "Tel quel"', pv32: '• Pas responsable bannissement',
    pv33: '• Max = montant payé', pv34: '• Pas dommages indirects',
    pv35: '7. Résiliation', pv36: 'Si :', pv37: '• Violation', pv38: '• Usage illégal',
    pv39: '• Fraude', pv40: '• Dommage réputation',
    pv41: '8. Modifications', pv42: 'Modifiable; notification changements majeurs.',
    pv43: '9. Droit', pv44: 'Droit applicable; arbitrage litiges.',
    pv45: '10. Contact', pv46: 'legal@wasendernew.com | +201279934735',
    wd_title: 'WaDefender - Protection Compte WhatsApp',
    wd_subtitle: 'Protégez votre compte des blocages',
    wd_hero_desc: 'WaDefender spécialisé dans la protection contre les blocages et suspensions.',
    wd_feature1_title: 'Surveillance Comportement', wd_feature1_desc: 'Suivi activités comportements dangereux.',
    wd_feature2_title: 'Alertes Précoces', wd_feature2_desc: 'Alertes instantanées activité suspecte.',
    wd_feature3_title: 'Gestion Taux', wd_feature3_desc: 'Contrôle intelligent limites quotidiennes.',
    wd_feature4_title: 'Vérification Qualité', wd_feature4_desc: 'Vérifiez numéros avant envoi éviter signalements.',
    wd_feature5_title: 'Planification Sûre', wd_feature5_desc: 'Distribution intervalles sûrs comportement naturel.',
    wd_feature6_title: 'Rapports Protection', wd_feature6_desc: 'Rapports détaillés état protection recommandations.',
    wd_btn_download: 'Télécharger WaDefender', wd_price: '$15/an', wd_note: 'Fonctionne avec WA Sender',
    md_title: 'Données Marketing', md_subtitle: 'Extraction données prospects sources multiples',
    md_hero_desc: 'Extraire téléphones emails adresses entreprises Google Maps sites web.',
    md_feature1_title: 'Google Maps', md_feature1_desc: 'Recherche entreprises ville extraction coordonnées.',
    md_feature2_title: 'Sites Web', md_feature2_desc: 'Extraction numéros sites URLs mots-clés.',
    md_feature3_title: 'Filtrage Avancé', md_feature3_desc: 'Filtrer ville type entreprise notes.',
    md_feature4_title: 'Export Multi-Format', md_feature4_desc: 'Exporter CSV Excel JSON.',
    md_feature5_title: 'Recherche Mots-Clés', md_feature5_desc: 'Rechercher multiples mots-clés.',
    md_feature6_title: 'Mise à Jour Auto', md_feature6_desc: 'Vérifier données ignorer numéros inactifs.',
    md_btn_learn_more: 'En Savoir Plus', md_included: 'Inclus WA Sender Pro',
    wacrm_title: 'WA CRM - Gestion Relation Client',
    wacrm_subtitle: 'Gérez clients campagnes endroit unique',
    wacrm_hero_desc: 'Système CRM intégré WhatsApp suivi clients gestion ventes.',
    wacrm_feature1_title: 'Gestion Clients', wacrm_feature1_desc: 'Profils complets historique notes.',
    wacrm_feature2_title: 'Suivi Ventes', wacrm_feature2_desc: 'Suivi opportunités premier contact fermeture.',
    wacrm_feature3_title: 'Gestion Équipe', wacrm_feature3_desc: 'Attribuer tâves suivre performance.',
    wacrm_feature4_title: 'Réponses Rapides', wacrm_feature4_desc: 'Modèles réponses fréquentes.',
    wacrm_feature5_title: 'Calendrier RDV', wacrm_feature5_desc: 'Organiser rappels intégrés.',
    wacrm_feature6_title: 'Rapports Analytiques', wacrm_feature6_desc: 'Analytiques avancées performance.',
    wacrm_feature7_title: 'Intégration WA Sender', wacrm_feature7_desc: 'Lien direct campagnes segments.',
    wacrm_feature8_title: 'Accès Multi-Appareils', wacrm_feature8_desc: 'Accès appareil sync auto.',
    wacrm_btn_start: 'Démarrer WA CRM', wacrm_coming_soon: 'Bientôt - Inscrivez-vous'
  },

  // ═══════════════════════════════════════════════════════════════
  // RUSSIAN (ru)
  // ═══════════════════════════════════════════════════════════════
  ru: {
    nav_home: 'Главная', nav_how: 'Обучение', nav_guide: 'Защита от Блокировки',
    nav_features: 'Функции', nav_pricing: 'Цены', nav_contact: 'Контакт',
    nav_policies: 'Политики', nav_marketing: '📊 Маркетинг',
    nav_wacrm: '🟢 WA CRM', nav_wadefender: '🛡️ WaDefender',
    nav_exclusive_software: '⭐ Эксклюзивные Программы',
    bn_home: 'Главная', bn_videos: 'Видео', bn_pricing: 'Цены',
    bn_download: 'Скачать', bn_contact: 'Контакт',
    footer_quick: 'Быстрые Ссылки', footer_legal: 'Юридическое', footer_support: 'Поддержка',
    footer_rights: 'Все права защищены',
    footer_desc: 'Профессиональная программа для маркетинга в WhatsApp с продвинутыми инструментами.',
    footer_privacy: 'Политика Конфиденциальности', footer_purchase: 'Политика Покупки',
    footer_refund: 'Политика Возврата', footer_terms: 'Условия', footer_whatsapp: 'WhatsApp',
    title_home: 'WA Sender - Профессиональный WhatsApp Маркетинг',
    title_features: 'Функции - WA Sender', title_pricing: 'Цены и План - WA Sender',
    title_contact: 'Связаться - WA Sender', title_policies: 'Политики - WA Sender',
    title_marketing: 'Маркетинговые Данные - WA Sender', title_wacrm: 'WA CRM - Управление Клиентами',
    title_wadefender: 'WaDefender - Защита Аккаунта WhatsApp', title_privacy: 'Политика Конфиденциальности',
    title_purchase: 'Политика Покупки', title_refund: 'Политика Возврата', title_terms: 'Условия',
    desc_home: 'Профессиональный WA Sender для маркетинга в WhatsApp. Массовая рассылка, извлечение номеров.',
    desc_features: 'Откройте мощные функции: массовые сообщения, извлечение, автоответ.',
    desc_pricing: 'Выберите подходящий план по конкурентным ценам.',
    desc_contact: 'Свяжитесь с поддержкой WA Sender.',
    desc_marketing: 'Инструмент извлечения данных из Google Maps и сайтов.',
    desc_wacrm: 'Интегрированная CRM система WhatsApp для управления клиентами.',
    desc_wadefender: 'Защитите аккаунт WhatsApp от блокировок с WaDefender.',
    hero_title: 'Самая Мощная Программа WhatsApp Маркетинга',
    hero_subtitle: 'Массовые рассылки, извлечение номеров и управление кампаниями',
    hero_btn_download: 'Скачать Сейчас', hero_btn_features: 'Изучить Функции',
    hero_trusted_by: 'Доверяют более 50 000 пользователей',
    stats_users: 'Активных Пользователей', stats_messages: 'Сообщений в День',
    stats_countries: 'Стран', stats_uptime: 'Время Работы',
    how_title: 'Как Это Работает?', how_subtitle: 'Три простых шага для начала',
    how_step1_title: 'Скачать Программу', how_step1_desc: 'Скачайте и установите WA Sender за секунды',
    how_step2_title: 'Импорт Номеров', how_step2_desc: 'Импортируйте список или извлеките из групп WhatsApp',
    how_step3_title: 'Отправить Сообщения', how_step3_desc: 'Создайте кампанию и отправьте одним кликом',
    features_preview_title: 'Мощные Функции', features_preview_subtitle: 'Всё для успешного маркетинга',
    btn_view_all_features: 'Все Функции', btn_get_started: 'Начать',
    features_title: 'Функции WA Sender', features_subtitle: 'Комплексные профессиональные инструменты',
    f1_title: 'Массовая Рассылка', f1_desc: 'Отправляйте текст, изображения, видео тысячам номеров одним кликом.',
    f2_title: 'Извлечение Участников', f2_desc: 'Автоматически извлекайте номера участников групп WhatsApp.',
    f3_title: 'Извлечение Google Maps', f3_desc: 'Получайте контакты любого бизнеса через Google Maps.',
    f4_title: 'Умный Автоответ', f4_desc: 'Создавайте интеллектуальные автоответы по ключевым словам.',
    f5_title: 'Импорт/Экспорт', f5_desc: 'Импортируйте CSV/Excel, экспортируйте отчёты.',
    f6_title: 'Планирование', f6_desc: 'Запланируйте отправку даже офлайн.',
    f7_title: 'Тест на Фиктивных', f7_desc: 'Тестируйте кампании на фиктивных номерах.',
    f8_title: 'Фильтрация', f8_desc: 'Проверяйте существование номеров, удаляйте неактивные.',
    f9_title: 'Мультиаккаунты', f9_desc: 'Используйте несколько аккаунтов одновременно.',
    f10_title: 'Персонализация', f10_desc: 'Добавляйте переменные типа {name} для персонализации.',
    f11_title: 'Мультимедиа', f11_desc: 'Отправляйте изображения, видео, документы, локации.',
    f12_title: 'Отчёты', f12_desc: 'Отслеживайте производительность детальными отчётами.',
    f13_title: 'Защита от Бана', f13_desc: 'Продвинутая технология с умными задержками.',
    f14_title: 'Простой Интерфейс', f14_desc: 'Современный дизайн доступен всем.',
    f15_title: 'Обновления', f15_desc: 'Регулярные обновления для последних версий WhatsApp.',
    price_label: 'Цены', price_title: 'Выберите Подходящий План', price_sub: 'Гибкие планы с гарантией возврата',
    plan1_name: 'Базовый План', plan1_period: '1 Год / 1 Устройство', plan1b_name: 'Экономный План', plan1b_period: '4 Года / 1 Устройство',
    plan2_name: 'Пожизненный План', plan2_period: 'Пожизненно / 1 Устройство',
    price_22: 'Максимальный План', price_04: '5 Лет / 1 Устройство',
    pf1: 'Неограниченная рассылка', pf2: 'Извлечение групп', pf3: 'Извлечение Google Maps',
    pf4: 'Автоответ', pf5: 'Планирование', pf6: 'Фильтрация', pf7: 'Мультиаккаунты',
    pf8: 'Отчёты', pf9: 'Защита от бана', pf10: 'Поддержка 24/7',
    pf11: 'Бесплатные обновления', pf12: '2 устройства', pf13: '3 устройства',
    devices_1: 'Одно Устройство', devices_2: 'Два Устройства', devices_3: '3 Устройства',
    popular_badge: 'Популярный', btn_buy_now: 'Подписаться',
    price_group1: 'Планы на 1 Устройство', price_group2: 'Мультиустройственные Планы',
    payment_title: 'Способы Оплаты', payment_subtitle: 'Выберите удобный способ',
    faq_title: 'Часто задаваемые вопросы о ценах и оплате',
    faq_q1: 'Могу ли я обновить свой план позже?', faq_a1: 'Да! Вы можете обновить свой план в любое время. Будет рассчитана разница между текущим и новым планом со скидкой за оставшийся период.',
    faq_q2: 'Какие способы оплаты доступны?', faq_a2: 'Мы принимаем несколько способов оплаты: Vodafone Cash (Египет), приложение Barq (Саудовская Аравия), InstaPay, банковский перевод D360 (Саудовская Аравия), а также Visa и PayPal для международных платежей.',
    faq_q3: 'Сколько времени занимает активация лицензии после оплаты?', faq_a3: 'Активация обычно происходит в течение нескольких минут после получения квитанции об оплате через WhatsApp. Банковские переводы могут занять 1-24 рабочих часа.',
    faq_q4: 'Можно ли перенести лицензию на другое устройство?', faq_a4: 'Лицензия привязана к одному устройству. Если вы смените устройство, свяжитесь с нами через WhatsApp, и мы бесплатно поможем перенести лицензию на новое устройство.',
    pm_vodafone_title: 'Vodafone Cash (Египет)', pm_vodafone_sub: 'Мгновенный перевод на кошелек', pm_vodafone_note: 'Отправьте квитанцию о переводе через WhatsApp для мгновенной активации.',
    pm_barq_title: 'Приложение Barq (Саудовская Аравия)', pm_barq_sub: 'Международный перевод в Саудовскую Аравию', pm_barq_steps: '<strong>Этапы перевода:</strong> Международный перевод → Египет → Введите номер ниже', pm_barq_note: 'Отправьте квитанцию после перевода для активации.',
    pm_instapay_title: 'InstaPay (Египет)', pm_instapay_sub: 'Прямой перевод из Египта', pm_instapay_link: 'Открыть ссылку InstaPay →', pm_instapay_note: 'Отправьте квитанцию об оплате после завершения транзакции.',
    pm_bank_title: 'Банковский перевод - D360 (Саудовская Аравия)', pm_bank_sub: 'Через саудовский IBAN', pm_bank_name: 'Банк:', pm_bank_holder: 'Имя получателя:', pm_bank_iban: 'Номер IBAN:', pm_bank_swift: 'SWIFT-код:', pm_bank_note: 'Перевод занимает 1-24 рабочих часа. Отправьте квитанцию для активации.',
    pm_paypal_title: 'Visa / PayPal', pm_paypal_sub: 'Безопасная оплата картой', pm_paypal_note2: 'Нажмите кнопку «Купить сейчас» или отсканируйте QR-код под нужным планом выше, и вы будете перенаправлены прямо на страницу оплаты с правильной суммой. После оплаты отправьте использованный email через WhatsApp.',
    price_01: '<span>Банк:</span> D360 Bank', price_02: '<span>Имя получателя:</span> Айман Наср Наср',
    price_05: '/ Год', price_06: '/ Год', price_07: '/ 2 Года',
    price_08: '📊 Маркетинговые данные', price_09: '📊 Маркетинговые данные',
    price_11: '📱 Сканируйте для быстрой оплаты', price_12: '📱 Сканируйте для быстрой оплаты', price_13: '📱 Сканируйте для быстрой оплаты', price_14: '📱 Сканируйте для быстрой оплаты', price_15: '📱 Сканируйте для быстрой оплаты', price_16: '📱 Сканируйте для быстрой оплаты', price_17: '📱 Сканируйте для быстрой оплаты',
    price_18: 'Этапы перевода:',
    price_19: 'Цены и подписки WA Sender - Гибкие планы для всех нужд | WA Sender',
    price_20: '<strong>📱 Сканируйте для быстрой оплаты</strong>Оплатите $5 напрямую через PayPal', price_21: '<strong>📱 Сканируйте для быстрой оплаты</strong>Оплатите $15 напрямую через PayPal', price_23: '<strong>📱 Сканируйте для быстрой оплаты</strong>Оплатите $20 напрямую через PayPal', price_24: '<strong>📱 Сканируйте для быстрой оплаты</strong>Оплатите $50 напрямую через PayPal', price_25: '<strong>📱 Сканируйте для быстрой оплаты</strong>Оплатите $8 напрямую через PayPal', price_26: '<strong>📱 Сканируйте для быстрой оплаты</strong>Оплатите $12 напрямую через PayPal', price_27: '<strong>📱 Сканируйте для быстрой оплаты</strong>Оплатите $25 напрямую через PayPal',
    devices_year: '2 Устройства / Год', devices_2year: '2 Устройства / 2 Года', devices_3year: '3 Устройства / Год',
    privacy_title: 'Политика Конфиденциальности', purchase_title: 'Политика Покупки', refund_title: 'Политика Возврата', terms_title: 'Условия и Положения',
    pwa_install: 'Установить Приложение', pwa_subtitle: 'Получите лучший опыт без браузера',
    btn_download: 'Бесплатная Загрузка', copy_btn: 'Копировать',
    ct_01: 'Бесплатная Загрузка', ct_02: 'Русский', ct_03: '📊 Маркетинговые данные', ct_04: '📊 Маркетинговые данные',
    ct_05: '🇸🇦 العربية', ct_06: 'Связаться с нами - WA Sender | Техподдержка', pp_01: '1. Введение', pp_02: '2. Информация, которую мы собираем',
    pp_03: '3. Как мы используем вашу информацию', pp_04: '4. Передача информации', pp_05: '5. Безопасность данных', pp_06: '6. Ваши права',
    pp_07: '7. Хранение данных', pp_08: '8. Ссылки на внешние сайты', pp_09: '9. Изменения данной политики', pp_10: '10. Свяжитесь с нами',
    pp_11: '2.1 Информация, предоставляемая вами добровольно:', pp_12: '2.2 Информация, собираемая автоматически:', pp_13: 'Последнее обновление: август 2026', pp_14: 'В WA Sender мы стремимся защищать вашу конфиденциальность. Данная политика объясняет, как мы собираем, используем и защищаем вашу личную информацию при использовании нашего сайта и программы WA Sender.',
    pp_15: 'Используя наш сайт или программное обеспечение, вы соглашаетесь с практиками, описанными в данной Политике конфиденциальности.', pp_16: 'Мы используем собранную информацию для следующих целей:', pp_17: 'Мы не продаем, не обмениваем и не сдаем в аренду вашу личную информацию третьим лицам. Мы можем передавать вашу информацию только в следующих случаях:', pp_18: 'Мы принимаем соответствующие технические и организационные меры безопасности для защиты вашей личной информации от несанкционированного доступа, изменения, раскрытия или уничтожения. Однако невозможно гарантировать 100% безопасность передачи данных через интернет.',
    pp_19: 'Вы имеете право:', pp_20: 'Мы храним вашу личную информацию только в течение времени, необходимого для достижения целей, изложенных в данной политике, если более длительный срок хранения не требуется по закону.', pp_21: 'Наш сайт может содержать ссылки на внешние сайты. Мы не несем ответственности за содержимое этих внешних сайтов и не принимаем на себя ответственность за их политику конфиденциальности.', pp_22: 'Мы можем время от времени обновлять данную Политику конфиденциальности. Мы объявим о любых существенных изменениях, разместив новую политику на этой странице с обновленной датой «Последнее обновление».',
    pp_23: 'Если у вас есть вопросы об этой Политике конфиденциальности, свяжитесь с нами через:', pp_24: 'Русский', pp_25: '<strong data-i18n="pp_46">Контактная информация:</strong> Полное имя, адрес электронной почты, номер телефона при обращении к нам или покупке лицензии.', pp_26: '<strong data-i18n="pp_47">Платежная информация:</strong> Платежные данные, необходимые для обработки ваших покупок (обрабатываются через безопасные платежные шлюзы и не хранятся нами напрямую).',
    pp_27: '<strong data-i18n="pp_48">Технические вопросы:</strong> Любая информация, которую вы предоставляете при сообщении о технической проблеме или запросе поддержки.', pp_28: '<strong data-i18n="pp_49">Данные о просмотре:</strong> Тип браузера, операционная система, IP-адреса, посещенные страницы, время и дата посещения.', pp_29: '<strong data-i18n="pp_50">Файлы cookie:</strong> Мы используем файлы cookie для улучшения вашего опыта на сайте. Вы можете отключить их в настройках браузера.', pp_30: '<strong data-i18n="pp_51">Аналитические данные:</strong> Мы используем анонимные аналитические инструменты, чтобы понять, как посетители используют наш сайт.',
    pp_31: 'Предоставление, эксплуатация и защита наших услуг (включая устранение неполадок).', pp_32: 'Обработка транзакций и отправка информации, связанной с покупкой.', pp_33: 'Ответы на ваши запросы и предоставление технической поддержки.', pp_34: 'Улучшение наших услуг и разработка новых функций.',
    pp_35: 'Отправка важных уведомлений об услуге (при наличии).', pp_36: 'Соблюдение юридических и нормативных обязательств.', pp_37: '<strong data-i18n="pp_52">Поставщики услуг:</strong> Компании, которые помогают нам вести бизнес (платежные шлюзы, хостинг серверов) и обязаны защищать ваши данные.', pp_38: '<strong data-i18n="pp_53">Юридические требования:</strong> Когда это требуется по закону или для защиты наших прав или безопасности наших пользователей.',
    pp_39: '<strong data-i18n="pp_54">Ваше согласие:</strong> Когда вы даете нам явное согласие на передачу вашей информации.', pp_40: 'Доступ к персональным данным, которые мы храним о вас.', pp_41: 'Запрос на исправление любой неточной информации.', pp_42: 'Запрос на удаление ваших персональных данных (с некоторыми исключениями).',
    pp_43: 'Возражение против обработки ваших данных в целях прямого маркетинга.', pp_44: 'Отзыв вашего согласия в любое время.', pp_45: '🇸🇦 العربية', pp_46: 'Контактная информация:',
    pp_47: 'Платежная информация:', pp_48: 'Технические вопросы:', pp_49: 'Данные о просмотре:', pp_50: 'Файлы cookie:',
    pp_51: 'Аналитические данные:', pp_52: 'Поставщики услуг:', pp_53: 'Юридические требования:', pp_54: 'Ваше согласие:',
    pp_55: 'WhatsApp:', pp_56: 'Email:', pp_57: 'Политика Конфиденциальности - WA Sender | Как Мы Защищаем Ваши Данные', pv_01: '1. Введение',
    pv_02: '2. Типы лицензий и цены', pv_03: '3. Принимаемые способы оплаты', pv_04: '4. Процесс активации', pv_05: '5. Условия лицензии',
    pv_06: '6. Гарантия цены', pv_07: '7. Счета и квитанции', pv_08: '8. Технические проблемы после покупки', pv_09: '9. Свяжитесь с нами',
    pv_10: '2.1 Планы на одно устройство:', pv_11: '2.2 Планы на несколько устройств:', pv_12: 'Последнее обновление: август 2026', pv_13: 'Данная политика разъясняет условия покупки и использования лицензий программы WA Sender. Приобретая лицензию WA Sender, вы соглашаетесь соблюдать данные условия.',
    pv_14: 'Мы предлагаем несколько тарифных планов для удовлетворения различных потребностей:', pv_15: 'Мы принимаем несколько способов оплаты для облегчения процесса покупки:', pv_16: 'Мы оставляем за собой право изменять цены в любое время. Однако, если вы приобрели подписку, цена, которую вы заплатили, останется в силе на весь срок действия вашей подписки.', pv_17: 'После завершения оплаты вы можете запросить официальную квитанцию через WhatsApp или email. Квитанция содержит детали покупки, дату оплаты и уплаченную сумму.',
    pv_18: 'Если у вас возникла техническая проблема при установке или активации программы:', pv_19: 'По вопросам, связанным с покупкой или оплатой:', pv_20: 'Русский', pv_21: '<strong data-i18n="pv_48">Годовая подписка:</strong> 5 долларов США - действительна один год на одном устройстве.',
    pv_22: '<strong data-i18n="pv_49">Подписка на 2 года:</strong> 15 долларов США - действительна два года на одном устройстве.', pv_23: '<strong data-i18n="pv_50">Подписка на 3 года:</strong> 20 долларов США - действительна 3 года на одном устройстве.', pv_24: '<strong data-i18n="pv_51">Пожизненная подписка:</strong> 50 долларов США - действительна пожизненно на одном устройстве с постоянными обновлениями.', pv_25: '<strong data-i18n="pv_52">2 устройства / год:</strong> 8 долларов США - две лицензии для двух разных устройств.',
    pv_26: '<strong data-i18n="pv_53">3 устройства / год:</strong> 12 долларов США - три лицензии для 3 разных устройств.', pv_27: '<strong data-i18n="pv_54">2 устройства / 2 года:</strong> 25 долларов США - две лицензии для двух устройств на два года.', pv_28: '<strong data-i18n="pv_55">Vodafone Cash (Египет):</strong> Мгновенный перевод на кошелек.', pv_29: '<strong data-i18n="pv_56">Приложение Barq (Саудовская Аравия):</strong> Международный перевод в Саудовскую Аравию.',
    pv_30: '<strong data-i18n="pv_57">InstaPay (Египет):</strong> Прямой перевод из Египта.', pv_31: '<strong data-i18n="pv_58">Банковский перевод (саудовский IBAN):</strong> Через банк D360 FINTECH.', pv_32: '<strong data-i18n="pv_59">PayPal / Visa:</strong> Безопасная международная оплата картой.', pv_33: 'Скачайте программу бесплатно с нашего сайта.',
    pv_34: 'Выберите подходящий план на странице цен.', pv_35: 'Завершите оплату одним из доступных способов.', pv_36: 'Отправьте квитанцию об оплате через WhatsApp по ссылке для связи с нами.', pv_37: 'Вы получите код активации в течение нескольких минут (до 24 часов для банковских переводов).',
    pv_38: 'Введите код активации в программе, чтобы активировать все функции.', pv_39: 'Каждая лицензия действительна только для одного устройства (если это не лицензия на несколько устройств).', pv_40: 'Код активации нельзя передавать другим людям.', pv_41: 'Лицензия не подлежит передаче или перепродаже.',
    pv_42: 'При смене устройства свяжитесь с нами для бесплатного переноса лицензии.', pv_43: 'Бесплатные обновления доступны в течение действующего периода подписки.', pv_44: 'Свяжитесь с нами немедленно через WhatsApp или email.', pv_45: 'Подробно опишите проблему со скриншотом, если возможно.',
    pv_46: 'Наша служба поддержки решит вашу проблему как можно скорее (максимум в течение 24 часов).', pv_47: '🇸🇦 العربية', pv_48: 'Годовая подписка:', pv_49: 'Подписка на 2 года:',
    pv_50: 'Подписка на 3 года:', pv_51: 'Пожизненная подписка:', pv_52: '2 устройства / год:', pv_53: '3 устройства / год:',
    pv_54: '2 устройства / 2 года:', pv_55: 'Vodafone Cash (Египет):', pv_56: 'Приложение Barq (Саудовская Аравия):', pv_57: 'InstaPay (Египет):',
    pv_58: 'Банковский перевод (саудовский IBAN):', pv_59: 'PayPal / Visa:', pv_60: 'WhatsApp:', pv_61: 'Email:',
    pv_62: 'Политика Покупки - WA Sender | Способы Оплаты и Лицензии', rf_01: '1. Общая политика возврата', rf_02: '2. Случаи, дающие право на возврат', rf_03: '3. Случаи, не дающие право на возврат',
    rf_04: '4. Как запросить возврат', rf_05: '5. Обработка запроса на возврат', rf_06: '6. Альтернативы возврату', rf_07: '7. Важное примечание о блокировке WhatsApp',
    rf_08: '8. Часто задаваемые вопросы о возврате', rf_09: '9. Свяжитесь с нами', rf_10: '2.1 Полный возврат (гарантия 7 дней):', rf_11: '2.2 Частичный возврат:',
    rf_12: 'В: Могу ли я попробовать программу перед покупкой?', rf_13: 'В: Что делать, если программа не работает на моем устройстве?', rf_14: 'В: Могу ли я передумать после покупки пожизненной подписки?', rf_15: 'Последнее обновление: август 2026',
    rf_16: 'В WA Sender мы стремимся предоставлять высококачественный продукт и отличное обслуживание клиентов. Из-за цифровой природы нашего продукта (лицензионное ПО) наша политика возврата ограничена, но мы стремимся оправдать ожидания наших клиентов.', rf_17: '<strong data-i18n="rf_53">7 дней</strong> с даты покупки в следующих случаях:', rf_18: 'В некоторых случаях мы можем предложить частичный возврат в размере 50-70%:', rf_19: 'Возврат не может быть запрошен в следующих случаях:',
    rf_20: 'Чтобы запросить возврат, выполните следующие шаги:', rf_21: 'Вместо возврата средств мы можем предложить следующие альтернативы:', rf_22: '<strong data-i18n="rf_62">⚠️ Важное уведомление:</strong> Блокировка номера WhatsApp не является основанием для возврата средств. Мы предоставляем подробные рекомендации по защите от блокировки на странице «Обучение» и в самой программе. Пользователь несет ответственность за соблюдение этих рекомендаций и применение лучших практик. Мы настоятельно рекомендуем прочитать руководство по защите от блокировки перед использованием программы для отправки сообщений.', rf_23: 'О: Да! Вы можете скачать программу бесплатно и попробовать все функции. Оплата требуется только для активации лицензии.',
    rf_24: 'О: WA Sender требует Windows 10 или новее. Если ваше устройство совместимо, но программа все равно не работает, свяжитесь с нами, и мы поможем вам. Если мы не сможем решить проблему, вы можете запросить возврат средств в течение 7 дней.', rf_25: 'О: Да, вы можете запросить возврат в течение 7 дней с момента покупки, если не использовали лицензию. После этого мы не можем принимать запросы на возврат для пожизненных подписок.', rf_26: 'По вопросам политики возврата или для подачи запроса:', rf_27: 'Русский',
    rf_28: 'Если программа не работает на вашем устройстве, несмотря на помощь технической поддержки.', rf_29: 'Если есть серьезный технический дефект, препятствующий использованию всех основных функций.', rf_30: 'Если ваша лицензия не была активирована в течение 48 часов после оплаты (после обращения к нам).', rf_31: 'Если ваши потребности изменились после покупки подписки.',
    rf_32: 'Если вы обнаружили, что программа не соответствует вашим конкретным требованиям.', rf_33: 'В случае технических проблем, которые были частично решены.', rf_34: 'По истечении 14 дней с даты покупки.', rf_35: 'Если лицензия уже использовалась для отправки кампаний (даже пробных).',
    rf_36: 'В случае нарушения условий использования или политик WhatsApp/Meta.', rf_37: 'Если код активации был передан другим пользователям.', rf_38: 'Если запрос на возврат связан с блокировкой номера WhatsApp (см. рекомендации по защите от блокировки).', rf_39: 'Свяжитесь с нами через WhatsApp: <a href="https://wa.me/wasendernew" target="_blank">Связаться с нами</a>',
    rf_40: 'Или отправьте письмо на: <a href="mailto:support@wasendernew.com">support@wasendernew.com</a>', rf_41: 'Подробно укажите причину запроса на возврат.', rf_42: 'Приложите оригинал квитанции об оплате, если возможно.', rf_43: 'Опишите возникшую проблему (при наличии) со скриншотами.',
    rf_44: '<strong data-i18n="rf_54">Время рассмотрения:</strong> Мы рассмотрим ваш запрос в течение 48 рабочих часов.', rf_45: '<strong data-i18n="rf_55">Время обработки:</strong> В случае одобрения возврат будет обработан в течение 5-10 рабочих дней.', rf_46: '<strong data-i18n="rf_56">Способ возврата:</strong> Сумма будет возвращена тем же способом оплаты, который использовался изначально.', rf_47: '<strong data-i18n="rf_57">Подтверждение:</strong> Вы получите подтверждение по электронной почте после обработки возврата.',
    rf_48: '<strong data-i18n="rf_58">Продление подписки:</strong> Добавление бесплатного времени к вашей подписке.', rf_49: '<strong data-i18n="rf_59">Бесплатное обновление:</strong> Переход на более высокий план без доплаты за разницу в цене.', rf_50: '<strong data-i18n="rf_60">Перенос лицензии:</strong> Перенос лицензии на другое устройство, если текущее устройство несовместимо.', rf_51: '<strong data-i18n="rf_61">Дополнительная сессия обучения:</strong> Специальная сессия через WhatsApp для объяснения правильного использования программы.',
    rf_52: '🇸🇦 العربية', rf_53: '7 дней', rf_54: 'Время рассмотрения:', rf_55: 'Время обработки:',
    rf_56: 'Способ возврата:', rf_57: 'Подтверждение:', rf_58: 'Продление подписки:', rf_59: 'Бесплатное обновление:',
    rf_60: 'Перенос лицензии:', rf_61: 'Дополнительная сессия обучения:', rf_62: '⚠️ Важное уведомление:', rf_63: 'WhatsApp:',
    rf_64: 'Email:', rf_65: 'Политика Возврата - WA Sender | Условия Возврата', tm_01: '1. Принятие условий', tm_02: '2. Описание услуги',
    tm_03: '3. Требования к пользователям', tm_04: '4. Разрешенное использование', tm_05: '5. Запрещенное использование', tm_06: '6. Ответственность перед WhatsApp/Meta',
    tm_07: '7. Интеллектуальная собственность', tm_08: '8. Лицензия и использование', tm_09: '9. Отказ от ответственности', tm_10: '10. Ограничение ответственности',
    tm_11: '11. Возмещение убытков', tm_12: '12. Изменения условий', tm_13: '13. Применимое право', tm_14: '14. Свяжитесь с нами',
    tm_15: 'Последнее обновление: август 2026', tm_16: 'Используя сайт wasendernew.com или программу WA Sender, вы соглашаетесь соблюдать данные Условия использования. Если вы не согласны с любым из этих условий, пожалуйста, не используйте наши услуги.', tm_17: 'WA Sender - это программа для маркетинга через WhatsApp, предоставляющая инструменты для массовой рассылки сообщений, автоматизации и управления маркетинговыми кампаниями. Программа предназначена для личного и коммерческого использования в рамках законов и политик Meta/WhatsApp.', tm_18: 'Для использования WA Sender вы должны:',
    tm_19: 'Пользователь соглашается использовать WA Sender только для следующих целей:', tm_20: '<strong data-i18n="tm_64">Строго запрещено</strong> использовать программу для следующих целей:', tm_21: '<strong data-i18n="tm_65">⚠️ Важное уведомление:</strong> WA Sender не связан с Meta, WhatsApp, Facebook или любыми их дочерними компаниями. Использование данной программы может нарушать условия обслуживания WhatsApp. Вы единолично несете полную ответственность за любые последствия, возникающие в результате использования вами программы, включая, помимо прочего, блокировку вашего аккаунта WhatsApp или судебные иски против вас.', tm_22: 'Программа предоставляется «как есть» без каких-либо явных или подразумеваемых гарантий. Мы не гарантируем:',
    tm_23: 'В максимально допустимой степени наша общая ответственность не превысит сумму, уплаченную вами за лицензию. Мы не несем ответственности за:', tm_24: 'Вы соглашаетесь возместить и оградить от ответственности WA Sender, его команду, сотрудников и партнеров от любых претензий, убытков или ущерба (включая юридические расходы), возникающих в результате:', tm_25: 'Мы оставляем за собой право изменять данные условия в любое время. Изменения вступают в силу немедленно после публикации на сайте. Продолжение использования программы после изменений означает ваше согласие с ними.', tm_26: 'Данные условия регулируются и толкуются в соответствии с применимым законодательством. Любые споры, возникающие из данных условий, подлежат исключительной юрисдикции компетентных судов.',
    tm_27: 'По вопросам, касающимся данных условий:', tm_28: 'Русский', tm_29: 'Достигли совершеннолетия (18 лет или старше) в вашей стране.', tm_30: 'Обладаете правоспособностью для заключения обязывающего соглашения.',
    tm_31: 'Предоставляете точную и достоверную информацию при регистрации или покупке.', tm_32: 'Сохраняете конфиденциальность данных вашей учетной записи.', tm_33: 'Отправка законных маркетинговых сообщений на номера, давшие согласие.', tm_34: 'Профессиональное управление маркетинговыми кампаниями через WhatsApp.',
    tm_35: 'Автоматизация ответов на законные запросы клиентов.', tm_36: 'Извлечение общедоступных данных для законных маркетинговых целей.', tm_37: 'Отправка спама или нежелательных сообщений.', tm_38: 'Отправка вредоносного, мошеннического или незаконного контента.',
    tm_39: 'Нарушение конфиденциальности или прав других лиц.', tm_40: 'Попытки взлома или повреждения систем WhatsApp или Meta.', tm_41: 'Передача, продажа или распространение кода активации.', tm_42: 'Обратная разработка, изменение или копирование программы.',
    tm_43: 'Использование в любых целях, противоречащих условиям обслуживания WhatsApp/Meta.', tm_44: 'Все права на WA Sender принадлежат команде разработчиков.', tm_45: 'Программа защищена международными законами об авторском праве.', tm_46: 'Вы не имеете права копировать, изменять или распространять программу без явного письменного разрешения.',
    tm_47: 'Логотип, иконки и дизайн являются собственностью WA Sender.', tm_48: 'При покупке лицензии вы получаете личное, непередаваемое право на использование программы.', tm_49: 'Каждая лицензия действительна только для одного устройства (если это не лицензия на несколько устройств).', tm_50: 'Лицензия не может быть сдана в аренду, передана во временное пользование или продана третьим лицам.',
    tm_51: 'Мы оставляем за собой право аннулировать лицензию в случае нарушения данных условий.', tm_52: 'Что программа будет работать без перебоев или ошибок.', tm_53: 'Что результаты использования программы оправдают ваши ожидания.', tm_54: 'Что использование программы не приведет к блокировке вашего номера WhatsApp.',
    tm_55: 'Что все функции будут постоянно доступны.', tm_56: 'Любой прямой, косвенный, случайный или косвенный ущерб, возникший в результате использования или невозможности использования программы.', tm_57: 'Потерю данных, прибыли или деловых возможностей.', tm_58: 'Блокировку вашего аккаунта в WhatsApp или любой другой платформе.',
    tm_59: 'Любые судебные иски третьих лиц против вас.', tm_60: 'Ваше использование программы.', tm_61: 'Ваше нарушение данных условий.', tm_62: 'Ваше нарушение прав третьих лиц.',
    tm_63: '🇸🇦 العربية', tm_64: 'Строго запрещено', tm_65: '⚠️ Важное уведомление:', tm_66: 'WhatsApp:',
    tm_67: 'Email:', tm_68: 'Условия и Положения - WA Sender | Условия Использования',
    contact_label: 'Контакты', contact_sub: 'Мы готовы помочь. Свяжитесь с нами через каналы ниже, и мы ответим как можно скорее', ct1_title: 'WhatsApp', ct1_desc: 'Для мгновенной поддержки, активации и быстрых вопросов',
    ct2_title: 'Email', ct2_desc: 'Для подробных запросов и расширенной технической поддержки', ct3_title: 'Часы работы', ct3_desc: 'Доступно в официальные рабочие часы',
    ct3_hours: '9:00 – 22:00 (время Каира)', cf_title: 'Отправить сообщение', cf_desc: 'Заполните форму ниже, и мы свяжемся с вами как можно скорее', cf_subject_ph: 'Выберите тему сообщения',
    cf_opt1: 'Общий вопрос', cf_opt2: 'Техническая поддержка', cf_opt3: 'Проблема с оплатой', cf_opt4: 'Запрос лицензии',
    cf_msg: 'Ваше сообщение', cf_send: 'Отправить сообщение', faq_sub: 'Возможно, вы найдете ответ в наших часто задаваемых вопросах', cf_name_ph: 'Введите ваше полное имя',
    cf_msg_ph: 'Напишите ваше сообщение здесь подробно...',
    ft_06: 'Функции WA Sender v5.0.7 - более 15 профессиональных инструментов | WA Sender', ft_01: 'Бесплатная Загрузка', ft_02: 'Русский', ft_03: '📊 Маркетинговые данные',
    ft_04: '📊 Маркетинговые данные', ft_05: '🇸🇦 العربية', feat_label: 'Функции', feat_title: 'Основные функции WA Sender v5.0.7',
    feat_sub: 'Более 15 профессиональных инструментов в одной программе для удовлетворения всех ваших потребностей в WhatsApp-маркетинге', feat_msg_tools: '📨 Инструменты сообщений и отправки', feat_extract_tools: '🔍 Инструменты извлечения данных', feat_mgmt_tools: '🛡️ Управление и защита',
    cta_ready: 'Готовы попробовать все эти функции?', cta_desc: 'Скачайте программу бесплатно и начните использовать все инструменты мгновенно', btn_subscribe: '💳 Подписаться сейчас', tut_15: 'Обучение WA Sender - пошаговые видео | WA Sender',
    tut_01: 'Бесплатная Загрузка', tut_03: '📊 Маркетинговые данные', tut_02: 'Русский', tut_04: '🇸🇦 العربية',
    tut_05: 'Льготный период:', tut_06: 'Естественное взаимодействие:', tut_07: 'Временные интервалы:', tut_08: 'Максимальный лимит:',
    tut_09: 'Периоды отдыха:', tut_10: 'Предварительная регистрация:', tut_11: 'Синхронизация:', tut_12: 'Личные сообщения:',
    tut_13: 'Опция отказа:', tut_14: 'Полезный контент:', cta_desc_tutorial: 'Скачайте программу бесплатно и начните свой путь в WhatsApp-маркетинге', crm_22: 'WA CRM - Программа управления взаимоотношениями с клиентами через WhatsApp | WA Sender',
    crm_02: 'Скачать WA CRM', crm_08: '📊 Маркетинговые данные', crm_03: 'Русский', crm_21: '🇸🇦 العربية',
    wacrm_badge: '✨ Новинка', wacrm_hero_title: 'WA CRM<br/>Управление взаимоотношениями с клиентами через WhatsApp', wacrm_hero_sub: 'Комплексная система для управления клиентами, организации разговоров в WhatsApp и эффективного отслеживания продаж', wacrm_download: 'Бесплатная Загрузка',
    wacrm_buy: 'Купить - $20/год', crm_04: 'Функции', wacrm_desc: 'Мощные инструменты для профессионального управления отношениями с клиентами', crm_05: 'Шаги',
    wacrm_how_title: 'Как работает WA CRM?', wacrm_how_sub: 'Три простых шага для профессионального управления клиентами', wacrm_step1_title: 'Скачайте программу', wacrm_step1_desc: 'Скачайте WA CRM бесплатно и установите его на своё устройство простыми шагами.',
    wacrm_step2_title: 'Подпишитесь и активируйте', wacrm_step2_desc: 'Годовая подписка всего за $20, и вы мгновенно получите код активации.', wacrm_step3_title: 'Начните управление', wacrm_step3_desc: 'Введите данные ваших клиентов и начните профессионально управлять отношениями с ними.',
    crm_06: 'Цены', wacrm_price_title: 'Один комплексный план', crm_01: 'Всё необходимое для управления клиентами по невероятной цене', wacrm_price_amount: '20',
    wacrm_price_period: '/ год', wacrm_price_feat1: 'Все доступные функции', wacrm_price_feat2: 'Постоянные бесплатные обновления', wacrm_price_feat3: 'Прямая техподдержка 24/7',
    wacrm_price_feat4: 'Лицензия на одно устройство', crm_09: '💳 Купить - $20', wacrm_cta_ready: 'Готовы профессионально управлять клиентами?', wacrm_cta_desc: 'Скачайте WA CRM сейчас и начните организовывать отношения с клиентами уже сегодня',
    crm_10: 'Главная', crm_11: 'Маркетинговые данные', crm_12: 'Обучение', crm_13: 'Функции',
    crm_14: 'Цены', crm_15: 'Политика конфиденциальности', crm_16: 'Политика покупки', crm_17: 'Политика возврата',
    crm_18: 'Условия и положения', crm_19: 'Связаться с нами', crm_20: 'WhatsApp', crm_07: 'Данные',
    wd_62: 'WaDefender - Анализатор надежности аккаунта WhatsApp | Скачать + Подписаться', wd_31: 'Бесплатная Загрузка', wd_38: '📊 Маркетинговые данные', wd_32: 'Русский',
    wd_59: '🇸🇦 العربية', wd_63: '🛡️ Инструмент продвинутой защиты', wd_01: '<span>WaDefender</span><br/>Анализатор надежности аккаунта WhatsApp', wd_17: 'Профессиональный инструмент для сканирования и анализа надежности вашего аккаунта WhatsApp, выявления слабых мест и укрепления защиты от блокировки. Скачайте бесплатно и активируйте по доступной годовой подписке.',
    wd_39: '⬇️ Бесплатная Загрузка', wd_40: '💳 Подписаться - $5/год', wd_33: 'Функции', wd_02: 'Почему WaDefender?',
    wd_18: 'Продвинутые инструменты для защиты и улучшения работы вашего аккаунта WhatsApp', wd_07: 'Анализ надежности аккаунта', wd_19: 'Комплексное сканирование состояния вашего аккаунта WhatsApp с подробным отчётом о сильных и слабых сторонах и рекомендациями по улучшению.', wd_08: 'Проверка состояния номеров',
    wd_20: 'Проверка активности номеров WhatsApp с высокой точностью определения — зарегистрированы ли они, заблокированы или не существуют.', wd_09: 'Защита от блокировки', wd_21: 'Оценка риска блокировки вашего аккаунта и получение превентивных мер для защиты номера WhatsApp.', wd_10: 'Подробные отчёты',
    wd_22: 'Комплексные, актуальные отчёты о состоянии вашего аккаунта, включая дату регистрации, уровень доверия и активность аккаунта.', wd_11: 'Сверхвысокая скорость', wd_23: 'Быстрый механизм анализа, работающий с высокой эффективностью для сканирования сотен номеров в рекордно короткие сроки без задержек.', wd_12: 'Постоянные обновления',
    wd_24: 'Регулярные обновления, чтобы идти в ногу с последними изменениями WhatsApp и обеспечивать точность результатов и производительность программы.', wd_34: 'Как это работает', wd_03: 'Начните за 3 простых шага', wd_25: 'Легко использовать, без технического опыта',
    wd_14: 'Скачайте программу', wd_26: 'Скачайте WaDefender бесплатно с сайта и установите на своё устройство простыми и быстрыми шагами.', wd_15: 'Подпишитесь и активируйте', wd_27: 'Подпишитесь всего за $5 на весь год и получите код активации сразу после оплаты.',
    wd_16: 'Начните анализ', wd_28: 'Введите код активации и начните мгновенно и легко сканировать и анализировать свой аккаунт и номера.', wd_35: 'Цены', wd_04: 'Годовая подписка по специальной цене',
    wd_29: 'Все функции доступны по непревзойденной цене', wd_13: 'Годовой план', wd_36: '/ год', wd_53: '✅ Неограниченный анализ аккаунтов',
    wd_54: '✅ Неограниченная проверка состояния номеров', wd_55: '✅ Подробные комплексные отчёты', wd_56: '✅ Бесплатные обновления в течение года', wd_57: '✅ Прямая техподдержка 24/7',
    wd_58: '✅ Лицензия на одно устройство', wd_41: '💳 Купить через PayPal', wd_64: '<strong data-i18n="wd_60">Сканируйте QR для оплаты</strong>\n              с помощью телефона или приложения PayPal<br/>\n<small data-i18n="wd_61" style="color:var(--text-muted)">Сумма: $5/год</small>', wd_60: 'Сканируйте QR для оплаты',
    wd_61: 'Сумма: $5/год', wd_37: 'Статистика', wd_05: 'Номера, доверяющие WaDefender', wd_65: 'активных пользователей',
    wd_66: 'проверенных номеров', wd_67: 'точность результатов', wd_68: 'техподдержка', wd_06: 'Готовы защитить свой аккаунт WhatsApp?',
    wd_30: 'Скачайте WaDefender сейчас и начните анализировать и защищать свой аккаунт от риска блокировки', wd_42: '⬇️ Бесплатная Загрузка', wd_43: '💳 Подписаться - $5', wd_44: 'Главная',
    wd_45: 'Маркетинговые данные', wd_46: 'Цены', wd_47: 'Политика конфиденциальности', wd_48: 'Условия и положения',
    wd_49: 'Политика возврата', wd_50: 'Политика покупки', wd_51: 'Связаться с нами', wd_52: 'WhatsApp',
    idx_53: 'WA Sender - скачать программу для рассылок WhatsApp + активация и цены', idx_39: 'Установить', idx_22: '📊 Маркетинговые данные', idx_07: 'Русский',
    idx_40: '🇸🇦 العربية', badge_new: 'Новая версия 5.0.7', hero_sub: 'Полноценная программа для WhatsApp-маркетинга с 15+ мощными инструментами для массовых рассылок, автоматизации и генерации лидов', btn_buy: 'Купить сейчас',
    warn_title: 'Важно: политика Meta/WhatsApp против спама', warn_p1: 'Meta (компания-владелец WhatsApp) вводит строгие ограничения на массовые и нежелательные рассылки.', warn_p2: 'Аккаунты, нарушающие условия использования WhatsApp, могут быть заблокированы временно или навсегда.', warn_p3: 'WA Sender включает функции безопасности, помогающие соблюдать политики Meta, но использовать его нужно ответственно.',
    warn_p5: 'Примечание: убедитесь, что Windows Defender или ваша антивирусная программа настроены на разрешение установки программы.', how_label: 'Обучение', how_sub: 'Полное видеоруководство по установке программы, активации лицензии и использованию основных инструментов шаг за шагом', how_badge: 'Полное видеоруководство',
    how_caption: '▶ Плейлист из 10 обучающих видео, которые воспроизводятся прямо на сайте без перехода на YouTube', steps_title: 'Как активировать за 4 простых шага', step1_title: 'Скачайте программу', step1_desc: 'Скачайте файл WA Sender с помощью кнопки бесплатной загрузки и установите его на своё устройство простыми шагами.',
    step2_title: 'Выберите план и оплатите', step2_desc: 'Выберите подходящий план в разделе цен и завершите оплату любым доступным способом.', step3_title: 'Отправьте квитанцию об оплате', step3_desc: 'Отправьте скриншот квитанции об оплате через WhatsApp, и вы мгновенно получите код активации.',
    step4_title: 'Активируйте и начните отправку', step4_desc: 'Введите код активации в программе и мгновенно начните пользоваться всеми инструментами.', guide_label: 'Советы по безопасности', guide_title: 'Рекомендации по защите от блокировки WhatsApp',
    guide_sub: 'Чтобы ваши маркетинговые кампании продолжались без потери номеров, следуйте этим шагам:', g1_title: '1. Разогрев номера', g1_li1: '<strong data-i18n="idx_41">Льготный период:</strong> Если номер новый, подождите 20-30 дней перед началом любой кампании.', idx_41: 'Льготный период:',
    g1_li2: '<strong data-i18n="idx_42">Естественное взаимодействие:</strong> Используйте номер в повседневных личных беседах и вступайте в группы, чтобы показать WhatsApp естественную активность.', idx_42: 'Естественное взаимодействие:', g2_title: '2. Умный тайминг', g2_li1: '<strong data-i18n="idx_43">Временные интервалы:</strong> Оставляйте промежуток 20-30 секунд между сообщениями.',
    idx_43: 'Временные интервалы:', g2_li2: '<strong data-i18n="idx_44">Максимальный лимит:</strong> Отправляйте не более 200-300 сообщений в час.', idx_44: 'Максимальный лимит:', g2_li3: '<strong data-i18n="idx_45">Периоды отдыха:</strong> Периодически приостанавливайте кампанию и делайте перерывы, чтобы не быть помеченным как "спам".',
    idx_45: 'Периоды отдыха:', g3_title: '3. Управление контактами', g3_li1: '<strong data-i18n="idx_46">Предварительная регистрация:</strong> Сохраните номера как минимум за 24 часа до отправки.', idx_46: 'Предварительная регистрация:',
    g3_li2: '<strong data-i18n="idx_47">Синхронизация:</strong> Используйте Google Contacts, чтобы убедиться в правильности форматирования номеров, и постоянно обновляйте список.', idx_47: 'Синхронизация:', g4_title: '4. Стратегия содержания сообщений', g4_li1: '<strong data-i18n="idx_48">Личные сообщения:</strong> Избегайте копипаста и старайтесь персонализировать каждое сообщение под имя или интерес получателя.',
    idx_48: 'Личные сообщения:', g4_li2: '<strong data-i18n="idx_49">Опция отказа:</strong> Обязательно давайте клиенту возможность отказаться от получения сообщений, чтобы он не пожаловался на вас.', idx_49: 'Опция отказа:', g4_li3: '<strong data-i18n="idx_50">Полезный контент:</strong> Избегайте всего, что выглядит как "спам", и уважайте конфиденциальность и пожелания клиента.',
    idx_50: 'Полезный контент:', view_all_features: 'Все функции ←', idx_08: '🔥 Специальное предложение', idx_01: 'Профессиональные базы данных для WhatsApp-маркетинга',
    idx_04: 'Более 84 миллионов классифицированных саудовских и египетских номеров, готовых для ваших маркетинговых кампаний', idx_09: 'Саудовский номер', idx_10: 'Египетский номер', idx_23: '📦 Просмотреть доступные данные',
    idx_11: '✨ Новинка', idx_02: 'WA CRM - Управление взаимоотношениями с клиентами через WhatsApp', idx_05: 'Комплексная система для управления клиентами, организации разговоров в WhatsApp и эффективного отслеживания продаж', idx_12: 'Управление клиентами',
    idx_13: 'Отслеживание разговоров', idx_14: '/год', idx_15: 'Специальная цена', idx_24: '🟢 Узнать больше о WA CRM',
    idx_25: '⬇️ Бесплатная Загрузка', idx_16: '🛡️ Продвинутая защита', idx_03: 'WaDefender - Анализатор надежности аккаунта WhatsApp', idx_06: 'Просканируйте свой аккаунт, найдите слабые места и укрепите защиту от риска блокировки заранее',
    idx_17: 'проверенных номеров', idx_18: 'точность результатов', idx_19: '/год', idx_20: 'доступная цена',
    idx_26: '🛡️ Узнать больше о WaDefender', idx_27: '⬇️ Бесплатная Загрузка', idx_54: '<strong data-i18n="idx_51">📱 Сканируйте для быстрой оплаты</strong>Оплатите $5 напрямую через PayPal', idx_51: '📱 Сканируйте для быстрой оплаты',
    idx_55: '<strong data-i18n="idx_52">📱 Сканируйте для быстрой оплаты</strong>Оплатите $50 напрямую через PayPal', idx_52: '📱 Сканируйте для быстрой оплаты', view_all_plans: 'Все планы ←', idx_28: 'Главная',
    idx_29: 'Маркетинговые данные', idx_30: 'Обучение', idx_31: 'Функции', idx_32: 'Цены',
    idx_33: 'Политика конфиденциальности', idx_34: 'Политика покупки', idx_35: 'Политика возврата', idx_36: 'Условия и положения',
    idx_37: 'Связаться с нами', idx_38: 'WhatsApp', idx_21: 'Данные', md_119: 'Базы данных номеров для маркетинга | Саудовская Аравия, Египет, Кувейт и ОАЭ - WA Sender',
    md_85: 'Главная', md_86: '📊 Маркетинговые данные', md_87: 'Обучение', md_88: 'Функции',
    md_89: 'Цены', md_90: 'Связаться с нами', md_39: 'Русский', md_105: '🇸🇦 العربية',
    md_120: '🎯 Оптимальное решение для цифрового маркетинга и роста продаж', md_01: 'Готовые списки клиентов и контактов<br/>для WhatsApp-маркетинга', md_20: 'Мы предоставляем точные маркетинговые сегменты и готовые списки, чтобы помочь вашему бизнесу легко и эффективно достичь целевой аудитории.', md_40: 'Список Саудовской Аравии',
    md_41: 'Список Египта', md_42: 'Список Кувейта', md_43: 'Список ОАЭ', md_44: '📦 Доступные сегменты и пакеты',
    md_02: 'Выберите подходящую базу данных для вашего бизнеса', md_21: 'Тщательно организованные и отфильтрованные данные, экономящие ваше время и усилия для охвата заинтересованных клиентов', md_08: 'База данных Саудовской Аравии', md_45: 'млн записей',
    md_46: 'Охватывает всё Королевство Саудовская Аравия (13 регионов)', md_47: 'Данные обновлены за последние 5 лет', md_48: 'Классифицировано по профессии и специализации', md_49: 'Классифицировано по городу и региону',
    md_50: 'Файлы Excel (.xlsx) и TXT', md_22: '<strong data-i18n="md_109">Примечание:</strong> Некоторые номера могут меняться со временем из-за постоянных обновлений.', md_109: 'Примечание:', md_121: '<strong data-i18n="md_110">📱 Сканируйте для быстрой оплаты</strong>Оплатите $110 напрямую через PayPal',
    md_110: '📱 Сканируйте для быстрой оплаты', md_91: '💳 Купить сейчас - $110 USD', md_51: '📁 Мгновенная доставка через Google Drive', md_09: 'База данных Египта',
    md_52: 'млн записей', md_53: 'Охватывает всю Арабскую Республику Египет (27 губернаторств)', md_54: 'Данные обновлены за последние 3 года', md_55: 'Классифицировано по профессии и специализации',
    md_56: 'Классифицировано по губернаторствам', md_57: 'Файлы Excel (.xlsx) и TXT', md_23: '<strong data-i18n="md_111">Примечание:</strong> Некоторые номера могут меняться со временем из-за постоянных обновлений.', md_111: 'Примечание:',
    md_122: '<strong data-i18n="md_112">📱 Сканируйте для быстрой оплаты</strong>Оплатите $12 напрямую через PayPal', md_112: '📱 Сканируйте для быстрой оплаты', md_92: '💳 Купить сейчас - $12 USD', md_58: '📁 Мгновенная доставка через Google Drive',
    md_10: 'База данных Кувейта', md_59: 'млн номеров', md_60: 'Очень организованные и профессиональные данные', md_61: 'Губернаторства точно упорядочены и организованы',
    md_62: 'Включены имена клиентов для персонализации сообщений', md_63: 'Большой и всеобъемлющий охват различных сегментов', md_64: 'Файлы Excel (.xlsx) и TXT', md_24: '<strong data-i18n="md_113">Примечание:</strong> Организованные, подробные данные по губернаторствам Кувейта для облегчения таргетинга.',
    md_113: 'Примечание:', md_123: '<strong data-i18n="md_114">📱 Сканируйте для быстрой оплаты</strong>Оплатите $25 напрямую через PayPal', md_114: '📱 Сканируйте для быстрой оплаты', md_93: '💳 Купить сейчас - $25 USD',
    md_65: '📁 Мгновенная доставка через Google Drive', md_11: 'База данных ОАЭ', md_66: 'млн номеров', md_67: 'Реальные, целевые граждане',
    md_68: 'Серьёзные клиенты, готовые покупать и взаимодействовать', md_69: 'Сегмент с очень хорошим финансовым положением', md_70: 'Очень организовано и готово к импорту', md_71: 'Файлы Excel (.xlsx) и TXT',
    md_25: '<strong data-i18n="md_115">Примечание:</strong> Отличные данные для бизнеса, ориентированного на сегмент с высокой покупательной способностью.', md_115: 'Примечание:', md_124: '<strong data-i18n="md_116">📱 Сканируйте для быстрой оплаты</strong>Оплатите $15 напрямую через PayPal', md_116: '📱 Сканируйте для быстрой оплаты',
    md_94: '💳 Купить сейчас - $15 USD', md_72: '📁 Мгновенная доставка через Google Drive', md_12: 'Объединённая база данных стран Персидского залива (комплексный пакет)', md_125: 'Охватывает <span data-i18n="md_73">7 арабских и стран Персидского залива</span>',
    md_73: '7 арабских и стран Персидского залива', md_74: 'Королевство Саудовская Аравия (34М+)', md_75: 'Объединённые Арабские Эмираты (1М+)', md_76: 'Государство Кувейт (2М+)',
    md_77: 'Иорданское Хашимитское Королевство', md_78: 'Республика Ирак', md_79: 'Государство Катар', md_80: 'Республика Ливан',
    md_26: '<strong data-i18n="md_117">Примечание:</strong> Комплексный пакет, объединяющий базы данных нескольких крупных арабских и стран Персидского залива по сниженной цене с высокой маркетинговой ценностью.', md_117: 'Примечание:', md_126: '<strong data-i18n="md_118">📱 Сканируйте для быстрой оплаты</strong>Оплатите $250 напрямую через PayPal', md_118: '📱 Сканируйте для быстрой оплаты',
    md_95: '💳 Купить комплексный пакет - $250 USD', md_81: '📁 Мгновенная доставка через Google Drive', md_82: '💡 Почему WhatsApp-маркетинг?', md_03: 'Сила прямых маркетинговых каналов',
    md_27: 'Узнайте, почему маркетинг через WhatsApp достигает самых высоких показателей вовлечённости и окупаемости инвестиций', md_13: 'Очень высокий процент прочтения', md_28: 'Сообщения WhatsApp читаются с показателями, превышающими традиционные методы, гарантируя, что ваше маркетинговое сообщение достигнет клиентов напрямую.', md_14: 'Взаимодействие и скорость отклика',
    md_29: 'WhatsApp позволяет открыть прямые и быстрые каналы связи с потенциальными клиентами для ответа на их вопросы и заключения сделок.', md_15: 'Организованный и профессиональный таргетинг', md_30: 'Использование готовых и классифицированных списков позволяет точно адаптировать ваши предложения к интересам целевого сегмента.', md_04: 'Самая большая проблема в построении маркетинговых кампаний',
    md_31: 'Каждый успешный маркетолог знает, что успех любой кампании в WhatsApp во многом зависит от качества и надёжности используемого списка клиентов.<br/>Вместо того чтобы тратить недели на ручной сбор и очистку данных, мы избавляем вас от всех этих усилий.', md_16: '✅ Профессиональное решение, готовое в ваших руках', md_32: 'Выберите пакет или страну, на которую вы нацелены, и получите файлы, организованные и готовые к работе и импорту в ваше маркетинговое ПО мгновенно.', md_05: 'Как получить файлы',
    md_33: 'После завершения оплаты вам будет предоставлена прямая ссылка для скачивания через <strong>Google Drive</strong>, содержащая все списки в форматах <strong>Excel (.xlsx)</strong> и <strong>TXT</strong>.', md_83: '❓ Часто задаваемые вопросы', md_06: 'Ответы на ваши вопросы', md_106: 'Какие форматы файлов я получу?<span>+</span>',
    md_34: 'Файлы доступны в форматах Excel (.xlsx) и TXT для полной совместимости с программами отправки и импорта.', md_107: 'Как получить файлы после оплаты?<span>+</span>', md_35: 'Ссылка для скачивания с Google Drive отправляется мгновенно и безопасно сразу после завершения оплаты.', md_108: 'Данные организованы и классифицированы?<span>+</span>',
    md_36: 'Да, списки тщательно организованы и распределены по губернаторствам и географическим регионам для облегчения таргетинга.', md_07: 'Развивайте свою маркетинговую кампанию уже сегодня!', md_37: 'Выберите пакет, подходящий для вашего бизнеса, и начните охватывать целевую аудиторию', md_96: '🇸🇦 Данные Саудовской Аравии - $110',
    md_97: '🇪🇬 Данные Египта - $12', md_98: '🇰🇼 Данные Кувейта - $25', md_38: 'Профессиональные инструменты и программное обеспечение для развития маркетинговых кампаний и увеличения продаж.', md_17: 'Быстрые ссылки',
    md_99: 'Главная', md_100: 'Маркетинговые данные', md_101: 'Цены', md_18: 'Юридическая информация',
    md_102: 'Политика конфиденциальности', md_103: 'Условия и положения', md_19: 'Поддержка', md_104: 'Связаться с нами',
    md_84: '© 2026 WA Sender. Все права защищены.',
    local_yearly_egp: '≈ 250 EGP', local_saver_egp: '≈ 750 EGP', local_ultimate_egp: '≈ 1000 EGP', local_lifetime_egp: '≈ 2500 EGP',
    pm_paypal: 'PayPal - Карты', pm_paypal_desc: 'Безопасная оплата PayPal/Visa/MasterCard',
    pm_bank: 'Банковский Перевод', pm_bank_desc: 'Прямой перевод на D360 Bank',
    pm_vodafone: 'Vodafone Cash', pm_vodafone_desc: 'Оплата через Vodafone Cash Египет',
    pm_instapay: 'InstaPay', pm_instapay_desc: 'Лёгкая оплата InstaPay',
    contact_title: 'Связаться с Нами', contact_subtitle: 'Мы рады помочь!',
    cf_name: 'Полное Имя', cf_email: 'Email', cf_phone: 'Телефон',
    cf_subject: 'Тема', cf_message: 'Сообщение', cf_submit: 'Отправить',
    cf_success: 'Сообщение отправлено!', cf_error: 'Ошибка. Попробуйте снова.',
    ct_whatsapp_title: 'WhatsApp', ct_whatsapp_desc: 'Прямая связь для быстрого ответа',
    ct_email_title: 'Email', ct_email_desc: 'Ответ в течение 24 часов',
    ct_hours_title: 'Часы Работы', ct_hours_desc: 'Воскресенье - Четверг: 9-18',
    pp01: 'Политика Конфиденциальности', pp02: 'Обновлено: Январь 2025',
    pp03: 'В WA Sender мы защищаем вашу конфиденциальность.',
    pp04: '1. Собираемые Данные', pp05: 'Мы собираем:',
    pp06: '• Контакты', pp07: '• Платёжные данные', pp08: '• Техническое использование', pp09: '• Cookies',
    pp10: '2. Использование', pp11: 'Для:', pp12: '• Сервисы/поддержка', pp13: '• Платежи',
    pp14: '• Улучшения', pp15: '• Уведомления', pp16: '• Законность',
    pp17: '3. Защита', pp18: 'Меры:', pp19: '• Шифрование', pp20: '• Ограниченный доступ',
    pp21: '• Обновления безопасности', pp22: '• Без хранения карт',
    pp23: '4. Передача', pp24: 'Кроме:', pp25: '• Платёжные системы', pp26: '• Закон', pp27: '• Согласие',
    pp28: '5. Ваши Права', pp29: 'У вас есть:', pp30: '• Доступ', pp31: '• Исправление', pp32: '• Удаление',
    pp33: '• Отзыв согласия', pp34: '• Жалобы',
    pp35: '6. Cookies', pp36: 'Для:', pp37: '• Настройки', pp38: '• Аналитика', pp39: '• UX',
    pp40: '7. Изменения', pp41: 'Обновления публикуются здесь.',
    pp42: '8. Контакт', pp43: 'support@wasendernew.com | +201279934735',
    rf01: 'Политика Покупки', rf02: 'Обновлено: Январь 2025',
    rf03: 'Внимательно прочитайте перед покупкой.',
    rf04: '1. Продукты', rf05: 'Планы:', rf06: '• Годовой', rf07: '• 2 Года', rf08: '• 3 Года',
    rf09: '• Пожизненный', rf10: '• Мультиустройства',
    rf11: '2. Цены', rf12: 'USD, возможны налоги.',
    rf13: '3. Оплата', rf14: 'Принимаем:', rf15: '• PayPal', rf16: '• Перевод',
    rf17: '• Vodafone Cash', rf18: '• InstaPay',
    rf19: '4. Покупка', rf20: 'После:', rf21: '• Подтверждение email', rf22: '• Лицензия 24ч',
    rf23: '• Проверьте контакты',
    rf24: '5. Активация', rf25: '• Уникальный ключ', rf26: '• Ввести в программу', rf27: '• Привязка к устройству',
    rf28: '6. Продление', rf29: '• Нет автопродления', rf30: '• Напоминание 7д', rf31: '• Ручное',
    rf32: '7. Передача', rf33: '• Нет во время подписки', rf34: '• Свяжитесь с поддержкой',
    rf35: '8. Предложения', rf36: '• Акции', rf37: '• Не суммируются',
    rf38: '• Цены изменяемы',
    rf39: '9. Условия', rf40: '• Покупка = принятие', rf41: '• Право отмены',
    rf42: '• Цены могут меняться',
    rf43: '10. Контакт', rf44: '+201279934735 | support@wasendernew.com',
    tm01: 'Политика Возврата', tm02: 'Обновлено: Январь 2025',
    tm03: 'Стремимся к удовлетворённости.',
    tm04: '1. Общие', tm05: 'Цифровой характер:',
    tm06: '• 7 дней', tm07: '< 100 сообщений', tm08: '• Действительная причина',
    tm09: '2. Принимаемые', tm10: 'Возврат при:',
    tm11: '• Тех проблема (5д)', tm12: '• Несовместимость', tm13: '• Критическая ошибка',
    tm14: '• Двойная оплата',
    tm15: '3. Непринимаемые', tm16: 'Нет возврата:',
    tm17: '• После 7д', tm18: '• Ошибка пользователя', tm19: '• Бан WhatsApp',
    tm20: '• Несанкционированная покупка',
    tm21: '4. Процесс', tm22: 'Запросить:',
    tm23: '• Свяжитесь', tm24: '• Номер заказа', tm25: 'Опишите проблему',
    tm26: '• 3-5 дней рассмотрение',
    tm27: '5. Сроки', tm28: '• Карты: 5-10д', tm29: '• PayPal: 3-5д', tm30: '• Перевод: 7-14д',
    tm31: '6. Альтернативы', tm32: 'Предлагаем:', tm33: '• Бесплатное продление', tm34: '• Апгрейд',
    tm35: '• Техподдержка',
    tm36: '7. Споры', tm37: '• Сначала свяжитесь', tm38: '• Спор как последний вариант',
    tm39: '• Злонамеренный = бан',
    tm40: '8. Исключения', tm41: '• Чрезвычайные гибко', tm42: '• Постоянные привилегии',
    tm43: '• Индивидуально',
    pv01: 'Условия', pv02: 'Обновлено: Январь 2025',
    pv03: 'Добро пожаловать. Использование = принятие.',
    pv04: '1. Принятие', pv05: 'Использование = полное принятие.',
    pv06: '2. Сервис', pv07: 'Инструменты:', pv08: '• Массовая рассылка', pv09: '• Извлечение',
    pv10: '• Кампании', pv11: '• Автоматизация',
    pv12: '3. Обязательства', pv13: 'Вы должны:', pv14: '• Законное использование', pv15: '• Без спама',
    pv16: '• Уважение приватности', pv17: '• Без взлома', pv18: '• Соблюдение WhatsApp ToS',
    pv19: '4. Интеллектуальная Собственность', pv20: '• Права WA Sender', pv21: '• Личное использование',
    pv22: '• Без копирования/распространения', pv23: '• Товарные знаки владельцам',
    pv24: '5. Ответственность', pv25: 'Вы отвечаете за:', pv26: '• Контент', pv27: '• Законность',
    pv28: '• Безопасность аккаунта', pv29: '• Ущерб от неправильного использования',
    pv30: '6. Ограничение', pv31: '• "Как есть"', pv32: '• Не отвечаем за баны',
    pv33: '• Максимум = уплаченная сумма', pv34: '• Без косвенного ущерба',
    pv31: '7. Расторжение', pv36: 'Если:', pv37: '• Нарушение', pv38: '• Незаконное использование',
    pv39: '• Мошенничество', pv40: '• Ущерб репутации',
    pv41: '8. Изменения', pv42: 'Изменяемы; уведомление о крупных изменениях.',
    pv43: '9. Закон', pv44: 'Применимое право; арбитраж споров.',
    pv45: '10. Контакт', pv46: 'legal@wasendernew.com | +201279934735',
    wd_title: 'WaDefender - Защита Аккаунта WhatsApp',
    wd_subtitle: 'Защитите аккаунт от блокировок',
    wd_hero_desc: 'WaDefender специализируется на защите от блокировок и приостановок.',
    wd_feature1_title: 'Мониторинг Поведения', wd_feature1_desc: 'Отслеживание деятельности опасное поведение.',
    wd_feature2_title: 'Ранние Предупреждения', wd_feature2_desc: 'Мгновенные оповещения подозрительная активность.',
    wd_feature3_title: 'Управление Ставкой', wd_feature3_desc: 'Умный контроль дневных лимитов.',
    wd_feature4_title: 'Проверка Качества', wd_feature4_desc: 'Проверка номеров до отправки избегать жалоб.',
    wd_feature5_title: 'Безопасное Планирование', wd_feature5_desc: 'Распределение безопасными интервалами естественное поведение.',
    wd_feature6_title: 'Отчёты Защиты', wd_feature6_desc: 'Детальные отчёты статус защиты рекомендации.',
    wd_btn_download: 'Скачать WaDefender', wd_price: '$15/год', wd_note: 'Работает с WA Sender',
    md_title: 'Маркетинговые Данные', md_subtitle: 'Извлечение данных клиентов из источников',
    md_hero_desc: 'Извлекайте телефоны email адреса бизнеса Google Maps сайты.',
    md_feature1_title: 'Google Maps', md_feature1_desc: 'Поиск бизнеса город извлечение контактов.',
    md_feature2_title: 'Сайты', md_feature2_desc: 'Извлечение номеров сайтов URL ключевые слова.',
    md_feature3_title: 'Расширенная Фильтрация', md_feature3_desc: 'Фильтр тип бизнеса рейтинг.',
    md_feature4_title: 'Мультиформат Экспорт', md_feature4_desc: 'Экспорт CSV Excel JSON.',
    md_feature5_title: 'Поиск Ключевых Слов', md_feature5_desc: 'Поиск множественные ключевые слова.',
    md_feature6_title: 'Автообновление', md_feature6_desc: 'Проверка данных игнор неактивных.',
    md_btn_learn_more: 'Узнать Больше', md_included: 'Включено WA Sender Pro',
    wacrm_title: 'WA CRM - Управление Клиентами',
    wacrm_subtitle: 'Управляйте клиентами кампаниями одном месте',
    wacrm_hero_desc: 'Интегрированная CRM WhatsApp отслеживание управление продажами.',
    wacrm_feature1_title: 'Управление Клиентами', wacrm_feature1_desc: 'Полные профили история заметки.',
    wacrm_feature2_title: 'Отслеживание Продаж', wacrm_feature2_desc: 'Отслеживание возможностей первый контакт закрытие.',
    wacrm_feature3_title: 'Управление Командой', wacrm_feature3_desc: 'Назначение задач отслеживание производительности.',
    wacrm_feature4_title: 'Быстрые Ответы', wacrm_feature4_desc: 'Шаблоны частые ответы.',
    wacrm_feature5_title: 'Календарь Встреч', wacrm_feature5_desc: 'Организация интегрированные напоминания.',
    wacrm_feature6_title: 'Аналитические Отчёты', wacrm_feature6_desc: 'Продвинутая аналитика производительность.',
    wacrm_feature7_title: 'Интеграция WA Sender', wacrm_feature7_desc: 'Прямая ссылка кампании сегменты.',
    wacrm_feature8_title: 'Мультиустройственный Доступ', wacrm_feature8_desc: 'Доступ устройство авто синхронизация.',
    wacrm_btn_start: 'Начать WA CRM', wacrm_coming_soon: 'Скоро - Зарегистрируйтесь'
  },

  // ═══════════════════════════════════════════════════════════════
  // ITALIANO (it) - COMPLETE (222+ keys added)
  // ═══════════════════════════════════════════════════════════════
  it: {
    nav_home: 'Home', nav_how: 'Tutorial', nav_guida: 'Guida Anti-Ban',
    nav_features: 'Funzionalità', nav_pricing: 'Prezzi', nav_contact: 'Contatti',
    nav_policies: 'Politiche', nav_marketing: '📊 Dati Marketing',
    nav_wacrm: '🟢 WA CRM', nav_wadefender: '🛡️ WaDefender',
    nav_exclusive_software: '⭐ Software Esclusivi',
    bn_home: 'Home', bn_videos: 'Video', bn_pricing: 'Prezzi',
    bn_download: 'Scarica', bn_contact: 'Contatti',
    footer_quick: 'Link Rapidi', footer_legal: 'Legale', footer_support: 'Supporto',
    footer_rights: 'Tutti i diritti riservati',
    footer_desc: 'Software professionale di marketing WhatsApp con strumenti avanzati per invio massiccio e automazione.',
    footer_privacy: 'Privacy Policy', footer_purchase: 'Policy di Acquisto',
    footer_refund: 'Policy di Rimborso', footer_terms: 'Termini e Condizioni', footer_whatsapp: 'WhatsApp',
    title_home: 'WA Sender - Software Marketing WhatsApp Professionale',
    title_features: 'Funzionalità - WA Sender', title_pricing: 'Prezzi e Piani - WA Sender',
    title_contact: 'Contattaci - WA Sender', title_policies: 'Politiche - WA Sender',
    title_marketing: 'Dati Marketing - WA Sender', title_wacrm: 'WA CRM - Gestione Clienti',
    title_wadefender: 'WaDefender - Protezione Account WhatsApp', title_privacy: 'Privacy Policy',
    title_purchase: 'Policy di Acquisto', title_refund: 'Policy di Rimborso', title_terms: 'Termini e Condizioni',
    desc_home: 'Software WA Sender professionale per marketing WhatsApp. Invio massiccio, estrazione numeri, gestione campagne.',
    desc_features: 'Scopri le potenti funzionalità: invio massiccio, estrazione, risposta automatica.',
    desc_pricing: 'Scegli il piano giusto a prezzi competitivi.',
    desc_contact: 'Contatta il supporto WA Sender per assistenza.',
    desc_marketing: 'Strumento estrazione dati da Google Maps e siti web.',
    desc_wacrm: 'Sistema CRM integrato WhatsApp per gestire clienti efficacemente.',
    desc_wadefender: 'Proteggi account WhatsApp da blocchi con WaDefender.',
    hero_title: 'Il Più Potente Software WhatsApp Marketing',
    hero_subtitle: 'Invia messaggi massicci, estrai numeri e gestisci campagne con strumenti professionali',
    hero_btn_download: 'Scarica Ora', hero_btn_features: 'Esplora Funzionalità',
    hero_trusted_by: 'Più di 50.000 utenti ci fidano',
    stats_users: 'Utenti Attivi', stats_messages: 'Messaggi al Giorno',
    stats_countries: 'Paesi', stats_uptime: 'Disponibilità',
    how_title: 'Come Funziona?', how_subtitle: 'Tre semplici passi per iniziare',
    how_step1_title: 'Scarica Software', how_step1_desc: 'Scarica e installa WA Sender in secondi',
    how_step2_title: 'Importa Numeri', how_step2_desc: 'Importa lista o estrai da gruppi WhatsApp',
    how_step3_title: 'Invia Messaggi', how_step3_desc: 'Crea campagna e invia con un clic',
    features_preview_title: 'Funzionalità Potenti', features_preview_subtitle: 'Tutto per marketing WhatsApp di successo',
    btn_view_all_features: 'Tutte le Funzionalità', btn_get_started: 'Inizia',
    features_title: 'Funzionalità WA Sender', features_subtitle: 'Strumenti professionali completi',
    f1_title: 'Invio Massiccio', f1_desc: 'Invia testo, immagini, video a migliaia di numeri con un clic.',
    f2_title: 'Estrazione Membri', f2_desc: 'Estrai automaticamente numeri membri gruppi WhatsApp.',
    f3_title: 'Estrazione Google Maps', f3_desc: 'Ottieni contatti qualsiasi attività tramite Google Maps.',
    f4_title: 'Risposta Automatica', f4_desc: 'Crea risposte automatiche intelligenti basate su parole chiave.',
    f5_title: 'Import/Export', f5_desc: 'Importa CSV/Excel, esporta report in formati multipli.',
    f6_title: 'Pianificazione', f6_desc: 'Programma invio anche offline.',
    f7_title: 'Test Fittizi', f7_desc: 'Testa campagne su numeri fittizi prima invio reale.',
    f8_title: 'Filtraggio', f8_desc: 'Verifica esistenza numeri, rimuovi inattivi.',
    f9_title: 'Multi-Account', f9_desc: 'Usa più account simultaneamente.',
    f10_title: 'Personalizzazione', f10_desc: 'Aggiungi variabili come {name} per personalizzare.',
    f11_title: 'Multimedia', f11_desc: 'Invia immagini, video, documenti, posizioni.',
    f12_title: 'Report', f12_desc: 'Traccia performance con report dettagliati.',
    f13_title: 'Protezione Anti-Ban', f13_desc: 'Tecnologia avanzata con ritardi intelligenti.',
    f14_title: 'Interfaccia Semplice', f14_desc: 'Design moderno accessibile a tutti.',
    f15_title: 'Aggiornamenti', f15_desc: 'Aggiornamenti regolari ultime versioni WhatsApp.',
    price_label: 'Prezzi', price_title: 'Scegli il Tuo Piano', price_sub: 'Piani flessibili con garanzia rimborso',
    plan1_name: 'Piano Base', plan1_period: '1 Anno / 1 Dispositivo', plan1b_name: 'Piano Risparmio', plan1b_period: '4 Anni / 1 Dispositivo',
    plan2_name: 'Piano a Vita', plan2_period: 'A Vita / 1 Dispositivo',
    price_22: 'Piano Massimo', price_04: '5 Anni / 1 Dispositivo',
    pf1: 'Invio illimitato', pf2: 'Estrazione gruppi', pf3: 'Estrazione Google Maps',
    pf4: 'Risposta auto', pf5: 'Pianificazione', pf6: 'Filtraggio', pf7: 'Multi-account',
    pf8: 'Report', pf9: 'Anti-ban', pf10: 'Supporto 24/7',
    pf11: 'Aggiornamenti gratuiti', pf12: '2 dispositivi', pf13: '3 dispositivi',
    devices_1: 'Dispositivo Singolo', devices_2: 'Due Dispositivi', devices_3: '3 Dispositivi',
    popular_badge: 'Più Popolare', btn_buy_now: 'Abbonati Ora',
    price_group1: 'Piani 1 Dispositivo', price_group2: 'Piani Multi-Dispositivo',
    payment_title: 'Metodi di Pagamento', payment_subtitle: 'Scegli metodo preferito',
    faq_title: 'Domande Frequenti su Prezzi e Pagamento',
    faq_q1: 'Posso aggiornare il mio piano in seguito?', faq_a1: 'Sì! Puoi aggiornare il tuo piano in qualsiasi momento. Verrà calcolata la differenza tra il piano attuale e quello nuovo, con uno sconto per il periodo rimanente.',
    faq_q2: 'Quali metodi di pagamento sono disponibili?', faq_a2: 'Accettiamo diversi metodi di pagamento: Vodafone Cash (Egitto), app Barq (Arabia Saudita), InstaPay, bonifico bancario D360 (Arabia Saudita), e Visa/PayPal per i pagamenti internazionali.',
    faq_q3: "Quanto tempo richiede l'attivazione della licenza dopo il pagamento?", faq_a3: "L'attivazione avviene solitamente entro pochi minuti dalla ricezione della ricevuta di pagamento via WhatsApp. I bonifici bancari possono richiedere 1-24 ore lavorative.",
    faq_q4: 'È possibile trasferire la licenza su un altro dispositivo?', faq_a4: 'La licenza è collegata a un solo dispositivo. Se cambi dispositivo, contattaci via WhatsApp e ti aiuteremo a trasferire la licenza sul nuovo dispositivo gratuitamente.',
    pm_vodafone_title: 'Vodafone Cash (Egitto)', pm_vodafone_sub: 'Trasferimento Istantaneo al Wallet', pm_vodafone_note: "Invia la ricevuta del bonifico via WhatsApp per un'attivazione istantanea.",
    pm_barq_title: 'App Barq (Arabia Saudita)', pm_barq_sub: "Bonifico Internazionale verso l'Arabia Saudita", pm_barq_steps: '<strong>Passaggi del Bonifico:</strong> Bonifico Internazionale → Egitto → Inserisci il numero qui sotto', pm_barq_note: "Invia la ricevuta dopo il bonifico per l'attivazione.",
    pm_instapay_title: 'InstaPay (Egitto)', pm_instapay_sub: "Bonifico Diretto dall'Egitto", pm_instapay_link: 'Apri Link InstaPay →', pm_instapay_note: 'Invia la ricevuta di pagamento dopo aver completato la transazione.',
    pm_bank_title: 'Bonifico Bancario - D360 (Arabia Saudita)', pm_bank_sub: 'Tramite IBAN Saudita', pm_bank_name: 'Banca:', pm_bank_holder: 'Nome del Beneficiario:', pm_bank_iban: 'Numero IBAN:', pm_bank_swift: 'Codice SWIFT:', pm_bank_note: "Il bonifico richiede 1-24 ore lavorative. Invia la ricevuta per l'attivazione.",
    pm_paypal_title: 'Visa / PayPal', pm_paypal_sub: 'Pagamento Sicuro con Carta', pm_paypal_note2: 'Clicca sul pulsante "Acquista Ora" o scansiona il codice QR sotto il piano desiderato sopra, e sarai indirizzato direttamente alla pagina di pagamento con l\'importo corretto. Dopo il pagamento, invia l\'email utilizzata via WhatsApp.',
    price_01: '<span>Banca:</span> D360 Bank', price_02: '<span>Nome del Beneficiario:</span> Ayman Nasr Nasr',
    price_05: '/ Anno', price_06: '/ Anno', price_07: '/ 2 Anni',
    price_08: '📊 Dati di Marketing', price_09: '📊 Dati di Marketing',
    price_11: '📱 Scansiona per Pagare', price_12: '📱 Scansiona per Pagare', price_13: '📱 Scansiona per Pagare', price_14: '📱 Scansiona per Pagare', price_15: '📱 Scansiona per Pagare', price_16: '📱 Scansiona per Pagare', price_17: '📱 Scansiona per Pagare',
    price_18: 'Passaggi del Bonifico:',
    price_19: 'Prezzi e Abbonamenti WA Sender - Piani Flessibili | WA Sender',
    price_20: '<strong>📱 Scansiona per Pagare</strong>Paga $5 direttamente via PayPal', price_21: '<strong>📱 Scansiona per Pagare</strong>Paga $15 direttamente via PayPal', price_23: '<strong>📱 Scansiona per Pagare</strong>Paga $20 direttamente via PayPal', price_24: '<strong>📱 Scansiona per Pagare</strong>Paga $50 direttamente via PayPal', price_25: '<strong>📱 Scansiona per Pagare</strong>Paga $8 direttamente via PayPal', price_26: '<strong>📱 Scansiona per Pagare</strong>Paga $12 direttamente via PayPal', price_27: '<strong>📱 Scansiona per Pagare</strong>Paga $25 direttamente via PayPal',
    devices_year: '2 Dispositivi / Anno', devices_2year: '2 Dispositivi / 2 Anni', devices_3year: '3 Dispositivi / Anno',
    privacy_title: 'Informativa sulla Privacy', purchase_title: 'Politica di Acquisto', refund_title: 'Politica di Rimborso', terms_title: 'Termini e Condizioni',
    pwa_install: 'Installa App', pwa_subtitle: "Ottieni un'esperienza migliore senza browser",
    btn_download: 'Download Gratuito', copy_btn: 'Copia',
    ct_01: 'Download Gratuito', ct_02: 'Italiano', ct_03: '📊 Dati di Marketing', ct_04: '📊 Dati di Marketing',
    ct_05: '🇸🇦 العربية', ct_06: 'Contattaci - WA Sender | Supporto Tecnico', pp_01: '1. Introduzione', pp_02: '2. Informazioni che Raccogliamo',
    pp_03: '3. Come Utilizziamo le Tue Informazioni', pp_04: '4. Condivisione delle Informazioni', pp_05: '5. Sicurezza dei Dati', pp_06: '6. I Tuoi Diritti',
    pp_07: '7. Conservazione dei Dati', pp_08: '8. Link a Siti Esterni', pp_09: '9. Modifiche a questa Politica', pp_10: '10. Contattaci',
    pp_11: '2.1 Informazioni che Fornisci Volontariamente:', pp_12: '2.2 Informazioni Raccolte Automaticamente:', pp_13: 'Ultimo aggiornamento: agosto 2026', pp_14: 'In WA Sender ci impegniamo a proteggere la tua privacy. Questa politica spiega come raccogliamo, utilizziamo e proteggiamo le tue informazioni personali quando utilizzi il nostro sito web e il software WA Sender.',
    pp_15: 'Utilizzando il nostro sito web o il software, accetti le pratiche descritte in questa Informativa sulla Privacy.', pp_16: 'Utilizziamo le informazioni raccolte per i seguenti scopi:', pp_17: 'Non vendiamo, scambiamo o affittiamo le tue informazioni personali a terzi. Potremmo condividere le tue informazioni solo nei seguenti casi:', pp_18: 'Adottiamo misure di sicurezza tecniche e organizzative appropriate per proteggere le tue informazioni personali da accessi non autorizzati, modifiche, divulgazioni o distruzioni. Tuttavia, nessun metodo di trasmissione dati su Internet può essere garantito sicuro al 100%.',
    pp_19: 'Hai il diritto di:', pp_20: 'Conserviamo le tue informazioni personali solo per il tempo necessario a raggiungere gli scopi descritti in questa politica, salvo che la legge richieda un periodo di conservazione più lungo.', pp_21: 'Il nostro sito web può contenere link a siti esterni. Non siamo responsabili del contenuto di questi siti esterni e non ci assumiamo alcuna responsabilità per le loro pratiche sulla privacy.', pp_22: 'Potremmo aggiornare periodicamente questa Informativa sulla Privacy. Annunceremo eventuali modifiche significative pubblicando la nuova politica su questa pagina con una data di "Ultimo aggiornamento".',
    pp_23: 'Se hai domande su questa Informativa sulla Privacy, contattaci tramite:', pp_24: 'Italiano', pp_25: '<strong data-i18n="pp_46">Informazioni di Contatto:</strong> Nome completo, indirizzo email, numero di telefono quando ci contatti o acquisti una licenza.', pp_26: '<strong data-i18n="pp_47">Informazioni di Pagamento:</strong> Dati di pagamento necessari per elaborare i tuoi acquisti (elaborati tramite gateway di pagamento sicuri e non memorizzati direttamente da noi).',
    pp_27: '<strong data-i18n="pp_48">Problemi Tecnici:</strong> Qualsiasi informazione fornita quando segnali un problema tecnico o richiedi assistenza.', pp_28: '<strong data-i18n="pp_49">Dati di Navigazione:</strong> Tipo di browser, sistema operativo, indirizzi IP, pagine visitate, data e ora della visita.', pp_29: '<strong data-i18n="pp_50">Cookie:</strong> Utilizziamo i cookie per migliorare la tua esperienza sul sito. Puoi disabilitarli dalle impostazioni del browser.', pp_30: '<strong data-i18n="pp_51">Dati Analitici:</strong> Utilizziamo strumenti di analisi anonimi per capire come i visitatori utilizzano il nostro sito.',
    pp_31: 'Fornire, gestire e proteggere i nostri servizi (inclusa la risoluzione dei problemi).', pp_32: 'Elaborare le transazioni e inviare informazioni relative all\'acquisto.', pp_33: 'Rispondere alle tue richieste e fornire supporto tecnico.', pp_34: 'Migliorare i nostri servizi e sviluppare nuove funzionalità.',
    pp_35: 'Inviare notifiche importanti sul servizio (se presenti).', pp_36: 'Rispettare gli obblighi legali e normativi.', pp_37: '<strong data-i18n="pp_52">Fornitori di Servizi:</strong> Aziende che ci aiutano a gestire la nostra attività (gateway di pagamento, hosting server) e sono obbligate a proteggere i tuoi dati.', pp_38: '<strong data-i18n="pp_53">Requisiti Legali:</strong> Quando richiesto dalla legge o per proteggere i nostri diritti o la sicurezza dei nostri utenti.',
    pp_39: '<strong data-i18n="pp_54">Il Tuo Consenso:</strong> Quando ci dai il consenso esplicito a condividere le tue informazioni.', pp_40: 'Accedere ai dati personali che deteniamo su di te.', pp_41: 'Richiedere la correzione di qualsiasi informazione imprecisa.', pp_42: 'Richiedere la cancellazione dei tuoi dati personali (con alcune eccezioni).',
    pp_43: 'Opporti al trattamento dei tuoi dati per finalità di marketing diretto.', pp_44: 'Revocare il tuo consenso in qualsiasi momento.', pp_45: '🇸🇦 العربية', pp_46: 'Informazioni di Contatto:',
    pp_47: 'Informazioni di Pagamento:', pp_48: 'Problemi Tecnici:', pp_49: 'Dati di Navigazione:', pp_50: 'Cookie:',
    pp_51: 'Dati Analitici:', pp_52: 'Fornitori di Servizi:', pp_53: 'Requisiti Legali:', pp_54: 'Il Tuo Consenso:',
    pp_55: 'WhatsApp:', pp_56: 'Email:', pp_57: 'Informativa sulla Privacy - WA Sender | Come Proteggiamo i Tuoi Dati', pv_01: '1. Introduzione',
    pv_02: '2. Tipi di Licenza e Prezzi', pv_03: '3. Metodi di Pagamento Accettati', pv_04: '4. Processo di Attivazione', pv_05: '5. Condizioni di Licenza',
    pv_06: '6. Garanzia di Prezzo', pv_07: '7. Fatture e Ricevute', pv_08: '8. Problemi Tecnici Dopo l\'Acquisto', pv_09: '9. Contattaci',
    pv_10: '2.1 Piani per Dispositivo Singolo:', pv_11: '2.2 Piani Multi-Dispositivo:', pv_12: 'Ultimo aggiornamento: agosto 2026', pv_13: 'Questa politica spiega i termini e le condizioni per l\'acquisto e l\'utilizzo delle licenze del software WA Sender. Acquistando una licenza WA Sender, accetti di rispettare questi termini.',
    pv_14: 'Offriamo diversi piani di abbonamento per soddisfare esigenze diverse:', pv_15: 'Accettiamo diversi metodi di pagamento per facilitare il processo di acquisto:', pv_16: 'Ci riserviamo il diritto di modificare i nostri prezzi in qualsiasi momento. Tuttavia, se hai acquistato un abbonamento, il prezzo pagato rimarrà valido per tutta la durata del tuo abbonamento.', pv_17: 'Al completamento del pagamento, puoi richiedere una ricevuta ufficiale via WhatsApp o email. La ricevuta include i dettagli dell\'acquisto, la data di pagamento e l\'importo pagato.',
    pv_18: 'Se riscontri problemi tecnici durante l\'installazione o l\'attivazione del software:', pv_19: 'Per richieste relative all\'acquisto o al pagamento:', pv_20: 'Italiano', pv_21: '<strong data-i18n="pv_48">Abbonamento Annuale:</strong> 5 $ USD - valido un anno su un dispositivo.',
    pv_22: '<strong data-i18n="pv_49">Abbonamento Biennale:</strong> 15 $ USD - valido due anni su un dispositivo.', pv_23: '<strong data-i18n="pv_50">Abbonamento Triennale:</strong> 20 $ USD - valido 3 anni su un dispositivo.', pv_24: '<strong data-i18n="pv_51">Abbonamento a Vita:</strong> 50 $ USD - valido a vita su un dispositivo con aggiornamenti permanenti.', pv_25: '<strong data-i18n="pv_52">2 Dispositivi / Anno:</strong> 8 $ USD - due licenze per due dispositivi diversi.',
    pv_26: '<strong data-i18n="pv_53">3 Dispositivi / Anno:</strong> 12 $ USD - tre licenze per 3 dispositivi diversi.', pv_27: '<strong data-i18n="pv_54">2 Dispositivi / 2 Anni:</strong> 25 $ USD - due licenze per due dispositivi per due anni.', pv_28: '<strong data-i18n="pv_55">Vodafone Cash (Egitto):</strong> Trasferimento istantaneo al wallet.', pv_29: '<strong data-i18n="pv_56">App Barq (Arabia Saudita):</strong> Bonifico internazionale verso l\'Arabia Saudita.',
    pv_30: '<strong data-i18n="pv_57">InstaPay (Egitto):</strong> Bonifico diretto dall\'Egitto.', pv_31: '<strong data-i18n="pv_58">Bonifico Bancario (IBAN Saudita):</strong> Tramite la banca D360 FINTECH.', pv_32: '<strong data-i18n="pv_59">PayPal / Visa:</strong> Pagamento internazionale sicuro con carta.', pv_33: 'Scarica il software gratuitamente dal nostro sito.',
    pv_34: 'Scegli il piano adatto a te dalla pagina dei prezzi.', pv_35: 'Completa il pagamento con uno dei metodi disponibili.', pv_36: 'Invia la ricevuta di pagamento via WhatsApp tramite il nostro link di contatto.', pv_37: 'Riceverai il codice di attivazione entro pochi minuti (fino a 24 ore per i bonifici bancari).',
    pv_38: 'Inserisci il codice di attivazione nel software per attivare tutte le funzionalità.', pv_39: 'Ogni licenza è valida per un solo dispositivo (a meno che non si tratti di licenza multi-dispositivo).', pv_40: 'Il codice di attivazione non può essere condiviso con altre persone.', pv_41: 'La licenza non è trasferibile né rivendibile.',
    pv_42: 'In caso di cambio dispositivo, contattaci per trasferire la licenza gratuitamente.', pv_43: 'Gli aggiornamenti gratuiti sono disponibili durante il periodo di abbonamento valido.', pv_44: 'Contattaci immediatamente via WhatsApp o email.', pv_45: 'Descrivi il problema in dettaglio con uno screenshot se possibile.',
    pv_46: 'Il nostro team di supporto risolverà il tuo problema il prima possibile (massimo entro 24 ore).', pv_47: '🇸🇦 العربية', pv_48: 'Abbonamento Annuale:', pv_49: 'Abbonamento Biennale:',
    pv_50: 'Abbonamento Triennale:', pv_51: 'Abbonamento a Vita:', pv_52: '2 Dispositivi / Anno:', pv_53: '3 Dispositivi / Anno:',
    pv_54: '2 Dispositivi / 2 Anni:', pv_55: 'Vodafone Cash (Egitto):', pv_56: 'App Barq (Arabia Saudita):', pv_57: 'InstaPay (Egitto):',
    pv_58: 'Bonifico Bancario (IBAN Saudita):', pv_59: 'PayPal / Visa:', pv_60: 'WhatsApp:', pv_61: 'Email:',
    pv_62: 'Politica di Acquisto - WA Sender | Metodi di Pagamento e Licenze', rf_01: '1. Politica Generale di Rimborso', rf_02: '2. Casi di Idoneità al Rimborso', rf_03: '3. Casi di Non Idoneità al Rimborso',
    rf_04: '4. Come Richiedere un Rimborso', rf_05: '5. Elaborazione della Richiesta di Rimborso', rf_06: '6. Alternative al Rimborso', rf_07: '7. Nota Importante sul Blocco di WhatsApp',
    rf_08: '8. FAQ sui Rimborsi', rf_09: '9. Contattaci', rf_10: '2.1 Rimborso Completo (Garanzia di 7 Giorni):', rf_11: '2.2 Rimborso Parziale:',
    rf_12: 'D: Posso provare il software prima dell\'acquisto?', rf_13: 'D: Cosa succede se il software non funziona sul mio dispositivo?', rf_14: 'D: Posso cambiare idea dopo aver acquistato un abbonamento a vita?', rf_15: 'Ultimo aggiornamento: agosto 2026',
    rf_16: 'In WA Sender ci impegniamo a fornire un prodotto di alta qualità e un eccellente servizio clienti. Data la natura digitale del nostro prodotto (software con licenza), la nostra politica di rimborso è limitata, ma ci sforziamo di soddisfare le aspettative dei nostri clienti.', rf_17: '<strong data-i18n="rf_53">7 giorni</strong> dalla data di acquisto nei seguenti casi:', rf_18: 'In alcuni casi, potremmo offrire un rimborso parziale compreso tra il 50 e il 70%:', rf_19: 'Non è possibile richiedere un rimborso nei seguenti casi:',
    rf_20: 'Per richiedere un rimborso, segui questi passaggi:', rf_21: 'Invece del rimborso, potremmo offrire le seguenti alternative:', rf_22: '<strong data-i18n="rf_62">⚠️ Avviso Importante:</strong> Il blocco di un numero WhatsApp non costituisce motivo di rimborso. Forniamo indicazioni dettagliate per proteggersi dai blocchi nella pagina "Tutorial" e all\'interno del software stesso. L\'utente è responsabile di seguire queste indicazioni e applicare le migliori pratiche. Raccomandiamo vivamente di leggere la guida anti-blocco prima di utilizzare il software per inviare messaggi.', rf_23: 'R: Sì! Puoi scaricare il software gratuitamente e provare tutte le funzionalità. Il pagamento è richiesto solo per attivare la licenza.',
    rf_24: 'R: WA Sender richiede Windows 10 o versioni successive. Se il tuo dispositivo è compatibile ma il software continua a non funzionare, contattaci e ti aiuteremo. Se non riusciamo a risolvere il problema, puoi richiedere un rimborso entro 7 giorni.', rf_25: 'R: Sì, puoi richiedere un rimborso entro 7 giorni dall\'acquisto se non hai utilizzato la licenza. Successivamente, non possiamo accettare richieste di rimborso per abbonamenti a vita.', rf_26: 'Per domande sulla politica di rimborso o per presentare una richiesta:', rf_27: 'Italiano',
    rf_28: 'Se il software non funziona sul tuo dispositivo nonostante l\'assistenza del supporto tecnico.', rf_29: 'Se c\'è un difetto tecnico importante che impedisce l\'uso di tutte le funzionalità principali.', rf_30: 'Se la tua licenza non è stata attivata entro 48 ore dal pagamento (dopo averci contattato).', rf_31: 'Se le tue esigenze sono cambiate dopo l\'acquisto dell\'abbonamento.',
    rf_32: 'Se ritieni che il software non soddisfi le tue esigenze specifiche.', rf_33: 'In caso di problemi tecnici risolti parzialmente.', rf_34: 'Dopo che sono trascorsi 14 giorni dalla data di acquisto.', rf_35: 'Se la licenza è già stata utilizzata per inviare campagne (anche di prova).',
    rf_36: 'In caso di violazione dei termini di utilizzo o delle politiche WhatsApp/Meta.', rf_37: 'Se il codice di attivazione è stato condiviso con altri utenti.', rf_38: 'Se la richiesta di rimborso è dovuta al blocco del numero WhatsApp (vedi indicazioni anti-blocco).', rf_39: 'Contattaci via WhatsApp al: <a href="https://wa.me/wasendernew" target="_blank">Contattaci</a>',
    rf_40: 'Oppure invia un\'email a: <a href="mailto:support@wasendernew.com">support@wasendernew.com</a>', rf_41: 'Indica in dettaglio il motivo della richiesta di rimborso.', rf_42: 'Allega la ricevuta di pagamento originale se possibile.', rf_43: 'Descrivi il problema riscontrato (se presente) con screenshot.',
    rf_44: '<strong data-i18n="rf_54">Tempo di Revisione:</strong> Esamineremo la tua richiesta entro 48 ore lavorative.', rf_45: '<strong data-i18n="rf_55">Tempo di Elaborazione:</strong> In caso di approvazione, il rimborso sarà elaborato entro 5-10 giorni lavorativi.', rf_46: '<strong data-i18n="rf_56">Metodo di Rimborso:</strong> L\'importo verrà rimborsato con lo stesso metodo di pagamento originale.', rf_47: '<strong data-i18n="rf_57">Conferma:</strong> Riceverai una conferma via email al momento dell\'elaborazione del rimborso.',
    rf_48: '<strong data-i18n="rf_58">Estensione dell\'Abbonamento:</strong> Aggiunta di tempo gratuito al tuo abbonamento.', rf_49: '<strong data-i18n="rf_59">Aggiornamento Gratuito:</strong> Passaggio a un piano superiore senza pagare la differenza di prezzo.', rf_50: '<strong data-i18n="rf_60">Trasferimento della Licenza:</strong> Trasferimento della licenza a un altro dispositivo se quello attuale è incompatibile.', rf_51: '<strong data-i18n="rf_61">Sessione di Formazione Extra:</strong> Una sessione dedicata via WhatsApp per spiegare come utilizzare correttamente il software.',
    rf_52: '🇸🇦 العربية', rf_53: '7 giorni', rf_54: 'Tempo di Revisione:', rf_55: 'Tempo di Elaborazione:',
    rf_56: 'Metodo di Rimborso:', rf_57: 'Conferma:', rf_58: 'Estensione dell\'Abbonamento:', rf_59: 'Aggiornamento Gratuito:',
    rf_60: 'Trasferimento della Licenza:', rf_61: 'Sessione di Formazione Extra:', rf_62: '⚠️ Avviso Importante:', rf_63: 'WhatsApp:',
    rf_64: 'Email:', rf_65: 'Politica di Rimborso - WA Sender | Condizioni di Rimborso', tm_01: '1. Accettazione dei Termini', tm_02: '2. Descrizione del Servizio',
    tm_03: '3. Requisiti di Idoneità', tm_04: '4. Uso Consentito', tm_05: '5. Uso Vietato', tm_06: '6. Responsabilità verso WhatsApp/Meta',
    tm_07: '7. Proprietà Intellettuale', tm_08: '8. Licenza e Utilizzo', tm_09: '9. Esclusione di Responsabilità', tm_10: '10. Limitazione di Responsabilità',
    tm_11: '11. Indennizzo', tm_12: '12. Modifiche ai Termini', tm_13: '13. Legge Applicabile', tm_14: '14. Contattaci',
    tm_15: 'Ultimo aggiornamento: agosto 2026', tm_16: 'Utilizzando il sito wasendernew.com o il software WA Sender, accetti di rispettare questi Termini e Condizioni. Se non accetti uno qualsiasi di questi termini, ti preghiamo di non utilizzare i nostri servizi.', tm_17: 'WA Sender è un software di marketing per WhatsApp che fornisce strumenti per l\'invio di messaggi in massa, l\'automazione e la gestione di campagne di marketing. Il software è progettato per uso personale e commerciale nel rispetto delle leggi e delle politiche Meta/WhatsApp.', tm_18: 'Per utilizzare WA Sender, devi:',
    tm_19: 'L\'utente accetta di utilizzare WA Sender esclusivamente per i seguenti scopi:', tm_20: '<strong data-i18n="tm_64">È espressamente vietato</strong> utilizzare il software per i seguenti scopi:', tm_21: '<strong data-i18n="tm_65">⚠️ Avviso Importante:</strong> WA Sender non è affiliato a Meta, WhatsApp, Facebook o a nessuna delle loro società controllate. L\'utilizzo di questo software potrebbe violare i termini di servizio di WhatsApp. Solo tu ti assumi la piena responsabilità di qualsiasi conseguenza derivante dall\'utilizzo del software, incluso ma non limitato al blocco del tuo account WhatsApp o ad azioni legali contro di te.', tm_22: 'Il software è fornito "così com\'è" senza alcuna garanzia esplicita o implicita. Non garantiamo:',
    tm_23: 'Nella misura massima consentita, la nostra responsabilità totale non supererà l\'importo pagato per la licenza. Non saremo responsabili per:', tm_24: 'Accetti di indennizzare e tenere indenne WA Sender, il suo team, i dipendenti e i partner da qualsiasi reclamo, perdita o danno (comprese le spese legali) derivante da:', tm_25: 'Ci riserviamo il diritto di modificare questi termini in qualsiasi momento. Le modifiche entrano in vigore immediatamente dopo la pubblicazione sul sito. Il continuo utilizzo del software dopo le modifiche implica la loro accettazione.', tm_26: 'Questi termini sono regolati e interpretati in conformità con le leggi applicabili. Eventuali controversie derivanti da questi termini saranno soggette alla giurisdizione esclusiva dei tribunali competenti.',
    tm_27: 'Per domande su questi termini:', tm_28: 'Italiano', tm_29: 'Hai raggiunto la maggiore età legale (18 anni o più) nel tuo paese.', tm_30: 'Hai la capacità legale di stipulare un accordo vincolante.',
    tm_31: 'Fornisci informazioni accurate e corrette al momento della registrazione o dell\'acquisto.', tm_32: 'Mantieni riservate le credenziali del tuo account.', tm_33: 'Invio di messaggi di marketing legittimi a numeri che hanno dato il consenso.', tm_34: 'Gestione professionale di campagne di marketing WhatsApp.',
    tm_35: 'Automazione delle risposte alle richieste legittime dei clienti.', tm_36: 'Estrazione di dati pubblicamente disponibili per scopi di marketing legittimi.', tm_37: 'Invio di messaggi spam o non richiesti.', tm_38: 'Invio di contenuti dannosi, fraudolenti o illegali.',
    tm_39: 'Violazione della privacy o dei diritti altrui.', tm_40: 'Tentativi di hackerare o danneggiare i sistemi WhatsApp o Meta.', tm_41: 'Condivisione, vendita o distribuzione del codice di attivazione.', tm_42: 'Reverse engineering, modifica o copia del software.',
    tm_43: 'Utilizzo per qualsiasi scopo contrario ai termini di servizio di WhatsApp/Meta.', tm_44: 'Tutti i diritti su WA Sender sono di proprietà del team di sviluppo.', tm_45: 'Il software è protetto dalle leggi internazionali sul copyright.', tm_46: 'Non puoi copiare, modificare o distribuire il software senza autorizzazione scritta esplicita.',
    tm_47: 'Il logo, le icone e il design sono di proprietà di WA Sender.', tm_48: 'Acquistando una licenza, ottieni un diritto personale e non trasferibile di utilizzare il software.', tm_49: 'Ogni licenza è valida per un solo dispositivo (a meno che non si tratti di licenza multi-dispositivo).', tm_50: 'La licenza non può essere affittata, prestata o venduta a terzi.',
    tm_51: 'Ci riserviamo il diritto di revocare la licenza in caso di violazione di questi termini.', tm_52: 'Che il software funzionerà senza interruzioni o errori.', tm_53: 'Che i risultati dell\'utilizzo del software soddisferanno le tue aspettative.', tm_54: 'Che l\'utilizzo del software non porterà al blocco del tuo numero WhatsApp.',
    tm_55: 'Che tutte le funzionalità saranno continuamente disponibili.', tm_56: 'Qualsiasi danno diretto, indiretto, incidentale o consequenziale derivante dall\'uso o dall\'impossibilità di utilizzare il software.', tm_57: 'Perdita di dati, profitti o opportunità commerciali.', tm_58: 'Il blocco del tuo account su WhatsApp o su qualsiasi altra piattaforma.',
    tm_59: 'Qualsiasi azione legale intentata contro di te da terzi.', tm_60: 'Il tuo utilizzo del software.', tm_61: 'La tua violazione di questi termini.', tm_62: 'La tua violazione dei diritti di terzi.',
    tm_63: '🇸🇦 العربية', tm_64: 'È espressamente vietato', tm_65: '⚠️ Avviso Importante:', tm_66: 'WhatsApp:',
    tm_67: 'Email:', tm_68: 'Termini e Condizioni - WA Sender | Termini di Utilizzo',
    contact_label: 'Contatti', contact_sub: 'Siamo qui per aiutarti. Contattaci tramite i canali qui sotto e risponderemo il prima possibile', ct1_title: 'WhatsApp', ct1_desc: 'Per supporto immediato, attivazione e richieste rapide',
    ct2_title: 'Email', ct2_desc: 'Per richieste dettagliate e supporto tecnico avanzato', ct3_title: 'Orari di Lavoro', ct3_desc: 'Disponibile durante gli orari di lavoro ufficiali',
    ct3_hours: '9:00 – 22:00 (ora del Cairo)', cf_title: 'Invia un Messaggio', cf_desc: 'Compila il modulo qui sotto e ti risponderemo il prima possibile', cf_subject_ph: 'Scegli l\'oggetto del messaggio',
    cf_opt1: 'Richiesta Generale', cf_opt2: 'Supporto Tecnico', cf_opt3: 'Problema di Pagamento', cf_opt4: 'Richiesta di Licenza',
    cf_msg: 'Il Tuo Messaggio', cf_send: 'Invia Messaggio', faq_sub: 'Potresti trovare una risposta nelle nostre FAQ', cf_name_ph: 'Inserisci il tuo nome completo',
    cf_msg_ph: 'Scrivi qui il tuo messaggio in dettaglio...',
    ft_06: 'Funzionalità WA Sender v5.0.7 - Oltre 15 Strumenti Professionali | WA Sender', ft_01: 'Download Gratuito', ft_02: 'Italiano', ft_03: '📊 Dati di Marketing',
    ft_04: '📊 Dati di Marketing', ft_05: '🇸🇦 العربية', feat_label: 'Funzionalità', feat_title: 'Funzionalità Principali di WA Sender v5.0.7',
    feat_sub: 'Oltre 15 strumenti professionali in un unico programma per soddisfare tutte le tue esigenze di marketing WhatsApp', feat_msg_tools: '📨 Strumenti di Messaggistica e Invio', feat_extract_tools: '🔍 Strumenti di Estrazione e Dati', feat_mgmt_tools: '🛡️ Gestione e Protezione',
    cta_ready: 'Pronto a provare tutte queste funzionalità?', cta_desc: 'Scarica il software gratuitamente e inizia a usare tutti gli strumenti immediatamente', btn_subscribe: '💳 Abbonati Ora', tut_15: 'Tutorial WA Sender - Video Passo-Passo | WA Sender',
    tut_01: 'Download Gratuito', tut_03: '📊 Dati di Marketing', tut_02: 'Italiano', tut_04: '🇸🇦 العربية',
    tut_05: 'Periodo di Grazia:', tut_06: 'Interazione Naturale:', tut_07: 'Intervalli di Tempo:', tut_08: 'Limite Massimo:',
    tut_09: 'Periodi di Riposo:', tut_10: 'Pre-Registrazione:', tut_11: 'Sincronizzazione:', tut_12: 'Messaggi Personali:',
    tut_13: 'Opzione di Rinuncia:', tut_14: 'Contenuto Utile:', cta_desc_tutorial: 'Scarica il software gratuitamente e inizia il tuo percorso di marketing WhatsApp', crm_22: 'WA CRM - Software di Gestione delle Relazioni con i Clienti su WhatsApp | WA Sender',
    crm_02: 'Scarica WA CRM', crm_08: '📊 Dati di Marketing', crm_03: 'Italiano', crm_21: '🇸🇦 العربية',
    wacrm_badge: '✨ Nuovo', wacrm_hero_title: 'WA CRM<br/>Gestione delle Relazioni con i Clienti su WhatsApp', wacrm_hero_sub: 'Un sistema integrato per gestire i tuoi clienti, organizzare le conversazioni WhatsApp e monitorare le vendite in modo efficiente', wacrm_download: 'Download Gratuito',
    wacrm_buy: 'Acquista - $20/anno', crm_04: 'Funzionalità', wacrm_desc: 'Strumenti potenti per gestire le tue relazioni con i clienti in modo professionale', crm_05: 'Passaggi',
    wacrm_how_title: 'Come funziona WA CRM?', wacrm_how_sub: 'Tre semplici passaggi per gestire i tuoi clienti in modo professionale', wacrm_step1_title: 'Scarica il Software', wacrm_step1_desc: 'Scarica WA CRM gratuitamente e installalo sul tuo dispositivo con semplici passaggi.',
    wacrm_step2_title: 'Abbonati e Attiva', wacrm_step2_desc: 'Abbonamento annuale per soli $20 e ricevi subito il tuo codice di attivazione.', wacrm_step3_title: 'Inizia a Gestire', wacrm_step3_desc: 'Inserisci i dati dei tuoi clienti e inizia a gestire le loro relazioni in modo professionale.',
    crm_06: 'Prezzi', wacrm_price_title: 'Un Piano Completo', crm_01: 'Tutto ciò di cui hai bisogno per gestire i tuoi clienti a un prezzo incredibile', wacrm_price_amount: '20',
    wacrm_price_period: '/ anno', wacrm_price_feat1: 'Tutte le funzionalità disponibili', wacrm_price_feat2: 'Aggiornamenti gratuiti continui', wacrm_price_feat3: 'Supporto tecnico diretto 24/7',
    wacrm_price_feat4: 'Licenza per un solo dispositivo', crm_09: '💳 Acquista - $20', wacrm_cta_ready: 'Pronto a gestire i tuoi clienti in modo professionale?', wacrm_cta_desc: 'Scarica WA CRM ora e inizia a organizzare le tue relazioni con i clienti oggi stesso',
    crm_10: 'Home', crm_11: 'Dati di Marketing', crm_12: 'Tutorial', crm_13: 'Funzionalità',
    crm_14: 'Prezzi', crm_15: 'Informativa sulla Privacy', crm_16: 'Politica di Acquisto', crm_17: 'Politica di Rimborso',
    crm_18: 'Termini e Condizioni', crm_19: 'Contattaci', crm_20: 'WhatsApp', crm_07: 'Dati',
    wd_62: 'WaDefender - Analizzatore di Forza dell\'Account WhatsApp | Scarica + Abbonati', wd_31: 'Download Gratuito', wd_38: '📊 Dati di Marketing', wd_32: 'Italiano',
    wd_59: '🇸🇦 العربية', wd_63: '🛡️ Strumento di Protezione Avanzata', wd_01: '<span>WaDefender</span><br/>Analizzatore di Forza dell\'Account WhatsApp', wd_17: 'Uno strumento professionale per scansionare e analizzare la forza del tuo account WhatsApp, scoprire i punti deboli e rafforzare il tuo account contro il rischio di ban. Scarica gratuitamente e attiva con un abbonamento annuale conveniente.',
    wd_39: '⬇️ Download Gratuito', wd_40: '💳 Abbonati - $5/anno', wd_33: 'Funzionalità', wd_02: 'Perché WaDefender?',
    wd_18: 'Strumenti avanzati per proteggere e migliorare le prestazioni del tuo account WhatsApp', wd_07: 'Analisi della Forza dell\'Account', wd_19: 'Scansione completa dello stato del tuo account WhatsApp con un report dettagliato su punti di forza, debolezze e raccomandazioni per il miglioramento.', wd_08: 'Controllo Salute dei Numeri',
    wd_20: 'Verifica l\'attività dei numeri WhatsApp e controlla con alta precisione se sono registrati, bannati o inesistenti.', wd_09: 'Protezione dal Ban', wd_21: 'Valuta il rischio di ban del tuo account e ricevi misure preventive per mantenere sicuro il tuo numero WhatsApp.', wd_10: 'Report Dettagliati',
    wd_22: 'Report completi e aggiornati sullo stato del tuo account, inclusa la data di registrazione, il livello di fiducia e l\'attività dell\'account.', wd_11: 'Velocità Ultra Rapida', wd_23: 'Un motore di analisi veloce che funziona con alta efficienza per scansionare centinaia di numeri in tempi record senza ritardi.', wd_12: 'Aggiornamenti Continui',
    wd_24: 'Aggiornamenti regolari per stare al passo con le ultime modifiche di WhatsApp e garantire l\'accuratezza dei risultati e le prestazioni del software.', wd_34: 'Come Funziona', wd_03: 'Inizia in 3 semplici passaggi', wd_25: 'Facile da usare, nessuna esperienza tecnica richiesta',
    wd_14: 'Scarica il Software', wd_26: 'Scarica WaDefender gratuitamente dal sito e installalo sul tuo dispositivo con passaggi semplici e rapidi.', wd_15: 'Abbonati e Attiva', wd_27: 'Abbonati per soli $5 per l\'anno intero e ricevi il tuo codice di attivazione subito dopo il pagamento.',
    wd_16: 'Inizia l\'Analisi', wd_28: 'Inserisci il codice di attivazione e inizia a scansionare e analizzare il tuo account e i tuoi numeri istantaneamente con facilità.', wd_35: 'Prezzi', wd_04: 'Abbonamento annuale a un prezzo speciale',
    wd_29: 'Tutte le funzionalità disponibili a un prezzo imbattibile', wd_13: 'Piano Annuale', wd_36: '/ anno', wd_53: '✅ Analisi illimitata degli account',
    wd_54: '✅ Controlli illimitati sulla salute dei numeri', wd_55: '✅ Report dettagliati completi', wd_56: '✅ Aggiornamenti gratuiti durante l\'anno', wd_57: '✅ Supporto tecnico diretto 24/7',
    wd_58: '✅ Licenza per un solo dispositivo', wd_41: '💳 Acquista via PayPal', wd_64: '<strong data-i18n="wd_60">Scansiona il QR per Pagare</strong>\n              usando il telefono o l\'app PayPal<br/>\n<small data-i18n="wd_61" style="color:var(--text-muted)">Importo: $5/anno</small>', wd_60: 'Scansiona il QR per Pagare',
    wd_61: 'Importo: $5/anno', wd_37: 'Statistiche', wd_05: 'Numeri che si fidano di WaDefender', wd_65: 'utenti attivi',
    wd_66: 'numeri scansionati', wd_67: 'precisione dei risultati', wd_68: 'supporto tecnico', wd_06: 'Pronto a proteggere il tuo account WhatsApp?',
    wd_30: 'Scarica WaDefender ora e inizia ad analizzare e proteggere il tuo account dal rischio di ban', wd_42: '⬇️ Download Gratuito', wd_43: '💳 Abbonati - $5', wd_44: 'Home',
    wd_45: 'Dati di Marketing', wd_46: 'Prezzi', wd_47: 'Informativa sulla Privacy', wd_48: 'Termini e Condizioni',
    wd_49: 'Politica di Rimborso', wd_50: 'Politica di Acquisto', wd_51: 'Contattaci', wd_52: 'WhatsApp',
    idx_53: 'WA Sender - Scarica il Software + Guida all\'Attivazione e Prezzi', idx_39: 'Installa', idx_22: '📊 Dati di Marketing', idx_07: 'Italiano',
    idx_40: '🇸🇦 العربية', badge_new: 'Nuova Versione 5.0.7', hero_sub: 'Software di marketing WhatsApp completo con oltre 15 potenti strumenti per messaggistica di massa, automazione e generazione di lead', btn_buy: 'Acquista Ora',
    warn_title: 'Importante: Politica Anti-Spam di Meta / WhatsApp', warn_p1: 'Meta (l\'azienda proprietaria di WhatsApp) impone restrizioni severe sulle attività di invio massivo e messaggi non richiesti.', warn_p2: 'Gli account che violano i termini di utilizzo di WhatsApp possono subire un ban temporaneo o permanente.', warn_p3: 'WA Sender include funzionalità di sicurezza per aiutarti a rispettare le politiche di Meta, ma deve essere utilizzato in modo responsabile.',
    warn_p5: 'Nota: Assicurati di configurare Windows Defender o il tuo software di sicurezza per consentire l\'installazione del software.', how_label: 'Tutorial', how_sub: 'Una guida video completa per installare il software, attivare la licenza e utilizzare gli strumenti più importanti passo dopo passo', how_badge: 'Guida Video Completa',
    how_caption: '▶ Una playlist di 10 video tutorial che si riproducono direttamente sul sito senza reindirizzamento a YouTube', steps_title: 'Come Attivare in 4 Semplici Passaggi', step1_title: 'Scarica il Software', step1_desc: 'Scarica il file WA Sender tramite il pulsante di download gratuito e installalo sul tuo dispositivo con semplici passaggi.',
    step2_title: 'Scegli il Tuo Piano e Paga', step2_desc: 'Scegli il piano adatto a te dalla sezione prezzi e completa il pagamento con uno dei metodi disponibili.', step3_title: 'Invia la Ricevuta di Pagamento', step3_desc: 'Invia uno screenshot della ricevuta di pagamento via WhatsApp e riceverai istantaneamente il codice di attivazione.',
    step4_title: 'Attiva e Inizia a Inviare', step4_desc: 'Inserisci il codice di attivazione all\'interno del software e goditi subito tutti gli strumenti.', guide_label: 'Consigli di Sicurezza', guide_title: 'Linee Guida per la Protezione dal Ban WhatsApp',
    guide_sub: 'Per garantire che le tue campagne di marketing continuino senza perdere i tuoi numeri, devi seguire questi passaggi:', g1_title: '1. Riscaldamento del Numero', g1_li1: '<strong data-i18n="idx_41">Periodo di Grazia:</strong> Se il numero è nuovo, attendi 20-30 giorni prima di iniziare qualsiasi campagna.', idx_41: 'Periodo di Grazia:',
    g1_li2: '<strong data-i18n="idx_42">Interazione Naturale:</strong> Usa il numero in conversazioni personali quotidiane e unisciti a gruppi affinché mostri un\'attività naturale a WhatsApp.', idx_42: 'Interazione Naturale:', g2_title: '2. Tempistica Intelligente', g2_li1: '<strong data-i18n="idx_43">Intervalli di Tempo:</strong> Lascia un intervallo di 20-30 secondi tra un messaggio e l\'altro.',
    idx_43: 'Intervalli di Tempo:', g2_li2: '<strong data-i18n="idx_44">Limite Massimo:</strong> Non inviare più di 200-300 messaggi all\'ora.', idx_44: 'Limite Massimo:', g2_li3: '<strong data-i18n="idx_45">Periodi di Riposo:</strong> Devi mettere in pausa la campagna periodicamente e fare delle pause per non essere contrassegnato come "spam".',
    idx_45: 'Periodi di Riposo:', g3_title: '3. Gestione dei Contatti', g3_li1: '<strong data-i18n="idx_46">Pre-Registrazione:</strong> Salva i numeri almeno 24 ore prima dell\'invio.', idx_46: 'Pre-Registrazione:',
    g3_li2: '<strong data-i18n="idx_47">Sincronizzazione:</strong> Usa Google Contacts per assicurarti che i numeri siano formattati correttamente e aggiorna continuamente l\'elenco.', idx_47: 'Sincronizzazione:', g4_title: '4. Strategia dei Contenuti dei Messaggi', g4_li1: '<strong data-i18n="idx_48">Messaggi Personali:</strong> Evita i messaggi copia-incolla e cerca di personalizzare ogni messaggio in base al nome o all\'interesse del destinatario.',
    idx_48: 'Messaggi Personali:', g4_li2: '<strong data-i18n="idx_49">Opzione di Rinuncia:</strong> Devi dare al cliente la possibilità di rifiutare di ricevere messaggi affinché non ti segnali.', idx_49: 'Opzione di Rinuncia:', g4_li3: '<strong data-i18n="idx_50">Contenuto Utile:</strong> Evita tutto ciò che sembra "spam" e rispetta la privacy e i desideri del cliente.',
    idx_50: 'Contenuto Utile:', view_all_features: 'Vedi Tutte le Funzionalità ←', idx_08: '🔥 Offerta Speciale', idx_01: 'Database Professionali per il Marketing WhatsApp',
    idx_04: 'Oltre 84 milioni di numeri sauditi ed egiziani classificati e pronti per le tue campagne di marketing', idx_09: 'Numero Saudita', idx_10: 'Numero Egiziano', idx_23: '📦 Sfoglia i Dati Disponibili',
    idx_11: '✨ Nuovo', idx_02: 'WA CRM - Gestione delle Relazioni con i Clienti su WhatsApp', idx_05: 'Un sistema integrato per gestire i tuoi clienti, organizzare le conversazioni WhatsApp e monitorare le vendite in modo efficiente', idx_12: 'Gestione Clienti',
    idx_13: 'Monitoraggio Conversazioni', idx_14: '/anno', idx_15: 'Prezzo Speciale', idx_24: '🟢 Scopri WA CRM',
    idx_25: '⬇️ Download Gratuito', idx_16: '🛡️ Protezione Avanzata', idx_03: 'WaDefender - Analizzatore di Forza dell\'Account WhatsApp', idx_06: 'Scansiona il tuo account, scopri i punti deboli e rafforza la tua protezione contro il rischio di ban prima che accada',
    idx_17: 'numeri scansionati', idx_18: 'precisione dei risultati', idx_19: '/anno', idx_20: 'prezzo conveniente',
    idx_26: '🛡️ Scopri WaDefender', idx_27: '⬇️ Download Gratuito', idx_54: '<strong data-i18n="idx_51">📱 Scansiona per Pagare</strong>Paga $5 direttamente via PayPal', idx_51: '📱 Scansiona per Pagare',
    idx_55: '<strong data-i18n="idx_52">📱 Scansiona per Pagare</strong>Paga $50 direttamente via PayPal', idx_52: '📱 Scansiona per Pagare', view_all_plans: 'Vedi Tutti i Piani ←', idx_28: 'Home',
    idx_29: 'Dati di Marketing', idx_30: 'Tutorial', idx_31: 'Funzionalità', idx_32: 'Prezzi',
    idx_33: 'Informativa sulla Privacy', idx_34: 'Politica di Acquisto', idx_35: 'Politica di Rimborso', idx_36: 'Termini e Condizioni',
    idx_37: 'Contattaci', idx_38: 'WhatsApp', idx_21: 'Dati', md_119: 'Database di Numeri per Marketing | Arabia Saudita, Egitto, Kuwait ed EAU - WA Sender',
    md_85: 'Home', md_86: '📊 Dati di Marketing', md_87: 'Tutorial', md_88: 'Funzionalità',
    md_89: 'Prezzi', md_90: 'Contattaci', md_39: 'Italiano', md_105: '🇸🇦 العربية',
    md_120: '🎯 La Soluzione Ottimale per il Marketing Digitale e la Crescita delle Vendite', md_01: 'Liste di Clienti e Contatti Pronte<br/>per il Marketing WhatsApp', md_20: 'Forniamo segmenti di marketing precisi ed elenchi pronti per aiutare la tua azienda a raggiungere facilmente ed efficacemente il pubblico target.', md_40: 'Elenco Saudita',
    md_41: 'Elenco Egiziano', md_42: 'Elenco Kuwaitiano', md_43: 'Elenco EAU', md_44: '📦 Segmenti e Pacchetti Disponibili',
    md_02: 'Scegli il Database Giusto per la Tua Attività', md_21: 'Dati accuratamente organizzati e filtrati per farti risparmiare tempo e sforzi nel raggiungere clienti interessati', md_08: 'Database Saudita', md_45: 'Milioni di Record',
    md_46: 'Copre l\'intero Regno dell\'Arabia Saudita (13 regioni)', md_47: 'Dati aggiornati negli ultimi 5 anni', md_48: 'Classificati per professione e specializzazione', md_49: 'Classificati per città e regione',
    md_50: 'File Excel (.xlsx) e TXT', md_22: '<strong data-i18n="md_109">Nota:</strong> Alcuni numeri potrebbero cambiare nel tempo a causa di aggiornamenti continui.', md_109: 'Nota:', md_121: '<strong data-i18n="md_110">📱 Scansiona per Pagare</strong>Paga $110 direttamente via PayPal',
    md_110: '📱 Scansiona per Pagare', md_91: '💳 Acquista Ora - $110 USD', md_51: '📁 Consegna Istantanea via Google Drive', md_09: 'Database Egiziano',
    md_52: 'Milioni di Record', md_53: 'Copre l\'intera Repubblica Araba d\'Egitto (27 governatorati)', md_54: 'Dati aggiornati negli ultimi 3 anni', md_55: 'Classificati per professione e specializzazione',
    md_56: 'Classificati per governatorato', md_57: 'File Excel (.xlsx) e TXT', md_23: '<strong data-i18n="md_111">Nota:</strong> Alcuni numeri potrebbero cambiare nel tempo a causa di aggiornamenti continui.', md_111: 'Nota:',
    md_122: '<strong data-i18n="md_112">📱 Scansiona per Pagare</strong>Paga $12 direttamente via PayPal', md_112: '📱 Scansiona per Pagare', md_92: '💳 Acquista Ora - $12 USD', md_58: '📁 Consegna Istantanea via Google Drive',
    md_10: 'Database Kuwaitiano', md_59: 'Milioni di Numeri', md_60: 'Dati molto organizzati e professionali', md_61: 'Governatorati organizzati e disposti con precisione',
    md_62: 'Nomi dei clienti inclusi per personalizzare i messaggi', md_63: 'Dimensioni ampie e complete su vari segmenti', md_64: 'File Excel (.xlsx) e TXT', md_24: '<strong data-i18n="md_113">Nota:</strong> Dati organizzati e dettagliati per i governatorati del Kuwait per facilitare il targeting.',
    md_113: 'Nota:', md_123: '<strong data-i18n="md_114">📱 Scansiona per Pagare</strong>Paga $25 direttamente via PayPal', md_114: '📱 Scansiona per Pagare', md_93: '💳 Acquista Ora - $25 USD',
    md_65: '📁 Consegna Istantanea via Google Drive', md_11: 'Database Emiratino', md_66: 'Milioni di Numeri', md_67: 'Cittadini reali e mirati',
    md_68: 'Clienti seri pronti ad acquistare e interagire', md_69: 'Un segmento con una situazione finanziaria molto buona', md_70: 'Molto organizzato e pronto per l\'importazione', md_71: 'File Excel (.xlsx) e TXT',
    md_25: '<strong data-i18n="md_115">Nota:</strong> Dati eccellenti per le aziende che mirano al segmento ad alto potere d\'acquisto.', md_115: 'Nota:', md_124: '<strong data-i18n="md_116">📱 Scansiona per Pagare</strong>Paga $15 direttamente via PayPal', md_116: '📱 Scansiona per Pagare',
    md_94: '💳 Acquista Ora - $15 USD', md_72: '📁 Consegna Istantanea via Google Drive', md_12: 'Database Combinato dei Paesi del Golfo (Pacchetto Completo)', md_125: 'Copre <span data-i18n="md_73">7 paesi arabi e del Golfo</span>',
    md_73: '7 paesi arabi e del Golfo', md_74: 'Regno dell\'Arabia Saudita (34M+)', md_75: 'Emirati Arabi Uniti (1M+)', md_76: 'Stato del Kuwait (2M+)',
    md_77: 'Regno Hascemita di Giordania', md_78: 'Repubblica dell\'Iraq', md_79: 'Stato del Qatar', md_80: 'Repubblica del Libano',
    md_26: '<strong data-i18n="md_117">Nota:</strong> Un pacchetto completo che unisce database di diversi mercati arabi e del Golfo principali a un prezzo scontato e con alto valore di marketing.', md_117: 'Nota:', md_126: '<strong data-i18n="md_118">📱 Scansiona per Pagare</strong>Paga $250 direttamente via PayPal', md_118: '📱 Scansiona per Pagare',
    md_95: '💳 Acquista il Pacchetto Completo - $250 USD', md_81: '📁 Consegna Istantanea via Google Drive', md_82: '💡 Perché il Marketing WhatsApp?', md_03: 'Il Potere dei Canali di Marketing Diretto',
    md_27: 'Scopri perché il marketing tramite WhatsApp raggiunge i tassi di coinvolgimento e ritorno sull\'investimento più alti', md_13: 'Tasso di Lettura Molto Alto', md_28: 'I messaggi WhatsApp vengono letti con tassi che superano i metodi tradizionali, garantendo che il tuo messaggio di marketing raggiunga direttamente i clienti.', md_14: 'Interazione e Velocità di Risposta',
    md_29: 'WhatsApp ti permette di aprire canali di comunicazione diretti e veloci con i clienti potenziali per rispondere alle loro domande e concludere le vendite.', md_15: 'Targeting Organizzato e Professionale', md_30: 'L\'utilizzo di elenchi pronti e classificati ti consente di personalizzare con precisione le tue offerte in base agli interessi del tuo segmento target.', md_04: 'La Più Grande Sfida nella Creazione di Campagne di Marketing',
    md_31: 'Ogni marketer di successo sa che il successo di qualsiasi campagna WhatsApp dipende in gran parte dalla qualità e dalla forza dell\'elenco clienti utilizzato.<br/>Invece di passare settimane a raccogliere e pulire manualmente i dati, ti risparmiamo tutto questo sforzo.', md_16: '✅ La Soluzione Professionale, Pronta nelle Tue Mani', md_32: 'Scegli il pacchetto o il paese che stai targettizzando, e ottieni i file organizzati e pronti per essere utilizzati e importati nel tuo software di marketing all\'istante.', md_05: 'Come Ricevere i File',
    md_33: 'Al completamento del pagamento, ti verrà fornito un link di download diretto tramite <strong>Google Drive</strong> contenente tutti gli elenchi nei formati <strong>Excel (.xlsx)</strong> e <strong>TXT</strong>.', md_83: '❓ Domande Frequenti', md_06: 'Risposte alle Tue Domande', md_106: 'Quali formati di file riceverò?<span>+</span>',
    md_34: 'I file sono disponibili nei formati Excel (.xlsx) e TXT per essere completamente compatibili con i software di invio e importazione.', md_107: 'Come ottengo i file dopo il pagamento?<span>+</span>', md_35: 'Il link di download di Google Drive viene inviato istantaneamente e in modo sicuro subito dopo il completamento del pagamento.', md_108: 'I dati sono organizzati e classificati?<span>+</span>',
    md_36: 'Sì, gli elenchi sono accuratamente organizzati e distribuiti per governatorato e regione geografica per facilitare il targeting.', md_07: 'Fai Crescere la Tua Campagna di Marketing Oggi!', md_37: 'Scegli il pacchetto adatto alla tua attività e inizia a raggiungere il tuo pubblico target', md_96: '🇸🇦 Dati Sauditi - $110',
    md_97: '🇪🇬 Dati Egiziani - $12', md_98: '🇰🇼 Dati Kuwaitiani - $25', md_38: 'Strumenti e software professionali per far crescere le tue campagne di marketing e aumentare le tue vendite.', md_17: 'Link Rapidi',
    md_99: 'Home', md_100: 'Dati di Marketing', md_101: 'Prezzi', md_18: 'Legale',
    md_102: 'Informativa sulla Privacy', md_103: 'Termini e Condizioni', md_19: 'Supporto', md_104: 'Contattaci',
    md_84: '© 2026 WA Sender. Tutti i Diritti Riservati.',
    local_yearly_egp: '≈ 250 EGP', local_saver_egp: '≈ 750 EGP', local_ultimate_egp: '≈ 1000 EGP', local_lifetime_egp: '≈ 2500 EGP',
    pm_paypal: 'PayPal - Carte', pm_paypal_desc: 'Pagamento sicuro PayPal/Visa/MasterCard',
    pm_bank: 'Bonifico', pm_bank_desc: 'Bonifico diretto conto D360 Bank',
    pm_vodafone: 'Vodafone Cash', pm_vodafone_desc: 'Pagamento Vodafone Cash Egitto',
    pm_instapay: 'InstaPay', pm_instapay_desc: 'Pagamento facile InstaPay',
    contact_title: 'Contattaci', contact_subtitle: 'Siamo qui per aiutarti!',
    cf_name: 'Nome Completo', cf_email: 'Email', cf_phone: 'Telefono',
    cf_subject: 'Oggetto', cf_message: 'Messaggio', cf_submit: 'Invia',
    cf_success: 'Messaggio inviato!', cf_error: 'Errore. Riprova.',
    ct_whatsapp_title: 'WhatsApp', ct_whatsapp_desc: 'Contatto diretto per rapida risposta',
    ct_email_title: 'Email', ct_email_desc: 'Risposta entro 24 ore',
    ct_hours_title: 'Orari', ct_hours_desc: 'Domenica-Giovedì: 9-18',
    pp01: 'Privacy Policy', pp02: 'Aggiornato: Gennaio 2025',
    pp03: 'In WA Sender proteggiamo la tua privacy.',
    pp04: '1. Dati Raccolti', pp05: 'Raccogliamo:',
    pp06: '• Contatti', pp07: '• Dati pagamento', pp08: '• Uso tecnico', pp09: '• Cookies',
    pp10: '2. Utilizzo', pp11: 'Per:', pp12: '• Servizi/supporto', pp13: '• Pagamenti',
    pp14: '• Miglioramenti', pp15: '• Notifiche', pp16: '• Legalità',
    pp17: '3. Protezione', pp18: 'Misure:', pp19: '• Crittografia', pp20: '• Accesso ristretto',
    pp21: '• Aggiornamenti sicurezza', pp22: '• Nessun salvataggio carte',
    pp23: '4. Condivisione', pp24: 'Tranne:', pp25: '• Pagamento', pp26: '• Legge', pp27: '• Consenso',
    pp28: '5. Tuoi Diritti', pp29: 'Hai:', pp30: '• Accesso', pp31: '• Correzione', pp32: '• Cancellazione',
    pp33: '• Revoca consenso', pp34: '• Reclami',
    pp35: '6. Cookies', pp36: 'Per:', pp37: '• Preferenze', pp38: '• Analitica', pp39: '• UX',
    pp40: '7. Modifiche', pp41: 'Aggiornamenti pubblicati qui.',
    pp42: '8. Contatto', pp43: 'support@wasendernew.com | +201279934735',
    rf01: 'Policy Acquisto', rf02: 'Aggiornato: Gennaio 2025',
    rf03: 'Leggere attentamente prima acquistare.',
    rf04: '1. Prodotti', rf05: 'Piani:', rf06: '• Annuale', rf07: '• 2 Anni', rf08: '• 3 Anni',
    rf09: '• A Vita', rf10: '• Multi-dispositivo',
    rf11: '2. Prezzi', rf12: 'USD, tasse possibili.',
    rf13: '3. Pagamento', rf14: 'Accettiamo:', rf15: '• PayPal', rf16: '• Bonifico',
    rf17: '• Vodafone Cash', rf18: '• InstaPay',
    rf19: '4. Acquisto', rf20: 'Dopo:', rf21: '• Conferma email', rf22: '• Licenza 24h',
    rf23: '• Verifica contatti',
    rf24: '5. Attivazione', rf25: '• Chiave unica', rf26: '• Inserisci software', rf27: '• Legato dispositivo',
    rf28: '6. Rinnovo', rf29: '• No auto-rinnovo', rf30: '• Promemoria 7g', rf31: '• Manuale',
    rf32: '7. Trasferimento', rf33: '• No durante abbonamento', rf34: '• Contatta supporto',
    rf35: '8. Offerte', rf36: '• Promozioni', rf37: '• Non cumulabili',
    rf38: '• Prezzi modificabili',
    rf39: '9. Termini', rf40: '• Acquisto = accettazione', rf41: '• Diritto cancellazione',
    rf42: '• Prezzi variabili',
    rf43: '10. Contatto', rf44: '+201279934735 | support@wasendernew.com',
    tm01: 'Policy Rimborso', tm02: 'Aggiornato: Gennaio 2025',
    tm03: 'Miriamo soddisfazione.',
    tm04: '1. Generale', tm05: 'Natura digitale:',
    tm06: '• 7 giorni', tm07: '< 100 messaggi', tm08: '• Ragione valida',
    tm09: '2. Accettati', tm10: 'Rimborso per:',
    tm11: '• Problema tech (5g)', tm12: '• Incompatibilità', tm13: '• Errore critico',
    tm14: '• Doppio pagamento',
    tm15: '3. Rifiutati', tm16: 'Nessun rimborso:',
    tm17: '• Dopo 7g', tm18: '• Errore utente', tm19: '• Ban WhatsApp',
    tm20: '• Acquisto non autorizzato',
    tm21: '4. Processo', tm22: 'Richiedere:',
    tm23: '• Contattaci', tm24: '• Numero ordine', tm25: 'Descrivi problema',
    tm26: '• 3-5 giorni revisione',
    tm27: '5. Tempi', tm28: '• Carte: 5-10g', tm29: '• PayPal: 3-5g', tm30: '• Bonifico: 7-14g',
    tm31: '6. Alternative', tm32: 'Offriamo:', tm33: '• Estensione gratuita', tm34: '• Upgrade',
    tm35: '• Supporto tech',
    tm36: '7. Controversie', tm37: '• Contatta prima', tm38: '• Controversia ultima opzione',
    tm39: '• Malizioso = ban',
    tm40: '8. Eccezioni', tm41: '• Emergenze flessibili', tm42: '• Fedeli privilegi',
    tm43: '• Caso per caso',
    pv01: 'Termini e Condizioni', pv02: 'Aggiornato: Gennaio 2025',
    pv03: 'Benvenuto. Uso = accettazione.',
    pv04: '1. Accettazione', pv05: 'Uso = accettazione totale.',
    pv06: '2. Servizio', pv07: 'Strumenti:', pv08: '• Invio massiccio', pv09: '• Estrazione',
    pv10: '• Campagne', pv11: '• Automazione',
    pv12: '3. Obblighi', pv13: 'Devi:', pv14: '• Uso lecito', pv15: '• No spam',
    pv16: '• Rispetto privacy', pv17: '• No hacking', pv18: '• Rispetto WhatsApp ToS',
    pv19: '4. Proprietà Intellettuale', pv20: '• Diritti WA Sender', pv21: '• Uso personale',
    pv22: '• No copia/distribuzione', pv23: '• Marchi proprietari',
    pv24: '5. Responsabilità', pv25: 'Sei responsabile:', pv26: '• Contenuto', pv27: '• Legalità',
    pv28: '• Sicurezza account', pv29: '• Danni uso improprio',
    pv30: '6. Limitazione', pv31: '• "Come è"', pv32: '• Non responsabili banni',
    pv33: '• Max = importo pagato', pv34: '• Nessun danno indiretto',
    pv35: '7. Risoluzione', pv36: 'Se:', pv37: '• Violazione', pv38: '• Uso illegale',
    pv39: '• Frode', pv40: '• Danno reputazione',
    pv41: '8. Modifiche', pv42: 'Modificabili; notifica cambiamenti maggiori.',
    pv43: '9. Legge', pv44: 'Legge applicabile; arbitrato controversie.',
    pv45: '10. Contatto', pv46: 'legal@wasendernew.com | +201279934735',
    wd_title: 'WaDefender - Protezione Account WhatsApp',
    wd_subtitle: 'Proteggi account dai blocchi',
    wd_hero_desc: 'WaDefender specializzato protezione contro blocchi sospensioni.',
    wd_feature1_title: 'Monitoraggio Comportamento', wd_feature1_desc: 'Tracciamento attività comportamenti pericolosi.',
    wd_feature2_title: 'Allerte Precoci', wd_feature2_desc: 'Allerte istantanee attività sospetta.',
    wd_feature3_title: 'Gestione Frequenza', wd_feature3_desc: 'Controllo intelligente limiti giornalieri.',
    wd_feature4_title: 'Verifica Qualità', wd_feature4_desc: 'Verifica numeri prima invio evitare segnalazioni.',
    wd_feature5_title: 'Pianificazione Sicura', wd_feature5_desc: 'Distribuzione intervalli sicuri comportamento naturale.',
    wd_feature6_title: 'Report Protezione', wd_feature6_desc: 'Report dettagliati stato protezione raccomandazioni.',
    wd_btn_download: 'Scarica WaDefender', wd_price: '$15/anno', wd_note: 'Funziona con WA Sender',
    md_title: 'Dati Marketing', md_subtitle: 'Estrazione dati clienti fonti multiple',
    md_hero_desc: 'Estra telefoni email indirizzi attività Google Maps siti.',
    md_feature1_title: 'Google Maps', md_feature1_desc: 'Ricerca attività città estrazione contatti.',
    md_feature2_title: 'Siti Web', md_feature2_desc: 'Estrazione numeri siti URL parole chiave.',
    md_feature3_title: 'Filtraggio Avanzato', md_feature3_desc: 'Filtra tipo attività valutazione.',
    md_feature4_title: 'Export Multi-Formato', md_feature4_desc: 'Esporta CSV Excel JSON.',
    md_feature5_title: 'Ricerca Parole Chiave', md_feature5_desc: 'Ricerca multiple parole chiave.',
    md_feature6_title: 'Auto Aggiornamento', md_feature6_desc: 'Verifica dati ignora inattivi.',
    md_btn_learn_more: 'Scopri di Più', md_included: 'Incluso WA Sender Pro',
    wacrm_title: 'WA CRM - Gestione Clienti',
    wacrm_subtitle: 'Gestisci clienti campaign luogo unico',
    wacrm_hero_desc: 'Sistema CRM integrato WhatsApp tracciamento gestione vendite.',
    wacrm_feature1_title: 'Gestione Clienti', wacrm_feature1_desc: 'Profili completi storia note.',
    wacrm_feature2_title: 'Tracciamento Vendite', wacrm_feature2_desc: 'Tracciamento opportunità primo contatto chiusura.',
    wacrm_feature3_title: 'Gestione Team', wacrm_feature3_desc: 'Assegna compiti traccia performance.',
    wacrm_feature4_title: 'Risposte Rapide', wacrm_feature4_desc: 'Template risposte frequenti.',
    wacrm_feature5_title: 'Calendario Appuntamenti', wacrm_feature5_desc: 'Organizza promemoria integrati.',
    wacrm_feature6_title: 'Report Analitici', wacrm_feature6_desc: 'Analitiche avanzate performance.',
    wacrm_feature7_title: 'Integrazione WA Sender', wacrm_feature7_desc: 'Link diretto campaign segmenti.',
    wacrm_feature8_title: 'Accesso Multi-Dispositivo', wacrm_feature8_desc: 'Accesso dispositivo sincronizzazione auto.',
    wacrm_btn_start: 'Inizia WA CRM', wacrm_coming_soon: 'Prossimamente - Registrati'
  }
};

// ── VIDEO PLAYLIST DATA ──
const videoData = [
  { id: 1, duration: '2:14', src: '/video/1.mp4',
    title: { ar: 'استخراج أرقام أعضاء مجموعات ومجتمع واتساب', en: 'Extracting Numbers of WhatsApp Group & Community Members' },
    desc: { ar: 'شرح كيفية استخراج أرقام أعضاء مجموعات ومجتمعات واتساب باستخدام WA Sender Pro.', en: 'How to extract member numbers from WhatsApp groups and communities using WA Sender Pro.' } },
  { id: 2, duration: '10:25', src: '/video/2.mp4',
    title: { ar: 'عمل حملة إعلانية باستخدام WA Sender Pro', en: 'Running an Ad Campaign with WA Sender Pro' },
    desc: { ar: 'شرح إنشاء وإرسال حملة إعلانية احترافية عبر برنامج WA Sender Pro.', en: 'How to create and send a professional ad campaign using WA Sender Pro.' } },
  { id: 3, duration: '2:09', src: '/video/3.mp4',
    title: { ar: 'تحويل البيانات إلى ملف جهات اتصال CSV', en: 'Converting Data into a CSV Contacts File' },
    desc: { ar: 'شرح تحويل الأرقام والبيانات إلى ملف CSV جاهز للاستيراد والاستخدام.', en: 'How to convert numbers and data into a ready-to-import CSV file.' } },
  { id: 4, duration: '1:35', src: '/video/4.mp4',
    title: { ar: 'استخراج جهات الاتصال أو مجموعات واتساب المحفوظة', en: 'Extracting Saved WhatsApp Contacts or Groups' },
    desc: { ar: 'شرح استخراج جهات الاتصال والمجموعات المحفوظة داخل واتساب بسهولة.', en: 'How to easily extract saved contacts and groups from WhatsApp.' } },
  { id: 5, duration: '1:15', src: '/video/5.mp4',
    title: { ar: 'خدمة الرد التلقائي', en: 'Auto-Reply Service' },
    desc: { ar: 'شرح إعداد واستخدام خدمة الرد التلقائي في برنامج WA Sender Pro.', en: 'How to set up and use the auto-reply service in WA Sender Pro.' } },
  { id: 6, duration: '1:36', src: '/video/6.mp4',
    title: { ar: 'استخراج دردشات واتساب', en: 'Extracting WhatsApp Chats' },
    desc: { ar: 'شرح استخراج محادثات واتساب وإدارتها باستخدام WA Sender Pro.', en: 'How to extract and manage WhatsApp conversations using WA Sender Pro.' } },
  { id: 7, duration: '2:45', src: '/video/7.mp4',
    title: { ar: 'استخراج روابط مجموعات واتساب من صفحات الويب', en: 'Extracting WhatsApp Group Links from Web Pages' },
    desc: { ar: 'شرح استخراج روابط مجموعات واتساب المنشورة على مواقع الويب تلقائياً.', en: 'How to automatically extract WhatsApp group links published on websites.' } },
  { id: 8, duration: '2:25', src: '/video/8.mp4',
    title: { ar: 'تحويل البيانات إلى جهات اتصال CSV', en: 'Converting Data into CSV Contacts' },
    desc: { ar: 'شرح تجهيز ملفات CSV وإدارتها لاستخدامها في حملات واتساب.', en: 'How to prepare and manage CSV files for use in WhatsApp campaigns.' } },
  { id: 9, duration: '2:44', src: '/video/9.mp4',
    title: { ar: 'استخراج الأرقام والبيانات من خرائط جوجل', en: 'Extracting Numbers and Data from Google Maps' },
    desc: { ar: 'شرح استخراج أرقام الهواتف والبيانات التجارية من خرائط جوجل باستخدام WA Sender Pro.', en: 'How to extract phone numbers and business data from Google Maps using WA Sender Pro.' } },
  { id: 10, duration: '6:47', src: '/video/10.mp4',
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

/* ── SCROLL-REVEAL ANIMATIONS ── */
function initRevealAnimations() {
  const targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;

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

/* ── ACCORDIONS ── */
function initAccordions() {
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

/* Payment method accordion */
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

/* Copy to clipboard */
function copyToClipboard(text, btn) {
  const done = () => {
    if (!btn) return;
    const original = btn.textContent;
    btn.textContent = '✓ Copied';
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
   SALES NOTIFICATIONS SYSTEM - MULTI-LANGUAGE SUPPORT
   ═══════════════════════════════════════════════════════════════ */

// ── Multi-Language Names Database ──
const notificationData = {
  ar: {
    names: {
      male: ['محمد', 'أحمد', 'محمود', 'حسين', 'عمر', 'يوسف', 'كريم', 'علي', 'خالد', 'أبو عبدالله', 'طارق', 'سمير', 'فادي', 'إبراهيم', 'أسامة', 'رامي', 'شادي', 'مصطفى', 'حمزة', 'حسن', 'سعيد', 'أيمن', 'نبيل', 'عادل', 'مروان', 'ياسر', 'عمرو', 'باسم', 'هاني', 'تامر'],
      female: ['فاطمة', 'نور', 'مريم', 'سارة', 'زينب', 'عائشة', 'هند', 'دلال', 'ريم', 'منى', 'سلمى', 'أمل', 'نانسي', 'مي', 'جنى', 'رنا', 'هدى', 'شيرين', 'ليلى']
    },
    locations: [
      { city: 'القاهرة', country: 'مصر', flag: '🇪🇬' },
      { city: 'الإسكندرية', country: 'مصر', flag: '🇪🇬' },
      { city: 'الجيزة', country: 'مصر', flag: '🇪🇬' },
      { city: 'الرياض', country: 'السعودية', flag: '🇸🇦' },
      { city: 'جدة', country: 'السعودية', flag: '🇸🇦' },
      { city: 'مكة', country: 'السعودية', flag: '🇸🇦' },
      { city: 'الدمام', country: 'السعودية', flag: '🇸🇦' },
      { city: 'دبي', country: 'الإمارات', flag: '🇦🇪' },
      { city: 'أبوظبي', country: 'الإمارات', flag: '🇦🇪' },
      { city: 'الكويت', country: 'الكويت', flag: '🇰🇼' },
      { city: 'الدوحة', country: 'قطر', flag: '🇶🇦' },
      { city: 'صنعاء', country: 'اليمن', flag: '🇾🇪' },
      { city: 'عدن', country: 'اليمن', flag: '🇾🇪' },
      { city: 'الجزائر', country: 'الجزائر', flag: '🇩🇿' },
      { city: 'المغرب', country: 'المغرب', flag: '🇲🇦' },
      { city: 'بغداد', country: 'العراق', flag: '🇮🇶' },
      { city: 'عمان', country: 'الأردن', flag: '🇯🇴' },
      { city: 'بيروت', country: 'لبنان', flag: '🇱🇧' }
    ],
    plans: [
      { id: 'yearly', name: 'WA Sender - سنة واحدة', price: '$5', period: 'سنوي', periodShort: 'سنوي', lifetimeLabel: 'مدى الحياة', url: 'https://www.paypal.com/ncp/payment/S2MZ5XXCR65ZG' },
      { id: '2yearly', name: 'WA Sender - سنتين', price: '$15', period: 'سنتين', periodShort: 'سنتين', lifetimeLabel: 'مدى الحياة', url: 'https://www.paypal.com/ncp/payment/FNR3E3UFRLSTC' },
      { id: '3yearly', name: 'WA Sender - 3 أعوام', price: '$20', period: '3 أعوام', periodShort: '3 أعوام', lifetimeLabel: 'مدى الحياة', url: 'https://www.paypal.com/ncp/payment/QF2GAKDECFGNJ' },
      { id: 'lifetime', name: 'WA Sender - مدى الحياة', price: '$50', period: 'مدى الحياة', periodShort: 'مدى الحياة', lifetimeLabel: 'مدى الحياة', url: 'https://www.paypal.com/ncp/payment/YR7KL36E3G6DW' },
      { id: '2dev-yearly', name: 'WA Sender - جهازان/سنة', price: '$8', period: 'سنوي', periodShort: 'سنوي', lifetimeLabel: 'مدى الحياة', url: 'https://www.paypal.com/ncp/payment/UALYCA9GWSGYL' },
      { id: '3dev-yearly', name: 'WA Sender - 3 أجهزة/سنة', price: '$12', period: 'سنوي', periodShort: 'سنوي', lifetimeLabel: 'مدى الحياة', url: 'https://www.paypal.com/ncp/payment/2GKPTJEBQF7KL' },
      { id: '2dev-2yr', name: 'WA Sender - جهازان/سنتين', price: '$25', period: 'سنتين', periodShort: 'سنتين', lifetimeLabel: 'مدى الحياة', url: 'https://www.paypal.com/ncp/payment/PMNSNED5TBWU8' }
    ],
    templates: {
      purchase: ['اشترك في باقة', 'اشترى باقة', 'فعّل باقة', 'احصل على رخصة'],
      upgrade: ['طور خطته إلى', 'رقّى اشتراكه إلى', 'حدّث باقته إلى'],
      subscribe: ['بدأ اشتراكه في', 'انضم إلينا عبر', 'اختار باقة'],
      renewal: ['جدّد اشتراكه في', 'مدد عضويته لـ']
    },
    timeAgo: ['الآن', 'منذ دقيقة', 'منذ دقيقتين', 'منذ 3 دقائق', 'منذ 5 دقائق', 'منذ 8 دقائق'],
    messages: {
      purchase: '{name} من {city} {action} {plan}',
      upgrade_lifetime: '{name} من {country} {action} {plan} 🎉',
      upgrade_normal: '{name} {action} {period} بدلًا من شهري',
      subscribe: '{name} من {country} {action} {plan} لمدة {period}',
      renewal: '{name} {action} {plan} - شكرًا للولاء! 💚'
    },
    closeLabel: 'إغلاق'
  },
  en: {
    names: {
      male: ['Mohammed', 'Ahmed', 'Mahmoud', 'Hussein', 'Omar', 'Youssef', 'Karim', 'Ali', 'Khaled', 'Abdullah', 'Tarek', 'Samir', 'Fady', 'Ibrahim', 'Osama', 'Rami', 'Shady', 'Mostafa', 'Hamza', 'Hassan', 'Said', 'Ayman', 'Nabil', 'Adel', 'Moran', 'Yasser', 'Amro', 'Basem', 'Hany', 'Tamer', 'James', 'John', 'Michael', 'David', 'Robert', 'Daniel', 'Kevin', 'Brian', 'Steve', 'William', 'Thomas', 'Andrew'],
      female: ['Fatima', 'Nour', 'Maryam', 'Sarah', 'Zainab', 'Aisha', 'Hind', 'Dalal', 'Reem', 'Mona', 'Salma', 'Amal', 'Nancy', 'Mei', 'Jenna', 'Rana', 'Hoda', 'Shereen', 'Layla', 'Emma', 'Sophia', 'Olivia', 'Isabella', 'Charlotte', 'Amelia', 'Harper', 'Evelyn', 'Abigail', 'Emily', 'Elizabeth']
    },
    locations: [
      { city: 'Cairo', country: 'Egypt', flag: '🇪🇬' },
      { city: 'Alexandria', country: 'Egypt', flag: '🇪🇬' },
      { city: 'Giza', country: 'Egypt', flag: '🇪🇬' },
      { city: 'Riyadh', country: 'Saudi Arabia', flag: '🇸🇦' },
      { city: 'Jeddah', country: 'Saudi Arabia', flag: '🇸🇦' },
      { city: 'Mecca', country: 'Saudi Arabia', flag: '🇸🇦' },
      { city: 'Dammam', country: 'Saudi Arabia', flag: '🇸🇦' },
      { city: 'Dubai', country: 'UAE', flag: '🇦🇪' },
      { city: 'Abu Dhabi', country: 'UAE', flag: '🇦🇪' },
      { city: 'Kuwait City', country: 'Kuwait', flag: '🇰🇼' },
      { city: 'Doha', country: 'Qatar', flag: '🇶🇦' },
      { city: 'Sanaa', country: 'Yemen', flag: '🇾🇪' },
      { city: 'Aden', country: 'Yemen', flag: '🇾🇪' },
      { city: 'Algiers', country: 'Algeria', flag: '🇩🇿' },
      { city: 'Casablanca', country: 'Morocco', flag: '🇲🇦' },
      { city: 'Baghdad', country: 'Iraq', flag: '🇮🇶' },
      { city: 'Amman', country: 'Jordan', flag: '🇯🇴' },
      { city: 'Beirut', country: 'Lebanon', flag: '🇱🇧' },
      { city: 'London', country: 'UK', flag: '🇬🇧' },
      { city: 'Paris', country: 'France', flag: '🇫🇷' },
      { city: 'New York', country: 'USA', flag: '🇺🇸' },
      { city: 'Berlin', country: 'Germany', flag: '🇩🇪' },
      { city: 'Istanbul', country: 'Turkey', flag: '🇹🇷' }
    ],
    plans: [
      { id: 'yearly', name: 'WA Sender - 1 Year', price: '$5', period: 'Yearly', periodShort: 'Yearly', lifetimeLabel: 'Lifetime', url: 'https://www.paypal.com/ncp/payment/S2MZ5XXCR65ZG' },
      { id: '2yearly', name: 'WA Sender - 2 Years', price: '$15', period: '2 Years', periodShort: '2 Years', lifetimeLabel: 'Lifetime', url: 'https://www.paypal.com/ncp/payment/FNR3E3UFRLSTC' },
      { id: '3yearly', name: 'WA Sender - 3 Years', price: '$20', period: '3 Years', periodShort: '3 Years', lifetimeLabel: 'Lifetime', url: 'https://www.paypal.com/ncp/payment/QF2GAKDECFGNJ' },
      { id: 'lifetime', name: 'WA Sender - Lifetime', price: '$50', period: 'Lifetime', periodShort: 'Lifetime', lifetimeLabel: 'Lifetime', url: 'https://www.paypal.com/ncp/payment/YR7KL36E3G6DW' },
      { id: '2dev-yearly', name: 'WA Sender - 2 Devices/Year', price: '$8', period: 'Yearly', periodShort: 'Yearly', lifetimeLabel: 'Lifetime', url: 'https://www.paypal.com/ncp/payment/UALYCA9GWSGYL' },
      { id: '3dev-yearly', name: 'WA Sender - 3 Devices/Year', price: '$12', period: 'Yearly', periodShort: 'Yearly', lifetimeLabel: 'Lifetime', url: 'https://www.paypal.com/ncp/payment/2GKPTJEBQF7KL' },
      { id: '2dev-2yr', name: 'WA Sender - 2 Devices/2 Years', price: '$25', period: '2 Years', periodShort: '2 Years', lifetimeLabel: 'Lifetime', url: 'https://www.paypal.com/ncp/payment/PMNSNED5TBWU8' }
    ],
    templates: {
      purchase: ['subscribed to', 'purchased', 'activated', 'got license for'],
      upgrade: ['upgraded to', 'moved to', 'switched to'],
      subscribe: ['started', 'joined us with', 'chose'],
      renewal: ['renewed', 'extended membership for']
    },
    timeAgo: ['Just now', '1 min ago', '2 mins ago', '3 mins ago', '5 mins ago', '8 mins ago'],
    messages: {
      purchase: '{name} from {city} {action} {plan}',
      upgrade_lifetime: '{name} from {country} {action} {plan} 🎉',
      upgrade_normal: '{name} {action} {period} instead of monthly',
      subscribe: '{name} from {country} {action} {plan} - {period}',
      renewal: '{name} {action} {plan} - Thanks for loyalty! 💚'
    },
    closeLabel: 'Close'
  },
  fr: {
    names: {
      male: ['Mohammed', 'Ahmed', 'Karim', 'Ali', 'Omar', 'Youssef', 'Hassan', 'Tarek', 'Samir', 'Ibrahim', 'Khalid', 'Saïd', 'Rachid', 'Jamal', 'Mehdi', 'Amine', 'Nabil', 'Hamza', 'Mounir', 'Fouad', 'Reda', 'Youssef', 'Adam', 'Louis', 'Gabriel', 'Romain', 'Nicolas', 'Thomas', 'Pierre', 'Paul', 'Jacques', 'Michel', 'David', 'Philippe', 'Christophe', 'Stéphane', 'Laurent', 'François'],
      female: ['Fatima', 'Nour', 'Maryam', 'Sarah', 'Zineb', 'Aicha', 'Hind', 'Dalal', 'Reem', 'Mona', 'Salma', 'Amal', 'Lina', 'Maya', 'Inès', 'Rania', 'Houda', 'Chirine', 'Leila', 'Emma', 'Chloé', 'Léa', 'Camille', 'Manon', 'Jade', 'Alice', 'Rose', 'Louise', 'Juliette', 'Clara']
    },
    locations: [
      { city: 'Le Caire', country: 'Égypte', flag: '🇪🇬' },
      { city: 'Alexandrie', country: 'Égypte', flag: '🇪🇬' },
      { city: 'Gizeh', country: 'Égypte', flag: '🇪🇬' },
      { city: 'Riyad', country: 'Arabie Saoudite', flag: '🇸🇦' },
      { city: 'Djeddah', country: 'Arabie Saoudite', flag: '🇸🇦' },
      { city: 'La Mecque', country: 'Arabie Saoudite', flag: '🇸🇦' },
      { city: 'Dammam', country: 'Arabie Saoudite', flag: '🇸🇦' },
      { city: 'Dubaï', country: 'Émirats', flag: '🇦🇪' },
      { city: 'Abu Dhabi', country: 'Émirats', flag: '🇦🇪' },
      { city: 'Koweït', country: 'Koweït', flag: '🇰🇼' },
      { city: 'Doha', country: 'Qatar', flag: '🇶🇦' },
      { city: 'Sanaa', country: 'Yémen', flag: '🇾🇪' },
      { city: 'Aden', country: 'Yémen', flag: '🇾🇪' },
      { city: 'Alger', country: 'Algérie', flag: '🇩🇿' },
      { city: 'Casablanca', country: 'Maroc', flag: '🇲🇦' },
      { city: 'Bagdad', country: 'Irak', flag: '🇮🇶' },
      { city: 'Amman', country: 'Jordanie', flag: '🇯🇴' },
      { city: 'Beyrouth', country: 'Liban', flag: '🇱🇧' },
      { city: 'Paris', country: 'France', flag: '🇫🇷' },
      { city: 'Lyon', country: 'France', flag: '🇫🇷' },
      { city: 'Marseille', country: 'France', flag: '🇫🇷' },
      { city: 'Montréal', country: 'Canada', flag: '🇨🇦' },
      { city: 'Bruxelles', country: 'Belgique', flag: '🇧🇪' }
    ],
    plans: [
      { id: 'yearly', name: 'WA Sender - 1 An', price: '$5', period: 'Annuel', periodShort: 'An', lifetimeLabel: 'À Vie', url: 'https://www.paypal.com/ncp/payment/S2MZ5XXCR65ZG' },
      { id: '2yearly', name: 'WA Sender - 2 Ans', price: '$15', period: '2 Ans', periodShort: '2 Ans', lifetimeLabel: 'À Vie', url: 'https://www.paypal.com/ncp/payment/FNR3E3UFRLSTC' },
      { id: '3yearly', name: 'WA Sender - 3 Ans', price: '$20', period: '3 Ans', periodShort: '3 Ans', lifetimeLabel: 'À Vie', url: 'https://www.paypal.com/ncp/payment/QF2GAKDECFGNJ' },
      { id: 'lifetime', name: 'WA Sender - À Vie', price: '$50', period: 'À Vie', periodShort: 'À Vie', lifetimeLabel: 'À Vie', url: 'https://www.paypal.com/ncp/payment/YR7KL36E3G6DW' },
      { id: '2dev-yearly', name: 'WA Sender - 2 Appareils/An', price: '$8', period: 'Annuel', periodShort: 'An', lifetimeLabel: 'À Vie', url: 'https://www.paypal.com/ncp/payment/UALYCA9GWSGYL' },
      { id: '3dev-yearly', name: 'WA Sender - 3 Appareils/An', price: '$12', period: 'Annuel', periodShort: 'An', lifetimeLabel: 'À Vie', url: 'https://www.paypal.com/ncp/payment/2GKPTJEBQF7KL' },
      { id: '2dev-2yr', name: 'WA Sender - 2 Appareils/2 Ans', price: '$25', period: '2 Ans', periodShort: '2 Ans', lifetimeLabel: 'À Vie', url: 'https://www.paypal.com/ncp/payment/PMNSNED5TBWU8' }
    ],
    templates: {
      purchase: ["s'est abonné à", "a acheté", "a activé", "a obtenu la licence"],
      upgrade: ["a mis à niveau vers", "est passé à", "a changé pour"],
      subscribe: ["a commencé avec", "nous a rejoint avec", "a choisi"],
      renewal: ["a renouvelé", "a prolongé son abonnement"]
    },
    timeAgo: ["À l'instant", "Il y a 1 min", "Il y a 2 min", "Il y a 3 min", "Il y a 5 min", "Il y a 8 min"],
    messages: {
      purchase: "{name} de {city} {action} {plan}",
      upgrade_lifetime: "{name} de {country} {action} {plan} 🎉",
      upgrade_normal: "{name} {action} {period} au lieu du mensuel",
      subscribe: "{name} de {country} {action} {plan} - {period}",
      renewal: "{name} {action} {plan} - Merci pour votre fidélité! 💚"
    },
    closeLabel: 'Fermer'
  },
  ru: {
    names: {
      male: ['Мохаммед', 'Ахмед', 'Махмуд', 'Хусейн', 'Омар', 'Юсуф', 'Карим', 'Али', 'Халед', 'Абдулла', 'Тарек', 'Самир', 'Фади', 'Ибрахим', 'Осама', 'Рами', 'Шади', 'Мостафа', 'Хамза', 'Хассан', 'Саид', 'Айман', 'Набиль', 'Адель', 'Моран', 'Ясир', 'Амро', 'Басем', 'Хани', 'Тамер', 'Александр', 'Дмитрий', 'Максим', 'Артём', 'Иван', 'Андрей', 'Сергей', 'Николай', 'Павел', 'Евгений', 'Владимир'],
      female: ['Фатима', 'Нур', 'Марьям', 'Сара', 'Зайнаб', 'Аиша', 'Хинд', 'Далаль', 'Рим', 'Мона', 'Сальма', 'Амаль', 'Нэнси', 'Май', 'Джена', 'Рана', 'Худа', 'Шерин', 'Лейла', 'Анна', 'Мария', 'Елизавета', 'Екатерина', 'Ольга', 'Наталья', 'София', 'Виктория', 'Полина', 'Алиса', 'Дарья']
    },
    locations: [
      { city: 'Каир', country: 'Египет', flag: '🇪🇬' },
      { city: 'Александрия', country: 'Египет', flag: '🇪🇬' },
      { city: 'Гиза', country: 'Египет', flag: '🇪🇬' },
      { city: 'Эр-Рияд', country: 'Саудовская Аравия', flag: '🇸🇦' },
      { city: 'Джидда', country: 'Саудовская Аравия', flag: '🇸🇦' },
      { city: 'Мекка', country: 'Саудовская Аравия', flag: '🇸🇦' },
      { city: 'Даммам', country: 'Саудовская Аравия', flag: '🇸🇦' },
      { city: 'Дубай', country: 'ОАЭ', flag: '🇦🇪' },
      { city: 'Абу-Даби', country: 'ОАЭ', flag: '🇦🇪' },
      { city: 'Эль-Кувейт', country: 'Кувейт', flag: '🇰🇼' },
      { city: 'Доха', country: 'Катар', flag: '🇶🇦' },
      { city: 'Сана', country: 'Йемен', flag: '🇾🇪' },
      { city: 'Аден', country: 'Йемен', flag: '🇾🇪' },
      { city: 'Алжир', country: 'Алжир', flag: '🇩🇿' },
      { city: 'Касабланка', country: 'Марокко', flag: '🇲🇦' },
      { city: 'Багдад', country: 'Ирак', flag: '🇮🇶' },
      { city: 'Амман', country: 'Иордания', flag: '🇯🇴' },
      { city: 'Бейрут', country: 'Ливан', flag: '🇱🇧' },
      { city: 'Москва', country: 'Россия', flag: '🇷🇺' },
      { city: 'Санкт-Петербург', country: 'Россия', flag: '🇷🇺' },
      { city: 'Стамбул', country: 'Турция', flag: '🇹🇷' },
      { city: 'Берлин', country: 'Германия', flag: '🇩🇪' },
      { city: 'Лондон', country: 'UK', flag: '🇬🇧' }
    ],
    plans: [
      { id: 'yearly', name: 'WA Sender - 1 Год', price: '$5', period: 'Годовой', periodShort: 'Год', lifetimeLabel: 'Навсегда', url: 'https://www.paypal.com/ncp/payment/S2MZ5XXCR65ZG' },
      { id: '2yearly', name: 'WA Sender - 2 Года', price: '$15', period: '2 Года', periodShort: '2 года', lifetimeLabel: 'Навсегда', url: 'https://www.paypal.com/ncp/payment/FNR3E3UFRLSTC' },
      { id: '3yearly', name: 'WA Sender - 3 Года', price: '$20', period: '3 Года', periodShort: '3 года', lifetimeLabel: 'Навсегда', url: 'https://www.paypal.com/ncp/payment/QF2GAKDECFGNJ' },
      { id: 'lifetime', name: 'WA Sender - Навсегда', price: '$50', period: 'Навсегда', periodShort: 'Навсегда', lifetimeLabel: 'Навсегда', url: 'https://www.paypal.com/ncp/payment/YR7KL36E3G6DW' },
      { id: '2dev-yearly', name: 'WA Sender - 2 устройства/Год', price: '$8', period: 'Годовой', periodShort: 'Год', lifetimeLabel: 'Навсегда', url: 'https://www.paypal.com/ncp/payment/UALYCA9GWSGYL' },
      { id: '3dev-yearly', name: 'WA Sender - 3 устройства/Год', price: '$12', period: 'Годовой', periodShort: 'Год', lifetimeLabel: 'Навсегда', url: 'https://www.paypal.com/ncp/payment/2GKPTJEBQF7KL' },
      { id: '2dev-2yr', name: 'WA Sender - 2 устройства/2 Года', price: '$25', period: '2 Года', periodShort: '2 года', lifetimeLabel: 'Навсегда', url: 'https://www.paypal.com/ncp/payment/PMNSNED5TBWU8' }
    ],
    templates: {
      purchase: ['подписался на', 'купил', 'активировал', 'получил лицензию'],
      upgrade: ['обновил до', 'перешёл на', 'переключился на'],
      subscribe: ['начал с', 'присоединился к нам с', 'выбрал'],
      renewal: ['продлил', 'продлил членство на']
    },
    timeAgo: ['Только что', '1 мин назад', '2 мин назад', '3 мин назад', '5 мин назад', '8 мин назад'],
    messages: {
      purchase: '{name} из {city} {action} {plan}',
      upgrade_lifetime: '{name} из {country} {action} {plan} 🎉',
      upgrade_normal: '{name} {action} {period} вместо месячного',
      subscribe: '{name} из {country} {action} {plan} - {period}',
      renewal: '{name} {action} {plan} - Спасибо за лояльность! 💚'
    },
    closeLabel: 'Закрыть'
  },
  it: {
    names: {
      male: ['Mohammed', 'Ahmed', 'Mahmoud', 'Hussein', 'Omar', 'Youssef', 'Karim', 'Ali', 'Khaled', 'Abdullah', 'Tarek', 'Samir', 'Fady', 'Ibrahim', 'Osama', 'Rami', 'Shady', 'Mostafa', 'Hamza', 'Hassan', 'Said', 'Ayman', 'Nabil', 'Adel', 'Moran', 'Yasser', 'Amro', 'Basem', 'Hany', 'Tamer', 'Marco', 'Luca', 'Giuseppe', 'Alessandro', 'Giovanni', 'Andrea', 'Matteo', 'Francesco', 'Lorenzo', 'Leonardo', 'Davide', 'Riccardo'],
      female: ['Fatima', 'Nour', 'Maryam', 'Sarah', 'Zainab', 'Aisha', 'Hind', 'Dalal', 'Reem', 'Mona', 'Salma', 'Amal', 'Nancy', 'Mei', 'Jenna', 'Rana', 'Hoda', 'Shereen', 'Layla', 'Sofia', 'Giulia', 'Aurora', 'Ginevra', 'Alice', 'Beatrice', 'Chiara', 'Sara', 'Martina', 'Elisa', 'Federica']
    },
    locations: [
      { city: 'Il Cairo', country: 'Egitto', flag: '🇪🇬' },
      { city: 'Alessandria', country: 'Egitto', flag: '🇪🇬' },
      { city: 'Giza', country: 'Egitto', flag: '🇪🇬' },
      { city: 'Riad', country: 'Arabia Saudita', flag: '🇸🇦' },
      { city: 'Jeddah', country: 'Arabia Saudita', flag: '🇸🇦' },
      { city: 'La Mecca', country: 'Arabia Saudita', flag: '🇸🇦' },
      { city: 'Dammam', country: 'Arabia Saudita', flag: '🇸🇦' },
      { city: 'Dubai', country: 'Emirati Arabi Uniti', flag: '🇦🇪' },
      { city: 'Abu Dhabi', country: 'Emirati Arabi Uniti', flag: '🇦🇪' },
      { city: 'Kuwait', country: 'Kuwait', flag: '🇰🇼' },
      { city: 'Doha', country: 'Qatar', flag: '🇶🇦' },
      { city: "Sana'a", country: 'Yemen', flag: '🇾🇪' },
      { city: 'Aden', country: 'Yemen', flag: '🇾🇪' },
      { city: 'Algeri', country: 'Algeria', flag: '🇩🇿' },
      { city: 'Casablanca', country: 'Marocco', flag: '🇲🇦' },
      { city: 'Baghdad', country: 'Iraq', flag: '🇮🇶' },
      { city: 'Amman', country: 'Giordania', flag: '🇯🇴' },
      { city: 'Beirut', country: 'Libano', flag: '🇱🇧' },
      { city: 'Roma', country: 'Italia', flag: '🇮🇹' },
      { city: 'Milano', country: 'Italia', flag: '🇮🇹' },
      { city: 'Napoli', country: 'Italia', flag: '🇮🇹' },
      { city: 'Torino', country: 'Italia', flag: '🇮🇹' },
      { city: 'Firenze', country: 'Italia', flag: '🇮🇹' }
    ],
    plans: [
      { id: 'yearly', name: 'WA Sender - 1 Anno', price: '$5', period: 'Annuale', periodShort: 'Anno', lifetimeLabel: 'Vita', url: 'https://www.paypal.com/ncp/payment/S2MZ5XXCR65ZG' },
      { id: '2yearly', name: 'WA Sender - 2 Anni', price: '$15', period: '2 Anni', periodShort: '2 Anni', lifetimeLabel: 'Vita', url: 'https://www.paypal.com/ncp/payment/FNR3E3UFRLSTC' },
      { id: '3yearly', name: 'WA Sender - 3 Anni', price: '$20', period: '3 Anni', periodShort: '3 Anni', lifetimeLabel: 'Vita', url: 'https://www.paypal.com/ncp/payment/QF2GAKDECFGNJ' },
      { id: 'lifetime', name: 'WA Sender - Vita', price: '$50', period: 'Vita', periodShort: 'Vita', lifetimeLabel: 'Vita', url: 'https://www.paypal.com/ncp/payment/YR7KL36E3G6DW' },
      { id: '2dev-yearly', name: 'WA Sender - 2 Dispositivi/Anno', price: '$8', period: 'Annuale', periodShort: 'Anno', lifetimeLabel: 'Vita', url: 'https://www.paypal.com/ncp/payment/UALYCA9GWSGYL' },
      { id: '3dev-yearly', name: 'WA Sender - 3 Dispositivi/Anno', price: '$12', period: 'Annuale', periodShort: 'Anno', lifetimeLabel: 'Vita', url: 'https://www.paypal.com/ncp/payment/2GKPTJEBQF7KL' },
      { id: '2dev-2yr', name: 'WA Sender - 2 Dispositivi/2 Anni', price: '$25', period: '2 Anni', periodShort: '2 Anni', lifetimeLabel: 'Vita', url: 'https://www.paypal.com/ncp/payment/PMNSNED5TBWU8' }
    ],
    templates: {
      purchase: ['si è abbonato a', 'ha acquistato', 'ha attivato', 'ha ottenuto la licenza'],
      upgrade: ['è passato a', 'ha aggiornato a', 'ha cambiato con'],
      subscribe: ['ha iniziato con', 'si è unito a noi con', 'ha scelto'],
      renewal: ['ha rinnovato', 'ha prolungato l\'iscrizione per']
    },
    timeAgo: ['Adesso', '1 min fa', '2 min fa', '3 min fa', '5 min fa', '8 min fa'],
    messages: {
      purchase: '{name} da {city} {action} {plan}',
      upgrade_lifetime: '{name} da {country} {action} {plan} 🎉',
      upgrade_normal: '{name} {action} {period} invece che mensile',
      subscribe: '{name} da {country} {action} {plan} - {period}',
      renewal: '{name} {action} {plan} - Grazie per la fedeltà! 💚'
    },
    closeLabel: 'Chiudi'
  }
};

// ── Helper Functions ──
function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomName(lang) {
  var data = notificationData[lang] || notificationData.en;
  var allNames = [...data.names.male, ...data.names.female];
  return getRandomItem(allNames);
}

function generateNotification() {
  var lang = currentLang || 'ar';
  var data = notificationData[lang] || notificationData.en;
  
  var name = getRandomName(lang);
  var location = getRandomItem(data.locations);
  var plan = getRandomItem(data.plans);
  var actionType = getRandomItem(['purchase', 'upgrade', 'subscribe', 'renewal']);
  var action = getRandomItem(data.templates[actionType]);
  var timeAgo = getRandomItem(data.timeAgo);
  
  var message = '';
  
  if (actionType === 'purchase') {
    message = data.messages.purchase
      .replace('{name}', name)
      .replace('{city}', location.city)
      .replace('{action}', action)
      .replace('{plan}', plan.name);
  } else if (actionType === 'upgrade') {
    if (plan.id === 'lifetime') {
      message = data.messages.upgrade_lifetime
        .replace('{name}', name)
        .replace('{country}', location.country)
        .replace('{action}', action)
        .replace('{plan}', plan.name);
    } else {
      message = data.messages.upgrade_normal
        .replace('{name}', name)
        .replace('{action}', action)
        .replace('{period}', plan.period);
    }
  } else if (actionType === 'subscribe') {
    message = data.messages.subscribe
      .replace('{name}', name)
      .replace('{country}', location.country)
      .replace('{action}', action)
      .replace('{plan}', plan.name)
      .replace('{period}', plan.period);
  } else if (actionType === 'renewal') {
    message = data.messages.renewal
      .replace('{name}', name)
      .replace('{action}', action)
      .replace('{plan}', plan.name);
  }

  return {
    id: Date.now() + Math.random(),
    name: name,
    message: message,
    location: location.flag + ' ' + location.city,
    timeAgo: timeAgo,
    plan: plan.name,
    planShort: plan.id === 'lifetime' ? plan.lifetimeLabel : plan.periodShort,
    url: plan.url,
    price: plan.price,
    closeLabel: data.closeLabel
  };
}

function createNotificationElement(data) {
  var notification = document.createElement('a');
  notification.className = 'sales-notification';
  notification.href = data.url;
  notification.target = '_blank';
  notification.rel = 'nofollow noopener';
  notification.setAttribute('data-notification-id', data.id);
  notification.style.animation = 'slideInRight 0.5s ease forwards';
  
  notification.innerHTML = 
    '<div class="sn-icon">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">' +
        '<polyline points="20 6 9 17 4 12"></polyline>' +
      '</svg>' +
    '</div>' +
    '<div class="sn-content">' +
      '<div class="sn-text">' +
        '<strong>' + data.name + '</strong>' +
        '<span>' + data.message + '</span>' +
        '<span class="sn-program">💎 ' + data.planShort + ' - ' + data.price + '</span>' +
      '</div>' +
      '<div class="sn-meta">' +
        '<span class="sn-location">📍 ' + data.location + '</span>' +
        '<span class="sn-time">⏱ ' + data.timeAgo + '</span>' +
      '</div>' +
    '</div>' +
    '<button class="sn-close" onclick="event.preventDefault(); event.stopPropagation(); closeNotification(' + data.id + ');" aria-label="' + (data.closeLabel || 'Close') + '">✕</button>';
  
  return notification;
}

const SalesNotifications = {
  container: null,
  activeNotifications: [],
  isActive: true,
  intervalId: null,
  maxVisible: 3,
  displayDuration: 8000,
  minInterval: 4000,
  maxInterval: 12000,
  
  init() {
    this.container = document.getElementById('sales-notifications-container');
    if (!this.container) return;
    
    setTimeout(() => this.start(), 3000);
    
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.pause();
      } else {
        this.resume();
      }
    });
  },
  
  start() {
    if (!this.isActive) return;
    
    this.showNotification();
    this.scheduleNext();
  },
  
  scheduleNext() {
    if (this.intervalId) clearTimeout(this.intervalId);
    
    const delay = this.minInterval + Math.random() * (this.maxInterval - this.minInterval);
    
    this.intervalId = setTimeout(() => {
      if (this.isActive && document.visibilityState === 'visible') {
        this.showNotification();
      }
      this.scheduleNext();
    }, delay);
  },
  
  showNotification() {
    if (!this.container) return;
    
    if (this.activeNotifications.length >= this.maxVisible) {
      const oldest = this.activeNotifications.shift();
      this.removeNotification(oldest, false);
    }
    
    const data = generateNotification();
    const element = createNotificationElement(data);
    
    this.container.appendChild(element);
    this.activeNotifications.push(data.id);
    
    setTimeout(() => {
      this.removeNotification(data.id, true);
    }, this.displayDuration);
  },
  
  removeNotification(id, animate) {
    animate = animate !== undefined ? animate : true;
    var element = this.container ? this.container.querySelector('[data-notification-id="' + id + '"]') : null;
    if (!element) return;
    
    if (animate) {
      element.style.animation = 'slideOutRight 0.4s ease forwards';
      setTimeout(() => element.remove(), 400);
    } else {
      element.remove();
    }
    
    this.activeNotifications = this.activeNotifications.filter(function(nId) { return nId !== id; });
  },
  
  pause() {
    this.isActive = false;
    if (this.intervalId) {
      clearTimeout(this.intervalId);
      this.intervalId = null;
    }
  },
  
  resume() {
    this.isActive = true;
    this.scheduleNext();
  }
};

function closeNotification(id) {
  SalesNotifications.removeNotification(id, true);
}

document.addEventListener('DOMContentLoaded', function() {
  SalesNotifications.init();
});
