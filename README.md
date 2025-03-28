# SuperPuper Service

A static multilingual website for SuperPuper Service with pricing plans and ordering system.

## Technologies

- Vue 3 (Composition API)
- TypeScript
- Tailwind CSS
- Vue i18n (English and Russian)
- Vue Router
- Pinia for state management
- Vite.js as build tool
- Markdown rendering for Terms of Service

## Features

- Multi-language support (English and Russian)
- Responsive design
- Three pricing plans (Free, Basic, Advanced)
- Terms of Service page with rendered markdown
- Order form with validation

## Development

```bash
npm install

npm run dev

npm run build
```

## Project Structure

- `/src/views/` - Main page components
- `/src/components/` - Reusable UI components
- `/src/layouts/` - Layout components
- `/src/stores/` - Pinia stores
- `/src/locales/` - Translation files
- `/src/markdown/` - Markdown content for Terms of Service
- `/src/router/` - Vue Router configuration
- `/src/i18n/` - i18n configuration

## Internationalization

- Uses vue-i18n for handling translations
- Translations are stored in `/src/locales/en.json` and `/src/locales/ru.json`
- Routes include language prefix (`/` for English, `/ru/` for Russian)
- Translations use proper indexing for array-like elements to ensure consistent rendering in both languages
