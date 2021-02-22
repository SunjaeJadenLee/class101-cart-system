import Coupon from "../../entity/Coupon";

export default interface ICouponModel {
    coupon: Coupon[];

    getCoupon: () => Coupon[]
}