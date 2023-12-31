'use client'
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { use } from "react";

type CheckoutButtonProps = {
  totalPrice: number
}

export default function CheckoutButton({ totalPrice }: CheckoutButtonProps) {
  const route = useRouter()
  const cartStore = useCartStore()
  const { user } = useUser()

  const handleCheckout = async () => {
    if (!user) {
      cartStore.toggleCart()
      route.push(`/sign-in?redirectUrl='/' `)
      return
    }
    cartStore.setCheckout('checkout')
  }

  return (
    <div>
      <p
        className="text-teal-600 font-bold"
        >Total: { formatPrice(totalPrice) }</p>
      
      <button
        onClick={handleCheckout}
        className="w-full- rounded-md bg-teal-600 text-white py-2 px-3 mt-2"
      >Finalizar compra</button>
    </div>
  )
}