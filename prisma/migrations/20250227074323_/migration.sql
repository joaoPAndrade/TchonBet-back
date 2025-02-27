/*
  Warnings:

  - Added the required column `betOdd` to the `Bets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bets" ADD COLUMN     "betOdd" DOUBLE PRECISION NOT NULL;
