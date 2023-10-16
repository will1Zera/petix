import { ReactNode, createContext, useEffect, useState } from "react";
import { Product } from "../pages/Home/components/ProductCard";
import { produce } from "immer";

export interface CartItem extends Product{
    quantity: number;
}

interface CartContextType{
    cartItems: CartItem[];
    cartQuantity: number;
    cartItemsTotal: number;
    addProductToCart: (product: CartItem) => void;
    changeCartItemQuantity: (cartItemId: number, type: "increase" | "decrease") => void;
    removeCartItem: (cartItemId: number) => void;
}

interface CartContextProviderProps{
    children: ReactNode;
}

const PRODUCT_ITEMS_STORAGE_KEY = "productDelivery:cartItems";

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps){
    const [cartItems, setCartItems] = useState<CartItem[]>(() =>{
        const storedCartItems = localStorage.getItem(PRODUCT_ITEMS_STORAGE_KEY);
        if(storedCartItems){
            return JSON.parse(storedCartItems);
        }
        return [];
    });

    const cartQuantity = cartItems.length;

    // Realiza a soma total do preço dos produtos
    const cartItemsTotal = cartItems.reduce((total, cartItem) => {
        return total + cartItem.price * cartItem.quantity;
    }, 0)

    // Função que adiciona um novo produto ao carrinho
    function addProductToCart(product: CartItem){
        const productAlreadyExistsInCart = cartItems.findIndex(
            (cartItem) => cartItem.id === product.id
        );

        const newCart = produce(cartItems, (draft) =>{
            if(productAlreadyExistsInCart < 0){
                // Adiciona um novo produto ao carrinho
                draft.push(product);
            } else{
                // Incrementa a quantidade do produto já existente
                draft[productAlreadyExistsInCart].quantity += product.quantity;
            }
        });

        setCartItems(newCart);
    }

    // Função que altera a quantidade de um produto no carrinho
    function changeCartItemQuantity(cartItemId: number, type: "increase" | "decrease"){
        const newCart = produce(cartItems, (draft) =>{
            const productExistsInCart = cartItems.findIndex(
                (cartItem) => cartItem.id === cartItemId
            );

            if(productExistsInCart >= 0){
                const item = draft[productExistsInCart];
                draft[productExistsInCart].quantity = type === "increase" ? item.quantity + 1 : item.quantity -1;
            };
        });

        setCartItems(newCart);
    };

    // Função que remove um produto do carrinho
    function removeCartItem(cartItemId: number){
        const newCart = produce(cartItems, (draft) =>{
            const productExistsInCart = cartItems.findIndex(
                (cartItem) => cartItem.id === cartItemId
            );

            if(productExistsInCart >= 0){
                draft.splice(productExistsInCart, 1);
            };
        });

        setCartItems(newCart);
    };

    // Salva a todo momento os produtos que estão no carrinho no local storage
    useEffect(() => {
        localStorage.setItem(PRODUCT_ITEMS_STORAGE_KEY, JSON.stringify(cartItems));
    }, [cartItems]);

    return <CartContext.Provider value={{ cartItems, cartQuantity, cartItemsTotal, addProductToCart, changeCartItemQuantity, removeCartItem }}>{children}</CartContext.Provider>
}