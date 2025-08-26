// Product Data
const productData = {
    "company_name": "POWERHOUSE CRACKERS",
    "tagline": "PRICELIST 2025 DIWALI - ADVANCE BOOKING STARTED",
    "phone": "+91 7904399942",
    "email": "powerhouse.org.in@gmail.com",
    "address": "173 Raja Street, Coimbatore 641001",
    "payment_info": {
        "google_pay": "7904399942",
        "bank": {
            "name": "Powerhouse Crackers SBI Bank",
            "branch": "CBE City Branch",
            "account": "33261312190",
            "ifsc": "SBIN0000990"
        }
    },
    "categories": [
        {
            "name": "SPARKLERS",
            "products": [
                {"name": "BOBY GOLD SPARKLERS 7CM(10pcs)", "content": "1Box", "actual_price": 42, "discount_price": 21},
                {"name": "BOBBY CRACKLINGS SPARKLERS 7CM(10PCS)", "content": "1BOX", "actual_price": 48, "discount_price": 24},
                {"name": "12CM 4 COLOUR SPARKLERS (10PCS)", "content": "1BOX", "actual_price": 100, "discount_price": 50},
                {"name": "12CM RED SPARKLERS (10PCS)", "content": "1BOX", "actual_price": 108, "discount_price": 54},
                {"name": "LEMON TREE SPARKLERS 15CM(10PCS)", "content": "1BOX", "actual_price": 150, "discount_price": 75},
                {"name": "RED SPARKLERS 15CM(10PCS)", "content": "1BOX", "actual_price": 166, "discount_price": 83},
                {"name": "GOLD SPARKLERS 15CM(10PCS)", "content": "1BOX", "actual_price": 176, "discount_price": 88},
                {"name": "GOLD SPARKLERS 30CM(5PCS)", "content": "1BOX", "actual_price": 176, "discount_price": 88},
                {"name": "CRACKLING SPARKLERS 15CM(10PCS)", "content": "1BOX", "actual_price": 198, "discount_price": 99},
                {"name": "CRACKLING SPARKLERS 30CM(5PCS)", "content": "1BOX", "actual_price": 198, "discount_price": 99},
                {"name": "LAVENDER SPARKLERS 15CM(10PCS)", "content": "1BOX", "actual_price": 208, "discount_price": 104},
                {"name": "ROBIN ELECTRIC SPARKLERS 50CM(5PCS)", "content": "1TUBE", "actual_price": 420, "discount_price": 210},
                {"name": "ROBIN COLOUR SPARKLERS 50CM(5PCS)", "content": "1TUBE", "actual_price": 480, "discount_price": 240},
                {"name": "TRI COLOUR 15CM(30PCS)", "content": "1BOX", "actual_price": 522, "discount_price": 261},
                {"name": "ROBIN(5IN1) COLOUR SPARKLERS 75CM(5PCS)", "content": "1 TUBE", "actual_price": 750, "discount_price": 375}
            ]
        },
        {
            "name": "FLOWERPOTS",
            "products": [
                {"name": "LITTLE FLOWER (1PC)", "content": "1BOX", "actual_price": 148, "discount_price": 74},
                {"name": "THE GREAT SPLENDOUR FOUNTAIN (1PC)", "content": "1BOX", "actual_price": 172, "discount_price": 86},
                {"name": "FLOWERPOT SMALL(10PCS)", "content": "1Box", "actual_price": 192, "discount_price": 96},
                {"name": "JET FOUNTAIN (5PCS)", "content": "1BOX", "actual_price": 212, "discount_price": 106},
                {"name": "FLOWERPOTS BIG(10PCS)", "content": "1BOX", "actual_price": 348, "discount_price": 174},
                {"name": "JET FOUNTAINS (10PCS)", "content": "1 BOX", "actual_price": 400, "discount_price": 200},
                {"name": "FLOWERPOTS SPECIAL (10PCS)", "content": "1BOX", "actual_price": 466, "discount_price": 233},
                {"name": "CHEERS FOUNTAIN (3PCS)", "content": "1BOX", "actual_price": 474, "discount_price": 237},
                {"name": "FLOWERPOTS DELUXE (5PCS)", "content": "1BOX", "actual_price": 622, "discount_price": 311},
                {"name": "JEWEL POTS FOUNTAIN (5PCS)", "content": "1BOX", "actual_price": 648, "discount_price": 324},
                {"name": "JADE FLOWERS FOUNTAIN(5PCS)", "content": "1BOX", "actual_price": 664, "discount_price": 332},
                {"name": "HAPPINESS FOUNTAIN (5PCS)", "content": "1BOX", "actual_price": 666, "discount_price": 333},
                {"name": "SUNDROPS FOUNTAIN (5PCS)", "content": "1BOX", "actual_price": 676, "discount_price": 338},
                {"name": "MONEY PENNY FOUNTAIN (5PCS)", "content": "1BOX", "actual_price": 676, "discount_price": 338},
                {"name": "POPCORN FOUNTAIN (5PCS)", "content": "1BOX", "actual_price": 748, "discount_price": 374},
                {"name": "LASER SHOW FOUNTAIN (3PCS)", "content": "1BOX", "actual_price": 862, "discount_price": 431},
                {"name": "LAVENDER FOUNTAIN (3PCS)", "content": "1BOX", "actual_price": 876, "discount_price": 438},
                {"name": "FLOWERPOTS GIANT (10PCS)", "content": "1BOX", "actual_price": 950, "discount_price": 475},
                {"name": "Tricolour FOUNTAIN (5PCS)", "content": "1BOX", "actual_price": 956, "discount_price": 478},
                {"name": "CRACKLING KING FOUNTAIN (5PCS)", "content": "1BOX", "actual_price": 1000, "discount_price": 500},
                {"name": "COLOR FOUNTAINS (4PCS)", "content": "1BOX", "actual_price": 1004, "discount_price": 502},
                {"name": "TRICOLOUR MILLENNIUM (5pcs)", "content": "1BOX", "actual_price": 1102, "discount_price": 551},
                {"name": "FLOWERPOTS COLOUR WORLD (10PCS)", "content": "1BOX", "actual_price": 1116, "discount_price": 558},
                {"name": "RED CINDERELLA (5PCS)", "content": "1BOX", "actual_price": 1132, "discount_price": 566},
                {"name": "TOWER POTS GOLD(1PCS)", "content": "1BOX", "actual_price": 1720, "discount_price": 860}
            ]
        },
        {
            "name": "GROUND CHAKKARS",
            "products": [
                {"name": "ZAMIN CHAKKARS BIG(10PCS)", "content": "1Box", "actual_price": 134, "discount_price": 67},
                {"name": "RED & WHITE CHAKKARS (10PCS)", "content": "1BOX", "actual_price": 148, "discount_price": 74},
                {"name": "ZAMIN CHAKKARS ASOKA (10PCS)", "content": "1BOX", "actual_price": 224, "discount_price": 112},
                {"name": "TWIN SPIN WHEEL (5PCS)", "content": "1BOX", "actual_price": 234, "discount_price": 117},
                {"name": "SCARLET SAUCER(5PCS)", "content": "1 BOX", "actual_price": 234, "discount_price": 117},
                {"name": "ZAMIN CHAKKARS BIG(25PCS)", "content": "1BOX", "actual_price": 306, "discount_price": 153},
                {"name": "WHIZZ WHEEL (5PCS)", "content": "1BOX", "actual_price": 340, "discount_price": 170},
                {"name": "MEGA TWISTER WHEEL(5PCS)", "content": "1BOX", "actual_price": 342, "discount_price": 171},
                {"name": "ZAMIN CHAKKARS SPECIAL (10PCS)", "content": "1BOX", "actual_price": 382, "discount_price": 191},
                {"name": "SCARY SCREAM(4PCS)", "content": "1BOX", "actual_price": 488, "discount_price": 244},
                {"name": "ZAMIN CHAKKARS DELUXE (10PCS)", "content": "1BOX", "actual_price": 494, "discount_price": 247},
                {"name": "ZAMIN CHAKKARS SUPER DELUXE (10PCS)", "content": "1BOX", "actual_price": 546, "discount_price": 273},
                {"name": "DOLLAR WHEEL(5PCS)", "content": "1BOX", "actual_price": 690, "discount_price": 345},
                {"name": "POKER WHEEL (5PCS)", "content": "1BOX", "actual_price": 692, "discount_price": 346},
                {"name": "CUCKOO WHEEL (5PCS)", "content": "1BOX", "actual_price": 692, "discount_price": 346}
            ]
        },
        {
            "name": "MULTICOLOR SHOTS",
            "products": [
                {"name": "12 SHOTS FLIPPER", "content": "1Box", "actual_price": 458, "discount_price": 229},
                {"name": "12 SHOTS BALEEN", "content": "1Box", "actual_price": 458, "discount_price": 229},
                {"name": "20 SHOTS KISMET", "content": "1Box", "actual_price": 1650, "discount_price": 825},
                {"name": "25 SHOTS ROVER", "content": "1Box", "actual_price": 1730, "discount_price": 865},
                {"name": "30 SHOTS DTH", "content": "1Box", "actual_price": 1880, "discount_price": 940},
                {"name": "40 SHOTS MARINER", "content": "1Box", "actual_price": 2350, "discount_price": 1175},
                {"name": "60 SHOTS CLIPPER", "content": "1Box", "actual_price": 3140, "discount_price": 1570},
                {"name": "80 SHOTS CYBORG", "content": "1Box", "actual_price": 4100, "discount_price": 2050},
                {"name": "100 SHOTS SPEED METRO", "content": "1Box", "actual_price": 4600, "discount_price": 2300},
                {"name": "120 SHOTS RIX", "content": "1Box", "actual_price": 5300, "discount_price": 2650},
                {"name": "240 SHOTS RAINBOW DANCE", "content": "1Box", "actual_price": 12900, "discount_price": 6450}
            ]
        },
        {
            "name": "GIFT BOXES",
            "products": [
                {"name": "PRIZE 20 GIFTBOX", "content": "1Box", "actual_price": 1180, "discount_price": 590},
                {"name": "GOD'S GIFT 25 GIFTBOX", "content": "1Box", "actual_price": 1580, "discount_price": 790},
                {"name": "SUPER 28 GIFTBOX", "content": "1Box", "actual_price": 1700, "discount_price": 850},
                {"name": "GREAT 31 GIFTBOX", "content": "1Box", "actual_price": 2100, "discount_price": 1050},
                {"name": "WONDERFUL 34 GIFTBOX", "content": "1Box", "actual_price": 2500, "discount_price": 1250},
                {"name": "FANTASTIC 37 GIFTBOX", "content": "1Box", "actual_price": 2860, "discount_price": 1430},
                {"name": "KHUSHI 42 GIFTBOX", "content": "1Box", "actual_price": 3480, "discount_price": 1740},
                {"name": "JUBILEE 46 GIFTBOX", "content": "1BOX", "actual_price": 3760, "discount_price": 1880},
                {"name": "TITAN 55 GIFTBOX", "content": "1BOX", "actual_price": 5150, "discount_price": 2575},
                {"name": "NEW PARADISE 27 GIFTBOX", "content": "1BOX", "actual_price": 9180, "discount_price": 4590}
            ]
        }
    ]
};

// Global state
let cart = [];
let currentCategory = 'all';
let searchTerm = '';

// DOM Elements
let productGrid, cartCount, cartSidebar, cartItems, cartSubtotal, cartDiscount, cartTotal;
let orderModal, orderForm, searchInput, filterTabs, mobileMenuBtn;

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    setupEventListeners();
    renderProducts();
    updateCartDisplay();
});

function initializeElements() {
    productGrid = document.getElementById('productGrid');
    cartCount = document.getElementById('cartCount');
    cartSidebar = document.getElementById('cartSidebar');
    cartItems = document.getElementById('cartItems');
    cartSubtotal = document.getElementById('cartSubtotal');
    cartDiscount = document.getElementById('cartDiscount');
    cartTotal = document.getElementById('cartTotal');
    orderModal = document.getElementById('orderModal');
    orderForm = document.getElementById('orderForm');
    searchInput = document.getElementById('searchInput');
    filterTabs = document.querySelectorAll('.filter-tab');
    mobileMenuBtn = document.getElementById('mobileMenuBtn');
}

function setupEventListeners() {
    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }

    // Filter tabs
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => handleCategoryFilter(tab.dataset.category));
    });

    // Cart icon
    const cartIcon = document.getElementById('cartIcon');
    if (cartIcon) {
        cartIcon.addEventListener('click', toggleCartSidebar);
    }

    // Cart close button
    const cartClose = document.getElementById('cartClose');
    if (cartClose) {
        cartClose.addEventListener('click', closeCartSidebar);
    }

    // Checkout button
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', openOrderModal);
    }

    // Order modal close
    const orderModalClose = document.getElementById('orderModalClose');
    if (orderModalClose) {
        orderModalClose.addEventListener('click', closeOrderModal);
    }

    // Order form submission
    if (orderForm) {
        orderForm.addEventListener('submit', handleOrderSubmission);
    }

    // Modal overlay click to close
    const modalOverlay = document.querySelector('.modal__overlay');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeOrderModal);
    }

    // Mobile menu (if needed)
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
}

function getAllProducts() {
    let allProducts = [];
    productData.categories.forEach(category => {
        category.products.forEach(product => {
            allProducts.push({
                ...product,
                category: category.name,
                id: `${category.name}_${product.name}`.replace(/\s+/g, '_').toLowerCase()
            });
        });
    });
    return allProducts;
}

function getFilteredProducts() {
    let products = getAllProducts();

    // Apply search filter first
    if (searchTerm) {
        products = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
        // If searching, ignore category filter to show all search results
    } else if (currentCategory !== 'all') {
        // Apply category filter only if no search term
        products = products.filter(product => product.category === currentCategory);
    }

    return products;
}

function renderProducts() {
    const products = getFilteredProducts();
    
    if (!productGrid) return;

    if (products.length === 0) {
        productGrid.innerHTML = `
            <div class="no-products" style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: #666;">
                <h3>No products found</h3>
                <p>Try adjusting your search or filter criteria.</p>
            </div>
        `;
        return;
    }

    productGrid.innerHTML = products.map(product => createProductCard(product)).join('');
    
    // Add event listeners to quantity buttons and add to cart buttons
    products.forEach(product => {
        setupProductEventListeners(product.id);
    });
}

function createProductCard(product) {
    const discountPercent = Math.round(((product.actual_price - product.discount_price) / product.actual_price) * 100);
    
    return `
        <div class="product-card fade-in" data-product-id="${product.id}">
            <div class="product-card__header">
                <h3 class="product-card__name">${product.name}</h3>
                <div class="product-card__content">${product.content}</div>
            </div>
            
            <div class="product-card__body">
                <div class="product-card__pricing">
                    <span class="product-card__price">₹${product.discount_price}</span>
                    <span class="product-card__original-price">₹${product.actual_price}</span>
                    <span class="product-card__discount">${discountPercent}% OFF</span>
                </div>
                
                <div class="product-card__actions">
                    <div class="quantity-selector">
                        <button class="quantity-btn quantity-decrease" data-product-id="${product.id}">-</button>
                        <span class="quantity-display" id="qty-${product.id}">1</span>
                        <button class="quantity-btn quantity-increase" data-product-id="${product.id}">+</button>
                    </div>
                    <button class="add-to-cart-btn" data-product-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
}

function setupProductEventListeners(productId) {
    const decreaseBtn = document.querySelector(`.quantity-decrease[data-product-id="${productId}"]`);
    const increaseBtn = document.querySelector(`.quantity-increase[data-product-id="${productId}"]`);
    const addToCartBtn = document.querySelector(`.add-to-cart-btn[data-product-id="${productId}"]`);
    
    if (decreaseBtn) {
        decreaseBtn.addEventListener('click', () => updateQuantity(productId, -1));
    }
    
    if (increaseBtn) {
        increaseBtn.addEventListener('click', () => updateQuantity(productId, 1));
    }
    
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => addToCart(productId));
    }
}

function updateQuantity(productId, change) {
    const qtyDisplay = document.getElementById(`qty-${productId}`);
    if (!qtyDisplay) return;
    
    let currentQty = parseInt(qtyDisplay.textContent) || 1;
    let newQty = Math.max(1, currentQty + change);
    qtyDisplay.textContent = newQty;
    
    // Update decrease button state
    const decreaseBtn = document.querySelector(`.quantity-decrease[data-product-id="${productId}"]`);
    if (decreaseBtn) {
        decreaseBtn.disabled = newQty <= 1;
    }
}

function addToCart(productId) {
    const product = getAllProducts().find(p => p.id === productId);
    if (!product) return;
    
    const qtyDisplay = document.getElementById(`qty-${productId}`);
    const quantity = parseInt(qtyDisplay.textContent) || 1;
    
    // Check if product already exists in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity
        });
    }
    
    updateCartDisplay();
    showNotification(`${product.name} added to cart!`, 'success');
    
    // Reset quantity to 1
    qtyDisplay.textContent = '1';
    const decreaseBtn = document.querySelector(`.quantity-decrease[data-product-id="${productId}"]`);
    if (decreaseBtn) {
        decreaseBtn.disabled = true;
    }

    // Animate add to cart button
    const addToCartBtn = document.querySelector(`.add-to-cart-btn[data-product-id="${productId}"]`);
    if (addToCartBtn) {
        const originalText = addToCartBtn.textContent;
        addToCartBtn.textContent = 'Added!';
        addToCartBtn.style.background = '#28a745';
        
        setTimeout(() => {
            addToCartBtn.textContent = originalText;
            addToCartBtn.style.background = '';
        }, 1000);
    }
}

function updateCartDisplay() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) {
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'block' : 'none';
    }
    
    // Update cart items
    if (cartItems) {
        if (cart.length === 0) {
            cartItems.innerHTML = `
                <div class="cart-empty">
                    <p>Your cart is empty</p>
                    <p>Add some products to get started!</p>
                </div>
            `;
        } else {
            cartItems.innerHTML = cart.map(item => createCartItem(item)).join('');
            
            // Add event listeners to cart item buttons
            cart.forEach(item => {
                setupCartItemEventListeners(item.id);
            });
        }
    }
    
    // Update totals
    calculateCartTotals();
}

function createCartItem(item) {
    return `
        <div class="cart-item" data-item-id="${item.id}">
            <div class="cart-item__details">
                <div class="cart-item__name">${item.name}</div>
                <div class="cart-item__price">₹${item.discount_price} each</div>
            </div>
            
            <div class="cart-item__quantity">
                <button class="quantity-btn cart-qty-decrease" data-item-id="${item.id}">-</button>
                <span class="quantity-display">${item.quantity}</span>
                <button class="quantity-btn cart-qty-increase" data-item-id="${item.id}">+</button>
            </div>
            
            <button class="cart-item__remove" data-item-id="${item.id}">×</button>
        </div>
    `;
}

function setupCartItemEventListeners(itemId) {
    const decreaseBtn = document.querySelector(`.cart-qty-decrease[data-item-id="${itemId}"]`);
    const increaseBtn = document.querySelector(`.cart-qty-increase[data-item-id="${itemId}"]`);
    const removeBtn = document.querySelector(`.cart-item__remove[data-item-id="${itemId}"]`);
    
    if (decreaseBtn) {
        decreaseBtn.addEventListener('click', () => updateCartItemQuantity(itemId, -1));
    }
    
    if (increaseBtn) {
        increaseBtn.addEventListener('click', () => updateCartItemQuantity(itemId, 1));
    }
    
    if (removeBtn) {
        removeBtn.addEventListener('click', () => removeFromCart(itemId));
    }
}

function updateCartItemQuantity(itemId, change) {
    const item = cart.find(item => item.id === itemId);
    if (!item) return;
    
    item.quantity = Math.max(1, item.quantity + change);
    updateCartDisplay();
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartDisplay();
    showNotification('Item removed from cart', 'info');
}

function calculateCartTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.actual_price * item.quantity), 0);
    const total = cart.reduce((sum, item) => sum + (item.discount_price * item.quantity), 0);
    const discount = subtotal - total;
    
    if (cartSubtotal) cartSubtotal.textContent = `₹${subtotal}`;
    if (cartDiscount) cartDiscount.textContent = `₹${discount}`;
    if (cartTotal) cartTotal.textContent = `₹${total}`;
    
    // Update checkout button state
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.disabled = cart.length === 0;
        checkoutBtn.textContent = cart.length === 0 ? 'Cart is Empty' : 'Proceed to Order';
    }
}

function handleSearch(e) {
    searchTerm = e.target.value.trim();
    
    // If user is searching, automatically switch to "All Products" to show all search results
    if (searchTerm && currentCategory !== 'all') {
        currentCategory = 'all';
        
        // Update active tab to "All Products"
        filterTabs.forEach(tab => {
            tab.classList.toggle('filter-tab--active', tab.dataset.category === 'all');
        });
    }
    
    renderProducts();
}

function handleCategoryFilter(category) {
    currentCategory = category;
    
    // Clear search when switching categories manually
    if (searchInput) {
        searchInput.value = '';
        searchTerm = '';
    }
    
    // Update active tab
    filterTabs.forEach(tab => {
        tab.classList.toggle('filter-tab--active', tab.dataset.category === category);
    });
    
    renderProducts();
}

function toggleCartSidebar() {
    if (cartSidebar) {
        cartSidebar.classList.toggle('cart-sidebar--open');
    }
}

function closeCartSidebar() {
    if (cartSidebar) {
        cartSidebar.classList.remove('cart-sidebar--open');
    }
}

function openOrderModal() {
    if (cart.length === 0) {
        showNotification('Please add items to cart first', 'warning');
        return;
    }
    
    if (orderModal) {
        orderModal.classList.remove('hidden');
        populateOrderSummary();
    }
}

function closeOrderModal() {
    if (orderModal) {
        orderModal.classList.add('hidden');
    }
}

function populateOrderSummary() {
    const orderSummaryItems = document.getElementById('orderSummaryItems');
    const orderItemsTotal = document.getElementById('orderItemsTotal');
    const orderDiscount = document.getElementById('orderDiscount');
    const orderFinalTotal = document.getElementById('orderFinalTotal');
    
    if (orderSummaryItems) {
        orderSummaryItems.innerHTML = cart.map(item => `
            <div class="order-summary__item">
                <span class="order-summary__item-name">${item.name}</span>
                <span class="order-summary__item-qty">×${item.quantity}</span>
                <span class="order-summary__item-price">₹${item.discount_price * item.quantity}</span>
            </div>
        `).join('');
    }
    
    const subtotal = cart.reduce((sum, item) => sum + (item.actual_price * item.quantity), 0);
    const total = cart.reduce((sum, item) => sum + (item.discount_price * item.quantity), 0);
    const discount = subtotal - total;
    
    if (orderItemsTotal) orderItemsTotal.textContent = `₹${subtotal}`;
    if (orderDiscount) orderDiscount.textContent = `₹${discount}`;
    if (orderFinalTotal) orderFinalTotal.textContent = `₹${total}`;
}

function handleOrderSubmission(e) {
    e.preventDefault();
    
    const formData = new FormData(orderForm);
    const orderData = {
        customer: {
            name: formData.get('customerName'),
            phone: formData.get('customerPhone'),
            email: formData.get('customerEmail'),
            address: formData.get('deliveryAddress'),
            city: formData.get('city'),
            pincode: formData.get('pincode')
        },
        payment: formData.get('paymentMethod'),
        items: cart,
        totals: {
            subtotal: cart.reduce((sum, item) => sum + (item.actual_price * item.quantity), 0),
            discount: cart.reduce((sum, item) => sum + (item.actual_price * item.quantity), 0) - cart.reduce((sum, item) => sum + (item.discount_price * item.quantity), 0),
            total: cart.reduce((sum, item) => sum + (item.discount_price * item.quantity), 0)
        }
    };
    
    // Validate required fields
    if (!orderData.customer.name || !orderData.customer.phone || !orderData.customer.address || !orderData.customer.city || !orderData.customer.pincode) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }
    
    // Validate phone number
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(orderData.customer.phone.replace(/\D/g, ''))) {
        showNotification('Please enter a valid 10-digit phone number', 'error');
        return;
    }
    
    // Show loading state
    const submitBtn = orderForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = '<span class="loading"></span> Processing...';
    submitBtn.disabled = true;
    
    // Simulate order processing
    setTimeout(() => {
        showOrderConfirmation(orderData);
        closeOrderModal();
        clearCart();
        
        // Reset form
        orderForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

function showOrderConfirmation(orderData) {
    const paymentInfo = orderData.payment === 'googlepay' 
        ? `Google Pay: ${productData.payment_info.google_pay}`
        : `Bank: ${productData.payment_info.bank.name}\nAccount: ${productData.payment_info.bank.account}\nIFSC: ${productData.payment_info.bank.ifsc}`;
    
    showNotification(
        `Order placed successfully! Total: ₹${orderData.totals.total}\n\nWe will call you at ${orderData.customer.phone} for confirmation.\n\nPayment Details:\n${paymentInfo}`,
        'success'
    );
}

function clearCart() {
    cart = [];
    updateCartDisplay();
    closeCartSidebar();
}

function toggleMobileMenu() {
    // Mobile menu functionality if needed
    console.log('Mobile menu toggle');
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    
    const iconMap = {
        success: '✓',
        error: '✗',
        warning: '⚠',
        info: 'ℹ'
    };
    
    notification.innerHTML = `
        <div class="notification__content">
            <span class="notification__icon">${iconMap[type] || iconMap.info}</span>
            <span class="notification__message">${message}</span>
            <button class="notification__close">&times;</button>
        </div>
    `;

    // Add styles for notification if not already added
    if (!document.querySelector('#notification-styles')) {
        const styles = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                z-index: 10000;
                max-width: 400px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                animation: slideInRight 0.3s ease-out;
                font-family: var(--font-family-base);
            }

            .notification--success {
                background: rgba(40, 167, 69, 0.9);
                border: 1px solid rgba(40, 167, 69, 1);
                color: white;
            }

            .notification--error {
                background: rgba(220, 53, 69, 0.9);
                border: 1px solid rgba(220, 53, 69, 1);
                color: white;
            }

            .notification--warning {
                background: rgba(255, 193, 7, 0.9);
                border: 1px solid rgba(255, 193, 7, 1);
                color: #333;
            }

            .notification--info {
                background: rgba(23, 162, 184, 0.9);
                border: 1px solid rgba(23, 162, 184, 1);
                color: white;
            }

            .notification__content {
                display: flex;
                align-items: flex-start;
                padding: 16px;
                gap: 12px;
            }

            .notification__icon {
                font-weight: bold;
                font-size: 18px;
                flex-shrink: 0;
                margin-top: 2px;
            }

            .notification__message {
                flex: 1;
                font-weight: 500;
                white-space: pre-line;
                line-height: 1.4;
            }

            .notification__close {
                background: none;
                border: none;
                font-size: 20px;
                cursor: pointer;
                opacity: 0.8;
                transition: opacity 0.15s;
                color: inherit;
                flex-shrink: 0;
                margin-top: -2px;
            }

            .notification__close:hover {
                opacity: 1;
            }

            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }

            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }

            @media (max-width: 480px) {
                .notification {
                    top: 80px;
                    left: 20px;
                    right: 20px;
                    max-width: none;
                }
            }
        `;

        const styleSheet = document.createElement('style');
        styleSheet.id = 'notification-styles';
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    }

    // Add to document
    document.body.appendChild(notification);

    // Close functionality
    const closeButton = notification.querySelector('.notification__close');
    closeButton.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease-out forwards';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    });

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease-out forwards';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }
    }, 5000);
}

// Utility functions
function formatCurrency(amount) {
    return `₹${amount.toLocaleString('en-IN')}`;
}

function validatePhone(phone) {
    const cleanPhone = phone.replace(/\D/g, '');
    return cleanPhone.length === 10 && /^[6-9]/.test(cleanPhone);
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Close cart sidebar when clicking outside
document.addEventListener('click', function(e) {
    if (cartSidebar && cartSidebar.classList.contains('cart-sidebar--open')) {
        if (!cartSidebar.contains(e.target) && !e.target.closest('#cartIcon')) {
            closeCartSidebar();
        }
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Escape key to close modals
    if (e.key === 'Escape') {
        if (orderModal && !orderModal.classList.contains('hidden')) {
            closeOrderModal();
        } else if (cartSidebar && cartSidebar.classList.contains('cart-sidebar--open')) {
            closeCartSidebar();
        }
    }
    
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (searchInput) {
            searchInput.focus();
        }
    }
});

console.log('Powerhouse Crackers ordering system loaded successfully!');