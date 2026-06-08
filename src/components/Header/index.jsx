import { ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white p-6 rounded-3xl shadow-xl mb-6">

      <h1 className=" flex gap-2 text-4xl font-bold text-orange-600">
        <ShoppingCart size={40}/> Mercearia Faculdade Catolica
      </h1>

      <p className="text-gray-500 mt-2">
        Controle de produtos e estoque
      </p>
      <p className="text-gray-500 ">Gerente Professor Gustavo</p>

    </header>
  );
}