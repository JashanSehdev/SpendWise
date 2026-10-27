export interface Transaction {
  id: number;
  account_number: number;
  amount: number;
  counterParty: string;
  category: string;
  note: string;
  type: 'income' | 'expense';
  time: string;
  createdAt: string;
}
