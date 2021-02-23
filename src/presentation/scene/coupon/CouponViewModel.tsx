import Coupon from "../../../entity/Coupon";
import CouponModel from "../../../model/ couponModel/CouponModel";

export default class CouponViewModel {
    coupons? : Coupon[];
    couponModel: CouponModel;

    constructor(couponModel : CouponModel){
        this.couponModel = couponModel;

        this.getCoupons();
    }

    getCoupons = () => {
        this.coupons = this.couponModel.getCoupon()
    }
}