/*
  Warnings:

  - Made the column `date` on table `Events` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Events" ALTER COLUMN "date" SET NOT NULL;
