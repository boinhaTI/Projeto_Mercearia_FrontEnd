import { useEffect, useState } from "react";

export default function EditModal({ isOpen, produto, onClose, onUpdate }) {
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [preco, setPreco] = useState("");
  const [estoque, setEstoque] = useState("");

  useEffect(() => {
    if (produto) {
      setNome(produto.nome);
      setCategoria(produto.categoria);
      setPreco(produto.preco);
      setEstoque(produto.estoque);
    }
  }, [produto]);

  async function handleSubmit(e) {
    e.preventDefault();
    

    await onUpdate({
      ...produto,
      nome,
      categoria,
      preco: Number(preco),
      estoque: Number(estoque),
    });

    onClose();
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-3xl w-[500px]">
        <h2 className="text-2xl font-bold mb-4">Editar Produto</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}
            className="border p-4 rounded-2xl"/>

          <input type="text" value={categoria} onChange={(e) => setCategoria(e.target.value)}
            className="border p-4 rounded-2xl"/>

          <input type="number" value={preco} onChange={(e) => setPreco(e.target.value)}
            className=" border p-4 rounded-2xl"/>

          <input type="number" value={estoque} onChange={(e) => setEstoque(e.target.value)}
            className=" border p-4 rounded-2xl"/>

          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="  bg-gray-400 text-white px-4 py-2 rounded-xl">Cancelar</button>
            <button className=" bg-green-600 text-white px-4 py-2 rounded-xl">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
