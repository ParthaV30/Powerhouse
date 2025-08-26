// Add this to your existing app.js file to connect with the backend

// Backend API configuration
const API_BASE_URL = 'http://localhost:3000/api'; // Change this to your deployed backend URL

// Order submission function
async function submitOrder(orderData) {
    try {
        // Show loading state
        const submitBtn = document.getElementById('submitOrderBtn');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Processing Order...';
        }

        const response = await fetch(`${API_BASE_URL}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(orderData)
        });

        const result = await response.json();

        if (response.ok && result.success) {
            // Order successful
            showOrderSuccess(result.orderId, result.grandTotal);
            clearCart(); // Clear the shopping cart
            document.getElementById('orderForm').reset(); // Reset form
        } else {
            // Order failed
            showOrderError(result.error || 'Failed to place order');
        }
    } catch (error) {
        console.error('Order submission error:', error);
        showOrderError('Network error. Please check your connection and try again.');
    } finally {
        // Reset button state
        const submitBtn = document.getElementById('submitOrderBtn');
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Place Order';
        }
    }
}

// Success message display
function showOrderSuccess(orderId, total) {
    const successHTML = `
        <div class="order-success" style="
            background: linear-gradient(135deg, #FF6B35, #DC143C);
            color: white;
            padding: 30px;
            border-radius: 10px;
            text-align: center;
            margin: 20px 0;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        ">
            <h2>🎆 Order Placed Successfully! 🎆</h2>
            <p style="font-size: 18px; margin: 15px 0;">
                <strong>Order ID:</strong> ${orderId}
            </p>
            <p style="font-size: 18px; margin: 15px 0;">
                <strong>Total Amount:</strong> ₹${total}
            </p>
            <div style="background: rgba(255,255,255,0.2); padding: 15px; border-radius: 5px; margin: 20px 0;">
                <h3>Next Steps:</h3>
                <p>📞 We will call you shortly to confirm your order</p>
                <p>💳 Complete payment using Google Pay: 9894866459</p>
                <p>📧 Check your email for order confirmation</p>
            </div>
            <button onclick="closeOrderSuccess()" style="
                background: white;
                color: #DC143C;
                border: none;
                padding: 12px 24px;
                border-radius: 5px;
                font-weight: bold;
                cursor: pointer;
                font-size: 16px;
            ">Continue Shopping</button>
        </div>
    `;

    // Show success message
    const orderModal = document.getElementById('orderModal');
    if (orderModal) {
        orderModal.innerHTML = successHTML;
        orderModal.style.display = 'block';
    } else {
        // Create and show success message
        const successDiv = document.createElement('div');
        successDiv.innerHTML = successHTML;
        successDiv.style.position = 'fixed';
        successDiv.style.top = '50%';
        successDiv.style.left = '50%';
        successDiv.style.transform = 'translate(-50%, -50%)';
        successDiv.style.zIndex = '10000';
        successDiv.style.maxWidth = '90%';
        successDiv.style.width = '500px';
        successDiv.id = 'orderSuccessModal';
        document.body.appendChild(successDiv);

        // Add overlay
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.7)';
        overlay.style.zIndex = '9999';
        overlay.id = 'orderSuccessOverlay';
        document.body.appendChild(overlay);
    }
}

// Error message display
function showOrderError(message) {
    const errorHTML = `
        <div class="order-error" style="
            background: #dc3545;
            color: white;
            padding: 20px;
            border-radius: 5px;
            margin: 20px 0;
            text-align: center;
        ">
            <h3>❌ Order Failed</h3>
            <p>${message}</p>
            <button onclick="closeOrderError()" style="
                background: white;
                color: #dc3545;
                border: none;
                padding: 10px 20px;
                border-radius: 3px;
                font-weight: bold;
                cursor: pointer;
                margin-top: 10px;
            ">Try Again</button>
        </div>
    `;

    // Show error message
    const errorContainer = document.getElementById('errorContainer') || document.body;
    const errorDiv = document.createElement('div');
    errorDiv.innerHTML = errorHTML;
    errorDiv.id = 'orderErrorMessage';
    errorContainer.appendChild(errorDiv);

    // Auto remove after 5 seconds
    setTimeout(() => {
        const errorElement = document.getElementById('orderErrorMessage');
        if (errorElement) {
            errorElement.remove();
        }
    }, 5000);
}

// Close success modal
function closeOrderSuccess() {
    const successModal = document.getElementById('orderSuccessModal');
    const overlay = document.getElementById('orderSuccessOverlay');

    if (successModal) successModal.remove();
    if (overlay) overlay.remove();
}

// Close error message
function closeOrderError() {
    const errorMessage = document.getElementById('orderErrorMessage');
    if (errorMessage) {
        errorMessage.remove();
    }
}

// Update your existing order form submission
document.addEventListener('DOMContentLoaded', function() {
    // Find and update the order form
    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            // Collect form data
            const formData = new FormData(orderForm);
            const customerData = {
                name: formData.get('name'),
                phone: formData.get('phone'),
                email: formData.get('email'),
                address: formData.get('address'),
                city: formData.get('city'),
                pincode: formData.get('pincode')
            };

            // Validate required fields
            if (!customerData.name || !customerData.phone || !customerData.address) {
                showOrderError('Please fill in all required fields (Name, Phone, Address)');
                return;
            }

            // Get cart items (assuming you have a cart array)
            const cartItems = getCartItems(); // This should return your cart items

            if (!cartItems || cartItems.length === 0) {
                showOrderError('Your cart is empty. Please add some products first.');
                return;
            }

            // Prepare order data
            const orderData = {
                customer: customerData,
                items: cartItems,
                paymentMethod: formData.get('paymentMethod') || 'Google Pay',
                notes: formData.get('notes') || ''
            };

            // Submit order
            await submitOrder(orderData);
        });
    }
});

// You need to implement this function based on your cart structure
function getCartItems() {
    // This should return an array of cart items in this format:
    // [
    //   {
    //     name: "GOLD SPARKLERS 15CM(10PCS)",
    //     content: "1BOX",
    //     quantity: 2,
    //     actual_price: 176,
    //     discount_price: 88,
    //     total: 176
    //   }
    // ]

    // Replace this with your actual cart implementation
    return window.cartItems || [];
}

function clearCart() {
    // Clear your cart implementation
    window.cartItems = [];
    updateCartDisplay();
}