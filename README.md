# NextJs Studies:

This repository is used exclusively to learn Next.js. I don't will follow any tutorial on Youtube, I only will read the documentation.

## Anotations
### Instalation 
To initialize a Next.js project will need run `npx create-next-app@latest` and follow what is asked.

In this project I will use the following tecnologies:
- Typescript (Learning);
- ESLint;
- Tailwind CSS (Learning);

## Creating routes
### Routers Systems
Next.js has two different Routers, the App Router and Pages Router.

#### App Router System
To create a new route on the App Router, is need create pages inside of `/app` folder with the name of route.

```bash
src/
└── app
    ├── favicon.ico
    ├── globals.css
    ├── layout.tsx
    ├── mypage
    │   └── page.tsx
    └── page.tsx
```

##### Creating a static route
To create a new static route, need create folder with the name of route and create a file with namename `page` .jsx or .tsx