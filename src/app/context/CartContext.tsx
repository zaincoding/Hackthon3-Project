'use client';

import {useContext, createContext, useState, ReactNode} from 'react'

export interface CartItem {
  id: string;
  name:string;
  type:string;
  fuelCapacity:string;
  transmission:string;
  seatingCapacity:string;
  pricePerDay:string;
  total:number;
  quantity:number;
  tags:[];

  image_url: string;
}


interface cartContextType{
    cart: CartItem[];
    addToCart:(item:CartItem) => void;
    removeFromCart:(id:string) => void;
}

const CartContext = createContext<cartContextType | null>(null);

export const CartProvider = ({children}:{children: ReactNode})=>{
   const [cart, setCart] = useState<CartItem[]>([]);
   const addToCart = (item:CartItem) =>{
      setCart((prevCart) => {
         const existingItems = prevCart.find((cartItem) => cartItem.id === item.id);
         if(existingItems){
          return prevCart.map((cartItem) => cartItem.id === item.id
         ?{...cartItem, quantity: cartItem.quantity +1}
         :cartItem
        )
        
         }
          return [...prevCart,{...item, quantity: 1}]
      })
   }


   const removeFromCart = (id: string) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 } 
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

   return(
           <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
            {children}
           </CartContext.Provider>
   )
}

export const useCart = () =>{
    const context = useContext(CartContext);
    if(!context){
      throw new Error("useCart must be used with in the CartProvider.")
    }
    return context;
}