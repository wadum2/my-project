import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const pallets = [
  { id: 1, name: "Amazon - Мікс техніки", price: "€500", image: "/amazon_pallet.jpg" },
  { id: 2, name: "Amazon - Електроніка", price: "€750", image: "/amazon_pallet.jpg" },
  { id: 3, name: "Amazon - Побутові товари", price: "€600", image: "/amazon_pallet2.jpg" },
];

export default function WholesalePallets() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-center mb-6">
        <img src="/logitrade_logo.png" alt="LogiTrade Logo" className="h-16" />
      </div>
      <h1 className="text-4xl font-bold text-center mb-6">Ласкаво просимо до LogiTrade!</h1>
      <p className="text-lg text-center mb-6">Ми пропонуємо високоякісні оптові палети від Amazon, які ідеально підходять для бізнесу будь-якого масштабу. У нас ви знайдете широкий асортимент продукції за вигідними цінами.</p>
      <p className="text-lg text-center mb-6">Завдяки багаторічному досвіду та прямим поставкам з Європи, ми гарантуємо високу якість товарів, швидку доставку та індивідуальний підхід до кожного клієнта.</p>
      
      <h2 className="text-2xl font-bold text-center mt-10 mb-6">Наші переваги</h2>
      <ul className="text-lg text-center mb-6 list-disc list-inside">
        <li>Прямі поставки з Європи</li>
        <li>Гарантована якість продукції</li>
        <li>Швидка та надійна доставка</li>
        <li>Конкурентоспроможні ціни</li>
        <li>Індивідуальний підхід до кожного клієнта</li>
      </ul>
      
      <h2 className="text-2xl font-bold text-center mt-10 mb-6">Мінуси інших постачальників</h2>
      <ul className="text-lg text-center mb-6 list-disc list-inside text-red-600">
        <li>Високі націнки та приховані комісії</li>
        <li>Тривалі терміни доставки</li>
        <li>Нестабільна якість продукції</li>
        <li>Обмежений асортимент</li>
        <li>Відсутність персонального підходу до клієнтів</li>
      </ul>
      
      <h2 className="text-2xl font-bold text-center mt-10 mb-6">Контакти</h2>
      <p className="text-lg text-center mb-6">Телефон: +380671423586</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pallets.map((pallet) => (
          <motion.div
            key={pallet.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-2xl overflow-hidden"
          >
            <Card>
              <img src={pallet.image} alt={pallet.name} className="w-full h-48 object-cover" />
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold">{pallet.name}</h2>
                <p className="text-gray-700">Ціна: {pallet.price}</p>
                <Button className="mt-4 w-full">Замовити</Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
