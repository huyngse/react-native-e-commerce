import { create } from 'zustand';
import { CartItem } from '../types/cart';
import { Product } from '../types/product';

interface CartState {
    items: CartItem[];
    addItem: (product: Product, selectedColor: string, selectedSize: string, quantity: number) => void;
    removeItem: (productId: number, selectedColor: string, selectedSize: string) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    clearCart: () => void;
}

const useCartStore = create<CartState>((set) => ({
    items: [],
    addItem: (product, selectedColor, selectedSize, quantity) => {
        set((state) => {
            const existingItem = state.items.find(item => item.product.id === product.id && item.selectedColor === selectedColor && item.selectedSize === selectedSize);
            if (existingItem) {
                return {
                    items: state.items.map(item =>
                        item.product.id === product.id && item.selectedColor === selectedColor && item.selectedSize === selectedSize
                            ? { ...item, quantity: item.quantity + quantity }
                            : item
                    )
                };
            }
            return { items: [...state.items, { product, selectedColor, selectedSize, quantity }] };
        });
    },

    removeItem: (productId, selectedColor, selectedSize) => {
        set((state) => ({
            items: state.items.filter(item => item.product.id !== productId || item.selectedColor != selectedColor || item.selectedSize != selectedSize)
        }));
    },

    updateQuantity: (productId, quantity) => {
        set((state) => ({
            items: state.items.map(item =>
                item.product.id === productId
                    ? { ...item, quantity }
                    : item
            )
        }));
    },

    clearCart: () => {
        set({ items: [] });
    },
}));

export default useCartStore;