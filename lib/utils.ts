import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function genereateSlug(orgName:string, eventName:string){
  return `${orgName}-${eventName}`.toLowerCase().replace(/\s/g, "-")
}