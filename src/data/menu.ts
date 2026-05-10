export type Price = number | { S?: number; M?: number; L?: number; D?: number; jar?: number; add?: number };

export type MenuItem = {
  nameAr: string;
  nameEn?: string;
  desc?: string;
  price: Price;
  hot?: boolean;
  badge?: string;
};

export type MenuSection = {
  id: string;
  titleAr: string;
  titleEn?: string;
  items: MenuItem[];
  note?: string;
};

export const menu: MenuSection[] = [
  {
    id: "chicken-sandwich",
    titleAr: "ساندوتشات الدجاج",
    titleEn: "Chicken Sandwich",
    note: "إضافة أصابع موتزاريلا أو حلقات بصل يضاف 15 جنيه فقط",
    items: [
      { nameAr: "سموكي تشيكن", nameEn: "Smoky Chicken", desc: "قطع دجاج كريسبي مع الخس والمايونيز وصوص الجبنة الشيدر مع صوص تكساس المميز", price: { S: 99, M: 129, L: 159 } },
      { nameAr: "تشيزي تشيز", nameEn: "Cheesy Chicken", desc: "قطع دجاج كريسبي مع الخس والمايونيز وصوص الجبنة السايحة المميز", price: { S: 99, M: 129, L: 159 } },
      { nameAr: "آيلاند تشيكن", nameEn: "Island Chicken", desc: "قطع دجاج كريسبي مع الخس والمايونيز وصوص الجبنة الشيدر وصوص الألف جزيرة المميز", price: { S: 99, M: 129, L: 159 } },
      { nameAr: "تشيكن لافا", nameEn: "Chicken Lava", hot: true, desc: "قطع دجاج كريسبي مع الخس والمايونيز وصوص الجبنة الشيدر مع صوص المايونيز الحار المميز وقطع فلفل هالبينو", price: { S: 99, M: 129, L: 159 } },
      { nameAr: "سموك ماستر", nameEn: "Smoke Master", desc: "قطع دجاج كريسبي مع خس ومايونيز وصوص الجبنة الشيدر مع صوص الباربيكيو المميز وشرائح التركي المدخن", price: { S: 109, M: 135, L: 165 } },
      { nameAr: "زنجر كينج", nameEn: "Zinger King", desc: "قطع دجاج كريسبي مع الخس والمايونيز وصوص الجبنة الشيدر مع صوص التكساس المميز وصوص الباربيكيو", price: { L: 129 } },
      { nameAr: "فاير زنجر", nameEn: "Fire Zinger", hot: true, desc: "قطع دجاج كريسبي مع الخس والمايونيز وصوص الجبنة الشيدر مع صوص الألف جزيرة المميز وصوص المايونيز الحار", price: { L: 129 } },
    ],
  },
  {
    id: "beef-sandwich",
    titleAr: "ساندوتشات اللحم",
    titleEn: "Beef Sandwich",
    items: [
      { nameAr: "كلاسيك بان", nameEn: "Classic Bun", desc: "قطعة بيف مع الخس والمايونيز وصوص الجبنة الشيدر مع صوص تكساس المميز", price: { S: 99, M: 129, L: 159 } },
      { nameAr: "فاير برجر", nameEn: "Fire Burger", hot: true, desc: "قطعة بيف مع الخس والمايونيز وصوص الجبنة الشيدر مع صوص المايونيز الحار المميز وقطع فلفل هالبينو", price: { S: 99, M: 129, L: 159 } },
      { nameAr: "بيج برجر", nameEn: "Big Burger", desc: "يحتوي على أصابع موتزاريلا", price: { S: 115, M: 139, L: 169 } },
      { nameAr: "سموكي برجر", nameEn: "Smoky Burger", desc: "يحتوي على شرائح تركي مدخن", price: { S: 109, M: 139, L: 165 } },
    ],
  },
  {
    id: "smash-burger",
    titleAr: "سماش برجر",
    titleEn: "Smash Burger",
    items: [
      { nameAr: "سماش برجر", nameEn: "Smash Burger", badge: "جديد", desc: "قطعة برجر سماش - مع خس - صوص مدخن - وصوص جبنة", price: { S: 89, D: 109 } },
      { nameAr: "سماش كومبو", nameEn: "Smash Combo", desc: "برجر سماش - مع خس - صوص مدخن - وصوص جبنة + بطاطس + كولا", price: { S: 105, D: 130 } },
    ],
  },
  {
    id: "kids",
    titleAr: "كيدز ساندوتش",
    items: [
      { nameAr: "سنجل بيف", desc: "زود 6 جنيه وخد معاه بطاطس", price: 84 },
      { nameAr: "سنجل تشيكن", desc: "زود 6 جنيه وخد معاه بطاطس", price: 84 },
    ],
  },
  {
    id: "chicken-meals",
    titleAr: "وجبات الدجاج",
    titleEn: "Chicken Meals",
    items: [
      { nameAr: "سناك بوكس", desc: "2 قطعة دجاج - 1 خبز - بطاطس - صوص تومية", price: { S: 80, D: 99 } },
      { nameAr: "دينر بوكس", desc: "3 قطعة دجاج - 1 خبز - بطاطس - صوص تومية", price: { S: 110, D: 140 } },
      { nameAr: "سوبر بوكس", desc: "4 قطعة دجاج - 2 خبز - بطاطس - صوص تومية", price: { S: 150, D: 190 } },
      { nameAr: "وينر بوكس", desc: "8 قطعة دجاج - 4 خبز - بطاطس كبير - صوص تومية كبير", price: { S: 280, D: 380 } },
      { nameAr: "فاميلي بوكس", desc: "12 قطعة دجاج - 6 خبز - بطاطس كبير - صوص تومية كبير", price: { S: 380, D: 540 } },
    ],
    note: "S = ستربس / D = بروست",
  },
  {
    id: "smart-meals",
    titleAr: "Smart Meals",
    items: [
      { nameAr: "ريزو", desc: "أرز مع دجاج وصوص: باربيكيو / سويت شيلي / تكساس / سبايسي / جبنة", price: 75 },
      { nameAr: "نودلز آسيوي (تشاوميني)", desc: "نودلز مع صوص: سويت شيلي / باربيكيو", price: 40 },
      { nameAr: "وجبة نودلز مع دجاج", price: 130 },
    ],
  },
  {
    id: "syrian",
    titleAr: "سوري",
    items: [
      { nameAr: "بطاطس كاتشب", price: 30 },
      { nameAr: "بطاطس جبنة", price: 35 },
      { nameAr: "بطاطس هالبينو", price: 35 },
      { nameAr: "بطاطس ستربس", price: 50 },
      { nameAr: "ديناميت", desc: "بطاطس + خس + صوص جبنة + ستربس + تركي مدخن", price: 60 },
      { nameAr: "كريسبي رول سوري", desc: "قطع ستريبس - بطاطس - جبنة - تومية", price: 70 },
    ],
  },
  {
    id: "sides",
    titleAr: "أصناف جانبية",
    titleEn: "Sides",
    items: [
      { nameAr: "باكيت بطاطس + صوص", price: { S: 25, D: 35 } },
      { nameAr: "قطعة ستربس", price: 35 },
      { nameAr: "كولسلو", price: 10 },
      { nameAr: "قطعة بروست", price: 45 },
      { nameAr: "تركي مدخن", price: 10 },
      { nameAr: "أرز", price: 30 },
      { nameAr: "موتزاريلا ستيكس (3 قطع)", price: 30 },
      { nameAr: "خبز كيزر", price: 4 },
      { nameAr: "خبز برجر", price: 10 },
    ],
  },
  {
    id: "sauces",
    titleAr: "الصوصات",
    note: "السعر: برطمان / إضافة",
    items: [
      { nameAr: "باربيكيو", price: { jar: 10, add: 15 } },
      { nameAr: "تكساس", price: { jar: 10, add: 15 } },
      { nameAr: "سويت شيلي", price: { jar: 10, add: 15 } },
      { nameAr: "ألف جزيرة", price: { jar: 10, add: 15 } },
      { nameAr: "مايونيز حار", price: { jar: 10, add: 15 } },
      { nameAr: "جبنة سايحة", price: { jar: 10, add: 20 } },
    ],
  },
  {
    id: "drinks",
    titleAr: "المشروبات",
    items: [
      { nameAr: "عصير", price: 10 },
      { nameAr: "فلسطين كولا", price: 20 },
      { nameAr: "ماكسي كولا", price: 10 },
      { nameAr: "في كولا", price: 20 },
      { nameAr: "بيج كولا", price: 15 },
      { nameAr: "لتر بيج كولا", price: 30 },
      { nameAr: "تويست", price: 15 },
      { nameAr: "ماء", price: 5 },
    ],
  },
];

export const RESTAURANT = {
  name: "Fire Buns",
  tagline: "طعم هتحبه",
  subtitle: "Burger & Fried Chicken",
  phones: ["01031131590", "01556557843"],
  whatsappNumber: "201556557843",
  address: "قطور - شارع الخليج - أمام الرعاية الصحية",
  hours: [
    { days: "السبت – الخميس", time: "1:00 ظهرًا – 2:00 صباحًا" },
    { days: "الجمعة", time: "2:00 ظهرًا – 2:00 صباحًا" },
  ],
  mapShortUrl: "https://maps.app.goo.gl/WQgQMDZfPVKM5N1X6",
  mapEmbedUrl: "https://maps.google.com/maps?q=Fire%20Buns%20%D9%82%D8%B7%D9%88%D8%B1%20%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%A7%D9%84%D8%AE%D9%84%D9%8A%D8%AC&hl=ar&z=17&output=embed",
  social: {
    facebook: "https://facebook.com",
    whatsapp: "https://wa.me/201556557843",
    tiktok: "https://tiktok.com",
  },
  perks: [
    "صالة تجمعك أنت وحبايبك، وأكل يشرّفك",
    "دليفري بيوصل لأي مكان، وأقل سعر دليفري في المنطقة",
    "أجود الخامات بدون أي إضافات مضرة",
    "خامات فريش يوم بيوم لضمان أفضل جودة",
  ],
  offers: [
    "خصم 5% على أي ساندوتشين سواء برجر أو فرايد تشيكن أي حجم",
    "خصم 10% على أي أوردر بـ 400 جنيه أو أزيد من 400 في الصالة",
    "أي أوردر يتجاوز 350 جنيه بيدخل سحب على جوايز مقدمة من فاير بانز",
  ],
};
