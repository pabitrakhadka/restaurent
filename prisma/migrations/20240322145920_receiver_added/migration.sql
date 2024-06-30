/*
  Warnings:

  - You are about to drop the column `user_id` on the `message` table. All the data in the column will be lost.
  - Added the required column `receiver` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sender` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `message` DROP FOREIGN KEY `Message_user_id_fkey`;

-- AlterTable
ALTER TABLE `message` DROP COLUMN `user_id`,
    ADD COLUMN `receiver` INTEGER NOT NULL,
    ADD COLUMN `sender` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Message` ADD CONSTRAINT `Message_sender_fkey` FOREIGN KEY (`sender`) REFERENCES `user`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Message` ADD CONSTRAINT `Message_receiver_fkey` FOREIGN KEY (`receiver`) REFERENCES `admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
