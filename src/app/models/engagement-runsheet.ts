import { ProspectClient } from ".";

export class EngagementRunsheet {
    constructor() {
        this.engagementRunsheetItems = []
    }
    id: number;
    code: string;
    branchCode: string;
    branchName: string;
    salesCode: string;
    salesName: string;
    note: string;
    status: string;
    createdDate: Date;
    updatedDate: Date;
    engagementRunsheetItems: EngagementRunsheetItem[];
}

export class EngagementRunsheetItem {
    constructor(client: ProspectClient) {
        this.prospectClientCode = client.code;
        this.prospectClientName = client.name;
        this.prospectClientEmail = client.email;
        this.prospectClientAddress = client.address;
        this.prospectClientZipCode = client.zipCode;
        this.prospectClientPhone = client.phone;
    }

    id: number;
    engagementRunsheetCode: string;
    prospectClientCode: string;
    prospectClientName: string;
    prospectClientEmail: string;
    prospectClientAddress: string;
    prospectClientPhone: string;
    prospectClientZipCode: string;
    isDone: boolean;
    index: number;
    engagementStatusCode: string;
    engagementStatusName: string;
    isSuccess: boolean;
    isCompleted: boolean;
    realizationDate: Date;
    remarks: string;
    isAdditionalClient: boolean;
    pic: string;
    phone: string;
    productTypeCode: string;
    productTypeName: string;
    sellingTypeCode: string;
    sellingTypeName: string;
    serviceTypeCode: string;
    serviceTypeName: string;
    industryType: string;
    volume: number;
    forecastAmount: number;
    forecastClose: string;
    image: string;
    mom: string;
    imageFileName: string;
    momFileName: string;
}
