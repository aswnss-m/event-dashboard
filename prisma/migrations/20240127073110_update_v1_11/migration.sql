/*
  Warnings:

  - Added the required column `event_name` to the `EventParticipant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `participant_name` to the `EventParticipant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EventParticipant" ADD COLUMN     "event_name" TEXT NOT NULL,
ADD COLUMN     "participant_name" TEXT NOT NULL;
