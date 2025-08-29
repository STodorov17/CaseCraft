import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { OrderStatus } from "@prisma/client";
import { Check, ChevronsUpDown } from 'lucide-react'

const LABEL_MAP: Record<keyof typeof OrderStatus, string> = {
    awaiting_shipment: "Awaiting Shipment",
    fulfilled: "Fulfilled",
    shipped: "Shipped",
}

const StatusDropdown = ({id, orderStatus}: {id:string, orderStatus: string}) => {
    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-52 justify-between items-center">
                {LABEL_MAP[orderStatus as keyof typeof OrderStatus] || orderStatus}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
        </DropdownMenuTrigger>
    </DropdownMenu>
}

export default StatusDropdown;