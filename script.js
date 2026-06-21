// ─── Language & i18n ────────────────────────────────────────────────────────

let ACTIVE_LANG = 'en';
let activeCategory = 'all';
let activeSearchQuery = '';
let categoryBeforeSearch = 'all';

const UI_STRINGS = {
    en: {
        menuTitle: 'Our Regular ',
        menuTitleHighlight: 'Menu',
        tagline: 'Tap items to build your perfect delicious meal.',
        cat_all: 'All',
        cat_burgers: 'Burgers',
        cat_pizza: 'Pizza',
        cat_sides: 'Sides',
        cat_drinks: 'Drinks',
        myBasket: 'My Basket',
        clear: 'Clear',
        emptyBasket: 'Your basket is empty.\nChoose something delicious!',
        subtotal: 'Subtotal',
        totalAmount: 'Total Amount',
        orderNow: 'Order Now',
        checkoutTitle: 'Complete Your Order',
        checkoutSummary: 'Order Summary',
        checkoutName: 'Full Name',
        checkoutPhone: 'Phone Number',
        checkoutNotes: 'Notes (optional)',
        checkoutNotesPlaceholder: 'Delivery instructions, allergies, etc.',
        checkoutCancel: 'Cancel',
        checkoutSubmit: 'Submit Order',
        checkoutNameRequired: 'Please enter your name.',
        checkoutPhoneRequired: 'Please enter your phone number.',
        checkoutPhoneInvalid: 'Please enter a valid phone number.',
        checkoutSubmitting: 'Submitting...',
        checkoutSuccess: 'Order placed successfully! Thank you.',
        checkoutError: 'Could not submit your order. Please try again.',
        buyNow: 'Buy Now',
        addToCart: 'Add to Cart',
        quantity: 'Quantity',
        decreaseQty: 'Decrease quantity',
        increaseQty: 'Increase quantity',
        removeItem: 'Remove item',
        viewProduct: 'View item details',
        searchLabel: 'Search menu',
        searchPlaceholder: 'Search burgers, pizza…',
        searchNoResults: 'No items match your search.',
        searchClear: 'Clear search',
        restaurantName: 'Foodle',
        footerContact: 'Questions? Call +966 5X XXX XXXX',
        footerCopyright: '© 2026 Foodle. All rights reserved.',
        footerPoweredBy: 'Powered by',
        backToTop: 'Back to top',
        items: 'items',
        item: 'item',
        loadError: 'Failed to load menu. Please try again.',
        clearConfirm: 'Are you sure you want to empty your basket?',
        emptyCartAlert: 'Please add items to your basket before checking out!',
        modifierOptional: 'Optional',
        modifierRequired: 'Required',
        modifierChooseOne: 'Choose 1',
        modifierChooseUpTo: 'Optional, up to {n}',
        modifierMinError: 'Please select at least {n} option(s) for "{name}".',
        modifierMaxError: 'You can select at most {n} option(s) for "{name}".',
        modifierFree: 'Free',
        modifierRemoveUpTo: 'Optional, remove up to {n}',
        modifierRemoveOptional: 'Optional removals',
        without: 'Without',
        cartAddedTitle: 'Great choice!',
        cartAddedBody: 'Your item has been added to the basket.',
        cartAddedContinue: 'Continue Browsing',
        cartAddedCheckout: 'Go to Checkout',
        specialNotes: 'Special Notes',
        specialNotesPlaceholder: 'Allergies, remove ingredients, extra sauce…',
        viewBasket: 'View Basket',
        myOrders: 'My Orders',
        ordersEmpty: 'Your order history will appear here.',
        orderStatus_confirmed: 'Confirmed',
        orderStatus_submitted: 'Submitted',
        viewDetails: 'View Details',
        orderDetailTitle: 'Order Details',
        orderDate: 'Date',
        orderCustomer: 'Customer',
        orderItems: 'Items',
        orderTotal: 'Total',
    },
    ar: {
        menuTitle: 'قائمتنا ',
        menuTitleHighlight: 'الرئيسية',
        tagline: 'اضغط على الأصناف لبناء وجبتك المثالية.',
        cat_all: 'الكل',
        cat_burgers: 'برغر',
        cat_pizza: 'بيتزا',
        cat_sides: 'مقبلات',
        cat_drinks: 'مشروبات',
        myBasket: 'سلتي',
        clear: 'مسح',
        emptyBasket: 'سلتك فارغة.\nاختر شيئاً لذيذاً!',
        subtotal: 'المجموع الجزئي',
        totalAmount: 'المبلغ الإجمالي',
        orderNow: 'اطلب الآن',
        checkoutTitle: 'إتمام الطلب',
        checkoutSummary: 'ملخص الطلب',
        checkoutName: 'الاسم الكامل',
        checkoutPhone: 'رقم الهاتف',
        checkoutNotes: 'ملاحظات (اختياري)',
        checkoutNotesPlaceholder: 'تعليمات التوصيل، حساسية، إلخ.',
        checkoutCancel: 'إلغاء',
        checkoutSubmit: 'تأكيد الطلب',
        checkoutNameRequired: 'يرجى إدخال اسمك.',
        checkoutPhoneRequired: 'يرجى إدخال رقم هاتفك.',
        checkoutPhoneInvalid: 'يرجى إدخال رقم هاتف صالح.',
        checkoutSubmitting: 'جاري الإرسال...',
        checkoutSuccess: 'تم تقديم الطلب بنجاح! شكراً لك.',
        checkoutError: 'تعذر إرسال الطلب. حاول مجدداً.',
        buyNow: 'اطلب الآن',
        addToCart: 'أضف إلى السلة',
        quantity: 'الكمية',
        decreaseQty: 'تقليل الكمية',
        increaseQty: 'زيادة الكمية',
        removeItem: 'إزالة الصنف',
        viewProduct: 'عرض تفاصيل الصنف',
        searchLabel: 'بحث في القائمة',
        searchPlaceholder: 'ابحث عن برغر، بيتزا…',
        searchNoResults: 'لا توجد أصناف مطابقة لبحثك.',
        searchClear: 'مسح البحث',
        restaurantName: 'فودل',
        footerContact: 'استفسارات؟ اتصل على +966 5X XXX XXXX',
        footerCopyright: '© 2026 فودل. جميع الحقوق محفوظة.',
        footerPoweredBy: 'مدعوم من',
        backToTop: 'العودة للأعلى',
        items: 'أصناف',
        item: 'صنف',
        loadError: 'فشل تحميل القائمة. حاول مجدداً.',
        clearConfirm: 'هل أنت متأكد من تفريغ السلة؟',
        emptyCartAlert: 'يرجى إضافة أصناف قبل تقديم الطلب!',
        modifierOptional: 'اختياري',
        modifierRequired: 'مطلوب',
        modifierChooseOne: 'اختر واحداً',
        modifierChooseUpTo: 'اختياري، حتى {n}',
        modifierMinError: 'يرجى اختيار {n} على الأقل من "{name}".',
        modifierMaxError: 'يمكنك اختيار {n} كحد أقصى من "{name}".',
        modifierFree: 'مجاني',
        modifierRemoveUpTo: 'اختياري، أزل حتى {n}',
        modifierRemoveOptional: 'إزالات اختيارية',
        without: 'بدون',
        cartAddedTitle: 'اختيار رائع!',
        cartAddedBody: 'تمت إضافة الصنف إلى سلتك.',
        cartAddedContinue: 'متابعة التصفح',
        cartAddedCheckout: 'إتمام الطلب',
        specialNotes: 'ملاحظات خاصة',
        specialNotesPlaceholder: 'حساسية، إزالة مكونات، صلصة إضافية…',
        viewBasket: 'عرض السلة',
        myOrders: 'طلباتي',
        ordersEmpty: 'ستظهر هنا سجل طلباتك.',
        orderStatus_confirmed: 'مؤكد',
        orderStatus_submitted: 'مُقدَّم',
        viewDetails: 'عرض التفاصيل',
        orderDetailTitle: 'تفاصيل الطلب',
        orderDate: 'التاريخ',
        orderCustomer: 'العميل',
        orderItems: 'الأصناف',
        orderTotal: 'الإجمالي',
    }
};

// ─── Order Service ────────────────────────────────────────────────────────────

class OrderService {
    static STORAGE_KEY = 'foodle_order_history';
    static ORDER_STATUS = Object.freeze({ CONFIRMED: 'confirmed', SUBMITTED: 'submitted' });

    static #load() {
        try { return JSON.parse(localStorage.getItem(OrderService.STORAGE_KEY) || '[]'); }
        catch { return []; }
    }

    static #persist(data) {
        localStorage.setItem(OrderService.STORAGE_KEY, JSON.stringify(data));
    }

    static validateOrder(record) {
        if (!record?.items?.length) throw new Error('Order must contain at least one item.');
        if (!record?.customer?.name) throw new Error('Order must include customer name.');
    }

    static getAll()        { return OrderService.#load(); }
    static findById(id)    { return OrderService.#load().find(o => o.orderId === id) ?? null; }

    static save(record) {
        OrderService.validateOrder(record);
        const orders = OrderService.#load();
        orders.unshift(record);
        OrderService.#persist(orders);
    }

    static clear() { localStorage.removeItem(OrderService.STORAGE_KEY); }
}

// Maps every known status to its i18n key and CSS modifier so createStatusBadge()
// never needs a conditional chain — add new statuses here only.
const STATUS_META = {
    [OrderService.ORDER_STATUS.CONFIRMED]: { i18nKey: 'orderStatus_confirmed', cssModifier: 'confirmed' },
    [OrderService.ORDER_STATUS.SUBMITTED]: { i18nKey: 'orderStatus_submitted', cssModifier: 'submitted' },
};

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

const I18n = {
    get lang() { return ACTIVE_LANG; },

    setLang(lang) {
        ACTIVE_LANG = lang;
        const html = document.documentElement;
        html.lang = lang;
        html.dir = lang === 'ar' ? 'rtl' : 'ltr';
        const labelEl = document.getElementById('langLabel');
        if (labelEl) labelEl.textContent = lang === 'ar' ? 'EN' : 'AR';
    },

    t(key) {
        return UI_STRINGS[ACTIVE_LANG][key] ?? UI_STRINGS.en[key];
    },

    applyUIStrings() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            el.textContent = this.t(key);
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            el.placeholder = this.t(el.getAttribute('data-i18n-placeholder'));
        });
        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            el.setAttribute('aria-label', this.t(el.getAttribute('data-i18n-aria')));
        });
    }
};

function t(key) { return I18n.t(key); }
function applyUIStrings() { I18n.applyUIStrings(); }

function switchLanguage(lang) {
    I18n.setLang(lang);
    I18n.applyUIStrings();
    initBrandLogo();
    MenuComponent.refresh();
    BasketComponent.refresh();
    ProductModalComponent.refresh();
    CheckoutComponent.refresh();
    positionBackToTopFab();
}

// ─── Mock Data ───────────────────────────────────────────────────────────────

const mockMenuData = [
    // BURGERS
    {
        id: 1,
        translations: { en: "Classic Chicken Burger", ar: "برغر دجاج كلاسيك" },
        descriptions: {
            en: "Crispy chicken fillet, fresh lettuce, tomato, and house mayo on a toasted bun.",
            ar: "فillet دجاج مقرمش، خس طازج، طماطم، ومايونيز منزلي في خبز محمص."
        },
        category: "burgers", price: 5.00, rating: 5,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400",
        modifierTemplateIds: ['template_burger_removals', 'template_burger_extras', 'template_burger_sauce']
    },
    {
        id: 2,
        translations: { en: "Crispy Zinger Burger", ar: "برغر زينجر مقرمش" },
        descriptions: {
            en: "Spicy breaded chicken, crunchy slaw, and zinger sauce in a soft brioche bun.",
            ar: "دجاج متبل ومقرمش، كول سلو، وصلصة زينجر في خبز brioche طري."
        },
        category: "burgers", price: 5.50, rating: 5,
        image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?q=80&w=400",
        modifierTemplateIds: ['template_burger_removals', 'template_burger_extras', 'template_burger_sauce']
    },
    {
        id: 3,
        translations: { en: "Smoked BBQ Beef Burger", ar: "برغر لحم بقر مدخن بالبي بي كيو" },
        descriptions: {
            en: "Juicy beef patty glazed with smoky BBQ sauce, cheddar, and caramelized onions.",
            ar: "قطعة لحم بقرية عصيرة مع صلصة باربكيو مدخنة، شيدر، وبصل مكرمل."
        },
        category: "burgers", price: 6.80, rating: 4,
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=400",
        modifierTemplateIds: ['template_burger_removals', 'template_burger_extras', 'template_burger_sauce']
    },

    // PIZZA
    {
        id: 4,
        translations: { en: "Classic Chicken Pizza", ar: "بيتزا دجاج كلاسيك" },
        descriptions: {
            en: "Hand-stretched dough topped with grilled chicken, mozzarella, and tomato sauce.",
            ar: "عجينة ممدودة يدوياً مع دجاج مشوي، موزاريلا، وصلصة طماطم."
        },
        category: "pizza", price: 7.20, rating: 4,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=400",
        modifierTemplateIds: ['template_pizza_toppings']
    },
    {
        id: 5,
        translations: { en: "Pepperoni Passion Pizza", ar: "بيتزا بيبيروني فاخرة" },
        descriptions: {
            en: "Generous pepperoni slices, melted mozzarella, and our signature herb crust.",
            ar: "شرائح بيبيروني وفيرة، موزاريلا ذائبة، وقشرة أعشاب مميزة."
        },
        category: "pizza", price: 8.50, rating: 5,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=400",
        modifierTemplateIds: ['template_pizza_toppings']
    },
    {
        id: 6,
        translations: { en: "Margherita Supreme", ar: "مارغريتا سوبريم" },
        descriptions: {
            en: "Fresh basil, buffalo mozzarella, and San Marzano tomato on a thin crispy base.",
            ar: "ريحان طازج، موزاريلا بوفالو، وطماطم San Marzano على قاعدة رقيقة مقرمشة."
        },
        category: "pizza", price: 6.99, rating: 5,
        image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?q=80&w=400",
        modifierTemplateIds: ['template_pizza_toppings']
    },

    // SIDES
    {
        id: 7,
        translations: { en: "Chicken Fry Strips", ar: "أصابع دجاج مقلية" },
        descriptions: {
            en: "Golden crispy chicken strips served with your choice of dipping sauce.",
            ar: "أصابع دجاج مقرمشة ذهبية تُقدَّم مع صلصة غمس من اختيارك."
        },
        category: "sides", price: 5.00, rating: 5,
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=400"
    },
    {
        id: 8,
        translations: { en: "Golden French Fries", ar: "بطاطس مقلية ذهبية" },
        descriptions: {
            en: "Thick-cut potatoes fried to a golden crunch, lightly seasoned with sea salt.",
            ar: "بطاطس مقطعة سميكاً ومقلية حتى تصبح مقرمشة، مع تتبيل خفيف بملح البحر."
        },
        category: "sides", price: 2.50, rating: 4,
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=400"
    },
    {
        id: 9,
        translations: { en: "Crispy Mozzarella Sticks", ar: "عيدان موزاريلا مقرمشة" },
        descriptions: {
            en: "Breaded mozzarella sticks with a melty center, served with marinara dip.",
            ar: "عيدان موزاريلا مغلفة بفتات الخبز مع قلب ذائب، تُقدَّم مع صلصة marinara."
        },
        category: "sides", price: 3.80, rating: 5,
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=400"
    },

    // DRINKS
    {
        id: 10,
        translations: { en: "Coca Cola Ice", ar: "كوكا كولا مثلجة" },
        descriptions: {
            en: "Chilled Coca-Cola served over ice — the perfect meal companion.",
            ar: "كوكا كولا مبردة مع ثلج — الرفيق المثالي لوجبتك."
        },
        category: "drinks", price: 1.50, rating: 5,
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=400",
        modifierTemplateIds: ['template_drink_size']
    },
    {
        id: 11,
        translations: { en: "Strawberry Milkshake", ar: "ميلك شيك فراولة" },
        descriptions: {
            en: "Creamy vanilla ice cream blended with fresh strawberries and topped with whipped cream.",
            ar: "آيس كريم فانيلا كريمي ممزوج مع فراولة طازجة ومزين بالكريمة المخفوقة."
        },
        category: "drinks", price: 3.50, rating: 5,
        image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=400",
        modifierTemplateIds: ['template_drink_size']
    },
    {
        id: 12,
        translations: { en: "Fresh Orange Juice", ar: "عصير برتقال طازج" },
        descriptions: {
            en: "100% freshly squeezed oranges — no added sugar, no preservatives.",
            ar: "برتقال معصور طازج 100% — بدون سكر مضاف وبدون مواد حافظة."
        },
        category: "drinks", price: 2.50, rating: 4,
        image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=400"
    }
];

const mockModifierTemplates = {
    template_burger_removals: {
        id: 'template_burger_removals',
        templateType: 'remove',
        translations: { en: 'Remove ingredients', ar: 'إزالة المكونات' },
        multiSelect: true,
        minCount: 0,
        maxCount: 5,
        options: [
            { id: 'mod_no_onion', materialId: 5001, translations: { en: 'No Onion', ar: 'بدون بصل' }, price: 0 },
            { id: 'mod_no_lettuce', materialId: 5002, translations: { en: 'No Lettuce', ar: 'بدون خس' }, price: 0 },
            { id: 'mod_no_cheese', materialId: 5003, translations: { en: 'No Cheese', ar: 'بدون جبنة' }, price: -0.50 }
        ]
    },
    template_burger_extras: {
        id: 'template_burger_extras',
        translations: { en: 'Extra toppings', ar: 'إضافات' },
        multiSelect: true,
        minCount: 0,
        maxCount: 3,
        options: [
            { id: 'mod_cheese', materialId: 1001, translations: { en: 'Extra Cheese', ar: 'جبنة إضافية' }, price: 0.50 },
            { id: 'mod_bacon', materialId: 1002, translations: { en: 'Bacon', ar: 'لحم مقدد' }, price: 1.00 },
            { id: 'mod_egg', materialId: 1003, translations: { en: 'Fried Egg', ar: 'بيض مقلي' }, price: 0.75 }
        ]
    },
    template_burger_sauce: {
        id: 'template_burger_sauce',
        translations: { en: 'Choose sauce', ar: 'اختر الصلصة' },
        multiSelect: false,
        minCount: 1,
        maxCount: 1,
        options: [
            { id: 'mod_no_sauce', materialId: 2004, translations: { en: 'No Sauce', ar: 'بدون صلصة' }, price: 0 },
            { id: 'mod_ketchup', materialId: 2001, translations: { en: 'Ketchup', ar: 'كاتشب' }, price: 0 },
            { id: 'mod_mayo', materialId: 2002, translations: { en: 'Mayo', ar: 'مايونيز' }, price: 0 },
            { id: 'mod_bbq', materialId: 2003, translations: { en: 'BBQ Sauce', ar: 'صلصة باربكيو' }, price: 0.25 }
        ]
    },
    template_pizza_toppings: {
        id: 'template_pizza_toppings',
        translations: { en: 'Extra toppings', ar: 'إضافات' },
        multiSelect: true,
        minCount: 0,
        maxCount: 5,
        options: [
            { id: 'mod_pepperoni', materialId: 3001, translations: { en: 'Pepperoni', ar: 'بيبيروني' }, price: 1.00 },
            { id: 'mod_mushrooms', materialId: 3002, translations: { en: 'Mushrooms', ar: 'فطر' }, price: 0.75 },
            { id: 'mod_olives', materialId: 3003, translations: { en: 'Olives', ar: 'زيتون' }, price: 0.50 }
        ]
    },
    template_drink_size: {
        id: 'template_drink_size',
        translations: { en: 'Size', ar: 'الحجم' },
        multiSelect: false,
        minCount: 1,
        maxCount: 1,
        options: [
            { id: 'mod_small', materialId: 4001, translations: { en: 'Small', ar: 'صغير' }, price: 0 },
            { id: 'mod_medium', materialId: 4002, translations: { en: 'Medium', ar: 'وسط' }, price: 0.50 },
            { id: 'mod_large', materialId: 4003, translations: { en: 'Large', ar: 'كبير' }, price: 1.00 }
        ]
    }
};

let basket = [];
let productModalId = null;
let productModalQty = 1;
let productModalTrigger = null;
let productModalSelections = {};

// ─── API Mock Layer ──────────────────────────────────────────────────────────
// When the real backend is ready, replace this entire function with:
//   return fetch(`https://api.example.com/menu?category=${category}`).then(r => r.json());

function mockFetch(category = 'all') {
    return new Promise((resolve) => {
        const data = category === 'all'
            ? mockMenuData
            : mockMenuData.filter(item => item.category === category);
        setTimeout(() => resolve(data), 800);
    });
}

// ─── sessionStorage Cache ────────────────────────────────────────────────────

const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes
const MENU_CACHE_VERSION = 5; // bump when mockMenuData changes (invalidates stale sessionStorage)

function getMenuCacheKey(category) {
    return `menu_cache_v${MENU_CACHE_VERSION}_${category}`;
}

function getCachedMenu(category) {
    try {
        const raw = sessionStorage.getItem(getMenuCacheKey(category));
        if (!raw) return null;
        const { timestamp, data } = JSON.parse(raw);
        if (Date.now() - timestamp > CACHE_TTL_MS) {
            sessionStorage.removeItem(getMenuCacheKey(category));
            return null;
        }
        return data;
    } catch {
        return null;
    }
}

function writeMenuCache(category, data) {
    try {
        sessionStorage.setItem(
            getMenuCacheKey(category),
            JSON.stringify({ timestamp: Date.now(), data })
        );
    } catch {
        // sessionStorage quota exceeded — silently skip caching
    }
}

// ─── Skeleton Helpers ────────────────────────────────────────────────────────

function showLoadingSkeleton() {
    const container = document.getElementById("menu-items-container");
    if (!container) return;
    container.innerHTML = Array(6).fill(`
        <div class="skeleton-card">
            <div class="skeleton-circle"></div>
            <div class="skeleton-line skeleton-line--rating"></div>
            <div class="skeleton-line skeleton-line--title"></div>
            <div class="skeleton-line skeleton-line--title skeleton-line--short"></div>
            <div class="skeleton-footer">
                <div class="skeleton-line skeleton-line--price"></div>
                <div class="skeleton-line skeleton-line--btn"></div>
            </div>
        </div>
    `).join('');
}

function hideLoadingSkeleton() {
    // Skeletons are replaced by renderMenuCards; hook point for future fade-out transitions.
}

// ─── Main Async Controller ───────────────────────────────────────────────────

async function loadMenu(category = 'all') {
    const cached = getCachedMenu(category);
    if (cached) {
        applyFiltersAndRender();
        return;
    }

    showLoadingSkeleton();
    try {
        const data = await mockFetch(category);
        writeMenuCache(category, data);
        applyFiltersAndRender();
    } catch (err) {
        const container = document.getElementById("menu-items-container");
        if (container) {
            container.innerHTML = `
                <div class="load-error">
                    <i class="fa-solid fa-circle-exclamation"></i>
                    <p>${t('loadError')}</p>
                </div>`;
        }
        console.error('Menu load failed:', err);
    } finally {
        hideLoadingSkeleton();
    }
}

// ─── Render ──────────────────────────────────────────────────────────────────

function renderMenuCards(items) {
    const container = document.getElementById("menu-items-container");
    if (!container) return;

    container.innerHTML = items.map(item => {
        const label = item.translations[ACTIVE_LANG] || item.translations.en;
        const stars = Array(item.rating).fill('<i class="fa-solid fa-star"></i>').join('');
        return `
            <article class="item-card" data-action="open-product" data-id="${item.id}">
                <div class="img-container">
                    <img src="${item.image}" alt="${label}" loading="lazy">
                </div>
                <div class="card-info">
                    <div class="rating">${stars}</div>
                    <h3>${label}</h3>
                </div>
                <div class="card-footer">
                    <span class="price">$${item.price.toFixed(2)}</span>
                    <button type="button" class="quick-add-btn icon-circle-btn" data-id="${item.id}" aria-label="${t('viewProduct')}"><i class="fa-solid fa-plus" aria-hidden="true"></i></button>
                </div>
            </article>
        `;
    }).join('');
}

// ─── Search & Filter ─────────────────────────────────────────────────────────

function normalizeSearchText(str) {
    return str.trim().toLowerCase();
}

function itemMatchesSearch(item, query, lang) {
    if (!query) return true;
    const label = item.translations[lang] || item.translations.en;
    const desc = item.descriptions?.[lang] || item.descriptions?.en || '';
    return normalizeSearchText(label).includes(query)
        || normalizeSearchText(desc).includes(query);
}

function getFilteredMenuItems() {
    const query = normalizeSearchText(activeSearchQuery);
    let items = query
        ? mockMenuData
        : (activeCategory === 'all'
            ? mockMenuData
            : mockMenuData.filter(item => item.category === activeCategory));

    if (query) {
        items = items.filter(item => itemMatchesSearch(item, query, ACTIVE_LANG));
    }
    return items;
}

function setActiveCategoryTab(category) {
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });
}

function updateSearchClearButton() {
    const clearBtn = document.getElementById('menuSearchClear');
    const input = document.getElementById('menuSearchInput');
    if (clearBtn && input) {
        clearBtn.hidden = !input.value.trim();
    }
}

function renderNoSearchResults() {
    const container = document.getElementById('menu-items-container');
    if (!container) return;
    container.innerHTML = `
        <div class="no-search-results">
            <i class="fa-solid fa-magnifying-glass"></i>
            <p>${t('searchNoResults')}</p>
        </div>`;
}

function applyFiltersAndRender() {
    const items = getFilteredMenuItems();
    const query = normalizeSearchText(activeSearchQuery);

    if (items.length === 0 && query) {
        renderNoSearchResults();
        return;
    }
    renderMenuCards(items);
}

function clearSearch(restoreCategory = true) {
    const input = document.getElementById('menuSearchInput');
    if (input) input.value = '';
    activeSearchQuery = '';
    updateSearchClearButton();

    if (restoreCategory) {
        activeCategory = categoryBeforeSearch;
        setActiveCategoryTab(categoryBeforeSearch);
    }

    applyFiltersAndRender();
}

function handleSearchInput() {
    const input = document.getElementById('menuSearchInput');
    if (!input) return;

    const query = input.value;
    const normalized = normalizeSearchText(query);
    const wasSearching = normalizeSearchText(activeSearchQuery).length > 0;

    if (normalized && !wasSearching) {
        categoryBeforeSearch = activeCategory;
    }

    activeSearchQuery = query;
    updateSearchClearButton();

    if (normalized) {
        document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    } else {
        activeCategory = categoryBeforeSearch;
        setActiveCategoryTab(categoryBeforeSearch);
    }

    applyFiltersAndRender();
}

let searchDebounceTimer = null;

function setupSearch() {
    const input = document.getElementById('menuSearchInput');
    const clearBtn = document.getElementById('menuSearchClear');
    if (!input) return;

    input.addEventListener('input', () => {
        clearTimeout(searchDebounceTimer);
        searchDebounceTimer = setTimeout(handleSearchInput, 250);
    });

    clearBtn?.addEventListener('click', () => clearSearch(true));

    input.addEventListener('search', () => {
        if (!input.value) clearSearch(true);
    });
}

function filterMenu(category, event) {
    const input = document.getElementById('menuSearchInput');
    if (input) input.value = '';
    activeSearchQuery = '';
    updateSearchClearButton();

    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
    activeCategory = category;
    categoryBeforeSearch = category;
    loadMenu(category);
}

const MenuComponent = {
    refresh() { applyFiltersAndRender(); },
    load(category) { return loadMenu(category); },
    setup() { setupSearch(); },
    filter(category, event) { filterMenu(category, event); }
};

// ─── Cart Panel ──────────────────────────────────────────────────────────────

function toggleCartPanel(isOpen) {
    const sidebar = document.getElementById("cartSidebar");
    const overlay = document.getElementById("cartOverlay");
    if (isOpen) {
        sidebar.classList.add("open");
        overlay.classList.add("open");
    } else {
        sidebar.classList.remove("open");
        overlay.classList.remove("open");
    }
    updateBackToTopButton();
}

// ─── Navigation (Bottom Nav + Desktop Tab Bar) ───────────────────────────────

// All routable SPA views. Renamed from BOTTOM_NAV_VIEWS to reflect that both
// the mobile bottom nav and the desktop tab bar share the same view set.
const APP_VIEWS = ['menu', 'offers', 'cart', 'orders'];

/**
 * Unified view-switcher used by BOTH the mobile bottom nav and the desktop
 * tab bar. On desktop the 'cart' view is intentionally skipped — cart
 * interaction stays in the sidebar drawer.
 */
function switchView(viewName) {
    const bottomNav  = document.getElementById('bottom-nav');
    const isDesktop  = !bottomNav || getComputedStyle(bottomNav).display === 'none';

    // On desktop, cart is handled by the sidebar drawer — skip view toggle.
    if (isDesktop && viewName === 'cart') return;

    // Show the requested view, hide all others.
    APP_VIEWS.forEach(v => {
        const el = document.getElementById(`${v}-view`);
        if (el) el.hidden = v !== viewName;
    });

    if (viewName === 'orders') renderMyOrders();

    // Sync mobile bottom nav active state.
    if (bottomNav) {
        bottomNav.querySelectorAll('.nav-tab').forEach(tab => {
            const active = tab.dataset.view === viewName;
            tab.classList.toggle('active', active);
            active ? tab.setAttribute('aria-current', 'page') : tab.removeAttribute('aria-current');
        });
    }

    // Sync desktop nav active state.
    document.querySelectorAll('.dmenu-desktop-tabs .dmenu-tab').forEach(tab => {
        const active = tab.dataset.view === viewName;
        tab.classList.toggle('dmenu-tab--active', active);
        active ? tab.setAttribute('aria-current', 'page') : tab.removeAttribute('aria-current');
    });

    // Close the sidebar drawer unless the user is going to cart.
    if (viewName !== 'cart') toggleCartPanel(false);

    // Instant scroll — no smooth behaviour for snappier desktop feel.
    window.scrollTo({ top: 0 });
}

function initBottomNav() {
    const nav = document.getElementById('bottom-nav');
    if (!nav) return;

    nav.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const viewName = tab.dataset.view;
            switchView(viewName);
            history.pushState({ view: viewName }, '', `#${viewName}`);
        });
    });

    // Wire up the cart-view items delegation.
    const cartViewItems = document.getElementById('cart-view-items');
    if (cartViewItems) {
        cartViewItems.addEventListener('click', (e) => {
            const btn = e.target.closest('[data-action]');
            if (!btn) return;
            const lineKey = btn.dataset.lineKey;
            if (btn.dataset.action === 'qty-increase') changeQuantity(lineKey,  1);
            if (btn.dataset.action === 'qty-decrease') changeQuantity(lineKey, -1);
            if (btn.dataset.action === 'remove-item')  removeFromBasket(lineKey);
        });
    }
}

/**
 * Initialises the desktop tab bar. Attaches click listeners, pushes history
 * state, and handles browser back/forward + deep-link URL hashes — mirroring
 * the same SPA routing behaviour as the mobile bottom nav.
 */
function initDesktopNav() {
    const nav = document.querySelector('.dmenu-desktop-tabs');
    if (!nav) return;

    nav.querySelectorAll('.dmenu-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const viewName = tab.dataset.view;
            switchView(viewName);
            history.pushState({ view: viewName }, '', `#${viewName}`);
        });
    });

    // Hardware/browser back-forward button support (shared with mobile nav).
    window.addEventListener('popstate', (e) => {
        switchView(e.state?.view ?? 'menu');
    });

    // Restore view from URL hash on initial load (e.g. shared links, refresh).
    const hashView = location.hash.slice(1);
    if (APP_VIEWS.includes(hashView)) {
        switchView(hashView);
        history.replaceState({ view: hashView }, '', `#${hashView}`);
    }
}

// ─── Modifier Templates ──────────────────────────────────────────────────────

function getTemplatesForProduct(product) {
    const ids = product.modifierTemplateIds || [];
    const templates = ids.map(id => mockModifierTemplates[id]).filter(Boolean);
    return templates.sort((a, b) => {
        const aRemove = (a.templateType || 'add') === 'remove' ? 0 : 1;
        const bRemove = (b.templateType || 'add') === 'remove' ? 0 : 1;
        return aRemove - bRemove;
    });
}

function getProductDescription(product) {
    return product.descriptions?.[ACTIVE_LANG] || product.descriptions?.en || '';
}

function getModifierLabel(option) {
    return option.translations[ACTIVE_LANG] || option.translations.en;
}

function getTemplateLabel(template) {
    return template.translations[ACTIVE_LANG] || template.translations.en;
}

function formatModifierOptionPrice(price) {
    if (price === 0) return t('modifierFree');
    if (price < 0) return `-$${Math.abs(price).toFixed(2)}`;
    return `+$${price.toFixed(2)}`;
}

function getModifierHint(template) {
    const templateType = template.templateType || 'add';
    if (templateType === 'remove') {
        if (template.maxCount > 0 && template.maxCount !== -1) {
            return t('modifierRemoveUpTo').replace('{n}', template.maxCount);
        }
        return t('modifierRemoveOptional');
    }
    if (!template.multiSelect && template.minCount >= 1) {
        return t('modifierChooseOne');
    }
    if (template.multiSelect && template.minCount === 0 && template.maxCount > 0) {
        return t('modifierChooseUpTo').replace('{n}', template.maxCount);
    }
    if (template.multiSelect && template.minCount === 0 && template.maxCount === -1) {
        return t('modifierOptional');
    }
    if (template.minCount > 0) {
        return t('modifierRequired');
    }
    return t('modifierOptional');
}

function initProductModalSelections(product) {
    productModalSelections = {};
    getTemplatesForProduct(product).forEach(template => {
        productModalSelections[template.id] = new Set();
    });
}

function getSelectedCountForTemplate(templateId) {
    return productModalSelections[templateId]?.size || 0;
}

function getSelectedModifiers(product) {
    const selected = [];
    getTemplatesForProduct(product).forEach(template => {
        const optionIds = productModalSelections[template.id] || new Set();
        const templateType = template.templateType || 'add';
        const isRemoval = templateType === 'remove';
        optionIds.forEach(optionId => {
            const option = template.options.find(o => o.id === optionId);
            if (!option) return;
            selected.push({
                templateId: template.id,
                modifierId: option.id,
                materialId: option.materialId,
                price: option.price,
                label: getModifierLabel(option),
                type: templateType,
                isRemoval
            });
        });
    });
    return selected;
}

function computeUnitPrice(product, selectedModifiers) {
    const mods = selectedModifiers ?? getSelectedModifiers(product);
    const modifierTotal = mods
        .filter(m => !m.isRemoval)
        .reduce((sum, m) => sum + m.price, 0);
    return product.price + modifierTotal;
}

function buildLineKey(productId, selectedModifiers, notes = '') {
    const modIds = selectedModifiers.map(m => m.modifierId).sort().join(',');
    const notesKey = notes.replace(/\s+/g, ' ').toLowerCase();
    return `${productId}|${modIds}|${notesKey}`;
}

function groupModifiers(selectedModifiers) {
    if (!selectedModifiers?.length) return { additions: [], removals: [] };
    return {
        additions: selectedModifiers.filter(m => !m.isRemoval),
        removals:  selectedModifiers.filter(m =>  m.isRemoval)
    };
}

function clearModifierError() {
    const errorEl = document.getElementById('productModalModifierError');
    if (errorEl) {
        errorEl.hidden = true;
        errorEl.textContent = '';
    }
}

function showModifierError(message) {
    showToast(message, 'error');
}

// ─── Toast Notifications ──────────────────────────────────────────────────────

const TOAST_ICONS = {
    error:   'fa-circle-exclamation',
    success: 'fa-circle-check',
    warning: 'fa-triangle-exclamation',
    info:    'fa-circle-info'
};

const MAX_TOASTS = 3;

function showToast(message, type = 'error', duration = 3500) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const existing = container.querySelectorAll('.toast');
    if (existing.length >= MAX_TOASTS) {
        dismissToast(existing[0]);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.setAttribute('role', type === 'error' ? 'alert' : 'status');
    toast.innerHTML = `
        <i class="fa-solid ${TOAST_ICONS[type] || TOAST_ICONS.info} toast-icon" aria-hidden="true"></i>
        <span>${message}</span>`;

    container.appendChild(toast);

    const timer = setTimeout(() => dismissToast(toast), duration);
    toast.addEventListener('click', () => { clearTimeout(timer); dismissToast(toast); });
}

function dismissToast(toast) {
    if (!toast || toast.classList.contains('removing')) return;
    toast.classList.add('removing');
    toast.addEventListener('animationend', () => toast.remove(), { once: true });
}

function validateModifierSelection(product) {
    for (const template of getTemplatesForProduct(product)) {
        const count = getSelectedCountForTemplate(template.id);
        const name = getTemplateLabel(template);

        if (template.minCount > 0 && count < template.minCount) {
            return {
                valid: false,
                error: t('modifierMinError').replace('{n}', template.minCount).replace('{name}', name)
            };
        }
        if (template.maxCount !== -1 && count > template.maxCount) {
            return {
                valid: false,
                error: t('modifierMaxError').replace('{n}', template.maxCount).replace('{name}', name)
            };
        }
    }
    return { valid: true, error: '' };
}

function renderProductModalModifiers(product, preserveSelections = false) {
    const container = document.getElementById('productModalModifiers');
    if (!container) return;

    const templates = getTemplatesForProduct(product);
    if (templates.length === 0) {
        container.innerHTML = '';
        container.hidden = true;
        return;
    }

    container.hidden = false;
    if (!preserveSelections) {
        initProductModalSelections(product);
    }
    clearModifierError();

    container.innerHTML = templates.map(template => {
        const groupTitle = getTemplateLabel(template);
        const hint = getModifierHint(template);
        const inputType = template.multiSelect ? 'checkbox' : 'radio';
        const inputName = template.multiSelect ? '' : `modifier-${template.id}`;
        const isRemoval = (template.templateType || 'add') === 'remove';
        const groupClass = isRemoval ? 'modifier-group modifier-group--remove' : 'modifier-group';

        const optionsHtml = template.options.map(option => {
            const label = getModifierLabel(option);
            if (isRemoval) {
                return `
                <label class="modifier-option modifier-option--removal">
                    <input type="${inputType}"
                           name="${inputName}"
                           data-template-id="${template.id}"
                           data-option-id="${option.id}">
                    <span class="modifier-option-label">${label}</span>
                </label>`;
            }
            const priceLabel = formatModifierOptionPrice(option.price);
            const priceClass = option.price < 0
                ? 'modifier-option-price modifier-option-price--negative'
                : 'modifier-option-price';
            return `
                <label class="modifier-option">
                    <input type="${inputType}"
                           name="${inputName}"
                           data-template-id="${template.id}"
                           data-option-id="${option.id}">
                    <span class="modifier-option-label">${label}</span>
                    <span class="${priceClass}">${priceLabel}</span>
                </label>`;
        }).join('');

        return `
            <fieldset class="${groupClass}">
                <legend class="modifier-group-title">${groupTitle}</legend>
                <p class="modifier-hint">${hint}</p>
                <div class="modifier-options">${optionsHtml}</div>
            </fieldset>`;
    }).join('');

    container.querySelectorAll('input[data-template-id]').forEach(input => {
        const templateId = input.dataset.templateId;
        const optionId = input.dataset.optionId;
        input.checked = productModalSelections[templateId]?.has(optionId) || false;
    });
}

function syncSelectionFromInput(input) {
    const templateId = input.dataset.templateId;
    const optionId = input.dataset.optionId;
    const template = mockModifierTemplates[templateId];
    if (!template) return;

    if (!productModalSelections[templateId]) {
        productModalSelections[templateId] = new Set();
    }

    if (input.type === 'radio') {
        productModalSelections[templateId] = input.checked ? new Set([optionId]) : new Set();
    } else if (input.checked) {
        const set = productModalSelections[templateId];
        if (template.maxCount !== -1 && set.size >= template.maxCount) {
            input.checked = false;
            const name = getTemplateLabel(template);
            showModifierError(t('modifierMaxError').replace('{n}', template.maxCount).replace('{name}', name));
            return;
        }
        set.add(optionId);
    } else {
        productModalSelections[templateId].delete(optionId);
    }

    clearModifierError();
    updateProductModalPriceDisplay();
}

function updateProductModalPriceDisplay() {
    const product = mockMenuData.find(p => p.id === productModalId);
    if (!product) return;

    const unitPrice = computeUnitPrice(product);
    const total = unitPrice * productModalQty;
    const priceEl = document.getElementById('productModalPrice');
    const addPriceEl = document.getElementById('productModalAddPrice');

    if (priceEl) {
        priceEl.textContent = `$${product.price.toFixed(2)}`;
    }
    if (addPriceEl) {
        addPriceEl.textContent = ` · $${total.toFixed(2)}`;
    }
}

// ─── Basket Logic ────────────────────────────────────────────────────────────

function addToBasket(productId, qty = 1, selectedModifiers = [], notes = '') {
    const product = mockMenuData.find(p => p.id === productId);
    if (!product) return;

    const unitPrice = computeUnitPrice(product, selectedModifiers);
    const lineKey = buildLineKey(productId, selectedModifiers, notes);
    const existing = basket.find(item => item.lineKey === lineKey);

    if (existing) {
        existing.quantity += qty;
    } else {
        basket.push({
            lineKey,
            productId: product.id,
            id: product.id,
            basePrice: product.price,
            unitPrice,
            price: unitPrice,
            quantity: qty,
            notes,
            translations: product.translations,
            image: product.image,
            category: product.category,
            rating: product.rating,
            selectedModifiers: selectedModifiers.map(m => ({ ...m }))
        });
    }

    updateBasketUI();
    if (basket.length === 1 && existing === undefined) {
        openCartAddedModal();
    }
}

function changeQuantity(lineKey, amount) {
    const item = basket.find(p => p.lineKey === lineKey);
    if (!item) return;
    item.quantity += amount;
    if (item.quantity <= 0) {
        basket = basket.filter(p => p.lineKey !== lineKey);
    }
    updateBasketUI();
}

function removeFromBasket(lineKey) {
    basket = basket.filter(p => p.lineKey !== lineKey);
    updateBasketUI();
}

function clearBasket() {
    if (basket.length === 0) return;
    if (confirm(t('clearConfirm'))) {
        basket = [];
        updateBasketUI();
    }
}

function buildCartRowsHTML() {
    return basket.map(item => {
        const label = item.translations[ACTIVE_LANG] || item.translations.en;
        const { additions, removals } = groupModifiers(item.selectedModifiers);
        const addLine = additions.length
            ? `<span class="cart-row-modifiers cart-row-modifiers--add">+ ${additions.map(m => m.label).join(', ')}</span>`
            : '';
        const removeLine = removals.length
            ? `<span class="cart-row-modifiers cart-row-modifiers--remove">${t('without')}: ${removals.map(m => m.label).join(', ')}</span>`
            : '';
        const notesHtml = item.notes
            ? `<span class="cart-row-notes">${escapeHtml(item.notes)}</span>`
            : '';
        return `
        <div class="cart-row">
            <img class="cart-row-thumb" src="${item.image}" alt="${escapeHtml(label)}" loading="lazy">
            <div class="cart-row-details">
                <strong class="cart-row-title">${label}</strong>
                ${addLine}
                ${removeLine}
                ${notesHtml}
                <span class="cart-row-price">$${item.price.toFixed(2)}</span>
            </div>
            <div class="cart-row-stepper" role="group" aria-label="${t('quantity')}">
                <button type="button" class="cart-row-stepper-btn icon-circle-btn" data-action="qty-decrease" data-line-key="${item.lineKey}" aria-label="${t('decreaseQty')}"><i class="fa-solid fa-minus" aria-hidden="true"></i></button>
                <span class="cart-row-qty" aria-live="polite">${item.quantity}</span>
                <button type="button" class="cart-row-stepper-btn icon-circle-btn" data-action="qty-increase" data-line-key="${item.lineKey}" aria-label="${t('increaseQty')}"><i class="fa-solid fa-plus" aria-hidden="true"></i></button>
            </div>
            <button type="button" class="cart-row-delete" data-action="remove-item" data-line-key="${item.lineKey}" aria-label="${t('removeItem')}">
                <i class="fa-solid fa-trash-can" aria-hidden="true"></i>
            </button>
        </div>`;
    }).join('');
}

function updateBasketUI() {
    const wrapper          = document.getElementById("cart-items-wrapper");
    const countBadge       = document.getElementById("cart-count");
    const headerCountBadge = document.getElementById("header-cart-count");
    const subtotalText     = document.getElementById("subtotal-price");
    const totalText        = document.getElementById("total-price");

    // Cart-view (mobile full-page) counterparts
    const cvWrapper   = document.getElementById("cart-view-items");
    const cvCount     = document.getElementById("cart-view-count");
    const cvSubtotal  = document.getElementById("cart-view-subtotal");
    const cvTotal     = document.getElementById("cart-view-total");

    const totalItemsCount = basket.reduce((sum, item) => sum + item.quantity, 0);
    const countLabel = `${totalItemsCount} ${totalItemsCount !== 1 ? t('items') : t('item')}`;

    countBadge.innerText       = countLabel;
    headerCountBadge.innerText = totalItemsCount;
    if (cvCount) cvCount.innerText = countLabel;

    // ── Bottom nav badge sync ──────────────────────────────────
    const navBadge = document.getElementById('bottom-nav-cart-badge');
    if (navBadge) {
        const prev = parseInt(navBadge.textContent, 10) || 0;
        navBadge.textContent = totalItemsCount;
        navBadge.hidden = totalItemsCount === 0;
        // Update Cart tab accessible label
        const cartTab = document.querySelector('#bottom-nav [data-view="cart"]');
        if (cartTab) cartTab.setAttribute('aria-label', `Cart, ${countLabel}`);
        // Trigger pop animation only when count increases
        if (totalItemsCount > prev) {
            navBadge.classList.remove('pop');
            void navBadge.offsetWidth; // reflow to restart animation
            navBadge.classList.add('pop');
        }
    }

    if (basket.length === 0) {
        const [line1, line2] = t('emptyBasket').split('\n');
        const emptyHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-cookie-bite"></i>
                <p>${line1}<br>${line2}</p>
            </div>`;
        wrapper.innerHTML              = emptyHTML;
        if (cvWrapper) cvWrapper.innerHTML = emptyHTML;
        subtotalText.innerText         = "$0.00";
        totalText.innerText            = "$0.00";
        if (cvSubtotal) cvSubtotal.innerText = "$0.00";
        if (cvTotal)    cvTotal.innerText    = "$0.00";
        return;
    }

    const rowsHTML = buildCartRowsHTML();
    wrapper.innerHTML              = rowsHTML;
    if (cvWrapper) cvWrapper.innerHTML = rowsHTML;

    const totalAmount = basket.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    subtotalText.innerText         = `$${totalAmount.toFixed(2)}`;
    totalText.innerText            = `$${totalAmount.toFixed(2)}`;
    if (cvSubtotal) cvSubtotal.innerText = `$${totalAmount.toFixed(2)}`;
    if (cvTotal)    cvTotal.innerText    = `$${totalAmount.toFixed(2)}`;

    updateFloatingCartBar();
}

const BasketComponent = {
    refresh() { updateBasketUI(); },
    add(productId, qty, modifiers) { addToBasket(productId, qty, modifiers); },
    changeQuantity(lineKey, amount) { changeQuantity(lineKey, amount); },
    remove(lineKey) { removeFromBasket(lineKey); },
    clear() { clearBasket(); },
    getTotal() { return getBasketTotal(); },
    togglePanel(isOpen) { toggleCartPanel(isOpen); }
};

let _floatingCartTimer = null;
const FLOATING_CART_DURATION = 4000;

function hideFloatingCartBar() {
    const bar = document.getElementById('floatingCartBar');
    if (!bar) return;
    bar.classList.remove('visible');
    bar.addEventListener('transitionend', () => { bar.hidden = true; }, { once: true });
}

function updateFloatingCartBar() {
    const bar = document.getElementById('floatingCartBar');
    if (!bar) return;
    const countEl = document.getElementById('floatingCartCount');
    const totalEl = document.getElementById('floatingCartTotal');

    clearTimeout(_floatingCartTimer);

    if (basket.length === 0) {
        hideFloatingCartBar();
        return;
    }

    const count = basket.reduce((s, i) => s + i.quantity, 0);
    const total = getBasketTotal();
    if (countEl) countEl.textContent = `(${count})`;
    if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;

    bar.hidden = false;
    requestAnimationFrame(() => bar.classList.add('visible'));

    _floatingCartTimer = setTimeout(hideFloatingCartBar, FLOATING_CART_DURATION);
}

// ─── Product Detail Modal ────────────────────────────────────────────────────

function updateProductModalQtyDisplay() {
    const qtyEl = document.getElementById('productModalQty');
    if (qtyEl) qtyEl.textContent = productModalQty;
}

const ProductModalComponent = {
    refresh(preserveSelections = true) {
        if (productModalId == null) return;
        const product = mockMenuData.find(p => p.id === productModalId);
        if (!product) return;

        const label = product.translations[ACTIVE_LANG] || product.translations.en;
        document.getElementById('productModalTitle').textContent = label;
        document.getElementById('productModalImage').alt = label;
        const desc = getProductDescription(product);
        const descEl = document.getElementById('productModalDescription');
        if (descEl) {
            descEl.textContent = desc;
            descEl.hidden = !desc;
        }
        renderProductModalModifiers(product, preserveSelections);
        updateProductModalPriceDisplay();
        applyUIStrings();
    },

    open(id, triggerEl = null) {
        const product = mockMenuData.find(p => p.id === id);
        if (!product) return;

        productModalId = id;
        productModalQty = 1;
        productModalTrigger = triggerEl;

        const stars = Array(product.rating).fill('<i class="fa-solid fa-star"></i>').join('');

        document.getElementById('productModalImage').src = product.image;
        document.getElementById('productModalRating').innerHTML = stars;
        document.getElementById('productModalPrice').textContent = `$${product.price.toFixed(2)}`;
        this.refresh(false);
        updateProductModalQtyDisplay();

        const overlay = document.getElementById('productOverlay');
        const modal = document.getElementById('productModal');
        overlay.classList.add('open');
        modal.classList.add('open');
        overlay.setAttribute('aria-hidden', 'false');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('product-modal-open');
        modal.querySelector('.product-close-btn').focus();
        updateBackToTopButton();
    },

    close() {
        const overlay = document.getElementById('productOverlay');
        const modal = document.getElementById('productModal');
        overlay.classList.remove('open');
        modal.classList.remove('open');
        overlay.setAttribute('aria-hidden', 'true');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('product-modal-open');

        if (productModalTrigger && typeof productModalTrigger.focus === 'function') {
            productModalTrigger.focus();
        }
        productModalId = null;
        productModalQty = 1;
        productModalTrigger = null;
        productModalSelections = {};
        clearModifierError();
        const modifiersEl = document.getElementById('productModalModifiers');
        if (modifiersEl) {
            modifiersEl.innerHTML = '';
            modifiersEl.hidden = true;
        }
        const addPriceEl = document.getElementById('productModalAddPrice');
        if (addPriceEl) addPriceEl.textContent = '';
        const descEl = document.getElementById('productModalDescription');
        if (descEl) {
            descEl.textContent = '';
            descEl.hidden = true;
        }
        const notesEl = document.getElementById('productModalNotes');
        if (notesEl) notesEl.value = '';
        updateBackToTopButton();
    }
};

function openProductModal(id, triggerEl = null) {
    ProductModalComponent.open(id, triggerEl);
}

function closeProductModal() {
    ProductModalComponent.close();
}

function changeProductModalQty(delta) {
    productModalQty = Math.max(1, productModalQty + delta);
    updateProductModalQtyDisplay();
    updateProductModalPriceDisplay();
}

function addProductModalToBasket() {
    if (productModalId == null) return;
    const product = mockMenuData.find(p => p.id === productModalId);
    if (!product) return;

    const validation = validateModifierSelection(product);
    if (!validation.valid) {
        showModifierError(validation.error);
        return;
    }

    const selectedModifiers = getSelectedModifiers(product);
    const notes = document.getElementById('productModalNotes')?.value.trim() || '';
    addToBasket(productModalId, productModalQty, selectedModifiers, notes);
    closeProductModal();
}

function setupProductModal() {
    document.addEventListener('change', (e) => {
        const input = e.target;
        if (!input.closest('#productModalModifiers')) return;
        if (input.matches('input[type="checkbox"], input[type="radio"]')) {
            syncSelectionFromInput(input);
        }
    });

    document.addEventListener('click', (e) => {
        const actionEl = e.target.closest('[data-action]');
        if (!actionEl) return;

        const modal = document.getElementById('productModal');
        if (!modal.classList.contains('open')) return;

        const action = actionEl.dataset.action;
        if (action === 'close-product') {
            if (e.target.id === 'productOverlay' || actionEl.closest('#productModal')) {
                closeProductModal();
            }
        }
        if (action === 'product-qty-increase') changeProductModalQty(1);
        if (action === 'product-qty-decrease') changeProductModalQty(-1);
        if (action === 'product-add-to-cart') addProductModalToBasket();
    });
}

// ─── Checkout / Order API ────────────────────────────────────────────────────

function getBasketTotal() {
    return basket.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function renderCheckoutSummary() {
    const summaryEl = document.getElementById('checkoutSummary');
    if (!summaryEl) return;

    const lines = basket.map(item => {
        const label = item.translations[ACTIVE_LANG] || item.translations.en;
        const { additions, removals } = groupModifiers(item.selectedModifiers);
        const addLine  = additions.length ? `<small class="checkout-summary-mods checkout-summary-mods--add">+ ${additions.map(m => m.label).join(', ')}</small>` : '';
        const remLine  = removals.length  ? `<small class="checkout-summary-mods checkout-summary-mods--remove">${t('without')}: ${removals.map(m => m.label).join(', ')}</small>` : '';
        const modsHtml = (addLine || remLine) ? `<br>${addLine}${remLine ? (addLine ? '<br>' : '') + remLine : ''}` : '';
        const notesHtml = item.notes
            ? `<br><small class="checkout-summary-notes">${escapeHtml(item.notes)}</small>`
            : '';
        const lineTotal = (item.price * item.quantity).toFixed(2);
        return `<div class="checkout-summary-row">
            <span>${label} × ${item.quantity}${modsHtml}${notesHtml}</span>
            <span>$${lineTotal}</span>
        </div>`;
    }).join('');

    summaryEl.innerHTML = lines + `
        <div class="checkout-summary-row checkout-summary-total">
            <span>${t('totalAmount')}</span>
            <span>$${getBasketTotal().toFixed(2)}</span>
        </div>`;
}

const CheckoutComponent = {
    refresh() {
        const modal = document.getElementById('checkoutModal');
        if (modal?.classList.contains('open')) {
            renderCheckoutSummary();
        }
    }
};

function buildOrderPayload() {
    const nameEl = document.getElementById('checkoutName');
    const phoneEl = document.getElementById('checkoutPhone');
    const notesEl = document.getElementById('checkoutNotes');

    return {
        lang: ACTIVE_LANG,
        customer: {
            name: nameEl.value.trim(),
            phone: phoneEl.value.trim(),
            notes: notesEl.value.trim()
        },
        items: basket.map(item => ({
            id: item.productId,
            quantity: item.quantity,
            basePrice: item.basePrice,
            unitPrice: item.unitPrice,
            price: item.price,
            title: item.translations[ACTIVE_LANG] || item.translations.en,
            notes: item.notes || '',
            modifiers: (item.selectedModifiers || []).map(m => ({
                templateId: m.templateId,
                modifierId: m.modifierId,
                materialId: m.materialId,
                price: m.price,
                name: m.label,
                type: m.type || (m.isRemoval ? 'remove' : 'add')
            }))
        })),
        total: getBasketTotal()
    };
}

function mockSubmitOrder(payload) {
    // Future: return fetch('https://api.example.com/orders', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(payload)
    // }).then(r => { if (!r.ok) throw new Error(); return r.json(); });
    return new Promise((resolve) => {
        setTimeout(() => resolve({ orderId: 'ORD-' + Date.now() }), 1000);
    });
}

function resetCheckoutModalState() {
    const errorEl = document.getElementById('checkoutError');
    const successEl = document.getElementById('checkoutSuccess');
    const form = document.getElementById('checkoutForm');
    const submitBtn = document.getElementById('checkoutSubmitBtn');

    if (errorEl) {
        errorEl.hidden = true;
        errorEl.textContent = '';
    }
    if (successEl) successEl.hidden = true;
    if (form) form.reset();
    if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.querySelector('span').textContent = t('checkoutSubmit');
    }
}

function openCheckoutModal() {
    if (basket.length === 0) {
        showToast(t('emptyCartAlert'), 'warning');
        return;
    }

    resetCheckoutModalState();
    renderCheckoutSummary();
    applyUIStrings();

    const overlay = document.getElementById('checkoutOverlay');
    const modal = document.getElementById('checkoutModal');
    overlay.classList.add('open');
    modal.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('checkout-modal-open');
    document.getElementById('checkoutName').focus();
    updateBackToTopButton();
}

function closeCheckoutModal() {
    const overlay = document.getElementById('checkoutOverlay');
    const modal = document.getElementById('checkoutModal');
    overlay.classList.remove('open');
    modal.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('checkout-modal-open');
    resetCheckoutModalState();
    updateBackToTopButton();
}

function validateCheckoutForm() {
    const name = document.getElementById('checkoutName').value.trim();
    const phone = document.getElementById('checkoutPhone').value.trim();
    const errorEl = document.getElementById('checkoutError');

    if (!name) {
        errorEl.textContent = t('checkoutNameRequired');
        errorEl.hidden = false;
        showToast(t('checkoutNameRequired'), 'error');
        return false;
    }
    if (!phone) {
        errorEl.textContent = t('checkoutPhoneRequired');
        errorEl.hidden = false;
        showToast(t('checkoutPhoneRequired'), 'error');
        return false;
    }
    const phoneDigits = phone.replace(/\D/g, '');
    if (phoneDigits.length < 7) {
        errorEl.textContent = t('checkoutPhoneInvalid');
        errorEl.hidden = false;
        showToast(t('checkoutPhoneInvalid'), 'error');
        return false;
    }
    errorEl.hidden = true;
    return true;
}

async function submitOrder() {
    if (basket.length === 0) {
        showToast(t('emptyCartAlert'), 'warning');
        return;
    }
    if (!validateCheckoutForm()) return;

    const submitBtn = document.getElementById('checkoutSubmitBtn');
    const errorEl = document.getElementById('checkoutError');
    const successEl = document.getElementById('checkoutSuccess');

    submitBtn.disabled = true;
    submitBtn.querySelector('span').textContent = t('checkoutSubmitting');
    errorEl.hidden = true;
    successEl.hidden = true;

    try {
        const payload = buildOrderPayload();
        const result  = await mockSubmitOrder(payload);

        OrderService.save({
            orderId:    result.orderId ?? ('ORD-' + Date.now()),
            date:       new Date().toISOString(),
            status:     OrderService.ORDER_STATUS.CONFIRMED,
            customer:   payload.customer,
            items:      payload.items,
            totalPrice: payload.total,
        });

        successEl.hidden = false;
        successEl.textContent = t('checkoutSuccess');
        basket = [];
        updateBasketUI();

        setTimeout(() => {
            closeCheckoutModal();
            toggleCartPanel(false);
        }, 2000);
    } catch (err) {
        errorEl.textContent = t('checkoutError');
        errorEl.hidden = false;
        submitBtn.disabled = false;
        submitBtn.querySelector('span').textContent = t('checkoutSubmit');
        console.error('Order submit failed:', err);
    }
}

// ─── Orders View ─────────────────────────────────────────────────────────────

function renderMyOrders() {
    const container = document.getElementById('orders-list');
    if (!container) return;

    const orders = OrderService.getAll();

    if (orders.length === 0) {
        container.innerHTML = `
            <div class="view-placeholder">
                <i class="fa-solid fa-receipt" aria-hidden="true"></i>
                <h2>${t('myOrders')}</h2>
                <p>${t('ordersEmpty')}</p>
            </div>`;
        return;
    }

    container.innerHTML = orders.map(order => createOrderCard(order)).join('');
}

function createOrderCard(order) {
    const locale      = ACTIVE_LANG === 'ar' ? 'ar-SA' : 'en-US';
    const dateObj     = new Date(order.date);
    const formattedDate = dateObj.toLocaleDateString(locale, { day: 'numeric', month: 'short', year: 'numeric' });
    const formattedTime = dateObj.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' });
    const itemCount   = order.items.reduce((sum, item) => sum + item.quantity, 0);
    const countLabel  = itemCount === 1 ? t('item') : t('items');

    return `<article class="order-card" data-action="view-order" data-order-id="${escapeHtml(order.orderId)}">
        <div class="order-card-header">
            <div class="order-card-id">
                <i class="fa-solid fa-receipt" aria-hidden="true"></i>
                <span>${escapeHtml(order.orderId)}</span>
            </div>
            ${createStatusBadge(order.status)}
        </div>
        <div class="order-card-meta">
            <span>${formattedDate} · ${formattedTime}</span>
            <span>${itemCount} ${countLabel}</span>
        </div>
        <div class="order-card-footer">
            <span class="order-card-total">$${order.totalPrice.toFixed(2)}</span>
            <button class="order-card-detail-btn" type="button"
                    data-action="view-order" data-order-id="${escapeHtml(order.orderId)}"
                    aria-label="${t('viewDetails')}">
                ${t('viewDetails')} <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
            </button>
        </div>
    </article>`;
}

function createStatusBadge(status) {
    const meta  = STATUS_META[status] ?? { i18nKey: null, cssModifier: status };
    const label = meta.i18nKey ? t(meta.i18nKey) : status;
    return `<span class="order-status-badge order-status-badge--${escapeHtml(meta.cssModifier)}">${escapeHtml(label)}</span>`;
}

// ─── Order Detail Modal ───────────────────────────────────────────────────────

function openOrderDetailModal(orderId) {
    const order = OrderService.findById(orderId);
    if (!order) return;

    renderOrderDetail(order);
    applyUIStrings();

    const overlay = document.getElementById('orderDetailOverlay');
    const modal   = document.getElementById('orderDetailModal');
    overlay.classList.add('open');
    modal.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('order-detail-modal-open');
}

function closeOrderDetailModal() {
    const overlay = document.getElementById('orderDetailOverlay');
    const modal   = document.getElementById('orderDetailModal');
    overlay.classList.remove('open');
    modal.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('order-detail-modal-open');
}

function renderOrderDetail(order) {
    const content = document.getElementById('orderDetailContent');
    if (!content) return;
    content.innerHTML =
        renderOrderHeader(order) +
        renderCustomerInfo(order.customer) +
        renderOrderItems(order.items) +
        renderOrderSummary(order.totalPrice);
}

function renderOrderHeader(order) {
    const locale    = ACTIVE_LANG === 'ar' ? 'ar-SA' : 'en-US';
    const dateObj   = new Date(order.date);
    const formatted = dateObj.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
                    + ' · '
                    + dateObj.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' });

    return `<div class="order-detail-receipt-header">
        <div class="order-detail-receipt-id">
            <i class="fa-solid fa-receipt" aria-hidden="true"></i>
            <strong>${escapeHtml(order.orderId)}</strong>
            ${createStatusBadge(order.status)}
        </div>
        <p class="order-detail-receipt-date">${formatted}</p>
    </div>`;
}

function renderCustomerInfo(customer) {
    if (!customer?.name && !customer?.phone) return '';
    return `<div class="order-detail-receipt-section">
        <h4 class="order-detail-receipt-section-title">${t('orderCustomer')}</h4>
        ${customer.name  ? `<p class="order-detail-receipt-meta-row"><i class="fa-solid fa-user" aria-hidden="true"></i> ${escapeHtml(customer.name)}</p>` : ''}
        ${customer.phone ? `<p class="order-detail-receipt-meta-row"><i class="fa-solid fa-phone" aria-hidden="true"></i> ${escapeHtml(customer.phone)}</p>` : ''}
        ${customer.notes ? `<p class="order-detail-receipt-meta-row order-detail-receipt-customer-notes"><i class="fa-solid fa-note-sticky" aria-hidden="true"></i> ${escapeHtml(customer.notes)}</p>` : ''}
    </div>`;
}

function renderOrderItems(items) {
    if (!items?.length) return '';

    const rows = items.map(item => {
        const additions = (item.modifiers || []).filter(m => m.type !== 'remove');
        const removals  = (item.modifiers || []).filter(m => m.type === 'remove');
        const addLine   = additions.length
            ? `<small class="checkout-summary-mods checkout-summary-mods--add">+ ${additions.map(m => escapeHtml(m.name)).join(', ')}</small>`
            : '';
        const remLine   = removals.length
            ? `<small class="checkout-summary-mods checkout-summary-mods--remove">${t('without')}: ${removals.map(m => escapeHtml(m.name)).join(', ')}</small>`
            : '';
        const modsHtml  = (addLine || remLine)
            ? `<span class="order-detail-mods">${addLine}${remLine ? (addLine ? '<br>' : '') + remLine : ''}</span>`
            : '';
        const notesHtml = item.notes
            ? `<small class="checkout-summary-notes">${escapeHtml(item.notes)}</small>`
            : '';
        const lineTotal = (item.price * item.quantity).toFixed(2);

        return `<div class="order-detail-receipt-row">
            <span class="order-detail-receipt-item-name">${escapeHtml(item.title)} × ${item.quantity}${modsHtml}${notesHtml}</span>
            <span class="order-detail-receipt-item-price">$${lineTotal}</span>
        </div>`;
    }).join('');

    return `<div class="order-detail-receipt-section">
        <h4 class="order-detail-receipt-section-title">${t('orderItems')}</h4>
        <div class="order-detail-receipt-list">${rows}</div>
    </div>`;
}

function renderOrderSummary(totalPrice) {
    return `<div class="order-detail-receipt-total-row">
        <span>${t('orderTotal')}</span>
        <span>$${totalPrice.toFixed(2)}</span>
    </div>`;
}

// ─── Cart Added Modal ─────────────────────────────────────────────────────────

function openCartAddedModal() {
    applyUIStrings();
    const overlay = document.getElementById('cartAddedOverlay');
    const modal = document.getElementById('cartAddedModal');
    overlay.classList.add('open');
    modal.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    modal.setAttribute('aria-hidden', 'false');
}

function closeCartAddedModal() {
    const overlay = document.getElementById('cartAddedOverlay');
    const modal = document.getElementById('cartAddedModal');
    overlay.classList.remove('open');
    modal.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    modal.setAttribute('aria-hidden', 'true');
}

function setupCheckout() {
    document.getElementById('orderNowBtn').addEventListener('click', openCheckoutModal);

    document.addEventListener('click', (e) => {
        const actionEl = e.target.closest('[data-action]');
        if (!actionEl) return;

        if (actionEl.dataset.action === 'close-checkout') {
            if (e.target.id === 'checkoutOverlay' || actionEl.closest('#checkoutModal')) {
                closeCheckoutModal();
            }
        }
        if (actionEl.dataset.action === 'submit-order') {
            submitOrder();
        }
        if (actionEl.dataset.action === 'close-cart-added') {
            if (e.target.id === 'cartAddedOverlay') {
                closeCartAddedModal();
            }
        }
        if (actionEl.dataset.action === 'cart-added-continue') {
            closeCartAddedModal();
        }
        if (actionEl.dataset.action === 'cart-added-checkout') {
            closeCartAddedModal();
            openCheckoutModal();
        }
        if (actionEl.dataset.action === 'view-order') {
            openOrderDetailModal(actionEl.dataset.orderId);
        }
        if (actionEl.dataset.action === 'close-order-detail') {
            closeOrderDetailModal();
        }
    });

    document.getElementById('orderDetailOverlay')?.addEventListener('click', closeOrderDetailModal);

    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') return;
        if (document.getElementById('orderDetailModal')?.classList.contains('open')) {
            closeOrderDetailModal();
            return;
        }
        if (document.getElementById('cartAddedModal').classList.contains('open')) {
            closeCartAddedModal();
            return;
        }
        if (document.getElementById('productModal').classList.contains('open')) {
            closeProductModal();
            return;
        }
        if (document.getElementById('checkoutModal').classList.contains('open')) {
            closeCheckoutModal();
        }
    });
}

// ─── Event Delegation ────────────────────────────────────────────────────────

function setupEventDelegation() {
    document.getElementById('menu-items-container').addEventListener('click', (e) => {
        const card = e.target.closest('[data-action="open-product"]');
        if (!card) return;

        const trigger = e.target.closest('.quick-add-btn') || card;
        openProductModal(parseInt(card.dataset.id, 10), trigger);
    });

    document.getElementById('cart-items-wrapper').addEventListener('click', (e) => {
        const btn = e.target.closest('[data-action]');
        if (!btn) return;
        const lineKey = btn.dataset.lineKey;
        if (btn.dataset.action === 'qty-increase') changeQuantity(lineKey,  1);
        if (btn.dataset.action === 'qty-decrease') changeQuantity(lineKey, -1);
        if (btn.dataset.action === 'remove-item')  removeFromBasket(lineKey);
    });
}

// ─── Brand Logo & Sticky Bar ─────────────────────────────────────────────────

function showBrandWordmark() {
    const img = document.getElementById('brandLogo');
    const wordmark = document.getElementById('brandWordmark');
    if (img) img.hidden = true;
    if (wordmark) wordmark.hidden = false;
}

function initBrandLogo() {
    const img = document.getElementById('brandLogo');
    if (!img) return;

    img.alt = t('restaurantName');
    if (img.complete && img.naturalWidth === 0) {
        showBrandWordmark();
    }
}

function setupStickyBar() {
    const bar = document.getElementById('menuStickyBar');
    if (!bar) return;

    const onScroll = () => {
        bar.classList.toggle('is-scrolled', window.scrollY > 8);
        updateBackToTopButton();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

const BACK_TO_TOP_THRESHOLD = 300;

function isOverlayOpen() {
    return document.getElementById('cartOverlay')?.classList.contains('open')
        || document.getElementById('checkoutModal')?.classList.contains('open')
        || document.getElementById('productModal')?.classList.contains('open')
        || document.getElementById('cartAddedModal')?.classList.contains('open')
        || document.getElementById('orderDetailModal')?.classList.contains('open');
}

function updateBackToTopButton() {
    const btn = document.getElementById('backToTopBtn');
    if (!btn) return;
    const show = window.scrollY > BACK_TO_TOP_THRESHOLD && !isOverlayOpen();
    btn.classList.toggle('is-visible', show);
    btn.hidden = !show;
    positionBackToTopFab();
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const DESKTOP_BREAKPOINT = 1025;

function positionBackToTopFab() {
    const btn = document.getElementById('backToTopBtn');
    const menu = document.querySelector('.menu-content');
    if (!btn) return;

    btn.style.left = '';
    btn.style.right = '';

    if (window.innerWidth < DESKTOP_BREAKPOINT || !menu) {
        return;
    }

    const rect = menu.getBoundingClientRect();
    const inset = 20;

    if (document.documentElement.dir === 'rtl') {
        btn.style.left = `${rect.left + inset}px`;
    } else {
        btn.style.right = `${window.innerWidth - rect.right + inset}px`;
    }
}

function setupBackToTop() {
    const btn = document.getElementById('backToTopBtn');
    if (!btn) return;
    btn.addEventListener('click', scrollToTop);
    window.addEventListener('resize', positionBackToTopFab, { passive: true });
    updateBackToTopButton();
}

// ─── Init ────────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
    setupEventDelegation();
    MenuComponent.setup();
    setupProductModal();
    setupCheckout();
    I18n.applyUIStrings();
    initBrandLogo();
    setupStickyBar();
    setupBackToTop();
    initBottomNav();
    initDesktopNav();
    MenuComponent.load();

    document.getElementById('floatingCartBar')?.addEventListener('click', () => {
        clearTimeout(_floatingCartTimer);
        hideFloatingCartBar();
        switchView('cart');
    });
});
