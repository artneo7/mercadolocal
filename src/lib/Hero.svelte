<script>
  import img from '$lib/assets/hero.jpg'
</script>

<section class="hero">
  <img src={img} alt="Interior do Mercado Local">
</section>

<style>
  .hero {
    position: relative;
  }
  img {
    height: 360px;
    width: 100%;
    object-fit: cover;
  }
</style>