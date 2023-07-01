# NextJs Studies:

This repository is used exclusively to learn Next.js. I won't follow any tutorials on Youtube, I only will read the documentation.

## Annotations
The application that I will create to learn Next.js, will be a web page that will consume Github API.

### Home Page
- [x] Will list the Github users on the main page
- [x] Create pagination from a single request.
- [ ] Make pagination dynamic when don't know how much is left.

### User Page
- [ ] Show user information
- [ ] Back button.

#### Navigation experience
When the user clicks on the back button will go back to the previous page, previously cached to don't make multiple requests.

### Installation 
To initialize a Next.js project will need to run `npx create-next-app@latest` and follow what is asked.

In this project, I will use the following technologies:
- Typescript (Learning);
- ESLint;
- Tailwind CSS (Learning);

## Creating routes
### Routers Systems
Next.js has two different Routers, the App Router and the Pages Router.

#### App Router System
To create a new route on the App Router; is need to create pages inside of `/app` folder with the name of the route.

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
To create a new static route, need to create a folder with the name of the route and create a file with the name `page` .jsx or .tsx