/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Public site URL including base path, without trailing slash (e.g. https://example.org). */
  readonly VITE_SITE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
