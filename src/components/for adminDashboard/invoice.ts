// src/types/invoice.ts
export interface Invoice {
    id: number;
    client: string;
    amount: number;
    date: string;
    dueDate: string;
    status: 'Paid' | 'Unpaid' | 'Overdue';
  }
  

  // src/types/product.ts

export interface Product {
    id: number;
    photo: string;
    brand: String;
    itemImage: string;
    title: string;
    college: string;
    phone: string;
  }
  

  export interface User {
    id: number;
    name: string;
    email: string;
    gender: string;
    college: string;
    hostel: string;
    phone: string;
  }
  

  export interface Order{
    id: number;
    productname : string;
    demand : string;
    description: String;
    duration : Number;
    returnDate: Date;
    isreview: String;
  }