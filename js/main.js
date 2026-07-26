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
    plan1_name: 'الباقة الأساسية', plan1_period: 'سنوي', plan1b_name: 'جهاز واحد', plan1b_period: 'سنة واحدة',
    plan2_name: 'الباقة الاحترافية', plan2_period: 'سنوي',
    pf1: 'إرسال رسائل غير محدودة', pf2: 'استخراج أعضاء المجموعات', pf3: 'استخراج من خرائط جوجل',
    pf4: 'الرد التلقائي', pf5: 'جدولة الرسائل', pf6: 'فلترة الأرقام', pf7: 'متعدد الحسابات',
    pf8: 'تقارير مفصلة', pf9: 'حماية من الحظر', pf10: 'دعم فني على مدار الساعة',
    pf11: 'تحديثات مجانية', pf12: 'جهازان في نفس الوقت', pf13: '3 أجهزة في نفس الوقت',
    devices_1: 'جهاز واحد', devices_2: 'جهازان', devices_3: '3 أجهزة',
    popular_badge: 'الأكثر شعبية', btn_buy_now: 'اشترك الآن',
    price_group1: 'باقات جهاز واحد', price_group2: 'باقات متعددة الأجهزة',
    payment_title: 'طرق الدفع المتاحة', payment_subtitle: 'اختر طريقة الدفع المناسبة لك',
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
    plan1_name: 'Basic Plan', plan1_period: 'Yearly', plan1b_name: 'Single Device', plan1b_period: 'One Year',
    plan2_name: 'Professional Plan', plan2_period: 'Yearly',
    pf1: 'Unlimited messaging', pf2: 'Group member extraction', pf3: 'Google Maps extraction',
    pf4: 'Auto-reply', pf5: 'Message scheduling', pf6: 'Number filtering', pf7: 'Multi-account support',
    pf8: 'Detailed reports', pf9: 'Ban protection', pf10: '24/7 technical support',
    pf11: 'Free updates', pf12: 'Two devices simultaneously', pf13: '3 devices simultaneously',
    devices_1: 'Single Device', devices_2: 'Two Devices', devices_3: '3 Devices',
    popular_badge: 'Most Popular', btn_buy_now: 'Subscribe Now',
    price_group1: 'Single Device Plans', price_group2: 'Multi-Device Plans',
    payment_title: 'Available Payment Methods', payment_subtitle: 'Choose the payment method that suits you',
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
    plan1_name: 'Forfait Essentiel', plan1_period: 'Annuel', plan1b_name: 'Appareil Unique', plan1b_period: 'Un An',
    plan2_name: 'Forfait Pro', plan2_period: 'Annuel',
    pf1: 'Envoi illimité', pf2: 'Extraction groupes', pf3: 'Extraction Google Maps',
    pf4: 'Réponse auto', pf5: 'Planification', pf6: 'Filtrage', pf7: 'Multi-comptes',
    pf8: 'Rapports', pf9: 'Anti-blocage', pf10: 'Support 24/7',
    pf11: 'Mises à jour gratuites', pf12: '2 appareils', pf13: '3 appareils',
    devices_1: 'Appareil Unique', devices_2: 'Deux Appareils', devices_3: '3 Appareils',
    popular_badge: 'Plus Populaire', btn_buy_now: 'S\'abonner',
    price_group1: 'Forfaits 1 Appareil', price_group2: 'Forfaits Multi-Appareils',
    payment_title: 'Méthodes de Paiement', payment_subtitle: 'Choisissez votre méthode',
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
    plan1_name: 'Базовый План', plan1_period: 'Годовой', plan1b_name: 'Одно Устройство', plan1b_period: 'Один Год',
    plan2_name: 'Профессиональный', plan2_period: 'Годовой',
    pf1: 'Неограниченная рассылка', pf2: 'Извлечение групп', pf3: 'Извлечение Google Maps',
    pf4: 'Автоответ', pf5: 'Планирование', pf6: 'Фильтрация', pf7: 'Мультиаккаунты',
    pf8: 'Отчёты', pf9: 'Защита от бана', pf10: 'Поддержка 24/7',
    pf11: 'Бесплатные обновления', pf12: '2 устройства', pf13: '3 устройства',
    devices_1: 'Одно Устройство', devices_2: 'Два Устройства', devices_3: '3 Устройства',
    popular_badge: 'Популярный', btn_buy_now: 'Подписаться',
    price_group1: 'Планы на 1 Устройство', price_group2: 'Мультиустройственные Планы',
    payment_title: 'Способы Оплаты', payment_subtitle: 'Выберите удобный способ',
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
    plan1_name: 'Piano Base', plan1_period: 'Annuale', plan1b_name: 'Dispositivo Singolo', plan1b_period: 'Un Anno',
    plan2_name: 'Piano Professionale', plan2_period: 'Annuale',
    pf1: 'Invio illimitato', pf2: 'Estrazione gruppi', pf3: 'Estrazione Google Maps',
    pf4: 'Risposta auto', pf5: 'Pianificazione', pf6: 'Filtraggio', pf7: 'Multi-account',
    pf8: 'Report', pf9: 'Anti-ban', pf10: 'Supporto 24/7',
    pf11: 'Aggiornamenti gratuiti', pf12: '2 dispositivi', pf13: '3 dispositivi',
    devices_1: 'Dispositivo Singolo', devices_2: 'Due Dispositivi', devices_3: '3 Dispositivi',
    popular_badge: 'Più Popolare', btn_buy_now: 'Abbonati Ora',
    price_group1: 'Piani 1 Dispositivo', price_group2: 'Piani Multi-Dispositivo',
    payment_title: 'Metodi di Pagamento', payment_subtitle: 'Scegli metodo preferito',
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
   SALES NOTIFICATIONS SYSTEM
   ═══════════════════════════════════════════════════════════════ */

const arabicNames = {
  egyptianMale: ['محمد', 'أحمد', 'محمود', 'حسين', 'عمر', 'يوسف', 'كريم', 'علي', 'خالد', 'أبو عبدالله'],
  egyptianFemale: ['فاطمة', 'نور', 'مريم', 'سارة', 'زينب', 'عائشة', 'هند', 'دلال', 'ريم', 'منى'],
  saudiMale: ['أبو عبدالله', 'عابد', 'سلطان', 'فيصل', 'بدر', 'نايف', 'خالد', 'عبدالعزيز'],
  saudiFemale: ['نورة', 'لطيفة', 'جميلة', 'هيا', 'ريما', 'أريج', 'ملاك', 'أميرة'],
  yemeniMale: ['عابد', 'معتصم', 'أيوب', 'صالح', 'أنس', 'بركات', 'مكرم', 'جمال'],
  gulfNames: ['سالم', 'مبارك', 'غسان', 'راشد', 'عتيبة', 'حسن', 'نجيب', 'كاظم']
};

const locations = [
  { city: 'القاهرة', country: '🇪🇬 مصر', flag: '🇪🇬' },
  { city: 'الإسكندرية', country: '🇪🇬 مصر', flag: '🇪🇬' },
  { city: 'الجيزة', country: '🇪🇬 مصر', flag: '🇪🇬' },
  { city: 'المنصورة', country: '🇪🇬 مصر', flag: '🇪🇬' },
  { city: 'الرياض', country: '🇸🇦 السعودية', flag: '🇸🇦' },
  { city: 'جدة', country: '🇸🇦 السعودية', flag: '🇸🇦' },
  { city: 'مكة المكرمة', country: '🇸🇦 السعودية', flag: '🇸🇦' },
  { city: 'المدينة المنورة', country: '🇸🇦 السعودية', flag: '🇸🇦' },
  { city: 'الدمام', country: '🇸🇦 السعودية', flag: '🇸🇦' },
  { city: 'صنعاء', country: '🇾🇪 اليمن', flag: '🇾🇪' },
  { city: 'عدن', country: '🇾🇪 اليمن', flag: '🇾🇪' },
  { city: 'دبي', country: '🦃 الإمارات', flag: '🦃' },
  { city: 'أبوظبي', country: '🦃 الإمارات', flag: '🦃' },
  { city: 'الكويت', country: '🰏 الكويت', flag: '🰏' },
  { city: 'الدوحة', country: '🇶🇦 قطر', flag: '🇶🇦' },
  { city: 'مسقط', country: '🇴🇲 عُمان', flag: '🇴🇲' },
  { city: 'البحرين', country: '🇧🇭 البحرين', flag: '🇧🇭' },
  { city: 'عمان', country: '🇯🇴 الأردن', flag: '🇯🇴' },
  { city: 'بيروت', country: '🇱🇧 لبنان', flag: '🇱🇧' },
  { city: 'الجزائر', country: '🇩🇿 الجزائر', flag: '🇩🇿' },
  { city: 'المغرب', country: '🇲🇦 المغرب', flag: '🇲🇦' },
  { city: 'بغداد', country: '🇮🇶 العراق', flag: '🇮🇶' }
];

const plans = [
  { id: 'yearly', name: 'WA Sender - سنة واحدة', price: '$5', period: 'سنوي', url: 'https://www.paypal.com/ncp/payment/S2MZ5XXCR65ZG' },
  { id: '2yearly', name: 'WA Sender - سنتين', price: '$15', period: 'سنتين', url: 'https://www.paypal.com/ncp/payment/FNR3E3UFRLSTC' },
  { id: '3yearly', name: 'WA Sender - 3 أعوام', price: '$20', period: '3 أعوام', url: 'https://www.paypal.com/ncp/payment/QF2GAKDECFGNJ' },
  { id: 'lifetime', name: 'WA Sender - مدى الحياة', price: '$50', period: 'مدى الحياة', url: 'https://www.paypal.com/ncp/payment/YR7KL36E3G6DW' },
  { id: '2dev-yearly', name: 'WA Sender - جهازان/سنة', price: '$8', period: 'سنوي', url: 'https://www.paypal.com/ncp/payment/UALYCA9GWSGYL' },
  { id: '3dev-yearly', name: 'WA Sender - 3 أجهزة/سنة', price: '$12', period: 'سنوي', url: 'https://www.paypal.com/ncp/payment/2GKPTJEBQF7KL' },
  { id: '2dev-2yr', name: 'WA Sender - جهازان/سنتين', price: '$25', period: 'سنتين', url: 'https://www.paypal.com/ncp/payment/PMNSNED5TBWU8' }
];

const messageTemplates = [
  { type: 'purchase', text: 'اشترك في باقة', icon: '💳' },
  { type: 'purchase', text: 'اشترى باقة', icon: '🛒' },
  { type: 'purchase', text: 'فعّل باقة', icon: '✅' },
  { type: 'purchase', text: 'احصل على رخصة', icon: '🎫' },
  { type: 'upgrade', text: 'طور خطته إلى', icon: '⬆️' },
  { type: 'upgrade', text: 'رقّى اشتراكه إلى', icon: '🚀' },
  { type: 'upgrade', text: 'حدّث باقته إلى', icon: '✨' },
  { type: 'subscribe', text: 'بدأ اشتراكه في', icon: '📲' },
  { type: 'subscribe', text: 'انضم إلينا عبر', icon: '🌟' },
  { type: 'subscribe', text: 'اختار باقة', icon: '💎' },
  { type: 'renewal', text: 'جدّد اشتراكه في', icon: '🔄' },
  { type: 'renewal', text: 'مدد عضويته لـ', icon: '⏰' }
];

const timeAgoStrings = ['الآن', 'منذ دقيقة', 'منذ دقيقتين', 'منذ 3 دقائق', 'منذ 5 دقائق', 'منذ 8 دقائق'];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomName() {
  const namePools = [
    ...arabicNames.egyptianMale.map(n => ({ name: n, gender: 'male' })),
    ...arabicNames.egyptianFemale.map(n => ({ name: n, gender: 'female' })),
    ...arabicNames.saudiMale.map(n => ({ name: n, gender: 'male' })),
    ...arabicNames.saudiFemale.map(n => ({ name: n, gender: 'female' })),
    ...arabicNames.yemeniMale.map(n => ({ name: n, gender: 'male' })),
    ...arabicNames.gulfNames.map(n => ({ name: n, gender: 'male' }))
  ];
  return getRandomItem(namePools);
}

function generateNotification() {
  const person = getRandomName();
  const location = getRandomItem(locations);
  const plan = getRandomItem(plans);
  const template = getRandomItem(messageTemplates);
  const timeAgo = getRandomItem(timeAgoStrings);
  
  let message = '';
  
  switch(template.type) {
    case 'purchase':
      message = person.name + ' من ' + location.city + ' ' + template.text + ' ' + plan.name;
      break;
    case 'upgrade':
      if (plan.id === 'lifetime') {
        message = person.name + ' من ' + location.country + ' ' + template.text + ' ' + plan.name + ' 🎉';
      } else {
        message = person.name + ' ' + template.text + ' ' + plan.period + ' بدلًا من شهري';
      }
      break;
    case 'subscribe':
      message = person.name + ' من ' + location.country + ' ' + template.text + ' ' + plan.name + ' لمدة ' + plan.period;
      break;
    case 'renewal':
      message = person.name + ' ' + template.text + ' ' + plan.name + ' - شكرًا للولاء! 💚';
      break;
    default:
      message = person.name + ' ' + template.text + ' ' + plan.name;
  }

  return {
    id: Date.now() + Math.random(),
    name: person.name,
    message: message,
    location: location.flag + ' ' + location.city,
    timeAgo: timeAgo,
    plan: plan.name,
    planShort: plan.id === 'lifetime' ? 'مدى الحياة' : plan.period,
    url: plan.url,
    icon: template.icon,
    price: plan.price
  };
}

function createNotificationElement(data) {
  const notification = document.createElement('a');
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
        '<span class="sn-program">' + data.icon + ' ' + data.planShort + ' - ' + data.price + '</span>' +
      '</div>' +
      '<div class="sn-meta">' +
        '<span class="sn-location">📍 ' + data.location + '</span>' +
        '<span class="sn-time">⏱ ' + data.timeAgo + '</span>' +
      '</div>' +
    '</div>' +
    '<button class="sn-close" onclick="event.preventDefault(); event.stopPropagation(); closeNotification(' + data.id + ');" aria-label="إغلاق">✕</button>';
  
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
