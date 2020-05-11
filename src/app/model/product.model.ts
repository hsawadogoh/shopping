export interface Avialability {
    available: boolean;
    type: string;
    feed?: number;
}

export interface Product {
    id: string;
    title: string;
    description: string;
    pictures: string[];
    price: number;
    category: string;
    state: string;
    createdAt: string;
    city: string;
    averageStart: number;
    availability: Avialability;
}
