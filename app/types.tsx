// types.ts
export interface OrderItem {
    id: number;
    name: string;
    description: string;
    quantity: number;
    price: number;
    image: string;
}

export interface Order {
    id: number;
    date: string;
    status: string;
    total: number;
    paymentMethod: string;
    deliveryAddress: string;
    items: OrderItem[];
}

export type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    rating: number;
    reviews: number;
  };
  