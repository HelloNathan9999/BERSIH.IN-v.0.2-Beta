export interface Misi {
  id: string;
  title: string;
  description: string;
  rewardCoin: number;
  completed?: boolean;
  startDate?: string;
  endDate?: string;
}
