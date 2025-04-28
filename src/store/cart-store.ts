import { create } from 'zustand';
import { CartItem } from '../types/cart';
import { Product } from '../types/product';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface CartState {
    items: CartItem[];
    addItem: (product: Product, selectedColor: string, selectedSize: string, quantity: number) => void;
    removeItem: (productId: number, selectedColor: string, selectedSize: string) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    clearCart: () => void;
    loadCart: () => Promise<void>;
    saveCart: () => Promise<void>;
}

const useCartStore = create<CartState>((set, get) => ({
    items: [],
    loadCart: async () => {
        try {
            const storedCart = await AsyncStorage.getItem('cart');
            if (storedCart) {
                set({ items: JSON.parse(storedCart) });
            }
        } catch (error) {
            console.error('Failed to load cart:', error);
        }
    },

    saveCart: async () => {
        try {
            await AsyncStorage.setItem('cart', JSON.stringify(get().items));
        } catch (error) {
            console.error('Failed to save cart:', error);
        }
    },
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
        get().saveCart();
    },

    removeItem: (productId, selectedColor, selectedSize) => {
        set((state) => ({
            items: state.items.filter(item => item.product.id !== productId || item.selectedColor != selectedColor || item.selectedSize != selectedSize)
        }));
        get().saveCart();
    },

    updateQuantity: (productId, quantity) => {
        set((state) => ({
            items: state.items.map(item =>
                item.product.id === productId
                    ? { ...item, quantity }
                    : item
            )
        }));
        get().saveCart();
    },

    clearCart: () => {
        set({ items: [] });
        get().saveCart();
    },
}));

export default useCartStore;