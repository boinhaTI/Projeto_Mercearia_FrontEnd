const API_URL = "http://localhost:3002/produtos";

export async function listarProdutos() {

  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(
      "Erro ao listar produtos"
    );
  }

  const data = await response.json();

  return data;
}

export async function criarProduto(
  produto
) {

  const response = await fetch(
    API_URL,
    {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json"
      },
      body: JSON.stringify(produto)
    }
  );

  if (!response.ok) {
    throw new Error(
      "Erro ao criar produto"
    );
  }

  const data = await response.json();

  return data;
}

export async function atualizarProduto(
  id,
  dadosAtualizados
) {

  const response = await fetch(
    `${API_URL}/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type":
          "application/json"
      },
      body: JSON.stringify(
        dadosAtualizados
      )
    }
  );

  if (!response.ok) {
    throw new Error(
      "Erro ao atualizar produto"
    );
  }

  const data = await response.json();

  return data;
}

export async function deletarProduto(
  id
) {

  const response = await fetch(
    `${API_URL}/${id}`,
    {
      method: "DELETE"
    }
  );

  if (!response.ok) {
    throw new Error(
      "Erro ao deletar produto"
    );
  }

  return true;
}