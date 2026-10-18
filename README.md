# Cascade - Hierarchical Task Management System

A modern, role-based task management and incident resolution system built with React and Material-UI. Cascade implements a hierarchical approach to task management, allowing organizations to efficiently manage and track tasks across different organizational levels.

## Features

- **Role-Based Access Control**: Multi-tier user system (L0, L1, L2, and Super Users)
- **Hierarchical Task Management**: Streamlined task assignment flow
- **Real-time Updates**: Live task and incident tracking
- **Custom Dashboards**: Role-specific analytics and metrics
- **Department Management**: Organize tasks and users by department
- **Modern UI**: Material Design-based interface with responsive design

## Tech Stack

- React 18
- Material-UI (MUI)
- Firebase (Authentication & Database)
- React Router DOM
- ApexCharts (Analytics)
- SASS (Styling)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure Firebase:
   - Create a Firebase project
   - Update configuration in `src/config/firebase.js`
4. Start development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── assets/      # Static assets
├── components/  # Reusable components
├── config/      # Configuration files
├── context/     # React context providers
├── hooks/       # Custom hooks
├── layouts/     # Layout components
├── pages/       # Page components
├── styles/      # Global styles
└── utils/       # Utility functions
```

## License

This project is licensed under the [Non-Commercial Use License](LICENSE).

## Security

This application implements role-based access control (RBAC). Ensure proper Firebase security rules configuration before deployment.
