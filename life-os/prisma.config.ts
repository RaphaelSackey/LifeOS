import { config as loadEnv } from "dotenv";
import { defineConfig } from "prisma/config";

loadEnv({ path: ".ENV", override: true });
loadEnv({ path: [".env.local", ".env"] });

const connectionString = process.env.DIRECT_URL;

export default defineConfig({
	schema: "prisma/schema.prisma",
	migrations: {
		path: "prisma/migrations",
	},
	...(connectionString ? { datasource: { url: connectionString } } : {}),
});
