<script>
	import Produto from "$lib/Produto.svelte";

</script>
<section class="produtos">
  <Produto/>
  <Produto nome="Blueberry" preco="18,20" metrica="100g" thumbnail="src/lib/assets/blueberry.jpg" alt="Porção de blueberries" />
</section>

<style>
  .produtos {
    margin-top: 24px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
  }
</style>