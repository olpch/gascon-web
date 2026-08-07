ALTER TABLE `projects` RENAME COLUMN "name" TO "title";--> statement-breakpoint
ALTER TABLE `projects` ADD `location` text;--> statement-breakpoint
ALTER TABLE `projects` ADD `description` text NOT NULL;--> statement-breakpoint
ALTER TABLE `projects` ADD `image` text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE `projects` ADD `coverImage` text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE `projects` ADD `visible` integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE `projects` ADD `order` integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE `projects` ADD `gallery` text DEFAULT '[]' NOT NULL;--> statement-breakpoint
ALTER TABLE `projects` ADD `category` text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE `projects` ADD `year` text DEFAULT '2026' NOT NULL;--> statement-breakpoint
ALTER TABLE `staff` ALTER COLUMN "image" TO "image" text NOT NULL DEFAULT '';--> statement-breakpoint
ALTER TABLE `staff` ALTER COLUMN "linkedin" TO "linkedin" text NOT NULL DEFAULT '';--> statement-breakpoint
ALTER TABLE `staff` ALTER COLUMN "instagram" TO "instagram" text NOT NULL DEFAULT '';--> statement-breakpoint
ALTER TABLE `staff` ALTER COLUMN "visible" TO "visible" integer NOT NULL;--> statement-breakpoint
ALTER TABLE `staff` ALTER COLUMN "visible" TO "visible" integer NOT NULL DEFAULT 0;--> statement-breakpoint
ALTER TABLE `staff` ADD `projects` text DEFAULT '[]' NOT NULL;