import { create } from 'zustand'

type CartItem = {
  productId: number
  quantity: number
}

type CartState = {
  items: CartItem[] | []
  addToCart: (productId: number) => void
}

export const useCartStore = create<CartState>((set, get) => {
  return {
    items: [],
    addToCart: (productId: number) => {
      const items = get().items

      if (!items) {
        set({ items: [{ productId, quantity: 1 }] })
      } else {
        const productInCart = items.find((item) => item.productId === productId)

        if (productInCart) {
          productInCart.quantity += 1
          set({ items })
        } else {
          set({ items: [...items, { productId, quantity: 1 }] })
        }
      }
    },
  }
})
