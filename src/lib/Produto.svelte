<script>
  import padrao from "$lib/assets/maca.jpg"
  import { modal } from "$lib/stores";
  export let nome = 'Maçã';
  export let preco = '2,29';
  export let metrica = 'unidade';
  export let img = padrao;
  export let thumbnail = padrao;
  export let alt = 'Várias maçãs vermelhas';

  function abrirModal() {
    $modal.aberto = true;
    $modal.nome = nome;
    $modal.preco = preco;
    $modal.metrica = metrica;
    $modal.img = img;
    $modal.alt = alt;
  }
</script>

<button on:click={abrirModal} class="produto">
  <div class="produto__container">
    <img src={thumbnail} alt={alt}>
    <div class="conteudo">
      <h3 class="nome">{nome}</h3>
      <div class="info">
        <span class="preco">{preco}</span>
        <span class="separador"></span>
        <span class="metrica">{metrica}</span>
      </div>
    </div>
  </div>
</button>

<style>
  .produto__container {
    background-color: #fff;
    padding: 8px;
    display: grid;
    gap: 8px;
    grid-template-columns: 60px 1fr;
    transition: 250ms;
    will-change: transform;
  }
  img {
    aspect-ratio: 60/68;
    object-fit: cover;
  }
  .nome {
    display: flex;
    color: var(--principal);
    font-size: calc(14 / 16 * 1rem);
    text-align: initial;
  }
  .info {
    margin-top: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .preco {
    color: #fff;
    font-size: calc(14 / 16 * 1rem);
    background-color: var(--destaque);
    padding: 2px 8px;
    border-radius: 16px;
  }
  .separador {
    width: 36px;
    height: 2px;
    background-color: var(--bg-2);
  }
  .metrica {
    font-size: calc(14 / 16 * 1rem);
  }
</style>