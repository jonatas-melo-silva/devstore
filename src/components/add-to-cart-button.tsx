'use client'

import { useCartStore } from '@/store/cart-store'

export type AddToCartButtonProps = {
  readonly productId: number
}

export function AddToCartButton({ productId }: AddToCartButtonProps) {
  const { addToCart } = useCartStore()

  function handleAddProductToCart() {
    addToCart(productId)
  }

  return (
    <button
      type="button"
      onClick={handleAddProductToCart}
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 text-sm font-semibold text-white"
    >
      Adicionar ao carrinho
    </button>
  )
}
