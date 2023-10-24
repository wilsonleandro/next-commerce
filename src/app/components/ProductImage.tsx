'use client'

import Image from "next/image"
import { ProductType } from "@/types/ProductType"
import { useState } from "react"

type ProductImageProps = {
  product: ProductType
  fill?: boolean
}

export default function ProductImage({ product, fill }: ProductImageProps) {
  const [loading, setLoading] = useState(true);

  return fill ? (
    <Image
      src={product.image} 
      fill 
      alt={product.title}
      className={`object-cover ${
        loading ? 
        'scale-110 blur-3xl grayscale' : 
        'scale-100 blur-0 grayscale-0'
      }`}
    />
  ) : (
    <Image
      src={product.image} 
      width={400}
      height={700}
      alt={product.title}
      className={`object-cover ${
        loading ? 
        'scale-110 blur-3xl grayscale' : 
        'scale-100 blur-0 grayscale-0'
      }`}
    />
  )
}