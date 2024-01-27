// import { eventSchema } from "@/lib/zodSchemas";
// import { z } from "zod";
// import { prisma } from "@/lib/prisma";
// import { genereateSlug } from "@/lib/utils";

// export async function createEvent({event}:{event:z.infer<typeof eventSchema>}){
//     // const slug = genereateSlug(event.name ,);
    
//     await prisma.event.create({
//         data:{
//             name : event.name,
//             description : event.description,
//             regFees : event.regFees,
//             duration : event.duration,
//         }
//     })
// }