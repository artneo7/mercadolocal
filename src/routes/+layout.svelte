<script>
  import '$lib/global.css';
  import '@fontsource/inter';
  import '@fontsource/short-stack';
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";
	import Modal from '$lib/Modal.svelte';
  import { dados } from "$lib/stores";
  import { onMount } from 'svelte';
  
  onMount(() => {
    // verificar dados no localStorage
    if (localStorage.getItem('dados')) {
      let data = JSON.parse(localStorage.getItem('dados'));
      $dados.nome = data.nome;
      $dados.email = data.email;
      $dados.cep = data.cep;
      $dados.numero = data.numero;
      $dados.endereco = data.endereco;
      $dados.bairro = data.bairro;
      $dados.cidade = data.cidade;
      $dados.estado = data.estado;
    }
  });
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