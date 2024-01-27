import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

async function main() {
    const password = await hash("password",12)
    const user = await prisma.user.upsert({
        where:{
            email:"test@gmail.com"
        },
        update:{},
        create:{
            email:"test@gmail.com",
            username : "test",
            password,
            name:"John Doe"
        },
    })
    console.log({user})
}

main().then(()=>{
     prisma.$disconnect()
}).catch(async (e)=>{
    console.log(e)
    await prisma.$disconnect()
    process.exit(1)
})