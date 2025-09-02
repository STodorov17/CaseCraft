"use client"

import { useQuery } from "@tanstack/react-query"
import { getPaymentStatus } from "./actions"
import { useSearchParams } from "next/navigation"
import { Loader2, CheckCircle } from "lucide-react"
import { formatPrice } from "@/lib/utils"
import Link from "next/link"

const ThankYou = () => {
  const searchParams = useSearchParams()
  const orderId = searchParams.get("orderId") || ""

  const { data } = useQuery({
    queryKey: ["get-payment-status"],
    queryFn: async () => await getPaymentStatus({ orderId }),
    retry: true,
    retryDelay: 500,
  })

  if (data === undefined) {
    return (
      <div className="w-full mt-24 flex justify-center">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin text-zinc-500" />
          <h3 className="font-semibold text-xl">Loading your order...</h3>
          <p>This won't take long.</p>
        </div>
      </div>
    )
  }

  if (data === false) {
    return (
      <div className="w-full mt-24 flex justify-center">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin text-zinc-500" />
          <h3 className="font-semibold text-xl">Verifying your payment...</h3>
          <p>This might take a moment.</p>
        </div>
      </div>
    )
  }

  const { configuration, billingAddress, shippingAddress, amount } = data

  return (
    <div className="bg-slate-50 min-h-screen py-16 px-4">
      <div className="mx-auto max-w-3xl bg-white rounded-2xl shadow-lg p-8 sm:p-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <CheckCircle className="h-12 w-12 text-green-500" />
          <h1 className="mt-4 text-3xl font-bold text-gray-900">
            Thank you for your order!
          </h1>
          <p className="mt-2 text-gray-600">
            We've received your order and are now processing it.
          </p>
          <p className="mt-4 text-sm text-zinc-500">
            Order number: <span className="font-mono">{orderId}</span>
          </p>
        </div>

        {/* Product Preview */}
        <div className="mt-10 flex justify-center">
          <div className="p-4 rounded-xl border bg-slate-50">
            <img
              src={configuration.croppedImageUrl ?? "/phone-template.png"}
              alt="Your custom case"
              className="w-32 h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Info sections */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
          {/* Shipping */}
          <div className="p-4 border rounded-lg">
            <p className="font-medium text-gray-900">Shipping address</p>
            <address className="mt-2 not-italic text-gray-700">
              <span className="block">{shippingAddress?.name}</span>
              <span className="block">{shippingAddress?.street}</span>
              <span className="block">
                {shippingAddress?.postalCode} {shippingAddress?.city}
              </span>
            </address>
          </div>

          {/* Billing */}
          <div className="p-4 border rounded-lg">
            <p className="font-medium text-gray-900">Billing address</p>
            <address className="mt-2 not-italic text-gray-700">
              <span className="block">{billingAddress?.name}</span>
              <span className="block">{billingAddress?.street}</span>
              <span className="block">
                {billingAddress?.postalCode} {billingAddress?.city}
              </span>
            </address>
          </div>
        </div>

        {/* Payment & totals */}
        <div className="mt-8 p-6 border rounded-lg space-y-4 text-sm">
          <div className="flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p>{formatPrice(amount)}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p>{formatPrice(7)}</p>
          </div>
          <div className="border-t pt-4 flex justify-between font-semibold text-gray-900">
            <p>Total</p>
            <p>{formatPrice(amount + 7)}</p>
          </div>
          <p className="mt-4 text-green-600 font-medium">Payment status: Paid</p>
          <p className="text-gray-600">Shipping method: Econt (2 working days)</p>
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition"
          >
            Back to Home
          </Link>
          <Link
            href="/configure/upload"
            className="px-6 py-3 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition"
          >
            Create another case
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ThankYou
