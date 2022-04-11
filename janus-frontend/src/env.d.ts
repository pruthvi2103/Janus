/// <reference types="vite/client" />
interface ImportMetaEnv {
	readonly VITE_BASE_URL: string;
	readonly VITE_LINKS_API_URL: string;
	readonly VITE_DOMAIN_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
