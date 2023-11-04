'use client'

import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'

export function FormSearchProducts() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const query = searchParams.get('q')

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const query = formData.get('q') as string

    if (!query) return null

    router.push(`/search?q=${query}`)
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700"
    >
      <Search className="h-5 w-5 text-zinc-500" />

      <input
        name="q"
        type="search"
        defaultValue={query ?? ''}
        placeholder="Buscar produtos..."
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
      />
    </form>
  )
}
