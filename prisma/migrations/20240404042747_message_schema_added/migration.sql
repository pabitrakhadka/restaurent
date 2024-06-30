/*
  Warnings:

  - The primary key for the `message` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `admin_id` on the `message` table. All the data in the column will be lost.
  - You are about to drop the column `m_id` on the `message` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `message` table. All the data in the column will be lost.
  - Added the required column `adminId` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `receiverId` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senderId` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userid` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `message` DROP FOREIGN KEY `Message_admin_id_fkey`;

-- DropForeignKey
ALTER TABLE `message` DROP FOREIGN KEY `Message_user_id_fkey`;

-- AlterTable
ALTER TABLE `message` DROP PRIMARY KEY,
    DROP COLUMN `admin_id`,
    DROP COLUMN `m_id`,
    DROP COLUMN `user_id`,
    ADD COLUMN `adminId` INTEGER NOT NULL,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `receiverId` INTEGER NOT NULL,
    ADD COLUMN `senderId` INTEGER NOT NULL,
    ADD COLUMN `userid` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `Message` ADD CONSTRAINT `Message_userid_fkey` FOREIGN KEY (`userid`) REFERENCES `user`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Message` ADD CONSTRAINT `Message_adminId_fkey` FOREIGN KEY (`adminId`) REFERENCES `admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
