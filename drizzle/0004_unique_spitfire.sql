ALTER TABLE `users` ADD `avatar` text NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `role` text NOT NULL;--> statement-breakpoint
ALTER TABLE `languages` ADD `data` text NOT NULL;--> statement-breakpoint
ALTER TABLE `languages` DROP COLUMN `title`;