// coupons.ts
export interface Coupon {
  code: string
  used: boolean
}

export const coupons: Coupon[] = [
  { code: 'WELCOME10', used: false },
  { code: 'SAVE20', used: false },
  { code: 'SPRING30', used: false },
]