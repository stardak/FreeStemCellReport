# Overview

This is a medical quiz application for Colombia Stem Cell Clinic that helps patients learn about stem cell therapy options for various conditions. The app guides users through a questionnaire about their medical condition (knee pain, shoulder issues, back pain, etc.), severity, duration, and previous treatments. After collecting responses, it provides personalized educational content about how stem cell therapy might help their specific situation.

The application features a multi-step quiz interface with condition selection, follow-up questionnaire, loading states, and personalized results with educational content including benefits, timeline, success factors, and scientific background information.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**React SPA with Vite**: The client is built as a single-page application using React with TypeScript, bundled by Vite for fast development and optimized production builds.

**Component Library**: Uses shadcn/ui components built on Radix UI primitives, providing accessible and customizable UI components with consistent styling via Tailwind CSS.

**State Management**: Uses React's built-in state management with hooks for component state and TanStack React Query for server state management and API data fetching.

**Routing**: Implements client-side routing with Wouter for lightweight navigation between pages.

**Styling**: Tailwind CSS with custom CSS variables for theming, including medical-specific color schemes and responsive design patterns.

## Backend Architecture

**Express.js Server**: RESTful API server using Express with TypeScript, handling quiz response submissions and retrieval.

**Memory Storage**: Currently uses in-memory storage (MemStorage class) for quiz responses, with a clean interface that can be easily swapped for database persistence.

**API Design**: Simple REST endpoints for creating and retrieving quiz responses with proper error handling and validation.

**Development Setup**: Vite integration for development with hot module replacement and error overlay for improved developer experience.

## Data Layer

**Schema Validation**: Uses Zod schemas for runtime validation of quiz responses and form data, ensuring type safety between client and server.

**Database Ready**: Drizzle ORM configuration is set up for PostgreSQL with proper schema definitions, migrations folder, and connection handling via environment variables.

**Type Safety**: Shared TypeScript types between client and server ensure consistent data structures across the application.

## Authentication & Security

**No Authentication**: Currently operates as an anonymous quiz application with no user authentication required.

**Input Validation**: Server-side validation using Zod schemas prevents invalid data submission.

**CORS & Security**: Basic Express security middleware for handling JSON requests and URL encoding.

# External Dependencies

## Database
- **Neon Database**: PostgreSQL database service configured via DATABASE_URL environment variable
- **Drizzle ORM**: Type-safe database toolkit for PostgreSQL with schema management and migrations

## UI Components
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives for React
- **Tailwind CSS**: Utility-first CSS framework for styling and responsive design
- **Lucide React**: Icon library providing consistent iconography throughout the application

## Development Tools
- **Vite**: Fast build tool and development server with TypeScript support
- **TanStack React Query**: Data fetching and caching library for API state management
- **Wouter**: Minimalist routing library for React applications

## Fonts & Assets
- **Google Fonts**: Integration with Inter, Architects Daughter, DM Sans, Fira Code, and Geist Mono fonts
- **Font Awesome**: Icon library for medical and UI icons used throughout the interface

## Form Handling
- **React Hook Form**: Performant form library with minimal re-renders and built-in validation
- **Hookform Resolvers**: Integration layer connecting React Hook Form with Zod validation schemas

## Development Environment
- **Replit Integration**: Specialized plugins and configurations for development within the Replit environment
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer plugins