Security Scan Dashboard (Frontend)

A responsive frontend implementation of a Security Scan Dashboard application built with React and Tailwind CSS.
The application simulates a cybersecurity scanning platform interface including authentication, dashboard analytics, and live scan monitoring.

This project focuses on component-based architecture, responsive design, and interactive UI elements.

Features
1. Authentication Screen

Split layout design with product information and signup form

Password visibility toggle

Simulated social login buttons (Google, Apple, Meta)

Form validation

Responsive layout for mobile devices

2. Dashboard

Sidebar navigation

Top navigation bar with actions

Scan statistics overview

Searchable and filterable scan table

Clickable scan rows that navigate to scan details

3. Active Scan Detail

Circular scan progress indicator

Step tracker (Spidering, Mapping, Testing, etc.)

Live console logs with tab switching

Vulnerability findings list

Scan status metrics

4. UI Interactions

Search functionality for scans

Filter dropdown

Toast notifications for actions (Export, Stop Scan)

Theme toggle (Dark/Light mode)

5. Responsive Design

The application supports:

Mobile (375px)

Tablet

Desktop (1280px+)

Responsive behavior includes:

Collapsible sidebar on mobile

Scrollable tables

Flexible layout stacking

Adaptive grid layout

Tech Stack

Frontend Framework

React (Functional Components + Hooks)

Styling

Tailwind CSS

Routing

React Router DOM

Icons

React Icons

Notifications

React Hot Toast

State Management

React Context API (Theme toggle)

Development Tooling

Vite

Project Structure
src
│
├── Components
│   ├── Auth
│   ├── Dashboard
│   │   ├── Layout
│   │   ├── Stats
│   │   ├── Table
│   │   ├── Toolbar
│   │   └── ScanDetail
│
├── Pages
│   ├── Signup.jsx
│   ├── Dashboard.jsx
│   └── ScanDetail.jsx
│
├── Context
│   └── ThemeContext.jsx
│
├── Data
│   └── scan.js
│
└── Assets

The structure separates pages, reusable components, layouts, and mock data, making it easy to scale and maintain.

Setup Instructions
1. Clone the repository
git clone https://github.com/yourusername/security-scan-dashboard.git
2. Navigate into the project
cd security-scan-dashboard
3. Install dependencies
npm install
4. Run the development server
npm run dev

The application will start at:

http://localhost:5173
Dark Mode

The application includes a global theme toggle implemented using the React Context API.

Features:

Global theme switching

Persistent theme using localStorage

Tailwind dark: utilities used throughout the UI

Mock Data

Since this project is frontend-only, mock JSON data is used to simulate scan results and vulnerability data.

This data is stored in:

src/Data/
Known Limitations

No backend integration

Authentication is simulated

Scan progress and logs are static mock data

Social login buttons are UI simulations only

No real scanning functionality

These can be integrated with backend APIs in a production system.

Deployment

The project can be deployed easily using Vercel.

Steps:

Push the project to GitHub

Import the repository into Vercel

Deploy using the default Vite configuration

Future Improvements

Potential improvements include:

Backend API integration

Real-time scan updates using WebSockets

Role-based authentication

Advanced filtering and sorting

Scan history and analytics

Author

Kanishk Kumar
Frontend Developer
