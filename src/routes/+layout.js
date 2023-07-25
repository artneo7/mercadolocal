import { PUBLIC_URL_DATABASE } from "$env/static/public";

export const load = async ({fetch}) => {
  const pegarProdutos = async () => {
    const res = await fetch(`${PUBLIC_URL_DATABASE}/json/api/produtos`);
    const produtos = await res.json();
    return produtos;
  }
  
  return {
    produtos: pegarProdutos()
  }
}
