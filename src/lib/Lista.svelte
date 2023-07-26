<script>
  import { ScrollText, BadgeDollarSign, UserCheck2, ExternalLink} from "lucide-svelte";
  import IconeWhatsapp from "$lib/assets/IconeWhatsapp.svelte";
</script>

<section class="conteudo">
  <div class="lista">
    <h2 class="titulo"><ScrollText/>
      <span>Lista</span>
    </h2>
   
    <div class="itens">
      <div class="item">
        <span class="nome">10x Maçã (R$ 2,29/unidade)</span>
        <span class="separador"></span>
      </div>
      <div class="item">
        <span class="nome">10x Batata (R$ 10,69/kg)</span>
        <span class="separador"></span>
      </div>
    </div>
  </div>

  <div class="total">
    <h2 class="titulo"><BadgeDollarSign/> Total</h2>
    <div class="itens">
      <p class="valor">R$ 22,90</p>
      <p class="valor">R$ 106,90</p>
      <p class="valor__total">R$ 129,80</p>
    </div>
  </div>

  <div class="dados">
    <h2 class="titulo"><UserCheck2/> Dados</h2>
    <div class="itens">
    </div>
  </div>

  <div class="enviar__container">
    <a href="/" class="enviar" target="_blank">Enviar pedido <IconeWhatsapp/> <ExternalLink/></a>
  </div>
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

  @media(hover: hover) {
    .enviar__container:hover .enviar {
      transform: translateY(-4px);
      transition: 125ms;
    }
  }
</style>