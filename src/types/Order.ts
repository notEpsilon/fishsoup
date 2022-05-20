export default interface Order {
    id?: number;
    userId?: number;
    productId?: number;
    address?: string;
    status: boolean;
    phoneNumber: string;
    city: string;
}