<script>
  import Hero from "$lib/Hero.svelte";
	import Produtos from "$lib/Produtos.svelte";
	import Lista from "$lib/Lista.svelte";
  import { lista } from "$lib/stores";
  export let data;
</script>

<div class="painel">
  <Hero/>

  {#if $lista.aberto}
  <Lista/>
  {/if}
</div>

<Produtos produtos={data.produtos} />

<style>
  .painel {
    position: relative;
  }
</style>