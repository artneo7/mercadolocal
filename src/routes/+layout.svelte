<script>
  import '$lib/global.css';
  import '@fontsource/inter';
  import '@fontsource/short-stack';
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";
	import Modal from '$lib/Modal.svelte';
</script>

<div class="app">
  <Header/>
  <main class="main">
    <div class="main__container container">
      <slot/>
    </div>
  </main>
  <Footer/>
</div>

<Modal/>

<style>
  .app {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  main {
    margin-bottom: auto;
  }
</style>