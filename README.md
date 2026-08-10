# LinkTree Clone

A full-stack Linktree-style web application that allows users to create a personalized profile and manage multiple social media, product, and affiliate links from a single page.

Users can generate a personalized link page and share one URL containing all of their important links.

---

## 🌐 Project Overview

This project recreates the core functionality of a link-in-bio platform using Next.js and MongoDB.

Users can manage different types of links, including:

- Social media profiles
- Product links
- Affiliate links
- Other external links

Each user's links are associated with their unique handle and can be accessed through their personalized profile page.

---

## ✨ Key Features

- Personalized user link pages
- Unique dynamic handles
- Add and manage multiple links
- Support for social, product, and affiliate links
- MongoDB database integration
- Dynamic profile pages
- Link validation
- Responsive design
- Next.js API routes
- Reusable React components

---

## 🛠️ Tech Stack

### Frontend

- **Next.js**
- **React**
- **JavaScript**
- **CSS**

### Backend & Database

- **Next.js API Routes**
- **MongoDB**

### Development Tools

- **Git**
- **GitHub**
- **VS Code**

---

## 🗄️ Database

MongoDB is used to store and retrieve user and link information.

The database is used for:

- User profiles
- Unique handles
- Social media links
- Product links
- Affiliate links
- Dynamic profile data

The MongoDB connection is configured using environment variables to keep database credentials secure.

---

## 📂 Project Structure

```text
Link-tree-clone/
│
├── app/
│   ├── [handle]/
│   ├── api/
│   │   └── add/
│   ├── generate/
│   ├── layout.js
│   ├── page.js
│   └── globals.css
│
├── components/
│   └── Reusable UI components
│
├── lib/
│   └── Database configuration
│
├── public/
│   └── Static assets
│
├── .gitignore
├── next.config.mjs
├── package.json
├── jsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project

```bash
cd Link-tree-clone
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env.local` file in the project root:

```env
MONGODB_URI=your_mongodb_connection_string
```

Replace the value with your MongoDB connection string.

> **Important:** Never commit `.env.local` or your MongoDB credentials to GitHub.

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🎯 Development Highlights

### Dynamic User Pages

Each user can have a unique handle, allowing their links to be accessed through a personalized URL.

### MongoDB Integration

User and link data is stored and retrieved from MongoDB, allowing information to persist between sessions.

### Link Management

The application supports different types of external links, including social media, products, and affiliate links.

### API Routes

Next.js API routes are used to handle server-side operations such as adding and retrieving link information.

### Environment Variables

Sensitive database credentials are stored using environment variables instead of being hard-coded into the application.

### Responsive Interface

The application is designed to work across desktop, tablet, and mobile devices.

---

## 🧠 What I Learned

- Integrating MongoDB with Next.js
- Creating and using API routes
- Connecting frontend components with backend APIs
- Working with dynamic routes in Next.js
- Handling user-generated data
- Using environment variables for sensitive configuration
- Building database-driven dynamic pages
- Structuring a full-stack Next.js application

---

## 👨‍💻 Developer

**Alfaz**

Full-Stack JavaScript Developer

### Technologies

Next.js · React · JavaScript · MongoDB

---

## 📄 License

This project was developed as a full-stack learning and portfolio project.