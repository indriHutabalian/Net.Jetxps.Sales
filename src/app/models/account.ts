export class Account {
    userId: string;
    username: string;
    fullname: string;
    dateOfBirth: Date;
    phoneNumber: string;
    phoneExtension: string;
    address: string;
    email: string;
    zipCode: string;
    paymentMethod: string;
    paymentMethodName: string;
    wallet: Wallet;
}

export class Wallet {
    bonusCredit: number;
    topupCredit: number;
}