ALTER TABLE `projects` ALTER COLUMN "year" TO "year" integer NOT NULL DEFAULT 2026;--> statement-breakpoint
ALTER TABLE `projects` ADD `area` integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE `projects` ADD `updateAt` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL;