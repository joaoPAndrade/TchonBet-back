/*
  Warnings:

  - You are about to drop the column `time_ganhador` on the `Games` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Games" DROP COLUMN "time_ganhador",
ADD COLUMN     "winnerTeam" TEXT NOT NULL DEFAULT 'Ainda não encerrado';
