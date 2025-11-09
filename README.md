# HERMOUCH Store

A modern, luxury streetwear e-commerce platform built with React and Vite. HERMOUCH offers premium fashion pieces that blend contemporary style with timeless elegance.

## 🚀 Features

### Shopping Experience
- **Product Catalog**: Browse through a curated collection of luxury streetwear
- **Product Details**: Detailed product pages with size selection, multiple images, and descriptions
- **Category Filtering**: Filter products by category (T-Shirts, Hoodies, Outerwear, Sneakers, Pants, Caps)
- **Shopping Cart**: Add items to cart with quantity management
- **Size Validation**: Ensures size selection for products that require it

### Homepage
- **Hero Section**: Video background with brand messaging
- **Featured Collection**: Showcase of top products
- **About Section**: Brand story, values, and statistics
- **Testimonials**: Customer reviews and feedback
- **Smooth Animations**: Hover effects on cards and testimonials

### Additional Pages
- **Contact Page**: Contact form with business information and social media links
- **Checkout Flow**: Complete checkout process with order confirmation

## 🛠️ Tech Stack

- **React 19.1.1** - UI library
- **React Router DOM 7.9.5** - Client-side routing
- **Vite 7.1.7** - Build tool and dev server
- **Bootstrap 5.3.8** - CSS framework
- **Bootstrap Icons** - Icon library

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd hermouch-store
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in terminal)

## 🏗️ Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

Preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
hermouch-store/
├── public/
│   ├── images/          # Product images and assets
│   ├── videos/          # Brand video
│   └── products.json    # Product data
├── src/
│   ├── Components/
│   │   ├── Common/
│   │   │   └── ScrollToTop.jsx
│   │   ├── Home/        # Homepage-specific sections
│   │   │   ├── Hero.jsx
│   │   │   ├── Featured.jsx
│   │   │   ├── About.jsx
│   │   │   └── Testimonials.jsx
│   │   ├── Layout/      # Layout components (used across pages)
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   ├── Pages/       # Full page components
│   │   │   ├── HomePage.jsx
│   │   │   ├── ShopPage.jsx
│   │   │   ├── ProductDetailPage.jsx
│   │   │   ├── CartPage.jsx
│   │   │   ├── CheckoutPage.jsx
│   │   │   ├── OrderConfirmationPage.jsx
│   │   │   └── ContactPage.jsx
│   │   └── Product/     # Product-related components
│   │       └── ProductListPage.jsx
│   ├── App.jsx          # Main app component with routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── package.json
└── vite.config.js
```

## 🎨 Design Features

- **Responsive Design**: Fully responsive across all device sizes
- **Modern UI**: Clean, minimalist design with luxury aesthetics
- **Smooth Animations**: Hover effects and transitions throughout
- **Color Scheme**: Elegant color palette with gold accents (#D4AF37)
- **Typography**: Playfair Display for headings, system fonts for body

## 🛍️ Product Features

- Products support multiple sizes
- Multiple product images (main and hover image)
- Price display in Moroccan Dirham (DH)
- Product categories and types
- Detailed product descriptions

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔗 Routes

- `/` - Homepage
- `/shop` - Product catalog
- `/product/:id` - Product detail page
- `/cart` - Shopping cart
- `/checkout` - Checkout page
- `/checkout/confirmation` - Order confirmation
- `/contact` - Contact page

## 📧 Contact Information

- **Email**: support@hermouch.com
- **Phone**: +212 650502976
- **Business Hours**: Mon-Fri: 9AM-6PM UTC +1

## 📄 License

This project is private and proprietary.

## 👨‍💻 Development

Built with modern React practices:
- Functional components with hooks
- React Router for navigation
- State management with useState
- Responsive design with Bootstrap and custom CSS
- Optimized images and lazy loading

---

© 2024 HERMOUCH. All rights reserved.