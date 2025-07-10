# 💬 ChatterSphere

ChatterSphere is a full-stack, real-time chat application inspired by WhatsApp. Built with the **MERN stack**, **Socket.IO**, **Zustand**, and **Tailwind CSS**, it supports one-on-one messaging, secure JWT authentication, and live user interactions like online status and message delivery.

---

## 📽️ Live Demo

Watch ChatSphere in action:

[[Watch Demo](https://www.youtube.com/watch?v=WbAIjNBla9o)

---

## 🚀 Features

- 🔐 **JWT Authentication** – Secure login and signup
- 💬 **One-to-One Real-Time Chat** via Socket.IO
- 🧠 **Zustand State Management** – Fast, clean global state
- 🟢 **Online/Offline Status** tracking
- 🔔 **Real-Time Notifications**
- 🔎 **Search Registered Users**
- ✅ **Message Delivery Confirmation**
- 🔒 **bcrypt Password Hashing**
- 🧩 **Modular Codebase** – Clean, scalable architecture
- 💅 **Responsive Tailwind UI**

---

## 🛠 Tech Stack

**Frontend**
- React.js
- Zustand
- Axios
- Tailwind CSS
- Socket.IO Client

**Backend**
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT
- bcrypt.js
- Socket.IO Server
  
---

## ⚙️ Getting Started

### 🔧 Backend Setup

```bash
cd Backend
npm install
```

### Create .env file in the Backend folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

### Start the backend server:

```bash
npm start
```

### Frontend Setup

```bash
npm run dev
```

##🧠 Future Roadmap – What's Next?

Here are planned upcoming features:

- ✅ Mark as Read – Show read receipts
- 🕒 Timestamps for Each Message
- ✍️ Typing Indicator
- 🕵️‍♂️ Last Seen Visibility
- 🖼️ Media Support:
- 📄 Document sharing
- 🎧 Audio messages
- 🎥 Video sharing
- 🖼️ Image uploads
  
🧑‍🎨 UI Improvements:
- Message bubble redesign
- Chat backgrounds & themes
- Responsive design enhancements
