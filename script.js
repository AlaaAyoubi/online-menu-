// ─── Language & i18n ────────────────────────────────────────────────────────

let ACTIVE_LANG = 'en';
let activeCategory = 'all';

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
        items: 'items',
        item: 'item',
        loadError: 'Failed to load menu. Please try again.',
        clearConfirm: 'Are you sure you want to empty your basket?',
        emptyCartAlert: 'Please add items to your basket before checking out!'
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
        items: 'أصناف',
        item: 'صنف',
        loadError: 'فشل تحميل القائمة. حاول مجدداً.',
        clearConfirm: 'هل أنت متأكد من تفريغ السلة؟',
        emptyCartAlert: 'يرجى إضافة أصناف قبل تقديم الطلب!'
    }
};

function t(key) {
    return UI_STRINGS[ACTIVE_LANG][key] ?? UI_STRINGS.en[key];
}

function applyUIStrings() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
    });
}

function switchLanguage(lang) {
    ACTIVE_LANG = lang;
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.getElementById('langLabel').textContent = lang === 'ar' ? 'EN' : 'AR';
    applyUIStrings();
    loadMenu(activeCategory);
    updateBasketUI();
}

// ─── Mock Data ───────────────────────────────────────────────────────────────

const mockMenuData = [
    // BURGERS
    {
        id: 1,
        translations: { en: "Classic Chicken Burger", ar: "برغر دجاج كلاسيك" },
        category: "burgers", price: 5.00, rating: 5,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400"
    },
    {
        id: 2,
        translations: { en: "Crispy Zinger Burger", ar: "برغر زينجر مقرمش" },
        category: "burgers", price: 5.50, rating: 5,
        image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?q=80&w=400"
    },
    {
        id: 3,
        translations: { en: "Smoked BBQ Beef Burger", ar: "برغر لحم بقر مدخن بالبي بي كيو" },
        category: "burgers", price: 6.80, rating: 4,
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=400"
    },

    // PIZZA
    {
        id: 4,
        translations: { en: "Classic Chicken Pizza", ar: "بيتزا دجاج كلاسيك" },
        category: "pizza", price: 7.20, rating: 4,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=400"
    },
    {
        id: 5,
        translations: { en: "Pepperoni Passion Pizza", ar: "بيتزا بيبيروني فاخرة" },
        category: "pizza", price: 8.50, rating: 5,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=400"
    },
    {
        id: 6,
        translations: { en: "Margherita Supreme", ar: "مارغريتا سوبريم" },
        category: "pizza", price: 6.99, rating: 5,
        image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?q=80&w=400"
    },

    // SIDES
    {
        id: 7,
        translations: { en: "Chicken Fry Strips", ar: "أصابع دجاج مقلية" },
        category: "sides", price: 5.00, rating: 5,
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=400"
    },
    {
        id: 8,
        translations: { en: "Golden French Fries", ar: "بطاطس مقلية ذهبية" },
        category: "sides", price: 2.50, rating: 4,
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=400"
    },
    {
        id: 9,
        translations: { en: "Crispy Mozzarella Sticks", ar: "عيدان موزاريلا مقرمشة" },
        category: "sides", price: 3.80, rating: 5,
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=400"
    },

    // DRINKS
    {
        id: 10,
        translations: { en: "Coca Cola Ice", ar: "كوكا كولا مثلجة" },
        category: "drinks", price: 1.50, rating: 5,
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=400"
    },
    {
        id: 11,
        translations: { en: "Strawberry Milkshake", ar: "ميلك شيك فراولة" },
        category: "drinks", price: 3.50, rating: 5,
        image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=400"
    },
    {
        id: 12,
        translations: { en: "Fresh Orange Juice", ar: "عصير برتقال طازج" },
        category: "drinks", price: 2.50, rating: 4,
        image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=400"
    }
];

let basket = [];

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
const MENU_CACHE_VERSION = 2; // bump when mockMenuData changes (invalidates stale sessionStorage)

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
        renderMenuCards(cached);
        return;
    }

    showLoadingSkeleton();
    try {
        const data = await mockFetch(category);
        writeMenuCache(category, data);
        renderMenuCards(data);
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
            <article class="item-card">
                <div class="img-container">
                    <img src="${item.image}" alt="${label}" loading="lazy">
                </div>
                <div class="card-info">
                    <div class="rating">${stars}</div>
                    <h3>${label}</h3>
                </div>
                <div class="card-footer">
                    <span class="price">$${item.price.toFixed(2)}</span>
                    <button class="buy-now-btn" data-action="add-to-basket" data-id="${item.id}">${t('buyNow')}</button>
                </div>
            </article>
        `;
    }).join('');
}

function filterMenu(category, event) {
    const buttons = document.querySelectorAll('.cat-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
    activeCategory = category;
    loadMenu(category);
}

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
}

// ─── Basket Logic ────────────────────────────────────────────────────────────

function addToBasket(id) {
    const product = mockMenuData.find(p => p.id === id);
    const existing = basket.find(p => p.id === id);
    if (existing) {
        existing.quantity++;
    } else {
        basket.push({ ...product, quantity: 1 });
    }
    updateBasketUI();
    if (window.innerWidth <= 1024 && basket.length === 1) {
        toggleCartPanel(true);
    }
}

function changeQuantity(id, amount) {
    const item = basket.find(p => p.id === id);
    if (!item) return;
    item.quantity += amount;
    if (item.quantity <= 0) {
        basket = basket.filter(p => p.id !== id);
    }
    updateBasketUI();
}

function removeFromBasket(id) {
    basket = basket.filter(p => p.id !== id);
    updateBasketUI();
}

function clearBasket() {
    if (basket.length === 0) return;
    if (confirm(t('clearConfirm'))) {
        basket = [];
        updateBasketUI();
    }
}

function updateBasketUI() {
    const wrapper = document.getElementById("cart-items-wrapper");
    const countBadge = document.getElementById("cart-count");
    const headerCountBadge = document.getElementById("header-cart-count");
    const subtotalText = document.getElementById("subtotal-price");
    const totalText = document.getElementById("total-price");

    const totalItemsCount = basket.reduce((sum, item) => sum + item.quantity, 0);
    countBadge.innerText = `${totalItemsCount} ${totalItemsCount !== 1 ? t('items') : t('item')}`;
    headerCountBadge.innerText = totalItemsCount;

    if (basket.length === 0) {
        const [line1, line2] = t('emptyBasket').split('\n');
        wrapper.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-cookie-bite"></i>
                <p>${line1}<br>${line2}</p>
            </div>`;
        subtotalText.innerText = "$0.00";
        totalText.innerText = "$0.00";
        return;
    }

    wrapper.innerHTML = basket.map(item => {
        const label = item.translations[ACTIVE_LANG] || item.translations.en;
        return `
        <div class="cart-row">
            <div class="cart-row-details">
                <strong>${label}</strong>
                <span>$${item.price.toFixed(2)} × ${item.quantity}</span>
            </div>
            <div class="qty-controls">
                <button class="qty-btn" data-action="qty-decrease" data-id="${item.id}">-</button>
                <button class="qty-btn" data-action="qty-increase" data-id="${item.id}">+</button>
                <button class="delete-item-btn" data-action="remove-item" data-id="${item.id}">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </div>`;
    }).join('');

    const totalAmount = basket.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    subtotalText.innerText = `$${totalAmount.toFixed(2)}`;
    totalText.innerText = `$${totalAmount.toFixed(2)}`;
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
        const lineTotal = (item.price * item.quantity).toFixed(2);
        return `<div class="checkout-summary-row">
            <span>${label} × ${item.quantity}</span>
            <span>$${lineTotal}</span>
        </div>`;
    }).join('');

    summaryEl.innerHTML = lines + `
        <div class="checkout-summary-row checkout-summary-total">
            <span>${t('totalAmount')}</span>
            <span>$${getBasketTotal().toFixed(2)}</span>
        </div>`;
}

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
            id: item.id,
            quantity: item.quantity,
            price: item.price,
            title: item.translations[ACTIVE_LANG] || item.translations.en
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
        alert(t('emptyCartAlert'));
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
}

function validateCheckoutForm() {
    const name = document.getElementById('checkoutName').value.trim();
    const phone = document.getElementById('checkoutPhone').value.trim();
    const errorEl = document.getElementById('checkoutError');

    if (!name) {
        errorEl.textContent = t('checkoutNameRequired');
        errorEl.hidden = false;
        return false;
    }
    if (!phone) {
        errorEl.textContent = t('checkoutPhoneRequired');
        errorEl.hidden = false;
        return false;
    }
    const phoneDigits = phone.replace(/\D/g, '');
    if (phoneDigits.length < 7) {
        errorEl.textContent = t('checkoutPhoneInvalid');
        errorEl.hidden = false;
        return false;
    }
    errorEl.hidden = true;
    return true;
}

async function submitOrder() {
    if (basket.length === 0) {
        alert(t('emptyCartAlert'));
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
        await mockSubmitOrder(payload);

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
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && document.getElementById('checkoutModal').classList.contains('open')) {
            closeCheckoutModal();
        }
    });
}

// ─── Event Delegation ────────────────────────────────────────────────────────

function setupEventDelegation() {
    document.getElementById('menu-items-container').addEventListener('click', (e) => {
        const btn = e.target.closest('[data-action]');
        if (!btn) return;
        if (btn.dataset.action === 'add-to-basket') {
            addToBasket(parseInt(btn.dataset.id, 10));
        }
    });

    document.getElementById('cart-items-wrapper').addEventListener('click', (e) => {
        const btn = e.target.closest('[data-action]');
        if (!btn) return;
        const id = parseInt(btn.dataset.id, 10);
        if (btn.dataset.action === 'qty-increase') changeQuantity(id,  1);
        if (btn.dataset.action === 'qty-decrease') changeQuantity(id, -1);
        if (btn.dataset.action === 'remove-item')  removeFromBasket(id);
    });
}

// ─── Init ────────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
    setupEventDelegation();
    setupCheckout();
    applyUIStrings();
    loadMenu();
});
