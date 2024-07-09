/*
  Warnings:

  - Added the required column `dia` to the `LeituraDiaria` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LeituraDiaria" ADD COLUMN     "dia" TIMESTAMP(3) NOT NULL;
