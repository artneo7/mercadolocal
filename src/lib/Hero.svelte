<script>
  import img from "$lib/assets/hero.jpg"
  import Ornamento1 from "$lib/assets/Ornamento1.svelte";
  import Ornamento2 from "$lib/assets/Ornamento2.svelte";
</script>

<section class="hero">
  <img src={img} alt="Interior do Mercado Local">
  <div class="ornamentos">
    <Ornamento1/>
    <Ornamento2/>
  </div>
</section>