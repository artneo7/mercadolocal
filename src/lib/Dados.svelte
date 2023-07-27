<script>
  import Formulario from "$lib/Formulario.svelte";
</script>

<section class="dados">
  <Formulario/>
</section>

<style>
  .dados {
    position: absolute;
    top: 0;
    right: 0;
    background-color: #fff;
    width: 50%;
    height: 100%;
    padding: 32px 24px;
  }

  @media(max-width: 1250px) {
    .dados {
      overflow-y: scroll;
    }
  }
  @media(max-width: 800px) {
    .dados {
      width: 100%;
    }
  }
</style>