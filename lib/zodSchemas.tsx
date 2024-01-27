import { z } from 'zod';

export const eventSchema = z.object({
    name: z.string().min(10),
    description: z.string().min(20),
    duration: z.number().positive().min(30).max(480),
    cost: z.number().positive().min(0),
}).required({
    name: true,
    description: true,
    duration: true,
    cost: true,
})

export const loginSchema = z.object({
    username: z.string(),
    password: z.string()
}).required({
    username: true,
    password: true,
})