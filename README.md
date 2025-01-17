# MyApp Project

This project consists of two main components:

## Frontend: MyApp
- **Framework**: React, Vite, Tailwind CSS
- **Features**:
  - User-friendly interface to view, create, and manage items (e.g., item listings).
  - Displays items with images, titles, descriptions, and prices.
  - Allows adding new listings and deleting existing ones.
  - Responsive design for various screen sizes using Tailwind CSS.
  - Single page application built with React for smooth user experience.
- **Styling**: Tailwind CSS for a modern, clean, and responsive design.

## Backend: API-MyApp
- **Framework**: Java Spring Boot
- **Database**: MySQL
- **Database Interaction**: JSP for handling database operations.
- **Features**:
  - Handles CRUD (Create, Read, Update, Delete) operations for item listings.
  - RESTful API endpoints for integration with the frontend:
    - **POST**: `/ads/add` - Add a new property listing.
    - **GET**: `/ads/get` - Retrieve all property listings.
    - **DELETE**: `/ads/{id}` - Delete a property listing by ID.
