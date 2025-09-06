// bg-blue-950 border-blue-950
// bg-zinc-900 border-zinc-900
// bg-rose-950 border-rose-950
// bg-purple-700 border-purple-700
// bg-green-700 border-green-700
// bg-yellow-700 border-yellow-700
// bg-pink-700 border-pink-700
// bg-red-700 border-red-700
// bg-white-50 border-white-50

import { PRODUCT_PRICES } from "@/config/products"

export const COLORS = [
    {
        label: "Черен",
        value: "black",
        tw: "zinc-900"
    },
    {
        label: "Бял",
        value: "white",
        tw: "white-50",
    },
    {
        label: "Син",
        value: "blue",
        tw: "blue-950",
    },
    {
        label: "Розов",
        value: "rose",
        tw: "rose-950",
    },
    {
        label: "Лилав",
        value: "purple",
        tw: "purple-700",
    },
    {
        label: "Зелен",
        value: "green",
        tw: "green-700",
    },
    {
        label: "Жълт",
        value: "yellow",
        tw: "yellow-700",
    },
    {
        label: "Розов",
        value: "pink",
        tw: "pink-700",
    },
    {
        label: "Червен",
        value: "red",
        tw: "red-700",
    },
] as const

export const MODELS = {
  name: 'models',
  options: [
    {
      label: 'iPhone X',
      value: 'iphonex',
    },
    {
      label: 'iPhone 11',
      value: 'iphone11',
    },
    {
      label: 'iPhone 12',
      value: 'iphone12',
    },
    {
      label: 'iPhone 13',
      value: 'iphone13',
    },
    {
      label: 'iPhone 14',
      value: 'iphone14',
    },
    {
      label: 'iPhone 15',
      value: 'iphone15',
    },
    {
      label: 'iPhone 16',
      value: 'iphone16',
    },
  ],
} as const

export const MATERIALS = {
  name: 'material',
  options: [
    {
      label: 'Силикон',
      value: 'silicone',
      description: "Мек, гъвкав и лек.",
      price: PRODUCT_PRICES.material.silicone,
    },
    {
      label: "TPU (Хибрид)",
      value: "tpu",
      description: "Здрав и устойчив на надрасквания.",
      price: PRODUCT_PRICES.material.tpu,
    },
    {
      label: 'Поликарбонат',
      value: 'polycarbonate',
      description: 'Твърд калъф с премиум защита.',
      price: PRODUCT_PRICES.material.polycarbonate,
    },
  ],
} as const

export const FINISHES = {
  name: 'finish',
  options: [
    {
      label: 'Гладко покритие',
      value: 'smooth',
      description: undefined,
      price: PRODUCT_PRICES.finish.smooth,
    },
    {
      label: "Мат",
      value: "matte",
      description: "Гладък, неметален вид с покритие против отпечатъци.",
      price: PRODUCT_PRICES.finish.matte,
    },
    {
      label: "Гланц",
      value: "glossy",
      description: "Лъскаво покритие, което подсилва цветовете и придава премиум визия.",
      price: PRODUCT_PRICES.finish.glossy,
    },
    {
      label: "Заскрежен",
      value: "frosted",
      description: "Полупрозрачен ефект с фин матиран завършек.",
      price: PRODUCT_PRICES.finish.frosted,
    },
    {
      label: 'Текстурирано покритие',
      value: 'textured',
      description: 'Мека и грапава текстура за по-добър захват.',
      price: PRODUCT_PRICES.finish.textured,
    },
  ],
} as const
