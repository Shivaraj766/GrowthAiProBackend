# GrowthProAi - Backend API

A robust Node.js backend API for the GrowthProAi business intelligence platform. Provides RESTful endpoints for business management and analytics.

## 🚀 Features

- **RESTful API**: Clean and intuitive API endpoints
- **Business Management**: CRUD operations for business data
- **CORS Enabled**: Cross-origin resource sharing configured
- **Environment Variables**: Secure configuration management
- **Express.js**: Fast and minimal web framework

## 🛠️ Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd growthpro-backend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Configure your environment variables in `.env`

5. Start the server:
```bash
# Development mode with auto-restart
npm run dev

# Production mode
npm start
```

## 🔧 Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

## 🌐 API Endpoints

### Business Routes
- `GET /api/businesses` - Get all businesses
- `POST /api/businesses` - Create new business
- `GET /api/businesses/:id` - Get business by ID
- `PUT /api/businesses/:id` - Update business
- `DELETE /api/businesses/:id` - Delete business

## 📁 Project Structure

```
├── controllers/
│   └── businessController.js    # Business logic
├── routes/
│   └── businessRoutes.js       # API routes
├── index.js                    # Server entry point
├── package.json               # Dependencies and scripts
└── .env                      # Environment variables
```

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
NODE_ENV=development
# Add your database and other configuration here
```

## 🚀 Deployment

This API can be deployed on:
- **Railway** (Recommended)
- **Render**
- **Heroku**
- **DigitalOcean App Platform**

## 📝 API Documentation

### Create Business
```http
POST /api/businesses
Content-Type: application/json

{
  "name": "Business Name",
  "industry": "Technology",
  "description": "Business description"
}
```

### Get All Businesses
```http
GET /api/businesses
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

---

Built with ❤️ for GrowthProAi
