<script>
  import Marca from "$lib/assets/Marca.svelte";
  import { X, PlusCircle, MinusCircle } from 'lucide-svelte';

  let nome = 'Maçã';
  let preco = '2,29';
  let metrica = 'unidade';
  let img = '/src/lib/assets/maca.jpg';
  let alt = 'Várias maçãs vermelhas';
</script>

<section class="modal">
  <div class="modal__bg" aria-hidden="true"></div>
  <div class="modal__container container">
    <div class="card">
      <div class="imagem__container">
        <img src={img} alt={alt}>
      </div>

      <div class="conteudo">
        <h3 class="nome">{nome}</h3>

        <div class="info">
          <span class="preco">{preco}</span>
          <span class="separador"></span>
          <span class="metrica">{metrica}</span>
        </div>

        <div class="quantidade__container">
          <label for="quantidade">Quantidade</label>
          <input value="1" type="number" name="quantidade" id="quantidade">
          <div class="btns">
            <button><PlusCircle/></button>
            <button><MinusCircle/></button>
          </div>
          <button class="btn">Adicionar ao pedido</button>
        </div>

        <div class="marca">
          <Marca/>
        </div>
      </div>

      <button class="fechar" title="Fechar"><X/></button>
    </div>
  </div>
</section>

<style>
  .modal {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    display: flex;
  }
  .modal__bg {
    position: absolute;
    inset: 0;
    background: var(--modal);
    backdrop-filter: blur(4px);
  }
  .card {
    max-width: 600px;
    overflow: hidden;
    position: relative;
    z-index: 1;
  }
  .nome {
    font-size: calc(24 / 16 * 1rem);
  }
  .conteudo {
    padding: 24px;
    padding-bottom: 36px;
    background-color: var(--bg);
    position: relative;
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
  .quantidade__container {
    margin-top: 24px;
    display: flex;
    flex-wrap: wrap;
    gap: 4px 8px;
    grid-template-columns: repeat(3, 1fr);
    justify-content: start;
    align-items: center;
  }
  label {
    font-size: calc(14 / 16 * 1rem);
    grid-column: span 3;
    flex-basis: 100%;
  }
  input {
    font-size: calc(14 / 16 * 1rem);
    color: var(--principal);
    border: 2px solid var(--bg-2);
    background-color: transparent;
    cursor: pointer;
    text-align: center;
    height: 40px;
    width: 40px;
  }
  input::placeholder {
    color: var(--principal);
  }
  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  .btn {
    font-size: calc(14 / 16 * 1rem);
    background-color: var(--bg-2);
    padding: 12px 16px;
    margin-left: 16px;
    width: fit-content;
    transition: 125ms;
  }
  .btn:hover {
    background-color: var(--bg-hover);
  }
  .marca {
    position: absolute;
    right: 16px;
    bottom: 16px;
  }
  .fechar {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: var(--bg-2);
    position: absolute;
    top: 16px;
    right: 16px;
    transition: 125ms;
  }
  .fechar:hover {
    background-color: var(--bg-hover);
  }
  .imagem__container {
    position: relative;
  }
  .imagem__container img {
    aspect-ratio: 16/9;
    height: 400px;
    object-fit: cover;
    object-position: center;
  }
  .btns {
    display: flex;
    gap: 2px;
    flex-direction: column;
  }
</style>