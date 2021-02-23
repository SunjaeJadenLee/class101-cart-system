import Coupon from "../../entity/Coupon";
import ICouponModel from "./ICouponModel";
import couponData from '../../ex_json/couponData'

export default class CouponModel implements ICouponModel {
    coupon: Coupon[] = [];

    constructor() {
        this.getCoupon();
    }

    getCoupon = () => {
        this.coupon = couponData;

        return this.coupon;
    }

}