<script>
  import Hero from "$lib/Hero.svelte";
	import Produtos from "$lib/Produtos.svelte";
	import Lista from "$lib/Lista.svelte";
  import { lista, dados } from "$lib/stores";
	import Dados from "$lib/Dados.svelte";
  export let data;
</script>

<div class="painel">
  <Hero/>

  {#if $lista.aberto}
  <Lista/>
  {/if}

  {#if $dados.aberto}
  <Dados/>
  {/if}
</div>

<Produtos produtos={data.produtos} />

<style>
  .painel {
    position: relative;
  }
</style>