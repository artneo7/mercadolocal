<script>
  import Hero from "$lib/Hero.svelte";
	import Produtos from "$lib/Produtos.svelte";
	import Lista from "$lib/Lista.svelte";

  export let data;
</script>

<div class="painel">
  <Hero/>
  <Lista/>
</div>

<Produtos produtos={data.produtos} />

<style>
  .painel {
    position: relative;
  }
</style>