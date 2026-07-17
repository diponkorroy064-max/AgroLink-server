# 🌱 AgroLink Server

The AgroLink Server is the backend API for the AgroLink platform. It provides authentication, resource management, file upload, and database services for Farmers, Students, Experts, Businesses, and Admins.

---

## 🚀 Features

### 🔐 Authentication

- Better Auth Authentication
- Session Management
- Role-based Authorization

### 📚 Resource Management

- Create Resource
- Get All Resources
- Get Farmer's Resources
- Update Resource
- Delete Resource

### ☁️ Cloudinary Integration

- Upload Images
- Upload PDF Files
- Automatic File URL Generation

### 🗄️ Database

- MongoDB Atlas
- CRUD Operations
- Resource Collection

### 📡 REST API

- Express.js API
- Modular Architecture
- Middleware Support
- Error Handling

---

# 🛠 Tech Stack

- Node.js
- Express.js
- TypeScript
- MongoDB
- Better Auth
- Cloudinary
- Multer
- Morgan
- Cookie Parser
- CORS
- Dotenv

---

# 📂 Project Structure

```text
src
│
├── config
│   ├── db.ts
│   ├── env.ts
│   └── cloudinary.ts
│
├── modules
│   └── farmers
│       ├── controllers
│       ├── routes
│       ├── services
│       └── middleware
│
├── utils
│   └── uploadToCloudinary.ts
│
├── app.ts
├── server.ts
└── types
```

---

# ⚙️ Environment Variables

Create a `.env` file in the project root.

```env
PORT=5000

# MongoDB
MONGODB_URI=your_mongodb_uri
DATABASE_NAME=AgroLink

# Better Auth
BETTER_AUTH_SECRET=your_secret
BETTER_AUTH_URL=http://localhost:3000

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Client URL
CLIENT_URL=http://localhost:3000
```

---

# 📦 Installation

Clone the repository

```bash
git clone https://github.com/your-username/agrolink-server.git
```

Move into the project

```bash
cd agrolink-server
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Server will run at

```text
http://localhost:5000
```

---

# 📡 API Endpoints

## Resource APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/resources` | Create a new resource |
| GET | `/api/resources` | Get all resources |
| GET | `/api/resources/my-resources/:authorEmail` | Get farmer's resources |

---

## Upload APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/upload` | Upload image or PDF to Cloudinary |

---

# 📂 Database Collections

### users

Stores user information.

### resources

Stores all agricultural resources.

Example document:

```json
{
  "_id": "...",
  "title": "Organic Farming",
  "category": "Organic Farming",
  "resourceType": "Tutorial",
  "location": "Dhaka",
  "tags": "Rice, Irrigation",
  "description": "...",
  "content": "...",
  "youtubeLink": null,
  "imageUrl": "...",
  "pdfUrl": "...",
  "author": "Diti Rani",
  "authorId": "...",
  "authorEmail": "...",
  "authorRole": "farmer",
  "status": "pending",
  "views": 0,
  "likes": 0,
  "createdAt": "...",
  "updatedAt": "..."
}
```

---

# 🔒 Middleware

- CORS
- Express JSON Parser
- Cookie Parser
- Morgan Logger

---

# 📁 File Upload

Supported image formats:

- JPG
- PNG
- WEBP

Supported document formats:

- PDF

Uploads are stored in Cloudinary:

```
agrolink/
    resources/
        images/
        pdfs/
```

---

# 📦 Main Dependencies

- express
- mongodb
- better-auth
- cloudinary
- multer
- streamifier
- cors
- cookie-parser
- dotenv
- morgan
- typescript
- ts-node-dev

---

# 🧪 Testing the API

Example using Postman:

### Create Resource

```http
POST /api/resources
```

### Get All Resources

```http
GET /api/resources
```

### Get Farmer Resources

```http
GET /api/resources/my-resources/:authorEmail
```

### Upload File

```http
POST /api/upload
```

---

# 🔮 Future Enhancements

- JWT Authorization
- Resource Approval Workflow
- Search & Filtering
- Pagination
- Comments & Reviews
- Likes & Bookmarks
- Notifications
- Analytics Dashboard
- AI-based Crop Recommendations
- API Documentation with Swagger

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository

2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push to GitHub

```bash
git push origin feature-name
```

5. Open a Pull Request.

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Developer

**Diponkor Roy**

Frontend Developer (MERN Stack)

- GitHub: https://github.com/diponkorroy064-max
- LinkedIn: https://www.linkedin.com/in/diponkorroy21010504
