export default function IpPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">
        Политика за интелектуална собственост
      </h1>
      <p className="text-gray-600 mb-4">
        Тази политика урежда начина, по който <span className="font-semibold">CaseCraft</span> защитава авторските права и съдържанието, качено от потребителите.
      </p>

      <div className="space-y-6 text-gray-700">
        <section>
          <h2 className="text-2xl font-semibold mb-2">Авторски права върху изображения</h2>
          <p>Качените изображения остават собственост на потребителя. Той гарантира, че има право да ги използва.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Забранено съдържание</h2>
          <p>Не се допуска качване на съдържание, което нарушава авторски права, или е обидно, незаконно или дискриминационно.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Права на CaseCraft</h2>
          <p>CaseCraft използва качените изображения само за изработка и доставка на поръчаните продукти.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Нарушения</h2>
          <p>При установяване на нарушение, CaseCraft може да откаже поръчка, да блокира акаунт или да уведоми компетентните органи.</p>
        </section>
      </div>

      <p className="mt-8 text-sm text-gray-500">
        Последна актуализация: 2025 г.
      </p>
    </div>
  );
}
