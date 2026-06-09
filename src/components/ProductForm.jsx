import { useState } from "react";

export default function ProductForm({ onAdd }) {
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [preco, setPreco] = useState("");
  const [estoque, setEstoque] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      nome.trim() === "" ||
      categoria.trim() === "" ||
      preco.trim() === "" ||
      estoque.trim() === ""
    ) {
      alert("Preencha todos os campos");
      return;
    }
    if (Number(preco) < 0) {
      alert("O preço não pode ser negativo");
      return;
    }

    if (Number(estoque) < 0) {
      alert("O estoque não pode ser negativo");
      return;
    }

    const novoProduto = {
      nome,
      categoria,
      preco: Number(preco),
      estoque: Number(estoque),
    };

    await onAdd(novoProduto);

    setNome("");
    setCategoria("");
    setPreco("");
    setEstoque("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-3xl shadow-xl mb-6"
    >
      <h2 className="text-2xl font-bold mb-4 text-orange-600">Novo Produto</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="border p-4 rounded-2xl"
        />
        <input
          type="text"
          placeholder="Categoria"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="border p-4  rounded-2xl"
        />
        <input
          type="number"
          placeholder="Preço"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          className="border p-4 rounded-2xl"
        />
        <input
          type="number"
          placeholder="Estoque"
          value={estoque}
          onChange={(e) => setEstoque(e.target.value)}
          className=" border p-4 rounded-2xl"
        />
      </div>

      <button className=" mt-4 bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 rounded-2xl">
        Salvar Produto
      </button>
    </form>
  );
}
