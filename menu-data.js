/* ============================================================
   menu-data.js
   بيانات المنيو والفريق — ملف واحد مشترك بين index.html و team.html
   عشان لو غيّرت منتج أو عضو فريق، تغيّره هنا مرة واحدة بس.
   لازم يتحمّل بـ <script src="menu-data.js"></script> قبل أي سكريبت تاني.
   ============================================================ */

const TEAM = [
  { name:'مظهر علي',   phone:'201021776980' },
  { name:'حسن ابو عمر', phone:'201220522806' },
  { name:'كريم محمد',   phone:'201200615769' },
];
const MANAGER = { name: 'حسن ابو عمر', phone: '201220522806' };

// الاسمين المسموح لهم وحدهم بتعديل الأسعار وإخفاء/تعديل/حذف المنتجات
const PRICE_EDITOR_NAMES = ['حسن ابو عمر', 'مظهر علي'];

const SUGAR_COFFEE = ['بدون سكر/سادة','مظبوط','مانو','زيادة','زيادة حلواني'];
const SUGAR_SIMPLE = ['سكر مظبوط','سكر زيادة','سكر بره'];

const TEA_MIX_POOL = ['حليب','لمون','نعناع','قرنفل'];
const GROUP8_ITEMS = ['ينسون','قرفة','زنجبيل','لمون سخن','نعناع','كمون','شعير','كراوية'];

const ITEM_MIX_CONFIG = {
  'شاي سادة': { options: TEA_MIX_POOL, max: 4 },
  'شاي فتلة ليبتون': { options: TEA_MIX_POOL, max: 4 },
  'شاي فتلة عروسة': { options: TEA_MIX_POOL, max: 4 },
  'شاي أخضر': { options: TEA_MIX_POOL, max: 4 },
  'لمون ساقع': { options: ['نعناع','لبن'], max: 1 },
};
GROUP8_ITEMS.forEach(item=>{
  ITEM_MIX_CONFIG[item] = { options: GROUP8_ITEMS.filter(x=>x!==item), max: 4 };
});

const ITEM_EXTRA_CONFIG = {
  'كاكاو': [ {key:'milk', label:'الحليب', options:['حليب كامل','نص حليب']} ],
  'هوت شوكلت': [ {key:'milk', label:'الحليب', options:['حليب كامل','نص حليب']} ],
  'سحلب': [
    {key:'milk', label:'اللبن', options:['باللبن','بدون لبن']},
    {key:'nuts', label:'المكسرات', options:['بدون مكسرات','فول سوداني','جوز هند','زبيب','مكسرات مشكلة']}
  ],
};

const CAT_ICON = {
  herbs:`<svg viewBox="0 0 24 24" fill="none" stroke="#0f1a08" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20c8 0 15-6 15-15-9 0-15 7-15 15z"/><path d="M4 20c2-5 5-9 11-12"/></svg>`,
  coffee:`<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c-5 0-9 4.5-9 9s4 9 9 9 9-4.5 9-9-4-9-9-9z"/><path d="M8 20c2-6 3-11 8-16"/></svg>`,
  coffeemix:`<svg viewBox="0 0 24 24" fill="none" stroke="#2a1608" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h13a3 3 0 0 1 0 6h-1"/><path d="M4 8v7a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V8"/></svg>`,
  cold:`<svg viewBox="0 0 24 24" fill="none" stroke="#082633" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3s6 7 6 11.5a6 6 0 1 1-12 0C6 10 12 3 12 3z"/></svg>`,
};

const CATEGORIES = [
  { id:'herbs', title:'الأعشاب', desc:'مشروبات ساخنة طبيعية — يمكن عمل مزيج بين نوعين', type:'herb', iconBg:'var(--herb)',
    items:['شاي سادة','شاي فتلة ليبتون','شاي فتلة عروسة','ينسون','حلبة','زنجبيل','قرفة','كركديه','لمون سخن','شاي أخضر','نعناع','كراوية','كمون','شعير','ورق جوافة','قرنفل'] },
  { id:'coffee', title:'القهوة', desc:'حدد درجة التحلية المناسبة لك', type:'coffee', iconBg:'var(--gold)',
    items:['قهوة سادة','قهوة محوجة','قهوة مخصوصة','قهوة غامقة','قهوة سبيشيال','قهوة وسط','قهوة بندق','قهوة فرنساوي'] },
  { id:'coffeemix', title:'كوفي ميكس', desc:'لاتيه، نسكافيه ومشروبات ساخنة بالحليب', type:'simple', iconBg:'#B98A3E',
    items:['كوفي ميكس','كوفي بريك','لاتيه بندق','لاتيه كلاسيك','لاتيه فانيليا','نسكافيه بلاك','نسكافيه باللبن','كاكاو','هوت شوكلت','سحلب'] },
  { id:'cold', title:'المشروبات الساقعة', desc:'مشروبات باردة منعشة', type:'simple', iconBg:'#4E93B8',
    items:['لمون ساقع','عناب ساقع','آيس كوفي سموزي'] },
];

const ITEM_COLOR = {
  'شاي سادة':'#B9822E','شاي فتلة ليبتون':'#B9822E','شاي فتلة عروسة':'#A9701F',
  'ينسون':'#CFC79A','حلبة':'#D9B23C','زنجبيل':'#D68A3B','قرفة':'#8A5A2E','كركديه':'#8B1E33','لمون سخن':'#E4C24A',
  'شاي أخضر':'#6E8B4B','نعناع':'#5F9B5A','كراوية':'#B99A6B','كمون':'#8A7A4E','شعير':'#C9B48A','ورق جوافة':'#7C9A63','قرنفل':'#6B3A2A',
  'قهوة سادة':'#4A2F1C','قهوة محوجة':'#5A3A22','قهوة مخصوصة':'#6B4423','قهوة غامقة':'#3A2415','قهوة سبيشيال':'#6B4423',
  'قهوة وسط':'#7A5230','قهوة بندق':'#9C6B3E','قهوة فرنساوي':'#4A2F1C',
  'كوفي ميكس':'#8B5E34','كوفي بريك':'#A9713D','لاتيه بندق':'#C99A5E','لاتيه كلاسيك':'#E8DCC4','لاتيه فانيليا':'#EAD9A8',
  'نسكافيه بلاك':'#3A2415','نسكافيه باللبن':'#C9A97A','كاكاو':'#5A3A22','هوت شوكلت':'#3A2415','سحلب':'#E9DCC2',
  'لمون ساقع':'#D9DB6E','عناب ساقع':'#7A2430','آيس كوفي سموزي':'#8B5E34',
};

function iconKind(cat, name){
  if(name==='هوت شوكلت' || name==='سحلب') return 'latte';
  if(name==='كاكاو') return 'coffee';
  if(cat.type==='herb') return 'tea';
  if(cat.type==='coffee') return 'coffee';
  if(cat.id==='cold') return 'cold';
  if(name.includes('لاتيه') || name.includes('باللبن')) return 'latte';
  return 'coffee';
}

function drinkIconSVG(kind, color){
  if(kind==='tea'){
    return `<svg viewBox="0 0 40 40"><path d="M11 15h18l-2 20a3 3 0 0 1-3 2.6H16a3 3 0 0 1-3-2.6L11 15z" fill="${color}"/><path d="M11 15h18l-1 6H12l-1-6z" fill="#fff" opacity=".18"/><path d="M14 7c-1 2 1 3 0 5M20 7c-1 2 1 3 0 5M26 7c-1 2 1 3 0 5" stroke="#D6A24A" stroke-width="1.6" fill="none" stroke-linecap="round" opacity=".8"/></svg>`;
  }
  if(kind==='coffee'){
    return `<svg viewBox="0 0 40 40"><path d="M9 16h17v9a8.5 8.5 0 0 1-17 0v-9z" fill="${color}"/><ellipse cx="17.5" cy="16" rx="8.5" ry="2" fill="#fff" opacity=".22"/><path d="M26 18h3.5a4.2 4.2 0 0 1 0 8.4H26" fill="none" stroke="#2a1608" stroke-width="1.8"/><path d="M13 7c-1 2 1 3 0 5M19 7c-1 2 1 3 0 5" stroke="#D6A24A" stroke-width="1.6" fill="none" stroke-linecap="round" opacity=".8"/></svg>`;
  }
  if(kind==='latte'){
    return `<svg viewBox="0 0 40 40"><path d="M9 16h17v9a8.5 8.5 0 0 1-17 0v-9z" fill="${color}"/><path d="M26 18h3.5a4.2 4.2 0 0 1 0 8.4H26" fill="none" stroke="#2a1608" stroke-width="1.8"/><path d="M17.5 20a3.2 3.2 0 0 1 3.2 3.2c0 2.2-3.2 3.4-3.2 3.4s-3.2-1.2-3.2-3.4a3.2 3.2 0 0 1 3.2-3.2z" fill="#fff" opacity=".75"/></svg>`;
  }
  return `<svg viewBox="0 0 40 40"><path d="M12 13h16l-2 21a2.4 2.4 0 0 1-2.4 2.2H16.4A2.4 2.4 0 0 1 14 34l-2-21z" fill="${color}" opacity=".88"/><rect x="17" y="6" width="3" height="15" rx="1.2" fill="#fff" transform="rotate(14 18.5 13.5)"/><rect x="14.5" y="19" width="5" height="5" fill="#fff" opacity=".55"/><rect x="21.5" y="23" width="5" height="5" fill="#fff" opacity=".55"/></svg>`;
}

function hexToRgba(hex, alpha){
  const h = hex.replace('#','');
  const r = parseInt(h.substring(0,2),16), g = parseInt(h.substring(2,4),16), b = parseInt(h.substring(4,6),16);
  return `rgba(${r},${g},${b},${alpha})`;
}

// يطبّع رقم الواتساب المكتوب بأي صيغة (01xxxxxxxxx أو 1xxxxxxxxx أو 201xxxxxxxxx) لمقارنته برقم مسجّل
function normalizePhone(p){
  let d = (p||'').replace(/\D/g,'');
  if(d.startsWith('20')) d = d.slice(2);
  if(d.startsWith('0')) d = d.slice(1);
  return d;
}
