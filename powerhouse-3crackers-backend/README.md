# Powerhouse Crackers - Order Management Backend

A Node.js backend system for handling online orders for Powerhouse Crackers fireworks business.

## Features

- 📦 **Order Processing**: Handle customer orders with validation
- 📧 **Email Notifications**: Automatic emails to business and customers
- 💾 **Order Storage**: Store orders in JSON files (easily upgradeable to database)
- 🎯 **Order Tracking**: Track order status and payment status
- 📊 **Order Management**: Admin endpoints to view and update orders
- 🔒 **Data Validation**: Comprehensive input validation
- 📱 **API Ready**: RESTful API for frontend integration

## Installation

1. **Clone or download the backend files**

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` file with your email credentials:
   ```env
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-app-password
   BUSINESS_EMAIL=powerhousecrackers@gmail.com
   PORT=3000
   ```

4. **Gmail Setup for Email Notifications:**
   - Enable 2-Factor Authentication in your Gmail account
   - Generate an App Password: https://myaccount.google.com/apppasswords
   - Use the App Password in EMAIL_PASS (not your regular password)

5. **Start the server:**
   ```bash
   # Development mode (with auto-restart)
   npm run dev

   # Production mode
   npm start
   ```

6. **Server will run on:** `http://localhost:3000`

## API Endpoints

### 1. Submit New Order
```
POST /api/orders
Content-Type: application/json

{
  "customer": {
    "name": "John Doe",
    "phone": "+91 9876543210",
    "email": "john@example.com",
    "address": "123 Main St",
    "city": "Coimbatore",
    "pincode": "641001"
  },
  "items": [
    {
      "name": "GOLD SPARKLERS 15CM(10PCS)",
      "content": "1BOX",
      "quantity": 2,
      "actual_price": 176,
      "discount_price": 88,
      "total": 176
    }
  ],
  "paymentMethod": "Google Pay",
  "notes": "Urgent delivery required"
}
```

### 2. Get All Orders (Admin)
```
GET /api/orders
```

### 3. Get Specific Order
```
GET /api/orders/PH1693123456ABCD
```

### 4. Update Order Status
```
PATCH /api/orders/PH1693123456ABCD
Content-Type: application/json

{
  "status": "confirmed",
  "paymentStatus": "paid",
  "notes": "Payment received via Google Pay"
}
```

### 5. Health Check
```
GET /api/health
```

## Order Flow

1. **Customer places order** through frontend
2. **Order is validated** and saved to file
3. **Emails are sent:**
   - Business owner receives detailed order notification
   - Customer receives order confirmation with payment instructions
4. **Business processes order:**
   - Calls customer to confirm
   - Verifies payment
   - Updates order status
   - Arranges delivery

## File Structure

```
powerhouse-backend/
├── server.js           # Main server file
├── package.json        # Dependencies
├── .env               # Environment variables (create from .env.example)
├── .env.example       # Environment template
├── README.md          # This file
└── orders/            # Order storage directory (auto-created)
    ├── order_PH1693123456ABCD_2025-08-26.json
    └── ...
```

## Order Storage

- Orders are stored as JSON files in the `orders/` directory
- Each order has a unique ID: `PH{timestamp}{random}`
- Files are named: `order_{orderId}_{date}.json`
- Easy to backup, migrate, or upgrade to database later

## Email Templates

The system includes professional HTML email templates:

- **Business Email**: Complete order details with customer info and action items
- **Customer Email**: Order confirmation with payment instructions and next steps

## Payment Integration

Currently supports:
- **Google Pay**: 9894866459
- **Bank Transfer**: SBI Bank details included in emails
- **Manual verification**: Business manually confirms payments

## Production Deployment

### Option 1: Traditional VPS/Server
```bash
# Install PM2 for process management
npm install -g pm2

# Start application
pm2 start server.js --name powerhouse-api

# Setup auto-restart on reboot
pm2 startup
pm2 save
```

### Option 2: Cloud Platforms
- **Heroku**: Easy deployment with built-in scaling
- **DigitalOcean App Platform**: Simple container deployment
- **AWS EC2**: Full control over server environment
- **Google Cloud Run**: Serverless container deployment

### Environment Variables for Production
```env
EMAIL_USER=business@powerhousecrackers.com
EMAIL_PASS=secure-app-password
BUSINESS_EMAIL=orders@powerhousecrackers.com
PORT=3000
NODE_ENV=production
```

## Security Considerations

- Input validation on all endpoints
- Rate limiting recommended for production
- HTTPS required for production
- Environment variables for sensitive data
- Order files should be backed up regularly

## Upgrade Path

This system is designed to easily upgrade:
- **Database**: Replace file storage with MongoDB/PostgreSQL
- **Authentication**: Add JWT-based admin authentication
- **Payment Gateway**: Integrate Razorpay/PayTM for automatic payments
- **SMS Notifications**: Add SMS alerts for order updates
- **Admin Dashboard**: Build web interface for order management

## Support

For questions or issues:
- 📞 Technical Support: Your development team
- 📧 Business Support: +91 9894866459
- 🌐 API Documentation: Available at `/api` endpoint