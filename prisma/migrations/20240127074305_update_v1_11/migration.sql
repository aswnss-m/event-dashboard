/*
  Warnings:

  - You are about to drop the column `event_name` on the `EventParticipant` table. All the data in the column will be lost.
  - You are about to drop the column `participant_name` on the `EventParticipant` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "EventParticipant" DROP COLUMN "event_name",
DROP COLUMN "participant_name";
