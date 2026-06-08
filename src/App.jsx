import { useEffect, useState } from "react";

import Header from "./components/Header";
import ProductForm from "./components/ProductForm";
import ProductCard from "./components/ProductCard";
import DashboardCard from "./components/DashboardCard";
import SearchBar from "./components/SearchBar";
import EditModal from "./components/EditModal";

import {
  listarProdutos,
  criarProduto,
  atualizarProduto,
  deletarProduto
} from "./services/produtosService";

export default function App() {

  const [produtos, setProdutos] = useState([]);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {

    try {
      const data = await listarProdutos();
      setProdutos(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function addProduct(produto) {
    try {

      const novoProduto = await criarProduto(produto);
      setProdutos([...produtos, novoProduto]);

    } catch (error) {
      console.error(error);
    }
  }

  function openEditModal(produto) {
    setSelectedProduct(produto);
    setIsModalOpen(true);
  }

  async function updateProduct(updatedProduct) {

    try {
      const produtoAtualizado = await atualizarProduto( updatedProduct.id, updatedProduct);
      const updated = produtos.map((item) => item.id === updatedProduct.id ? produtoAtualizado : item);

      setProdutos(updated);

    } catch (error) {
      console.error(error);
    }
  }

  async function deleteProduct(id) {
    const confirmDelete = confirm("Deseja excluir este produto?");

    if (!confirmDelete)
       return;

    try {
      await deletarProduto(id);
      setProdutos(produtos.filter((produto) => produto.id !== id));

    } catch (error) {
      console.error(error);
    }
  }

  const filteredProducts = produtos.filter((produto) => produto.nome.toLowerCase().includes(search.toLowerCase()));
  const totalProdutos = produtos.length;
  const valorEstoque = produtos.reduce((acc, item) => acc + (item.preco * item.estoque), 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 p-6">

      <div className="max-w-7xl mx-auto">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <DashboardCard titulo="Produtos" valor={totalProdutos}/>
          <DashboardCard titulo="Valor Estoque" valor={`R$ ${valorEstoque.toFixed(2)}`}/>
        </div>

        <ProductForm onAdd={addProduct}/>
        <SearchBar search={search} setSearch={setSearch}/>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((produto) => (<ProductCard key={produto.id} produto={produto} onDelete={deleteProduct}
              onEdit={openEditModal}/>
          ))}
        </div>
        
        <EditModal isOpen={isModalOpen} produto={selectedProduct} onClose={() => setIsModalOpen(false)}
          onUpdate={updateProduct}/>
      </div>
    </div>
  );
}