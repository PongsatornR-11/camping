# Camping Website

This is a web application for discovering and managing camping locations in Thailand, built with Next.js. Users can browse, search, and view details for various camping spots. They can also create an account to save their favorite locations and contribute by adding new ones.

## Features

- **User Authentication:** Secure sign-up and sign-in functionality using Clerk.
- **Browse Locations:** View a comprehensive list of camping locations with filtering and search options.
- **Map View:** See all camping spots on an interactive map.
- **Location Details:** Each location has a dedicated page with images, descriptions, and ratings.
- **Favorites:** Registered users can save their favorite camping locations.
- **User Contributions:** Authenticated users can add new camping locations to the platform.
- **Categorization:** Locations are organized by categories (e.g., mountain, beach, forest) and provinces in Thailand.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Authentication:** [Clerk](https://clerk.com/)
- **Database ORM:** [Prisma](https://www.prisma.io/)
- **UI Components:** [Shadcn UI](https://ui.shadcn.com/)
- **Mapping:** [Leaflet](https://leafletjs.com/) & [React Leaflet](https://react-leaflet.js.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](httpshttps://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.