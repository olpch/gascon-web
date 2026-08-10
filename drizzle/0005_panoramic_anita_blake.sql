ALTER TABLE `users` ALTER COLUMN "avatar" TO "avatar" text NOT NULL DEFAULT '/img/avatar-m.jpg';--> statement-breakpoint
ALTER TABLE `users` ALTER COLUMN "role" TO "role" text NOT NULL DEFAULT 'user';