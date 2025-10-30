export interface Voucher {
  id: string;
  title: string;
  description: string;
  requiredCoins: number;
  expiryDate?: string;
}
