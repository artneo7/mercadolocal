<script>
  import { ScrollText, BadgeDollarSign, UserCheck2, ExternalLink, X} from "lucide-svelte";
  import IconeWhatsapp from "$lib/assets/IconeWhatsapp.svelte";
  import { lista, dados } from "$lib/stores";
  import { calcularValor, enviarWhatsApp } from "$lib/helpers";

  // calcular total do pedido
  let total = 0;
  function calcularTotal() {
    total = 0;
    $lista.produtos.forEach(produto => {
      // transformar preço em número
      let preco = Number(produto.preco.replace(',', '.'));
      
      // somar ao total
      total = total + preco * produto.quantidade;
    });

    // transformar em string
    total = total.toFixed(2).replace('.', ',');
  }
  
  // toda vez que o pedido atualiza, recalcular o total
  $: $lista.produtos.length && calcularTotal();

  // abrir dados
  function abrirDados() {
    $dados.aberto = true;
  }

  // resetar lista
  function resetarLista() {
    $lista.produtos = [];
    total = 0;
  }
</script>

<section class="conteudo">
  <div class="lista">
    <h2 class="titulo"><ScrollText/>
      <span>Lista</span>
      {#if $lista.produtos.length}
      <button on:click={resetarLista} class="resetar" title="Limpar lista"><X size={14} /> resetar</button>
      {/if}
    </h2>
   
    {#if $lista.produtos.length}
    <div class="itens">
      {#each $lista.produtos as item}
      <div class="item">
        <span class="nome">{item.quantidade}x {item.nome} (R$ {item.preco}/{item.metrica})</span>
        <span class="separador"></span>
      </div>
      {/each}
    </div>
    {:else}
    <p class="vazio">✍️ Nenhum item na lista ainda…</p>
    {/if}
  </div>

  <div class="total">
    {#if $lista.produtos.length}
    <h2 class="titulo"><BadgeDollarSign/> Total</h2>
    <div class="itens">
      {#each $lista.produtos as item}
      <p class="valor">R$ {calcularValor(item.preco, item.quantidade)}</p>
      {/each}
      <p class="valor__total">R$ {total}</p>
    </div>
    {/if}
  </div>

  <div class="dados">
    <h2 class="titulo"><UserCheck2/> Dados</h2>
    <div class="itens">
      {#if $dados.logado}
      <p>{$dados.nome}</p>
      <p>{$dados.endereco}, {$dados.numero}</p>
      <p>{$dados.cidade}, {$dados.estado}</p>
      <p>{$dados.cep}</p>
      {:else}
      <button on:click={abrirDados} class="btn">Insira os seus dados para enviar o pedido</button>
      {/if}
    </div>
  </div>

  {#if $lista.produtos.length && $dados.logado}
  <div class="enviar__container">
    <a href={enviarWhatsApp($dados, $lista.produtos, total)} class="enviar" target="_blank">Enviar pedido <IconeWhatsapp/> <ExternalLink/></a>
  </div>
  {/if}
</section>

<style>
  .conteudo {
    font-family: var(--fonte-secondaria);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: start;
    gap: 24px 12px;
    padding: 32px;
    background-color: var(--lista);
    position: absolute;
    inset: 0;
    overflow: hidden;
  }
  .lista {
    grid-column: span 2;
  }
  .titulo {
    display: flex;
    align-items: flex-start;
    gap: 6px;
  }
  .titulo span {
    position: relative;
    top: 2px;
  }
  .itens {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .item {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .nome {
    display: block;
    flex-shrink: 0;
    font-size: calc(18 / 16 * 1rem);
    max-width: 360px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .separador {
    width: 100%;
    height: 2px;
    border: 1px dashed var(--principal-2);
  }
  .valor {
    font-size: calc(18 / 16 * 1rem);
  }
  .valor__total {
    padding-top: 8px;
    border-top: 2px solid;
    max-width: 160px;
    font-size: calc(18 / 16 * 1rem);
  }
  .enviar__container {
    position: absolute;
    bottom: 0;
    right: 8px;
    height: 52px;
    display: flex;
    border-bottom: 2px dashed var(--principal-2);
    transition: 250ms;
    background-color: var(--bg-2)
  }
  .enviar {
    padding: 0px 16px;
    background-color: var(--bg-2);
    display: flex;
    gap: 8px;
    align-items: center;
    font-family: var(--fonte-primaria);
    transition: 250ms;
  }
  .vazio {
    margin-top: 16px;
  }
  .btn {
    font-family: var(--fonte-primaria);
    font-size: calc(14 / 16 * 1rem);
    background-color: var(--bg-2);
    padding: 12px 16px;
    align-self: flex-start;
    transition: 125ms;
  }
  .btn:hover {
    background-color: var(--bg-hover);
  }
  .resetar {
    font-family: var(--fonte-primaria);
    display: flex;
    gap: 4px;
    border: 1px solid var(--principal-2);
    border-radius: 16px;
    align-items: center;
    font-size: calc(12 / 16 * 1rem);
    padding: 4px 8px;
    margin-left: 8px;
    opacity: .8;
    transition: 125ms;
  }
  .resetar:hover {
    opacity: 1;
  }

  @media(hover: hover) {
    .enviar__container:hover .enviar {
      transform: translateY(-4px);
      transition: 125ms;
    }
  }

  @media(max-width: 1000px) {
    .conteudo {
      grid-template-columns: 1fr;
      overflow-y: scroll;
      margin: -1px;
    }
    .lista {
      grid-column: unset;
    }
    .enviar__container {
      position: unset;
      width: fit-content;
    }
    .separador {
      display: none;
    }
    .nome {
      flex-shrink: unset;
    }
  }
</style>