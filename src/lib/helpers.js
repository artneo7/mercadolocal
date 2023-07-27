// calcular valor preco * quantidade
export function calcularValor(preco, quantidade) {
  if (!preco && !quantidade) return;
 
  // alterar vírgula por ponto e transformar em número
  preco = Number(preco.replace(',', '.'));

  // multiplicar
  let valor = preco * quantidade;

  // transformar em string
  valor = valor.toFixed(2);

  // trocar ponto por vírgula
  valor = valor.replace('.', ',');

  return valor;
}

// WhatsaApp
export function enviarWhatsApp(dados, produtos, total) {
  if (!dados || !produtos || !total) return;

  let conteudo =
  `👤 ${dados.nome}\n ${dados.endereco}, ${dados.numero}, ${dados.bairro}, ${dados.cidade}, ${dados.estado}`;

  // preparar conteudo para link do WhatsApp
  conteudo = encodeURIComponent(conteudo);
  
  return `https://api.whatsapp.com/send?phone=5519981128000&text=${conteudo}`;
}