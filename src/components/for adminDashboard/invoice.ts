// src/types/invoice.ts
export interface Invoice {
    id: number;
    client: string;
    amount: number;
    date: string;
    dueDate: string;
    status: 'Paid' | 'Unpaid' | 'Overdue';
  }
  