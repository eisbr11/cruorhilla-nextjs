[![Netlify Status](https://api.netlify.com/api/v1/badges/8334b48b-c1cf-4a56-82b4-cdb68defb499/deploy-status)](https://app.netlify.com/sites/awesome-hamilton-2da033/deploys)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Cruor Hilla Next.js page

This is the repository for the new 2020 Cruor Hilla website which will eventually be found here:
[www.cruorhilla.de](http://www.cruorhilla.de)  

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Test and Lint

This project uses eslint. Run 
```bash
npm run lint
``` 
to run the linter.

You can also run 
```bash
npm run lint:fix
``` 
to automatically fix some issues. 

## env File

You need to add environment information to connect to storyblok the api. For this you can copy the _.env.local.example_ and create you own _.env.local_ like this:

```dotenv
STORYBLOK_DEV_MODE=true/false
STORYBLOK_API_KEY=xxx
```

## Tech Stack for this project

* Yarn
* React
* Next.js
* Storyblok
* Typescript
* ESLint
* MaterialUI
* axios
* dot.env
