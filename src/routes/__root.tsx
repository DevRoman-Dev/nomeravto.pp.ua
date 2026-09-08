import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { PlateSearch } from "@/components/PlateSearch";
import { SiteLayout } from "@/components/SiteLayout";
function NotFoundComponent() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const lang = pathname === "/ru" || pathname.startsWith("/ru/") ? "ru" : "uk";
  
  return (
    <SiteLayout lang={lang} altHref={pathname}>
      <div className="flex min-h-[50vh] flex-col items-center justify-center px-4 py-12 text-center">
        <h1 className="font-plate text-7xl font-bold text-primary">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-foreground">
          {lang === "uk" ? "Сторінку не знайдено" : "Страница не найдена"}
        </h2>
        <p className="mt-2 text-muted-foreground max-w-md">
          {lang === "uk"
            ? "Можливо, вона була видалена або ви перейшли за хибним посиланням. Спробуйте знайти автомобіль за номером:"
            : "Возможно, она была удалена или вы перешли по неверной ссылке. Попробуйте найти автомобиль по номеру:"}
        </p>
        
        <div className="mt-8 w-full max-w-xl text-left bg-card p-4 sm:p-6 rounded-xl border border-border shadow-sm">
          <PlateSearch lang={lang} />
        </div>
        
        <div className="mt-8">
          <Link
            to={lang === "uk" ? "/" : "/ru"}
            className="chip chip-hover inline-flex items-center justify-center px-6 py-3 text-sm font-medium"
          >
            {lang === "uk" ? "На головну" : "На главную"}
          </Link>
        </div>
      </div>
    </SiteLayout>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Номерні знаки України — NOMERAVTO.PP.UA" },
      { name: "description", content: "Каталог номерних знаків України та дані про транспортні засоби." },
      
      { property: "og:title", content: "Номерні знаки України — NOMERAVTO.PP.UA" },
      { property: "og:description", content: "Каталог номерних знаків України та дані про транспортні засоби." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const lang = pathname === "/ru" || pathname.startsWith("/ru/") ? "ru" : "uk";

  return (
    <html lang={lang}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
