export interface Spot {
  name: string;
  fee: number;
  type: string;
  openingTime: number;
  closingTime: number;
  location: string;
  closingDate: closingDate;
  description: string;
}

export interface closingDate {
  twentyFourSeven: boolean;
  exceptHoliday: boolean;
  regular: number;
  arbitrary: Date;
}
