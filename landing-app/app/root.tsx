import "~/styles/global.css";
import { Scripts, Links, ScrollRestoration, Outlet } from "react-router";

import "~/utils/i18n.ts";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
        <meta
          name="description"
          content="A business page of a web-developer"
        />

        <Links />
        <title>i.fomin-dev</title>
      </head>

      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
export default function Root() {
  return (
    <>
      <Outlet />
    </>
  );
}
