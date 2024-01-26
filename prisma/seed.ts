import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const user = await prisma.user.upsert({
        where:{
            email:"test@gmail.com"
        },
        update:{},
        create:{
            email:"test@gmail.com",
            password:"password",
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