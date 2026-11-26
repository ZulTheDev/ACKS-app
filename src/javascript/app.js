const assetPath=p=>(location.pathname.includes('/pages/')?'../src/assets/':'src/assets/')+(p.startsWith('assets/')?p.slice(7):p);
const money=n=>'$'+n.toFixed(2);
const products=[
{id:'family_01',name:'Burger & Chicken Rice Family',category:'Bento Set',price:68.80,img:assetPath('assets/cards/F01_burger_and_chicken_rice_family_472x225.png'),desc:'Family sharing set with burgers and chicken rice.'},
{id:'family_02',name:'Nasi Lemak & Burger Family',category:'Bento Set',price:68.80,img:assetPath('assets/cards/F02_nasi_lemak_and_burger_family_472x225.png'),desc:'Family sharing set with nasi lemak and burgers.'},
{id:'family_03',name:'Asian Rice Feast',category:'Bento Set',price:68.80,img:assetPath('assets/cards/F03_asian_rice_feast_472x225.png'),desc:'A family sharing feast of Asian rice favourites.'},
{id:'family_04',name:'Western Platter Family',category:'Bento Set',price:68.80,img:assetPath('assets/cards/F04_western_platter_family_472x225.png'),desc:'Western-style family sharing platter.'},
{id:'family_05',name:'Wok & Rice Mega Family',category:'Bento Set',price:68.80,img:assetPath('assets/cards/F05_wok_and_rice_mega_family_472x225.png'),desc:'A large family sharing set of wok and rice dishes.'},
{id:'burger_01',name:'Classic Beef Burger',category:'Bento Set',price:8.80,img:assetPath('assets/cards/B01_classic_beef_burger_472x225.png'),desc:'Classic beef burger.'},
{id:'burger_02',name:'Crispy Chicken Burger',category:'Bento Set',price:7.80,img:assetPath('assets/cards/B02_crispy_chicken_burger_472x225.png'),desc:'Crispy chicken burger.'},
{id:'burger_03',name:'Spicy Chicken Burger',category:'Bento Set',price:8.20,img:assetPath('assets/cards/B03_spicy_chicken_burger_472x225.png'),desc:'Spicy chicken burger.'},
{id:'burger_04',name:'Fish Burger',category:'Bento Set',price:7.80,img:assetPath('assets/cards/B04_fish_burger_472x225.png'),desc:'Fish burger.'},
{id:'burger_05',name:'Double Beef Burger',category:'Bento Set',price:10.80,img:assetPath('assets/cards/B05_double_beef_burger_472x225.png'),desc:'Double beef burger.'},
{id:'rice_01',name:'Nasi Lemak',category:'Rice Set',price:6.50,img:assetPath('assets/cards/R01_nasi_lemak_472x225.png'),desc:'Coconut rice served with traditional accompaniments.'},
{id:'rice_02',name:'Chicken Rice',category:'Rice Set',price:6.80,img:assetPath('assets/cards/R02_chicken_rice_472x225.png'),desc:'Tender chicken served with fragrant rice.'},
{id:'rice_03',name:'Roasted Chicken Rice',category:'Rice Set',price:7.50,img:assetPath('assets/cards/R03_roasted_chicken_rice_472x225.png'),desc:'Roasted chicken with fragrant rice.'},
{id:'rice_04',name:'Nasi Ayam Penyet',category:'Rice Set',price:7.80,img:assetPath('assets/cards/R04_nasi_ayam_penyet_472x225.png'),desc:'Smashed fried chicken rice set.'},
{id:'rice_05',name:'Thai Basil Chicken',category:'Rice Set',price:7.80,img:assetPath('assets/cards/R05_thai_basil_chicken_472x225.png'),desc:'Thai basil chicken rice.'},
{id:'wok_01',name:'Nasi Goreng',category:'Rice Set',price:7.20,img:assetPath('assets/cards/W01_nasi_goreng_472x225.png'),desc:'Wok-fried rice.'},
{id:'wok_02',name:'Indomie Goreng',category:'Rice Set',price:6.80,img:assetPath('assets/cards/W02_indomie_goreng_472x225.png'),desc:'Wok-fried Indomie noodles.'},
{id:'wok_03',name:'Fish & Chips',category:'Bento Set',price:9.80,img:assetPath('assets/cards/W03_fish_and_chips_472x225.png'),desc:'Fish and chips.'},
{id:'wok_04',name:'Chicken Schnitzel',category:'Bento Set',price:9.80,img:assetPath('assets/cards/W04_chicken_schnitzel_472x225.png'),desc:'Crispy chicken schnitzel.'},
{id:'wok_05',name:'Beef Lasagna',category:'Bento Set',price:9.80,img:assetPath('assets/cards/W05_beef_lasagna_472x225.png'),desc:'Baked beef lasagna.'},
{id:'boba_01',name:'Brown Sugar Milk Tea',category:'Drink & Beverage',price:4.80,img:assetPath('assets/bubble_tea/BT01_brown_sugar_milk_tea_472x225.png'),desc:'Freshly prepared bubble tea.'},
{id:'boba_02',name:'Classic Milk Tea',category:'Drink & Beverage',price:4.50,img:assetPath('assets/bubble_tea/BT02_classic_milk_tea_472x225.png'),desc:'Freshly prepared bubble tea.'},
{id:'boba_03',name:'Matcha Milk Tea',category:'Drink & Beverage',price:5.20,img:assetPath('assets/bubble_tea/BT03_matcha_milk_tea_472x225.png'),desc:'Freshly prepared bubble tea.'},
{id:'boba_04',name:'Taro Milk Tea',category:'Drink & Beverage',price:4.80,img:assetPath('assets/bubble_tea/BT04_taro_milk_tea_472x225.png'),desc:'Freshly prepared bubble tea.'},
{id:'boba_05',name:'Strawberry Milk Tea',category:'Drink & Beverage',price:5.00,img:assetPath('assets/bubble_tea/BT05_strawberry_milk_tea_472x225.png'),desc:'Freshly prepared bubble tea.'},
{id:'drink_01',name:'Iced Cola',category:'Drink & Beverage',price:2.20,img:assetPath('assets/drinks/D01_iced_cola_472x225.png'),desc:'Refreshing drink from the The Essemble Cafe beverage menu.'},
{id:'drink_02',name:'Iced Milk Tea',category:'Drink & Beverage',price:3.80,img:assetPath('assets/drinks/D02_iced_milk_tea_472x225.png'),desc:'Refreshing drink from the The Essemble Cafe beverage menu.'},
{id:'drink_03',name:'Citrus Iced Drink',category:'Drink & Beverage',price:3.50,img:assetPath('assets/drinks/D03_citrus_iced_drink_472x225.png'),desc:'Refreshing drink from the The Essemble Cafe beverage menu.'},
{id:'drink_04',name:'Berry Iced Drink',category:'Drink & Beverage',price:3.80,img:assetPath('assets/drinks/D04_berry_iced_drink_472x225.png'),desc:'Refreshing drink from the The Essemble Cafe beverage menu.'},
{id:'drink_05',name:'Lemon Soda',category:'Drink & Beverage',price:3.50,img:assetPath('assets/drinks/D05_lemon_soda_472x225.png'),desc:'Refreshing drink from the The Essemble Cafe beverage menu.'},
{id:'drink_06',name:'Hot Coffee',category:'Drink & Beverage',price:2.50,img:assetPath('assets/drinks/D06_hot_coffee_472x225.png'),desc:'Refreshing drink from the The Essemble Cafe beverage menu.'},
{id:'drink_07',name:'Russian Kvass',category:'Drink & Beverage',price:3.80,img:assetPath('assets/drinks_extra/D07_russian_kvass_472x225.png'),desc:'Refreshing drink from the The Essemble Cafe beverage menu.'},
{id:'drink_08',name:'Thai Iced Tea',category:'Drink & Beverage',price:3.80,img:assetPath('assets/drinks_extra/D08_thai_iced_tea_472x225.png'),desc:'Refreshing drink from the The Essemble Cafe beverage menu.'},
{id:'drink_09',name:'Singapore Iced Kopi',category:'Drink & Beverage',price:2.80,img:assetPath('assets/drinks_extra/D09_singapore_iced_kopi_472x225.png'),desc:'Refreshing drink from the The Essemble Cafe beverage menu.'},
{id:'drink_10',name:'Iced Matcha',category:'Drink & Beverage',price:4.80,img:assetPath('assets/drinks_extra/D10_iced_matcha_472x225.png'),desc:'Refreshing drink from the The Essemble Cafe beverage menu.'},
{id:'drink_11',name:'Coca-Cola',category:'Drink & Beverage',price:2.20,img:assetPath('assets/drinks_extra/SD01_coca_cola_472x225.png'),desc:'Refreshing drink from the The Essemble Cafe beverage menu.'},
{id:'drink_12',name:'Coca-Cola Zero',category:'Drink & Beverage',price:2.20,img:assetPath('assets/drinks_extra/SD02_coca_cola_zero_472x225.png'),desc:'Refreshing drink from the The Essemble Cafe beverage menu.'},
{id:'drink_13',name:'Pepsi',category:'Drink & Beverage',price:2.20,img:assetPath('assets/drinks_extra/SD03_pepsi_472x225.png'),desc:'Refreshing drink from the The Essemble Cafe beverage menu.'},
{id:'drink_14',name:'Fanta Grape',category:'Drink & Beverage',price:2.20,img:assetPath('assets/drinks_extra/SD04_fanta_grape_472x225.png'),desc:'Refreshing drink from the The Essemble Cafe beverage menu.'},
{id:'drink_15',name:'Sprite',category:'Drink & Beverage',price:2.20,img:assetPath('assets/drinks_extra/SD05_sprite_472x225.png'),desc:'Refreshing drink from the The Essemble Cafe beverage menu.'},
{id:'drink_16',name:'Baikal',category:'Drink & Beverage',price:3.50,img:assetPath('assets/drinks_extra/RU01_baikal_472x225.png'),desc:'Refreshing drink from the The Essemble Cafe beverage menu.'},
{id:'drink_17',name:'Tarhun',category:'Drink & Beverage',price:3.50,img:assetPath('assets/drinks_extra/RU02_tarhun_472x225.png'),desc:'Refreshing drink from the The Essemble Cafe beverage menu.'},
{id:'drink_18',name:'Ramune',category:'Drink & Beverage',price:4.00,img:assetPath('assets/drinks_extra/JP01_ramune_472x225.png'),desc:'Refreshing drink from the The Essemble Cafe beverage menu.'},
{id:'drink_19',name:'Milkis',category:'Drink & Beverage',price:3.50,img:assetPath('assets/drinks_extra/KR01_milkis_472x225.png'),desc:'Refreshing drink from the The Essemble Cafe beverage menu.'},
{id:'drink_20',name:'Est Cola',category:'Drink & Beverage',price:2.20,img:assetPath('assets/drinks_extra/TH01_est_cola_472x225.png'),desc:'Refreshing drink from the The Essemble Cafe beverage menu.'}
];
// MENU INTERACTION HOOK: Add/remove category names here; renderMenu() rebuilds the category buttons and product list.
const cats=['Bento Set','Drink & Beverage','Rice Set'];
let category='Bento Set', mode='', cart=[], current=null, qty=1, activeTab='overview',speech=false,audio=false,custom={spice:'Normal',extras:[],notes:''};
// MULTI-PAGE STATE: Keep the current order while the customer moves between separate HTML pages.
let savedState={};
try{savedState=JSON.parse(sessionStorage.getItem('essembleState')||'{}')||{};}catch(e){}
mode=savedState.mode||mode;
cart=Array.isArray(savedState.cart)?savedState.cart:cart;
current=savedState.currentId?products.find(p=>p.id===savedState.currentId)||null:current;
qty=savedState.qty||qty;
activeTab=savedState.activeTab||activeTab;
speech=false;
audio=!!savedState.audio;
custom=savedState.custom||custom;
category=savedState.category||category;
let selectedLanguage=savedState.language||'English';

// SIMULATED CUSTOMER WALLET: session-scoped demo credits, not real money.
const WALLET_STARTING_BALANCE=100;
const storedWalletBalance=localStorage.getItem('essembleWalletBalance')??sessionStorage.getItem('essembleWalletBalance');
let walletBalance=storedWalletBalance===null?WALLET_STARTING_BALANCE:Number(storedWalletBalance);
if(!Number.isFinite(walletBalance)||walletBalance<0)walletBalance=WALLET_STARTING_BALANCE;
let walletTransactions=[];
try{walletTransactions=JSON.parse(localStorage.getItem('essembleWalletTransactions')||sessionStorage.getItem('essembleWalletTransactions')||'[]');if(!Array.isArray(walletTransactions))walletTransactions=[];}catch(e){walletTransactions=[];}
function saveWallet(){
  try{
    localStorage.setItem('essembleWalletBalance',String(walletBalance));
    localStorage.setItem('essembleWalletTransactions',JSON.stringify(walletTransactions));
    // Keep session copies for compatibility with older prototype pages.
    sessionStorage.setItem('essembleWalletBalance',String(walletBalance));
    sessionStorage.setItem('essembleWalletTransactions',JSON.stringify(walletTransactions));
  }catch(e){console.warn('Could not save demo wallet',e);}
}
saveWallet();
function walletReceiptMarkup(){
  return `<div class="summary-line"><span>Demo wallet balance</span><b>${money(walletBalance)}</b></div>`;
}

if(!['Bento Set','Drink & Beverage','Rice Set'].includes(category))category='Bento Set';

// NAVIGATION HOOK: All screen changes pass through go(screenId). Add screen-transition audio or analytics here if required.
function persistState(){
  try{
    sessionStorage.setItem('essembleState', JSON.stringify({
      mode, cart, currentId: current?.id || null, qty, activeTab, speech, audio, custom,
      category, language: selectedLanguage,
      customerName: document.getElementById('customerName')?.value || '',
      tableNo: document.getElementById('tableNo')?.value || '',
      phone: document.getElementById('phone')?.value || '',
      payment: document.getElementById('payment')?.value || 'Pay at counter'
    }));
  }catch(e){ console.warn('Could not save kiosk state',e); }
}
function go(id){
  
  persistState();
  const destinations={
    home:'../index.html', menu:'menu.html', detail:'item.html',
    cart:'cart.html', checkout:'checkout.html', success:'success.html'
  };
  const here=location.pathname.includes('/pages/')?'pages/':'';
  if(id==='home'){ location.href=here?'../index.html':'index.html'; return; }
  if(here){ location.href=destinations[id]; }
  else { location.href='pages/'+destinations[id]; }
}
// ORDER MODE HOOK: Called by the Dine In and Takeaway buttons. Persist this mode here when connecting a backend.
function startOrder(m){mode=m;go('menu');say('Welcome. Please choose your items.');}
// LANGUAGE / VOICE HOOK: Add translations for visible UI labels and map each language to its matching recorded audio/TTS voice here.

// NATIVE LANGUAGE SUPPORT
// UI labels are translated locally so the kiosk does not need an internet connection.
// Dish names remain recognizable; descriptions, instructions and controls are translated.
const UI_TRANSLATIONS={
  'Bahasa Melayu':{
    'Many Beez':'Many Beez','ORDER KIOSK':'KIOS PESANAN','Home':'Laman Utama','Cart':'Troli',
    'Welcome to The Essemble Cafe':'Selamat datang ke The Essemble Cafe','Good food. Easy ordering.':'Makanan enak. Pesanan mudah.',
    "Choose how you'd like to enjoy your meal today.":'Pilih cara anda menikmati hidangan hari ini.',
    'Dine In':'Makan di sini','Enjoy your meal here':'Nikmati hidangan anda di sini',
    'Takeaway':'Bungkus','Pack it to go':'Bungkus untuk dibawa pulang',
    'SPEAK':'CAKAP','AUDIO':'AUDIO','Select Dine In or Takeaway to begin. You can change your choices before checkout.':'Pilih Makan di sini atau Bawa pulang untuk bermula. Anda boleh mengubah pilihan sebelum pembayaran.',
    'View cart':'Lihat troli','Almost there':'Hampir selesai','Your cart':'Troli anda',
    'Review your order before checkout.':'Semak pesanan anda sebelum pembayaran.',
    'Add more items':'Tambah item','Order summary':'Ringkasan pesanan','Continue to checkout →':'Teruskan ke pembayaran →',
    'Back to cart':'Kembali ke troli','Final step':'Langkah terakhir','Checkout':'Pembayaran',
    'Confirm your details and place your order.':'Sahkan maklumat anda dan buat pesanan.',
    'Order details':'Butiran pesanan','Your details':'Maklumat anda','Name':'Nama','Table number':'Nombor meja',
    'Contact number (optional)':'Nombor telefon (pilihan)','Payment method':'Kaedah pembayaran',
    'Pay at counter':'Bayar di kaunter','PayNow at counter':'PayNow di kaunter','Card at counter':'Kad di kaunter',
    'Demo checkout: this prototype records the order locally on this device. No payment is processed.':'Pembayaran demo: prototaip ini menyimpan pesanan pada peranti ini sahaja. Tiada pembayaran diproses.',
    'Place order ✓':'Buat pesanan ✓','Order received':'Pesanan diterima','Thank you!':'Terima kasih!',
    'Start a new order':'Mulakan pesanan baharu','MENU':'MENU','FAMILY VALUES BENTO':'SET KELUARGA',
    'All items':'Semua item','Bento Set':'Set Bento','Drink & Beverage':'Minuman','Dessert':'Pencuci mulut','Rice Set':'Set nasi',
    'Overview':'Gambaran','Customization':'Ubah suai','Details':'Butiran','Detail summary':'Ringkasan item',
    'Included items':'Item termasuk','Remove an item or replace it with another choice.':'Buang item atau gantikan dengan pilihan lain.',
    'REMOVE':'BUANG','REPLACE':'GANTI','UNDO':'ASAL SEMULA','Choose a replacement':'Pilih pengganti','Cancel':'Batal',
    'Add-ons':'Tambahan','Choose any extras you\'d like to add.':'Pilih tambahan yang anda mahu.',
    'ADDED ✓':'DITAMBAH ✓','+ ADD':'+ TAMBAH','No extra charge':'Tiada caj tambahan',
    'Set price stays the same when included items are removed or replaced. Add-ons may cost extra.':'Harga set kekal sama apabila item dibuang atau diganti. Item tambahan mungkin dikenakan caj.',
    'Ingredients':'Bahan-bahan','Quantity':'Kuantiti','Add to cart':'Tambah ke troli',
    'Your cart is empty':'Troli anda kosong','Add something delicious from the menu.':'Pilih makanan yang lazat daripada menu.',
    'No included items':'Tiada item termasuk','No add-ons':'Tiada tambahan',
    'Subtotal':'Jumlah kecil','Service charge':'Caj perkhidmatan','GST':'GST','Included':'Termasuk','Total':'Jumlah',
    'No items found. Try another search.':'Tiada item dijumpai. Cuba carian lain.',
    'Desserts coming soon':'Pencuci mulut akan datang','Please ask our staff about today’s dessert selection.':'Sila tanya kakitangan kami tentang pencuci mulut hari ini.',
    'Classic beef burger.':'Burger daging lembu klasik.','Crispy chicken burger.':'Burger ayam rangup.',
    'Spicy chicken burger.':'Burger ayam pedas.','Fish burger.':'Burger ikan.','Double beef burger.':'Burger daging lembu berganda.',
    'Coconut rice served with traditional accompaniments.':'Nasi lemak dengan lauk tradisional.',
    'Tender chicken served with fragrant rice.':'Ayam lembut bersama nasi wangi.',
    'Roasted chicken with fragrant rice.':'Ayam panggang bersama nasi wangi.',
    'Smashed fried chicken rice set.':'Set nasi ayam penyet.',
    'Thai basil chicken rice.':'Nasi ayam selasih Thai.','Wok-fried rice.':'Nasi goreng kuali.',
    'Wok-fried Indomie noodles.':'Mi Indomie goreng.','Fish and chips.':'Ikan dan kentang goreng.',
    'Crispy chicken schnitzel.':'Schnitzel ayam rangup.','Baked beef lasagna.':'Lasagna daging lembu bakar.',
    'Family sharing set with burgers and chicken rice.':'Set hidangan keluarga dengan burger dan nasi ayam.',
    'Family sharing set with nasi lemak and burgers.':'Set hidangan keluarga dengan nasi lemak dan burger.',
    'A family sharing feast of Asian rice favourites.':'Hidangan keluarga dengan pilihan nasi Asia.',
    'Western-style family sharing platter.':'Hidangan keluarga gaya Barat.',
    'A large family sharing set of wok and rice dishes.':'Set keluarga besar dengan hidangan goreng dan nasi.',
    'Refreshing drink from the The Essemble Cafe beverage menu.':'Minuman menyegarkan daripada menu The Essemble Cafe.',
    'Freshly prepared bubble tea.':'Teh buih yang disediakan segar.',
    'Refreshing beverage from the The Essemble Cafe drinks selection.':'Minuman menyegarkan daripada pilihan The Essemble Cafe.',
    'Please check with our staff for the confirmed ingredient list and allergy information.':'Sila semak dengan kakitangan kami untuk senarai bahan dan maklumat alahan.'
  },
  '中文':{
    'ORDER KIOSK':'自助点餐机','Home':'主页','Cart':'购物车','Welcome to The Essemble Cafe':'欢迎来到 The Essemble Cafe',
    'Good food. Easy ordering.':'美味餐点，轻松点餐。','Choose how you\'d like to enjoy your meal today.':'请选择今天的用餐方式。',
    'Dine In':'堂食','Enjoy your meal here':'请在这里用餐','Takeaway':'外带','Pack it to go':'打包带走',
    'SPEAK':'语音输入','AUDIO':'语音播放','Select Dine In or Takeaway to begin. You can change your choices before checkout.':'请选择堂食或外带开始点餐。付款前可以更改选择。',
    'View cart':'查看购物车','Almost there':'即将完成','Your cart':'您的购物车','Review your order before checkout.':'结账前请确认您的订单。',
    'Add more items':'继续选购','Order summary':'订单摘要','Continue to checkout →':'前往结账 →',
    'Back to cart':'返回购物车','Final step':'最后一步','Checkout':'结账','Confirm your details and place your order.':'请确认资料并提交订单。',
    'Order details':'订单详情','Your details':'您的资料','Name':'姓名','Table number':'桌号',
    'Contact number (optional)':'联系电话（选填）','Payment method':'付款方式','Pay at counter':'柜台付款',
    'PayNow at counter':'柜台 PayNow','Card at counter':'柜台刷卡',
    'Demo checkout: this prototype records the order locally on this device. No payment is processed.':'演示结账：此原型只会在本设备保存订单，不会处理真实付款。',
    'Place order ✓':'确认下单 ✓','Order received':'订单已收到','Thank you!':'谢谢！','Start a new order':'开始新订单',
    'MENU':'菜单','FAMILY VALUES BENTO':'家庭分享套餐','All items':'全部','Bento Set':'便当套餐',
    'Drink & Beverage':'饮料','Dessert':'甜品','Rice Set':'饭类套餐',
    'Overview':'简介','Customization':'自选搭配','Details':'详情','Detail summary':'餐点简介',
    'Included items':'套餐包含','Remove an item or replace it with another choice.':'您可以移除套餐项目，或更换其他选择。',
    'REMOVE':'移除','REPLACE':'更换','UNDO':'恢复','Choose a replacement':'选择替换餐点','Cancel':'取消',
    'Add-ons':'额外配料','Choose any extras you\'d like to add.':'请选择您想添加的配料。',
    'ADDED ✓':'已添加 ✓','+ ADD':'+ 添加','No extra charge':'不额外收费',
    'Set price stays the same when included items are removed or replaced. Add-ons may cost extra.':'移除或更换套餐项目不会改变套餐价格。额外配料可能需要收费。',
    'Ingredients':'食材','Quantity':'数量','Add to cart':'加入购物车','Your cart is empty':'购物车是空的',
    'Add something delicious from the menu.':'从菜单中选择美味餐点吧。','No included items':'没有套餐项目','No add-ons':'没有额外配料',
    'Subtotal':'小计','Service charge':'服务费','GST':'消费税','Included':'已包含','Total':'总计',
    'No items found. Try another search.':'没有找到餐点，请尝试其他搜索。','Desserts coming soon':'甜品即将推出',
    'Please ask our staff about today’s dessert selection.':'请向工作人员询问今日甜品。',
    'Classic beef burger.':'经典牛肉汉堡。','Crispy chicken burger.':'香脆鸡肉汉堡。','Spicy chicken burger.':'香辣鸡肉汉堡。',
    'Fish burger.':'鱼肉汉堡。','Double beef burger.':'双层牛肉汉堡。','Coconut rice served with traditional accompaniments.':'椰浆饭，搭配传统配菜。',
    'Tender chicken served with fragrant rice.':'嫩鸡肉搭配香米饭。','Roasted chicken with fragrant rice.':'烧鸡搭配香米饭。',
    'Smashed fried chicken rice set.':'印尼炸鸡饭套餐。','Thai basil chicken rice.':'泰式罗勒鸡肉饭。',
    'Wok-fried rice.':'锅炒饭。','Wok-fried Indomie noodles.':'炒 Indomie 面。','Fish and chips.':'炸鱼薯条。',
    'Crispy chicken schnitzel.':'香脆鸡排。','Baked beef lasagna.':'烤牛肉千层面。',
    'Family sharing set with burgers and chicken rice.':'汉堡与鸡饭家庭分享套餐。',
    'Family sharing set with nasi lemak and burgers.':'椰浆饭与汉堡家庭分享套餐。',
    'A family sharing feast of Asian rice favourites.':'亚洲风味米饭家庭分享套餐。',
    'Western-style family sharing platter.':'西式家庭分享拼盘。',
    'A large family sharing set of wok and rice dishes.':'炒菜与米饭家庭分享大套餐。',
    'Refreshing drink from the The Essemble Cafe beverage menu.':'The Essemble Cafe 饮料菜单中的清爽饮品。',
    'Freshly prepared bubble tea.':'新鲜制作的珍珠奶茶。','Refreshing beverage from the The Essemble Cafe drinks selection.':'The Essemble Cafe 精选清爽饮品。',
    'Please check with our staff for the confirmed ingredient list and allergy information.':'食材及过敏信息请向工作人员确认。'
  },
  'தமிழ்':{
    'ORDER KIOSK':'சுய சேவை ஆர்டர்','Home':'முகப்பு','Cart':'கூடை','Welcome to The Essemble Cafe':'The Essemble Cafe-க்கு வரவேற்கிறோம்',
    'Good food. Easy ordering.':'சுவையான உணவு. எளிய ஆர்டர்.','Choose how you\'d like to enjoy your meal today.':'இன்று உங்கள் உணவை எவ்வாறு பெற விரும்புகிறீர்கள்?',
    'Dine In':'இங்கே சாப்பிடுங்கள்','Enjoy your meal here':'இங்கே உணவருந்துங்கள்','Takeaway':'எடுத்துச் செல்ல','Pack it to go':'பொதிந்து எடுத்துச் செல்லுங்கள்',
    'SPEAK':'குரல் உள்ளீடு','AUDIO':'ஒலி','Select Dine In or Takeaway to begin. You can change your choices before checkout.':'தொடங்க இங்கே சாப்பிடுங்கள் அல்லது எடுத்துச் செல்ல என்பதைத் தேர்ந்தெடுக்கவும். கட்டணத்திற்கு முன் தேர்வுகளை மாற்றலாம்.',
    'View cart':'கூடையைப் பார்க்க','Almost there':'கிட்டத்தட்ட முடிந்தது','Your cart':'உங்கள் கூடை','Review your order before checkout.':'கட்டணம் செலுத்துவதற்கு முன் ஆர்டரைச் சரிபார்க்கவும்.',
    'Add more items':'மேலும் சேர்க்க','Order summary':'ஆர்டர் சுருக்கம்','Continue to checkout →':'கட்டணத்திற்குச் செல்ல →',
    'Back to cart':'கூடைக்குத் திரும்பு','Final step':'இறுதிப் படி','Checkout':'கட்டணம்','Confirm your details and place your order.':'உங்கள் விவரங்களை உறுதிசெய்து ஆர்டரைச் சமர்ப்பிக்கவும்.',
    'Order details':'ஆர்டர் விவரங்கள்','Your details':'உங்கள் விவரங்கள்','Name':'பெயர்','Table number':'மேசை எண்',
    'Contact number (optional)':'தொலைபேசி எண் (விருப்பம்)','Payment method':'கட்டண முறை','Pay at counter':'கவுண்டரில் செலுத்தவும்',
    'PayNow at counter':'கவுண்டரில் PayNow','Card at counter':'கவுண்டரில் அட்டை',
    'Demo checkout: this prototype records the order locally on this device. No payment is processed.':'சோதனை கட்டணம்: இந்த முன்மாதிரி ஆர்டரை இந்த சாதனத்தில் மட்டும் சேமிக்கும். உண்மையான கட்டணம் எதுவும் இல்லை.',
    'Place order ✓':'ஆர்டரைச் சமர்ப்பிக்க ✓','Order received':'ஆர்டர் பெறப்பட்டது','Thank you!':'நன்றி!','Start a new order':'புதிய ஆர்டரைத் தொடங்கு',
    'MENU':'பட்டியல்','FAMILY VALUES BENTO':'குடும்ப உணவுத் தொகுப்பு','All items':'அனைத்தும்','Bento Set':'பென்டோ தொகுப்பு',
    'Drink & Beverage':'பானங்கள்','Dessert':'இனிப்பு','Rice Set':'சாத உணவு',
    'Overview':'கண்ணோட்டம்','Customization':'விருப்ப மாற்றம்','Details':'விவரங்கள்','Detail summary':'உணவு சுருக்கம்',
    'Included items':'தொகுப்பில் உள்ளவை','Remove an item or replace it with another choice.':'ஒரு பொருளை நீக்கவும் அல்லது வேறு ஒன்றால் மாற்றவும்.',
    'REMOVE':'நீக்கு','REPLACE':'மாற்று','UNDO':'மீட்டமை','Choose a replacement':'மாற்றுப் பொருளைத் தேர்ந்தெடுக்கவும்','Cancel':'ரத்து',
    'Add-ons':'கூடுதல் பொருட்கள்','Choose any extras you\'d like to add.':'நீங்கள் விரும்பும் கூடுதல் பொருட்களைத் தேர்ந்தெடுக்கவும்.',
    'ADDED ✓':'சேர்க்கப்பட்டது ✓','+ ADD':'+ சேர்','No extra charge':'கூடுதல் கட்டணம் இல்லை',
    'Set price stays the same when included items are removed or replaced. Add-ons may cost extra.':'தொகுப்பிலிருந்து பொருட்களை நீக்கினாலும் அல்லது மாற்றினாலும் விலை மாறாது. கூடுதல் பொருட்களுக்கு கட்டணம் இருக்கலாம்.',
    'Ingredients':'உட்பொருட்கள்','Quantity':'அளவு','Add to cart':'கூடையில் சேர்','Your cart is empty':'உங்கள் கூடை காலியாக உள்ளது',
    'Add something delicious from the menu.':'பட்டியலில் இருந்து சுவையான உணவைத் தேர்ந்தெடுக்கவும்.','No included items':'தொகுப்புப் பொருட்கள் இல்லை','No add-ons':'கூடுதல் பொருட்கள் இல்லை',
    'Subtotal':'இடைத் தொகை','Service charge':'சேவை கட்டணம்','GST':'GST','Included':'சேர்க்கப்பட்டுள்ளது','Total':'மொத்தம்',
    'No items found. Try another search.':'பொருட்கள் கிடைக்கவில்லை. வேறு தேடலை முயற்சிக்கவும்.','Desserts coming soon':'இனிப்புகள் விரைவில் வரும்',
    'Please ask our staff about today’s dessert selection.':'இன்றைய இனிப்புகள் பற்றி பணியாளர்களிடம் கேளுங்கள்.',
    'Classic beef burger.':'கிளாசிக் மாட்டிறைச்சி பர்கர்.','Crispy chicken burger.':'மொறுமொறுப்பான கோழி பர்கர்.','Spicy chicken burger.':'காரமான கோழி பர்கர்.',
    'Fish burger.':'மீன் பர்கர்.','Double beef burger.':'இரட்டை மாட்டிறைச்சி பர்கர்.','Coconut rice served with traditional accompaniments.':'பாரம்பரிய துணை உணவுகளுடன் தேங்காய் சாதம்.',
    'Tender chicken served with fragrant rice.':'மணம் மிக்க சாதத்துடன் மென்மையான கோழி.','Roasted chicken with fragrant rice.':'மணம் மிக்க சாதத்துடன் வறுத்த கோழி.',
    'Smashed fried chicken rice set.':'நசுக்கிய பொரித்த கோழி சாதத் தொகுப்பு.','Thai basil chicken rice.':'தாய் துளசி கோழி சாதம்.',
    'Wok-fried rice.':'வோக்கில் வறுத்த சாதம்.','Wok-fried Indomie noodles.':'வோக்கில் வறுத்த இந்தோமி நூடுல்ஸ்.','Fish and chips.':'மீன் மற்றும் உருளைக்கிழங்கு பொரியல்.',
    'Crispy chicken schnitzel.':'மொறுமொறுப்பான கோழி ஸ்னிட்செல்.','Baked beef lasagna.':'சுட்ட மாட்டிறைச்சி லசான்யா.',
    'Family sharing set with burgers and chicken rice.':'பர்கர் மற்றும் கோழி சாதத்துடன் குடும்ப உணவுத் தொகுப்பு.',
    'Family sharing set with nasi lemak and burgers.':'நாசி லெமாக் மற்றும் பர்கருடன் குடும்ப உணவுத் தொகுப்பு.',
    'A family sharing feast of Asian rice favourites.':'ஆசிய சாத வகைகளுடன் குடும்ப விருந்து.',
    'Western-style family sharing platter.':'மேற்கத்திய பாணி குடும்ப உணவுத் தட்டு.',
    'A large family sharing set of wok and rice dishes.':'வோக் மற்றும் சாத உணவுகளுடன் பெரிய குடும்பத் தொகுப்பு.',
    'Refreshing drink from the The Essemble Cafe beverage menu.':'The Essemble Cafe பானப் பட்டியலிலிருந்து புத்துணர்ச்சி தரும் பானம்.',
    'Freshly prepared bubble tea.':'புதிதாக தயாரிக்கப்பட்ட பபுள் டீ.','Refreshing beverage from the The Essemble Cafe drinks selection.':'The Essemble Cafe பானத் தேர்விலிருந்து புத்துணர்ச்சி தரும் பானம்.',
    'Please check with our staff for the confirmed ingredient list and allergy information.':'உட்பொருட்கள் மற்றும் ஒவ்வாமை விவரங்களுக்கு பணியாளர்களிடம் உறுதிப்படுத்தவும்.'
  }
};

// Additional vocabulary used by the item customizer and replacement picker.
Object.assign(UI_TRANSLATIONS['Bahasa Melayu'],{
  'Back to menu':'Kembali ke menu','← Back to menu':'← Kembali ke menu','Choose language':'Pilih bahasa','Search menu...':'Cari menu...','Search menu':'Cari menu','Your name':'Nama anda','Please enter your name.':'Sila masukkan nama anda.','Please enter your table number.':'Sila masukkan nombor meja anda.','Review your items before checkout.':'Semak item anda sebelum pembayaran.','Burger':'Burger','Chicken rice':'Nasi ayam','Nasi lemak':'Nasi lemak',
  'Drink':'Minuman','Rice item 1':'Hidangan nasi 1','Rice item 2':'Hidangan nasi 2','Rice item 3':'Hidangan nasi 3',
  'Fish & chips':'Ikan dan kentang goreng','Wok item':'Hidangan goreng','Main item':'Item utama',
  'Extra pearls':'Pearl tambahan','Less ice':'Kurang ais','Extra shot':'Shot tambahan','Whipped cream':'Krim putar',
  'Extra egg':'Telur tambahan','Add cheese':'Tambah keju','Extra sambal':'Sambal tambahan',
  'Extra chicken':'Ayam tambahan','Extra fries':'Kentang goreng tambahan',
  'Brown Sugar Milk Tea':'Teh susu gula perang','Classic Milk Tea':'Teh susu klasik',
  'Matcha Milk Tea':'Teh susu matcha','Taro Milk Tea':'Teh susu keladi','Strawberry Milk Tea':'Teh susu strawberi',
  'Iced Cola':'Cola ais','Iced Milk Tea':'Teh susu ais','Citrus Iced Drink':'Minuman sitrus ais',
  'Berry Iced Drink':'Minuman beri ais','Lemon Soda':'Soda lemon','Hot Coffee':'Kopi panas'
});
Object.assign(UI_TRANSLATIONS['中文'],{
  'Back to menu':'返回菜单','← Back to menu':'← 返回菜单','Choose language':'选择语言','Search menu...':'搜索菜单...','Search menu':'搜索菜单','Your name':'您的姓名','Please enter your name.':'请输入您的姓名。','Please enter your table number.':'请输入您的桌号。','Review your items before checkout.':'结账前请检查餐点。','Burger':'汉堡','Chicken rice':'鸡饭','Nasi lemak':'椰浆饭','Drink':'饮料',
  'Rice item 1':'米饭餐点一','Rice item 2':'米饭餐点二','Rice item 3':'米饭餐点三',
  'Fish & chips':'炸鱼薯条','Wok item':'炒锅餐点','Main item':'主餐',
  'Extra pearls':'额外珍珠','Less ice':'少冰','Extra shot':'额外浓缩咖啡','Whipped cream':'鲜奶油',
  'Extra egg':'加蛋','Add cheese':'加芝士','Extra sambal':'加参巴酱','Extra chicken':'加鸡肉','Extra fries':'加薯条',
  'Brown Sugar Milk Tea':'黑糖奶茶','Classic Milk Tea':'经典奶茶','Matcha Milk Tea':'抹茶奶茶',
  'Taro Milk Tea':'芋头奶茶','Strawberry Milk Tea':'草莓奶茶','Iced Cola':'冰可乐','Iced Milk Tea':'冰奶茶',
  'Citrus Iced Drink':'冰柑橘饮料','Berry Iced Drink':'冰莓果饮料','Lemon Soda':'柠檬汽水','Hot Coffee':'热咖啡'
});
Object.assign(UI_TRANSLATIONS['தமிழ்'],{
  'Back to menu':'பட்டியலுக்குத் திரும்பு','← Back to menu':'← பட்டியலுக்குத் திரும்பு','Choose language':'மொழியைத் தேர்ந்தெடுக்கவும்','Search menu...':'பட்டியலில் தேடுங்கள்...','Search menu':'பட்டியலில் தேடுங்கள்','Your name':'உங்கள் பெயர்','Please enter your name.':'உங்கள் பெயரை உள்ளிடவும்.','Please enter your table number.':'உங்கள் மேசை எண்ணை உள்ளிடவும்.','Review your items before checkout.':'கட்டணத்திற்கு முன் உணவுகளைச் சரிபார்க்கவும்.','Burger':'பர்கர்','Chicken rice':'கோழி சாதம்','Nasi lemak':'நாசி லெமாக்',
  'Drink':'பானம்','Rice item 1':'சாத உணவு 1','Rice item 2':'சாத உணவு 2','Rice item 3':'சாத உணவு 3',
  'Fish & chips':'மீன் மற்றும் சிப்ஸ்','Wok item':'வோக் உணவு','Main item':'முக்கிய உணவு',
  'Extra pearls':'கூடுதல் முத்துக்கள்','Less ice':'குறைந்த ஐஸ்','Extra shot':'கூடுதல் ஷாட்','Whipped cream':'விப்பிங் கிரீம்',
  'Extra egg':'கூடுதல் முட்டை','Add cheese':'சீஸ் சேர்க்க','Extra sambal':'கூடுதல் சம்பல்','Extra chicken':'கூடுதல் கோழி','Extra fries':'கூடுதல் ஃப்ரைஸ்',
  'Brown Sugar Milk Tea':'பிரவுன் சுகர் மில்க் டீ','Classic Milk Tea':'கிளாசிக் மில்க் டீ',
  'Matcha Milk Tea':'மட்சா மில்க் டீ','Taro Milk Tea':'டாரோ மில்க் டீ','Strawberry Milk Tea':'ஸ்ட்ராபெரி மில்க் டீ',
  'Iced Cola':'ஐஸ் கோலா','Iced Milk Tea':'ஐஸ் மில்க் டீ','Citrus Iced Drink':'சிட்ரஸ் குளிர்பானம்',
  'Berry Iced Drink':'பெர்ரி குளிர்பானம்','Lemon Soda':'எலுமிச்சை சோடா','Hot Coffee':'சூடான காபி'
});

Object.assign(UI_TRANSLATIONS['Bahasa Melayu'],{
  'Burger & Chicken Rice Family':'Set Keluarga Burger & Nasi Ayam','Nasi Lemak & Burger Family':'Set Keluarga Nasi Lemak & Burger',
  'Asian Rice Feast':'Hidangan Nasi Asia','Western Platter Family':'Set Keluarga Hidangan Barat','Wok & Rice Mega Family':'Set Keluarga Wok & Nasi',
  'Classic Beef Burger':'Burger Daging Lembu Klasik','Crispy Chicken Burger':'Burger Ayam Rangup','Spicy Chicken Burger':'Burger Ayam Pedas',
  'Fish Burger':'Burger Ikan','Double Beef Burger':'Burger Daging Lembu Berganda','Chicken Rice':'Nasi Ayam',
  'Roasted Chicken Rice':'Nasi Ayam Panggang','Nasi Ayam Penyet':'Nasi Ayam Penyet','Thai Basil Chicken':'Ayam Selasih Thai',
  'Nasi Goreng':'Nasi Goreng','Indomie Goreng':'Indomie Goreng','Chicken Schnitzel':'Schnitzel Ayam','Beef Lasagna':'Lasagna Daging Lembu',
  'Brown Sugar Milk Tea':'Teh Susu Gula Perang','Classic Milk Tea':'Teh Susu Klasik','Matcha Milk Tea':'Teh Susu Matcha',
  'Taro Milk Tea':'Teh Susu Keladi','Strawberry Milk Tea':'Teh Susu Strawberi','Thai Iced Tea':'Teh Thai Ais',
  'Singapore Iced Kopi':'Kopi Ais Singapura','Iced Matcha':'Matcha Ais'
});
Object.assign(UI_TRANSLATIONS['中文'],{
  'Burger & Chicken Rice Family':'汉堡鸡饭家庭套餐','Nasi Lemak & Burger Family':'椰浆饭汉堡家庭套餐',
  'Asian Rice Feast':'亚洲米饭盛宴','Western Platter Family':'西式家庭拼盘','Wok & Rice Mega Family':'炒锅米饭家庭大套餐',
  'Classic Beef Burger':'经典牛肉汉堡','Crispy Chicken Burger':'香脆鸡肉汉堡','Spicy Chicken Burger':'香辣鸡肉汉堡',
  'Fish Burger':'鱼肉汉堡','Double Beef Burger':'双层牛肉汉堡','Nasi Lemak':'椰浆饭','Chicken Rice':'鸡饭',
  'Roasted Chicken Rice':'烧鸡饭','Nasi Ayam Penyet':'印尼炸鸡饭','Thai Basil Chicken':'泰式罗勒鸡肉',
  'Nasi Goreng':'马来炒饭','Indomie Goreng':'炒 Indomie 面','Fish & Chips':'炸鱼薯条',
  'Chicken Schnitzel':'香脆鸡排','Beef Lasagna':'牛肉千层面','Brown Sugar Milk Tea':'黑糖奶茶',
  'Classic Milk Tea':'经典奶茶','Matcha Milk Tea':'抹茶奶茶','Taro Milk Tea':'芋头奶茶',
  'Strawberry Milk Tea':'草莓奶茶','Thai Iced Tea':'泰式冰奶茶','Singapore Iced Kopi':'新加坡冰咖啡',
  'Iced Matcha':'冰抹茶','Citrus Iced Drink':'冰柑橘饮料','Berry Iced Drink':'冰莓果饮料'
});
Object.assign(UI_TRANSLATIONS['தமிழ்'],{
  'Burger & Chicken Rice Family':'பர்கர் மற்றும் கோழி சாத குடும்பத் தொகுப்பு','Nasi Lemak & Burger Family':'நாசி லெமாக் மற்றும் பர்கர் குடும்பத் தொகுப்பு',
  'Asian Rice Feast':'ஆசிய சாத விருந்து','Western Platter Family':'மேற்கத்திய குடும்ப உணவுத் தட்டு','Wok & Rice Mega Family':'வோக் மற்றும் சாத பெரிய குடும்பத் தொகுப்பு',
  'Classic Beef Burger':'கிளாசிக் மாட்டிறைச்சி பர்கர்','Crispy Chicken Burger':'மொறுமொறுப்பான கோழி பர்கர்',
  'Spicy Chicken Burger':'காரமான கோழி பர்கர்','Fish Burger':'மீன் பர்கர்','Double Beef Burger':'இரட்டை மாட்டிறைச்சி பர்கர்',
  'Nasi Lemak':'நாசி லெமாக்','Chicken Rice':'கோழி சாதம்','Roasted Chicken Rice':'வறுத்த கோழி சாதம்',
  'Nasi Ayam Penyet':'நாசி ஆயம் பென்யெட்','Thai Basil Chicken':'தாய் துளசி கோழி','Nasi Goreng':'நாசி கோரெங்',
  'Indomie Goreng':'இந்தோமி கோரெங்','Fish & Chips':'மீன் மற்றும் சிப்ஸ்','Chicken Schnitzel':'கோழி ஸ்னிட்செல்',
  'Beef Lasagna':'மாட்டிறைச்சி லசான்யா','Brown Sugar Milk Tea':'பிரவுன் சுகர் மில்க் டீ',
  'Classic Milk Tea':'கிளாசிக் மில்க் டீ','Matcha Milk Tea':'மட்சா மில்க் டீ','Taro Milk Tea':'டாரோ மில்க் டீ',
  'Strawberry Milk Tea':'ஸ்ட்ராபெரி மில்க் டீ','Thai Iced Tea':'தாய் ஐஸ் டீ','Singapore Iced Kopi':'சிங்கப்பூர் ஐஸ் கோப்பி',
  'Iced Matcha':'ஐஸ் மட்சா'
});
// Ingredient-level customization labels for the burger cards.
Object.assign(UI_TRANSLATIONS['Bahasa Melayu'],{
  'Burger ingredients':'Bahan burger','Choose exactly what you want in your burger. Remove an ingredient or replace it with another option.':'Pilih bahan yang anda mahu dalam burger. Buang bahan atau gantikannya dengan pilihan lain.',
  'Main filling':'Inti utama','Toppings':'Topping','Sauce':'Sos','Beef patty':'Patty daging lembu','Chicken patty':'Patty ayam','Fish fillet':'Fillet ikan',
  'Cheese':'Keju','Lettuce':'Salad','Tomato':'Tomato','Onion':'Bawang','House sauce':'Sos istimewa','Cheddar cheese':'Keju cheddar','Swiss cheese':'Keju Swiss',
  'Shredded cabbage':'Kubis hiris','Pickles':'Acar timun','White onion':'Bawang putih','Red onion':'Bawang merah','Grilled onion':'Bawang panggang',
  'Mayonnaise':'Mayonis','BBQ sauce':'Sos BBQ','Chilli sauce':'Sos cili','Extra cheese':'Keju tambahan','Extra patty':'Patty tambahan',
  'Extra lettuce':'Salad tambahan','Extra tomato':'Tomato tambahan','Extra sauce':'Sos tambahan','KEEP':'KEKALKAN','ORIGINAL':'ASAL','Included':'Termasuk','Changed':'Ditukar','Removed':'Dibuang','Not included':'Tidak termasuk','Replaces':'Menggantikan'
});
Object.assign(UI_TRANSLATIONS['中文'],{
  'Burger ingredients':'汉堡配料','Choose exactly what you want in your burger. Remove an ingredient or replace it with another option.':'选择汉堡中要保留的配料，也可以移除或更换配料。',
  'Main filling':'主要馅料','Toppings':'配料','Sauce':'酱料','Beef patty':'牛肉饼','Chicken patty':'鸡肉饼','Fish fillet':'鱼柳',
  'Cheese':'芝士','Lettuce':'生菜','Tomato':'番茄','Onion':'洋葱','House sauce':'招牌酱','Cheddar cheese':'切达芝士','Swiss cheese':'瑞士芝士',
  'Shredded cabbage':'卷心菜丝','Pickles':'酸黄瓜','White onion':'白洋葱','Red onion':'红洋葱','Grilled onion':'烤洋葱',
  'Mayonnaise':'蛋黄酱','BBQ sauce':'烧烤酱','Chilli sauce':'辣椒酱','Extra cheese':'加芝士','Extra patty':'加肉饼',
  'Extra lettuce':'加生菜','Extra tomato':'加番茄','Extra sauce':'加酱料','KEEP':'保留','ORIGINAL':'原样','Included':'包含','Changed':'已更换','Removed':'已移除','Not included':'不包含','Replaces':'替换为'
});
Object.assign(UI_TRANSLATIONS['தமிழ்'],{
  'Burger ingredients':'பர்கர் உட்பொருட்கள்','Choose exactly what you want in your burger. Remove an ingredient or replace it with another option.':'உங்கள் பர்கரில் வேண்டிய உட்பொருட்களைத் தேர்ந்தெடுக்கவும். வேண்டாததை நீக்கவும் அல்லது மாற்றவும்.',
  'Main filling':'முக்கிய நிரப்பு','Toppings':'மேல்பொருட்கள்','Sauce':'சாஸ்','Beef patty':'மாட்டிறைச்சி பட்டி','Chicken patty':'கோழி பட்டி','Fish fillet':'மீன் துண்டு',
  'Cheese':'சீஸ்','Lettuce':'லெட்டுஸ்','Tomato':'தக்காளி','Onion':'வெங்காயம்','House sauce':'சிறப்பு சாஸ்','Cheddar cheese':'செடார் சீஸ்','Swiss cheese':'ஸ்விஸ் சீஸ்',
  'Shredded cabbage':'நறுக்கிய முட்டைக்கோஸ்','Pickles':'ஊறுகாய்','White onion':'வெள்ளை வெங்காயம்','Red onion':'சிவப்பு வெங்காயம்','Grilled onion':'வறுத்த வெங்காயம்',
  'Mayonnaise':'மயோனைஸ்','BBQ sauce':'BBQ சாஸ்','Chilli sauce':'மிளகாய் சாஸ்','Extra cheese':'கூடுதல் சீஸ்','Extra patty':'கூடுதல் பட்டி',
  'Extra lettuce':'கூடுதல் லெட்டுஸ்','Extra tomato':'கூடுதல் தக்காளி','Extra sauce':'கூடுதல் சாஸ்','KEEP':'வைத்திரு','ORIGINAL':'அசல்','Included':'சேர்க்கப்பட்டுள்ளது','Changed':'மாற்றப்பட்டது','Removed':'நீக்கப்பட்டது','Not included':'சேர்க்கப்படவில்லை','Replaces':'மாற்றாக'
});

const originalTextNodes=new WeakMap();
const originalAttributes=new WeakMap();
function translateValue(value){
  const dict=UI_TRANSLATIONS[selectedLanguage]||{};
  if(dict[value])return dict[value];
  const iconPrefix=value.match(/^([⌂🛒▣✦🥤🍰🍚]\s*&nbsp;?\s*)(.+)$/u);
  if(iconPrefix&&dict[iconPrefix[2]])return iconPrefix[1]+dict[iconPrefix[2]];
  if(value===value.toUpperCase()){
    const matched=Object.keys(dict).find(key=>key.toUpperCase()===value);
    if(matched)return dict[matched].toLocaleUpperCase();
  }
  if(value.includes(' · ')){
    const parts=value.split(' · ');
    if(parts.length>1){
      const translatedParts=parts.map(part=>translateValue(part));
      if(translatedParts.some((part,i)=>part!==parts[i]))return translatedParts.join(' · ');
    }
  }
  if(value.includes(', ')){
    const parts=value.split(', ');
    const translatedParts=parts.map(part=>translateValue(part));
    if(translatedParts.some((part,i)=>part!==parts[i]))return translatedParts.join(', ');
  }
  const quantityMatch=value.match(/^(\d+ × )(.+)$/);
  if(quantityMatch)return quantityMatch[1]+translateValue(quantityMatch[2]);
  if(value.startsWith('Add to cart · '))return (dict['Add to cart']||'Add to cart')+' · '+value.slice('Add to cart · '.length);
  if(value.startsWith('MENU'))return dict['MENU']||'MENU';
  if(value==='Dine In order')return selectedLanguage==='Bahasa Melayu'?'Pesanan makan di sini':selectedLanguage==='中文'?'堂食订单':selectedLanguage==='தமிழ்'?'இங்கே சாப்பிடும் ஆர்டர்':value;
  if(value==='Takeaway order')return selectedLanguage==='Bahasa Melayu'?'Pesanan bawa pulang':selectedLanguage==='中文'?'外带订单':selectedLanguage==='தமிழ்'?'எடுத்துச் செல்லும் ஆர்டர்':value;
  if(value==='Dine In order · Review your items before checkout.')return selectedLanguage==='English'?value:
    (selectedLanguage==='Bahasa Melayu'?'Pesanan makan di sini · Semak item sebelum pembayaran.':selectedLanguage==='中文'?'堂食订单 · 结账前请检查餐点。':'இங்கே சாப்பிடும் ஆர்டர் · கட்டணத்திற்கு முன் உணவுகளைச் சரிபார்க்கவும்.');
  if(value==='Takeaway order · Review your items before checkout.')return selectedLanguage==='English'?value:
    (selectedLanguage==='Bahasa Melayu'?'Pesanan bawa pulang · Semak item sebelum pembayaran.':selectedLanguage==='中文'?'外带订单 · 结账前请检查餐点。':'எடுத்துச் செல்லும் ஆர்டர் · கட்டணத்திற்கு முன் உணவுகளைச் சரிபார்க்கவும்.');
  return value;
}
function applyTranslations(){
  const root=document.body;
  if(!root)return;
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
  let node;
  while((node=walker.nextNode())){
    if(!originalTextNodes.has(node))originalTextNodes.set(node,node.nodeValue);
    const original=originalTextNodes.get(node);
    const trimmed=original.trim();
    if(!trimmed)continue;
    const translated=translateValue(trimmed);
    if(translated!==trimmed){
      const lead=original.match(/^\\s*/)?.[0]||'';
      const tail=original.match(/\\s*$/)?.[0]||'';
      node.nodeValue=lead+translated+tail;
    }else if(selectedLanguage==='English'){
      node.nodeValue=original;
    }
  }
  document.querySelectorAll('[placeholder],[aria-label],[title]').forEach(el=>{
    ['placeholder','aria-label','title'].forEach(attr=>{
      if(!el.hasAttribute(attr))return;
      let store=originalAttributes.get(el);
      if(!store){store={};originalAttributes.set(el,store);}
      if(!(attr in store))store[attr]=el.getAttribute(attr);
      el.setAttribute(attr,translateValue(store[attr]));
    });
  });
}
function languageLocale(){
  return {'English':'en-SG','Bahasa Melayu':'ms-MY','中文':'zh-CN','தமிழ்':'ta-IN'}[selectedLanguage]||'en-SG';
}
function nativeScreenPrompt(screenId){
  const prompts={
    'English':{
      home:'Welcome to The Essemble Cafe. Please choose dine in or takeaway.',
      menu:'Please choose your food and drinks.',
      item:'Review your item. You can remove, replace, or add extra items.',
      cart:'Please review your order before checkout.',
      checkout:'Please confirm your details and place your order.',
      success:'Thank you. Your order has been received.'
    },
    'Bahasa Melayu':{
      home:'Selamat datang ke The Essemble Cafe. Sila pilih makan di sini atau bawa pulang.',
      menu:'Sila pilih makanan dan minuman anda.',
      item:'Semak pilihan anda. Anda boleh membuang, menggantikan atau menambah item.',
      cart:'Sila semak pesanan anda sebelum pembayaran.',
      checkout:'Sila sahkan maklumat anda dan buat pesanan.',
      success:'Terima kasih. Pesanan anda telah diterima.'
    },
    '中文':{
      home:'欢迎来到 The Essemble Cafe。请选择堂食或外带。',
      menu:'请选择您的餐点和饮料。',
      item:'请检查您的餐点。您可以移除、更换或添加配料。',
      cart:'结账前请检查您的订单。',
      checkout:'请确认您的资料并提交订单。',
      success:'谢谢您。我们已收到您的订单。'
    },
    'தமிழ்':{
      home:'The Essemble Cafe-க்கு வரவேற்கிறோம். இங்கே சாப்பிடுங்கள் அல்லது எடுத்துச் செல்ல என்பதைத் தேர்ந்தெடுக்கவும்.',
      menu:'உங்கள் உணவு மற்றும் பானங்களைத் தேர்ந்தெடுக்கவும்.',
      item:'உங்கள் உணவைச் சரிபார்க்கவும். பொருட்களை நீக்கலாம், மாற்றலாம் அல்லது கூடுதலாகச் சேர்க்கலாம்.',
      cart:'கட்டணம் செலுத்துவதற்கு முன் உங்கள் ஆர்டரைச் சரிபார்க்கவும்.',
      checkout:'உங்கள் விவரங்களை உறுதிசெய்து ஆர்டரைச் சமர்ப்பிக்கவும்.',
      success:'நன்றி. உங்கள் ஆர்டர் பெறப்பட்டது.'
    }
  };
  return (prompts[selectedLanguage]||prompts.English)[screenId]||'';
}
function speakNative(text,force=false){
  if(!('speechSynthesis'in window)||(!speech&&!force))return;
  speechSynthesis.cancel();
  const utterance=new SpeechSynthesisUtterance(text);
  utterance.lang=languageLocale();
  const voices=speechSynthesis.getVoices();
  const prefix=languageLocale().split('-')[0];
  const voice=voices.find(v=>v.lang.toLowerCase()===languageLocale().toLowerCase())||voices.find(v=>v.lang.toLowerCase().startsWith(prefix));
  if(voice)utterance.voice=voice;
  speechSynthesis.speak(utterance);
}
function setLanguage(v){
  selectedLanguage=v;
  document.querySelectorAll('.language-option').forEach(b=>b.classList.toggle('active',b.dataset.language===v));
  applyTranslations();
  persistState();
  // Selecting a language immediately plays its native screen prompt when AUDIO is enabled.
  if(audio){
    const page=document.body.dataset.page||'home';
    playScreenAudio(page==='item'?'item':page);
  }
}
// AUDIO CONTROL HOOKS:
// - speech: spoken instructions / recorded prompts. Replace say() with your audio files if preferred.
// - audio: background music or UI sound effects. Add play/pause audio element logic in this branch.
let screenAudioPlayer=null;
function getScreenAudioPath(screenId){
  const lang=selectedLanguage||'English';
  const recordings={
    home:{
      'English':assetPath('assets/audio/start_menu_english.mp3'),
      '中文':assetPath('assets/audio/start_menu_chinese.mp3'),
      'தமிழ்':assetPath('assets/audio/start_menu_tamil.mp3')
    },
    menu: mode==='Dine In' ? {
      // These recordings specifically say Dine In, so never reuse them for Takeaway.
      'English':assetPath('assets/audio/dine-in_menu_english.mp3'),
      'Bahasa Melayu':assetPath('assets/audio/dine-in_menu_malay.mp3')
    } : {}
  };
  return recordings[screenId]?.[lang]||null;
}
// AUDIO toggle: use the supplied native recording when available; otherwise use browser
// speech synthesis with the selected language locale for the current page prompt.
function playScreenAudio(screenId){
  if(!audio)return;
  if(screenAudioPlayer){screenAudioPlayer.pause();screenAudioPlayer.currentTime=0;screenAudioPlayer=null;}
  if('speechSynthesis'in window)speechSynthesis.cancel();
  const path=getScreenAudioPath(screenId);
  if(path){
    screenAudioPlayer=new Audio(path);
    screenAudioPlayer.preload='auto';
    screenAudioPlayer.play().catch(()=>{
      speakNative(nativeScreenPrompt(screenId),true);
    });
  }else{
    speakNative(nativeScreenPrompt(screenId),true);
  }
}
// SPEAK opens a deterministic customer-speech simulator; it does not use AI or a microphone.
function toggleVoiceChat(force){
  const panel=document.getElementById('voiceChatPanel');
  const button=document.querySelector('[aria-controls="voiceChatPanel"]');
  if(!panel)return;
  const open=typeof force==='boolean'?force:panel.hidden;
  panel.hidden=!open;
  button?.setAttribute('aria-expanded',String(open));
  document.getElementById('speechSwitch')?.classList.toggle('on',open);
  if(open)document.getElementById('voiceChatInput')?.focus();
}
function showVoiceStatus(message){
  let status=document.getElementById('voiceStatus');
  if(!status){
    status=document.createElement('div');
    status.id='voiceStatus';
    status.className='voice-status';
    status.setAttribute('role','status');
    status.setAttribute('aria-live','polite');
    document.body.appendChild(status);
  }
  status.textContent=message;
  status.classList.add('visible');
}
function handleVoiceCommand(raw){
  // Extract intent keywords from natural, longer customer phrases. This is a
  // deterministic keyword matcher (not AI): filler words are ignored.
  const text=String(raw||'').toLowerCase()
    .normalize('NFKD').replace(/[\u0300-\u036f]/g,'')
    .replace(/[^a-z0-9\s'-]/g,' ').replace(/\s+/g,' ').trim();
  const page=document.body.dataset.page||'home';
  if(!text)return false;
  const has=(...terms)=>terms.some(term=>text.includes(term));
  const hasNegationBefore=(term)=>new RegExp('\\b(no|not|dont|do not|rather than|instead of)\\s+(?:want|like|choose|select|have|eat)?\\s*'+term+'\\b','i').test(text);

  // Ordering mode: prefer the explicitly requested mode, ignoring negated mentions.
  if(page==='home'){
    const wantsTakeaway=has('takeaway','take away','bungkus','to go','carry out','takeout','take out')&&!hasNegationBefore('takeaway|take away|bungkus|to go|takeout|take out');
    const wantsDineIn=has('dine in','eat here','eat in','having here')&&!hasNegationBefore('dine in|eat here|eat in');
    if(wantsTakeaway){startOrder('Takeaway');return true;}
    if(wantsDineIn){startOrder('Dine In');return true;}
  }

  // Navigation intents can be embedded anywhere in a longer sentence.
  if(has('open cart','show cart','view cart','my cart','shopping cart','cart')){go('cart');return true;}
  if(has('go home','back to home','home screen','start over')){go('home');return true;}
  if(has('go back','previous page','previous screen')){history.back();return true;}
  if(page==='cart'&&cart.length&&has('checkout','pay now','place order','complete order','finish order')){checkout();return true;}

  if(page==='menu'){
    const categoryKeywords=[
      {terms:['drink','drinks','beverage','beverages'],value:'Drink & Beverage'},
      {terms:['rice set','rice meal','rice'],value:'Rice Set'},
      {terms:['all items','everything','all menu'],value:'All items'}
    ];
    for(const item of categoryKeywords){if(has(...item.terms)){category=item.value;renderMenu();return true;}}
    const searchMatch=text.match(/(?:search(?:\s+for)?|find|looking\s+for|want)\s+(.{2,40})$/);
    if(searchMatch){
      const search=document.getElementById('search');
      if(search){search.value=searchMatch[1].replace(/\b(please|thanks|thank you)\b/g,'').trim();renderMenu();return true;}
    }
  }
  return false;
}
function submitVoiceChat(event){
  if(event){event.preventDefault();event.stopPropagation();}
  const input=document.getElementById('voiceChatInput');
  if(!input)return false;
  const phrase=input.value.trim();
  if(!phrase){showVoiceStatus('Type a customer phrase first.');return false;}
  try{
    const accepted=handleVoiceCommand(phrase);
    showVoiceStatus(accepted?'Command simulated: '+phrase:'No matching command. Nothing happened.');
  }catch(error){
    console.error('Voice simulation command failed:',error);
    showVoiceStatus('The command could not be completed. Please try again.');
  }
  input.value='';
  input.focus();
  return false;
}

function toggleSetting(k){
  if(k==='speech'){toggleVoiceChat();}
  else{
    audio=!audio;
    document.getElementById('audioSwitch')?.classList.toggle('on',audio);
    if(audio){
      const page=document.body.dataset.page||'home';
      playScreenAudio(page==='item'?'item':page);
    }else{
      if(screenAudioPlayer){screenAudioPlayer.pause();screenAudioPlayer.currentTime=0;screenAudioPlayer=null;}
      if('speechSynthesis'in window)speechSynthesis.cancel();
    }
  }
}
// SPEAK toggle: native-language spoken guidance using the selected language's installed voice.
function say(t){
  return;
  const prompts={
    'Welcome. Please choose your items.':nativeScreenPrompt('menu'),
    'Thank you. Your order has been received.':nativeScreenPrompt('success'),
    'Speech guidance enabled.':selectedLanguage==='Bahasa Melayu'?'Panduan suara diaktifkan.':selectedLanguage==='中文'?'语音提示已开启。':selectedLanguage==='தமிழ்'?'குரல் வழிகாட்டி இயக்கப்பட்டது.':'Speech guidance enabled.'
  };
  speakNative(prompts[t]||t,true);
}
function localizedOrderConfirmation(name){
  if(selectedLanguage==='Bahasa Melayu')return `${name}, pesanan anda telah direkodkan. Sila ke kaunter untuk membuat pembayaran.`;
  if(selectedLanguage==='中文')return `${name}，您的订单已记录。请前往柜台付款。`;
  if(selectedLanguage==='தமிழ்')return `${name}, உங்கள் ஆர்டர் பதிவு செய்யப்பட்டது. கட்டணம் செலுத்த கவுண்டருக்குச் செல்லவும்.`;
  return `${name}, your ${mode.toLowerCase()} order has been recorded. Please proceed to the counter for payment.`;
}
// MENU RENDER HOOK: Product cards and category controls are generated here. Add custom interactions / analytics here.
function productPrepLabel(product){
  if(product.id.startsWith('family_'))return '20–25 min';
  if(product.category==='Drink & Beverage')return '3–5 min';
  if(product.category==='Rice Set')return '8–12 min';
  return '8–12 min';
}
function renderMenu(){
  document.getElementById('categories').innerHTML=cats.map(c=>`<button class="cat ${category===c?'active':''}" onclick="category='${c}';renderMenu()"> ${({'All items':'✦','Bento Set':'▣','Drink & Beverage':'🥤','Rice Set':'🍚'})[c]} ${c}</button>`).join('');
  document.getElementById('menuTitle').textContent=category==='Bento Set'?'FAMILY VALUES BENTO':category.toUpperCase();
  let q=(document.getElementById('search')?.value||'').toLowerCase();
  let list=products.filter(p=>(category==='All items'||p.category===category)&&(p.name.toLowerCase().includes(q)||p.desc.toLowerCase().includes(q)));
  document.getElementById('products').innerHTML=list.length?list.map(p=>`<article class="product" tabindex="0" aria-label="${p.name}. Hover, focus, or long press for item information.">
    <img class="${p.category==='Drink & Beverage'?'drink-image':'food-image'}" src="${p.img}" alt="${p.name}">
    <div class="product-body"><h3>${p.name}</h3><div class="desc">${p.desc}</div><div class="product-foot"><span class="price">${money(p.price)}</span><button class="add" onclick="openDetail('${p.id}')">${money(p.price)}</button></div></div>
    <div class="product-preview" aria-hidden="true"><strong>${p.name}</strong><span class="preview-category">${p.category}</span><p>${p.desc}</p><div class="preview-facts"><span><b>Price</b>${money(p.price)}</span><span><b>Ready in</b>${productPrepLabel(p)}</span></div><div class="preview-allergy"><b>Allergy information</b><span>Allergen and cross-contact details are not verified in this demo. Please check with café staff before ordering.</span></div><small>Select the price button to view the meal and customise it.</small></div>
  </article>`).join(''):'<div class="empty">No items found. Try another search.</div>';
  updateCartUI();applyTranslations();bindProductPreviewLongPress();
}

// PRODUCT SELECTION HOOK: Called when a customer selects a menu item. Load product-specific audio guidance here if needed.
function defaultBundleComponents(product){
  const byId=id=>products.find(p=>p.id===id);
  const component=(id,label,productId,replaceCategory)=>({
    id,label,productId,name:byId(productId)?.name||label,removed:false,
    replaceCategory
  });
  if(product.id==='family_01') return [
    component('burger','Burger','burger_01','Bento Set'),
    component('rice','Chicken rice','rice_02','Rice Set'),
    component('drink','Drink','drink_01','Drink & Beverage')
  ];
  if(product.id==='family_02') return [
    component('rice','Nasi lemak','rice_01','Rice Set'),
    component('burger','Burger','burger_01','Bento Set'),
    component('drink','Drink','drink_01','Drink & Beverage')
  ];
  if(product.id==='family_03') return [
    component('rice1','Rice item 1','rice_01','Rice Set'),
    component('rice2','Rice item 2','rice_02','Rice Set'),
    component('rice3','Rice item 3','rice_05','Rice Set'),
    component('drink','Drink','drink_01','Drink & Beverage')
  ];
  if(product.id==='family_04') return [
    component('western1','Fish & chips','wok_03','Bento Set'),
    component('western2','Burger','burger_01','Bento Set'),
    component('drink','Drink','drink_01','Drink & Beverage')
  ];
  if(product.id==='family_05') return [
    component('wok','Wok item','wok_01','Rice Set'),
    component('rice','Rice item','rice_02','Rice Set'),
    component('drink','Drink','drink_01','Drink & Beverage')
  ];
  return [component('main','Main item',product.id,product.category)];
}
function defaultBurgerIngredients(productId){
  const patty=productId==='burger_02'||productId==='burger_03'?'Chicken patty':productId==='burger_04'?'Fish fillet':'Beef patty';
  return [
    {id:'patty',name:patty,group:'Main filling',removed:false,replacement:null},
    {id:'cheese',name:'Cheese',group:'Toppings',removed:false,replacement:null},
    {id:'lettuce',name:'Lettuce',group:'Toppings',removed:false,replacement:null},
    {id:'tomato',name:'Tomato',group:'Toppings',removed:false,replacement:null},
    {id:'onion',name:'Onion',group:'Toppings',removed:false,replacement:null},
    {id:'sauce',name:'House sauce',group:'Sauce',removed:false,replacement:null}
  ];
}
function openDetail(id){
  current=products.find(p=>p.id===id);
  if(!current)return;
  qty=1;
  custom={
    components:defaultBundleComponents(current),
    ingredients:defaultBurgerIngredients(current.id.startsWith('burger_')?current.id:'burger_01'),
    extras:[],
    notes:'',
    editing:false,
    selectedComponentId:null
  };
  activeTab='overview';
  persistState();
  go('detail');
}
function mealPrepMinutes(product){
  if(product.id.startsWith('family_')) return '20–25 min';
  if(product.id.startsWith('burger_')) return '8–12 min';
  if(product.id.startsWith('rice_')) return '10–15 min';
  if(product.id.startsWith('wok_')) return '8–12 min';
  if(product.id.startsWith('boba_')) return '3–5 min';
  return '5–10 min';
}
function mealBackground(product){
  const id=product.id;
  const info={
    rice_01:{origin:'Nasi lemak is a well-loved dish from the Malay food tradition in Southeast Asia.',history:'It is commonly enjoyed in Malaysia and Singapore, with coconut rice served alongside sambal and accompaniments.',style:'Fragrant rice cooked with coconut milk and pandan, served with its accompanying sides.'},
    rice_02:{origin:'Chicken rice is strongly associated with Hainanese cooking and its adaptation in Singapore.',history:'Hainanese immigrants brought chicken-and-rice cooking traditions to Southeast Asia, where the dish developed its local style.',style:'Poached chicken is served with fragrant rice, usually accompanied by chilli and ginger sauces.'},
    rice_03:{origin:'Roast chicken rice is part of the wider Chinese-style rice-and-meat tradition popular across Singapore.',history:'Roast-meat rice stalls became a familiar part of local hawker food culture.',style:'Chicken is roasted until the skin is browned, then served with rice and sauce.'},
    rice_04:{origin:'Ayam penyet comes from Indonesian cuisine, especially the Javanese food tradition.',history:'The name refers to the chicken being pressed or smashed before serving.',style:'Fried chicken is lightly smashed and served with rice and sambal.'},
    rice_05:{origin:'Thai basil chicken is inspired by the Thai dish pad kra pao.',history:'It is a popular Thai-style stir-fry commonly served over rice.',style:'Chicken is stir-fried with garlic, chilli and fragrant basil.'},
    wok_01:{origin:'Fried rice is enjoyed across many Asian food cultures, with regional variations.',history:'It developed as a practical way to turn cooked rice and available ingredients into a complete meal.',style:'Rice is stir-fried over high heat with seasonings and selected ingredients.'},
    wok_02:{origin:'Indomie goreng is inspired by Indonesian-style mi goreng flavours.',history:'Instant noodle versions made this sweet, savoury and spiced noodle style widely familiar.',style:'Noodles are cooked and tossed with a savoury seasoning blend.'},
    burger_01:{origin:'The modern hamburger is associated with the United States and has roots in European minced-meat traditions.',history:'The burger became a popular fast-food staple during the twentieth century.',style:'A beef patty is cooked and served in a bun with toppings and sauce.'},
    burger_02:{origin:'The chicken burger is a modern fast-food variation popular around the world.',history:'Crispy chicken sandwiches grew alongside the global popularity of quick-service restaurants.',style:'A coated chicken fillet is fried until crisp and served in a bun.'},
    burger_03:{origin:'The spicy chicken burger is a modern fast-food variation found in many countries.',history:'Chilli-seasoned chicken became a popular option for customers who enjoy a little heat.',style:'A chicken patty is paired with spicy seasoning or sauce in a bun.'},
    burger_04:{origin:'Fish burgers are a seafood variation of the modern sandwich-style burger.',history:'Fish sandwiches became a familiar alternative on quick-service restaurant menus.',style:'A fish fillet is cooked and served in a bun with suitable toppings.'},
    burger_05:{origin:'The double beef burger is a variation of the American-style hamburger.',history:'Stacked patties became popular as a heartier take on the classic burger.',style:'Two beef patties are layered in a bun with toppings and sauce.'}
  };
  return info[id]||{origin:`${product.name} is part of the ${product.category.toLowerCase()} selection.`,history:'This dish reflects familiar flavours and serving styles found in everyday café dining.',style:product.desc||'Prepared and served as described on the menu.'};
}
// PRODUCT DETAIL HOOKS: Overview / Customization / Details tabs are controlled by activeTab.
// CUSTOMIZATION HOOK: Included components can be removed/replaced; add-ons are optional toggles.
function renderDetail(){
  if(!current){go('menu');return;}
  if(!Array.isArray(custom.components))custom.components=defaultBundleComponents(current);
  if(!Array.isArray(custom.ingredients))custom.ingredients=defaultBurgerIngredients(current.id.startsWith('burger_')?current.id:'burger_01');
  if(!Array.isArray(custom.extras))custom.extras=[];
  persistState();

  const componentRows=custom.components.filter(item=>!custom.selectedComponentId||item.id===custom.selectedComponentId).map((item,index)=>{
    const selected=products.find(p=>p.id===item.productId);
    const title=selected?.name||item.name||item.label;
    const choices=products.filter(p=>p.category===item.replaceCategory && p.id!==item.productId && !p.id.startsWith('family_'));
    const isOpen=custom.replaceOpen===item.id;
    return `<div class="custom-item ${item.removed?'is-removed':''}">
      <div class="custom-item-info">
        <span class="custom-item-label">${item.label}</span>
        <strong>${item.removed?'Removed':title}</strong>
      </div>
      <div class="custom-item-actions">
        ${item.removed
          ? `<button class="custom-action undo" onclick="restoreComponent('${item.id}')">UNDO</button>`
          : `<button class="custom-action remove" onclick="removeComponent('${item.id}')">REMOVE</button>
             <button class="custom-action replace" onclick="toggleReplace('${item.id}')">REPLACE</button>`}
      </div>
      ${isOpen&&!item.removed?`<div class="replace-picker">
        <div class="replace-picker-title">Choose a replacement</div>
        <div class="replace-options">
          ${choices.slice(0,8).map(p=>`<button class="replace-option" onclick="replaceComponent('${item.id}','${p.id}')">${p.name}</button>`).join('')}
        </div>
        <button class="cancel-replace" onclick="toggleReplace('${item.id}')">Cancel</button>
      </div>`:''}
    </div>`;
  }).join('');

  const hasBurgerIngredients=current.id.startsWith('burger_')||custom.components.some(x=>!x.removed&&(x.productId||'').startsWith('burger_'));
  const ingredientAlternatives={
    patty:['Beef patty','Chicken patty','Fish fillet'],
    cheese:['Cheddar cheese','Swiss cheese'],
    lettuce:['Lettuce','Shredded cabbage'],
    tomato:['Tomato','Pickles'],
    onion:['White onion','Red onion','Grilled onion'],
    sauce:['House sauce','Mayonnaise','BBQ sauce','Chilli sauce']
  };
  const ingredientRows=(custom.ingredients||[]).map(item=>{
    const currentName=item.replacement||item.name;
    const isOpen=custom.ingredientReplaceOpen===item.id;
    return `<article class="ingredient-card ${item.removed?'is-removed':''}">
      <div class="ingredient-card-main"><div><span class="custom-item-label">${item.group}</span><strong>${item.removed?'Removed':currentName}</strong>${item.replacement?`<small class="ingredient-original">Replaces ${item.name}</small>`:''}</div><span class="ingredient-status">${item.removed?'Not included':item.replacement?'Changed':'Included'}</span></div>
      <div class="ingredient-card-actions">${item.removed?`<button class="custom-action undo" onclick="restoreIngredient('${item.id}')">KEEP</button>`:`<button class="custom-action remove" onclick="removeIngredient('${item.id}')">REMOVE</button><button class="custom-action replace" onclick="toggleIngredientReplace('${item.id}')">REPLACE</button>${item.replacement?`<button class="custom-action undo" onclick="resetIngredient('${item.id}')">ORIGINAL</button>`:''}`}</div>
      ${isOpen&&!item.removed?`<div class="replace-picker"><div class="replace-picker-title">Replace ${item.name} with:</div><div class="replace-options">${(ingredientAlternatives[item.id]||[]).filter(x=>x!==item.name&&x!==item.replacement).map(x=>`<button class="replace-option" onclick="replaceIngredient('${item.id}','${x.replace(/'/g,"\\'")}')">${x}</button>`).join('')}</div><button class="cancel-replace" onclick="toggleIngredientReplace('${item.id}')">Cancel</button></div>`:''}
    </article>`;
  }).join('');

  const addonOptions=current.category==='Drink & Beverage'
    ? [{name:'Extra pearls',price:.80},{name:'Less ice',price:0},{name:'Extra shot',price:.80},{name:'Whipped cream',price:.70}]
    : hasBurgerIngredients
      ? [{name:'Extra cheese',price:1.00},{name:'Extra patty',price:2.50},{name:'Extra lettuce',price:.50},{name:'Extra tomato',price:.50},{name:'Extra sauce',price:.30}]
      : [{name:'Extra egg',price:1.20},{name:'Extra sambal',price:.50},{name:'Extra chicken',price:3.00},{name:'Extra fries',price:2.00}];

  const addonRows=addonOptions.map(a=>{
    const added=custom.extras.some(x=>x.name===a.name);
    return `<div class="addon-item ${added?'added':''}">
      <div class="addon-info"><strong>${a.name}</strong><span>${a.price?'+ '+money(a.price):'No extra charge'}</span></div>
      <button class="addon-toggle ${added?'selected':''}" onclick="toggleAddon('${a.name}',${a.price})">${added?'ADDED ✓':'+ ADD'}</button>
    </div>`;
  }).join('');

  document.getElementById('detailContent').innerHTML=`<div class="detail-card">
    <img class="detail-image" src="${current.img}" alt="${current.name}">
    <div class="detail-content">
      <div class="eyebrow">${current.category}</div>
      <h2>${current.name}</h2>
      <div class="price">${money(current.price)}</div>
      <div class="tabs">
        <button class="tab ${activeTab==='overview'?'active':''}" onclick="activeTab='overview';renderDetail()">Overview</button>
        <button class="tab ${activeTab==='custom'?'active':''}" onclick="activeTab='custom';renderDetail()">Customization</button>
        <button class="tab ${activeTab==='details'?'active':''}" onclick="activeTab='details';renderDetail()">Details</button>
      </div>
      <div class="tab-panel">
        ${activeTab==='overview'?`
          <section class="meal-overview-block">
            <h3 class="meal-section-title">Meal Overview</h3>
            <p class="meal-short-summary">${current.desc}</p>
          </section>
          <section class="meal-overview-block">
            <h3 class="meal-section-title">Ingredients</h3>
            <p class="meal-ingredients-summary">${hasBurgerIngredients?(custom.ingredients||[]).filter(x=>!x.removed).map(x=>x.replacement||x.name).join(', ')||'No ingredients selected':custom.components.filter(x=>!x.removed).map(x=>{const p=products.find(y=>y.id===x.productId);return p?.name||x.name||x.label;}).join(', ')||current.desc}</p>
          </section>
          ${hasBurgerIngredients&&(custom.ingredients||[]).some(x=>x.removed||x.replacement)?`<section class="overview-custom-summary"><h3>Customised ingredients</h3><p>${custom.ingredients.filter(x=>x.removed||x.replacement).map(x=>x.removed?'No '+x.name:x.name+' changed to '+x.replacement).join(' · ')}</p></section>`:''}
          <section class="meal-prep-time"><span class="meal-prep-icon">◷</span><span><strong>Estimated preparation time</strong><b>${mealPrepMinutes(current)}</b></span></section>
        `:activeTab==='custom'?`
          ${!custom.selectedComponentId?`
            <section class="custom-section component-hub">
              <h3 class="custom-heading">What would you like to customise?</h3>
              <p class="custom-hint">Choose one part of your meal. You can remove or change items inside it.</p>
              <div class="component-holder-grid">${custom.components.map((item,index)=>{const product=products.find(p=>p.id===item.productId);const name=product?.name||item.name||item.label;const isBurger=(item.productId||'').startsWith('burger_');const icon=isBurger?'🍔':item.replaceCategory==='Drink & Beverage'?'🥤':item.replaceCategory==='Dessert'?'🍰':item.replaceCategory==='Rice Set'?'🍚':(name.toLowerCase().includes('fries')?'🍟':'🍽️');const count=isBurger?(custom.ingredients||[]).filter(x=>!x.removed).length:1;return `<button class="component-holder ${item.removed?'holder-removed':''}" onclick="selectComponent('${item.id}')"><span class="component-holder-icon">${icon}</span><span class="component-holder-number">Item ${index+1}</span><strong>${item.removed?'Removed':name}</strong><small>${item.removed?'Tap to restore':isBurger?count+' ingredients included':'Tap to remove or replace'}</small><span class="component-holder-arrow">›</span></button>`;}).join('')}</div>
            </section>
            <section class="custom-section addon-section"><h3 class="custom-heading">Add-ons</h3><p class="custom-hint">Optional extras for your meal.</p><div class="addon-list">${addonRows}</div></section>
            <p class="custom-price-note">Choose Item 1, 2 or 3 to edit only that part of your meal. Your other choices will stay the same.</p>
          `:`
            ${(()=>{const item=custom.components.find(x=>x.id===custom.selectedComponentId);const product=item?products.find(p=>p.id===item.productId):null;const isBurger=!!item&&(item.productId||'').startsWith('burger_');const title=item?(product?.name||item.name||item.label):'Meal item';return `<section class="custom-section component-editor"><button class="component-back" onclick="selectComponent(null)">← Back to meal items</button><div class="component-editor-title"><span class="component-holder-icon">${isBurger?'🍔':item?.replaceCategory==='Drink & Beverage'?'🥤':item?.replaceCategory==='Rice Set'?'🍚':'🍽️'}</span><div><h3 class="custom-heading">${title}</h3><p class="custom-hint">Make changes to this item only. Family Bento Sets can also change their included drink.</p></div></div>${!item?'':item.removed?`<div class="component-removed-notice">This meal item has been removed. <button class="custom-action undo" onclick="restoreComponent('${item.id}')">RESTORE ITEM</button></div>`:isBurger?`<p class="custom-hint">Tap an ingredient below to remove it, replace it, or keep it.</p><div class="ingredient-card-list">${ingredientRows}</div>`:`<div class="custom-item-list">${componentRows}</div>`}</section>`;})()}
            <section class="custom-section addon-section"><h3 class="custom-heading">Add-ons</h3><p class="custom-hint">Optional extras for your meal.</p><div class="addon-list">${addonRows}</div></section>
          `}
        `:`
          ${(()=>{const background=mealBackground(current);return `<section class="meal-details-block"><h3 class="meal-section-title">Food Origin</h3><p>${background.origin}</p><h3 class="meal-section-title">Background</h3><p>${background.history}</p><h3 class="meal-section-title">Preparation Style</h3><p>${background.style}</p><p class="meal-details-note">Ingredient and allergen information should be confirmed with café staff.</p></section>`;})()}
        `}
      </div>
    </div>
    <div class="detail-bottom">
      <div><span class="field-label" style="margin:0 0 6px">Quantity</span>
        <div class="qty"><button onclick="qty=Math.max(1,qty-1);renderDetail()">−</button><b>${qty}</b><button onclick="qty++;renderDetail()">＋</button></div>
      </div>
      <button class="primary" onclick="addToCart()">Add to cart · ${money((current.price+extraCost())*qty)}</button>
    </div>
  </div>`;
  applyTranslations();
}
function selectComponent(id){custom.selectedComponentId=id||null;custom.ingredientReplaceOpen=null;custom.replaceOpen=null;persistState();renderDetail();}
function removeIngredient(id){const item=(custom.ingredients||[]).find(x=>x.id===id);if(item){item.removed=true;item.replacement=null;custom.ingredientReplaceOpen=null;persistState();renderDetail();}}
function restoreIngredient(id){const item=(custom.ingredients||[]).find(x=>x.id===id);if(item){item.removed=false;persistState();renderDetail();}}
function toggleIngredientReplace(id){custom.ingredientReplaceOpen=custom.ingredientReplaceOpen===id?null:id;renderDetail();}
function resetIngredient(id){const item=(custom.ingredients||[]).find(x=>x.id===id);if(item){item.replacement=null;item.removed=false;persistState();renderDetail();}}
function replaceIngredient(id,name){const item=(custom.ingredients||[]).find(x=>x.id===id);if(item){item.removed=false;item.replacement=name;custom.ingredientReplaceOpen=null;persistState();renderDetail();}}
function removeComponent(id){
  const item=custom.components.find(x=>x.id===id);
  if(item){item.removed=true;custom.replaceOpen=null;persistState();renderDetail();}
}
function restoreComponent(id){
  const item=custom.components.find(x=>x.id===id);
  if(item){item.removed=false;persistState();renderDetail();}
}
function toggleReplace(id){
  custom.replaceOpen=custom.replaceOpen===id?null:id;
  renderDetail();
}
function replaceComponent(componentId,productId){
  const item=custom.components.find(x=>x.id===componentId);
  const product=products.find(x=>x.id===productId);
  if(item&&product){item.productId=product.id;item.name=product.name;if(product.id.startsWith('burger_'))custom.ingredients=defaultBurgerIngredients(product.id);custom.replaceOpen=null;persistState();renderDetail();}
}
function toggleAddon(name,price){
  if(!Array.isArray(custom.extras))custom.extras=[];
  const index=custom.extras.findIndex(x=>x.name===name);
  if(index>=0)custom.extras.splice(index,1);
  else custom.extras.push({name,price});
  persistState();
  renderDetail();
}
function extraCost(){
  return (custom.extras||[]).reduce((sum,item)=>{
    if(typeof item==='string')return sum+({'Extra egg':1.2,'Add cheese':1.5,'Extra sambal':.5}[item]||0);
    return sum+(Number(item.price)||0);
  },0);
}
// ADD-TO-CART HOOK: Trigger a confirmation sound or spoken confirmation after an item is successfully added.
function addToCart(){
  const customKey=JSON.stringify({
    components:(custom.components||[]).map(x=>({id:x.id,productId:x.productId,removed:x.removed})),
    ingredients:(custom.ingredients||[]).map(x=>({id:x.id,name:x.name,removed:x.removed,replacement:x.replacement||null})),
    extras:custom.extras||[]
  });
  const key=current.id+'|'+customKey;
  const selectedComponents=(custom.components||[]).filter(x=>!x.removed).map(x=>{
    const p=products.find(y=>y.id===x.productId);
    return {label:x.label,name:p?.name||x.name,productId:x.productId};
  });
  const selectedIngredients=(custom.ingredients||[]).map(x=>({...x}));
  const itemCustom={...custom,selectedComponents,selectedIngredients};
  const found=cart.find(x=>x.key===key);
  if(found)found.qty+=qty;
  else cart.push({
    key,id:current.id,name:current.name,price:current.price+extraCost(),
    base:current.price,qty,custom:itemCustom,img:current.img
  });
  updateCartUI();
  go('menu');
}
function subtotal(){return cart.reduce((s,x)=>s+x.price*x.qty,0)}
function updateCartUI(){
  let n=cart.reduce((s,x)=>s+x.qty,0);
  const head=document.getElementById('headCount'),fc=document.getElementById('floatCount'),ft=document.getElementById('floatTotal'),fb=document.getElementById('floatCart');
  if(head)head.textContent=n;if(fc)fc.textContent=n;if(ft)ft.textContent=money(subtotal());
  if(fb)fb.style.display=(n && ['menu','detail'].includes(document.body.dataset.page))?'block':'none';
  persistState();
}
// CART INTERACTION HOOKS: Quantity and remove buttons are generated here. Connect cart changes to your order state/backend here.
function renderCart(){persistState();document.getElementById('orderTypeLabel').textContent=mode+' order · Review your items before checkout.';document.getElementById('cartItems').innerHTML=cart.length?cart.map((x,i)=>`<div class="cart-row"><img src="${x.img}"><div><h4>${x.name}</h4><div class="small-muted">${(x.custom.selectedComponents||[]).map(c=>c.name).join(' · ')||'No included items'} · ${(x.custom.selectedIngredients||[]).filter(c=>c.removed||c.replacement).map(c=>c.removed?'No '+c.name:c.name+' → '+c.replacement).join(', ')||'No ingredient changes'} · ${(x.custom.extras||[]).map(a=>typeof a==='string'?a:a.name).join(', ')||'No add-ons'}</div><b class="price">${money(x.price*x.qty)}</b></div><div class="cart-actions"><button class="mini-btn" onclick="changeQty(${i},-1)">−</button><b>${x.qty}</b><button class="mini-btn" onclick="changeQty(${i},1)">＋</button><button class="mini-btn remove" onclick="cart.splice(${i},1);renderCart()">✕</button></div></div>`).join(''):'<div class="empty"><div style="font-size:42px">🛒</div><h3>Your cart is empty</h3><p>Add something delicious from the menu.</p></div>';document.getElementById('cartSummary').innerHTML=`<div class="summary-line"><span>Subtotal</span><b>${money(subtotal())}</b></div><div class="summary-line"><span>Service charge</span><b>${money(0)}</b></div><div class="summary-line"><span>GST</span><b>Included</b></div><div class="summary-line summary-total"><span>Total</span><span>${money(subtotal())}</span></div>`;document.getElementById('checkoutBtn').disabled=!cart.length;document.getElementById('checkoutBtn').style.opacity=cart.length?1:.45;updateCartUI();applyTranslations();}
function changeQty(i,d){cart[i].qty+=d;if(cart[i].qty<=0)cart.splice(i,1);renderCart();persistState()}
function checkout(){if(cart.length)go('checkout')}
// DEMO QR PAYMENT: generated locally for visual simulation only; it cannot transfer money.
let demoQrConfirmed=false;
function makeDemoQrSvg(){
  const n=29,cell=7,quiet=4,seed=20261126;let bits='';
  const reserved=(x,y)=>{
    for(const [ox,oy] of [[0,0],[n-7,0],[0,n-7]]) if(x>=ox&&x<ox+7&&y>=oy&&y<oy+7){
      const dx=x-ox,dy=y-oy;return dx===0||dx===6||dy===0||dy===6||(dx>=2&&dx<=4&&dy>=2&&dy<=4);
    }
    return false;
  };
  let state=seed;
  for(let y=0;y<n;y++)for(let x=0;x<n;x++){
    let on=reserved(x,y);
    if(!reserved(x,y)){state=(state*1664525+1013904223)>>>0;on=((state>>>28)&1)===1;}
    if(on)bits+=`<rect x="${(x+quiet)*cell}" y="${(y+quiet)*cell}" width="${cell}" height="${cell}" fill="#171717"/>`;
  }
  const size=(n+quiet*2)*cell;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" role="img" aria-label="Decorative simulated QR code, not scannable">${bits}</svg>`;
}
function onPaymentMethodChange(){
  const method=document.getElementById('payment')?.value||'Pay at counter';
  const box=document.getElementById('demoQrPayment');
  demoQrConfirmed=false;
  if(box)box.hidden=method!=='PayNow QR (Demo)';
  const status=document.getElementById('demoQrStatus');if(status)status.textContent='';
}
function simulateQrPayment(){
  demoQrConfirmed=true;
  const status=document.getElementById('demoQrStatus');
  if(status)status.textContent='Demo payment marked as complete. No money was transferred.';
  const button=document.getElementById('simulateQrButton');if(button)button.textContent='✓ Demo payment confirmed';
}
function renderCheckout(){
  const total=subtotal();
  document.getElementById('checkoutSummary').innerHTML=
    cart.map(x=>`<div class="checkout-item-summary"><div class="summary-line"><span>${x.qty} × ${x.name}</span><b>${money(x.qty*x.price)}</b></div><p class="small-muted">${(x.custom.selectedIngredients||[]).filter(c=>c.removed||c.replacement).map(c=>c.removed?'No '+c.name:c.name+' → '+c.replacement).join(' · ')||'Standard ingredients'}${(x.custom.extras||[]).length?' · '+x.custom.extras.map(a=>typeof a==='string'?a:a.name).join(', '):''}</p></div>`).join('')+
    `<div class="summary-line summary-total"><span>Total</span><span>${money(total)}</span></div>`+
    `<div class="summary-line"><span>Simulated wallet balance</span><b id="checkoutWalletBalance">${money(walletBalance)}</b></div>`+
    `<p class="small-muted">${mode} order · Demo credits only, no real payment.</p>`+
    ((document.getElementById('payment')?.value||'Pay at counter')==='Demo Wallet'&&total>walletBalance?`<p class="notice" role="alert">Insufficient demo credits. Use Toolbar → Top up demo credits to add more.</p>`:'');
  document.getElementById('tableNo').parentElement.style.display=mode==='Dine In'?'block':'none';
  const qr=document.getElementById('demoQrGraphic');if(qr)qr.innerHTML=makeDemoQrSvg();
  onPaymentMethodChange();
  applyTranslations();
}
// PLACE ORDER HOOK: Replace demo order-number generation with your real order API / POS submission.
// Current version is a front-end demonstration and does not transmit orders to a restaurant backend.
function placeOrder(){
  persistState();
  const name=document.getElementById('customerName').value.trim();
  const total=Number(subtotal().toFixed(2));
  if(!name){alert(translateValue('Please enter your name.'));document.getElementById('customerName').focus();return;}
  if(mode==='Dine In'&&!document.getElementById('tableNo').value.trim()){alert(translateValue('Please enter your table number.'));return;}
  if(total<=0){alert('Your cart is empty. Please add an item before checkout.');return;}
  const paymentMethod=document.getElementById('payment')?.value||'Pay at counter';
  if(paymentMethod==='PayNow QR (Demo)'&&!demoQrConfirmed){alert('Please confirm the simulated QR scan first. No real payment will be made.');return;}
  if(paymentMethod==='Demo Wallet'){
    if(total>walletBalance){alert(`Insufficient demo credits. Your balance is ${money(walletBalance)} and your order total is ${money(total)}.`);return;}
    const balanceBefore=walletBalance;
    walletBalance=Number((walletBalance-total).toFixed(2));
    walletTransactions.push({id:'SIM-'+Date.now(),type:'order',orderTotal:total,balanceBefore,balanceAfter:walletBalance,createdAt:new Date().toISOString(),orderType:mode});
    saveWallet();refreshWalletViews();
  }
  const no='EC'+Math.floor(10000+Math.random()*89999);
  const successText=localizedOrderConfirmation(name);
  const receipt={successText,orderNumber:'Order '+no,amountPaid:total,remainingBalance:walletBalance,paymentMethod};
  try{sessionStorage.setItem('essembleSuccess',JSON.stringify(receipt));}catch(e){}
  const st=document.getElementById('successText'),on=document.getElementById('orderNumber');
  if(st)st.textContent=successText;
  if(on)on.textContent='Order '+no;
  cart=[];
  updateCartUI();
  go('success');
  say('Thank you. Your order has been received.');
}
function newOrder(){
  mode='';cart=[];current=null;qty=1;custom={spice:'Normal',extras:[],notes:''};
  walletBalance=WALLET_STARTING_BALANCE;walletTransactions=[];
  try{
    sessionStorage.removeItem('essembleSuccess');
    sessionStorage.removeItem('essembleState');
    sessionStorage.removeItem('essembleWalletBalance');
    sessionStorage.removeItem('essembleWalletTransactions');
    localStorage.removeItem('essembleWalletBalance');
    localStorage.removeItem('essembleWalletTransactions');
    sessionStorage.removeItem('essembleAccessibility');
  }catch(e){}
  accessibilitySettings={mobility:false,vision:false};
  applyAccessibilitySettings();
  saveWallet();
  go('home');
}
// ACCESSIBILITY TOOLBOX: edge-mounted hover drawer, also operable by click and keyboard.
let accessibilitySettings={mobility:false,vision:false};
try{
  const savedAccess=JSON.parse(sessionStorage.getItem('essembleAccessibility')||'{}');
  accessibilitySettings={mobility:!!savedAccess.mobility,vision:!!savedAccess.vision};
}catch(e){}
function renderWalletWidget(){
  if(document.getElementById('accessibilityToolbox'))return;
  const widget=document.createElement('aside');
  widget.id='accessibilityToolbox';
  widget.className='access-toolbox';
  widget.innerHTML=`
    <button type="button" class="access-toolbox-tab" aria-expanded="false" aria-controls="accessToolboxPanel" onclick="toggleAccessToolbox()" aria-label="Open toolbar">
      <span class="access-tab-icon" aria-hidden="true">♿</span>
      <span class="access-tab-label">Toolbar</span>
    </button>
    <section class="access-toolbox-panel" id="accessToolboxPanel" aria-label="Toolbar options and demo wallet">
      <div class="access-panel-head"><strong>Quick tools</strong><button type="button" class="access-close" aria-label="Close tools" onclick="closeAccessToolbox()">×</button></div>
      <div class="access-tool-section">
        <div class="access-section-title">Customer assistance</div>
        <button type="button" class="access-option" id="mobilityOption" aria-pressed="false" onclick="toggleAccessibility('mobility')">
          <span class="access-option-icon" aria-hidden="true">🧑‍🦽</span><span><b>Mobility support</b><small>Larger touch targets and reduced movement</small></span><span class="access-check">○</span>
        </button>
        <button type="button" class="access-option" id="visionOption" aria-pressed="false" onclick="toggleAccessibility('vision')">
          <span class="access-option-icon" aria-hidden="true">👁️</span><span><b>Vision support</b><small>High contrast, larger text and voice guidance</small></span><span class="access-check">○</span>
        </button>
      </div>
      <div class="access-tool-section access-wallet-section">
        <div class="access-section-title">Demo wallet</div>
        <div class="access-wallet-balance" id="walletPopoverBalance">${money(walletBalance)}</div>
        <div class="access-wallet-caption">Available simulated credits</div>
        <div class="wallet-topup-title">Top up demo credits</div><div class="wallet-topup-buttons"><button type="button" onclick="topUpWallet(10)">+$10</button><button type="button" onclick="topUpWallet(20)">+$20</button><button type="button" onclick="topUpWallet(50)">+$50</button></div>
        <div class="wallet-transaction-heading">Recent transactions</div>
        <div id="walletRecentTransactions"></div>
        <small class="access-wallet-note">Demo credits only · No real payment</small>
      </div>
    </section>`;
  document.body.appendChild(widget);
  widget.addEventListener('mouseenter',()=>widget.classList.add('is-open'));
  widget.addEventListener('mouseleave',()=>{
    if(!widget.dataset.pinned)widget.classList.remove('is-open');
  });
  widget.addEventListener('focusin',()=>widget.classList.add('is-open'));
  widget.addEventListener('focusout',e=>{
    if(!widget.contains(e.relatedTarget)&&!widget.dataset.pinned)widget.classList.remove('is-open');
  });
  renderWalletBalance();
  applyAccessibilitySettings();
}
function toggleAccessToolbox(){
  const widget=document.getElementById('accessibilityToolbox');
  const tab=widget?.querySelector('.access-toolbox-tab');
  if(!widget||!tab)return;
  const open=!widget.classList.contains('is-open');
  widget.classList.toggle('is-open',open);
  if(open)widget.dataset.pinned='1';else delete widget.dataset.pinned;
  tab.setAttribute('aria-expanded',String(open));
}
function closeAccessToolbox(){
  const widget=document.getElementById('accessibilityToolbox');
  const tab=widget?.querySelector('.access-toolbox-tab');
  widget?.classList.remove('is-open');
  if(widget)delete widget.dataset.pinned;
  tab?.setAttribute('aria-expanded','false');
}
function toggleAccessibility(kind){
  if(kind!=='mobility'&&kind!=='vision')return;
  accessibilitySettings[kind]=!accessibilitySettings[kind];
  try{sessionStorage.setItem('essembleAccessibility',JSON.stringify(accessibilitySettings));}catch(e){}
  applyAccessibilitySettings();
}
function applyAccessibilitySettings(){
  document.body.classList.toggle('access-mobility',!!accessibilitySettings.mobility);
  document.body.classList.toggle('access-vision',!!accessibilitySettings.vision);
  const mobility=document.getElementById('mobilityOption');
  const vision=document.getElementById('visionOption');
  if(mobility){mobility.setAttribute('aria-pressed',String(accessibilitySettings.mobility));mobility.querySelector('.access-check').textContent=accessibilitySettings.mobility?'✓':'○';}
  if(vision){vision.setAttribute('aria-pressed',String(accessibilitySettings.vision));vision.querySelector('.access-check').textContent=accessibilitySettings.vision?'✓':'○';}
  if(accessibilitySettings.vision){
    document.body.classList.add('access-vision');
  }
}
function topUpWallet(amount){
  const value=Number(amount);if(![10,20,50].includes(value))return;
  const balanceBefore=walletBalance;walletBalance=Number((walletBalance+value).toFixed(2));
  walletTransactions.push({id:'TOPUP-'+Date.now(),type:'topup',amount:value,balanceBefore,balanceAfter:walletBalance,createdAt:new Date().toISOString()});
  saveWallet();refreshWalletViews();
  const balance=document.getElementById('walletPopoverBalance');if(balance)balance.textContent=money(walletBalance);
}
function renderWalletBalance(){
  const pop=document.getElementById('walletPopoverBalance');
  const recent=document.getElementById('walletRecentTransactions');
  if(pop)pop.textContent=money(walletBalance);
  if(recent){
    const rows=walletTransactions.slice(-3).reverse();
    recent.innerHTML=rows.length?rows.map(t=>`<div class="wallet-transaction-row"><span>${t.type==='topup'?'Credit top-up':'Order payment'}</span><b>${t.type==='topup'?'+':'−'}${money(Number(t.amount??t.orderTotal)||0)}</b></div>`).join(''):'<div class="wallet-empty">No transactions yet</div>';
  }
}
// Keep the demo balance live across kiosk pages and other open tabs/windows.
window.addEventListener('storage',event=>{
  if(event.key==='essembleWalletBalance'&&event.newValue!==null){
    const next=Number(event.newValue);if(Number.isFinite(next)&&next>=0)walletBalance=next;
    try{walletTransactions=JSON.parse(localStorage.getItem('essembleWalletTransactions')||'[]');}catch(e){}
    renderWalletBalance();
    if(document.body.dataset.page==='checkout')renderCheckout();
    updateCartUI();
  }
  if(event.key==='essembleWalletTransactions'){
    try{walletTransactions=JSON.parse(event.newValue||'[]');}catch(e){walletTransactions=[];}
    renderWalletBalance();
  }
});
function refreshWalletViews(){
  renderWalletBalance();
  const checkout=document.getElementById('checkoutSummary');
  if(checkout&&document.body.dataset.page==='checkout')renderCheckout();
}
function toggleWalletPopover(){
  const widget=document.getElementById('walletWidget');
  const trigger=widget?.querySelector('.wallet-trigger');
  if(!widget||!trigger)return;
  const open=!widget.classList.contains('is-open');
  widget.classList.toggle('is-open',open);
  if(open)widget.dataset.pinned='1';else delete widget.dataset.pinned;
  trigger.setAttribute('aria-expanded',String(open));
}
function bindProductPreviewLongPress(){
  const grid=document.getElementById('products');
  if(!grid)return;
  let pressTimer=null, activeCard=null;
  const clear=()=>{
    if(pressTimer)clearTimeout(pressTimer);
    pressTimer=null;
  };
  grid.querySelectorAll('.product').forEach(card=>{
    card.addEventListener('touchstart',()=>{
      clear();activeCard=card;
      pressTimer=setTimeout(()=>{
        card.classList.add('show-summary');
        card.setAttribute('aria-expanded','true');
      },450);
    },{passive:true});
    ['touchend','touchcancel','touchmove'].forEach(eventName=>card.addEventListener(eventName,clear,{passive:true}));
    card.addEventListener('click',event=>{
      if(event.target.closest('button'))return;
      if(window.matchMedia('(hover: none)').matches){
        card.classList.toggle('show-summary');
        card.setAttribute('aria-expanded',String(card.classList.contains('show-summary')));
      }
    });
  });
  document.addEventListener('click',event=>{
    if(!event.target.closest('.product'))grid.querySelectorAll('.product.show-summary').forEach(card=>{
      card.classList.remove('show-summary');card.setAttribute('aria-expanded','false');
    });
  },{once:true});
}

// PAGE INITIALISATION: Render only the content belonging to the current HTML page.
document.addEventListener('DOMContentLoaded',()=>{
  renderWalletWidget();
  const voiceForm=document.querySelector('#voiceChatPanel form');
  if(voiceForm){
    voiceForm.addEventListener('submit',submitVoiceChat);
  }
  const page=document.body.dataset.page;
  document.querySelectorAll('.language-option').forEach(b=>b.classList.toggle('active',b.dataset.language===selectedLanguage));
  if(page==='menu')renderMenu();
  if(page==='item' && current)renderDetail();
  if(page==='cart')renderCart();
  if(page==='checkout')renderCheckout();
  if(page==='success' && sessionStorage.getItem('essembleSuccess')){
    let successData={};
    try{successData=JSON.parse(sessionStorage.getItem('essembleSuccess')||'{}')||{};}catch(e){}
    const st=document.getElementById('successText'),on=document.getElementById('orderNumber');
    if(st)st.textContent=successData.successText||'';
    if(on)on.textContent=successData.orderNumber||'';
    const receipt=document.getElementById('walletReceipt');
    if(receipt)receipt.innerHTML=`<div class="summary-line"><span>Simulated credits used</span><b>${money(Number(successData.amountPaid)||0)}</b></div><div class="summary-line"><span>Remaining demo balance</span><b>${money(Number(successData.remainingBalance)||0)}</b></div><p class="small-muted">Demo transaction only · No real payment was taken.</p>`;
  }
  const speechSwitch=document.getElementById('speechSwitch'),audioSwitch=document.getElementById('audioSwitch');
  if(speechSwitch)speechSwitch.classList.toggle('on',speech);
  if(audioSwitch)audioSwitch.classList.toggle('on',audio);
  updateCartUI();
  applyTranslations();
  if(audio)playScreenAudio(page==='item'?'item':page);
});
