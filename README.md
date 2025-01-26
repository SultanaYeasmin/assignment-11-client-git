# QueryNest

**QueryNest** is a dynamic product recommendation platform that allows users to create, manage, and explore product-related queries and recommendations.

---

## 🌐 Live URLs

- **Frontend Live Link**: [QueryNest Frontend](https://assignment-11-sy11.web.app)
- **Backend Live Link**: [QueryNest Backend](https://assignment-11-server-side-xi.vercel.app/)

---

## 📋 Project Purpose

The purpose of QueryNest is to provide a platform for users to:
- Add, update, and delete product-related queries.
- View and explore queries created by others.
- Add, manage, and explore product recommendations.
- Enjoy a seamless, responsive, and interactive experience.

---

## 🚀 Key Features

### General Features:
- Fully responsive design optimized for mobile, tablet, and desktop.
- Secure environment with Firebase and MongoDB credentials stored in environment variables.
- Elegant and user-friendly interface with conditional navigation.

### Functional Features:
1. **User Authentication**:
   - Email/password-based login and Google Sign-In.
   - JWT-secured private routes.
2. **Queries Management**:
   - Add, view, update, and delete queries.
   - Search queries by product name.
3. **Recommendations**:
   - Add recommendations for specific queries.
   - View and delete personal recommendations.
4. **Dynamic Layouts**:
   - Toggle grid layout (1-column, 2-column, or 3-column view).
5. **Error Handling**:
   - Custom 404 page with a button to navigate to the homepage.

---

## 🛠️ Tech Stack

### Frontend:
- **React.js**: For building the user interface.
- **Tailwind CSS**: For responsive and utility-first styling.
- **DaisyUI**: Prebuilt components for enhanced design.
- **Firebase**: For hosting and authentication.

### Backend:
- **Node.js**: Runtime environment for the backend.
- **Express.js**: Framework for creating REST APIs.
- **MongoDB**: Database for managing queries and recommendations.
- **JWT**: For token-based authentication.
- **Vercel**: Hosting for the backend.

---

## 📂 Project Structure

### Frontend:
- **Pages**: Home, Queries, Recommendations, Login, 404.
- **Components**: Navbar, Footer, Query Cards, Forms, etc.
- **Firebase**: Authentication and deployment.

### Backend:
- **Routes**: APIs for managing queries and recommendations.
- **Middleware**: Authentication and error handling.

---

## 📦 Total npm Packages Used

| **Package Name**  | **Purpose**                      |
|--------------------|----------------------------------|
| `react`            | Core library for building UI.   |
| `react-router-dom` | Routing for navigation.         |
| `axios`            | HTTP client for API requests.   |
| `firebase`         | Authentication and hosting.     |
| `tailwindcss`      | Utility-first styling framework.|
| `daisyui`          | Prebuilt Tailwind components.   |
| `react-icons`      | Icons for design enhancement.   |
| `react-toastify`   | Notifications and alerts.       |
| `react-awesome-reveal` | Animations for visual effects.|
| `jsonwebtoken`     | Token-based authentication.     |
| `express`          | Backend framework for APIs.     |
| `cors`             | Middleware for handling CORS.   |
| `dotenv`           | Environment variable management.|
| `mongodb`          | Database for queries and recommendations.|
| `vercel`           | Hosting platform for backend.   |

---
