# 🛒 Next.js E-commerce Website

A modern, full-featured **E-commerce web application** built with **Next.js**, **TypeScript**, and **Tailwind CSS**, featuring secure authentication, product management via **Wix**, and a clean, responsive UI.

---

## 🚀 Features

- ⚙️ **Next.js 15 (App Router)** – Server and client components for better performance
- 🛍️ **Wix Integration** – Manage and update products directly from Wix CMS
- 🔐 **NextAuth Authentication** – Supports both Google and credential logins
- 🎨 **Tailwind CSS + ShadCN UI** – Modern, fully responsive user interface
- 💖 **Favorites / Wishlist** – Save your favorite items for quick access
- 🔎 **Dynamic Filtering** – Filter products by category, price, or rating
- 🛒 **Cart Management** – Add, update, and remove products from the shopping cart
- 💳 **Checkout Flow** – Secure and intuitive checkout experience
- 🌐 **SEO Optimized** – Uses metadata and structured data for better visibility
- ☁️ **Deployed on Vercel** – Fast, global, and production-ready hosting

---

## 🧰 Tech Stack

| Category                 | Technologies                    |
| ------------------------ | ------------------------------- |
| **Framework**            | Next.js (App Router), React 19  |
| **Language**             | TypeScript                      |
| **Styling**              | Tailwind CSS, ShadCN/UI         |
| **Authentication**       | NextAuth (Google + Credentials) |
| **CMS / Product Source** | Wix CMS                         |
| **Hosting**              | Vercel                          |

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/Nazim6269/e-commerce-nextjs-one.git
cd e-commerce-nextjs-one
```

## Install Dependencies

```bash
yarn install
# or
npm install
```

## Run Development server

```bash
yarn dev
# or
npm run dev
```

### Open Your Browser

Visit: http://localhost:3000

## Screenshots

## Project Structure

```
app/
├─ [slug]/
│  └─ page.tsx
├─ api/
│  └─ auth/
│     └─ [...nextauth]/
│        └─ route.ts
├─ cart/
│  └─ page.tsx
├─ list/
│  └─ page.tsx
├─ profile/
│  └─ page.tsx
├─ signin/
│  └─ page.tsx
├─ signup/
│  └─ page.tsx
├─ globals.css
├─ layout.tsx
└─ page.tsx
components/
├─ ui/
│  ├─ button.tsx
│  ├─ card.tsx
│  ├─ input.tsx
│  └─ separator.tsx
├─ Add.tsx
├─ CartIcon.tsx
├─ CartItem.tsx
├─ CartList.tsx
├─ CartModal.tsx
├─ CategoryList.tsx
├─ CustomizeProducts.tsx
├─ DashboardIcon.tsx
├─ Filter.tsx
├─ Footer.tsx
├─ Menu.tsx
├─ Navbar.tsx
├─ NavIcons.tsx
├─ NotificationIcon.tsx
├─ OrderSummary.tsx
├─ ProductImages.tsx
├─ ProductList.tsx
├─ ProfileIcon.tsx
├─ SearchBar.tsx
├─ SettingModal.tsx
├─ Skeleton.tsx
├─ Slider.tsx
└─ SocialLogin.tsx
context/
└─ authContext.tsx
lib/
├─ db.ts
├─ dbQuery.ts
├─ utils.ts
└─ wixClientServer.ts
models/
└─ userModel.ts
public/
services/
├─ connectDB.ts
└─ localStorage.ts
.env
README.md
```

## 🧩 Key Functionalities

- Product Management via Wix CMS (fetching and updating dynamically)
- User Authentication with Google and Credentials (NextAuth)
- Cart management with local persistence
- Dynamic product filtering and sorting
- Fully responsive design with Tailwind CSS
- SEO optimization with dynamic metadata

## 💡 Future Improvements

- Add Stripe payment integration for real checkout flow
- Include user order history and tracking
- Enable product reviews and ratings
- Implement admin dashboard for analytics and inventory
- Add multi-currency and localization support

## 💻 Deployment

The project is deployed on Vercel for fast, secure, and serverless hosting.

🔗 Live Demo: [https://e-commerce-nextjs-one-ten.vercel.app](https://e-commerce-nextjs-one-ten.vercel.app/)

## 👨‍💻 Author

Nazim Uddin
Front-End Developer | React & Next.js Enthusiast

- 🌐 [Portfolio](https://portfolio-nextjs-one-tau.vercel.app/)
- 💼 [LinkedIn](https://www.linkedin.com/in/nazim-uddin-23a93a216/)
- 🐙 [GitHub](https://github.com/Nazim6269)
