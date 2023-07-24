<script>
  import '$lib/global.css';
  import '@fontsource/inter';
  import '@fontsource/short-stack';
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer.svelte";
</script>

<Header/>
<slot/>
<Footer/>