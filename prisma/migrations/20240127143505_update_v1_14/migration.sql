/*
  Warnings:

  - The primary key for the `Organizer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[orgName]` on the table `Organizer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `orgName` to the `Organizer` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_organizerId_fkey";

-- AlterTable
ALTER TABLE "Event" ALTER COLUMN "organizerId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Organizer" DROP CONSTRAINT "Organizer_pkey",
ADD COLUMN     "orgName" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Organizer_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Organizer_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "Organizer_orgName_key" ON "Organizer"("orgName");

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_organizerId_fkey" FOREIGN KEY ("organizerId") REFERENCES "Organizer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
