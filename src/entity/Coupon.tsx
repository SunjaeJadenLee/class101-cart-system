export default class Coupon {
    type?: 'rate' | 'amount' | string;
    title?: string;
    discountRate?: number;
    discountAmount?: number;
}