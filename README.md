# Superhero Database

A full-stack CRUD web application for managing a superhero database. Browse heroes with pagination, view full details, add new heroes, edit or delete existing ones.

## Features

- **Hero list** — paginated grid (5 per page), each card shows the hero's image and nickname
- **Hero detail** — full info page: nickname, real name, origin, superpowers, catch phrase
- **Create** — add a new superhero with image upload
- **Edit** — update any hero's fields
- **Delete** — remove a hero directly from the list

## Stack

| Layer | Technology |
|---|---|
| UI | React 17, React Bootstrap 2, Bootstrap 5 |
| State | MobX 6 + mobx-react-lite |
| Routing | react-router-dom v5 |
| HTTP | axios |

## Getting Started

### Prerequisites

- Node.js 14+
- A running superhero backend API

### Install

```bash
git clone https://github.com/your-username/superhero_database.git
cd superhero_database/client
npm install
```

### Environment Variables

```bash
cp .env.example .env
```

Set your backend URL in `.env`:

```
REACT_APP_API_URL=http://localhost:5000/
```

### Run

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

## Project Structure

```
client/src/
├── components/
│   ├── AppRouter.js      # Renders routes array declaratively
│   ├── HeroItem.js       # Hero card (image, nickname, delete button)
│   ├── HeroesList.js     # Grid of HeroItem cards
│   ├── NavBar.js         # Top navigation with List / Add Hero buttons
│   └── Pages.js          # Pagination component
├── http/
│   ├── api.js            # API_URL constant (from env)
│   └── index.js          # Axios functions: CRUD for superheroes
├── pages/
│   ├── List.js           # Hero list page with pagination
│   ├── Info.js           # Hero detail page
│   ├── Create.js         # Add new hero form
│   └── Edit.js           # Edit hero form
├── store/
│   └── store.js          # MobX store: superheroes, page, limit, computed heroes
├── utils/
│   └── consts.js         # Route path constants
├── routes.js             # Routes defined as data array
└── App.js                # BrowserRouter + NavBar + AppRouter
```

## Superhero Model

| Field | Type | Description |
|---|---|---|
| `nickname` | string | Hero alias (e.g. "Spider-Man") |
| `real_name` | string | Civilian name |
| `origin_description` | string | How they got their powers |
| `superpowers` | string | List of abilities |
| `catch_phrase` | string | Signature quote |
| `image` | string | Image path served by the backend |
