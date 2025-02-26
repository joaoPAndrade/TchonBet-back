/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `nome` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `senha` on the `User` table. All the data in the column will be lost.
  - The `id` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `birthDate` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wallet` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('win', 'loss', 'waiting');

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "nome",
DROP COLUMN "senha",
ADD COLUMN     "birthDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "wallet" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "Games" (
    "id" SERIAL NOT NULL,
    "teamA" TEXT NOT NULL,
    "teamB" TEXT NOT NULL,
    "oddA" DOUBLE PRECISION NOT NULL,
    "oddB" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "isFinished" BOOLEAN NOT NULL DEFAULT false,
    "time_ganhador" TEXT NOT NULL DEFAULT 'Ainda não encerrado',

    CONSTRAINT "Games_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bets" (
    "id" SERIAL NOT NULL,
    "idUser" INTEGER NOT NULL,
    "idGame" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "time" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'waiting',
    "team" TEXT NOT NULL,

    CONSTRAINT "Bets_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Bets" ADD CONSTRAINT "Bets_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bets" ADD CONSTRAINT "Bets_idGame_fkey" FOREIGN KEY ("idGame") REFERENCES "Games"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
