import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardTitle, CardHeader, CardContent, CardDescription } from "@/components/ui/card";
import Icon from "@/lib/Icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getServerAuthSession } from "@/server/auth";
export default async function Dashboard() {
    const user = {
        orgName: "SSW",
        orgDescription: "SSW is a student run organization",
        contactName: "Aswin",
        contactEmail: "aswinlalsct@gmail.com",
        contactPhone: "1234567890",
    }
    const events = [
        {
            name: "Event 1",
            description: "Event 1 description",
            date: "12/12/2021",
            time: "12:00 PM",
            cost: 100,
            location: "Location 1",
            participants: 10
        },
        {
            name: "Event 2",
            description: "Event 2 description",
            date: "12/12/2021",
            time: "12:00 PM",
            cost: 150,
            location: "Location 1",
            participants: 10
        },
        {
            name: "Event 3",
            description: "Event 3 description",
            date: "12/12/2021",
            time: "12:00 PM",
            cost: 99,
            location: "Location 1",
            participants: 10
        },
        {
            name: "Event 4",
            description: "Event 4 description",
            date: "12/12/2021",
            time: "12:00 PM",
            cost: 10,
            location: "Location 1",
            participants: 10
        }
    ]
    const totalPartipants = events.reduce((acc, event) => acc + event.participants, 0)
    const totalRevenue = events.reduce((x, event) => x + (event.cost * event.participants), 0)
    const session = await getServerAuthSession()
    return (
        <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl lg:text-3xl font-bold">
                    Welcome {user.contactName}
                </h1>
                <Link href={'/newevent'}>
                    <Button>
                        New Event
                        <Icon name="plus" size={15} className="ml-2" />
                    </Button>
                </Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total Participants
                        </CardTitle>
                        <Icon name="users" size={20} />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                            {totalPartipants}
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total Events
                        </CardTitle>
                        <Icon name="users" size={20} />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                            {events.length}
                        </div>
                    </CardContent>
                </Card>
                <Card className="col-span-full lg:col-span-1">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total Revenue
                        </CardTitle>
                        <Icon name="indian-rupee" size={20} />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                            Rs.{totalRevenue}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}