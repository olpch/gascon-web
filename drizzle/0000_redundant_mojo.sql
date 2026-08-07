CREATE TABLE `projects` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`createAt` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `staff` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`role` text NOT NULL,
	`email` text NOT NULL,
	`bio` text NOT NULL,
	`image` text NOT NULL,
	`linkedin` text NOT NULL,
	`instagram` text NOT NULL,
	`visible` text DEFAULT '[]' NOT NULL,
	`createAt` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`pwd` text NOT NULL,
	`name` text NOT NULL,
	`createAt` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL
);
