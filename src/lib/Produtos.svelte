<script>
	import Produto from "$lib/Produto.svelte";

  export let produtos;
</script>

{#if produtos}
<section class="produtos">
  {#each produtos as produto}
  <Produto nome={produto.nome} preco={produto.preco} metrica={produto.metrica} thumbnail={produto.thumbnail} alt={produto.alt} />
  {/each}
</section>
{/if}

<style>
  .produtos {
    margin-top: 24px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
  }
</style>