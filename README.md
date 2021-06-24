This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Cruor Hilla Next.js page

This is the repository for the new 2021 Cruor Hilla website found here:
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
