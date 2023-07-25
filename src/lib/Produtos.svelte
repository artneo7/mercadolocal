<script>
	import Produto from "$lib/Produto.svelte";

</script>
<section class="produtos">
  <Produto/>
  <Produto/>
</section>

<style>
  .produtos {
    margin-top: 24px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
  }
</style>