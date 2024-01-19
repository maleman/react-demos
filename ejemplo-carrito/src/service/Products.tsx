
import { data } from '../data/data.json'

export class Product {

    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;

    constructor(id: number, title: string, description: string, price: number, discountPercentage: number,
        rating: number, stock: number, brand: string, category: string, thumbnail: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.discountPercentage = discountPercentage;
        this.rating = rating;
        this.stock = stock;
        this.brand = brand;
        this.category = category;
        this.thumbnail = thumbnail;
    }

}

export function productParseData(): Product[] {
    const pr: Product[] = []
    const items: Array<{
        id: number;
        title: string;
        description: string;
        price: number;
        discountPercentage: number;
        rating: number;
        stock: number;
        brand: string;
        category: string;
        thumbnail: string;
        images: string[];
    }> = JSON.parse(JSON.stringify(data))

    items.map((i) => pr.push(new Product(i.id, i.title, i.description, i.price, i.discountPercentage,
        i.rating, i.stock, i.brand, i.category, i.thumbnail)))

    return pr;
}


export function dataCategory(): string[] {
    const categories: string[] = []
    const items: Array<{
        id: number;
        title: string;
        description: string;
        price: number;
        discountPercentage: number;
        rating: number;
        stock: number;
        brand: string;
        category: string;
        thumbnail: string;
        images: string[];
    }> = JSON.parse(JSON.stringify(data))

    items.map((i) => {
        categories.push(i.category
            .substring(0, 1)
            .toUpperCase()
            .concat(i.category.substring(1)))
    })
    return Array.from(new Set(categories));
}