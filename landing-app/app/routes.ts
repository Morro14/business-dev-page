import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  route(":lang?", "routes/Language.tsx", [
    layout("routes/Layout.tsx", [
      index("routes/Index.tsx"),
      route("contact", "routes/Contact.tsx"),
      route("roadmap", "routes/Roadmap.tsx"),
      route("examples", "routes/Examples.tsx", []),
      route("demo/lease-app", "routes/demo/leaseApp/Main.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
