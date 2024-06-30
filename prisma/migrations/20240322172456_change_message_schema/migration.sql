/*
  Warnings:

  - You are about to drop the column `receiver` on the `message` table. All the data in the column will be lost.
  - You are about to drop the column `sender` on the `message` table. All the data in the column will be lost.
  - Added the required column `admin_id` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `message` DROP FOREIGN KEY `Message_receiver_fkey`;

-- DropForeignKey
ALTER TABLE `message` DROP FOREIGN KEY `Message_sender_fkey`;

-- AlterTable
ALTER TABLE `message` DROP COLUMN `receiver`,
    DROP COLUMN `sender`,
    ADD COLUMN `admin_id` INTEGER NOT NULL,
    ADD COLUMN `user_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Message` ADD CONSTRAINT `Message_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Message` ADD CONSTRAINT `Message_admin_id_fkey` FOREIGN KEY (`admin_id`) REFERENCES `admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
