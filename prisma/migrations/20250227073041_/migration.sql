-- CreateEnum
CREATE TYPE "Status" AS ENUM ('win', 'loss', 'waiting');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "birthdate" TEXT NOT NULL,
    "wallet" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Games" (
    "id" SERIAL NOT NULL,
    "teamA" TEXT NOT NULL,
    "teamB" TEXT NOT NULL,
    "oddA" DOUBLE PRECISION NOT NULL,
    "oddB" DOUBLE PRECISION NOT NULL,
    "date" TEXT NOT NULL,
    "isFinished" BOOLEAN NOT NULL DEFAULT false,
    "winnerTeam" TEXT NOT NULL DEFAULT 'Ainda não encerrado',

    CONSTRAINT "Games_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bets" (
    "id" SERIAL NOT NULL,
    "idUser" INTEGER NOT NULL,
    "idGame" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "date" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'waiting',
    "team" TEXT NOT NULL,
    "time" TEXT NOT NULL,

    CONSTRAINT "Bets_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_cpf_key" ON "User"("cpf");

-- AddForeignKey
ALTER TABLE "Bets" ADD CONSTRAINT "Bets_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bets" ADD CONSTRAINT "Bets_idGame_fkey" FOREIGN KEY ("idGame") REFERENCES "Games"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
