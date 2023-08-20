"use client"
import Link from 'next/link'
import { redirect, useRouter } from 'next/navigation'
import React, { useState } from 'react'

const SearchBar = ({query}:any) => {
    const [q, setQ] = useState(query)
    const router = useRouter()
  return (
    <div>
        <form onSubmit={(e) => {e.preventDefault(); router.push(`/search/${q}`)}}>
            <input placeholder={q} onChange={(e) => setQ((e.target.value).replace(/ /g, ' & '))} />
            <button type='submit' >Search</button>
        </form>
    </div>
  )
}

export default SearchBar