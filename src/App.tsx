import React, { useState, useEffect } from "react";
import {
  Globe, Check, CheckCircle2, Phone,
  ArrowRight, ArrowLeft, Monitor, Smartphone, Sparkles,
  Utensils, Briefcase, Heart, Activity, Calendar, Hammer,
  Paintbrush, ShieldCheck, Trophy, Zap, Award, MessageSquare,
  HelpCircle, Lightbulb, Loader2, Info, ExternalLink, RefreshCw,
  Sparkle, Truck, Users
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Translations Catalog
const th = {
  ar: {
    dir: "rtl" as const,
    siteTitle: "9ii.xyz | تصميم وإدارة المواقع الاحترافية بـ 70$ سنوياً",
    navLogo: "9ii.xyz",
    navSlogan: "تصميم وإدارة المواقع بالكامل للغير",
    navHome: "الرئيسية",
    navGenerator: "محاكي المواقع المباشر",
    navFeatures: "مميزات الباقة",
    navFAQ: "الأسئلة الشائعة",
    navContact: "احجز موقعك الآن",
    heroBadge: "🚀 تخلص من الصداع التقني - نحن نتكفل بكل شيء عنك",
    heroTitlePart1: "صمّم موقع عملك الفريد والاحترافي",
    heroTitlePart2: "بـ 70$ سنوياً فقط ودون أي عناء تقني!",
    heroSubtitle: "ننشئ لك موقعاً احترافياً بالكامل دون أدنى عناء منك. نحن نتولى كافة التفاصيل من حجز الدومين وربطه بالاستضافة السريعة، وأعمال التصميم والتعديل المستمر طوال العام مجاناً. أنت فقط استلم رابط موقعك الجاهز وانشره لعملائك!",
    ctaPrimary: "جرب المحاكي الفوري بالذكاء الاصطناعي ⚡",
    ctaSecondary: "واتساب مباشر للتحدث معنا",
    // Site Simulator
    simTitle: "🛠️ مُحقّـق ومعـايَن المواقـع التـفاعلي",
    simSub: "أدخل اسم مشروعك ومجالك وسيقوم الذكاء الاصطناعي بصياغة نسخة تجريبية حقيقية لصفحات ومحتوى موقعك المقترح لترى جودة لمساتنا فوراً وقبل دفع أي شيء! اذا اردت نفس التصميم فقط اخبرنا ماذا كتبت فى اسم المشروع او الشركة ايضا ماذا كتبت فى خانة نبذة بسيطة عما تقدمه (اختياري): علما ان هذا مجرد نموزج تفاعلي لا اكثر نحن لا نصمم به بالعادة بل نحاول ان نضعك فى الصورة معنا نحاول تحقيق الافضل لك او ارسل لنا تصورك عن شكل الموقع لنبنية لك من الوان وخطوط وما الى ذلك",
    bizNameLabel: "اسم مشروعك أو شركتك:",
    bizNamePlaceholder: "مثال: مأكولات الشرق، شركة الأعمار للمقاولات، إلخ.",
    bizTypeLabel: "تخصص العمل أو قطاع النشاط:",
    bizDescLabel: "نبذة بسيطة عما تقدمه (اختياري):",
    bizDescPlaceholder: "مثال: نقدم خدمات الفحص الطبي المتكامل، أو تخصصنا الوجبات الشامية السريعة لفتح شهية عملائنا...",
    generateBtn: "توليد المسودة واستعراضها مجاناً ✨",
    generatingBtn: "صياغة النصوص وصياغة التصاميم...",
    previewDeviceTitle: "شاشة محاكاة موقعك الفعلي المقترح",
    tabHome: "الرئيسية",
    tabServices: "خدماتنا",
    tabAbout: "من نحن",
    tabContact: "اتصل بنا",
    badgeBestSeller: "توصية العملاء 🌟",
    // Fallback Info Banner
    fallbackUsedNotice: "💡 تم توليد المسودة بنجاح! إذا كنت ترغب بتعديل الألوان والخطوط والأقسام، تواصل معنا فوراً بالواتساب لنضبطها لك بالكامل.",
    // Guarantee & Pricing
    pricingHeader: "💎 باقة شاملة ومثالية لكل الأنشطة بـ 70$ سنوياً",
    pricingDesc: "لا نتقاضى أي دفعات مسبقة إلا بعد أن تنجز المسودة ونعرضها عليك على رابط فعلي وتؤكد رضاك التام عنها 100%.",
    guaranteeTitle: "🤝 عـهـد الرضا والضمان الذهـبـي لـدينا",
    guaranteeDesc: "إذا لم تعجبك المسودة ولم تتوائم مع رؤيتك وتوقعاتك، فلك كامل الحق في الانسحاب دون تحمل أي تكلفة. وإذا رغبت بأي تعديل طوال العام نقوم به عن طريق رسالة واتساب مجاناً وبلا لوحات تحكم معقدة.",
    annualLabel: "تكلفة سنوية موحدة وبسيطة",
    onlyPrice: "70$ سنوياً فقط",
    includesListTitle: "تشمل الباقة سنوياً وبدون تكاليف مخفية:",
    includesItem1: "حجز الدومين الاحترافي الخاص بك (مثال: .com أو .net)",
    includesItem2: "استضافة سحابية فائقة السرعة مع حماية وأمان (SSL)",
    includesItem3: "تصميم متقن وفريد متناسق بالكامل مع الهواتف والحواسب",
    includesItem4: "تعديلات وصيانة ومتابعة لمحتواك طوال العام مجاناً",
    // FAQ
    faqHeader: "💬 الأسئلة الأكثر شيوعاً وتكراراً",
    faqSub: "إجابات شافية تفصل بساطة تعاملاتنا وخلوها من التعقيد التقني",
    faqQ1: "هل السعر 70 دولار حقيقي وماذا يخفي؟",
    faqA1: "حقيقي وبلا أي شروط ملتوية! 70 دولاراً سنوياً كافية لحجز دومين خاص بك، استضافة موقعك على أحدث خوادم آمنة وسريعة، وتصميم وتفعيل موقعك، وإجراء أي تعديل ترغب به على مدار الـ 365 يوماً دون دفع أي مبالغ إضافية.",
    faqQ2: "ماذا يحدث لو أردت تغيير صور أو تزويد موقعي بفرع جديد؟",
    faqA2: "ببساطة شديدة: ترسل لنا رسالة واتساب قصيرة بالتعديل المطلوب، وسيقوم فريق الدعم الفني بتحديث الموقع لك فوراً وبشكل مجاني تماماً! لن تضطر للدخول في واجهات برمجة صعبة أو تعيين مبرمجين.",
    faqQ3: "لماذا تقدمون هذه الخدمة بهذا السعر التنافسي؟",
    faqA3: "غايتنا تذليل العقبات وتسهيل التحول الرقمي لأصحاب المشاريع الصغيرة، الرواد، الحرفيين والمهنيين، دون تشتيت ميزانياتهم. بالاعتماد على أدوات توليد وهيكلة متقدمة وعالمية، نوفر خدمة استثنائية بكلفة لا تذكر وفي وقت قياسي.",
    // Timeline
    timelineHeader: "📌 رحلتك الممتعة لتملك موقعك الاحترافي",
    timelineSub: "خطوات عفوية وسريعة تفصلك عن زيادة عملائك وانتشارك",
    step1Title: "1. الإيجـاز وعصف الفـكرة",
    step1Desc: "ارسل لنا بيانات مشروعك عبر الواتساب في دقيقتين فقط.",
    step2Title: "2. تصميم المسودة الأولية",
    step2Desc: "يقوم المصممين لدينا بتهيئة الهيكل والمقاطع والمسودات بجمال بصري.",
    step3Title: "3. المراجعة والتعديل",
    step3Desc: "تبدي ملاحظاتك وتعديلاتك وتستعرض شكل الموقع حتى تكون راضياً تماماً بنسبة 100%.",
    step4Title: "4. تفعيل الدومين والخرائط وحفل البداية",
    step4Desc: "نربط موقعك بالدومين والخرائط ونسلمك رابطك لتنطلق لأعمالك بثقة وبحماية مستمرة!",
    // Booking Form
    formTitle: "🎯 احجز موقعك ودع الباقي لخبرائنا",
    formSub: "تجرأ على الحضور الرقمي اليوم وسيتم تسليم مسودتك الأولى وحجز دومينك خلال ساعات لتستعرض موقع تفخر به أمام زوارك.",
    formName: "الاسم الكريم:",
    formPhone: "رقم الواتساب المتوفر (مع رمز الدولة):",
    formNotes: "ملاحظات وتفاصيل إضافية تود إخبار الفنيين بها:",
    formDomain: "الدومين المقترح المفضل (اختياري، مثلاً: name.com):",
    formSubmit: "إرسال حماية الطلب وبدء المسودة بالواتساب ⚡",
    rightsReserved: "جميع الحقوق محفوظة لـ 9ii.xyz. حلول تصميم المواقع للغير بلا عناء تقني.",
    whatsappHello: "أريد طلب تصميم موقع \n\" اخبرنا بالتفاصيل التى ترغب بها \"",
    privacyLabel: "📄 سياسة الخصوصية",
    privacyTitle: "🔒 سياسة الخصوصية لـ 9ii.xyz (مبسطة ومريحة لكم)",
    privacySub: "حضوركم وإعلانكم آمن تماماً وبكل راحة بال",
    privacyIntro: "أهلاً بك! مصلحتك وراحتك هي غايتنا الأولى. نحن نحترم خصوصيتك بالكامل، ونوفر لك هذه الصفحة المبسطة لتوضيح سياستنا بكل شفافية وبدون تعقيدات قانونية صعبة تشعرك بالريبة:",
    privacyPoints: [
      "لا تتبع خفي بأي شكل: موقعنا آمن تماماً، ولا نستخدم أي ملفات تعريف ارتباط (Cookies) مخفية لتتبع تصفحك الشخصي أو معرفة اهتماماتك الخاصة.",
      "البيانات طوعية وبإرادتك الكاملة: البيانات الوحيدة التي تصل إلينا وتتعامل معها هي ما تدخله بنفسك طوعاً (مثل الاسم، أو اسم مشروعك لتجربة المعاينة التفاعلية، أو أثناء مراسلتنا بالواتساب) وذلك فقط بغرض تفعيل موقعك وتصميمه أو تعديله بموافقتك.",
      "سرية وأمان بنسبة 100%: نحن نلتزم التزاماً أخلاقياً ومهنياً صارماً بعدم مشاركة أو بيع أو تأجير اسم مشروعك، أو رقم هاتفك، أو أي تفاصيل ترسلها لنا مع أي جهة خارجية أو أطراف تسويقية على الإطلاق.",
      "موائمة شروط شبكات الإعلانات: نوفر رابط هذه الصفحة استجابةً للقوانين التنظيمية لمنصات الإعلانات مثل فيسبوك، إنستغرام، وجوجل، لضمان قبول حملاتنا الإعلانية الترويجية كخدمة موثوقة ونظامية بالكامل."
    ],
    privacyClose: "فهمت بالتأكيد، إغلاق"
  },
  en: {
    dir: "ltr" as const,
    siteTitle: "9ii.xyz | Premium Professional Web Design for Just $70 Yearly",
    navLogo: "9ii.xyz",
    navSlogan: "Fully Handled Web Solutions",
    navHome: "Home",
    navGenerator: "Live Site Simulator",
    navFeatures: "The Package",
    navFAQ: "FAQs",
    navContact: "Order Right Now",
    heroBadge: "🚀 No Technical Headaches - We Safely Handle Everything For You",
    heroTitlePart1: "Your Custom Stellar Website",
    heroTitlePart2: "Bespoke & Live for Just $70/Year!",
    heroSubtitle: "We build a fully professional website for you with zero intervention on your part. We handle all details from custom domain registration, linking it with hosting, design works, adjustments, and monitoring all of that throughout the year. You only receive your website link and tell your customers about it—nothing else.",
    ctaPrimary: "Try Interactive Real-Time Simulator ⚡",
    ctaSecondary: "Chat Directly on WhatsApp",
    // Site Simulator
    simTitle: "🛠️ Bespoke Web Presence Simulator",
    simSub: "Type your business name and choose your industry to instantly watch our smart builder draft real-time custom copywriting, layout details, and visual themes for your business prior to paying a single cent! If you would like this exact design, simply let us know what you typed in the business name and about details fields (optional). Note that this is only an interactive simulator showing you real-time mockups; we don't build standard clients like this but use it to align with your aesthetic goals, and you can always send us your own branding color codes and fonts for bespoke tailoring.",
    bizNameLabel: "Your Business Name:",
    bizNamePlaceholder: "e.g., Rise Cafe, Vertex Contracting, Al Shifa Clinic, etc.",
    bizTypeLabel: "Commercial Niche / Industry Section:",
    bizDescLabel: "Additional details or goals (optional):",
    bizDescPlaceholder: "e.g., We deliver premium fresh Italian foods or specialize in reliable electrical services with quick customer response times...",
    generateBtn: "Draft and View Proposal for Free ✨",
    generatingBtn: "Writing strategic copywriting & styling panels...",
    previewDeviceTitle: "Simulated Interactive Showcase Window",
    tabHome: "Home",
    tabServices: "Services",
    tabAbout: "About Us",
    tabContact: "Contact",
    badgeBestSeller: "Clients Pick 🌟",
    // Fallback Info Banner
    fallbackUsedNotice: "💡 Blueprint successfully generated! If you wish to customize colors, fonts, or sections, discuss with us via WhatsApp to fine-tune it perfectly.",
    // Guarantee & Pricing
    pricingHeader: "💎 Flat All-Inclusive Package for Just $70/Year",
    pricingDesc: "We hold zero commitment up front. Work starts right away; you pay only after verifying the final live mockup and expressing 100% satisfaction.",
    guaranteeTitle: "🤝 Our Golden Peace-of-Mind Guarantee",
    guaranteeDesc: "If the first draft does not completely align with your artistic preferences, there is absolute zero obligation. When you need edits down the road, simply text us for free, bypassing complex dashboards.",
    annualLabel: "Simple Flat Annual Rate",
    onlyPrice: "$70 / Year Flat",
    includesListTitle: "The yearly package fully guarantees:",
    includesItem1: "Custom official domain selection (.com, .net, .org, or similar)",
    includesItem2: "Secure, lightning-fast cloud servers and continuous SSL encryption",
    includesItem3: "Polished responsive interface elegant on smartphones and monitors",
    includesItem4: "Uncapped prompt text and image changes anytime during the year",
    // FAQ
    faqHeader: "💬 Frequently Asked Questions",
    faqSub: "Straightforward answers clearing out any technical confusion regarding our boutique service",
    faqQ1: "Is the $70 yearly price real, and what does it include?",
    faqA1: "Yes, it is strictly real! $70 per year covers your custom official domain registration, secure hosting on top-tier global nodes, tailored UI web design, and continuous free updates for the next 365 days with absolute zero hidden costs.",
    faqQ2: "What happens if I change my menu, services, or telephone later?",
    faqA2: "It is incredibly simple: drop us a brief WhatsApp message with the details. Our technical team implements the update and launches the live revision for you for free! No dashboard files to touch.",
    faqQ3: "How are you able to offer this at such a competitive price?",
    faqA3: "We optimize advanced web development pipelines and server virtualization technology to bypass slow agency overheads. This passes direct savings along to startup founders, local retail operators, and craftsmen.",
    // Timeline
    timelineHeader: "📌 The Blueprint Journey to Live Launch",
    timelineSub: "A seamless, cheerful progress to amplify your clients and digital authority",
    step1Title: "1. Brief and Core Objectives",
    step1Desc: "Text us your name, sector, and core goals in a 2-minute chat.",
    step2Title: "2. Precision Structural Draft",
    step2Desc: "Our core designers assemble a rich mockup containing professional marketing texts and styling.",
    step3Title: "3. Review, Refine, and Perfect",
    step3Desc: "Review the model and request structural changes until you are 100% happy.",
    step4Title: "4. Launch and Continuous Warm Care",
    step4Desc: "We map the domain name and safeguard your website with free modifications!",
    // Booking Form
    formTitle: "🎯 Reserve Your Web Spot Today",
    formSub: "Inject status and credibility into your company today. We construct your draft structure in hours, securing the finest digital representation you deserve.",
    formName: "Your Full Name:",
    formPhone: "Your Active WhatsApp (including country/area code):",
    formNotes: "Any specific services or requests to mention:",
    formDomain: "Recommended Custom Web Domain (e.g. name.com):",
    formSubmit: "Submit Order and Setup My Free Draft on WhatsApp ⚡",
    rightsReserved: "All copyrights reserved © 9ii.xyz. Zero-effort corporate websites.",
    whatsappHello: "I would like to order a website design \n\"Tell us the details you want\"",
    privacyLabel: "📄 Privacy Policy",
    privacyTitle: "🔒 Simple & Safe Privacy Policy",
    privacySub: "Your digital presence and safety comes first, with absolute peace of mind",
    privacyIntro: "Welcome! Your comfort and digital success are our highest priorities. We respect your security and keep things completely direct, transparent, and easy to understand:",
    privacyPoints: [
      "Zero Secret Tracking: Our page maintains absolute safety. We do not use any hidden behavioral cookies or harvesting utilities to log your personal traffic or private choices.",
      "Completely Voluntary Information: The only details we ever process are what you enter by choice (such as your name, business name inside our interactive simulator, or via direct WhatsApp chat), exclusively used to setup and fine-tune your bespoke pages.",
      "100% Security Commitment: We maintain a strict professional and ethical code of honor, guaranteeing that your company details, contact numbers, and ideas are never stored in third-party marketing databases or shared with outside parties.",
      "Social Ad-Network Compliance: We provide this document link specifically to align with standard safety policies of digital ad platforms (like Google and Facebook) for reliable and compliant campaign delivery."
    ],
    privacyClose: "I understand, close"
  }
};

// Initial state default blueprints that look gorgeous immediately on load
const defaultBlueprints = {
  restaurant: {
    businessName: "مذاق الشرق | Eastern Taste",
    slogan: "أصالة النكهة وحفاوة الاستقبال العربي",
    heroTitle: "مائدة أصيلة مجهزة بأيدي كبار طهاة المذاق",
    heroSubtitle: "نحن في مطعم مذاق الشرق ننسج الروائح العربية والسرية والطهي العائلي لنمنح زوارنا ملاذًا شهيًا يثلج القلوب ويعيد نكهة البيوت الدافئة.",
    ctaText: "تصفح قائمة الطعام",
    services: [
      { title: "قائمة أطباق شرقية أصيلة", description: "كبسة ملوكية، منسف أردني حقيقي، مشويات متبلة بالزعتر الجبلي تعيد تعريف المذاق الغني.", iconName: "Utensils" },
      { title: "بوفيه المناسبات الفخمة", description: "تلبية ولائم الأفراح ومجالس الأعمال بتقديم راق بلمسة تراثية وصواني تبيض الوجه.", iconName: "Sparkles" },
      { title: "توصيل آمن وسريع", description: "أسطول سيارات مغلقة ومجهزة بأكياس حرارية ليصلك متبلك ومشاويك ساخنة كأنها خرجت للتو من الفرن.", iconName: "Truck" }
    ],
    aboutSection: {
      title: "قصتنا وحبنا للطهي",
      story: "منذ أكثر من خمسة عشر عاماً، أسست عائلتنا مطبها المفتوح لمشاركة أفراد الحي ألذ الخلطات. دافعنا الدائم هو الترحاب وكرم الضيافة المطلق الذي لا يحيد عن أصول وتفاصيل آبائنا.",
      values: ["جودة لحوم محلية طازجة", "ترحيب وكرم لا ينقطع", "نكهة تقليدية ومضمونة 100%"]
    },
    accentColor: "emerald"
  },
  construction: {
    businessName: "صرح الأعمار للمقاولات | Apex Pillars",
    slogan: "هندسة البقاء وحلول التعمير الذكي",
    heroTitle: "صروح عقارية آمنة تبنى بأعلى معايير الاتقان",
    heroSubtitle: "نهتم بصب القواعد والمقاولات العامة والتشطيبات الفاخرة للفلل والمصانع والمباني السكنية. نوثق عرى البناء بآجال صارمة وعوازل مستدامة.",
    ctaText: "اطلب المعاينة الهندسية",
    services: [
      { title: "مقاولات عامة وبناء الفلل", description: "إشراف هندسي متكامل من صب القواعد والخرسانات حتى تسليم المفتاح بأحدث كود بنائي.", iconName: "Hammer" },
      { title: "تشطيبات فاخرة وديكور داخلي", description: "حوائط جبيسة فخمة، أرضيات من الرخام، وتوزيع إضاءة مدروس لإبراز فخامة عقارك وأناقته.", iconName: "Paintbrush" },
      { title: "عزل وترميم متكامل", description: "معالجة التصدعات وأنظمة عزل مائي وحراري للأسطح لحماية مسكنك من رطوبة الشتاء وحرارة الصيف.", iconName: "ShieldCheck" }
    ],
    aboutSection: {
      title: "لماذا تختار صرح الأعمار؟",
      story: "كادر هندسي وفني مرخص يلتزم بالمخططات الهندسية ومواصفات الكود السعودي والعالمي. لا نساوم أبداً على جودة حديد التسليح والمواد العازلة لتنام في بيتك آمناً.",
      values: ["دقة هندسية صارمة", "التزام بالخط الزمني للمشروع", "تقارير دورية بالصور للعميل"]
    },
    accentColor: "amber"
  },
  services: {
    businessName: "رواق للأعمال والاستشارات | Rowaq Solutions",
    slogan: "دليلك الاستراتيجي لتحقيق نمو استثماري واعد",
    heroTitle: "نهيئ السُبل لتمكين الشركات وزيادة الحصص السوقية",
    heroSubtitle: "استشارات إدارية، تصميم الهويات المؤسسية، حسم الصعوبات الضريبية وتنظيم الكوادر البشرية برؤية استثمارية واضحة تدر الربح والنمو المالي.",
    ctaText: "احجز جلستك الاستكشافية",
    services: [
      { title: "دراسات الجدوى والاستشارات", description: "تحليل معمق للسوق والمنافسين مع خطط مالية دقيقة تضمن اتخاذ قرارات استثمارية صائبة.", iconName: "Briefcase" },
      { title: "التأسيس القانوني والرقمي", description: "نمهد لك الطريق لتأسيس شركتك، تسجيل العلامات التجارية وانطلاق موقعك الرقمي الأنيق والمقنع.", iconName: "Globe" },
      { title: "إعادة الهيكلة وتدريب الكفاءات", description: "تحويل الأقسام إلى خلايا عمل متناغمة وتدريب الموظفين لتحقيق أفضل كفاءة إنتاجية ممكنة.", iconName: "Users" }
    ],
    aboutSection: {
      title: "عن شركة رواق للأعمال",
      story: "لسنا وجهة استشارية تقليدية تلقي نصائح نظرية، نحن شركاء عمل ننزل للميدان، نقرأ التحديات المالية والتنظيمية الحالية، ونصمم خارطة طريق مرنة تضمن توفير النفقات وصعود المبيعات.",
      values: ["حلول عملية غير مستهلكة", "سرية تامة لبيانات الشركات", "عقود تستند على تحقيق الأرباح"]
    },
    accentColor: "indigo"
  },
  clinic: {
    businessName: "عيادات الشفاء التخصصية | Al Shifa Clinics",
    slogan: "رعاية وعناية صحية تحوط عائلتكم بالأمان",
    heroTitle: "أخصائيون واستشاريون يسهرون على سلامتكم وصحتكم",
    heroSubtitle: "مستوصف طبي مجهز بأحدث معامل التحليل والعيادات التخصصية للأسنان، الأطفال، الجلدية والأمراض المزمنة في جو يسوده الهدوء والرفق بالمريض.",
    ctaText: "احجز كشفك الطبي",
    services: [
      { title: "عيادة طب وجراحة الأسنان", description: "ابتسامة هوليود، زراعة الأسنان، تقويم فوري وتبييض متطور بأحدث الأجهزة السويسرية الخالية من الألم.", iconName: "Heart" },
      { title: "مختبر الفحوصات المتكامل", description: "دقة متناهية وفحوصات دورية شاملة تعطيك تشخيصاً فائق الوضوح في دقائق معدودة.", iconName: "Activity" },
      { title: "رعاية الأطفال والرضع", description: "طاقم دافئ يتعامل مع طفلك برفق بالغ لتوفير رعاية وقائية ومتابعة لقاحات مريحة وممتعة.", iconName: "Calendar" }
    ],
    aboutSection: {
      title: "رسالة الشفاء الإنسانية",
      story: "تأسست عياداتنا لتكون حصناً صحياً دافئاً. نؤمن أن كرامة المريض وراحته النفسية هي أولى خطوات الشفاء، لذا نلتزم بأعلى كفاءة طبية ونحارب الانتظار الطويل لنصون وقتكم الغالي.",
      values: ["استماع حقيقي وتفهم إنساني", "تعقيم وأمان بالمواصفات العالمية", "مرونة الحجز المسبق والطارئ"]
    },
    accentColor: "teal"
  }
};

const iconMap: Record<string, React.ComponentType<any>> = {
  Utensils, Sparkles, Truck, Hammer, Paintbrush, ShieldCheck,
  Briefcase, Globe, Users, Heart, Activity, Calendar, Trophy, Zap, Award
};

export default function App() {
  const lang = "ar";
  const [activePreset, setActivePreset] = useState<keyof typeof defaultBlueprints>("restaurant");
  const [bizName, setBizName] = useState("");
  const [bizDesc, setBizDesc] = useState("");
  
  // Custom generated mockup state initialized with restaurant preset
  const [blueprint, setBlueprint] = useState<any>(defaultBlueprints.restaurant);
  const [isGenerating, setIsGenerating] = useState(false);
  const [genMessage, setGenMessage] = useState("");
  const [fallbackMode, setFallbackMode] = useState(false);

  // Simulated device browser screen views
  const [simPage, setSimPage] = useState<"home" | "services" | "about" | "contact">("home");

  // Booking Form state
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientDomain, setClientDomain] = useState("");
  const [clientNotes, setClientNotes] = useState("");

  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Privacy Policy state
  const [showPrivacy, setShowPrivacy] = useState(false);

  // Auto update simulated website whenever the user switches active sector tab (Only if they haven't run a custom AI generation yet to keep it intuitive)
  useEffect(() => {
    setBlueprint(defaultBlueprints[activePreset]);
    setSimPage("home");
  }, [activePreset]);

  // Loading generation sequences
  const loadingPhrasesAr = [
    "🔍 تحليل نوع النشاط التجاري وتحديد الفئة...",
    "🎨 تنسيق الألوان الفاخرة المعتمدة على مجالك...",
    "✍️ صياغة واجهات ونصوص تسويقية بليغة بالذكاء الاصطناعي...",
    "💻 ترميز الموقع الهيكلي وضبط عناصر الهواتف...",
    "⚡ مراجعة سرعة استجابة الموقع والصفحات..."
  ];
  const loadingPhrasesEn = [
    "🔍 Analyzing business niche & target audience...",
    "🎨 Designing bespoke color accents and styling blocks...",
    "✍️ Modeling strategic persuasive conversion copy using AI...",
    "💻 Structuring HTML grids & mobile responsive blocks...",
    "⚡ Finalizing cloud server rendering protocols..."
  ];

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    setFallbackMode(false);
    
    // Animate loading text messages to give an exceptionally premium studio feeling
    const phrases = lang === "ar" ? loadingPhrasesAr : loadingPhrasesEn;
    let index = 0;
    setGenMessage(phrases[0]);
    
    const interval = setInterval(() => {
      index = (index + 1) % phrases.length;
      setGenMessage(phrases[index]);
    }, 1500);

    try {
      const resp = await fetch("/api/generate-preview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessType: activePreset,
          businessName: bizName.trim() || undefined,
          businessDesc: bizDesc.trim() || undefined,
          lang: lang
        })
      });
      const data = await resp.json();
      clearInterval(interval);
      
      if (data.success && data.blueprint) {
        setBlueprint(data.blueprint);
        if (data.isFallback) {
          setFallbackMode(true);
        }
        setSimPage("home");
      }
    } catch (err) {
      clearInterval(interval);
      console.error(err);
      // fallback beautifully on absolute client side
      const base = { ...defaultBlueprints[activePreset] };
      if (bizName.trim()) {
        base.businessName = bizName;
      }
      setBlueprint(base);
    } finally {
      setIsGenerating(false);
    }
  };

  // Pre-fill WhatsApp texts based on simulator actions or general requests
  const getWhatsAppLink = (text: string) => {
    const cleanNum = "201037202755"; // Official client number (00201037202755)
    return `https://wa.me/${cleanNum}?text=${encodeURIComponent(text)}`;
  };

  // Standard submit form to direct WhatsApp
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone) {
      alert(lang === "ar" ? "الرجاء كرمًا إدخال اسمك ورقم الواتساب الخاص بك للبدء" : "Please fill in your name and WhatsApp number to begin.");
      return;
    }
    const txt = lang === "ar" 
      ? `أهلاً فريق 9ii.xyz، أود حجز موقع احترافي لعملي بـ 70 دولار سنوياً.\nالاسم: ${clientName}\nالهاتف: ${clientPhone}\nالدومين المقترح: ${clientDomain || 'غير محدد'}\nتفاصيل العمل: ${clientNotes || 'لا يوجد ملاحظات إضافية'}`
      : `Hello 9ii.xyz team, I'd like to reserve a professional website for $70 yearly.\nName: ${clientName}\nPhone: ${clientPhone}\nSuggested Domain: ${clientDomain || 'N/A'}\nDetails: ${clientNotes || 'None'}`;
    
    window.open(getWhatsAppLink(txt), "_blank");
  };

  // Helper for rendering generated accent colors
  const getAccentBgClass = (color: string) => {
    switch (color) {
      case "emerald": return "bg-[#10b981] hover:bg-[#059669] border-[#10b981] text-white";
      case "amber": return "bg-amber-500 hover:bg-amber-600 border-amber-500 text-slate-950";
      case "indigo": return "bg-indigo-500 hover:bg-indigo-600 border-indigo-500 text-white";
      case "teal": return "bg-teal-500 hover:bg-teal-600 border-teal-500 text-white";
      default: return "bg-[#10b981] hover:bg-[#059669] border-[#10b981] text-white";
    }
  };

  const getAccentTextClass = (color: string) => {
    switch (color) {
      case "emerald": return "text-[#10b981]";
      case "amber": return "text-amber-400";
      case "indigo": return "text-indigo-400";
      case "teal": return "text-teal-400";
      default: return "text-[#10b981]";
    }
  };

  const getAccentBorderClass = (color: string) => {
    switch (color) {
      case "emerald": return "border-emerald-500/30 ring-emerald-500/10";
      case "amber": return "border-amber-500/30 ring-amber-500/10";
      case "indigo": return "border-indigo-500/30 ring-indigo-500/10";
      case "teal": return "border-teal-500/30 ring-teal-500/10";
      default: return "border-emerald-500/30 ring-emerald-500/10";
    }
  };

  const getAccentGlow = (color: string) => {
    switch (color) {
      case "emerald": return "glow-emerald";
      case "amber": return "glow-primary";
      case "indigo": return "glow-primary";
      case "teal": return "glow-emerald";
      default: return "glow-emerald";
    }
  };

  return (
    <div 
      id="root-app-container" 
      dir={th[lang].dir} 
      className="min-h-screen font-sans bg-[#080b11] text-gray-100 flex flex-col selection:bg-emerald-500 selection:text-slate-950"
    >
      {/* GLOSSY NAV BAR WITH LOGO */}
      <header id="app-nav-header" className="relative z-50 bg-[#080b11]/85 border-b border-gray-800/80">
        <div id="nav-container-div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo and branding */}
          <div id="logo-branding-flex" className="flex items-center gap-3">
            <div id="glowing-logo-badge" className="h-10 w-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-[1.5px] shadow-lg shadow-emerald-500/20">
              <div className="h-full w-full bg-[#0b0f19] rounded-[11px] flex items-center justify-center">
                <span className="text-emerald-400 font-display font-black text-lg tracking-wider">9ii</span>
              </div>
            </div>
            <div id="logo-text-stack" className="flex flex-col">
              <span className="font-display font-extrabold text-xl tracking-tight text-white leading-tight">
                {th[lang].navLogo}
              </span>
              <span className="text-[10px] text-gray-400 font-medium">
                {th[lang].navSlogan}
              </span>
            </div>
          </div>

          {/* Desktop Navigation links */}
          {!showPrivacy ? (
            <nav id="top-nav-desktop-links" className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-300">
              <a href="#hero-section" id="link-hero" className="hover:text-emerald-400 transition-colors">{th[lang].navHome}</a>
              <a href="#simulator-section" id="link-simulator" className="hover:text-emerald-400 transition-colors">{th[lang].navGenerator}</a>
              <a href="#features-section" id="link-features" className="hover:text-emerald-400 transition-colors">{th[lang].navFeatures}</a>
              <a href="#faq-section" id="link-faq" className="hover:text-emerald-400 transition-colors">{th[lang].navFAQ}</a>
            </nav>
          ) : (
            <button
              onClick={() => {
                setShowPrivacy(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-[#10b981] hover:text-emerald-400 font-extrabold text-sm flex items-center gap-2 cursor-pointer bg-gray-900/40 border border-gray-800 px-4 py-2 rounded-xl transition-all"
            >
              <span>{lang === "ar" ? "↩ الرجوع للرئيسية" : "↩ Back to Home"}</span>
            </button>
          )}

          {/* Call-to-actions */}
          <div id="nav-controls-flex" className="flex items-center gap-4">
            {/* Glowing Order button */}
            <a
              id="direct-whatsapp-nav-btn"
              href={getWhatsAppLink(th[lang].whatsappHello)}
              target="_blank"
              rel="noreferrer"
              className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 font-bold text-slate-900 transition-all duration-300 shadow-lg shadow-emerald-500/20 text-xs text-center"
            >
              <Phone className="h-3.5 w-3.5 fill-current" />
              <span>{th[lang].navContact}</span>
            </a>
          </div>
        </div>
      </header>

      {!showPrivacy ? (
        <>
          {/* METEORIC HERO SECTION */}
          <section id="hero-section" className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32 flex flex-col items-center">
        {/* Abstract futuristic background glows */}
        <div id="bg-glow-orange" className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div id="bg-glow-teal" className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div id="hero-content-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div id="hero-badge-container" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/85 border border-emerald-500/25 shadow-xl mb-8 animate-fade-in">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-bold text-emerald-400 leading-none">
              {th[lang].heroBadge}
            </span>
          </div>

          {/* Main big headline */}
          <h1 id="hero-title-header" className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.3] sm:leading-[1.15] max-w-4xl mx-auto mb-6">
            <span className="text-white">
              {th[lang].heroTitlePart1}
            </span>
            <br className="sm:hidden" />
            <span className="text-emerald-400 font-extrabold pb-2 inline-block mt-3 sm:mt-2">
              {" "}{th[lang].heroTitlePart2}
            </span>
          </h1>

          {/* Subtitle description */}
          <p id="hero-subtitle-p" className="text-sm sm:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed mb-10">
            {th[lang].heroSubtitle}
          </p>

          {/* Action triggers */}
          <div id="hero-actions-container" className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              id="hero-scroll-to-builder-btn"
              href="#simulator-section"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-900 hover:opacity-95 font-extrabold transition-all duration-300 shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{th[lang].ctaPrimary}</span>
            </a>
            
            <a
              id="hero-chat-whatsapp-btn"
              href={getWhatsAppLink(th[lang].whatsappHello)}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gray-950/90 border border-gray-800 hover:border-gray-700 text-gray-100 font-bold transition-all duration-300 flex items-center justify-center gap-2 hover:bg-gray-900/60"
            >
              <Phone className="h-4 w-4 text-emerald-400 fill-current" />
              <span>{th[lang].ctaSecondary}</span>
            </a>
          </div>

          {/* Core dynamic value counts */}
          <div id="hero-stat-banners" className="grid grid-cols-2 gap-4 mt-20 max-w-2xl mx-auto text-center border-t border-gray-900 pt-10">
            <div id="stat-card-1" className="p-4 rounded-xl bg-gray-900/30 border border-gray-900/60">
              <p className="font-display text-2xl sm:text-3xl font-black text-white">$70</p>
              <p className="text-xs text-gray-400 mt-1">{lang === "ar" ? "شامل الدومين والاستضافة" : "With Domain & Server"}</p>
            </div>
            <div id="stat-card-2" className="p-4 rounded-xl bg-gray-900/30 border border-gray-900/60">
              <p className="font-display text-2xl sm:text-3xl font-black text-emerald-400">100%</p>
              <p className="text-xs text-gray-400 mt-1">{lang === "ar" ? "لا تدفع إلا بعد رضاك التام" : "Pay Only When 100% Validated"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* DYNAMIC SITE SIMULATOR CANVAS - DEDICATED CUSTOM INTERACTIVE COMPONENT */}
      <section id="simulator-section" className="py-20 bg-[#0a0d15] border-y border-gray-900 scroll-mt-24">
        <div id="simulator-container-div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div id="sim-header-stacked" className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
              {th[lang].simTitle}
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              {th[lang].simSub}
            </p>
          </div>

          {/* Interactive Playground Setup */}
          <div id="interactive-flex-row" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT INPUT CONTROL CONTROLLER PANEL */}
            <div id="simulator-controls-card" className="lg:col-span-4 bg-gray-900/80 rounded-2xl border border-gray-800 p-6 shadow-xl">
              
              {/* Category Toggles */}
              <div id="category-picker-group" className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                  {lang === "ar" ? "1. اختر مجال عملك أولاً:" : "1. Choose Your Business Sector:"}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    id="picker-restaurant-btn"
                    onClick={() => setActivePreset("restaurant")}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      activePreset === "restaurant" 
                        ? "bg-emerald-500/10 border-emerald-500 text-emerald-400 font-extrabold" 
                        : "bg-gray-950/50 border-gray-800 text-gray-400 hover:border-gray-700"
                    }`}
                  >
                    {lang === "ar" ? "🍔 طعام ومطاعم" : "🍔 Restaurants"}
                  </button>
                  <button
                    id="picker-construction-btn"
                    onClick={() => setActivePreset("construction")}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      activePreset === "construction" 
                        ? "bg-amber-500/10 border-amber-500 text-amber-400 font-extrabold" 
                        : "bg-gray-950/50 border-gray-800 text-gray-400 hover:border-gray-700"
                    }`}
                  >
                    {lang === "ar" ? "🏗️ مقاولات وبناء" : "🏗️ Construction"}
                  </button>
                  <button
                    id="picker-services-btn"
                    onClick={() => setActivePreset("services")}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      activePreset === "services" 
                        ? "bg-indigo-500/10 border-indigo-500 text-indigo-400 font-extrabold" 
                        : "bg-gray-950/50 border-gray-800 text-gray-400 hover:border-gray-700"
                    }`}
                  >
                    {lang === "ar" ? "💼 أعمال واستشارات" : "💼 Consulting"}
                  </button>
                  <button
                    id="picker-clinic-btn"
                    onClick={() => setActivePreset("clinic")}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      activePreset === "clinic" 
                        ? "bg-teal-500/10 border-teal-500 text-teal-400 font-extrabold" 
                        : "bg-gray-950/50 border-gray-800 text-gray-400 hover:border-gray-700"
                    }`}
                  >
                    {lang === "ar" ? "🦷 عيادة طبية" : "🦷 Medical Clinic"}
                  </button>
                </div>
              </div>

              {/* Dynamic text Customization Form */}
              <form id="ai-blueprint-generator-form" onSubmit={handleGenerate} className="space-y-4">
                <div id="field-business-name-group">
                  <label htmlFor="bizName" className="block text-xs font-bold text-gray-300 mb-1.5">
                    {th[lang].bizNameLabel}
                  </label>
                  <input
                    id="bizName"
                    type="text"
                    value={bizName}
                    onChange={(e) => setBizName(e.target.value)}
                    placeholder={th[lang].bizNamePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-gray-950/90 border border-gray-800 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-all"
                  />
                </div>

                <div id="field-business-desc-group">
                  <label htmlFor="bizDesc" className="block text-xs font-bold text-gray-300 mb-1.5">
                    {th[lang].bizDescLabel}
                  </label>
                  <textarea
                    id="bizDesc"
                    value={bizDesc}
                    onChange={(e) => setBizDesc(e.target.value)}
                    placeholder={th[lang].bizDescPlaceholder}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl bg-gray-950/90 border border-gray-800 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-all resize-none"
                  />
                </div>

                {/* Submit trigger button */}
                <button
                  id="simulator-ai-generate-submit-btn"
                  type="submit"
                  disabled={isGenerating}
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 text-slate-900 font-black text-sm flex items-center justify-center gap-2 hover:bg-emerald-400 transition-all shadow-md shadow-emerald-500/20 disabled:opacity-40 select-none cursor-pointer"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin text-slate-900" />
                      <span>{th[lang].generatingBtn}</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4 text-slate-900 fill-current" />
                      <span>{th[lang].generateBtn}</span>
                    </>
                  )}
                </button>
              </form>

              {/* Loader UI display when generating */}
              {isGenerating && (
                <div id="generation-patience-banner" className="mt-4 p-4 rounded-xl bg-gray-950 border border-gray-800 text-center animate-pulse">
                  <p className="text-xs text-yellow-400 font-bold mb-1">
                    {lang === "ar" ? "✨ تجري الآن صناعة سحر حقيقي..." : "✨ Creating real magic..."}
                  </p>
                  <p className="text-xs text-gray-400">{genMessage}</p>
                </div>
              )}

              {/* Fallback info banner to reassure client */}
              {fallbackMode && (
                <div id="blueprint-loaded-notice-banner" className="mt-4 p-3 rounded-xl bg-gray-950/90 border border-gray-800/80 flex items-start gap-2 text-xs text-gray-400">
                  <Info className="h-4 w-4 text-emerald-400 shrink-0" />
                  <p>{th[lang].fallbackUsedNotice}</p>
                </div>
              )}

              {/* Pre-purchase call to action */}
              <div id="blueprint-call-out-whatsapp" className="mt-6 pt-6 border-t border-gray-805/50 text-center">
                <p className="text-xs text-slate-400 mb-3 leading-relaxed">
                  {lang === "ar" ? "عجبك التصميم والمحتوى المولد الهيكلي؟" : "Satisfied with this preview and structured copywriting?"}
                </p>
                <a
                  id="simulator-whatsapp-buy-btn"
                  href={getWhatsAppLink(
                    lang === "ar" 
                      ? `أهلاً 9ii.xyz، لقد عاينت نموذج الويب لرواد [${blueprint?.businessName || bizName || 'نشاطنا'}] عبر موقعكم وأود تفعيله بدومين رسمي بـ 70$` 
                      : `Hello 9ii.xyz, I simulated the preview layout for [${blueprint?.businessName || bizName || 'our business'}] on your website and would love to process it for $70.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full py-3 px-4 rounded-xl border font-bold text-xs flex items-center justify-center gap-2 transition-all ${getAccentBgClass(blueprint?.accentColor || "emerald")}`}
                >
                  <Phone className="h-3.5 w-3.5 fill-current" />
                  <span>
                    {lang === "ar" 
                      ? "احجز موقع عملك الفعلي بـ 70$ سنوياً 🟢" 
                      : "Claim Your Live Site on Domain for $70/yr 🟢"}
                  </span>
                </a>
              </div>

            </div>

            {/* RIGHT SIMULATED LIVE LAPTOP BROWSER DEVICE FRAME */}
            <div id="simulator-mockup-frame-col" className="lg:col-span-8">
              
              <div id="mockup-header-action-row" className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-gray-400 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  {th[lang].previewDeviceTitle}
                </span>
                <span className="text-[11px] text-gray-400 bg-gray-950 px-2.5 py-1 rounded-full border border-gray-800/85">
                  accent: {blueprint?.accentColor || "emerald"}
                </span>
              </div>

              {/* Laptop Device Wrapper */}
              <div 
                id="laptop-device-shell" 
                className={`relative rounded-2xl border bg-gray-950 shadow-2xl overflow-hidden transition-all duration-300 p-[1px] hover:shadow-emerald-500/5 ${getAccentGlow(blueprint?.accentColor || "emerald")} ${getAccentBorderClass(blueprint?.accentColor || "emerald")}`}
              >
                {/* Simulated browser header */}
                <div id="sim-browser-topbar" className="bg-[#111622] px-4 py-3 border-b border-gray-800 flex items-center gap-3">
                  {/* Traffic lights */}
                  <div id="traffic-lights-dots" className="flex items-center gap-1.5 shrink-0">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500/80 inline-block" />
                  </div>
                  {/* Navigation URL bar */}
                  <div id="sim-url-address-bar" className="w-full bg-gray-950/80 rounded-lg py-1 px-3 flex items-center justify-between text-[11px] text-gray-400 font-mono border border-gray-805/40">
                    <div className="flex items-center gap-1.5 overflow-hidden">
                      <span className="text-emerald-500 select-none">https://</span>
                      <span className="text-gray-200 truncate font-semibold">
                        {blueprint?.businessName 
                          ? `${blueprint.businessName.replaceAll(" ", "").toLowerCase().slice(0, 15)}.com` 
                          : "yourbrand.com"}
                      </span>
                    </div>
                    <span className="text-rose-500 text-[9px] uppercase px-1.5 py-0.5 rounded bg-rose-500/10 font-bold shrink-0">
                      {lang === "ar" ? "معاينة حية" : "Live Mockup"}
                    </span>
                  </div>
                </div>

                {/* Simulated Live Website Container */}
                <div id="sim-rendered-website-body" className="min-h-[460px] max-h-[520px] overflow-y-auto bg-[#0c101a] text-gray-300 relative">
                  
                  {/* Simulated website navbar */}
                  <header id="sim-site-header" className="sticky top-0 z-10 bg-[#0c101a]/95 border-b border-gray-900 px-4 py-3 flex items-center justify-between">
                    <span className={`font-black text-sm ${getAccentTextClass(blueprint?.accentColor || "emerald")}`}>
                      {blueprint?.businessName || "9ii.xyz client"}
                    </span>
                    
                    {/* Simulated Nav Links */}
                    <div id="sim-nav-links-row" className="flex items-center gap-3 text-[10px] font-bold">
                      <button 
                        id="sim-nav-home"
                        onClick={() => setSimPage("home")} 
                        className={`transition-colors cursor-pointer ${simPage === "home" ? getAccentTextClass(blueprint?.accentColor || "emerald") + " font-black" : "text-gray-400 hover:text-white"}`}
                      >
                        {th[lang].tabHome}
                      </button>
                      <button 
                        id="sim-nav-services"
                        onClick={() => setSimPage("services")} 
                        className={`transition-colors cursor-pointer ${simPage === "services" ? getAccentTextClass(blueprint?.accentColor || "emerald") + " font-black" : "text-gray-400 hover:text-white"}`}
                      >
                        {th[lang].tabServices}
                      </button>
                      <button 
                        id="sim-nav-about"
                        onClick={() => setSimPage("about")} 
                        className={`transition-colors cursor-pointer ${simPage === "about" ? getAccentTextClass(blueprint?.accentColor || "emerald") + " font-black" : "text-gray-400 hover:text-white"}`}
                      >
                        {th[lang].tabAbout}
                      </button>
                      <button 
                        id="sim-nav-contact"
                        onClick={() => setSimPage("contact")} 
                        className={`transition-colors cursor-pointer ${simPage === "contact" ? getAccentTextClass(blueprint?.accentColor || "emerald") + " font-black" : "text-gray-400 hover:text-white"}`}
                      >
                        {th[lang].tabContact}
                      </button>
                    </div>
                  </header>

                  {/* Render simulated pages dynamically via state views */}
                  <AnimatePresence mode="wait">
                    
                    {/* HOME PAGE VIEW */}
                    {simPage === "home" && (
                      <motion.div
                        id="sim-page-home-wrapper"
                        key="view-home"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="p-6 md:p-8 space-y-8"
                      >
                        {/* Simulated Hero Section */}
                        <div id="sim-hero-panel" className="text-center py-6 border-b border-gray-900/40 relative">
                          <span className={`inline-block py-1 px-2.5 rounded-full text-[9px] font-extrabold uppercase bg-emerald-400/10 mb-3 tracking-wider ${getAccentTextClass(blueprint?.accentColor || "emerald")}`}>
                            {blueprint?.slogan || "الموقع المثالي لخدمتك"}
                          </span>
                          <h3 className="text-lg sm:text-xl font-extrabold text-white mb-3">
                            {blueprint?.heroTitle}
                          </h3>
                          <p className="text-[11px] sm:text-xs text-gray-400 max-w-xl mx-auto leading-relaxed">
                            {blueprint?.heroSubtitle}
                          </p>
                          <div id="sim-hero-actions" className="mt-4 flex justify-center">
                            <button 
                              id="sim-hero-cta"
                              onClick={() => setSimPage("contact")}
                              className={`py-1.5 px-4 rounded text-[11px] font-black tracking-tight ${getAccentBgClass(blueprint?.accentColor || "emerald")}`}
                            >
                              {blueprint?.ctaText || "اتصل بنا الآن"}
                            </button>
                          </div>
                        </div>

                        {/* Miniature Services summary grid */}
                        <div id="sim-home-services-intro">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 text-center">
                            {th[lang].tabServices}
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {blueprint?.services?.map((svc: any, idx: number) => {
                              const SvcIcon = iconMap[svc.iconName] || MessageSquare;
                              return (
                                <div key={idx} className="p-4 rounded-xl bg-gray-900/40 border border-gray-900 text-center space-y-2">
                                  <div className={`p-1.5 rounded bg-gray-950/80 inline-flex ${getAccentTextClass(blueprint?.accentColor || "emerald")}`}>
                                    <SvcIcon className="h-4 w-4" />
                                  </div>
                                  <h5 className="text-[11px] font-extrabold text-white">{svc.title}</h5>
                                  <p className="text-[10px] text-gray-400 leading-normal line-clamp-2">{svc.description}</p>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Trust factors */}
                        <div id="sim-trust-band" className="bg-gray-900/20 p-4 rounded-xl border border-gray-900 flex flex-col md:flex-row items-center justify-between gap-3">
                          <p className="text-[10px] text-gray-400 text-center md:text-start leading-relaxed">
                            {lang === "ar" 
                              ? "✨ هذا الموقع مصمم ومحمي من قبل شركة 9ii.xyz ومكفول طوال العام بالدعم المتواصل." 
                              : "✨ This design is fully maintained, updated, and deployed under 9ii.xyz care."}
                          </p>
                          <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-extrabold shrink-0">
                            70$ Package Active
                          </span>
                        </div>
                      </motion.div>
                    )}

                    {/* SERVICES WEB PAGE */}
                    {simPage === "services" && (
                      <motion.div
                        id="sim-page-services-wrapper"
                        key="view-services"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="p-6 md:p-8 space-y-6"
                      >
                        <div id="sim-services-header" className="text-center pb-4 border-b border-gray-900">
                          <h3 className="text-base font-extrabold text-white">{th[lang].tabServices}</h3>
                          <p className="text-[10px] text-gray-400 mt-1">{lang === "ar" ? "نقدم لك أفضل ما لدينا بعناية وإتقان" : "Premium outputs rendered exactly for your commercial standards"}</p>
                        </div>

                        <div id="sim-services-list-stacked" className="space-y-4">
                          {blueprint?.services?.map((svc: any, idx: number) => {
                            const SvcIcon = iconMap[svc.iconName] || MessageSquare;
                            return (
                              <div key={idx} className="p-4 rounded-xl bg-gray-900/30 border border-gray-900 flex gap-4 items-start">
                                <div className={`p-2 rounded-lg bg-gray-950/90 text-center ${getAccentTextClass(blueprint?.accentColor || "emerald")}`}>
                                  <SvcIcon className="h-5 w-5" />
                                </div>
                                <div className="space-y-1">
                                  <h4 className="text-xs font-black text-white">{svc.title}</h4>
                                  <p className="text-[10px] text-gray-400 leading-normal">{svc.description}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}

                    {/* ABOUT US WEB PAGE */}
                    {simPage === "about" && (
                      <motion.div
                        id="sim-page-about-wrapper"
                        key="view-about"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="p-6 md:p-8 space-y-6"
                      >
                        <div id="sim-about-header" className="pb-4 border-b border-gray-900">
                          <h3 className="text-base font-extrabold text-white">{blueprint?.aboutSection?.title || th[lang].tabAbout}</h3>
                        </div>

                        <div id="sim-about-layout" className="grid grid-cols-1 md:grid-cols-12 gap-6 leading-relaxed">
                          <div id="sim-about-story" className="md:col-span-12 space-y-3">
                            <p className="text-xs text-gray-300">
                              {blueprint?.aboutSection?.story}
                            </p>
                          </div>

                          <div id="sim-about-values" className="md:col-span-12 p-4 rounded-xl bg-gray-950/50 border border-gray-900 space-y-3">
                            <h4 className="text-[11px] font-extrabold text-white flex items-center gap-1.5">
                              <CheckCircle2 className={`h-3.5 w-3.5 ${getAccentTextClass(blueprint?.accentColor || "emerald")}`} />
                              <span>{lang === "ar" ? "القيم والركائز الأساسية التي تضمن نجاحنا:" : "Core Values & Promises of our Operations:"}</span>
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px] text-gray-400">
                              {blueprint?.aboutSection?.values?.map((val: string, idx: number) => (
                                <div key={idx} className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0b0f19] border border-gray-900">
                                  <span className={`h-1 w-1 rounded-full bg-emerald-400`} />
                                  <span>{val}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* CONTACT US WEB PAGE */}
                    {simPage === "contact" && (
                      <motion.div
                        id="sim-page-contact-wrapper"
                        key="view-contact"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="p-6 md:p-8 space-y-6 text-center"
                      >
                        <div id="sim-contact-intro" className="space-y-2 py-4">
                          <div className="h-12 w-12 rounded-full bg-emerald-500/10 inline-flex items-center justify-center mb-2">
                            <Phone className={`h-6 w-6 ${getAccentTextClass(blueprint?.accentColor || "emerald")}`} />
                          </div>
                          <h3 className="text-base font-extrabold text-white">
                            {lang === "ar" ? "أهلاً بك معنا - نسعد بخدمتك" : "Ready to Start? We are Excited to Build!"}
                          </h3>
                          <p className="text-[11px] text-gray-400 max-w-sm mx-auto">
                            {lang === "ar" 
                              ? "هذا الموقع جاهز لربطه بدومين خاص بشركتك وتعديله! تواصل معنا واطلبه بـ 70 دولار فقط سنوياً."
                              : "This design structure can go live in 24 hours under your official custom domain name for just $70!"}
                          </p>
                        </div>

                        {/* Interactive direct WhatsApp callback from inside simulator */}
                        <div id="sim-whatsapp-clicker" className="max-w-xs mx-auto">
                          <a
                            id="simulator-inner-whatsapp-btn"
                            href={getWhatsAppLink(
                              lang === "ar" 
                                ? `أهلاً، تصفحت المعاينة الفورية لـ [${blueprint?.businessName || 'مشروعنا'}] وأود تفعيله فوراً.` 
                                : `Hello, I explored the [${blueprint?.businessName || 'project'}] preview. Please activate it for me.`
                            )}
                            target="_blank"
                            rel="noreferrer"
                            className={`w-full py-2.5 px-4 rounded font-bold text-xs flex items-center justify-center gap-2 transition-all ${getAccentBgClass(blueprint?.accentColor || "emerald")}`}
                          >
                            <Phone className="h-4 w-4 fill-current" />
                            <span>
                              {lang === "ar" ? "تأكيد واستلام الموقع الفعلي" : "Confirm and Launch Live Design"}
                            </span>
                          </a>
                        </div>
                      </motion.div>
                    )}

                  </AnimatePresence>

                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* UNIQUE QUALITY STATEMENT BENTO GRID */}
      <section id="features-section" className="py-20 bg-[#080b11] relative">
        <div id="features-container-div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div id="features-header-stacked" className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3/5 py-1.5 rounded-full mb-4 inline-block">
              {lang === "ar" ? "✨ عقلية وعرض لا يهزم" : "✨ UNPARALLELED PROPOSITION"}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
              {th[lang].pricingHeader}
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-4 leading-relaxed">
              {th[lang].pricingDesc}
            </p>
          </div>

          {/* Features Grid & Value card */}
          <div id="features-pricing-bento-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Guarantee and Gold Promise Card */}
            <div id="pricing-guarantee-bento-card" className="lg:col-span-7 bg-gray-900/40 rounded-3xl border border-gray-800/80 p-8 flex flex-col justify-between shadow-lg relative overflow-hidden">
              <div id="absolute-glow-ball" className="absolute -top-10 -right-10 w-44 h-44 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
              
              <div id="guarantee-text-block" className="space-y-5">
                <div id="guarantee-badge-container" className="h-12 w-12 rounded-2xl bg-emerald-400/10 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-white">
                  {th[lang].guaranteeTitle}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {th[lang].guaranteeDesc}
                </p>
              </div>

              {/* Staggered process checkmarks */}
              <div id="guarantee-checkmarks-list" className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 pt-8 border-t border-gray-800/60 text-xs text-gray-300">
                <div id="chk-domain" className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>{lang === "ar" ? "دومين مستقل بالكامل خاص بك" : "Fully independent custom domain"}</span>
                </div>
                <div id="chk-host" className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>{lang === "ar" ? "سيرفرات فائقة السرعة طوال العام" : "Ultra-fast servers all year long"}</span>
                </div>
                <div id="chk-satisfaction" className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>{lang === "ar" ? "صفر ريال مقدم حتى تقتنع" : "Zero downpayment until approved"}</span>
                </div>
                <div id="chk-maintenance" className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>{lang === "ar" ? "تعديلات مجانية بالكامل" : "Fully Free Modifications"}</span>
                </div>
              </div>
            </div>

            {/* Price Badge Bento block */}
            <div id="pricing-badge-bento-card" className="lg:col-span-5 bg-gradient-to-br from-[#111625] to-[#0a0d15] rounded-3xl border border-gray-800 p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div id="bestseller-corner-ribbon" className="absolute top-4 left-4 bg-emerald-500 text-slate-950 text-[10px] font-black tracking-widest px-3 py-1 rounded-full uppercase shadow">
                {th[lang].badgeBestSeller}
              </div>

              <div id="pricing-cost-view" className="space-y-3 pt-4">
                <span className="text-xs font-bold text-gray-400 tracking-wider block">
                  {th[lang].annualLabel}
                </span>
                <p className="text-3xl sm:text-4xl font-black text-white">
                  {th[lang].onlyPrice}
                </p>
                <div className="h-[1px] bg-gray-800 my-4" />
              </div>

              {/* Bulleted summary lists */}
              <div id="pricing-bullets-section" className="space-y-4">
                <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  {th[lang].includesListTitle}
                </p>
                <ul id="bullets-ul" className="space-y-3 text-xs text-gray-300">
                  <li id="bullet-1" className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{th[lang].includesItem1}</span>
                  </li>
                  <li id="bullet-2" className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{th[lang].includesItem2}</span>
                  </li>
                  <li id="bullet-3" className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{th[lang].includesItem3}</span>
                  </li>
                  <li id="bullet-4" className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{th[lang].includesItem4}</span>
                  </li>
                </ul>
              </div>

              {/* Order buttons */}
              <div id="pricing-order-btn-wrapper" className="mt-8 pt-6 border-t border-gray-800/80">
                <a
                  id="pricing-whatsapp-order-btn"
                  href={getWhatsAppLink(th[lang].whatsappHello)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-4 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-extrabold text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-500/20"
                >
                  <Phone className="h-4 w-4 fill-current animate-bounce" />
                  <span>{th[lang].navContact}</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ROADMAP TIMELINE JOURNEY */}
      <section id="roadmap-section" className="py-20 bg-[#0a0d15] border-y border-gray-900">
        <div id="roadmap-container-div" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div id="roadmap-header-stacked" className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
              {th[lang].timelineHeader}
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">
              {th[lang].timelineSub}
            </p>
          </div>

          {/* Timeline cards grid */}
          <div id="timeline-step-cards-grid" className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start relative">
            
            {/* Step 1 */}
            <div id="step-card-one" className="bg-gray-900/30 border border-gray-900 p-6 rounded-2xl space-y-3 relative group hover:border-emerald-500/20 transition-all duration-300 min-h-[160px]">
              <div id="step-number-pill-1" className="bg-emerald-500/10 text-emerald-400 rounded-lg text-xs font-black px-2.5 py-1 inline-block">
                Step 01
              </div>
              <h3 className="text-sm font-extrabold text-white">{th[lang].step1Title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{th[lang].step1Desc}</p>
            </div>

            {/* Step 2 */}
            <div id="step-card-two" className="bg-gray-900/30 border border-gray-900 p-6 rounded-2xl space-y-3 relative group hover:border-emerald-500/20 transition-all duration-300 min-h-[160px]">
              <div id="step-number-pill-2" className="bg-emerald-500/10 text-emerald-400 rounded-lg text-xs font-black px-2.5 py-1 inline-block">
                Step 02
              </div>
              <h3 className="text-sm font-extrabold text-white">{th[lang].step2Title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{th[lang].step2Desc}</p>
            </div>

            {/* Step 3 */}
            <div id="step-card-three" className="bg-gray-900/30 border border-gray-900 p-6 rounded-2xl space-y-3 relative group hover:border-emerald-500/20 transition-all duration-300 min-h-[160px]">
              <div id="step-number-pill-3" className="bg-emerald-500/10 text-emerald-400 rounded-lg text-xs font-black px-2.5 py-1 inline-block">
                Step 03
              </div>
              <h3 className="text-sm font-extrabold text-white">{th[lang].step3Title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{th[lang].step3Desc}</p>
            </div>

            {/* Step 4 */}
            <div id="step-card-four" className="bg-gray-900/30 border border-gray-900 p-6 rounded-2xl space-y-3 relative group hover:border-emerald-500/20 transition-all duration-300 min-h-[160px]">
              <div id="step-number-pill-4" className="bg-emerald-500/10 text-emerald-400 rounded-lg text-xs font-black px-2.5 py-1 inline-block">
                Step 04
              </div>
              <h3 className="text-sm font-extrabold text-white">{th[lang].step4Title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{th[lang].step4Desc}</p>
            </div>

          </div>

        </div>
      </section>

      {/* DETAILED BOOKING ORDER FORM */}
      <section id="custom-booking-form-section" className="py-20 bg-[#080b11] relative">
        <div id="form-scroll-anchor" className="max-w-3xl mx-auto px-4 sm:px-6">
          
          <div id="form-container-shell" className="bg-gradient-to-br from-[#111522] to-[#0a0e18] rounded-3xl border border-gray-800 p-8 shadow-2xl space-y-6">
            <div id="form-header-center" className="text-center space-y-3">
              <span className="h-10 w-10 rounded-xl bg-emerald-500/10 inline-flex items-center justify-center text-emerald-400">
                <Sparkle className="h-5 w-5 fill-current" />
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white">{th[lang].formTitle}</h2>
              <p className="text-xs text-gray-400 leading-relaxed max-w-lg mx-auto">{th[lang].formSub}</p>
            </div>

            <form id="direct-whatsapp-lead-form" onSubmit={handleFormSubmit} className="space-y-4">
              
              <div id="inp-block-clientName" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div id="formname-field">
                  <label htmlFor="form-cname" className="block text-xs font-bold text-gray-300 mb-2">
                    {th[lang].formName}
                  </label>
                  <input
                    id="form-cname"
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder={lang === "ar" ? "مثال: عبدالمحسن الحربي" : "e.g., Jonathan Miller"}
                    className="w-full px-4 py-3 rounded-xl bg-gray-950/80 border border-gray-800 text-sm focus:outline-none focus:border-emerald-500 text-white placeholder-gray-600 transition-all"
                  />
                </div>

                <div id="formphone-field">
                  <label htmlFor="form-cphone" className="block text-xs font-bold text-gray-300 mb-2">
                    {th[lang].formPhone}
                  </label>
                  <input
                    id="form-cphone"
                    type="text"
                    required
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder={lang === "ar" ? "مثال: +966500000000" : "e.g., +1234567890"}
                    className="w-full px-4 py-3 rounded-xl bg-gray-950/80 border border-gray-800 text-sm focus:outline-none focus:border-emerald-500 text-white placeholder-gray-600 transition-all text-left"
                    dir="ltr"
                  />
                </div>
              </div>

              <div id="inp-block-domain">
                <label htmlFor="form-cdomain" className="block text-xs font-bold text-gray-300 mb-2">
                  {th[lang].formDomain}
                </label>
                <input
                  id="form-cdomain"
                  type="text"
                  value={clientDomain}
                  onChange={(e) => setClientDomain(e.target.value)}
                  placeholder={lang === "ar" ? "مثال: apexpillars.com" : "e.g., apexpillars.com"}
                  className="w-full px-4 py-3 rounded-xl bg-gray-950/80 border border-gray-800 text-sm focus:outline-none focus:border-emerald-500 text-white placeholder-gray-600 transition-all text-left"
                  dir="ltr"
                />
              </div>

              <div id="inp-block-notes">
                <label htmlFor="form-cnotes" className="block text-xs font-bold text-gray-300 mb-2">
                  {th[lang].formNotes}
                </label>
                <textarea
                  id="form-cnotes"
                  value={clientNotes}
                  onChange={(e) => setClientNotes(e.target.value)}
                  placeholder={lang === "ar" ? "اكتب نبذة عن الخدمات، طريقة الدفع التي تناسبك، أو أي مواصفات خاصة..." : "Write details about services, specific menu options, or requested color keys..."}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-gray-950/80 border border-gray-800 text-sm focus:outline-none focus:border-emerald-500 text-white placeholder-gray-600 transition-all resize-none"
                />
              </div>

              {/* Submit Form Button */}
              <button
                id="submit-lead-form-btn"
                type="submit"
                className="w-full py-4 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-extrabold text-sm flex items-center justify-center gap-2 transition-all shadow-xl shadow-emerald-500/20 cursor-pointer"
              >
                <Phone className="h-4 w-4 fill-current text-slate-900" />
                <span>{th[lang].formSubmit}</span>
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* COMPREHENSIVE FAQS ACCORDION SECTION */}
      <section id="faq-section" className="py-20 bg-[#0a0d15] border-t border-gray-900 relative scroll-mt-24">
        <div id="faq-container-div" className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div id="faq-header-stacked" className="text-center mb-16 space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              {th[lang].faqHeader}
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 leading-normal">
              {th[lang].faqSub}
            </p>
          </div>

          {/* Accordion List */}
          <div id="faq-accordion-group" className="space-y-4">
            
            {/* FAQ 1 */}
            <div id="faq-card-1" className="bg-gray-905/35 border border-gray-800/80 rounded-2xl overflow-hidden">
              <button
                id="faq-toggle-1-btn"
                onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
                className="w-full text-start py-5 px-6 font-bold text-sm sm:text-base text-[#10b981] flex items-center justify-between gap-4 bg-gray-900/40 hover:bg-gray-900/60 transition-colors cursor-pointer"
              >
                <span>{th[lang].faqQ1}</span>
                <span className="text-[#10b981] shrink-0 font-display text-xl leading-none">
                  {openFaq === 0 ? "−" : "+"}
                </span>
              </button>
              
              <AnimatePresence initial={false}>
                {openFaq === 0 && (
                  <motion.div
                    id="faq-body-1"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-6 text-xs sm:text-sm text-gray-400 border-t border-gray-850/40 bg-gray-950/20 leading-relaxed">
                      {th[lang].faqA1}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* FAQ 2 */}
            <div id="faq-card-2" className="bg-gray-905/35 border border-gray-800/80 rounded-2xl overflow-hidden">
              <button
                id="faq-toggle-2-btn"
                onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                className="w-full text-start py-5 px-6 font-bold text-sm sm:text-base text-[#10b981] flex items-center justify-between gap-4 bg-gray-900/40 hover:bg-gray-900/60 transition-colors cursor-pointer"
              >
                <span>{th[lang].faqQ2}</span>
                <span className="text-[#10b981] shrink-0 font-display text-xl leading-none">
                  {openFaq === 1 ? "−" : "+"}
                </span>
              </button>
              
              <AnimatePresence initial={false}>
                {openFaq === 1 && (
                  <motion.div
                    id="faq-body-2"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-6 text-xs sm:text-sm text-gray-400 border-t border-gray-850/40 bg-gray-950/20 leading-relaxed">
                      {th[lang].faqA2}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* FAQ 3 */}
            <div id="faq-card-3" className="bg-gray-905/35 border border-gray-800/80 rounded-2xl overflow-hidden">
              <button
                id="faq-toggle-3-btn"
                onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                className="w-full text-start py-5 px-6 font-bold text-sm sm:text-base text-[#10b981] flex items-center justify-between gap-4 bg-gray-900/40 hover:bg-gray-900/60 transition-colors cursor-pointer"
              >
                <span>{th[lang].faqQ3}</span>
                <span className="text-[#10b981] shrink-0 font-display text-xl leading-none">
                  {openFaq === 2 ? "−" : "+"}
                </span>
              </button>
              
              <AnimatePresence initial={false}>
                {openFaq === 2 && (
                  <motion.div
                    id="faq-body-3"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-6 text-xs sm:text-sm text-gray-400 border-t border-gray-850/40 bg-gray-950/20 leading-relaxed">
                      {th[lang].faqA3}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>
        </>
      ) : (
        /* Beautiful, comfortable full-screen Privacy View with high contrast and relaxed styling */
        <main id="privacy-content-view" className="flex-1 py-12 md:py-24 px-4 max-w-4xl mx-auto w-full animate-fade-in" style={{ direction: th[lang].dir }}>
          <div className="bg-[#0b101b] border border-gray-800/80 rounded-3xl p-8 md:p-14 shadow-2xl space-y-10">
            {/* Header */}
            <div className="space-y-4">
              <button
                onClick={() => {
                  setShowPrivacy(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-900 border border-gray-850 text-xs font-black text-[#10b981] hover:text-emerald-300 hover:border-emerald-500/30 transition-all cursor-pointer"
              >
                <span>{lang === "ar" ? "↩ الرجوع للرئيسية والخدمات" : "↩ Back to Home"}</span>
              </button>

              <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                {lang === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
              </h1>
              <p className="text-sm sm:text-base text-[#10b981] font-bold">
                {lang === "ar" ? "في 9ii.xyz" : "at 9ii.xyz"}
              </p>
            </div>

            <div className="h-[1px] w-full bg-gray-800/70" />

            {lang === "ar" ? (
              <div className="space-y-8 text-right text-gray-300 text-sm sm:text-base leading-relaxed">
                <p className="text-[#10b981] font-semibold text-lg sm:text-xl leading-relaxed">
                  في <span className="text-white font-black">9ii.xyz</span>، نحترم خصوصيتك ونؤمن بأن التعامل الواضح والبسيط هو أساس الثقة. توضح هذه الصفحة طبيعة البيانات التي قد يتم مشاركتها معنا وكيفية التعامل معها.
                </p>

                <div className="space-y-8">
                  {/* Section 1 */}
                  <div className="bg-slate-950/40 border border-gray-850/60 p-6 sm:p-10 rounded-2xl space-y-4">
                    <h2 className="text-lg sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-gray-800/50 pb-2">
                      <span className="text-[#10b981]">✦</span> المعلومات التي نستخدمها
                    </h2>
                    <p className="text-gray-200">نحن لا نطلب بيانات شخصية حساسة، ولا نقوم ببيع أو تأجير معلومات المستخدمين لأي طرف خارجي.</p>
                    <p className="text-gray-400 font-semibold">قد تصلنا بعض المعلومات التي يشاركها العميل بنفسه بشكل طوعي، مثل:</p>
                    <ul className="list-disc list-inside mr-4 space-y-2 text-gray-300 text-sm sm:text-base">
                      <li>الاسم</li>
                      <li>اسم المشروع أو النشاط</li>
                      <li>وسائل التواصل</li>
                      <li>أي تفاصيل يرسلها أثناء طلب الخدمة أو التواصل معنا</li>
                    </ul>
                    <div className="h-[1px] bg-gray-800/30 my-2" />
                    <p className="text-gray-400 font-semibold">يتم استخدام هذه المعلومات فقط لغرض:</p>
                    <ul className="list-disc list-inside mr-4 space-y-2 text-[#10b981] text-sm sm:text-base">
                      <li>تنفيذ الخدمة المطلوبة</li>
                      <li>تصميم أو تعديل الموقع</li>
                      <li>تحسين تجربة التواصل والدعم</li>
                    </ul>
                  </div>

                  {/* Section 2 */}
                  <div className="bg-slate-950/40 border border-gray-850/60 p-6 sm:p-8 rounded-2xl space-y-2">
                    <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2 border-b border-gray-800/50 pb-2">
                      <span className="text-[#10b981]">✦</span> ملفات تعريف الارتباط وتقنيات التصفح
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      قد يستخدم الموقع ملفات تقنية أساسية ضرورية لتحسين الأداء أو ضمان عمل بعض الصفحات بشكل صحيح، دون استخدامها لتتبع النشاط الشخصي للمستخدم لأغراض إعلانية خارجية.
                    </p>
                  </div>

                  {/* Section 3 */}
                  <div className="bg-slate-950/40 border border-gray-850/60 p-6 sm:p-8 rounded-2xl space-y-2">
                    <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2 border-b border-gray-800/50 pb-2">
                      <span className="text-[#10b981]">✦</span> وسائل التواصل الخارجية
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      عند التواصل معنا عبر خدمات خارجية مثل واتساب أو البريد الإلكتروني، تخضع بعض البيانات أيضاً لسياسات الخصوصية الخاصة بتلك الخدمات.
                    </p>
                  </div>

                  {/* Section 4 */}
                  <div className="bg-slate-950/40 border border-gray-850/60 p-6 sm:p-8 rounded-2xl space-y-2">
                    <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2 border-b border-gray-800/50 pb-2">
                      <span className="text-[#10b981]">✦</span> حماية المعلومات
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      نلتزم بالتعامل مع البيانات والمعلومات التي يتم مشاركتها معنا بدرجة عالية من الخصوصية والسرية المهنية، وعدم مشاركتها مع أي جهة خارجية إلا إذا كان ذلك مطلوباً قانونياً.
                    </p>
                  </div>

                  {/* Section 5 */}
                  <div className="bg-slate-950/40 border border-gray-850/60 p-6 sm:p-8 rounded-2xl space-y-2">
                    <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2 border-b border-gray-800/50 pb-2">
                      <span className="text-[#10b981]">✦</span> الروابط والخدمات الخارجية
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      قد يحتوي الموقع على روابط أو خدمات تابعة لجهات خارجية، ولسنا مسؤولين عن سياسات الخصوصية الخاصة بتلك الجهات.
                    </p>
                  </div>

                  {/* Section 6 */}
                  <div className="bg-slate-950/40 border border-gray-850/60 p-6 sm:p-8 rounded-2xl space-y-2">
                    <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2 border-b border-gray-800/50 pb-2">
                      <span className="text-[#10b981]">✦</span> التعديلات على السياسة
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      قد يتم تحديث هذه السياسة من وقت لآخر بما يتناسب مع تطوير الخدمات أو المتطلبات التنظيمية الحديثة، ويُعتبر استمرار استخدام الموقع موافقة ضمنية على أي تحديثات جديدة.
                    </p>
                  </div>

                  {/* Section 7 */}
                  <div className="bg-slate-950/40 border border-gray-850/60 p-6 sm:p-8 rounded-2xl space-y-2">
                    <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2 border-b border-gray-800/50 pb-2">
                      <span className="text-[#10b981]">✦</span> التواصل
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      لأي استفسار متعلق بالخصوصية أو البيانات، يمكن التواصل معنا مباشرة عبر وسائل التواصل المتوفرة داخل الموقع.
                    </p>
                  </div>
                </div>

                <div className="text-center pt-8 border-t border-gray-800/40 space-y-1">
                  <p className="font-extrabold text-white text-base">9ii.xyz</p>
                  <p className="text-xs text-gray-500">جميع الحقوق محفوظة.</p>
                </div>
              </div>
            ) : (
              <div className="space-y-8 text-left text-gray-300 text-sm sm:text-base leading-relaxed">
                <p className="text-[#10b981] font-semibold text-lg sm:text-xl leading-relaxed">
                  At <span className="text-white font-black">9ii.xyz</span>, we respect your privacy and believe that clear and simple communication is the foundation of trust. This page clarifies the nature of information that might be shared with us and how we handle it.
                </p>

                <div className="space-y-8">
                  {/* Section 1 */}
                  <div className="bg-slate-950/40 border border-gray-850/60 p-6 sm:p-10 rounded-2xl space-y-4">
                    <h2 className="text-lg sm:text-2xl font-bold text-white flex items-center gap-2 border-b border-gray-800/50 pb-2">
                      <span className="text-[#10b981]">✦</span> Information We Use
                    </h2>
                    <p className="text-gray-200">We do not ask for sensitive personal data, nor do we sell or rent user information to any third parties.</p>
                    <p className="text-gray-400 font-semibold">Some information may reach us voluntarily when shared by clients directly, such as:</p>
                    <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300 text-sm sm:text-base">
                      <li>Full Name</li>
                      <li>Business Project name or activity</li>
                      <li>Preferred communication channels</li>
                      <li>Any details shared during requests or general conversation</li>
                    </ul>
                    <div className="h-[1px] bg-gray-800/30 my-2" />
                    <p className="text-gray-400 font-semibold">These details are exclusively used to:</p>
                    <ul className="list-disc list-inside ml-4 space-y-2 text-[#10b981] text-sm sm:text-base">
                      <li>Deliver the requested service options</li>
                      <li>Develop or adjust the tailored web pages</li>
                      <li>Enhance reliable customer support and response times</li>
                    </ul>
                  </div>

                  {/* Section 2 */}
                  <div className="bg-slate-950/40 border border-gray-850/60 p-6 sm:p-8 rounded-2xl space-y-2">
                    <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2 border-b border-gray-800/50 pb-2">
                      <span className="text-[#10b981]">✦</span> Cookies & Browsing Technologies
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      Our site might invoke basic technical files essential for optimal operations and safe performance, without implementing secret behavioral tracking for external marketing agencies.
                    </p>
                  </div>

                  {/* Section 3 */}
                  <div className="bg-slate-950/40 border border-gray-850/60 p-6 sm:p-8 rounded-2xl space-y-2">
                    <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2 border-b border-gray-800/50 pb-2">
                      <span className="text-[#10b981]">✦</span> External Communication Systems
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      When sending messages through external providers like WhatsApp or email clients, the respective privacy architectures of those major ecosystems apply.
                    </p>
                  </div>

                  {/* Section 4 */}
                  <div className="bg-slate-950/40 border border-gray-850/60 p-6 sm:p-8 rounded-2xl space-y-2">
                    <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2 border-b border-gray-800/50 pb-2">
                      <span className="text-[#10b981]">✦</span> Privacy Standards & Safeguards
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      We are fully committed to treating all interactive communications with the highest level of professional confidentiality, promising not to release elements unless legally obligated.
                    </p>
                  </div>

                  {/* Section 5 */}
                  <div className="bg-slate-950/40 border border-gray-850/60 p-6 sm:p-8 rounded-2xl space-y-2">
                    <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2 border-b border-gray-800/50 pb-2">
                      <span className="text-[#10b981]">✦</span> Third-Party Links
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      We do not control the privacy regulations or technical behaviors of any external sites redirected via link icons on our pages.
                    </p>
                  </div>

                  {/* Section 6 */}
                  <div className="bg-slate-950/40 border border-gray-850/60 p-6 sm:p-8 rounded-2xl space-y-2">
                    <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2 border-b border-gray-800/50 pb-2">
                      <span className="text-[#10b981]">✦</span> Minor Policy Adjustments
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      We reserve the right to refine these simple points as technologies progress. Your continued interaction implies general agreement with safe operations.
                    </p>
                  </div>

                  {/* Section 7 */}
                  <div className="bg-slate-950/40 border border-gray-850/60 p-6 sm:p-8 rounded-2xl space-y-2">
                    <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2 border-b border-gray-800/50 pb-2">
                      <span className="text-[#10b981]">✦</span> Inquiries
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      If you have any questions, feel free to text us direct on any available WhatsApp connection buttons.
                    </p>
                  </div>
                </div>

                <div className="text-center pt-8 border-t border-gray-800/40 space-y-1">
                  <p className="font-extrabold text-white text-base">9ii.xyz</p>
                  <p className="text-xs text-gray-500">All Rights Reserved.</p>
                </div>
              </div>
            )}

            <div className="h-[1px] w-full bg-gray-800/70" />

            {/* Back action */}
            <div className="flex justify-center pt-4">
              <button
                onClick={() => {
                  setShowPrivacy(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="py-4 px-12 rounded-xl bg-[#10b981] hover:bg-[#059669] text-slate-900 font-extrabold text-base transition-all shadow-xl shadow-emerald-500/20 cursor-pointer"
              >
                {lang === "ar" ? "حسناً، فهمت" : "I understand"}
              </button>
            </div>
          </div>
        </main>
      )}

      {/* RICH AND COMPREHENSIVE FOOTER */}
      <footer id="app-site-footer" className="mt-auto bg-[#05070a] border-t border-gray-905 px-4 py-12 text-center text-xs text-gray-500">
        <div id="footer-logo-panel" className="max-w-7xl mx-auto flex flex-col items-center gap-4">
          <span className="font-display font-black text-lg tracking-wider text-white">9ii.xyz</span>
          <p className="max-w-md mx-auto text-[11px] text-gray-400">
            {th[lang].rightsReserved}
          </p>
          <div className="flex items-center gap-4 mt-2">
            <button
              id="footer-privacy-btn"
              onClick={() => setShowPrivacy(true)}
              className="text-[#10b981] hover:text-emerald-400 font-medium transition-colors cursor-pointer text-xs underline decoration-dotted underline-offset-4"
            >
              {th[lang].privacyLabel}
            </button>
          </div>
          <div className="h-[1px] w-12 bg-gray-800 my-2" />
        </div>
      </footer>

    </div>
  );
}
