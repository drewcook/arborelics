# ARBORELICS - Sonic Architect Web Application

## Overview

This is a futuristic web application for the musical artist ARBORELICS. The project features an immersive 3D environment with particle systems and nebula effects, creating a "sonic architecture" experience that blends ancient wisdom with future sound. The application is built with modern web technologies and focuses on creating an engaging visual experience for visitors.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **3D Graphics**: React Three Fiber for WebGL-based 3D rendering
- **Animations**: Framer Motion for smooth transitions and animations
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL support
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL session store with connect-pg-simple

### Development Architecture
- **Monorepo Structure**: Shared code between client and server in `/shared` directory
- **Type Safety**: End-to-end TypeScript with shared schema definitions
- **Hot Reload**: Vite HMR for frontend, tsx for backend development
- **Path Aliases**: Configured for clean imports (@/, @shared/, @assets/)

## Key Components

### 3D Scene Components
- **Scene.tsx**: Main 3D canvas container using React Three Fiber
- **ParticleSystem.tsx**: Animated particle system with 2000+ particles in sphere formation
- **Nebula.tsx**: Shader-based nebula effect with mouse interaction and color gradients

### UI Components
- **CustomCursor.tsx**: Interactive cursor that follows mouse with ethereal glow effect
- **LoadingScreen.tsx**: Animated loading sequence with progress tracking
- **HeroSection.tsx**: Main landing content with futuristic typography and animations

### Shared Schema
- **User Management**: Basic user schema with username/password authentication
- **Database Schema**: Drizzle ORM schema definitions in `/shared/schema.ts`

## Data Flow

1. **Application Bootstrap**: 
   - Vite loads React application
   - 3D scene initializes with loading screen
   - Query client sets up for API communication

2. **3D Rendering Pipeline**:
   - React Three Fiber creates WebGL context
   - Particle system generates dynamic positions
   - Nebula shaders respond to mouse movement
   - Animation loops update particle positions and rotations

3. **User Interaction**:
   - Mouse movements influence 3D elements
   - Custom cursor provides visual feedback
   - Smooth transitions between application states

4. **Backend Communication**:
   - Express server handles API routes (prefixed with /api)
   - Drizzle ORM manages database operations
   - Session management for user authentication

## External Dependencies

### Core Frontend Dependencies
- **@radix-ui/***: Accessible UI primitives for component library
- **@tanstack/react-query**: Server state management and caching
- **@react-three/fiber**: React renderer for Three.js
- **framer-motion**: Animation library for smooth transitions
- **wouter**: Lightweight routing solution

### Backend Dependencies
- **drizzle-orm**: Type-safe ORM for PostgreSQL
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **express**: Web application framework
- **connect-pg-simple**: PostgreSQL session store

### Development Dependencies
- **vite**: Build tool and development server
- **tailwindcss**: Utility-first CSS framework
- **typescript**: Static type checking
- **tsx**: TypeScript execution for Node.js

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React application to static assets in `/dist/public`
2. **Backend Build**: esbuild bundles server code to `/dist/index.js`
3. **Database Migration**: Drizzle kit handles schema migrations

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment mode (development/production)
- **Session Management**: PostgreSQL-based session storage

### Production Deployment
- **Static Assets**: Frontend served from `/dist/public`
- **API Server**: Node.js Express server on same domain
- **Database**: Serverless PostgreSQL via Neon Database
- **CDN**: Google Fonts for Orbitron and Inter typefaces

The application is designed to provide an immersive experience combining cutting-edge web technologies with artistic vision, creating a unique digital presence for the ARBORELICS brand.

## Changelog
- July 02, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.