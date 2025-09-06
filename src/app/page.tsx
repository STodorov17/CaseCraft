import { Icons } from "@/components/Icons"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import Phone from "@/components/Phone"
import { Star, Sparkles, Layers, Image as ImageIcon } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section>
  <MaxWidthWrapper className="pb-24 pt-16 lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16 lg:pt-28 xl:pt-36 lg:pb-52">

    {/* Phone preview в ляво */}
    <div className="flex justify-center lg:justify-end relative">
      <div className="relative w-64 md:w-80">
        <Phone className="w-full" imgSrc="/testimonials/1.jpg" />
      </div>
    </div>

    {/* Текст и CTA в дясно */}
    <div className="mt-10 lg:mt-0 flex flex-col justify-center px-6 lg:px-0 text-center lg:text-left">
      <h1 className="tracking-tight font-extrabold text-gray-900 text-5xl md:text-6xl lg:text-7xl leading-tight">
         Превърни своите{" "}
        <span className="bg-gradient-to-r from-purple-600 to-pink-500 px-2 text-white rounded-md">
          спомени
        </span>{" "}
        в{" "}
        <span className="bg-gradient-to-r from-pink-500 to-purple-600 px-2 text-white rounded-md">
          уникални калъфи
        </span>
      </h1>

      <p className="mt-6 text-lg max-w-prose text-gray-600">
        Качи любимата си снимка, избери стил и създай{" "}
        <span className="font-semibold text-gray-900">неповторим</span> калъф,
        който защитава телефона ти и пази спомените ти близо до теб.
      </p>

      {/* CTA бутон */}
      <div className="mt-8">
        <Link
          href="/configure/upload"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition"
        >
          Започни да създаваш
        </Link>
      </div>

      {/* Stars + Avatars */}
      <div className="mt-8 flex flex-col sm:flex-row items-center sm:items-start gap-5">
        {/* Avatars */}
        <div className="flex -space-x-4">
          <img className="h-12 w-12 rounded-full ring-2 ring-white object-cover" src="/users/user-4.jpg" alt="user" />
          <img className="h-12 w-12 rounded-full ring-2 ring-white object-cover" src="/users/user-1.png" alt="user" />
          <img className="h-12 w-12 rounded-full ring-2 ring-white object-cover" src="/users/user-2.png" alt="user" />
          <img className="h-12 w-12 rounded-full ring-2 ring-white object-cover" src="/users/user-5.jpg" alt="user" />
          <img className="h-12 w-12 rounded-full ring-2 ring-white object-cover" src="/users/user-3.jpg" alt="user" />
        </div>

        {/* Stars */}
        <div className="flex flex-col items-center sm:items-start">
          <div className="flex gap-1 mb-1">
              <Star className="h-5 w-5 text-purple-600 fill-purple-600" />
              <Star className="h-5 w-5 text-purple-600 fill-purple-600" />
              <Star className="h-5 w-5 text-purple-600 fill-purple-600" />
              <Star className="h-5 w-5 text-purple-600 fill-purple-600" />
              <Star className="h-5 w-5 text-purple-600 fill-purple-600" />
          </div>
          <p className="text-sm">
            <span className="font-semibold">1,250+</span> доволни клиенти
          </p>
        </div>
      </div>
    </div>
  </MaxWidthWrapper>
</section>


      {/* How it works section */}
      <section className="bg-slate-100 py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900">
             Как <span className="relative px-2">
              работи
              <Icons.brushstroke className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-3 text-pink-500" />
            </span>
          </h2>

          <div className="grid gap-12 sm:grid-cols-3">
            <div className="flex flex-col items-center text-center gap-4">
              <ImageIcon className="h-10 w-10 text-purple-600" />
              <h3 className="font-semibold text-lg">Качи своя снимка</h3>
              <p className="text-gray-600 text-sm">
                  Избери любим спомен или дизайн, за да започнеш създаването.
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-4">
              <Layers className="h-10 w-10 text-purple-600" />
              <h3 className="font-semibold text-lg">Отркий своя стил</h3>
              <p className="text-gray-600 text-sm">
                Избери материали, цветове и покрития за личен завършек.
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-4">
              <Sparkles className="h-10 w-10 text-purple-600" />
              <h3 className="font-semibold text-lg">Наслаждавай се и се похвали</h3>
              <p className="text-gray-600 text-sm">
                Получи своя калъф и го покажи с гордост.
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Most Loved section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-500 py-24 text-white">
        <MaxWidthWrapper className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            CaseCraft е най-обичаният производител на персонализирани калъфи в България
          </h2>
          <p className="mt-4 text-lg max-w-2xl">
            Хиляди клиенти ни се доверяват да превърнем спомените им в трайни дизайни.
  Висококачествени материали, бърза доставка и гарантирано удовлетворение.
          </p>

          {/* ⭐ Customers & Reviews */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-8">
            {/* Avatars */}
            <div className="flex -space-x-4">
              <img className="h-12 w-12 rounded-full ring-2 ring-white object-cover" src="/users/user-1.png" alt="user" />
              <img className="h-12 w-12 rounded-full ring-2 ring-white object-cover" src="/users/user-2.png" alt="user" />
              <img className="h-12 w-12 rounded-full ring-2 ring-white object-cover" src="/users/user-3.jpg" alt="user" />
              <img className="h-12 w-12 rounded-full ring-2 ring-white object-cover" src="/users/user-4.jpg" alt="user" />
              <img className="h-12 w-12 rounded-full ring-2 ring-white object-cover" src="/users/user-5.jpg" alt="user" />
            </div>

            {/* Stars & Text */}
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex gap-1 mb-2">
                <Star className="h-5 w-5 text-yellow-300 fill-yellow-300" />
                <Star className="h-5 w-5 text-yellow-300 fill-yellow-300" />
                <Star className="h-5 w-5 text-yellow-300 fill-yellow-300" />
                <Star className="h-5 w-5 text-yellow-300 fill-yellow-300" />
                <Star className="h-5 w-5 text-yellow-300 fill-yellow-300" />
              </div>
              <p className="text-sm md:text-base">
                Над <span className="font-semibold">1,250+</span> доволни клиенти
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>




      {/* CTA Section */}
      <section className="bg-slate-50 py-20 border-t border-gray-200">
        <MaxWidthWrapper>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left image */}
            <div className="flex justify-center md:justify-start">
              <img
                src="home-page.png" // <-- твоя снимка (пример: mockup с кейс)
                alt="Custom phone case"
                className="rounded-2xl shadow-lg w-full max-w-md object-cover"
              />
            </div>

            {/* Right content */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Готов ли си да създадеш своя първи продукт?
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-lg">
                Започни да проектираш своя уникален калъф още днес. Качи любимата си снимка,
  персонализирай стила и ние ще го превърнем в реалност.
              </p>
              <Link
                href="/configure/upload"
                className="mt-8 inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition"
              >
                Започни сега
              </Link>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>


      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-10">
        <MaxWidthWrapper className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-gray-600 text-sm">
            © 2024 CaseCraft, Inc. Всички права запазени.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-700">Политика за поверителност</a>
  <a href="#" className="hover:text-gray-700">Общи условия</a>
  <a href="#" className="hover:text-gray-700">Политика за интелектуална собственост</a>
          </div>
        </MaxWidthWrapper>
      </footer>
    </div >
  )
}
