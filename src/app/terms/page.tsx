export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Общи условия</h1>
      <p className="text-gray-600 mb-4">
        Настоящите условия уреждат отношенията между <span className="font-semibold">CaseCraft</span> и потребителите на платформата.
      </p>

      <div className="space-y-6 text-gray-700">
        <section>
          <h2 className="text-2xl font-semibold mb-2">Поръчки</h2>
          <p>Всяка поръчка представлява оферта за покупка. CaseCraft може да откаже поръчка при липса на наличност или злоупотреба.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Плащания</h2>
          <p>Плащанията се извършват чрез Stripe. CaseCraft не съхранява информация за банкови карти.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Доставка</h2>
          <p>Доставките се извършват чрез куриер в срок от 2–5 работни дни. Разходите за доставка се добавят към крайната сума.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Отговорности</h2>
          <p>Потребителят носи отговорност за качените изображения. CaseCraft не носи отговорност за щети от неправилна употреба.</p>
        </section>
      </div>

      <p className="mt-8 text-sm text-gray-500">
        Последна актуализация: 2025 г.
      </p>
    </div>
  );
}
