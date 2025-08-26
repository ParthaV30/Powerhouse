const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const fs = require('fs').promises;
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const moment = require('moment');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Email configuration
const transporter = nodemailer.createTransporter({
  service: 'gmail', // or your email service
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  }
});

// Create orders directory if it doesn't exist
const ordersDir = path.join(__dirname, 'orders');
async function ensureOrdersDir() {
  try {
    await fs.access(ordersDir);
  } catch {
    await fs.mkdir(ordersDir, { recursive: true });
  }
}

// Helper function to save order to file
async function saveOrder(order) {
  await ensureOrdersDir();
  const filename = `order_${order.orderId}_${moment().format('YYYY-MM-DD')}.json`;
  const filepath = path.join(ordersDir, filename);
  await fs.writeFile(filepath, JSON.stringify(order, null, 2));
  return filepath;
}

// Helper function to get all orders
async function getAllOrders() {
  try {
    await ensureOrdersDir();
    const files = await fs.readdir(ordersDir);
    const orders = [];

    for (const file of files) {
      if (file.endsWith('.json')) {
        const content = await fs.readFile(path.join(ordersDir, file), 'utf8');
        orders.push(JSON.parse(content));
      }
    }

    return orders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  } catch (error) {
    console.error('Error reading orders:', error);
    return [];
  }
}

// Email templates
function createBusinessEmailTemplate(order) {
  const itemsList = order.items.map(item => 
    `<tr>
      <td style="padding: 8px; border: 1px solid #ddd;">${item.name}</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${item.quantity}</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">₹${item.actual_price}</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">₹${item.discount_price}</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">₹${item.total}</td>
    </tr>`
  ).join('');

  return `
    <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #FF6B35, #DC143C); padding: 20px; text-align: center; color: white;">
        <h1>🎆 NEW ORDER - POWERHOUSE CRACKERS 🎆</h1>
        <p>Order ID: ${order.orderId}</p>
        <p>Date: ${moment(order.createdAt).format('DD/MM/YYYY hh:mm A')}</p>
      </div>

      <div style="padding: 20px; background: #f9f9f9;">
        <h2 style="color: #DC143C;">Customer Information</h2>
        <table style="width: 100%; margin-bottom: 20px;">
          <tr><td><strong>Name:</strong></td><td>${order.customer.name}</td></tr>
          <tr><td><strong>Phone:</strong></td><td>${order.customer.phone}</td></tr>
          <tr><td><strong>Email:</strong></td><td>${order.customer.email}</td></tr>
          <tr><td><strong>Address:</strong></td><td>${order.customer.address}</td></tr>
          <tr><td><strong>City:</strong></td><td>${order.customer.city}</td></tr>
          <tr><td><strong>Pincode:</strong></td><td>${order.customer.pincode}</td></tr>
        </table>

        <h2 style="color: #DC143C;">Order Details</h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <thead>
            <tr style="background: #DC143C; color: white;">
              <th style="padding: 10px; border: 1px solid #ddd;">Product</th>
              <th style="padding: 10px; border: 1px solid #ddd;">Qty</th>
              <th style="padding: 10px; border: 1px solid #ddd;">Original Price</th>
              <th style="padding: 10px; border: 1px solid #ddd;">Discount Price</th>
              <th style="padding: 10px; border: 1px solid #ddd;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${itemsList}
            <tr style="background: #f0f0f0; font-weight: bold;">
              <td colspan="4" style="padding: 10px; border: 1px solid #ddd; text-align: right;">Grand Total:</td>
              <td style="padding: 10px; border: 1px solid #ddd; text-align: right; color: #DC143C;">₹${order.grandTotal}</td>
            </tr>
          </tbody>
        </table>

        <h2 style="color: #DC143C;">Payment Information</h2>
        <p><strong>Payment Method:</strong> ${order.paymentMethod}</p>
        <p><strong>Payment Status:</strong> <span style="color: orange;">Pending</span></p>

        <div style="background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3>Action Required:</h3>
          <ol>
            <li>Contact customer at ${order.customer.phone} to confirm order</li>
            <li>Verify payment (Google Pay: 7904399942 or Bank Transfer)</li>
            <li>Arrange delivery to ${order.customer.address}</li>
            <li>Update order status</li>
          </ol>
        </div>
      </div>
    </div>
  `;
}

function createCustomerEmailTemplate(order) {
  const itemsList = order.items.map(item => 
    `<tr>
      <td style="padding: 8px; border: 1px solid #ddd;">${item.name}</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${item.quantity}</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">₹${item.discount_price}</td>
      <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">₹${item.total}</td>
    </tr>`
  ).join('');

  return `
    <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #FF6B35, #DC143C); padding: 20px; text-align: center; color: white;">
        <h1>🎆 ORDER CONFIRMED - POWERHOUSE CRACKERS 🎆</h1>
        <p>Thank you for your order, ${order.customer.name}!</p>
        <p>Order ID: ${order.orderId}</p>
      </div>

      <div style="padding: 20px;">
        <h2 style="color: #DC143C;">Your Order Summary</h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <thead>
            <tr style="background: #DC143C; color: white;">
              <th style="padding: 10px; border: 1px solid #ddd;">Product</th>
              <th style="padding: 10px; border: 1px solid #ddd;">Quantity</th>
              <th style="padding: 10px; border: 1px solid #ddd;">Price</th>
              <th style="padding: 10px; border: 1px solid #ddd;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${itemsList}
            <tr style="background: #f0f0f0; font-weight: bold;">
              <td colspan="3" style="padding: 10px; border: 1px solid #ddd; text-align: right;">Grand Total:</td>
              <td style="padding: 10px; border: 1px solid #ddd; text-align: right; color: #DC143C;">₹${order.grandTotal}</td>
            </tr>
          </tbody>
        </table>

        <div style="background: #d4edda; border: 1px solid #c3e6cb; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3>Payment Instructions:</h3>
          <p><strong>Google Pay:</strong> 7904399942</p>
          <p><strong>Bank Transfer:</strong></p>
          <ul>
            <li>Account Name: Powerhouse Crackers SBI Bank</li>
            <li>Account Number: 33261312190</li>
            <li>IFSC Code: SBIN0000990</li>
            <li>Branch: CBE City Branch</li>
          </ul>
          <p><strong>Note:</strong> Please send payment screenshot to +91 7904399942 after payment.</p>
        </div>

        <div style="background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3>What's Next?</h3>
          <ol>
            <li>We will call you at ${order.customer.phone} to confirm your order</li>
            <li>Complete payment using above methods</li>
            <li>Your order will be prepared and delivered to your address</li>
            <li>Enjoy your Diwali celebrations! 🎆</li>
          </ol>
        </div>

        <div style="text-align: center; margin-top: 30px; color: #666;">
          <p><strong>Contact Us:</strong></p>
          <p>📞 +91 7904399942 | ✉️ powerhouse.org.in@gmail.com</p>
      
        </div>
      </div>
    </div>
  `;
}

// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: 'Powerhouse Crackers Order System API',
    version: '1.0.0',
    status: 'active'
  });
});

// Submit new order
app.post('/api/orders', async (req, res) => {
  try {
    const { customer, items, paymentMethod, notes } = req.body;

    // Validate required fields
    if (!customer || !items || !items.length) {
      return res.status(400).json({ 
        error: 'Missing required fields: customer and items are required' 
      });
    }

    // Calculate totals
    const grandTotal = items.reduce((sum, item) => sum + item.total, 0);

    // Create order object
    const order = {
      orderId: `PH${Date.now()}${Math.random().toString(36).substr(2, 4).toUpperCase()}`,
      createdAt: new Date().toISOString(),
      customer,
      items,
      paymentMethod: paymentMethod || 'Google Pay',
      grandTotal,
      status: 'pending',
      notes: notes || '',
      paymentStatus: 'pending'
    };

    // Save order to file
    await saveOrder(order);

    // Send email to business
    const businessEmailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.BUSINESS_EMAIL || 'powerhousecrackers@gmail.com',
      subject: `🎆 New Order #${order.orderId} - ₹${grandTotal}`,
      html: createBusinessEmailTemplate(order)
    };

    // Send email to customer
    const customerEmailOptions = {
      from: process.env.EMAIL_USER,
      to: customer.email,
      subject: `Order Confirmed #${order.orderId} - Powerhouse Crackers`,
      html: createCustomerEmailTemplate(order)
    };

    // Send emails (don't wait for them to complete)
    transporter.sendMail(businessEmailOptions).catch(err => 
      console.error('Error sending business email:', err)
    );

    if (customer.email) {
      transporter.sendMail(customerEmailOptions).catch(err => 
        console.error('Error sending customer email:', err)
      );
    }

    res.status(201).json({
      success: true,
      message: 'Order placed successfully',
      orderId: order.orderId,
      grandTotal: order.grandTotal
    });

  } catch (error) {
    console.error('Error processing order:', error);
    res.status(500).json({ 
      error: 'Internal server error', 
      message: 'Failed to process order' 
    });
  }
});

// Get all orders (for admin)
app.get('/api/orders', async (req, res) => {
  try {
    const orders = await getAllOrders();
    res.json({
      success: true,
      orders,
      total: orders.length
    });
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

// Get specific order
app.get('/api/orders/:orderId', async (req, res) => {
  try {
    const { orderId } = req.params;
    const orders = await getAllOrders();
    const order = orders.find(o => o.orderId === orderId);

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.json({ success: true, order });
  } catch (error) {
    console.error('Error fetching order:', error);
    res.status(500).json({ error: 'Failed to fetch order' });
  }
});

// Update order status
app.patch('/api/orders/:orderId', async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status, paymentStatus, notes } = req.body;

    const orders = await getAllOrders();
    const orderIndex = orders.findIndex(o => o.orderId === orderId);

    if (orderIndex === -1) {
      return res.status(404).json({ error: 'Order not found' });
    }

    // Update order
    if (status) orders[orderIndex].status = status;
    if (paymentStatus) orders[orderIndex].paymentStatus = paymentStatus;
    if (notes) orders[orderIndex].notes = notes;
    orders[orderIndex].updatedAt = new Date().toISOString();

    // Save updated order
    await saveOrder(orders[orderIndex]);

    res.json({ 
      success: true, 
      message: 'Order updated successfully',
      order: orders[orderIndex]
    });
  } catch (error) {
    console.error('Error updating order:', error);
    res.status(500).json({ error: 'Failed to update order' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🎆 Powerhouse Crackers Order System running on port ${PORT}`);
  console.log(`🌐 Server URL: http://localhost:${PORT}`);
  console.log(`📧 Email configured: ${process.env.EMAIL_USER || 'Not configured'}`);
});