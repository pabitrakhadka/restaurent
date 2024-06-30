/*
  Warnings:

  - You are about to drop the `orderuserdata` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `orderuserdata` DROP FOREIGN KEY `OrderUserData_user_id_fkey`;

-- DropTable
DROP TABLE `orderuserdata`;

-- CreateTable
CREATE TABLE `Message` (
    `m_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `message` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`m_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Message` ADD CONSTRAINT `Message_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
