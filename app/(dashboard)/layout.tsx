import { ScrollArea } from "@/components/ui/scroll-area"
import Navbar from "./_components/Navbar"
import { Separator } from "@/components/ui/separator"

export default function DashboardLayout(
    { children }: {
        children: React.ReactNode
    }
) {
    return (
        <div className="flex w-full flex-col">
            <Navbar />
            <Separator className="my-1" />
            <ScrollArea className="h-full">
                <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
                    {children}
                </div>
            </ScrollArea>
        </div>
    )
}