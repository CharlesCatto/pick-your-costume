# 🎭 Pick Your Costume

A full-stack web application for exploring, discovering, and learning about various costumes for different occasions. Built with modern web technologies and featuring a responsive design with theme support.

🌐 **Live Demo → [pick-your-costume-front.onrender.com](https://pick-your-costume-front.onrender.com/#/)**

![Pick Your Costume](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Node.js](https://img.shields.io/badge/Node.js-20+-green?style=for-the-badge&logo=node.js)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-blue?style=for-the-badge&logo=postgresql)

## ✨ Features

- **🎭 Extensive Costume Catalog**: 46+ costumes across 8 categories (Fantasy, Horror, Movie, Animal, Professional, Historical, Funny, Holiday)
- **🌍 Multi-language Support**: Full English/French translation with language switching
- **🎨 Dynamic Themes**: Switch between Halloween, Christmas, Carnival, and default themes
- **🔍 Smart Filtering**: Filter by category, price range, and difficulty level
- **🎲 Interactive Modes**: 
  - Random Mode: Discover costumes one by one
  - Guess Mode: Test your knowledge with blurred characteristics
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **⚡ Performance Optimized**: Lazy loading images, efficient state management

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **CSS Modules** for scoped styling
- **React Router** for navigation
- **Custom Hooks** for state management

### Backend
- **Node.js** with Express.js
- **TypeScript** for type safety
- **MySQL** with connection pooling
- **RESTful API** design

### Database
- **MySQL 8.0** with normalized schema
- **Costumes**, **Costume Translations**, **Tags**, and **Materials** tables
- **Seeding system** with 46+ complete costumes

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- MySQL 8.0+
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/pick-your-costume.git
cd pick-your-costume
```



2. **Install root dependencies**
```bash
npm install
```

3. **Install server dependencies**
```bash
cd server
npm install
```

4. **Install client dependencies**
```bash
cd ../client
npm install
```

5. **Set up environment variables**

```bash

# server/.env
DB_HOST=localhost
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=costume_db
PORT=3001

# client/.env
VITE_API_URL=http://localhost:3001

```

6. **Set up the database**

```bash
cd server
```
7. **Create and migrate database**
```bash
npm run migrate
```
8. **Seed with sample data**
```bash
npm run seed
```
9. **From root directory - starts both frontend and backend**
```bash
npm run dev
```

**Or run separately:**
#### Terminal 1 - Backend
```bash
cd server && npm run dev
``` 
#### Terminal 2 - Frontend  
```bash
cd client && npm run dev
```
#### The application will be available at:

- **Frontend :** [http://localhost:5173](http://localhost:5173)
- **Backend API :** [http://localhost:3001](http://localhost:3001)

## 📁 Project Structure
text
```bash
pick-your-costume/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── pages/         # Page components
│   │   ├── utils/         # Utility functions
│   │   └── data/          # Static data and translations
│   └── package.json
├── server/                 # Express backend
│   ├── src/
│   │   ├── modules/       # Feature modules
│   │   ├── database/      # Database configuration
│   │   └── middleware/    # Custom middleware
│   ├── database/          # SQL schema and seeds
│   └── package.json
└── package.json           # Root package.json
```

## 🎯 API Endpoints
Method	Endpoint	Description
GET	/api/costumes	Get all costumes
GET	/api/costumes?lang={language}	Get costumes with translations
GET	/api/costumes/category/{category}	Get costumes by category
GET	/api/costumes/{id}	Get specific costume
🎨 Theme System

The application supports dynamic theme switching:
```typescript

// Example theme configuration
const themes = {
  default: {
    primary: '220 70% 50%',
    background: '0 0% 100%',
    // ... more colors
  },
  halloween: {
    primary: '25 95% 53%',
    background: '240 5% 10%',
    // ... Halloween colors
  },
  christmas: {
    primary: '142 76% 36%',
    background: '0 0% 98%',
    // ... Christmas colors
  }
};
```

## 🌍 Translation System

Full i18n support with JSON-based translation files:
```json

{
  "en": {
    "costumes": {
      "title": "Costume Gallery",
      "filterByCategory": "Filter by Category"
    }
  },
  "fr": {
    "costumes": {
      "title": "Galerie des Costumes", 
      "filterByCategory": "Filtrer par Catégorie"
    }
  }
}
```

## 🤝 Contributing

    Fork the project

    Create your feature branch (git checkout -b feature/AmazingFeature)

    Commit your changes (git commit -m 'Add some AmazingFeature')

    Push to the branch (git push origin feature/AmazingFeature)

    Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE.md file for details.

### 🙏 Acknowledgments

    Inspired by DevTech Cards project

    UI inspiration from modern design systems

## 📞 Support

If you have any questions or issues, please open an issue on GitHub or contact me at [charlescatto@outlook.fr](mailto:charlescatto@outlook.fr)

# Happy costuming! 🎭✨
