import { create } from 'zustand'

type CartItem = {
  productId: string
  quantity: number
}

type CartState = {
  items: CartItem[] | []
  addToCart: (productId: string) => void
}

export const useCartStore = create<CartState>((set, get) => {
  return {
    items: [],
    addToCart: (productId: string) => {
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
