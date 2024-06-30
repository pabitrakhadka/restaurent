/*
  Warnings:

  - Made the column `name` on table `superadmin` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `superadmin` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `superadmin` MODIFY `name` VARCHAR(191) NOT NULL,
    MODIFY `password` VARCHAR(191) NOT NULL,
    MODIFY `image` VARCHAR(191) NULL;
