const coupons = {
    PR20: 20,
    PR10: 10,
    PR5: 5
};

// Product data from Powerhouse Crackers
const productData = {
  "SPARKLERS": [
    {"name": "BOBY GOLD SPARKLERS 7CM(10pcs)", "package": "1BOX", "actualPrice": 42, "discountPrice": 21, "image": "SPARKLERS/image_5.jpg"},
    {"name": "BOBBY CRACKLINGS SPARKLERS 7CM(10PCS)", "package": "1BOX", "actualPrice": 48, "discountPrice": 24, "image": "SPARKLERS/product-featured-111.jpg"},
    {"name": "12CM 4 COLOUR SPARKLERS (10PCS)", "package": "1BOX", "actualPrice": 100, "discountPrice": 50, "image": "SPARKLERS/product-featured-295.jpg"},
    {"name": "12CM RED SPARKLERS (10PCS)", "package": "1BOX", "actualPrice": 108, "discountPrice": 54, "image": "SPARKLERS/product-featured-344.jpg"},
    {"name": "LEMON TREE SPARKLERS 15CM(10PCS)", "package": "1BOX", "actualPrice": 150, "discountPrice": 75, "image": "SPARKLERS/product-featured-122.jpg"},
    {"name": "RED SPARKLERS 15CM(10PCS)", "package": "1BOX", "actualPrice": 166, "discountPrice": 83, "image": "SPARKLERS/product-featured-119.jpg"},
    {"name": "GOLD SPARKLERS 15CM(10PCS)", "package": "1BOX", "actualPrice": 176, "discountPrice": 88, "image": "SPARKLERS/product-featured-112.jpg"},
    {"name": "GOLD SPARKLERS 30CM(5PCS)", "package": "1BOX", "actualPrice": 176, "discountPrice": 88, "image": "SPARKLERS/product-featured-114.jpg"},
    {"name": "CRACKLING SPARKLERS 15CM(10PCS)", "package": "1BOX", "actualPrice": 198, "discountPrice": 99, "image": "SPARKLERS/product-featured-113.jpg"},
    {"name": "CRACKLING SPARKLERS 30CM(5PCS)", "package": "1BOX", "actualPrice": 198, "discountPrice": 99, "image": "SPARKLERS/product-featured-115.jpg"},
    {"name": "LAVENDER SPARKLERS 15CM(10PCS)", "package": "1BOX", "actualPrice": 208, "discountPrice": 104, "image": "SPARKLERS/product-featured-123.jpg"},
    {"name": "ROBIN ELECTRIC SPARKLERS 50CM(5PCS)", "package": "1TUBE", "actualPrice": 420, "discountPrice": 210, "image": "SPARKLERS/product-featured-116.jpg"},
    {"name": "ROBIN COLOUR SPARKLERS 50CM(5PCS)", "package": "1TUBE", "actualPrice": 480, "discountPrice": 240, "image": "SPARKLERS/product-featured-117.jpg"},
    {"name": "TRI COLOUR 15CM(30PCS)", "package": "1BOX", "actualPrice": 522, "discountPrice": 261, "image": "SPARKLERS/product-featured-278.jpg"},
    {"name": "ROBIN(5IN1) COLOUR SPARKLERS 75CM(5PCS)", "package": "1TUBE", "actualPrice": 750, "discountPrice": 375, "image": "SPARKLERS/product-featured-125.jpg"}
  ],
  "FLOWERPOTS": [
    {"name": "LITTLE FLOWER (1PC)", "package": "1BOX", "actualPrice": 148, "discountPrice": 74, "image": "FLOWERPOTS/product-featured-141.jpg"},
    {"name": "THE GREAT SPLENDOUR FOUNTAIN (1PC)", "package": "1BOX", "actualPrice": 172, "discountPrice": 86, "image": "FLOWERPOTS/product-featured-135.jpg"},
    {"name": "FLOWERPOT SMALL(10PCS)", "package": "1BOX", "actualPrice": 192, "discountPrice": 96, "image": "FLOWERPOTS/product-featured-139.jpg"},
    {"name": "JET FOUNTAIN (5PCS)", "package": "1BOX", "actualPrice": 212, "discountPrice": 106, "image": "FLOWERPOTS/product-featured-126.jpg"},
    {"name": "FLOWERPOTS BIG(10PCS)", "package": "1BOX", "actualPrice": 348, "discountPrice": 174, "image": "FLOWERPOTS/product-featured-345.jpg"},
    {"name": "JET FOUNTAINS (10PCS)", "package": "1BOX", "actualPrice": 400, "discountPrice": 200, "image": "FLOWERPOTS/product-featured-127.jpg"},
    {"name": "FLOWERPOTS SPECIAL (10PCS)", "package": "1BOX", "actualPrice": 466, "discountPrice": 233, "image": "FLOWERPOTS/product-featured-137.jpg"},
    {"name": "CHEERS FOUNTAIN (3PCS)", "package": "1BOX", "actualPrice": 474, "discountPrice": 237, "image": "FLOWERPOTS/product-featured-129.jpg"},
    {"name": "FLOWERPOTS DELUXE (5PCS)", "package": "1BOX", "actualPrice": 622, "discountPrice": 311, "image": "FLOWERPOTS/product-featured-140.jpg"},
    {"name": "JEWEL POTS FOUNTAIN (5PCS)", "package": "1BOX", "actualPrice": 648, "discountPrice": 324, "image": "FLOWERPOTS/product-featured-138.jpg"},
    {"name": "JADE FLOWERS FOUNTAIN(5PCS)", "package": "1BOX", "actualPrice": 664, "discountPrice": 332, "image": "FLOWERPOTS/product-featured-136.jpg"},
    {"name": "HAPPINESS FOUNTAIN (5PCS)", "package": "1BOX", "actualPrice": 666, "discountPrice": 333, "image": "FLOWERPOTS/product-featured-143.jpg"},
    {"name": "SUNDROPS FOUNTAIN (5PCS)", "package": "1BOX", "actualPrice": 676, "discountPrice": 338, "image": "FLOWERPOTS/product-featured-144.jpg"},
    {"name": "MONEY PENNY FOUNTAIN (5PCS)", "package": "1BOX", "actualPrice": 676, "discountPrice": 338, "image": "FLOWERPOTS/product-featured-145.jpg"},
    {"name": "POPCORN FOUNTAIN (5PCS)", "package": "1BOX", "actualPrice": 748, "discountPrice": 374, "image": "FLOWERPOTS/product-featured-297.jpg"},
    {"name": "LASER SHOW FOUNTAIN (3PCS)", "package": "1BOX", "actualPrice": 862, "discountPrice": 431, "image": "FLOWERPOTS/product-featured-128.jpg"},
    {"name": "LAVENDER FOUNTAIN (3PCS)", "package": "1BOX", "actualPrice": 876, "discountPrice": 438, "image": "FLOWERPOTS/product-featured-134.jpg"},
    {"name": "FLOWERPOTS GIANT (10PCS)", "package": "1BOX", "actualPrice": 950, "discountPrice": 475, "image": "FLOWERPOTS/product-featured-281.jpg"},
    {"name": "Tricolour FOUNTAIN (5PCS)", "package": "1BOX", "actualPrice": 956, "discountPrice": 478, "image": "FLOWERPOTS/product-featured-276.jpg"},
    {"name": "CRACKLING KING FOUNTAIN (5PCS)", "package": "1BOX", "actualPrice": 1000, "discountPrice": 500, "image": "FLOWERPOTS/product-featured-133.jpg"},
    {"name": "COLOR FOUNTAINS (4PCS)", "package": "1BOX", "actualPrice": 1004, "discountPrice": 502, "image": "FLOWERPOTS/product-featured-296.jpg"},
    {"name": "TRICOLOUR MILLENNIUM (5pcs)", "package": "1BOX", "actualPrice": 1102, "discountPrice": 551, "image": "FLOWERPOTS/product-featured-304.jpg"},
  ],
  "GROUND CHAKKARS": [
    {"name": "ZAMIN CHAKKARS BIG(10PCS)", "package": "1BOX", "actualPrice": 134, "discountPrice": 67, "image": "GROUND CHAKKARS/product-featured-5.jpg"},
    {"name": "RED & WHITE CHAKKARS (10PCS)", "package": "1BOX", "actualPrice": 148, "discountPrice": 74, "image": "GROUND CHAKKARS/product-featured-5.jpg"},
    {"name": "ZAMIN CHAKKARS ASOKA (10PCS)", "package": "1BOX", "actualPrice": 224, "discountPrice": 112, "image": "GROUND CHAKKARS/product-featured-5.jpg"},
    {"name": "TWIN SPIN WHEEL (5PCS)", "package": "1BOX", "actualPrice": 234, "discountPrice": 117, "image": "GROUND CHAKKARS/product-featured-5.jpg"},
    {"name": "SCARLET SAUCER(5PCS)", "package": "1BOX", "actualPrice": 234, "discountPrice": 117, "image": "GROUND CHAKKARS/product-featured-5.jpg"},
    {"name": "ZAMIN CHAKKARS BIG(25PCS)", "package": "1BOX", "actualPrice": 306, "discountPrice": 153, "image": "GROUND CHAKKARS/product-featured-5.jpg"},
    {"name": "WHIZZ WHEEL (5PCS)", "package": "1BOX", "actualPrice": 340, "discountPrice": 170, "image": "GROUND CHAKKARS/product-featured-5.jpg"},
    {"name": "MEGA TWISTER WHEEL(5PCS)", "package": "1BOX", "actualPrice": 342, "discountPrice": 171, "image": "GROUND CHAKKARS/product-featured-5.jpg"},
    {"name": "ZAMIN CHAKKARS SPECIAL (10PCS)", "package": "1BOX", "actualPrice": 382, "discountPrice": 191, "image": "GROUND CHAKKARS/product-featured-5.jpg"},
    {"name": "SCARY SCREAM(4PCS)", "package": "1BOX", "actualPrice": 488, "discountPrice": 244, "image": "GROUND CHAKKARS/product-featured-5.jpg"},
    {"name": "ZAMIN CHAKKARS DELUXE (10PCS)", "package": "1BOX", "actualPrice": 494, "discountPrice": 247, "image": "chakkar_deluxe.jpg"},
    {"name": "ZAMIN CHAKKARS SUPER DELUXE (10PCS)", "package": "1BOX", "actualPrice": 546, "discountPrice": 273, "image": "chakkar_superdeluxe.jpg"},
    {"name": "DOLLAR WHEEL(5PCS)", "package": "1BOX", "actualPrice": 690, "discountPrice": 345, "image": "wheel_dollar.jpg"},
    {"name": "POKER WHEEL (5PCS)", "package": "1BOX", "actualPrice": 692, "discountPrice": 346, "image": "wheel_poker.jpg"},
    {"name": "CUCKOO WHEEL (5PCS)", "package": "1BOX", "actualPrice": 692, "discountPrice": 346, "image": "wheel_cuckoo.jpg"}
  ],
  "SOUND CRACKERS": [
    {"name": "SPARROW6.5CM(5PCS)", "package": "1PKT", "actualPrice": 36, "discountPrice": 18, "image": "sound_sparrow.jpg"},
    {"name": "9CM PEACOCK (5PCS)", "package": "1PKT", "actualPrice": 60, "discountPrice": 30, "image": "sound_peacock.jpg"},
    {"name": "10CM LAKSHMI (5PCS)", "package": "1PKT", "actualPrice": 84, "discountPrice": 42, "image": "sound_lakshmi.jpg"},
    {"name": "10CM KRISHNA (5PCS)", "package": "1PKT", "actualPrice": 84, "discountPrice": 42, "image": "sound_krishna.jpg"},
    {"name": "10CM HITLER (5PCS)", "package": "1PKT", "actualPrice": 84, "discountPrice": 42, "image": "sound_hitler.jpg"},
    {"name": "9CM TWO SOUND (5PCS)", "package": "1PKT", "actualPrice": 88, "discountPrice": 44, "image": "sound_twosound.jpg"},
    {"name": "10CM HERCULES DELUXE(5PCS)", "package": "1PKT", "actualPrice": 108, "discountPrice": 54, "image": "sound_hercules.jpg"},
    {"name": "TWO SOUND GIANT (5PCS)", "package": "1PKT", "actualPrice": 120, "discountPrice": 60, "image": "sound_twogiant.jpg"}
  ],
  "BIJILI": [
    {"name": "BIJILI RED(50PCS)", "package": "1PKT", "actualPrice": 76, "discountPrice": 38, "image": "bijili_red.jpg"},
    {"name": "GIANT BIJILI (50PCS)", "package": "1PKT", "actualPrice": 142, "discountPrice": 71, "image": "bijili_giant.jpg"},
    {"name": "RED BIJILI (100PCS)", "package": "1PKT", "actualPrice": 146, "discountPrice": 73, "image": "bijili_red100.jpg"},
    {"name": "STRIPPED BIJILI(100PCS)", "package": "1PKT", "actualPrice": 168, "discountPrice": 84, "image": "bijili_stripped.jpg"}
  ],
  "ROCKETS": [
    {"name": "SURVEYOR ROCKETS(10PCS)", "package": "1BOX", "actualPrice": 196, "discountPrice": 98, "image": "rocket_surveyor.jpg"},
    {"name": "RAINBOW ROCKETS (10PCS)", "package": "1BOX", "actualPrice": 324, "discountPrice": 162, "image": "rocket_rainbow.jpg"},
    {"name": "BOMB ROCKET(10PCS)", "package": "1BOX", "actualPrice": 358, "discountPrice": 179, "image": "rocket_bomb.jpg"},
    {"name": "SILVER JET ROCKETS ((10PCS)", "package": "1BOX", "actualPrice": 566, "discountPrice": 283, "image": "rocket_silverjet.jpg"},
    {"name": "ROHINI ROCKETS (10PCS)", "package": "1BOX", "actualPrice": 568, "discountPrice": 284, "image": "rocket_rohini.jpg"},
    {"name": "PARACHUTE ROCKETS (5PCS)", "package": "1BOX", "actualPrice": 1438, "discountPrice": 719, "image": "rocket_parachute.jpg"}
  ],
  "GIFT BOXES": [
    {"name": "PRIZE 20 GIFTBOX", "package": "1BOX", "actualPrice": 1180, "discountPrice": 590, "image": "gift_prize20.jpg"},
    {"name": "GOD'S GIFT 25 GIFTBOX", "package": "1BOX", "actualPrice": 1580, "discountPrice": 790, "image": "gift_gods25.jpg"},
    {"name": "SUPER 28 GIFTBOX", "package": "1BOX", "actualPrice": 1700, "discountPrice": 850, "image": "gift_super28.jpg"},
    {"name": "GREAT 31 GIFTBOX", "package": "1BOX", "actualPrice": 2100, "discountPrice": 1050, "image": "gift_great31.jpg"},
    {"name": "WONDERFUL 34 GIFTBOX", "package": "1BOX", "actualPrice": 2500, "discountPrice": 1250, "image": "gift_wonderful34.jpg"},
    {"name": "FANTASTIC 37 GIFTBOX", "package": "1BOX", "actualPrice": 2860, "discountPrice": 1430, "image": "gift_fantastic37.jpg"},
    {"name": "KHUSHI 42 GIFTBOX", "package": "1BOX", "actualPrice": 3480, "discountPrice": 1740, "image": "gift_khushi42.jpg"},
    {"name": "JUBILEE 46 GIFTBOX", "package": "1BOX", "actualPrice": 3760, "discountPrice": 1880, "image": "gift_jubilee46.jpg"},
    {"name": "TITAN 55 GIFTBOX", "package": "1BOX", "actualPrice": 5150, "discountPrice": 2575, "image": "gift_titan55.jpg"},
    {"name": "NEW PARADISE 27 GIFTBOX", "package": "1BOX", "actualPrice": 9180, "discountPrice": 4590, "image": "gift_paradise27.jpg"}
  ],
  "BOMBS": [
    {"name": "PRIZE 20 GIFTBOX", "package": "1BOX", "actualPrice": 1180, "discountPrice": 590, "image": "gift_prize20.jpg"},
    {"name": "GOD'S GIFT 25 GIFTBOX", "package": "1BOX", "actualPrice": 1580, "discountPrice": 790, "image": "gift_gods25.jpg"},
    {"name": "SUPER 28 GIFTBOX", "package": "1BOX", "actualPrice": 1700, "discountPrice": 850, "image": "gift_super28.jpg"},
    {"name": "GREAT 31 GIFTBOX", "package": "1BOX", "actualPrice": 2100, "discountPrice": 1050, "image": "gift_great31.jpg"},
    {"name": "WONDERFUL 34 GIFTBOX", "package": "1BOX", "actualPrice": 2500, "discountPrice": 1250, "image": "gift_wonderful34.jpg"},
    {"name": "FANTASTIC 37 GIFTBOX", "package": "1BOX", "actualPrice": 2860, "discountPrice": 1430, "image": "gift_fantastic37.jpg"},
    {"name": "KHUSHI 42 GIFTBOX", "package": "1BOX", "actualPrice": 3480, "discountPrice": 1740, "image": "gift_khushi42.jpg"},
    {"name": "JUBILEE 46 GIFTBOX", "package": "1BOX", "actualPrice": 3760, "discountPrice": 1880, "image": "gift_jubilee46.jpg"},
    {"name": "TITAN 55 GIFTBOX", "package": "1BOX", "actualPrice": 5150, "discountPrice": 2575, "image": "gift_titan55.jpg"},
    {"name": "NEW PARADISE 27 GIFTBOX", "package": "1BOX", "actualPrice": 9180, "discountPrice": 4590, "image": "gift_paradise27.jpg"}
  ]
};

// Global variables
let cart = [];
let currentProducts = [];
let currentCategory = 'all';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    loadProducts();
    setupEventListeners();
    updateCartDisplay();
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', handleSearch);
    }

    // Category filtering
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.dataset.category;
            selectCategory(category);
        });
    });

    // Sort functionality
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', handleSort);
    }

    // Cart functionality
    const cartBtn = document.getElementById('cartBtn');
    const cartClose = document.getElementById('cartClose');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const clearCartBtn = document.getElementById('clearCartBtn');
    
    if (cartBtn) cartBtn.addEventListener('click', toggleCart);
    if (cartClose) cartClose.addEventListener('click', closeCart);
    if (checkoutBtn) checkoutBtn.addEventListener('click', openCheckout);
    if (clearCartBtn) clearCartBtn.addEventListener('click', clearCart);

    // Modal functionality
    const modalClose = document.getElementById('modalClose');
    const overlay = document.getElementById('overlay');
    
    if (modalClose) modalClose.addEventListener('click', closeCheckout);
    if (overlay) overlay.addEventListener('click', closeCheckout);

    // Form submission
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', handleOrder);
    }

    // ESC key to close modal - Fixed implementation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' || e.keyCode === 27) {
            const modal = document.getElementById('checkoutModal');
            if (modal && !modal.classList.contains('hidden')) {
                closeCheckout();
                console.log('Modal closed with Escape key'); // Debug log
            }
        }
    });

    // Close cart when clicking outside
    document.addEventListener('click', function(e) {
        const cartSidebar = document.getElementById('cartSidebar');
        const cartBtn = document.getElementById('cartBtn');
        
        if (cartSidebar && cartBtn && !cartSidebar.contains(e.target) && !cartBtn.contains(e.target)) {
            closeCart();
        }
    });
}

// Load products into the grid
function loadProducts(category = 'all', searchTerm = '') {
    const productsGrid = document.getElementById('productsGrid');
    const noResults = document.getElementById('noResults');
    const sectionTitle = document.getElementById('sectionTitle');
    
    if (!productsGrid || !noResults || !sectionTitle) return;
    
    currentProducts = [];
    
    // Collect products based on category
    if (category === 'all') {
        Object.keys(productData).forEach(cat => {
            productData[cat].forEach(product => {
                currentProducts.push({...product, category: cat});
            });
        });
        sectionTitle.textContent = 'All Products';
    } else {
        if (productData[category]) {
            productData[category].forEach(product => {
                currentProducts.push({...product, category: category});
            });
        }
        sectionTitle.textContent = category;
    }

    // Filter by search term - Fixed search logic
    if (searchTerm) {
        const searchTermLower = searchTerm.toLowerCase().trim();
        currentProducts = currentProducts.filter(product => {
            const nameMatch = product.name.toLowerCase().includes(searchTermLower);
            const categoryMatch = product.category.toLowerCase().includes(searchTermLower);
            const packageMatch = product.package && product.package.toLowerCase().includes(searchTermLower);
            return nameMatch || categoryMatch || packageMatch;
        });
    }

    // Display products or no results message
    if (currentProducts.length === 0) {
        productsGrid.style.display = 'none';
        noResults.style.display = 'block';
    } else {
        productsGrid.style.display = 'grid';
        noResults.style.display = 'none';
        renderProducts();
    }
}

// Render products in the grid
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = currentProducts.map((product, index) => {
        const savings = product.actualPrice - product.discountPrice;
        const savingsPercent = Math.round((savings / product.actualPrice) * 100);
        
        return `
            <div class="product-card">
                <div class="product-image">
                   <img src="images/${product.image}" alt="${product.name}">
                </div>
                <h4 class="product-name">${product.name}</h4>
                <p class="product-package">${product.package}</p>
                <div class="product-pricing">
                    <span class="original-price">₹${product.actualPrice}</span>
                    <span class="discount-price">₹${product.discountPrice}</span>
                    <div class="savings">Save ${savingsPercent}%</div>
                </div>
                <div class="product-actions">
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">-</button>
                        <input type="number" class="quantity-input" id="qty-${index}" value="1" min="1" max="99">
                        <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
                    </div>
                    <button class="add-to-cart-btn" onclick="addToCart(${index})">Add to Cart</button>
                </div>
            </div>
        `;
    }).join('');
}

// Handle search - Fixed search functionality
function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    const searchTerm = searchInput.value.trim();
    console.log('Searching for:', searchTerm); // Debug log
    loadProducts(currentCategory, searchTerm);
}

// Handle category selection
function selectCategory(category) {
    currentCategory = category;
    
    // Update active category button
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const activeBtn = document.querySelector(`[data-category="${category}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
    
    // Load products for selected category
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput ? searchInput.value.trim() : '';
    loadProducts(category, searchTerm);
}

// Handle sorting
function handleSort() {
    const sortSelect = document.getElementById('sortSelect');
    if (!sortSelect) return;
    
    const sortValue = sortSelect.value;
    
    switch (sortValue) {
        case 'name':
            currentProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'price-low':
            currentProducts.sort((a, b) => a.discountPrice - b.discountPrice);
            break;
        case 'price-high':
            currentProducts.sort((a, b) => b.discountPrice - a.discountPrice);
            break;
        case 'discount':
            currentProducts.sort((a, b) => {
                const discountA = ((a.actualPrice - a.discountPrice) / a.actualPrice) * 100;
                const discountB = ((b.actualPrice - b.discountPrice) / b.actualPrice) * 100;
                return discountB - discountA;
            });
            break;
    }
    
    renderProducts();
}

// Update quantity in product card
function updateQuantity(index, delta) {
    const qtyInput = document.getElementById(`qty-${index}`);
    if (!qtyInput) return;
    
    let currentQty = parseInt(qtyInput.value) || 1;
    const newQty = Math.max(1, Math.min(99, currentQty + delta));
    qtyInput.value = newQty;
}

// Add product to cart
function addToCart(index) {
    const product = currentProducts[index];
    if (!product) return;
    
    const qtyInput = document.getElementById(`qty-${index}`);
    const quantity = qtyInput ? parseInt(qtyInput.value) || 1 : 1;
    
    // Check if product already exists in cart
    const existingItem = cart.find(item => 
        item.name === product.name && item.category === product.category
    );
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity,
            id: Date.now() + Math.random()
        });
    }
    
    // Reset quantity input
    if (qtyInput) {
        qtyInput.value = 1;
    }
    
    updateCartDisplay();
    showNotification(`${product.name} added to cart!`, 'success');
}

// Update cart display
function updateCartDisplay() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartEmpty = document.getElementById('cartEmpty');
    const cartSummary = document.getElementById('cartSummary');
    
    if (!cartCount || !cartItems || !cartEmpty || !cartSummary) return;
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    if (cart.length === 0) {
        cartItems.style.display = 'none';
        cartEmpty.style.display = 'block';
        cartSummary.style.display = 'none';
    } else {
        cartItems.style.display = 'block';
        cartEmpty.style.display = 'none';
        cartSummary.style.display = 'block';
        
        // Render cart items
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-header">
                    <div class="cart-item-name">${item.name}</div>
                    <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">Remove</button>
                </div>
                <div class="cart-item-controls">
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="updateCartItemQuantity('${item.id}', -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateCartItemQuantity('${item.id}', 1)">+</button>
                    </div>
                    <div class="cart-item-price">₹${item.discountPrice * item.quantity}</div>
                </div>
            </div>
        `).join('');
        
        // Update summary
        updateCartSummary();
    }
}

// Update cart summary
function updateCartSummary() {
    const subtotalEl = document.getElementById('subtotal');
    const deliverCharge = document.getElementById('deliveryCharges');
    const originalPriceEl = document.getElementById('originalPrice');
    const savingsEl = document.getElementById('savings');
    const totalPriceEl = document.getElementById('totalPrice');
    
    if (!subtotalEl || !originalPriceEl || !savingsEl || !totalPriceEl) return;
    
    const subtotal = cart.reduce((sum, item) => sum + (item.discountPrice * item.quantity), 0);
    const originalTotal = cart.reduce((sum, item) => sum + (item.actualPrice * item.quantity), 0);
    const savings = originalTotal - subtotal;
    const totalAmount=subtotal+(deliverCharge ? parseInt(deliverCharge.textContent.replace('₹', '')) : 0);
    subtotalEl.textContent = `₹${subtotal}`;
    originalPriceEl.textContent = `₹${originalTotal}`;
    savingsEl.textContent = `₹${savings}`;
    totalPriceEl.textContent = totalAmount;
}

// Update cart item quantity
function updateCartItemQuantity(itemId, delta) {
    const item = cart.find(cartItem => cartItem.id == itemId);
    if (item) {
        item.quantity = Math.max(1, item.quantity + delta);
        updateCartDisplay();
    }
}

// Remove item from cart
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id != itemId);
    updateCartDisplay();
    showNotification('Item removed from cart', 'info');
}

// Clear entire cart
function clearCart() {
    cart = [];
    updateCartDisplay();
    showNotification('Cart cleared', 'info');
}

// Toggle cart sidebar
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    if (cartSidebar) {
        cartSidebar.classList.toggle('open');
    }
}

// Close cart sidebar
function closeCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    if (cartSidebar) {
        cartSidebar.classList.remove('open');
    }
}

// Open checkout modal - Fixed modal opening
function openCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }
    
    const modal = document.getElementById('checkoutModal');
    const overlay = document.getElementById('overlay');
    
    if (!modal || !overlay) return;
    
    // Update checkout summary
    updateCheckoutSummary();
    
    // Show modal and overlay
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    console.log('Checkout modal opened'); // Debug log
}

// Close checkout modal - Enhanced implementation
function closeCheckout() {
    const modal = document.getElementById('checkoutModal');
    const overlay = document.getElementById('overlay');
    
    if (modal) {
        modal.classList.add('hidden');
    }
    if (overlay) {
        overlay.classList.add('hidden');
    }
    
    document.body.style.overflow = 'auto';
    console.log('Checkout modal closed'); // Debug log
}

// Update checkout summary
// function updateCheckoutSummary() {
//     const checkoutItems = document.getElementById('checkoutItems');
//     const checkoutItemCount = document.getElementById('checkoutItemCount');
//     const checkoutTotal = document.getElementById('checkoutTotal');
//     const deliverCharge = document.getElementById('deliveryCharges');
//     if (!checkoutItems || !checkoutItemCount || !checkoutTotal) return;
    
//     const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
//     const totalAmount = cart.reduce((sum, item) => sum + (item.discountPrice * item.quantity), 0);
//     const totalAmountWithDeliveryCharge = totalAmount + (deliverCharge ? parseInt(deliverCharge.textContent.replace('₹', '')) : 0); // Assuming a fixed delivery charge of ₹50
//     checkoutItems.innerHTML = cart.map(item => `
//         <div class="checkout-item">
//             <span>${item.name} (${item.quantity}x)</span>
//             <span>₹${item.discountPrice * item.quantity}</span>
//         </div>
//     `).join('');
    
//     const couponInput = document.getElementById('coupon');
// if (couponInput) {
//     const code = couponInput.value.trim().toUpperCase(); // read entered code

//     if (coupons.hasOwnProperty(code)) {
//         const discountPercent = coupons[code];
//         const discount = Math.round((discountPercent / 100) * totalAmount);

//         totalAmountWithDeliveryCharge -= discount;

//         showNotification(`🎉 Coupon applied! You saved ₹${discount}`, 'success');
//     } else if (code !== "") {
//         showNotification('❌ Invalid coupon code', 'error');
//     }
// }
//     checkoutItemCount.textContent = totalItems;
//     checkoutTotal.textContent = `₹${totalAmountWithDeliveryCharge}`;
// }

// Track order count (persist in localStorage so refresh doesn’t reset)
let orderCount = parseInt(localStorage.getItem("orderCount")) || 0;
const maxCouponOrders = 5; // Only first 5 orders can use coupons

// Event listener for coupon input
const couponInput = document.getElementById("coupon");
if (couponInput) {
    couponInput.addEventListener("input", () => {
        updateCheckoutSummary();
    });
}

function updateCheckoutSummary() {
    const checkoutItems = document.getElementById('checkoutItems');
    const checkoutItemCount = document.getElementById('checkoutItemCount');
    const checkoutTotal = document.getElementById('checkoutTotal');
    const deliveryChargeElem = document.getElementById('deliveryCharges');
    const couponMessage = document.getElementById('couponMessage');

    if (!checkoutItems || !checkoutItemCount || !checkoutTotal) return;

    // Cart totals
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalAmount = cart.reduce((sum, item) => sum + (item.discountPrice * item.quantity), 0);

    // Delivery charge
    const deliveryCharge = deliveryChargeElem 
        ? parseInt(deliveryChargeElem.textContent.replace('₹', '')) || 0 
        : 0;

    let totalAmountWithDeliveryCharge = totalAmount + deliveryCharge;

    // Coupon handling
    const code = couponInput.value.trim().toUpperCase();
    couponMessage.textContent = ""; // clear old msg

    if (code && coupons.hasOwnProperty(code)) {
        if (orderCount < maxCouponOrders) { 
            const discountPercent = coupons[code];
            const discount = Math.round((discountPercent / 100) * totalAmount);

            totalAmountWithDeliveryCharge -= discount;

            couponMessage.textContent = `🎉 Coupon applied! You saved ₹${discount}`;
            couponMessage.style.color = "green";
        } else {
            couponMessage.textContent = `❌ Coupon limit reached (only first ${maxCouponOrders} orders get discount)`;
            couponMessage.style.color = "red";
        }
    }

    // Update DOM
    checkoutItems.innerHTML = cart.map(item => `
        <div class="checkout-item">
            <span>${item.name} (${item.quantity}x)</span>
            <span>₹${item.discountPrice * item.quantity}</span>
        </div>
    `).join('');

    checkoutItemCount.textContent = totalItems;
    checkoutTotal.textContent = `₹${totalAmountWithDeliveryCharge}`;
}

// When order is placed successfully
function completeOrder() {
    orderCount++;
    localStorage.setItem("orderCount", orderCount); // persist
    showNotification("✅ Order placed successfully!", "success");

    // clear cart etc.
}
// Handle order submission
// const checkoutForm = document.getElementById('checkoutForm');
if (checkoutForm) {
    checkoutForm.addEventListener('submit', handleOrder);
}

async function handleOrder(e) {
    e.preventDefault();
    
    const customerName = document.getElementById('customerName').value.trim();
    const customerPhone = document.getElementById('customerPhone').value.trim();
    const customerEmail = document.getElementById('customerEmail').value.trim();
    const deliveryAddress = document.getElementById('deliveryAddress').value.trim();
    const deliveryState = document.getElementById('deliveryState').value;
    const paymentMethod = document.getElementById('paymentMethod').value;
    
    const orderData = {
        customerName,
        customerPhone,
        customerEmail,
        deliveryAddress,
        deliveryState,
        paymentMethod,
        items: [...cart],  // assumes cart is globally available
        totalAmount: cart.reduce((sum, item) => sum + (item.discountPrice * item.quantity), 0),
        orderDate: new Date().toISOString()
    };
    
    // ✅ Validate required fields
    if (!customerName || !customerPhone || !deliveryAddress || !deliveryState || !paymentMethod) {
        showNotification('Please fill all required fields', 'error');
        return;
    }
    
    // ✅ Validate phone number
    const phoneDigits = customerPhone.replace(/\D/g, '');
    if (!validatePhone(phoneDigits)) {
        showNotification('Please enter a valid 10-digit phone number', 'error');
        return;
    }
    
    // ✅ Validate email (optional)
    if (customerEmail && !validateEmail(customerEmail)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // ✅ Submit button state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    if (!submitBtn) return;
    
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Processing Order...';
    submitBtn.disabled = true;
    
    try {
        // ✅ Send order to Formspree
        const response = await fetch("https://formspree.io/f/xqadkyan", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(orderData)
        });

        if (response.ok) {
            showNotification('✅ Order placed successfully! We will call you soon for confirmation and payment details.', 'success');
            
            // Clear cart & close modal
            cart = [];
            updateCartDisplay();
            closeCart();
            closeCheckout();
            
            // Reset form
            e.target.reset();
        } else {
            showNotification('⚠️ Failed to place order. Please try again.', 'error');
        }
    } catch (err) {
        showNotification('🚨 Network error. Please check your connection.', 'error');
    }
    
    // ✅ Reset button
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
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
                border-radius: var(--radius-base);
                box-shadow: var(--shadow-lg);
                animation: slideInRight 0.3s ease-out;
                font-family: var(--font-family-base);
            }

            .notification--success {
                background: rgba(50, 184, 198, 0.15);
                border: 1px solid rgba(50, 184, 198, 0.25);
                color: #32B8C6;
            }

            .notification--error {
                background: rgba(220, 20, 60, 0.15);
                border: 1px solid rgba(220, 20, 60, 0.25);
                color: #DC143C;
            }

            .notification--warning {
                background: rgba(255, 165, 0, 0.15);
                border: 1px solid rgba(255, 165, 0, 0.25);
                color: #FFA500;
            }

            .notification--info {
                background: rgba(255, 107, 53, 0.15);
                border: 1px solid rgba(255, 107, 53, 0.25);
                color: #FF6B35;
            }

            .notification__content {
                display: flex;
                align-items: center;
                padding: var(--space-16);
                gap: var(--space-12);
            }

            .notification__icon {
                font-weight: bold;
                font-size: var(--font-size-lg);
                flex-shrink: 0;
            }

            .notification__message {
                flex: 1;
                font-weight: var(--font-weight-medium);
            }

            .notification__close {
                background: none;
                border: none;
                font-size: var(--font-size-xl);
                cursor: pointer;
                opacity: 0.7;
                transition: opacity var(--duration-fast);
                color: inherit;
                flex-shrink: 0;
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

            @media (max-width: 480px) {
                .notification {
                    top: 100px;
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
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            notification.remove();
        });
    }

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
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
    if (!email) return true; // Email is optional
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}