/**
 * =======================================================================
 *  حلواني خالد عمر - ملف إعدادات وبيانات الموقع (Site Configuration File)
 * =======================================================================
 * 
 *  مرحباً بك! هذا هو الملف الموحد الذي يمكنك من خلاله تعديل كل شيء في الموقع:
 *  - أرقام الهاتف والخط الساخن
 *  - روابط وسائل التواصل الاجتماعي (فيسبوك، انستغرام، يوتيوب، تيك توك)
 *  - أسماء وتفاصيل التورت وأسعارها وصورها
 *  - أقسام المنيو كاملة مع الأسعار والمواصفات
 *  - عناوين الفروع ومواعيد العمل
 * 
 *  طريقة التعديل:
 *  - عدل فقط النصوص والأرقام الموجودة بين علامات التنصيص '...'
 *  - احفظ الملف وافتح صفحة الموقع لترى التعديلات فوراً!
 * =======================================================================
 */

window.SITE_CONFIG = {
  // ---------------------------------------------------------
  // 1. هوية البراند والبيانات العامة (Brand Identity)
  // ---------------------------------------------------------
  brand: {
    name: 'حلواني خالد عمر',
    subName: 'محطة الحلويات • Sweets Station',
    badgeText: 'أصالة الطعم الملكي منذ سنوات في الإسكندرية',
    logo: 'assets/images/logo.png',               // شعار الموقع المفرغ
    logoBadge: 'assets/images/logo-badge.png',    // الشعار الذهبي
    logoCover: 'assets/images/logo-original.jpg',  // صورة الهوية الأصلية بالخلفية المارونية
    heroHeadline: 'محطة السعادة والحلويات الملكية الفاخرة',
    heroSubtitle: 'نصنع لكم أشهى التورت والمناسبات والحلويات الشرقية والغربية بسمن بلدي خالص وجودة تليق بأفراحكم ومناسباتكم في الإسكندرية.',
    announcement: '📢 تنويه هام: حرصاً على سرعة ودقة خدمتكم، يتم استقبال كافة طلبات التوصيل والحجز حصرياً من خلال الخط الساخن الموحد 16562 فقط.'
  },

  // ---------------------------------------------------------
  // 2. الخط الساخن والطلب المباشر (Hotline - The Only Ordering Channel)
  // ---------------------------------------------------------
  hotline: {
    number: '16562',
    display: '16562',
    telLink: 'tel:16562',
    label: 'الخط الساخن للطلب',
    subLabel: 'الرقم الوحيد المعتمد للطلب والتوصيل',
    callButtonText: 'اتصل الآن: 16562',
    deliveryNote: 'خدمة التوصيل السريع دليفري تغطي كافة مناطق الإسكندرية'
  },

  // ---------------------------------------------------------
  // 3. روابط السوشيال ميديا الرسمية (Official Social Channels)
  // ---------------------------------------------------------
  social: {
    youtube: {
      title: 'YouTube',
      name: 'قناة اليوتيوب الرسمية',
      url: 'https://www.youtube.com/@khaledelhalawany8790',
      handle: '@khaledelhalawany8790',
      description: 'شاهد أحدث وصفات وطرق تزيين التورت والحلويات خلف الكواليس'
    },
    facebook: {
      title: 'Facebook',
      name: 'صفحة الفيسبوك الرسمية',
      url: 'https://www.facebook.com/khaledomarpatsry/',
      handle: 'khaledomarpatsry',
      description: 'تابع عروضنا اليومية والجديد في محطة الحلويات مع آراء عملائنا'
    },
    instagram: {
      title: 'Instagram',
      name: 'حساب الانستغرام',
      url: 'https://www.instagram.com/khaled_omar_elhalawany/',
      handle: '@khaled_omar_elhalawany',
      description: 'معرض صور تورت الأفراح والمناسبات الخاصة بأعلى دقة وفخامة'
    },
    tiktok: {
      title: 'TikTok',
      name: 'حساب التيك توك',
      url: 'https://www.tiktok.com/@khaledomarelhalawany',
      handle: '@khaledomarelhalawany',
      description: 'فيديوهات قصيرة مميزة ولقطات سريعة لأشهى الحلويات والشوكولاتة'
    }
  },

  // ---------------------------------------------------------
  // 4. روابط خارجية إضافية (External References)
  // ---------------------------------------------------------
  externalLinks: {
    cakesGallery: 'https://elhalwanykhaledomarcakes.github.io/khaled-omar-cakes/',
    magazineUrl: 'https://tinyurl.com/magazine-elhalwani-khaled-omar'
  },

  // ---------------------------------------------------------
  // 5. فروع حلواني خالد عمر ومواعيد العمل (Branches)
  // ---------------------------------------------------------
  branches: [
    {
      id: 'abdelkader',
      name: 'الفرع الرئيسي - عبد القادر',
      area: 'طريق القاهرة - الإسكندرية الصحراوي',
      address: 'مدخل شركة الإسكندرية للبتروكيماويات، أمام كوبري المشاة - عبد القادر، الإسكندرية',
      phone: '16562',
      workingHours: 'يومياً من 8:00 صباحاً حتى 2:00 صباحاً',
      isMain: true
    },
    {
      id: 'ajami',
      name: 'فرع العجمي والبيطاش',
      area: 'العجمي',
      address: 'شارع البيطاش الرئيسي، بجوار أشهر المعالم، الإسكندرية',
      phone: '16562',
      workingHours: 'يومياً من 9:00 صباحاً حتى 2:30 صباحاً',
      isMain: false
    },
    {
      id: 'st45',
      name: 'فرع شارع 45 (العصافرة / ميامي)',
      area: 'شرق الإسكندرية',
      address: 'شارع 45 الرئيسي، بالقرب من البحر والكورنيش، العصافرة بحري، الإسكندرية',
      phone: '16562',
      workingHours: 'يومياً من 9:00 صباحاً حتى 3:00 صباحاً',
      isMain: false
    },
    {
      id: 'wardian',
      name: 'فرع الورديان',
      area: 'غرب الإسكندرية',
      address: 'ميدان الصينية، الورديان، الإسكندرية',
      phone: '16562',
      workingHours: 'يومياً من 9:00 صباحاً حتى 2:00 صباحاً',
      isMain: false
    }
  ],

  // ---------------------------------------------------------
  // 6. تشكيلة التورت الملكية المعتمدة (Signature Royal Cakes)
  //    (مأخوذة من الكتالوج الرسمي مع الصور والمقاسات وعدد الأفراد)
  // ---------------------------------------------------------
  cakes: [
    {
      id: 1,
      title: 'تورتة هاي مقاس ٢٠',
      servings: 'تكفي من ٣ ل ٤ أفراد',
      details: 'تورتة كيك إسفنجي مرتفع غني بالكريمة الطازجة وتزيين شوكولاتة وفواكه طبيعية فاخرة.',
      price: 240,
      image: 'assets/images/cake-1.png',
      fallbackImage: 'https://elhalwanykhaledomarcakes.github.io/khaled-omar-cakes/cake-1.png',
      badge: 'الأكثر طلباً',
      available: true
    },
    {
      id: 2,
      title: 'تورتة قلب وسط',
      servings: 'تكفي من ٤ ل ٦ أفراد',
      details: 'شكل قلب رومانسي أنيق مزين بلمسات ريد فيلفيت وشوكولاتة بلجيكية للمناسبات والذكرى السعيدة.',
      price: 290,
      image: 'assets/images/cake-2.png',
      fallbackImage: 'https://elhalwanykhaledomarcakes.github.io/khaled-omar-cakes/cake-2.png',
      badge: 'للمناسبات السعيدة',
      available: true
    },
    {
      id: 3,
      title: 'تورتة مقاس ٢٣',
      servings: 'تكفي من ٨ ل ١٠ أفراد',
      details: 'مزيج كلاسيكي فاخر يجمع بين الفانيليا والشوكولاتة الغنية ومزينة بحبات الكريز والمكسرات المحمصة.',
      price: 380,
      image: 'assets/images/cake-3.png',
      fallbackImage: 'https://elhalwanykhaledomarcakes.github.io/khaled-omar-cakes/cake-3.png',
      badge: 'جمعات العائلة',
      available: true
    },
    {
      id: 4,
      title: 'تورتة مقاس ٢٧',
      servings: 'تكفي من ١٢ ل ١٤ فرد',
      details: 'حجم مميز ومثالي لأعياد الميلاد والتجمعات، غنية بكريمة الحليب وطبقات الصوصات الشهية.',
      price: 470,
      image: 'assets/images/cake-4.png',
      fallbackImage: 'https://elhalwanykhaledomarcakes.github.io/khaled-omar-cakes/cake-4.png',
      badge: 'أعياد ميلاد',
      available: true
    },
    {
      id: 5,
      title: 'تورتة مربعة ميديام وفورسيزون (٣٠*٣٠ تقريبا)',
      servings: 'تكفي من ١٦ ل ١٨ فرد',
      details: 'أربعة أرباع بأربع نكهات ملكية: ربع مكسرات فاخرة، ربع نوتيلا، ربع لوتس، وربع فواكه استوائية منعشة.',
      price: 590,
      image: 'assets/images/cake-5.png',
      fallbackImage: 'https://elhalwanykhaledomarcakes.github.io/khaled-omar-cakes/cake-5.png',
      badge: 'تورتة فورسيزون 4 نكهات',
      available: true
    },
    {
      id: 6,
      title: 'مربعة لارج (٤٠*٤٠ تقريبا)',
      servings: 'تكفي من ٢٥ ل ٣٠ فرد',
      details: 'تورتة احتفالات ضخمة وراقية، تكفي التجمعات العائلية وحفلات النجاح، بإتقان عالي ولمسات فنية باهرة.',
      price: 850,
      image: 'assets/images/cake-6.png',
      fallbackImage: 'https://elhalwanykhaledomarcakes.github.io/khaled-omar-cakes/cake-6.png',
      badge: 'حفلات وتخرج',
      available: true
    },
    {
      id: 7,
      title: 'مستطيلة لارج (٣٠*٤٠ تقريبا)',
      servings: 'من ٢٠ ل ٢٥ فرد',
      details: 'تصميم مستطيل أنيق يتيح تقطيعاً مثالياً لجميع الضيوف مع تنوع غني بين الحشوات والكريمات.',
      price: 720,
      image: 'assets/images/cake-7.png',
      fallbackImage: 'https://elhalwanykhaledomarcakes.github.io/khaled-omar-cakes/cake-7.png',
      badge: 'مميزة جداً',
      available: true
    },
    {
      id: 8,
      title: 'مستطيلة اكس لارج (٤٠*٦٠ تقريبا)',
      servings: 'تكفي من ٤٠ ل ٤٥ فرد',
      details: 'صممت لخدمة الفعاليات والشركات والاحتفالات الكبرى، تعكس الفخامة والأناقة في أدق تفاصيلها.',
      price: 1250,
      image: 'assets/images/cake-8.png',
      fallbackImage: 'https://elhalwanykhaledomarcakes.github.io/khaled-omar-cakes/cake-8.png',
      badge: 'مناسبات كبرى',
      available: true
    },
    {
      id: 9,
      title: 'دابل اكس لارج (٦٠*٨٠ تقريبا)',
      servings: 'تكفي من ٩٠ ل ١٠٠ فرد',
      details: 'القمة في عالم تورت الأفراح والمؤتمرات؛ إبهار حقيقي بحجم ملكي يكفي حتى 100 ضيف بأرقى تزيين.',
      price: 2400,
      image: 'assets/images/cake-9.png',
      fallbackImage: 'https://elhalwanykhaledomarcakes.github.io/khaled-omar-cakes/cake-9.png',
      badge: 'ملكي VIP - أفراح',
      available: true
    },
    {
      id: 10,
      title: 'تورتة الفادج 12 قطعة',
      servings: 'تكفي 12 فرد',
      details: 'عشاق الشوكولاتة الكثيفة؛ طبقات فادج كيك داكنة غنية بجناش الشوكولاتة البلجيكية الفاخرة المترفة.',
      price: 340,
      image: 'assets/images/cake-10.png',
      fallbackImage: 'https://elhalwanykhaledomarcakes.github.io/khaled-omar-cakes/cake-10.png',
      badge: 'فادج بلجيكي غني',
      available: true
    },
    {
      id: 11,
      title: 'تورتة سمول ميني',
      servings: 'تكفي فردين',
      details: 'تورتة ميني لطيفة وسريعة للأمسيات الهادئة والمفاجآت الفورية اللذيذة.',
      price: 160,
      image: 'assets/images/cake-11.png',
      fallbackImage: 'https://elhalwanykhaledomarcakes.github.io/khaled-omar-cakes/cake-11.png',
      badge: 'ميني كيك',
      available: false // غير متوفر حالياً كما هو موضح بالمنيو
    }
  ],

  // ---------------------------------------------------------
  // 7. قائمة المنيو الكاملة ومجلة الأسعار (Full Menu Magazine)
  // ---------------------------------------------------------
  menuCategories: [
    { id: 'all', name: 'الكل' },
    { id: 'cakes', name: '🎂 التورت والجاتوه' },
    { id: 'oriental', name: '🍯 حلويات شرقية فاخرة' },
    { id: 'western', name: '🍰 غربي وباتيسري' },
    { id: 'casseroles', name: '🍮 طواجن وأرز باللبن' },
    { id: 'bakery', name: '🥐 مخبوزات ونواعم' },
    { id: 'boxes', name: '🎁 علب مشكلة وهدايا' }
  ],

  menuItems: [
    // --- حلويات شرقية فاخرة ---
    {
      id: 'm1',
      title: 'هريسة إسكندراني بالبندق والمكسرات',
      category: 'oriental',
      price: 180,
      unit: 'كيلو',
      desc: 'سر الصنعة الإسكندرانية الأصيلة بالسمن البلدي الطبيعي محشية ومزينة بحبات البندق المحمص الفاخر.',
      badge: 'بصمة خالد عمر',
      image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'm2',
      title: 'بسبوسة مرملة بالقشطة واللوز',
      category: 'oriental',
      price: 160,
      unit: 'كيلو',
      desc: 'بسبوسة ناعمة ومرملة بنكهة السمن البلدي الغني ولمسة قشطة طازجة مع حبات اللوز الذهبية.',
      badge: 'الأكثر مبيعاً',
      image: 'https://images.unsplash.com/photo-1541784533868-685669a45453?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'm3',
      title: 'صينية المدلعة الإسكندراني',
      category: 'oriental',
      price: 190,
      unit: 'صينية',
      desc: 'توليفة الملوك: طبقة بسبوسة دايبة + طبقة كنافة مقرمشة + قشطة حليب وصوص كراميل وتوت فخم.',
      badge: 'توصية الشيف',
      image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'm4',
      title: 'كنافة عثمانلي بالقشطة الطازجة',
      category: 'oriental',
      price: 175,
      unit: 'كيلو',
      desc: 'كنافة ذهبية محمرة بالسمن البلدي محشوة بطبقة غنية ووفيرة من القشطة الفلاحي الطازجة وشربات خفيف.',
      badge: 'طازج يومياً',
      image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'm5',
      title: 'كنافة نابلسية بالجبنة العكاوية',
      category: 'oriental',
      price: 210,
      unit: 'طبق كبير',
      desc: 'تُقدم ساخنة ومطاطية بألذ طعم للجبنة السايحة مع رشة فستق حلبي أخضر أصلي وسمن طبيعي.',
      badge: 'ساخن ولذيذ',
      image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'm6',
      title: 'أصابع بلح الشام المحشية نوتيلا وقشطة',
      category: 'oriental',
      price: 150,
      unit: 'كيلو',
      desc: 'بلح الشام المقرمش الذهبي من الخارج وهش من الداخل، محشو بكريمة النوتيلا والقشطة اللذيذة.',
      badge: '',
      image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'm7',
      title: 'بسيمة فاخرة بجوز الهند والمكسرات',
      category: 'oriental',
      price: 170,
      unit: 'كيلو',
      desc: 'طعم جوز الهند الطبيعي المركز بقوام طري ممزوج بالعسل الطبيعي والمكسرات الفاخرة.',
      badge: '',
      image: 'https://images.unsplash.com/photo-1599785209707-a456fc1337bb?auto=format&fit=crop&w=600&q=80'
    },

    // --- غربي وجاتوه وباتيسري ---
    {
      id: 'm8',
      title: 'دستة جاتوه سواريه مشكل فاخر (12 قطعة)',
      category: 'western',
      price: 220,
      unit: 'علبة 12 قطعة',
      desc: 'تشكيلة راقية من قطع السواريه المنوعة: شوكولاتة نوتيلا، موس توت، كراميل، ريد فيلفيت، ولوتس.',
      badge: 'ممتاز للمناسبات',
      image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'm9',
      title: 'دستة جاتوه قطع كلاسيك كبيرة (12 قطعة)',
      category: 'western',
      price: 260,
      unit: 'دستة 12 قطعة',
      desc: 'قطع جاتوه بالحجم الكلاسيكي الكبير بأشهى الحشوات الغربية المزينة بالفواكه والشوكولاتة البلجيكية.',
      badge: 'حجم عائلي',
      image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'm10',
      title: 'بروفيترول فرنسي بصوص الشوكولاتة والكراميل',
      category: 'western',
      price: 85,
      unit: 'طبق عائلي',
      desc: 'كرات الشو الفرنسية الخفيفة محشوة بكاسترد الفانيليا الناعم ومغمورة بشلال صوص شوكولاتة ساخن.',
      badge: 'توصية الشيف',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'm11',
      title: 'إكلير فرنسي مشكل (نوتيلا / لوتس / بستاشيو)',
      category: 'western',
      price: 95,
      unit: 'باكيت 4 قطع',
      desc: 'عجينة إكلير ممتازة خفيفة وهشة بحشوات كريمة الباتسيير الغنية وصوصات نوتيلا وبستاشيو فاخر.',
      badge: '',
      image: 'https://images.unsplash.com/photo-1525648199074-bee30be20109?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'm12',
      title: 'تشيز كيك نيويورك بالبلو بيري الطبيعي',
      category: 'western',
      price: 75,
      unit: 'قطعة كبيرة',
      desc: 'طبقة كريمية متماسكة غنية بجبنة الفيلادلفيا الفاخرة على قاعدة بسكويت بالزبدة وصوص التوت الأزرق.',
      badge: '',
      image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80'
    },

    // --- طواجن وأرز باللبن ---
    {
      id: 'm13',
      title: 'طاجن أم علي الأصيل بالمكسرات والسمن البلدي',
      category: 'casseroles',
      price: 70,
      unit: 'طاجن فخار',
      desc: 'رقائق الميل فاي مع الحليب المغلي المغذّى بالقشطة الفلاحي والزبيب وجوز الهند والبندق في الفرن البلدي.',
      badge: 'ساخن من الفرن',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'm14',
      title: 'طاجن أم علي بالنوتيلا واللوتس المذاب',
      category: 'casseroles',
      price: 95,
      unit: 'طاجن فخار',
      desc: 'ابتكار خالد عمر الخاص لعشاق الشوكولاتة؛ ميكس نوتيلا وزبدة لوتس مع رقائق أم علي والقشطة.',
      badge: 'الأعلى طلباً',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'm15',
      title: 'أرز باللبن خالد عمر بالقشطة والمكسرات',
      category: 'casseroles',
      price: 35,
      unit: 'كوب كبير',
      desc: 'حليب طبيعي 100% مع قوام كريمي غني ووش مكرمش طبيعي مزين بالفستق واللوز والزبيب.',
      badge: 'كريمي أصيل',
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'm16',
      title: 'أرز باللبن نوتيلا وكندر بوينو ولتس',
      category: 'casseroles',
      price: 55,
      unit: 'كوب كبير',
      desc: 'قاعدة أرز باللبن باردة مغطاة بطبقة وفيرة من نوتيلا أصلية وأصابع كندر وبسكويت لوتس مقرمش.',
      badge: 'دلّع نفسك',
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80'
    },

    // --- مخبوزات ونواعم وباتيسري ---
    {
      id: 'm17',
      title: 'باكيت باتون ساليه بالكمون والجبنة الرومي',
      category: 'bakery',
      price: 60,
      unit: 'باكيت 500 جم',
      desc: 'مقرمش وخفيف بنكهة الجبنة الرومي القديمة والكمون البلدي المحمص، مثالي للفطور والشاي.',
      badge: 'مقرمشات يومية',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'm18',
      title: 'قراقيش سادة وبالعجوة بالسمن البلدي',
      category: 'bakery',
      price: 75,
      unit: 'علبة كيلو',
      desc: 'نواعم دايبة ومخروطة بعناية مع عجوة معجونة بالسمن والسمسم المحمص، طعم الدفء والذكريات.',
      badge: 'سمن بلدي 100%',
      image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'm19',
      title: 'كحك وبسكويت العيد الفاخر بالسكر وعين الجمل',
      category: 'bakery',
      price: 210,
      unit: 'علبة كيلو',
      desc: 'كحك دايب على الطريقة القديمة محشو بعين الجمل والعجمية مع سكر بودرة ناصع البياض.',
      badge: 'روائع الأعياد',
      image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'm20',
      title: 'باكيت كوكيز شوكولاتة شيبس (6 قطع كبيرة)',
      category: 'bakery',
      price: 70,
      unit: 'باكيت 6 قطع',
      desc: 'كوكيز أمريكي طري ومقرمش من الحواف غني بقطع الشوكولاتة البلجيكية وزبدة طبيعية.',
      badge: '',
      image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80'
    },

    // --- علب مشكلة وهدايا ---
    {
      id: 'm21',
      title: 'صندوق الضيافة الملكي المشكل (شرقي وغربي)',
      category: 'boxes',
      price: 360,
      unit: 'علبة فاخرة 2 كيلو',
      desc: 'الهدية المثالية للعزومات والزيارات: مكس مشكل يجمع بين أروع أصناف الشرقي والسواريه.',
      badge: 'أفخم هدية للزيارات',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'm22',
      title: 'علبة مشكل شرقي إسكندراني بالمكسرات',
      category: 'boxes',
      price: 240,
      unit: 'علبة كيلو ونصف',
      desc: 'تضم تشكيلة مختارة من الهريسة، البسبوسة، الكنافة البورمة، والبسيمة مع فستق وبندق ولوز.',
      badge: 'تشكيلة الملوك',
      image: 'https://images.unsplash.com/photo-1541784533868-685669a45453?auto=format&fit=crop&w=600&q=80'
    }
  ],

  // ---------------------------------------------------------
  // 8. مميزات حلواني خالد عمر (Why Choose Us)
  // ---------------------------------------------------------
  features: [
    {
      icon: '🧈',
      title: 'سمن بلدي نقي 100%',
      desc: 'لا نساوم أبداً على الجودة؛ نستخدم السمن البلدي الطبيعي وأجود الخامات الأصلية دون زيوت مهدرجة.'
    },
    {
      icon: '✨',
      title: 'طازج يومياً على مدار الساعة',
      desc: 'تورتاتنا وحلوياتنا تُخبز وتُزين يومياً في فروعنا لضمان قمة الطراوة والمذاق الرائع.'
    },
    {
      icon: '👨‍🍳',
      title: 'شيفات متخصصون بحرفية عالية',
      desc: 'خبرة عريقة في فنون الحلويات الشرقية الكلاسيكية والباتيسري الفرنسي الحديث لتلبية كل الأذواق.'
    },
    {
      icon: '⚡',
      title: 'توصيل سريع ودقيق عبر 16562',
      desc: 'أسطول دليفري مجهز بسيارات مبررة لنقل التورت والمناسبات لأي مكان في الإسكندرية بحالتها المثالية.'
    }
  ],

  // ---------------------------------------------------------
  // 9. آراء وتجارب العملاء (Testimonials)
  // ---------------------------------------------------------
  testimonials: [
    {
      name: 'أحمد محمود (محرم بك)',
      comment: 'تورتة الفورسيزون كانت نجمة عيد ميلاد ابني، طازجة وشيك جداً والكل شكر في طعمها.. تسلم إيديكم يا خالد عمر!',
      rating: 5
    },
    {
      name: 'سارة عبد الفتاح (سموحة)',
      comment: 'الهريسة الإسكندراني عندهم حكاية تانية خالص.. طعم السمن البلدي والبندق ظاهر والترملة مظبوطة بالشعرة.',
      rating: 5
    },
    {
      name: 'م. إبراهيم خليل (العجمي)',
      comment: 'سرعة التوصيل بعد الاتصال بـ 16562 ممتازة، والأوردر وصل بنفس الشكل والتغليف الراقي.',
      rating: 5
    }
  ],

  // ---------------------------------------------------------
  // 10. نصوص الفوتر وحقوق الملكية (Footer)
  // ---------------------------------------------------------
  footer: {
    about: 'حلواني خالد عمر - محطة الحلويات Sweets Station، وجهتك الأولى للحلويات الشرقية والغربية وتورت المناسبات الملكية في الإسكندرية.',
    copyright: 'جميع الحقوق محفوظة © حلواني خالد عمر - محطة الحلويات Sweets Station',
    devCredit: 'تم التطوير خصيصاً ليليق بهوية وعراقة حلواني خالد عمر'
  }
};
