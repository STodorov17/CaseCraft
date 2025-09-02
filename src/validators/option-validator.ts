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
        label:"Black",
        value:"black",
        tw:"zinc-900"
    },
    {
        label:"White",
        value:"white",
        tw:"white-50",
    },
    {
        label:"Blue",
        value:"blue",
        tw:"blue-950",
    },
    {
        label:"Rose",
        value:"rose",
        tw:"rose-950",
    },
    {
        label:"Purple",
        value:"purple",
        tw:"purple-700",
    },
    {
        label:"Green",
        value:"green",
        tw:"green-700",
    },
    {
        label:"Yellow",
        value:"yellow",
        tw:"yellow-700",
    },
    {
        label:"Pink",
        value:"pink",
        tw:"pink-700",
    },
    {
        label:"Red",
        value:"red",
        tw:"red-700",
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
      label: 'Silicone',
      value: 'silicone',
      description: "Soft, flexible and lightweight",
      price: PRODUCT_PRICES.material.silicone,
    },
    {
      label: "TPU (Hybrid)",
      value: "tpu",
      description: "Durable and resistant to scratches.",
      price: PRODUCT_PRICES.material.tpu,
    },
    {
      label: 'Soft Polycarbonate',
      value: 'polycarbonate',
      description: 'Hard-shell case with premium protection',
      price: PRODUCT_PRICES.material.polycarbonate,
    },
  ],
} as const

export const FINISHES = {
  name: 'finish',
  options: [
    {
      label: 'Smooth Finish',
      value: 'smooth',
      description: undefined,
      price: PRODUCT_PRICES.finish.smooth,
    },
    {
      label: "Matte",
      value: "matte",
      description: "Smooth, non-glossy look with anti-fingerprint coating.",
      price: PRODUCT_PRICES.finish.matte,
    },
    {
      label: "Glossy",
      value: "glossy",
      description: "Shiny finish that makes colors pop and adds a premium look.",
      price: PRODUCT_PRICES.finish.glossy,
    },
    {
      label: "Frosted",
      value: "frosted",
      description: "Semi-transparent effect with a subtle frosted texture.",
      price: PRODUCT_PRICES.finish.frosted,
    },
    {
      label: 'Textured Finish',
      value: 'textured',
      description: 'Soft grippy texture',
      price: PRODUCT_PRICES.finish.textured,
    },
  ],
} as const