import { Prisma, PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";
import { connect } from "http2";

function genereateSlug(orgName:string, eventName:string){
    return `${orgName}-${eventName}`.toLowerCase().replace(/\s/g, "-")
  }
const prisma = new PrismaClient();

async function main() {
    const password = await hash("password",12)
    const org = await prisma.organizer.upsert({
        where :{
            username : "testorg"
        },
        update:{},
        create:{
            username : "testorg",
            password,
            orgName : "testorg",
            name:"John Doe",
            email:"testorg@gmail.com",
            phone:"1234567890",
        }
    })    
    console.log("organizer created")
    const event1 = await prisma.event.upsert({
        where :{
            slug : "test-org-test-event"
        },
        update:{},
        create:{
            name : "test event",
            description:"test event",
            slug:genereateSlug(org.name, "test event"),
            location:"test location",
            date : new Date(),
            Organizer:{
                connect:{
                    id:org.id
                }
            }
        }
    })
    console.log("event created")

    const event2 = await prisma.event.upsert({
        where :{
            slug : "test-org-test-event-2"
        },
        update:{},
        create:{
            name : "test event 2",
            description:"test event 2",
            slug:genereateSlug(org.name, "test event 2"),
            location:"test location",
            date : new Date(),
            Organizer:{
                connect:{
                    id:org.id
                }
            }
        }
    })
    console.log("event 2 created")

    await prisma.participant.deleteMany({})
    console.log("participant deleted")

    const participants = await prisma.participant.createMany({
        data:[
            {
                name: "participant 1",
                email:"participant1@gmail.com",
                phone : "1234567890"
            },
            {
                name: "participant 2",
                email:"participant2@gmail.com",
                phone:"1234567890"
            }
        ]
    })

    console.log("participants created")

    await prisma.eventParticipant.deleteMany({})
    console.log("event participants deleted")

}

main().then(()=>{
     prisma.$disconnect()
}).catch(async (e)=>{
    console.log(e)
    await prisma.$disconnect()
    process.exit(1)
})