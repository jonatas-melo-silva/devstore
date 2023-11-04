import Image from 'next/image'
import Link from 'next/link'
import { CartWidget } from './cart-widget'
import { FormSearchProducts } from './form-search-products'

export function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devstore
        </Link>

        <FormSearchProducts />
      </div>
      <div className="flex items-center gap-4">
        <CartWidget />

        <div className="h-4 w-px bg-zinc-700" />

        <Link className="flex items-center gap-2 hover:underline" href="/">
          <span className="text-sm">Account</span>
          <Image
            height={24}
            width={24}
            className="h-6 w-6 rounded-full"
            src="https://github.com/jonatas-melo-silva.png"
            alt=""
          />
        </Link>
      </div>
    </div>
  )
}
