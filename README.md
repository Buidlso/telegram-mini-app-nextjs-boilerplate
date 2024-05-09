# Telegram Mini App Boilerplate

Get started building mini apps for Telegram with our straightforward Telegram Mini App Boilerplate. Simple, efficient, and well-documented – it's your perfect starting point for crafting engaging experiences. Dive in and create something awesome!

## Tech Stack

I'm using Nextjs with app router along with shadcn/ui, tailwindcss and tma.js(a telegram miniapp warapper), It will be fun lets goo.

- [**Nextjs**](https://nextjs.org/)
- [**shadcn/ui**](https://ui.shadcn.com/)
- [**Tailwind CSS**](https://tailwindcss.com/)
- [**tma.js**](https://docs.telegram-mini-apps.com/)

## Steps

In case you are customizing your own, you may follow the steps

1. Intall `@tma.js/sdk` and `@tma.js/sdk-react` packages

```bash
npm i @tma.js/sdk @tma.js/sdk-react
```

2. Create an Telegram mini app provider initial state component.

```typescript src/components/tma/tma-provider-initial-state.tsx
import { Logo } from "@/components/logo";

export function TmaProviderInitialState() {
  return (
    <div>
      <Logo className="w-12 h-12 text-primary-foreground" />
    </div>
  );
}
```

3. Create an Telegram mini app loading compnent

```typescript src/components/tma/tma-provider-loading.tsx
import { Loader } from "@/components/loader";

export function TmaProviderLoading() {
  return (
    <div className="flex text-muted-foreground gap-2 text-sm items-center">
      <Loader />
    </div>
  );
}
```

4. Also create an Telegram mini app error component

```typescript src/components/tma/tma-provider-error.tsx
type TmaProviderErrorProps = {
  error: unknown;
};

export function TmaProviderError({ error }: TmaProviderErrorProps) {
  const errorMessage =
    error instanceof Error ? error.message : JSON.stringify(error);

  return (
    <div className="h-screen grid place-items-center">
      <span>
        <strong>Oops. Something went wrong.</strong>
        <blockquote>
          <code>{errorMessage}</code>
        </blockquote>
      </span>
    </div>
  );
}
```

5. Now, lets create a Telegram mini app provider and make sure it's a client component, you can customise options as per your needs([docs](https://docs.telegram-mini-apps.com/packages/tma-js-sdk-react)), Also add those custom components we just created in the `<DisplayGate/>` component

```typescript src/components/tma/index.tsx
"use client";

import { PropsWithChildren } from "react";
import { DisplayGate, SDKProvider } from "@tma.js/sdk-react";
import { TmaProviderError } from "./tma-provider-error";
import { TmaProviderLoading } from "./tma-provider-loading";
import { TmaProviderInitialState } from "./tma-provider-initial-state";

export function TmaSDKProvider({ children }: PropsWithChildren) {
  return (
    <SDKProvider
      options={{ cssVars: true, acceptCustomStyles: true, async: true }}
    >
      <DisplayGate
        error={TmaProviderError}
        loading={TmaProviderLoading}
        initial={TmaProviderInitialState}
      >
        {children}
      </DisplayGate>
    </SDKProvider>
  );
}
```

6. Finally add tma provider to the root layout

```typescript src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TmaSDKProvider } from "@/components/tma";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Telegram Mini App",
  description: "A mini app for Telegram.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TmaSDKProvider>{children}</TmaSDKProvider>
      </body>
    </html>
  );
}
```

We are good to go...
