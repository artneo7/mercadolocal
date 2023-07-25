<script>
  import Hero from "$lib/Hero.svelte";
	import Produtos from "$lib/Produtos.svelte";

  export let data;
</script>

<div class="painel">
  <Hero/>
</div>

<Produtos produtos={data.produtos} />

<style>
  .painel {
    position: relative;
  }
</style>