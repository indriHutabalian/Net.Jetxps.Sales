export class PickUpOrder {
    id: number;
    code: string;
    jetIDCode: string;
    name: string;
    address: string;
    phoneNumber: string;
    email: string;
    pickUpTime: Date;
    pickUpItemCount: number;
    city: string;
    province: string;
    branchCode: string;
    branchName: string;
    status: string;
    actualPickUpItemCount: number;
    remainingPickUpItemCount: number;
    pic: string;
    position: string;
    productCode: string;
    estimatedPickUpTime: Date;
    reason: string;
    vehicle: string;
    createdDate: Date;
    checkedInDate: Date;
    description: string;
}