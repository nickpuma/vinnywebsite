# Vinny - AI Therapy Training Platform

## Overview

Vinny is an iPhone-first AI therapy training platform that enables therapists and counseling students to practice with AI patients in a consequence-free environment. The application consists of a professional marketing landing page built with React, showcasing the mobile app's features, pricing, and institutional partnerships. The platform emphasizes mobile-first design and accessibility, helping therapists "find their voice" through text and voice-based interactions with diverse AI patient scenarios.

The website is now complete and ready for deployment, featuring a comprehensive marketing presence positioned to compete with SimCare AI while highlighting Vinny's unique iPhone-first advantage.

## Recent Changes (January 9, 2025)

✓ Built complete marketing website with iPhone-focused positioning
✓ Implemented hero section with animated iPhone mockups showing therapy conversations
✓ Added comprehensive features section highlighting mobile-first advantages
✓ Created pricing section with Text ($20/month) and Voice ($100/month) plans
✓ Developed institutions section targeting universities and treatment centers
✓ Added FAQ section addressing common questions about iPhone-based training
✓ Fixed TypeScript issues for deployment readiness
✓ Website ready for live deployment

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **Animations**: Framer Motion for smooth page transitions and interactions
- **Design System**: Custom design tokens with CSS variables for theming

### Backend Architecture
- **Server**: Express.js with TypeScript for API endpoints
- **Data Storage**: In-memory storage implementation with interface for future database integration
- **API Design**: RESTful endpoints for contact form submissions and data retrieval
- **Development Setup**: Hot module replacement with Vite integration for seamless development

### Database Schema
- **Contacts Table**: Stores user inquiries with fields for name, email, institution, message, contact type, and timestamps
- **Schema Management**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Validation**: Zod schemas for runtime type checking and data validation

### Authentication and Authorization
- **Current State**: No authentication system implemented (marketing site focus)
- **Session Management**: Express sessions configured with PostgreSQL store (prepared for future use)

### Build and Deployment
- **Development**: Concurrent client and server development with hot reloading
- **Production Build**: Vite builds client to static assets, esbuild bundles server for Node.js
- **Asset Management**: Static file serving with proper caching strategies

## External Dependencies

- **UI Components**: Radix UI primitives for accessible component foundations
- **Database**: Neon serverless PostgreSQL for scalable data storage
- **Styling**: Google Fonts (Inter) for typography consistency
- **Development**: Replit integration for cloud-based development environment
- **Build Tools**: TypeScript compiler, PostCSS for CSS processing, Autoprefixer for browser compatibility
- **Validation**: Zod for schema validation and type safety
- **Date Handling**: date-fns for date manipulation and formatting