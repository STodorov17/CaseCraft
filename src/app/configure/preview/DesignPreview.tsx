"use client"

import Phone from "@/components/Phone"
import { Button } from "@/components/ui/button"
import { BASE_PRICE, PRODUCT_PRICES } from "@/config/products"
import { cn, formatPrice } from "@/lib/utils"
import { COLORS, FINISHES, MODELS } from "@/validators/option-validator"
import { Configuration } from "@prisma/client"
import { useMutation } from "@tanstack/react-query"
import { ArrowRight, Check } from "lucide-react"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import { createCheckoutSession } from "./actions"
import { useRouter } from "next/navigation"
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import LoginModal from "@/components/LoginModal"

const DesignPreview = ({ configuration }: { configuration: Configuration }) => {
    const router = useRouter()
    const { id } = configuration
    const { user } = useKindeBrowserClient()
    const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false)

    useEffect(() => {
        toast(
            <div>
                <p className="font-bold">Successfully built your case!</p>
                <p className="text-sm">We move on to the final details of the order.</p>
            </div>,
            {
                position: "top-center",
                duration: 4000,
            }
        )
    }, [])

    const { color, model, finish, material } = configuration
    const tw = COLORS.find((supportedColor) => supportedColor.value === color)?.tw
    const { label: modelLabel } = MODELS.options.find(({ value }) => value === model)!

    let totalPrice = BASE_PRICE
    if (material === "polycarbonate") totalPrice += PRODUCT_PRICES.material.polycarbonate
    if (finish === "textured") totalPrice += PRODUCT_PRICES.finish.textured
    if (finish === 'matte') totalPrice += PRODUCT_PRICES.finish.matte
    if (finish === 'glossy') totalPrice += PRODUCT_PRICES.finish.glossy
    if (finish === 'frosted') totalPrice += PRODUCT_PRICES.finish.frosted
     if (material === 'tpu') totalPrice += PRODUCT_PRICES.material.tpu

    const { mutate: createPaymentSession } = useMutation({
        mutationKey: ["get-checkout-session"],
        mutationFn: createCheckoutSession,
        onSuccess: ({ url }) => {
            if (url) {
                router.push(url)
            } else {
                throw new Error("Unable to retrieve payment URL.")
            }
        },
        onError: () => {
            toast.error(
                <div>
                    <p className="font-bold">Something went wrong!</p>
                    <p className="text-sm">There was an error on our end. Please try again.</p>
                </div>,
                {
                    position: "top-center",
                    duration: 4000,
                }
            )
        },
    })

    const handleCheckout = () => {
        if (user) {
            createPaymentSession({ configId: id })
        } else {
            localStorage.setItem("configurationId", id)
            setIsLoginModalOpen(true)
        }
    }

    return (
        <>
            <LoginModal isOpen={isLoginModalOpen} setIsOpen={setIsLoginModalOpen} />

            <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Left: phone preview */}
                <div className="lg:col-span-5 flex justify-center">
                    <div className="bg-gradient-to-tr from-white to-white p-6 rounded-2xl shadow-lg">
                        <Phone
                            className={cn(`bg-${tw}`)}
                            imgSrc={configuration.croppedImageUrl!}
                        />
                    </div>
                </div>

                {/* Right: order details */}
                <div className="lg:col-span-7 flex flex-col gap-8">
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900">
                            Your {modelLabel} Case
                        </h3>
                        <div className="flex items-center gap-2 mt-2 text-green-600">
                            <Check className="h-5 w-5" /> In stock and ready to ship
                        </div>
                    </div>

                    {/* Highlights and Materials */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h4 className="font-semibold mb-3">Highlights</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li>⚡ Wireless charging</li>
                                <li>🛡 TPU shock absorption</li>
                                <li>♻ Eco packaging</li>
                                <li>🖼 High quality</li>
                            </ul>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <h4 className="font-semibold mb-3">Materials</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li>Premium material</li>
                                <li>Scratch-resistant coating</li>
                            </ul>
                        </div>
                    </div>

                    {/* Order summary */}
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <div className="space-y-3 text-gray-700">
                            <div className="flex justify-between">
                                <span>Base price</span>
                                <span>{formatPrice(BASE_PRICE / 100)}</span>
                            </div>
                            {finish === "textured" && (
                                <div className="flex items-center justify-between py-1 mt-2">
                                    <p className="text-gray-600">Textured finish</p>
                                    <p className="font-medium text-gray-900">
                                        {formatPrice(PRODUCT_PRICES.finish.textured / 100)}
                                    </p>
                                </div>
                            )}

                            {finish === "matte" && (
                                <div className="flex items-center justify-between py-1 mt-2">
                                    <p className="text-gray-600">Matte finish</p>
                                    <p className="font-medium text-gray-900">
                                        {formatPrice(PRODUCT_PRICES.finish.matte / 100)}
                                    </p>
                                </div>
                            )}

                            {finish === "glossy" && (
                                <div className="flex items-center justify-between py-1 mt-2">
                                    <p className="text-gray-600">Glossy finish</p>
                                    <p className="font-medium text-gray-900">
                                        {formatPrice(PRODUCT_PRICES.finish.glossy / 100)}
                                    </p>
                                </div>
                            )}

                            {finish === "frosted" && (
                                <div className="flex items-center justify-between py-1 mt-2">
                                    <p className="text-gray-600">Frosted finish</p>
                                    <p className="font-medium text-gray-900">
                                        {formatPrice(PRODUCT_PRICES.finish.frosted / 100)}
                                    </p>
                                </div>
                            )}

                            {material === "tpu" && (
                                <div className="flex items-center justify-between py-1 mt-2">
                                    <p className="text-gray-600">Flexible TPU material</p>
                                    <p className="font-medium text-gray-900">
                                        {formatPrice(PRODUCT_PRICES.material.tpu / 100)}
                                    </p>
                                </div>
                            )}

                            {material === "polycarbonate" && (
                                <div className="flex items-center justify-between py-1 mt-2">
                                    <p className="text-gray-600">Soft polycarbonate material</p>
                                    <p className="font-medium text-gray-900">
                                        {formatPrice(PRODUCT_PRICES.material.polycarbonate / 100)}
                                    </p>
                                </div>
                            )}
                            <hr className="my-2" />
                            <div className="flex justify-between text-lg font-semibold text-gray-900">
                                <span>Total</span>
                                <span>{formatPrice(totalPrice / 100)}</span>
                            </div>
                        </div>

                        <Button
                            onClick={handleCheckout}
                            className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 text-white font-semibold shadow-lg px-6 py-3 rounded-xl transition"
                        >
                            Checkout <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DesignPreview
