# E-Note Taking System

Notion-inspired app that allows users to create notes and organize them in a vertical tree-like structure.

## Features

- User Authentication using one-time password
- Read from database, create, update and delete notes
- Read from database, create, update and delete images
- Read from database, create, update and delete pages
- Reorder notes using drag-and-drop
- Change page title
- Change page cover image

## Tech Stack

The app is generated with Vite and uses the following technologies:

- React
- TypeScript
- DndKit (drag and drop)
- CSS Modules
- Supabase (database, authentication, storage)
- Netlify (hosting)

## Running the app

To run the app locally, you need to create a Supabase project and add the following environment variables to your `.env` file:

```
VITE_SUPABASE_URL=""
VITE_SUPABASE_API_KEY=""
```

Then run the following commands:

```
npm install
npm run dev
```
