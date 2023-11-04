import { api } from '@/data/api'
import { Product } from '@/data/types/product'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export type SearchProps = {
  readonly searchParams: {
    q: string
  }
}

const ONE_HOUR = 60 * 60

async function searchProducts(query: string): Promise<Product[]> {
  const response = await api(`/products/search?q=${query}`, {
    next: {
      revalidate: ONE_HOUR,
    },
  })
  const products = await response.json()
  return products
}

export const metadata: Metadata = {
  title: 'Search',
}

export default async function Search({ searchParams }: SearchProps) {
  const { q: query } = searchParams

  if (!query) redirect('/')

  const products = await searchProducts(query)

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">{query}</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="group relative  flex items-center justify-center overflow-hidden rounded-lg bg-zinc-900"
          >
            <Image
              height={480}
              width={480}
              quality={100}
              src={`${product.image}`}
              className="transition-transform duration-500 group-hover:scale-105"
              alt=""
            />

            <div className="absolute bottom-10 right-28 flex max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
              <span className="truncate text-sm">{product.title}</span>
              <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                {product.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
