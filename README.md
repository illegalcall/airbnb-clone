# Airbnb Clone - Next.js 13, TailwindCSS, Prisma, MongoDB, NextAuth

Features:
- Fully Responsive
- Google/Github authentication
- Booking/Reservation, Guest reservation cancellation, Owner reservation cancellation 
- Creation and deletion of properties
- Advanced search algorithm by category, date range, map location, number of guests, rooms and bathrooms
    - For example we will filter out properties that have a reservation in your desired date range to travel
- Favorites system
- Shareable URL filters
    - Lets say you select a category, location and date range, you will be able to share URL with a logged out friend in another browser and they will see the same results

Techinical Features:
- Tailwind design
- Next Auth authentication
- Image upload using Cloudinary CDN
- Client form validation and handling using react-hook-form
- Server error/success handling using react-toast
- Calendars with react-date-range



### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/AntonioErdeljac/next13-airbnb-clone.git
```

### Install packages

```shell
npm i
```

### Setup .env file using .env.example


```js
DATABASE_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_ID=
GITHUB_SECRET=
NEXTAUTH_SECRET=
```

### Setup Prisma

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
