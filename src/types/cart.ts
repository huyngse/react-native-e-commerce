import { Product } from "./product";

export type CartItem = {
    product: Product,
    quantity: number,
    selectedSize: string,
    selectedColor: string,
}