# Portfolio Builder

A modern portfolio website built with React, TypeScript, Vite, and Express.

## Features

- 🎨 Modern UI with Tailwind CSS and Radix UI components
- ⚡ Fast development with Vite
- 🎭 3D animations with React Three Fiber
- 📱 Fully responsive design
- 🚀 Optimized for production

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS, Radix UI
- **3D Graphics**: React Three Fiber, Three.js
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL (with Drizzle ORM)
- **Routing**: Wouter

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- PostgreSQL database (for backend features)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Portfolio-Builder-1
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory:
```env
DATABASE_URL=your_postgresql_connection_string
NODE_ENV=development
PORT=5000
```

4. Run database migrations (if using database):
```bash
npm run db:push
```

### Development

Run the development server:
```bash
npm run dev
```

This will start both the backend server and frontend dev server.

To run only the client:
```bash
npm run dev:client
```

The app will be available at `http://localhost:5000`

## Building for Production

Build the project:
```bash
npm run build
```

This will:
- Build the React frontend to `dist/public`
- Bundle the Express server to `dist/index.cjs`

Start the production server:
```bash
npm start
```

## Deployment to Vercel

### Prerequisites
- GitHub account
- Vercel account

### Steps

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect the configuration from `vercel.json`
   - The build settings are already configured:
     - Build Command: `npm run build`
     - Output Directory: `dist/public`
   - Click "Deploy"

3. **Environment Variables** (if needed):
   - In your Vercel project settings, add any required environment variables
   - For example: `DATABASE_URL`, `NODE_ENV`, etc.

4. **Automatic Deployments**:
   - Every push to the `main` branch will trigger a new deployment
   - Vercel will build and deploy automatically

### Vercel Configuration

The project includes a `vercel.json` file configured for static site deployment:
- Builds the project using `npm run build`
- Serves static files from `dist/public`
- Handles client-side routing with rewrites

## Project Structure

```
Portfolio-Builder-1/
├── client/              # Frontend React application
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   └── lib/         # Utilities and helpers
│   └── index.html
├── server/              # Backend Express server
│   ├── index.ts         # Server entry point
│   ├── routes.ts        # API routes
│   └── static.ts        # Static file serving
├── shared/              # Shared types and schemas
├── script/              # Build scripts
├── dist/                # Build output (generated)
└── vercel.json          # Vercel deployment config
```

## Available Scripts

- `npm run dev` - Start development server (backend + frontend)
- `npm run dev:client` - Start only frontend dev server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - Type check with TypeScript
- `npm run db:push` - Push database schema changes

## Notes

- The project is configured for static deployment on Vercel
- If you need to add API routes, you'll need to configure Vercel serverless functions
- Make sure to add all required environment variables in Vercel dashboard
- The build process creates optimized production bundles

## License

MIT

