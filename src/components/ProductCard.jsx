export default function ProductCard({produto, onDelete, onEdit}) {

  return (
    <div className="bg-white p-5 rounded-3xl shadow-md hover:shadow-2xl transition duration-300">

      <div className=" flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{produto.nome}</h2>
          <p className="text-gray-500 mt-2">{produto.categoria}</p>
        </div>
        <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm">Estoque: {produto.estoque}</span>
      </div>

      <div className="mt-4">
        <p className="text-3xl font-bold text-green-600">R$ {produto.preco.toFixed(2)}</p>
      </div>

      <div className="flex gap-2 mt-5">

        <button onClick={() => onEdit(produto)}
          className="bg-yellow-400  hover:bg-yellow-500 transition px-4 py-2 rounded-xl">
          Editar
        </button>

        <button onClick={() => onDelete(produto.id)}
          className=" bg-red-500 hover:bg-red-600 transition text-white px-4 py-2 rounded-xl">
          Excluir
        </button>
      </div>
    </div>
  );
}