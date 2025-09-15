export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">
        Политика за поверителност
      </h1>
      <p className="text-gray-600 mb-4">
        Тази политика описва как <span className="font-semibold">CaseCraft</span> събира, използва и съхранява лични данни
        на своите потребители в съответствие с GDPR (Общ регламент относно защитата на данните).
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Събиране на данни</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Име, имейл, адрес за доставка, телефон.</li>
        <li>Данни за транзакции чрез Stripe (без съхранение на номера на карти).</li>
        <li>IP адрес, браузър, бисквитки.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Използване на данни</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>За обработка и доставка на поръчки.</li>
        <li>За комуникация с клиента при проблеми или въпроси.</li>
        <li>За подобряване на качеството на услугата.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Права на потребителя</h2>
      <p className="text-gray-600 mb-4">
        Имате право на достъп, корекция и изтриване на вашите лични данни, както и да поискате ограничаване на обработката.
      </p>

      <p className="mt-8 text-gray-500 text-sm">
        За въпроси: <a href="mailto:support@casecraft.com" className="text-purple-600 hover:underline">support@casecraft.com</a>
      </p>
    </div>
  );
}
