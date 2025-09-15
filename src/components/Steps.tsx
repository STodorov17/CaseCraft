'use client'

import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const STEPS = [
  {
    name: 'Стъпка 1',
    description: 'Добави снимка',
    url: '/upload',
  },
  {
    name: 'Стъпка 2',
    description: 'Персонализирай своя дизайн',
    url: '/design',
  },
  {
    name: 'Стъпка 3',
    description: 'Прегледай и поръчай',
    url: '/preview',
  },
]

const Steps = () => {
  const pathname = usePathname()

  return (
    <ol className="flex flex-col lg:flex-row items-center justify-around gap-4 bg-white p-6 rounded-lg border border-gray-200">
      {STEPS.map((step, i) => {
        const isCurrent = pathname.endsWith(step.url)
        const isCompleted = STEPS.slice(i + 1).some((step) =>
          pathname.endsWith(step.url)
        )
        const imgPath = `/step${i + 1}.png`

        return (
          <li key={step.name} className="relative flex flex-col items-center text-center">
            <div
              className={cn(
                "flex items-center justify-center w-20 h-20 rounded-full border-4 bg-white shadow-md transition-all",
                isCompleted
                  ? "border-green-500"
                  : isCurrent
                  ? "border-purple-600"
                  : "border-gray-300"
              )}
            >
              <img
                src={imgPath}
                alt={step.name}
                className="h-12 w-12 object-contain"
              />
            </div>

            <div className="mt-3">
              <p
                className={cn(
                  "text-sm font-semibold",
                  isCurrent ? "text-purple-600" : isCompleted ? "text-green-600" : "text-gray-700"
                )}
              >
                {step.name}
              </p>
              <p className="text-xs text-gray-500">{step.description}</p>
            </div>
          </li>
        )
      })}
    </ol>
  )
}

export default Steps
