// Base path the site is served from (e.g. "/clint" on explainitnormal.co.uk).
// Kept in sync with `basePath` in next.config.ts via NEXT_PUBLIC_BASE_PATH.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// next/image emits `src` verbatim when `unoptimized` is set, so local asset
// paths need the base path applied manually for subdirectory deployments.
export const asset = (path: string): string =>
  `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
