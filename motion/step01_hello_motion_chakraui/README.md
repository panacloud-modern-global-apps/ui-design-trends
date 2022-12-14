# Hello Motion

[We will follow this](https://chakra-ui.com/getting-started/with-framer)

Note: It is important to note that we dont use "as prop" but "chakra factory function" method because in "use prop" method if there are props with the same name as the chakra props, they take precedence over the framer motion props. For example, a transition will take precedence over a framer motion prop and the framer motion feature will not work.

[Container Docs](https://chakra-ui.com/docs/components/container)

[Chakra factory function](https://chakra-ui.com/docs/styled-system/chakra-factory#chakra-factory-function)

[More on Chakra Factory Function](https://chakra-ui.com/community/recipes/as-prop#option-3-use-the-chakra-factory-function)

npx create-next-app step01_hello_motion_chakraui --ts

npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion

npm run dev

Update the _app.tsx and index.tsx files

Now open the following in your browser:

http://localhost:3000/







This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
