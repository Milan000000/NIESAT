# N.I.E.S.A.T Website

Nigerian Innovation Engineers, Scientists and Applied Technologists (N.I.E.S.A.T) - NYSC CDS Group Website.

## Features
- **Modern UI**: Built with React, Tailwind CSS, and Motion.
- **Project Showcase**: Display past and ongoing engineering projects.
- **Member Management**: List executive and general members.
- **Resource Hub**: Downloadable technical materials and templates.
- **Community Requests**: Public form for submitting engineering needs.
- **Staff Portal**: Password-protected dashboard for content management.

## Tech Stack
- **Frontend**: React 19, Vite, TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Animations**: Motion
- **Persistence**: LocalStorage (Lightweight client-side database)

## Setup Instructions
1. Clone the repository.
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Build for production: `npm run build`

## Deployment
### Vercel
1. Connect your GitHub repository to Vercel.
2. Vercel will automatically detect the Vite project.
3. Deploy.

### GitHub Pages
1. Use the `gh-pages` package or GitHub Actions to deploy the `dist` folder.
2. Ensure the `base` path in `vite.config.ts` is set if not using a custom domain.

## Admin Access
- **URL**: `/staff`
- **Password**: `milan000000`

## Project Structure
- `/src/components`: Reusable UI elements (Navbar, Footer).
- `/src/pages`: Main application views.
- `/src/hooks`: Custom hooks for data management.
- `/src/data`: Initial dummy data.
- `/src/types.ts`: TypeScript interfaces.
