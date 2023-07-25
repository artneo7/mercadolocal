export const load = async ({fetch}) => {
  const pegarProdutos = async () => {
    const res = await fetch('http://mercadolocal.test/json/api/produtos');
    const produtos = await res.json();
    return produtos;
  }
  
  return {
    produtos: pegarProdutos()
  }
}
